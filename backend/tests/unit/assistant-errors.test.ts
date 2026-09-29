import { describe, it, expect } from "vitest";
import { publicErrorMessage } from "../../src/modules/assistant/assistant.routes.js";
import { ProviderError } from "../../src/modules/assistant/provider.client.js";
import { HttpError } from "../../src/middleware/error.middleware.js";

// Every upstream error collapses into one sentence a visitor can act on, and the
// worst case is a message that sends them somewhere the fault is not. An
// assistant stuck on a 404 for a model the account cannot call was reporting
// "temporarily unavailable", which reads as a network blip and sent a real
// debugging session down the wrong path. So the statuses an operator can fix get
// their own wording.
describe("publicErrorMessage", () => {
  it("names the model when the provider 404s, instead of implying a blip", () => {
    const message = publicErrorMessage(new ProviderError(404, false, "model does not exist"));
    expect(message).toContain("misconfigured");
    expect(message).toContain(process.env.ASSISTANT_MODEL ?? "gpt-oss-120b");
    expect(message).not.toContain("temporarily unavailable");
  });

  it("blames the key on 401 and 403", () => {
    for (const status of [401, 403]) {
      const message = publicErrorMessage(new ProviderError(status, false, "bad key"));
      expect(message).toContain("rejected the API key");
      expect(message).not.toContain("temporarily unavailable");
    }
  });

  it("keeps quota and timeout distinct, since they need different responses", () => {
    expect(publicErrorMessage(new ProviderError(429, false, "quota"))).toContain("usage limit");
    expect(publicErrorMessage(new ProviderError(408, false, "timeout"))).toContain("took too long");
  });

  it("falls back to a generic sentence for statuses the visitor cannot act on", () => {
    expect(publicErrorMessage(new ProviderError(503, true, "high demand"))).toContain(
      "temporarily unavailable",
    );
  });

  it("never leaks the upstream body, which is the whole point of the mapping", () => {
    const secret = "sk-live-DO-NOT-LEAK-abc123";
    for (const status of [400, 401, 404, 429, 500, 503]) {
      expect(publicErrorMessage(new ProviderError(status, false, secret))).not.toContain(secret);
    }
  });

  it("passes an HttpError through, since those are already visitor-safe", () => {
    expect(publicErrorMessage(new HttpError(400, "Validation failed"))).toBe("Validation failed");
  });

  it("still degrades safely for an unknown throw", () => {
    expect(publicErrorMessage(new Error("ECONNRESET at 10.0.0.5"))).toContain("temporarily unavailable");
    expect(publicErrorMessage("a bare string")).toContain("temporarily unavailable");
  });
});
