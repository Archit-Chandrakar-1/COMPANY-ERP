import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const getPageTitle = (pathname: string): string => {
  const routes: Record<string, string> = {
    '/': 'Dashboard',
    '/projects': 'Project Management',
    '/clients': 'Client Management',
    '/contractors': 'Contractors & Workers',
    '/materials': 'Materials & Inventory',
    '/equipment': 'Equipment Management',
    '/quotations': 'Quotations & Billing',
    '/permits': 'Permits & Compliance',
    '/reports': 'Reports & Analytics',
    '/access': 'Access Control',
    '/settings': 'Admin & System Management',
    
  };
  
  return routes[pathname] || 'GharKaSathi Admin';
};

const AppLayout = () => {
  const location = useLocation();
  const title = getPageTitle(location.pathname);
  
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title={title} />
        
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;