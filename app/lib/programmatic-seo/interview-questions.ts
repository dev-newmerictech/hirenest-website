import { InterviewQuestion } from './types'

// Common interview questions that apply to most roles
const commonQuestions: InterviewQuestion[] = [
    {
        id: 'tell-about-yourself',
        question: 'Tell me about yourself.',
        answer: 'This is often the opening question. Keep your response professional and focused on your career journey. Start with your current role, highlight key accomplishments, and connect your background to why you\'re interested in this position. Keep it under 2 minutes.',
        category: 'background',
        difficulty: 'beginner',
        jobTitles: ['all']
    },
    {
        id: 'why-this-company',
        question: 'Why do you want to work for this company?',
        answer: 'Research the company beforehand. Mention specific aspects like their products, culture, mission, or recent news. Connect your values and career goals with what the company offers. Show genuine enthusiasm and explain how you can contribute.',
        category: 'company-fit',
        difficulty: 'beginner',
        jobTitles: ['all']
    },
    {
        id: 'strengths',
        question: 'What are your greatest strengths?',
        answer: 'Choose 2-3 strengths relevant to the job. Provide specific examples of how you\'ve used these strengths in past roles. Common valuable strengths include problem-solving, leadership, adaptability, and technical expertise.',
        category: 'background',
        difficulty: 'beginner',
        jobTitles: ['all']
    },
    {
        id: 'weakness',
        question: 'What is your greatest weakness?',
        answer: 'Be honest but strategic. Choose a real weakness you\'re working to improve. Explain the steps you\'re taking to address it. Avoid clichés like "I\'m a perfectionist" or strengths disguised as weaknesses.',
        category: 'background',
        difficulty: 'intermediate',
        jobTitles: ['all']
    },
    {
        id: 'challenge-overcome',
        question: 'Describe a challenging situation and how you overcame it.',
        answer: 'Use the STAR method (Situation, Task, Action, Result). Briefly describe the context, explain your responsibility, detail the specific actions you took, and highlight the positive outcome. Focus on problem-solving and resilience.',
        category: 'behavioral',
        difficulty: 'intermediate',
        jobTitles: ['all']
    },
    {
        id: 'why-leave-current-job',
        question: 'Why are you leaving your current position?',
        answer: 'Stay positive about your current or previous employer. Focus on seeking growth opportunities, new challenges, or alignment with your career goals. Avoid complaining about coworkers, management, or company culture.',
        category: 'background',
        difficulty: 'intermediate',
        jobTitles: ['all']
    },
    {
        id: 'five-years',
        question: 'Where do you see yourself in 5 years?',
        answer: 'Share realistic career goals while showing commitment to the role. Mention skills you want to develop and growth opportunities within the field. Employers want to see ambition coupled with stability.',
        category: 'background',
        difficulty: 'beginner',
        jobTitles: ['all']
    },
    {
        id: 'team-conflict',
        question: 'Describe a time you had a conflict with a coworker.',
        answer: 'Focus on resolution and professionalism. Explain the situation, how you approached the conversation respectfully, and the outcome. Emphasize your ability to communicate effectively and find common ground.',
        category: 'behavioral',
        difficulty: 'intermediate',
        jobTitles: ['all']
    },
    {
        id: 'pressure-deadline',
        question: 'How do you handle pressure and tight deadlines?',
        answer: 'Share your strategies for staying organized and focused. Mention tools or techniques you use (prioritization, time-blocking, etc.). Provide a specific example of a time you successfully delivered under pressure.',
        category: 'behavioral',
        difficulty: 'intermediate',
        jobTitles: ['all']
    },
    {
        id: 'accomplishment',
        question: 'What is your greatest professional accomplishment?',
        answer: 'Choose an accomplishment relevant to the job. Use the STAR method to describe the situation, your actions, and the measurable results. Quantify your achievement when possible (percentages, revenue, time saved, etc.).',
        category: 'background',
        difficulty: 'intermediate',
        jobTitles: ['all']
    },
    {
        id: 'salary-expectations',
        question: 'What are your salary expectations?',
        answer: 'Research the market rate for the position beforehand. Provide a range based on your experience and the value you bring. Emphasize that you\'re flexible and focused on the opportunity, not just compensation.',
        category: 'background',
        difficulty: 'intermediate',
        jobTitles: ['all']
    },
    {
        id: 'unique-value',
        question: 'What makes you unique compared to other candidates?',
        answer: 'Highlight your specific combination of skills, experiences, and personal qualities. Provide concrete examples of how your unique perspective has added value in previous roles.',
        category: 'background',
        difficulty: 'intermediate',
        jobTitles: ['all']
    },
    {
        id: 'feedback-received',
        question: 'Tell me about a time you received constructive feedback.',
        answer: 'Describe the feedback without being defensive. Explain how you initially processed it, what changes you made, and the positive results. This shows growth mindset and ability to learn from others.',
        category: 'behavioral',
        difficulty: 'intermediate',
        jobTitles: ['all']
    },
    {
        id: 'mistake-made',
        question: 'Describe a mistake you made and how you handled it.',
        answer: 'Be honest about a genuine error. Focus on taking accountability, how you fixed the issue, and what you learned to prevent it from happening again. Employers value integrity and problem-solving.',
        category: 'behavioral',
        difficulty: 'intermediate',
        jobTitles: ['all']
    },
    {
        id: 'difficult-boss',
        question: 'How do you handle working with a difficult boss?',
        answer: 'Focus on professionalism and communication. Explain how you seek to understand their expectations, adapt your communication style, and find constructive ways to address issues. Emphasize results and relationship-building.',
        category: 'behavioral',
        difficulty: 'intermediate',
        jobTitles: ['all']
    },
    {
        id: 'unpopular-decision',
        question: 'Tell me about a time you had to make an unpopular decision.',
        answer: 'Explain the situation, the factors you considered, and how you communicated your decision. Discuss how you managed pushback and ultimately achieved positive outcomes.',
        category: 'behavioral',
        difficulty: 'advanced',
        jobTitles: ['all']
    }
]

