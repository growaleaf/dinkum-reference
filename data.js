// Dinkum Fish & Bug Sell-Price Reference — data layer.
// Every row traces to one of the sources below. A blank or unverifiable
// value is written as "not published" rather than guessed or interpolated.
// Rarity is shown exactly as the source states it; three high-value fish
// (Macquarie Perch, Spotted Handfish, Lungfish) had no rarity tier listed
// on the source page (shown as "-" there) and are recorded as "not published".

const SOURCES = {
  bloxodes_fish: {
    name: "Bloxodes — All 45 Dinkum Fish, Where and When to Catch Each One",
    url: "https://bloxodes.com/wiki/dinkum/fish",
    fetched: "2026-11-15",
    note: "45 fish entries: biome, time of day, season, rarity, sell price. Fetched and parsed directly from the live page.",
  },
  bloxodes_bugs: {
    name: "Bloxodes — All 50 Dinkum Bugs, Where and When to Catch Each One",
    url: "https://bloxodes.com/wiki/dinkum/bugs",
    fetched: "2026-11-15",
    note: "50 bug entries: biome, time of day, season, rarity, sell price. Fetched and parsed directly from the live page.",
  },
};

// gamepretty.com was checked directly per the charter's candidate list.
// Its only Dinkum price pages are "All John's Goods Prices List" (buy
// prices for tools/items from the NPC shop) and "the Prices of Shop &
// Trapping" (NPC shop + animal-pelt trapping prices) — neither covers
// fish or bug sell prices. No second source for fish/bug sell prices was
// found; every row below is single-source (bloxodes.com) and disclosed
// as such on the page.
const UNUSED_CANDIDATE_NOTE =
  "gamepretty.com checked directly: its Dinkum price pages (John's Goods, Shop & Trapping) cover tool/shop/pelt prices, not fish or bug sell prices. Not used as a fish/bug source. No calculator or planner for Dinkum fish/bug prices was found anywhere; only the two static bloxodes.com pages above.";

