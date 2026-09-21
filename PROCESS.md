# Process overview

## What I built

**SLOP6676 Unfinished Thinking.** I chose this topic because it is very
relevant to the current generation. All of us get easily distracted, we have
much shorter attention spans, and so on.

So a course like this can help students understand how humans were actually
designed to work, and show that the fault was never with who they are. They
just need to be careful about the small things that make a very large
difference.

The course is interactive and is mostly based on human to human talks,
understanding nature better, and understanding your own body better.

## Why the course is shaped this way

**It runs on practice, not information.** This course relies a lot on
attendance, because I believe the practices taught here should be practised
very regularly to show any impact. It asks for feedback because every human is
different, and dealing with thinking is different for each of them.

**Students should feel safe to express themselves and evolve together.** That
is why the deadlines for assignments were also thought through, to make them
work best for students.

**It relies on small habits, every day.** The final assignment was made to
check exactly that. It cannot be done in one day. It is a small log kept from
time to time. The assignments do not need a lot of time. They need thought and
discipline.

**Twice a week, every week.** An earlier schedule alternated. Techniques need
a rhythm. The repetition is the teaching.

**The assessment calendar is part of the argument.** A course about not adding
to your mental load has no business adding to it. Both major assessments land
mid-semester and nothing is due after week 9, so the weeks everyone else is
drowning are weeks this course spends being useful.

## What I would do differently

First, I would stick to the deadline. I really missed it this time.

I would also plan the whole project content ahead. With better planning I do
not think I would have changed the course name, or gone back and redone
content a second time.

And I would not waste credits generating images. I would go straight to Google
Stitch, and use Playwright to check how they render.

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

**Cutting the AI slop.** Asking for a better tone does nothing, so I tried to
fix it with a prompt of bans I could check afterwards.

> Avoid AI giveaway phrases like "dive into," "unleash," or "game-changing."
> […] Do not use emdashes […] Do not use colons unless part of input
> formatting […] No fake engagement phrases like "Let's take a look" […]
> Match the tone to feel human, authentic and not robotic or promotional.
>
> Keep the tone more human, there is a lot of sloppy ai text

I also asked for the changed sentences before and after
([`fc21db0`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rithikanallaparaju16/commit/fc21db0),
37 files). The rules went into `CLAUDE.md`, and
[`534865f`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rithikanallaparaju16/commit/534865f)
turned them into tests. Writing those tests found three crits asking people to
speak with no way to decline, which is the rule the care policy rests on.
