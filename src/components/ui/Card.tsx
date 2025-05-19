import React from 'react';

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export const Card = ({ children, className = '' }: CardProps) => {
  return <div className={`card ${className}`}>{children}</div>;
};

export const CardHeader = ({ children, className = '' }: CardProps) => {
  return <div className={`mb-4 ${className}`}>{children}</div>;
};

export const CardTitle = ({ children, className = '' }: CardProps) => {
  return <h3 className={`font-semibold text-xl ${className}`}>{children}</h3>;
};

export const CardDescription = ({ children, className = '' }: CardProps) => {
  return <p className={`text-secondary text-sm ${className}`}>{children}</p>;
};

export const CardContent = ({ children, className = '' }: CardProps) => {
  return <div className={className}>{children}</div>;
};

export const CardFooter = ({ children, className = '' }: CardProps) => {
  return <div className={`mt-4 flex items-center ${className}`}>{children}</div>;
};