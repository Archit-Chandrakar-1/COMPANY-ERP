import React from 'react';
import { Edit, Users, Plus } from 'lucide-react';
import PmModal from './pmModal';
import Button from './Button';

type ProjectDetailsModalProps = {
  isOpen: boolean;
  onClose: () => void;
  project: any;
};

const PmProjectDetailsModal = ({ isOpen, onClose, project }: ProjectDetailsModalProps) => {
  if (!project) return null;

  const projectUsers = [
    {
      name: 'Yash Srivastava',
      role: 'Business Development Manager',
      phone: '+917572522284',
      avatar: 'Y',
      color: 'bg-warning'
    },
    {
      name: 'Aamir Khan',
      role: '2D Designer',
      phone: '+919560784449',
      avatar: 'A',
      color: 'bg-accent'
    }
  ];

  return (
    <PmModal isOpen={isOpen} onClose={onClose} title={`All Projects / ${project.projectName}`} className="max-w-6xl">
      <div className="space-y-6">
        {/* Header with Job ID and Status */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-sm text-secondary">JOB ID : </span>
            <span className="font-medium">{project.jobId}</span>
            <div className="w-4 h-4 bg-secondary rounded-full"></div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-secondary">Project Status : </span>
            <span className="text-warning font-medium">{project.projectStage}</span>
            <div className="w-4 h-4 bg-warning rounded-full"></div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-8 border-b border-border">
          {['Recce', 'Design', 'BOQ', 'Orders', 'Work Progress', 'Snag', 'Finance'].map((tab, index) => (
            <div key={tab} className="flex items-center gap-2 pb-3">
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs ${
                index === 0 ? 'border-primary bg-primary text-white' : 'border-secondary text-secondary'
              }`}>
                {index + 1}
              </div>
              <span className={`text-sm ${index === 0 ? 'text-primary font-medium' : 'text-secondary'}`}>
                {tab}
              </span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Project Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Project Details Card */}
            <div className="border border-border rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Project Details</h3>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-secondary">JOB ID</span>
                  <span className="font-medium">{project.jobId}</span>
                  <button className="p-1 hover:bg-secondary/10 rounded">
                    <Edit size={16} className="text-primary" />
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-secondary">Project Name</label>
                  <p className="font-medium mt-1">{project.projectName}</p>
                </div>
                <div>
                  <label className="text-sm text-secondary">Client</label>
                  <p className="font-medium mt-1">{project.clientName}</p>
                </div>
                <div>
                  <label className="text-sm text-secondary">Business Category</label>
                  <p className="font-medium mt-1">Design</p>
                </div>
                <div>
                  <label className="text-sm text-secondary">Project Type</label>
                  <p className="font-medium mt-1">-</p>
                </div>
                <div>
                  <label className="text-sm text-secondary">Project Address</label>
                  <p className="font-medium mt-1">{project.city}</p>
                </div>
                <div></div>
                <div>
                  <label className="text-sm text-secondary">City</label>
                  <p className="font-medium mt-1">{project.city}</p>
                </div>
                <div>
                  <label className="text-sm text-secondary">State</label>
                  <p className="font-medium mt-1">Haryana</p>
                </div>
              </div>
            </div>

            {/* Project Scope Card */}
            <div className="border border-border rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Project Scope</h3>
                <button className="p-1 hover:bg-secondary/10 rounded">
                  <Edit size={16} className="text-primary" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-secondary">Project Scope</label>
                  <p className="font-medium mt-1">Civil Work, Design</p>
                </div>
                <div>
                  <label className="text-sm text-secondary flex items-center gap-1">
                    Project Estimate (in INR)
                    <div className="w-3 h-3 bg-secondary rounded-full"></div>
                  </label>
                  <p className="font-medium mt-1">2000000.00</p>
                </div>
                <div>
                  <label className="text-sm text-secondary flex items-center gap-1">
                    Project Area (in SQFT)
                    <div className="w-3 h-3 bg-secondary rounded-full"></div>
                  </label>
                  <p className="font-medium mt-1">2000.00000</p>
                </div>
              </div>
            </div>

            {/* Client POC Details Card */}
            <div className="border border-border rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Client POC Details</h3>
                <button className="p-1 hover:bg-secondary/10 rounded">
                  <Edit size={16} className="text-primary" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-secondary">Client POC Name</label>
                  <p className="font-medium mt-1">-</p>
                </div>
                <div>
                  <label className="text-sm text-secondary">Client POC Number</label>
                  <p className="font-medium mt-1">-</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Project Users */}
          <div className="space-y-6">
            <div className="border border-border rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <button className="px-4 py-2 text-sm font-medium text-primary border-b-2 border-primary">
                    My Organisation
                  </button>
                  <button className="px-4 py-2 text-sm font-medium text-secondary">
                    Other Organisation
                  </button>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">Project Users</h4>
                  <button className="text-primary text-sm font-medium flex items-center gap-1">
                    <Plus size={14} />
                    Add Users
                  </button>
                </div>
                
                {projectUsers.map((user, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 border border-border rounded-lg">
                    <div className={`w-10 h-10 ${user.color} text-white rounded-full flex items-center justify-center font-medium`}>
                      {user.avatar}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{user.name}</p>
                      <p className="text-xs text-secondary">{user.role} | {user.phone}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4 pt-6 border-t border-border">
          <Button variant="primary" className="bg-primary hover:bg-primary-light">
            Actions
          </Button>
        </div>
      </div>
    </PmModal>
  );
};

export default PmProjectDetailsModal;