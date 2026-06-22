**The short version**

Google Cloud crossed what Alphabet is calling an $80 billion annualized revenue run rate, with year-over-year growth figures that are making AWS and Azure look like they're standing still. The honest read: Google Cloud is genuinely accelerating, and AI infrastructure demand is a big reason why. But the framing of "everyone else is struggling" deserves pushback. AWS still generates more than double Google Cloud's revenue. Azure is growing almost as fast. What's actually happening is a tightening race at the top, not a runaway leader.

---

## Why this number landed differently

Most quarterly earnings announcements produce a news cycle and then fade. Google Cloud's recent numbers stuck around because they came with a specific narrative: Google is no longer the permanent third-place finisher in the cloud race. For years, that was the accepted wisdom. AWS invented the category, Azure used Microsoft's enterprise relationships to build a formidable second, and Google Cloud was perpetually promising it would matter more soon.

That story is getting harder to tell.

The $80 billion annualized run rate is the kind of number that changes how enterprise buyers think about vendor viability. Companies spend years building infrastructure on cloud platforms. They care about which providers will still be investing heavily in five years, which ones will maintain competitive pricing, and which have the AI tooling to keep them from having to migrate later. A growth rate that consistently outpaces the market is evidence of momentum, and momentum attracts more momentum.

What pushed the growth? Two things mostly. First, Google's AI product stack has become genuinely competitive in a way it wasn't two years ago. Vertex AI, its managed ML platform, has seen serious adoption among companies that want to build on top of Gemini models or run their own fine-tuned versions without managing the underlying infrastructure. Second, Google Cloud's pricing and its custom TPU hardware give it a cost advantage for certain AI training workloads that AWS and Azure can't easily replicate on general-purpose GPU clusters.

---

## What 63% growth actually means in context

Let's be precise about the comparison. When you hear "growing 63% while everyone else struggles," that framing requires a closer look.

AWS reported year-over-year growth in the mid-to-high teens range in its most recent quarters. That's not struggling by any measure for a business of its size. Azure has been posting growth in the low-to-mid twenties. Google Cloud's higher percentage looks dramatic partly because it's growing from a smaller base. Percentage growth is always easier to generate when your denominator is smaller.

That said, the directional story is real. Google Cloud is closing the gap, not widening it. Its growth rate has been accelerating while AWS's has been relatively stable and Azure's has been plateauing. If those trajectories hold, the market share math eventually shifts in ways that matter.

The more interesting data point is operating margin. Google Cloud turned sustainably profitable in 2023 and has been expanding margins since. For a long time, Google was subsidizing its cloud business at scale to buy market share. The fact that it's now growing fast *and* running profitably suggests it has moved past that phase. That's what a maturing business in a leadership position looks like.

---

## The AI infrastructure angle is doing a lot of work here

It's worth separating two things that often get conflated: cloud revenue from traditional workloads (databases, compute, storage, networking) and revenue from AI-specific infrastructure. Both are growing, but the dynamics are different.

Traditional cloud growth is tied to enterprise digital transformation, which has been slowing as most large companies have already moved a substantial portion of their workloads. The ceiling is getting closer. AI infrastructure, by contrast, is a new demand category. Companies are standing up model training clusters, inference infrastructure, vector databases, and RAG pipelines that didn't exist in their architecture two years ago. That spending has to go somewhere, and all three hyperscalers are competing for it.

Google's advantage here is specific and real. Its TPUs (Tensor Processing Units) were designed from the ground up for matrix operations, which is basically the computational primitive behind every modern neural network. For large-scale training runs, TPUs can be significantly cheaper and faster than equivalent GPU clusters. Google DeepMind runs on them. Several major AI labs use them for at least some of their training work. That gives Google a credible pitch to enterprise AI teams that AWS and Azure have to work harder to match.

Azure's counter is its relationship with OpenAI and the deeply integrated Microsoft ecosystem. Companies running Teams, Office 365, Dynamics, and GitHub Copilot have strong gravity pulling them toward Azure for their AI workloads. AWS counters with scale, reliability, and the largest existing enterprise customer base.

