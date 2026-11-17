# Module 1: speaker notes

Notes for the lecturer. Slides: [slides.html](slides.html). Slide numbers match the counter at the bottom right of each slide.

The slides are in Dutch. These notes are in English and tell you what to say and do.

## Before class

1. Open `slides.html` in Chrome. Press **F** for fullscreen, **T** to show the clock and elapsed time.
2. Click through the four demo slides once (14, 23, 29, 48) so you know they load.
3. Open a terminal in `lessen/module-1/live/01-harness` and check that `npm test` shows one failing test.
4. Open a second terminal in `lessen/module-1/live/02-scope-creep`. Open its `index.html` in a browser tab.
5. Have a chat window ready (Claude or ChatGPT) for the quick questions on slides 24, 34 and 50.
6. Try the live prompts once before class. Model answers change between versions; see "What can go differently" at the end.

Keys: **→** or **space** next, **←** back, **F** fullscreen, **T** timer, **B** black screen. Typing `#27` after the URL jumps to slide 27.

## Timing

Three hours with two breaks of 15 minutes: 150 minutes of teaching.

| Clock | Block | Slides | Content |
|---|---|---|---|
| 0:00 – 0:15 | 1 | 1 – 9 | Who you are, the course, today |
| 0:15 – 0:40 | 1 | 10 – 19 | 1.1 What is AI? (demo: spam filter) |
| 0:40 – 1:00 | 1 | 20 – 25 | 1.2 LLMs and tokens (demo: tokens) |
| 1:00 – 1:15 | | 26 | **Break** |
| 1:15 – 1:40 | 2 | 27 – 35 | 1.2 Prediction, training, "does it understand?" (demo: mini model) |
| 1:40 – 2:00 | 2 | 36 – 42 | 1.3 The agent harness (live: Claude Code) |
| 2:00 – 2:15 | | 43 | **Break** |
| 2:15 – 2:27 | 3 | 44 – 50 | 1.4 Context (demo: context window) |
| 2:27 – 2:42 | 3 | 51 – 57 | 1.5 Limitations (live: scope creep) |
| 2:42 – 2:50 | 3 | 58 – 63 | 1.6 Responsibility |
| 2:50 – 2:55 | 3 | 64 – 67 | 1.7 Quality control |
| 2:55 – 3:00 | 3 | 68 – 70 | Recap and homework |

Block 3 is the tightest. **If you run late**, cut in this order: slide 32 (reasoning models), slide 56 (models differ), the live part of slide 55 (just show the slide), slide 60. **If you have time left**, see "Extras" at the end.

---

## Block 1 (60 min)

### Intro · slides 1 – 9 · 15 min

**1 · Title.** Have it on screen while people walk in.

**2 · Hallo, ik ben Dimatri.**
- Keep it short and concrete: you build things for a living, for different clients.
- You studied at this school yourself. That lowers the distance.
- Mention Code Automation in the second year: "some of you will see me again."

**3 · Van games tot webplatformen.**
- One sentence per card. Pick the one example you enjoy telling: the AI avatars in VR that talk back are a good one.
- Don't list a CV. The point: you build real things, in very different areas.

**4 · Bijna alles wat ik vandaag bouw, bouw ik samen met AI.** *(1 step)*
- Say the sentence, pause, then reveal the second part.
- This sets the tone of the course: you are AI-native, and that only works because you can program.

**5 · Zo werkt een developer vandaag.** *(3 steps)*
- This is why the course exists. Companies expect this skill.
- Three words to remember: juist, verantwoord, kritisch.

**6 · Acht modules.**
- Walk through quickly. Module 1 is the "why". Modules 2–8 are the "how".
- Say it out loud: the course is new, it may change, feedback is welcome.

**7 · Hoe werkt het?**
- Portfolio with oral defence in January. The exercises per module are part of that portfolio.
- Test jezelf quizzes do not count. They are for the student.
- Tools: they use GitHub Copilot in VS Code. You will also show Claude Code today. Same principle, different tool.

**8 · Drie blokken, twee pauzes.** Tell them when the breaks are. People listen better when they know.

**9 · Wat gebeurt er eigenlijk als je iets typt in ChatGPT?**
- Ask for hands: who uses AI every day? Who can explain how it works?
- Take two or three answers. Don't correct them yet. Say: "By the end of today you can answer this."

