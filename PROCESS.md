# Process overview

## What I built

<!-- MINE TO REWRITE: the draft below is accurate but it isn't in my voice. -->

**SLOP6676 Advanced Overthinking** — a course site for a fictional
postgraduate course about noticing when you are overthinking and choosing, on
purpose, whether to keep going.

The idea it ended up arguing is narrower than the one I started with. Most
advice about overthinking tells you to think less. This course claims the
problem is that a spiral *repeats*, and that it repeats because the thinking
never gets the conditions under which it would finish — conditions the
research says are oddly specific: an easy, automatic task with your attention
left free. That single claim is what turned a set of activities into a course.
It is also why the site is shaped the way it is: a lecture and a crit every
week, the lectures outdoors, and every class opening with ten minutes of
nothing.

The rule I care most about is that the course is fictional and the science in
it is not. Every claim on the site names a real author and year; the course's
own central claim is labelled a hunch, because that is what it is.

## Why the course is shaped this way

<!-- MINE TO REWRITE: these are my reasons, drafted from what I said as the
     course took shape. The arguments are mine; the wording needs to be too. -->

**Overthinking is universal and almost never taught.** Everyone has re-read a
two-word reply too many times, or shelved a decision because thinking about it
more felt like progress. It costs people sleep, decisions and years, and no
degree anywhere treats it as a subject. It gets handled as a personality quirk
or as a clinical problem, with nothing in between — and the space in between
is where nearly everybody actually lives. That gap is the reason this course
exists.

**Naming it was never going to be enough.** The course started out as a way to
*notice* overthinking. That is where most writing on the subject stops, and it
is the half that changes nothing on its own — you end up better at watching
yourself spiral. So the course moved from diagnosis to pivot: what you
actually do instead. Catch the loop, then aim the same machinery somewhere
useful, build the conditions where thinking finishes, and know which of the
things you reach for under stress are worth reaching for. Every crit ends with
something you can do, not something you now understand.

**A lecture and a crit every week, deliberately.** An earlier version of the
schedule alternated — a lecture some weeks, a crit others. I changed it,
because these are techniques, and techniques need practice at a rhythm rather
than exposure once a fortnight. Twice a week, every week, is what makes a
habit instead of a memory. The same reasoning gave every single class the same
ten-minute opening: the repetition *is* the teaching.

**The real target is quality of life.** Not marks, and not a body of
knowledge. The course is trying to hand people something small enough to keep
using after the semester ends, and simple enough to explain to someone else —
the kind of thing that gets passed on rather than filed. Most people already
know the one thing about themselves they would like to change; what they lack
is a slightly easier way in. If a student is still using one technique from
this course in five years, or has taught it to somebody, the course worked.
Nothing on the assessment page measures that, which is a limitation I am aware
of and have not solved.

**And the assessment calendar is part of the argument.** A course about not
adding to your mental load has no business adding to it. Both major
assessments land in the quiet middle of semester and nothing at all is due
after week 9, so that the weeks when everything else is due are weeks this
course spends being useful rather than demanding.

## What I would do differently

<!-- MINE TO WRITE. Candidates, from the log below: letting the content drift
     off-topic for a whole commit before catching it; the fact that the
     *name* was what caught it; deciding to hold the agent to a
     no-invented-facts rule and what that cost; making attendance compulsory
     in a course whose central promise is that you can always pass. -->

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

Then the drift got caught, and not by me:

> add how doomscrolling only incraesed all this, we think if we are spiralling
> over sumn and we doom scroll our mind goes balnk and its better but it sthe
> opposite, get scientific reasech and talk ab this. also, do you think the
> name is apt now seeing the path we are choosing now? do you have any name
> suggestions? also make my reflections file so i can add things.

> i mean we are not talking about overthinking anymore, thats my concern

This is the turn of the project worth writing about properly. I asked whether
the course name still fit, and the agent initially treated that as a naming
question and offered alternatives. It wasn't. The real problem was that four
of the ten content pages added in the previous commit — meditation, the silent
sandwich, the incubation lecture, and half the opening lecture — had stopped
being about overthinking at all. They were about attention and silence, sitting
next to the subject rather than arguing their way back to it. The agent had
even labelled the connective claim as an untested inference on the page, which
was honest and also meant the course's own spine was marked speculative.

The fix was not a rename. It was giving those pages an argument: that a spiral
repeats because the thinking never gets to finish, which makes silence and
incubation *directly* about overthinking rather than adjacent to it. The name
stayed, on the grounds that it is the constraint that caught the drift — a
broader title would have let all four pages quietly pass.

[`e2ea6d1`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rithikanallaparaju16/commit/e2ea6d1) —
added the doomscrolling lecture ("The blank that isn't"), rewrote the
incubation lecture around the repetition claim, gave the sandwich and
meditation studios opening sections stating why they are in an overthinking
course, and fixed a course description that still claimed sessions had
replaced lectures.

The research pass behind that commit turned up one finding that cuts against
the prompt that requested it, and it went on the page rather than being quietly
dropped. The claim "doomscrolling has made overthinking worse" is not
supported: the causal direction is unresolved, anxious people plausibly scroll
more, and Orben and Przybylski (2019) put technology use at around 0.4% of
variance in adolescent wellbeing. What *is* well supported is stranger and
more useful — Kang and Kurtzberg (2019) held break activity and duration
constant and found that people who took their break on a phone performed about
as badly as people who got no break at all. So the lecture argues that the
break isn't a break, and explicitly declines to argue that phones caused any
of this. The "mind goes blank" phenomenology, which is the thing the prompt
described, has no research behind it at all, and the lecture hands it to
students as the best open question in the course.

Then the course got serious about being a course:

