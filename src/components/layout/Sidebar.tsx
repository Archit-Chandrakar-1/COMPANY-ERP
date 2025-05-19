import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Hammer, 
  Users, 
  HardHat, 
  Package, 
  Truck, 
  FileText,
  ClipboardList, 
  BarChart2, 
  Lock, 
  Settings, 
  ChevronLeft, 
  ChevronRight, 
  Construction, 
  LogOut 
} from 'lucide-react';

type NavItemProps = {
  to: string;
  icon: React.ReactNode;
  label: string;
  collapsed: boolean;
};

const NavItem = ({ to, icon, label, collapsed }: NavItemProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => 
        `sidebar-item ${isActive ? 'active' : ''} ${collapsed ? 'justify-center' : ''}`
      }
    >
      <span className="text-xl">{icon}</span>
      {!collapsed && <span>{label}</span>}
    </NavLink>
  );
};

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };
  
  return (
    <aside 
      className={`bg-white border-r border-border h-screen flex flex-col transition-all duration-300 ${
        collapsed ? 'w-16' : 'w-64'
      }`}
    >
      <div className="p-4 border-b border-border flex items-center justify-between">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <Construction className="text-primary" size={24} />
            <h2 className="font-bold text-lg">GharKaSathi</h2>
          </div>
        )}
        {collapsed && <Construction className="text-primary mx-auto" size={24} />}
        <button
          onClick={toggleSidebar}
          className="p-1 rounded-md hover:bg-secondary/10 text-secondary"
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>
      
      <nav className="flex-1 py-4 px-2 space-y-1 overflow-y-auto">
        <NavItem to="/" icon={<LayoutDashboard size={20} />} label="Dashboard" collapsed={collapsed} />
        <NavItem to="/projects" icon={<Hammer size={20} />} label="Projects" collapsed={collapsed} />
        <NavItem to="/clients" icon={<Users size={20} />} label="Clients" collapsed={collapsed} />
        <NavItem to="/contractors" icon={<HardHat size={20} />} label="Contractors" collapsed={collapsed} />
        <NavItem to="/materials" icon={<Package size={20} />} label="Materials" collapsed={collapsed} />
        <NavItem to="/equipment" icon={<Truck size={20} />} label="Equipment" collapsed={collapsed} />
        <NavItem to="/quotations" icon={<FileText size={20} />} label="Quotations" collapsed={collapsed} />
        <NavItem to="/permits" icon={<ClipboardList size={20} />} label="Permits" collapsed={collapsed} />
        <NavItem to="/reports" icon={<BarChart2 size={20} />} label="Reports" collapsed={collapsed} />
        <NavItem to="/access" icon={<Lock size={20} />} label="Access Control" collapsed={collapsed} />
        <NavItem to="/settings" icon={<Settings size={20} />} label="Settings" collapsed={collapsed} />
      </nav>
      
      <div className="p-4 border-t border-border">
        <button className={`sidebar-item text-error ${collapsed ? 'justify-center' : ''}`}>
          <LogOut size={20} />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;