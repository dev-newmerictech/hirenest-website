**TL;DR (Direct Answer):** TinyClaw's multi-agent architecture can run a complete recruiting funnel — from job posting to scheduled first interview — with specialized AI agents handling each stage in parallel. This post builds that funnel step by step: the sourcing agent, screening agent, scheduling agent, communications agent, and compliance monitor — how each is configured, how they hand off to each other, and what the end-to-end process looks like when it is running. The result is a recruiting funnel that processes 200 applications and books interviews within 2 hours, without recruiter intervention.

---

## The Full-Funnel Vision

Most AI hiring automation solves one problem at a time. An AI screening tool handles resume review. A scheduling tool handles calendar coordination. A chatbot handles FAQ responses. Each tool is a point solution that improves one stage without connecting to the others.

TinyClaw's multi-agent model enables a different approach: a coordinated pipeline where specialized agents own each stage and pass outcomes to the next stage automatically. The recruiter defines the pipeline, sets the criteria, and reviews the output — but does not operate the process in between.

Here is what a full-funnel TinyClaw deployment looks like for a single high-volume role.

---

## Agent 1: The Job Posting and Sourcing Monitor

**What it does:** Monitors configured job boards and career page for new applications. Validates that each application is complete (all required fields submitted). Tags incomplete applications for follow-up. Routes complete applications to the screening queue.

**Configuration essentials:**
- Source channels: list of job boards, career page webhook URL, email inbox for applications
- Completeness criteria: required fields for this role
- Routing rules: complete applications to screening queue; incomplete to follow-up queue

**Output:** A validated, tagged queue of complete applications ready for screening. Incomplete applications receive an automated follow-up requesting missing information.

**Estimated throughput:** 200 applications per hour with basic validation logic.

---

## Agent 2: The Screening Agent

**What it does:** Evaluates each application in the screening queue against defined role criteria. For roles with a screening conversation requirement, initiates and conducts the AI screening conversation. Produces a scored summary and recommendation (advance / hold / decline) for each candidate.

**Configuration essentials:**
- Role criteria: specific, job-relevant requirements mapped to scoring dimensions
- Screening conversation questions: behavioral and situational questions ordered by priority
- Scoring rubric: what constitutes a strong, adequate, or weak response for each dimension
- Advancement threshold: minimum score required to advance to scheduling

**The screening conversation flow:**
1. Agent introduces itself as an AI assistant and discloses its AI nature (compliance requirement)
2. Confirms candidate's basic eligibility (authorization to work, availability, location if relevant)
3. Asks 3 to 5 behavioral questions based on role criteria
4. Evaluates responses against the scoring rubric in real time
5. Produces a scored summary and recommendation

**Output:** Ranked candidate list with scores, response summaries, and advance/hold/decline recommendations. Candidates above the advancement threshold are routed to the scheduling queue.

**Parallel processing advantage:** With multiple screening agent instances, a 200-application batch that would take a single agent 4 hours processes in under 30 minutes with 10 parallel instances.

---

## Agent 3: The Scheduling Agent

**What it does:** Takes the list of candidates advanced from screening and schedules their first-round interviews. Connects to hiring manager and panel interviewer calendars. Identifies optimal interview slots. Sends candidates scheduling options. Confirms bookings. Sends reminders.

**Configuration essentials:**
- Calendar access: OAuth credentials for hiring manager and panel interviewer Google Calendar or Outlook accounts
- Scheduling rules: interview duration, minimum advance notice, buffer time between interviews, blackout periods
- Candidate channel preference: email or messaging app for scheduling communications
- Reminder schedule: 24 hours before, 2 hours before

**The scheduling flow:**
1. Agent identifies available interview slots for the next 5 business days
2. Sends each advanced candidate a message with 3 to 5 scheduling options
3. Receives candidate selection and confirms the booking
4. Creates calendar events for interviewer and candidate
5. Sends confirmation to both parties with interview format and preparation details
6. Sends reminders at configured intervals

**Output:** A fully populated interview calendar. Candidates who do not respond within 48 hours receive an automatic follow-up. Candidates who cannot accommodate any offered slots are flagged for human review.

**Time from screening completion to interviews scheduled:** Typically 2 to 4 hours with automated scheduling vs. 3 to 5 days with manual coordination.

---

## Agent 4: The Communications Agent

**What it does:** Handles all candidate-facing communications throughout the pipeline — FAQ responses, status updates, rejection notices, offer communications (with human review before sending). Maintains a consistent, professional candidate experience regardless of pipeline volume.

**Configuration essentials:**
- FAQ library: answers to the 10 to 15 most common candidate questions for this role
- Status update templates: messages for each pipeline stage transition
- Tone guidelines: voice and formality level consistent with your employer brand
- Escalation triggers: question types that require human response (compensation specifics, unusual accommodation requests, legal questions)
- Human review gates: offer communications and rejections after second-round always require human review before sending

