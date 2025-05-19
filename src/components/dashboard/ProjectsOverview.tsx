import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import { Hammer, ChevronRight } from 'lucide-react';
import ProgressBar from '../ui/ProgressBar';
import Badge from '../ui/Badge';

const projectStatusColors: Record<string, 'default' | 'success' | 'warning' | 'error'> = {
  'On Track': 'success',
  'Delayed': 'warning',
  'On Hold': 'error',
  'Completed': 'default',
};

const projects = [
  {
    id: 1,
    name: 'Green Valley Residences',
    type: 'Residential',
    progress: 75,
    status: 'On Track',
  },
  {
    id: 2,
    name: 'Metro City Mall',
    type: 'Commercial',
    progress: 45,
    status: 'Delayed',
  },
  {
    id: 3,
    name: 'Sunset Apartments',
    type: 'Residential',
    progress: 90,
    status: 'On Track',
  },
  {
    id: 4,
    name: 'Industrial Park Warehouse',
    type: 'Industrial',
    progress: 30,
    status: 'On Hold',
  },
];

const ProjectsOverview = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Hammer size={18} className="text-primary" />
          Active Projects
        </CardTitle>
        <button className="text-sm text-primary flex items-center hover:underline">
          View all <ChevronRight size={16} />
        </button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {projects.map((project) => (
            <div key={project.id} className="border-b border-border pb-4 last:border-0 last:pb-0">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h4 className="font-medium">{project.name}</h4>
                  <p className="text-sm text-secondary">{project.type}</p>
                </div>
                <Badge variant={projectStatusColors[project.status]}>
                  {project.status}
                </Badge>
              </div>
              <ProgressBar
                value={project.progress}
                variant={projectStatusColors[project.status]}
                label={`Progress: ${project.progress}%`}
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectsOverview;