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
    role: 'Full-Stack Developer & DevOps · Research Institute of the McGill University Health Centre (RI-MUHC), Dr. Brian Chen Lab',
    org: 'enzygent.app',
    year: 'May 2026 – Present',
    description: '',
    bullets: [
      'Co-built Enzygent (enzygent.app), a production platform for Dr. Brian Chen\'s lab at RI-MUHC that predicts candidate enzyme classes and UniProt proteins from a SMILES input, cross-referencing three layers of biochemical evidence — RetroRules, the ExPASy enzyme catalog, and 6,500+ lab-validated Rhea reactions.',
      'Owned deployment end-to-end: stood up production infrastructure with Cloudflare Tunnel routing live traffic to a self-hosted server, and built the core data layer — enzyme classes, candidate proteins, benchmark pairs, and evidence documentation.',
      'Built across the stack — Next.js frontend, FastAPI/Python backend — and co-developed the Design Studio module: governance workflows, reviewer dashboards, and interactive 3D protein visualization with Mol*.',
      'Extending toward de novo enzyme prediction for novel reactions — combining multi-layer evidence with ML, in the spirit of AlphaFold\'s approach to structure prediction.',
    ],
    tech: ['Next.js', 'FastAPI', 'Python', 'RDKit', 'RetroRules', 'SQLite', 'TailwindCSS', 'Mol*', 'Cloudflare Tunnel'],
    links: [{ label: 'Live', url: 'https://enzygent.app' }],
  },
  {
    id: 'rimuhc',
    title: 'Web Developer Intern — Genedig',
    role: 'Research Institute of the McGill University Health Centre (RI-MUHC) · Dr. Brian Chen Lab',
    org: 'genedig.org',
    year: 'Jun 2025 – Sep 2025',
    description: '',
    bullets: [
      'Resolved critical bugs in Genedig\'s PHP/JS codebase, boosting reliability and cutting downtime.',
      'Built a local XAMPP/MySQL setup to streamline onboarding and speed up troubleshooting.',
      'Presented a live demo of the platform to the research team.',
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
      'Finalist — Top 5 of 16 teams at the McGill Data Network (MDN) Hackathon.',
      'Built an end-to-end "Agentic Onboarding" platform using Next.js 16 and Vercel AI SDK (Gemini).',
      'Developed agentic workflows to automate access provisioning and personalised intro emails.',
      'Architected RAG systems to provide new hires with context-aware answers from internal docs.',
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
      'Built a pipeline to process ChIP-seq data and identify transcription factor binding sites.',
      'Gained experience in motif recognition, data interpretation, and protein–DNA interactions.',
      'Automated peak-calling and visualisation steps using Python and Bash.',
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
      'Developed a Python program to assist in diagnosing patients by comparing symptoms to a database of past cases.',
      'Implemented a K-Nearest Neighbours classifier for multi-class disease prediction.',
    ],
    tech: ['Python', 'scikit-learn', 'KNN', 'Pandas'],
    links: [{ label: 'GitHub', url: 'https://github.com/GatlatJack' }],
  },
]
