import React from 'react';
import { Bell, User } from 'lucide-react';
import Button from './Button';

type PmDashboardHeaderProps = {
  title: string;
  userName?: string;
  notificationCount?: number;
  onAddClick?: () => void;
  addButtonText?: string;
  addButtonIcon?: React.ReactNode;
  className?: string;
};

const PmDashboardHeader = ({
  title,
  userName = 'Yash',
  notificationCount = 0,
  onAddClick,
  addButtonText = 'Add Item',
  addButtonIcon,
  className = ''
}: PmDashboardHeaderProps) => {
  return (
    <div className={`flex items-center justify-between mb-6 ${className}`}>
      <h1 className="text-2xl font-bold text-foreground">{title}</h1>
      
      <div className="flex items-center gap-4">
        {/* Notification Bell */}
        <button className="relative p-2 hover:bg-secondary/10 rounded-lg transition-colors">
          <Bell size={20} className="text-secondary" />
          {notificationCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {notificationCount > 99 ? '99+' : notificationCount}
            </span>
          )}
        </button>
        
        {/* User Profile */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-warning text-white rounded-full flex items-center justify-center font-medium text-sm">
            {userName.charAt(0).toUpperCase()}
          </div>
          <span className="text-sm font-medium text-foreground hidden sm:block">{userName}</span>
        </div>
        
        {/* Add Button */}
        {onAddClick && (
          <Button
            variant="primary"
            onClick={onAddClick}
            icon={addButtonIcon}
            className="bg-primary hover:bg-primary-light"
          >
            {addButtonText}
          </Button>
        )}
      </div>
    </div>
  );
};

export default PmDashboardHeader;