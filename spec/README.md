# The spec

Every deliverable's spec — what the markers consider when they judge whether
your work matches what was required — is published on the course website, and
this repo's name tells you which one applies: the course API maps repo prefixes
to deliverables, and the `start` course skill walks your agent through pulling
the right one. The brief poses the problem; the spec is the fixed contract. Read
both on the site before you plan or build.

One file is supplied here:

## Course coherence (shipped, always on)

`data-integrity.test.ts` checks the one cross-page fact the content schemas and
build cannot: dated material stays inside the course period. The build already
owns compilation, accessibility, internal links, content references, API
generation and deck compilation.

## This course's checks

Four suites, each protecting a promise SLOP6676 makes in prose. They read the
built site rather than the source, because a rule that holds in the markdown
and gets dropped by a template is not a rule that holds. `site.ts` is the
shared reader, not a test.

- **`safeguarding.test.ts`** — the rules in `CLAUDE.md` under *Care with the
  material*. Every crit that asks someone to say something out loud offers an
  explicit way to decline, and no mark anywhere depends on how much a person
  disclosed. This is the check that matters most: the course asks people to
  talk about anxiety, and an opt-out is the easiest line to lose when a brief
  gets rewritten for length.
- **`evidence.test.ts`** — *No invented facts*. A page that states a finding
  has to date it. No test can tell a real citation from a convincing fake, so
  this enforces the weaker thing a test can establish, which is that a
  statistic never appears anonymously.
- **`course-promises.test.ts`** — sentences printed on the assessment and
  schedule pages. Weights total 100, the last three teaching weeks stay free
  of anything to hand in, every one of the twelve weeks has a class, and a
  week flagged provisional says so on its own page.
- **`house-style.test.ts`** — *Plain writing, and no AI slop*. The two bans a
  machine can check, em dashes and the usual generated-prose tells. The rest
  of that section is a judgement call and stays one.

Each check was mutation-tested: the promise was broken in the build output,
the suite was confirmed to fail on exactly that, and the output was restored.
A check that cannot fail is decoration.

## Your spec tests (yours to write)

Turning the week's published spec into tests is your work, not the template's.
Some spec lines are mechanically checkable — assert those here, in your own test
file alongside the supplied ones (any `spec/*.test.ts` runs with `pnpm check`).
Some lines only a person can judge; leave those to the crit. There is no minimum
count: select the checks that protect your work's real promises, and test the
**contracts** — what the page must do, not how you built it — so the tests
survive a change of approach, or of stack.

A green suite here is backpressure, not a mark: your tutor verifies what you
deployed against the published spec at the crit, and keeping your own tests
green is how you arrive with no surprises.
