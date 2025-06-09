import React from 'react';

type Tab = {
  id: string;
  label: string;
  count?: number;
  isActive?: boolean;
};

type PmTabNavigationProps = {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  className?: string;
};

const PmTabNavigation = ({ tabs, activeTab, onTabChange, className = '' }: PmTabNavigationProps) => {
  return (
    <div className={`flex items-center gap-1 border-b border-border bg-white ${className}`}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`px-4 py-3 text-sm font-medium transition-colors relative ${
            tab.id === activeTab
              ? 'text-primary border-b-2 border-primary bg-primary/5'
              : 'text-secondary hover:text-foreground hover:bg-secondary/5'
          }`}
        >
          <span className="flex items-center gap-2">
            {tab.label}
            {tab.count !== undefined && (
              <span
                className={`px-2 py-0.5 text-xs rounded-full ${
                  tab.id === activeTab
                    ? 'bg-primary text-white'
                    : 'bg-secondary/20 text-secondary'
                }`}
              >
                {tab.count}
              </span>
            )}
          </span>
        </button>
      ))}
    </div>
  );
};

export default PmTabNavigation;