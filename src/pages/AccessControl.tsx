import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Lock, Plus, Users, Search, Shield } from 'lucide-react';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';

type User = {
  id: number;
  name: string;
  email: string;
  role: 'Admin' | 'Project Manager' | 'Engineer' | 'Accountant' | 'Supervisor' | 'Contractor';
  assignedProjects: number;
  status: 'Active' | 'Inactive' | 'Pending';
  lastActive: string;
};

const userData: User[] = [
  {
    id: 1,
    name: 'Vikram Mehta',
    email: 'vikram@gharkasathi.com',
    role: 'Project Manager',
    assignedProjects: 3,
    status: 'Active',
    lastActive: '2025-06-14T14:30:00',
  },
  {
    id: 2,
    name: 'Aarti Singh',
    email: 'aarti@gharkasathi.com',
    role: 'Project Manager',
    assignedProjects: 2,
    status: 'Active',
    lastActive: '2025-06-14T16:45:00',
  },
  {
    id: 3,
    name: 'Rajan Kapoor',
    email: 'rajan@gharkasathi.com',
    role: 'Engineer',
    assignedProjects: 4,
    status: 'Active',
    lastActive: '2025-06-14T11:20:00',
  },
  {
    id: 4,
    name: 'Neha Sharma',
    email: 'neha@gharkasathi.com',
    role: 'Accountant',
    assignedProjects: 0,
    status: 'Active',
    lastActive: '2025-06-14T15:10:00',
  },
  {
    id: 5,
    name: 'Suresh Patel',
    email: 'suresh@gharkasathi.com',
    role: 'Supervisor',
    assignedProjects: 2,
    status: 'Inactive',
    lastActive: '2025-06-10T09:15:00',
  },
  {
    id: 6,
    name: 'Anand Contractors',
    email: 'anand@contractor.com',
    role: 'Contractor',
    assignedProjects: 1,
    status: 'Active',
    lastActive: '2025-06-13T13:45:00',
  },
];

const statusColors: Record<string, 'default' | 'success' | 'warning' | 'error'> = {
  'Active': 'success',
  'Inactive': 'error',
  'Pending': 'warning',
};

const roleEmojis: Record<string, string> = {
  'Admin': '👑',
  'Project Manager': '📊',
  'Engineer': '👷‍♂️',
  'Accountant': '💼',
  'Supervisor': '🔍',
  'Contractor': '🏗️',
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleString('en-IN', {
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
  });
};

const AccessControl = () => {
  return (
    <div className="space-y-6 fade-in">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Lock className="text-primary" size={24} />
            Access Control
          </h1>
        </div>
        <Button variant="primary" icon={<Plus size={16} />}>
          Add New User
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-primary font-medium">Total Users</p>
                <h3 className="text-3xl font-bold mt-1">12</h3>
              </div>
              <div className="p-4 bg-primary/10 rounded-full">
                <Users size={24} className="text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-success/5 border-success/20">
          <CardContent className="pt-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-success font-medium">Active Users</p>
                <h3 className="text-3xl font-bold mt-1">10</h3>
              </div>
              <div className="p-4 bg-success/10 rounded-full">
                <Shield size={24} className="text-success" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-accent/5 border-accent/20">
          <CardContent className="pt-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-accent font-medium">User Roles</p>
                <h3 className="text-3xl font-bold mt-1">6</h3>
              </div>
              <div className="p-4 bg-accent/10 rounded-full">
                <Lock size={24} className="text-accent" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader className="pb-0">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <CardTitle className="text-xl">User Permissions</CardTitle>
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary" size={16} />
              <input
                type="text"
                placeholder="Search users..."
                className="input pl-10 py-2 w-full"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full mt-4">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 font-medium">User</th>
                  <th className="text-left py-3 font-medium">Role</th>
                  <th className="text-center py-3 font-medium">Assigned Projects</th>
                  <th className="text-left py-3 font-medium">Status</th>
                  <th className="text-left py-3 font-medium">Last Active</th>
                  <th className="text-right py-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {userData.map((user) => (
                  <tr key={user.id} className="border-b border-border hover:bg-secondary/5">
                    <td className="py-3">
                      <div className="font-medium">{user.name}</div>
                      <div className="text-xs text-secondary mt-1">{user.email}</div>
                    </td>
                    <td className="py-3">
                      <div className="flex items-center">
                        <span className="mr-2">{roleEmojis[user.role]}</span>
                        {user.role}
                      </div>
                    </td>
                    <td className="py-3 text-center">
                      {user.assignedProjects > 0 ? (
                        <Badge variant="default">{user.assignedProjects}</Badge>
                      ) : (
                        <span className="text-secondary">None</span>
                      )}
                    </td>
                    <td className="py-3">
                      <Badge variant={statusColors[user.status]}>
                        {user.status}
                      </Badge>
                    </td>
                    <td className="py-3">{formatDate(user.lastActive)}</td>
                    <td className="py-3 text-right">
                      <Button variant="outline" size="sm">
                        Manage Access
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

export default AccessControl;