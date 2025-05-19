import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import { Users, ChevronRight } from 'lucide-react';
import Badge from '../ui/Badge';

const clients = [
  {
    id: 1,
    name: 'Rahul Sharma',
    project: 'Green Valley Residences',
    date: '2025-06-15',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Priya Patel',
    project: 'Sunset Apartments',
    date: '2025-06-12',
    status: 'New',
  },
  {
    id: 3,
    name: 'Amit Singh',
    project: 'Metro City Mall',
    date: '2025-06-10',
    status: 'Pending',
  },
  {
    id: 4,
    name: 'Neha Gupta',
    project: 'Riverfront Villas',
    date: '2025-06-08',
    status: 'Active',
  },
];

const clientStatusColors: Record<string, 'default' | 'success' | 'warning' | 'error'> = {
  'Active': 'success',
  'New': 'default',
  'Pending': 'warning',
  'Inactive': 'error',
};

const RecentClients = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Users size={18} className="text-primary" />
          Recent Clients
        </CardTitle>
        <button className="text-sm text-primary flex items-center hover:underline">
          View all <ChevronRight size={16} />
        </button>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left font-medium text-secondary text-sm pb-2">Name</th>
                <th className="text-left font-medium text-secondary text-sm pb-2">Project</th>
                <th className="text-left font-medium text-secondary text-sm pb-2">Added</th>
                <th className="text-left font-medium text-secondary text-sm pb-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr key={client.id} className="border-t border-border">
                  <td className="py-2.5">{client.name}</td>
                  <td className="py-2.5 text-sm">{client.project}</td>
                  <td className="py-2.5 text-sm text-secondary">
                    {new Date(client.date).toLocaleDateString('en-IN')}
                  </td>
                  <td className="py-2.5">
                    <Badge variant={clientStatusColors[client.status]}>{client.status}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentClients;