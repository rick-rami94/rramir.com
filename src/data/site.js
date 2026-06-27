// Central content for the site. Edit here to update the page.

export const profile = {
  name: 'Rick Ramirez',
  role: 'Security Engineer & Cybersecurity Risk Consultant',
  tagline:
    'I assess and reduce cyber risk where it matters most — across IT, OT/ICS, and AI systems.',
  intro:
    "A U.S. Marine Corps veteran turned cybersecurity leader. Today I'm Lead Product Security Engineer for the Ottava surgical robotics platform at Johnson & Johnson — after rising through enterprise, OT/ICS, and global supply-chain security roles. I build practical, standards-aligned methods for measuring and reducing cyber risk, and increasingly the AI tooling that makes that work scale.",
  email: 'ricardo.n.ramirez@outlook.com',
  github: 'https://github.com/rick-rami94',
  githubHandle: 'rick-rami94',
  linkedin: 'https://www.linkedin.com/in/rickramir',
  linkedinHandle: 'rickramir',
  location: 'New York City Metropolitan Area',
};

export const credentials = [
  { label: 'Speaker · SECON 2026', sub: 'New Jersey', icon: 'mic' },
  { label: 'U.S. Marine Corps', sub: 'Veteran', icon: 'award' },
];

export const languages = ['English', 'Spanish', 'German', 'French'];

// Cloudflare Web Analytics — paste the beacon token from
// dash.cloudflare.com → Analytics & Logs → Web Analytics → rramir.com.
// Leave empty to disable the beacon entirely.
export const analytics = {
  cfBeaconToken: 'bb4b66d692d84a6eb8376bc024c50d1d',
};

export const focusAreas = [
  {
    title: 'OT / ICS Security',
    body: 'Site-level cyber risk assessment for industrial and operational environments — IT, OT, physical security, third-party, GRC, and resilience.',
  },
  {
    title: 'Risk Methodology',
    body: 'Inherent risk + control maturity → residual risk, mapped to NIST SP 800-30, ISA/IEC 62443, and NIST CSF 2.0.',
  },
  {
    title: 'AI Security & Agents',
    body: 'Governed, security-first multi-agent systems with human-in-the-loop approval, audit trails, and fail-closed controls.',
  },
];

export const experience = [
  {
    org: 'Johnson & Johnson',
    meta: 'New Jersey · 4+ years',
    roles: [
      {
        role: 'Lead Product Security Engineer — MedTech R&D',
        period: 'Aug 2025 – Present',
        points: [
          'Product security for the Ottava surgical robotics platform — embedding secure-by-design into next-generation surgical systems alongside R&D engineering.',
          'Medical-device security across the lifecycle: FDA premarket cybersecurity guidance, SBOM, and threat modeling.',
        ],
      },
      {
        role: 'Senior Security Analyst — Global Pharmaceuticals Supply Chain Technology',
        period: 'Aug 2023 – Aug 2025',
        points: [
          'Security and risk across global pharmaceutical supply-chain technology; built cross-functional risk programs bridging OT and enterprise security.',
        ],
      },
      {
        role: 'Senior Security Analyst — NA/LATAM Supply Chain Logistics, OT/ICS',
        period: 'Aug 2022 – Sep 2023',
        points: [
          'Site-level OT/ICS cyber risk assessment across NA/LATAM logistics — the work that shaped my site cybersecurity risk methodology.',
        ],
      },
      {
        role: 'IT Security Analyst — Customer Experience',
        period: 'Nov 2021 – Aug 2022',
        points: [],
      },
    ],
  },
  {
    org: 'U.S. Marine Corps',
    meta: 'Veteran',
    roles: [
      {
        role: 'Communications Technician',
        period: 'May 2013 – May 2021',
        points: [
          'Eight years in telecommunications and secure communications — the foundation of my security career.',
        ],
      },
    ],
  },
];

export const standards = [
  'NIST SP 800-30',
  'ISA/IEC 62443 (-3-2 / -3-3 / -2-1)',
  'NIST CSF 2.0',
  'Threat Modeling',
  'OT / ICS Security',
  'Product Security',
  'SBOM',
  'FDA Premarket Cybersecurity',
  'Multi-Agent AI Systems',
  'Python',
];

export const certifications = [
  {
    group: 'Industrial / OT-ICS Security',
    items: [
      { name: 'GICSP', issuer: 'GIAC', note: '2025–2029' },
      { name: 'ICS Cybersecurity Analysis & Evaluation (401v)', issuer: 'CISA', note: '' },
      { name: 'SEC556: IoT Penetration Testing', issuer: 'SANS', note: '2026' },
    ],
  },
  {
    group: 'Security Foundations',
    items: [
      { name: 'CISSP', issuer: 'ISC²', note: 'In progress' },
      { name: 'Security+ (ce)', issuer: 'CompTIA', note: '' },
    ],
  },
  {
    group: 'AI & Agentic Systems',
    items: [
      { name: 'Multi-AI Agent Systems with crewAI', issuer: 'DeepLearning.AI', note: '2026' },
      { name: 'AI Security Essentials for Business Leaders', issuer: 'SANS', note: '' },
      { name: 'Model Context Protocol', issuer: 'Anthropic', note: '' },
    ],
  },
];

