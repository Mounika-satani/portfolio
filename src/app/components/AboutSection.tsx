import React from 'react';
import { Code2, Cloud, Database } from 'lucide-react';

export function AboutSection() {
  const highlights = [
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description: 'Expert in building end-to-end applications using MERN stack. Architected Form Builder Module and LMS platforms with React, Redux, Node.js, and MongoDB. Reduced development time by 30% through reusable component libraries.',
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Hands-on experience deploying and managing production applications on AWS (S3, DynamoDB, EC2, IAM). Reduced operational costs by 25% through optimized cloud architecture and infrastructure design.',
    },
    {
      icon: Database,
      title: 'Performance Optimization',
      description: 'Proven track record of optimizing database queries and API performance. Achieved 40% reduction in response times and 50% improvement in query performance through strategic caching and optimization.',
    },
  ];

  return (
    <section id="about" className="py-24 px-6 lg:px-12 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-8"></div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
              <p>
                I'm a <span className="text-primary font-semibold">Senior Full-Stack Developer</span> with 2 years of
                experience designing and building scalable web applications. I specialize in taking full ownership of
                product features from architecture to deployment, delivering measurable business impact at every stage.
              </p>
              <p>
                Currently at <span className="text-foreground font-semibold">Codegnan IT Solutions</span>, I architected
                and developed the complete Form Builder Module using React, Redux, and SurveyJS, replacing Google Forms
                with a custom internal platform. Previously at <span className="text-foreground font-semibold">MakeSkillled</span>,
                I built scalable backend APIs for an LMS platform and developed a full-stack hackathon platform serving real users.
              </p>
              <p>
                My approach focuses on <span className="text-primary font-semibold">clean architecture, performance optimization,
                  and delivering results</span>. I've consistently achieved significant improvements: 40% better operational efficiency,
                35% reduction in manual effort, and 30% faster development cycles through reusable components and best practices.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Technical Expertise</h3>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">▸</span>
                    <span>End-to-end product ownership from design to deployment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">▸</span>
                    <span>Scalable backend systems with Node.js and Express</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">▸</span>
                    <span>Modern frontend development with React and Redux</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">▸</span>
                    <span>Cloud deployment and infrastructure on AWS</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">▸</span>
                    <span>Database design and performance optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">▸</span>
                    <span>Delivering measurable business impact and ROI</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}