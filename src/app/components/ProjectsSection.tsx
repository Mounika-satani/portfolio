import React from 'react';
import { ProjectCard } from './ProjectCard';

export function ProjectsSection() {
  const projects = [
    {
      title: 'Form Builder Module (Full-Stack)',
      year: 'Jan 2026 - Present',
      problem: 'Organization needed to replace Google Forms with a custom internal platform for secure surveys, feedback collection, and organizational data tracking with role-based access control.',
      solution: 'Architected and developed complete Form Builder Module using React, Redux, and SurveyJS, taking full ownership of end-to-end implementation including database design, API integration, and UI development. Built dynamic form creation system supporting conditional logic, MongoDB aggregation pipelines for analytics, and organization-wide tracking and reporting.',
      tech: ['React.js', 'Redux', 'SurveyJS', 'Node.js', 'Express.js', 'MongoDB'],
      outcome: 'Improved permission control and operational efficiency by 40%. Enabled workflow automation and data-driven insights across the organization. Successfully replaced Google Forms with enterprise-grade internal solution.',
    },
    {
      title: 'Online Hackathon Platform',
      year: '2023 - 2024',
      problem: 'Need for a comprehensive platform to host and manage online hackathons with real-time collaboration, submission tracking, and evaluation workflows.',
      solution: 'Developed scalable full-stack platform supporting user registration, team management, project submissions, and event workflows. Implemented end-to-end features including frontend UI, backend APIs, and database integration. Built secure authentication, file upload handling with AWS S3, and real-time status updates.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'AWS S3'],
      outcome: 'Successfully deployed platform handling multiple concurrent hackathons. Improved user engagement with intuitive UI and real-time updates. Platform serves real users with high reliability.',
    },
    {
      title: 'LMS Backend Platform',
      year: '2023 - Present',
      problem: 'Learning management system needed scalable backend infrastructure to support growing user base and complex course management features with secure authentication.',
      solution: 'Built scalable backend APIs using Node.js and Express with secure authentication. Designed RESTful APIs for course management, user authentication, and progress tracking with JWT-based security. Optimized database operations and implemented caching strategies.',
      tech: ['Node.js', 'Express.js', 'MongoDB', 'AWS S3', 'AWS EC2', 'AWS DynamoDB'],
      outcome: 'Improved system reliability by 45%. Reduced operational costs by 25% through optimized cloud infrastructure. Achieved 50% improvement in query performance and 40% reduction in API response times.',
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 lg:px-12 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Real-world projects demonstrating full-stack development, end-to-end ownership, and measurable business impact.
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}