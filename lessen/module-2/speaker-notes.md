# Module 2: speaker notes

Notes for the lecturer. Slides: [slides.html](slides.html). Slide numbers match the counter at the bottom right of each slide.

This lecture is hands-on: about 60 minutes of student work spread over seven "Jouw beurt" moments. The explanation in between is short on purpose. If you run out of time, cut explanation, not exercises.

The exercises on the slides are the same as on the Canvas page **Oefeningen module 2**. Students write their answers in the fill-in file during class and finish at home.

Every exercise is individual work, and there is no debrief or comparing afterwards: when the timer ends, students keep what they have and you move on. The exercises are self-contained. The exercise page starts with "Voor je begint" (what you need, which folder to open, how to run code), so students who follow remotely or missed the class can do everything on their own. Students never have to undo a change: when an exercise tests two prompts, each prompt gets its own folder (`-a` and `-b`) and both results stay.

## Before class

1. Students need: Visual Studio Code with GitHub Copilot, the fill-in file, and the starter files (`opdrachten/module-2/startbestanden-module-2.zip`). Put the assignment in Canvas before class, or have the files ready to share. Share the setup guide too (`opdrachten/startgids/startgids-vscode-copilot.pdf`): slide 4 walks through it. Students also need Node.js to run the code of M2 to M5; the exercise page tells them how to check and install it.
2. Open `slides.html` in Chrome. **F** for fullscreen, **T** for the clock.
3. Click through the three demo slides once (9, 25, 43).
4. Open VS Code on `lessen/module-2/live/webshop` with your agent harness ready. Open a terminal in `lessen/module-2/live`.
5. Have a plain chat window ready (Claude or ChatGPT) for slides 7 and 51.
6. Try the live prompts once. See "What can go differently" at the end.

Every exercise slide has a countdown. Click "Start de timer". Walk around while they work.

## Timing

| Clock | Block | Slides | Content | Student work |
|---|---|---|---|---|
| 0:00 – 0:12 | 1 | 1 – 5 | Recap of module 1, words, setup tour (live), today | |
| 0:12 – 0:28 | 1 | 6 – 12 | 2.1 A prompt is a specification (demo) | E1 · 5 min |
| 0:28 – 0:41 | 1 | 13 – 19 | 2.2 Think first | E2 · 6 min |
| 0:41 – 1:00 | 1 | 20 – 25 | 2.3 Structure (demo: checker) | M1 · 10 min |
| 1:00 – 1:15 | | 26 | **Break** | |
| 1:15 – 1:38 | 2 | 27 – 33 | 2.4 Context (live) | M2 · 10 min |
| 1:38 – 2:00 | 2 | 34 – 39 | 2.5 Three kinds of questions (live) | M3 · 10 min |
| 2:00 – 2:15 | | 40 | **Break** | |
| 2:15 – 2:33 | 3 | 41 – 46 | 2.6 Examples and edge cases (demo) | M4 · 8 min |
| 2:33 – 2:52 | 3 | 47 – 52 | 2.7 Iterating (live) | M5 · 10 min |
| 2:52 – 3:00 | 3 | 53 – 55 | Recap and homework | |

The setup tour on slide 4 takes about four minutes. There are no debriefs after the exercises, which gives that time back. **If you run late**, cut in this order: slide 17 (short or long), slide 16, the live part of slide 37 (just show the two prompts), slide 44. Shorten M5 to two rounds. **If you have time left**, see "Extras".

---

## Block 1 (60 min)

### Start · slides 1 – 5 · 12 min

**1 · Title.**

**2 · Wat weet je nog?** *(3 steps)*
- Ask each question to the room before you reveal the answer. Take one or two answers per question.
- These three answers are the base for today: prediction, context, agent harness.

**3 · Model, agent harness, agent.** *(1 step)*
- One agreement on words, so nobody gets confused. Model = the LLM. Agent harness = the software around it (for them: Copilot). Agent = a model that takes steps on its own through the agent harness.
- We don't say "AI assistant": it hides which of the three you mean.

