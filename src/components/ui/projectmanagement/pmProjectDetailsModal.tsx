import React from 'react';
import PmModal from './pmModal';
import Badge from '../Badge';

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

type PmProjectDetailsModalProps = {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
};

const PmProjectDetailsModal = ({ isOpen, onClose, project }: PmProjectDetailsModalProps) => {
  if (!project) return null;

  return (
    <PmModal isOpen={isOpen} onClose={onClose} title="Project Details">
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-secondary">Job ID</p>
            <p className="font-medium">{project.jobId}</p>
          </div>
          <div>
            <p className="text-sm text-secondary">Project Name</p>
            <p className="font-medium">{project.projectName}</p>
          </div>
          <div>
            <p className="text-sm text-secondary">Client Name</p>
            <p className="font-medium">{project.clientName}</p>
          </div>
          <div>
            <p className="text-sm text-secondary">Project Type</p>
            <p className="font-medium">{project.projectType}</p>
          </div>
          <div>
            <p className="text-sm text-secondary">City</p>
            <p className="font-medium">{project.city}</p>
          </div>
          <div>
            <p className="text-sm text-secondary">Client Success Manager</p>
            <p className="font-medium">{project.clientSuccessManager}</p>
          </div>
          <div>
            <p className="text-sm text-secondary">Project Stage</p>
            <Badge variant="default">{project.projectStage}</Badge>
          </div>
        </div>
      </div>
    </PmModal>
  );
};

export default PmProjectDetailsModal; 