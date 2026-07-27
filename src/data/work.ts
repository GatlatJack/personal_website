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
      'A retrobiosynthesis and enzyme design platform. Given a starting molecule and a target, it searches curated reaction databases for an enzyme already known to catalyze that transformation, and where none exists, generates candidate protein sequences for it.',
      'Built the FIND engine: a chemistry matcher running Rhea and RetroRules in parallel with tiered precedence, behind a confidence gate that classifies every match as documented, lead, rule, or predict. An atom-balance and EC-consistency gate rejects matches whose enzyme class contradicts the net atomic change, and multi-step pathway search resolves single-intermediate routes with an identity guard. Gate thresholds tuned against a held-out benchmark harness rather than by hand.',
      'Built the Design Studio for de novo design: magic-link and JWT authentication, Postgres-backed governance with sign-off from a second researcher, RFdiffusion and ProteinMPNN adapters behind feature flags on GPU endpoints, ESMFold fold-back for predicted structures, synchronized dual 3D viewers for candidate comparison, and a local-alignment homology screener gating every generated sequence.',
      'Run the production server on lab hardware: three systemd units under an unprivileged account with the backend bound to loopback, fronted by a Cloudflare named tunnel that dials outward, since the hospital network blocks inbound connections and the address has to survive the machine relocating. Reboot-tested, with a runbook so the lab can operate it independently.',
      'Debugged production at the layer the failure actually lived in — WAL journaling to end lock contention between a long index warmup read and concurrent writes, provisioning the EC/Rhea catalog on a box where the gitignored one-time import had never run, RDKit charge normalization after neutral user input silently failed to match charged physiological forms, and CORS headers on 500 responses so the browser surfaced real exceptions instead of "failed to fetch".',
      'Designed the interface and froze it into design tokens and a shared component kit, then rebuilt the prediction screen, results page, history, and internal tools on it — answer-first results, a pathway diagram, collapsible evidence sections, and colour-coded tags that always carry a written label.',
      'Set up GitHub Actions CI running frontend builds and backend lint and tests on every push.',
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
      'Refactoring Genedig, the lab\'s published genome browser (BMC Bioinformatics, 2015) for co-navigating DNA, RNA, and protein sequences, under contract through March 2027.',
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