**4 · LIVE: staat alles klaar?** *(5 steps; about 4 min)*
- A quick tour in your own VS Code, so everybody is set up before the first exercise. Students follow along on their laptop. The same steps are in the setup guide (`opdrachten/startgids/`); tell them it is on Canvas.
- **Open de chat.** The Chat menu in the title bar, then Open Chat, or Ctrl + Alt + I. Show New Chat (+): a new task gets a new conversation.
- **Open een map.** File > Open Folder. The folder you open is the working folder of the agent harness: that is where the agent searches, reads and edits. One task, one folder. It can go beyond that folder if you allow it, at your own discretion.
- **Kijk naar je verbruik.** Click the Copilot icon in the Status Bar: the percentage of the monthly allowance that is used, and the reset date. Tell them to keep enough for the lessons of this month and not to burn it all at once.
- Point at the model picker. On the student plan (Copilot Student) and on Copilot Free it only offers Auto. With a paid plan you can pick a model yourself: stronger models use the allowance faster. Gemini 3.8 Flash is a cheap one that is good for the money.
- **Kies je permissions.** The permissions picker in the chat input. Manual permissions: safe, but you click Allow all the time. Assisted permissions: a model judges each action, low-risk actions run, the rest still asks you. A good middle way. Allow all: the agent can do anything without asking, including deleting your files or a database. The course advises never to go beyond Assisted permissions. It is their computer and their responsibility.
- Other agent harnesses (Codex, Claude Code) are allowed, at their own discretion. All instructions in this course are for GitHub Copilot. The basics are the same everywhere (`/compact`, permissions, an instruction file); the names differ, and finding the differences is their job.
- Last step: ask them to open the fill-in file now, so the first exercise starts without delay.

**5 · Drie blokken, twee pauzes.** Thirty seconds. How today works: in every block a short explanation, then their turn. Seven times.

### 2.1 Een prompt is een specificatie · slides 6 – 12 · 16 min

**6 · Section.**

**7 · LIVE: twee soorten vaag.** *(3 steps; about 4 min)*
- Type **Maak een function.** in a chat window. It is so vague that even a model can't do anything with it. Most models ask back: what should it do? Reveal the first line.
- This is one of the worst prompts there is: it means nothing. But it is not the dangerous kind. You lose time, nothing goes wrong.
- Now type **Maak een function die een prijs berekent.** in a new chat, and once more in another new chat. It no longer asks. It starts. Compare the two results: usually a different language, name or calculation.
- Reveal the rest. The second kind is the dangerous one: just enough detail to start, so the model takes initiative and fills the gaps, and you don't notice it deciding for you.
- Make this distinction clearly. Students will say "but it asked me a question" otherwise.

**8 · Wat is een prompt?** *(2 steps)*
- Everything you send to the model: the question and the information that goes with it.
- It can be one sentence or three pages. Both are prompts.

**9 · DEMO: wie beslist?** *(about 5 min)*
1. Start state: "Maak een function die een prijs berekent." The model decides all eleven things. Read a few of the grey guesses aloud: Python? JavaScript? A new file, and in which folder? Euro or cent?
2. Ask the class which decision bothers them most. Click that piece on the left. Watch the red tags turn green and the prompt grow.
3. Click the pieces one by one. Stop at "Afronding" and "Foute input": the things people forget.
4. End with **Alles aan**: 102 words, and you decide eleven out of eleven.
- "Context" settles two things: the language, and the file the function goes in. In an agent harness the second one matters: the agent writes into your project, so say where.
- Point: a longer prompt is not the goal. Deciding is the goal.

**10 · Wat je niet zegt, beslist het model.** *(1 step)*
- The sentence of the day. Let them repeat it.
- Second line matters: the result is not always bad. It is undirected. Good code for the wrong problem.

**11 · Beslissen is jouw werk.** *(2 steps)*
- A developer's job is deciding. A vague prompt hands those decisions to the model.
- The requirements comparison: a client who says "something with a button, and green".

**12 · JOUW BEURT E1 · 5 min.** Alone, no AI.
- They list six decisions for the price prompt and write two sentences.
- When the timer ends, move on. No round of answers.

### 2.2 Eerst denken, dan prompten · slides 13 – 19 · 13 min

**13 · Section.** The hook: do you actually know what you want?

**14 · Een volledige website is één prompt ver.** *(1 step)*
- This is your own experience as a builder: the rush to action. It was a problem before AI. Now it's worse because building costs nothing.
- Tell a short real story if you have one: something that got built fast and nobody needed.

