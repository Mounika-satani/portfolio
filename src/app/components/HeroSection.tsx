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
                Kapa Revanth<br />Kumar Reddy
              </h1>

              <h2 className="text-2xl md:text-3xl text-primary font-semibold mb-6">
                Senior Full-Stack Developer
              </h2>

              <p className="text-lg md:text-xl text-foreground/80 max-w-xl leading-relaxed">
                Senior Full-Stack Developer with 2 years of experience designing and building scalable web applications
                using React, Node.js, MongoDB, and AWS. Proven ability to own end-to-end product features from architecture
                to deployment.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary" size="lg" onClick={() => scrollToSection('projects')}>
                View My Work
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollToSection('contact')}>
                Get In Touch
              </Button>
              <a href="/Revanth_Reddy_SFSD.pdf" download="Revanth_Reddy_Resume.pdf">
                <Button variant="outline" size="lg">
                  <Download className="w-5 h-5" />
                  Download Resume
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <a
                href="https://linkedin.com/in/revanth-reddy-64739023b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/k-revanth-reddy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="mailto:kaparevanthkumarreddy@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="tel:+919542269621"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right Profile Image - Full Height Portrait */}
          <div className="relative lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-1/2 flex items-end justify-end">
            {/* Diagonal edge overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent lg:clip-diagonal z-10 pointer-events-none"></div>

            {/* Profile Image Container */}
            <div className="relative w-full h-[600px] lg:h-full">
              {/* Gradient fade at edges */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent z-10 pointer-events-none"></div>
              {/* Right edge fade to remove visible border */}
              <div className="absolute inset-0 bg-gradient-to-l from-background via-transparent to-transparent z-10 pointer-events-none"></div>

              {/* Actual Image */}
              <img
                src="/profile.png"
                alt="Kapa Revanth Kumar Reddy - Senior Full-Stack Developer"
                className="absolute bottom-0 right-0 h-full w-auto object-cover object-center"
              />
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