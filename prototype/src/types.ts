export interface Milestone {
  id: string;
  title: string;
  dueDate: Date;
  completed: boolean;
  order: number;
}

export interface ProgressLog {
  id: string;
  date: Date;
  note: string;
  progressPercentage: number;
}

export interface Goal {
  id: string;
  title: string;
  category: string;
  description: string;
  targetDate: Date;
  createdDate: Date;
  status: 'not-started' | 'in-progress' | 'completed' | 'abandoned';
  progress: number;
  milestones: Milestone[];
  progressLog: ProgressLog[];
}