// Technical questions by role
const technicalQuestions: InterviewQuestion[] = [
    // Software Engineer
    {
        id: 'se-oop-concepts',
        question: 'Explain the four principles of object-oriented programming.',
        answer: 'The four principles are: 1) Encapsulation - bundling data with methods; 2) Abstraction - hiding complex implementation details; 3) Inheritance - deriving classes from base classes; 4) Polymorphism - objects taking multiple forms. Understanding these principles helps write maintainable, scalable code.',
        category: 'technical',
        difficulty: 'intermediate',
        jobTitles: ['software-engineer', 'backend-developer', 'frontend-developer', 'full-stack-developer']
    },
    {
        id: 'se-data-structures',
        question: 'What data structures would you use for [specific problem]?',
        answer: 'Explain your thought process for selecting data structures based on the operations needed. Consider time complexity, space complexity, and the nature of the data. Common choices include arrays, linked lists, hash maps, trees, and graphs, each with different trade-offs.',
        category: 'technical',
        difficulty: 'advanced',
        jobTitles: ['software-engineer', 'backend-developer']
    },
    {
        id: 'se-api-rest',
        question: 'What are RESTful API design principles?',
        answer: 'RESTful APIs should use standard HTTP methods (GET, POST, PUT, DELETE), be stateless, use resource-based URLs, and return proper status codes. Key principles include: uniform interface, client-server separation, cacheability, and layered system architecture.',
        category: 'technical',
        difficulty: 'intermediate',
        jobTitles: ['software-engineer', 'backend-developer', 'full-stack-developer']
    },
    {
        id: 'se-version-control',
        question: 'How do you use Git in your development workflow?',
        answer: 'Explain your experience with branching strategies, pull requests, merge conflicts, and collaboration workflows. Mention common commands and best practices like commit message conventions, code review processes, and CI/CD integration.',
        category: 'technical',
        difficulty: 'beginner',
        jobTitles: ['software-engineer', 'frontend-developer', 'backend-developer', 'full-stack-developer']
    },
    {
        id: 'se-testing',
        question: 'What is your approach to testing code?',
        answer: 'Discuss unit testing, integration testing, and end-to-end testing. Mention testing frameworks you\'ve used and your philosophy on test coverage. Explain how testing prevents bugs, documents code behavior, and enables confident refactoring.',
        category: 'technical',
        difficulty: 'intermediate',
        jobTitles: ['software-engineer', 'backend-developer', 'frontend-developer']
    },
    {
        id: 'se-clean-code',
        question: 'What principles do you follow for writing clean code?',
        answer: 'Mention principles like DRY (Don\'t Repeat Yourself), SOLID, meaningful naming, functions that do one thing, and avoiding magic numbers. Explain how clean code improves maintainability and reduces bugs.',
        category: 'technical',
        difficulty: 'intermediate',
        jobTitles: ['software-engineer', 'frontend-developer', 'backend-developer']
    },
    {
        id: 'se-debugging',
        question: 'Walk me through your debugging process.',
        answer: 'Describe how you reproduce issues, isolate variables, use debugging tools, add logging, and test solutions. Mention specific debugging tools you\'re familiar with and how you approach systematic troubleshooting.',
        category: 'technical',
        difficulty: 'intermediate',
        jobTitles: ['software-engineer', 'frontend-developer', 'backend-developer']
    },
    {
        id: 'se-database',
        question: 'What is your experience with database design?',
        answer: 'Discuss normalization, indexing, query optimization, and relationships. Mention databases you\'ve worked with (PostgreSQL, MongoDB, etc.) and how you approach data modeling for scalability.',
        category: 'technical',
        difficulty: 'intermediate',
        jobTitles: ['software-engineer', 'backend-developer']
    },
    {
        id: 'se-security',
        question: 'How do you approach security in your applications?',
        answer: 'Discuss authentication, authorization, input validation, SQL injection prevention, XSS protection, HTTPS, and secure data storage. Mention security best practices you follow.',
        category: 'technical',
        difficulty: 'intermediate',
        jobTitles: ['software-engineer', 'backend-developer', 'full-stack-developer']
    },
    {
        id: 'se-async',
        question: 'Explain asynchronous programming and its use cases.',
        answer: 'Discuss callbacks, promises, async/await, and how asynchronous operations prevent blocking. Mention use cases like API calls, file operations, and database queries.',
        category: 'technical',
        difficulty: 'intermediate',
        jobTitles: ['software-engineer', 'frontend-developer', 'backend-developer']
    },

    // Data Scientist
    {
        id: 'ds-overfitting',
        question: 'How do you prevent overfitting in machine learning models?',
        answer: 'Techniques include: cross-validation, regularization (L1/L2), pruning for decision trees, early stopping, dropout for neural networks, and increasing training data. Explain how you evaluate overfitting using train/validation/test splits and metrics.',
        category: 'technical',
        difficulty: 'intermediate',
        jobTitles: ['data-scientist']
    },
    {
        id: 'ds-feature-selection',
        question: 'How do you approach feature selection?',
        answer: 'Discuss methods like correlation analysis, feature importance from models, recursive feature elimination, and domain knowledge. Mention the trade-off between model complexity and interpretability.',
        category: 'technical',
        difficulty: 'intermediate',
        jobTitles: ['data-scientist']
    },
    {
        id: 'ds-missing-data',
        question: 'How do you handle missing data?',
        answer: 'Explain strategies like imputation (mean, median, mode), using algorithms that handle missing values, creating indicator variables, or removing incomplete records. The approach depends on the amount and pattern of missing data.',
        category: 'technical',
        difficulty: 'intermediate',
        jobTitles: ['data-scientist']
    },
    {
        id: 'ds-model-evaluation',
        question: 'How do you evaluate model performance?',
        answer: 'Discuss metrics like accuracy, precision, recall, F1-score, ROC-AUC, RMSE, and MAE. Explain which metrics are appropriate for different types of problems and how you use validation curves.',
        category: 'technical',
        difficulty: 'intermediate',
        jobTitles: ['data-scientist']
    },
    {
        id: 'ds-ensemble',
        question: 'What is ensemble learning and when would you use it?',
        answer: 'Explain techniques like bagging, boosting, and stacking. Discuss how combining multiple models can improve performance by reducing variance and bias. Mention popular ensemble methods like Random Forest and Gradient Boosting.',
        category: 'technical',
        difficulty: 'advanced',
        jobTitles: ['data-scientist']
    },
    {
        id: 'ds-communication',
        question: 'How do you present technical findings to non-technical stakeholders?',
        answer: 'Focus on simplifying complex concepts, using visualizations, and focusing on business impact. Explain how you tailor your communication to your audience and use storytelling with data.',
        category: 'technical',
        difficulty: 'intermediate',
        jobTitles: ['data-scientist']
    },
    {
        id: 'ds-bias',
        question: 'How do you identify and handle bias in your data?',
        answer: 'Discuss sampling bias, confirmation bias, and how you detect skewed data. Mention techniques like stratified sampling, reweighting, and fairness metrics to ensure model equity.',
        category: 'technical',
        difficulty: 'advanced',
        jobTitles: ['data-scientist']
    },

    // Product Manager
    {
        id: 'pm-prioritization',
        question: 'How do you prioritize features?',
        answer: 'Discuss frameworks like RICE (Reach, Impact, Confidence, Effort), MoSCoW, or weighted scoring. Explain how you gather input from stakeholders, analyze user data, consider business goals, and make trade-off decisions.',
        category: 'technical',
        difficulty: 'intermediate',
        jobTitles: ['product-manager']
    },
    {
        id: 'pm-product-launch',
        question: 'Walk me through how you would launch a new product.',
        answer: 'Outline the phases: market research, defining MVP, development, testing, go-to-market strategy, launch execution, and post-launch analysis. Mention cross-functional collaboration with engineering, design, marketing, and sales.',
        category: 'technical',
        difficulty: 'advanced',
        jobTitles: ['product-manager']
    },
    {
        id: 'pm-metrics',
        question: 'What metrics do you track to measure product success?',
        answer: 'Discuss product-specific metrics like user acquisition, activation, retention, revenue, and engagement. Explain how you define success metrics, set targets, and use data to inform product decisions.',
        category: 'technical',
        difficulty: 'intermediate',
        jobTitles: ['product-manager']
    },
    {
        id: 'pm-user-research',
        question: 'How do you gather and incorporate user feedback?',
        answer: 'Discuss methods like user interviews, surveys, usability testing, and analyzing support tickets. Explain how you synthesize feedback into actionable insights and prioritize improvements.',
        category: 'technical',
        difficulty: 'intermediate',
        jobTitles: ['product-manager']
    },
    {
        id: 'pm-stakeholder',
        question: 'How do you handle conflicting stakeholder requirements?',
        answer: 'Focus on understanding the underlying needs, finding common ground, and making data-driven decisions. Explain how you facilitate discussions and manage expectations when trade-offs are necessary.',
        category: 'technical',
        difficulty: 'intermediate',
        jobTitles: ['product-manager']
    },
    {
        id: 'pm-failed-feature',
        question: 'Tell me about a feature that failed and what you learned.',
        answer: 'Be honest about the failure, what the data showed, and how you pivoted or iterated. Focus on the learning process and how it influenced your approach going forward.',
        category: 'technical',
        difficulty: 'advanced',
        jobTitles: ['product-manager']
    },
    {
        id: 'pm-roadmap',
        question: 'How do you create and maintain a product roadmap?',
        answer: 'Discuss balancing short-term wins with long-term vision, incorporating market trends, customer feedback, and business objectives. Explain how you communicate the roadmap and adjust as needed.',
        category: 'technical',
        difficulty: 'intermediate',
        jobTitles: ['product-manager']
    },

    // UX Designer
    {
        id: 'ux-design-process',
        question: 'Walk me through your design process.',
        answer: 'Explain your approach: user research, problem definition, ideation, prototyping, testing, and iteration. Mention tools you use (Figma, Sketch, etc.) and how you incorporate user feedback and business requirements.',
        category: 'technical',
        difficulty: 'intermediate',
        jobTitles: ['ux-designer', 'ui-designer']
    },
    {
        id: 'ux-user-research',
        question: 'How do you conduct user research?',
        answer: 'Discuss methods like user interviews, surveys, usability testing, card sorting, and A/B testing. Explain how you recruit participants, synthesize findings into personas and journey maps, and communicate insights to stakeholders.',
        category: 'technical',
        difficulty: 'intermediate',
        jobTitles: ['ux-designer']
    },
    {
        id: 'ux-accessibility',
        question: 'How do you ensure your designs are accessible?',
        answer: 'Discuss WCAG guidelines, semantic HTML, keyboard navigation, screen reader compatibility, color contrast, and testing with assistive technologies. Explain why accessibility matters for all users.',
        category: 'technical',
        difficulty: 'intermediate',
        jobTitles: ['ux-designer', 'ui-designer', 'frontend-developer']
    },
    {
        id: 'ux-usability',
        question: 'What makes a design usable?',
        answer: 'Discuss intuitiveness, learnability, efficiency, memorability, and error prevention. Mention how you conduct usability testing and iterate based on user behavior.',
        category: 'technical',
        difficulty: 'intermediate',
        jobTitles: ['ux-designer', 'ui-designer']
    },
    {
        id: 'ux-resize',
        question: 'How do you approach responsive design?',
        answer: 'Discuss designing for different screen sizes, touch targets, breakpoints, and progressive enhancement. Mention how you ensure consistency across devices while optimizing for each platform.',
        category: 'technical',
        difficulty: 'intermediate',
        jobTitles: ['ux-designer', 'ui-designer', 'frontend-developer']
    },
    {
        id: 'ux-design-systems',
        question: 'What is your experience with design systems?',
        answer: 'Discuss creating component libraries, documentation, design tokens, and how design systems improve consistency and efficiency. Mention tools like Figma or zeroheight.',
        category: 'technical',
        difficulty: 'intermediate',
        jobTitles: ['ux-designer', 'ui-designer']
    },

    // Sales
    {
        id: 'sales-sale-process',
        question: 'Walk me through your sales process.',
        answer: 'Describe your approach: prospecting, qualifying, discovery, presentation, handling objections, closing, and follow-up. Mention how you use CRM tools and maintain relationships after the sale.',
        category: 'technical',
        difficulty: 'intermediate',
        jobTitles: ['sales-representative', 'account-manager']
    },
    {
        id: 'sales-objection-handling',
        question: 'How do you handle price objections?',
        answer: 'Explain your approach to understanding the objection, validating concerns, demonstrating value, and exploring alternatives. Focus on ROI and total cost of ownership rather than just price.',
        category: 'technical',
        difficulty: 'intermediate',
        jobTitles: ['sales-representative', 'business-development-manager']
    },
    {
        id: 'sales-lead-gen',
        question: 'How do you generate new leads?',
        answer: 'Discuss strategies like networking, cold outreach, social selling, referrals, inbound marketing, and attending industry events. Explain how you qualify and prioritize leads.',
        category: 'technical',
        difficulty: 'intermediate',
        jobTitles: ['sales-representative', 'business-development-manager']
    },
    {
        id: 'sales-long-sales',
        question: 'How do you maintain momentum in a long sales cycle?',
        answer: 'Discuss regular touchpoints, providing value between meetings, understanding decision-maker dynamics, and adapting your strategy as the relationship evolves.',
        category: 'technical',
        difficulty: 'intermediate',
        jobTitles: ['sales-representative', 'account-manager']
    },
    {
        id: 'sales-lost-deal',
        question: 'Tell me about a deal you lost and what you learned.',
        answer: 'Analyze why the deal was lost, what you could have done differently, and how you applied those lessons to future opportunities. Focus on growth and resilience.',
        category: 'technical',
        difficulty: 'intermediate',
        jobTitles: ['sales-representative', 'account-manager']
    },

    // Marketing
    {
        id: 'mkt-seo-strategy',
        question: 'How do you develop an SEO strategy?',
        answer: 'Discuss keyword research, on-page optimization, technical SEO, content creation, link building, and performance tracking. Mention tools you use and how you stay updated with algorithm changes.',
        category: 'technical',
        difficulty: 'intermediate',
        jobTitles: ['digital-marketing-manager', 'seo-specialist']
    },
    {
        id: 'mkt-content-strategy',
        question: 'How do you measure content marketing success?',
        answer: 'Discuss metrics like traffic, engagement, conversions, lead generation, and brand awareness. Explain how you use analytics tools to attribute results and optimize content performance.',
        category: 'technical',
        difficulty: 'intermediate',
        jobTitles: ['content-marketing-manager', 'digital-marketing-manager']
    },
    {
        id: 'mkt-campaign',
        question: 'Walk me through a successful marketing campaign you ran.',
        answer: 'Describe the campaign goals, target audience, channels used, creative approach, budget allocation, and results. Highlight key metrics and what made it successful.',
        category: 'technical',
        difficulty: 'intermediate',
        jobTitles: ['digital-marketing-manager', 'social-media-manager']
    },
    {
        id: 'mkt-social-media',
        question: 'How do you build engagement on social media?',
        answer: 'Discuss content strategy, community management, consistent posting, engaging with followers, and using platform-specific features. Mention how you tailor content for each platform.',
        category: 'technical',
        difficulty: 'intermediate',
        jobTitles: ['social-media-manager', 'digital-marketing-manager']
    },
    {
        id: 'mkt-paid-ads',
        question: 'How do you optimize paid advertising campaigns?',
        answer: 'Discuss A/B testing ad copy, targeting refinements, bid management, budget allocation, and analyzing ROI. Mention platforms like Google Ads and Facebook Ads Manager.',
        category: 'technical',
        difficulty: 'intermediate',
        jobTitles: ['ppc-specialist', 'digital-marketing-manager']
    },
    {
        id: 'mkt-email',
        question: 'What makes an effective email marketing campaign?',
        answer: 'Discuss subject lines, segmentation, personalization, mobile optimization, clear CTAs, and testing. Explain how you measure open rates, click-through rates, and conversions.',
        category: 'technical',
        difficulty: 'intermediate',
        jobTitles: ['email-marketing-specialist', 'digital-marketing-manager']
    },

    // HR
    {
        id: 'hr-recruitment',
        question: 'What is your approach to recruiting top talent?',
        answer: 'Discuss sourcing strategies, employer branding, candidate experience, interview processes, and how you ensure diverse and qualified candidate pools.',
        category: 'technical',
        difficulty: 'intermediate',
        jobTitles: ['recruiter', 'talent-acquisition-specialist', 'hr-manager']
    },
    {
        id: 'hr-employee-relations',
        question: 'How do you handle employee relations issues?',
        answer: 'Focus on confidentiality, fairness, active listening, conflict resolution, and following company policy. Explain how you balance employee needs with company requirements.',
        category: 'technical',
        difficulty: 'intermediate',
        jobTitles: ['hr-manager', 'hr-coordinator']
    },
    {
        id: 'hr-onboarding',
        question: 'What makes an effective onboarding program?',
        answer: 'Discuss structured orientation, training plans, mentorship, regular check-ins, and clear performance expectations. Explain how good onboarding improves retention.',
        category: 'technical',
        difficulty: 'intermediate',
        jobTitles: ['hr-manager', 'hr-coordinator']
    },
    {
        id: 'hr-performance',
        question: 'How do you conduct performance reviews?',
        answer: 'Discuss setting clear expectations, regular feedback throughout the year, documentation, two-way communication, and creating development plans.',
        category: 'technical',
        difficulty: 'intermediate',
        jobTitles: ['hr-manager']
    },

    // Finance
    {
        id: 'fin-financial-statements',
        question: 'What financial statements do you analyze and why?',
        answer: 'Discuss income statement, balance sheet, and cash flow statement. Explain what each reveals about a company\'s financial health and decision-making.',
        category: 'technical',
        difficulty: 'intermediate',
        jobTitles: ['financial-analyst', 'accountant', 'financial-advisor']
    },
    {
        id: 'fin-budgeting',
        question: 'How do you approach budget preparation?',
        answer: 'Discuss analyzing historical data, forecasting revenue and expenses, accommodating strategic goals, and building in contingencies. Explain how you track variance throughout the year.',
        category: 'technical',
        difficulty: 'intermediate',
        jobTitles: ['accountant', 'financial-analyst']
    },
    {
        id: 'fin-variance',
        question: 'How do you analyze budget variances?',
        answer: 'Discuss identifying significant variances, investigating causes, determining if they\'re favorable or unfavorable, and recommending adjustments or corrective actions.',
        category: 'technical',
        difficulty: 'intermediate',
        jobTitles: ['accountant', 'financial-analyst']
    },

    // Customer Service
    {
        id: 'cs-difficult-customer',
        question: 'How do you handle an angry customer?',
        answer: 'Focus on active listening, empathy, remaining calm, not taking it personally, and finding a solution. Explain how you de-escalate situations while maintaining company policies.',
        category: 'technical',
        difficulty: 'intermediate',
        jobTitles: ['customer-service-representative', 'call-center-agent', 'customer-success-manager']
    },
    {
        id: 'cs-priority',
        question: 'How do you manage competing priorities?',
        answer: 'Discuss triage, response time commitments, multitasking, and clear communication about timelines. Mention tools you use to track and prioritize requests.',
        category: 'technical',
        difficulty: 'intermediate',
        jobTitles: ['customer-service-representative', 'customer-success-manager']
    }
]