### 1.1 Wat is AI? · slides 10 – 19 · 25 min

**10 · Section.** One sentence: AI is much wider than ChatGPT.

**11 · Je gebruikt AI elke dag.** *(1 step)*
- Ask: "which of these did you use today?"
- Reveal the definition. AI is an umbrella term.

**12 · Jij schrijft de regels.** *(4 steps)*
- This is normal programming: you write the rules.
- Reveal the four lines one by one. The punchline: you can never keep up.

**13 · De computer leert uit voorbeelden.** *(1 step)*
- Three boxes: training data → training → model. Use these three words on purpose, they come back all day.
- Reveal the table. The key row: with ML, the computer makes the rules.

**14 · DEMO: spam filter.** *(about 6 min)*
Click the preset messages in this order and let the class predict before each click:
1. `GRATIS iPhone! Klik hier`: both say spam.
2. `Gefeliciteerd, u bent de winnaar…`: the rules miss it (no rule matches), the model catches it. Show the coloured words: these words pushed it towards spam.
3. `Is de les van morgen gratis?`: the rules say SPAM because of the word "gratis". The model says no. A rule has no sense of the rest of the sentence.
4. `Investeer vandaag in bitcoin en word rijk`: the model misses it (about 16%). Ask why. Answer: nothing like it is in the training data; the dashed words are unknown.
5. Click **+ dit bericht is spam**. The model jumps to about 95%. "We didn't write a rule. We gave an example."

Points to make: the model gives a **percentage**, not a yes/no. It is only as good as its examples.

**15 · Elk model is een voorspellingsmachine.** *(2 steps)*
- This is the most important idea of the day. Say that.
- 97% spam also means 3% wrong. Every model can be wrong, always.

**16 · Elk model heeft zijn eigen taak.** *(2 steps)*
- Every row: different data in, different prediction out.
- The highlighted row is where the rest of the course lives.
- Narrow vs general: an LLM does many tasks, but only with text.

**17 · Neural networks.** *(3 steps)*
- Keep it light. They don't need the maths.
- What matters: nobody wrote the rules. They are spread over billions of numbers. Even the makers can't fully explain an answer.
- "Inspired by the brain" is fine. Don't say it works like a brain.

**18 · Generative AI en multimodal.** *(1 step)*
- Two terms they will hear everywhere.
- Example for multimodal: paste a screenshot of an error, get an explanation.

**19 · Een model is geen product.** *(1 step)*
- ChatGPT is a product: several models plus software.
- From now on we zoom in on one part: the LLM.

### 1.2 Hoe een LLM werkt (part 1) · slides 20 – 25 · 20 min

**20 · Section.**

**21 · Large language model.** *(1 step)*
- One sentence definition: it predicts the next piece of text.
- "Large" twice: the model and the data.
- GPT, Claude, Gemini, Llama: different companies, same principle.

**22 · Geen letters, geen woorden: tokens.** *(1 step)*
- This is the real split of this sentence by a real tokenizer. The small numbers are the token IDs.
- For the model each token is just a number.

**23 · DEMO: tokens.** *(about 7 min)*
1. Click **Engels**, then **Nederlands**. Compare "tokens per woord". Dutch needs more.
2. Click **Code**. Punctuation costs tokens too.
3. Click **Lang woord**. One Dutch word, six tokens.
4. Switch to **Wat het model echt krijgt**. "This is what the model sees. Numbers."
5. Type a student's name. Names are often cut in strange pieces. They like this.
6. Click **strawberry**. Three tokens. This sets up the next slide.

Students do this themselves in exercise E4 with the OpenAI tokenizer.

**24 · Hoeveel r's staan er in "strawberry"?** *(3 steps)*
- We see ten letters. The model sees three tokens.
- Now try it live in a chat window. Ask: *"Hoeveel keer staat de letter r in strawberry?"*
- Current models usually get this right, because it became famous. So say "this went wrong for a long time", then try something harder:
  - *"Hoeveel keer staat de letter e in onverantwoordelijkheidsgevoel?"* (correct: 5)
  - *"Schrijf het woord programmeertaal achterstevoren."* (correct: laatreemmargorp)
  - Ask a student for a long word.
- Whether it fails or not, the lesson holds: the model has no direct view of letters.