None of these advantages are permanent. The cloud wars are more competitive right now than they've been since AWS's early dominance, and that competition is better for buyers than it is for any single vendor's margins.

---

## Where the "everyone is struggling" framing goes wrong

Headlines that position Google Cloud's growth as happening "while everyone else struggles" are doing something that tech coverage does constantly: turning a genuinely interesting competitive shift into a cleaner story than reality supports.

AWS is not struggling. Its operating income is still larger than Google Cloud's entire revenue. It has the deepest service catalog, the most mature enterprise sales motion, and the largest installed base. It is growing more slowly, in percentage terms, from a much larger base. Those are different things.

Azure is not struggling either. Microsoft's cloud business benefits from one of the most durable competitive advantages in enterprise tech: switching costs. A company that runs its identity, email, productivity, and development tools on Microsoft's stack is not switching cloud providers over a price difference. Azure's growth is slowing from pandemic-era peaks, but it's not losing ground in any meaningful way.

What is actually happening is that the market is large enough to support all three growing simultaneously, while Google closes the gap. That's a more accurate and more interesting story than a zero-sum battle for survival.

---

## What this means for you

If you're an enterprise buyer evaluating cloud providers right now, Google Cloud deserves more serious consideration than it got three years ago. Its AI tooling is genuinely competitive. Its pricing for certain workloads is compelling. And its financial position and growth trajectory make it a safe long-term bet in a way that wasn't obvious when it was a distant third.

That doesn't mean you should migrate. Cloud migrations are expensive and risky, and the grass is almost never as green as the vendor's pitch deck suggests. But if you're starting new infrastructure projects, especially AI-heavy ones, running a real cost and capability comparison that includes Google Cloud is worth the time.

If you're following this space as an analyst or investor: the number to watch isn't revenue run rate. It's margin trajectory and the rate at which Google Cloud wins net-new enterprise contracts versus expanding within existing accounts. The former is a leading indicator of whether the growth is durable.

---

## A few questions worth asking

**If Google Cloud is growing so fast, why does AWS still dominate?**

Scale, inertia, and the nature of enterprise contracts. Most large companies signed multi-year AWS agreements during the 2015-2020 period when AWS was essentially the only serious option. Those contracts renew and expand. Google Cloud is winning more new workloads, but it's fighting legacy relationships that take years to move. AWS's dominance is a historical artifact as much as a current competitive advantage, but that doesn't make it easy to displace.

**Is AI infrastructure spending a real trend or a bubble?**

Both, probably. The underlying demand for AI compute is real and growing. Companies are building products that require inference infrastructure at scale. That's not going away. But there's also a component of speculative infrastructure buildout, where companies are buying capacity because they expect they'll need it, not because they currently do. When that expectation corrects, there will be a slowdown. The question is timing and severity, and nobody has a clean answer.

**Why does Google Cloud's TPU advantage matter if you can just rent GPUs from AWS?**

For many workloads, it doesn't. GPU clusters from AWS or Azure are fast and well-supported, and if you're running standard inference jobs or moderate-scale training, the difference in cost isn't worth the operational complexity of switching. Where TPUs start to matter is at very large training runs, where the efficiency advantages compound. If you're training a frontier model, the cost difference over a multi-month run can be substantial. For most enterprise teams, that's not the workload they're running.

**Does Google's consumer data give it an AI advantage in the cloud?**

Less directly than you'd think. Google's first-party data informs how it builds its own models, but enterprise cloud customers are training on their own data. The advantage Google has is more about model quality and infrastructure efficiency than about any proprietary data flowing into customer workloads. Its advantage in cloud AI comes from research talent and hardware design, not from owning search and YouTube data.

**What should smaller companies make of this cloud race?**

For companies under a few hundred employees, the hyperscaler competition mostly means stable pricing and improving tooling. All three are aggressively courting smaller customers because enterprise deals take years to close. The practical implication is that you have real leverage when negotiating cloud credits, especially if you're building something AI-related. Use it.