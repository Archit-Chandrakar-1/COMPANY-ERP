import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import PmCreateProjectModal from '../components/ui/projectmanagement/createProjectModal';
import PmFilterableTable from '../components/ui/projectmanagement/pmFilterTable';
import PmDashboardHeader from '../components/ui/projectmanagement/pmDashboardHeader';
import PmTabNavigation from '../components/ui/projectmanagement/pmTabNavigation';
import PmProjectDetailsModal from '../components/ui/projectmanagement/pmProjectDetailModal';

import Badge from '../components/ui/Badge';

type ProjectStage = 
  | 'Project Created'
  | 'Recce Pending'
  | 'Design Pending'
  | 'Design Freeze'
  | 'Scope Approval Awaited'
  | 'Partial Scope Approved'
  | 'Full Scope Approved'
  | 'Execution';

type Project = {
  sno: number;
  jobId: string;
  projectName: string;
  clientName: string;
  projectType: string;
  city: string;
  clientSuccessManager: string;
  projectStage: ProjectStage;
};

const projectData: Project[] = [
  {
    sno: 1,
    jobId: 'CONTI2623',
    projectName: 'Contico - Himayat Nagar',
    clientName: 'Contico - KPMG',
    projectType: 'Commercial',
    city: 'Hyderabad',
    clientSuccessManager: 'Vikram Mehta',
    projectStage: 'Full Scope Approved',
  },
  {
    sno: 2,
    jobId: 'LIVSP12495',
    projectName: 'Scalar - Hyderabad',
    clientName: 'Livspace',
    projectType: 'Residential',
    city: 'Hyderabad',
    clientSuccessManager: 'Aarti Singh',
    projectStage: 'Execution',
  },
  {
    sno: 3,
    jobId: 'DORMA124',
    projectName: 'Dormakaba EC',
    clientName: 'Dormakaba',
    projectType: 'Commercial',
    city: 'Delhi',
    clientSuccessManager: 'Rajan Kapoor',
    projectStage: 'Recce Pending',
  },
  {
    sno: 4,
    jobId: 'MEGA12423',
    projectName: 'MEGAMART - Calicut (Kozhikode)',
    clientName: 'Arvind Fashion Ltd',
    projectType: 'Retail',
    city: 'Kozhikode',
    clientSuccessManager: 'Neha Sharma',
    projectStage: 'Scope Approval Awaited',
  },
  {
    sno: 5,
    jobId: 'RDASH124',
    projectName: 'WORKSQUARE',
    clientName: 'Tech Solutions',
    projectType: 'Office',
    city: 'Mumbai',
    clientSuccessManager: 'Ajay Nair',
    projectStage: 'Execution',
  },
  {
    sno: 6,
    jobId: 'TRDPL12394',
    projectName: 'Transdien - TWINDUSTRIAL Inc',
    clientName: 'Transdien Private Limited',
    projectType: 'Industrial',
    city: 'Chennai',
    clientSuccessManager: 'Deepak Sharma',
    projectStage: 'Execution',
  },
  {
    sno: 7,
    jobId: 'PROJ12393',
    projectName: 'Demo_RDash 7654',
    clientName: 'Rdash test',
    projectType: 'Demo',
    city: 'Gurgaon',
    clientSuccessManager: 'Priya Patel',
    projectStage: 'Partial Scope Approved',
  },
  {
    sno: 8,
    jobId: 'RDASH12379',
    projectName: 'ABC',
    clientName: 'Test Client',
    projectType: 'Residential',
    city: 'Noida',
    clientSuccessManager: 'Suresh Kumar',
    projectStage: 'Project Created',
  },
];

const stageColors: Record<ProjectStage, 'default' | 'success' | 'warning' | 'error'> = {
  'Project Created': 'default',
  'Recce Pending': 'warning',
  'Design Pending': 'warning',
  'Design Freeze': 'default',
  'Scope Approval Awaited': 'warning',
  'Partial Scope Approved': 'warning',
  'Full Scope Approved': 'success',
  'Execution': 'success',
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState('all-projects');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const tabs = [
    { id: 'all-projects', label: 'All Projects', count: 2102, isActive: true },
    { id: 'project-created', label: 'Project Created', count: 104 },
    { id: 'recce-pending', label: 'Recce Pending', count: 43 },
    { id: 'design-pending', label: 'Design Pending', count: 71 },
    { id: 'design-freeze', label: 'Design Freeze', count: 5 },
    { id: 'scope-approval-awaited', label: 'Scope Approval Awaited', count: 29 },
    { id: 'partial-scope-approved', label: 'Partial Scope Approved', count: 9 },
    { id: 'full-scope-approved', label: 'Full Scope Approved', count: 15 },
  ];

  const uniqueClients = [...new Set(projectData.map(p => p.clientName))];
  const uniqueProjectTypes = [...new Set(projectData.map(p => p.projectType))];
  const uniqueManagers = [...new Set(projectData.map(p => p.clientSuccessManager))];
  const uniqueStages = [...new Set(projectData.map(p => p.projectStage))];

  const columns = [
    {
      key: 'sno',
      label: 'S.no',
    },
    {
      key: 'jobId',
      label: 'Job ID',
      filter: {
        type: 'search' as const,
        placeholder: 'Search Job ID...',
      },
    },
    {
      key: 'projectName',
      label: 'Project Name',
      filter: {
        type: 'search' as const,
        placeholder: 'Search Project...',
      },
    },
    {
      key: 'clientName',
      label: 'Client Name',
      filter: {
        type: 'dropdown' as const,
        options: uniqueClients.map(client => ({ value: client, label: client })),
      },
    },
    {
      key: 'projectType',
      label: 'Project Type',
      filter: {
        type: 'dropdown' as const,
        options: uniqueProjectTypes.map(type => ({ value: type, label: type })),
      },
    },
    {
      key: 'city',
      label: 'City',
      filter: {
        type: 'search' as const,
        placeholder: 'Search City...',
      },
    },
    {
      key: 'clientSuccessManager',
      label: 'Client Success Manager',
      filter: {
        type: 'dropdown' as const,
        options: uniqueManagers.map(manager => ({ value: manager, label: manager })),
      },
    },
    {
      key: 'projectStage',
      label: 'Project Stage',
      filter: {
        type: 'dropdown' as const,
        options: uniqueStages.map(stage => ({ value: stage, label: stage })),
      },
      render: (value: ProjectStage) => (
        <Badge variant={stageColors[value]} className="whitespace-nowrap">
          {value}
        </Badge>
      ),
    },
  ];

  const handleAddProject = () => {
    setIsCreateModalOpen(true);
  };

  const handleCreateProject = (projectData: any) => {
    console.log('Creating project:', projectData);
    // Here you would typically send the data to your backend
  };

  const handleViewProject = (project: Project) => {
    setSelectedProject(project);
    setIsDetailsModalOpen(true);
  };

  return (
    <div className="space-y-0 fade-in">
      <PmDashboardHeader
        title="My Projects"
        userName="Yash"
        notificationCount={5}
        onAddClick={handleAddProject}
        addButtonText="Add Project"
        addButtonIcon={<Plus size={16} />}
      />
      
      <PmTabNavigation
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        className="mb-6"
      />
      
      <PmFilterableTable
        columns={columns}
        data={projectData}
        onViewProject={handleViewProject}
      />

      <PmCreateProjectModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSubmit={handleCreateProject}
      />

      <PmProjectDetailsModal
        isOpen={isDetailsModalOpen}
        onClose={() => setIsDetailsModalOpen(false)}
        project={selectedProject}
      />
    </div>
  );
};

export default Projects;