**15 · Vier vragen.** *(5 steps)*
- What, why, what is out, what does it clash with.
- No answer? Then it is too early to prompt. Sketch first. Everyone has their own way.

**16 · Het model bouwt wat je vraagt.** *(3 steps)*
- It sometimes warns you. Push a little and it builds anyway.
- Trade-off: you win something, you give something up. Knowing the trade-offs is what makes you a developer and not someone passing on a wish. *(Cut if late.)*

**17 · Kort of lang?** *(1 step)*
- Neither is right by default. Short works when the context already says the rest. Long gives control but details get buried. *(Cut first if late.)*

**18 · Eén ding tegelijk.** *(2 steps)*
- One feature or one change per prompt. Most control, easiest to check.
- Subagents: there is a time and place for them, and it will matter more and more. In a mature project with good separation of concerns, an agent harness can fan a task out over subagents. But that takes experience and control over your agent harness. For now, to learn the basics and keep control: one thing at a time.

**19 · JOUW BEURT E2 · 6 min.** Alone, no AI.
- The football team app. They answer the four questions and write the first small task.
- No comparing afterwards. Make the point yourself in one sentence when the timer ends: everyone has a different app in mind, because the request was vague. A model fills it in the same way.

### 2.3 De structuur van een prompt · slides 20 – 25 · 19 min

**20 · Section.**

**21 · Vier elementen.** *(3 steps)* Context, input, output, constraints. One question per card.

**22 · Van vrijheid naar controle.** *(1 step)*
- Left: "Schrijf een API." Ask what the model has to decide.
- Reveal the right side. Every line removes a choice.

**23 · Eén goede manier, niet de enige.** *(2 steps)*
- Say this clearly: the labels are one good way. Plain sentences, Markdown or JSON also work.
- A prompt is more than text: a screenshot, a diagram, a document.
- If you can't fill in the four elements, you don't understand the problem yet.

**24 · JOUW BEURT M1 · 10 min.** Alone.
- First write, then send. They rewrite "maak een wachtwoordchecker" with the four elements and three examples.
- Fast students send the vague prompt in an empty folder `wachtwoord-a` and their own in `wachtwoord-b`, each in a new chat, and note three differences. The rest finishes that at home.

**25 · DEMO: prompt-checker.** *(about 5 min)*
- Don't collect prompts from students. Type "maak een wachtwoordchecker" yourself: the checklist shows what is in and what is missing. Add a sentence or two live and watch the list fill up.
- Then click **Precies** to show a full one.
- Be clear about what this is: a word checklist, not AI. It can be wrong. The message under the list is the point: what is missing, the model decides.
- Click **Alleen analyse** to show that not every prompt needs all eight.

**26 · PAUZE.** Start the timer.

---

## Block 2 (45 min)

### 2.4 Context · slides 27 – 33 · 23 min

**27 · Section.**

**28 · "Kon het model dit eigenlijk weten?"**
- Straight from module 1. Training plus context, nothing else.
- Today we turn it into a habit: ask it before you send a prompt.

**29 · Chatvenster of agent harness.** *(2 steps)*
- Chat window: only what you paste. Agent harness: it can search your project.
- The warning: it searches, and it does not always find the right thing.

**30 · LIVE: studentenkorting.** *(1 step; about 6 min)*
In `live/webshop`. `total` in `src/cart.js` has no discount yet. The rules are in `docs/kortingen.md`: 15%, only from 20 euro, rounded down.
1. New chat. Prompt A: **Voeg studentenkorting toe aan total.**
2. Watch what it does. Did it read `docs/kortingen.md`, or did it invent a percentage? Ask the class: how much discount did it pick? Where did that number come from?
3. In the terminal: `node check-korting.js`. Count the failures.
4. Undo: type `git restore .` in the terminal (it is in `lessen/module-2/live`; this only works when the folder is committed, see `live/README.md`). New chat. Prompt B, with the file and the place of the rules.
5. Run the check again: 5 of 5.
- Reveal the question on the slide: could the model know this?
- If A also found the document: say so. "It found it this time. It searched the whole project to get there. With B it goes straight to the right place, every time."

**31 · Wijs de weg.** *(3 steps)*
- Show it live in your agent harness while you explain: select `sumPrices` in `src/utils.js`, and show that the selection goes along with the prompt. Then show how you mention a file.
- Every agent harness does this its own way. Show Copilot if you can, since that is what they use.

