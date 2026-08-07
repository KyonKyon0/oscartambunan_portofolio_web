import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

const paddingStyles = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export default function GlassCard({
  children,
  className = '',
  hover = false,
  padding = 'md',
}: GlassCardProps) {
  return (
    <div
      className={`
        glass-panel rounded-xl ${paddingStyles[padding]}
        ${hover ? 'transition-all duration-300 hover:bg-surface-hover hover:border-border-hover' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
