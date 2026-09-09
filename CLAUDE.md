# Working rules for this repo

This repo builds the course site for **SLOP6676 Advanced Overthinking**, a
fictional course about noticing the moment you could have stopped thinking and
choosing, on purpose, whether to keep going. The platform is fixed and
documented in `README.md`. Everything below is about the content that goes on
top of it.

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
  how much someone was willing to say out loud.
- No page implies the course is therapy or a substitute for it. Where it's
  near the line, point at real support instead of improvising.

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
