import { describe, expect, it } from "vitest";
import { buildTourWhere } from "../../src/modules/public/public.service.js";
import { toursQuerySchema } from "../../src/modules/public/public.validation.js";

function query(raw: Record<string, unknown>) {
  return toursQuerySchema.parse(raw);
}

describe("toursQuerySchema", () => {
  it("defaults to the first page with a 20 item limit", () => {
    const parsed = query({});
    expect(parsed.page).toBe(1);
    expect(parsed.limit).toBe(20);
  });

  it("coerces query strings to numbers", () => {
    const parsed = query({ page: "3", limit: "50", priceMin: "1000" });
    expect(parsed.page).toBe(3);
    expect(parsed.limit).toBe(50);
    expect(parsed.priceMin).toBe(1000);
  });

  it("caps the limit at 100 so one request cannot pull the whole table", () => {
    expect(() => query({ limit: "5000" })).toThrow();
  });

  it("rejects a page below one", () => {
    expect(() => query({ page: "0" })).toThrow();
  });

  it("strips unknown keys instead of failing, so a new client filter is safe", () => {
    const parsed = query({ limit: "5", somethingNew: "x" });
    expect(parsed.limit).toBe(5);
    expect(parsed).not.toHaveProperty("somethingNew");
  });
});

describe("buildTourWhere", () => {
  it("is empty when no filter is supplied", () => {
    expect(buildTourWhere(query({}))).toEqual({});
  });

  it("maps the featured flag to a boolean", () => {
    expect(buildTourWhere(query({ featured: "true" })).isFeatured).toBe(true);
    expect(buildTourWhere(query({ featured: "false" })).isFeatured).toBe(false);
  });

  // A tour reaches a destination through the legacy destinationId column and
  // through the junction table. Filtering on one alone would drop tours
  // linked only the other way.
  it("matches a destination through either the legacy column or the junction", () => {
    const where = buildTourWhere(query({ destinationSlug: "gondar" }));
    expect(where.OR).toEqual([
      { destination: { slug: "gondar" } },
      { destinations: { some: { destination: { slug: "gondar" } } } },
    ]);
  });

  it("filters by category through the junction", () => {
    const where = buildTourWhere(query({ categorySlug: "trekking" }));
    expect(where.categories).toEqual({ some: { category: { slug: "trekking" } } });
  });

  it("searches name and overview case-insensitively", () => {
    const where = buildTourWhere(query({ q: "simien" }));
    expect(where.AND).toEqual([
      {
        OR: [
          { tourName: { contains: "simien", mode: "insensitive" } },
          { overview: { contains: "simien", mode: "insensitive" } },
        ],
      },
    ]);
  });

  it("keeps the search filter intact when a destination filter is also set", () => {
    // Both use OR at the top level in Prisma, so a naive second assignment
    // would overwrite the first and the search would be silently dropped.
    const where = buildTourWhere(query({ destinationSlug: "gondar", q: "sunset" }));
    expect(where.OR).toBeDefined();
    expect(where.AND).toBeDefined();
  });

  it("builds a price range when only a minimum is given", () => {
    expect(buildTourWhere(query({ priceMin: 2000 })).adultPrice).toEqual({ gte: 2000 });
  });

  it("builds a price range when only a maximum is given", () => {
    expect(buildTourWhere(query({ priceMax: 500 })).adultPrice).toEqual({ lte: 500 });
  });

  it("builds a bounded price range when both are given", () => {
    expect(buildTourWhere(query({ priceMin: 100, priceMax: 900 })).adultPrice).toEqual({
      gte: 100,
      lte: 900,
    });
  });

  it("omits the price filter entirely when neither bound is given", () => {
    expect(buildTourWhere(query({ q: "simien" })).adultPrice).toBeUndefined();
  });

  it("filters by minimum rating", () => {
    expect(buildTourWhere(query({ ratingMin: 4.5 })).rating).toEqual({ gte: 4.5 });
  });
});
