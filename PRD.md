# Goal Progress Tracker – Product Requirements Document

## Executive Summary

Goal Progress Tracker is a web-based application that empowers individuals to set meaningful goals, break them into actionable milestones, and track their progress in real-time. The platform combines goal-setting frameworks with progress visualization, helping users stay motivated and accountable as they work toward personal and professional objectives.

**Primary User**: Ambitious individuals (students, professionals, entrepreneurs) pursuing self-improvement goals  
**Ideal Customer**: Career coaches, productivity consultants, and corporate wellness programs

---

## Stakeholder Personas

### Persona 1: Coach/Corporate Wellness Program Manager - Sarah Chen

Sarah is a corporate wellness program director at a mid-sized tech company with 200 employees. She's 38 years old, tech-savvy, and responsible for designing employee development initiatives. Sarah has been in her role for 5 years and understands that employee retention is tied to growth opportunities.

**Background**: Sarah manages a $50K annual wellness budget and coordinates quarterly development programs. She currently uses Asana for team projects and Google Sheets to track wellness metrics, but struggles with individual employee goal-setting visibility. Her boss asks for quarterly reports on employee development outcomes, and she manually aggregates data from various sources.

**Goals**:
- Find a tool that employees will actually use to track personal goals (not just work projects)
- Demonstrate ROI of wellness spending through measurable goal completion rates
- Reduce time spent manually collecting employee development data
- Support employees with remote work, flexible schedules, and diverse goals

**Pain Points**:
- Current tools feel "work-only" and don't capture personal growth goals employees care about
- No easy way to see aggregate progress or report on program effectiveness
- Employees abandon tracking tools after 2-3 months
- Limited budget for expensive software; needs a cost-effective solution

**Success Metric**: Sarah would consider Goal Progress Tracker successful if 60% of participating employees use it for at least one goal over a 6-month period, with average goal completion rate of 70%.

---

## User Personas & Journeys

### Primary User Persona: Alex - The Goal-Driven Professional

**Demographics**: 28-year-old software engineer; college-educated; earns $95K/year; city-based  
**Tech Comfort**: High — uses dev tools daily, comfortable with web apps  
**Goals for 2026**:
- Learn machine learning to transition toward AI engineering
- Run a half-marathon (currently runs 2-3x/week)
- Build a side project that generates $500/month in revenue
- Improve public speaking skills by giving 3 conference talks

**Motivations**:
- Career advancement and personal skill-building
- Health and fitness achievement
- Financial independence through entrepreneurship
- Recognition in community/industry

**Frustrations**:
- Goals often feel disconnected from daily actions
- Loses momentum after initial enthusiasm
- Unsure how to measure progress on soft skills
- Lacks accountability structure outside of work projects

**Context**: Alex uses Notion for notes, GitHub for code, but no integrated system for personal goals. Checks calendar and email daily but often forgets about goals set 3 months ago.

#### User Journey: "From Goal to Completion"

**Scene 1: Goal Creation (Day 1)**  
Alex opens Goal Progress Tracker on a Sunday evening. She clicks "New Goal" and enters: "Learn machine learning fundamentals." She selects "Skill Development" category and sets a 3-month deadline. The app suggests breaking this into milestones; Alex accepts a framework that recommends:
- Milestone 1 (Week 2): Complete Andrew Ng's ML Basics course (3 hours)
- Milestone 2 (Week 4): Build first neural network classifier
- Milestone 3 (Week 8): Complete capstone project
- Milestone 4 (Week 12): Write blog post summarizing learnings

Alex can see a visual timeline and understands what success looks like.

**Scene 2: First Week Momentum (Day 8)**  
Alex completes the first 3 hours of the course. She clicks "Log Progress" on Milestone 1, uploads a screenshot of her course completion, and writes: "Started with linear algebra review—refresher was helpful." The app shows her at 25% completion and displays a motivational message. She sees a calendar heatmap indicating consistent daily engagement (3 days so far).

