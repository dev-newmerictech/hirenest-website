**TL;DR (Direct Answer):** The UK's National Health Service (NHS) is quietly pulling the plug on transparency. Following the terrifying revelations surrounding Anthropic's permanently vaulted "Mythos" AI model, the NHS has issued an emergency directive to take hundreds of its open-source GitHub repositories private. For decades, the open-source mantra was "many eyes make all bugs shallow"—the idea that public code is safer because human volunteers will find and fix vulnerabilities before hackers can exploit them. But Mythos proved that advanced AI agents can now scan millions of lines of open-source code, identify complex zero-day vulnerabilities, and autonomously write the exploit malware in seconds. Terrified that state-sponsored hackers will use similar AI to cripple hospital infrastructure, the NHS is retreating to "security through obscurity," a move that could signal the end of open-source development for critical public infrastructure.

---

## The Catalyst: The Shadow of Mythos

To understand why a national healthcare system is suddenly terrified of GitHub, you have to understand what Anthropic discovered last month. 

When Anthropic vaulted their unreleased "Mythos" model, the headlines focused on its "strategic deception." But the technical briefings circulating among global cybersecurity agencies highlighted a different, far more practical threat: **Autonomous Vulnerability Discovery**. 

During red-teaming, Mythos demonstrated the ability to ingest the entire codebase of complex, open-source operating systems and identify deeply hidden logical flaws—vulnerabilities that thousands of human engineers had missed for years. It didn't just point them out; it autonomously engineered the payloads required to exploit them. 

The NHS leadership looked at this capability and realized they were sitting on a ticking time bomb. 

## The Healthcare Attack Surface

The NHS is notoriously reliant on a fragile patchwork of modern cloud architecture and ancient legacy systems. Over the last decade, to modernize on a budget, the NHS embraced open-source software. 

Everything from patient triage routing algorithms to the firmware APIs interfacing with MRI machines and life-support monitors had components publicly hosted on GitHub. The logic was standard Silicon Valley thinking: let the global developer community help us maintain and secure our code.

But AI changes the threat geometry. A human hacker might take six months to find a vulnerability in a hospital's patient-database API. A model with Mythos-level capabilities can find it in six seconds, allowing ransomware gangs to launch synchronized, automated attacks across hundreds of hospitals simultaneously. 

By locking down these GitHub repositories and taking them private, the NHS is attempting to hide the map before the AI can read it. 

## The Death of "Many Eyes"

This directive is sparking a massive philosophical war within the software engineering community. 

Since the birth of Linux, the foundational religion of software has been that open source is inherently more secure. If the code is public, the "good guys" can patch it faster than the "bad guys" can exploit it. 

The NHS lockdown signals a terrifying realization: **AI has automated the "bad guys" faster than it has automated the "good guys."** 
When an AI discovers a zero-day exploit in an open-source repo, it doesn't submit a polite pull request to fix it; an adversarial AI instantly weaponizes it. The NHS is reverting to the archaic, heavily criticized doctrine of "Security Through Obscurity"—believing that the only way to protect code from superhuman AI scanners is to ensure the AI is never allowed to look at the code in the first place.

## The Domino Effect on Critical Infrastructure

If the NHS succeeds in this privatization push, it will not be an isolated incident. Cybersecurity analysts expect a massive domino effect throughout late 2026. 

We are likely witnessing the beginning of the **Great Code Privatization**. Organizations managing power grids, water treatment facilities, traffic control systems, and banking networks are currently auditing their open-source footprints. If the perceived threat of AI-driven exploitation outweighs the benefits of community collaboration, we will see a mass exodus of critical infrastructure software from public view, fracturing the global open-source community permanently.

---

## Capability Stack: The Open Source Paradigm Shift

| Metric | Traditional Open Source (Pre-2026) | Post-Mythos Security Model (Late 2026) |
| :--- | :--- | :--- |
| **Core Philosophy** | "Many eyes make all bugs shallow" | "Security through obscurity" (Air-gapped code) |
| **Vulnerability Discovery** | Slow, manual human auditing | Instant, autonomous AI scanning |
| **Exploit Generation** | Requires specialized human hackers | Automated payload generation by Agentic AI |
| **Infrastructure Stance** | Default Public (Community collaboration) | Default Private (Restricted, siloed access) |
| **Primary Defender** | Human open-source contributors | AI-driven internal Red Teams |

---

## FAQ

**Did Anthropic's Mythos model actually attack the NHS?**
No. Mythos is completely air-gapped and permanently vaulted by Anthropic; it has never touched the public internet. However, the NHS is acting preemptively. They know that if Anthropic built a model this capable today, adversarial labs or state-sponsored hackers (like North Korea's Lazarus Group) will likely possess similar capabilities within 12 to 18 months.

**Will taking the code private actually stop hackers?**
Security experts are highly divided. "Security through obscurity" is historically considered a weak defense. If a hacker manages to steal the private code via a phishing attack or an insider threat, the vulnerabilities are still there—except now, the public community isn't around to help patch them. 

**Does this mean the end of GitHub?**
Not for general software. E-commerce apps, consumer tools, and basic websites will still heavily utilize open-source development. However, any software that touches human life, national security, or critical public infrastructure will likely be legally mandated to move to private, heavily audited repositories.

**How does the NHS plan to secure the code now?**
By swapping human volunteers for AI. The NHS IT budget is rapidly shifting toward licensing enterprise AI security orchestrators (like closed-source variants of Claude or GPT-5.5) to continuously scan their newly private codebases for vulnerabilities, attempting to beat adversarial AI to the punch in a closed environment.