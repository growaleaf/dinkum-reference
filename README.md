# Dinkum Fish & Bug Sell-Price Reference

Static site (`index.html` + `data.js`) for a Dinkum player standing in their inventory with a bag of fish and bugs, deciding fast which to sell to John and which to keep for the Pedia — filtered by biome, season, and time of day, plus a haul calculator for a quick total.

## Sections

1. **Fish (45)** — biome, time of day, season, rarity, and sell price for every fish on the source page, searchable and filterable, sortable by any column.
2. **Bugs (50)** — the same five fields for every bug on the source page.
3. **Haul Calculator** — enter a count per critter (fish or bug), see a running total in Dinks and which rows in your haul are the top three sellers.

No calculator, planner, or interactive database exists for Dinkum (per Gate 2) — this reference is assembled directly from two static Bloxodes pages.

## Data provenance

- Fish and bug tables: [Bloxodes — All 45 Dinkum Fish](https://bloxodes.com/wiki/dinkum/fish) and [Bloxodes — All 50 Dinkum Bugs](https://bloxodes.com/wiki/dinkum/bugs), both fetched directly and parsed from the live page on 2026-11-15. Row counts (45 fish, 50 bugs) match each page's own title.
- `gamepretty.com`, listed as a candidate source in the charter, was checked directly. Its two Dinkum price pages — "All John's Goods Prices List" and "the Prices of Shop & Trapping" — cover NPC-shop tool prices and animal-pelt trapping prices, not fish or bug sell prices. Not used as a source for this reference. No second independent source for fish/bug sell prices was found; every row is single-sourced to Bloxodes and disclosed as such on the page.
- Fandom was excluded per charter.

No value in this reference was invented. Three fish rows — Macquarie Perch, Spotted Handfish, and Lungfish — had no rarity tier listed on the source page (shown there as a bare dash); their `rarity` field reads the literal string `"not published"` rather than guessing a tier from the sell price.

## Running / testing

```
node test.js                     # 15/15 known-answer + row-count + arithmetic tests
python3 -m http.server 8000      # serve the folder, then open http://localhost:8000/
```
