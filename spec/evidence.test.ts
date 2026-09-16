/**
 * The promise in CLAUDE.md's "No invented facts".
 *
 * The course is fictional and the science in it is not. A reader has to be
 * able to go and check anything the site asserts, which means a page that
 * states a finding also names who found it and when.
 *
 * No test can tell a real citation from a convincing fake, so this does not
 * try. It enforces the weaker thing a test can actually establish: a page
 * does not get to state a number and stay anonymous about where it came
 * from. That catches the failure that matters in practice, which is a
 * statistic drifting into the copy with no source attached.
 */
import { describe, expect, it } from "vitest";
import { builtRoutes, pageText } from "./site";

/** A quantitative or study-shaped claim. */
const STATES_EVIDENCE =
  /(\bd = |\bd=|\br = |\bρ = |\bg = |\d\s?%|meta-analys|randomis|randomiz|\btrial\b|\bparticipants\b|\bstudies\b|\bstudy\b)/i;

/** A year, which the house rule requires alongside the researcher's name. */
const NAMES_A_YEAR = /\b(18|19|20)\d{2}\b/;

/** Language that marks a claim as the course's own guess rather than a finding. */
const LABELS_A_HUNCH =
  /\b(hunch|a guess|our guess|this course's guess|not a finding|unstudied|nobody has (studied|tested|published)|we (do not|don't) know|inference)\b/i;

describe("no invented facts", () => {
  const teaching = [...builtRoutes("lectures"), ...builtRoutes("sessions")];

  it("has teaching pages to check", () => {
    expect(teaching.length).toBeGreaterThanOrEqual(20);
  });

  it("never states a finding without dating it", () => {
    const anonymous = teaching.filter((route) => {
      const text = pageText(route);
      return STATES_EVIDENCE.test(text) && !NAMES_A_YEAR.test(text);
    });
    expect(
      anonymous,
      `these pages quote evidence but name no year:\n  ${anonymous.join("\n  ")}`,
    ).toEqual([]);
  });

  it("keeps the course's own central claim labelled as a hunch", () => {
    // The argument the course is named for has never been tested directly.
    // If this ever reads as established, the site is overselling itself.
    const home = pageText("");
    expect(home).toMatch(/hunch/i);
    expect(pageText("policies")).toMatch(/never been tested directly|has never been tested/i);
  });

  it("still says out loud where the evidence is thin", () => {
    // Spot-check the pages whose whole point is an uncomfortable finding.
    expect(pageText("assessments")).toMatch(/design reasoning, not a finding/i);
    const hedged = [...builtRoutes("lectures")].filter((r) => LABELS_A_HUNCH.test(pageText(r)));
    expect(
      hedged.length,
      "no lecture labels any of its material as a guess, which is unlikely to be honest",
    ).toBeGreaterThanOrEqual(3);
  });
});
