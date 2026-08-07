interface TechBadgeProps {
  name: string;
  variant?: 'default' | 'accent';
}

export default function TechBadge({ name, variant = 'default' }: TechBadgeProps) {
  const variantStyles = {
    default:
      'bg-surface text-text-secondary border-border-subtle',
    accent:
      'bg-accent-muted text-accent border-accent/20',
  };

  return (
    <span
      className={`
        inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-md border
        transition-colors duration-200
        ${variantStyles[variant]}
      `}
    >
      {name}
    </span>
  );
}
