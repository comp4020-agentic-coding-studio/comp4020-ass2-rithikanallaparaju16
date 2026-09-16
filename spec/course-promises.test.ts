/**
 * Promises the site makes to students in prose, which the build cannot see.
 *
 * Each of these is a sentence printed on a page. If the data drifts away from
 * the sentence, the site is lying to a student about their own semester, and
 * nothing else in the pipeline would notice.
 */
import { describe, expect, it } from "vitest";
import { api, nodesOfType, pageText } from "./site";

const TEACHING_WEEKS = 12;
const weekOf = (n: { meta?: Record<string, unknown> }): number => Number(n.meta?.week);
const dateOf = (n: { meta?: Record<string, unknown> }, key: "date" | "due"): string =>
  String(n.meta?.[key]).slice(0, 10);

describe("the assessment calendar", () => {
  it("adds up to exactly 100%", () => {
    const total = nodesOfType("assessments").reduce(
      (sum, a) => sum + Number(a.meta?.weight ?? 0),
      0,
    );
    expect(total).toBe(100);
  });

  it("keeps the last three teaching weeks free of anything to hand in", () => {
    // The assessment page promises "the last three teaching weeks carry no
    // deadline at all", because those are the weeks everything else is due.
    // A component may still *close* in that window as long as there is
    // nothing to submit, which is how attendance works.
    const classes = [...nodesOfType("lectures"), ...nodesOfType("sessions")];
    const lastThree = classes
      .filter((n) => weekOf(n) >= TEACHING_WEEKS - 2)
      .map((n) => dateOf(n, "date"))
      .sort();
    const windowOpens = lastThree[0];
    const windowCloses = lastThree[lastThree.length - 1];
    expect(windowOpens, "no dated classes in the last three weeks").toBeTruthy();

    for (const a of nodesOfType("assessments")) {
      const due = dateOf(a, "due");
      const insideWindow = due >= windowOpens && due <= windowCloses;
      if (!insideWindow) continue;
      const spec = (a.spec ?? []).join(" ");
      expect(
        spec,
        `${a.id} falls due between ${windowOpens} and ${windowCloses}, so its spec must say there is nothing to submit`,
      ).toMatch(/nothing to submit/i);
    }
  });

  it("states the soft deadlines it promises on the policies page", () => {
    const policies = pageText("policies");
    expect(policies).toMatch(/end of the break|end of the mid-semester break/i);
    expect(policies).toMatch(/a day or two/i);
  });
});

describe("the twelve-week schedule", () => {
  const classes = [...nodesOfType("lectures"), ...nodesOfType("sessions")];

  it("puts at least one class in every teaching week", () => {
    const covered = new Set(classes.map(weekOf));
    const empty = Array.from({ length: TEACHING_WEEKS }, (_, i) => i + 1).filter(
      (w) => !covered.has(w),
    );
    expect(empty, `weeks with no lecture and no crit: ${empty.join(", ")}`).toEqual([]);
  });

  it("never schedules a class outside the published teaching period", () => {
    for (const n of classes) {
      const date = dateOf(n, "date");
      expect(date >= api.course.startDate, `${n.id} is before teaching starts`).toBe(true);
      expect(date <= api.course.endDate, `${n.id} is after teaching ends`).toBe(true);
    }
  });

  it("says so on the page whenever a week is only provisional", () => {
    // The back half is set by a cohort vote, so those weeks are a plan rather
    // than a promise. The draft flag and the page have to agree, otherwise a
    // student reads a guess as a commitment.
    const provisional = classes.filter((n) => n.meta?.draft === true);
    expect(provisional.length, "nothing is flagged provisional").toBeGreaterThan(0);
    for (const n of provisional) {
      expect(pageText(n.id), `${n.id} is draft but its page never says so`).toMatch(
        /provisional/i,
      );
    }
  });

  it("links a real deck from at least one lecture", () => {
    const withSlides = nodesOfType("lectures").filter((n) => typeof n.meta?.slides === "string");
    expect(withSlides.length).toBeGreaterThan(0);
    for (const n of withSlides) {
      expect(String(n.meta?.slides)).toMatch(/^\/decks\/[a-z0-9-]+\/$/);
      expect(pageText(n.id), `${n.id} sets slides but renders no link to them`).toMatch(
        /slides/i,
      );
    }
  });
});
