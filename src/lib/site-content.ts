import type { LucideIcon } from "lucide-react";
import { Code, Code2, Cpu, Globe, Terminal, Workflow, Zap } from "lucide-react";

export const contactEmail = "atharvagarwal.in@gmail.com";
export const linkedInUrl = "https://www.linkedin.com/in/atharv-agarwal/";
export const githubUrl = "https://github.com/DevAtharv";

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "Work", path: "/work" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export const heroStats = [
  {
    label: "Real Business Projects",
    detail: "D2C operations, brand launch systems, and customer workflows",
  },
  {
    label: "Vibe-Coded Systems",
    detail: "Useful websites, workflows, and internal tools shaped with AI",
  },
  {
    label: "Business Tools Used",
    detail: "Claude, ChatGPT, Gemini, Cursor, Vercel, Supabase, Codex, Antigravity",
  },
  {
    label: "Ongoing Experiments",
    detail: "AI, finance workflows, email systems, and product prototypes",
  },
];

export const featuredWork = [
  {
    id: "pulps-leaves",
    title: "Pulps & Leaves",
    status: "Live Business Project",
    url: "https://pulpsandleaves.com/",
    description:
      "Contributed to the digital infrastructure of a growing D2C brand by building its website, automating customer communication workflows, and improving order management processes.",
    highlights: [
      "Website development",
      "WhatsApp automation",
      "Customer communication workflows",
      "Order tracking systems",
      "Google Sheets integrations",
      "Business process optimization",
    ],
    learned:
      "Working directly with a business taught me how operational inefficiencies impact growth and how software can solve practical day-to-day problems.",
    visualTitle: "Live D2C storefront",
    visualDetail: "Malda mango ordering, cart, delivery, coupon, and payment flow",
  },
  {
    id: "vadi-masala",
    title: "Vadi Masala",
    status: "In Progress",
    url: null,
    description:
      "Helping build the digital presence and launch infrastructure for an emerging spice brand.",
    highlights: [
      "Website design and development",
      "Branding implementation",
      "E-commerce setup",
      "Digital launch preparation",
      "Customer experience design",
    ],
    learned:
      "The focus is creating scalable systems that support growth from day one, before the public launch goes live.",
    visualTitle: "Pre-launch system",
    visualDetail: "Brand, products, commerce setup, and launch readiness",
  },
];

export const projects = [
  {
    title: "Glint",
    status: "Product Project",
    description:
      "A project focused on simplifying playlist and music-related workflows through a streamlined user experience.",
    tech: ["React", "Supabase", "APIs"],
  },
  {
    title: "Finance Assistant",
    status: "Experiment",
    description:
      "An experimental project exploring how AI and automation can assist users in organizing and understanding financial information.",
    tech: ["Finance", "Automation", "AI"],
  },
  {
    title: "GetSync",
    status: "Experimental Prototype",
    description:
      "An early-stage concept exploring email and transaction management workflows. Presented as an experiment rather than a production-ready platform.",
    tech: ["Email workflows", "Transactions", "Prototype"],
  },
];

export const skillGroups: { title: string; icon: LucideIcon; items: string[] }[] = [
  {
    title: "Vibe Coding",
    icon: Code2,
    items: ["Claude", "ChatGPT", "Gemini", "Cursor", "Codex", "Antigravity", "Prompt-driven development", "Shipping usable versions"],
  },
  {
    title: "AI & Automation Thinking",
    icon: Cpu,
    items: ["Workflow mapping", "Prompt engineering", "Customer communication flows", "Business process optimization"],
  },
  {
    title: "Business Understanding",
    icon: Workflow,
    items: ["D2C Operations", "Digital Systems", "Customer Workflow Design", "Process Automation"],
  },
];

export const technologies: { name: string; icon: LucideIcon }[] = [
  { name: "Claude", icon: Cpu },
  { name: "ChatGPT", icon: Code },
  { name: "Gemini", icon: Terminal },
  { name: "Cursor", icon: Code2 },
  { name: "Vercel", icon: Globe },
  { name: "Supabase", icon: Workflow },
  { name: "Codex", icon: Zap },
  { name: "Antigravity", icon: Terminal },
];

export const interests = [
  "Business Systems",
  "Artificial Intelligence",
  "Automation",
  "Financial Technology",
  "Product Development",
];
