import React from 'react';
import { SkillBadge } from './SkillBadge';

export function SkillsSection() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React.js', 'Redux', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'SurveyJS'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'Authentication & Authorization'],
    },
    {
      category: 'Databases',
      skills: ['MongoDB', 'MySQL', 'DynamoDB'],
    },
    {
      category: 'Cloud & DevOps',
      skills: ['AWS S3', 'AWS EC2', 'AWS DynamoDB', 'Git', 'GitHub'],
    },
    {
      category: 'Programming Languages',
      skills: ['JavaScript', 'Python'],
    },
    {
      category: 'Core CS Fundamentals',
      skills: ['Data Structures', 'Algorithms', 'DBMS', 'Operating Systems', 'Computer Networks'],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Skills & Tech Stack</h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Technologies and tools I use to build reliable, scalable software solutions with measurable business impact.
          </p>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-6 font-semibold">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBadge key={skillIndex} name={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-card border border-border rounded-xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">2+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">40%</div>
              <div className="text-muted-foreground">Performance Improvements</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}