**Scene 3: Mid-Point Struggle (Week 6)**  
Alex hit Milestone 2 but is struggling with the neural network project. She logs in and sees her goal listed but notices she's "behind track" (visual indicator: yellow warning). She clicks "Request Help" and sees a discussion forum for this goal type. She posts a question and gets a response within hours from another user who faced the same issue. She doesn't feel alone.

**Scene 4: Momentum Recovery (Week 8)**  
Alex completes Milestone 2. She updates the app with her completed project link. The app calculates: "You've completed 50% of your goal in 8 weeks—on track for success!" A notification encourages her to continue. She also sees that 2 other users in the "ML Learning" cohort just completed the same milestone and feels connected to a community of learners.

**Scene 5: Goal Achievement (Week 12)**  
Alex publishes her blog post. She marks the goal "Complete" in the app. The system shows:
- Timeline: 12 weeks, 4/4 milestones complete
- Engagement: 68 active days (out of 84)
- Average time per week: 3.5 hours
- Reflection prompt: "What was your biggest breakthrough? What will you learn next?"

She writes: "Realized I'm passionate about computer vision applications—want to specialize here." The app suggests related goals and Alex decides to start another ML goal focused on computer vision.

---

## Success Criteria & Measurement Strategy

### 1. User Engagement Metrics

**Metric 1.1: Monthly Active Users (MAU) & Retention**
- **Definition**: Percentage of users who log in and interact with at least one goal per month
- **Target**: 65% MAU by end of Year 1; 75% by end of Year 2
- **Measurement Method**: 
  - Track login events with timestamp in database
  - Count unique user IDs with at least one action (goal update, milestone log, comment) per month
  - Calculate: (Users with action in month N / Total registered users) × 100
- **Cadence**: Weekly dashboard; reported monthly to leadership
- **Why It Matters**: Indicates whether the product is sticky and provides ongoing value

**Metric 1.2: Goal Creation Rate**
- **Definition**: Average number of goals per active user created within first 30 days
- **Target**: 2.0+ goals per new user by end of Year 1
- **Measurement Method**:
  - Track goal creation timestamps for new users
  - Calculate: Total goals created in first 30 days / New users registered
  - Segment by user source (organic, paid acquisition, referral)
- **Cadence**: Weekly
- **Why It Matters**: Multiple goals increase likelihood of sustained engagement and platform value

### 2. Goal Completion & Progress Metrics

**Metric 2.1: Goal Completion Rate**
- **Definition**: Percentage of goals marked "completed" within the projected timeframe
- **Target**: 68% of goals completed on-time; 82% completed within 120% of planned duration
- **Measurement Method**:
  - Track goal creation date, target date, and completion date
  - Categorize: "On-time" (completed ≤ target date); "Late but completed" (completed > target date); "Abandoned" (incomplete after target date passes)
  - Calculate: (On-time goals + Late-but-completed goals) / Total goals with past deadline
- **Cadence**: Monthly (segment by goal category, duration, and user cohort)
- **Why It Matters**: Core outcome metric—demonstrates whether the tool actually helps users achieve goals

**Metric 2.2: Milestone Adherence**
- **Definition**: Average percentage of planned milestones reached before project goal deadline
- **Target**: 75% of milestones completed on average per goal
- **Measurement Method**:
  - For each goal, calculate: (Milestones completed on/before deadline) / (Total milestones planned)
  - Aggregate across all goals
  - Identify which milestone types are most/least frequently completed (could indicate unrealistic planning)
- **Cadence**: Monthly
- **Why It Matters**: Identifies whether milestone structure helps with goal success or creates barriers

### 3. User Satisfaction & Quality Metrics

**Metric 3.1: Net Promoter Score (NPS)**
- **Definition**: Based on: "How likely are you to recommend Goal Progress Tracker to a friend?" (0-10 scale)
- **Target**: NPS ≥ 45 by end of Year 1 (industry benchmark for SaaS: 30-40)
- **Measurement Method**:
  - In-app survey administered quarterly to random 10% of active users
  - Calculate: (% Promoters [9-10] - % Detractors [0-6]) × 100
  - Segment by user cohort and goal type
