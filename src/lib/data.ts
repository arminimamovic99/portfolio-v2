export type Company = {
  name: string;
  logo?: string;
  logoWidth?: number;
  logoHeight?: number;
};

export const companies: Company[] = [
  { name: "Sandvik", logo: "/Sandvik-Logo.png", logoWidth: 120, logoHeight: 60 },
  { name: "Helbling", logo: "/helbling2.png", logoWidth: 60, logoHeight: 60 },
  { name: "HNT", logo: "/hnt.png", logoWidth: 120, logoHeight: 60 },
  {
    name: "KnowL",
    logo: "/knowl.png",
    logoWidth: 60,
    logoHeight: 60,
  },
];

export const calendlyUrl =
  "https://calendly.com/aimamovic99/software-development-consulting-intro-call";

export const email = "aimamovic99@outlook.com";

export const linkedinUrl = "https://linkedin.com/in/armin-imamovic";
export const githubUrl = "https://github.com/arminimamovic99";

export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "My Work", href: "#work" },
  { label: "About Me", href: "#about" },
  { label: "How I work", href: "#how-i-work" },
  { label: "Testimonials", href: "#testimonials" },
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
  screenshots?: string[];
  details?: ProductDetails;
};

export const workItems: WorkItem[] = [
  {
    title: "KnowL",
    client: "🇳🇱 KnowL Solutions",
    period: "Jan 2023 – Nov 2025",
    description:
      "Lead and owned the frontend of an employee communication + learning + knowledge-management platform for large organizations. Rewrote the application from a legacy Angular 5+ codebase into a modern Angular 19 + Tailwind setup, improved performance, UX, ease of use, and end user satisfaction.",
    tech: ["Angular", "TypeScript", "RxJS", "NgRx"],
    category: "client",
    url: "https://knowl.solutions/",
    screenshots: ["/knowl/ss1.png"],
  },
  {
    title: "LILO Online",
    client: "🇦🇹 🇩🇪 Wohlhart Lernsoftware | Helbling",
    period: "Oct 2020 – Jan 2023",
    description:
      "Enterprise eLearning platform deployed across elementary schools in Austria and Germany. Rewrote core features from a legacy system to a modern Angular/Phaser.js codebase, improving UX and end-user satisfaction for teachers and students.",
    tech: ["Angular", "TypeScript", "RxJS", "NgRx", "Phaser.js"],
    category: "client",
    url: "https://www.helbling.com/at/de/lilo",
    screenshots: ["/lilo/ss1.png", "/lilo/ss2.png"],
  },
  {
    title: "BoB",
    client: "🇦🇹 Wohlhart Lernsoftware",
    period: "Oct 2020 – Jan 2023",
    description:
      "Large-scale student observation platform (bobdigi.at). Led frontend development, optimizing performance for reliable cross-platform operation across Android, iOS, and desktop.",
    tech: ["Angular", "TypeScript", "RxJS", "NgRx"],
    category: "client",
    url: "https://bobdigi.at",
    screenshots: ["/bob/ss1.png", "/bob/ss2.png"],
  },
  {
    title: "InnoBook",
    client: "🇩🇪 InnoBook UG",
    period: "Oct 2025 – Apr 2026",
    description:
      "German marketplace + booking platform for leisure experiences and events. I integrated as a full-stack engineer - extended and stabilized backend functionality, implemented multiple new client facing features, and improved UI/UX on key application flows.",
    tech: ["Vue.js", "Nuxt", "Laravel", "APIPlatform"],
    category: "client",
    url: "https://innobook.me"
  },
  {
    title: "LoungeLink",
    client: "🇧🇦 Founder",
    period: "2024 – Present",
    description:
      "Designed, built, and sold a SaaS platform for hookah lounges (orders, inventory, table service, analytics) as a one-person company. Landed my first paying client on a recurring subscription, currently scaling to more customers.",
    tech: ["React", "Next.js", "Supabase", "Node.js", "PostgreSQL"],
    category: "product",
    url: "https://lounge-link.app",
    screenshots: ["/loungelink/admin-overview.png"],
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
    title: "🤔 Research & Discovery",
    description:
      "I don't build for the sake of building. In the first phase, we sit down together to find out what exactly what we need to build to solve your biggest pain point",
  },
  {
    number: "02",
    title: "📔 Proof of Concept",
    description:
      "Once we identify a target, I build a proof of concept fast, demonstrating that a solution can actually be built. You get a clickable demo with dummy data within days.",
  },
  {
    number: "03",
    title: "🏗️ Build",
    description:
      "Now it's full focus: building your MVP to the highest quality and polish I can deliver. This is not a closed process though, you are involved daily, testing and validating as we go.",
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

export type Comparison = {
  label: string;
  me: string;
  agency: string;
};

export const comparisons: Comparison[] = [
  {
    label: "Speed",
    me: "MVP shipped in 3-6 weeks",
    agency: "Months, buried in process",
  },
  {
    label: "Cost",
    me: "Fixed rate, agreed in writing at the start. No markup",
    agency: "Blended rates plus agency overhead",
  },
  {
    label: "Who builds it",
    me: "Me, every line, start to finish",
    agency: "Reassigned between teams of devs",
  },
  {
    label: "Communication",
    me: "Direct line to the person building it",
    agency: "Routed through account managers",
  },
  {
    label: "Decisions",
    me: "Made the same day",
    agency: "Wait for the next status call",
  },
  {
    label: "Focus",
    me: "Your project, full attention",
    agency: "One of several client accounts",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
};

// Placeholder quotes — swap in real client testimonials once gathered.
export const testimonials: Testimonial[] = [
  {
    quote:
      "It has been a pleasure working with Armin as part of the same team.  Armin is a proactive and experienced Front End Developer who consistently delivers high quality solutions in a timely manner. He takes ownership of his work, contributes valuable insights, and is always willing to support the team when needed. Overall, he is reliable, collaborative, and very easy to work with, making him a valuable member of the team.",
    name: "Azra Rujanac",
    role: "Teammate | Delivery Manager",
    company: "zendev",
    initials: "AR",
  },
  {
    quote:
      "Armin showed exceptional professionalism and expertise during development of our website. He didn't blindly follow suggestions, but pushed back on parts he knew didn't fit.",
    name: "Semir Cancar",
    role: "Client | Founder and CEO",
    company: "MTF Group D.O.O",
    initials: "SC",
  },
  {
    quote:
      "Armin is the first person that we reach out to whenever we have a software development project we need advice or consulting for. His outstanding work ethic, expertise and professional attitude is what keeps us coming back.",
    name: "Deni Dedic",
    role: "Client | Co-founder",
    company: "EKD Solutions D.O.O",
    initials: "DD",
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "How much does it cost to work with you?",
    answer: "My rate is a fixed €45 per hour. Depending on the scope and longevity of the project, we can also come up with a personalized monthly, or milestone-based rate.",
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
