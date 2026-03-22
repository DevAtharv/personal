import type {
  FocusMetric,
  HeroNote,
  HeroTicker,
  InterestTag,
  NavItem,
  Project,
  SocialLink,
} from './types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#work' },
  { label: 'Progress', href: '#progress' },
  { label: 'Editing', href: '#editing' },
  { label: 'Random', href: '#random' },
  { label: 'Contact', href: '#contact' },
];

export const heroTicker: HeroTicker = {
  primary: 'ATHARV AGARWAL',
  secondary: 'DATA · ML · VIDEO · FINANCE',
};

export const heroNotes: HeroNote[] = [
  {
    id: 'identity-note',
    label: 'Entry // 04',
    text: 'Curiosity. Momentum. Entropy Control.',
    tone: 'coral',
  },
  {
    id: 'momentum-log',
    label: 'Momentum log',
    text: "I'm not an expert. I'm a learner building in public.",
    tone: 'sand',
  },
];

export const projects: Project[] = [
  {
    id: 'ml-stock-analysis',
    index: '01',
    category: 'Code',
    title: 'ML Stock Platform',
    subtitle: 'An end-to-end machine learning system for stock market analysis.',
    description:
      'An end-to-end machine learning system for analyzing and predicting stock market trends. Built with a strong emphasis on data pipelines, feature engineering, and model evaluation rather than surface-level predictions.',
    stack: ['Python', 'Pandas', 'NumPy', 'scikit-learn', 'Flask'],
    focus: 'Focus: data analysis, ML logic, backend architecture',
    imageLabel: 'Market signal map',
    tags: [
      { label: '#FINTECH', tone: 'magenta' },
      { label: '#ML', tone: 'gold' },
    ],
    codeTitle: 'signal_model.py',
    codeSnippet: [
      'def evaluate_signal_window(data):',
      '    pipeline = [',
      '        "clean -> engineer -> validate",',
      '        "measure drift before confidence",',
      '    ]',
      '    return select_best_model(pipeline)',
    ],
  },
  {
    id: 'getsync',
    index: '02',
    category: 'Fintech',
    status: 'Active Development',
    title: 'GetSync',
    subtitle: 'A personal finance assistant built for Indian users.',
    description:
      'Syncs Gmail to automatically parse financial emails, categorise transactions, and surface spending insights. Powered by LLaMA via Groq, deployed on Render with a Flask backend and Supabase handling auth and data.',
    stack: ['Python', 'Flask', 'Supabase', 'Gmail API', 'LLaMA via Groq', 'Render'],
    focus: 'Focus: LLM parsing, auth, finance logic, Indian market fit',
    imageLabel: 'Inbox-to-insights system map',
    tags: [
      { label: '#SYSTEMS', tone: 'cyan' },
      { label: '#INDIA', tone: 'ember' },
    ],
    note: 'Local-first finance products become useful when the parsing logic respects how people actually transact.',
    cta: {
      label: 'View Live',
      href: 'https://finance-assistant-lwtv.onrender.com/',
    },
  },
  {
    id: 'glint',
    index: '03',
    category: 'Music + AI',
    status: 'Live',
    title: 'Glint',
    subtitle: 'An ad-free music platform with AI playlist generation.',
    description:
      'A live music product centered on ad-free listening, playlist imports, and AI-assisted discovery. Users can import playlists from Spotify and Apple Music, generate playlists from prompts, and manage their library through a polished multi-page app experience.',
    stack: ['React', 'Vite', 'AI playlist generation', 'Spotify import', 'Apple Music import'],
    focus: 'Focus: product UX, music discovery, platform integration, AI-assisted personalization',
    imageLabel: 'Streaming dashboard and playlist engine',
    tags: [
      { label: '#MUSIC', tone: 'cyan' },
      { label: '#AI', tone: 'gold' },
    ],
    note: 'Inference from the live app: Glint combines streaming-style UX with AI playlist generation, library management, and playlist import flows.',
    cta: {
      label: 'Open App',
      href: 'https://glint-xzni.onrender.com/',
    },
  },
];

export const focusMetrics: FocusMetric[] = [
  {
    label: 'Data Analysis',
    value: 90,
    descriptor: 'Strong foundation',
    detail: 'Python, Pandas, NumPy, Matplotlib, Seaborn',
  },
  {
    label: 'Video Editing',
    value: 80,
    descriptor: 'Confident',
    detail: 'Cinematic cuts, pacing, mood-driven edits, CapCut Pro',
  },
  {
    label: 'Machine Learning',
    value: 60,
    descriptor: 'Actively learning',
    detail: 'Classical ML, model evaluation, feature engineering',
  },
  {
    label: 'Vibe Coding',
    value: 70,
    descriptor: 'Strong instinct',
    detail: 'Translating mood into UI and interactions with feel-first decisions',
  },
  {
    label: 'Model Deployment',
    value: 30,
    descriptor: 'Early exploration',
    detail: 'Turning models into usable systems with Flask and APIs',
  },
  {
    label: 'Finance',
    value: 50,
    descriptor: 'Foundation to building',
    detail: 'Financial markets and business fundamentals',
  },
];

export const socialLinks: SocialLink[] = [
  {
    label: 'Email',
    href: 'mailto:reach@atharvagarwal.in',
    note: 'Best for thoughtful conversations and serious project inquiries.',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/atharv-agarwal/',
    note: 'Professional context, updates, and work history.',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/atharvagarwal0/',
    note: 'Cinematic AI visuals, storytelling, and collaborations.',
  },
];

export const interests: InterestTag[] = [
  { label: 'Philosophy' },
  { label: 'Chess' },
  { label: 'Markets' },
  { label: 'Stoicism' },
  { label: 'AI Art' },
  { label: 'Productivity' },
  { label: 'Finance Theory' },
  { label: 'Sci-Fi' },
];
