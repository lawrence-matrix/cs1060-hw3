import React from 'react';
import type { Goal } from '../types';

interface GoalListProps {
  goals: Goal[];
  selectedGoalId: string | null;
  onSelectGoal: (goalId: string) => void;
}

const GoalList: React.FC<GoalListProps> = ({ goals, selectedGoalId, onSelectGoal }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return '#22c55e';
      case 'in-progress':
        return '#3b82f6';
      case 'not-started':
        return '#9ca3af';
      case 'abandoned':
        return '#ef4444';
      default:
        return '#9ca3af';
    }
  };

  return (
    <div className="goal-list">
      {goals.length === 0 ? (
        <p className="empty-message">No goals yet. Create your first goal!</p>
      ) : (
        goals.map(goal => (
          <div
            key={goal.id}
            className={`goal-item ${selectedGoalId === goal.id ? 'selected' : ''}`}
            onClick={() => onSelectGoal(goal.id)}
          >
            <div className="goal-item-header">
              <h3>{goal.title}</h3>
              <span
                className="status-badge"
                style={{ backgroundColor: getStatusColor(goal.status) }}
              >
                {goal.status}
              </span>
            </div>
            <div className="goal-item-progress">
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${goal.progress}%` }}
                ></div>
              </div>
              <span className="progress-text">{goal.progress}%</span>
            </div>
            <p className="goal-item-category">{goal.category}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default GoalList;
