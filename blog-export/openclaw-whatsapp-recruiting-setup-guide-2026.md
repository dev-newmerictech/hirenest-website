**TL;DR (Direct Answer):** OpenClaw connects to WhatsApp by running a local Gateway on your machine and linking your WhatsApp account via QR code — similar to WhatsApp Web. Once connected, you can send recruiting commands directly from WhatsApp: source candidates, draft outreach, schedule interviews, and manage follow-ups, all from your phone. Setup takes 15–20 minutes for technical users. For non-technical users, managed hosting services like SimpleClaw offer one-click deployment. This guide covers both paths. Hirenest handles the structured interview layer that OpenClaw cannot — consistent evaluation, bias-aware scoring, and defensible hiring decisions at scale.

---

## Why WhatsApp + OpenClaw Is the Combination Everyone Wants

OpenClaw's viral appeal comes from one specific insight: your phone's messaging app should be the control center for your AI assistant, not another browser tab.

WhatsApp has over 2 billion monthly active users. Most people check it before email, before Slack, before anything else. By connecting OpenClaw to WhatsApp, you get an AI recruiting assistant that is always reachable, always on, and requires zero context-switching.

The workflow it enables: you are in a taxi between client meetings, you open WhatsApp, you type "find me five senior React developers in London who have posted about fintech in the last month" — and by the time you reach your destination, OpenClaw has run the search, scored the candidates, and returned a shortlist to the same chat.

That is the value proposition.

---

## What You Need Before Starting

Before following this guide, make sure you have:

- A Mac or Linux machine (Windows users need WSL2)
- Node.js version 22 or higher installed (download from nodejs.org)
- An API key from at least one AI provider (Anthropic, OpenAI, or similar)
- A WhatsApp account — ideally a separate number dedicated to your OpenClaw agent
- Basic comfort with terminal commands

**On the separate number:** OpenClaw's official documentation strongly recommends running WhatsApp on a dedicated number rather than your personal number. This keeps your agent's activity separate from your personal messages and reduces the risk of accidental data mixing.

---

## Option A: Manual Setup (Full Control)

### Step 1: Install OpenClaw

Open your terminal and run the one-line installer:

```
curl -fsSL https://openclaw.ai/install.sh | bash
```

Or install via npm:

```
npm install -g openclaw@latest
```

Verify the installation worked:

```
openclaw --version
```

You should see a version number like `2026.2.17`.

### Step 2: Run the Onboarding Wizard

This wizard configures your AI provider, installs the Gateway as a persistent background service, and walks you through initial channel setup:

```
openclaw onboard --install-daemon
```

The `--install-daemon` flag installs OpenClaw as a system service that starts automatically every time your machine boots.

During onboarding, you will:
- Select your AI provider (Anthropic, OpenAI, or others)
- Enter your API key
- Choose your personality preset (Professional is recommended for recruiting use)

### Step 3: Connect WhatsApp

After onboarding completes, connect your WhatsApp channel:

```
openclaw channels add whatsapp
```

OpenClaw will display a QR code in the terminal. On your phone:

1. Open WhatsApp
2. Go to **Settings → Linked Devices → Link a Device**
3. Scan the QR code shown in your terminal

Once scanned, you will see "Linked after restart; web session ready" in the terminal. Your WhatsApp is now connected.

**Important security step:** Configure your allowlist to restrict which numbers can send commands to your agent:

```json
{
  "channels": {
    "whatsapp": {
      "dmPolicy": "pairing",
      "allowFrom": ["+91XXXXXXXXXX"]
    }
  }
}
```

Replace the number with your WhatsApp number in E.164 format (country code + number). This ensures only your number can control the agent.

### Step 4: Install Recruiting Skills

OpenClaw's recruiting capabilities come from ClawHub skills. Install the recruitment automation skill:

```
clawhub install openclaw-skills-recruitment-automation
```

For email outreach:

```
clawhub install cold-email
```

For Google Calendar and Gmail integration:

```
clawhub install gog
```

**Security warning:** Only install skills from verified publishers. Approximately 20% of ClawHub marketplace skills have been flagged as malicious. Check the publisher's GitHub history and star count before installing anything.

### Step 5: Test Your Setup

Open WhatsApp and send a message to yourself (your own number). Type:

```
Hello, are you there?
```

OpenClaw should respond within a few seconds. If it does, your setup is working.

