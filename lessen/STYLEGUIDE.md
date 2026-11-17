# Style guide for slides and demos

How lecture slides and demos in `lessen/` look and read. Follow this when making or changing a deck so every module looks the same. The styles themselves live in `shared/deck.css` (slides) and `shared/demo.css` (demos); change them there, not per deck.

## Look

Dark, calm, one accent colour. Based on the lecturer's own site (near-black background, violet accent).

| Token | Value | Use |
|---|---|---|
| `--bg` | `#08080B` | Slide background |
| `--surface` | `#13131A` | Cards, panels |
| `--surface-2` | `#1C1C26` | Chips, inline code, inputs |
| `--line` | `#2E2E3D` | Borders |
| `--text` | `#F5F5F7` | Body text |
| `--muted` | `#A6A6B5` | Secondary text, captions |
| `--accent` | `#A78BFA` | The accent: kickers, key terms, highlights |
| `--accent-strong` | `#8B5CF6` | Buttons, bar fills |
| `--cyan` | `#67E8F9` | Second voice: the agent harness, breaks, input |
| `--green` | `#86EFAC` | Correct, good, output, live demos |
| `--amber` | `#FCD34D` | Warning, "you" in a dialogue |
| `--red` | `#FCA5A5` | Wrong, risk |

- Violet is the only decorative colour. Green, amber and red always carry meaning (good, warning, wrong). Don't use them for decoration.
- Token chips and the context stack use five pastel fills (`#C4B5FD`, `#A5F3FC`, `#BBF7D0`, `#FDE68A`, `#FBCFE8`) with dark text.
- No photos of the lecturer. No stock photos. Visuals are drawn with HTML, CSS or SVG. Emoji are allowed as card icons, one per card.

**Fonts** (bundled in `shared/fonts`, so they work offline):

| Font | Use |
|---|---|
| Space Grotesk 600 | Titles, big statements, big numbers |
| Inter | Body text |
| JetBrains Mono | Code, kickers, labels, tokens |

## The stage

Every slide is designed at **1920 × 1080** and scaled to the screen. Sizes below are for that stage.

| Element | Size |
|---|---|
| Body text | 40px |
| Slide title (`h2`) | 76px |
| Card text | 33px, card title 39px |
| Lead paragraph (`.lead`) | 48px |
| Code (`pre`) | 32px |
| Smallest text allowed | 26px (kickers, labels); never smaller for content |

Padding is 120px left and right. The body of a slide is centred vertically in the space under the title.

## Slide types

| Class on `<section class="slide …">` | Use |
|---|---|
| *(none)* | Normal slide: `.kicker`, `h2`, then content |
| `title` | First and last slide |
| `section` | Start of a section: big outlined number (`.num`), title, one line (`.q`) |
| `statement` | One big sentence (`.big`), optional follow-up (`.after`). For the ideas students must remember |
| `demo` | An interactive demo in an iframe |
| `live` | A live demo with an agent harness. Green tint, with the prompt in a `.prompt` box |
| `exercise` | "Jouw beurt": students work on an exercise. Amber tint, the exercise code in a `.badge` (E1, M2 …), the task on the left and a `.timerbox` with a countdown on the right |
| `break` | A break, with a countdown |

Set `data-section="1.2 Hoe een LLM werkt"` on the first slide of a section; the following slides inherit it. It shows in the footer.

## Components

