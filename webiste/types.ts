export interface NavItem {
  label: string;
  href: string;
}

export interface HeroTicker {
  primary: string;
  secondary: string;
}

export interface HeroNote {
  id: string;
  label: string;
  text: string;
  tone: 'coral' | 'sand';
}

export interface ProjectTag {
  label: string;
  tone: 'magenta' | 'gold' | 'cyan' | 'ember';
}

export interface Project {
  id: string;
  index: string;
  category: string;
  status?: string;
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  focus: string;
  imageLabel: string;
  note?: string;
  codeTitle?: string;
  codeSnippet?: string[];
  tags: ProjectTag[];
  cta?: {
    label: string;
    href: string;
  };
}

export interface FocusMetric {
  label: string;
  value: number;
  descriptor: string;
  detail: string;
}

export interface SocialLink {
  label: string;
  href: string;
  note: string;
}

export interface InterestTag {
  label: string;
}
