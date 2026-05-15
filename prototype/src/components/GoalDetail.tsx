import React, { useState } from 'react';
import type { Goal, ProgressLog } from '../types';

interface GoalDetailProps {
  goal: Goal;
  onUpdate: (goal: Goal) => void;
  onDelete: () => void;
}

const GoalDetail: React.FC<GoalDetailProps> = ({ goal, onUpdate, onDelete }) => {
  const [showProgressForm, setShowProgressForm] = useState(false);
  const [progressNote, setProgressNote] = useState('');

  const daysRemaining = Math.ceil(
    (goal.targetDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
  );

  const onTrack = daysRemaining > 0;
  const completedMilestones = goal.milestones.filter(m => m.completed).length;

  const handleToggleMilestone = (milestoneId: string) => {
    const updatedMilestones = goal.milestones.map(m =>
      m.id === milestoneId ? { ...m, completed: !m.completed } : m
    );
    const newProgress = Math.round(
      (updatedMilestones.filter(m => m.completed).length / updatedMilestones.length) * 100
    );

    const newStatus = newProgress === 100 ? 'completed' : 'in-progress';
    const updatedGoal = {
      ...goal,
      milestones: updatedMilestones,
      progress: newProgress,
      status: newStatus as any,
    };
    onUpdate(updatedGoal);
  };

  const handleAddProgress = (e: React.FormEvent) => {
    e.preventDefault();
    if (!progressNote.trim()) {
      alert('Please enter a progress note');
      return;
    }

    const newProgressLog: ProgressLog = {
      id: `log${Date.now()}`,
      date: new Date(),
      note: progressNote,
      progressPercentage: goal.progress,
    };

    const updatedGoal = {
      ...goal,
      progressLog: [...goal.progressLog, newProgressLog],
    };

    onUpdate(updatedGoal);
    setProgressNote('');
    setShowProgressForm(false);
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div className="goal-detail">
      <div className="detail-header">
        <div>
          <h1>{goal.title}</h1>
          <p className="detail-category">{goal.category}</p>
        </div>
        <div className="detail-actions">
          <button className="btn btn-danger" onClick={onDelete}>
            Delete Goal
          </button>
        </div>
      </div>

      <div className="detail-meta">
        <div className="meta-item">
          <span className="label">Created:</span>
          <span className="value">{formatDate(goal.createdDate)}</span>
        </div>
        <div className="meta-item">
          <span className="label">Target Date:</span>
          <span className="value">{formatDate(goal.targetDate)}</span>
        </div>
        <div className="meta-item">
          <span className="label">Days Remaining:</span>
          <span className={`value ${!onTrack ? 'overdue' : ''}`}>
            {daysRemaining > 0 ? daysRemaining : 'OVERDUE'}
          </span>
        </div>
        <div className="meta-item">
          <span className="label">Status:</span>
          <span className="value status-badge" style={{
            backgroundColor: goal.status === 'completed' ? '#22c55e' : goal.status === 'in-progress' ? '#3b82f6' : '#9ca3af'
          }}>
            {goal.status}
          </span>
        </div>
      </div>

      {goal.description && (
        <div className="detail-section">
          <h3>Description</h3>
          <p>{goal.description}</p>
        </div>
      )}

      <div className="detail-section">
        <div className="progress-section">
          <h3>Overall Progress</h3>
          <div className="progress-display">
            <div className="progress-bar-large">
              <div
                className="progress-fill"
                style={{ width: `${goal.progress}%` }}
              ></div>
            </div>
            <div className="progress-info">
              <span className="progress-percentage">{goal.progress}%</span>
              <span className="progress-status">
                {!onTrack && daysRemaining <= 0 ? 'Behind Track ⚠️' : 'On Track ✓'}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="detail-section">
        <div className="section-header">
          <h3>Milestones</h3>
          <span className="milestone-count">
            {completedMilestones}/{goal.milestones.length} completed
          </span>
        </div>
        <div className="milestones-list">
          {goal.milestones.map(milestone => (
            <div
              key={milestone.id}
              className={`milestone-item ${milestone.completed ? 'completed' : ''}`}
            >
              <input
                type="checkbox"
                checked={milestone.completed}
                onChange={() => handleToggleMilestone(milestone.id)}
                className="milestone-checkbox"
              />
              <div className="milestone-content">
                <p className="milestone-title">{milestone.title}</p>
                <p className="milestone-date">Due: {formatDate(milestone.dueDate)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="detail-section">
        <div className="section-header">
          <h3>Progress Log</h3>
          <button
            className="btn btn-small"
            onClick={() => setShowProgressForm(!showProgressForm)}
          >
            + Add Update
          </button>
        </div>

        {showProgressForm && (
          <form className="progress-form" onSubmit={handleAddProgress}>
            <textarea
              value={progressNote}
              onChange={(e) => setProgressNote(e.target.value)}
              placeholder="What progress did you make? What did you learn?"
              rows={4}
            ></textarea>
            <div className="form-buttons">
              <button type="submit" className="btn btn-primary btn-small">
                Save Update
              </button>
              <button
                type="button"
                className="btn btn-secondary btn-small"
                onClick={() => setShowProgressForm(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        <div className="progress-log">
          {goal.progressLog.length === 0 ? (
            <p className="empty-message">No progress updates yet. Add one to get started!</p>
          ) : (
            goal.progressLog.map(log => (
              <div key={log.id} className="log-entry">
                <div className="log-date">{formatDate(log.date)}</div>
                <div className="log-note">{log.note}</div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default GoalDetail;
