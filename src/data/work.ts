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
    role: 'Infrastructure & Deployment Lead · Research Institute of the McGill University Health Centre (RI-MUHC), Dr. Brian Chen Lab',
    org: 'enzygent.org',
    year: 'May 2026 – Present',
    description: '',
    bullets: [
      'Retrobiosynthesis and de novo enzyme design platform: a researcher submits a starting molecule and a target, and it returns enzymes that could catalyze the transformation — documented ones where they exist, generatively designed candidates where they do not.',
      'Deployed and operate the platform on a physical Ubuntu server inside a hospital lab — three systemd services with reboot-tested auto-start and zero inbound ports open.',
      'Served the public domain through a Cloudflare named tunnel that holds its address when the machine physically relocates and changes IP, routing past a hospital firewall that blocks inbound connections.',
      'Built the project\'s GitHub Actions CI/CD pipeline from scratch, running frontend builds and backend lint and tests on every push.',
      'Diagnosed and fixed production failures at root cause: SQLite lock contention under concurrent load, a reference-data load that had silently never run, and 500 responses stripped of CORS headers.',
      'Designed the FIND enzyme-discovery engine, including an atom-balance gate that rejects matches whose EC class contradicts the net atomic change.',
      'Built the de novo design track\'s user-facing surface and its biosecurity screening layer, with RFdiffusion and ProteinMPNN adapters behind feature flags.',
      'Found and fixed a charge-normalization bug that caused the enzyme matcher to silently return zero matches on real user input.',
      'Authored 249 commits across 91 merged pull requests — the largest contributor on a five-person research project.',
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