> we are trying to make it a serious course, so a lecture and a crit each
> week. when the exams are approaching, this course doesnt give more stress,
> the major assignments are due in the time where the other courses do not
> have stress, when the stressful weeks are going on, we concentrate on how to
> manage that and how sweettreat,coffee or a nap fixes most of the things, pls
> check research i might be wrong

[`a6810c8`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rithikanallaparaju16/commit/a6810c8) —
relabelled the sessions as Crits, moved the audit to week 6 and the capstone
to week 9 so nothing is due after week 9, and added the week 10 lecture on
what actually helps under load. Every content file was renumbered so its
number is its week.

The best thing in this commit is the assessment calendar, and it came from the
prompt rather than from me. A course about not adding to your mental load
should not add to your mental load, so both assessments now land in the quiet
middle of semester and the last three teaching weeks — everyone else's crunch
— carry no deadline at all. That is a design argument the site makes out loud
on the assessment page.

The research pass corrected the prompt on two of its three points, which is
becoming the pattern. The nap holds up: Brooks and Lack (2006) found ten
minutes optimal, and thirty minutes produces a period of *impaired* alertness
first, so "have a nap" is worse advice than "have a ten-minute nap." Coffee is
oversold — Rogers et al. (2010) argue it returns habitual drinkers to baseline
rather than above it — and it carries an anxiety risk that matters more in
this course than most. The sweet treat is simply wrong: Mantantzis et al.
(2019) meta-analysed 176 effect sizes and found no positive mood effect at any
time point, with alertness *lower* and fatigue *higher* within the hour. The
sugar rush does not exist. The lecture keeps the biscuit and credits the ten
minutes away from the desk instead, which is exactly the confusion the course
exists to catch — you had a break and credited the sugar.

The honesty rule also bit the assessment page itself. I could find good
institutional practice against "assignment bunching" and a plausible
mechanism, but no study isolating clustered against spread deadlines with
proper wellbeing measures. So the page states the timing as design reasoning
rather than a finding, and invites students to argue with it.

Then culture, attendance, and the reasoning behind the weekly rhythm:

> also want the meditation guider to be an Indian, this course needs to be
> culturally diverse, techniques from various cultures can be included. and
> for reflections, you can add how we stepped from just overhtinking to giving
> ways to pivot and deal with it in a better way. talk about how much this is
> something we all face but is never adressed seriously. […] also made this
> course have lecture and studio every week unlike before whuch had either
> each week because i strongly beliebve tha this should be practiced on
> adaily basis and this course will stcikc with the students forever. and even
> passed down and hopefully chnage a few things ab themselves that they always
> wanted to in a slightly easieer way. the quality of life is sumn that is
> very imp and the course focuses mainly on this. […] the attendace in
> lectures and the participation in crits also have marks. this course has
> mandatory attendance because these techniques need practice and cant be
> online, classes are recorded, but physical attendance matters, so allocate
> marks for that as well

[`b1f6ffa`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rithikanallaparaju16/commit/b1f6ffa) —
replaced the visiting teacher with Revathi Menon, who teaches vipassana-style
practice in the Indian tradition the ten minutes is borrowed from; added the
week 4 lecture on provenance and the week 8 lecture on Morita therapy and the
Friendship Bench; published meditation's adverse-effect rates alongside its
benefits; and added a 20% attendance-and-participation component, dropping
the audit to 30 and the capstone to 50. The reasoning about the weekly
rhythm and quality of life went into "Why the course is shaped this way",
above.

Two things from this round are worth keeping in the write-up.

**The cultural brief made the course better by making it more sceptical, not
less.** Asking for cultural diversity could have produced a tour of nice
practices. Instead the research turned up a correction and a pattern. The
correction: the standard "MBSR is just Vipassana with the religion removed"
story is too simple — Husgafvel (2019) shows Kabat-Zinn was also shaped by
Mahāyāna, Zen and Dzogchen teachers, so the site says "Buddhist contemplative
traditions, plural". The pattern: the popular four-circle *ikigai* was made by
a British blogger in 2014 from a Spanish diagram, and the four-phrase
hoʻoponopono is a 2000s self-help product, not a Hawaiian one. Both follow the
same route — a communal practice compressed into a portable graphic and
recirculated as ancient authenticity, with the point moved from repairing
something between people to optimising one individual. That is a lecture, and
it is more honest than a syllabus of borrowed techniques with no history
attached.

The most uncomfortable thing it turned up is now on the site: Gee et al.
(2014) set out seven domains of connection in Aboriginal and Torres Strait
Islander social and emotional wellbeing, of which mind and emotions is *one*.
Nearly everything this course does lives in that single domain. I left that
contradiction on the page instead of resolving it, because I do not think I
can resolve it.

**Marked attendance is the sharpest tension in the course and I decided to
name it rather than smooth it.** A course whose standing promise is "you can
always pass, no reason needed" now compels attendance. The evidence is
genuinely split: Credé et al. (2010) show attendance predicts grades better
than almost anything else (ρ ≈ .44), but the same meta-analysis puts
*mandatory policies* at d = .21 from three studies. Confusing those two is
exactly the inferential slip the course teaches people to catch, so the page
says the requirement rests on an argument rather than on that evidence. The
design answer is three no-questions-asked absences on each half and a
definition of participation as *doing the activity* rather than talking —
because a course about anxiety that awarded marks for speaking up would be
marking the symptom.

## Before you ship

`pnpm check:evidence` verifies that this comment is gone, that your citations
resolve to real commits, that a crit week's reflection entry is in
`reflections/`, and that your `CLAUDE.md` is there. It checks that your account
is traceable, not that it is good: that is the marker's call.

Images aren't checked: unlike a citation whose SHA doesn't resolve, a broken
image is visible the moment this file is rendered on GitHub.