export const education = [
  {
    school: 'Western Governors University',
    detail: 'B.S., IT Management',
    period: '2023 – 2026',
  },
  {
    school: 'Harvard University',
    detail: 'Executive Education — Cybersecurity & Risk Management',
    period: '2020',
  },
  {
    school: 'MIT Sloan Executive Education',
    detail: 'Implementing Agentic AI: Building Your Organizational Playbook',
    period: '2026',
  },
];

export const speaking = [
  {
    title: 'Cleartext at the Edge',
    subtitle: 'A Neptune R900 Case Study in RF Telemetry Exposure',
    venue: 'SECON 2026 · New Jersey',
    blurb:
      'Original, passive (receive-only) RF research: the Neptune R900 AMR water meter — millions deployed across North American utilities — broadcasts real-time usage, meter ID, and status in cleartext over the 902–928 MHz band, with no encryption or authentication, readable with under $100 of SDR hardware. The talk reframes RF as part of the attack surface — telemetry that never reaches a firewall, EDR, or SIEM, yet can enable occupancy inference and pattern-of-life surveillance. Findings were reported through a CISA-coordinated disclosure.',
    tags: ['RF / SDR', 'AMR / AMI', 'Cyber-Physical Systems', 'Responsible Disclosure'],
    slides: '/cleartext-at-the-edge-secon-2026.pdf',
    whitepaper: '/passive-rf-intelligence-915mhz-whitepaper.pdf',
    link: null,
    linkLabel: null,
  },
];

export const projects = [
  {
    name: 'Ohm AI',
    tag: 'Flagship · Consulting Tool',
    blurb:
      'A local-first, multi-agent OT/ICS cybersecurity assessment platform. Ingests site evidence — network diagrams, asset inventories, firewall/ACL configs, vuln scans, and policies — then evaluates against IEC 62443 and NIST CSF 2.0 to produce scores, a report, and a prioritized remediation roadmap. Strictly local: no client data leaves the machine.',
    stack: ['Python', 'Local LLMs', 'Multi-Agent', 'IEC 62443', 'NIST CSF 2.0'],
    link: null,
    linkLabel: 'In development',
  },
  {
    name: 'Secure Enterprise AI Reference Architecture',
    tag: 'Open Source · Reference Architecture',
    blurb:
      'A vendor-neutral, principal-level reference architecture for a secure enterprise AI platform: a mandatory AI gateway with prompt-injection and sensitive-data guardrails, access-controlled RAG that filters retrieval by data classification, a multi-agent orchestration plane where every agent gets a short-lived on-behalf-of identity, and brokered tool/MCP execution with graded human-in-the-loop approval. Ships a STRIDE + MITRE ATLAS threat model, a controls-traceability matrix across eight frameworks, and hands-on policy-as-code and SIEM-detection artifacts.',
    stack: ['AI/LLM Security', 'Secure RAG', 'Multi-Agent', 'OWASP LLM Top 10', 'NIST AI RMF'],
    link: 'https://github.com/rick-rami94/secure-enterprise-ai-reference-architecture',
    linkLabel: 'View on GitHub',
  },
  {
    name: 'multi-agent-orchestrator',
    tag: 'Open Source',
    blurb:
      'A LangGraph supervisor → specialist → reviewer system with persistent memory, security-first human-in-the-loop approval (approve / reject / edit / take-over), and a tamper-evident SHA-256 audit hash chain. MIT-licensed with green CI across Python 3.10–3.12.',
    stack: ['Python', 'LangGraph', 'HITL', 'Audit Chain'],
    link: 'https://github.com/rick-rami94/multi-agent-orchestrator',
    linkLabel: 'View on GitHub',
  },
  {
    name: 'failure-forensics',
    tag: 'Open Source',
    blurb:
      'Observability and root-cause analysis for multi-step AI pipelines. Traces every step, then uses an LLM-as-judge backward walk to localize the failing step and turn confirmed failures into eval cases. Security is the differentiator: the trace store is treated as a sensitive sink, with redaction-before-persist and a STRIDE-lite threat model.',
    stack: ['Python', 'Streamlit', 'Claude', 'OpenTelemetry'],
    link: 'https://github.com/rick-rami94/failure-forensics',
    linkLabel: 'View on GitHub',
  },
  {
    name: 'offsec-orchestrator',
    tag: 'Open Source',
    blurb:
      'A governed agent for authorized security testing: a dependency-free MCP stdio client, an engagement scope / rules-of-engagement gate (fail-closed), default-deny active tools, and a propose → approve → execute loop backed by an audit hash chain. 88% test coverage.',
    stack: ['Python', 'MCP', 'Governance', 'Fail-Closed'],
    link: 'https://github.com/rick-rami94/offsec-orchestrator',
    linkLabel: 'View on GitHub',
  },
];

export const services = [
  {
    title: 'Site Cyber Risk Assessment',
    body: 'A structured, evidence-based assessment of a facility’s cyber risk posture across IT, OT, physical, third-party, GRC, and resilience — delivering scored findings and a residual-risk view leadership can act on.',
  },
  {
    title: 'OT / ICS Program Review',
    body: 'Evaluation of industrial control environments against ISA/IEC 62443 and NIST CSF 2.0, with control-maturity scoring and a gap analysis tied to real operational impact.',
  },
  {
    title: 'Remediation Roadmap',
    body: 'A prioritized, cost-aware roadmap that sequences mitigations by residual-risk reduction — so the highest-impact work happens first.',
  },
];