// Behavioral questions specific to different scenarios
const behavioralQuestions: InterviewQuestion[] = [
    {
        id: 'beh-leadership',
        question: 'Tell me about a time you led a team through a difficult project.',
        answer: 'Use the STAR method. Describe the project challenges, how you motivated and coordinated the team, decisions you made, and the ultimate outcome. Highlight your leadership style and ability to bring out the best in others.',
        category: 'behavioral',
        difficulty: 'advanced',
        jobTitles: ['all']
    },
    {
        id: 'beh-failure',
        question: 'Tell me about a time you failed and what you learned.',
        answer: 'Be authentic about a genuine failure. Focus on what you learned, how you grew from the experience, and how it changed your approach. This demonstrates self-awareness and a growth mindset.',
        category: 'behavioral',
        difficulty: 'intermediate',
        jobTitles: ['all']
    },
    {
        id: 'beh-innovation',
        question: 'Describe a time you improved a process at work.',
        answer: 'Identify the inefficiency, explain your solution, describe implementation steps, and quantify the impact. This shows initiative, problem-solving skills, and business awareness.',
        category: 'behavioral',
        difficulty: 'intermediate',
        jobTitles: ['all']
    },
    {
        id: 'beh-feedback',
        question: 'Tell me about a time you received difficult feedback.',
        answer: 'Describe the feedback, your initial reaction, how you processed it, and the actions you took to improve. This demonstrates maturity, coachability, and professional growth.',
        category: 'behavioral',
        difficulty: 'intermediate',
        jobTitles: ['all']
    },
    {
        id: 'beh-multitask',
        question: 'How do you prioritize multiple competing deadlines?',
        answer: 'Explain your prioritization framework (urgency vs. importance, stakeholder communication, etc.). Provide an example of a time you successfully managed multiple projects simultaneously.',
        category: 'behavioral',
        difficulty: 'intermediate',
        jobTitles: ['all']
    },
    {
        id: 'beh-team-disagreement',
        question: 'Describe a time you disagreed with a team decision.',
        answer: 'Focus on how you respectfully expressed your views, listened to others\' perspectives, found common ground, and ultimately supported the team decision.',
        category: 'behavioral',
        difficulty: 'intermediate',
        jobTitles: ['all']
    },
    {
        id: 'beyond-job-description',
        question: 'Describe a time you went above and beyond your job duties.',
        answer: 'Share an example where you took initiative without being asked. Explain what motivated you, what you did, and the impact it had on the team or company.',
        category: 'behavioral',
        difficulty: 'intermediate',
        jobTitles: ['all']
    },
    {
        id: 'behave-learn-new-skill',
        question: 'Tell me about a time you had to learn a new skill quickly.',
        answer: 'Describe how you identified the need, the learning approach you took, challenges you faced, and how you applied the new skill. This shows adaptability and love of learning.',
        category: 'behavioral',
        difficulty: 'intermediate',
        jobTitles: ['all']
    },
    {
        id: 'beh-change-management',
        question: 'Describe a time you had to adapt to significant change.',
        answer: 'Discuss how you maintained flexibility during transitions like restructuring, new technology, or changing priorities. Highlight your ability to help others adapt as well.',
        category: 'behavioral',
        difficulty: 'intermediate',
        jobTitles: ['all']
    },
    {
        id: 'beh-integrity',
        question: 'Tell me about a time you faced an ethical dilemma at work.',
        answer: 'Describe the situation, the ethical considerations, how you sought guidance, and the decision you made. This demonstrates integrity and moral reasoning.',
        category: 'behavioral',
        difficulty: 'advanced',
        jobTitles: ['all']
    },
    {
        id: 'beh-mentor',
        question: 'Describe your experience mentoring or training others.',
        answer: 'Share how you identified development needs, created learning opportunities, provided feedback, and measured progress. Highlight the growth of those you mentored.',
        category: 'behavioral',
        difficulty: 'intermediate',
        jobTitles: ['all']
    },
    {
        id: 'behave-creative-solution',
        question: 'Describe a time you solved a problem with limited resources.',
        answer: 'Explain the constraints, creative solutions you considered, what you implemented, and the results. This demonstrates resourcefulness and innovative thinking.',
        category: 'behavioral',
        difficulty: 'intermediate',
        jobTitles: ['all']
    },
    {
        id: 'behave-cross-functional',
        question: 'Describe a time you worked with a difficult colleague.',
        answer: 'Focus on professionalism and finding ways to collaborate effectively. Explain how you identified common goals, adapted your communication style, and achieved results.',
        category: 'behavioral',
        difficulty: 'intermediate',
        jobTitles: ['all']
    },
    {
        id: 'beh-detail-oriented',
        question: 'Tell me about a time you caught an error that others missed.',
        answer: 'Describe the situation, how you noticed the error, the investigation you did, and how you resolved it. This shows attention to detail and accountability.',
        category: 'behavioral',
        difficulty: 'intermediate',
        jobTitles: ['all']
    },
    {
        id: 'beh-motivation',
        question: 'Describe a time you had to motivate a struggling team member.',
        answer: 'Explain how you identified the issue, provided support and encouragement, helped them find solutions, and ultimately helped them succeed.',
        category: 'behavioral',
        difficulty: 'advanced',
        jobTitles: ['all']
    },
    {
        id: 'behave-result-oriented',
        question: 'Describe a time you had to deliver results under extreme pressure.',
        answer: 'Share how you stayed focused, organized your time, communicated proactively, and delivered quality work despite the pressure.',
        category: 'behavioral',
        difficulty: 'intermediate',
        jobTitles: ['all']
    }
]

