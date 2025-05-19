import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import { Calendar, Clock } from 'lucide-react';

const upcomingEvents = [
  {
    id: 1,
    title: 'Site Inspection - Green Valley',
    date: '2025-06-15T10:00:00',
    type: 'inspection',
  },
  {
    id: 2,
    title: 'Client Meeting - Priya Patel',
    date: '2025-06-15T14:30:00',
    type: 'meeting',
  },
  {
    id: 3,
    title: 'Material Delivery - Metro City Mall',
    date: '2025-06-16T09:00:00',
    type: 'delivery',
  },
  {
    id: 4,
    title: 'Permit Approval Deadline',
    date: '2025-06-18T18:00:00',
    type: 'deadline',
  },
];

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-IN', {
    month: 'short',
    day: 'numeric',
  });
};

const formatTime = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
};

const eventTypeClasses: Record<string, string> = {
  'inspection': 'bg-primary/10 text-primary',
  'meeting': 'bg-accent/10 text-accent',
  'delivery': 'bg-success/10 text-success',
  'deadline': 'bg-warning/10 text-warning',
};

const ProjectCalendar = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Calendar size={18} className="text-primary" />
          Upcoming Events
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="flex items-start p-3 rounded-md border border-border hover:bg-secondary/5 transition-colors"
            >
              <div className={`p-2 rounded-md ${eventTypeClasses[event.type]} mr-3`}>
                <Calendar size={16} />
              </div>
              <div>
                <h4 className="font-medium">{event.title}</h4>
                <div className="flex items-center text-secondary text-sm mt-1">
                  <span className="mr-3">{formatDate(event.date)}</span>
                  <span className="flex items-center">
                    <Clock size={12} className="mr-1" />
                    {formatTime(event.date)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCalendar;