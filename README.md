# CS 1060 HW3: Goal Progress Tracker

Complete submission for CS 1060 Homework 3 - PRD and Prototype

## 📋 Submission Contents

### Part 1: Product Requirements Document (PRD)
**File**: [PRD.md](PRD.md)

**Contents**:
- **Stakeholder Persona**: Sarah Chen (Coach/Corporate Wellness Program Manager) - ~200 words
- **User Persona & Journey**: Alex's complete goal achievement flow across 5 scenes
- **Success Criteria Section**: 5 measurement categories with 9+ quantifiable metrics
  - User Engagement Metrics (MAU, goal creation rate)
  - Goal Completion & Progress Metrics (completion rate, milestone adherence)
  - User Satisfaction & Quality Metrics (NPS, relevance satisfaction)
  - Community & Network Effects (cohort engagement)
  - Business/Monetization Metrics (conversion, LTV:CAC)

**Framework**: Based on CS1060 lecture (2025-09-16) PRD framework with stakeholder personas, detailed user journeys, and measurable success metrics

---

### Part 2: Interactive Prototype
**Location**: [prototype/](prototype/)

**Features Implemented**:
✅ Goal creation with custom milestones  
✅ Milestone tracking with visual progress  
✅ Progress logging with reflections  
✅ Real-time progress calculation  
✅ Days-to-deadline tracking  
✅ Responsive UI (desktop, tablet, mobile)  
✅ Interactive goal list with status badges  

**Tech Stack**:
- React 18 + TypeScript
- Vite (build tool)
- CSS3 with CSS Variables
- Netlify deployment

**User Journey**: Implements "Alex's Goal Achievement Journey" from the PRD showing:
1. Goal Creation (with auto-suggested milestones)
2. First Week Momentum (progress logging)
3. Mid-Point Struggle (progress tracking)
4. Momentum Recovery (milestone completion)
5. Goal Achievement (goal completion)

---

## 🚀 Quick Links

| Item | Link |
|------|------|
| **Live Prototype** | [storied-baklava-d5f44c.netlify.app](http://storied-baklava-d5f44c.netlify.app) |
| **GitHub Repository** | [github.com/lawrence-matrix/cs1060-hw3](https://github.com/lawrence-matrix/cs1060-hw3) |
| **Prototype README** | [prototype/README.md](prototype/README.md) |
| **PRD Document** | [PRD.md](PRD.md) |

---

## 📝 How to Run Locally

### Prerequisites
- Node.js 18+
- npm

### Installation
```bash
# Navigate to prototype directory
cd prototype

# Install dependencies
npm install

# Start dev server (runs on http://localhost:5173)
npm run dev

# Or build for production
npm run build
```

---

## 👤 Author Information

- **Name**: lawrence-matrix
- **GitHub**: lawrence-matrix
- **Working**: Solo submission
- **Assignment**: CS 1060 Homework 3
- **Date**: May 15, 2026

---

## 📚 Project Structure

```
cs1060-hw3/
├── README.md                    # This file
├── PRD.md                       # Product Requirements Document
└── prototype/                   # React application
    ├── src/
    │   ├── App.tsx              # Main app component
    │   ├── App.css              # Global styles
    │   ├── types.ts             # TypeScript definitions
    │   ├── components/
    │   │   ├── GoalList.tsx
    │   │   ├── GoalForm.tsx
    │   │   └── GoalDetail.tsx
    │   └── main.tsx
    ├── index.html
    ├── README.md                # Prototype-specific documentation
    ├── netlify.toml             # Netlify configuration
    ├── package.json
    └── tsconfig.json
```

---

## ✨ Key Accomplishments

### Part 1: PRD
- ✅ Created realistic stakeholder persona (coach/wellness manager)
- ✅ Developed primary user persona with detailed motivation/frustrations
- ✅ Wrote 5-scene user journey matching the PRD framework
- ✅ Defined 9+ quantifiable success metrics with measurement methods
- ✅ Included business metrics (CAC, LTV, conversion rate)
- ✅ Provided clear decision frameworks for metric-based pivots

### Part 2: Prototype
- ✅ Built fully functional React application
- ✅ Implemented complete user journey from PRD
- ✅ Used TypeScript for type safety
- ✅ Responsive design (mobile/tablet/desktop)
- ✅ Deployed to Netlify (live + working)
- ✅ Clear documentation and setup instructions
- ✅ Pre-populated with demo data matching user journey

---

## 🎯 What This Demonstrates

**Software Engineering Skills**:
- Requirements analysis and prioritization
- User-centered product thinking
- Quantitative metrics design
- Full-stack web development
- Deployment and DevOps
- Git workflow and version control

**PRD Quality**:
- Specific, measurable goals
- Clear stakeholder vs. user differentiation
- Detailed implementation-ready metrics
- Business-driven success criteria

**Prototype Quality**:
- Implements the core user journey
- Professional UI/UX
- Production-ready code standards
- Live deployment

---

## 📖 Notes

- All data in the prototype is synthetic/in-memory for demonstration
- The prototype resets on page refresh (no persistence)
- For production, would add: backend database, auth, real data persistence
- PRD and prototype both follow CS1060 course frameworks
- Code follows modern React best practices (hooks, TypeScript, component composition)

---

**Status**: ✅ Complete and submitted  
**Last Updated**: May 15, 2026  
**Deployment Status**: 🟢 Live on Netlify
