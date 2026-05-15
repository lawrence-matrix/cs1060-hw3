# Goal Progress Tracker Prototype

## Overview
A web application that helps users set goals, break them into actionable milestones, and track their progress in real-time. This prototype demonstrates the primary user journey from the PRD.

## Team Information
- **Developer**: lawrence-matrix (working solo)
- **GitHub Username**: lawrence-matrix
- **Repository**: https://github.com/lawrence-matrix/cs1060-hw3

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation & Running Locally

```bash
# Navigate to the prototype directory
cd prototype

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173/`

### Building for Production

```bash
npm run build
```

Output will be in the `dist/` directory.

## Features Implemented

### 1. Goal Management
- Create new goals with title, description, category, duration, and milestone count
- View all goals in a sidebar with progress indicators
- Select a goal to view detailed information

### 2. Milestone Tracking
- Automatically generate suggested milestones when creating a goal
- Mark milestones as complete
- Track progress with visual indicators
- See milestone due dates and completion status

### 3. Progress Tracking
- Real-time progress percentage calculation based on completed milestones
- Track days remaining to goal deadline
- Add progress log entries to document learnings and updates
- Visual progress bar showing overall goal completion

### 4. User Interface
- Two-column layout: goal list (left) + detail view (right)
- Responsive design (works on mobile/tablet)
- Color-coded status badges (not-started, in-progress, completed)
- Interactive goal cards with hover effects

## User Journey Implemented

The prototype implements **Alex's Goal Achievement Journey** (from the PRD):

1. **Goal Creation** - Alex creates a new goal with auto-suggested milestones
2. **First Week Momentum** - Alex logs progress on the first milestone
3. **Mid-Point Struggle** - Progress tracking with visual indicators
4. **Momentum Recovery** - Celebrating milestone completions
5. **Goal Achievement** - Marking goal as complete with final reflection

### Demo Goals
Two pre-populated goals are included:
- **Learn Machine Learning Fundamentals** (50% complete) - 3-month skill development goal
- **Run a Half-Marathon** (20% complete) - 6-month fitness goal

## Technical Stack

- **Frontend Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: CSS3 with CSS Variables
- **State Management**: React Hooks (useState)
- **Deployment**: Netlify

## Project Structure

```
prototype/
├── src/
│   ├── App.tsx                  # Main app component
│   ├── App.css                  # Global styles
│   ├── types.ts                 # TypeScript type definitions
│   ├── components/
│   │   ├── GoalList.tsx         # Goal list sidebar component
│   │   ├── GoalForm.tsx         # New goal form component
│   │   └── GoalDetail.tsx       # Goal detail view component
│   ├── index.css                # Base styles
│   └── main.tsx                 # React entry point
├── index.html                   # HTML entry point
├── netlify.toml                 # Netlify deployment config
├── tsconfig.json                # TypeScript config
├── vite.config.ts               # Vite config
└── package.json                 # Dependencies
```

## Data Model

### Goal
- `id`: Unique identifier
- `title`: Goal title
- `category`: Category (Skill Development, Health & Fitness, etc.)
- `description`: Goal description
- `targetDate`: Target completion date
- `createdDate`: When goal was created
- `status`: not-started | in-progress | completed | abandoned
- `progress`: 0-100 percentage
- `milestones`: Array of milestone objects
- `progressLog`: Array of progress update entries

### Milestone
- `id`: Unique identifier
- `title`: Milestone description
- `dueDate`: When this milestone is due
- `completed`: Boolean completion status
- `order`: Position in milestone sequence

### ProgressLog
- `id`: Unique identifier
- `date`: When update was created
- `note`: User's reflection/update text
- `progressPercentage`: Progress % at time of log

## Synthetic Data

All data is synthetic/in-memory. Goals and progress are stored in React state and reset on page refresh. For a production version, this would connect to a backend database (Firebase, PostgreSQL, MongoDB, etc.).

## Not Yet Implemented

- Backend API/database persistence
- User authentication/accounts
- Community features (peer cohorts, discussions)
- AI-powered milestone suggestions
- Real-time notifications/reminders
- Export functionality
- Complex analytics dashboard

## Deployment

### Deployed Version
[View deployed app on Netlify](TBD)

The app is deployed using Netlify's continuous deployment from the GitHub repository. Any push to the `main` branch automatically triggers a build and deploy.

### Deploy Manually
```bash
npm run build
netlify deploy --prod --dir=dist
```

## Related Documentation

- **PRD**: See [PRD.md](../PRD.md) for full Product Requirements Document
- **GitHub**: https://github.com/lawrence-matrix/cs1060-hw3

## Notes

- The prototype uses mock data to demonstrate the user journey
- All data is client-side only and persists during the session
- Responsive design works on desktop, tablet, and mobile
- Built with accessibility and performance in mind

---

**Assignment**: CS 1060 HW3 - Goal Progress Tracker PRD & Prototype  
**Date**: May 15, 2026  
**Status**: Solo submission
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
