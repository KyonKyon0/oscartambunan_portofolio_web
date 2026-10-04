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
        glass-panel rounded-2xl ${paddingStyles[padding]}
        ${hover ? 'transition-all duration-300 ease-out hover:border-white/20 hover:shadow-2xl hover:shadow-black/50 hover:-translate-y-1' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
