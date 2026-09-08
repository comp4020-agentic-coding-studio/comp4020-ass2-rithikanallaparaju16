# Process overview

<!-- TEMPLATE: this file is a shape to fill in, not a form. Replace everything
     in it with your own overview, and delete this comment — `pnpm
     check:evidence` will remind you if it's still here. -->

Written by you, for a reader: how you got from the brief to the harness and
agentic workflow behind this submission. Markers read this file and follow its
citations; they don't trawl the repo for evidence you didn't point at.

This file is the shape; the course site's
[assessment page](https://comp.anu.edu.au/courses/comp4020-agentic-coding-studio/topics/assessment/#what-you-submit)
is the requirement, and its
[word counts](https://comp.anu.edu.au/courses/comp4020-agentic-coding-studio/topics/assessment/#word-counts)
cover every deliverable.

## What I built

One paragraph: the thing, and the idea behind it.

## How I got here

<!-- Raw log kept as citations land, to rewrite into prose before submitting. -->

The course concept came out of a back-and-forth about what "advanced
overthinking" should actually teach, then a steer toward an activity-first,
discussion-driven shape:

> i wanna make a course called "advance overthinking" which helps the student
> realise when theyre overtthinking and minimise it. its about not thinking
> less but thinking intentionally. it has to seriously explain and activitues
> can help reduce it. firsy there can be some actvivty where we all
> overanalyse a simple "ok" in layers and then discuss ab when we couldve
> stopped and ewhy. there is no right or wrong answer. we can discuss a simple
> funny thing that we overhtined ab nad hwat it turned out to be. there can
> also be an activity where we learn to overthink the best scenarios as well
> because positive thinking. tell me what you think ab it, we can refine it
> more

> let it be more activity and less theory based, more like this agentic
> course where we learn mostly from discussions instead of lectures

> Start building it

[`95de165`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rithikanallaparaju16/commit/95de165) —
built that into the site: four discussion-first studio sessions ("The layered
'OK'", "The reveal", "Aim it at the good", "When it helps"), one lecture
repurposed to explain why the course doesn't otherwise run on lectures, two
holistic assessments (a mid-semester audit, an open-ended capstone), the
course record and session labels (Studio/Studios), and matching homepage/hub
copy. Verified with `pnpm check` (types, build, axe, link-checker, spec test —
all clean) and a manual pass over the rendered pages in a browser.

## Before you ship

`pnpm check:evidence` verifies that this comment is gone, that your citations
resolve to real commits, that a crit week's reflection entry is in
`reflections/`, and that your `CLAUDE.md` is there. It checks that your account
is traceable, not that it is good: that is the marker's call.

Images aren't checked: unlike a citation whose SHA doesn't resolve, a broken
image is visible the moment this file is rendered on GitHub.