// Situational questions
const situationalQuestions: InterviewQuestion[] = [
    {
        id: 'sit-first-90-days',
        question: 'What would you accomplish in your first 90 days?',
        answer: 'Discuss learning the role and company, building relationships, understanding key challenges, identifying quick wins, and beginning to execute on longer-term initiatives. Show you\'re proactive but realistic.',
        category: 'situational',
        difficulty: 'intermediate',
        jobTitles: ['all']
    },
    {
        id: 'sit-coworker-not-pulling',
        question: 'What would you do if a coworker wasn\'t pulling their weight?',
        answer: 'First, try to understand if there are underlying issues. Offer support if appropriate. If it continues, have a respectful conversation. If still unresolved, involve a manager while following proper channels.',
        category: 'situational',
        difficulty: 'intermediate',
        jobTitles: ['all']
    },
    {
        id: 'sit-conflicting-deadlines',
        question: 'What would you do if given conflicting deadlines?',
        answer: 'Assess priorities with your manager, communicate realistic timelines, identify dependencies, and negotiate deliverables. Show you can manage expectations and deliver quality work.',
        category: 'situational',
        difficulty: 'intermediate',
        jobTitles: ['all']
    },
    {
        id: 'sit-new-manager',
        question: 'How would you handle a micromanager boss?',
        answer: 'Focus on over-communicating progress to build trust, asking for clarity on expectations, and showing you can deliver independently while keeping them informed.',
        category: 'situational',
        difficulty: 'intermediate',
        jobTitles: ['all']
    },
    {
        id: 'sit-skill-gap',
        question: 'What would you do if you lacked a required skill?',
        answer: 'Acknowledge the gap, demonstrate how you\'re quickly addressing it, and highlight related strengths. Show eagerness to learn and grow.',
        category: 'situational',
        difficulty: 'intermediate',
        jobTitles: ['all']
    },
    {
        id: 'sit-project-cancelled',
        question: 'What would you do if your project got cancelled mid-way?',
        answer: 'Focus on understanding the reasons, documenting progress made, identifying reusable work, and quickly transitioning to new priorities without losing momentum.',
        category: 'situational',
        difficulty: 'intermediate',
        jobTitles: ['all']
    }
]

export const interviewQuestions = [
    ...commonQuestions,
    ...technicalQuestions,
    ...behavioralQuestions,
    ...situationalQuestions
]

// Helper function to get questions for a specific job
export function getQuestionsForJob(jobSlug: string): InterviewQuestion[] {
    return interviewQuestions.filter(q =>
        q.jobTitles.includes('all') ||
        q.jobTitles.includes(jobSlug)
    )
}

// Helper function to get questions by category
export function getQuestionsByCategory(category: InterviewQuestion['category']): InterviewQuestion[] {
    return interviewQuestions.filter(q => q.category === category)
}