| Class | What |
|---|---|
| `.kicker` | Small label above the title: where we are or what kind of slide this is |
| `.lead` | One larger opening sentence |
| `.cards.c2` … `.c5` + `.card` | Grid of cards. Variants: `.accent`, `.good`, `.bad` |
| `.callout` | A definition or key point. Variants: `.warn`, `.good` |
| `.term` | A key term where it is introduced; `.nl` for the Dutch gloss after it |
| `.chips` + `.chip` | Short labels; `.chip.on` for the highlighted one |
| `table.t` | Table; `tr.hl` highlights a row |
| `.flow` + `.node` + `.arrow` | Steps from left to right |
| `.cols` | Two columns; `.wide-left`, `.wide-right`, `.middle` |
| `pre` | Code, with spans `.k` keyword, `.s` string, `.n` number, `.f` function, `.c` comment; `pre.out` for output |
| `.toks` + `.tok.c0`…`.c4` | Tokens |
| `.bars` + `.bar` | Probability bars (`style="--p:38"`) |
| `.chat` + `.line.you/.model/.harness` | A dialogue between you, the model and the agent harness |
| `.bignum` | One very large number |
| `.prompt` | A prompt, shown as you would type it; `.prompt.small` for longer ones. Inside a `.card` it becomes a small example at the bottom of the card (put the card text in a `<p>`) |
| `.vs` + `.side.a` / `.side.b` | Two prompts side by side: the weak one (red) and the better one (green) |
| `.rules` | A numbered list of rules or questions, one per line |
| `.qa` | Recap questions on the left, the answer revealed on the right |
| `.agenda` | The three blocks and two breaks of a lecture |
| `.badge` | The code of an exercise in a title |
| `.timerbox` + `.clock[data-min]` + `button` | A countdown; the engine starts it on a click |
| `.step` | Appears on the next click |

## Rules for a good slide

- **One idea per slide.** If a slide needs two titles, make two slides.
- **Few words.** A slide supports what the lecturer says; the full text is in the course on Canvas. Aim for at most about 40 words, and no more than four bullets.
- **Reveal in steps** when the lecturer builds up an argument or asks a question first. Don't put a step on every line out of habit.
- **Show, then name.** Start with an example or a question, then give the term and the definition.
- **Every section** starts with a `section` slide and has at least one `statement` slide for its main point.
- **Something to do every 10–15 minutes**: a demo, a live moment, a question to the room or an exercise.
- **Short explanation, then students work.** Plan around the `exercise` slides: about a third of the lecture is student work. Each exercise slide names one exercise from the module's exercise page, says whether it is with or without AI, and has a countdown. Students work alone and write in their fill-in file. No comparing or class debrief afterwards: when the timer ends, the lecture moves on.
- **Start with a recap** of the previous module: three questions with a revealed answer.
- Nothing may touch the footer. Check every slide at 1920 × 1080.

## Writing

The same rules as the course text (see [AGENTS.md](../AGENTS.md)):

- Simple Dutch, short sentences. Many students are not native speakers.
- Established English terms stay in English (token, prompt, agent harness, context window, hallucination…). Mark them with `.term` where they are introduced and explain them in plain words.
- Say model, agent harness or agent. Write "agent harness" in full, and never "AI-assistent".
- Use "edge case", not "randgeval".
- Accurate claims. No hype, and no achievements of AI without a verified source.
- Slide titles are short statements or questions in sentence case, not labels: "Een model onthoudt niets", not "Geheugen".
- The slides follow the section numbers of the module on Canvas (1.1, 1.2 …) so students can find the text back.

## Demos

- One HTML file per demo in `module-N/demos/`, plain HTML, CSS and JavaScript. No build step, no CDN: a demo must work offline. A library goes in `demos/vendor/` with its licence.
- Link `../../shared/demo.css` and include `../../shared/demo.js` (it keeps the arrow keys working when the demo runs inside a slide).
- Design for about **1820 × 880** (the space inside a demo slide) with no scrolling of the page. Text at least 18px, main text 22–24px.
- A demo shows **one** idea and has presets, so the lecturer can click through it without typing.
- Be honest when a demo simplifies: say so in the demo itself (a small pill in the header) and in the speaker notes.
- Text in the demo is Dutch, like the slides.

## Speaker notes

`module-N/speaker-notes.md`, written in English for the lecturer:

- A checklist for before class.
- A timing table: three hours, two breaks of 15 minutes after the first and the second hour, so blocks of 60, 45 and 45 minutes.
- One entry per slide, with the slide number, the number of steps, what to say, and for demos the exact clicks in order.
- For each exercise slide: how long, with or without AI, and what to watch for while walking around. No debrief questions.
- What to cut when late, what to add when early, and what to say when a live demo behaves differently than planned.
