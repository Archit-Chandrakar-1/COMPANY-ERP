import React, { useState } from 'react';
import { Calendar, Plus, X } from 'lucide-react';
import PmModal from './pmModal';
import Button from './Button';
import Input from './Input';
import Select from './Select';

type CreateProjectModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (projectData: any) => void;
};

const PmCreateProjectModal = ({ isOpen, onClose, onSubmit }: CreateProjectModalProps) => {
  const [formData, setFormData] = useState({
    projectName: '',
    client: '',
    businessCategory: '',
    projectType: '',
    projectAddress: '',
    state: '',
    city: '',
    projectScope: '',
    projectEstimate: '',
    projectArea: '',
    clientPocName: '',
    clientPocNumber: '',
    recceDueDate: '',
    expectedStartDate: '',
    executionDueDate: '',
    assignedUsers: [{ name: 'Yash Srivastava', role: 'Business Development Manager' }]
  });

  const businessCategories = [
    { value: 'design', label: 'Design' },
    { value: 'construction', label: 'Construction' },
    { value: 'renovation', label: 'Renovation' },
    { value: 'commercial', label: 'Commercial' },
  ];

  const projectTypes = [
    { value: 'residential', label: 'Residential' },
    { value: 'commercial', label: 'Commercial' },
    { value: 'industrial', label: 'Industrial' },
    { value: 'retail', label: 'Retail' },
  ];

  const states = [
    { value: 'haryana', label: 'Haryana' },
    { value: 'delhi', label: 'Delhi' },
    { value: 'maharashtra', label: 'Maharashtra' },
    { value: 'karnataka', label: 'Karnataka' },
  ];

  const projectScopes = [
    { value: 'civil-work-design', label: 'Civil Work, Design' },
    { value: 'interior-design', label: 'Interior Design' },
    { value: 'full-construction', label: 'Full Construction' },
    { value: 'renovation', label: 'Renovation' },
  ];

  const clients = [
    { value: 'contico-kpmg', label: 'Contico - KPMG' },
    { value: 'livspace', label: 'Livspace' },
    { value: 'dormakaba', label: 'Dormakaba' },
    { value: 'arvind-fashion', label: 'Arvind Fashion Ltd' },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  const addUser = () => {
    setFormData(prev => ({
      ...prev,
      assignedUsers: [...prev.assignedUsers, { name: '', role: '' }]
    }));
  };

  const removeUser = (index: number) => {
    setFormData(prev => ({
      ...prev,
      assignedUsers: prev.assignedUsers.filter((_, i) => i !== index)
    }));
  };

  return (
    <PmModal isOpen={isOpen} onClose={onClose} title="Create Project">
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Project Details Section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-foreground">Project Details</h3>
            <div className="text-sm">
              <span className="text-secondary">JOB ID : </span>
              <span className="text-primary font-medium">To Be Alloted Later</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Project Name"
              placeholder="Enter Project name"
              value={formData.projectName}
              onChange={(e) => handleInputChange('projectName', e.target.value)}
              required
            />
            
            <Select
              label="Select client"
              options={clients}
              value={formData.client}
              onChange={(e) => handleInputChange('client', e.target.value)}
              placeholder="Select client"
              required
            />
            
            <Select
              label="Business Category"
              options={businessCategories}
              value={formData.businessCategory}
              onChange={(e) => handleInputChange('businessCategory', e.target.value)}
              placeholder="Business Category"
              required
            />
            
            <Input
              label="Project Type"
              placeholder="Project Type"
              value={formData.projectType}
              onChange={(e) => handleInputChange('projectType', e.target.value)}
            />
          </div>
          
          <div className="mt-6">
            <Input
              label="Project Address"
              placeholder="Enter project address"
              value={formData.projectAddress}
              onChange={(e) => handleInputChange('projectAddress', e.target.value)}
              required
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <Select
              label="State"
              options={states}
              value={formData.state}
              onChange={(e) => handleInputChange('state', e.target.value)}
              placeholder="Select State"
              required
            />
            
            <Input
              label="City"
              placeholder="Select City"
              value={formData.city}
              onChange={(e) => handleInputChange('city', e.target.value)}
              required
            />
          </div>
        </div>

        {/* Project Scope Section */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-6">Project Scope</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Select
              label="Project Scope"
              options={projectScopes}
              value={formData.projectScope}
              onChange={(e) => handleInputChange('projectScope', e.target.value)}
              placeholder="Select Project Scope"
              required
            />
            
            <Input
              label="Project Estimate (in INR)"
              type="number"
              placeholder="0"
              value={formData.projectEstimate}
              onChange={(e) => handleInputChange('projectEstimate', e.target.value)}
            />
          </div>
          
          <div className="mt-6">
            <Input
              label="Project Area (in SQFT)"
              type="number"
              placeholder="0"
              value={formData.projectArea}
              onChange={(e) => handleInputChange('projectArea', e.target.value)}
            />
          </div>
        </div>

        {/* Client POC Details Section */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-6">Client POC Details</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Client POC Name"
              placeholder="Enter client's poc name"
              value={formData.clientPocName}
              onChange={(e) => handleInputChange('clientPocName', e.target.value)}
              className="border-primary focus:border-primary"
            />
            
            <Input
              label="Client POC Number"
              placeholder="Enter client's poc number"
              value={formData.clientPocNumber}
              onChange={(e) => handleInputChange('clientPocNumber', e.target.value)}
            />
          </div>
        </div>

        {/* Important Dates Section */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-6">Important Dates</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Input
              label="Recce Due Date"
              type="date"
              value={formData.recceDueDate}
              onChange={(e) => handleInputChange('recceDueDate', e.target.value)}
            />
            
            <Input
              label="Expected start Date"
              type="date"
              value={formData.expectedStartDate}
              onChange={(e) => handleInputChange('expectedStartDate', e.target.value)}
            />
            
            <Input
              label="Execution Due Date"
              type="date"
              value={formData.executionDueDate}
              onChange={(e) => handleInputChange('executionDueDate', e.target.value)}
            />
          </div>
        </div>

        {/* Assign Project Users Section */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-6">Assign Project Users</h3>
          
          {formData.assignedUsers.map((user, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Select user{index === 0 ? '*' : ''}
                </label>
                <div className="flex items-center gap-3 p-3 border border-border rounded-md">
                  <div className="w-8 h-8 bg-warning text-white rounded-full flex items-center justify-center font-medium text-sm">
                    Y
                  </div>
                  <span className="font-medium">{user.name}</span>
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => removeUser(index)}
                      className="ml-auto p-1 hover:bg-error/10 rounded"
                    >
                      <X size={16} className="text-error" />
                    </button>
                  )}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Select user role
                </label>
                <div className="p-3 border border-border rounded-md bg-secondary/5">
                  <span className="text-secondary">{user.role}</span>
                </div>
              </div>
            </div>
          ))}
          
          <button
            type="button"
            onClick={addUser}
            className="flex items-center gap-2 text-primary hover:text-primary-light font-medium"
          >
            <Plus size={16} />
            Add more users
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4 pt-6 border-t border-border">
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
            className="px-8"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="primary"
            className="px-8 bg-primary hover:bg-primary-light"
          >
            Create
          </Button>
        </div>
      </form>
    </PmModal>
  );
};

export default PmCreateProjectModal;