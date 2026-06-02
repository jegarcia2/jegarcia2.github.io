import type { Project, Skill, Testimonial } from '@/types';

export const skills: Skill[] = [
  { name: 'React', level: 90, category: 'frontend' },
  { name: 'Next.js', level: 85, category: 'frontend' },
  { name: 'TypeScript', level: 85, category: 'frontend' },
  { name: 'Tailwind CSS', level: 80, category: 'frontend' },
  { name: 'Node.js', level: 80, category: 'backend' },
  { name: 'PostgreSQL', level: 70, category: 'backend' },
  { name: 'Docker', level: 65, category: 'tools' },
  { name: 'Git', level: 90, category: 'tools' },
];

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Project Name',
    description: 'A short description of what this project does and the problem it solves.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
    repoUrl: 'https://github.com/jegarcia2',
    demoUrl: '#',
    featured: true,
  },
  {
    id: 'project-2',
    title: 'Another Project',
    description: 'Another project description. Highlight key features and technologies used.',
    tags: ['React', 'Node.js', 'MongoDB'],
    repoUrl: 'https://github.com/jegarcia2',
  },
  {
    id: 'project-3',
    title: 'Third Project',
    description: 'Description of your third project. Keep it concise and impactful.',
    tags: ['Python', 'FastAPI', 'Docker'],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'John Doe',
    role: 'CTO',
    company: 'Acme Corp',
    content:
      'Working with Jose was a great experience. He delivered on time and exceeded our expectations at every step.',
  },
  {
    id: 'testimonial-2',
    name: 'Jane Smith',
    role: 'Product Manager',
    company: 'StartupXYZ',
    content:
      'Jose communicates clearly and produces high-quality code. A reliable developer I would work with again.',
  },
  {
    id: 'testimonial-3',
    name: 'Carlos Rivera',
    role: 'Lead Engineer',
    company: 'TechCo',
    content:
      'Strong problem-solving skills and a great eye for detail. Jose elevates the whole team around him.',
  },
];
