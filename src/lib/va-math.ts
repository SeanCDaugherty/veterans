/** VA combined-rating math, 38 CFR 4.25. Highest first. Whole-person method. */

export function combineExact(ratings: number[]) {
  const sorted = ratings
    .filter((r) => r > 0)
    .sort((a, b) => b - a);
  let remaining = 100;
  for (const r of sorted) {
    remaining = remaining * (1 - Math.min(r, 100) / 100);
  }
  return 100 - remaining;
}

/** VA rounds combined value to nearest 10; values ending in 5 round up. */
export function roundToNearestTen(value: number) {
  const floored = Math.floor(value);
  const ones = floored % 10;
  const base = floored - ones;
  if (ones >= 5) return Math.min(100, base + 10);
  return base;
}

export function combineRatings(ratings: number[]) {
  const exact = combineExact(ratings);
  const rounded = roundToNearestTen(exact);
  return { exact, rounded, leftover: 100 - exact };
}

/**
 * Bilateral factor: 10% of the combined value of bilateral pairs is added
 * before combining with remaining ratings (38 CFR 4.26).
 */
export function applyBilateral(bilateral: number[], others: number[]) {
  if (bilateral.length < 2) {
    return combineRatings([...bilateral, ...others]);
  }
  const pair = combineExact(bilateral);
  const withFactor = pair + pair * 0.1;
  return combineRatings([withFactor, ...others]);
}

/** 2026 veteran-alone monthly rates (effective Dec 1, 2025). Confirm on VA.gov. */
export const RATES_2026_ALONE: Record<number, number> = {
  10: 180.42,
  20: 356.66,
  30: 552.47,
  40: 795.84,
  50: 1132.9,
  60: 1435.02,
  70: 1808.45,
  80: 2102.15,
  90: 2362.3,
  100: 3938.58,
};

export function monthlyFor(rounded: number) {
  const clamped = Math.max(0, Math.min(100, rounded));
  const step = Math.round(clamped / 10) * 10;
  return RATES_2026_ALONE[step] ?? 0;
}

export function formatUsd(n: number) {
  return n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}
