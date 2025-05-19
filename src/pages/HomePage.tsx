import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Construction,
  Users,
  Wrench,
  Home,
  Building2,
  Sofa,
  Package,
  Users2,
  CreditCard,
  Bell,
  Search,
  Settings,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const QuickStatCard = ({ icon, title, value, trend }: {
  icon: React.ReactNode;
  title: string;
  value: string;
  trend?: { type: 'up' | 'down'; value: string };
}) => (
  <div className="bg-white p-6 rounded-lg border border-border">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-secondary text-sm font-medium">{title}</p>
        <h4 className="text-2xl font-bold mt-2">{value}</h4>
        {trend && (
          <p className={`text-sm mt-2 ${trend.type === 'up' ? 'text-success' : 'text-error'}`}>
            {trend.type === 'up' ? '↑' : '↓'} {trend.value}
          </p>
        )}
      </div>
      <div className="p-3 bg-primary/10 rounded-lg">
        {icon}
      </div>
    </div>
  </div>
);

const MenuItem = ({ icon, title, description, onClick }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
}) => (
  <div
    onClick={onClick}
    className="flex items-start gap-4 p-4 hover:bg-primary/5 rounded-lg cursor-pointer group transition-colors"
  >
    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
      {icon}
    </div>
    <div>
      <h3 className="font-medium group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-secondary text-sm mt-1">{description}</p>
    </div>
  </div>
);

