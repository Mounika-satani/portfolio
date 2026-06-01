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
      title: 'Full Stack Developer',
      company: 'Weiteredge Technology Pvt. Ltd',
      period: 'July 2025 – Current',
      description: [
        'Developed LEADITOAI, a full-stack lead generation platform using React.js and React Native, designing RESTful APIs for authentication and workflows',
        'Implemented secure Firebase OTP Authentication, JWT-based authorization, and Razorpay Payment Gateway integration for seamless user onboarding and payments',
        'Built THELAUNDRYGUYZ laundry management platform, managing PostgreSQL database operations with core CRUD functionalities and real-time synchronization',
        'Contributed to Greensip, a government-scale smart waste management application, enhancing cross-platform mobile interfaces and implementing barcode-based rewards',
        'Integrated REST APIs and Firebase Authentication for real-time data updates and user interactions across multiple production applications',
        'Successfully managed mobile application deployments to the Google Play Store, ensuring production-ready delivery and testing',
      ],
      technologies: ['React Native', 'React.js', 'Node.js', 'PostgreSQL', 'Firebase', 'Razorpay', 'JWT'],
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