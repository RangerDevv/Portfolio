export type Metric = {
  label: string;
  value: string;
};

export type ProjectLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type FeaturedProject = {
  slug: string;
  name: string;
  category: string;
  year: string;
  status: string;
  summary: string;
  tagline: string;
  stack: string[];
  metrics: Metric[];
  links: ProjectLink[];
  challenge: string;
  solution: string;
  highlights: string[];
  learnings: string[];
};

export type ArchiveProject = {
  name: string;
  description: string;
  href: string;
};

export type ArchiveSection = {
  title: string;
  items: ArchiveProject[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  tags: string[];
  projectSlug: string;
  overview: string;
  problem: string;
  solution: string;
  stack: string[];
  outcomes: string[];
  lessons: string[];
};

export const profile = {
  name: 'RangerDevv',
  title: 'Full-Stack Developer · Open Source Builder',
  tagline: 'A portfolio space for the projects, experiments, and product thinking I keep shipping.',
  shortBio:
    "I'm a developer who likes turning ideas into polished, useful interfaces. Lately that means web apps, design-minded tooling, and learning Rust while still happily building with Svelte, Astro, and TypeScript.",
  about: [
    "Hi! The name's Ranger... RangerDevv specifically. The extra v has been around long enough that it's basically part of the brand now.",
    'I enjoy building websites and tools that feel friendly, fast, and intentional. I care a lot about interface clarity, developer experience, and shipping work that people can actually use.',
    "Outside of coding, I'm usually mountain biking, hanging out with my cat, or chasing the next thing I want to learn.",
  ],
  location: 'Earth',
  pronouns: 'he/him',
  email: 'meerabdul2008@gmail.com',
  github: 'https://github.com/RangerDevv',
  instagram: 'https://instagram.com/m33r.4bdul',
  website: 'https://rangerdevv.github.io/',
  focus: 'Full-stack web apps, open source, and product-focused experiments.',
  education: 'CS @ Purdue University',
  spokenLanguages: ['English', 'Hindi', 'Urdu'],
  currentlyLearning: ['Rust', 'systems thinking', 'better motion design for the web'],
  interests: [
    {
      title: 'Mountain biking',
      description: 'Trail time is the reset button when I have been staring at the same bug for too long.',
    },
    {
      title: 'Cats',
      description: 'My cat is the unofficial code reviewer, mostly by sitting on the keyboard.',
    },
    {
      title: 'Always learning',
      description: 'I like jumping into new stacks and figuring out where good product decisions meet good code.',
    },
  ],
};

export const portfolioStats: Metric[] = [
  { label: 'Featured builds', value: '6' },
  { label: 'Project archive', value: '30+' },
  { label: 'Focus areas', value: 'Web · Tools · AI' },
  { label: 'Status', value: 'Open to collaborate' },
];

export const quickFacts: Metric[] = [
  { label: 'Age', value: '18' },
  { label: 'Education', value: 'CS @ Purdue University' },
  { label: 'Languages', value: 'English, Hindi, Urdu' },
  { label: 'Current focus', value: 'Open source + full-stack web dev' },
];

export const skillGroups = [
  {
    title: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Python', 'Rust', 'HTML', 'CSS'],
  },
  {
    title: 'Frameworks',
    items: ['Svelte', 'Astro', 'Tailwind CSS', 'Node.js'],
  },
  {
    title: 'Tools & platforms',
    items: ['Git', 'GitHub', 'Vercel', 'Firebase', 'Appwrite', 'Supabase', 'Electron', 'Tauri', 'PyTorch'],
  },
];

export const featuredProjects: FeaturedProject[] = [
  {
    slug: 'rewrit',
    name: 'ReWrit',
    category: 'Knowledge platform',
    year: '2026',
    status: 'Shipped',
    tagline: 'A markdown-first space for tutorials, docs, and long-form answers.',
    summary:
      'ReWrit rethinks developer knowledge-sharing with a modern editor, community feedback, and a calmer alternative to traditional Q&A platforms.',
    stack: ['Svelte', 'Markdown', 'Tailwind CSS', 'Vercel'],
    metrics: [
      { label: 'Stars', value: '5' },
      { label: 'Forks', value: '1' },
      { label: 'Mode', value: 'Open source' },
    ],
    links: [
      { label: 'Live site', href: 'https://rewrit.vercel.app', external: true },
      { label: 'GitHub repo', href: 'https://github.com/RangerDevv/ReWrit', external: true },
      { label: 'Case study', href: '/case-studies/rewrit' },
    ],
    challenge:
      'Create a developer publishing experience that feels more welcoming than traditional Q&A sites while still supporting structured, useful content.',
    solution:
      'I focused on a markdown-first editor, cleaner information hierarchy, and community feedback features so writing tutorials or documentation would feel natural instead of forced.',
    highlights: [
      'Designed around tutorials and documentation rather than only short-form answers.',
      'Built a cleaner authoring workflow with markdown at the center.',
      'Balanced product clarity with a more approachable visual style.',
    ],
    learnings: [
      'Editor UX matters as much as the content format.',
      'Typography and spacing can make technical writing feel dramatically more readable.',
      'Svelte is especially nice for interactive, content-heavy interfaces.',
    ],
  },
  {
    slug: 'draftonn',
    name: 'Draftonn',
    category: 'Productivity suite',
    year: '2026',
    status: 'Concept + build',
    tagline: 'A FOSS alternative to Google Docs and Notion for notes, tasks, and drawing boards.',
    summary:
      'Draftonn explores an all-in-one workspace for students and makers who want notes, planning, and freeform thinking in one focused product.',
    stack: ['Svelte', 'TypeScript', 'Product design'],
    metrics: [
      { label: 'Stars', value: '4' },
      { label: 'Forks', value: '2' },
      { label: 'Audience', value: 'Students' },
    ],
    links: [
      { label: 'GitHub repo', href: 'https://github.com/RangerDevv/Draftonn', external: true },
    ],
    challenge:
      'The challenge was combining multiple productivity surfaces without making the product feel bloated or confusing.',
    solution:
      'I treated each surface like part of one cohesive workspace, keeping the experience modular but visually consistent so users could switch contexts without friction.',
    highlights: [
      'Unified notes, to-do lists, and drawing boards in one concept.',
      'Shaped around simple organization instead of enterprise complexity.',
      'Strong example of product thinking beyond just code implementation.',
    ],
    learnings: [
      'Scope control is critical when a product touches many workflows.',
      'Feature-rich products still need strong defaults and restraint.',
    ],
  },
  {
    slug: 'aic-dismissal',
    name: 'AIC-Dismissal',
    category: 'Operations app',
    year: '2025',
    status: 'Shipped',
    tagline: 'A school dismissal management app with real-time tracking and authentication.',
    summary:
      'AIC-Dismissal is a practical operations tool designed to make a real-world school workflow more organized, visible, and reliable.',
    stack: ['Svelte', 'Realtime UX', 'Authentication'],
    metrics: [
      { label: 'Focus', value: 'Realtime' },
      { label: 'Users', value: 'School staff' },
      { label: 'Type', value: 'Web app' },
    ],
    links: [
      { label: 'Live site', href: 'https://aicdismissal.vercel.app', external: true },
      { label: 'GitHub repo', href: 'https://github.com/RangerDevv/AIC-Dismissal', external: true },
    ],
    challenge:
      'The workflow needed to be clear and dependable because it supports a time-sensitive real-world process.',
    solution:
      'I centered the app around visibility, role-based access, and straightforward interface states so staff could move quickly without second-guessing what was happening.',
    highlights: [
      'Built for a concrete operational need instead of a generic demo use case.',
      'Prioritized clarity and response time for day-to-day use.',
      'Used auth and realtime thinking to support trust in the workflow.',
    ],
    learnings: [
      'Operational software lives or dies on clarity.',
      'Even small UI ambiguities can create friction when a workflow is time-sensitive.',
    ],
  },
  {
    slug: 'pitchfork',
    name: 'Pitchfork',
    category: 'Discovery platform',
    year: '2025',
    status: 'Exploration',
    tagline: 'A FOSS alternative to Product Hunt for discovering and sharing dev tools.',
    summary:
      'Pitchfork explores what a community-driven launch space could look like when it is designed for builders, side projects, and open tools.',
    stack: ['Svelte', 'Community product design', 'Web app'],
    metrics: [
      { label: 'Stars', value: '1' },
      { label: 'Forks', value: '2' },
      { label: 'Theme', value: 'Maker tools' },
    ],
    links: [
      { label: 'Live site', href: 'https://pitchfork.vercel.app', external: true },
      { label: 'GitHub repo', href: 'https://github.com/RangerDevv/Pitchfork', external: true },
    ],
    challenge:
      'The main challenge was creating a concept that feels community-led instead of like a clone with different branding.',
    solution:
      'I focused the direction around discoverability, maker energy, and a more open, FOSS-friendly framing for tool launches.',
    highlights: [
      'Built around independent builders and dev tools.',
      'Strong exercise in product differentiation and positioning.',
      'Kept the experience lightweight and browseable.',
    ],
    learnings: [
      'Differentiation is more than features; it is also audience, tone, and curation.',
    ],
  },
  {
    slug: 'spectrumsense',
    name: 'SpectrumSense',
    category: 'AI / healthcare-adjacent',
    year: '2025',
    status: 'Research build',
    tagline: 'Early autism detection through machine learning and behavioral analysis.',
    summary:
      'SpectrumSense is an ML-focused project that explores how accessible screening support tools can be designed responsibly and with clarity.',
    stack: ['Python', 'Scikit-learn', 'Pandas', 'PyTorch'],
    metrics: [
      { label: 'Domain', value: 'Healthcare' },
      { label: 'Type', value: 'ML tool' },
      { label: 'Priority', value: 'Ethical AI' },
    ],
    links: [
      { label: 'GitHub repo', href: 'https://github.com/RangerDevv/SpectrumSense', external: true },
      { label: 'Case study', href: '/case-studies/spectrumsense' },
    ],
    challenge:
      'The challenge was handling a sensitive problem space where technical curiosity cannot come at the expense of human care or honesty about model limitations.',
    solution:
      'I treated the project as a supportive indicator tool, not a diagnostic replacement, and framed the work around transparent communication, careful scope, and behavioral datasets.',
    highlights: [
      'Applied ML to a meaningful real-world screening problem.',
      'Kept ethical framing central instead of treating it like a disclaimer.',
      'Combined data work with product communication choices.',
    ],
    learnings: [
      'In sensitive domains, the framing around a model matters as much as the model itself.',
      'Trust is built through transparency, not overclaiming.',
    ],
  },
  {
    slug: 'greenbeen',
    name: 'GreenBeen',
    category: 'Brand site',
    year: '2025',
    status: 'Shipped',
    tagline: 'A resource site for eco-friendly living with a warm brand-first presentation.',
    summary:
      'GreenBeen is a design-led website focused on making sustainability content feel approachable rather than overwhelming.',
    stack: ['Astro', 'Content design', 'Brand UI'],
    metrics: [
      { label: 'Stack', value: 'Astro' },
      { label: 'Mode', value: 'Content site' },
      { label: 'Tone', value: 'Brand-first' },
    ],
    links: [
      { label: 'Live site', href: 'https://green-been.vercel.app', external: true },
      { label: 'GitHub repo', href: 'https://github.com/RangerDevv/GreenBeen', external: true },
    ],
    challenge:
      'The goal was to make an information-heavy topic feel inviting and easy to browse.',
    solution:
      'I leaned on a softer visual system, approachable language, and clear page structure to make the content feel less intimidating.',
    highlights: [
      'Good example of blending content strategy with front-end execution.',
      'Uses a calmer visual language than a typical portfolio or app UI.',
      'Shows range beyond app-centric work.',
    ],
    learnings: [
      'Brand tone is part of usability.',
      'Content-heavy experiences need just as much interface design care as app dashboards.',
    ],
  },
];

export const archiveSections: ArchiveSection[] = [
  {
    title: 'Web apps',
    items: [
      { name: 'RemmbrMe', description: 'Student-focused planner and to-do workspace.', href: 'https://github.com/RangerDevv/RemmbrMe' },
      { name: 'DopeAI', description: 'A suite of AI tools for speeding up workflow.', href: 'https://github.com/RangerDevv/DopeAI' },
      { name: 'CAAWebsite', description: 'Community website project built for a Discord server.', href: 'https://github.com/RangerDevv/CAAWebsite' },
      { name: 'fnyaplan', description: 'Interactive personal finance learning platform.', href: 'https://github.com/RangerDevv/fnyaplan' },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'PocketPense', description: 'Budget tracking app with charts and savings tools.', href: 'https://github.com/RangerDevv/PocketPense' },
      { name: 'FileConverter', description: 'Rust-powered file conversion tooling.', href: 'https://github.com/RangerDevv/FileConverter' },
      { name: 'debugPT', description: 'Static analysis experiment for catching bugs earlier.', href: 'https://github.com/RangerDevv/debugPT' },
      { name: 'Traffic-simulator', description: 'Realtime traffic simulation concept.', href: 'https://github.com/RangerDevv/Traffic-simulator' },
    ],
  },
  {
    title: 'AI / ML',
    items: [
      { name: 'BlindManSoftware', description: 'Navigation software concept for a smart blind cane.', href: 'https://github.com/RangerDevv/BlindManSoftware' },
      { name: 'VectorDB', description: 'Vector database experiments for semantic search.', href: 'https://github.com/RangerDevv/VectorDB' },
      { name: 'Jarvis_AI', description: 'Personal AI assistant inspired by Iron Man.', href: 'https://github.com/RangerDevv/Jarvis_AI' },
    ],
  },
  {
    title: 'Games & experiments',
    items: [
      { name: 'KaboomGame', description: 'Game built with Kaboom.js.', href: 'https://github.com/RangerDevv/KaboomGame' },
      { name: 'Neia-Godot', description: 'Neia rebuilt in the Godot engine.', href: 'https://github.com/RangerDevv/Neia-Godot' },
      { name: 'Numpydle', description: 'A numbers-first spin on Wordle.', href: 'https://github.com/RangerDevv/Numpydle' },
    ],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: 'rewrit',
    title: 'ReWrit',
    subtitle: 'Building a StackOverflow alternative with Markdown at its core',
    date: 'Jan 2026',
    tags: ['Web App', 'Svelte', 'Open Source', 'Discontinued'],
    projectSlug: 'rewrit',
    overview:
      'A case study about making developer knowledge-sharing feel more approachable, readable, and creator-friendly.',
    problem:
      "Traditional Q&A spaces can feel intimidating for beginners and rigid for long-form explanations. I wanted a format that made tutorials, documentation, and collaborative knowledge-sharing feel more natural.",
    solution:
      'ReWrit leaned into markdown-first authoring, threaded feedback, and a cleaner Svelte-powered UI that better supports long-form technical content.',
    stack: ['Svelte / SvelteKit', 'Tailwind CSS', 'Markdown (MDsveX)', 'Vercel'],
    outcomes: ['5 stars', '1 fork', 'A stronger understanding of editor UX and documentation workflows'],
    lessons: [
      'Good typography and spacing are foundational for technical content.',
      'Real-time editing experiences need restraint to stay pleasant.',
      'A product can be successful as a learning vehicle even if it does not continue long-term.',
    ],
  },
  {
    slug: 'spectrumsense',
    title: 'SpectrumSense',
    subtitle: 'Early autism detection through machine learning and behavioral analysis',
    date: 'Nov 2025',
    tags: ['AI / ML', 'Python', 'Healthcare'],
    projectSlug: 'spectrumsense',
    overview:
      'A case study about combining machine learning curiosity with careful product framing in a sensitive domain.',
    problem:
      'Early ASD screening is important, but many pathways are slow, subjective, or difficult to access. That makes supportive screening tools worth exploring carefully.',
    solution:
      'SpectrumSense uses behavioral data and ML models to surface early indicators while explicitly positioning the system as a supportive aid rather than a diagnosis tool.',
    stack: ['Python', 'Scikit-learn', 'Pandas', 'PyTorch'],
    outcomes: ['A clearer perspective on ethical AI design', 'A stronger appreciation for model transparency', 'A portfolio piece grounded in responsibility'],
    lessons: [
      'Healthcare-adjacent tools require extra care in language and expectations.',
      'Model limitations should be explicit, not hidden in tiny disclaimers.',
      'Technical ambition should never outrun user wellbeing.',
    ],
  },
];

export const getProjectBySlug = (slug: string) =>
  featuredProjects.find((project) => project.slug === slug);

export const getCaseStudyBySlug = (slug: string) =>
  caseStudies.find((study) => study.slug === slug);
