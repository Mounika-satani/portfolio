import React from 'react';
import { Button } from './Button';
import { Github, Linkedin, Mail, ArrowDown, Download, Phone } from 'lucide-react';

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20"></div>

      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="z-10 space-y-8">
            <div>
              <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6 animate-pulse">
                Available for new opportunities
              </span>
            </div>

            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
                S V Mounika
              </h1>

              <h2 className="text-2xl md:text-3xl text-primary font-semibold mb-6">
                MERN Stack & React Native Developer
              </h2>

              <p className="text-lg md:text-xl text-foreground/80 max-w-xl leading-relaxed">
                Aspiring MERN Stack and React Native Developer with hands-on experience in building web and mobile applications
                using React.js, React Native, Node.js, and PostgreSQL. Passionate about developing cross-platform applications
                and continuously learning modern web technologies.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary" size="lg" onClick={() => scrollToSection('projects')}>
                View My Work
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollToSection('contact')}>
                Get In Touch
              </Button>
              <a href="/S V Mounika.pdf" download="S V Mounika.pdf">
                <Button variant="outline" size="lg">
                  <Download className="w-5 h-5" />
                  Download Resume
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <a
                href="https://www.linkedin.com/in/svmounika/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/Mounika-satani"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="mailto:satanivaishnavamounika@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="tel:+919912526055"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right Profile Image */}
          <div className="flex justify-center lg:justify-end items-center z-10">
            <div className="relative w-72 h-96 md:w-80 md:h-[450px] lg:w-96 lg:h-[500px]">
              {/* Decorative Background Elements */}
              <div className="absolute -inset-4 bg-primary/10 rounded-[2.5rem] blur-2xl animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-[2rem] transform rotate-3"></div>

              {/* Image Container */}
              <div className="relative h-full w-full rounded-[2rem] overflow-hidden border-2 border-primary/20 shadow-2xl shadow-primary/10 group">
                <img
                  src="/Mounika.jpeg"
                  alt="S V Mounika - MERN Stack & React Native Developer"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-card border border-border p-4 rounded-2xl shadow-xl hidden md:block animate-bounce">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                  <span className="text-sm font-medium">Ready to Work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce z-20"
        aria-label="Scroll to About section"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
}