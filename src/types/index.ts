export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'other';
  icon?: string;
}

export interface ProjectMedia {
  src: string;
  alt: string;
  type?: 'image' | 'gif';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  media?: ProjectMedia[];
  demoUrl?: string;
  repoUrl?: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar?: string;
  content: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  context?: string;
  highlights: string[];
}

export interface EducationItem {
  id: string;
  title: string;
  institution: string;
  period: string;
  note?: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  hours?: string;
}
