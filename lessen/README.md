# Lessen

Lecture material: slides, speaker notes and demos, one folder per module. Nothing here is read by `sync.js`.

```text
lessen/
  STYLEGUIDE.md          design rules for slides and demos
  shared/                slide engine, demo styles and fonts, used by every module
    deck.css  deck.js    the slide engine
    demo.css  demo.js    shared look and key handling for demos
    fonts/
  module-N/
    slides.html          the deck (open in a browser)
    slides.pdf           the same deck as PDF, for students
    speaker-notes.md     what to say and do per slide, with timing
    demos/               interactive demos that run in the browser, also shown inside the slides
    live/                small prepared projects and prompts for live demos with an agent harness
```

## Presenting

Open `module-N/slides.html` in Chrome or Edge. It works offline; no server or build step.

| Key | Action |
|---|---|
| → · space · PageDown | Next step or slide |
| ← · PageUp | Back |
| Home · End | First · last slide |
| F | Fullscreen |
| T | Show clock and elapsed time |
| B | Black screen |

Break and exercise slides have a countdown: click "Start de timer". Add `#27` to the address to jump to slide 27. Demo slides load the demo inside the slide; the arrow keys keep working unless you are typing in a field. Every demo slide also has a link to open the demo in its own tab.

## Giving the slides to students

`slides.pdf` is the version to upload to Canvas Files. To rebuild it after a change: open `slides.html?print` in Chrome, press Ctrl+P, choose "Save as PDF", margins "None", and enable "Background graphics". Each slide becomes one page with all steps visible. Demo slides show a short description instead of the demo.

To hand out the interactive version, share the whole `lessen/shared` and `lessen/module-N` folders together; the deck needs both.

## Making the deck for a new module

1. Copy `module-1/slides.html` to `module-N/slides.html` and replace the slides. Keep the `<link>` and `<script>` lines that point to `../shared/`.
2. Follow [STYLEGUIDE.md](STYLEGUIDE.md) for slide types, components and writing.
3. Put demos in `module-N/demos/`, starting from an existing one so they share `shared/demo.css` and `shared/demo.js`.
4. Write `speaker-notes.md` with a timing table and one entry per slide.
5. Rebuild `slides.pdf`.
