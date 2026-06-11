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
      'Co-built Enzygent (enzygent.app) for Dr. Brian Chen\'s lab at RI-MUHC — a hypothesis-generating platform that takes a SMILES input and cross-references three layers of biochemical evidence: RetroRules (SMARTS, what\'s plausible), ExPASy enzyme catalog (what\'s known at the class level), and Rhea (6,500+ lab-validated reactions, what\'s directly documented) — to predict candidate enzyme classes and UniProt proteins; the broader vision mirrors AlphaFold: use multi-layer evidence + ML to de novo predict enzymes for novel reactions.',
      'Led server deployment and DevOps: configured Cloudflare Tunnel routing production traffic to a local server; curated the core data layer — enzyme classes, candidate proteins, benchmark pairs, and evidence-label documentation.',
      'Contributed across frontend (Next.js) and backend (FastAPI/Python); co-developing the Enzygent Design Studio — a de novo enzyme design module covering governance workflows, reviewer dashboards, 3D structure visualization (Mol*), and evidence-tracking.',
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
