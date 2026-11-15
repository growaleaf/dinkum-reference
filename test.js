// Headless tests. Run with: node test.js
const assert = require("assert");
const {
  SOURCES, FISH, BUGS, allBiomes, allSeasons, allTimes, findByName,
} = require("./data.js");

let passed = 0;
function test(name, fn) {
  try {
    fn();
    passed++;
    console.log("PASS -", name);
  } catch (e) {
    console.error("FAIL -", name, "-", e.message);
    process.exitCode = 1;
  }
}

// 1. Fish row count matches the source page's own stated count (45).
test("fish row count is 45", () => {
  assert.strictEqual(FISH.length, 45);
});

// 2. Bug row count matches the source page's own stated count (50).
test("bug row count is 50", () => {
  assert.strictEqual(BUGS.length, 50);
});

// 3. No duplicate names within fish or within bugs.
test("no duplicate fish or bug names", () => {
  assert.strictEqual(new Set(FISH.map(f => f.name)).size, FISH.length);
  assert.strictEqual(new Set(BUGS.map(b => b.name)).size, BUGS.length);
});

// 4. Every fish and bug row carries a numeric sell price (no invented/blank values).
test("every fish and bug row has a numeric sellPrice", () => {
  for (const row of [...FISH, ...BUGS]) {
    assert.strictEqual(typeof row.sellPrice, "number");
    assert.ok(row.sellPrice > 0, row.name + " sellPrice should be > 0");
  }
});

// 5. Known-answer lookup: Yellow Tang (first fish on the source page).
test("known-answer: Yellow Tang is Common, Island Reef, 740 Dinks", () => {
  const f = findByName(FISH, "Yellow Tang");
  assert.ok(f);
  assert.strictEqual(f.rarity, "Common");
  assert.deepStrictEqual(f.biome, ["Island Reef"]);
  assert.strictEqual(f.sellPrice, 740);
});

// 6. Known-answer lookup: Lungfish is the single highest-value fish (50,000 Dinks)
//    and has no rarity tier on the source page, recorded as "not published".
test("known-answer: Lungfish is highest-value fish, rarity not published", () => {
  const f = findByName(FISH, "Lungfish");
  assert.ok(f);
  assert.strictEqual(f.sellPrice, 50000);
  assert.strictEqual(f.rarity, "not published");
  const maxPrice = Math.max(...FISH.map(x => x.sellPrice));
  assert.strictEqual(maxPrice, 50000);
});

// 7. Three fish rows (Macquarie Perch, Spotted Handfish, Lungfish) have an
//    unverifiable rarity tier, disclosed as "not published" rather than guessed.
test("exactly three fish rows have not-published rarity", () => {
  const unpublished = FISH.filter(f => f.rarity === "not published").map(f => f.name);
  assert.strictEqual(unpublished.length, 3);
  assert.ok(unpublished.includes("Macquarie Perch"));
  assert.ok(unpublished.includes("Spotted Handfish"));
  assert.ok(unpublished.includes("Lungfish"));
});

// 8. Known-answer lookup: Fly is the cheapest bug (72 Dinks), Birdwing
//    Butterfly is the most expensive Super Rare bug (9,100 Dinks).
test("known-answer: Fly 72 Dinks, Birdwing Butterfly 9,100 Dinks", () => {
  const fly = findByName(BUGS, "Fly");
  const birdwing = findByName(BUGS, "Birdwing Butterfly");
  assert.ok(fly && birdwing);
  assert.strictEqual(fly.sellPrice, 72);
  assert.strictEqual(birdwing.sellPrice, 9100);
  assert.strictEqual(birdwing.rarity, "Super Rare");
});

// 9. Lowest bug sell price overall is Fly at 72 Dinks.
test("Fly is the lowest-value bug", () => {
  const minPrice = Math.min(...BUGS.map(x => x.sellPrice));
  assert.strictEqual(minPrice, 72);
  assert.strictEqual(findByName(BUGS, "Fly").sellPrice, minPrice);
});

// 10. Rarity values across both tables are drawn only from the five known
//     tiers or "not published" — no invented tier names.
test("all rarity values are one of the five known tiers or not published", () => {
  const known = new Set(["Common", "Uncommon", "Rare", "Very Rare", "Super Rare", "not published"]);
  for (const row of [...FISH, ...BUGS]) {
    assert.ok(known.has(row.rarity), row.name + " has unexpected rarity: " + row.rarity);
  }
});

// 11. allBiomes/allSeasons/allTimes return non-empty, de-duplicated lists
//     usable as filter-dropdown options.
test("allBiomes/allSeasons/allTimes are non-empty and de-duplicated", () => {
  const biomes = allBiomes(FISH);
  const seasons = allSeasons(FISH);
  const times = allTimes(FISH);
  assert.ok(biomes.length > 0 && seasons.length > 0 && times.length > 0);
  assert.strictEqual(new Set(biomes).size, biomes.length);
  assert.ok(biomes.includes("Island Reef"));
  assert.ok(seasons.includes("Year-round"));
  assert.ok(times.includes("Night"));
});

// 12. findByName is case-insensitive and returns undefined for a name
//     that is not on either list (never fabricates a row).
test("findByName is case-insensitive, returns undefined for unknown names", () => {
  assert.ok(findByName(FISH, "yellow tang"));
  assert.strictEqual(findByName(FISH, "Totally Fake Fish"), undefined);
  assert.strictEqual(findByName(BUGS, "Totally Fake Bug"), undefined);
});

// 13. Every row's source id resolves to a real entry in SOURCES (no dangling
//     citation).
test("every row's source id resolves in SOURCES", () => {
  for (const row of [...FISH, ...BUGS]) {
    assert.ok(SOURCES[row.source], row.name + " has unresolved source id: " + row.source);
  }
});

// 14. sellPriceRaw matches the numeric sellPrice for every row (comma
//     formatting parses back to the same integer, catching a transcription slip).
test("sellPriceRaw parses back to the same integer as sellPrice", () => {
  for (const row of [...FISH, ...BUGS]) {
    const parsed = parseInt(row.sellPriceRaw.replace(/[^\d]/g, ""), 10);
    assert.strictEqual(parsed, row.sellPrice, row.name + " sellPriceRaw/sellPrice mismatch");
  }
});

// 15. Known-answer: haul-calculator arithmetic for a small basket (2 Yellow
//     Tang + 3 Fly) totals 2*740 + 3*72 = 1,696 Dinks — the exact calculation
//     the page's haul calculator performs per row.
test("known-answer: haul total for 2 Yellow Tang + 3 Fly is 1,696 Dinks", () => {
  const tang = findByName(FISH, "Yellow Tang");
  const fly = findByName(BUGS, "Fly");
  const total = 2 * tang.sellPrice + 3 * fly.sellPrice;
  assert.strictEqual(total, 1696);
});

console.log(`\n${passed}/15 tests reported (see PASS/FAIL lines above)`);
if (process.exitCode) {
  console.error("\nSOME TESTS FAILED");
} else {
  console.log("\nALL TESTS PASSED");
}