Now test a recruiting command:

```
/recruit "Senior Product Manager with fintech experience in Pune"
```

OpenClaw will run the sourcing workflow and return candidates directly in WhatsApp.

---

## Option B: Managed Hosting (No Technical Setup)

If the manual setup feels too complex, managed services like SimpleClaw, Runclaw, and Clawdhost offer one-click OpenClaw deployment with WhatsApp pre-configured.

**SimpleClaw** (simpleclaw.shop) is the most widely adopted: sign in with Google, select your AI provider, and your OpenClaw instance is live in under a minute. No VPS, no SSH, no Node.js. The service provides persistent storage up to 250GB and auto-scaling infrastructure.

**Cost:** Managed services typically charge $10–$30/month on top of your AI model API costs.

**Trade-off:** You gain ease of setup but sacrifice some data control — your agent's context and activity passes through the managed service's infrastructure. For recruiting use with candidate data, review their privacy policy and data handling terms carefully.

---

## Recruiting Workflows You Can Run From WhatsApp

Once your setup is complete, here are the commands that deliver the most value for recruiting teams:

**Sourcing by criteria:**
```
Find me React developers in London who have posted about fintech in the last 30 days
```

**Automated daily monitoring (cron job):**
```
openclaw cron add --name "github-monitor" --schedule "0 9 * * *" --command "Check trending React repos for new contributors in London"
```

**Batch outreach drafting:**
```
Draft personalized LinkedIn connection requests for the 5 candidates you found yesterday. Match each message to their specific background.
```

**Interview scheduling:**
```
Check my calendar availability next week and propose three 45-minute interview slots to send to candidate Priya Sharma
```

**Morning pipeline briefing:**
Send "Morning briefing" to your WhatsApp and OpenClaw will return a summary of new applicants, pending follow-ups, and scheduled interviews for the day.

---

## Security Configuration for Recruiting Use

If you are using OpenClaw with candidate data, these security settings are mandatory:

**Bind Gateway to loopback only** (prevents exposure to public internet):
```json
{
  "gateway": {
    "bind": "loopback"
  }
}
```

**Enable human-in-the-loop for external actions** (nothing sent without your approval):
```json
{
  "guardrails": {
    "require_approval": ["send_email", "send_message", "execute_shell_command"]
  }
}
```

**Set daily API spending limits:**
```json
{
  "security": {
    "daily_api_limit": 10.00
  }
}
```

**Access via SSH tunnel only** — never expose port 18789 to the public internet.

---

## What to Expect: Realistic Performance

Based on community reports from recruiting users:

| Task | Realistic Speed | Quality |
|---|---|---|
| Source 5 candidates | 3–8 minutes | Good starting point; verify before outreach |
| Draft personalized outreach | 2–5 minutes | Strong, needs human review |
| Schedule interview slots | 1–3 minutes | Accurate if calendar access is configured |
| Log candidates to spreadsheet | Automatic | Reliable |
| LinkedIn outreach (sending) | Varies | Risk of ToS violation; use with caution |

---

## How Hirenest Picks Up Where OpenClaw Leaves Off

OpenClaw handles the top of funnel — finding candidates, drafting outreach, managing sequences. Once a candidate is in your pipeline and ready for evaluation, that is where Hirenest takes over.

Structured interview frameworks, role-calibrated question banks, consistent scoring rubrics, and the documentation that makes your hiring process auditable and defensible. The combination of autonomous sourcing and structured evaluation is where the best hiring teams are heading.

---

## FAQ

**Does OpenClaw work with my personal WhatsApp number?**
Yes, but the official documentation strongly recommends a dedicated number to keep agent activity separate from personal messages.

**What happens if the QR code expires before I scan it?**
Stop the process with Ctrl+C and run `npm start` again to generate a fresh code. QR codes expire after about one minute.

**Can multiple people on my team use the same OpenClaw agent?**
Yes, with proper configuration. Set up allowlists for each team member's number and use group session isolation.

**Will candidates know they are being contacted by an AI?**
Not unless your outreach discloses it. In most jurisdictions, undisclosed AI-generated outreach is legally permissible but ethically contested. Consider your employer brand when making this decision.

**How do I keep my WhatsApp session active if I close my laptop?**
Run OpenClaw on a VPS or dedicated Mac Mini rather than your laptop. This keeps the Gateway running 24/7 without depending on your personal machine being awake.