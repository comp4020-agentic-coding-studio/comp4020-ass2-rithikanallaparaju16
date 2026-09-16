/**
 * The promises in CLAUDE.md's "Care with the material".
 *
 * This course asks people to talk about anxiety and about thoughts they have
 * not told anyone. Two things therefore have to stay true no matter who edits
 * a page later: you can always decline, and declining never costs you marks.
 * Neither is visible to the build, and both are easy to lose by accident when
 * a brief gets rewritten for length or tone.
 */
import { describe, expect, it } from "vitest";
import { builtRoutes, nodesOfType, pageText } from "./site";

/** Wordings the site actually uses to hand someone a way out. */
const OPT_OUT =
  /\b(you can pass|can pass\b|passing (costs|is)|pass without|pass on (this|any|the)|sit it out|opt out|optional|without giving a reason|needs no reason|no explanation owed|you do not have to|do not have to say)\b/i;

/** An activity that puts a person's own material into the room. */
const ASKS_TO_SHARE =
  /\b(say|says|said|share|shared|tell|read (it |them )?(aloud|out loud)|out loud|aloud|discuss|name one|your own example|in front of)\b/i;

describe("care with the material", () => {
  const crits = builtRoutes("sessions");

  it("has crits to check", () => {
    expect(crits.length).toBeGreaterThanOrEqual(12);
  });

  it("gives an explicit opt-out to every crit that asks people to share", () => {
    const missing = crits.filter((route) => {
      const text = pageText(route);
      return ASKS_TO_SHARE.test(text) && !OPT_OUT.test(text);
    });
    expect(
      missing,
      `these crits ask for something out loud but offer no way to decline:\n  ${missing.join("\n  ")}`,
    ).toEqual([]);
  });

  it("never makes a mark depend on how much someone said", () => {
    const text = pageText("assessments/showing-up");
    // The participation component is the one place a mark could quietly start
    // rewarding disclosure, so it states the opposite in writing.
    expect(text).toMatch(/full marks/i);
    expect(text).toMatch(/not (that|how much) you spoke|never speaking volume|did the activity, not/i);
  });

  it("keeps the participation criteria about turning up and doing the activity", () => {
    const showingUp = nodesOfType("assessments").find((n) => n.id.endsWith("showing-up"));
    expect(showingUp, "the participation assessment is missing").toBeDefined();
    const spec = (showingUp?.spec ?? []).join(" ");
    expect(spec).toMatch(/not that you spoke the most|did the activity/i);
  });

  it("points at real support rather than implying the course is therapy", () => {
    const policies = pageText("policies");
    expect(policies).toMatch(/counselling/i);
    expect(policies).toMatch(/not therapy|therapy or a substitute/i);
  });
});
