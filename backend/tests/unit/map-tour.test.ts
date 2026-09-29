import { describe, expect, it } from "vitest";
import { mapTour } from "../../src/utils/mappers.js";

// The frontend's ApiTour type is the contract this mapper has to satisfy.
// Field-by-field, because a rename or a dropped key breaks rendering with no
// compile-time signal on the other side of the rewrite proxy.
const LIST_KEYS = [
  "id",
  "name",
  "description",
  "overview",
  "adultPrice",
  "childPrice",
  "discount",
  "rating",
  "noOfRates",
  "isFeatured",
  "mainImage",
  "destination",
  "destinations",
  "categories",
  "gallery",
  "durationDays",
  "createdAt",
  "updatedAt",
  "canonical",
];

const DETAIL_ONLY_KEYS = ["included", "excluded", "itinerary", "journeyMap"];

const tourRow = {
  id: 7,
  slug: "the-historic-route",
  tourName: "The Historic Route",
  adultPrice: { toNumber: () => 6450 },
  childPrice: null,
  discount: null,
  rating: { toNumber: () => 4.9 },
  noOfRates: 12,
  isFeatured: true,
  overview: "Follow the pilgrimage of kings.",
  included: '["All domestic flights","Private 4x4"]',
  excluded: '["International flights"]',
  itinerary: '[{"day":1,"title":"Arrive Addis","activities":"Private transfer"}]',
  journeyMap: "Route map",
  createdAt: new Date("2026-01-02T00:00:00.000Z"),
  updatedAt: new Date("2026-01-03T00:00:00.000Z"),
  destination: { id: 1, slug: "gondar", destinationName: "Gondar", description: null, imageUrl: null },
  destinations: [],
  gallery: [{ id: 3, imageUrl: "/assets/images/gallery/hero.png", tourId: 7 }],
  categories: [
    { category: { id: 2, categoryName: "Cultural", slug: "cultural", createdAt: null } },
  ],
};

describe("mapTour list shape", () => {
  const mapped = mapTour(tourRow);

  // mapTour assigns detail-only keys as undefined rather than leaving them
  // off. JSON.stringify drops undefined values, so the wire payload is clean
  // even though the in-memory object still carries the keys. These
  // assertions run on the serialized form, which is what the client sees.
  const wire = JSON.parse(JSON.stringify(mapped));

  it("emits exactly the keys the list endpoint promises", () => {
    expect(Object.keys(wire).sort()).toEqual([...LIST_KEYS].sort());
  });

  it("omits detail-only fields so list payloads stay small", () => {
    for (const key of DETAIL_ONLY_KEYS) {
      expect(wire).not.toHaveProperty(key);
    }
  });

  it("maps the scalar fields the frontend reads", () => {
    expect(mapped.name).toBe("The Historic Route");
    expect(mapped.adultPrice).toBe(6450);
    expect(mapped.rating).toBe(4.9);
    expect(mapped.noOfRates).toBe(12);
    expect(mapped.isFeatured).toBe(true);
  });

  it("coerces a null decimal to null rather than NaN", () => {
    expect(mapped.childPrice).toBeNull();
  });

  // The frontend's tour-data overlay matches live rows onto its static
  // catalog by canonical.slug, so an absent slug silently drops every price.
  it("always emits canonical.slug", () => {
    expect(mapped.canonical).toEqual({
      type: "slug",
      id: 7,
      suggestedPath: "/tours/the-historic-route",
      slug: "the-historic-route",
    });
  });

  it("derives mainImage from the first gallery row", () => {
    expect(mapped.mainImage).toBe("/assets/images/gallery/hero.png");
  });

  it("derives durationDays from the itinerary length", () => {
    expect(mapped.durationDays).toBe(1);
  });

  it("flattens the category junction to plain category objects", () => {
    expect(mapped.categories).toEqual([
      { id: 2, name: "Cultural", slug: "cultural", createdAt: null, tourCount: undefined },
    ]);
  });
});

describe("mapTour detail shape", () => {
  const mapped = mapTour(tourRow, true);

  it("adds the detail-only fields", () => {
    for (const key of DETAIL_ONLY_KEYS) {
      expect(mapped).toHaveProperty(key);
    }
  });

  it("parses stored JSON arrays into real arrays", () => {
    expect(mapped.included).toEqual(["All domestic flights", "Private 4x4"]);
    expect(mapped.excluded).toEqual(["International flights"]);
  });

  it("parses the itinerary into day objects", () => {
    expect(mapped.itinerary).toEqual([
      { day: 1, title: "Arrive Addis", activities: "Private transfer" },
    ]);
  });
});

describe("mapTour resilience", () => {
  it("survives a row with no relations at all", () => {
    const bare = mapTour({ id: 1, slug: "bare", tourName: "Bare", itinerary: null });
    expect(bare.gallery).toEqual([]);
    expect(bare.categories).toEqual([]);
    expect(bare.destinations).toEqual([]);
    expect(bare.durationDays).toBe(0);
    expect(bare.mainImage).toBeNull();
    expect(bare.canonical.slug).toBe("bare");
  });

  it("returns empty arrays rather than throwing on malformed stored JSON", () => {
    const broken = mapTour({ id: 2, slug: "broken", tourName: "Broken", itinerary: "{not json" }, true);
    expect(broken.itinerary).toEqual([]);
    expect(broken.durationDays).toBe(0);
  });
});
