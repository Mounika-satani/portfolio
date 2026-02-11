import React from 'react';
import { Briefcase } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

export function ExperienceSection() {
  const experiences: ExperienceItem[] = [
    {
      title: 'Senior Developer',
      company: 'Codegnan IT Solutions',
      period: 'Jan 2026 – Present',
      description: [
        'Architected and developed Form Builder Module using React, Redux, and SurveyJS, taking full ownership of end-to-end implementation including database design, API integration, and UI development',
        'Built custom internal form platform replacing Google Forms, enabling secure surveys, feedback collection, and organizational data tracking with role-based access control',
        'Designed and implemented role-based access interfaces with backend integration, improving permission control and operational efficiency by 40%',
        'Developed Attendance Module with full-stack implementation, improving tracking accuracy and reducing manual effort by 35%',
        'Created reusable component library and RESTful APIs, reducing development time by 30% across teams',
        'Collaborated with product and backend teams using agile methodologies and GitHub workflows',
      ],
      technologies: ['React.js', 'Redux', 'SurveyJS', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    },
    {
      title: 'Senior Developer (Full-Stack)',
      company: 'MakeSkillled',
      period: 'Oct 2023 – Dec 2025',
      description: [
        'Developed end-to-end features for React-based hackathon platform, including frontend UI, backend APIs, and database integration',
        'Built scalable backend APIs for LMS using Node.js and Express.js with secure authentication, improving system reliability by 45%',
        'Designed and deployed cloud infrastructure using AWS services (S3, DynamoDB, EC2), reducing operational costs by 25%',
        'Delivered multiple full-stack MERN applications with focus on security, scalability, and maintainability',
        'Optimized database queries and API performance, reducing response time by 40%',
        'Implemented caching strategies improving query performance by 50%',
      ],
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'AWS S3', 'AWS EC2', 'AWS DynamoDB', 'AWS IAM'],
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience</h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Professional experience building scalable applications with measurable business impact and end-to-end ownership.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 md:pl-24 group">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 top-2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background group-hover:scale-125 transition-transform duration-200"></div>

                <div className="bg-card border border-border rounded-xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold mb-1">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <Briefcase className="w-4 h-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                    </div>
                    <span className="text-primary font-medium">{exp.period}</span>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-foreground/80">
                        <span className="text-primary mt-1.5 text-xs">●</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}