**25 · Tokens bepalen drie dingen.** *(3 steps)*
- Cost: you pay per token, in and out.
- Limit: comes back in 1.4.
- Strange errors: what you just saw.

**26 · PAUZE.** Click "Start de timer" for a 15-minute countdown.

---

## Block 2 (45 min)

### 1.2 Hoe een LLM werkt (part 2) · slides 27 – 35 · 25 min

**27 · Voorspel het volgende token.**
- Ask first: "what comes next?" Let them shout: `items`, `arr`, `n`, `10`…
- Click **Kies een token** a few times. Different result each time. That is how the model picks.
- The numbers are made up, the idea is real.

**28 · Kies, plak, en opnieuw.** *(2 steps)*
- The loop: look at everything, compute probabilities, pick one, append. Hundreds of times.
- Reveal temperature: a setting for how much randomness.
- That is why the same question gives different answers.

**29 · DEMO: mini language model.** *(about 8 min)*
This is a real model, trained in the browser on the 37 sentences on the left.
1. Read two or three training sentences aloud so they see how small the data is.
2. Prompt `Parijs is de hoofdstad van`, context **2 woorden**. Point at the bars: five countries, 20% each. Click **Volgend woord** a few times (use **Opnieuw** in between). You get "Parijs is de hoofdstad van België". A fluent, wrong sentence. **That is a hallucination.**
3. Switch to **5 woorden**. Now it sees "Parijs" and says Frankrijk, 100%. More context, better prediction.
4. Switch to **1 woord**, prompt `Python is`, click **Schrijf de zin** a few times. Nonsense. With one word of context it has no idea what the sentence is about.
5. Temperature: set it to 0 and write a sentence three times: always the same. Set it to 2: wild.
6. Type a word that is not in the data (for example `quantum`). The warning appears: it just guesses.
7. If there is time: add a sentence to the training data (for example "Dimatri is de docent."), click **Train het model**, then prompt `Dimatri is`. It learned something new in a millisecond.

Be honest about the difference: this toy only counts which words follow which. A real LLM is a neural network with billions of parameters that looks at thousands of tokens and also handles sentences it never saw. Same task, far more powerful model.

**30 · Wat zagen we?** *(5 steps)* Four lessons from the demo, then the "real LLM" line. Go quickly, they just saw it.

**31 · Een LLM wordt in fases getraind.** *(2 steps)*
- Pretraining gives knowledge. Fine-tuning gives behaviour.
- After the cutoff the model is frozen.
- Step 1 (side effect): people rate agreeable answers higher, so the model learns to agree. This comes back as "sycophancy" in 1.5.
- Step 2 (cutoff): a new framework version after the cutoff is unknown to the model.

**32 · Reasoning models.** *(3 steps)* Short. The "thinking" is also predicted text. *(Cut this slide first if you are late.)*

**33 · Begrijpt een LLM wat het schrijft?** *(3 steps)*
- Be careful and honest here. To predict code well, the model must learn how code works. Those learned patterns are abstractions.
- Whether that counts as "understanding": experts disagree. Don't pick a side for them.
- What is certain: not a database, not a calculator, every answer is a prediction.

**34 · Een LLM is geen rekenmachine.** *(2 steps)*
- Calculator: fixed rules, same input → same output. That is "deterministic".
- LLM: it predicts. Small sums it has seen millions of times. A big multiplication it has to build up step by step, like you on paper, and it can slip.
- Optional live moment: ask a chat model *"Hoeveel is 48 271 × 9 314? Antwoord zonder code of tools."* Then reveal the answer: **449 596 094**. Many models get it right now, some get a few digits wrong. Both outcomes work: "it can be right, but you can't count on it."
- Last line is the bridge to 1.3: tools let the model run code that calculates exactly.

**35 · Wat betekent dat voor jou?** *(3 steps)* Read the three consequences slowly. These are exam-level sentences.

### 1.3 De agent harness · slides 36 – 42 · 20 min

**36 · Section.** The question on the slide is the hook: the model only writes text, so who does the rest?

**37 · Een LLM kan maar één ding.** *(2 steps)*
- Text in, text out. That is all.
- It cannot open a file, run code, search, or change anything.
- Then the puzzle: Copilot clearly does those things. How?

