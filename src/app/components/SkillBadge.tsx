import React from 'react';

interface SkillBadgeProps {
  name: string;
  category?: string;
}

export function SkillBadge({ name, category }: SkillBadgeProps) {
  return (
    <div className="group relative">
      <div className="px-4 py-2 bg-secondary border border-border rounded-lg hover:border-primary/50 transition-all duration-200 hover:scale-105">
        <span className="text-foreground font-medium">{name}</span>
      </div>
      {category && (
        <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-primary text-primary-foreground text-xs rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
          {category}
        </span>
      )}
    </div>
  );
}
