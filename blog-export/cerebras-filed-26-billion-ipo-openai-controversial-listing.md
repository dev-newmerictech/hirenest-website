**TL;DR (Direct Answer):** On May 4, 2026, AI chipmaker Cerebras Systems officially launched its IPO roadshow, stepping into the public markets to directly challenge Nvidia. The company is offering 28 million Class A shares priced between $115 and $125 each, seeking to raise up to $3.5 billion. If priced at the top of the range, Cerebras will command a fully diluted valuation of $26.6 billion. Unlike traditional chipmakers that string thousands of smaller GPUs together, Cerebras builds massive "wafer-scale" processors—literally the size of a dinner plate. But what makes this IPO truly historic (and controversial) is its anchor customer. Fueled by a recent $20 billion, multi-year computing deal with OpenAI, Cerebras is asking Wall Street to bet that the future of artificial intelligence doesn't belong exclusively to Jensen Huang.

---

## The Hardware: Dinner Plates vs. Postage Stamps

To understand why Cerebras is valued at nearly $27 billion, you have to look at the sheer absurdity of their engineering. 

When Nvidia builds a highly coveted B200 (Blackwell) GPU, the chip is roughly the size of a large postage stamp. To train or run a massive AI model, data centers have to connect tens of thousands of these smaller chips together using complex networking cables. Moving data *between* these chips creates a massive bottleneck that slows down inference and burns immense amounts of electricity.

Cerebras looked at that bottleneck and decided to bypass it entirely. Their flagship product, the **Wafer-Scale Engine 3 (WSE-3)**, is a single, massive piece of silicon containing 4 trillion transistors. Because all the cores and memory are on the exact same continuous slab of silicon, data doesn't have to travel through external cables. It moves instantaneously. Cerebras claims this allows them to process AI workloads—specifically inference tasks—up to 15 times faster than traditional GPU clusters.

## The $20 Billion OpenAI Megadeal

Hardware alone doesn't guarantee a successful tech IPO; you need marquee customers. Cerebras secured the biggest one on Earth.

In early 2026, Cerebras locked in a staggering Master Relationship Agreement with **OpenAI**. Under this deal, OpenAI committed to purchasing up to 750 megawatts (expandable to 2 gigawatts) of computing power, a contract valued at over $20 billion. OpenAI even fronted Cerebras a $1 billion working capital loan and holds warrants for equity upside. 

Why does OpenAI need so much non-Nvidia compute? **Speed.** With the explosion of OpenAI's agentic coding platform, *Codex Spark*, AI doesn't just generate a single text response—it operates in multi-turn, iterative loops. Latency compounds with every step an agent takes. Cerebras's ultra-fast wafer-scale architecture is specifically optimized for these rapid inference cycles. As Cerebras CEO Andrew Feldman bluntly put it: *"We took the fast inference business OpenAI needed away from Nvidia."*

## The Concentration Risk: Too Close to Sam Altman?

While the OpenAI megadeal provides a massive revenue floor, it is also the S-1 filing's biggest red flag. 

Public markets hate "concentration risk." In 2025, Cerebras generated $510 million in revenue (a 76% year-over-year jump), but an astonishing 86% of that revenue came from just two UAE-based entities. Moving forward, the company's $24.6 billion backlog is overwhelmingly dominated by the OpenAI capacity commitments. 

If OpenAI's compute demand recalibrates, or if Sam Altman decides to lean harder into Microsoft's custom Maia accelerators down the line, Cerebras's financial projections would collapse. To survive the public markets post-IPO, Cerebras has to prove it isn't just a bespoke hardware vendor for Sam Altman. Recent channel agreements with AWS to deploy Cerebras systems are a step in the right direction, but Wall Street will demand broader enterprise adoption.

---

## Capability Stack: The Silicon Rivalry

| Feature/Metric | Nvidia (The Incumbent) | Cerebras (The Challenger) |
| :--- | :--- | :--- |
| **Core Product Strategy** | Clusters of small, highly versatile GPUs | Massive, single "wafer-scale" processors |
| **Current Flagship** | Blackwell Architecture (B200) | Wafer-Scale Engine 3 (WSE-3) |
| **Transistor Count (Per Chip)** | ~208 Billion (Blackwell) | ~4 Trillion (WSE-3) |
| **Primary Strength** | Universal standard for AI Training (CUDA) | Ultra-low latency for Agentic AI Inference |
| **Market Status (May 2026)** | Trillion-dollar public monopoly | Targeting $26.6B IPO on Nasdaq (CBRS) |

---

## FAQ

**When exactly will Cerebras stock (CBRS) be available to buy?**
The IPO roadshow launched on May 4, 2026. Typically, a roadshow lasts one to two weeks while the company pitches to institutional investors to build the "order book." The IPO is expected to price around May 13, with retail investors likely seeing the CBRS ticker begin trading on the Nasdaq the following day.

**Does Cerebras manufacture its own chips?**
No. Like Nvidia, AMD, and Apple, Cerebras is a "fabless" semiconductor company. They design the massive architecture, but they rely on Taiwan Semiconductor Manufacturing Company (TSMC) to physically print the silicon wafers. 

**Is Cerebras actually profitable?**
According to their recent SEC filings, they are showing signs of it. While they posted massive operating losses in 2024, their 2025 numbers revealed a sharp swing, posting an $87.9 million profit driven by their early enterprise and UAE contracts. However, capital expenditures remain astronomically high.

**Why doesn't Nvidia just build wafer-scale chips too?**
Manufacturing a flawless piece of silicon the size of a dinner plate is incredibly difficult. Normally, if a tiny sector of a silicon wafer has a defect, you just throw that small chip away. Cerebras had to invent revolutionary routing techniques to bypass microscopic defects natively on the wafer so the whole plate wouldn't be ruined. Nvidia has chosen to stick with the highly profitable, proven methodology of linking smaller chips rather than pivoting to wafer-scale manufacturing.