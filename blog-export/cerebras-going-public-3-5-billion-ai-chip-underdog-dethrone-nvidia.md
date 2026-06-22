**TL;DR (Direct Answer):** On May 4, 2026, AI chipmaker Cerebras Systems officially launched its IPO roadshow, stepping into the public markets to directly challenge Nvidia. The company is offering 28 million shares priced between $115 and $125 each, seeking to raise up to $3.5 billion. If priced at the top of the range, Cerebras will command a fully diluted valuation of roughly $26.6 billion. Unlike traditional chipmakers that string thousands of smaller GPUs together, Cerebras builds massive "wafer-scale" processors—literally the size of a dinner plate—designed to process AI workloads with unprecedented speed. Fueled by a recent $20 billion computing deal with OpenAI, Cerebras is asking Wall Street to bet that the future of artificial intelligence doesn't belong exclusively to Jensen Huang.

---

## The $26.6 Billion Pitch

For the last three years, if you wanted to invest in the artificial intelligence infrastructure boom, the playbook was simple: buy Nvidia (NVDA). Cerebras is trying to rewrite that playbook. 

After withdrawing a previous filing, Cerebras filed its updated S-1 prospectus to list on the Nasdaq under the ticker symbol **CBRS**. The financials underlying the pitch are highly compelling for an infrastructure startup. Cerebras isn't just selling a concept; they are shipping silicon. In their most recent Q4, the company posted roughly $510 million in revenue—a massive 76% year-over-year jump—and actually swung to profitability, generating nearly $88 million in net income. 

Wall Street is treating this offering as the ultimate litmus test. Will institutional investors diversify their hardware portfolios, or do they believe Nvidia's CUDA software moat is truly impenetrable? 

## The Hardware: Dinner Plates vs. Postage Stamps

To understand why Cerebras is valued at nearly $27 billion, you have to look at the sheer absurdity of their engineering. 

When Nvidia builds a highly coveted H100 or Blackwell GPU, the chip is roughly the size of a large postage stamp. To train a massive AI model, data centers have to connect tens of thousands of these smaller chips together using complex networking cables. Moving data *between* these chips creates a massive bottleneck that slows down training and burns immense amounts of electricity.

Cerebras looked at that bottleneck and decided to bypass it entirely. Their flagship product, the **Wafer-Scale Engine 3 (WSE-3)**, is a single, massive piece of silicon. It contains an astronomical 4 trillion transistors (compared to Nvidia's ~80 billion per H100). Because all the cores and memory are on the exact same continuous slab of silicon, data doesn't have to travel through external cables. It moves instantaneously, drastically reducing training times and power consumption. 

## The OpenAI Megadeal

Hardware alone doesn't guarantee a successful IPO; you need marquee customers. Cerebras secured the biggest one on Earth.

In January 2026, Cerebras locked in a staggering multi-year agreement with **OpenAI**. Under this master relationship agreement, OpenAI committed to purchasing up to 750 megawatts of computing power through 2028. The total value of the deal is estimated at over $20 billion. 

This deal serves two crucial purposes for the IPO:
1. **Validation:** It proves to the market that the creators of ChatGPT believe Cerebras' hardware is viable enough to deploy at scale.
2. **Revenue Floor:** It gives the company a massive, guaranteed revenue trajectory for the next few years. 

## The Concentration Risk

However, the OpenAI megadeal is also the S-1 filing's biggest red flag. 

Public markets hate "concentration risk." Having a massive percentage of your future revenue tied to a single customer is terrifying for institutional buyers. If OpenAI's compute demand recalibrates, or if OpenAI decides to lean harder into Microsoft's custom Maia accelerators down the line, Cerebras's financial projections would collapse. 

To survive the public markets post-IPO, CEO Andrew Feldman has to prove that Cerebras isn't just a bespoke hardware vendor for Sam Altman, but a scalable architecture that can win contracts across defense, healthcare, and enterprise cloud providers.

---

## Capability Stack: The Silicon Rivalry

| Feature/Metric | Nvidia (The Incumbent) | Cerebras (The Challenger) |
| :--- | :--- | :--- |
| **Core Product Strategy** | Clusters of small, highly versatile GPUs | Massive, single "wafer-scale" processors |
| **Current Flagship** | Blackwell Architecture | Wafer-Scale Engine 3 (WSE-3) |
| **Transistor Count (Per Chip)** | ~208 Billion (Blackwell) | ~4 Trillion (WSE-3) |
| **Software Moat** | CUDA (Industry standard, deeply entrenched) | CSoft (Growing, but requires workflow adaptation) |
| **Market Status (May 2026)** | Trillion-dollar public monopoly | $26.6B IPO targeting Nasdaq (CBRS) |

---

## FAQ

**When exactly will Cerebras stock (CBRS) be available to buy?**
The IPO roadshow launched on May 4, 2026. Typically, a roadshow lasts one to two weeks while the company pitches to institutional investors to build the "order book." If demand holds, retail investors will likely see the CBRS ticker begin trading on the Nasdaq by mid-to-late May.

**Does Cerebras manufacture its own chips?**
No. Like Nvidia, AMD, and Apple, Cerebras is a "fabless" semiconductor company. They design the massive architecture, but they rely on Taiwan Semiconductor Manufacturing Company (TSMC) to physically print the silicon wafers. 

**Can I run standard AI software on a Cerebras system?**
Yes, but it requires a translation layer. Nvidia's CUDA software dominates the industry. Cerebras uses its own software platform (CSoft) which integrates with standard machine learning frameworks like PyTorch and TensorFlow, allowing developers to port their models over without having to rewrite their code from scratch.

**Why doesn't Nvidia just build wafer-scale chips too?**
Manufacturing a flawless piece of silicon the size of a dinner plate is incredibly difficult. Normally, if a tiny sector of a silicon wafer has a defect, you just throw that small chip away. Cerebras had to invent revolutionary routing techniques to bypass microscopic defects natively on the wafer so the whole plate wouldn't be ruined. Nvidia has chosen to stick with the highly profitable, proven methodology of linking smaller chips rather than pivoting to wafer-scale manufacturing.