**38 · De agent harness.** *(2 steps)*
- Car comparison: the model is the engine, the agent harness is the rest of the car.
- Definition: the software around the model that gives it abilities.

**39 · Vier dingen.** *(4 steps)* What an agent harness does. "Tools" is the key word.

**40 · De tool loop.** *(8 steps)*
- Reveal line by line. Ask each time: "who is doing this, the model or the agent harness?"
- The model only ever writes text: "use this tool". The agent harness does the real work.
- This is exactly what they will see live on the next slide.

**41 · LIVE: Claude Code.** *(about 8 min)*
1. Switch to the terminal in `live/01-harness`. Show `cart.js` and run `npm test`: one test fails.
2. Start `claude` and type the prompt from the slide: **Los de test op die faalt.**
3. Narrate what happens. It reads files, runs the tests, proposes an edit, asks permission, runs the tests again. Point at each step: "this is the tool loop from the slide."
4. When it asks for permission, stop and explain: the agent harness decides what the model may do. You are in control.
5. Show the diff. One line changed (`percent / 100`). Ask: "is this correct? How do we know?" Run `npm test` yourself.

Afterwards, reset with `git restore lessen/module-1/live` from the repo root.

**42 · Agent harnesses.** *(3 steps)*
- They use Copilot. You showed Claude Code. There are many more, and the list changes fast.
- Same model in a different agent harness gives different results.
- "Agent" = a model working on its own in several steps towards a goal. Module 8 goes deeper.

**43 · PAUZE.** Start the timer.

---

## Block 3 (45 min)

### 1.4 Context · slides 44 – 50 · 12 min

**44 · Section.**

**45 · De regel.** *(1 step)*
- Read it slowly. Training + context. Nothing else.
- Tell them: if you remember one thing from today, this.

**46 · Een model onthoudt niets.** *(3 steps)*
- Every new message, the agent harness sends the whole conversation again. Point at the drawing: it grows each time.
- The model does not learn from your chat. Tomorrow it knows nothing.
- "Memory" features are just text the agent harness adds.

**47 · De context en het context window.** *(1 step)*
- Five things that sit in the context. Students usually only think of their own messages.
- Context window = the limit, in tokens.

**48 · DEMO: context window.** *(about 5 min)*
The rule "Gebruik altijd camelCase" is the red-outlined block. Watch the status panel.
1. Click **Het model leest een bestand**, **npm test**, **Stel een vraag**. The window fills, the status turns to "ondergesneeuwd".
2. Keep clicking until it is full. The oldest blocks fall out. The rule is gone: "Nee."
3. **Reset demo**, fill it halfway, click **Compact het gesprek**. Shorter, but did the rule survive? You can't be sure.
4. Click **Start een nieuw gesprek**. Empty. The rule is gone.
5. Click **Zet de regel in het instructiebestand**, then start new chats and read files. The rule always stays. That is persistent context, and it is what module 8 teaches.

Say that this is simplified: real windows are 200 000 tokens or more, and real tools usually compact before they drop things. The principle is the same.

**49 · Een volle context geeft slechtere output.** *(3 steps)*
- More context is good, until it is too much.
- Three things you can do: new chat, compact, work focused.

**50 · "Kon het model dit eigenlijk weten?"** *(2 steps)*
- The one question to ask before trusting an answer.
- Optional live: ask a fresh chat *"Waarom werkt mijn login niet?"* with no code. It either guesses confidently or asks for code. Both are worth showing.
- Second example: knowledge cutoff. Ask the model *"Wat is je knowledge cutoff?"* if there is time.

### 1.5 Beperkingen · slides 51 – 57 · 15 min

**51 · Section.**

**52 · Hallucinations.** *(3 steps)*
- Tell it as a story: you ask for a package, get a name, an install command and example code. It does not exist.
- Link back to the mini model: "Parijs is de hoofdstad van België". Same mechanism, bigger model.
- The warning is real: attackers register package names that models tend to invent. Always check the official source.

**53 · Zeker klinken is niet juist zijn.** *(2 steps)*
- No signal: a wrong answer sounds exactly as sure as a right one.
- Sycophancy: comes from fine-tuning (slide 31).
- Practical habit: ask "welke problemen zie je?" and not "is dit goed?".

