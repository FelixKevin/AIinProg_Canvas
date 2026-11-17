# Review module 2

Reviewer notes. This folder is never sent to Canvas.

## New terms

| Term | Lidwoord | Meervoud | Nederlands bij introductie |
| --- | --- | --- | --- |
| prompt | de | prompts | – |
| requirements | de | – | vereisten |
| trade-off | de | trade-offs | afweging |
| subagent | de | subagents | – |
| edge case | de | edge cases | – |
| happy path | de | – | – |
| vervolgprompt | de | vervolgprompts | – |

Reused from module 1: model, agent harness, agent, context, context window, scope, token.

## Content changes

- Title: "Prompts schrijven" became "Prompts en context".
- "AI-assistent" is no longer used. The text says model, agent harness or agent. "Agent harness" is always written in full, and "edge case" replaces "randgeval".
- 2.1 rewritten: a new definition of prompt, a table of who decides, and the idea that a vague prompt gives control to the model.
- 2.2 is new: think before you prompt, trade-offs, short versus long prompts, one thing at a time, subagents.
- 2.3 (was 2.2): the four elements moved here from 2.1; added that the structure is one good way, not the only one.
- 2.3: the element Context now also asks in which file the code goes.
- 2.4 is new: context, pointing the model to files, onboarding. It says in a few lines what an instruction file ("instructiebestand") is: the name (`AGENTS.md` for GitHub Copilot), the place (the root folder of the project) and a three-line example.
- Module 2 does not point forward to later modules by number. It only refers back.
- 2.5 (was 2.3): added "say which output you want" and "Verander niets".
- 2.6 (was 2.4): unchanged text.
- 2.7 (was 2.5): added a part on letting a model improve your prompt.
- Section numbers moved, so references in module 3 were updated.

## Quizzes

- Five quizzes keep their id and get new questions: 2.1, 2.3 (id says 2-2), 2.5 (id says 2-3), 2.6 (id says 2-4), 2.7 (id says 2-5).
- Two quizzes are new: 2.2 and 2.4.

## Exercises

- The core series is rebuilt around hands-on tasks that are also used in the lecture: E1–E4, M1–M5, H1, H2, @1.
- Former core exercises that were dropped from the core now live in the extra series as X12–X14.
- The exercises are self-contained, for students who work alone or remotely. "Voor je begint" explains what is needed (agent harness, Node.js, starter files), which folder to open and how to run code.
- Students never undo a change. Exercises that test two prompts (M1 to M4) use two folders, `-a` and `-b`; for M2 and M3 both are in the starter files.
- M2 has a `test.js` that prints the fine for 1, 5 and 40 days late. M4 has a test block to paste under the function.
- @1 runs for one week with at least five prompts, instead of "until the next lesson".

## Open questions

- 2.4 says "in veel agent harnesses" for sending a selection along and for mentioning a file with `#` or `@`. Check the wording against the version of GitHub Copilot the students use.
