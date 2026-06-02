export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'other';
  icon?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
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
