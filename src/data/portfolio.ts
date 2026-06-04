import type {
  CertificationItem,
  EducationItem,
  ExperienceItem,
  Project,
  Skill,
  Testimonial,
} from '@/types';

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
    title: 'Dashboard (Stories Reporter)',
    description: 'A content analytics dashboard built for a real brand agency to track Instagram/Meta Stories performance across multiple accounts. Features full CRUD with soft deletion and audit trails, a custom BI engine for engagement metrics and compliance scoring, period-over-period comparisons, Excel bulk import with duplicate detection, and automated PDF executive reports delivered via email. Built on a Firebase Realtime Database with live subscriptions — data updates across all views without page refresh.',
    tags: ['Firebase RDS', 'Next.js 15', 'TypeScript', 'React 19', 'Antd Design', 'Tailwind CSS'],
    repoUrl: 'https://github.com/jegarcia2/dashboard',
    demoUrl: 'https://dashboard-hkra.vercel.app/',
    media: [
      { src: '/dashboard-1.png', alt: 'Stories Reporter dashboard overview', type: 'image' },
      { src: '/dashboard-2.gif', alt: 'Live metrics and engagement scoring in action', type: 'gif' },
      { src: '/dashboard-3.gif', alt: 'Automated PDF report generation flow', type: 'gif' },
    ],
    featured: true,
  },
  {
    id: 'project-2',
    title: '2D Technical Drawing Canvas',
    description: 'A C# WinForms drawing application for creating 2D technical drawings with precision control. Features real-time line and circle rendering with GDI+ graphics, shape selection with editable properties (coordinates, color, length/diameter), and a coordinate system with customizable grid and axis overlay. Includes snap-to-point functionality for precise object placement, smooth canvas centering animation, and continuous eraser mode. Built with custom event-driven architecture and a shape abstraction layer (IShape interface), bilingual UI support (Spanish/English), and persistent application settings. Demonstrates fundamental technical drawing principles and WinForms control design patterns.',
    tags: ['C#', 'WinForms', 'GDI+', 'Event-Driven Architecture', 'Technical Drawing'],
    repoUrl: 'https://github.com/jegarcia2/2dboard',
    media: [
      { src: '/2DBoard-1.gif', alt: 'Drawing feature overview', type: 'gif' },
      { src: '/2DBoard-2.gif', alt: 'Erasing feature overview', type: 'gif' },
      { src: '/2DBoard-3.gif', alt: 'Movement and controls overview', type: 'gif' },
    ],
    featured: true,
  },
  {
    id: 'project-3',
    title: 'Aligerator',
    description:
      'An interactive web app built around a custom HTML5 drag-and-drop engine with real-time collision detection. Rendering is optimized for a steady 60fps using React Hooks (useRef, useCallback) to avoid unnecessary re-renders, paired with hardware-accelerated CSS animations for fluid motion.',
    tags: ['React.js', 'HTML5 Drag & Drop', 'CSS Animations', '60fps Rendering'],
    repoUrl: 'https://github.com/jegarcia2/aligerator',
    media: [
      { src: '/Aligerator-1.gif', alt: 'Adding images as magnets', type: 'gif' },
      { src: '/Aligerator-2.gif', alt: 'Adding magnets to the fridge', type: 'gif' },
      { src: '/Aligerator-3.gif', alt: 'Adding notes and physics of the magnet', type: 'gif' },
    ],
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

export const experience: ExperienceItem[] = [
  {
    id: 'ecuacodeforge',
    role: 'Software Developer — via EcuaCodeForge',
    company: 'QuickSilverSystems',
    period: 'Mar 2026 — May 2026',
    context: 'Multinational U.S. insurance platform · end client engaged via vendor',
    highlights: [
      'Built and maintained client portals and business-intelligence features for 6 multinational U.S. insurance clients.',
      'Designed and consumed RESTful API endpoints using the Sails ORM, with parameterized raw SQL for complex, non-standard queries across the policy lifecycle.',
      'Integrated React and Next.js frontends with MySQL-backed services to display real-time insurance data.',
      'Delivered client-facing functionality while collaborating entirely in English with distributed stakeholders.',
    ],
  },
  {
    id: 'equasystems-dev',
    role: 'Software Developer — via Equasystems S.A.S',
    company: 'QuickSilverSystems',
    period: 'Oct 2025 — Mar 2026',
    context: 'Multinational U.S. insurance platform · end client engaged via vendor',
    highlights: [
      'Built and maintained user interfaces for Insurica, improving usability and customer engagement.',
      'Designed dynamic dashboards for real-time policy and claims visualization.',
      'Fixed critical bugs and shipped production patches across insurance platforms with rapid, maintainable releases.',
    ],
  },
  {
    id: 'equasystems-junior',
    role: 'Junior Developer — via Equasystems S.A.S',
    company: 'QuickSilverSystems',
    period: 'May 2023 — May 2024',
    context: 'Multinational U.S. insurance platform · end client engaged via vendor',
    highlights: [
      'Co-developed a client portal in React for real-time insurance data and quick actions.',
      'Introduced unit testing with Cypress and ESLint, and built internal backend tests with Mocha against controllers to ensure strict data consistency.',
      'Implemented production hotfixes and shipped enhancements with clear tickets, pull requests, and release notes.',
      'Coordinated requirements and dependencies with remote teams in English and Spanish.',
    ],
  },
];

export const education: EducationItem[] = [
  {
    id: 'espol-mech',
    title: 'B.Sc. Mechanical Engineering',
    institution: 'Escuela Superior Politécnica del Litoral (ESPOL)',
    period: '2020 — 2025',
  },
  {
    id: 'tes-software',
    title: 'Higher Diploma in Software Development',
    institution: 'Tecnológico Espíritu Santo',
    period: '2020 — 2024',
    note: 'Top Graduate 2023',
  },
];

export const certifications: CertificationItem[] = [
  { id: 'aws-devops', name: 'AWS DevOps', issuer: 'Smart Data', hours: '40h' },
  { id: 'scrum', name: 'SCRUM Management', issuer: 'BrainSEK', hours: '40h' },
  { id: 'backend', name: 'Backend Development', issuer: 'Alura Latam', hours: '120h' },
];
