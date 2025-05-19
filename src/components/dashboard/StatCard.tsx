import React from 'react';
import { Card, CardContent } from '../ui/Card';

type StatCardProps = {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  change?: {
    value: number;
    trend: 'up' | 'down' | 'neutral';
  };
  className?: string;
};

const StatCard = ({ title, value, icon, change, className = '' }: StatCardProps) => {
  return (
    <Card className={`${className}`}>
      <CardContent className="p-0">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-secondary font-medium">{title}</p>
            <h3 className="text-2xl font-bold mt-1">{value}</h3>
            
            {change && (
              <div className="flex items-center mt-1">
                <span
                  className={`text-xs ${
                    change.trend === 'up'
                      ? 'text-success'
                      : change.trend === 'down'
                      ? 'text-error'
                      : 'text-secondary'
                  }`}
                >
                  {change.trend === 'up' ? '↑' : change.trend === 'down' ? '↓' : '–'}{' '}
                  {change.value}%
                </span>
                <span className="text-xs text-secondary ml-1">from last month</span>
              </div>
            )}
          </div>
          
          <div className="p-3 rounded-lg bg-primary/10 text-primary">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;