- **Cadence**: Quarterly
- **Why It Matters**: Indicates overall user satisfaction and likelihood of word-of-mouth growth

**Metric 3.2: Goal Relevance Satisfaction**
- **Definition**: Post-goal survey: "How satisfied are you with the goals and milestones recommended by the app?" (1-5 Likert)
- **Target**: Average 4.2+/5.0
- **Measurement Method**:
  - Deployed survey after user completes or abandons a goal
  - Segment by goal type (career, health, finance, skills, etc.)
  - Identify which categories need better AI/UX recommendations
- **Cadence**: Continuous; reported monthly
- **Why It Matters**: Validates whether the goal-setting framework and AI recommendations are genuinely useful

### 4. Community & Network Effects

**Metric 4.1: Cohort Engagement**
- **Definition**: For users pursuing same goal type, percentage who interact (view peer progress, leave comments, join forum) per month
- **Target**: 35% of users in same goal category interact with peer data/community per month
- **Measurement Method**:
  - Track: profile views of peers, comments on shared goals, forum posts, upvotes
  - Filter to users pursuing similar goal types in same month
  - Calculate: (Users with peer interaction) / (Users in same goal category)
- **Cadence**: Monthly
- **Why It Matters**: Community features drive retention; peer accountability is powerful motivation

### 5. Business/Monetization Metrics

**Metric 5.1: Conversion to Paid Tiers**
- **Definition**: Percentage of free users who upgrade to premium tier within first 90 days
- **Target**: 8% conversion rate by end of Year 1
- **Measurement Method**:
  - Track: date of account creation, free tier usage metrics (goals created, milestones logged, session count), conversion event (upgrade transaction)
  - Calculate: (Users converting to paid within 90 days) / (Total free sign-ups in 90-day window)
  - A/B test different freemium models
- **Cadence**: Weekly (for real-time alerts); reported monthly
- **Why It Matters**: Indicates sustainability and product-market fit

**Metric 5.2: Customer Acquisition Cost (CAC) vs. Lifetime Value (LTV)**
- **Definition**: LTV:CAC ratio should exceed 3:1 for sustainable growth
- **Measurement Method**:
  - CAC: Total marketing spend / New customers acquired (segment by channel)
  - LTV: Average revenue per user × Average customer lifespan
  - Calculate: LTV / CAC ratio by acquisition channel
- **Cadence**: Quarterly
- **Why It Matters**: Ensures healthy unit economics and viable business model

### Implementation & Dashboarding

**Measurement Infrastructure**:
- **Event tracking**: Segment/Mixpanel for user behavior events (goal creation, milestone logging, community interaction)
- **Qualitative feedback**: Quarterly surveys via email; in-app feedback widget
- **Cohort analysis**: Segment users by sign-up date, goal type, acquisition channel to identify patterns
- **Real-time monitoring**: Google Data Studio dashboard updated daily with key metrics; weekly report to leadership

**Decision Framework**:
- If goal completion rate drops below 60% for 2 consecutive months → investigate UX/goal quality issues
- If NPS falls below 40 → trigger user interviews to identify primary pain points
- If MAU retention drops below 50% → test new engagement features (reminders, social features, etc.)
- If paid conversion stays below 5% → evaluate freemium model or pricing strategy

**Success Definition (Year 1)**:
- 10,000+ registered users
- 65% MAU retention
- 68% goal completion rate
- NPS ≥ 45
- LTV:CAC ratio ≥ 2.5:1

These metrics collectively demonstrate that Goal Progress Tracker delivers measurable value to users (completion rate), retains them over time (engagement metrics), and builds a sustainable, network-driven product (community effects).

---

## Notes

- **Word Count**: ~1,800 words (combined personas and success metrics section)
- **Author**: Working Solo
- **PRD Framework**: Based on CS1060 lecture on 2025-09-16 (Stakeholder personas, user journeys, and success metrics)
