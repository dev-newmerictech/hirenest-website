On March 11, 2026, NVIDIA launched Nemotron 3 Super — a 120-billion parameter open-source model built specifically for multi-agent AI systems. It delivers up to 5x higher throughput than its predecessor, runs only 12 billion active parameters during inference to keep costs down, and ships with a 1-million-token context window that lets agents retain full workflow state without losing track of their original objective. The entire stack — weights, training data, reinforcement learning environments, and deployment recipes — is openly released. The same week, DeepSeek dropped V4: a trillion-parameter open model running on Chinese-made chips, timed strategically ahead of China's parliamentary sessions. Meanwhile, the MMLU benchmark gap between the best open models and the best proprietary ones has narrowed from 17.5 percentage points to just 0.3 in a single year. The open-source AI arms race is no longer about catching up to GPT-4. It's about who builds the most capable, most efficient, most deployable agentic AI stack — and right now, NVIDIA just made its most serious move yet.

---

## The Race That Changed Its Own Rules

For most of AI's public history, the story was simple: proprietary models were smarter, open models were cheaper, and the gap between them was wide enough that the choice was obvious for serious use cases. If you needed capability, you paid for a closed API. If you needed cost control, you accepted the performance tradeoff.

That story is no longer accurate.

Something remarkable happened across 2025 and into early 2026: the MMLU benchmark gap between open-source and proprietary AI models narrowed from 17.5 to just 0.3 percentage points in a single year. What was once a years-long capability gap is now measured in weeks. The moat didn't erode gradually — it collapsed.

The result is a genuinely new competitive dynamic. The question in 2026 is not "can open models keep up?" It's "which open model ecosystem wins, and why?" And the answer to that question has enormous implications — for developers, for businesses making infrastructure bets, and for the geopolitical competition between the United States and China playing out in code repositories on Hugging Face.

NVIDIA's Nemotron 3 Super launch on March 11 is the most significant American entry into that competition this year. And it landed in the same week as DeepSeek V4 — a trillion-parameter Chinese model running on domestic chips — making the week itself a snapshot of exactly how heated this race has become.

---

## NVIDIA Nemotron 3: What It Actually Is

### The Family: Nano, Super, Ultra

The Nemotron 3 family consists of three models in Nano, Super, and Ultra sizes — introducing what NVIDIA describes as the most efficient family of open models with leading accuracy for building agentic AI applications.

Nemotron 3 Nano, the smallest of the three, launched in December 2025. It is a 3.2 billion active parameter model that achieves better accuracy than the previous generation Nemotron 2 Nano while activating less than half of the parameters per forward pass — outperforming GPT-OSS-20B and Qwen3-30B-A3B-Thinking on popular benchmarks.

Nemotron 3 Super launched March 11. Ultra — expected to reach 500 billion parameters — is coming in the first half of 2026.

### The Super Model: Three Problems It Was Built to Solve

NVIDIA designed Nemotron 3 Super specifically to tackle two major constraints facing agentic AI systems. The first is context explosion: multi-agent workflows generate up to 15 times more tokens than standard chat interactions, because each turn requires the model to resend context including tool outputs and intermediate reasoning. The second is the thinking tax: complex agents must reason at every step, making it impractical to use very large models since more parameters means slower and more expensive processing.

The architecture addresses both.

Nemotron 3 Super is a 120-billion total, 12-billion active parameter model that uses a hybrid mixture-of-experts architecture. It has a native 1-million-token context window that gives agents long-term memory for aligned, high-accuracy reasoning — directly addressing context explosion and goal drift in long-horizon tasks.

Only 12 billion of its 120 billion parameters are active during inference — the process of running the trained model to generate outputs — which resolves the thinking tax problem by keeping per-token processing costs low even as the model's total capacity remains enormous.

### The Three Architectural Innovations Behind the Numbers

Nemotron 3 Super's performance is driven by three specific technical innovations: a hybrid MoE architecture that combines memory-efficient Mamba layers with high-accuracy Transformer layers; latent MoE that calls four times as many expert specialists for the same inference cost by compressing tokens before they reach the experts; and multi-token prediction that generates multiple future tokens in a single forward pass, dramatically reducing generation time for long sequences.

On NVIDIA's Blackwell platform, the model runs in NVFP4 precision — a 4-bit quantization format that cuts memory requirements and pushes inference up to 4x faster than FP8 on NVIDIA Hopper, with no loss in accuracy.

The combined result: up to 5x higher throughput and up to 2x higher accuracy than the previous Nemotron Super, while Artificial Analysis places Nemotron 3 Super at the top spot for efficiency and openness with leading accuracy among models of the same size.

### What "Fully Open" Actually Means Here

