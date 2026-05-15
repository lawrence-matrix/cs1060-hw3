import React, { useState } from 'react';
import type { Goal, Milestone } from '../types';

interface GoalFormProps {
  onSubmit: (goal: Omit<Goal, 'id' | 'createdDate' | 'progressLog'>) => void;
  onCancel: () => void;
}

const GoalForm: React.FC<GoalFormProps> = ({ onSubmit, onCancel }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Skill Development');
  const [durationWeeks, setDurationWeeks] = useState(12);
  const [milestoneCount, setMilestoneCount] = useState(3);

  const categories = [
    'Skill Development',
    'Health & Fitness',
    'Financial',
    'Personal Growth',
    'Career',
    'Creative',
    'Other',
  ];

  const generateDefaultMilestones = (count: number): Milestone[] => {
    const milestones: Milestone[] = [];
    for (let i = 1; i <= count; i++) {
      const dueDate = new Date();
      dueDate.setDate(dueDate.getDate() + (i * (durationWeeks * 7)) / count);
      milestones.push({
        id: `m${i}`,
        title: `Milestone ${i}`,
        dueDate,
        completed: false,
        order: i,
      });
    }
    return milestones;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      alert('Please enter a goal title');
      return;
    }

    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + durationWeeks * 7);

    const newGoal: Omit<Goal, 'id' | 'createdDate' | 'progressLog'> = {
      title,
      description,
      category,
      targetDate,
      status: 'not-started',
      progress: 0,
      milestones: generateDefaultMilestones(milestoneCount),
    };

    onSubmit(newGoal);
    setTitle('');
    setDescription('');
    setCategory('Skill Development');
    setDurationWeeks(12);
    setMilestoneCount(3);
  };

  return (
    <form className="goal-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Goal Title *</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="What do you want to achieve?"
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Why is this goal important to you?"
          rows={3}
        ></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="duration">Duration (weeks)</label>
          <input
            id="duration"
            type="number"
            min="1"
            max="104"
            value={durationWeeks}
            onChange={(e) => setDurationWeeks(parseInt(e.target.value))}
          />
        </div>

        <div className="form-group">
          <label htmlFor="milestones">Milestones</label>
          <input
            id="milestones"
            type="number"
            min="1"
            max="10"
            value={milestoneCount}
            onChange={(e) => setMilestoneCount(parseInt(e.target.value))}
          />
        </div>
      </div>

      <div className="form-buttons">
        <button type="submit" className="btn btn-primary">
          Create Goal
        </button>
        <button type="button" className="btn btn-secondary" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default GoalForm;
