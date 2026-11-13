import type { Project, Service, SkillGroup, TimelineEntry } from "@/types";

export const hero = {
  greeting: "Hello There!",
  heading: "I'm Pushpendra Singh",
  role: "Software Engineer",
  intro:
    "I build fast, accessible React.js and Next.js interfaces in TypeScript — from multi-tenant SaaS dashboards and headless CMS sites to cross-platform mobile apps and LLM-powered chat experiences.",
};

export const about = {
  heading: "About Me",
  paragraphs: [
    "I am a Frontend Developer at Biz4Group LLC in Jaipur with 4+ years of experience turning Figma designs into scalable, production-ready interfaces for SaaS products and enterprise web apps.",
    "My work spans reusable component libraries, REST and GraphQL integrations, Payload CMS architectures and RAG-driven AI assistants. I care about Core Web Vitals, technical SEO and WCAG 2.1 AA accessibility, and I use tools like Cursor, Windsurf, Claude and GitHub Copilot to ship and test faster.",
  ],
};

export const services: Service[] = [
  {
    icon: "components",
    title: "UI Component Engineering",
    description:
      "50+ reusable, accessible components built from Figma specs with React.js, Next.js and TypeScript for multi-tenant SaaS applications.",
  },
  {
    icon: "ai",
    title: "AI & LLM Interfaces",
    description:
      "Interactive AI chat widgets, prompt workflows and RAG-driven knowledge assistants that cut support query resolution times by 40%.",
  },
  {
    icon: "mobile",
    title: "Cross-Platform Mobile UI",
    description:
      "Unified mobile app flows in React Native and Ionic React with design-system parity between iOS and Android.",
  },
  {
    icon: "api",
    title: "API & State Management",
    description:
      "Complex REST API integrations with global state, automated form validation, loading skeletons and graceful error fallbacks.",
  },
  {
    icon: "speed",
    title: "Performance & SEO",
    description:
      "Web Vitals work that improved PageSpeed and Lighthouse scores by 35% through code splitting, preloading, image optimization and SSG/SSR routing.",
  },
  {
    icon: "cms",
    title: "Headless CMS Platforms",
    description:
      "Next.js App Router sites on Payload CMS with dynamic sitemaps, canonical URLs and structured JSON-LD metadata.",
  },
];

export const skillGroups: SkillGroup[] = [
  { title: "Core Frontend & Frameworks", items: ["React.js", "Next.js (App Router, SSR, SSG)", "TypeScript", "JavaScript (ES6+)", "React Native", "Ionic React"] },
  { title: "UI Architecture & Styling", items: ["HTML5", "CSS3 / SCSS", "Bootstrap", "Tailwind CSS", "Design Systems", "Web Accessibility (WCAG 2.1 AA)"] },
  { title: "State, APIs & CMS", items: ["RESTful APIs", "GraphQL", "Payload CMS", "Headless CMS Architecture", "Auth & State Management"] },
  { title: "AI & Generative AI", items: ["LLM API Integration", "Retrieval-Augmented Generation (RAG)", "AI Chat Interfaces", "Contextual Retrieval", "Prompt Engineering"] },
  { title: "Performance & SEO", items: ["Core Web Vitals", "Lighthouse", "FCP / LCP Reduction", "Lazy Loading", "Dynamic Sitemaps", "Canonical URLs"] },
  { title: "Tooling & Workflows", items: ["Git & GitHub", "Figma-to-Code", "Vite", "CI/CD", "Cursor", "Windsurf", "MCP", "Claude", "GitHub Copilot"] },
];

export const experience: TimelineEntry[] = [
  {
    title: "Biz4Group LLC",
    period: "Aug 2022 – Present",
    subtitle: "UI Developer / Frontend Developer · Jaipur, India",
    description:
      "Build and ship React.js, Next.js and TypeScript interfaces for SaaS and enterprise clients: 50+ accessible reusable components from Figma, AI chat and RAG assistants, React Native / Ionic React mobile flows, REST API integrations, and performance and SEO work that lifted Lighthouse scores by 35%. AI-assisted tooling raised sprint velocity by 25%.",
  },
  {
    title: "Getraise Technologies (Getraise Private Limited)",
    period: "Oct 2021 – Oct 2022",
    subtitle: "Web Developer (Internship) · Jaipur, India",
    description:
      "Internship as a Web Developer, building web interfaces with React, Next.js, HTML and CSS, and using Figma and Photoshop for design work.",
  },
];

