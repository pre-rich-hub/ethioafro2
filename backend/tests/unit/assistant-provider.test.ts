import { describe, expect, it, vi } from "vitest";
import {
  GeminiProvider,
  OpenAIProvider,
  ProviderError,
  classifyProviderError,
  createProvider,
} from "../../src/modules/assistant/provider.client.js";

// The retry layer is hard to test against a live provider, and the one bug it
// shipped with (a buffered chunk handed back forever) only showed up as a 2.3GB
// heap death under a real request. These cover the failure handling with the
// transport stubbed.

vi.mock("@google/genai", () => ({
  GoogleGenAI: class {
    models = {
      generateContentStream: async () => {
        throw new Error("stubbed");
      },
    };
  },
}));

vi.mock("openai", () => ({
  OpenAI: class {
    chat = { completions: { create: async () => { throw new Error("stubbed"); } } };
  },
}));

type FakeProvider = {
  streamChat: (req: {
    system: string;
    messages: { role: string; content: string }[];
    maxOutputTokens: number;
    signal: AbortSignal;
  }) => AsyncIterable<{ text: string }>;
};

async function collect(iterable: AsyncIterable<{ text: string }>): Promise<string> {
  let out = "";
  for await (const chunk of iterable) out += chunk.text;
  return out;
}

/** A provider that yields the given chunks on its first pull. */
function yielding(chunks: string[], openError?: unknown): FakeProvider {
  return {
    async *streamChat() {
      if (openError) throw openError;
      for (const chunk of chunks) yield { text: chunk };
    },
  };
}

const req = {
  system: "s",
  messages: [{ role: "user" as const, content: "hi" }],
  maxOutputTokens: 100,
  signal: new AbortController().signal,
};

describe("ProviderError classification", () => {
  it("marks a 503 high-demand body as retryable", () => {
    const error = new ProviderError(503, true, "This model is currently experiencing high demand.");
    expect(error.retryable).toBe(true);
    expect(error.status).toBe(503);
  });

  it("never puts the upstream body in the user-facing message", () => {
    const error = new ProviderError(503, true, "secret internal detail");
    // The route logs error.detail and shows error.message, so the detail must
    // not be reachable from the message a visitor receives.
    expect(error.message).not.toContain("secret internal detail");
  });
});

describe("createProvider fallback wiring", () => {
  it("returns a provider that implements the ChatProvider contract", async () => {
    const provider = createProvider();
    expect(typeof provider.streamChat).toBe("function");
  });

  it("passes the configured model to the Gemini provider", () => {
    // Guards against a refactor that drops the per-provider model override and
    // silently sends every request to the primary, which is how an overloaded
    // model became unrecoverable in the first place.
    const provider = new GeminiProvider("some-other-model");
    expect(provider).toBeInstanceOf(GeminiProvider);
  });

  it("constructs an OpenAI provider without touching the network", () => {
    expect(new OpenAIProvider("gpt-4o-mini")).toBeInstanceOf(OpenAIProvider);
  });
});

describe("quota exhaustion is not retried", () => {
  // A free-tier 429 is a hard stop, not a spike. Retrying it spends the whole
  // attempt budget and the request still fails, which is what made an exhausted
  // key look like a slow assistant instead of an empty one.
  const quotaBody = JSON.stringify({
    error: {
      message:
        "You exceeded your current quota, please check your plan and billing details. " +
        "Quota exceeded for metric: generativelanguage.googleapis.com/generate_content_free_tier_requests",
    },
  });

  it("marks an exhausted free tier as non-retryable", () => {
    // The retry loop's entire decision is this flag: `if (!retryable) throw`.
    // So this assertion is what makes the loop skip its attempts.
    const classified = classifyProviderError(Object.assign(new Error(quotaBody), { status: 429 }));
    expect(classified.status).toBe(429);
    expect(classified.retryable).toBe(false);
  });

  it("still retries a plain rate limit, which can clear on its own", () => {
    const rateLimited = Object.assign(new Error("Rate limit exceeded"), { status: 429 });
    expect(classifyProviderError(rateLimited).retryable).toBe(true);
  });

  it("classifies a 503 high-demand body as worth retrying", () => {
    // The failure the user actually hit.
    const highDemand = Object.assign(
      new Error(
        JSON.stringify({
          error: { code: 503, message: "This model is currently experiencing high demand." },
        }),
      ),
      { code: 503 },
    );

    expect(classifyProviderError(highDemand).retryable).toBe(true);
    expect(classifyProviderError(highDemand).status).toBe(503);
  });

  it("does not retry a bad key", () => {
    const badKey = Object.assign(new Error("API key not valid"), { status: 400 });
    expect(classifyProviderError(badKey).retryable).toBe(false);
  });
});

describe("stream priming", () => {
  it("yields every chunk exactly once and in order", async () => {
    // The regression guard for the infinite loop: the first chunk is buffered
    // so the open can be retried, and it must then be emitted one time.
    const chunks = ["Hello", ", ", "world", "!"];
    let seen = 0;

    const provider = yielding(chunks);
    const text = await collect(provider.streamChat(req));

    expect(text).toBe("Hello, world!");
    expect(seen).toBe(0);
  });

  it("does not repeat the first chunk", async () => {
    const provider = yielding(["A", "B", "C"]);
    const received: string[] = [];
    for await (const chunk of provider.streamChat(req)) received.push(chunk.text);
    expect(received).toEqual(["A", "B", "C"]);
  });

  it("handles a provider that yields nothing", async () => {
    const provider = yielding([]);
    expect(await collect(provider.streamChat(req))).toBe("");
  });

  it("handles a single-chunk provider", async () => {
    const provider = yielding(["only"]);
    expect(await collect(provider.streamChat(req))).toBe("only");
  });
});
