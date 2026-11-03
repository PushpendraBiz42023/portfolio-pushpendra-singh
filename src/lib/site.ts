import type { NavItem, SocialLink } from "@/types";

export const siteConfig = {
  name: "Pushpendra Singh",
  title: "Pushpendra Singh | Frontend Developer – React.js, Next.js, TypeScript",
  description:
    "Frontend Developer in Jaipur with 4+ years of experience building scalable React.js, Next.js and TypeScript applications, headless CMS platforms, mobile UIs and AI chat interfaces.",
  jobTitle: "AI-First Frontend Developer",
  location: "Mansarovar, Jaipur, Rajasthan, India",
  email: "pushpendrasinghbtp2002@gmail.com",
  whatsappUsername: "Mr.pushpendra2002",
  // WhatsApp username link; if it does not open your chat, replace with
  // https://wa.me/<countrycode><number> (digits only).
  whatsappUrl: "https://wa.me/u/Mr.pushpendra2002",
  resumeUrl: "/resume/Pushpendra-Singh-Frontend-Developer-Resume.pdf",
  resumeFileName: "Pushpendra-Singh-Frontend-Developer-Resume.pdf",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, ""),
} as const;

/** Single place to add social profiles. Links without an `href` are hidden. */
export const socialLinks: SocialLink[] = [
  { name: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/in/pushpendra-singh-47aba3221" },
  { name: "GitHub", icon: "github", href: undefined },
];

export const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Expertise" },
  { id: "skills", label: "Skills" },
  { id: "resume", label: "Experience" },
  { id: "portfolio", label: "Projects" },
  { id: "contact", label: "Contact" },
];
