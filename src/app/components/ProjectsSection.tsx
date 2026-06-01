import React from 'react';
import { ProjectCard } from './ProjectCard';

export function ProjectsSection() {
  const projects = [
    {
      title: 'THELAUNDRYGUYZ',
      year: 'July 2025 - Present',
      problem: 'A laundry management platform requiring real-time synchronization between web and mobile interfaces for order tracking and management.',
      solution: 'Built the core frontend using React and React Native with a unified Node.js backend. Managed PostgreSQL operations to ensure data integrity and real-time CRUD synchronicity.',
      tech: ['React Native', 'React.js', 'Node.js', 'PostgreSQL', 'Express.js'],
      outcome: 'Delivered a production-ready application with full frontend-backend synchronization, contributing to its launch on the Google Play Store.',
      link: 'https://play.google.com/store/apps/details?id=com.thelaundryguyz.app&pcampaignid=web_share',
    },
    {
      title: 'Greensip – Waste Management',
      year: 'July 2025 - Present',
      problem: 'Scaling a government-level smart waste management system to handle barcode-based rewards and real-time user interaction updates.',
      solution: 'Developed cross-platform mobile interfaces in React Native. Implemented a barcode rewards system and integrated real-time Firebase Authentication flows.',
      tech: ['React Native', 'React.js', 'Node.js', 'PostgreSQL', 'Firebase'],
      outcome: 'Contributed to a government-scale application, enhancing user engagement through rewards and ensuring high availability for user interactions.',
      link: 'https://play.google.com/store/apps/details?id=com.greensip.app',
    },
    {
      title: 'LEADITOAI (Full-Stack Platform)',
      year: 'July 2025 - Present',
      problem: 'Need for a seamless lead generation platform that handles authentication, lead management, and payments for a large user base.',
      solution: 'Developed a full-stack platform using React.js and React Native. Built RESTful APIs with Node.js and Express.js for complex workflows. Implemented Firebase OTP and JWT for secure access.',
      tech: ['React Native', 'React.js', 'Node.js', 'PostgreSQL', 'Firebase', 'Razorpay'],
      outcome: 'Successfully deployed to Google Play Store. Secured user login with OTP and enabled smooth online payment processing via Razorpay.',
      link: 'https://play.google.com/store/apps/details?id=com.leaditoai.app',
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