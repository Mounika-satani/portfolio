import React from 'react';
import { ArrowUpRight, Play } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  problem: string;
  solution: string;
  tech: string[];
  outcome: string;
  link?: string;
  year: string;
}

export function ProjectCard({
  title,
  problem,
  solution,
  tech,
  outcome,
  link,
  year
}: ProjectCardProps) {
  return (
    <div className="group relative bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-2xl font-semibold mb-2">{title}</h3>
          <span className="text-sm text-muted-foreground">{year}</span>
        </div>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group/link"
            title={link.includes('play.google.com') ? 'View on Play Store' : 'View Project'}
          >
            <span className="text-sm font-medium opacity-0 group-hover/link:opacity-100 transition-opacity">
              {link.includes('play.google.com') ? 'Play Store' : 'View'}
            </span>
            {link.includes('play.google.com') ? (
              <Play className="w-5 h-5 fill-current" />
            ) : (
              <ArrowUpRight className="w-5 h-5" />
            )}
          </a>
        )}
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Problem</h4>
          <p className="text-foreground/90">{problem}</p>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Solution</h4>
          <p className="text-foreground/90">{solution}</p>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {tech.map((item, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm border border-border"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Outcome</h4>
          <p className="text-foreground/90 font-medium">{outcome}</p>
        </div>
      </div>
    </div>
  );
}
