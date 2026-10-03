import { describe, it, expect } from "vitest";
import { BUSINESS_INFO, NO_INVENTED_FACTS } from "../../src/modules/assistant/business-info.js";
import { CatalogContextBuilder } from "../../src/modules/assistant/context-builder.js";

// The catalog only ever held tours, destinations and journal posts, so the
// questions visitors actually ask were unanswerable by construction and every
// reply collapsed into the same contact-form deflection. These pin the two
// things that fix that, since both are prompt text and prompt text rots
// silently: that the operating facts are present, and that the escape hatch
// still exists for questions nothing covers.
describe("business info grounding", () => {
  it("carries the booking and payment terms the site publishes", () => {
    expect(BUSINESS_INFO).toContain("30% deposit");
    expect(BUSINESS_INFO).toContain("60 days before departure");
    expect(BUSINESS_INFO).toMatch(/Visa, Mastercard/);
    expect(BUSINESS_INFO).toMatch(/US dollars/);
  });

  it("carries every cancellation tier, not a vague summary", () => {
    // A grounded assistant that invents a refund window is worse than one that
    // admits ignorance, so each tier is asserted by its distinguishing figure.
    expect(BUSINESS_INFO).toContain("USD 150");
    expect(BUSINESS_INFO).toContain("up to 50%");
    expect(BUSINESS_INFO).toContain("up to 25%");
    expect(BUSINESS_INFO).toContain("non-refundable");
  });

  it("carries real contact routes rather than only a form link", () => {
    expect(BUSINESS_INFO).toContain("+1909-450-7246");
    expect(BUSINESS_INFO).toContain("info@simienethiopiatours.com");
    expect(BUSINESS_INFO).toContain("Monday to Saturday");
  });

  it("still forbids inventing tours, prices and policies", () => {
    expect(NO_INVENTED_FACTS).toMatch(/Never invent a tour, a price, a policy/);
  });

  it("tells the model when it may use general travel knowledge", () => {
    expect(NO_INVENTED_FACTS).toMatch(/general travel guidance/);
    expect(NO_INVENTED_FACTS).toMatch(/general advice rather than catalog detail/);
  });

  it("keeps a decline path for questions nothing covers", () => {
    expect(NO_INVENTED_FACTS).toMatch(/Only when neither the catalog nor the business information/);
  });

  it("does not let the model confirm a booking on its own", () => {
    expect(NO_INVENTED_FACTS).toMatch(/Never confirm bookings/);
  });
});

describe("catalog context with nothing seeded", () => {
  it("reports empty rather than throwing, so an empty database still serves", async () => {
    // This is the state the assistant is in right now: 0 tours, 0 destinations,
    // 0 posts. It has to produce a usable prompt rather than fall over, because
    // a storefront with no seeded data is the normal state on day one.
    const empty = { tour: { findMany: async () => [] },
                    destination: { findMany: async () => [] },
                    blog: { findMany: async () => [] } };
    const context = await new CatalogContextBuilder(empty as never).build();
    const text = context.sections.join("\n");

    // Headings with no rows under them. The model has to cope with this, and
    // the prompt rules are what stop it inventing a tour to fill the gap.
    expect(text).toContain("## Tour packages");
    expect(text).toContain("## Destinations");
    expect(text).toContain("## Travel journal");
    expect(context.truncated).toBe(false);
    expect(context.tokenEstimate).toBeGreaterThan(0);
  });

  it("renders a tour's array fields as labelled lines rather than raw JSON", async () => {
    // Raw JSON burns context on punctuation and reads badly in the prompt.
    const one = {
      tour: { findMany: async () => [{ tourName: "Simien Trek", overview: "Five days on the rim.",
        included: JSON.stringify(["Guide", "Lunch"]), excluded: "[]", itinerary: "[]" }] },
      destination: { findMany: async () => [] },
      blog: { findMany: async () => [] },
    };
    const context = await new CatalogContextBuilder(one as never).build();
    const text = context.sections.join("\n");
    expect(text).toContain("tourName: Simien Trek");
    expect(text).toContain("- Guide");
    expect(text).toContain("- Lunch");
    expect(text).not.toContain('"Guide"');
  });
});
