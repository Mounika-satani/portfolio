import React from 'react';
import { Code2, Cloud, Database } from 'lucide-react';

export function AboutSection() {
  const highlights = [
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description: 'Experienced in developing web and mobile applications using MERN stack and React Native. Built platforms like LEADITOAI and THELAUNDRYGUYZ with seamless backend integration.',
    },
    {
      icon: Cloud,
      title: 'Backend & APIs',
      description: 'Skilled in designing RESTful APIs using Node.js and Express.js with PostgreSQL database management. Implemented secure authentication and payment gateway integrations.',
    },
    {
      icon: Database,
      title: 'Cross-Platform Apps',
      description: 'Hands-on experience in building and deploying React Native applications to the Google Play Store, handling features like Firebase OTP and real-time data updates.',
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
                I'm a <span className="text-primary font-semibold">MERN Stack and React Native Developer</span> with
                hands-on experience in building scalable web and mobile applications. I specialize in backend integration,
                RESTful API design, and delivering high-quality cross-platform user experiences.
              </p>
              <p>
                Currently at <span className="text-foreground font-semibold">Weiteredge Technology Pvt. Ltd</span>, I've
                contributed to government-scale projects like Greensip and developed comprehensive lead management and
                laundry platforms. I have a strong foundation in <span className="text-foreground font-semibold">B.Tech
                  Computer Science and Engineering</span> with an 8.55 CGPA.
              </p>
              <p>
                My focus is on <span className="text-primary font-semibold">seamless synchronization, secure authentication,
                  and performance optimization</span>. I'm passionate about continuous learning and implementing modern
                technologies to solve real-world problems effectively.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <div className="bg-card border border-border rounded-xl p-4 mb-6">
                  <h4 className="font-bold text-primary">Bachelor of Technology (B.Tech)</h4>
                  <p className="text-sm text-muted-foreground mb-1">CSE | 8.55 CGPA</p>
                  <p className="text-foreground/80">Brindavan Institute of Technology and Science</p>
                  <p className="text-sm text-muted-foreground">2020 - 2024 | Kurnool</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Achievements</h3>
                    <div className="bg-card border border-border rounded-xl p-4">
                      <p className="font-bold text-primary">Winner</p>
                      <p className="text-sm">SAMSKRUTHI-2023 Ideathon</p>
                      <p className="text-xs text-muted-foreground mt-1">First place for innovative solution at Guntur.</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Certificates</h3>
                    <div className="bg-card border border-border rounded-xl p-4 text-center h-full flex flex-col justify-center">
                      <p className="font-bold text-primary text-sm">Python 101 for Data Science</p>
                      <p className="text-xs text-muted-foreground mt-1">IBM Cognitive Class</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4">Technical Expertise</h3>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">▸</span>
                    <span>Cross-platform mobile apps with React Native</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">▸</span>
                    <span>Full-stack web applications with MERN stack</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">▸</span>
                    <span>RESTful API development with Node.js & PostgreSQL</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">▸</span>
                    <span>Firebase and JWT Authentication integration</span>
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