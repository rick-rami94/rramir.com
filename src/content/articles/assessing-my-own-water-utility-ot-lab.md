---
title: "I Built a Water Treatment Plant. My AI Agents Took Control Without a Password."
description: "I built a fully synthetic water-treatment control network and let an agentic security system assess it end to end. The agents took control of all four PLCs with no credentials. The interesting part isn't the exploitation — it's the governance around the autonomy, and what it says about securing agents that can reach physical processes."
date: 2026-09-21
tags: ["OT Security", "AI Security", "ICS", "Agentic AI", "Critical Infrastructure"]
draft: false
---

![Architecture and threat model: governed agentic assessment, IT/OT firewall trust boundary, synthetic OT environment, and the unauthenticated-Modbus attack path](/ot-lab/ot-threat-model.png)

I built a water treatment plant in my lab.

Then my AI agents took control of all four PLCs without a password.

No stolen credentials. No zero-day. No sophisticated exploit chain.

Just network access.

To be clear, this wasn't a real utility. I built a fully synthetic, offline environment with four PLCs controlling raw water intake, filtration, chemical dosing, and well operations, plus an HMI, a historian, and an IT/OT firewall.

Then I let an agentic security system assess it like a real engagement.

> **[→ Download the full technical report (PDF)](/ot-ics-water-utility-assessment-report.pdf)** — findings mapped to CVSS, MITRE ATT&CK for ICS, and IEC 62443, with the attack path and a phased remediation roadmap. The write-up is below.

And the part I'm most proud of isn't the exploitation.

It's the governance around the autonomy.

Before an agent can touch a device, the system validates scope and fails closed if the target isn't authorized. Actions land in a tamper-evident audit trail. Findings are scored and mapped to security frameworks. The tooling drafts the remediation roadmap.

Everything runs locally. Assessment evidence never leaves the machine.

The goal isn't to automate the security engineer.

It's to automate the repeatable work around them while keeping human judgment where it matters.

Then came the adversary side.

The agents discovered that every PLC accepted commands from anything that could reach it.

They read live process values, wrote new ones, verified the changes, and manipulated actuator command bits across all four controllers. In a real process, those commands could represent opening a valve or starting a pump.

Then they put everything back the way it was.

No authentication required.

![Attacker console showing WRITE CONFIRMED on all four PLCs; register 10 changed 172 to 1337 and a coil toggled and restored](/ot-lab/fig_modbus_attack.png)

The supervisory side had the same shape of problem. The HMI and the historian answered over cleartext HTTP, no login, the historian even naming its own software version.

![Captured process historian served over cleartext HTTP, identifying itself as OSIsoft PI Data Archive 2018 SP3](/ot-lab/fig_historian.png)

Here's the full picture, the way I'd hand it to a client.

| ID | Finding | Severity |
|---|---|---|
| OT-001 | Unauthenticated Modbus read/write on all four process PLCs | Critical |
| OT-002 | Corporate-to-OT firewall boundary is effectively open | High |
| OT-003 | No east-west segmentation within the OT network | High |
| OT-004 | Operator HMI and historian served over cleartext HTTP | Medium |
| OT-005 | Broad unauthenticated ICS protocol exposure | Medium |
| OT-006 | EtherNet/IP CIP identity disclosure | Low |

But Modbus isn't really the interesting part.

We already know it wasn't designed with modern authentication in mind. That isn't new.

The more interesting question is what happens when we give autonomous systems the ability to interact with environments where devices inherently trust the network.

That changes how I think about both OT security and agentic security.

The answer isn't just securing the model. It's controlling what the agent can reach, what tools it can use, what actions it's authorized to take, and where a human needs to remain in the loop.

Least privilege. Defined trust boundaries. Scope enforcement. Segmentation. Auditability. Human approval for high-impact actions.

The fundamentals still apply. The scale and speed are what's changing.

Legacy protocols don't have to mean legacy security architecture.

And autonomous agents don't have to mean uncontrolled autonomy.

> **[→ Read the full technical report (PDF)](/ot-ics-water-utility-assessment-report.pdf)**

Everything here was performed against my own synthetic environment. Fictional organization, completely offline, and no real utility, infrastructure, or operational data involved.
