**TL;DR (Direct Answer):** Anthropic's Responsible Scaling Policy v3.0, effective February 24, 2026, removes the hard commitment to pause AI training if the company cannot guarantee adequate safety mitigations first. The new policy only triggers a delay if Anthropic is simultaneously leading the AI race AND judges the risk of catastrophe to be material — both conditions must be true at the same time. In the same week, Anthropic was facing Pentagon pressure to lift Claude's usage restrictions for military applications. The company's head of safeguards research resigned two weeks earlier, stating publicly that "the world is in peril." For hiring teams building on Claude or evaluating AI safety roles, this is a significant signal about how the AI safety landscape is shifting. Hirenest is built for structured, consistent, accountable hiring — the same principles the AI safety community argues should govern AI development itself.

---

## What the Original Promise Was

When Anthropic introduced its Responsible Scaling Policy in 2023, the core commitment was unusually concrete for a tech company.

The company pledged it would not train AI models more capable than a certain threshold unless it could demonstrate, in advance, that its safety measures were adequate to handle the risks those models could pose.

This was a firm, unilateral line. It did not depend on what OpenAI was doing. It did not depend on whether the regulatory environment was favorable. The inability to prove safety was, by itself, sufficient to halt development.

That commitment was what made Anthropic credibly different from its competitors — at least in the eyes of the AI safety community and much of the press.

RSP v3.0, effective February 24, 2026, removes it.

---

## What RSP v3.0 Actually Changed

The headline change is the elimination of the categorical pause trigger. Under the old framework, Anthropic's inability to demonstrate adequate safety mitigations was by itself sufficient to halt development. That is no longer the case.

**What was removed:**
The hard pause trigger — cannot train more capable models without proven mitigations, regardless of competitive dynamics.

**What was added:**
A dual condition test, Frontier Safety Roadmaps, and Risk Reports.

**The new dual condition:** Anthropic will only delay development if, simultaneously:
1. Its leadership judges the company is leading the AI race
2. Its leadership judges the risk of catastrophe is material

Both must be true at once. If either is absent, development continues.

**Frontier Safety Roadmaps:** Public documents laying out Anthropic's plans across Security, Alignment, Safeguards, and Policy — updated regularly.

**Risk Reports:** Published every 3–6 months, covering threat models, active mitigations, and overall risk assessment. External experts review under certain circumstances.

| Feature | RSP v2 | RSP v3 |
|---|---|---|
| Hard pause trigger | ✓ Cannot train without proven mitigations | ✗ Replaced with dual condition |
| Dual condition | ✗ Not applicable | ✓ Must lead race AND judge risk material |
| Frontier Safety Roadmap | ✗ | ✓ Public, updated regularly |
| Risk Reports | ✗ | ✓ Every 3–6 months |
| External review | ✗ | ✓ Under certain circumstances |
| Unilateral scope | ✓ Full, regardless of competitors | ✗ Narrowed |

---

## Why Anthropic Says It Changed

Jared Kaplan, Anthropic's chief science officer, gave TIME the clearest on-record explanation: "We felt that it wouldn't actually help anyone for us to stop training AI models" and that "if competitors are blazing ahead" a unilateral pause would simply cede ground.

Anthropic's documentation cites three forces:

**1. A "zone of ambiguity."** Defining precisely when a capability threshold has been crossed is genuinely difficult. Bright lines are clean in policy documents and messy in practice.

**2. The political climate.** In plain terms, the 2026 regulatory environment is not friendly to companies that voluntarily slow down. The incentive structure has shifted.

**3. The collective action problem.** Some mitigations required at higher capability levels cannot be implemented by one company alone. If Anthropic pauses and OpenAI, Google, xAI, and others continue without equivalent safety measures, the net effect on global AI risk is unclear — and potentially negative.

That last argument is real. It is also one that every competitor would be happy for Anthropic to believe.

---

## The Pentagon Standoff That Happened the Same Week

RSP v3.0 did not drop in a vacuum.

The same week, Defense Secretary Pete Hegseth reportedly met with Anthropic CEO Dario Amodei and demanded the company lift its usage restrictions so Claude could be used for "all lawful use" by the military. Anthropic had drawn two red lines: AI-controlled weapons and mass domestic surveillance of American citizens. The Pentagon wanted both removed.

The company holds a $200 million government contract. Hegseth reportedly threatened to terminate that contract by Friday if Anthropic refused — and to label Anthropic a "supply chain risk," a designation that would function as a government blacklist.

Every other major AI lab — OpenAI, Google, xAI — had already agreed to lift guardrails for Pentagon work. Anthropic was the outlier.

Anthropic has not confirmed any link between the Pentagon pressure and the RSP timing. But the proximity of the two events has not gone unnoticed in the coverage from Engadget, CNN, The Register, and others.

---

## The Resignation That Preceded It

Two weeks before RSP v3.0 was published, Mrinank Sharma — who led Anthropic's safeguards research team — resigned and posted a public letter on X stating "the world is in peril."

