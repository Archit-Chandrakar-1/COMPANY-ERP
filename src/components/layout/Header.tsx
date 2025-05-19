import React from 'react';
import { Bell, Search, UserCircle, Construction } from 'lucide-react';
import { Link } from 'react-router-dom';

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  return (
    <header className="bg-white border-b border-border h-16 px-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Construction className="text-primary" size={24} />
          <span className="font-bold text-lg">GharKaSathi</span>
        </Link>
        <span className="text-secondary">/</span>
        <h1 className="text-xl font-semibold">{title}</h1>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary" size={18} />
          <input
            type="text"
            placeholder="Search..."
            className="input pl-10 py-1 h-9 w-64"
          />
        </div>
        
        <div className="flex items-center gap-4">
          <button className="p-1.5 rounded-md hover:bg-secondary/10 relative">
            <Bell size={20} className="text-secondary" />
            <span className="absolute top-0 right-0 h-2 w-2 bg-error rounded-full"></span>
          </button>
          
          <div className="flex items-center gap-2">
            <UserCircle size={32} className="text-primary" />
            <div className="hidden md:block">
              <p className="text-sm font-medium leading-none">Admin User</p>
              <p className="text-xs text-secondary">admin@gharkasathi.com</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;