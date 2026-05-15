import { useState } from 'react';
import './App.css';
import GoalList from './components/GoalList';
import GoalForm from './components/GoalForm';
import GoalDetail from './components/GoalDetail';
import type { Goal } from './types';

function App() {
  const [goals, setGoals] = useState<Goal[]>([
    {
      id: '1',
      title: 'Learn Machine Learning Fundamentals',
      category: 'Skill Development',
      description: 'Complete ML basics course and build first neural network',
      targetDate: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000), // 3 months from now
      createdDate: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000), // 2 weeks ago
      status: 'in-progress',
      progress: 50,
      milestones: [
        {
          id: 'm1',
          title: 'Complete Andrew Ng\'s ML Basics course (3 hours)',
          dueDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
          completed: true,
          order: 1,
        },
        {
          id: 'm2',
          title: 'Build first neural network classifier',
          dueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // 2 weeks from now
          completed: false,
          order: 2,
        },
        {
          id: 'm3',
          title: 'Complete capstone project',
          dueDate: new Date(Date.now() + 35 * 24 * 60 * 60 * 1000), // 5 weeks from now
          completed: false,
          order: 3,
        },
        {
          id: 'm4',
          title: 'Write blog post summarizing learnings',
          dueDate: new Date(Date.now() + 56 * 24 * 60 * 60 * 1000), // 8 weeks from now
          completed: false,
          order: 4,
        },
      ],
      progressLog: [
        {
          id: 'log1',
          date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
          note: 'Started with linear algebra review—refresher was helpful.',
          progressPercentage: 25,
        },
      ],
    },
    {
      id: '2',
      title: 'Run a Half-Marathon',
      category: 'Health & Fitness',
      description: 'Build endurance and complete 13.1 miles',
      targetDate: new Date(Date.now() + 180 * 24 * 60 * 60 * 1000), // 6 months from now
      createdDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 1 week ago
      status: 'in-progress',
      progress: 20,
      milestones: [
        {
          id: 'm5',
          title: 'Complete 5K run',
          dueDate: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000),
          completed: false,
          order: 1,
        },
        {
          id: 'm6',
          title: 'Complete 10K run',
          dueDate: new Date(Date.now() + 56 * 24 * 60 * 60 * 1000),
          completed: false,
          order: 2,
        },
        {
          id: 'm7',
          title: 'Run 13.1 miles (half-marathon)',
          dueDate: new Date(Date.now() + 180 * 24 * 60 * 60 * 1000),
          completed: false,
          order: 3,
        },
      ],
      progressLog: [],
    },
  ]);

  const [selectedGoalId, setSelectedGoalId] = useState<string | null>('1');
  const [showForm, setShowForm] = useState(false);

  const addGoal = (newGoal: Omit<Goal, 'id' | 'createdDate' | 'progressLog'>) => {
    const goal: Goal = {
      ...newGoal,
      id: Date.now().toString(),
      createdDate: new Date(),
      progressLog: [],
    };
    setGoals([...goals, goal]);
    setShowForm(false);
  };

  const updateGoal = (updatedGoal: Goal) => {
    setGoals(goals.map(g => (g.id === updatedGoal.id ? updatedGoal : g)));
  };

  const deleteGoal = (goalId: string) => {
    setGoals(goals.filter(g => g.id !== goalId));
    if (selectedGoalId === goalId) {
      setSelectedGoalId(null);
    }
  };

  const selectedGoal = selectedGoalId ? goals.find(g => g.id === selectedGoalId) : null;

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>🎯 Goal Progress Tracker</h1>
        <p className="subtitle">Set goals, break them into milestones, and track your progress</p>
      </header>

      <div className="app-layout">
        <aside className="sidebar">
          <button 
            className="btn btn-primary btn-new-goal"
            onClick={() => setShowForm(!showForm)}
          >
            + New Goal
          </button>

          {showForm && (
            <div className="form-container">
              <GoalForm onSubmit={addGoal} onCancel={() => setShowForm(false)} />
            </div>
          )}

          <div className="goals-list-section">
            <h2>Your Goals</h2>
            <GoalList 
              goals={goals}
              selectedGoalId={selectedGoalId}
              onSelectGoal={setSelectedGoalId}
            />
          </div>
        </aside>

        <main className="main-content">
          {selectedGoal ? (
            <GoalDetail 
              goal={selectedGoal}
              onUpdate={updateGoal}
              onDelete={() => deleteGoal(selectedGoal.id)}
            />
          ) : (
            <div className="empty-state">
              <p>Select a goal from the list or create a new one to get started!</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
