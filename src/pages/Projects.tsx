import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Hammer, Plus, Filter, SlidersHorizontal, Search } from 'lucide-react';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import ProgressBar from '../components/ui/ProgressBar';

type Project = {
  id: number;
  name: string;
  type: 'Residential' | 'Commercial' | 'Industrial';
  client: string;
  manager: string;
  start_date: string;
  deadline: string;
  status: 'Planning' | 'Foundation' | 'Framing' | 'Electrical' | 'Plumbing' | 'Completion' | 'On Hold';
  progress: number;
  budget: number;
};

const projectData: Project[] = [
  {
    id: 1,
    name: 'Green Valley Residences',
    type: 'Residential',
    client: 'Rahul Sharma',
    manager: 'Vikram Mehta',
    start_date: '2025-01-15',
    deadline: '2025-12-30',
    status: 'Framing',
    progress: 45,
    budget: 7500000,
  },
  {
    id: 2,
    name: 'Metro City Mall',
    type: 'Commercial',
    client: 'Metropolis Developers',
    manager: 'Aarti Singh',
    start_date: '2024-11-10',
    deadline: '2026-03-15',
    status: 'Foundation',
    progress: 25,
    budget: 120000000,
  },
  {
    id: 3,
    name: 'Sunset Apartments',
    type: 'Residential',
    client: 'Priya Patel',
    manager: 'Rajan Kapoor',
    start_date: '2025-03-01',
    deadline: '2025-09-30',
    status: 'Planning',
    progress: 10,
    budget: 5000000,
  },
  {
    id: 4,
    name: 'Industrial Park Warehouse',
    type: 'Industrial',
    client: 'TechShip Logistics',
    manager: 'Ajay Nair',
    start_date: '2025-02-15',
    deadline: '2025-08-20',
    status: 'On Hold',
    progress: 15,
    budget: 18000000,
  },
  {
    id: 5,
    name: 'Golden Towers',
    type: 'Residential',
    client: 'Anika Shah',
    manager: 'Vikram Mehta',
    start_date: '2024-09-10',
    deadline: '2025-11-28',
    status: 'Electrical',
    progress: 65,
    budget: 9000000,
  },
  {
    id: 6,
    name: 'Riverside Shopping Complex',
    type: 'Commercial',
    client: 'River Ventures Ltd',
    manager: 'Deepak Sharma',
    start_date: '2024-12-05',
    deadline: '2026-01-10',
    status: 'Framing',
    progress: 40,
    budget: 85000000,
  },
];

const statusColors: Record<string, 'default' | 'success' | 'warning' | 'error'> = {
  'Planning': 'default',
  'Foundation': 'default',
  'Framing': 'default',
  'Electrical': 'success',
  'Plumbing': 'success',
  'Completion': 'success',
  'On Hold': 'error',
};

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<'all' | 'Residential' | 'Commercial' | 'Industrial'>('all');
  
  const filteredProjects = projectData.filter((project) => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.client.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || project.type === filter;
    
    return matchesSearch && matchesFilter;
  });
  
  return (
    <div className="space-y-6 fade-in">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Hammer className="text-primary" size={24} />
            Project Management
          </h1>
        </div>
        <Button variant="primary" icon={<Plus size={16} />}>
          Add New Project
        </Button>
      </div>
      
      <Card>
        <CardHeader className="pb-0">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary" size={16} />
              <input
                type="text"
                placeholder="Search projects or clients..."
                className="input pl-10 py-2 w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <Filter size={16} className="text-secondary" />
                <select
                  className="input py-2 pr-8"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value as any)}
                >
                  <option value="all">All Types</option>
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Industrial">Industrial</option>
                </select>
              </div>
              
              <Button variant="outline" icon={<SlidersHorizontal size={16} />}>
                More Filters
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full mt-4">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 font-medium">Project Name</th>
                  <th className="text-left py-3 font-medium">Type</th>
                  <th className="text-left py-3 font-medium">Client</th>
                  <th className="text-left py-3 font-medium">Status</th>
                  <th className="text-left py-3 font-medium">Progress</th>
                  <th className="text-left py-3 font-medium">Budget</th>
                  <th className="text-right py-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredProjects.map((project) => (
                  <tr key={project.id} className="border-b border-border hover:bg-secondary/5">
                    <td className="py-3">
                      <div className="font-medium">{project.name}</div>
                      <div className="text-xs text-secondary mt-1">
                        Due: {new Date(project.deadline).toLocaleDateString('en-IN')}
                      </div>
                    </td>
                    <td className="py-3">{project.type}</td>
                    <td className="py-3">{project.client}</td>
                    <td className="py-3">
                      <Badge variant={statusColors[project.status]}>
                        {project.status}
                      </Badge>
                    </td>
                    <td className="py-3 pr-3">
                      <ProgressBar 
                        value={project.progress} 
                        variant={project.status === 'On Hold' ? 'error' : project.progress > 60 ? 'success' : 'default'}
                        showValue 
                      />
                    </td>
                    <td className="py-3">{formatCurrency(project.budget)}</td>
                    <td className="py-3 text-right">
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Projects;