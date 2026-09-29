import { createServer, type IncomingMessage, type Server, type ServerResponse } from "node:http";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { env } from "../../src/config/env.js";
import { GroqProvider, OpenAIProvider } from "../../src/modules/assistant/provider.client.js";

// There is no Groq key in this environment, so the provider is pointed at a
// local server that impersonates the API. This checks the bytes we put on the
// wire, which is the part a typecheck cannot see: the base URL, the auth
// header, the model, and which of the two token parameter names we send.

type Captured = {
  url: string;
  authorization: string | undefined;
  contentType: string | undefined;
  body: Record<string, unknown>;
};

let server: Server;
let baseUrl: string;
let lastRequest: Captured | null = null;

function writeSse(res: ServerResponse, chunks: string[]): void {
  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
  });
  for (const chunk of chunks) {
    res.write(`data: ${JSON.stringify({ id: "1", object: "chat.completion.chunk", choices: [{ index: 0, delta: { content: chunk } }] })}\n\n`);
  }
  res.write("data: [DONE]\n\n");
  res.end();
}

beforeAll(async () => {
  server = createServer((req: IncomingMessage, res: ServerResponse) => {
    let raw = "";
    req.on("data", (c) => (raw += c));
    req.on("end", () => {
      lastRequest = {
        url: req.url ?? "",
        authorization: req.headers.authorization,
        contentType: req.headers["content-type"] as string | undefined,
        body: raw ? (JSON.parse(raw) as Record<string, unknown>) : {},
      };
      writeSse(res, ["Hello", " from", " Groq"]);
    });
  });

  await new Promise<void>((resolve) => server.listen(0, "127.0.0.1", resolve));
  const address = server.address();
  if (address === null || typeof address === "string") throw new Error("no port");
  baseUrl = `http://127.0.0.1:${address.port}/openai/v1`;
});

afterAll(async () => {
  await new Promise<void>((resolve) => server.close(() => resolve()));
});

const req = {
  system: "You are a travel guide.",
  messages: [{ role: "user" as const, content: "Tell me about Lalibela." }],
  maxOutputTokens: 256,
  signal: new AbortController().signal,
};

async function collect(iterable: AsyncIterable<{ text: string }>): Promise<string> {
  let out = "";
  for await (const chunk of iterable) out += chunk.text;
  return out;
}

describe("Groq provider request shape", () => {
  beforeAll(() => {
    // The provider reads the base URL at construction, so override before use.
    (env as unknown as Record<string, unknown>).GROQ_BASE_URL = baseUrl;
    (env as unknown as Record<string, unknown>).GROQ_API_KEY = "gsk_test_key";
  });

  it("assembles the chat completions path from the configured base URL", async () => {
    await collect(new GroqProvider("llama-3.3-70b-versatile").streamChat(req));
    expect(lastRequest?.url).toBe("/openai/v1/chat/completions");
  });

  it("sends the key as a bearer token", async () => {
    await collect(new GroqProvider("llama-3.3-70b-versatile").streamChat(req));
    expect(lastRequest?.authorization).toBe("Bearer gsk_test_key");
  });

  it("sends JSON", async () => {
    await collect(new GroqProvider("llama-3.3-70b-versatile").streamChat(req));
    expect(lastRequest?.contentType).toContain("application/json");
  });

  it("sends the model that was requested", async () => {
    await collect(new GroqProvider("llama-3.3-70b-versatile").streamChat(req));
    expect(lastRequest?.body.model).toBe("llama-3.3-70b-versatile");
  });

  // Groq documents max_tokens. Sending max_completion_tokens instead is a 400
  // on some deployments, so this is the assertion that matters most here.
  it("uses max_tokens, not max_completion_tokens", async () => {
    await collect(new GroqProvider("llama-3.3-70b-versatile").streamChat(req));
    expect(lastRequest?.body.max_tokens).toBe(256);
    expect(lastRequest?.body).not.toHaveProperty("max_completion_tokens");
  });

  it("asks for a stream", async () => {
    await collect(new GroqProvider("llama-3.3-70b-versatile").streamChat(req));
    expect(lastRequest?.body.stream).toBe(true);
  });

  it("puts the system prompt first, then the turns", async () => {
    await collect(new GroqProvider("llama-3.3-70b-versatile").streamChat(req));
    expect(lastRequest?.body.messages).toEqual([
      { role: "system", content: "You are a travel guide." },
      { role: "user", content: "Tell me about Lalibela." },
    ]);
  });

  it("does not send the parameters Groq rejects", async () => {
    // Groq 400s on these rather than ignoring them, so sending one by accident
    // turns every request into a failure.
    await collect(new GroqProvider("llama-3.3-70b-versatile").streamChat(req));
    for (const rejected of ["logprobs", "logit_bias", "top_logprobs", "n"]) {
      expect(lastRequest?.body).not.toHaveProperty(rejected);
    }
  });

  it("streams the deltas back in order", async () => {
    const text = await collect(new GroqProvider("llama-3.3-70b-versatile").streamChat(req));
    expect(text).toBe("Hello from Groq");
  });
});

describe("OpenAI provider request shape", () => {
  beforeAll(() => {
    (env as unknown as Record<string, unknown>).OPENAI_API_KEY = "sk_test_key";
  });

  // The two providers are the same class, so a change to one has to keep the
  // other correct. OpenAI's newer models reject the legacy name.
  it("still uses max_completion_tokens", () => {
    const provider = new OpenAIProvider("gpt-4o-mini");
    // Constructed through the same base class, so assert the field it holds.
    expect(provider).toBeInstanceOf(OpenAIProvider);
    expect((provider as unknown as { tokenParam: string }).tokenParam).toBe(
      "max_completion_tokens",
    );
  });
});
