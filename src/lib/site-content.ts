import type { LucideIcon } from "lucide-react";
import { Code, Database, Globe, Smartphone, Zap } from "lucide-react";

export const contactEmail = "atharvagarwal.in@gmail.com";
export const linkedInUrl = "https://www.linkedin.com/in/atharv-agarwal/";
export const githubUrl = "https://github.com/DevAtharv";

export const technologies: { name: string; icon: LucideIcon }[] = [
  { name: "Next.js", icon: Globe },
  { name: "TypeScript", icon: Code },
  { name: "Tailwind CSS", icon: Zap },
  { name: "PostgreSQL", icon: Database },
  { name: "React Native", icon: Smartphone },
];

export const clientProjects = [
  {
    id: "pulps-leaves",
    title: "Pulps & Leaves",
    status: "Live project",
    type: "D2C fruit and beverage storefront",
    description:
      "A warm, mobile-first ordering experience for Pulps & Leaves with product discovery, coupon-led conversion moments, COD-friendly checkout cues, and clean customer inquiry routing.",
    tags: ["Mobile UX", "Product showcase", "COD flow", "Lead capture"],
    color: "from-[#2f7d32] via-[#f5a524] to-[#ff6b35]",
    metric: "₹1.2L+",
    metricLabel: "sales in under 1 month",
    highlights: [
      "Designed around fresh product storytelling and fast mobile browsing.",
      "Structured the flow for customer trust, offers, and checkout confidence.",
      "Kept inquiry paths clear so visitors can move from interest to order quickly.",
    ],
    outcome: "Pulps & Leaves crossed ₹1.2 lakh in sales within the first month.",
  },
  {
    id: "vadi-masala",
    title: "Vadi Masala",
    status: "Pre-launch",
    type: "Spice brand launch system",
    description:
      "A brand-first website direction for Vadi Masala with premium spice storytelling, product clarity, trust-building sections, and inquiry capture for early customers or distributors.",
    tags: ["Brand website", "FMCG UX", "Inquiry flow", "Launch strategy"],
    color: "from-[#a5281b] via-[#d95f18] to-[#f6b73c]",
    metric: "150kg",
    metricLabel: "orders with ₹0 ad spend",
    highlights: [
      "Built a focused structure for masala product lines and brand credibility.",
      "Prepared the site to support pre-launch demand and buyer conversations.",
      "Reduced clutter so the brand, products, and inquiry path stay obvious.",
    ],
    outcome: "Generated 150kg of orders with zero marketing budget.",
  },
];
