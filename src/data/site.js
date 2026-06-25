// Central content for the site. Edit here to update the page.

export const profile = {
  name: 'Rick Ramirez',
  role: 'Security Engineer & Cybersecurity Risk Consultant',
  tagline:
    'I assess and reduce cyber risk where it matters most — across IT, OT/ICS, and AI systems.',
  intro:
    'Lead Product Security Engineer working on R&D surgical robotics, with a background in information security risk management (ISRM) and site-level risk assessment across the supply chain. I build practical, standards-aligned methods for measuring and reducing cyber risk — and increasingly, the AI tooling that makes that work scale.',
  email: 'ricardo.n.ramirez@outlook.com',
  github: 'https://github.com/rick-rami94',
  githubHandle: 'rick-rami94',
  linkedin: 'https://www.linkedin.com/in/rickramir',
  linkedinHandle: 'rickramir',
  location: 'United States',
};

export const credentials = [
  { label: 'Speaker · SECON 2026', sub: 'New Jersey' },
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
    role: 'Lead Product Security Engineer — R&D Surgical Robotics',
    org: 'Johnson & Johnson · Ottava Surgical Robotics',
    period: 'Current',
    points: [
      'Product security for the Ottava R&D surgical robotics platform, embedding security across the device development lifecycle.',
      'Bridges regulated medical-device engineering with modern threat modeling and secure-by-design practice.',
    ],
  },
  {
    role: 'Information Security Risk Management (ISRM)',
    org: 'Johnson & Johnson · Innovative Medicine Supply Chain',
    period: 'Prior',
    points: [
      'Developed a site-level cybersecurity risk assessment framework spanning six domains: IT, OT, physical security, third-party, GRC, and resilience.',
      'Quantified residual risk by combining inherent risk with control maturity, referencing NIST SP 800-30, ISA/IEC 62443, and NIST CSF.',
      'Now repurposing that methodology as an independent consulting practice and assessment tool.',
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
  'Multi-Agent AI Systems',
  'Python',
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
    tag: 'Open Source · Releasing soon',
    blurb:
      'A governed agent for authorized security testing: a dependency-free MCP stdio client, an engagement scope / rules-of-engagement gate (fail-closed), default-deny active tools, and a propose → approve → execute loop backed by an audit hash chain. 88% test coverage.',
    stack: ['Python', 'MCP', 'Governance', 'Fail-Closed'],
    link: null,
    linkLabel: 'Open-sourcing soon',
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
