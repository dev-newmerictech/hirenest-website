**TL;DR (Direct Answer):** OpenAI released GPT-5.4 on March 5, 2026 — featuring a 1-million-token context window (double GPT-5.3's 500K limit), a new Extreme Thinking mode that scores 91.7% on PhD-level scientific reasoning, and improved task persistence for multi-hour agentic workflows. At $2.50/$12.00 per million tokens, it is six times cheaper than Claude Opus 4.6 with now-comparable reasoning performance. Every AI hiring tool built on OpenAI's API just got more capable at no additional cost to you. Here is exactly what changed, which HR tool categories benefit most, and what questions to ask your vendors.

---

## What Actually Changed in GPT-5.4

GPT-5.4 is not a behavioral patch like GPT-5.3 Instant — the sycophancy-fixing, hallucination-reducing update that shipped two days earlier. It is a new base model with updated weights representing the most significant capability jump in the GPT-5 series since GPT-5 launched in mid-2025.

Three architectural changes define it:

**Context window: 500K to 1 million tokens.** GPT-5.3 maxed out at 500,000 tokens. GPT-5.4 doubles that. One million tokens holds approximately 750,000 words — roughly five full-length novels in a single prompt. In HR terms: a complete candidate portfolio (resume, LinkedIn, work samples, all interview transcripts) fits inside a single context window with room to spare.

**Extreme Thinking mode.** A new runtime parameter that allocates substantially more compute to pre-response reasoning. The model generates a candidate response, checks it against its own reasoning trace for internal consistency, identifies failure points, and revises before surfacing an answer. Slower — 30 to 90 seconds for complex queries — but measurably more accurate on multi-step problems.

**Improved task persistence.** OpenAI's term for the model's ability to sustain reliable performance across multi-hour agentic tasks without accumulating errors. Prior GPT-5 models degraded in long autonomous workflows — losing track of constraints, drifting from objectives. GPT-5.4 specifically addresses this.

| Feature | GPT-5.4 | GPT-5.3 Instant | Claude Opus 4.6 | Gemini 3.1 Pro |
|---|---|---|---|---|
| Context window | **1M tokens** | 500K tokens | 200K tokens | 2M tokens |
| GPQA Diamond (PhD science) | 91.7% (Extreme) | 78.4% | ~90.5% | ~88.1% |
| SWE-bench Verified | 52.8% (Extreme) | 41.6% | ~51% | ~48% |
| Humanity's Last Exam | 31.4% (Extreme) | 17.8% | ~29% | ~26% |
| Input cost (per 1M tokens) | $2.50 | $0.75 | ~$15.00 | ~$3.50 |
| Output cost (per 1M tokens) | $12.00 | $4.00 | ~$75.00 | ~$10.50 |
| API identifier | `gpt-5.4` | `gpt-5.3-chat-latest` | `claude-opus-4-6` | `gemini-3.1-pro` |

---

## The 1 Million Token Context Window in HR Terms

Context window size matters most for specific HR use cases. Here is where the jump from 500K to 1 million tokens creates concrete workflow improvements.

### Whole-Candidate Analysis Without Chunking

Today, HR tools processing comprehensive candidate portfolios chunk documents — split the resume, run one analysis, split the portfolio, run another, then try to synthesize across partial results. Each chunking boundary introduces cross-reference errors. With a 1M token context, a complete candidate file processes in a single pass. The analysis is coherent rather than assembled from fragments.

### Full Pipeline Pattern Analysis

200 candidates × an average of 3,000 tokens of data per candidate = 600,000 tokens — within GPT-5.4's single context. Running analysis across an entire year's candidate pipeline simultaneously enables pattern detection — demographic patterns, source quality, interview score predictors — that chunked analysis misses.

### Multi-Round Interview Analysis

A candidate completing a phone screen, a technical assessment, and three structured interviews generates substantial transcript data. Analyzing all sessions together — looking for consistency, development, and contradictions across rounds — requires holding all data in context at once. GPT-5.4 handles this for even lengthy interview processes.

### Complete Job Description Libraries

A company's full library of 50 to 100 active role descriptions fits within a 1M context. Analyzing consistency, identifying gaps, suggesting improvements, and spotting overlapping role definitions becomes a single-pass operation.

---

## Extreme Thinking Mode and HR Assessment Accuracy

Extreme Thinking mode is built for problems where fast answers are less valuable than accurate ones. In HR terms, this maps to specific workflows where a wrong assessment has high cost.

### Competency-Based Evaluation Scoring

Scoring a candidate's interview responses against a structured competency framework requires multi-step reasoning: identify evidence, assess quality, calibrate against the performance bar, produce a score. Standard inference shortcuts this process. Extreme Thinking's self-verification loop catches internally inconsistent scores before they surface.

### Structured Reference Checking

Processing a detailed reference conversation for competency evidence — and distinguishing between positive evidence, damning with faint praise, genuine uncertainty, and explicit concern — benefits from additional reasoning depth. Interviewers performing reference checks apply this level of critical reading; most AI processing does not.

### Bias Detection in Screening Outputs

Running an audit of AI screening decisions for potential demographic bias requires examining patterns across hundreds of decisions, identifying confounding factors, and distinguishing genuine qualification differences from proxies for protected characteristics. The analytical complexity benefits from Extreme Thinking's additional reasoning cycles.

**Cost of Extreme Thinking mode:** $5.00/$25.00 per million tokens versus standard $2.50/$12.00. For most HR workloads (high-volume resume screening, scheduling, follow-up), standard mode is correct. For high-stakes assessment scoring that influences consequential hiring decisions, the Extreme Thinking premium is well within the value of improved accuracy.

---

## Which AI Hiring Tool Categories Benefit Most

GPT-5.4's capability improvements map unevenly to HR tool categories.

| HR Tool Category | Benefit Level | Most Relevant Capability |
|---|---|---|
| High-volume resume screening | High | Cost advantage (6x cheaper than Claude) + 1M context |
| Structured interview analysis | High | Extreme Thinking accuracy + 1M context for full transcripts |
| AI hiring agents and automation | Medium-High | Improved task persistence |
| Reference check processing | Medium | 1M context + reasoning depth |
| Compensation benchmarking analysis | Medium | Extreme Thinking consistency checking |
| Scheduling automation | Low | Already handled well by GPT-5.3 Instant |

**High-volume resume screening** benefits most immediately. The 1M context enables whole-portfolio analysis. The cost advantage over Claude makes it viable at enterprise volumes. The task persistence improvement means multi-step screening workflows complete accurately rather than degrading.

**Structured interview analysis** gains from both Extreme Thinking accuracy improvements and the 1M context holding full interview transcripts from multi-round processes in a single analysis pass.

**AI hiring agents** benefit most from the task persistence fix — the failure mode where agents accumulate errors over long workflows is directly addressed. This is the category where the change is most meaningful even if Claude still leads on raw agentic performance.

---

## The Cost Equation for HR Software Buyers

GPT-5.4's pricing positions it as the production-scale AI hiring infrastructure choice.

For a company screening 10,000 applications per year at 2,000 tokens per screening pass:

| Model | Cost Per Application | Annual Cost (10K apps) |
|---|---|---|
| GPT-5.4 Standard | ~$0.05 | ~$500 |
| GPT-5.3 Instant | ~$0.015 | ~$150 |
| Claude Opus 4.6 | ~$0.30 | ~$3,000 |
| Gemini 3.1 Pro | ~$0.07 | ~$700 |

At enterprise scale — 100,000 applications annually — the cost difference between GPT-5.4 and Claude Opus 4.6 is $25,000 to $30,000 per year in infrastructure. That differential either goes to vendor margins or gets passed to buyers in pricing.

OpenAI shipped GPT-5.3 Instant and GPT-5.4 within two days of each other in early March 2026. Behavioral improvements and capability upgrades are now parallel release tracks. The tools you evaluate in 2026 will be running on meaningfully better models by mid-year.

---

## Questions to Ask Your Vendors Right Now

**1. Which OpenAI model version are your AI features running on?**
If the answer is anything before GPT-5.4, ask about their update timeline. A vendor still on GPT-4 in 2026 is a red flag about AI infrastructure investment.

**2. Do you support Extreme Thinking mode for high-stakes assessment workflows?**
Most vendors will not have enabled it yet. Understanding their roadmap for higher-accuracy assessment features tells you about their product direction.

**3. Can your screening pipeline process a complete candidate portfolio in one pass?**
If the vendor still chunks documents to stay within a context window, they are not on GPT-5.4's 1M token context. Document chunking introduces errors that whole-portfolio analysis avoids.

**4. What is your model update policy?**
With OpenAI now releasing on a 6 to 8 week cadence, vendors who do not update within 30 days of a new model release are leaving meaningful capability improvements on the table.

---

## FAQ

**Do I need to do anything to get GPT-5.4 capabilities in the HR tools I already use?**
No action required on your end. If your HR tool vendor uses OpenAI's API, they update to the `gpt-5.4` model identifier. Whether they have done so depends on the vendor. Ask specifically: "Which OpenAI model version are your AI features running on?"

**Will GPT-5.4 replace GPT-5.3 Instant for all HR workloads?**
No. GPT-5.3 Instant was optimized for speed — 3x faster inference at 60% of GPT-5.3 pricing. For HR tasks where response time matters more than depth — scheduling confirmations, candidate acknowledgment emails, quick status updates — GPT-5.3 Instant remains correct. GPT-5.4 is right when analysis depth matters.

**What does task persistence mean for HR automation workflows?**
Prior GPT-5 models would accumulate errors over long autonomous task sequences. For an HR agent reviewing 50 applications, scoring each, generating outreach for qualified candidates, and updating the ATS — degradation at step 30 was a real problem. GPT-5.4's task persistence means quality at step 50 is closer to quality at step 1.

**How does GPT-5.4's 1M context compare to Gemini 3.1 Pro's 2M context for HR use cases?**
Gemini 3.1 Pro at 2M tokens holds double the content. For most HR use cases, 1M tokens is more than sufficient. Gemini's advantage matters for analyzing an entire year of structured interview transcripts across all roles simultaneously. For per-candidate analysis, both models handle it.

**Is the 1M token context window useful for small companies hiring only a few people per year?**
For small hiring volumes, the benefit is minimal — a 20-application pipeline fits in 500K tokens. Small teams get more practical value from Extreme Thinking mode for high-stakes assessment decisions than from the larger context.

**When will GPT-5.5 or the next major version ship?**
Based on the current cadence — major capability releases every 6 to 8 weeks — a GPT-5.5 is plausible in Q2 2026. Evaluate tools on their AI update process, not just their current model version.

**Should HR teams ask vendors to switch to GPT-5.4?**
Ask vendors which model they are on and what their update policy is. Vendors should update proactively. If a vendor is running on GPT-4 in 2026 that is a red flag. If on GPT-5.3, ask about their GPT-5.4 timeline.