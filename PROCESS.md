# Process overview

<!-- MINE TO REWRITE: accurate, and still not in my voice. The full working
     log is in PROCESS-LOG.md, which is where everything below was cut from. -->

## What I built

**SLOP6676 Unfinished Thinking**, a site for a fictional postgraduate course
about noticing when you are overthinking and choosing whether to keep going.

The argument narrowed as I went. Most advice says think less. This course says
a spiral *repeats*, because the thinking never gets the conditions to finish.
The research says those conditions are oddly specific, an easy automatic task
with your attention left free. That claim turned a pile of activities into a
course, and it is why there is a lecture and a crit every week, outdoors, each
opening with ten minutes of nothing.

The course is fictional. The science in it is not. Every claim names a real
author and year, and the central claim is labelled a hunch.

## Why the course is shaped this way

**Nobody teaches this.** Everyone has re-read a two-word reply too many times.
It gets handled either as a personality quirk or as a clinical problem, and
the space between those is where almost everybody lives.

**Noticing is only half.** The course started as a way to notice overthinking.
That is where most writing on it stops, and on its own it just makes you
better at watching yourself spiral. So every crit ends with something you do,
not something you understand.

**Twice a week, every week.** An earlier schedule alternated. Techniques need
a rhythm. The repetition is the teaching.

**The assessment calendar is part of the argument.** A course about not adding
to your mental load has no business adding to it. Both major assessments land
mid-semester and nothing is due after week 9, so the weeks everyone else is
drowning are weeks this course spends being useful.

## What I would do differently

<!-- MINE TO REWRITE. -->

I let the content drift. Four pages went off-topic for a whole commit, and
what caught it was the course *name*, not me reading the pages. A vaguer title
would have let all four through.

I made attendance compulsory in a course whose standing promise is that you
can always pass without giving a reason. I named that tension on the page
rather than solving it, and it is still not solved.

The no-invented-facts rule cost me things I wanted. Four times the research
contradicted me and the correction went on the site anyway.

## How I got here

Full log, prompts and commits, in [PROCESS-LOG.md](PROCESS-LOG.md). Five
moments that changed the work.

**The drift.** Four of ten pages had stopped being about overthinking. The fix
was not a rename but an argument, that a spiral repeats because thinking never
finishes, which puts silence back on the subject
([`e2ea6d1`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rithikanallaparaju16/commit/e2ea6d1)).

**Being wrong, on the record.** Sugar lifts mood at no time point (Mantantzis
2019). Walking slower is the *sad* gait (Michalak 2015). Both corrections are
on the site
([`a6810c8`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rithikanallaparaju16/commit/a6810c8),
[`7677d57`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rithikanallaparaju16/commit/7677d57)).

**Artwork.** The AI drew the first set by hand in SVG, and three portraits
came out as the same face
([`c4025b5`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rithikanallaparaju16/commit/c4025b5)).
I made the replacements in Stitch
([`1645a50`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rithikanallaparaju16/commit/1645a50)).

![The Crits hero as the AI drew it, flat gold faces on near-black](process-images/crit-before.png)

![The People page with the Stitch portraits, three distinct inked faces](process-images/people-after-stitch.png)

**Orientation, not artwork.** My images were 16:9 and the hero is 2.36:1, so
`object-fit: cover` beheaded all five figures. Fixed by padding each source
with edge replication and growing the hero with the viewport
([`4882ece`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rithikanallaparaju16/commit/4882ece)).
The same mistake returned reversed on the square portraits
([`d9a7f5b`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rithikanallaparaju16/commit/d9a7f5b)).

![The Crits hero mid-bug, the five figures cropped off at the neck](process-images/playwright-before.png)

![The same hero fixed, all five figures whole](process-images/playwright-after.png)

**Cutting the AI slop.** Asking for a better tone does nothing. I handed over
bans I could check afterwards, no em dashes, no prose colons, no "dive into",
and asked for the changed sentences before and after
([`fc21db0`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rithikanallaparaju16/commit/fc21db0),
37 files). The rules went into `CLAUDE.md`, and
[`534865f`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rithikanallaparaju16/commit/534865f)
turned them into tests. Writing those tests found three crits asking people to
speak with no way to decline, which is the rule the care policy rests on.
