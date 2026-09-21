---
title: "I Built a Water-Utility ICS and Took Control of It Without a Password"
description: "I stood up a synthetic water-treatment control network — four PLCs, an HMI, a historian, a honeypot — then assessed it the governed way and attacked it the adversary way. Every controller accepted unauthenticated Modbus writes; I changed a live process register and flipped an actuator bit on all four, with zero credentials. Full report, findings mapped to CVSS, MITRE ATT&CK for ICS, and IEC 62443."
date: 2026-09-21
tags: ["OT Security", "ICS", "Critical Infrastructure", "Red Team", "Modbus"]
draft: false
---

Everything below happened inside a fully synthetic, offline lab I built and own. The client, the plant, and the findings are fictional. The point wasn't to break a toy — it was to build the muscle memory for how industrial control systems actually fail, and to run a single engagement end to end: model a real-looking water utility, assess it under governance, then prove the exposure the way an attacker would.

The short version: **every programmable logic controller in the treatment process accepted commands from anyone who could reach it, with no authentication at all.** I didn't just detect that. I safely demonstrated it — changing a live process register and toggling an actuator command bit on all four field controllers, then restoring the original values.

> **[→ Download the full assessment report (PDF)](/ot-ics-water-utility-assessment-report.pdf)** — a firm-grade deliverable: executive summary, methodology, six findings with CVSS vectors and MITRE ATT&CK for ICS mapping, an attack kill chain, and a phased remediation roadmap. The accessible version is below.

**Engagement:** Governed assessment + red-team of a synthetic ICS I built
**Environment:** OT network `172.30.0.0/24` — Purdue Levels 1–2, eight Docker containers
**Date:** September 2026 · **Authorization:** Self-authorized, my own isolated lab
**Overall risk rating:** Critical

---

## Why OT is different

In IT security the loss condition is usually data — confidentiality, a breach, a leak. In operational technology, the loss condition is physical: a pump that shouldn't be running, a dosing setpoint that's wrong, a valve that opens. The systems that run water, power, and manufacturing were designed decades ago for reliability and isolation, not for a world where an attacker might already be on the network. Many of the protocols they speak have no concept of a password.

I wanted a realistic sandbox to work in that truth — not a slide about it. So I built one.

## What I built

A Dockerized water utility that behaves like the real thing:

- **Four field controllers** speaking Modbus/TCP — raw-water intake, filtration, chemical dosing, and well control — each presenting as a distinct vendor device with its own register and coil maps.
- **A multi-protocol process device / honeypot** answering S7comm, SNMP, BACnet, EtherNet/IP, FTP, and HTTP, posing as a Siemens S7-200.
- **An operator HMI and a process historian** (a synthetic OSIsoft PI archive) on the supervisory layer.
- **A synthetic IT/OT boundary firewall** enforcing the corporate-to-OT edge.

The controllers are deliberately insecure the way real field PLCs are: Modbus on port 502, no authentication, no transport security. That's not a bug in my lab — it's an accurate model of a large installed base.

## Assessing it the governed way

Before attacking anything, I ran a governed assessment: a scope-gated, hash-chain-audited scan that refuses out-of-scope targets fail-closed and records every authorized action in a tamper-evident log *before* any tool touches a device. That discipline — provable scope, provable audit trail — is what separates a professional engagement from someone running tools on a network. It's the same governance layer I'm building into my consulting tooling.

The assessment output was then fed through a deterministic NIST engine that maps the raw findings to CSF 2.0 and SP 800-53 controls — offline, no LLM, no data leaving the machine — to produce the report.

## The findings

| ID | Finding | Severity |
|---|---|---|
| OT-001 | Unauthenticated Modbus read/write on all four process PLCs | **Critical** |
| OT-002 | Corporate-to-OT firewall boundary is effectively open | **High** |
| OT-003 | No east-west segmentation within the OT network | **High** |
| OT-004 | Operator HMI and historian served over cleartext HTTP | **Medium** |
| OT-005 | Broad unauthenticated ICS protocol exposure | **Medium** |
| OT-006 | EtherNet/IP CIP identity disclosure | **Low** |

## Proof: control without a credential

The headline finding isn't that Modbus is exposed — scanners find that all day. It's that the exposure means *control*. For each controller I read a holding register, wrote a sentinel value, read it back to confirm the write took effect, then flipped a coil — an actuator command bit like a pump run or valve open — and restored everything to its original state.

![Attacker console showing WRITE CONFIRMED on all four PLCs, register 10 changed 172 to 1337 and a coil toggled and restored](/ot-lab/fig_modbus_attack.png)

*The attacker console: unauthenticated writes confirmed on all four field controllers. In a production plant these same primitives open and close valves, start and stop pumps, and falsify the values operators trust.*

No credentials. No user interaction. Off-the-shelf tooling. The only barrier is reaching the device on the network — and the rest of the findings show how little stands in the way of that.

## Cleartext everything

The supervisory systems don't fare better. The operator HMI and the process historian are served over unauthenticated, cleartext HTTP. I pulled both without credentials; the historian cheerfully identifies its own software version and enumerates its interfaces — a gift for anyone choosing an exploit.

![Captured process historian page served over cleartext HTTP, identifying itself as OSIsoft PI Data Archive 2018 SP3](/ot-lab/fig_historian.png)

*The process historian, retrieved over cleartext HTTP with no login. Version and interface disclosure like this is reconnaissance handed to the attacker for free.*

## The boundary that wasn't

The most instructive finding is the one a scanner won't hand you: the IT/OT firewall. On paper it looks defensive — it explicitly denies telnet and Modbus inbound to the OT network. But a few rules later it contains a broad *permit all IP from the corporate subnet to the entire OT range*. The net effect is a boundary that blocks two ports and permits everything else. One compromised corporate workstation — the single most common real-world entry point — becomes a launch pad into the plant. Reading configuration with intent, not just running tools, is where the real risk lived.

## What actually fixes this

None of the remediation is exotic; it's discipline:

- **Put a controls-aware boundary in front of the PLCs.** Deny Modbus by default, allow it only from named engineering hosts.
- **Segment Level 1** into zones and conduits so one foothold can't reach every controller.
- **Wrap the protocols that can't authenticate** behind an authenticating, logging proxy or a monitored jump host.
- **Deploy OT-aware monitoring** — an unauthenticated write to a PLC is a screaming signal, and today nothing would see it.

The full report has each finding written up with its CVSS vector, CWE, MITRE ATT&CK for ICS techniques, IEC 62443 mapping, and a phased 0–30 / 30–90 / 90–180 day roadmap.

## Why do this at all

Because reading about unauthenticated Modbus and *doing* it are different kinds of knowledge. Building the target, governing the assessment, and proving the impact — that's the loop that turns a concept into a capability, and a capability into something I can help an organization actually fix.

> **[→ Read the full assessment report (PDF)](/ot-ics-water-utility-assessment-report.pdf)**

*Synthetic lab, fictional client, offline throughout. No real utility, system, or data was involved.*
