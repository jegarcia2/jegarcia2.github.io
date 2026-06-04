'use client';

import { Tooltip } from 'antd';
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMysql,
  SiAntdesign,
  SiPython,
  SiHtml5,
  SiExpress,
  SiPostgresql,
  SiCypress,
  SiEslint,
  SiGithub,
} from 'react-icons/si';

import { FaAws, FaCss3Alt, FaJava } from 'react-icons/fa';

// Define the shape of a skill item for better type safety
interface SkillItem {
  name: string;
  icon?: any;
  text?: string;
  isText?: boolean;
  color: string;
  exp: string;
}

const categories = [
  {
    label: 'PROGRAMMING & LANGUAGES',
    items: [
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', exp: 'Hands-on building full-stack Node.js and React applications.' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', exp: 'Using static typing for safer, more maintainable codebases.' },
      { name: 'Python', icon: SiPython, color: '#3776AB', exp: 'Scripting, data processing, and general-purpose tasks.' },
      { name: 'C#', isText: true, text: 'C#', color: '#9B4F96', exp: 'Desktop application development with WinForms and object-oriented programming.' },
      { name: 'Java', icon: FaJava, color: '#007396', exp: 'Object-oriented programming fundamentals.' },
    ],
  },
  {
    label: 'FRONT END & UI',
    items: [
      { name: 'React', icon: SiReact, color: '#61DAFB', exp: 'Co-developed client portals and built dynamic dashboards for real-time visualization.' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF', exp: 'Building SEO-friendly apps with SSR and file-based routing.' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26', exp: 'Semantic markup for accessible web applications.' },
      { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6', exp: 'Modern styling, layouts, and responsive design.' },
      { name: 'Ant Design', icon: SiAntdesign, color: '#0170FE', exp: 'Building clean, consistent UI layouts with a component library.' },
    ],
  },
  {
    label: 'BACKEND & DATA',
    items: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933', exp: 'Building backend services and REST APIs.' },
      { name: 'Express', icon: SiExpress, color: '#FFFFFF', exp: 'Building REST APIs and handling server-side routing.' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', exp: 'Relational database design with a focus on data integrity.' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1', exp: 'Designing relational schemas and writing SQL queries.' },
    ],
  },
  {
    label: 'TOOLS, QA & CLOUD',
    items: [
      { name: 'Git/GitHub', icon: SiGithub, color: '#FFFFFF', exp: 'Shipped enhancements using clear tickets, PRs, and release notes.' },
      { name: 'Cypress', icon: SiCypress, color: '#17202C', exp: 'Added end-to-end and unit tests, reducing QA rework.' },
      { name: 'ESLint', icon: SiEslint, color: '#4B32C3', exp: 'Automated code-quality checks to keep code maintainable.' },
      { name: 'AWS', icon: FaAws, color: '#FF9900', exp: 'EC2 deployments and AWS DevOps certification (40h).' },
      { name: 'PowerBI', isText: true, text: 'PBI', color: '#F2C811', exp: 'Data visualization and business intelligence reporting.' },
    ]
  },
  {
    label: 'ENGINEERING & DESIGN',
    items: [
      { name: 'AutoCAD', isText: true, text: 'AC', color: '#E51013', exp: 'Drafting precision mechanical designs and schematics.' },
      { name: 'SolidWorks', isText: true, text: 'SW', color: '#E32526', exp: 'Creating 3D models and testing mechanical viability.' },
    ],
  }
];

function TechBadge({ name, icon: Icon, color, exp, isText, text }: SkillItem) {
  return (
    <Tooltip
      title={exp}
      placement="top"
      color="#111827"
      overlayInnerStyle={{ border: '1px solid rgba(255,255,255,0.1)', padding: '12px', fontSize: '13px' }}
    >
      <div className="group flex flex-col items-center gap-3 cursor-help">
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-lg group-hover:shadow-[#2ecc8a]/20">

          {isText ? (
            <span className="text-xl font-black" style={{ color }}>{text}</span>
          ) : (
            <Icon className="text-3xl transition-transform duration-300 group-hover:scale-110" style={{ color }} />
          )}

        </div>
        <span className="text-[11px] font-bold tracking-widest uppercase text-white/50 text-center leading-tight max-w-[64px] group-hover:text-white transition-colors duration-300">
          {name}
        </span>
      </div>
    </Tooltip>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 relative z-10">
      {/* The Glassmorphism Card */}
      <div className="max-w-5xl mx-auto bg-[#0B0F19]/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
        <h2 className="text-4xl sm:text-5xl font-black text-center text-white mb-4">
          Technical Capabilities
        </h2>
        <p className="text-center text-white/40 max-w-xl mx-auto mb-16 text-sm leading-relaxed">
          Hover over the technologies below to explore my specific experience in software development, QA automation, and engineering.
        </p>

        <div className="flex flex-col gap-12">
          {categories.map((cat) => (
            <div key={cat.label}>
              {/* Category Divider */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex-1 h-px bg-white/10" />
                <span className="text-xs font-bold tracking-[0.2em] text-[#2ecc8a]">
                  {cat.label}
                </span>
                <div className="flex-1 h-px bg-white/10" />
              </div>

              {/* Icon Grid */}
              <div className="flex flex-wrap justify-center gap-8">
                {cat.items.map((item) => (
                  <TechBadge key={item.name} {...item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}