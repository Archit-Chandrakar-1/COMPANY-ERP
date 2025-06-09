import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const getPageTitle = (pathname: string): string => {
  const routes: Record<string, string> = {
    '/construction': 'Dashboard',
    '/construction/projects': 'My Projects',
    '/construction/clients': 'Client Management',
    '/construction/contractors': 'Contractors & Workers',
    '/construction/materials': 'Materials & Inventory',
    '/construction/equipment': 'Equipment Management',
    '/construction/quotations': 'Quotations & Billing',
    '/construction/permits': 'Permits & Compliance',
    '/construction/reports': 'Reports & Analytics',
    '/construction/access': 'Access Control',
    '/construction/settings': 'Admin & System Management',
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