**32 · Onboard het model.** *(5 steps)*
- The new colleague on day one. Smart, knows nothing about your project.
- Four things he needs. And you do this again in every new chat.
- Last step, on the left: what always comes back goes into an instruction file. For Copilot that is `AGENTS.md` in the root folder of the project. It is plain text with the fixed agreements of the project, like the three lines on the slide. The agent harness reads it by itself at the start of every new chat. They met it in module 1 (1.4) and in the setup guide.

**33 · JOUW BEURT M2 · 10 min.** Alone, with Copilot.
- The library fine. Prompt A without the rules, prompt B with.
- Two folders with the same files: prompt A in `bibliotheek-a`, prompt B in `bibliotheek-b`. Nothing to undo.
- Walk around. Common problem: they send prompt B in folder a, or they reuse the same chat. Folder b and a new chat for prompt B.
- They check each version with `node test.js` in its own folder: it prints the fine for 1, 5 and 40 days late. Expected: 0, 75 and 500.

### 2.5 Drie soorten vragen · slides 34 – 39 · 22 min

**34 · Section.**

**35 · Genereren, aanpassen, evalueren.** *(2 steps)*
- Quick. Generate: something new. Adapt: say what changes and what stays. Evaluate: say what to look at.
- Each card has its own example prompt, all three about the same function (`sumPrices`, which they saw on slide 31): write it, change it, judge it. Read them out, no demo needed here.
- Point at the second one: it says what changes (the loop) and what stays (everything else).

**36 · Een agent harness is gebouwd om te doen.** *(1 step)*
- Your own observation, and they will recognise it: you ask a question and the agent starts editing files.

**37 · LIVE: een vraag is geen opdracht.** *(1 step; about 5 min)*
1. New chat in agent mode. Prompt A: **Zitten er fouten in src/orders.js?**
2. Did it only answer, or did it change the file? Check with `git status`.
3. Undo if needed. New chat. Prompt B from the slide.
4. Compare. With B there is no doubt about what you get.
- The real problems in `orders.js`: an empty list gives NaN, an order without `total` gives NaN, and `==` compares `12` and `"12"` as equal.
- *(If late: skip running it, show the two prompts and tell what happens.)*

**38 · Zeg welke output je wil.** *(2 steps)*
- Changed code, a new file, an explanation, a list, a table. Say which one.
- If you say nothing, the model chooses. An agent usually chooses to act.

**39 · JOUW BEURT M3 · 10 min.** Alone, with Copilot.
- Two folders with the same `scores.js`: prompt A in `scores-a`, then they write prompt B themselves and send it in `scores-b`.
- The check at the end matters: `average([10, 20])` gives NaN. Was the model right about why?
- Fast students do E4.

**40 · PAUZE.**

---

## Block 3 (45 min)

### 2.6 Voorbeelden en edge cases · slides 41 – 46 · 18 min

**41 · Section.**

**42 · Wat betekent "afronden"?** *(2 steps)*
- Ask the room: 2,347 euro becomes …? Collect answers before you reveal the chips. You will get at least three different ones.

**43 · DEMO: voorbeelden.** *(about 6 min)*
Six real implementations of "afronden", run in the browser.
1. No examples: all six are still possible. The model picks one. You don't know which.
2. Click **2.347 → 2.35**. Three drop out. Read why: one gave `2`, one gave `2.34`, one gave the text `"2.35"`.
3. Click **2.341 → 2.34**. One left. Two examples, no doubt.
4. **Reset**. Now click **2.347 → 2.35** and **2.37 → 2.35**: you meant rounding to 5 cent, like cash in Belgium. A different function survives. Same word, different meaning.
5. Edge cases: click **rondAf(null)** and **rondAf("abc")**. Every version does something, and nobody asked for it. One crashes.
6. If there is time: **Reset**, then **1.005 → 1.01**. Almost everything fails, including "op de cent". Link back to module 1: decimals in a computer, calculate money in cents.

**44 · Toon wat je bedoelt.** *(1 step)* The name example from the course text. A model reacts strongly to examples. *(Cut if late.)*

**45 · Edge cases en de happy path.** *(2 steps)*
- Two terms: edge case and happy path.
- A model covers the happy path by default. The rest is yours.

