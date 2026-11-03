export interface NavItem {
  id: string;
  label: string;
}

export type IconName =
  | "components"
  | "ai"
  | "mobile"
  | "api"
  | "speed"
  | "cms"
  | "pin"
  | "whatsapp"
  | "mail"
  | "linkedin"
  | "github"
  | "download"
  | "arrow-up"
  | "external";

export interface Service {
  icon: IconName;
  title: string;
  description: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface TimelineEntry {
  title: string;
  period: string;
  subtitle: string;
  description: string;
}

export type ProjectCategory = "ai" | "web" | "mobile";

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  title: string;
  category: ProjectCategory;
  /** Employer or "Personal project". */
  context: string;
  period: string;
  summary: string;
  stack: string[];
  /** Only verified destinations; the card hides the link row when empty. */
  links: ProjectLink[];
}

export interface SocialLink {
  name: "LinkedIn" | "GitHub";
  icon: IconName;
  href?: string;
}

export interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;
