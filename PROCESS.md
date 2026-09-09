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

Then a much larger steer, which brought lectures back, added the meditation
and silence material, and set the rule about scientific accuracy:

> students can also talk about funny or interetsing ways they stopped
> overthinking, there can be some lectures in the course just to make the
> students comfortable and open. Lectures can talk ab how not to take
> anything seriously. serious science behind overthinking. but shouldnt be
> more theory and boring. needs to be interesting, add subtle humour. any
> sensitive topics are respectfully taken and students do not have to speak
> ab it if theyre not comfortable. some surprising techniques that work. like
> meditation helps think and process things better, so we can have one
> session where we bring a professional to jhelp meditate and we follow 10
> mins of that every class and encourage to do it everyday. We also need to
> adress the main cause of overhtinking that is some unprocessed feeling or
> emotion. talk about when humans process emotions of feelings weel? when
> they slow down and not run behoind things, cooking,showering,eating but
> sadly now a days we cook w music or order out mostly, eat with music or
> watching sumn, shower w music or in a hurry. our mind has no time to be
> free and creative. this is the knowledge i have. check scientifically add
> more interesting things, each lecture in the beginning has a detox. one
> crit day we all eat in silence and look at what we eat, one studio day we
> make our own sandwich in silence, when we do the most human basic things
> just with ourselves we underrstand ourselves better, we understand pattens,
> we understand what we like and what we dont, this is how we adress
> overthinking, brain had space to process. This is my knowledge, i could be
> wrong, add some sceientific studies or graphs, dont make it boring or too
> technical. The lecturers happen in open areas, places where thoughts flow,
> overthinking might happen but gradually reduce, students can suggest
> places, but everyone must be on time. check sceintifically, i dint want
> wrong information(add this in claude.md).

[`ad08d4b`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rithikanallaparaju16/commit/ad08d4b) —
the course went from four studios to three outdoor lectures plus seven
studios, every class opening with a ten-minute guided practice. New studios:
a guest meditation teacher ("Ten minutes, guided"), a silent sandwich
("The sandwich"), and a collection of the undignified things that actually
break a spiral ("How you stopped"). New lectures: cognitive defusion and the
room's ground rules, the rumination literature, and the incubation research.
The capstone crit now opens with the whole class eating in silence.

The "check scientifically, I don't want wrong information" instruction became
the first rule in `CLAUDE.md`, and drove the research pass behind this commit.
Claims were checked before being written, and two things came back from that
check worth recording. First, the user's framing that unprocessed emotion is
*the* cause of overthinking overruns the evidence — Borkovec's cognitive
avoidance model is one leading theory with live rivals, so the lecture says
that rather than asserting the cause. Second, the widely-quoted "41%
improvement" figure from Baird 2012 could not be verified from the source, so
the page reports the direction of the result and not the number. Where a
claim is a hunch — including the course's own argument that modern life has
filled in the incubation slot — the page labels it a hunch and hands it to
students to argue with.

No graphs, in the end: the papers' effect sizes weren't reproducible from what
could be verified, and a chart of numbers we hadn't confirmed would have
broken the rule the commit exists to enforce. The comparisons are tables
instead, which the theme already styles.

Verified with `pnpm check` (22 pages, no accessibility violations, no broken
links, 16 graph nodes / 22 edges, spec test passing) and headless-browser
screenshots of the new lecture pages.

## Before you ship

`pnpm check:evidence` verifies that this comment is gone, that your citations
resolve to real commits, that a crit week's reflection entry is in
`reflections/`, and that your `CLAUDE.md` is there. It checks that your account
is traceable, not that it is good: that is the marker's call.

Images aren't checked: unlike a citation whose SHA doesn't resolve, a broken
image is visible the moment this file is rendered on GitHub.
