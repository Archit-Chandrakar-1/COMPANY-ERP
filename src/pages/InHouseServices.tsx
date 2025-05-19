import React, { useState } from 'react';
import { Search, CheckCircle, Trash2 } from 'lucide-react';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';

type Service = {
  serviceName: string;
  email: string;
  mobile: string;
  serviceType: string;
  location: string;
  date: string;
  time: string;
  status: 'Completed' | 'Pending';
};

// Generate 200 mock services with different service types
const serviceTypes = [
  'Electrical Service',
  'Cleaning Service',
  'Plumbing Services',
  'Painting Services',
  'Carpentry Service',
  'Electronic Appliances',
  'PestControl & Disinfection',
  'Renovation Service',
  'Packers Movers',
  'Construction Service',
  'Interior Designing',
  'Vastu Consultation',
  'Gardening Services',
];

const generateMockServices = (count: number): Service[] => {
  const services: Service[] = [];
  const locations = [
    'Ring Road No. 2 Gondawara Raipur',
    'Civil Lines, Raipur',
    'Shankar Nagar, Raipur',
    'Devendra Nagar, Raipur',
    'Tatibandh, Raipur',
  ];

  for (let i = 0; i < count; i++) {
    const serviceType = serviceTypes[Math.floor(Math.random() * serviceTypes.length)];
    const date = new Date();
    date.setDate(date.getDate() + Math.floor(Math.random() * 30)); // Random date within next 30 days

    services.push({
      serviceName: `Customer ${i + 1}`,
      email: `customer${i + 1}@example.com`,
      mobile: `${Math.floor(Math.random() * 9000000000) + 1000000000}`,
      serviceType,
      location: locations[Math.floor(Math.random() * locations.length)],
      date: date.toISOString(),
      time: `${Math.floor(Math.random() * 12) + 1}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')} ${Math.random() < 0.5 ? 'AM' : 'PM'}`,
      status: Math.random() < 0.3 ? 'Completed' : 'Pending',
    });
  }

  return services;
};

const mockServices = generateMockServices(200);

const InHouseServices = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [services, setServices] = useState(mockServices);
  const [activeFilter, setActiveFilter] = useState('View All');

  const filteredServices = services.filter((service) => {
    const matchesSearch = Object.values(service).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    const matchesFilter = activeFilter === 'View All' || service.serviceType === activeFilter;
    
    return matchesSearch && matchesFilter;
  });

  const handleMarkAsCompleted = (index: number) => {
    const updatedServices = [...services];
    const serviceIndex = services.findIndex((s) => s === filteredServices[index]);
    updatedServices[serviceIndex].status = 'Completed';
    setServices(updatedServices);
  };

  const handleDelete = (index: number) => {
    const serviceToDelete = filteredServices[index];
    const updatedServices = services.filter((s) => s !== serviceToDelete);
    setServices(updatedServices);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="p-6 max-w-[1600px] mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-4">Booked Service List</h1>
        
        {/* Service Type Filters */}
        <div className="flex flex-wrap gap-2 mb-4">
          <Button
            variant={activeFilter === 'View All' ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setActiveFilter('View All')}
          >
            View All
          </Button>
          {serviceTypes.map((type) => (
            <Button
              key={type}
              variant={activeFilter === type ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setActiveFilter(type)}
            >
              {type}
            </Button>
          ))}
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary" size={20} />
          <input
            type="text"
            placeholder="Search services..."
            className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="bg-white rounded-lg border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-secondary/5">
                <th className="text-left py-3 px-4 font-medium">Service Name</th>
                <th className="text-left py-3 px-4 font-medium">Email</th>
                <th className="text-left py-3 px-4 font-medium">Mobile</th>
                <th className="text-left py-3 px-4 font-medium">Service Type</th>
                <th className="text-left py-3 px-4 font-medium">Location</th>
                <th className="text-left py-3 px-4 font-medium">Date</th>
                <th className="text-left py-3 px-4 font-medium">Time</th>
                <th className="text-left py-3 px-4 font-medium">Status</th>
                <th className="text-left py-3 px-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredServices.map((service, index) => (
                <tr key={index} className="border-t border-border hover:bg-secondary/5">
                  <td className="py-3 px-4">{service.serviceName}</td>
                  <td className="py-3 px-4">{service.email}</td>
                  <td className="py-3 px-4">{service.mobile}</td>
                  <td className="py-3 px-4">{service.serviceType}</td>
                  <td className="py-3 px-4">{service.location}</td>
                  <td className="py-3 px-4">{formatDate(service.date)}</td>
                  <td className="py-3 px-4">{service.time}</td>
                  <td className="py-3 px-4">
                    <Badge
                      variant={service.status === 'Completed' ? 'success' : 'warning'}
                    >
                      {service.status}
                    </Badge>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex gap-2">
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => handleMarkAsCompleted(index)}
                        disabled={service.status === 'Completed'}
                        icon={<CheckCircle size={16} />}
                      >
                        Mark as Completed
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(index)}
                        icon={<Trash2 size={16} />}
                      >
                        Delete
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InHouseServices;