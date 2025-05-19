import React from 'react';

type BadgeProps = {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'outline';
  children: React.ReactNode;
  className?: string;
};

const Badge = ({ variant = 'default', children, className = '' }: BadgeProps) => {
  const baseClasses = 'badge';
  
  const variantClasses = {
    default: 'bg-primary/10 text-primary',
    success: 'badge-success',
    warning: 'badge-warning',
    error: 'badge-error',
    outline: 'badge-outline',
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;
  
  return <span className={classes}>{children}</span>;
};

export default Badge;