Sharma wrote that he had "repeatedly seen how hard it is to truly let our values govern our actions" at Anthropic, and insinuated a gap between the company's public commitments and internal practice. He specifically cited concerns about bioterrorism and AI-assisted catastrophic risks.

His resignation was not framed as being about the RSP specifically. But its timing drew its own conclusions.

---

## What the AI Safety Community Is Saying

The response from researchers has been a mix of critique and cautious acknowledgment.

The most common emotional response: "They said they were different. Now they're not." The policy's new Frontier Safety Roadmap and Risk Reports are not nothing — external review of Risk Reports is a concrete accountability mechanism. But the old RSP had a hard line. The new one has more transparency. Whether those are equivalent trades depends on what you believe actually reduces risk.

Analysis on LessWrong and similar forums drew comparisons to Google abandoning "Don't be evil." Others noted that removing visible commitments weakens broader industry norms — those norms have historically depended on peer pressure and public accountability. When the most safety-focused company drops its hardest line, it becomes harder for anyone else to hold theirs.

---

## What This Means for Teams Hiring AI Professionals

For hiring teams building AI capabilities or evaluating AI safety roles, RSP v3.0 signals several important shifts:

**1. AI safety is becoming a competitive rather than absolute commitment.**
The shift from a hard unilateral pause to a conditional dual-condition test reflects a broader industry trend: safety is increasingly framed as something companies pursue relative to their competitors, not independently. This affects how you evaluate "AI safety" credentials on resumes — the field is evolving rapidly.

**2. Regulatory and compliance AI roles are growing.**
The Pentagon standoff, the RSP changes, and the broader US-China AI rivalry all point to one conclusion: AI policy and compliance is no longer peripheral. Companies building on frontier AI models need people who understand the regulatory landscape. Hiring for AI compliance roles is becoming strategic.

**3. AI ethics and safety professionals are in a moment of genuine internal conflict.**
Sharma's public resignation reflects a tension that many AI safety professionals are navigating: working inside companies that publicly commit to safety while experiencing pressure to prioritize speed. Be thoughtful in interviews about why candidates are interested in these roles and what trade-offs they are willing to make.

**4. "Building on Claude" now means understanding a conditional safety framework.**
If your product or workflow depends on Claude remaining within certain safety parameters, RSP v3.0 means those parameters are now explicitly conditional on competitive dynamics that Anthropic's leadership assesses internally. This is worth factoring into your AI product risk analysis.

---

## The Bigger Picture: A Market Shift, Not Just a Policy Change

RSP v3.0 is not primarily a story about one company's policy document. It is a signal about how the AI industry is evolving under competitive pressure.

The framework that was supposed to prevent any frontier lab from building beyond a safe threshold — Anthropic's version, at least — has become conditional on factors that the company itself assesses in real time. Other labs have made similar transitions with less fanfare.

What replaces hard limits is transparency and collective accountability. Whether those are adequate substitutes is the central unresolved question in AI governance in 2026.

For teams building on AI: understand that the safety assurances embedded in the tools you use are increasingly relative rather than absolute. That is not a reason to stop building — it is a reason to maintain your own judgment about what is and is not appropriate to deploy.

---

## How Hirenest Builds on Principles That Do Not Change

Hirenest's structured interview framework is built on principles that do not require conditional safety calculations: consistency, transparency, auditability, and bias awareness. Every evaluation is documented. Every scoring decision is explainable. Every process can be reviewed.

These are the same principles the AI safety community argues should govern AI development. We apply them to hiring.

---

## FAQ

**What is the RSP?**
Anthropic's Responsible Scaling Policy — its internal framework governing how it develops increasingly capable AI models. Defines AI Safety Levels tied to capability thresholds and required mitigations.

**What did RSP v3.0 remove?**
The hard commitment to pause development if safety mitigations cannot be proven adequate. This was replaced with a dual-condition test requiring both AI race leadership AND material catastrophe risk to trigger any delay.

**What did RSP v3.0 add?**
Frontier Safety Roadmaps (public documents on security, alignment, safeguards, and policy) and Risk Reports (published every 3–6 months with threat model analysis and external review).

**Does this change how Claude behaves as a product?**
No, not directly. The RSP governs development decisions, not day-to-day Claude behavior in the API. Claude's usage policies and built-in safety training are separate from the RSP framework.

**What happened with the Pentagon and Anthropic?**
The Defense Department holds a $200 million contract with Anthropic and reportedly threatened to cancel it and label Anthropic a "supply chain risk" if the company did not lift its usage restrictions for military applications. All other major AI labs had already agreed to remove their standard guardrails for Pentagon work. The standoff became public the same week RSP v3.0 was released.

**Who is Mrinank Sharma?**
Anthropic's former head of safeguards research. He resigned on February 9, 2026 — two weeks before RSP v3.0 — and posted publicly stating "the world is in peril," citing concerns about the gap between Anthropic's public commitments and internal practice.

**Should I stop building on Claude because of this?**
Not necessarily. Claude's behavior as a product has not changed. The RSP change affects how Anthropic decides whether to build future models, not what the current model does. Evaluate the change in the context of your specific risk tolerance and use case.