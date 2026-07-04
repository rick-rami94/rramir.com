// Central content for the site. Edit here to update the page.

export const profile = {
  name: 'Rick Ramirez',
  role: 'Where cyber-physical security meets AI',
  tagline:
    "For a decade I've secured systems where failure is physical — surgical robots, industrial control, the RF spectrum — and now I secure the AI being wired into them.",
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
  { label: 'Spoke at NJ SECON 2026', sub: 'Jun 2026', icon: 'mic' },
  { label: 'U.S. Marine Corps', sub: 'Veteran', icon: 'award' },
];

export const languages = ['English', 'Spanish'];

// Topics for entity/knowsAbout signals (classic SEO + AI answer engines).
export const expertise = [
  'AI security',
  'Securing AI systems',
  'AI governance, risk & compliance',
  'OWASP Top 10 for LLM Applications',
  'NIST AI Risk Management Framework',
  'MITRE ATLAS',
  'Prompt injection defense',
  'Secure multi-agent AI systems',
  'OT / ICS security',
  'Cybersecurity risk assessment',
  'ISA/IEC 62443',
  'NIST CSF 2.0',
  'Product security',
];

// Answer-shaped Q&A — powers a visible FAQ + FAQPage schema so AI answer
// engines (ChatGPT, Perplexity, Google AI Overviews) can quote clean facts.
export const faqs = [
  {
    q: 'Who is Rick Ramirez?',
    a: 'Rick Ramirez is a cybersecurity professional based in the New York City metropolitan area, working at the intersection of cyber-physical and AI security. He is a Lead Product Security Engineer at Johnson & Johnson and advises on securing OT/ICS, medical-device, and AI systems.',
  },
  {
    q: 'Where is Rick Ramirez based?',
    a: 'The New York City metropolitan area. He works with clients across the New York / New Jersey metro region and remotely.',
  },
  {
    q: "What is Rick Ramirez's experience in AI security?",
    a: 'He holds CompTIA SecAI+, authored a vendor-neutral secure enterprise AI reference architecture, builds governed multi-agent AI systems with human-in-the-loop controls, and publishes a SecAI+ study video series. His focus is security architecture for AI — mapped to the OWASP LLM Top 10, NIST AI RMF, and MITRE ATLAS.',
  },
  {
    q: 'Is Rick Ramirez available for advisory or consulting engagements?',
    a: 'Yes — for select advisory and consulting engagements in cyber-physical and AI security, such as cyber risk assessment and OT/ICS program review. Email is the fastest way to reach him.',
  },
];

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
      { name: 'Security+ (ce)', issuer: 'CompTIA', note: '2020' },
      { name: 'SecAI+', issuer: 'CompTIA', note: '2026' },
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
    // Recording placeholder — set `link` to the talk video URL when available and
    // a "Watch the talk ↗" button appears automatically.
    link: null,
    linkLabel: 'Watch the talk',
  },
];

export const securingAI = {
  title: 'Securing AI — A SecAI+ Study Series',
  tagline:
    'A study video series teaching the CompTIA SecAI+ (CY0-001) body of knowledge — security architecture for AI, mapped to the OWASP LLM Top 10, NIST AI RMF, and MITRE ATLAS.',
  playlistId: 'PLIjcpVV71lAc',
  playlistUrl: 'https://www.youtube.com/playlist?list=PLIjcpVV71lAc',
  // Self-hosted poster (first video's thumbnail) so the facade loads NO external requests until play.
  posterImage: '/securing-ai-poster.jpg',
  // Set to a channel URL once the handle is claimed; falls back to the playlist link.
  channelUrl: 'https://www.youtube.com/@RickCyberSec',
  channelHandle: '@RickCyberSec',
  // The four CompTIA SecAI+ domains by exam weight — the series' backbone.
  domains: [
    { name: 'Foundations of AI & ML', weight: '17%' },
    { name: 'Securing AI Systems', weight: '40%' },
    { name: 'AI-Assisted Security', weight: '24%' },
    { name: 'AI Governance, Risk & Compliance', weight: '19%' },
  ],
};

export const projects = [
  {
    name: 'Ohm AI',
    tag: 'Flagship · Platform',
    blurb:
      'A local-first, multi-agent OT/ICS cybersecurity assessment platform. Ingests site evidence — network diagrams, asset inventories, firewall/ACL configs, vuln scans, and policies — then evaluates against IEC 62443 and NIST CSF 2.0 to produce scores, a report, and a prioritized remediation roadmap. Strictly local: no client data leaves the machine.',
    stack: ['Python', 'Local LLMs', 'Multi-Agent', 'IEC 62443', 'NIST CSF 2.0'],
    link: null,
    linkLabel: 'Early access',
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
