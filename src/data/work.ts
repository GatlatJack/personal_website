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
    org: 'enzygent.app · enzygent.org',
    year: 'May 2026 – Present',
    description: '',
    bullets: [
      'Co-developed Enzygent, a production enzyme-prediction platform serving live traffic, mapping start and target molecule pairs to candidate enzymes with graded evidence.',
      'Built the SMARTS-based reaction rule engine in Python and RDKit to identify enzyme-catalyzed transformations from molecular structure input.',
      'Designed and populated the enzyme data layer — EC classification tables, curated Swiss-Prot candidates, and a cached protein sequence store — integrating the UniProt REST API to resolve matches to named, orderable proteins.',
      'Defined the four-tier evidence labeling standard applied across the results interface, preventing overstated confidence in hypothesis-generating output.',
      'Developed submission and results views in Next.js, React, and TypeScript; co-built the Design Studio review module using Mol* 3D protein visualization.',
      'Deployed and maintain production infrastructure on a self-hosted Linux server using systemd and Cloudflare Tunnel, serving enzygent.app and enzygent.org.',
    ],
    tech: ['Next.js', 'TypeScript', 'FastAPI', 'Python', 'RDKit', 'RetroRules', 'Rhea', 'Mol*', 'SQLite', 'Cloudflare Tunnel', 'systemd'],
    links: [
      { label: 'Live', url: 'https://enzygent.app' },
      { label: 'Mirror (.org)', url: 'https://enzygent.org' },
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
