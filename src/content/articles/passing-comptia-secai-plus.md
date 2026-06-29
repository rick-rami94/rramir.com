---
title: "Passing CompTIA SecAI+: Notes from the First Cohort"
description: "CompTIA's AI-security certification launched in February 2026. A practitioner's honest read on what SecAI+ actually tests, where it bites, what it's good for, what it isn't — and why a named credential matters as AI security becomes its own discipline."
date: 2026-06-29
tags: ["AI Security", "Certifications", "AI Governance", "Career"]
draft: false
---

CompTIA's **SecAI+** is brand new — exam **CY0-001**, launched **February 17, 2026** — so passing it this spring puts you in the first cohort to hold it. I sat for it because the work I do has been drifting toward AI security for a while: product security for safety-critical systems, agentic AI, and a recent vendor-neutral reference architecture for securing an enterprise AI platform. I didn't take the exam to learn the field. I took it to see whether the field had a *shared shape* yet — a common vocabulary, an agreed scope, the things a maturing discipline gets when it stops being a collection of blog posts. And here's the through-line I'd give anyone weighing it: **SecAI+ is, at its core, a security-architecture exam for AI systems.** It's far more a test of whether you can *design* protection around models — and reason fluently in the key risks and the frameworks that name them — than whether you can operate any particular tool. Here's the longer read.

## What SecAI+ actually is

The facts, because most write-ups bury them: a maximum of **60 questions** (multiple-choice and performance-based), **60 minutes**, passing score **600 on a 100–900 scale**. CompTIA recommends roughly 3–4 years in IT and 2+ years of hands-on cybersecurity going in, with a Security+, CySA+, or PenTest+ background or equivalent. It is positioned squarely for security people, not ML researchers: the stated goal is to **secure, govern, and responsibly integrate AI into security operations**.

It's a V1, and that cuts both ways. The content is current in a way few certifications are — it references the threats people are actually arguing about right now. But a first edition is also still settling; the question bank and the conventional wisdom around it will both sharpen over the next year.

## Four domains, and where they bite

The blueprint is four domains, and the weighting tells you exactly where CompTIA thinks the work is:

- **Basic AI concepts related to cybersecurity (17%).** Machine-learning fundamentals, model types, the AI threat landscape. It's the lightest domain, but it's load-bearing — you cannot defend a system whose failure modes you don't understand. Don't skip it just because it's small.
- **Securing AI systems (40%).** This is the exam. Adversarial machine learning, direct and **indirect prompt injection**, data and model poisoning, model theft and extraction, and the AI supply chain. It rewards people who have actually had to design controls around a model rather than just read about them — and it maps cleanly onto the frameworks doing the real work here: the **OWASP Top 10 for LLM Applications**, the **NIST AI Risk Management Framework**, and **MITRE ATLAS**. If you've threat-modeled an AI system end to end, this domain feels like home.
- **AI-assisted security (24%).** Turning the technology around: using AI for detection, triage, and automation in the SOC. The honest tension lives here — the same agentic autonomy that scales your defense is itself an attack surface and a new class of non-human identity to govern. The domain is better when it treats AI as a tool *and* a liability, not a magic wand.
- **AI governance, risk, and compliance (19%).** The **NIST AI RMF**, **ISO/IEC 42001**, emerging regulation, model documentation and accountability. This is the domain most security practitioners undervalue and most enterprises most need — because the hard part of deploying AI safely is rarely the model; it's the governance wrapped around it.

The performance-based questions are the part worth respecting. They push past "can you recognize the term" toward "can you apply it," which is the right instinct for a security exam.

## The honest take

**What it's good at:** it forces breadth across a field that's moving too fast for any one team to have covered all of it, and it gives that breadth a common language. Putting 40% of the weight on *securing AI systems* is the correct emphasis — this is a security certification that stays a security certification, rather than drifting into "prompt engineering for beginners." And the GRC domain existing at all is a small act of maturity.

**What it isn't:** a 60-minute, 60-question exam is a map, not the territory. It won't make you an AI red-teamer, and it won't make you an ML engineer — and it isn't trying to. What it validates is **architectural judgment and framework fluency**: can you reason about how to secure an AI system, identify the risks that apply, and place the right controls and standards against them. That's a deliberately different thing from hands-on tool operation or model internals. Being a V1 means some of the framing will age. Treat the credential as evidence that you can architect and govern security around AI — not as a substitute for building and breaking real systems.

**Who should take it:** security professionals being pulled into AI work — the people who already own risk, identity, detection, or product security and now have models showing up inside their scope. If that's you, the exam will feel less like new material and more like someone finally drawing the boundaries of a thing you've been doing piecemeal.

## Why a named credential matters

The most useful thing SecAI+ did for me wasn't to teach me adversarial ML or AI governance — it was to confirm that those topics now belong to a *single, named discipline* with a defined scope. That sounds like a small thing. It isn't. A field matures when it gets a shared curriculum, a common vocabulary, and a credential that lets a hiring manager or a regulator point at something concrete. AI security is crossing that line right now, and it's a good time to be early to it.

A certification is a small signal; the work is the proof. But the signal still matters — because the real shortage in this space isn't tools or frameworks. It's people who can hold both sides at once: security tradecraft on one hand, and an honest understanding of how AI systems actually fail on the other. SecAI+ is one way of saying *I'm working on that seam.* The rest is what you build there.