export const education: TimelineEntry[] = [
  {
    title: "RSSM, Jaipur",
    period: "Post Graduate - 2024",
    subtitle: "Post Graduatation Degree in Computer Science",
    description: "Undergraduate degree completed alongside professional frontend work.",
  },
  {
    title: "DeepLearning.AI / Coursera",
    period: "Certification",
    subtitle: "Generative AI with Large Language Models",
    description: "Foundations of large language models and generative AI systems.",
  },
  {
    title: "IBM / Coursera",
    period: "Certification",
    subtitle: "Introduction to Software Engineering",
    description: "Core software engineering practices and lifecycle.",
  },
];

export const projectFilters = [
  { value: "all", label: "All" },
  { value: "ai", label: "AI & LLM" },
  { value: "web", label: "Web Platforms" },
  { value: "mobile", label: "Mobile Apps" },
] as const;

export const projectCategoryLabels = {
  ai: "AI & LLM",
  web: "Web Platform",
  mobile: "Web & Mobile App",
} as const;

export const projects: Project[] = [
  {
    title: "AI Document Chatbot",
    category: "ai",
    context: "Personal project",
    period: "Oct 2026 – Present",
    summary:
      "Conversational AI chatbot that answers questions from documents uploaded by an admin, using Retrieval-Augmented Generation (RAG). I built the document upload, chunking and processing-status interface, real-time streaming responses with document context, chat history and user authentication. Currently in development and running in a local environment.",
    stack: ["React.js", "TypeScript", "RAG", "Streaming responses", "Authentication"],
    links: [],
  },
  {
    title: "Svermo – AI Platform Website for Real Estate",
    category: "web",
    context: "Biz4Group",
    period: "May 2026 – Jul 2026",
    summary:
      "Designed and developed the complete website for Svermo, an AI company building products for real estate operations (leasing, voice, tenant, valuation, investment and deal AI). Built end to end with Next.js and Payload CMS: a responsive, SEO-optimized public website and a custom Payload admin panel where the team manages pages, product content and blog posts without code.",
    stack: ["Next.js", "Payload CMS", "SEO", "Responsive UI"],
    links: [{ label: "Visit svermo.ai", url: "https://www.svermo.ai/" }],
  },
  {
    title: "ScamGuarding – Fraud Call Detection Web Portal & Android App",
    category: "mobile",
    context: "Biz4Group",
    period: "Jun 2025 – Present",
    summary:
      "Web portal and Android mobile app that helps users identify and avoid fraud calls. I built the user-facing side of the product, including authentication flows, core screens and responsive UI, using React Native for the mobile app.",
    stack: ["React Native", "Responsive UI", "Authentication flows"],
    links: [
      { label: "Visit website", url: "https://www.scamguarding.com/" },
      { label: "Google Play app", url: "https://play.google.com/store/apps/details?id=com.scamguarding" },
    ],
  },
  {
    title: "Stratum 9 – Human Performance Development Platform",
    category: "web",
    context: "Biz4Group",
    period: "Feb 2024 – Sep 2026",
    summary:
      "Long-term product engagement building the frontend for Stratum 9's AI-powered platforms: a human performance development platform for web (React.js, Next.js) and mobile (React Native), plus its marketing website built with Next.js and Payload CMS. Delivered responsive, production-ready interfaces focused on usability, performance and clean, reusable component structure.",
    stack: ["React.js", "Next.js", "React Native", "Payload CMS"],
    links: [
      { label: "Visit website", url: "https://stratum-nine.com/" },
      { label: "iOS app", url: "https://apps.apple.com/us/app/stratum-9/id6478380143" },
    ],
  },
  {
    title: "S9 InnerView – AI-Powered Hiring Platform",
    category: "ai",
    context: "Biz4Group",
    period: "Feb 2024 – Sep 2026",
    summary:
      "AI hiring platform within the Stratum 9 engagement, covering job creation, resume screening, structured interviews, candidate dashboards and AI-backed interview summaries. I built the frontend for these flows with a focus on usability, performance and clean, reusable component structure.",
    stack: ["React.js", "Next.js", "AI-backed summaries", "Dashboards"],
    links: [{ label: "Visit S9 InnerView", url: "https://s9innerview.com/" }],
  },
];