This is the part that matters most for developers making infrastructure decisions. NVIDIA isn't releasing just the weights — the part most companies call "open source" while keeping everything else proprietary.

Nemotron 3 models are released with open weights, open training datasets, and extensible training infrastructure under the NVIDIA Open Model License. NVIDIA's synthetic pretraining corpus — nearly 10 trillion tokens — can be inspected or repurposed. Developers also have access to detailed training and post-training recipes within the Nemotron GitHub repository, enabling complete reproducibility and customization.

That's a level of transparency closer to what the Allen Institute for AI has done with OLMo than what Meta does with Llama — which releases weights but keeps training data and recipes proprietary. For research teams, regulated industries, and enterprises that need to audit what their AI was trained on, the distinction is significant.

### Who's Already Using It

Perplexity offers its users access to Nemotron 3 Super for search and as one of 20 orchestrated models in its Personal Computer agent platform. Companies building software development agents — including CodeRabbit, Factory, and Greptile — are integrating the model into their AI agents alongside proprietary models to achieve higher accuracy at lower cost.

The model also powers NVIDIA's own AI-Q research agent, which it says has taken the number one position on both DeepResearch Bench and DeepResearch Bench II — benchmarks that measure an AI system's ability to conduct thorough, multi-step research across large document sets while maintaining reasoning coherence.

---

## The Nemotron 3 Model Family at a Glance

| Model | Parameters (Total / Active) | Context Window | Status | Best For |
|---|---|---|---|---|
| Nemotron 3 Nano | 30B / 3B | 1M tokens | Available now | High-throughput, cost-efficient agentic tasks |
| Nemotron 3 Super | 120B / 12B | 1M tokens | Available now | Multi-agent workflows, coding, cybersecurity |
| Nemotron 3 Ultra | ~500B / TBD | 1M tokens | H1 2026 | State-of-the-art accuracy and reasoning |

---

## Why NVIDIA Is Doing This at All

The strategic logic behind NVIDIA building and open-sourcing frontier AI models is not immediately obvious. NVIDIA makes its money selling GPUs. Why would it give away models that compete with the customers — OpenAI, Anthropic, Google — who buy those GPUs?

The answer comes down to three things. First, geopolitical insurance: if the only U.S. option is expensive proprietary models, companies will be slower to adopt AI, which means slower GPU sales. With China leading in open-source LLMs, it's in NVIDIA's interest to ensure there's a strong American open-source alternative. Second, competitive pressure: open-source models keep proprietary AI giants innovating at a fast pace, which means more GPU spending. NVIDIA's worst-case scenario is a "fat and happy" OpenAI or Anthropic with no competitive pressure. Third, ecosystem broadening: NVIDIA cannot rely on a handful of hyperscalers to drive long-term growth. It needs to diversify its customer base, and the best way to do that is through a software ecosystem powered by open-source models that any developer can deploy on any NVIDIA GPU.

The Nemotron play, in other words, is NVIDIA betting on the entire open-source tier of the AI market — not just its own hardware customers — as a growth engine.

---

## DeepSeek V4: The Trillion-Parameter Challenge From China

The same week Nemotron 3 Super landed, DeepSeek shipped V4. The contrast between the two releases captures exactly what makes the open-source arms race geopolitically interesting right now.

DeepSeek V4 packs a trillion parameters with native multimodal capabilities spanning text, image, video, and audio, a context window exceeding one million tokens, and — most significantly — it runs on Huawei Ascend and Cambricon chips. V4 is the most technically ambitious AI model to come out of China to date, and its release was timed ahead of China's annual Two Sessions parliamentary meetings.

The hardware story is the part that matters for anyone following the export control saga. The U.S. has spent the past two years restricting China's access to advanced NVIDIA GPUs specifically to slow its AI development. DeepSeek's optimization of V4 for domestic Chinese silicon demonstrates that frontier AI models can be trained and deployed on Chinese-made chips despite those export controls. This does not mean Chinese chips have reached parity with NVIDIA's latest hardware — but it proves the gap is not insurmountable for organizations willing to invest in software-level optimization.

For the open-source leaderboard, the competitive picture is now a genuine three-way race. The open-source AI competition has become a three-way contest between Meta's Llama, Alibaba's Qwen, and DeepSeek — with each pushing the frontier of what is possible without proprietary API access. NVIDIA's Nemotron 3 Super now enters as the most credible American challenger to that Chinese-dominated podium.

---

## The Full Open-Source Landscape: Where Everyone Stands

The open-source AI market in March 2026 is genuinely confusing because it's genuinely crowded. Here is what actually matters for developers and enterprises choosing a foundation.

