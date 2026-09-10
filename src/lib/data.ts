export type Company = {
  name: string;
  logo?: string;
  logoWidth?: number;
  logoHeight?: number;
};

export const companies: Company[] = [
  { name: "Sandvik", logo: "/sandvik.svg.webp", logoWidth: 1200, logoHeight: 600 },
  { name: "Helbling", logo: "/helbling.png", logoWidth: 900, logoHeight: 500 },
  { name: "HNT", logo: "/hnt.png", logoWidth: 400, logoHeight: 94 },
  {
    name: "KnowL",
    logo: "/knowl.png",
    logoWidth: 400,
    logoHeight: 400,
  },
];

export const calendlyUrl =
  "https://calendly.com/aimamovic99/software-development-consulting-intro-call";

export const email = "aimamovic99@outlook.com";

export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "My Work", href: "#work" },
  { label: "About Me", href: "#about" },
  { label: "How I work", href: "#how-i-work" },
  { label: "FAQ", href: "#faq" },
];

export const resumeUrl = "/Armin_Imamovic_Resume_2026.pdf";
export const resumePreview = "/resume-preview.png";

export type ProductDetails = {
  tagline: string;
  role: string;
  product: string;
  scope: string;
  highlights: string[];
  screenshots?: string[];
};

export type WorkItem = {
  title: string;
  client: string;
  period: string;
  description: string;
  tech: string[];
  category: "client" | "product";
  url: string;
  details?: ProductDetails;
};

export const workItems: WorkItem[] = [
  {
    title: "KnowL",
    client: "KnowL Solutions",
    period: "Jan 2023 – Nov 2025",
    description:
      "Led a content management UI giving non-technical staff full control over platform content. Restructured the codebase for scale, which cut load times and improved reliability across the platform.",
    tech: ["React", "Next.js", "TypeScript", "RxJS", "NgRx"],
    category: "client",
    url: "https://knowl.solutions/",
  },
  {
    title: "LILO Online",
    client: "Wohlhart Lernsoftware",
    period: "Oct 2020 – Jan 2023",
    description:
      "Enterprise eLearning platform deployed across elementary schools in Austria and Germany. Rewrote core features from a legacy system to React/Next.js, improving UX and end-user satisfaction for teachers and students. Architected a new content management UI and set coding guidelines adopted by the full team.",
    tech: ["React", "Next.js", "Angular", "TypeScript", "Azure DevOps"],
    category: "client",
    url: "https://www.helbling.com/at/de/lilo",
  },
  {
    title: "BoB",
    client: "Wohlhart Lernsoftware",
    period: "Oct 2020 – Jan 2023",
    description:
      "Large-scale student observation platform (bobdigi.at). Led frontend development, optimizing performance for reliable cross-platform operation across Android, iOS, and desktop.",
    tech: ["React", "Next.js", "Angular", "TypeScript", "Azure DevOps"],
    category: "client",
    url: "https://bobdigi.at",
  },
  {
    title: "LoungeLink",
    client: "Founder",
    period: "2024 – Present",
    description:
      "Designed, built, and sold a SaaS platform for hookah lounges (orders, inventory, table service, analytics) as a one-person company. Landed the first paying client on a recurring subscription, fixed a production data-integrity bug with server-side idempotency, and integrated real-time thermal receipt printing.",
    tech: ["React", "Next.js", "Supabase", "Node.js", "PostgreSQL"],
    category: "product",
    url: "https://lounge-link.app",
    details: {
      tagline: "SaaS · Hospitality Operations",
      role: "Founder & Developer",
      product: "Analysis, order automation, inventory, and table service",
      scope: "One-person company: product, architecture, go-to-market",
      highlights: [
        "Orders, inventory, table service, and analytics for hookah lounges",
        "Owned product, architecture, and go-to-market as a one-person company",
        "First paying client on a 150 BAM per month subscription",
        "Server-side idempotency protection to stop order duplication in production",
        "Thermal receipt printing via ESC/POS over TCP to in-venue LAN printers",
        "Client pipeline grown through direct outreach, SEO, and local press",
      ],
      screenshots: [
        "/loungelink/ss.png",
        "/loungelink/admin-overview.png",
        "/loungelink/admin-orders.png",
        "/loungelink/admin-staff.png",
      ],
    },
  },
];

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "🤔 Validate",
    description:
      "I don't build for the sake of building. Before anything else, I find out if this actually needs building, or if an existing alternative already solves it.",
  },
  {
    number: "02",
    title: "📔 Proof of Concept",
    description:
      "Once validated, I build a proof of concept fast, proving to both of us that it can actually be built. You get a clickable demo with dummy data within days.",
  },
  {
    number: "03",
    title: "🏗️ Build",
    description:
      "Now it's full focus: building your MVP to the highest quality and polish I can deliver.",
  },
  {
    number: "04",
    title: "🚢 Handoff & Delivery",
    description:
      "We go through the project together, test it thoroughly, and ship it to production. Then we sign a retainer: 8 hours of my time each month for maintenance or fixes.",
  },
];

export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    items: [
      "React",
      "Next.js",
      "Angular",
      "RxJS / NgRx / Signals",
      "Vue.js / Nuxt",
      "TypeScript",
      "Tailwind",
    ],
  },
  {
    label: "Backend & Data",
    items: ["Node.js", "REST APIs", "Supabase", "PostgreSQL", "MongoDB", "Prisma"],
  },
  {
    label: "Tooling & Platform",
    items: ["Git", "Azure DevOps", "CI/CD", "Webpack", "Vite", "Auth0", "Chargebee"],
  },
  {
    label: "Leadership",
    items: ["Architecture", "Mentoring", "Product ownership", "Agile / Scrum"],
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "How much does it cost to work with you?",
    answer: "My rate is a fixed €45 per hour.",
  },
  {
    question: "Where are you based, and how do we handle timezones?",
    answer:
      "I'm based in Bosnia and Herzegovina (GMT+2) and have worked with clients across the US and EU. Even when our timezones don't line up, we'll find 2-3 hours of overlap.",
  },
  {
    question: "Do you work with non-technical founders?",
    answer:
      "Absolutely. I can be your technical sidekick, translating technical terms into plain business language.",
  },
  {
    question: "Do you work with existing teams?",
    answer: "Yes. I can integrate as a developer or a team lead.",
  },
  {
    question: "How long does it take to build an MVP?",
    answer:
      "Depends on the project's scale, but a typical MVP takes 2-4 weeks.",
  },
];