const SidebarItem = ({ icon, label, onClick, isActive }: {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  isActive?: boolean;
}) => (
  <div
    onClick={onClick}
    className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors ${
      isActive ? 'bg-primary/10 text-primary' : 'text-secondary hover:bg-secondary/10 hover:text-foreground'
    }`}
  >
    {icon}
    <span className="font-medium">{label}</span>
  </div>
);

const HomePage = () => {
  const navigate = useNavigate();
  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false);

  const quickStats = [
    {
      icon: <Users className="text-primary" size={24} />,
      title: "Total Customers",
      value: "2,543",
      trend: { type: 'up' as const, value: "12.5% this month" }
    },
    {
      icon: <Building2 className="text-primary" size={24} />,
      title: "Active Projects",
      value: "47",
      trend: { type: 'up' as const, value: "8.2% this month" }
    },
    {
      icon: <Package className="text-primary" size={24} />,
      title: "Inventory Items",
      value: "1,156"
    },
    {
      icon: <CreditCard className="text-primary" size={24} />,
      title: "Revenue",
      value: "₹4.2M",
      trend: { type: 'up' as const, value: "15.3% this month" }
    }
  ];

  const sidebarItems = [
    {
      icon: <Construction size={20} />,
      label: "Main Panel Navigation",
      path: "/main"
    },
    {
      icon: <Users size={20} />,
      label: "Customer Management",
      path: "/customers"
    },
    {
      icon: <Wrench size={20} />,
      label: "In-House Services",
      path: "/services"
    },
    {
      icon: <Home size={20} />,
      label: "Real Estate",
      path: "/real-estate"
    },
    {
      icon: <Building2 size={20} />,
      label: "Construction",
      path: "/construction"
    },
    {
      icon: <Sofa size={20} />,
      label: "Interior",
      path: "/interior"
    },
    {
      icon: <Package size={20} />,
      label: "Inventory & Assets",
      path: "/inventory"
    },
    {
      icon: <Users2 size={20} />,
      label: "Vendors",
      path: "/vendors"
    },
    {
      icon: <CreditCard size={20} />,
      label: "Payments & Refunds",
      path: "/payments"
    }
  ];

  const menuItems = [
    {
      icon: <Construction className="text-primary" size={24} />,
      title: "Main Panel Navigation",
      description: "Central hub for all system operations and quick access",
      path: "/main"
    },
    {
      icon: <Users className="text-primary" size={24} />,
      title: "Customer Management",
      description: "Manage customer relationships and interactions",
      path: "/customers"
    },
    {
      icon: <Wrench className="text-primary" size={24} />,
      title: "In-House Services",
      description: "Track and manage internal service operations",
      path: "/services"
    },
    {
      icon: <Home className="text-primary" size={24} />,
      title: "Real Estate",
      description: "Property listings and real estate operations",
      path: "/real-estate"
    },
    {
      icon: <Building2 className="text-primary" size={24} />,
      title: "Construction",
      description: "Manage construction projects and resources",
      path: "/construction"
    },
    {
      icon: <Sofa className="text-primary" size={24} />,
      title: "Interior",
      description: "Interior design projects and management",
      path: "/interior"
    },
    {
      icon: <Package className="text-primary" size={24} />,
      title: "Inventory & Assets",
      description: "Track and manage company assets and inventory",
      path: "/inventory"
    },
    {
      icon: <Users2 className="text-primary" size={24} />,
      title: "Vendors",
      description: "Vendor relationship and contract management",
      path: "/vendors"
    },
    {
      icon: <CreditCard className="text-primary" size={24} />,
      title: "Payments & Refunds",
      description: "Handle financial transactions and refunds",
      path: "/payments"
    }
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className={`bg-white border-r border-border transition-all duration-300 ${
        sidebarCollapsed ? 'w-20' : 'w-64'
      }`}>
        <div className="p-4 border-b border-border flex items-center justify-between">
          {!sidebarCollapsed && (
            <div className="flex items-center gap-2">
              <Construction className="text-primary" size={24} />
              <span className="font-bold">GharKaSathi</span>
            </div>
          )}
          {sidebarCollapsed && <Construction className="text-primary mx-auto" size={24} />}
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="p-1 rounded-md hover:bg-secondary/10 text-secondary"
          >
            {sidebarCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </button>
        </div>
        <div className="py-4">
          {sidebarItems.map((item, index) => (
            <SidebarItem
              key={index}
              icon={item.icon}
              label={!sidebarCollapsed ? item.label : ''}
              onClick={() => navigate(item.path)}
            />
          ))}
        </div>
      </aside>

      <div className="flex-1">
        {/* Header */}
        <header className="bg-white border-b border-border">
          <div className="max-w-[1600px] mx-auto px-6">
            <div className="flex justify-between h-16">
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-2">
                  <Construction className="text-primary h-8 w-8" />
                  <span className="text-xl font-bold">GharKaSathi</span>
                </div>
                
                <div className="relative hidden md:block">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary" size={18} />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="pl-10 pr-4 py-2 rounded-lg border border-border w-64 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <button className="p-2 hover:bg-primary/5 rounded-lg relative">
                  <Bell className="text-secondary" size={20} />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
                </button>
                <button className="p-2 hover:bg-primary/5 rounded-lg">
                  <HelpCircle className="text-secondary" size={20} />
                </button>
                <button className="p-2 hover:bg-primary/5 rounded-lg">
                  <Settings className="text-secondary" size={20} />
                </button>
                <div className="flex items-center gap-3 ml-4 pl-4 border-l border-border">
                  <div className="text-right hidden sm:block">
                    <p className="font-medium">Admin User</p>
                    <p className="text-sm text-secondary">admin@gharkasathi.com</p>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="text-primary" size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-[1600px] mx-auto px-6 py-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold">Welcome back, Admin</h1>
            <p className="text-secondary mt-1">Here's what's happening with your business today.</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {quickStats.map((stat, index) => (
              <QuickStatCard key={index} {...stat} />
            ))}
          </div>

          {/* Menu Items */}
          <div className="bg-white rounded-xl border border-border">
            <div className="p-6 border-b border-border">
              <h2 className="text-lg font-semibold">Dashboards</h2>
              <p className="text-secondary text-sm mt-1">Access different sections of your business</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
              {menuItems.map((item, index) => (
                <MenuItem
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  onClick={() => navigate(item.path)}
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;