The gap between the best open models and the best proprietary ones has closed to the point where the right open model, run correctly, can outperform proprietary alternatives on specific tasks. For developers, businesses with data privacy requirements, and researchers, that has changed the calculation entirely.

**Meta Llama 4** remains the most widely deployed open-weight model family globally, with the Maverick variant priced at $0.19–$0.49 per million tokens — far below GPT-4o's $4.38. Its architecture now uses a mixture-of-experts design directly inspired by DeepSeek's efficiency innovations.

**DeepSeek V3.2 / V4** leads on pure benchmark performance, particularly in mathematics and reasoning. Enterprise adoption is complicated by geopolitical considerations — many companies cannot use Qwen and DeepSeek models because they come from China, including on-premise deployments where the weights themselves could not technically reveal anything to the model's creators.

**Alibaba Qwen** leads on multilingual performance, particularly for Asian language markets, and ships under an Apache 2.0 license — the most permissive available for commercial deployment.

**NVIDIA Nemotron 3** is now the most transparent option available: open weights, open training data, open RL environments. For regulated industries and government deployments that require full auditability of what a model was trained on, it is uniquely positioned.

---

## What This Means for Developers and Enterprises

The single most important shift in the open-source AI landscape right now is not which model wins benchmarks. It's that the decision to use open models is no longer a performance tradeoff. It's a business and infrastructure decision.

For a software development team building agents on top of NVIDIA Nemotron 3 Super today: the model can load an entire codebase into its 1-million-token context window, run end-to-end code generation and debugging without document segmentation, and handle over 100 tools simultaneously in a complex workflow — all on infrastructure you control, without paying per-token fees to a closed API.

That's a meaningfully different value proposition than it was eighteen months ago.

The remaining reasons to use closed proprietary APIs in 2026 are legitimate but narrower than before: cutting-edge multimodal capability (still an OpenAI and Google advantage), frontier reasoning on the absolute hardest tasks, and consumer-facing products where ease of deployment outweighs cost and control concerns.

For everything else, the case for open-source has never been stronger — and NVIDIA just made it substantially stronger still.

---

## FAQ

**What makes Nemotron 3 Super different from other open-source models?**
Three things set it apart. First, the full stack transparency: open weights, open training datasets of nearly 10 trillion tokens, and open RL environments — not just weights like most competitors. Second, the hybrid MoE architecture that solves the "thinking tax" problem by activating only 12 billion of 120 billion parameters during inference. Third, the 1-million-token context window specifically designed to prevent goal drift in long multi-agent workflows.

**Is Nemotron 3 actually free to use commercially?**
Yes, under the NVIDIA Open Model License. Nemotron 3 Nano is available now on Hugging Face and via inference providers including Baseten, DeepInfra, Fireworks, FriendliAI, OpenRouter, and Together AI. Nemotron 3 Super is also available now. Ultra is coming in the first half of 2026.

**How does Nemotron 3 compare to DeepSeek V4?**
They're optimized for different deployment scenarios. DeepSeek V4's trillion-parameter scale gives it a raw capability advantage for the most demanding tasks — but it runs on Chinese-made hardware and carries geopolitical considerations for regulated industries. Nemotron 3 Super's efficiency advantage (12B active parameters from a 120B model) makes it more practical for production deployment where cost and latency matter. For U.S. government, defense, and regulated enterprise customers, Nemotron 3 has no adoption friction that V4 does not.

**Why did NVIDIA's stock drop when DeepSeek R1 launched in early 2025?**
DeepSeek R1's release demonstrated that near-frontier AI capability could be achieved at a fraction of the compute cost originally assumed. The concern was that if training and inference could be done more efficiently, demand for NVIDIA's high-end GPUs might be lower than projected. In practice, the opposite happened — more capable and cheaper AI generated more deployment, which generated more GPU demand. NVIDIA's response with Nemotron reinforces the same logic from the model side.

**What is NeMo Gym?**
NeMo Gym is NVIDIA's open-source library for building and scaling reinforcement learning training environments. It's the tool used to post-train Nemotron 3 models on real-world agentic tasks — generating correct tool calls, writing functional code, producing multi-part plans. Because it's open source, developers can reuse, extend, or build their own environments for domain-specific fine-tuning. It's available on GitHub alongside all Nemotron 3 training infrastructure.

**What does "context explosion" mean and why does it matter for agents?**
When AI agents work on multi-step tasks, every new action requires the model to resend the entire conversation history — including tool outputs, intermediate reasoning, and memory — at each turn. This can generate 15x more tokens than a simple chat interaction. Without a very large context window, agents either lose track of earlier instructions (goal drift) or become prohibitively expensive to run. Nemotron 3 Super's 1-million-token context window is specifically designed to hold the full workflow state in memory for the duration of a complex task without truncation.