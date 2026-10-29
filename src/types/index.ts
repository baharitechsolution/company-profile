export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  technologies: string[];
}

export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  category: "Web Application" | "Mobile App" | "Enterprise / ERP" | "Cloud & DevOps" | "AI & Automation";
  client: string;
  year: string;
  summary: string;
  thumbnail: string;
  techStack: string[];
  liveUrl?: string;
}

export interface ActionResponse<T = unknown> {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
  data?: T;
}

