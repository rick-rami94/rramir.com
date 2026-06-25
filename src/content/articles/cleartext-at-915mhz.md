---
title: "Cleartext at 915 MHz: What 200 Million Devices Are Broadcasting in the Open"
description: "You don't always have to break in — many systems just broadcast. With a $60 radio and open-source tools, a passive listener can pull plaintext telemetry from utility meters, vehicles, and sensors across the 902–928 MHz band, touching 10 of 16 critical-infrastructure sectors. A field-grounded look at a systemic cleartext problem."
date: 2026-02-27
tags: ["RF Security", "Critical Infrastructure", "Privacy", "IoT Security"]
draft: false
---

Most security work assumes an attacker has to get *in* — past a firewall, through a credential, onto a network. But a large class of cyber-physical systems doesn't wait to be breached. They broadcast. And in one slice of unlicensed spectrum in North America, an estimated **200 million or more devices transmit their telemetry in cleartext** — no encryption, no authentication — to anyone within radio range.

I spent time characterizing exactly what's in that spectrum. This is the accessible version of the findings. The full methodology, device taxonomy, and citations are in the white paper:

> **[→ Read the full white paper (PDF)](/passive-rf-intelligence-915mhz-whitepaper.pdf)** — *Passive RF Intelligence at 915 MHz: A Systematic Taxonomy of Cleartext Telemetry Across CISA Critical Infrastructure Sectors* (TLP:CLEAR). I also presented this research as **[Cleartext at the Edge](/#speaking)** at SECON 2026.

## The band nobody watches

The 902–928 MHz ISM band is license-free spectrum authorized under FCC Part 15. It's shared by utility meters, industrial radios, building automation, agricultural sensors, vehicle systems, and dozens of proprietary IoT protocols. Two facts about Part 15 matter here: devices must *accept all interference* — including interception — and they carry **no regulatory expectation of privacy** for their emissions. No FCC rule, grid standard, or utility regulation requires those over-the-air transmissions to be encrypted.

Security programs instrument endpoints, networks, cloud, and identity. RF traffic, by contrast, may never appear in a firewall log, an EDR timeline, or a packet capture. The boundary we defend is usually the network. But the real boundary is wherever the signal can be heard.

## Cleartext by design

Most automatic meter reading (AMR) in North America runs on the ERT protocol family, designed by Itron in the 1980s. Its payloads are transmitted *in the clear*, with nothing more than a 16-bit checksum for integrity — no encryption, no authentication. The messages carry endpoint serial numbers, commodity type, cumulative consumption, and tamper flags. The higher-resolution interval format packs **47 consumption readings at 5-minute granularity — roughly four hours of usage history — into a single over-the-air packet.**

Crucially, many meters operate in "bubble-up" mode: they transmit continuously, every few seconds, with no interrogation required, so that a drive-by truck can read them. That same design lets a *stationary* listener with no infrastructure of their own receive complete meter data simply by being in range — typically 100–300 meters in a city, and 500+ meters in the open.

## The hardware costs about $60

None of this requires exotic equipment. The workhorse is an RTL-SDR dongle — a software-defined radio that costs roughly $60 — paired with open-source decoders like `rtl_433`, which already understands hundreds of ISM-band protocols. Everything is receive-only. For context on the trend: researchers noted that the gear needed to eavesdrop on tire-pressure sensors fell from about $1,500 to under $50. The capability didn't just exist; it got cheap.

## What a single receiver sees

From one fixed location, passive reception yields intelligence relevant to **at least 10 of the 16 CISA critical-infrastructure sectors.** In plaintext, that includes:

- **Electric, gas, and water meters** — persistent meter IDs, cumulative and interval consumption, leak, backflow, and tamper status, and even solar generation on some endpoints.
- **Vehicles** — tire-pressure sensors broadcasting immutable identifiers, which enable presence and movement tracking.
- **Building automation, agricultural, and industrial sensors** — many transmitting status and telemetry with no protection at all.

Even when a protocol *can't* be decoded, the mere presence of a signal — its modulation signature and timing — reveals device type and site characteristics. Presence is itself an intelligence indicator.

## The data is more sensitive than it looks

Consumption telemetry sounds mundane until you treat it as what it is: **pattern-of-life data.** The academic literature is unambiguous. One study of over 5,000 households across 18 months found that models trained on smart-meter data predict home occupancy with **greater than 91% accuracy** — present *and* future. At fine resolution, load signatures expose individual appliance use; one well-known 2012 result even identified which film a household was watching from the power profile alone.

Put together, passively collected meter data supports occupancy detection, daily-routine reconstruction, and "vacant and away" inference for homes — and process profiling for industrial sites — all without transmitting a single packet or interacting with the target. Persistent identifiers turn one-time observation into long-term tracking.

## Why it persists

The most important point isn't any single device — it's that this is **systemic.** The Neptune R900 water meter I used as a primary case study broadcasts usage, meter ID, leak intervals, and backflow status in cleartext, but it operates under the same architectural assumptions as the broader protocol generation. Newer endpoints inherit the same weakness.

And because **no mandate requires encryption** in this band, and because metering infrastructure has an operational lifetime exceeding a decade, these exposures are likely to persist for the deployed lifetime of the hardware absent deliberate intervention. This is legacy design meeting long device lifecycles, public RF propagation, and procurement decisions that lock exposure in for years.

## What security teams should take away

- **Treat RF telemetry as part of the attack surface.** Include it in threat models and architecture reviews — it's an external-facing interface even when it never touches your network.
- **Design controls:** encrypt sensitive payloads, authenticate messages, add replay protection, avoid static identifiers, and reduce unnecessary broadcast fields.
- **Program and procurement controls:** add RF security requirements to procurement language, and conduct privacy impact assessments for AMR/AMI deployments before they're locked in for a decade.

## A note on method

This research was conducted **passively — receive-only — from publicly accessible locations.** No transmissions were made, no infrastructure was touched, and no accounts were accessed. Passive reception of unencrypted ISM-band emissions is generally lawful under U.S. communications law. The work was submitted to CERT/CC under coordinated disclosure (VU#318962) before any public discussion. The intent is not to target anyone's meter; it's to make the case that the signal layer belongs in our security and privacy conversations.

> Want the full taxonomy, protocol tables, and references? **[Read the white paper (PDF) →](/passive-rf-intelligence-915mhz-whitepaper.pdf)**
