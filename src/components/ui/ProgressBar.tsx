import React from 'react';

type ProgressBarProps = {
  value: number;
  max?: number;
  className?: string;
  label?: string;
  showValue?: boolean;
  variant?: 'default' | 'success' | 'warning' | 'error';
};

const ProgressBar = ({
  value,
  max = 100,
  className = '',
  label,
  showValue = false,
  variant = 'default',
}: ProgressBarProps) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  
  const variantClasses = {
    default: 'bg-primary',
    success: 'bg-success',
    warning: 'bg-warning',
    error: 'bg-error',
  };
  
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <div className="flex justify-between mb-1">
          <span className="text-sm text-foreground">{label}</span>
          {showValue && (
            <span className="text-sm text-secondary">
              {value}/{max}
            </span>
          )}
        </div>
      )}
      <div className="w-full bg-secondary/20 rounded-full h-2.5">
        <div
          className={`h-2.5 rounded-full ${variantClasses[variant]}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;