**54 · Het model schrijft wat vaak voorkomt.** *(3 steps)*
- Optional: open the browser console (F12) and type `0.1 + 0.2` live.
- The point is not floating point. The point: common in the training data ≠ correct.

**55 · LIVE: scope creep.** *(about 5 min; 3 steps)*
1. In the terminal in `live/02-scope-creep`, start `claude` and type exactly: **Maak een navigatiebalk.**
2. Let the class list everything it added that nobody asked for. Then reveal the chips on the slide.
3. If there is time, run `git restore lessen/module-1/live` and try the precise prompt from [live/README.md](live/README.md). Compare the size of the change.
- Punchline: a vague question gives the model room to take initiative. Module 2 teaches how to be precise.
- *(If you are late: skip the live part and just reveal the slide.)*

**56 · Niet elk model is hetzelfde.** *(2 steps)* Frontier vs open-weight. A better model is never a reason to check less. *(Cut if late.)*

**57 · Jij bent de operator.** *(1 step)*
- You may stop the model while it works. Refer back to the live demo.
- Three causes when it goes wrong. Two of them are yours.

### 1.6 Verantwoordelijkheid · slides 58 – 63 · 8 min

**58 · Section.**

**59 · Iedereen heeft een gsm met een camera.** *(1 step)* Let the sentence land, then reveal the second part. Don't over-explain.

**60 · Minder schrijven, meer sturen en controleren.** *(4 steps)* The role shifts. Judging code takes more insight, not less. Tokens cost money. *(Cut if late.)*

**61 · Wanneer is AI geschikt?** *(1 step)*
- Left: small, clear, quick to check, low impact.
- Right: business logic, security, money, architecture. You may consult AI there, but you don't ship blindly.

**62 · "De AI heeft het geschreven" is geen excuus.** *(1 step)*
- Passing tests are not proof. AI sometimes writes tests that test nothing.
- You and your team are responsible for what you ship.

**63 · De belangrijkste regel.** *(1 step)*
- Read the rule aloud.
- Then the worried-teacher moment: don't use AI to skip practising in the other courses. Say it with a smile, but mean it.

### 1.7 Quality control · slides 64 – 67 · 5 min

**64 · Section.**

**65 · De code werkt. Maar klopt ze?** *(3 steps)*
- Ask before revealing the output: "what does the second line print?"
- `@.` is accepted. Working is not the same as correct.

**66 · Vijf stappen.** *(5 steps)* One sentence each. They practise this in exercise M1.

**67 · De test.** If you can't explain it to a fellow student, it is not ready.

### Afsluiting · slides 68 – 70 · 5 min

**68 · Zes regels.** *(6 steps)* Ask the class to complete each sentence before you reveal it.

**69 · Wat doe je nu?**
- Read module 1 on Canvas, make the Test jezelf quizzes, do the exercises in the fill-in file and hand it in through the assignment.
- Next lesson: module 2, writing prompts.

**70 · Vragen?**

---

## Extras if you have time left

- **Same prompt twice.** Send the same prompt in two fresh chats and compare. This is exercise M2.
- **Sycophancy.** In `live/03-ja-knikker`, ask Claude Code: *"Ik denk dat de bug in formatPrice zit. Klopt dat?"* The real bug is in `totalPrice`. See whether it agrees with you or corrects you.
- **Knowledge cutoff.** Ask a model about something from the last few weeks, with web search off.
- **Open the exercises page** and show E4 and M6, which repeat today's demos.

## What can go differently

Model behaviour changes with every version. Test the live prompts before class and adjust your story.

| Moment | What may happen | What to say |
|---|---|---|
| Strawberry (24) | The model answers correctly | "This went wrong for a long time. It was fixed because it became famous." Then try a harder word. |
| Multiplication (34) | The model is right | "It can be right. You can't count on it. That's why tools run code for this." |
| Claude Code fix (41) | It fixes the bug in one step, or takes a different route | Narrate whatever it does. Every route shows the tool loop. |
| Scope creep (55) | It builds a small, sensible navbar | "A good model on a good day. Would you bet a production codebase on that?" Show the chips anyway. |
| Sycophancy (extra) | It corrects you | "Newer models are better at this. The habit of asking neutral questions still protects you." |
| No internet | Claude Code and chat don't work | The four browser demos work offline. Use the slides for the live parts. |