// ---- Fish: biome, time, season, rarity, sell price ----
const FISH = [
  { name: "Yellow Tang", biome: ["Island Reef"], time: ["Any time"], season: ["Year-round"], rarity: "Common", sellPrice: 740, sellPriceRaw: "740 Dinks", source: "bloxodes_fish" },
  { name: "Blue Spot Flathead", biome: ["Ocean"], time: ["Morning", "Day"], season: ["Spring", "Summer", "Autumn"], rarity: "Common", sellPrice: 998, sellPriceRaw: "998 Dinks", source: "bloxodes_fish" },
  { name: "Jungle Perch", biome: ["Rivers", "Billabongs"], time: ["Any time"], season: ["Year-round"], rarity: "Common", sellPrice: 1200, sellPriceRaw: "1,200 Dinks", source: "bloxodes_fish" },
  { name: "Barcoo Grunter", biome: ["Rivers", "Billabongs", "Mangroves"], time: ["Any time"], season: ["Year-round"], rarity: "Common", sellPrice: 1290, sellPriceRaw: "1,290 Dinks", source: "bloxodes_fish" },
  { name: "Eel Tailed Catfish", biome: ["Mangroves"], time: ["Any time"], season: ["Year-round"], rarity: "Common", sellPrice: 1408, sellPriceRaw: "1,408 Dinks", source: "bloxodes_fish" },
  { name: "Silver Perch", biome: ["Rivers", "Billabongs"], time: ["Any time"], season: ["Autumn", "Winter"], rarity: "Common", sellPrice: 1708, sellPriceRaw: "1,708 Dinks", source: "bloxodes_fish" },
  { name: "Black & White Snapper", biome: ["Ocean"], time: ["Day"], season: ["Spring", "Autumn"], rarity: "Common", sellPrice: 1992, sellPriceRaw: "1,992 Dinks", source: "bloxodes_fish" },
  { name: "Boofhead Catfish", biome: ["Mangroves"], time: ["Night"], season: ["Spring", "Summer", "Autumn"], rarity: "Common", sellPrice: 2103, sellPriceRaw: "2,103 Dinks", source: "bloxodes_fish" },
  { name: "River Bass", biome: ["Rivers", "Mangroves"], time: ["Any time"], season: ["Spring", "Summer"], rarity: "Common", sellPrice: 2784, sellPriceRaw: "2,784 Dinks", source: "bloxodes_fish" },
  { name: "Anchovy", biome: ["Southern Ocean"], time: ["Morning", "Night"], season: ["Autumn", "Winter"], rarity: "Common", sellPrice: 4620, sellPriceRaw: "4,620 Dinks", source: "bloxodes_fish" },
  { name: "Empire Gudgeon", biome: ["Billabongs"], time: ["Any time"], season: ["Year-round"], rarity: "Common", sellPrice: 9920, sellPriceRaw: "9,920 Dinks", source: "bloxodes_fish" },
  { name: "Bluefish", biome: ["Ocean"], time: ["Any time"], season: ["Year-round"], rarity: "Uncommon", sellPrice: 1560, sellPriceRaw: "1,560 Dinks", source: "bloxodes_fish" },
  { name: "Carp", biome: ["Rivers", "Mangroves"], time: ["Any time"], season: ["Year-round"], rarity: "Uncommon", sellPrice: 1996, sellPriceRaw: "1,996 Dinks", source: "bloxodes_fish" },
  { name: "Garfish", biome: ["Ocean"], time: ["Any time"], season: ["Spring", "Winter"], rarity: "Uncommon", sellPrice: 2346, sellPriceRaw: "2,346 Dinks", source: "bloxodes_fish" },
  { name: "Grayling", biome: ["Billabongs", "Rivers"], time: ["Day"], season: ["Autumn", "Winter"], rarity: "Uncommon", sellPrice: 2508, sellPriceRaw: "2,508 Dinks", source: "bloxodes_fish" },
  { name: "Bonytongue", biome: ["Billabongs"], time: ["Any time"], season: ["Year-round"], rarity: "Uncommon", sellPrice: 3308, sellPriceRaw: "3,308 Dinks", source: "bloxodes_fish" },
  { name: "Mangrove Jack", biome: ["Mangroves"], time: ["Any time"], season: ["Year-round"], rarity: "Uncommon", sellPrice: 3498, sellPriceRaw: "3,498 Dinks", source: "bloxodes_fish" },
  { name: "Rainbow Fish", biome: ["Rivers", "Billabongs"], time: ["Any time"], season: ["Summer", "Autumn"], rarity: "Uncommon", sellPrice: 3580, sellPriceRaw: "3,580 Dinks", source: "bloxodes_fish" },
  { name: "Blackfish", biome: ["Billabongs", "Rivers"], time: ["Any time"], season: ["Spring"], rarity: "Uncommon", sellPrice: 3908, sellPriceRaw: "3,908 Dinks", source: "bloxodes_fish" },
  { name: "Tarpon", biome: ["Billabongs"], time: ["Any time"], season: ["Year-round"], rarity: "Uncommon", sellPrice: 3960, sellPriceRaw: "3,960 Dinks", source: "bloxodes_fish" },
  { name: "Banded Morwong", biome: ["Ocean"], time: ["Any time"], season: ["Winter"], rarity: "Uncommon", sellPrice: 4320, sellPriceRaw: "4,320 Dinks", source: "bloxodes_fish" },
  { name: "Short Finned Eel", biome: ["Billabongs"], time: ["Night"], season: ["Year-round"], rarity: "Rare", sellPrice: 3008, sellPriceRaw: "3,008 Dinks", source: "bloxodes_fish" },
  { name: "Deep Fish", biome: ["Underground"], time: ["Any time"], season: ["Year-round"], rarity: "Uncommon", sellPrice: 18060, sellPriceRaw: "18,060 Dinks", source: "bloxodes_fish" },
  { name: "Travalla", biome: ["Northern Ocean"], time: ["Any time"], season: ["Spring", "Autumn"], rarity: "Uncommon", sellPrice: 7800, sellPriceRaw: "7,800 Dinks", source: "bloxodes_fish" },
  { name: "Goat Fish", biome: ["Southern Ocean"], time: ["Any time"], season: ["Spring", "Summer"], rarity: "Rare", sellPrice: 3200, sellPriceRaw: "3,200 Dinks", source: "bloxodes_fish" },
  { name: "Stingray", biome: ["Northern Ocean"], time: ["Night"], season: ["Summer", "Autumn"], rarity: "Rare", sellPrice: 3396, sellPriceRaw: "3,396 Dinks", source: "bloxodes_fish" },
  { name: "Mouth Almighty", biome: ["Mangroves"], time: ["Day", "Night"], season: ["Autumn", "Winter"], rarity: "Rare", sellPrice: 3870, sellPriceRaw: "3,870 Dinks", source: "bloxodes_fish" },
  { name: "Eyestripe Surgeonfish", biome: ["Northern Ocean"], time: ["Day"], season: ["Spring", "Summer"], rarity: "Rare", sellPrice: 3996, sellPriceRaw: "3,996 Dinks", source: "bloxodes_fish" },
  { name: "Luderick", biome: ["Northern Ocean"], time: ["Day"], season: ["Winter"], rarity: "Rare", sellPrice: 4160, sellPriceRaw: "4,160 Dinks", source: "bloxodes_fish" },
  { name: "Galaxias", biome: ["Rivers"], time: ["Any time"], season: ["Winter"], rarity: "Rare", sellPrice: 4808, sellPriceRaw: "4,808 Dinks", source: "bloxodes_fish" },
  { name: "Clown Fish", biome: ["Island Reef"], time: ["Any time"], season: ["Year-round"], rarity: "Rare", sellPrice: 7740, sellPriceRaw: "7,740 Dinks", source: "bloxodes_fish" },
  { name: "Blue Tang", biome: ["Island Reef"], time: ["Any time"], season: ["Year-round"], rarity: "Rare", sellPrice: 7740, sellPriceRaw: "7,740 Dinks", source: "bloxodes_fish" },
  { name: "Lionfish", biome: ["Northern Ocean", "Mangroves"], time: ["Day", "Night"], season: ["Summer", "Autumn"], rarity: "Rare", sellPrice: 11000, sellPriceRaw: "11,000 Dinks", source: "bloxodes_fish" },
  { name: "Barracuda", biome: ["Northern Ocean", "All Oceans during Fish Catching Comp"], time: ["Night"], season: ["Spring", "Summer"], rarity: "Rare", sellPrice: 12000, sellPriceRaw: "12,000 Dinks", source: "bloxodes_fish" },
  { name: "Humphead Wrasse", biome: ["Island Reef"], time: ["Any time"], season: ["Year-round"], rarity: "Rare", sellPrice: 15480, sellPriceRaw: "15,480 Dinks", source: "bloxodes_fish" },
  { name: "Golden Perch", biome: ["Rivers"], time: ["Morning"], season: ["Spring"], rarity: "Very Rare", sellPrice: 4384, sellPriceRaw: "4,384 Dinks", source: "bloxodes_fish" },
  { name: "Saratoga", biome: ["Billabongs"], time: ["Night"], season: ["Summer", "Autumn"], rarity: "Very Rare", sellPrice: 7616, sellPriceRaw: "7,616 Dinks", source: "bloxodes_fish" },
  { name: "Barramundi", biome: ["Rivers"], time: ["Any time"], season: ["Spring", "Autumn", "Winter"], rarity: "Very Rare", sellPrice: 8416, sellPriceRaw: "8,416 Dinks", source: "bloxodes_fish" },
  { name: "Murray Cod", biome: ["Rivers"], time: ["Morning"], season: ["Spring", "Winter"], rarity: "Very Rare", sellPrice: 10400, sellPriceRaw: "10,400 Dinks", source: "bloxodes_fish" },
  { name: "Macquarie Perch", biome: ["Rivers"], time: ["Day"], season: ["Summer", "Autumn"], rarity: "not published", sellPrice: 12400, sellPriceRaw: "12,400 Dinks", source: "bloxodes_fish" },
  { name: "Spotted Handfish", biome: ["Southern Ocean"], time: ["Morning", "Day"], season: ["Year-round"], rarity: "not published", sellPrice: 16000, sellPriceRaw: "16,000 Dinks", source: "bloxodes_fish" },
  { name: "Blob Fish", biome: ["Southern Ocean"], time: ["Night"], season: ["Autumn", "Winter"], rarity: "Super Rare", sellPrice: 100, sellPriceRaw: "100 Dinks", source: "bloxodes_fish" },
  { name: "Marlin", biome: ["Southern Ocean"], time: ["Day"], season: ["Summer", "Winter"], rarity: "Super Rare", sellPrice: 20200, sellPriceRaw: "20,200 Dinks", source: "bloxodes_fish" },
  { name: "Yellowfin Tuna", biome: ["Ocean"], time: ["Morning", "Night"], season: ["Spring", "Autumn"], rarity: "Super Rare", sellPrice: 24600, sellPriceRaw: "24,600 Dinks", source: "bloxodes_fish" },
  { name: "Lungfish", biome: ["Rivers", "Billabongs"], time: ["Night"], season: ["Year-round"], rarity: "not published", sellPrice: 50000, sellPriceRaw: "50,000 Dinks", source: "bloxodes_fish" },
];