**The communications agent responsibilities:**
- Acknowledges every application within 5 minutes of receipt
- Responds to candidate FAQ messages within 2 minutes around the clock
- Sends status updates when candidates move between pipeline stages
- Sends interview preparation information to scheduled candidates
- Sends hold notices to candidates not advancing at each stage
- Escalates complex or sensitive messages to a human recruiter

**Human review gate example:** When the screening agent recommends declining a candidate who expressed a disability accommodation in their application, the communications agent flags this for mandatory human review before sending a rejection. Automated rejections in this context create legal exposure that the human review gate prevents.

---

## Agent 5: The Compliance Monitor

**What it does:** Logs every agent action, monitors screening outcomes for disparate impact patterns, generates compliance reports, and flags anomalies for human review.

**Configuration essentials:**
- Logging destination: your audit trail store (database or append-only log)
- Demographic analysis: if your organization collects EEO data, configure the monitor to analyze screening outcomes by demographic group against the four-fifths rule
- Anomaly thresholds: what patterns trigger an alert (selection rate disparity exceeds threshold, unusual volume of escalations, screening score distribution that looks abnormal)
- Report schedule: weekly disparate impact summary, monthly trend analysis

**The compliance monitor outputs:**
- Complete audit trail of every agent action with timestamps
- Weekly screening outcome analysis by demographic group (if EEO data is available)
- Flagged anomalies requiring human review
- Monthly compliance report suitable for HR legal review

This agent does not make decisions. It observes, logs, and alerts. All decisions remain with humans.

---

## The Full Pipeline: End to End

With all five agents configured and running, here is the end-to-end timeline for a 200-application batch:

**Minute 0 — Job posted.** Applications begin arriving. The sourcing monitor validates and queues each one.

**Minutes 0–90 — Parallel screening.** Ten screening agent instances process 20 applications each. Screening conversations happen in parallel across all candidates simultaneously.

**Minute 90 — Screening complete.** 200 applications processed. Ranked list produced. 25 candidates above the advancement threshold. Compliance monitor logs all 200 screening outcomes.

**Minutes 90–180 — Scheduling launch.** Scheduling agent sends interview invitations to all 25 advanced candidates. Communications agent sends status updates to all 200 applicants.

**Hours 3–27 — Candidate responses.** Candidates select interview times. Scheduling agent confirms bookings. Calendar populates automatically.

**Ongoing — Human recruiter role.** Reviews the ranked shortlist. Monitors human escalations from the communications agent. Reviews the compliance monitor's anomaly flags. Handles the 2 to 3 candidates who need human contact.

**Total recruiter time for 200 applications:** 2 to 3 hours of review and exception handling vs. 15 to 20 hours of manual processing.

---

## What the Pipeline Cannot Replace

The five-agent pipeline handles everything from application receipt to scheduled first interview. It does not handle:

**Structured interview evaluation.** The actual interviews — and the scoring, calibration, and hiring decision that follow — require human judgment and structured tools. Hirenest's interview frameworks and scoring rubrics are the appropriate tool for this stage. The pipeline delivers candidates to the interview stage efficiently; Hirenest ensures the evaluation is consistent and legally defensible.

**Offer negotiation.** Compensation discussions, competing offer handling, and close conversations require human relationship skills that no AI agent handles well. The pipeline produces a hire-ready candidate; the human recruiter closes the deal.

**Complex exception handling.** Candidates who fall into edge cases — strong candidates with disqualifying single factors, internal referrals, candidates requiring unusual accommodations — need human judgment. The escalation paths in the communications agent's configuration handle these.

---

## FAQ

**How much does the full five-agent pipeline cost to run?**
The primary cost is AI model API calls. For a 200-application screening batch with 5-turn screening conversations, expect 50,000 to 100,000 tokens per candidate — approximately $0.05 to $0.15 per candidate at current API pricing. The full batch costs $10 to $30 in AI model costs. Infrastructure costs depend on your hosting choice.

**Does TinyClaw support Hirenest integration?**
TinyClaw's scheduling agent can book Hirenest-structured interviews — it handles the calendar coordination; Hirenest's framework governs the actual interview content and evaluation. The integration requires configuring Hirenest as the interview format in the scheduling agent's confirmation templates.

**What happens when a candidate drops out mid-pipeline?**
The communications agent detects non-responsive candidates (defined threshold: no response within 48 hours to scheduling options) and flags them for the orchestrator. The orchestrator marks them as dropped and optionally initiates a re-engagement message before closing the file.

**Can this pipeline handle multiple roles simultaneously?**
Yes. TinyClaw's multi-agent architecture runs separate pipeline instances per role, each with its own criteria configuration and scheduling rules. Twenty roles running simultaneously use twenty parallel pipeline sets — the infrastructure scales with the demand.