**46 · JOUW BEURT M4 · 8 min.** Alone, with Copilot.
- Belgian mobile numbers. First without examples, then with five.
- Two empty folders: `gsm-a` for the prompt without examples, `gsm-b` for their own.
- The table with the five test values is in the fill-in file. The test block they paste under the function is in the exercise text.
- The example that usually makes the biggest difference is `+32…` or the empty string. Say so only if someone asks.

### 2.7 Itereren · slides 47 – 52 · 19 min

**47 · Section.**

**48 · Een loop waarin jij beslist.** *(1 step)*
- They know loops from Programming Fundamentals. Here they are the loop.
- When it is good enough is their decision, not the model's.

**49 · De vervolgprompt.** *(2 steps)*
- One change per step. "Verander verder niets."
- Starting over risks losing what was already right.

**50 · Een vervolgprompt mag kort zijn.** *(3 steps)*
- You are already in the conversation. The task, the code and the earlier prompts are loaded in the context. So a follow-up can be short and direct: you don't explain everything again.
- Be mindful of why it works. Paste the same short line into a new chat in a big project with thousands of files, and the model has to search and guess. The change can be completely different.
- You are the operator: know what is in the context right now.

**51 · LIVE: laat een model je prompt verbeteren.** *(1 step; about 4 min)*
1. In a plain chat window, paste the prompt from the slide.
2. Answer one or two of its questions out loud, or let a student answer.
3. Read the improved prompt with the class. Ask: what did the model add that we never said? There is always something: a file format, a library, extra features.
4. Reveal the warning: read it, cut what you did not ask for. It stays your prompt.
- Mention that this works well for dictated or messy input. You don't need an agent harness for it.

**52 · JOUW BEURT M5 · 10 min.** Alone, one chat.
- `average(scores)`, then three follow-up prompts with one change each.
- They test after each round and note whether something changed that they did not ask for.
- H1 (improve a dictated prompt) is homework.

### Afsluiting · slides 53 – 55 · 8 min

**53 · Zes regels.** *(6 steps)* Let the class finish each sentence before you reveal it.

**54 · Wat doe je nu?**
- Finish the fill-in file and hand it in through the assignment.
- Test jezelf 2.1 to 2.7.
- @1: the prompt log starts today.
- Next lesson: module 3, generating code.

**55 · Vragen?**

---

## Extras if you have time left

- **Two students, one prompt.** Let two students send the same vague prompt and show both results side by side.
- **Selection.** In `src/utils.js`, select only `formatPrice` and ask "Leg uit wat deze code doet." Then select nothing and ask again. Different context, different answer.
- **Screenshot as prompt.** Paste a screenshot of an error or a sketch of a page into a multimodal chat and ask for the code.
- **E3 and E4** are quick and need no AI.

## What can go differently

| Moment | What may happen | What to say |
|---|---|---|
| "Maak een function." (7) | The model starts writing something anyway | "This one guessed. Most ask back. Either way: this prompt says nothing." Then go to the price prompt, where it should start without asking. |
| Price prompt (7) | The model asks a question | "Careful model. Send it again in a new chat, or in the agent harness: there it usually just starts." |
| Context A (30) | The agent finds `docs/kortingen.md` on its own | "It found it, after searching. Prompt B tells it where to look. That is faster, cheaper and reliable." |
| Context A (30) | The agent invents 10% or 20% | That is the demo. Ask where the number came from. |
| Evaluate A (37) | The agent only answers and changes nothing | "This agent harness was careful this time. Others start editing. With B you never have to wonder." |
| Meta-prompt (51) | The model writes the prompt without asking questions | Fine. Go straight to step 3: what did it add? |
| Setup tour (4) | A student has no Copilot yet, or no credits left | They do the parts without AI now (E1 to E4, and writing the prompts of M1 and M4) and the rest at home. Point to the setup guide: apply for the student plan tonight. |
| Any M exercise | `node` is not recognised | Node.js is not installed. The exercise page ("Voor je begint") has the link. They write their prompts now and test at home. |
| Setup tour (4) | A student cannot pick a model | Normal on the student plan: Auto is the only choice there. |
| Students' Copilot | Behaves differently from yours | Good. Different agent harness and model, different outcome (module 1). They write down what they got. |
| No internet | Agent harness and chat don't work | The three browser demos work offline. Do E1, E2, E3 and E4, and talk through the live slides. |
