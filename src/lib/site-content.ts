import type { LucideIcon } from "lucide-react";
import { Code2, Cpu, Globe, Terminal, Workflow, Zap } from "lucide-react";

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

export const positioning = {
  short: "Software and automation systems for small businesses",
  headline: "I build software and automation systems for small businesses using AI.",
  subheadline:
    "I help businesses replace scattered manual work with practical websites, order workflows, customer communication systems, and launch infrastructure.",
};

export const heroStats = [
  {
    label: "Real Business Work",
    detail: "D2C ordering, customer communication, launch systems, and operations workflows",
  },
  {
    label: "Systems Shipped",
    detail: "Websites, WhatsApp flows, order tracking, Sheets integrations, and internal workflows",
  },
  {
    label: "Primary Focus",
    detail: "Small business software, automation, customer operations, and commerce infrastructure",
  },
  {
    label: "Building Method",
    detail: "AI-assisted product development for rapid building, testing, and deployment",
  },
];

export const proofOfWork = [
  {
    label: "Live D2C Business",
    detail: "Pulps & Leaves storefront and ordering infrastructure went live for real customers.",
  },
  {
    label: "Order Workflow Improved",
    detail: "Built systems around customer communication, order tracking, and Google Sheets visibility.",
  },
  {
    label: "Automation Implemented",
    detail: "WhatsApp and operational workflows reduced manual follow-up and kept customer/order data organized.",
  },
  {
    label: "Launch Infrastructure",
    detail: "Vadi Masala is being prepared with brand, commerce, and customer experience systems before launch.",
  },
];

export const featuredWork = [
  {
    id: "pulps-leaves",
    title: "Pulps & Leaves",
    status: "Live Business Project",
    url: "https://pulpsandleaves.com/",
    description:
      "Built and improved digital systems for a live D2C mango brand, including the website, customer communication workflows, order tracking, and operational Google Sheets flows.",
    problem:
      "A growing D2C business needed a clearer way to handle online orders, customer communication, and operational visibility without relying on scattered manual follow-ups.",
    solution:
      "Built the website and ordering flow, connected customer communication workflows, improved WhatsApp/order updates, and organized order data through Google Sheets integrations.",
    impact:
      "The business got a more usable ordering system, clearer customer communication, better order tracking, and a practical digital base to handle real demand.",
    highlights: [
      "Website and ordering flow",
      "WhatsApp customer communication",
      "Order tracking workflow",
      "Google Sheets integrations",
      "Customer update process",
      "Business process optimization",
    ],
    proofPoints: [
      "Live at pulpsandleaves.com",
      "Built for real customer orders",
      "Supported 150kg order handling context",
      "Pulps & Leaves reached Rs 1.2 lakh sales in under one month",
    ],
    learned:
      "Working with a real business showed how small operational gaps can slow growth, and how simple software systems can make day-to-day work easier to manage.",
    visualTitle: "Live D2C operations system",
    visualDetail: "Mango ordering, customer communication, order tracking, Sheets visibility, and workflow cleanup",
  },
  {
    id: "vadi-masala",
    title: "Vadi Masala",
    status: "Pre-Launch Build",
    url: null,
    description:
      "Helping prepare digital launch infrastructure for an emerging spice brand before the public launch.",
    problem:
      "The brand needed a credible digital presence and launch-ready commerce system before going to market.",
    solution:
      "Worked on website direction, brand implementation, e-commerce setup, product presentation, and customer experience planning.",
    impact:
      "The brand is being prepared with a stronger launch foundation instead of waiting until after launch to fix digital and customer workflow gaps.",
    highlights: [
      "Website design and development",
      "Brand implementation",
      "E-commerce setup",
      "Launch preparation",
      "Customer experience planning",
    ],
    proofPoints: [
      "Pre-launch systems in progress",
      "Commerce and brand experience planned before launch",
      "Built around scalable customer flow from day one",
    ],
    learned:
      "The focus is to set up systems before launch so the business can start with a cleaner customer experience and fewer operational gaps.",
    visualTitle: "Pre-launch commerce system",
    visualDetail: "Brand presence, product experience, commerce setup, and launch readiness",
  },
];

export const projects = [
  {
    title: "Glint",
    status: "Product Project",
    problem: "Playlist and music workflows often feel fragmented across tools.",
    solution: "Built a streamlined product experience around playlist and music-related actions.",
    impact: "Helped practice product thinking, API use, and user flow design around a simple daily workflow.",
    description:
      "A product project focused on simplifying playlist and music-related workflows through a cleaner user experience.",
    tech: ["React", "Supabase", "APIs"],
  },
  {
    title: "Finance Assistant",
    status: "Experiment",
    problem: "Personal financial information can be hard to organize and understand when it is scattered.",
    solution: "Explored AI-assisted organization and explanation of finance-related information.",
    impact: "Built understanding of how automation can turn raw information into clearer decisions.",
    description:
      "An experimental project exploring how AI and automation can help users organize and understand financial information.",
    tech: ["Finance", "Automation", "AI"],
  },
  {
    title: "GetSync",
    status: "Experimental Prototype",
    problem: "Email and transaction workflows can become difficult to track manually.",
    solution: "Explored an early workflow concept for managing email and transaction information.",
    impact: "Kept intentionally as a prototype to test workflow assumptions without presenting it as a finished company.",
    description:
      "An early-stage concept exploring email and transaction management workflows. Presented as an experiment rather than a production-ready platform.",
    tech: ["Email workflows", "Transactions", "Prototype"],
  },
];

export const capabilityGroups: { title: string; icon: LucideIcon; items: string[] }[] = [
  {
    title: "Business Systems",
    icon: Workflow,
    items: ["Order workflows", "Customer communication", "Internal dashboards", "Operational visibility"],
  },
  {
    title: "Automation",
    icon: Cpu,
    items: ["WhatsApp flows", "Google Sheets workflows", "Manual process cleanup", "Customer updates"],
  },
  {
    title: "Web and Commerce",
    icon: Globe,
    items: ["Business websites", "E-commerce setup", "Launch pages", "Customer experience"],
  },
];

export const developmentStack: { name: string; icon: LucideIcon; detail: string }[] = [
  {
    name: "Plan the workflow",
    icon: Workflow,
    detail: "Understand the business process, customer path, and manual bottlenecks before building.",
  },
  {
    name: "Build with AI",
    icon: Code2,
    detail: "Use AI-assisted development to move quickly from idea to working software.",
  },
  {
    name: "Connect operations",
    icon: Terminal,
    detail: "Tie the front-end experience to Sheets, orders, messages, and internal tracking.",
  },
  {
    name: "Ship and improve",
    icon: Globe,
    detail: "Deploy working versions, watch real usage, and refine what creates operational value.",
  },
];

export const tools = ["Claude", "ChatGPT", "Gemini", "Cursor", "Vercel", "Supabase", "Codex", "Antigravity"];

export const interests = [
  "Business Systems",
  "Automation",
  "Artificial Intelligence",
  "Financial Technology",
  "Product Development",
];

export const impactThemes = [
  {
    label: "Business impact",
    icon: Workflow,
    detail: "The work is judged by whether it makes operations clearer, faster, or easier to manage.",
  },
  {
    label: "Practical scope",
    icon: Zap,
    detail: "I focus on systems a small business can actually use, maintain, and improve.",
  },
];