// ---- Bugs: biome, time, season, rarity, sell price ----
const BUGS = [
  { name: "Fly", biome: ["Everywhere"], time: ["Morning", "Day"], season: ["Year-round"], rarity: "Common", sellPrice: 72, sellPriceRaw: "72 Dinks", source: "bloxodes_bugs" },
  { name: "Cockroach", biome: ["Everywhere"], time: ["Night"], season: ["Year-round"], rarity: "Common", sellPrice: 154, sellPriceRaw: "154 Dinks", source: "bloxodes_bugs" },
  { name: "Grass Yellow Butterfly", biome: ["Plains", "Pine Forests", "Tropics"], time: ["Morning", "Day"], season: ["Year-round"], rarity: "Common", sellPrice: 220, sellPriceRaw: "220 Dinks", source: "bloxodes_bugs" },
  { name: "Blue Moon Butterfly", biome: ["Everywhere"], time: ["Morning", "Day"], season: ["Year-round"], rarity: "Common", sellPrice: 290, sellPriceRaw: "290 Dinks", source: "bloxodes_bugs" },
  { name: "Stinkbug", biome: ["Everywhere"], time: ["Any time"], season: ["Autumn"], rarity: "Common", sellPrice: 300, sellPriceRaw: "300 Dinks", source: "bloxodes_bugs" },
  { name: "Common Blue Tail", biome: ["Pine Forests", "Tropics"], time: ["Morning", "Day"], season: ["Autumn", "Winter"], rarity: "Common", sellPrice: 772, sellPriceRaw: "772 Dinks", source: "bloxodes_bugs" },
  { name: "Scarlet Jezebel Butterfly", biome: ["Everywhere"], time: ["Day"], season: ["Year-round"], rarity: "Common", sellPrice: 790, sellPriceRaw: "790 Dinks", source: "bloxodes_bugs" },
  { name: "Meadow Katydid", biome: ["Plains"], time: ["Morning", "Day"], season: ["Spring", "Autumn"], rarity: "Common", sellPrice: 900, sellPriceRaw: "900 Dinks", source: "bloxodes_bugs" },
  { name: "Black Cricket", biome: ["Everywhere"], time: ["Night"], season: ["Year-round"], rarity: "Common", sellPrice: 980, sellPriceRaw: "980 Dinks", source: "bloxodes_bugs" },
  { name: "Cicada", biome: ["Bushlands", "Plains"], time: ["Morning", "Day"], season: ["Spring", "Summer"], rarity: "Common", sellPrice: 3800, sellPriceRaw: "3,800 Dinks", source: "bloxodes_bugs" },
  { name: "Bogong Moth", biome: ["Everywhere"], time: ["Night"], season: ["Year-round"], rarity: "Uncommon", sellPrice: 260, sellPriceRaw: "260 Dinks", source: "bloxodes_bugs" },
  { name: "Painted Lady Butterfly", biome: ["Pine Forests"], time: ["Morning", "Day"], season: ["Spring", "Summer"], rarity: "Uncommon", sellPrice: 560, sellPriceRaw: "560 Dinks", source: "bloxodes_bugs" },
  { name: "Ulysses Butterfly", biome: ["Bushlands"], time: ["Morning", "Day"], season: ["Spring", "Summer"], rarity: "Uncommon", sellPrice: 660, sellPriceRaw: "660 Dinks", source: "bloxodes_bugs" },
  { name: "Bee", biome: ["Pine Forests", "Plains"], time: ["Day"], season: ["Spring", "Summer"], rarity: "Uncommon", sellPrice: 680, sellPriceRaw: "680 Dinks", source: "bloxodes_bugs" },
  { name: "Largidae", biome: ["Everywhere"], time: ["Day"], season: ["Year-round"], rarity: "Uncommon", sellPrice: 780, sellPriceRaw: "780 Dinks", source: "bloxodes_bugs" },
  { name: "Firefly", biome: ["Everywhere"], time: ["Night"], season: ["Year-round"], rarity: "Uncommon", sellPrice: 860, sellPriceRaw: "860 Dinks", source: "bloxodes_bugs" },
  { name: "Swallow-Tail Butterfly", biome: ["Tropics"], time: ["Day"], season: ["Summer", "Autumn"], rarity: "Uncommon", sellPrice: 990, sellPriceRaw: "990 Dinks", source: "bloxodes_bugs" },
  { name: "Funnel Web Spider", biome: ["Bushlands"], time: ["Day", "Night"], season: ["Spring", "Summer"], rarity: "Uncommon", sellPrice: 1020, sellPriceRaw: "1,020 Dinks", source: "bloxodes_bugs" },
  { name: "Cricket", biome: ["Plains", "Bushlands"], time: ["Night"], season: ["Year-round"], rarity: "Uncommon", sellPrice: 1348, sellPriceRaw: "1,348 Dinks", source: "bloxodes_bugs" },
  { name: "Grasshopper", biome: ["Tropics", "Plains"], time: ["Day"], season: ["Spring"], rarity: "Uncommon", sellPrice: 1700, sellPriceRaw: "1,700 Dinks", source: "bloxodes_bugs" },
  { name: "Common Crow Butterfly", biome: ["Island Reef"], time: ["Any time"], season: ["Year-round"], rarity: "Uncommon", sellPrice: 1980, sellPriceRaw: "1,980 Dinks", source: "bloxodes_bugs" },
  { name: "Blue Tiger Butterfly", biome: ["Island Reef"], time: ["Any time"], season: ["Year-round"], rarity: "Uncommon", sellPrice: 2300, sellPriceRaw: "2,300 Dinks", source: "bloxodes_bugs" },
  { name: "Glow Bug", biome: ["Underground"], time: ["Any time"], season: ["Year-round"], rarity: "Uncommon", sellPrice: 2580, sellPriceRaw: "2,580 Dinks", source: "bloxodes_bugs" },
  { name: "Gumleaf Grasshopper", biome: ["Bushlands", "Plains"], time: ["Morning", "Day"], season: ["Summer", "Autumn", "Winter"], rarity: "Uncommon", sellPrice: 3400, sellPriceRaw: "3,400 Dinks", source: "bloxodes_bugs" },
  { name: "Paper Wasp", biome: ["Plains", "Desert"], time: ["Day"], season: ["Autumn"], rarity: "Rare", sellPrice: 990, sellPriceRaw: "990 Dinks", source: "bloxodes_bugs" },
  { name: "Desert Scorpion", biome: ["Desert"], time: ["Any time"], season: ["Autumn", "Winter"], rarity: "Rare", sellPrice: 1212, sellPriceRaw: "1,212 Dinks", source: "bloxodes_bugs" },
  { name: "Tiger Moth", biome: ["Bushlands", "Plains"], time: ["Night"], season: ["Autumn", "Winter"], rarity: "Rare", sellPrice: 1360, sellPriceRaw: "1,360 Dinks", source: "bloxodes_bugs" },
  { name: "Trogid", biome: ["Desert"], time: ["Night"], season: ["Spring", "Autumn"], rarity: "Rare", sellPrice: 1400, sellPriceRaw: "1,400 Dinks", source: "bloxodes_bugs" },
  { name: "Redback Spider", biome: ["Desert"], time: ["Day", "Night"], season: ["Spring", "Summer", "Autumn"], rarity: "Rare", sellPrice: 1552, sellPriceRaw: "1,552 Dinks", source: "bloxodes_bugs" },
  { name: "Pygmyfly", biome: ["Desert", "Plains"], time: ["Day"], season: ["Year-round"], rarity: "Rare", sellPrice: 1672, sellPriceRaw: "1,672 Dinks", source: "bloxodes_bugs" },
  { name: "Lacewing", biome: ["Pine Forests", "Plains"], time: ["Day"], season: ["Spring", "Summer"], rarity: "Rare", sellPrice: 1680, sellPriceRaw: "1,680 Dinks", source: "bloxodes_bugs" },
  { name: "Ladybird", biome: ["Pine Forests", "Plains"], time: ["Morning"], season: ["Spring"], rarity: "Rare", sellPrice: 1900, sellPriceRaw: "1,900 Dinks", source: "bloxodes_bugs" },
  { name: "Tau Emerald Dragonfly", biome: ["Plains", "Bushlands"], time: ["Day"], season: ["Summer", "Autumn"], rarity: "Rare", sellPrice: 2010, sellPriceRaw: "2,010 Dinks", source: "bloxodes_bugs" },
  { name: "Harlequin Butterfly", biome: ["Everywhere"], time: ["Morning", "Day"], season: ["Year-round"], rarity: "Rare", sellPrice: 2121, sellPriceRaw: "2,121 Dinks", source: "bloxodes_bugs" },
  { name: "Purple Azure Butterfly", biome: ["Pine Forests"], time: ["Morning", "Day"], season: ["Spring", "Summer", "Autumn"], rarity: "Rare", sellPrice: 2200, sellPriceRaw: "2,200 Dinks", source: "bloxodes_bugs" },
  { name: "Duskhawker Dragonfly", biome: ["Pine Forests", "Tropics"], time: ["Morning", "Day"], season: ["Spring", "Autumn"], rarity: "Rare", sellPrice: 2350, sellPriceRaw: "2,350 Dinks", source: "bloxodes_bugs" },
  { name: "Tiger Beetle", biome: ["Desert"], time: ["Night"], season: ["Spring", "Autumn"], rarity: "Rare", sellPrice: 2400, sellPriceRaw: "2,400 Dinks", source: "bloxodes_bugs" },
  { name: "Fiddler Beetle", biome: ["Tropics", "Bushlands"], time: ["Morning"], season: ["Autumn", "Winter"], rarity: "Rare", sellPrice: 2400, sellPriceRaw: "2,400 Dinks", source: "bloxodes_bugs" },
  { name: "Monarch Butterfly", biome: ["Bushlands", "Pine Forests"], time: ["Morning", "Day"], season: ["Spring"], rarity: "Rare", sellPrice: 3860, sellPriceRaw: "3,860 Dinks", source: "bloxodes_bugs" },
  { name: "Peacock Spider", biome: ["Bushlands", "Tropics"], time: ["Morning"], season: ["Year-round"], rarity: "Very Rare", sellPrice: 1792, sellPriceRaw: "1,792 Dinks", source: "bloxodes_bugs" },
  { name: "Rhinoceros Beetle", biome: ["Bushlands", "Pine Forests"], time: ["Morning"], season: ["Autumn", "Winter"], rarity: "Very Rare", sellPrice: 1930, sellPriceRaw: "1,930 Dinks", source: "bloxodes_bugs" },
  { name: "Centipede", biome: ["Everywhere"], time: ["Night"], season: ["Year-round"], rarity: "Very Rare", sellPrice: 2220, sellPriceRaw: "2,220 Dinks", source: "bloxodes_bugs" },
  { name: "Queen Bee", biome: ["Pine Forests", "Plains"], time: ["Morning"], season: ["Spring", "Summer"], rarity: "Very Rare", sellPrice: 2300, sellPriceRaw: "2,300 Dinks", source: "bloxodes_bugs" },
  { name: "Goliath Stick", biome: ["Tropics", "Pine Forests"], time: ["Morning"], season: ["Winter"], rarity: "Very Rare", sellPrice: 6330, sellPriceRaw: "6,330 Dinks", source: "bloxodes_bugs" },
  { name: "Hercules Moth", biome: ["Everywhere"], time: ["Night"], season: ["Spring", "Winter"], rarity: "Super Rare", sellPrice: 3000, sellPriceRaw: "3,000 Dinks", source: "bloxodes_bugs" },
  { name: "Huntsman", biome: ["Desert", "Bushlands"], time: ["Day", "Night"], season: ["Autumn", "Winter"], rarity: "Super Rare", sellPrice: 3552, sellPriceRaw: "3,552 Dinks", source: "bloxodes_bugs" },
  { name: "Stag Beetle", biome: ["Tropics", "Bushlands"], time: ["Day"], season: ["Spring"], rarity: "Super Rare", sellPrice: 4100, sellPriceRaw: "4,100 Dinks", source: "bloxodes_bugs" },
  { name: "Emperor Dragonfly", biome: ["Tropics", "Plains"], time: ["Day"], season: ["Spring"], rarity: "Super Rare", sellPrice: 4172, sellPriceRaw: "4,172 Dinks", source: "bloxodes_bugs" },
  { name: "Purple-Winged Mantis", biome: ["Island Reef"], time: ["Night"], season: ["Year-round"], rarity: "Super Rare", sellPrice: 6330, sellPriceRaw: "6,330 Dinks", source: "bloxodes_bugs" },
  { name: "Birdwing Butterfly", biome: ["Tropics"], time: ["Morning"], season: ["Autumn"], rarity: "Super Rare", sellPrice: 9100, sellPriceRaw: "9,100 Dinks", source: "bloxodes_bugs" },
];

// All biomes seen across both tables, for filter dropdowns.
function allBiomes(list) {
  const set = new Set();
  for (const row of list) for (const b of row.biome) set.add(b);
  return Array.from(set).sort();
}

// All seasons seen across both tables, for filter dropdowns.
function allSeasons(list) {
  const set = new Set();
  for (const row of list) for (const s of row.season) set.add(s);
  return Array.from(set).sort();
}

// All times of day seen across both tables, for filter dropdowns.
function allTimes(list) {
  const set = new Set();
  for (const row of list) for (const t of row.time) set.add(t);
  return Array.from(set).sort();
}

function findByName(list, name) {
  return list.find(r => r.name.toLowerCase() === name.toLowerCase());
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    SOURCES, FISH, BUGS, UNUSED_CANDIDATE_NOTE,
    allBiomes, allSeasons, allTimes, findByName,
  };
}
