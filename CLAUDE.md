# Working rules for this repo

This repo builds the course site for **SLOP6676 Unfinished Thinking**, a
fictional course arguing that overthinking is not too much thinking but
thinking that never gets to finish — and teaching the conditions under which a
loop can close. The platform is fixed and documented in `README.md`.
Everything below is about the content that goes on top of it.

The title carries the argument, so keep it load-bearing: if a page can't say
how it bears on that claim, it doesn't belong. The second meaning is
deliberate too — the course and the field are both unfinished, which is why
nothing here is written as settled.

## No invented facts

The course is fictional. The science in it is not, and must not be.

- Never state a research finding, statistic, study, researcher, or year unless
  it is real and you have checked it. If you are not sure, look it up.
- Attribute properly: name the researcher and the year in the prose, so a
  reader can go and find it. A claim with no name attached is a claim I have to
  take on faith, and I don't want the site making the reader do that.
- Say what the evidence actually shows, not what would be convenient. If a
  finding is small, contested, or a correlation being read as a cause, the copy
  says so — in plain words, not weasel words.
- Where a claim is my own hunch rather than a finding, frame it as a hunch and
  hand it to the students as something to argue with.
- Never fill a gap with a plausible-sounding citation. An honest "we don't
  really know yet" is course content; a fabricated study is a failure.

## Tone

- **Activity first, theory after.** A concept gets named after students have
  already produced the thing it names, never as a preamble.
- **Subtle humour, dry, never zany.** The course is genuinely useful and takes
  its subject seriously without taking itself seriously. No exclamation marks,
  no jokes that need a wink, no "fun fact!" energy.
- **Not boring, not a textbook.** Short paragraphs. Concrete over abstract. If
  a sentence sounds like a learning outcome, rewrite it.
- **Write for students, not for me.** Anything that explains how the template
  works, or reads as an instruction to the course author, is scaffolding and
  gets deleted, not left on a page students will read.

## Care with the material

Overthinking runs into anxiety, grief, and things students haven't told
anyone. So:

- Every activity that involves sharing has an explicit, in-writing opt-out.
  Passing is a normal move, not a failure, and never has to be explained.
- Nobody is graded on disclosure. Assessments mark noticing and reasoning, not
  how much someone was willing to say out loud. **Participation marks measure
  turning up and doing the activity — never speaking volume.** Talking more
  earns nothing extra; a student who passes on every share can still score
  full marks. In a course about anxiety, a mark for talking would punish
  exactly the people it is for.
- Attendance can be required and marked, but it is designed for people whose
  bodies and lives don't cooperate: absences are dropped rather than excused,
  no explanation is asked for, and no single missed week is worth anything.
- No page implies the course is therapy or a substitute for it. Where it's
  near the line, point at real support instead of improvising.

## Culture

The techniques in this course come from several traditions, and most of the
best-known ones came from outside the West before being renamed.

- **Name the origin, accurately.** Say where a practice comes from and who
  developed it. Where a Western therapy adapted an older practice, say that
  too rather than presenting the adaptation as the source.
- **Verify provenance before describing a practice.** Getting a tradition's
  history wrong is worse than leaving it out. Check it like any other claim.
- **No ancient-wisdom framing.** Practices are described as things people
  actually do, with the evidence stated at its real strength, including where
  it is thin. Nothing gets a pass on evidence for being old or foreign.
- **Avoid the wellness-industry inventions** — practices marketed as
  traditional that aren't, or that have been flattened into something the
  source culture wouldn't recognise.

## Working practice

- **Log as we go.** Every commit gets an entry in `PROCESS.md`: the prompt that
  drove it, quoted, plus a link to the commit or commit range. I rewrite these
  in my own words before submitting — don't write them as finished prose,
  write them as an accurate raw log.
- **`pnpm check` before claiming anything is done.** It runs types, the build,
  the accessibility scan, the link checker and the spec test. Don't report a
  change as finished on the strength of having made the edit.
- **Remove `STARTER_CONTENT` markers** as each fragment is genuinely replaced,
  not before.
- **Don't restructure the platform.** Collection keys, URLs and schema field
  names stay as `README.md` describes them. What students *see* those things
  called is mine to choose; what the build calls them is not.
