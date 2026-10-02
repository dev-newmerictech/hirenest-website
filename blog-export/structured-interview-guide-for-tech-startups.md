## 1. Why Tech Hiring is Broken

Most startups interview engineers like this:
1.  **Resume Screen:** A non-technical recruiter skims for "React" or "Python."
2.  **Phone Screen:** A 30-minute chat about "culture fit" (do I like you?).
3.  **The "Whiteboard" Gauntlet:** 4 hours of leetcode problems that have nothing to do with the job (e.g., "Invert a binary tree").
4.  **The "Fit" Chat:** Another vague conversation with a founder.

**The Result:** You hire people who are good at memorizing algorithms but bad at building software, collaborating, handling technical debt, and shipping products. You also introduce massive bias.

**The Solution:** Structured Interviewing.
Google proved this decades ago. Asking every candidate the same questions, grading them on the same rubric, and focusing on *job-relevant* skills is the only way to predict performance.

This guide is the manual for building a structured interview loop for engineering, product, and data roles.

---

## 2. The Core Principles of Structured Hiring

1.  **Standardization:** Every candidate gets the same questions in the same order. No "going with the flow."
2.  **Rubrics:** Every question has a predefined scoring guide (Good vs. Bad vs. Great answer).
3.  **Independent Scoring:** Interviewers submit feedback *before* discussing the candidate to avoid groupthink.
4.  **Job Relevance:** Questions must test skills actually used in the role (e.g., system design, debugging), not trivia.

---

## 3. The Interview Loop: Engineering

Here is the standard, high-signal loop for a Senior Software Engineer.

### Stage 1: The Practical Screen (45-60 min)
**Goal:** Filter out candidates who can't code interaction or basic logic.
**Format:** Pair programming on a shared screen (CoderPad).
**Question Type:** "Refactoring / Debugging."
*   **The Task:** Give them a snippet of messy, working code (e.g., a React component with 3 bugs and bad variable names). Ask them to fix the bugs and refactor it.
*   **What it Tests:** Reading code (harder than writing!), debugging process, familiarity with language idioms, communication while coding.
*   **Rubric:**
    *   **Fail:** Stares at screen, can't find bugs, brute forces without thinking.
    *   **Pass:** Finds bugs systematically, explains *why* the fix works.
    *   **Strong Hire:** Refactors for readability, adds tests, mentions edge cases.

### Stage 2: System Design (60 min)
**Goal:** Assess architectural thinking, scalability, and trade-offs.
**Format:** Whiteboard (Miro/FigJam).
**Question Type:** "Design a specific feature/service."
*   **The Task:** "Design the backend for Instagram's 'Like' feature." (Scale: 1B daily likes).
*   **What it Tests:** Database choice (SQL vs NoSQL), caching strategies (Redis), asynchronous processing (Queues), API design.
*   **Rubric:**
    *   **Fail:** Jumps to coding immediately. Picks technologies without justification ("I'd use MongoDB because it's web scale").
    *   **Pass:** Asks clarifying questions (traffic volume?), defines API endpoints, identifies bottlenecks.
    *   **Strong Hire:** Discusses trade-offs in depth (Consistency vs Availability), handles failure scenarios, sharding strategies.

### Stage 3: The "Deep Dive" / Experience (45 min)
**Goal:** Validate depth of experience and ownership.
**Format:** Behavioral Interview.
**Question Type:** "Tell me about a time..."
*   **The Question:** "Tell me about the most complex technical bug you've ever debugged. Walk me through your process from symptom to fix."
*   **What it Tests:** Grit, depth of understanding (do they know *how* things work under the hood?), ownership.
*   **Rubric:**
    *   **Fail:** "It was tricky but I fixed it." (Vague). "We had a bug..." (Use of "We" obscures individual contribution).
    *   **Pass:** Describes the specific error, the hypothesis, the tools used (strace, logs), and the fix.
    *   **Strong Hire:** Explains the root cause, the fix, *and* how they prevented it from happening again (added monitoring, wrote a regression test).

### Stage 4: Culture Add / Values (30-45 min)
**Goal:** Determine if they raise the bar on team behavior.
**Format:** Conversational Interview.
**Question Type:** Values-based.
*   **The Question:** "Tell me about a time you disagreed with a product manager or designer on a feature. How did you handle it?"
*   **What it Tests:** Empathy, communication, "disagree and commit," pragmatism.
*   **Rubric:**
    *   **Fail:** "They were wrong, so I ignored them." "I just did what I was told."
    *   **Pass:** "We discussed the trade-offs, I explained the technical cost, we compromised."
    *   **Strong Hire:** "I built a prototype to show the issue, we looked at user data, and decided to scope it down for v1."

---

## 4. The Product Manager Loop

PM interviews are notoriously vague. Structure saves them.

### Stage 1: Product Sense (45 min)
**Goal:** Can they identify user problems and design solutions?
**The Task:** "Pick a favorite app. How would you improve it? Or: Design an alarm clock for the blind."
**What it Tests:** User empathy, prioritizing features, creativity.
**Rubric:** Look for "User First" thinking vs "Solution First" thinking.

### Stage 2: Analytical Execution (45 min)
**Goal:** Can they use data to make decisions?
**The Task:** "Metrics for Uber Eats are down 10% week-over-week. How do you investigate?"
**What it Tests:** Root cause analysis, metric definitions, segmentation.
**Rubric:** Look for MECE (Mutually Exclusive, Collectively Exhaustive) breakdown.

---

## 5. Decision Meeting: The Bar Raiser

After the loop, hold a **Debrief**.
1.  **Blind Voting:** Everyone submits "Hire / No Hire" before the meeting.
2.  **Review Disagreements:** Focus discussion *only* on areas where interviewers disagree.
3.  **The Bar Raiser:** Assign one person (usually a founder or senior engineer outside the team) as the "Bar Raiser." They have veto power to ensure the new hire is better than the average of the current team.

**Final Tip:** Iterate on your questions. If every candidate fails the System Design question, your question is bad, not the candidates.