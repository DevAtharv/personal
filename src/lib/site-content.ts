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
    type: "Live D2C mango storefront",
    url: "https://pulpsandleaves.com/",
    description:
      "A live, mobile-first ordering experience for Pulps & Leaves focused on seasonal Malda mangoes, product discovery, coupon-led conversion, cart flow, Razorpay/COD payment choices, and customer inquiry routing.",
    tags: ["Live storefront", "Mango commerce", "COD flow", "Lead capture"],
    color: "from-[#2f7d32] via-[#f5a524] to-[#ff6b35]",
    metric: "₹1.2L+",
    metricLabel: "sales in under 1 month",
    highlights: [
      "Built around farm-fresh Malda mango boxes with clear seasonal product storytelling.",
      "Structured cart, coupon, delivery, Razorpay, and COD cues for buyer confidence.",
      "Kept inquiry and ordering paths clear so visitors can move from interest to checkout quickly.",
    ],
    outcome: "Pulps & Leaves crossed ₹1.2 lakh in sales within the first month.",
  },
  {
    id: "vadi-masala",
    title: "Vadi Masala",
    status: "Pre-launch, not live yet",
    type: "Spice brand pre-launch system",
    url: null,
    description:
      "A brand-first pre-launch direction for Vadi Masala with spice storytelling, product clarity, trust-building sections, and inquiry capture for early customers or distributors before the public launch.",
    tags: ["Pre-launch", "FMCG UX", "Inquiry flow", "Launch strategy"],
    color: "from-[#a5281b] via-[#d95f18] to-[#f6b73c]",
    metric: "150kg",
    metricLabel: "pre-launch orders, ₹0 marketing budget",
    highlights: [
      "Built a focused structure for masala product lines and brand credibility.",
      "Positioned the brand for pre-launch demand and buyer conversations before going live.",
      "Reduced clutter so the products, credibility, and inquiry path stay obvious.",
    ],
    outcome: "Generated 150kg of pre-launch orders with zero marketing budget.",
  },
];
