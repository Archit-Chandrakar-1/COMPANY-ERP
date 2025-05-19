import React from 'react';
import { Hammer, Users, Package, Truck, IndianRupee, CalendarClock } from 'lucide-react';
import StatCard from '../components/dashboard/StatCard';
import ProjectsOverview from '../components/dashboard/ProjectsOverview';
import RecentClients from '../components/dashboard/RecentClients';
import MaterialsStatus from '../components/dashboard/MaterialsStatus';
import ProjectCalendar from '../components/dashboard/ProjectCalendar';

const Dashboard = () => {
  return (
    <div className="space-y-6 fade-in">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        <StatCard
          title="Total Projects"
          value="24"
          icon={<Hammer size={24} />}
          change={{ value: 12, trend: 'up' }}
          className="xl:col-span-1"
        />
        <StatCard
          title="Active Clients"
          value="37"
          icon={<Users size={24} />}
          change={{ value: 5, trend: 'up' }}
          className="xl:col-span-1"
        />
        <StatCard
          title="Material Stock Items"
          value="142"
          icon={<Package size={24} />}
          className="xl:col-span-1"
        />
        <StatCard
          title="Equipment Units"
          value="18"
          icon={<Truck size={24} />}
          change={{ value: 2, trend: 'up' }}
          className="xl:col-span-1"
        />
        <StatCard
          title="Revenue (This Month)"
          value="₹25.4L"
          icon={<IndianRupee size={24} />}
          change={{ value: 8, trend: 'up' }}
          className="xl:col-span-1"
        />
        <StatCard
          title="Upcoming Events"
          value="12"
          icon={<CalendarClock size={24} />}
          className="xl:col-span-1"
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ProjectsOverview />
        <RecentClients />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <MaterialsStatus />
        <ProjectCalendar />
      </div>
    </div>
  );
};

export default Dashboard;