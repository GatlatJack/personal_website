export interface Project {
  id: string
  title: string
  role: string
  org: string
  year: string
  description: string
  bullets: string[]
  tech: string[]
  links: { label: string; url: string }[]
}

export const jobs: Project[] = [
  {
    id: 'enzygent',
    title: 'Enzygent',
    role: 'Infrastructure, Deployment & Interface Design · Research Institute of the McGill University Health Centre (RI-MUHC), Dr. Brian Chen Lab',
    org: 'enzygent.org',
    year: 'May 2026 – Present',
    description: '',
    bullets: [
      'A retrobiosynthesis and enzyme design platform: given a starting molecule and a target, it searches curated reaction databases for an enzyme already known to catalyze that transformation, and generates candidate protein sequences where none exists.',
      'Built the FIND engine — a chemistry matcher querying Rhea and RetroRules in parallel, with an atom-balance and EC-consistency gate that rejects matches contradicting the net atomic change, a confidence tier on every result, and multi-step search for single-intermediate routes.',
      'Co-built the Design Studio for de novo design: RFdiffusion and ProteinMPNN adapters on GPU endpoints, ESMFold fold-back, synchronized dual 3D viewers for candidate comparison, and a homology screener gating every generated sequence behind authenticated, sign-off-gated access.',
      'Run the platform on lab hardware — three systemd units with the backend bound to loopback, reached through an outbound-only Cloudflare tunnel because the hospital network blocks inbound connections. Reboot-tested, with GitHub Actions CI and a runbook so the lab can operate it independently.',
      'Designed the interface and froze it into design tokens and a shared component kit, then rebuilt the prediction screen, results, history, and internal tools on it — answer-first results, a pathway diagram, and collapsible evidence sections.',
    ],
    tech: ['Ubuntu', 'systemd', 'Cloudflare Tunnel', 'GitHub Actions', 'FastAPI', 'Python', 'Next.js', 'React', 'TypeScript', 'RDKit', 'SQLite', 'PostgreSQL', 'Mol*', 'RFdiffusion', 'ProteinMPNN'],
    links: [
      { label: 'Live', url: 'https://enzygent.org' },
    ],
  },
  {
    id: 'rimuhc',
    title: 'Web Developer Intern — Genedig',
    role: 'Research Institute of the McGill University Health Centre (RI-MUHC) · Dr. Brian Chen Lab',
    org: 'genedig.org',
    year: 'Jun 2025 – Sep 2025 · Jul 2026 – Mar 2027',
    description: '',
    bullets: [
      'Refactoring Genedig, the lab\'s published genome browser (BMC Bioinformatics, 2015) for co-navigating DNA, RNA, and protein sequences.',
      'Diagnosed and fixed critical bugs across Genedig\'s PHP/JavaScript codebase, improving platform stability and reducing downtime for the research team.',
      'Built a local XAMPP/MySQL development environment that streamlined onboarding and let the team reproduce and troubleshoot issues faster.',
      'Demoed the working platform to the research group, walking through fixes and gathering feedback to prioritize next steps.',
    ],
    tech: ['PHP', 'JavaScript', 'Angular', 'MySQL', 'XAMPP'],
    links: [{ label: 'Site', url: 'https://genedig.org/home' }],
  },
]

export const projects: Project[] = [
  {
    id: 'springboard',
    title: 'Springboard.io',
    role: 'Co-creator · MDN Web Docs Hackathon',
    org: 'springboard-io.vercel.app',
    year: 'Mar 2026 – Apr 2026',
    description: '',
    bullets: [
      'Co-built an agentic employee-onboarding platform end-to-end in a single afternoon sprint — finalist, top 5 of 16 teams at the McGill Data Network Hackathon.',
      'Shipped a working product under extreme time pressure using Next.js 16 and the Vercel AI SDK (Gemini), prioritizing a demoable end-to-end flow over feature breadth.',
      'Designed agentic workflows that automated access provisioning and generated personalized intro emails for new hires.',
      'Architected a RAG pipeline so new hires could get context-aware answers from internal docs instead of hunting through wikis.',
    ],
    tech: ['Next.js', 'Vercel AI SDK', 'Gemini', 'RAG', 'TypeScript'],
    links: [
      { label: 'GitHub', url: 'https://github.com/SamLev-2004/Springboard.io' },
      { label: 'Live', url: 'https://springboard-io.vercel.app' },
    ],
  },
  {
    id: 'chipseq',
    title: 'DNA Sequence Binding Analysis',
    role: 'Bioinformatics · McGill University',
    org: 'github.com/GatlatJack',
    year: '2024 – 2025',
    description: '',
    bullets: [
      'Built a Python/Bash pipeline to process ChIP-seq data and call peaks, identifying transcription factor binding sites across the genome.',
      'Identified transcription-factor binding motifs from ChIP-seq peaks and characterized protein–DNA interaction patterns.',
      'Automated peak-calling and visualization end-to-end, cutting manual analysis steps out of the workflow.',
    ],
    tech: ['Python', 'Bash', 'Bioinformatics', 'ChIP-seq'],
    links: [{ label: 'GitHub', url: 'https://github.com/GatlatJack' }],
  },
  {
    id: 'diagnostic',
    title: 'Medical Diagnostic Support System',
    role: 'ML Developer · McGill University',
    org: 'github.com/GatlatJack',
    year: '2024 – 2025',
    description: '',
    bullets: [
      'Built a Python diagnostic tool that compares patient symptoms against a case database to surface candidate diagnoses.',
      'Implemented a K-Nearest Neighbours classifier for multi-class disease prediction, validating accuracy across held-out test cases.',
    ],
    tech: ['Python', 'scikit-learn', 'KNN', 'Pandas'],
    links: [{ label: 'GitHub', url: 'https://github.com/GatlatJack' }],
  },
]
