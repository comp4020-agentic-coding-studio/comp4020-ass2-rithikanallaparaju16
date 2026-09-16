/**
 * The promise in CLAUDE.md's "Plain writing, and no AI slop".
 *
 * The whole site was rewritten once to strip the register that made the
 * first draft read as generated. Prose drifts back, so the two bans that can
 * be checked mechanically are checked here. The rest of that section is a
 * judgement call and stays a judgement call.
 */
import { describe, expect, it } from "vitest";
import { allContentRoutes, pageText } from "./site";

/** Phrases that read as machine-written whoever actually typed them. */
const TELLS = [
  "dive into",
  "delve",
  "unleash",
  "game-chang",
  "testament to",
  "navigate the landscape",
  "in today's fast-paced",
  "it's worth noting that",
  "in the realm of",
  "a myriad of",
  "elevate your",
  "unlock the",
  "buckle up",
  "let's take a look",
  "join me on this journey",
];

describe("plain writing", () => {
  const routes = allContentRoutes();

  it("has pages to check", () => {
    expect(routes.length).toBeGreaterThanOrEqual(25);
  });

  it("uses no em dashes anywhere a student reads", () => {
    const offenders = routes.filter((r) => pageText(r).includes("—"));
    expect(
      offenders,
      `em dashes found on:\n  ${offenders.join("\n  ")}`,
    ).toEqual([]);
  });

  it("keeps en dashes to numeric ranges", () => {
    // An en dash between words is an em dash wearing a disguise. Between
    // numbers it is correct typography and stays.
    const offenders: string[] = [];
    for (const r of routes) {
      for (const m of pageText(r).matchAll(/(.{0,12})–(.{0,12})/g)) {
        const spansNumbers = /\d\s?$/.test(m[1]) && /^\s?\d/.test(m[2]);
        if (!spansNumbers) offenders.push(`${r}: "${m[0].trim()}"`);
      }
    }
    expect(offenders, `en dash used as punctuation:\n  ${offenders.join("\n  ")}`).toEqual([]);
  });

  it("carries none of the usual generated-prose tells", () => {
    const offenders: string[] = [];
    for (const r of routes) {
      const text = pageText(r).toLowerCase();
      for (const tell of TELLS) if (text.includes(tell)) offenders.push(`${r}: "${tell}"`);
    }
    expect(offenders, `generated-prose tells:\n  ${offenders.join("\n  ")}`).toEqual([]);
  });

  it("never sells the course with an exclamation mark", () => {
    // CLAUDE.md's tone rule: dry, never zany.
    const offenders = routes.filter((r) => /!(\s|$)/.test(pageText(r)));
    expect(offenders, `exclamation marks on:\n  ${offenders.join("\n  ")}`).toEqual([]);
  });
});
