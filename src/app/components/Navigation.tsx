import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : ''
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl font-semibold hover:text-primary transition-colors"
          >
            KR
          </button>

          <div className="flex items-center gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              Experience
            </button>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/k-revanth-reddy"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-foreground/70 hover:text-primary transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/revanth-reddy-64739023b"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-foreground/70 hover:text-primary transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:kaparevanthkumarreddy@gmail.com"
                className="p-2 text-foreground/70 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-5 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}