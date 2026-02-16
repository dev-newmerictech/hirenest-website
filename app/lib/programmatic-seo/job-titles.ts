import { JobTitle } from './types'

export const jobTitles: JobTitle[] = [
    // Technology
    {
        id: 'software-engineer',
        title: 'Software Engineer',
        slug: 'software-engineer',
        category: 'technology',
        aliases: ['Software Developer', 'Full Stack Developer', 'Backend Developer', 'Frontend Developer'],
        averageSalary: 115000,
        growthRate: 25
    },
    {
        id: 'data-scientist',
        title: 'Data Scientist',
        slug: 'data-scientist',
        category: 'technology',
        aliases: ['Data Analyst', 'Machine Learning Engineer'],
        averageSalary: 130000,
        growthRate: 35
    },
    {
        id: 'product-manager',
        title: 'Product Manager',
        slug: 'product-manager',
        category: 'technology',
        aliases: ['Senior Product Manager', 'Technical Product Manager'],
        averageSalary: 125000,
        growthRate: 20
    },
    {
        id: 'devops-engineer',
        title: 'DevOps Engineer',
        slug: 'devops-engineer',
        category: 'technology',
        aliases: ['Site Reliability Engineer', 'DevOps Specialist'],
        averageSalary: 120000,
        growthRate: 30
    },
    {
        id: 'ux-designer',
        title: 'UX Designer',
        slug: 'ux-designer',
        category: 'design',
        aliases: ['UI/UX Designer', 'User Experience Designer', 'Product Designer'],
        averageSalary: 95000,
        growthRate: 15
    },
    {
        id: 'qa-engineer',
        title: 'QA Engineer',
        slug: 'qa-engineer',
        category: 'technology',
        aliases: ['Quality Assurance Engineer', 'Test Engineer', 'Software Tester'],
        averageSalary: 85000,
        growthRate: 12
    },
    {
        id: 'frontend-developer',
        title: 'Frontend Developer',
        slug: 'frontend-developer',
        category: 'technology',
        aliases: ['React Developer', 'Front End Developer', 'Web Developer'],
        averageSalary: 105000,
        growthRate: 20
    },
    {
        id: 'backend-developer',
        title: 'Backend Developer',
        slug: 'backend-developer',
        category: 'technology',
        aliases: ['Back End Developer', 'Server-side Developer'],
        averageSalary: 110000,
        growthRate: 22
    },
    {
        id: 'full-stack-developer',
        title: 'Full Stack Developer',
        slug: 'full-stack-developer',
        category: 'technology',
        aliases: ['Fullstack Developer', 'Full-Stack Engineer'],
        averageSalary: 115000,
        growthRate: 25
    },
    {
        id: 'mobile-developer',
        title: 'Mobile Developer',
        slug: 'mobile-developer',
        category: 'technology',
        aliases: ['iOS Developer', 'Android Developer', 'App Developer'],
        averageSalary: 110000,
        growthRate: 20
    },

    // Marketing
    {
        id: 'digital-marketing-manager',
        title: 'Digital Marketing Manager',
        slug: 'digital-marketing-manager',
        category: 'marketing',
        aliases: ['Online Marketing Manager', 'Digital Marketing Specialist'],
        averageSalary: 85000,
        growthRate: 15
    },
    {
        id: 'seo-specialist',
        title: 'SEO Specialist',
        slug: 'seo-specialist',
        category: 'marketing',
        aliases: ['SEO Manager', 'Search Engine Optimization Specialist'],
        averageSalary: 65000,
        growthRate: 18
    },
    {
        id: 'content-marketing-manager',
        title: 'Content Marketing Manager',
        slug: 'content-marketing-manager',
        category: 'marketing',
        aliases: ['Content Manager', 'Content Strategist'],
        averageSalary: 80000,
        growthRate: 14
    },
    {
        id: 'social-media-manager',
        title: 'Social Media Manager',
        slug: 'social-media-manager',
        category: 'marketing',
        aliases: ['Social Media Specialist', 'Community Manager'],
        averageSalary: 65000,
        growthRate: 12
    },
    {
        id: 'ppc-specialist',
        title: 'PPC Specialist',
        slug: 'ppc-specialist',
        category: 'marketing',
        aliases: ['Paid Search Specialist', 'Google Ads Specialist'],
        averageSalary: 70000,
        growthRate: 16
    },
    {
        id: 'email-marketing-specialist',
        title: 'Email Marketing Specialist',
        slug: 'email-marketing-specialist',
        category: 'marketing',
        aliases: ['Email Marketing Manager', 'Email Campaign Manager'],
        averageSalary: 62000,
        growthRate: 10
    },

    // Sales
    {
        id: 'sales-representative',
        title: 'Sales Representative',
        slug: 'sales-representative',
        category: 'sales',
        aliases: ['Sales Rep', 'Sales Associate', 'Sales Executive'],
        averageSalary: 55000,
        growthRate: 8
    },
    {
        id: 'account-manager',
        title: 'Account Manager',
        slug: 'account-manager',
        category: 'sales',
        aliases: ['Client Manager', 'Customer Success Manager'],
        averageSalary: 75000,
        growthRate: 12
    },
    {
        id: 'business-development-manager',
        title: 'Business Development Manager',
        slug: 'business-development-manager',
        category: 'sales',
        aliases: ['BDM', 'Business Development Specialist'],
        averageSalary: 90000,
        growthRate: 15
    },
    {
        id: 'sales-manager',
        title: 'Sales Manager',
        slug: 'sales-manager',
        category: 'sales',
        aliases: ['Head of Sales', 'Sales Director'],
        averageSalary: 110000,
        growthRate: 10
    },

    // HR
    {
        id: 'hr-manager',
        title: 'HR Manager',
        slug: 'hr-manager',
        category: 'hr',
        aliases: ['Human Resources Manager', 'HR Director'],
        averageSalary: 85000,
        growthRate: 8
    },
    {
        id: 'recruiter',
        title: 'Recruiter',
        slug: 'recruiter',
        category: 'hr',
        aliases: ['Technical Recruiter', 'Talent Acquisition Specialist', 'Recruitment Consultant'],
        averageSalary: 60000,
        growthRate: 12
    },
    {
        id: 'talent-acquisition-specialist',
        title: 'Talent Acquisition Specialist',
        slug: 'talent-acquisition-specialist',
        category: 'hr',
        aliases: ['Talent Acquisition Coordinator', 'TA Specialist'],
        averageSalary: 65000,
        growthRate: 14
    },
    {
        id: 'hr-coordinator',
        title: 'HR Coordinator',
        slug: 'hr-coordinator',
        category: 'hr',
        aliases: ['HR Assistant', 'Human Resources Coordinator'],
        averageSalary: 50000,
        growthRate: 10
    },

    // Finance
    {
        id: 'financial-analyst',
        title: 'Financial Analyst',
        slug: 'financial-analyst',
        category: 'finance',
        aliases: ['Business Analyst', 'Senior Financial Analyst'],
        averageSalary: 80000,
        growthRate: 10
    },
    {
        id: 'accountant',
        title: 'Accountant',
        slug: 'accountant',
        category: 'finance',
        aliases: ['Staff Accountant', 'Senior Accountant'],
        averageSalary: 65000,
        growthRate: 6
    },
    {
        id: 'bookkeeper',
        title: 'Bookkeeper',
        slug: 'bookkeeper',
        category: 'finance',
        aliases: ['Full Charge Bookkeeper'],
        averageSalary: 45000,
        growthRate: 5
    },
    {
        id: 'financial-advisor',
        title: 'Financial Advisor',
        slug: 'financial-advisor',
        category: 'finance',
        aliases: ['Wealth Manager', 'Investment Advisor'],
        averageSalary: 90000,
        growthRate: 12
    },

    // Healthcare
    {
        id: 'registered-nurse',
        title: 'Registered Nurse',
        slug: 'registered-nurse',
        category: 'healthcare',
        aliases: ['RN', 'Staff Nurse'],
        averageSalary: 80000,
        growthRate: 12
    },
    {
        id: 'medical-assistant',
        title: 'Medical Assistant',
        slug: 'medical-assistant',
        category: 'healthcare',
        aliases: ['Certified Medical Assistant', 'Clinical Assistant'],
        averageSalary: 40000,
        growthRate: 18
    },
    {
        id: 'dental-hygienist',
        title: 'Dental Hygienist',
        slug: 'dental-hygienist',
        category: 'healthcare',
        aliases: ['Registered Dental Hygienist'],
        averageSalary: 78000,
        growthRate: 11
    },
    {
        id: 'pharmacy-technician',
        title: 'Pharmacy Technician',
        slug: 'pharmacy-technician',
        category: 'healthcare',
        aliases: ['Pharmacy Tech', 'Certified Pharmacy Technician'],
        averageSalary: 38000,
        growthRate: 8
    },

    // Admin
    {
        id: 'executive-assistant',
        title: 'Executive Assistant',
        slug: 'executive-assistant',
        category: 'admin',
        aliases: ['EA', 'Executive Administrator'],
        averageSalary: 65000,
        growthRate: 8
    },
    {
        id: 'administrative-assistant',
        title: 'Administrative Assistant',
        slug: 'administrative-assistant',
        category: 'admin',
        aliases: ['Admin Assistant', 'Office Assistant'],
        averageSalary: 45000,
        growthRate: 5
    },
    {
        id: 'office-manager',
        title: 'Office Manager',
        slug: 'office-manager',
        category: 'admin',
        aliases: ['Office Administrator'],
        averageSalary: 55000,
        growthRate: 6
    },
    {
        id: 'receptionist',
        title: 'Receptionist',
        slug: 'receptionist',
        category: 'admin',
        aliases: ['Front Desk Receptionist', 'Front Desk Agent'],
        averageSalary: 35000,
        growthRate: 4
    },

    // Customer Service
    {
        id: 'customer-service-representative',
        title: 'Customer Service Representative',
        slug: 'customer-service-representative',
        category: 'customer-service',
        aliases: ['CSR', 'Customer Service Agent', 'Support Representative'],
        averageSalary: 40000,
        growthRate: 5
    },
    {
        id: 'call-center-agent',
        title: 'Call Center Agent',
        slug: 'call-center-agent',
        category: 'customer-service',
        aliases: ['Call Center Representative', 'Phone Agent'],
        averageSalary: 38000,
        growthRate: 4
    },
    {
        id: 'customer-success-manager',
        title: 'Customer Success Manager',
        slug: 'customer-success-manager',
        category: 'customer-service',
        aliases: ['CSM', 'Client Success Manager'],
        averageSalary: 75000,
        growthRate: 20
    },

    // Design
    {
        id: 'graphic-designer',
        title: 'Graphic Designer',
        slug: 'graphic-designer',
        category: 'design',
        aliases: ['Senior Graphic Designer', 'Visual Designer'],
        averageSalary: 55000,
        growthRate: 8
    },
    {
        id: 'ui-designer',
        title: 'UI Designer',
        slug: 'ui-designer',
        category: 'design',
        aliases: ['User Interface Designer', 'UI/UX Designer'],
        averageSalary: 90000,
        growthRate: 15
    },

    // ========== 50 MORE JOB TONES ========== //

    // Technology - Additional
    {
        id: 'data-engineer',
        title: 'Data Engineer',
        slug: 'data-engineer',
        category: 'technology',
        aliases: ['Big Data Engineer', 'ETL Developer'],
        averageSalary: 125000,
        growthRate: 32
    },
    {
        id: 'machine-learning-engineer',
        title: 'Machine Learning Engineer',
        slug: 'machine-learning-engineer',
        category: 'technology',
        aliases: ['ML Engineer', 'AI Engineer'],
        averageSalary: 145000,
        growthRate: 40
    },
    {
        id: 'cloud-architect',
        title: 'Cloud Architect',
        slug: 'cloud-architect',
        category: 'technology',
        aliases: ['AWS Architect', 'Azure Architect', 'Solutions Architect'],
        averageSalary: 140000,
        growthRate: 28
    },
    {
        id: 'cybersecurity-analyst',
        title: 'Cybersecurity Analyst',
        slug: 'cybersecurity-analyst',
        category: 'technology',
        aliases: ['Security Analyst', 'Information Security Analyst'],
        averageSalary: 100000,
        growthRate: 33
    },
    {
        id: 'database-administrator',
        title: 'Database Administrator',
        slug: 'database-administrator',
        category: 'technology',
        aliases: ['DBA', 'Database Developer'],
        averageSalary: 95000,
        growthRate: 10
    },
    {
        id: 'systems-administrator',
        title: 'Systems Administrator',
        slug: 'systems-administrator',
        category: 'technology',
        aliases: ['SysAdmin', 'System Admin'],
        averageSalary: 85000,
        growthRate: 8
    },
    {
        id: 'network-engineer',
        title: 'Network Engineer',
        slug: 'network-engineer',
        category: 'technology',
        aliases: ['Network Administrator', 'Network Specialist'],
        averageSalary: 90000,
        growthRate: 12
    },
    {
        id: 'solutions-architect',
        title: 'Solutions Architect',
        slug: 'solutions-architect',
        category: 'technology',
        aliases: ['Technical Architect', 'Solutions Consultant'],
        averageSalary: 150000,
        growthRate: 25
    },
    {
        id: 'qa-automation-engineer',
        title: 'QA Automation Engineer',
        slug: 'qa-automation-engineer',
        category: 'technology',
        aliases: ['Automation Engineer', 'Test Automation Engineer'],
        averageSalary: 95000,
        growthRate: 18
    },
    {
        id: 'game-developer',
        title: 'Game Developer',
        slug: 'game-developer',
        category: 'technology',
        aliases: ['Game Programmer', 'Video Game Developer'],
        averageSalary: 100000,
        growthRate: 15
    },
    {
        id: 'python-developer',
        title: 'Python Developer',
        slug: 'python-developer',
        category: 'technology',
        aliases: ['Python Software Engineer', 'Backend Python Developer'],
        averageSalary: 120000,
        growthRate: 22
    },
    {
        id: 'java-developer',
        title: 'Java Developer',
        slug: 'java-developer',
        category: 'technology',
        aliases: ['Java Software Engineer', 'Senior Java Developer'],
        averageSalary: 115000,
        growthRate: 18
    },
    {
        id: 'data-analyst',
        title: 'Data Analyst',
        slug: 'data-analyst',
        category: 'technology',
        aliases: ['Business Data Analyst', 'BI Analyst'],
        averageSalary: 75000,
        growthRate: 22
    },
    {
        id: 'business-analyst',
        title: 'Business Analyst',
        slug: 'business-analyst',
        category: 'technology',
        aliases: ['Systems Analyst', 'IT Business Analyst'],
        averageSalary: 85000,
        growthRate: 14
    },
    {
        id: 'it-manager',
        title: 'IT Manager',
        slug: 'it-manager',
        category: 'technology',
        aliases: ['Information Technology Manager', 'IT Director'],
        averageSalary: 120000,
        growthRate: 12
    },
    {
        id: 'technical-lead',
        title: 'Technical Lead',
        slug: 'technical-lead',
        category: 'technology',
        aliases: ['Team Lead', 'Tech Lead Developer'],
        averageSalary: 135000,
        growthRate: 18
    },
    {
        id: 'engineering-manager',
        title: 'Engineering Manager',
        slug: 'engineering-manager',
        category: 'technology',
        aliases: ['Software Engineering Manager', 'Manager of Engineering'],
        averageSalary: 145000,
        growthRate: 15
    },
    {
        id: 'blockchain-developer',
        title: 'Blockchain Developer',
        slug: 'blockchain-developer',
        category: 'technology',
        aliases: ['Web3 Developer', 'Smart Contract Developer'],
        averageSalary: 130000,
        growthRate: 35
    },
    {
        id: 'ai-engineer',
        title: 'AI Engineer',
        slug: 'ai-engineer',
        category: 'technology',
        aliases: ['Artificial Intelligence Engineer', 'ML Engineer'],
        averageSalary: 140000,
        growthRate: 38
    },

    // Marketing - Additional
    {
        id: 'brand-manager',
        title: 'Brand Manager',
        slug: 'brand-manager',
        category: 'marketing',
        aliases: ['Brand Strategist', 'Marketing Brand Manager'],
        averageSalary: 90000,
        growthRate: 12
    },
    {
        id: 'growth-marketer',
        title: 'Growth Marketer',
        slug: 'growth-marketer',
        category: 'marketing',
        aliases: ['Growth Hacker', 'Growth Marketing Manager'],
        averageSalary: 95000,
        growthRate: 20
    },
    {
        id: 'marketing-analyst',
        title: 'Marketing Analyst',
        slug: 'marketing-analyst',
        category: 'marketing',
        aliases: ['Digital Marketing Analyst', 'Marketing Data Analyst'],
        averageSalary: 70000,
        growthRate: 16
    },
    {
        id: 'marketing-coordinator',
        title: 'Marketing Coordinator',
        slug: 'marketing-coordinator',
        category: 'marketing',
        aliases: ['Marketing Assistant', 'Campaign Coordinator'],
        averageSalary: 50000,
        growthRate: 10
    },
    {
        id: 'affiliate-marketing-manager',
        title: 'Affiliate Marketing Manager',
        slug: 'affiliate-marketing-manager',
        category: 'marketing',
        aliases: ['Affiliate Manager', 'Partnership Marketing Manager'],
        averageSalary: 75000,
        growthRate: 18
    },
    {
        id: 'inbound-marketing-specialist',
        title: 'Inbound Marketing Specialist',
        slug: 'inbound-marketing-specialist',
        category: 'marketing',
        aliases: ['Inbound Marketing Manager', 'Lead Generation Specialist'],
        averageSalary: 65000,
        growthRate: 14
    },
    {
        id: 'product-marketing-manager',
        title: 'Product Marketing Manager',
        slug: 'product-marketing-manager',
        category: 'marketing',
        aliases: ['PMM', 'Product Marketer'],
        averageSalary: 110000,
        growthRate: 16
    },

    // Sales - Additional
    {
        id: 'sales-engineer',
        title: 'Sales Engineer',
        slug: 'sales-engineer',
        category: 'sales',
        aliases: ['Solutions Engineer', 'Technical Sales Engineer'],
        averageSalary: 105000,
        growthRate: 18
    },
    {
        id: 'inside-sales-representative',
        title: 'Inside Sales Representative',
        slug: 'inside-sales-representative',
        category: 'sales',
        aliases: ['Inside Sales Rep', 'Inside Sales Executive'],
        averageSalary: 50000,
        growthRate: 8
    },
    {
        id: 'outside-sales-representative',
        title: 'Outside Sales Representative',
        slug: 'outside-sales-representative',
        category: 'sales',
        aliases: ['Field Sales Representative', 'Outside Sales Rep'],
        averageSalary: 65000,
        growthRate: 6
    },
    {
        id: 'sales-operations-specialist',
        title: 'Sales Operations Specialist',
        slug: 'sales-operations-specialist',
        category: 'sales',
        aliases: ['Sales Operations Analyst', 'RevOps Specialist'],
        averageSalary: 75000,
        growthRate: 15
    },
    {
        id: 'customer-success-representative',
        title: 'Customer Success Representative',
        slug: 'customer-success-representative',
        category: 'sales',
        aliases: ['Customer Success Specialist', 'CSR Success'],
        averageSalary: 55000,
        growthRate: 18
    },
    {
        id: 'regional-sales-manager',
        title: 'Regional Sales Manager',
        slug: 'regional-sales-manager',
        category: 'sales',
        aliases: ['Area Sales Manager', 'Territory Sales Manager'],
        averageSalary: 105000,
        growthRate: 10
    },
    {
        id: 'sales-executive',
        title: 'Sales Executive',
        slug: 'sales-executive',
        category: 'sales',
        aliases: ['Senior Sales Representative', 'Enterprise Sales Executive'],
        averageSalary: 80000,
        growthRate: 10
    },
    {
        id: 'lead-generation-specialist',
        title: 'Lead Generation Specialist',
        slug: 'lead-generation-specialist',
        category: 'sales',
        aliases: ['Lead Gen Specialist', 'Sales Development Representative'],
        averageSalary: 55000,
        growthRate: 14
    },

    // HR - Additional
    {
        id: 'hr-director',
        title: 'HR Director',
        slug: 'hr-director',
        category: 'hr',
        aliases: ['Director of Human Resources', 'HR VP'],
        averageSalary: 110000,
        growthRate: 10
    },
    {
        id: 'hr-generalist',
        title: 'HR Generalist',
        slug: 'hr-generalist',
        category: 'hr',
        aliases: ['Human Resources Generalist', 'HR Specialist'],
        averageSalary: 65000,
        growthRate: 10
    },
    {
        id: 'compensation-benefits-manager',
        title: 'Compensation and Benefits Manager',
        slug: 'compensation-benefits-manager',
        category: 'hr',
        aliases: ['Comp & Benefits Manager', 'Total Rewards Manager'],
        averageSalary: 95000,
        growthRate: 12
    },
    {
        id: 'training-development-manager',
        title: 'Training and Development Manager',
        slug: 'training-development-manager',
        category: 'hr',
        aliases: ['Learning and Development Manager', 'L&D Manager'],
        averageSalary: 90000,
        growthRate: 14
    },
    {
        id: 'employee-relations-manager',
        title: 'Employee Relations Manager',
        slug: 'employee-relations-manager',
        category: 'hr',
        aliases: ['ER Manager', 'Labor Relations Manager'],
        averageSalary: 85000,
        growthRate: 10
    },
    {
        id: 'hr-business-partner',
        title: 'HR Business Partner',
        slug: 'hr-business-partner',
        category: 'hr',
        aliases: ['HRBP', 'Strategic HR Partner'],
        averageSalary: 95000,
        growthRate: 12
    },
    {
        id: 'technical-recruiter',
        title: 'Technical Recruiter',
        slug: 'technical-recruiter',
        category: 'hr',
        aliases: ['Tech Recruiter', 'IT Recruiter', 'Software Recruiter'],
        averageSalary: 70000,
        growthRate: 15
    },
    {
        id: 'executive-recruiter',
        title: 'Executive Recruiter',
        slug: 'executive-recruiter',
        category: 'hr',
        aliases: ['Headhunter', 'Executive Search Consultant'],
        averageSalary: 90000,
        growthRate: 12
    },

    // Finance - Additional
    {
        id: 'finance-manager',
        title: 'Finance Manager',
        slug: 'finance-manager',
        category: 'finance',
        aliases: ['Corporate Finance Manager', 'Financial Planning Manager'],
        averageSalary: 100000,
        growthRate: 12
    },
    {
        id: 'controller',
        title: 'Controller',
        slug: 'controller',
        category: 'finance',
        aliases: ['Financial Controller', 'Comptroller'],
        averageSalary: 110000,
        growthRate: 10
    },
    {
        id: 'cpa',
        title: 'CPA',
        slug: 'cpa',
        category: 'finance',
        aliases: ['Certified Public Accountant', 'Public Accountant'],
        averageSalary: 85000,
        growthRate: 8
    },
    {
        id: 'investment-analyst',
        title: 'Investment Analyst',
        slug: 'investment-analyst',
        category: 'finance',
        aliases: ['Financial Analyst', 'Securities Analyst'],
        averageSalary: 95000,
        growthRate: 12
    },
    {
        id: 'credit-analyst',
        title: 'Credit Analyst',
        slug: 'credit-analyst',
        category: 'finance',
        aliases: ['Risk Analyst', 'Credit Risk Analyst'],
        averageSalary: 65000,
        growthRate: 10
    },
    {
        id: 'budget-analyst',
        title: 'Budget Analyst',
        slug: 'budget-analyst',
        category: 'finance',
        aliases: ['Financial Planning Analyst', 'Budget Manager'],
        averageSalary: 70000,
        growthRate: 10
    },
    {
        id: 'tax-analyst',
        title: 'Tax Analyst',
        slug: 'tax-analyst',
        category: 'finance',
        aliases: ['Tax Specialist', 'Tax Preparer'],
        averageSalary: 70000,
        growthRate: 8
    },
    {
        id: 'treasury-analyst',
        title: 'Treasury Analyst',
        slug: 'treasury-analyst',
        category: 'finance',
        aliases: ['Treasury Specialist', 'Cash Management Analyst'],
        averageSalary: 85000,
        growthRate: 12
    },

    // Healthcare - Additional
    {
        id: 'nurse-practitioner',
        title: 'Nurse Practitioner',
        slug: 'nurse-practitioner',
        category: 'healthcare',
        aliases: ['NP', 'Advanced Practice Nurse'],
        averageSalary: 115000,
        growthRate: 40
    },
    {
        id: 'licensed-practical-nurse',
        title: 'Licensed Practical Nurse',
        slug: 'licensed-practical-nurse',
        category: 'healthcare',
        aliases: ['LPN', 'LVN'],
        averageSalary: 55000,
        growthRate: 10
    },
    {
        id: 'medical-technologist',
        title: 'Medical Technologist',
        slug: 'medical-technologist',
        category: 'healthcare',
        aliases: ['Clinical Laboratory Scientist', 'Med Tech'],
        averageSalary: 65000,
        growthRate: 12
    },
    {
        id: 'radiologic-technologist',
        title: 'Radiologic Technologist',
        slug: 'radiologic-technologist',
        category: 'healthcare',
        aliases: ['X-Ray Technician', 'Radiology Tech'],
        averageSalary: 70000,
        growthRate: 10
    },
    {
        id: 'physical-therapist-assistant',
        title: 'Physical Therapist Assistant',
        slug: 'physical-therapist-assistant',
        category: 'healthcare',
        aliases: ['PTA', 'Physical Therapy Assistant'],
        averageSalary: 60000,
        growthRate: 18
    },
    {
        id: 'occupational-therapist',
        title: 'Occupational Therapist',
        slug: 'occupational-therapist',
        category: 'healthcare',
        aliases: ['OT', 'Occupational Therapy Specialist'],
        averageSalary: 90000,
        growthRate: 18
    },
    {
        id: 'physician-assistant',
        title: 'Physician Assistant',
        slug: 'physician-assistant',
        category: 'healthcare',
        aliases: ['PA', 'PA-C'],
        averageSalary: 115000,
        growthRate: 28
    },
    {
        id: 'health-information-technician',
        title: 'Health Information Technician',
        slug: 'health-information-technician',
        category: 'healthcare',
        aliases: ['Medical Records Technician', 'HIT'],
        averageSalary: 48000,
        growthRate: 14
    },
    {
        id: 'medical-biller',
        title: 'Medical Biller',
        slug: 'medical-biller',
        category: 'healthcare',
        aliases: ['Medical Billing Specialist', 'Insurance Biller'],
        averageSalary: 45000,
        growthRate: 10
    },
    {
        id: 'veterinary-technician',
        title: 'Veterinary Technician',
        slug: 'veterinary-technician',
        category: 'healthcare',
        aliases: ['Vet Tech', 'Veterinary Nurse'],
        averageSalary: 40000,
        growthRate: 15
    },

    // Admin - Additional
    {
        id: 'personal-assistant',
        title: 'Personal Assistant',
        slug: 'personal-assistant',
        category: 'admin',
        aliases: ['PA', 'Executive Personal Assistant'],
        averageSalary: 55000,
        growthRate: 6
    },
    {
        id: 'virtual-assistant',
        title: 'Virtual Assistant',
        slug: 'virtual-assistant',
        category: 'admin',
        aliases: ['VA', 'Remote Assistant'],
        averageSalary: 45000,
        growthRate: 20
    },
    {
        id: 'project-coordinator',
        title: 'Project Coordinator',
        slug: 'project-coordinator',
        category: 'admin',
        aliases: ['Project Administrator', 'Program Coordinator'],
        averageSalary: 60000,
        growthRate: 12
    },
    {
        id: 'program-coordinator',
        title: 'Program Coordinator',
        slug: 'program-coordinator',
        category: 'admin',
        aliases: ['Program Manager', 'Grant Coordinator'],
        averageSalary: 58000,
        growthRate: 10
    },
    {
        id: 'data-entry-clerk',
        title: 'Data Entry Clerk',
        slug: 'data-entry-clerk',
        category: 'admin',
        aliases: ['Data Entry Specialist', 'Typist'],
        averageSalary: 38000,
        growthRate: 5
    },
    {
        id: 'file-clerk',
        title: 'File Clerk',
        slug: 'file-clerk',
        category: 'admin',
        aliases: ['Records Clerk', 'Administrative Clerk'],
        averageSalary: 35000,
        growthRate: 3
    },

    // Customer Service - Additional
    {
        id: 'technical-support-specialist',
        title: 'Technical Support Specialist',
        slug: 'technical-support-specialist',
        category: 'customer-service',
        aliases: ['IT Support Specialist', 'Help Desk Technician'],
        averageSalary: 55000,
        growthRate: 10
    },
    {
        id: 'help-desk-analyst',
        title: 'Help Desk Analyst',
        slug: 'help-desk-analyst',
        category: 'customer-service',
        aliases: ['Help Desk Technician', 'Service Desk Analyst'],
        averageSalary: 50000,
        growthRate: 8
    },
    {
        id: 'client-services-representative',
        title: 'Client Services Representative',
        slug: 'client-services-representative',
        category: 'customer-service',
        aliases: ['Client Service Rep', 'Account Services Representative'],
        averageSalary: 48000,
        growthRate: 8
    },
    {
        id: 'customer-support-specialist',
        title: 'Customer Support Specialist',
        slug: 'customer-support-specialist',
        category: 'customer-service',
        aliases: ['Customer Support Rep', 'Client Support Specialist'],
        averageSalary: 45000,
        growthRate: 8
    },

    // Design - Additional
    {
        id: 'web-designer',
        title: 'Web Designer',
        slug: 'web-designer',
        category: 'design',
        aliases: ['Website Designer', 'Web Developer'],
        averageSalary: 65000,
        growthRate: 12
    },
    {
        id: 'product-designer',
        title: 'Product Designer',
        slug: 'product-designer',
        category: 'design',
        aliases: ['Digital Product Designer', 'UX/UI Designer'],
        averageSalary: 100000,
        growthRate: 18
    },
    {
        id: 'motion-graphic-designer',
        title: 'Motion Graphic Designer',
        slug: 'motion-graphic-designer',
        category: 'design',
        aliases: ['Motion Designer', 'Animation Designer'],
        averageSalary: 65000,
        growthRate: 15
    },
    {
        id: 'visual-designer',
        title: 'Visual Designer',
        slug: 'visual-designer',
        category: 'design',
        aliases: ['Brand Designer', 'Creative Designer'],
        averageSalary: 75000,
        growthRate: 12
    },
    {
        id: 'industrial-designer',
        title: 'Industrial Designer',
        slug: 'industrial-designer',
        category: 'design',
        aliases: ['Product Design Engineer', 'Manufacturing Designer'],
        averageSalary: 80000,
        growthRate: 10
    },

    // Engineering - Additional
    {
        id: 'mechanical-engineer',
        title: 'Mechanical Engineer',
        slug: 'mechanical-engineer',
        category: 'engineering',
        aliases: ['ME', 'Mech Design Engineer'],
        averageSalary: 95000,
        growthRate: 8
    },
    {
        id: 'civil-engineer',
        title: 'Civil Engineer',
        slug: 'civil-engineer',
        category: 'engineering',
        aliases: ['Civil Engineering Engineer', 'Structural Engineer'],
        averageSalary: 90000,
        growthRate: 8
    },
    {
        id: 'electrical-engineer',
        title: 'Electrical Engineer',
        slug: 'electrical-engineer',
        category: 'engineering',
        aliases: ['EE', 'Electrical Design Engineer'],
        averageSalary: 95000,
        growthRate: 10
    },
    {
        id: 'chemical-engineer',
        title: 'Chemical Engineer',
        slug: 'chemical-engineer',
        category: 'engineering',
        aliases: ['ChemE', 'Process Engineer'],
        averageSalary: 100000,
        growthRate: 10
    },
    {
        id: 'biomedical-engineer',
        title: 'Biomedical Engineer',
        slug: 'biomedical-engineer',
        category: 'engineering',
        aliases: ['Bio Engineer', 'Medical Device Engineer'],
        averageSalary: 100000,
        growthRate: 15
    },
    {
        id: 'industrial-engineer',
        title: 'Industrial Engineer',
        slug: 'industrial-engineer',
        category: 'engineering',
        aliases: ['IE', 'Manufacturing Engineer'],
        averageSalary: 95000,
        growthRate: 12
    },
    {
        id: 'environmental-engineer',
        title: 'Environmental Engineer',
        slug: 'environmental-engineer',
        category: 'engineering',
        aliases: ['Environmental Engineering Specialist', 'Green Engineer'],
        averageSalary: 92000,
        growthRate: 15
    },
    {
        id: 'aerospace-engineer',
        title: 'Aerospace Engineer',
        slug: 'aerospace-engineer',
        category: 'engineering',
        aliases: ['Astronautical Engineer', 'Flight Engineer'],
        averageSalary: 120000,
        growthRate: 10
    },

    // Legal
    {
        id: 'paralegal',
        title: 'Paralegal',
        slug: 'paralegal',
        category: 'legal',
        aliases: ['Legal Assistant', 'Legal Secretary'],
        averageSalary: 58000,
        growthRate: 10
    },
    {
        id: 'legal-assistant',
        title: 'Legal Assistant',
        slug: 'legal-assistant',
        category: 'legal',
        aliases: ['Legal Secretary', 'Law Office Assistant'],
        averageSalary: 52000,
        growthRate: 8
    },

    // ========== 50 MORE JOB TITLES (Batch 2) ========== //

    // Technology - Additional Batch 2
    {
        id: 'security-engineer',
        title: 'Security Engineer',
        slug: 'security-engineer',
        category: 'technology',
        aliases: ['Application Security Engineer', 'InfoSec Engineer'],
        averageSalary: 130000,
        growthRate: 30
    },
    {
        id: 'site-reliability-engineer',
        title: 'Site Reliability Engineer',
        slug: 'site-reliability-engineer',
        category: 'technology',
        aliases: ['SRE', 'Reliability Engineer'],
        averageSalary: 140000,
        growthRate: 28
    },
    {
        id: 'platform-engineer',
        title: 'Platform Engineer',
        slug: 'platform-engineer',
        category: 'technology',
        aliases: ['Platform DevOps Engineer', 'Infrastructure Developer'],
        averageSalary: 145000,
        growthRate: 32
    },
    {
        id: 'embedded-systems-engineer',
        title: 'Embedded Systems Engineer',
        slug: 'embedded-systems-engineer',
        category: 'technology',
        aliases: ['Firmware Engineer', 'Embedded Software Engineer'],
        averageSalary: 115000,
        growthRate: 15
    },
    {
        id: 'ios-developer',
        title: 'iOS Developer',
        slug: 'ios-developer',
        category: 'technology',
        aliases: ['iPhone Developer', 'Swift Developer'],
        averageSalary: 120000,
        growthRate: 22
    },
    {
        id: 'android-developer',
        title: 'Android Developer',
        slug: 'android-developer',
        category: 'technology',
        aliases: ['Android Engineer', 'Kotlin Developer'],
        averageSalary: 115000,
        growthRate: 20
    },
    {
        id: 'flutter-developer',
        title: 'Flutter Developer',
        slug: 'flutter-developer',
        category: 'technology',
        aliases: ['Flutter Mobile Developer', 'Dart Developer'],
        averageSalary: 110000,
        growthRate: 25
    },
    {
        id: 'react-native-developer',
        title: 'React Native Developer',
        slug: 'react-native-developer',
        category: 'technology',
        aliases: ['RN Developer', 'Mobile React Developer'],
        averageSalary: 115000,
        growthRate: 23
    },
    {
        id: 'software-architect',
        title: 'Software Architect',
        slug: 'software-architect',
        category: 'technology',
        aliases: ['Application Architect', 'Technical Architect'],
        averageSalary: 155000,
        growthRate: 18
    },
    {
        id: 'data-warehouse-architect',
        title: 'Data Warehouse Architect',
        slug: 'data-warehouse-architect',
        category: 'technology',
        aliases: ['Data Architect', 'Enterprise Data Architect'],
        averageSalary: 140000,
        growthRate: 25
    },
    {
        id: 'etl-developer',
        title: 'ETL Developer',
        slug: 'etl-developer',
        category: 'technology',
        aliases: ['Data Integration Developer', 'ETL Specialist'],
        averageSalary: 105000,
        growthRate: 20
    },
    {
        id: 'business-intelligence-developer',
        title: 'BI Developer',
        slug: 'bi-developer',
        category: 'technology',
        aliases: ['Business Intelligence Developer', 'Tableau Developer'],
        averageSalary: 100000,
        growthRate: 18
    },

    // Marketing - Additional Batch 2
    {
        id: 'chief-marketing-officer',
        title: 'Chief Marketing Officer',
        slug: 'chief-marketing-officer',
        category: 'marketing',
        aliases: ['CMO', 'VP of Marketing'],
        averageSalary: 180000,
        growthRate: 12
    },
    {
        id: 'marketing-director',
        title: 'Marketing Director',
        slug: 'marketing-director',
        category: 'marketing',
        aliases: ['Director of Marketing', 'Head of Marketing'],
        averageSalary: 140000,
        growthRate: 10
    },
    {
        id: 'communications-manager',
        title: 'Communications Manager',
        slug: 'communications-manager',
        category: 'marketing',
        aliases: ['Corporate Communications Manager', 'PR Manager'],
        averageSalary: 90000,
        growthRate: 10
    },
    {
        id: 'public-relations-manager',
        title: 'Public Relations Manager',
        slug: 'public-relations-manager',
        category: 'marketing',
        aliases: ['PR Manager', 'Media Relations Manager'],
        averageSalary: 85000,
        growthRate: 10
    },
    {
        id: 'event-marketing-manager',
        title: 'Event Marketing Manager',
        slug: 'event-marketing-manager',
        category: 'marketing',
        aliases: ['Events Manager', 'Event Coordinator'],
        averageSalary: 75000,
        growthRate: 12
    },
    {
        id: 'demand-generation-manager',
        title: 'Demand Generation Manager',
        slug: 'demand-generation-manager',
        category: 'marketing',
        aliases: ['Demand Gen Manager', 'Lead Generation Manager'],
        averageSalary: 105000,
        growthRate: 18
    },
    {
        id: 'marketing-operations-manager',
        title: 'Marketing Operations Manager',
        slug: 'marketing-operations-manager',
        category: 'marketing',
        aliases: ['Marketing Ops Manager', 'MOPs Manager'],
        averageSalary: 95000,
        growthRate: 16
    },
    {
        id: 'customer-insights-manager',
        title: 'Customer Insights Manager',
        slug: 'customer-insights-manager',
        category: 'marketing',
        aliases: ['Market Research Manager', 'Consumer Insights Manager'],
        averageSalary: 100000,
        growthRate: 14
    },
    {
        id: 'email-marketing-manager',
        title: 'Email Marketing Manager',
        slug: 'email-marketing-manager',
        category: 'marketing',
        aliases: ['Email Campaign Manager', 'Lifecycle Marketing Manager'],
        averageSalary: 85000,
        growthRate: 12
    },
    {
        id: 'content-writer',
        title: 'Content Writer',
        slug: 'content-writer',
        category: 'marketing',
        aliases: ['Copywriter', 'Content Creator'],
        averageSalary: 65000,
        growthRate: 12
    },
    {
        id: 'creative-director',
        title: 'Creative Director',
        slug: 'creative-director',
        category: 'marketing',
        aliases: ['Design Director', 'Creative Lead'],
        averageSalary: 130000,
        growthRate: 10
    },

    // Sales - Additional Batch 2
    {
        id: 'chief-revenue-officer',
        title: 'Chief Revenue Officer',
        slug: 'chief-revenue-officer',
        category: 'sales',
        aliases: ['CRO', 'VP of Sales'],
        averageSalary: 200000,
        growthRate: 15
    },
    {
        id: 'vp-of-sales',
        title: 'VP of Sales',
        slug: 'vp-of-sales',
        category: 'sales',
        aliases: ['Vice President of Sales', 'Sales Vice President'],
        averageSalary: 170000,
        growthRate: 12
    },
    {
        id: 'national-sales-manager',
        title: 'National Sales Manager',
        slug: 'national-sales-manager',
        category: 'sales',
        aliases: ['Country Sales Manager', 'National Sales Director'],
        averageSalary: 140000,
        growthRate: 10
    },
    {
        id: 'territory-manager',
        title: 'Territory Manager',
        slug: 'territory-manager',
        category: 'sales',
        aliases: ['Territory Sales Manager', 'Area Manager'],
        averageSalary: 95000,
        growthRate: 10
    },
    {
        id: 'key-account-manager',
        title: 'Key Account Manager',
        slug: 'key-account-manager',
        category: 'sales',
        aliases: ['KAM', 'Major Account Manager'],
        averageSalary: 95000,
        growthRate: 12
    },
    {
        id: 'strategic-account-manager',
        title: 'Strategic Account Manager',
        slug: 'strategic-account-manager',
        category: 'sales',
        aliases: ['Enterprise Account Manager', 'Global Account Manager'],
        averageSalary: 125000,
        growthRate: 14
    },
    {
        id: 'channel-manager',
        title: 'Channel Manager',
        slug: 'channel-manager',
        category: 'sales',
        aliases: ['Partner Channel Manager', 'Distribution Manager'],
        averageSalary: 105000,
        growthRate: 12
    },
    {
        id: 'sales-analyst',
        title: 'Sales Analyst',
        slug: 'sales-analyst',
        category: 'sales',
        aliases: ['Sales Data Analyst', 'Revenue Analyst'],
        averageSalary: 75000,
        growthRate: 14
    },
    {
        id: 'sales-consultant',
        title: 'Sales Consultant',
        slug: 'sales-consultant',
        category: 'sales',
        aliases: ['Sales Advisor', 'Business Consultant'],
        averageSalary: 85000,
        growthRate: 12
    },
    {
        id: 'client-success-director',
        title: 'Client Success Director',
        slug: 'client-success-director',
        category: 'sales',
        aliases: ['Director of Customer Success', 'VP Customer Success'],
        averageSalary: 140000,
        growthRate: 20
    },

    // Healthcare - Additional Batch 2
    {
        id: 'medical-doctor',
        title: 'Medical Doctor',
        slug: 'medical-doctor',
        category: 'healthcare',
        aliases: ['Physician', 'MD'],
        averageSalary: 220000,
        growthRate: 10
    },
    {
        id: 'dentist',
        title: 'Dentist',
        slug: 'dentist',
        category: 'healthcare',
        aliases: ['Doctor of Dental Surgery', 'DDS'],
        averageSalary: 160000,
        growthRate: 8
    },
    {
        id: 'pharmacist',
        title: 'Pharmacist',
        slug: 'pharmacist',
        category: 'healthcare',
        aliases: ['Clinical Pharmacist', 'Staff Pharmacist'],
        averageSalary: 130000,
        growthRate: 8
    },
    {
        id: 'physical-therapist',
        title: 'Physical Therapist',
        slug: 'physical-therapist',
        category: 'healthcare',
        aliases: ['PT', 'Physiotherapist'],
        averageSalary: 95000,
        growthRate: 21
    },
    {
        id: 'occupational-therapy-assistant',
        title: 'Occupational Therapy Assistant',
        slug: 'occupational-therapy-assistant',
        category: 'healthcare',
        aliases: ['OTA', 'Certified OTA'],
        averageSalary: 65000,
        growthRate: 20
    },
    {
        id: 'respiratory-therapist',
        title: 'Respiratory Therapist',
        slug: 'respiratory-therapist',
        category: 'healthcare',
        aliases: ['RT', 'Respiratory Therapy Technician'],
        averageSalary: 70000,
        growthRate: 19
    },
    {
        id: 'speech-language-pathologist',
        title: 'Speech Language Pathologist',
        slug: 'speech-language-pathologist',
        category: 'healthcare',
        aliases: ['SLP', 'Speech Therapist'],
        averageSalary: 85000,
        growthRate: 21
    },
    {
        id: 'medical-secretary',
        title: 'Medical Secretary',
        slug: 'medical-secretary',
        category: 'healthcare',
        aliases: ['Medical Administrative Assistant', 'Medical Office Secretary'],
        averageSalary: 42000,
        growthRate: 8
    },
    {
        id: 'health-services-manager',
        title: 'Health Services Manager',
        slug: 'health-services-manager',
        category: 'healthcare',
        aliases: ['Healthcare Administrator', 'Medical Practice Manager'],
        averageSalary: 110000,
        growthRate: 28
    },
    {
        id: 'clinical-research-coordinator',
        title: 'Clinical Research Coordinator',
        slug: 'clinical-research-coordinator',
        category: 'healthcare',
        aliases: ['CRC', 'Clinical Research Associate'],
        averageSalary: 65000,
        growthRate: 12
    },

    // Education
    {
        id: 'teacher',
        title: 'Teacher',
        slug: 'teacher',
        category: 'education',
        aliases: ['Classroom Teacher', 'K-12 Teacher'],
        averageSalary: 60000,
        growthRate: 8
    },
    {
        id: 'special-education-teacher',
        title: 'Special Education Teacher',
        slug: 'special-education-teacher',
        category: 'education',
        aliases: ['SPED Teacher', 'Special Needs Teacher'],
        averageSalary: 65000,
        growthRate: 10
    },
    {
        id: 'elementary-teacher',
        title: 'Elementary Teacher',
        slug: 'elementary-teacher',
        category: 'education',
        aliases: ['Primary School Teacher', 'Elementary School Teacher'],
        averageSalary: 62000,
        growthRate: 8
    },
    {
        id: 'high-school-teacher',
        title: 'High School Teacher',
        slug: 'high-school-teacher',
        category: 'education',
        aliases: ['Secondary Teacher', 'High School Educator'],
        averageSalary: 65000,
        growthRate: 8
    },
    {
        id: 'substitute-teacher',
        title: 'Substitute Teacher',
        slug: 'substitute-teacher',
        category: 'education',
        aliases: ['Sub Teacher', 'Supply Teacher'],
        averageSalary: 45000,
        growthRate: 6
    },
    {
        id: 'teaching-assistant',
        title: 'Teaching Assistant',
        slug: 'teaching-assistant',
        category: 'education',
        aliases: ['Teacher Aide', 'Classroom Assistant'],
        averageSalary: 35000,
        growthRate: 8
    },
    {
        id: 'principal',
        title: 'Principal',
        slug: 'principal',
        category: 'education',
        aliases: ['School Principal', 'Headmaster'],
        averageSalary: 100000,
        growthRate: 6
    },
    {
        id: 'assistant-principal',
        title: 'Assistant Principal',
        slug: 'assistant-principal',
        category: 'education',
        aliases: ['Vice Principal', 'Associate Principal'],
        averageSalary: 85000,
        growthRate: 8
    },
    {
        id: 'school-counselor',
        title: 'School Counselor',
        slug: 'school-counselor',
        category: 'education',
        aliases: ['Guidance Counselor', 'Student Counselor'],
        averageSalary: 65000,
        growthRate: 10
    },
    {
        id: 'academic-advisor',
        title: 'Academic Advisor',
        slug: 'academic-advisor',
        category: 'education',
        aliases: ['College Advisor', 'Student Advisor'],
        averageSalary: 55000,
        growthRate: 12
    },

    // Real Estate
    {
        id: 'real-estate-agent',
        title: 'Real Estate Agent',
        slug: 'real-estate-agent',
        category: 'real-estate',
        aliases: ['Realtor', 'Real Estate Salesperson'],
        averageSalary: 55000,
        growthRate: 10
    },
    {
        id: 'real-estate-broker',
        title: 'Real Estate Broker',
        slug: 'real-estate-broker',
        category: 'real-estate',
        aliases: ['Real Estate Brokerage Owner', 'Principal Broker'],
        averageSalary: 85000,
        growthRate: 10
    },
    {
        id: 'property-manager',
        title: 'Property Manager',
        slug: 'property-manager',
        category: 'real-estate',
        aliases: ['Real Estate Manager', 'Rental Property Manager'],
        averageSalary: 65000,
        growthRate: 10
    },
    {
        id: 'real-estate-appraiser',
        title: 'Real Estate Appraiser',
        slug: 'real-estate-appraiser',
        category: 'real-estate',
        aliases: ['Property Appraiser', 'Real Estate Valuer'],
        averageSalary: 65000,
        growthRate: 8
    },
    {
        id: 'leasing-consultant',
        title: 'Leasing Consultant',
        slug: 'leasing-consultant',
        category: 'real-estate',
        aliases: ['Leasing Agent', 'Rental Agent'],
        averageSalary: 42000,
        growthRate: 10
    },
    {
        id: 'real-estate-investor',
        title: 'Real Estate Investor',
        slug: 'real-estate-investor',
        category: 'real-estate',
        aliases: ['Property Investor', 'Real Estate Entrepreneur'],
        averageSalary: 90000,
        growthRate: 12
    },
    {
        id: 'mortgage-broker',
        title: 'Mortgage Broker',
        slug: 'mortgage-broker',
        category: 'real-estate',
        aliases: ['Mortgage Loan Originator', 'Loan Officer'],
        averageSalary: 80000,
        growthRate: 10
    },
    {
        id: 'title-examiner',
        title: 'Title Examiner',
        slug: 'title-examiner',
        category: 'real-estate',
        aliases: ['Title Searcher', 'Title Abstractor'],
        averageSalary: 50000,
        growthRate: 6
    },
    {
        id: 'real-estate-assistant',
        title: 'Real Estate Assistant',
        slug: 'real-estate-assistant',
        category: 'real-estate',
        aliases: ['Realtor Assistant', 'Real Estate Administrative Assistant'],
        averageSalary: 42000,
        growthRate: 8
    },
    {
        id: 'community-association-manager',
        title: 'Community Association Manager',
        slug: 'community-association-manager',
        category: 'real-estate',
        aliases: ['HOA Manager', 'Condominium Manager'],
        averageSalary: 70000,
        growthRate: 10
    },

    // Skilled Trades
    {
        id: 'electrician',
        title: 'Electrician',
        slug: 'electrician',
        category: 'skilled-trades',
        aliases: ['Journeyman Electrician', 'Electrical Contractor'],
        averageSalary: 60000,
        growthRate: 14
    },
    {
        id: 'plumber',
        title: 'Plumber',
        slug: 'plumber',
        category: 'skilled-trades',
        aliases: ['Journeyman Plumber', 'Master Plumber'],
        averageSalary: 58000,
        growthRate: 12
    },
    {
        id: 'hvac-technician',
        title: 'HVAC Technician',
        slug: 'hvac-technician',
        category: 'skilled-trades',
        aliases: ['HVAC Installer', 'HVAC Mechanic'],
        averageSalary: 55000,
        growthRate: 13
    },
    {
        id: 'carpenter',
        title: 'Carpenter',
        slug: 'carpenter',
        category: 'skilled-trades',
        aliases: ['Journeyman Carpenter', 'Master Carpenter'],
        averageSalary: 55000,
        growthRate: 10
    },
    {
        id: 'welder',
        title: 'Welder',
        slug: 'welder',
        category: 'skilled-trades',
        aliases: ['Welding Operator', 'Certified Welder'],
        averageSalary: 48000,
        growthRate: 10
    },
    {
        id: 'mechanic',
        title: 'Mechanic',
        slug: 'mechanic',
        category: 'skilled-trades',
        aliases: ['Auto Mechanic', 'Automotive Technician'],
        averageSalary: 48000,
        growthRate: 8
    },
    {
        id: 'diesel-mechanic',
        title: 'Diesel Mechanic',
        slug: 'diesel-mechanic',
        category: 'skilled-trades',
        aliases: ['Diesel Technician', 'Truck Mechanic'],
        averageSalary: 55000,
        growthRate: 10
    },
    {
        id: 'heavy-equipment-operator',
        title: 'Heavy Equipment Operator',
        slug: 'heavy-equipment-operator',
        category: 'skilled-trades',
        aliases: ['Equipment Operator', 'Crane Operator'],
        averageSalary: 58000,
        growthRate: 12
    },
    {
        id: 'construction-laborer',
        title: 'Construction Laborer',
        slug: 'construction-laborer',
        category: 'skilled-trades',
        aliases: ['Construction Worker', 'General Laborer'],
        averageSalary: 40000,
        growthRate: 10
    },
    {
        id: 'roofer',
        title: 'Roofer',
        slug: 'roofer',
        category: 'skilled-trades',
        aliases: ['Roofing Contractor', 'Roofing Mechanic'],
        averageSalary: 48000,
        growthRate: 10
    },

    // ========== 50 MORE JOB TITLES (Batch 3) ========== //

    // Technology - Additional Batch 3
    {
        id: 'mobile-architect',
        title: 'Mobile Architect',
        slug: 'mobile-architect',
        category: 'technology',
        aliases: ['Mobile Solutions Architect', 'Mobile Technical Architect'],
        averageSalary: 155000,
        growthRate: 25
    },
    {
        id: 'api-developer',
        title: 'API Developer',
        slug: 'api-developer',
        category: 'technology',
        aliases: ['API Engineer', 'Backend API Developer'],
        averageSalary: 115000,
        growthRate: 20
    },
    {
        id: 'backend-architect',
        title: 'Backend Architect',
        slug: 'backend-architect',
        category: 'technology',
        aliases: ['Server-Side Architect', 'Back-End Architect'],
        averageSalary: 150000,
        growthRate: 22
    },
    {
        id: 'frontend-architect',
        title: 'Frontend Architect',
        slug: 'frontend-architect',
        category: 'technology',
        aliases: ['Client-Side Architect', 'UI Architect'],
        averageSalary: 145000,
        growthRate: 20
    },
    {
        id: 'full-stack-architect',
        title: 'Full Stack Architect',
        slug: 'full-stack-architect',
        category: 'technology',
        aliases: ['Full-Stack Technical Architect'],
        averageSalary: 160000,
        growthRate: 24
    },
    {
        id: 'devsecops-engineer',
        title: 'DevSecOps Engineer',
        slug: 'devsecops-engineer',
        category: 'technology',
        aliases: ['Security DevOps Engineer', 'DevOps Security Engineer'],
        averageSalary: 140000,
        growthRate: 30
    },
    {
        id: 'cloud-security-engineer',
        title: 'Cloud Security Engineer',
        slug: 'cloud-security-engineer',
        category: 'technology',
        aliases: ['Cloud Security Specialist', 'AWS Security Engineer'],
        averageSalary: 145000,
        growthRate: 32
    },
    {
        id: 'identity-access-manager',
        title: 'Identity and Access Manager',
        slug: 'identity-access-manager',
        category: 'technology',
        aliases: ['IAM Engineer', 'Identity Management Engineer'],
        averageSalary: 130000,
        growthRate: 25
    },
    {
        id: 'compliance-manager',
        title: 'IT Compliance Manager',
        slug: 'it-compliance-manager',
        category: 'technology',
        aliases: ['Compliance Officer', 'IT Compliance Officer'],
        averageSalary: 120000,
        growthRate: 15
    },
    {
        id: 'it-auditor',
        title: 'IT Auditor',
        slug: 'it-auditor',
        category: 'technology',
        aliases: ['Information Systems Auditor', 'IT Security Auditor'],
        averageSalary: 95000,
        growthRate: 18
    },
    {
        id: 'salesforce-developer',
        title: 'Salesforce Developer',
        slug: 'salesforce-developer',
        category: 'technology',
        aliases: ['SFDC Developer', 'Salesforce Technical Consultant'],
        averageSalary: 110000,
        growthRate: 20
    },
    {
        id: 'salesforce-administrator',
        title: 'Salesforce Administrator',
        slug: 'salesforce-administrator',
        category: 'technology',
        aliases: ['SFDC Admin', 'Salesforce Admin'],
        averageSalary: 95000,
        growthRate: 18
    },

    // Marketing - Additional Batch 3
    {
        id: 'digital-specialist',
        title: 'Digital Marketing Specialist',
        slug: 'digital-marketing-specialist',
        category: 'marketing',
        aliases: ['Online Marketing Specialist', 'Digital Marketing Associate'],
        averageSalary: 60000,
        growthRate: 14
    },
    {
        id: 'marketing-coordinator-senior',
        title: 'Senior Marketing Coordinator',
        slug: 'senior-marketing-coordinator',
        category: 'marketing',
        aliases: ['Senior Marketing Associate'],
        averageSalary: 65000,
        growthRate: 12
    },
    {
        id: 'brand-ambassador',
        title: 'Brand Ambassador',
        slug: 'brand-ambassador',
        category: 'marketing',
        aliases: ['Brand Representative', 'Brand Advocate'],
        averageSalary: 45000,
        growthRate: 10
    },
    {
        id: 'influencer-manager',
        title: 'Influencer Manager',
        slug: 'influencer-manager',
        category: 'marketing',
        aliases: ['Influencer Marketing Manager', 'Influencer Relations'],
        averageSalary: 70000,
        growthRate: 22
    },
    {
        id: 'community-manager',
        title: 'Community Manager',
        slug: 'community-manager',
        category: 'marketing',
        aliases: ['Online Community Manager', 'Community Lead'],
        averageSalary: 65000,
        growthRate: 15
    },
    {
        id: 'viral-content-creator',
        title: 'Viral Content Creator',
        slug: 'viral-content-creator',
        category: 'marketing',
        aliases: ['Content Creator', 'Social Content Creator'],
        averageSalary: 55000,
        growthRate: 18
    },
    {
        id: 'ux-writer',
        title: 'UX Writer',
        slug: 'ux-writer',
        category: 'marketing',
        aliases: ['Content Designer', 'UX Copywriter'],
        averageSalary: 85000,
        growthRate: 16
    },
    {
        id: 'technical-writer',
        title: 'Technical Writer',
        slug: 'technical-writer',
        category: 'marketing',
        aliases: ['Technical Communicator', 'Documentation Writer'],
        averageSalary: 75000,
        growthRate: 12
    },
    {
        id: 'email-copywriter',
        title: 'Email Copywriter',
        slug: 'email-copywriter',
        category: 'marketing',
        aliases: ['Email Marketing Copywriter', 'Email Specialist'],
        averageSalary: 60000,
        growthRate: 12
    },
    {
        id: 'conversion-copywriter',
        title: 'Conversion Copywriter',
        slug: 'conversion-copywriter',
        category: 'marketing',
        aliases: ['Direct Response Copywriter'],
        averageSalary: 70000,
        growthRate: 14
    },
    {
        id: 'creative-producer',
        title: 'Creative Producer',
        slug: 'creative-producer',
        category: 'marketing',
        aliases: ['Content Producer', 'Digital Producer'],
        averageSalary: 75000,
        growthRate: 14
    },

    // Sales - Additional Batch 3
    {
        id: 'business-development-rep',
        title: 'Business Development Rep',
        slug: 'business-development-rep',
        category: 'sales',
        aliases: ['BDR', 'Business Development Representative'],
        averageSalary: 50000,
        growthRate: 16
    },
    {
        id: 'sales-development-rep',
        title: 'Sales Development Rep',
        slug: 'sales-development-rep',
        category: 'sales',
        aliases: ['SDR', 'Sales Development Representative'],
        averageSalary: 50000,
        growthRate: 16
    },
    {
        id: 'account-executive',
        title: 'Account Executive',
        slug: 'account-executive',
        category: 'sales',
        aliases: ['Sales Executive', 'AE'],
        averageSalary: 75000,
        growthRate: 14
    },
    {
        id: 'enterprise-account-executive',
        title: 'Enterprise Account Executive',
        slug: 'enterprise-account-executive',
        category: 'sales',
        aliases: ['Enterprise Sales Executive', 'Enterprise AE'],
        averageSalary: 130000,
        growthRate: 18
    },
    {
        id: 'smb-account-executive',
        title: 'SMB Account Executive',
        slug: 'smb-account-executive',
        category: 'sales',
        aliases: ['SMB Sales Executive', 'Small Business Account Executive'],
        averageSalary: 70000,
        growthRate: 12
    },
    {
        id: 'customer-success-rep',
        title: 'Customer Success Rep',
        slug: 'customer-success-rep',
        category: 'sales',
        aliases: ['Customer Success Representative', 'CSR'],
        averageSalary: 55000,
        growthRate: 18
    },
    {
        id: 'renewal-manager',
        title: 'Renewal Manager',
        slug: 'renewal-manager',
        category: 'sales',
        aliases: ['Renewals Manager', 'Account Renewal Manager'],
        averageSalary: 85000,
        growthRate: 16
    },
    {
        id: 'expansion-sales-manager',
        title: 'Expansion Sales Manager',
        slug: 'expansion-sales-manager',
        category: 'sales',
        aliases: ['Upsell Manager', 'Expansion Manager'],
        averageSalary: 100000,
        growthRate: 18
    },
    {
        id: 'field-sales-engineer',
        title: 'Field Sales Engineer',
        slug: 'field-sales-engineer',
        category: 'sales',
        aliases: ['Field Sales Representative', 'Field Solutions Engineer'],
        averageSalary: 115000,
        growthRate: 16
    },
    {
        id: 'global-account-manager',
        title: 'Global Account Manager',
        slug: 'global-account-manager',
        category: 'sales',
        aliases: ['Global Accounts Manager', 'International Account Manager'],
        averageSalary: 140000,
        growthRate: 14
    },

    // Healthcare - Additional Batch 3
    {
        id: 'emergency-room-nurse',
        title: 'ER Nurse',
        slug: 'er-nurse',
        category: 'healthcare',
        aliases: ['Emergency Room Nurse', 'ED Nurse', 'Emergency Department Nurse'],
        averageSalary: 90000,
        growthRate: 15
    },
    {
        id: 'icu-nurse',
        title: 'ICU Nurse',
        slug: 'icu-nurse',
        category: 'healthcare',
        aliases: ['Critical Care Nurse', 'Intensive Care Unit Nurse'],
        averageSalary: 95000,
        growthRate: 18
    },
    {
        id: 'labor-delivery-nurse',
        title: 'Labor and Delivery Nurse',
        slug: 'labor-delivery-nurse',
        category: 'healthcare',
        aliases: ['L&D Nurse', 'Delivery Nurse'],
        averageSalary: 85000,
        growthRate: 14
    },
    {
        id: 'pediatric-nurse',
        title: 'Pediatric Nurse',
        slug: 'pediatric-nurse',
        category: 'healthcare',
        aliases: ['Peds Nurse', 'Child Nurse'],
        averageSalary: 78000,
        growthRate: 12
    },
    {
        id: 'surgical-nurse',
        title: 'Surgical Nurse',
        slug: 'surgical-nurse',
        category: 'healthcare',
        aliases: ['OR Nurse', 'Operating Room Nurse', 'Perioperative Nurse'],
        averageSalary: 90000,
        growthRate: 16
    },
    {
        id: 'oncology-nurse',
        title: 'Oncology Nurse',
        slug: 'oncology-nurse',
        category: 'healthcare',
        aliases: ['Cancer Nurse', 'Oncology RN'],
        averageSalary: 82000,
        growthRate: 14
    },
    {
        id: 'home-health-nurse',
        title: 'Home Health Nurse',
        slug: 'home-health-nurse',
        category: 'healthcare',
        aliases: ['Home Care Nurse', 'Visiting Nurse'],
        averageSalary: 72000,
        growthRate: 18
    },
    {
        id: 'travel-nurse',
        title: 'Travel Nurse',
        slug: 'travel-nurse',
        category: 'healthcare',
        aliases: ['Traveling Nurse', 'Agency Nurse'],
        averageSalary: 110000,
        growthRate: 20
    },
    {
        id: 'dialysis-nurse',
        title: 'Dialysis Nurse',
        slug: 'dialysis-nurse',
        category: 'healthcare',
        aliases: ['Nephrology Nurse', 'Renal Nurse'],
        averageSalary: 80000,
        growthRate: 15
    },
    {
        id: 'clinical-nurse-specialist',
        title: 'Clinical Nurse Specialist',
        slug: 'clinical-nurse-specialist',
        category: 'healthcare',
        aliases: ['CNS', 'Advanced Practice Nurse'],
        averageSalary: 105000,
        growthRate: 20
    },

    // Education - Additional Batch 3
    {
        id: 'college-professor',
        title: 'College Professor',
        slug: 'college-professor',
        category: 'education',
        aliases: ['University Professor', 'Faculty Member'],
        averageSalary: 95000,
        growthRate: 10
    },
    {
        id: 'assistant-professor',
        title: 'Assistant Professor',
        slug: 'assistant-professor',
        category: 'education',
        aliases: ['Asst Professor', 'Junior Professor'],
        averageSalary: 85000,
        growthRate: 12
    },
    {
        id: 'associate-professor',
        title: 'Associate Professor',
        slug: 'associate-professor',
        category: 'education',
        aliases: ['Assoc Professor'],
        averageSalary: 95000,
        growthRate: 10
    },
    {
        id: 'adjunct-professor',
        title: 'Adjunct Professor',
        slug: 'adjunct-professor',
        category: 'education',
        aliases: ['Adjunct Instructor', 'Part-Time Professor'],
        averageSalary: 55000,
        growthRate: 12
    },
    {
        id: 'lecturer',
        title: 'Lecturer',
        slug: 'lecturer',
        category: 'education',
        aliases: ['University Lecturer', 'College Instructor'],
        averageSalary: 70000,
        growthRate: 10
    },
    {
        id: 'research-assistant',
        title: 'Research Assistant',
        slug: 'research-assistant',
        category: 'education',
        aliases: ['Graduate Research Assistant', 'RA'],
        averageSalary: 38000,
        growthRate: 8
    },
    {
        id: 'teaching-professor',
        title: 'Teaching Professor',
        slug: 'teaching-professor',
        category: 'education',
        aliases: ['Professor of Practice', 'Clinical Professor'],
        averageSalary: 90000,
        growthRate: 12
    },
    {
        id: 'education-administrator',
        title: 'Education Administrator',
        slug: 'education-administrator',
        category: 'education',
        aliases: ['School Administrator', 'Education Manager'],
        averageSalary: 95000,
        growthRate: 8
    },
    {
        id: 'curriculum-director',
        title: 'Curriculum Director',
        slug: 'curriculum-director',
        category: 'education',
        aliases: ['Director of Curriculum', 'Curriculum Coordinator'],
        averageSalary: 90000,
        growthRate: 10
    },
    {
        id: 'instructional-coordinator',
        title: 'Instructional Coordinator',
        slug: 'instructional-coordinator',
        category: 'education',
        aliases: ['Curriculum Specialist', 'Instructional Coach'],
        averageSalary: 70000,
        growthRate: 10
    },

    // Real Estate - Additional Batch 3
    {
        id: 'real-estate-vice-president',
        title: 'Real Estate VP',
        slug: 'real-estate-vice-president',
        category: 'real-estate',
        aliases: ['VP of Real Estate', 'Real Estate Vice President'],
        averageSalary: 160000,
        growthRate: 12
    },
    {
        id: 'real-estate-director',
        title: 'Real Estate Director',
        slug: 'real-estate-director',
        category: 'real-estate',
        aliases: ['Director of Real Estate', 'Real Estate Development Director'],
        averageSalary: 140000,
        growthRate: 12
    },
    {
        id: 'real-estate-analyst',
        title: 'Real Estate Analyst',
        slug: 'real-estate-analyst',
        category: 'real-estate',
        aliases: ['Property Analyst', 'Real Estate Investment Analyst'],
        averageSalary: 80000,
        growthRate: 14
    },
    {
        id: 'commercial-real-estate-agent',
        title: 'Commercial Real Estate Agent',
        slug: 'commercial-real-estate-agent',
        category: 'real-estate',
        aliases: ['CRE Agent', 'Commercial Broker'],
        averageSalary: 95000,
        growthRate: 12
    },
    {
        id: 'residential-real-estate-agent',
        title: 'Residential Real Estate Agent',
        slug: 'residential-real-estate-agent',
        category: 'real-estate',
        aliases: ['Residential Agent', 'Home Sales Agent'],
        averageSalary: 65000,
        growthRate: 10
    },
    {
        id: 'real-estate-consultant',
        title: 'Real Estate Consultant',
        slug: 'real-estate-consultant',
        category: 'real-estate',
        aliases: ['Property Consultant', 'Real Estate Advisor'],
        averageSalary: 85000,
        growthRate: 12
    },
    {
        id: 'property-developer',
        title: 'Real Estate Developer',
        slug: 'real-estate-developer',
        category: 'real-estate',
        aliases: ['Property Developer', 'Real Estate Entrepreneur'],
        averageSalary: 120000,
        growthRate: 14
    },
    {
        id: 'facilities-manager',
        title: 'Facilities Manager',
        slug: 'facilities-manager',
        category: 'real-estate',
        aliases: ['Building Manager', 'Facility Director'],
        averageSalary: 85000,
        growthRate: 10
    },
    {
        id: 'real-estate-paralegal',
        title: 'Real Estate Paralegal',
        slug: 'real-estate-paralegal',
        category: 'real-estate',
        aliases: ['Property Law Paralegal', 'Real Estate Legal Assistant'],
        averageSalary: 60000,
        growthRate: 10
    },
    {
        id: 'escrow-officer',
        title: 'Escrow Officer',
        slug: 'escrow-officer',
        category: 'real-estate',
        aliases: ['Escrow Agent', 'Closing Officer'],
        averageSalary: 55000,
        growthRate: 8
    },

    // Skilled Trades - Additional Batch 3
    {
        id: 'master-electrician',
        title: 'Master Electrician',
        slug: 'master-electrician',
        category: 'skilled-trades',
        aliases: ['Electrical Contractor', 'Licensed Electrician'],
        averageSalary: 75000,
        growthRate: 14
    },
    {
        id: 'industrial-electrician',
        title: 'Industrial Electrician',
        slug: 'industrial-electrician',
        category: 'skilled-trades',
        aliases: ['Industrial Electrical Technician'],
        averageSalary: 65000,
        growthRate: 12
    },
    {
        id: 'maintenance-electrician',
        title: 'Maintenance Electrician',
        slug: 'maintenance-electrician',
        category: 'skilled-trades',
        aliases: ['Facilities Electrician', 'Building Electrician'],
        averageSalary: 58000,
        growthRate: 10
    },
    {
        id: 'master-plumber',
        title: 'Master Plumber',
        slug: 'master-plumber',
        category: 'skilled-trades',
        aliases: ['Plumbing Contractor', 'Licensed Plumber'],
        averageSalary: 72000,
        growthRate: 12
    },
    {
        id: 'service-plumber',
        title: 'Service Plumber',
        slug: 'service-plumber',
        category: 'skilled-trades',
        aliases: ['Residential Plumber', 'Repair Plumber'],
        averageSalary: 55000,
        growthRate: 10
    },
    {
        id: 'commercial-plumber',
        title: 'Commercial Plumber',
        slug: 'commercial-plumber',
        category: 'skilled-trades',
        aliases: ['Industrial Plumber', 'Business Plumber'],
        averageSalary: 65000,
        growthRate: 12
    },
    {
        id: 'hvac-service-technician',
        title: 'HVAC Service Technician',
        slug: 'hvac-service-technician',
        category: 'skilled-trades',
        aliases: ['HVAC Tech', 'AC Service Technician'],
        averageSalary: 58000,
        growthRate: 14
    },
    {
        id: 'hvac-installation-technician',
        title: 'HVAC Install Technician',
        slug: 'hvac-installation-technician',
        category: 'skilled-trades',
        aliases: ['HVAC Installer', 'AC Installer'],
        averageSalary: 52000,
        growthRate: 12
    },
    {
        id: 'refrigeration-technician',
        title: 'Refrigeration Technician',
        slug: 'refrigeration-technician',
        category: 'skilled-trades',
        aliases: ['Refrigeration Mechanic', 'Cooling Technician'],
        averageSalary: 56000,
        growthRate: 12
    },
    {
        id: 'sheet-metal-worker',
        title: 'Sheet Metal Worker',
        slug: 'sheet-metal-worker',
        category: 'skilled-trades',
        aliases: ['Sheet Metal Mechanic', 'HVAC Sheet Metal'],
        averageSalary: 55000,
        growthRate: 10
    },

    // Hospitality & Food Service
    {
        id: 'hotel-manager',
        title: 'Hotel Manager',
        slug: 'hotel-manager',
        category: 'hospitality',
        aliases: ['Hotel General Manager', 'Hotel Operations Manager'],
        averageSalary: 65000,
        growthRate: 10
    },
    {
        id: 'restaurant-manager',
        title: 'Restaurant Manager',
        slug: 'restaurant-manager',
        category: 'hospitality',
        aliases: ['Restaurant General Manager', 'Food Service Manager'],
        averageSalary: 55000,
        growthRate: 12
    },
    {
        id: 'executive-chef',
        title: 'Executive Chef',
        slug: 'executive-chef',
        category: 'hospitality',
        aliases: ['Head Chef', 'Kitchen Manager'],
        averageSalary: 65000,
        growthRate: 10
    },
    {
        id: 'sous-chef',
        title: 'Sous Chef',
        slug: 'sous-chef',
        category: 'hospitality',
        aliases: ['Assistant Chef', 'Deputy Kitchen Manager'],
        averageSalary: 50000,
        growthRate: 10
    },
    {
        id: 'line-cook',
        title: 'Line Cook',
        slug: 'line-cook',
        category: 'hospitality',
        aliases: ['Prep Cook', 'Station Chef'],
        averageSalary: 35000,
        growthRate: 12
    },
    {
        id: 'pastry-chef',
        title: 'Pastry Chef',
        slug: 'pastry-chef',
        category: 'hospitality',
        aliases: ['Pastry Cook', 'Baker'],
        averageSalary: 45000,
        growthRate: 10
    },
    {
        id: 'bartender',
        title: 'Bartender',
        slug: 'bartender',
        category: 'hospitality',
        aliases: ['Barkeep', 'Mixologist'],
        averageSalary: 30000,
        growthRate: 10
    },
    {
        id: 'server',
        title: 'Server',
        slug: 'server',
        category: 'hospitality',
        aliases: ['Waiter', 'Waitress', 'Wait Staff'],
        averageSalary: 28000,
        growthRate: 10
    },
    {
        id: 'host-hostess',
        title: 'Host/Hostess',
        slug: 'host-hostess',
        category: 'hospitality',
        aliases: ['Restaurant Host', 'Greeter'],
        averageSalary: 26000,
        growthRate: 8
    },
    {
        id: 'front-desk-agent',
        title: 'Front Desk Agent',
        slug: 'front-desk-agent',
        category: 'hospitality',
        aliases: ['Hotel Receptionist', 'Hotel Front Desk'],
        averageSalary: 35000,
        growthRate: 10
    },

    // Transportation & Logistics
    {
        id: 'truck-driver',
        title: 'Truck Driver',
        slug: 'truck-driver',
        category: 'transportation',
        aliases: ['CDL Driver', 'Semi Truck Driver', 'Commercial Driver'],
        averageSalary: 55000,
        growthRate: 10
    },
    {
        id: 'delivery-driver',
        title: 'Delivery Driver',
        slug: 'delivery-driver',
        category: 'transportation',
        aliases: ['Package Delivery Driver', 'Courier Driver'],
        averageSalary: 40000,
        growthRate: 10
    },
    {
        id: 'logistics-coordinator',
        title: 'Logistics Coordinator',
        slug: 'logistics-coordinator',
        category: 'transportation',
        aliases: ['Shipping Coordinator', 'Logistics Planner'],
        averageSalary: 50000,
        growthRate: 12
    },
    {
        id: 'supply-chain-manager',
        title: 'Supply Chain Manager',
        slug: 'supply-chain-manager',
        category: 'transportation',
        aliases: ['Logistics Manager', 'Supply Chain Director'],
        averageSalary: 95000,
        growthRate: 15
    },
    {
        id: 'warehouse-manager',
        title: 'Warehouse Manager',
        slug: 'warehouse-manager',
        category: 'transportation',
        aliases: ['Distribution Center Manager', 'Warehouse Supervisor'],
        averageSalary: 70000,
        growthRate: 10
    },
    {
        id: 'freight-forwarder',
        title: 'Freight Forwarder',
        slug: 'freight-forwarder',
        category: 'transportation',
        aliases: ['Freight Broker', 'Cargo Agent'],
        averageSalary: 55000,
        growthRate: 10
    },
    {
        id: 'dispatcher',
        title: 'Dispatcher',
        slug: 'dispatcher',
        category: 'transportation',
        aliases: ['Truck Dispatcher', 'Service Dispatcher'],
        averageSalary: 45000,
        growthRate: 8
    },
    {
        id: 'route-driver',
        title: 'Route Driver',
        slug: 'route-driver',
        category: 'transportation',
        aliases: ['Delivery Route Driver', 'Local Driver'],
        averageSalary: 42000,
        growthRate: 8
    },
    {
        id: 'shipping-receiver',
        title: 'Shipping Receiving Clerk',
        slug: 'shipping-receiving-clerk',
        category: 'transportation',
        aliases: ['Warehouse Clerk', 'Shipping Clerk'],
        averageSalary: 36000,
        growthRate: 6
    },
    {
        id: 'inventory-manager',
        title: 'Inventory Manager',
        slug: 'inventory-manager',
        category: 'transportation',
        aliases: ['Inventory Control Manager', 'Stock Manager'],
        averageSalary: 60000,
        growthRate: 10
    },

    // ========== 50 MORE JOB TITLES (Batch 4) ========== //

    // Technology - Additional Batch 4
    {
        id: 'backend-team-lead',
        title: 'Backend Team Lead',
        slug: 'backend-team-lead',
        category: 'technology',
        aliases: ['Backend Lead', 'Server-Side Team Lead'],
        averageSalary: 140000,
        growthRate: 20
    },
    {
        id: 'frontend-team-lead',
        title: 'Frontend Team Lead',
        slug: 'frontend-team-lead',
        category: 'technology',
        aliases: ['Frontend Lead', 'Client-Side Team Lead'],
        averageSalary: 135000,
        growthRate: 20
    },
    {
        id: 'data-team-lead',
        title: 'Data Team Lead',
        slug: 'data-team-lead',
        category: 'technology',
        aliases: ['Data Lead', 'Analytics Team Lead'],
        averageSalary: 145000,
        growthRate: 25
    },
    {
        id: 'qa-lead',
        title: 'QA Lead',
        slug: 'qa-lead',
        category: 'technology',
        aliases: ['Quality Assurance Lead', 'Testing Lead'],
        averageSalary: 120000,
        growthRate: 18
    },
    {
        id: 'devops-lead',
        title: 'DevOps Lead',
        slug: 'devops-lead',
        category: 'technology',
        aliases: ['DevOps Team Lead', 'Infrastructure Lead'],
        averageSalary: 145000,
        growthRate: 25
    },
    {
        id: 'security-lead',
        title: 'Security Lead',
        slug: 'security-lead',
        category: 'technology',
        aliases: ['Security Team Lead', 'InfoSec Lead'],
        averageSalary: 150000,
        growthRate: 28
    },
    {
        id: 'engineering-team-lead',
        title: 'Engineering Team Lead',
        slug: 'engineering-team-lead',
        category: 'technology',
        aliases: ['Team Lead Engineer', 'Engineering Lead'],
        averageSalary: 150000,
        growthRate: 20
    },
    {
        id: 'product-owner',
        title: 'Product Owner',
        slug: 'product-owner',
        category: 'technology',
        aliases: ['Agile Product Owner', 'Scrum Product Owner'],
        averageSalary: 125000,
        growthRate: 18
    },
    {
        id: 'scrum-master',
        title: 'Scrum Master',
        slug: 'scrum-master',
        category: 'technology',
        aliases: ['Agile Coach', 'Scrum Facilitator'],
        averageSalary: 115000,
        growthRate: 20
    },
    {
        id: 'agile-coach',
        title: 'Agile Coach',
        slug: 'agile-coach',
        category: 'technology',
        aliases: ['Agile Consultant', 'Lean Coach'],
        averageSalary: 140000,
        growthRate: 22
    },
    {
        id: 'release-manager',
        title: 'Release Manager',
        slug: 'release-manager',
        category: 'technology',
        aliases: ['Software Release Manager', 'Deployment Manager'],
        averageSalary: 120000,
        growthRate: 18
    },
    {
        id: 'technical-program-manager',
        title: 'Technical Program Manager',
        slug: 'technical-program-manager',
        category: 'technology',
        aliases: ['TPM', 'Technical PM'],
        averageSalary: 150000,
        growthRate: 22
    },

    // Marketing - Additional Batch 4
    {
        id: 'brand-manager-senior',
        title: 'Senior Brand Manager',
        slug: 'senior-brand-manager',
        category: 'marketing',
        aliases: ['Lead Brand Manager', 'Principal Brand Manager'],
        averageSalary: 110000,
        growthRate: 14
    },
    {
        id: 'digital-marketing-director',
        title: 'Digital Marketing Director',
        slug: 'digital-marketing-director',
        category: 'marketing',
        aliases: ['Director of Digital Marketing', 'Head of Digital'],
        averageSalary: 130000,
        growthRate: 16
    },
    {
        id: 'seo-director',
        title: 'SEO Director',
        slug: 'seo-director',
        category: 'marketing',
        aliases: ['Director of SEO', 'Head of SEO'],
        averageSalary: 110000,
        growthRate: 18
    },
    {
        id: 'content-director',
        title: 'Content Director',
        slug: 'content-director',
        category: 'marketing',
        aliases: ['Director of Content', 'Head of Content'],
        averageSalary: 120000,
        growthRate: 14
    },
    {
        id: 'creative-director-digital',
        title: 'Digital Creative Director',
        slug: 'digital-creative-director',
        category: 'marketing',
        aliases: ['Digital Creative Lead', 'Online Creative Director'],
        averageSalary: 140000,
        growthRate: 16
    },
    {
        id: 'performance-marketing-manager',
        title: 'Performance Marketing Manager',
        slug: 'performance-marketing-manager',
        category: 'marketing',
        aliases: ['Paid Media Manager', 'Performance Ads Manager'],
        averageSalary: 100000,
        growthRate: 18
    },
    {
        id: 'affiliate-manager',
        title: 'Affiliate Manager',
        slug: 'affiliate-manager',
        category: 'marketing',
        aliases: ['Partnership Manager', 'Affiliate Program Manager'],
        averageSalary: 80000,
        growthRate: 16
    },
    {
        id: 'email-automation-specialist',
        title: 'Email Automation Specialist',
        slug: 'email-automation-specialist',
        category: 'marketing',
        aliases: ['Email Automation Expert', 'Lifecycle Marketing Specialist'],
        averageSalary: 75000,
        growthRate: 16
    },
    {
        id: 'social-media-strategist',
        title: 'Social Media Strategist',
        slug: 'social-media-strategist',
        category: 'marketing',
        aliases: ['Social Media Strategy Lead', 'Social Strategy Manager'],
        averageSalary: 85000,
        growthRate: 18
    },
    {
        id: 'inbound-marketing-manager',
        title: 'Inbound Marketing Manager',
        slug: 'inbound-marketing-manager',
        category: 'marketing',
        aliases: ['Inbound Marketing Lead', 'Inbound Marketing Director'],
        averageSalary: 95000,
        growthRate: 16
    },
    {
        id: 'video-marketing-manager',
        title: 'Video Marketing Manager',
        slug: 'video-marketing-manager',
        category: 'marketing',
        aliases: ['Video Content Manager', 'Video Marketing Lead'],
        averageSalary: 90000,
        growthRate: 20
    },

    // Sales - Additional Batch 4
    {
        id: 'inside-sales-manager',
        title: 'Inside Sales Manager',
        slug: 'inside-sales-manager',
        category: 'sales',
        aliases: ['Inside Sales Team Lead', 'Telesales Manager'],
        averageSalary: 90000,
        growthRate: 12
    },
    {
        id: 'field-sales-manager',
        title: 'Field Sales Manager',
        slug: 'field-sales-manager',
        category: 'sales',
        aliases: ['Outside Sales Manager', 'Field Sales Team Lead'],
        averageSalary: 105000,
        growthRate: 12
    },
    {
        id: 'sales-trainer',
        title: 'Sales Trainer',
        slug: 'sales-trainer',
        category: 'sales',
        aliases: ['Sales Training Manager', 'Sales Enablement Manager'],
        averageSalary: 85000,
        growthRate: 14
    },
    {
        id: 'sales-coach',
        title: 'Sales Coach',
        slug: 'sales-coach',
        category: 'sales',
        aliases: ['Sales Performance Coach', 'Sales Skills Coach'],
        averageSalary: 80000,
        growthRate: 12
    },
    {
        id: 'sales-operations-analyst',
        title: 'Sales Operations Analyst',
        slug: 'sales-operations-analyst',
        category: 'sales',
        aliases: ['Sales Ops Analyst', 'RevOps Analyst'],
        averageSalary: 70000,
        growthRate: 16
    },
    {
        id: 'compensation-analyst',
        title: 'Compensation Analyst',
        slug: 'compensation-analyst',
        category: 'sales',
        aliases: ['Sales Comp Analyst', 'Incentive Analyst'],
        averageSalary: 75000,
        growthRate: 12
    },
    {
        id: 'quota-manager',
        title: 'Quota Manager',
        slug: 'quota-manager',
        category: 'sales',
        aliases: ['Sales Quota Manager', 'Target Manager'],
        averageSalary: 95000,
        growthRate: 12
    },
    {
        id: 'proposal-manager',
        title: 'Proposal Manager',
        slug: 'proposal-manager',
        category: 'sales',
        aliases: ['RFP Manager', 'Bid Manager'],
        averageSalary: 90000,
        growthRate: 14
    },
    {
        id: 'solutions-consultant',
        title: 'Solutions Consultant',
        slug: 'solutions-consultant',
        category: 'sales',
        aliases: ['Pre-Sales Consultant', 'Solutions Advisor'],
        averageSalary: 105000,
        growthRate: 16
    },
    {
        id: 'deal-desk-manager',
        title: 'Deal Desk Manager',
        slug: 'deal-desk-manager',
        category: 'sales',
        aliases: ['Deal Desk Analyst', 'Pricing Manager'],
        averageSalary: 100000,
        growthRate: 14
    },

    // Healthcare - Additional Batch 4
    {
        id: 'nurse-anesthetist',
        title: 'Nurse Anesthetist',
        slug: 'nurse-anesthetist',
        category: 'healthcare',
        aliases: ['CRNA', 'Anesthesia Nurse'],
        averageSalary: 180000,
        growthRate: 25
    },
    {
        id: 'midwife',
        title: 'Midwife',
        slug: 'midwife',
        category: 'healthcare',
        aliases: ['Certified Nurse-Midwife', 'CNM'],
        averageSalary: 110000,
        growthRate: 16
    },
    {
        id: 'neonatal-nurse',
        title: 'Neonatal Nurse',
        slug: 'neonatal-nurse',
        category: 'healthcare',
        aliases: ['NICU Nurse', 'Neonatal ICU Nurse'],
        averageSalary: 90000,
        growthRate: 18
    },
    {
        id: 'psychiatric-nurse',
        title: 'Psychiatric Nurse',
        slug: 'psychiatric-nurse',
        category: 'healthcare',
        aliases: ['Mental Health Nurse', 'Psych Nurse'],
        averageSalary: 85000,
        growthRate: 15
    },
    {
        id: 'rehabilitation-nurse',
        title: 'Rehabilitation Nurse',
        slug: 'rehabilitation-nurse',
        category: 'healthcare',
        aliases: ['Rehab Nurse', 'Recovery Nurse'],
        averageSalary: 80000,
        growthRate: 14
    },
    {
        id: 'clinical-nurse-manager',
        title: 'Clinical Nurse Manager',
        slug: 'clinical-nurse-manager',
        category: 'healthcare',
        aliases: ['Nurse Manager', 'Patient Care Manager'],
        averageSalary: 95000,
        growthRate: 12
    },
    {
        id: 'nurse-educator',
        title: 'Nurse Educator',
        slug: 'nurse-educator',
        category: 'healthcare',
        aliases: ['Nursing Education Coordinator', 'Clinical Educator'],
        averageSalary: 90000,
        growthRate: 16
    },
    {
        id: 'charge-nurse',
        title: 'Charge Nurse',
        slug: 'charge-nurse',
        category: 'healthcare',
        aliases: ['Team Lead Nurse', 'Nursing Supervisor'],
        averageSalary: 82000,
        growthRate: 10
    },
    {
        id: 'nurse-practitioner-acute',
        title: 'Acute Care NP',
        slug: 'acute-care-np',
        category: 'healthcare',
        aliases: ['Acute Care Nurse Practitioner', 'Hospital NP'],
        averageSalary: 125000,
        growthRate: 22
    },
    {
        id: 'family-nurse-practitioner',
        title: 'Family Nurse Practitioner',
        slug: 'family-nurse-practitioner',
        category: 'healthcare',
        aliases: ['FNP', 'Family NP'],
        averageSalary: 120000,
        growthRate: 24
    },
    {
        id: 'emergency-room-physician',
        title: 'Emergency Physician',
        slug: 'emergency-physician',
        category: 'healthcare',
        aliases: ['ER Doctor', 'Emergency Medicine Physician'],
        averageSalary: 280000,
        growthRate: 12
    },

    // HR - Additional Batch 2
    {
        id: 'talent-acquisition-director',
        title: 'Talent Acquisition Director',
        slug: 'talent-acquisition-director',
        category: 'hr',
        aliases: ['Director of Talent Acquisition', 'Head of Recruiting'],
        averageSalary: 110000,
        growthRate: 16
    },
    {
        id: 'recruiting-manager',
        title: 'Recruiting Manager',
        slug: 'recruiting-manager',
        category: 'hr',
        aliases: ['Recruitment Team Manager', 'Staffing Manager'],
        averageSalary: 85000,
        growthRate: 12
    },
    {
        id: 'talent-sourcing-specialist',
        title: 'Talent Sourcing Specialist',
        slug: 'talent-sourcing-specialist',
        category: 'hr',
        aliases: ['Sourcing Specialist', 'Candidate Sourcing Specialist'],
        averageSalary: 70000,
        growthRate: 16
    },
    {
        id: 'university-recruiter',
        title: 'University Recruiter',
        slug: 'university-recruiter',
        category: 'hr',
        aliases: ['Campus Recruiter', 'College Recruiter'],
        averageSalary: 65000,
        growthRate: 14
    },
    {
        id: 'military-recruiter',
        title: 'Military Recruiter',
        slug: 'military-recruiter',
        category: 'hr',
        aliases: ['Armed Forces Recruiter', 'Veterans Recruiter'],
        averageSalary: 70000,
        growthRate: 12
    },
    {
        id: 'recruiting-coordinator',
        title: 'Recruiting Coordinator',
        slug: 'recruiting-coordinator',
        category: 'hr',
        aliases: ['Recruitment Coordinator', 'Staffing Coordinator'],
        averageSalary: 55000,
        growthRate: 10
    },
    {
        id: 'hr-coordinator-senior',
        title: 'Senior HR Coordinator',
        slug: 'senior-hr-coordinator',
        category: 'hr',
        aliases: ['Lead HR Coordinator', 'HR Admin II'],
        averageSalary: 60000,
        growthRate: 12
    },
    {
        id: 'hr-assistant',
        title: 'HR Assistant',
        slug: 'hr-assistant',
        category: 'hr',
        aliases: ['Human Resources Assistant', 'HR Admin Assistant'],
        averageSalary: 45000,
        growthRate: 8
    },
    {
        id: 'payroll-administrator',
        title: 'Payroll Administrator',
        slug: 'payroll-administrator',
        category: 'hr',
        aliases: ['Payroll Admin', 'Payroll Specialist'],
        averageSalary: 60000,
        growthRate: 10
    },
    {
        id: 'benefits-administrator',
        title: 'Benefits Administrator',
        slug: 'benefits-administrator',
        category: 'hr',
        aliases: ['Benefits Admin', 'Benefits Specialist'],
        averageSalary: 62000,
        growthRate: 10
    },

    // Finance - Additional Batch 2
    {
        id: 'financial-controller',
        title: 'Financial Controller',
        slug: 'financial-controller',
        category: 'finance',
        aliases: ['Group Controller', 'Corporate Controller'],
        averageSalary: 140000,
        growthRate: 12
    },
    {
        id: 'assistant-controller',
        title: 'Assistant Controller',
        slug: 'assistant-controller',
        category: 'finance',
        aliases: ['Assistant Financial Controller', 'Deputy Controller'],
        averageSalary: 95000,
        growthRate: 12
    },
    {
        id: 'financial-planner-analyst',
        title: 'Financial Planning Analyst',
        slug: 'financial-planning-analyst',
        category: 'finance',
        aliases: ['FP&A Analyst', 'Financial Planning & Analysis'],
        averageSalary: 90000,
        growthRate: 14
    },
    {
        id: 'tax-manager',
        title: 'Tax Manager',
        slug: 'tax-manager',
        category: 'finance',
        aliases: ['Taxation Manager', 'Tax Department Manager'],
        averageSalary: 110000,
        growthRate: 12
    },
    {
        id: 'tax-senior-analyst',
        title: 'Senior Tax Analyst',
        slug: 'senior-tax-analyst',
        category: 'finance',
        aliases: ['Lead Tax Analyst', 'Tax II'],
        averageSalary: 85000,
        growthRate: 12
    },
    {
        id: 'auditing-manager',
        title: 'Auditing Manager',
        slug: 'auditing-manager',
        category: 'finance',
        aliases: ['Audit Manager', 'Internal Audit Manager'],
        averageSalary: 110000,
        growthRate: 10
    },
    {
        id: 'external-auditor',
        title: 'External Auditor',
        slug: 'external-auditor',
        category: 'finance',
        aliases: ['Statutory Auditor', 'Public Auditor'],
        averageSalary: 85000,
        growthRate: 10
    },
    {
        id: 'internal-auditor',
        title: 'Internal Auditor',
        slug: 'internal-auditor',
        category: 'finance',
        aliases: ['Internal Audit Analyst', 'IA'],
        averageSalary: 80000,
        growthRate: 12
    },
    {
        id: 'forensic-accountant-manager',
        title: 'Forensic Accountant',
        slug: 'forensic-accountant',
        category: 'finance',
        aliases: ['Forensic Accounting Manager', 'Forensic CPA'],
        averageSalary: 90000,
        growthRate: 14
    },
    {
        id: 'fund-accountant',
        title: 'Fund Accountant',
        slug: 'fund-accountant',
        category: 'finance',
        aliases: ['Foundation Accountant', 'Non-Profit Accountant'],
        averageSalary: 70000,
        growthRate: 10
    },

    // Admin - Additional Batch 2
    {
        id: 'office-administrator',
        title: 'Office Administrator',
        slug: 'office-administrator',
        category: 'admin',
        aliases: ['Office Admin', 'Office Supervisor'],
        averageSalary: 50000,
        growthRate: 8
    },
    {
        id: 'administrative-coordinator',
        title: 'Administrative Coordinator',
        slug: 'administrative-coordinator',
        category: 'admin',
        aliases: ['Admin Coordinator', 'Admin Support Coordinator'],
        averageSalary: 48000,
        growthRate: 8
    },
    {
        id: 'executive-coordinator',
        title: 'Executive Coordinator',
        slug: 'executive-coordinator',
        category: 'admin',
        aliases: ['Executive Admin Coordinator', 'C-Level Assistant'],
        averageSalary: 70000,
        growthRate: 10
    },
    {
        id: 'administrative-support',
        title: 'Administrative Support',
        slug: 'administrative-support',
        category: 'admin',
        aliases: ['Admin Support Specialist', 'Office Support'],
        averageSalary: 42000,
        growthRate: 6
    },
    {
        id: 'office-support',
        title: 'Office Support',
        slug: 'office-support',
        category: 'admin',
        aliases: ['Office Support Specialist', 'Admin Support'],
        averageSalary: 40000,
        growthRate: 6
    },
    {
        id: 'administrative-specialist',
        title: 'Administrative Specialist',
        slug: 'administrative-specialist',
        category: 'admin',
        aliases: ['Admin Specialist', 'Senior Admin'],
        averageSalary: 46000,
        growthRate: 8
    },
    {
        id: 'document-specialist',
        title: 'Document Specialist',
        slug: 'document-specialist',
        category: 'admin',
        aliases: ['Records Specialist', 'Documentation Clerk'],
        averageSalary: 42000,
        growthRate: 6
    },
    {
        id: 'records-specialist',
        title: 'Records Specialist',
        slug: 'records-specialist',
        category: 'admin',
        aliases: ['Records Clerk', 'File Specialist'],
        averageSalary: 40000,
        growthRate: 6
    },
    {
        id: 'contract-administrator',
        title: 'Contract Administrator',
        slug: 'contract-administrator',
        category: 'admin',
        aliases: ['Contracts Admin', 'Contract Coordinator'],
        averageSalary: 65000,
        growthRate: 10
    },
    {
        id: 'department-coordinator',
        title: 'Department Coordinator',
        slug: 'department-coordinator',
        category: 'admin',
        aliases: ['Dept Coordinator', 'Department Admin'],
        averageSalary: 55000,
        growthRate: 8
    },

    // Customer Service - Additional Batch 2
    {
        id: 'customer-service-lead',
        title: 'Customer Service Lead',
        slug: 'customer-service-lead',
        category: 'customer-service',
        aliases: ['CS Lead', 'Customer Service Team Lead'],
        averageSalary: 55000,
        growthRate: 10
    },
    {
        id: 'customer-service-supervisor',
        title: 'Customer Service Supervisor',
        slug: 'customer-service-supervisor',
        category: 'customer-service',
        aliases: ['CS Supervisor', 'Call Center Supervisor'],
        averageSalary: 60000,
        growthRate: 10
    },
    {
        id: 'customer-service-representative-senior',
        title: 'Senior Customer Service Representative',
        slug: 'senior-customer-service-representative',
        category: 'customer-service',
        aliases: ['Senior CSR', 'Senior Customer Service Rep'],
        averageSalary: 42000,
        growthRate: 8
    },
    {
        id: 'call-center-team-lead',
        title: 'Call Center Team Lead',
        slug: 'call-center-team-lead',
        category: 'customer-service',
        aliases: ['Call Center Lead', 'Team Lead Agent'],
        averageSalary: 50000,
        growthRate: 10
    },
    {
        id: 'contact-center-agent',
        title: 'Contact Center Agent',
        slug: 'contact-center-agent',
        category: 'customer-service',
        aliases: ['Contact Center Representative', 'Call Center Agent II'],
        averageSalary: 40000,
        growthRate: 8
    },
    {
        id: 'customer-service-rep-ii',
        title: 'Customer Service Rep II',
        slug: 'customer-service-rep-ii',
        category: 'customer-service',
        aliases: ['CSR II', 'Experienced Customer Service Rep'],
        averageSalary: 38000,
        growthRate: 7
    },
    {
        id: 'technical-support-lead',
        title: 'Technical Support Lead',
        slug: 'technical-support-lead',
        category: 'customer-service',
        aliases: ['Tech Support Lead', 'IT Support Lead'],
        averageSalary: 75000,
        growthRate: 14
    },
    {
        id: 'support-specialist',
        title: 'Support Specialist',
        slug: 'support-specialist',
        category: 'customer-service',
        aliases: ['Customer Support Specialist II', 'Tier 2 Support'],
        averageSalary: 50000,
        growthRate: 12
    },
    {
        id: 'technical-support-engineer',
        title: 'Technical Support Engineer',
        slug: 'technical-support-engineer-2',
        category: 'customer-service',
        aliases: ['TSE', 'IT Support Engineer II'],
        averageSalary: 65000,
        growthRate: 12
    },
    {
        id: 'customer-success-associate',
        title: 'Customer Success Associate',
        slug: 'customer-success-associate',
        category: 'customer-service',
        aliases: ['CSA', 'Customer Success Rep I'],
        averageSalary: 50000,
        growthRate: 18
    },

    // Design - Additional Batch 2
    {
        id: 'senior-graphic-designer',
        title: 'Senior Graphic Designer',
        slug: 'senior-graphic-designer',
        category: 'design',
        aliases: ['Lead Graphic Designer', 'Principal Graphic Designer'],
        averageSalary: 70000,
        growthRate: 10
    },
    {
        id: 'design-manager',
        title: 'Design Manager',
        slug: 'design-manager',
        category: 'design',
        aliases: ['Design Team Manager', 'Creative Manager'],
        averageSalary: 110000,
        growthRate: 12
    },
    {
        id: 'art-director-senior',
        title: 'Senior Art Director',
        slug: 'senior-art-director',
        category: 'design',
        aliases: ['Lead Art Director', 'Group Art Director'],
        averageSalary: 115000,
        growthRate: 12
    },
    {
        id: 'design-lead',
        title: 'Design Lead',
        slug: 'design-lead',
        category: 'design',
        aliases: ['Product Design Lead', 'UX Design Lead'],
        averageSalary: 130000,
        growthRate: 18
    },
    {
        id: 'ux-researcher',
        title: 'UX Researcher',
        slug: 'ux-researcher',
        category: 'design',
        aliases: ['User Researcher', 'UX Research Specialist'],
        averageSalary: 95000,
        growthRate: 18
    },
    {
        id: 'ux-designer-senior',
        title: 'Senior UX Designer',
        slug: 'senior-ux-designer',
        category: 'design',
        aliases: ['Lead UX Designer', 'Principal UX Designer'],
        averageSalary: 115000,
        growthRate: 18
    },
    {
        id: 'ui-designer-senior',
        title: 'Senior UI Designer',
        slug: 'senior-ui-designer',
        category: 'design',
        aliases: ['Lead UI Designer', 'Principal UI Designer'],
        averageSalary: 110000,
        growthRate: 16
    },
    {
        id: 'product-designer-senior',
        title: 'Senior Product Designer',
        slug: 'senior-product-designer',
        category: 'design',
        aliases: ['Lead Product Designer', 'Principal Product Designer'],
        averageSalary: 125000,
        growthRate: 20
    },
    {
        id: 'interaction-designer-senior',
        title: 'Senior Interaction Designer',
        slug: 'senior-interaction-designer',
        category: 'design',
        aliases: ['Lead Interaction Designer', 'IXD Lead'],
        averageSalary: 120000,
        growthRate: 18
    },
    {
        id: 'service-designer',
        title: 'Service Designer',
        slug: 'service-designer',
        category: 'design',
        aliases: ['Service Design Consultant', 'CX Designer'],
        averageSalary: 100000,
        growthRate: 20
    },

    // Engineering - Additional Batch 2
    {
        id: 'project-engineer',
        title: 'Project Engineer',
        slug: 'project-engineer',
        category: 'engineering',
        aliases: ['Engineering Project Manager', 'Projects Engineer'],
        averageSalary: 95000,
        growthRate: 12
    },
    {
        id: 'design-engineer',
        title: 'Design Engineer',
        slug: 'design-engineer',
        category: 'engineering',
        aliases: ['Product Design Engineer', 'R&D Engineer'],
        averageSalary: 95000,
        growthRate: 14
    },
    {
        id: 'process-engineer',
        title: 'Process Engineer',
        slug: 'process-engineer',
        category: 'engineering',
        aliases: ['Process Improvement Engineer', 'Manufacturing Engineer'],
        averageSalary: 92000,
        growthRate: 14
    },
    {
        id: 'quality-engineer',
        title: 'Quality Engineer',
        slug: 'quality-engineer',
        category: 'engineering',
        aliases: ['QE', 'Quality Assurance Engineer'],
        averageSalary: 85000,
        growthRate: 12
    },
    {
        id: 'validation-engineer',
        title: 'Validation Engineer',
        slug: 'validation-engineer',
        category: 'engineering',
        aliases: ['Product Validation Engineer', 'Test Engineer'],
        averageSalary: 88000,
        growthRate: 12
    },
    {
        id: 'reliability-engineer',
        title: 'Reliability Engineer',
        slug: 'reliability-engineer',
        category: 'engineering',
        aliases: ['RE', 'Product Reliability Engineer'],
        averageSalary: 95000,
        growthRate: 14
    },
    {
        id: 'manufacturing-engineer',
        title: 'Manufacturing Engineer',
        slug: 'manufacturing-engineer',
        category: 'engineering',
        aliases: ['Production Engineer', 'Manufacturing Systems Engineer'],
        averageSalary: 90000,
        growthRate: 10
    },
    {
        id: 'test-engineer',
        title: 'Test Engineer',
        slug: 'test-engineer',
        category: 'engineering',
        aliases: ['QA Engineer', 'Product Test Engineer'],
        averageSalary: 85000,
        growthRate: 12
    },
    {
        id: 'systems-engineer',
        title: 'Systems Engineer',
        slug: 'systems-engineer',
        category: 'engineering',
        aliases: ['Systems Engineer IT', 'IT Systems Engineer'],
        averageSalary: 100000,
        growthRate: 14
    },
    {
        id: 'mechanical-designer',
        title: 'Mechanical Designer',
        slug: 'mechanical-designer',
        category: 'engineering',
        aliases: ['Mechanical Design Engineer', 'CAD Designer'],
        averageSalary: 82000,
        growthRate: 12
    },

    // ========== BATCH 5: Additional Jobs ==========

    // Technology - Batch 5
    {
        id: 'platform-engineer',
        title: 'Platform Engineer',
        slug: 'platform-engineer',
        category: 'technology',
        aliases: ['Platform Developer', 'Infrastructure Platform Engineer'],
        averageSalary: 145000,
        growthRate: 22
    },
    {
        id: 'site-reliability-engineer',
        title: 'Site Reliability Engineer',
        slug: 'site-reliability-engineer',
        category: 'technology',
        aliases: ['SRE', 'Reliability Engineer'],
        averageSalary: 150000,
        growthRate: 24
    },
    {
        id: 'cloud-architect-2',
        title: 'Cloud Solutions Architect',
        slug: 'cloud-solutions-architect',
        category: 'technology',
        aliases: ['Cloud Architect', 'AWS Solutions Architect'],
        averageSalary: 160000,
        growthRate: 20
    },
    {
        id: 'ai-engineer',
        title: 'AI Engineer',
        slug: 'ai-engineer',
        category: 'technology',
        aliases: ['Machine Learning Engineer', 'AI Developer'],
        averageSalary: 155000,
        growthRate: 28
    },
    {
        id: 'ml-engineer',
        title: 'ML Engineer',
        slug: 'ml-engineer',
        category: 'technology',
        aliases: ['Machine Learning Engineer', 'ML Developer'],
        averageSalary: 150000,
        growthRate: 26
    },
    {
        id: 'data-engineer-2',
        title: 'Senior Data Engineer',
        slug: 'senior-data-engineer',
        category: 'technology',
        aliases: ['Lead Data Engineer', 'Data Engineering Lead'],
        averageSalary: 140000,
        growthRate: 22
    },
    {
        id: 'graphql-developer',
        title: 'GraphQL Developer',
        slug: 'graphql-developer',
        category: 'technology',
        aliases: ['GraphQL Engineer', 'API Developer'],
        averageSalary: 120000,
        growthRate: 20
    },
    {
        id: 'kubernetes-engineer',
        title: 'Kubernetes Engineer',
        slug: 'kubernetes-engineer',
        category: 'technology',
        aliases: ['K8s Engineer', 'Container Orchestration Engineer'],
        averageSalary: 140000,
        growthRate: 24
    },
    {
        id: 'terraform-engineer',
        title: 'Terraform Engineer',
        slug: 'terraform-engineer',
        category: 'technology',
        aliases: ['Infrastructure as Code Engineer', 'IaC Engineer'],
        averageSalary: 135000,
        growthRate: 22
    },
    {
        id: 'staff-software-engineer',
        title: 'Staff Software Engineer',
        slug: 'staff-software-engineer',
        category: 'technology',
        aliases: ['Staff Engineer', 'Principal Software Engineer'],
        averageSalary: 175000,
        growthRate: 20
    },

    // Marketing - Batch 5
    {
        id: 'growth-marketer',
        title: 'Growth Marketer',
        slug: 'growth-marketer',
        category: 'marketing',
        aliases: ['Growth Hacker', 'Growth Manager'],
        averageSalary: 95000,
        growthRate: 18
    },
    {
        id: 'product-marketing-manager',
        title: 'Product Marketing Manager',
        slug: 'product-marketing-manager',
        category: 'marketing',
        aliases: ['PMM', 'Product Marketing'],
        averageSalary: 115000,
        growthRate: 16
    },
    {
        id: 'marketing-analyst',
        title: 'Marketing Analyst',
        slug: 'marketing-analyst',
        category: 'marketing',
        aliases: ['Marketing Data Analyst', 'Marketing Insights Analyst'],
        averageSalary: 75000,
        growthRate: 16
    },
    {
        id: 'brand-manager',
        title: 'Brand Manager',
        slug: 'brand-manager',
        category: 'marketing',
        aliases: ['Brand Marketing Manager', 'Product Brand Manager'],
        averageSalary: 105000,
        growthRate: 14
    },
    {
        id: 'field-marketing-manager',
        title: 'Field Marketing Manager',
        slug: 'field-marketing-manager',
        category: 'marketing',
        aliases: ['Regional Marketing Manager', 'Field Marketing'],
        averageSalary: 100000,
        growthRate: 14
    },

    // Sales - Batch 5
    {
        id: 'sales-operations-manager',
        title: 'Sales Operations Manager',
        slug: 'sales-operations-manager',
        category: 'sales',
        aliases: ['Sales Ops Manager', 'Revenue Operations Manager'],
        averageSalary: 95000,
        growthRate: 16
    },
    {
        id: 'sales-enablement-manager',
        title: 'Sales Enablement Manager',
        slug: 'sales-enablement-manager',
        category: 'sales',
        aliases: ['Sales Enablement Specialist', 'Sales Training Manager'],
        averageSalary: 90000,
        growthRate: 18
    },
    {
        id: 'enterprise-account-executive',
        title: 'Enterprise Account Executive',
        slug: 'enterprise-account-executive-2',
        category: 'sales',
        aliases: ['Enterprise Sales Executive', 'Strategic Account Executive'],
        averageSalary: 120000,
        growthRate: 16
    },
    {
        id: 'customer-success-manager',
        title: 'Customer Success Manager',
        slug: 'customer-success-manager',
        category: 'sales',
        aliases: ['CSM', 'Client Success Manager'],
        averageSalary: 85000,
        growthRate: 20
    },
    {
        id: 'revenue-operations-manager',
        title: 'Revenue Operations Manager',
        slug: 'revenue-operations-manager',
        category: 'sales',
        aliases: ['RevOps Manager', 'Revenue Operations Lead'],
        averageSalary: 100000,
        growthRate: 20
    },

    // Healthcare - Batch 5
    {
        id: 'nurse-practitioner',
        title: 'Nurse Practitioner',
        slug: 'nurse-practitioner',
        category: 'healthcare',
        aliases: ['NP', 'Advanced Practice Nurse'],
        averageSalary: 120000,
        growthRate: 18
    },
    {
        id: 'physician-assistant',
        title: 'Physician Assistant',
        slug: 'physician-assistant',
        category: 'healthcare',
        aliases: ['PA', 'Physician Associate'],
        averageSalary: 115000,
        growthRate: 20
    },
    {
        id: 'medical-technologist',
        title: 'Medical Technologist',
        slug: 'medical-technologist',
        category: 'healthcare',
        aliases: ['Clinical Laboratory Scientist', 'Medical Lab Tech'],
        averageSalary: 65000,
        growthRate: 10
    },
    {
        id: 'radiology-technologist',
        title: 'Radiology Technologist',
        slug: 'radiology-technologist',
        category: 'healthcare',
        aliases: ['Rad Tech', 'X-Ray Technologist'],
        averageSalary: 70000,
        growthRate: 12
    },
    {
        id: 'occupational-therapist',
        title: 'Occupational Therapist',
        slug: 'occupational-therapist-2',
        category: 'healthcare',
        aliases: ['OT', 'Occupational Therapy Practitioner'],
        averageSalary: 90000,
        growthRate: 16
    },

    // Finance - Batch 5
    {
        id: 'finance-manager',
        title: 'Finance Manager',
        slug: 'finance-manager',
        category: 'finance',
        aliases: ['Financial Manager', 'Finance Lead'],
        averageSalary: 115000,
        growthRate: 14
    },
    {
        id: 'corporate-finance-analyst',
        title: 'Corporate Finance Analyst',
        slug: 'corporate-finance-analyst',
        category: 'finance',
        aliases: ['Finance Analyst', 'Corporate Finance'],
        averageSalary: 85000,
        growthRate: 14
    },
    {
        id: 'treasury-analyst',
        title: 'Treasury Analyst',
        slug: 'treasury-analyst',
        category: 'finance',
        aliases: ['Treasury Specialist', 'Cash Management Analyst'],
        averageSalary: 80000,
        growthRate: 12
    },
    {
        id: 'credit-analyst',
        title: 'Credit Analyst',
        slug: 'credit-analyst',
        category: 'finance',
        aliases: ['Credit Risk Analyst', 'Loan Analyst'],
        averageSalary: 70000,
        growthRate: 10
    },
    {
        id: 'investment-analyst',
        title: 'Investment Analyst',
        slug: 'investment-analyst',
        category: 'finance',
        aliases: ['Investment Research Analyst', 'Securities Analyst'],
        averageSalary: 95000,
        growthRate: 16
    },

    // HR - Batch 5
    {
        id: 'hr-business-partner',
        title: 'HR Business Partner',
        slug: 'hr-business-partner',
        category: 'hr',
        aliases: ['HRBP', 'Strategic HR Partner'],
        averageSalary: 95000,
        growthRate: 14
    },
    {
        id: 'hr-manager',
        title: 'HR Manager',
        slug: 'hr-manager',
        category: 'hr',
        aliases: ['Human Resources Manager', 'People Manager'],
        averageSalary: 85000,
        growthRate: 12
    },
    {
        id: 'compensation-analyst-hr',
        title: 'Compensation Analyst',
        slug: 'compensation-analyst-2',
        category: 'hr',
        aliases: ['Total Rewards Analyst', 'Compensation Specialist'],
        averageSalary: 75000,
        growthRate: 12
    },
    {
        id: 'hr-information-systems',
        title: 'HR Information Systems Manager',
        slug: 'hr-information-systems-manager',
        category: 'hr',
        aliases: ['HRIS Manager', 'HR Systems Analyst'],
        averageSalary: 90000,
        growthRate: 14
    },
    {
        id: 'learning-development-manager',
        title: 'Learning and Development Manager',
        slug: 'learning-development-manager',
        category: 'hr',
        aliases: ['L&D Manager', 'Training and Development Manager'],
        averageSalary: 90000,
        growthRate: 16
    },

    // Customer Service - Batch 5
    {
        id: 'customer-experience-manager',
        title: 'Customer Experience Manager',
        slug: 'customer-experience-manager',
        category: 'customer-service',
        aliases: ['CX Manager', 'Customer Experience Lead'],
        averageSalary: 85000,
        growthRate: 16
    },
    {
        id: 'voice-of-customer-manager',
        title: 'Voice of Customer Manager',
        slug: 'voice-of-customer-manager',
        category: 'customer-service',
        aliases: ['VoC Manager', 'Customer Insights Manager'],
        averageSalary: 90000,
        growthRate: 18
    },
    {
        id: 'customer-advocate',
        title: 'Customer Advocate',
        slug: 'customer-advocate',
        category: 'customer-service',
        aliases: ['Customer Support Advocate', 'Client Advocate'],
        averageSalary: 50000,
        growthRate: 14
    },
    {
        id: 'customer-loyalty-manager',
        title: 'Customer Loyalty Manager',
        slug: 'customer-loyalty-manager',
        category: 'customer-service',
        aliases: ['Loyalty Program Manager', 'Retention Manager'],
        averageSalary: 80000,
        growthRate: 14
    },
    {
        id: 'technical-customer-support',
        title: 'Technical Customer Support Manager',
        slug: 'technical-customer-support-manager',
        category: 'customer-service',
        aliases: ['Technical Support Manager', 'IT Customer Support Manager'],
        averageSalary: 95000,
        growthRate: 16
    },

    // Design - Batch 5
    {
        id: 'design-researcher',
        title: 'Design Researcher',
        slug: 'design-researcher',
        category: 'design',
        aliases: ['Design Research Specialist', 'User Researcher'],
        averageSalary: 95000,
        growthRate: 20
    },
    {
        id: 'content-designer',
        title: 'Content Designer',
        slug: 'content-designer',
        category: 'design',
        aliases: ['UX Writer', 'Content Strategist'],
        averageSalary: 90000,
        growthRate: 18
    },
    {
        id: 'motion-designer',
        title: 'Motion Designer',
        slug: 'motion-designer',
        category: 'design',
        aliases: ['Animation Designer', 'Motion Graphics Designer'],
        averageSalary: 85000,
        growthRate: 18
    },
    {
        id: 'design-system-manager',
        title: 'Design System Manager',
        slug: 'design-system-manager',
        category: 'design',
        aliases: ['Design Systems Lead', 'Component Library Manager'],
        averageSalary: 120000,
        growthRate: 20
    },
    {
        id: 'brand-designer',
        title: 'Brand Designer',
        slug: 'brand-designer',
        category: 'design',
        aliases: ['Brand Identity Designer', 'Visual Designer'],
        averageSalary: 80000,
        growthRate: 14
    },

    // Engineering - Batch 5
    {
        id: 'civil-engineer',
        title: 'Civil Engineer',
        slug: 'civil-engineer',
        category: 'engineering',
        aliases: ['Civil Engineering', 'Infrastructure Engineer'],
        averageSalary: 90000,
        growthRate: 8
    },
    {
        id: 'structural-engineer',
        title: 'Structural Engineer',
        slug: 'structural-engineer',
        category: 'engineering',
        aliases: ['Structural Engineering', 'Building Engineer'],
        averageSalary: 95000,
        growthRate: 10
    },
    {
        id: 'electrical-engineer',
        title: 'Electrical Engineer',
        slug: 'electrical-engineer',
        category: 'engineering',
        aliases: ['EE', 'Electrical Engineering'],
        averageSalary: 100000,
        growthRate: 10
    },
    {
        id: 'chemical-engineer',
        title: 'Chemical Engineer',
        slug: 'chemical-engineer',
        category: 'engineering',
        aliases: ['ChemE', 'Process Engineer Chemical'],
        averageSalary: 105000,
        growthRate: 12
    },
    {
        id: 'biomedical-engineer',
        title: 'Biomedical Engineer',
        slug: 'biomedical-engineer',
        category: 'engineering',
        aliases: ['BME', 'Medical Device Engineer'],
        averageSalary: 100000,
        growthRate: 16
    },

    // ========== BATCH 6: Additional Jobs ==========

    // Technology - Batch 6
    {
        id: 'database-administrator',
        title: 'Database Administrator',
        slug: 'database-administrator',
        category: 'technology',
        aliases: ['DBA', 'Database Engineer'],
        averageSalary: 105000,
        growthRate: 12
    },
    {
        id: 'etl-developer-2',
        title: 'ETL Developer',
        slug: 'etl-developer-2',
        category: 'technology',
        aliases: ['Data Integration Developer', 'ETL Engineer'],
        averageSalary: 95000,
        growthRate: 16
    },
    {
        id: 'business-intelligence-developer-2',
        title: 'Business Intelligence Developer',
        slug: 'business-intelligence-developer-2',
        category: 'technology',
        aliases: ['BI Developer', 'Analytics Engineer'],
        averageSalary: 100000,
        growthRate: 18
    },
    {
        id: 'data-analyst-2',
        title: 'Senior Data Analyst',
        slug: 'senior-data-analyst',
        category: 'technology',
        aliases: ['Lead Data Analyst', 'Data Analytics Lead'],
        averageSalary: 95000,
        growthRate: 20
    },
    {
        id: 'machine-learning-scientist',
        title: 'Machine Learning Scientist',
        slug: 'machine-learning-scientist',
        category: 'technology',
        aliases: ['ML Scientist', 'Applied Scientist'],
        averageSalary: 165000,
        growthRate: 28
    },

    // Marketing - Batch 6
    {
        id: 'email-marketing-specialist',
        title: 'Email Marketing Specialist',
        slug: 'email-marketing-specialist',
        category: 'marketing',
        aliases: ['Email Marketer', 'Email Campaign Manager'],
        averageSalary: 65000,
        growthRate: 14
    },
    {
        id: 'social-media-coordinator',
        title: 'Social Media Coordinator',
        slug: 'social-media-coordinator',
        category: 'marketing',
        aliases: ['Social Coordinator', 'Social Media Assistant'],
        averageSalary: 50000,
        growthRate: 12
    },
    {
        id: 'marketing-project-manager',
        title: 'Marketing Project Manager',
        slug: 'marketing-project-manager',
        category: 'marketing',
        aliases: ['Marketing Coordinator', 'Campaign Manager'],
        averageSalary: 70000,
        growthRate: 14
    },
    {
        id: 'seo-specialist',
        title: 'SEO Specialist',
        slug: 'seo-specialist',
        category: 'marketing',
        aliases: ['SEO Executive', 'Search Engine Specialist'],
        averageSalary: 60000,
        growthRate: 16
    },
    {
        id: 'ppc-specialist',
        title: 'PPC Specialist',
        slug: 'ppc-specialist',
        category: 'marketing',
        aliases: ['Paid Search Specialist', 'SEM Specialist'],
        averageSalary: 65000,
        growthRate: 16
    },

    // Sales - Batch 6
    {
        id: 'lead-generation-specialist',
        title: 'Lead Generation Specialist',
        slug: 'lead-generation-specialist',
        category: 'sales',
        aliases: ['Lead Gen Specialist', 'Demand Generation Specialist'],
        averageSalary: 55000,
        growthRate: 16
    },
    {
        id: 'sales-development-representative-2',
        title: 'Sales Development Representative',
        slug: 'sales-development-representative-2',
        category: 'sales',
        aliases: ['SDR', 'Lead Development Rep'],
        averageSalary: 50000,
        growthRate: 14
    },
    {
        id: 'business-development-manager',
        title: 'Business Development Manager',
        slug: 'business-development-manager',
        category: 'sales',
        aliases: ['BDM', 'Business Development'],
        averageSalary: 85000,
        growthRate: 16
    },
    {
        id: 'channel-sales-manager',
        title: 'Channel Sales Manager',
        slug: 'channel-sales-manager',
        category: 'sales',
        aliases: ['Channel Manager', 'Partner Sales Manager'],
        averageSalary: 95000,
        growthRate: 14
    },
    {
        id: 'client-services-manager',
        title: 'Client Services Manager',
        slug: 'client-services-manager',
        category: 'sales',
        aliases: ['Account Manager', 'Client Manager'],
        averageSalary: 75000,
        growthRate: 12
    },

    // Healthcare - Batch 6
    {
        id: 'dental-hygienist',
        title: 'Dental Hygienist',
        slug: 'dental-hygienist',
        category: 'healthcare',
        aliases: ['Registered Dental Hygienist', 'RDH'],
        averageSalary: 82000,
        growthRate: 14
    },
    {
        id: 'medical-assistant',
        title: 'Medical Assistant',
        slug: 'medical-assistant',
        category: 'healthcare',
        aliases: ['Clinical Medical Assistant', 'MA'],
        averageSalary: 40000,
        growthRate: 16
    },
    {
        id: 'pharmacy-technician',
        title: 'Pharmacy Technician',
        slug: 'pharmacy-technician',
        category: 'healthcare',
        aliases: ['Pharm Tech', 'Pharmacy Assistant'],
        averageSalary: 38000,
        growthRate: 10
    },
    {
        id: 'medical-coder',
        title: 'Medical Coder',
        slug: 'medical-coder',
        category: 'healthcare',
        aliases: ['Medical Coding Specialist', 'Coding Specialist'],
        averageSalary: 48000,
        growthRate: 12
    },
    {
        id: 'health-information-specialist',
        title: 'Health Information Specialist',
        slug: 'health-information-specialist',
        category: 'healthcare',
        aliases: ['Medical Records Technician', 'HIM Specialist'],
        averageSalary: 45000,
        growthRate: 14
    },

    // Finance - Batch 6
    {
        id: 'accounts-payable-specialist',
        title: 'Accounts Payable Specialist',
        slug: 'accounts-payable-specialist',
        category: 'finance',
        aliases: ['AP Specialist', 'Accounts Payable Clerk'],
        averageSalary: 45000,
        growthRate: 8
    },
    {
        id: 'accounts-receivable-specialist',
        title: 'Accounts Receivable Specialist',
        slug: 'accounts-receivable-specialist',
        category: 'finance',
        aliases: ['AR Specialist', 'Accounts Receivable Clerk'],
        averageSalary: 46000,
        growthRate: 8
    },
    {
        id: 'bookkeeper',
        title: 'Bookkeeper',
        slug: 'bookkeeper',
        category: 'finance',
        aliases: ['Full Charge Bookkeeper', 'Accounting Clerk'],
        averageSalary: 43000,
        growthRate: 6
    },
    {
        id: 'staff-accountant',
        title: 'Staff Accountant',
        slug: 'staff-accountant',
        category: 'finance',
        aliases: ['Junior Accountant', 'Accountant I'],
        averageSalary: 58000,
        growthRate: 10
    },
    {
        id: 'cost-accountant',
        title: 'Cost Accountant',
        slug: 'cost-accountant',
        category: 'finance',
        aliases: ['Cost Analyst', 'Cost Accounting Manager'],
        averageSalary: 70000,
        growthRate: 10
    },

    // HR - Batch 6
    {
        id: 'hr-coordinator-2',
        title: 'HR Coordinator',
        slug: 'hr-coordinator',
        category: 'hr',
        aliases: ['Human Resources Coordinator', 'HR Generalist'],
        averageSalary: 52000,
        growthRate: 10
    },
    {
        id: 'hr-generalist',
        title: 'HR Generalist',
        slug: 'hr-generalist',
        category: 'hr',
        aliases: ['Human Resources Generalist', 'HR Specialist'],
        averageSalary: 62000,
        growthRate: 12
    },
    {
        id: 'recruiter-2',
        title: 'Recruiter',
        slug: 'recruiter',
        category: 'hr',
        aliases: ['Technical Recruiter', 'Corporate Recruiter'],
        averageSalary: 60000,
        growthRate: 14
    },
    {
        id: 'training-specialist',
        title: 'Training Specialist',
        slug: 'training-specialist',
        category: 'hr',
        aliases: ['Training Coordinator', 'Learning Specialist'],
        averageSalary: 58000,
        growthRate: 14
    },
    {
        id: 'employee-relations-specialist',
        title: 'Employee Relations Specialist',
        slug: 'employee-relations-specialist',
        category: 'hr',
        aliases: ['ER Specialist', 'Employee Relations Manager'],
        averageSalary: 70000,
        growthRate: 12
    },

    // Admin - Batch 6
    {
        id: 'executive-assistant',
        title: 'Executive Assistant',
        slug: 'executive-assistant',
        category: 'admin',
        aliases: ['EA', 'Executive Administrative Assistant'],
        averageSalary: 65000,
        growthRate: 10
    },
    {
        id: 'personal-assistant',
        title: 'Personal Assistant',
        slug: 'personal-assistant',
        category: 'admin',
        aliases: ['PA', 'Executive Personal Assistant'],
        averageSalary: 55000,
        growthRate: 8
    },
    {
        id: 'receptionist',
        title: 'Receptionist',
        slug: 'receptionist',
        category: 'admin',
        aliases: ['Front Desk Receptionist', 'Office Receptionist'],
        averageSalary: 35000,
        growthRate: 6
    },
    {
        id: 'data-entry-clerk',
        title: 'Data Entry Clerk',
        slug: 'data-entry-clerk',
        category: 'admin',
        aliases: ['Data Entry Specialist', 'Typist'],
        averageSalary: 34000,
        growthRate: 4
    },
    {
        id: 'file-clerk',
        title: 'File Clerk',
        slug: 'file-clerk',
        category: 'admin',
        aliases: ['Filing Clerk', 'Records Clerk'],
        averageSalary: 32000,
        growthRate: 4
    },

    // Customer Service - Batch 6
    {
        id: 'call-center-representative',
        title: 'Call Center Representative',
        slug: 'call-center-representative',
        category: 'customer-service',
        aliases: ['Call Center Agent', 'Phone Representative'],
        averageSalary: 36000,
        growthRate: 8
    },
    {
        id: 'customer-service-representative-2',
        title: 'Customer Service Representative',
        slug: 'customer-service-representative',
        category: 'customer-service',
        aliases: ['CSR', 'Customer Service Agent'],
        averageSalary: 38000,
        growthRate: 8
    },
    {
        id: 'inbound-sales-representative',
        title: 'Inbound Sales Representative',
        slug: 'inbound-sales-representative',
        category: 'customer-service',
        aliases: ['Inbound Sales Agent', 'Sales Representative'],
        averageSalary: 42000,
        growthRate: 10
    },
    {
        id: 'outbound-sales-representative',
        title: 'Outbound Sales Representative',
        slug: 'outbound-sales-representative',
        category: 'customer-service',
        aliases: ['Outbound Sales Agent', 'Telesales Representative'],
        averageSalary: 42000,
        growthRate: 10
    },
    {
        id: 'dispute-resolution-specialist',
        title: 'Dispute Resolution Specialist',
        slug: 'dispute-resolution-specialist',
        category: 'customer-service',
        aliases: ['Claims Specialist', 'Resolution Specialist'],
        averageSalary: 45000,
        growthRate: 10
    },

    // Design - Batch 6
    {
        id: 'production-artist',
        title: 'Production Artist',
        slug: 'production-artist',
        category: 'design',
        aliases: ['Graphic Production Artist', 'Digital Artist'],
        averageSalary: 55000,
        growthRate: 8
    },
    {
        id: 'visual-designer-2',
        title: 'Visual Designer',
        slug: 'visual-designer',
        category: 'design',
        aliases: ['UI Visual Designer', 'Digital Designer'],
        averageSalary: 75000,
        growthRate: 14
    },
    {
        id: 'product-designer-2',
        title: 'Product Designer',
        slug: 'product-designer',
        category: 'design',
        aliases: ['Digital Product Designer', 'UX/UI Designer'],
        averageSalary: 105000,
        growthRate: 18
    },
    {
        id: 'ui-designer-2',
        title: 'UI Designer',
        slug: 'ui-designer',
        category: 'design',
        aliases: ['User Interface Designer', 'Interface Designer'],
        averageSalary: 90000,
        growthRate: 16
    },
    {
        id: 'ux-designer-2',
        title: 'UX Designer',
        slug: 'ux-designer',
        category: 'design',
        aliases: ['User Experience Designer', 'Experience Designer'],
        averageSalary: 95000,
        growthRate: 18
    },

    // Engineering - Batch 6
    {
        id: 'industrial-engineer-2',
        title: 'Industrial Engineer',
        slug: 'industrial-engineer',
        category: 'engineering',
        aliases: ['IE', 'Manufacturing Engineer'],
        averageSalary: 88000,
        growthRate: 12
    },
    {
        id: 'environmental-engineer',
        title: 'Environmental Engineer',
        slug: 'environmental-engineer',
        category: 'engineering',
        aliases: ['Environmental Engineering', 'Environmental Consultant'],
        averageSalary: 92000,
        growthRate: 14
    },
    {
        id: 'aerospace-engineer',
        title: 'Aerospace Engineer',
        slug: 'aerospace-engineer',
        category: 'engineering',
        aliases: ['Aeronautical Engineer', 'Astronautical Engineer'],
        averageSalary: 120000,
        growthRate: 10
    },
    {
        id: 'materials-engineer',
        title: 'Materials Engineer',
        slug: 'materials-engineer',
        category: 'engineering',
        aliases: ['Materials Science Engineer', 'Metallurgical Engineer'],
        averageSalary: 98000,
        growthRate: 10
    },
    {
        id: 'engineering-technician',
        title: 'Engineering Technician',
        slug: 'engineering-technician',
        category: 'engineering',
        aliases: ['Engineering Tech', 'Technical Support Engineer'],
        averageSalary: 58000,
        growthRate: 8
    },

    // ========== BATCH 7: Additional Jobs ==========

    // Technology - Batch 7
    {
        id: 'mobile-app-developer',
        title: 'Mobile App Developer',
        slug: 'mobile-app-developer',
        category: 'technology',
        aliases: ['Mobile Developer', 'App Developer'],
        averageSalary: 115000,
        growthRate: 22
    },
    {
        id: 'ios-developer',
        title: 'iOS Developer',
        slug: 'ios-developer',
        category: 'technology',
        aliases: ['iPhone Developer', 'Swift Developer'],
        averageSalary: 125000,
        growthRate: 22
    },
    {
        id: 'android-developer',
        title: 'Android Developer',
        slug: 'android-developer',
        category: 'technology',
        aliases: ['Android Engineer', 'Kotlin Developer'],
        averageSalary: 120000,
        growthRate: 20
    },
    {
        id: 'react-native-developer',
        title: 'React Native Developer',
        slug: 'react-native-developer',
        category: 'technology',
        aliases: ['React Native Engineer', 'Cross-Platform Mobile Developer'],
        averageSalary: 120000,
        growthRate: 22
    },
    {
        id: 'flutter-developer',
        title: 'Flutter Developer',
        slug: 'flutter-developer',
        category: 'technology',
        aliases: ['Flutter Engineer', 'Dart Developer'],
        averageSalary: 115000,
        growthRate: 24
    },

    // Marketing - Batch 7
    {
        id: 'content-marketing-manager',
        title: 'Content Marketing Manager',
        slug: 'content-marketing-manager',
        category: 'marketing',
        aliases: ['Content Marketing', 'Content Strategy Manager'],
        averageSalary: 85000,
        growthRate: 16
    },
    {
        id: 'brand-ambassador-2',
        title: 'Brand Ambassador',
        slug: 'brand-ambassador-2',
        category: 'marketing',
        aliases: ['Brand Representative', 'Brand Advocate'],
        averageSalary: 45000,
        growthRate: 12
    },
    {
        id: 'trade-show-manager',
        title: 'Trade Show Manager',
        slug: 'trade-show-manager',
        category: 'marketing',
        aliases: ['Event Manager', 'Exhibition Manager'],
        averageSalary: 65000,
        growthRate: 10
    },
    {
        id: 'copy-editor',
        title: 'Copy Editor',
        slug: 'copy-editor',
        category: 'marketing',
        aliases: ['Editor', 'Proofreader'],
        averageSalary: 55000,
        growthRate: 8
    },
    {
        id: 'social-media-manager',
        title: 'Social Media Manager',
        slug: 'social-media-manager',
        category: 'marketing',
        aliases: ['SMM', 'Social Media Marketing Manager'],
        averageSalary: 65000,
        growthRate: 14
    },

    // Sales - Batch 7
    {
        id: 'account-manager-2',
        title: 'Account Manager',
        slug: 'account-manager-2',
        category: 'sales',
        aliases: ['Client Account Manager', 'Customer Account Manager'],
        averageSalary: 70000,
        growthRate: 12
    },
    {
        id: 'regional-sales-manager',
        title: 'Regional Sales Manager',
        slug: 'regional-sales-manager',
        category: 'sales',
        aliases: ['Area Sales Manager', 'Regional Manager'],
        averageSalary: 105000,
        growthRate: 12
    },
    {
        id: 'national-account-manager',
        title: 'National Account Manager',
        slug: 'national-account-manager',
        category: 'sales',
        aliases: ['National Accounts', 'Key Account Manager National'],
        averageSalary: 110000,
        growthRate: 12
    },
    {
        id: 'inside-sales-representative',
        title: 'Inside Sales Representative',
        slug: 'inside-sales-representative',
        category: 'sales',
        aliases: ['Inside Sales Rep', 'Remote Sales Representative'],
        averageSalary: 55000,
        growthRate: 12
    },
    {
        id: 'outside-sales-representative',
        title: 'Outside Sales Representative',
        slug: 'outside-sales-representative',
        category: 'sales',
        aliases: ['Field Sales Representative', 'Outside Sales Rep'],
        averageSalary: 65000,
        growthRate: 10
    },

    // Healthcare - Batch 7
    {
        id: 'medical-assistant-2',
        title: 'Certified Medical Assistant',
        slug: 'certified-medical-assistant',
        category: 'healthcare',
        aliases: ['CMA', 'Certified MA'],
        averageSalary: 42000,
        growthRate: 16
    },
    {
        id: 'patient-care-technician',
        title: 'Patient Care Technician',
        slug: 'patient-care-technician',
        category: 'healthcare',
        aliases: ['PCT', 'Patient Care Associate'],
        averageSalary: 35000,
        growthRate: 14
    },
    {
        id: 'medical-records-clerk',
        title: 'Medical Records Clerk',
        slug: 'medical-records-clerk',
        category: 'healthcare',
        aliases: ['Health Information Clerk', 'Medical Records Specialist'],
        averageSalary: 38000,
        growthRate: 10
    },
    {
        id: 'sterile-processing-tech',
        title: 'Sterile Processing Technician',
        slug: 'sterile-processing-technician',
        category: 'healthcare',
        aliases: ['SPD Technician', 'Central Service Technician'],
        averageSalary: 42000,
        growthRate: 12
    },
    {
        id: 'dietary-aide',
        title: 'Dietary Aide',
        slug: 'dietary-aide',
        category: 'healthcare',
        aliases: ['Nutrition Assistant', 'Dietary Assistant'],
        averageSalary: 30000,
        growthRate: 8
    },

    // Finance - Batch 7
    {
        id: 'payroll-specialist',
        title: 'Payroll Specialist',
        slug: 'payroll-specialist',
        category: 'finance',
        aliases: ['Payroll Clerk', 'Payroll Coordinator'],
        averageSalary: 52000,
        growthRate: 8
    },
    {
        id: 'collection-specialist',
        title: 'Collection Specialist',
        slug: 'collection-specialist',
        category: 'finance',
        aliases: ['Collections Representative', 'Debt Collector'],
        averageSalary: 40000,
        growthRate: 6
    },
    {
        id: 'financial-analyst-2',
        title: 'Financial Analyst',
        slug: 'financial-analyst-2',
        category: 'finance',
        aliases: ['Junior Financial Analyst', 'Finance Analyst'],
        averageSalary: 75000,
        growthRate: 12
    },
    {
        id: 'budget-analyst',
        title: 'Budget Analyst',
        slug: 'budget-analyst',
        category: 'finance',
        aliases: ['Budget Coordinator', 'Budget Manager'],
        averageSalary: 72000,
        growthRate: 10
    },
    {
        id: 'pricing-analyst',
        title: 'Pricing Analyst',
        slug: 'pricing-analyst',
        category: 'finance',
        aliases: ['Pricing Specialist', 'Revenue Analyst'],
        averageSalary: 78000,
        growthRate: 14
    },

    // Legal - Batch 7
    {
        id: 'paralegal-2',
        title: 'Paralegal',
        slug: 'paralegal',
        category: 'legal',
        aliases: ['Legal Assistant', 'Paralegal Specialist'],
        averageSalary: 58000,
        growthRate: 12
    },
    {
        id: 'legal-assistant',
        title: 'Legal Assistant',
        slug: 'legal-assistant',
        category: 'legal',
        aliases: ['Legal Secretary', 'Legal Admin'],
        averageSalary: 50000,
        growthRate: 10
    },
    {
        id: 'legal-secretary',
        title: 'Legal Secretary',
        slug: 'legal-secretary',
        category: 'legal',
        aliases: ['Legal Administrative Assistant', 'Law Firm Secretary'],
        averageSalary: 52000,
        growthRate: 8
    },
    {
        id: 'compliance-officer',
        title: 'Compliance Officer',
        slug: 'compliance-officer',
        category: 'legal',
        aliases: ['Compliance Manager', 'Compliance Specialist'],
        averageSalary: 80000,
        growthRate: 14
    },
    {
        id: 'contract-administrator-legal',
        title: 'Contract Administrator',
        slug: 'contract-administrator-legal',
        category: 'legal',
        aliases: ['Contracts Administrator', 'Contract Specialist'],
        averageSalary: 72000,
        growthRate: 12
    },

    // Education - Batch 7
    {
        id: 'substitute-teacher-2',
        title: 'Substitute Teacher',
        slug: 'substitute-teacher-2',
        category: 'education',
        aliases: ['Sub Teacher', 'Supply Teacher'],
        averageSalary: 38000,
        growthRate: 6
    },
    {
        id: 'teaching-assistant-2',
        title: 'Teaching Assistant',
        slug: 'teaching-assistant-2',
        category: 'education',
        aliases: ['Teacher Aide', 'Classroom Assistant'],
        averageSalary: 32000,
        growthRate: 8
    },
    {
        id: 'education-assistant',
        title: 'Education Assistant',
        slug: 'education-assistant',
        category: 'education',
        aliases: ['Educational Assistant', 'Learning Support Assistant'],
        averageSalary: 35000,
        growthRate: 10
    },
    {
        id: 'library-assistant',
        title: 'Library Assistant',
        slug: 'library-assistant',
        category: 'education',
        aliases: ['Library Clerk', 'Library Technical Assistant'],
        averageSalary: 32000,
        growthRate: 6
    },
    {
        id: 'admissions-counselor',
        title: 'Admissions Counselor',
        slug: 'admissions-counselor',
        category: 'education',
        aliases: ['Admissions Officer', 'Enrollment Counselor'],
        averageSalary: 48000,
        growthRate: 12
    },

    // Real Estate - Batch 7
    {
        id: 'real-estate-assistant-2',
        title: 'Real Estate Assistant',
        slug: 'real-estate-assistant-2',
        category: 'real-estate',
        aliases: ['Real Estate Administrative Assistant', 'RE Assistant'],
        averageSalary: 45000,
        growthRate: 10
    },
    {
        id: 'leasing-agent',
        title: 'Leasing Agent',
        slug: 'leasing-agent',
        category: 'real-estate',
        aliases: ['Leasing Consultant', 'Apartment Leasing Agent'],
        averageSalary: 40000,
        growthRate: 10
    },
    {
        id: 'property-management-assistant',
        title: 'Property Management Assistant',
        slug: 'property-management-assistant',
        category: 'real-estate',
        aliases: ['Property Manager Assistant', 'PM Assistant'],
        averageSalary: 42000,
        growthRate: 10
    },
    {
        id: 'real-estate-showing-assistant',
        title: 'Real Estate Showing Assistant',
        slug: 'real-estate-showing-assistant',
        category: 'real-estate',
        aliases: ['Showing Assistant', 'Open House Assistant'],
        averageSalary: 38000,
        growthRate: 10
    },
    {
        id: 'hoa-manager',
        title: 'HOA Manager',
        slug: 'hoa-manager',
        category: 'real-estate',
        aliases: ['Homeowners Association Manager', 'Community Association Manager'],
        averageSalary: 55000,
        growthRate: 10
    },

    // Skilled Trades - Batch 7
    {
        id: 'maintenance-technician',
        title: 'Maintenance Technician',
        slug: 'maintenance-technician',
        category: 'skilled-trades',
        aliases: ['Facility Maintenance Technician', 'Maintenance Tech'],
        averageSalary: 48000,
        growthRate: 10
    },
    {
        id: 'facilities-technician',
        title: 'Facilities Technician',
        slug: 'facilities-technician',
        category: 'skilled-trades',
        aliases: ['Building Technician', 'Facilities Maintenance'],
        averageSalary: 50000,
        growthRate: 10
    },
    {
        id: 'painter',
        title: 'Painter',
        slug: 'painter',
        category: 'skilled-trades',
        aliases: ['Commercial Painter', 'Residential Painter'],
        averageSalary: 42000,
        growthRate: 8
    },
    {
        id: 'flooring-installer',
        title: 'Flooring Installer',
        slug: 'flooring-installer',
        category: 'skilled-trades',
        aliases: ['Floor Layer', 'Flooring Contractor'],
        averageSalary: 45000,
        growthRate: 10
    },
    {
        id: 'landscaper',
        title: 'Landscaper',
        slug: 'landscaper',
        category: 'skilled-trades',
        aliases: ['Landscape Worker', 'Groundskeeper'],
        averageSalary: 35000,
        growthRate: 10
    },

    // ========== BATCH 8: Additional Jobs ==========

    // Technology - Batch 8
    {
        id: 'software-architect-2',
        title: 'Software Architect',
        slug: 'software-architect',
        category: 'technology',
        aliases: ['Solutions Architect', 'Application Architect'],
        averageSalary: 155000,
        growthRate: 18
    },
    {
        id: 'solution-architect-2',
        title: 'Solutions Architect',
        slug: 'solutions-architect-2',
        category: 'technology',
        aliases: ['Solution Architect', 'Enterprise Architect'],
        averageSalary: 160000,
        growthRate: 20
    },
    {
        id: 'data-architect-2',
        title: 'Data Architect',
        slug: 'data-architect-2',
        category: 'technology',
        aliases: ['Data Architecture Lead', 'Enterprise Data Architect'],
        averageSalary: 150000,
        growthRate: 22
    },
    {
        id: 'cloud-engineer-2',
        title: 'Cloud Engineer',
        slug: 'cloud-engineer-2',
        category: 'technology',
        aliases: ['Cloud Infrastructure Engineer', 'AWS Engineer'],
        averageSalary: 135000,
        growthRate: 24
    },
    {
        id: 'devops-engineer-2',
        title: 'DevOps Engineer',
        slug: 'devops-engineer-2',
        category: 'technology',
        aliases: ['DevOps Engineer II', 'Senior DevOps'],
        averageSalary: 130000,
        growthRate: 22
    },

    // Marketing - Batch 8
    {
        id: 'digital-marketing-coordinator',
        title: 'Digital Marketing Coordinator',
        slug: 'digital-marketing-coordinator',
        category: 'marketing',
        aliases: ['Digital Coordinator', 'Online Marketing Coordinator'],
        averageSalary: 52000,
        growthRate: 14
    },
    {
        id: 'marketing-communications-manager',
        title: 'Marketing Communications Manager',
        slug: 'marketing-communications-manager',
        category: 'marketing',
        aliases: ['MarCom Manager', 'Marketing Communications'],
        averageSalary: 90000,
        growthRate: 14
    },
    {
        id: 'public-relations-coordinator',
        title: 'Public Relations Coordinator',
        slug: 'public-relations-coordinator',
        category: 'marketing',
        aliases: ['PR Coordinator', 'Public Relations Assistant'],
        averageSalary: 52000,
        growthRate: 12
    },
    {
        id: 'media-planner',
        title: 'Media Planner',
        slug: 'media-planner',
        category: 'marketing',
        aliases: ['Media Planning Specialist', 'Media Buyer'],
        averageSalary: 60000,
        growthRate: 12
    },
    {
        id: 'marketing-research-analyst',
        title: 'Marketing Research Analyst',
        slug: 'marketing-research-analyst',
        category: 'marketing',
        aliases: ['Market Research Analyst', 'Consumer Insights Analyst'],
        averageSalary: 62000,
        growthRate: 14
    },

    // Sales - Batch 8
    {
        id: 'sales-support-administrator',
        title: 'Sales Support Administrator',
        slug: 'sales-support-administrator',
        category: 'sales',
        aliases: ['Sales Support Specialist', 'Sales Admin'],
        averageSalary: 48000,
        growthRate: 10
    },
    {
        id: 'sales-analyst-2',
        title: 'Sales Analyst',
        slug: 'sales-analyst-2',
        category: 'sales',
        aliases: ['Sales Data Analyst', 'Sales Reporting Analyst'],
        averageSalary: 70000,
        growthRate: 14
    },
    {
        id: 'bid-manager',
        title: 'Bid Manager',
        slug: 'bid-manager',
        category: 'sales',
        aliases: ['Proposal Bid Manager', 'Tender Manager'],
        averageSalary: 85000,
        growthRate: 12
    },
    {
        id: 'sales-vice-president',
        title: 'Vice President of Sales',
        slug: 'vice-president-sales',
        category: 'sales',
        aliases: ['VP Sales', 'Sales VP'],
        averageSalary: 180000,
        growthRate: 16
    },
    {
        id: 'commercial-director',
        title: 'Commercial Director',
        slug: 'commercial-director',
        category: 'sales',
        aliases: ['Commercial Manager', 'Head of Commercial'],
        averageSalary: 150000,
        growthRate: 14
    },

    // Healthcare - Batch 8
    {
        id: 'health-unit-coordinator',
        title: 'Health Unit Coordinator',
        slug: 'health-unit-coordinator',
        category: 'healthcare',
        aliases: ['Unit Clerk', 'Ward Clerk'],
        averageSalary: 36000,
        growthRate: 10
    },
    {
        id: 'medical-transporter',
        title: 'Medical Transporter',
        slug: 'medical-transporter',
        category: 'healthcare',
        aliases: ['Patient Transporter', 'Transport Aide'],
        averageSalary: 32000,
        growthRate: 10
    },
    {
        id: 'patient-access-representative',
        title: 'Patient Access Representative',
        slug: 'patient-access-representative',
        category: 'healthcare',
        aliases: ['Patient Access Rep', 'Registration Clerk'],
        averageSalary: 38000,
        growthRate: 12
    },
    {
        id: 'medical-receptionist',
        title: 'Medical Receptionist',
        slug: 'medical-receptionist',
        category: 'healthcare',
        aliases: ['Medical Front Desk', 'Clinic Receptionist'],
        averageSalary: 34000,
        growthRate: 10
    },
    {
        id: 'health-unit-clerk',
        title: 'Health Unit Clerk',
        slug: 'health-unit-clerk',
        category: 'healthcare',
        aliases: ['Nurse Unit Clerk', 'Floor Clerk'],
        averageSalary: 35000,
        growthRate: 10
    },

    // Finance - Batch 8
    {
        id: 'finance-director',
        title: 'Finance Director',
        slug: 'finance-director',
        category: 'finance',
        aliases: ['Director of Finance', 'Financial Director'],
        averageSalary: 145000,
        growthRate: 14
    },
    {
        id: 'controller',
        title: 'Controller',
        slug: 'controller',
        category: 'finance',
        aliases: ['Corporate Controller', 'Financial Controller'],
        averageSalary: 135000,
        growthRate: 12
    },
    {
        id: 'assistant-controller-2',
        title: 'Assistant Controller',
        slug: 'assistant-controller-2',
        category: 'finance',
        aliases: ['Assistant Financial Controller', 'Deputy Controller'],
        averageSalary: 95000,
        growthRate: 12
    },
    {
        id: 'senior-accountant',
        title: 'Senior Accountant',
        slug: 'senior-accountant',
        category: 'finance',
        aliases: ['Accountant II', 'Senior Accounting'],
        averageSalary: 75000,
        growthRate: 10
    },
    {
        id: 'general-accountant',
        title: 'General Accountant',
        slug: 'general-accountant',
        category: 'finance',
        aliases: ['Staff Accountant II', 'Accounting Specialist'],
        averageSalary: 65000,
        growthRate: 10
    },

    // Legal - Batch 8
    {
        id: 'legal-intern',
        title: 'Legal Intern',
        slug: 'legal-intern',
        category: 'legal',
        aliases: ['Law Intern', 'Legal Extern'],
        averageSalary: 35000,
        growthRate: 8
    },
    {
        id: 'law-clerk',
        title: 'Law Clerk',
        slug: 'law-clerk',
        category: 'legal',
        aliases: ['Judicial Clerk', 'Legal Research Clerk'],
        averageSalary: 45000,
        growthRate: 10
    },
    {
        id: 'contracts-manager',
        title: 'Contracts Manager',
        slug: 'contracts-manager',
        category: 'legal',
        aliases: ['Contract Management', 'Commercial Contracts Manager'],
        averageSalary: 95000,
        growthRate: 14
    },
    {
        id: 'regulatory-affairs-specialist',
        title: 'Regulatory Affairs Specialist',
        slug: 'regulatory-affairs-specialist',
        category: 'legal',
        aliases: ['Regulatory Specialist', 'Compliance Specialist'],
        averageSalary: 80000,
        growthRate: 14
    },
    {
        id: 'legal-operations-manager',
        title: 'Legal Operations Manager',
        slug: 'legal-operations-manager',
        category: 'legal',
        aliases: ['Legal Ops Manager', 'Legal Administration Manager'],
        averageSalary: 105000,
        growthRate: 16
    },

    // Education - Batch 8
    {
        id: 'education-consultant',
        title: 'Education Consultant',
        slug: 'education-consultant',
        category: 'education',
        aliases: ['Educational Consultant', 'Academic Consultant'],
        averageSalary: 72000,
        growthRate: 14
    },
    {
        id: 'curriculum-specialist',
        title: 'Curriculum Specialist',
        slug: 'curriculum-specialist',
        category: 'education',
        aliases: ['Curriculum Coordinator', 'Instructional Specialist'],
        averageSalary: 65000,
        growthRate: 12
    },
    {
        id: 'education-technologist',
        title: 'Education Technologist',
        slug: 'education-technologist',
        category: 'education',
        aliases: ['EdTech Specialist', 'Instructional Technologist'],
        averageSalary: 62000,
        growthRate: 16
    },
    {
        id: 'student-services-coordinator',
        title: 'Student Services Coordinator',
        slug: 'student-services-coordinator',
        category: 'education',
        aliases: ['Student Services Specialist', 'Student Support Coordinator'],
        averageSalary: 48000,
        growthRate: 12
    },
    {
        id: 'academic-advisor-2',
        title: 'Academic Advisor',
        slug: 'academic-advisor-2',
        category: 'education',
        aliases: ['Academic Counselor', 'Student Advisor'],
        averageSalary: 52000,
        growthRate: 12
    },

    // Real Estate - Batch 8
    {
        id: 'real-estate-analyst-2',
        title: 'Real Estate Analyst',
        slug: 'real-estate-analyst-2',
        category: 'real-estate',
        aliases: ['Property Analyst', 'Real Estate Investment Analyst'],
        averageSalary: 75000,
        growthRate: 14
    },
    {
        id: 'title-company-representative',
        title: 'Title Company Representative',
        slug: 'title-company-representative',
        category: 'real-estate',
        aliases: ['Title Representative', 'Title Sales Representative'],
        averageSalary: 55000,
        growthRate: 10
    },
    {
        id: 'appraisal-assistant',
        title: 'Appraisal Assistant',
        slug: 'appraisal-assistant',
        category: 'real-estate',
        aliases: ['Real Estate Appraiser Assistant', 'Appraisal Trainee'],
        averageSalary: 45000,
        growthRate: 10
    },
    {
        id: 'property-inspector',
        title: 'Property Inspector',
        slug: 'property-inspector',
        category: 'real-estate',
        aliases: ['Home Inspector', 'Real Estate Inspector'],
        averageSalary: 58000,
        growthRate: 12
    },
    {
        id: 'real-estate-marketer',
        title: 'Real Estate Marketer',
        slug: 'real-estate-marketer',
        category: 'real-estate',
        aliases: ['Real Estate Marketing Specialist', 'Property Marketing Manager'],
        averageSalary: 65000,
        growthRate: 14
    },

    // Hospitality - Batch 8
    {
        id: 'event-coordinator-hospitality',
        title: 'Event Coordinator',
        slug: 'event-coordinator',
        category: 'hospitality',
        aliases: ['Events Coordinator', 'Event Planning Coordinator'],
        averageSalary: 48000,
        growthRate: 16
    },
    {
        id: 'banquet-manager',
        title: 'Banquet Manager',
        slug: 'banquet-manager',
        category: 'hospitality',
        aliases: ['Catering Manager', 'Events Manager'],
        averageSalary: 58000,
        growthRate: 14
    },
    {
        id: 'food-beverage-manager',
        title: 'Food and Beverage Manager',
        slug: 'food-beverage-manager',
        category: 'hospitality',
        aliases: ['F&B Manager', 'Restaurant Manager'],
        averageSalary: 65000,
        growthRate: 14
    },
    {
        id: 'housekeeping-manager',
        title: 'Housekeeping Manager',
        slug: 'housekeeping-manager',
        category: 'hospitality',
        aliases: ['Housekeeping Supervisor', 'Head Housekeeper'],
        averageSalary: 50000,
        growthRate: 10
    },
    {
        id: 'front-office-manager',
        title: 'Front Office Manager',
        slug: 'front-office-manager',
        category: 'hospitality',
        aliases: ['Front Desk Manager', 'Reception Manager'],
        averageSalary: 55000,
        growthRate: 12
    },

    // Transportation - Batch 8
    {
        id: 'delivery-driver-2',
        title: 'Delivery Driver',
        slug: 'delivery-driver-2',
        category: 'transportation',
        aliases: ['Package Delivery Driver', 'Courier Driver'],
        averageSalary: 40000,
        growthRate: 10
    },
    {
        id: 'shuttle-driver',
        title: 'Shuttle Driver',
        slug: 'shuttle-driver',
        category: 'transportation',
        aliases: ['Airport Shuttle Driver', 'Hotel Shuttle'],
        averageSalary: 38000,
        growthRate: 10
    },
    {
        id: 'school-bus-driver',
        title: 'School Bus Driver',
        slug: 'school-bus-driver',
        category: 'transportation',
        aliases: ['Bus Driver', 'School Bus Operator'],
        averageSalary: 42000,
        growthRate: 8
    },
    {
        id: 'tractor-trailer-driver',
        title: 'Tractor Trailer Driver',
        slug: 'tractor-trailer-driver',
        category: 'transportation',
        aliases: ['Class A Driver', 'OTR Driver'],
        averageSalary: 65000,
        growthRate: 10
    },
    {
        id: 'local-driver',
        title: 'Local Delivery Driver',
        slug: 'local-delivery-driver',
        category: 'transportation',
        aliases: ['Local Driver', 'City Driver'],
        averageSalary: 48000,
        growthRate: 10
    },

    // ========== BATCH 9: Additional Jobs ==========

    // Technology - Batch 9
    {
        id: 'quality-assurance-engineer-2',
        title: 'Quality Assurance Engineer',
        slug: 'quality-assurance-engineer-2',
        category: 'technology',
        aliases: ['QA Engineer II', 'Senior QA Engineer'],
        averageSalary: 105000,
        growthRate: 18
    },
    {
        id: 'automation-engineer',
        title: 'Automation Engineer',
        slug: 'automation-engineer',
        category: 'technology',
        aliases: ['Test Automation Engineer', 'QA Automation Engineer'],
        averageSalary: 115000,
        growthRate: 22
    },
    {
        id: 'performance-engineer',
        title: 'Performance Engineer',
        slug: 'performance-engineer',
        category: 'technology',
        aliases: ['Performance Testing Engineer', 'Load Testing Engineer'],
        averageSalary: 120000,
        growthRate: 20
    },
    {
        id: 'security-consultant',
        title: 'Security Consultant',
        slug: 'security-consultant',
        category: 'technology',
        aliases: ['Cybersecurity Consultant', 'InfoSec Consultant'],
        averageSalary: 140000,
        growthRate: 24
    },
    {
        id: 'cybersecurity-analyst-2',
        title: 'Cybersecurity Analyst',
        slug: 'cybersecurity-analyst-2',
        category: 'technology',
        aliases: ['Security Analyst', 'Information Security Analyst'],
        averageSalary: 110000,
        growthRate: 26
    },

    // Marketing - Batch 9
    {
        id: 'creative-director-2',
        title: 'Creative Director',
        slug: 'creative-director-2',
        category: 'marketing',
        aliases: ['Design Director', 'Creative Lead'],
        averageSalary: 140000,
        growthRate: 14
    },
    {
        id: 'art-director-2',
        title: 'Art Director',
        slug: 'art-director-2',
        category: 'marketing',
        aliases: ['Creative Art Director', 'Design Art Director'],
        averageSalary: 105000,
        growthRate: 12
    },
    {
        id: 'brand-consultant',
        title: 'Brand Consultant',
        slug: 'brand-consultant',
        category: 'marketing',
        aliases: ['Branding Consultant', 'Brand Strategy Consultant'],
        averageSalary: 95000,
        growthRate: 14
    },
    {
        id: 'marketing-vice-president',
        title: 'Vice President of Marketing',
        slug: 'vice-president-marketing',
        category: 'marketing',
        aliases: ['VP Marketing', 'Marketing VP'],
        averageSalary: 185000,
        growthRate: 16
    },
    {
        id: 'chief-marketing-officer-2',
        title: 'Chief Marketing Officer',
        slug: 'chief-marketing-officer-2',
        category: 'marketing',
        aliases: ['CMO', 'Head of Marketing'],
        averageSalary: 220000,
        growthRate: 18
    },

    // Sales - Batch 9
    {
        id: 'global-account-manager',
        title: 'Global Account Manager',
        slug: 'global-account-manager',
        category: 'sales',
        aliases: ['GAM', 'International Account Manager'],
        averageSalary: 140000,
        growthRate: 16
    },
    {
        id: 'strategic-account-manager-2',
        title: 'Strategic Account Manager',
        slug: 'strategic-account-manager-2',
        category: 'sales',
        aliases: ['SAM', 'Enterprise Strategic Account Manager'],
        averageSalary: 125000,
        growthRate: 16
    },
    {
        id: 'sales-director-2',
        title: 'Sales Director',
        slug: 'sales-director-2',
        category: 'sales',
        aliases: ['Director of Sales', 'Head of Sales'],
        averageSalary: 150000,
        growthRate: 14
    },
    {
        id: 'chief-revenue-officer-2',
        title: 'Chief Revenue Officer',
        slug: 'chief-revenue-officer-2',
        category: 'sales',
        aliases: ['CRO', 'Head of Revenue'],
        averageSalary: 225000,
        growthRate: 20
    },
    {
        id: 'client-partner-manager',
        title: 'Client Partner Manager',
        slug: 'client-partner-manager',
        category: 'sales',
        aliases: ['Strategic Client Partner', 'Client Partnership Manager'],
        averageSalary: 100000,
        growthRate: 14
    },

    // Healthcare - Batch 9
    {
        id: 'chief-medical-officer',
        title: 'Chief Medical Officer',
        slug: 'chief-medical-officer',
        category: 'healthcare',
        aliases: ['CMO', 'Medical Director'],
        averageSalary: 300000,
        growthRate: 18
    },
    {
        id: 'chief-nursing-officer',
        title: 'Chief Nursing Officer',
        slug: 'chief-nursing-officer',
        category: 'healthcare',
        aliases: ['CNO', 'Director of Nursing'],
        averageSalary: 180000,
        growthRate: 16
    },
    {
        id: 'nurse-manager-2',
        title: 'Nurse Manager',
        slug: 'nurse-manager-2',
        category: 'healthcare',
        aliases: ['RN Manager', 'Nursing Unit Manager'],
        averageSalary: 95000,
        growthRate: 14
    },
    {
        id: 'charge-nurse-2',
        title: 'Charge Nurse',
        slug: 'charge-nurse-2',
        category: 'healthcare',
        aliases: ['Team Leader Nurse', 'Shift Charge Nurse'],
        averageSalary: 80000,
        growthRate: 12
    },
    {
        id: 'triage-nurse',
        title: 'Triage Nurse',
        slug: 'triage-nurse',
        category: 'healthcare',
        aliases: ['Triage RN', 'Emergency Triage Nurse'],
        averageSalary: 78000,
        growthRate: 14
    },

    // Finance - Batch 9
    {
        id: 'chief-financial-officer-2',
        title: 'Chief Financial Officer',
        slug: 'chief-financial-officer-2',
        category: 'finance',
        aliases: ['CFO', 'Finance Chief Executive'],
        averageSalary: 250000,
        growthRate: 16
    },
    {
        id: 'treasurer',
        title: 'Treasurer',
        slug: 'treasurer',
        category: 'finance',
        aliases: ['Corporate Treasurer', 'Head Treasurer'],
        averageSalary: 160000,
        growthRate: 14
    },
    {
        id: 'vice-president-finance',
        title: 'Vice President of Finance',
        slug: 'vice-president-finance',
        category: 'finance',
        aliases: ['VP Finance', 'Finance VP'],
        averageSalary: 175000,
        growthRate: 14
    },
    {
        id: 'investment-manager-2',
        title: 'Investment Manager',
        slug: 'investment-manager-2',
        category: 'finance',
        aliases: ['Investment Fund Manager', 'Portfolio Manager'],
        averageSalary: 135000,
        growthRate: 18
    },
    {
        id: 'portfolio-manager-2',
        title: 'Portfolio Manager',
        slug: 'portfolio-manager-2',
        category: 'finance',
        aliases: ['Investment Portfolio Manager', 'Fund Manager'],
        averageSalary: 145000,
        growthRate: 16
    },

    // HR - Batch 9
    {
        id: 'chief-human-resources-officer',
        title: 'Chief Human Resources Officer',
        slug: 'chief-human-resources-officer',
        category: 'hr',
        aliases: ['CHRO', 'HR Chief Executive'],
        averageSalary: 210000,
        growthRate: 16
    },
    {
        id: 'vice-president-hr',
        title: 'Vice President of Human Resources',
        slug: 'vice-president-human-resources',
        category: 'hr',
        aliases: ['VP HR', 'HR Vice President'],
        averageSalary: 165000,
        growthRate: 14
    },
    {
        id: 'hr-director-2',
        title: 'HR Director',
        slug: 'hr-director-2',
        category: 'hr',
        aliases: ['Director of HR', 'Human Resources Director'],
        averageSalary: 125000,
        growthRate: 14
    },
    {
        id: 'talent-acquisition-manager-2',
        title: 'Talent Acquisition Manager',
        slug: 'talent-acquisition-manager-2',
        category: 'hr',
        aliases: ['Recruitment Manager', 'Head of Talent Acquisition'],
        averageSalary: 95000,
        growthRate: 16
    },
    {
        id: 'diversity-inclusion-manager',
        title: 'Diversity and Inclusion Manager',
        slug: 'diversity-inclusion-manager',
        category: 'hr',
        aliases: ['D&I Manager', 'DEI Manager'],
        averageSalary: 105000,
        growthRate: 18
    },

    // Admin - Batch 9
    {
        id: 'office-manager-2',
        title: 'Office Manager',
        slug: 'office-manager-2',
        category: 'admin',
        aliases: ['Office Manager Senior', 'Office Supervisor'],
        averageSalary: 60000,
        growthRate: 10
    },
    {
        id: 'administrative-manager',
        title: 'Administrative Manager',
        slug: 'administrative-manager',
        category: 'admin',
        aliases: ['Admin Manager', 'Office Admin Manager'],
        averageSalary: 65000,
        growthRate: 10
    },
    {
        id: 'project-coordinator',
        title: 'Project Coordinator',
        slug: 'project-coordinator',
        category: 'admin',
        aliases: ['Project Admin', 'Project Support Coordinator'],
        averageSalary: 58000,
        growthRate: 14
    },
    {
        id: 'team-assistant',
        title: 'Team Assistant',
        slug: 'team-assistant',
        category: 'admin',
        aliases: ['Team Administrative Assistant', 'Department Assistant'],
        averageSalary: 50000,
        growthRate: 10
    },
    {
        id: 'virtual-assistant',
        title: 'Virtual Assistant',
        slug: 'virtual-assistant',
        category: 'admin',
        aliases: ['VA', 'Remote Assistant'],
        averageSalary: 45000,
        growthRate: 18
    },

    // Customer Service - Batch 9
    {
        id: 'customer-service-director',
        title: 'Customer Service Director',
        slug: 'customer-service-director',
        category: 'customer-service',
        aliases: ['Director of Customer Service', 'CS Director'],
        averageSalary: 120000,
        growthRate: 14
    },
    {
        id: 'contact-center-manager',
        title: 'Contact Center Manager',
        slug: 'contact-center-manager',
        category: 'customer-service',
        aliases: ['Call Center Manager', 'Contact Center Director'],
        averageSalary: 85000,
        growthRate: 12
    },
    {
        id: 'customer-service-trainer',
        title: 'Customer Service Trainer',
        slug: 'customer-service-trainer',
        category: 'customer-service',
        aliases: ['CS Trainer', 'Service Training Manager'],
        averageSalary: 65000,
        growthRate: 14
    },
    {
        id: 'customer-advocate-lead',
        title: 'Customer Advocate Lead',
        slug: 'customer-advocate-lead',
        category: 'customer-service',
        aliases: ['Senior Customer Advocate', 'Customer Advocacy Lead'],
        averageSalary: 70000,
        growthRate: 16
    },
    {
        id: 'voice-operations-manager',
        title: 'Voice Operations Manager',
        slug: 'voice-operations-manager',
        category: 'customer-service',
        aliases: ['Voice Ops Manager', 'Call Center Operations Manager'],
        averageSalary: 90000,
        growthRate: 14
    },

    // Design - Batch 9
    {
        id: 'creative-director-design',
        title: 'Creative Director',
        slug: 'creative-director-design',
        category: 'design',
        aliases: ['Design Creative Director', 'Visual Creative Director'],
        averageSalary: 145000,
        growthRate: 16
    },
    {
        id: 'art-director-design',
        title: 'Art Director',
        slug: 'art-director-design',
        category: 'design',
        aliases: ['Design Art Director', 'Visual Art Director'],
        averageSalary: 110000,
        growthRate: 14
    },
    {
        id: 'design-manager-2',
        title: 'Design Manager',
        slug: 'design-manager-2',
        category: 'design',
        aliases: ['UX Design Manager', 'Design Team Manager'],
        averageSalary: 130000,
        growthRate: 18
    },
    {
        id: 'design-director-2',
        title: 'Design Director',
        slug: 'design-director-2',
        category: 'design',
        aliases: ['Director of Design', 'Head of Design'],
        averageSalary: 160000,
        growthRate: 18
    },
    {
        id: 'principal-designer',
        title: 'Principal Designer',
        slug: 'principal-designer',
        category: 'design',
        aliases: ['Lead Principal Designer', 'Staff Principal Designer'],
        averageSalary: 175000,
        growthRate: 20
    },

    // Engineering - Batch 9
    {
        id: 'engineering-manager-2',
        title: 'Engineering Manager',
        slug: 'engineering-manager-2',
        category: 'engineering',
        aliases: ['Manager of Engineering', 'Engineering Team Manager'],
        averageSalary: 145000,
        growthRate: 16
    },
    {
        id: 'director-of-engineering',
        title: 'Director of Engineering',
        slug: 'director-of-engineering',
        category: 'engineering',
        aliases: ['Engineering Director', 'Director Engineering'],
        averageSalary: 175000,
        growthRate: 18
    },
    {
        id: 'chief-engineering-officer',
        title: 'Chief Engineering Officer',
        slug: 'chief-engineering-officer',
        category: 'engineering',
        aliases: ['Chief Engineer Executive', 'VP Engineering'],
        averageSalary: 200000,
        growthRate: 18
    },
    {
        id: 'principal-engineer',
        title: 'Principal Engineer',
        slug: 'principal-engineer',
        category: 'engineering',
        aliases: ['Staff Principal Engineer', 'Lead Principal Engineer'],
        averageSalary: 180000,
        growthRate: 18
    },
    {
        id: 'validation-manager',
        title: 'Validation Manager',
        slug: 'validation-manager',
        category: 'engineering',
        aliases: ['Quality Validation Manager', 'Validation Lead'],
        averageSalary: 120000,
        growthRate: 14
    },

    // ========== BATCH 10: Additional Jobs ==========

    // Technology - Batch 10
    {
        id: 'game-developer',
        title: 'Game Developer',
        slug: 'game-developer',
        category: 'technology',
        aliases: ['Game Programmer', 'Game Dev'],
        averageSalary: 105000,
        growthRate: 16
    },
    {
        id: 'unity-developer',
        title: 'Unity Developer',
        slug: 'unity-developer',
        category: 'technology',
        aliases: ['Unity Engine Developer', 'Unity 3D Developer'],
        averageSalary: 110000,
        growthRate: 18
    },
    {
        id: 'unreal-developer',
        title: 'Unreal Engine Developer',
        slug: 'unreal-developer',
        category: 'technology',
        aliases: ['Unreal Developer', 'UE4/UE5 Developer'],
        averageSalary: 115000,
        growthRate: 18
    },
    {
        id: 'blockchain-developer',
        title: 'Blockchain Developer',
        slug: 'blockchain-developer',
        category: 'technology',
        aliases: ['Web3 Developer', 'Smart Contract Developer'],
        averageSalary: 145000,
        growthRate: 26
    },
    {
        id: 'vr-developer',
        title: 'VR Developer',
        slug: 'vr-developer',
        category: 'technology',
        aliases: ['Virtual Reality Developer', 'VR Engineer'],
        averageSalary: 125000,
        growthRate: 22
    },

    // Marketing - Batch 10
    {
        id: 'influencer-coordinator',
        title: 'Influencer Coordinator',
        slug: 'influencer-coordinator',
        category: 'marketing',
        aliases: ['Influencer Marketing Coordinator', 'Influencer Relations'],
        averageSalary: 55000,
        growthRate: 16
    },
    {
        id: 'community-manager-2',
        title: 'Community Manager',
        slug: 'community-manager-2',
        category: 'marketing',
        aliases: ['Online Community Manager', 'Discord Manager'],
        averageSalary: 70000,
        growthRate: 18
    },
    {
        id: 'customer-insights-manager',
        title: 'Customer Insights Manager',
        slug: 'customer-insights-manager',
        category: 'marketing',
        aliases: ['Consumer Insights Manager', 'Customer Analytics Manager'],
        averageSalary: 90000,
        growthRate: 16
    },
    {
        id: 'experiential-marketer',
        title: 'Experiential Marketer',
        slug: 'experiential-marketer',
        category: 'marketing',
        aliases: ['Experience Marketing', 'Event Marketing Specialist'],
        averageSalary: 70000,
        growthRate: 14
    },
    {
        id: 'cause-marketer',
        title: 'Cause Marketing Manager',
        slug: 'cause-marketing-manager',
        category: 'marketing',
        aliases: ['Social Impact Marketer', 'Non-Profit Marketing'],
        averageSalary: 75000,
        growthRate: 14
    },

    // Sales - Batch 10
    {
        id: 'strategic-alliances-manager',
        title: 'Strategic Alliances Manager',
        slug: 'strategic-alliances-manager',
        category: 'sales',
        aliases: ['Alliances Manager', 'Partnership Development Manager'],
        averageSalary: 100000,
        growthRate: 14
    },
    {
        id: 'channel-development-manager',
        title: 'Channel Development Manager',
        slug: 'channel-development-manager',
        category: 'sales',
        aliases: ['Channel Development', 'Partner Development Manager'],
        averageSalary: 95000,
        growthRate: 14
    },
    {
        id: 'e-commerce-manager',
        title: 'E-Commerce Manager',
        slug: 'e-commerce-manager',
        category: 'sales',
        aliases: ['Online Sales Manager', 'E-Commerce Director'],
        averageSalary: 90000,
        growthRate: 18
    },
    {
        id: 'digital-sales-manager',
        title: 'Digital Sales Manager',
        slug: 'digital-sales-manager',
        category: 'sales',
        aliases: ['Online Sales Manager', 'Digital Marketing Sales'],
        averageSalary: 95000,
        growthRate: 18
    },
    {
        id: 'customer-success-director',
        title: 'Customer Success Director',
        slug: 'customer-success-director',
        category: 'sales',
        aliases: ['Director of Customer Success', 'CS Director'],
        averageSalary: 130000,
        growthRate: 20
    },

    // Healthcare - Batch 10
    {
        id: 'occupational-therapist-2',
        title: 'Occupational Therapy Assistant',
        slug: 'occupational-therapy-assistant',
        category: 'healthcare',
        aliases: ['OTA Assistant', 'OT Assistant'],
        averageSalary: 65000,
        growthRate: 18
    },
    {
        id: 'physical-therapist-assistant',
        title: 'Physical Therapy Assistant',
        slug: 'physical-therapy-assistant',
        category: 'healthcare',
        aliases: ['PTA', 'Physical Therapy Aide'],
        averageSalary: 62000,
        growthRate: 18
    },
    {
        id: 'speech-pathology-assistant',
        title: 'Speech Language Pathology Assistant',
        slug: 'speech-pathology-assistant',
        category: 'healthcare',
        aliases: ['SLPA', 'Speech Therapy Assistant'],
        averageSalary: 60000,
        growthRate: 16
    },
    {
        id: 'respiratory-therapist-2',
        title: 'Respiratory Therapy Assistant',
        slug: 'respiratory-therapy-assistant',
        category: 'healthcare',
        aliases: ['RT Assistant', 'Respiratory Therapy Aide'],
        averageSalary: 55000,
        growthRate: 14
    },
    {
        id: 'pharmacy-technician-2',
        title: 'Pharmacy Technician Trainee',
        slug: 'pharmacy-technician-trainee',
        category: 'healthcare',
        aliases: ['Pharmacy Tech Trainee', 'Pharm Tech Apprentice'],
        averageSalary: 35000,
        growthRate: 10
    },

    // Finance - Batch 10
    {
        id: 'private-equity-analyst',
        title: 'Private Equity Analyst',
        slug: 'private-equity-analyst',
        category: 'finance',
        aliases: ['PE Analyst', 'Private Equity Associate'],
        averageSalary: 140000,
        growthRate: 18
    },
    {
        id: 'venture-capital-analyst',
        title: 'Venture Capital Analyst',
        slug: 'venture-capital-analyst',
        category: 'finance',
        aliases: ['VC Analyst', 'Venture Capital Associate'],
        averageSalary: 150000,
        growthRate: 20
    },
    {
        id: 'equity-research-analyst',
        title: 'Equity Research Analyst',
        slug: 'equity-research-analyst-2',
        category: 'finance',
        aliases: ['Equity Analyst', 'Securities Analyst'],
        averageSalary: 110000,
        growthRate: 14
    },
    {
        id: 'fixed-income-analyst-2',
        title: 'Fixed Income Analyst',
        slug: 'fixed-income-analyst-2',
        category: 'finance',
        aliases: ['Bond Analyst', 'Fixed Income Specialist'],
        averageSalary: 95000,
        growthRate: 12
    },
    {
        id: 'derivatives-analyst',
        title: 'Derivatives Analyst',
        slug: 'derivatives-analyst',
        category: 'finance',
        aliases: ['Derivatives Specialist', 'Options Analyst'],
        averageSalary: 115000,
        growthRate: 14
    },

    // Legal - Batch 10
    {
        id: 'corporate-counsel',
        title: 'Corporate Counsel',
        slug: 'corporate-counsel',
        category: 'legal',
        aliases: ['Corporate Lawyer', 'In-House Counsel'],
        averageSalary: 150000,
        growthRate: 14
    },
    {
        id: 'general-counsel',
        title: 'General Counsel',
        slug: 'general-counsel',
        category: 'legal',
        aliases: ['Chief Legal Officer', 'CLO'],
        averageSalary: 185000,
        growthRate: 16
    },
    {
        id: 'patent-attorney',
        title: 'Patent Attorney',
        slug: 'patent-attorney',
        category: 'legal',
        aliases: ['Patent Agent', 'IP Attorney'],
        averageSalary: 165000,
        growthRate: 12
    },
    {
        id: 'intellectual-property-paralegal',
        title: 'Intellectual Property Paralegal',
        slug: 'intellectual-property-paralegal',
        category: 'legal',
        aliases: ['IP Paralegal', 'Patent Paralegal'],
        averageSalary: 68000,
        growthRate: 12
    },
    {
        id: 'litigation-paralegal',
        title: 'Litigation Paralegal',
        slug: 'litigation-paralegal',
        category: 'legal',
        aliases: ['Litigation Legal Assistant', 'Trial Paralegal'],
        averageSalary: 65000,
        growthRate: 12
    },

    // Education - Batch 10
    {
        id: 'special-education-teacher-2',
        title: 'Special Education Teacher',
        slug: 'special-education-teacher-2',
        category: 'education',
        aliases: ['SPED Teacher', 'Special Ed Teacher'],
        averageSalary: 58000,
        growthRate: 12
    },
    {
        id: 'gifted-education-teacher',
        title: 'Gifted Education Teacher',
        slug: 'gifted-education-teacher',
        category: 'education',
        aliases: ['Gifted Teacher', 'Talented and Gifted Teacher'],
        averageSalary: 60000,
        growthRate: 10
    },
    {
        id: 'adult-education-teacher',
        title: 'Adult Education Teacher',
        slug: 'adult-education-teacher',
        category: 'education',
        aliases: ['Adult Ed Teacher', 'GED Teacher'],
        averageSalary: 52000,
        growthRate: 8
    },
    {
        id: 'online-educator',
        title: 'Online Educator',
        slug: 'online-educator',
        category: 'education',
        aliases: ['Online Teacher', 'Virtual Educator'],
        averageSalary: 55000,
        growthRate: 16
    },
    {
        id: 'education-program-coordinator',
        title: 'Education Program Coordinator',
        slug: 'education-program-coordinator',
        category: 'education',
        aliases: ['Program Coordinator', 'Education Program Manager'],
        averageSalary: 58000,
        growthRate: 12
    },

    // Real Estate - Batch 10
    {
        id: 'real-estate-broker-2',
        title: 'Real Estate Broker',
        slug: 'real-estate-broker-2',
        category: 'real-estate',
        aliases: ['Broker', 'Real Estate Brokerage Owner'],
        averageSalary: 75000,
        growthRate: 10
    },
    {
        id: 'sales-agent-real-estate',
        title: 'Real Estate Sales Agent',
        slug: 'real-estate-sales-agent',
        category: 'real-estate',
        aliases: ['Realtor', 'Real Estate Salesperson'],
        averageSalary: 50000,
        growthRate: 10
    },
    {
        id: 'commercial-real-estate-agent',
        title: 'Commercial Real Estate Agent',
        slug: 'commercial-real-estate-agent',
        category: 'real-estate',
        aliases: ['Commercial Realtor', 'Commercial Property Sales'],
        averageSalary: 85000,
        growthRate: 12
    },
    {
        id: 'mortgage-loan-officer',
        title: 'Mortgage Loan Officer',
        slug: 'mortgage-loan-officer',
        category: 'real-estate',
        aliases: ['MLO', 'Mortgage Originator'],
        averageSalary: 75000,
        growthRate: 14
    },
    {
        id: 'real-estate-appraiser-2',
        title: 'Real Estate Appraiser',
        slug: 'real-estate-appraiser-2',
        category: 'real-estate',
        aliases: ['Property Appraiser', 'Real Estate Valuer'],
        averageSalary: 62000,
        growthRate: 10
    },

    // Hospitality - Batch 10
    {
        id: 'general-manager-hotel',
        title: 'Hotel General Manager',
        slug: 'hotel-general-manager',
        category: 'hospitality',
        aliases: ['Hotel Manager', 'GM Hotel'],
        averageSalary: 85000,
        growthRate: 12
    },
    {
        id: 'resort-manager',
        title: 'Resort Manager',
        slug: 'resort-manager',
        category: 'hospitality',
        aliases: ['Resort General Manager', 'Hotel Resort Manager'],
        averageSalary: 80000,
        growthRate: 12
    },
    {
        id: 'spa-manager',
        title: 'Spa Manager',
        slug: 'spa-manager',
        category: 'hospitality',
        aliases: ['Spa Director', 'Wellness Center Manager'],
        averageSalary: 55000,
        growthRate: 14
    },
    {
        id: 'concierge-2',
        title: 'Concierge',
        slug: 'concierge-2',
        category: 'hospitality',
        aliases: ['Hotel Concierge', 'Guest Services Concierge'],
        averageSalary: 40000,
        growthRate: 12
    },
    {
        id: 'reservations-manager',
        title: 'Reservations Manager',
        slug: 'reservations-manager',
        category: 'hospitality',
        aliases: ['Reservation Manager', 'Booking Manager'],
        averageSalary: 52000,
        growthRate: 12
    },

    // Transportation - Batch 10
    {
        id: 'logistics-manager-2',
        title: 'Logistics Manager',
        slug: 'logistics-manager-2',
        category: 'transportation',
        aliases: ['Logistics Manager', 'Supply Chain Manager'],
        averageSalary: 85000,
        growthRate: 14
    },
    {
        id: 'warehouse-manager-2',
        title: 'Warehouse Manager',
        slug: 'warehouse-manager-2',
        category: 'transportation',
        aliases: ['Distribution Center Manager', 'Warehouse Operations Manager'],
        averageSalary: 70000,
        growthRate: 10
    },
    {
        id: 'supply-chain-manager-2',
        title: 'Supply Chain Manager',
        slug: 'supply-chain-manager-2',
        category: 'transportation',
        aliases: ['SCM', 'Supply Chain Director'],
        averageSalary: 95000,
        growthRate: 14
    },
    {
        id: 'fleet-manager-2',
        title: 'Fleet Manager',
        slug: 'fleet-manager-2',
        category: 'transportation',
        aliases: ['Vehicle Fleet Manager', 'Transportation Manager'],
        averageSalary: 75000,
        growthRate: 12
    },
    {
        id: 'route-manager',
        title: 'Route Manager',
        slug: 'route-manager',
        category: 'transportation',
        aliases: ['Delivery Route Manager', 'Transportation Route Manager'],
        averageSalary: 65000,
        growthRate: 12
    },

    // ========== BATCH 11: Additional Jobs ==========

    // Technology - Batch 11
    {
        id: 'ai-engineer-2',
        title: 'AI Engineer',
        slug: 'ai-engineer-2',
        category: 'technology',
        aliases: ['Artificial Intelligence Engineer', 'ML Engineer'],
        averageSalary: 155000,
        growthRate: 28
    },
    {
        id: 'nlp-engineer',
        title: 'NLP Engineer',
        slug: 'nlp-engineer',
        category: 'technology',
        aliases: ['Natural Language Processing Engineer', 'Computational Linguist'],
        averageSalary: 150000,
        growthRate: 24
    },
    {
        id: 'computer-vision-engineer',
        title: 'Computer Vision Engineer',
        slug: 'computer-vision-engineer',
        category: 'technology',
        aliases: ['CV Engineer', 'Visual Recognition Engineer'],
        averageSalary: 145000,
        growthRate: 22
    },
    {
        id: 'deep-learning-engineer',
        title: 'Deep Learning Engineer',
        slug: 'deep-learning-engineer',
        category: 'technology',
        aliases: ['Neural Network Engineer', 'DL Engineer'],
        averageSalary: 160000,
        growthRate: 26
    },
    {
        id: 'mlops-engineer',
        title: 'MLOps Engineer',
        slug: 'mlops-engineer',
        category: 'technology',
        aliases: ['Machine Learning Ops', 'ML Infrastructure Engineer'],
        averageSalary: 150000,
        growthRate: 30
    },

    // Marketing - Batch 11
    {
        id: 'marketing-automation-specialist',
        title: 'Marketing Automation Specialist',
        slug: 'marketing-automation-specialist',
        category: 'marketing',
        aliases: ['Email Automation Specialist', 'Marketing Tech Specialist'],
        averageSalary: 70000,
        growthRate: 18
    },
    {
        id: 'product-marketing-manager-2',
        title: 'Product Marketing Manager',
        slug: 'product-marketing-manager-2',
        category: 'marketing',
        aliases: ['PMM', 'Product Marketing'],
        averageSalary: 110000,
        growthRate: 16
    },
    {
        id: 'field-marketing-manager',
        title: 'Field Marketing Manager',
        slug: 'field-marketing-manager',
        category: 'marketing',
        aliases: ['Regional Marketing Manager', 'Field Marketing'],
        averageSalary: 95000,
        growthRate: 14
    },
    {
        id: 'affiliate-marketing-manager',
        title: 'Affiliate Marketing Manager',
        slug: 'affiliate-marketing-manager',
        category: 'marketing',
        aliases: ['Affiliate Manager', 'Partnership Marketing Manager'],
        averageSalary: 75000,
        growthRate: 16
    },
    {
        id: 'marketing-data-analyst',
        title: 'Marketing Data Analyst',
        slug: 'marketing-data-analyst',
        category: 'marketing',
        aliases: ['Marketing Analytics', 'Marketing Intelligence Analyst'],
        averageSalary: 75000,
        growthRate: 20
    },

    // Sales - Batch 11
    {
        id: 'sales-operations-analyst',
        title: 'Sales Operations Analyst',
        slug: 'sales-operations-analyst',
        category: 'sales',
        aliases: ['Sales Ops Analyst', 'Revenue Operations Analyst'],
        averageSalary: 75000,
        growthRate: 16
    },
    {
        id: 'sales-enablement-manager',
        title: 'Sales Enablement Manager',
        slug: 'sales-enablement-manager',
        category: 'sales',
        aliases: ['Sales Training Manager', 'Sales Content Manager'],
        averageSalary: 95000,
        growthRate: 18
    },
    {
        id: 'enterprise-account-executive',
        title: 'Enterprise Account Executive',
        slug: 'enterprise-account-executive',
        category: 'sales',
        aliases: ['Enterprise AE', 'Enterprise Sales Executive'],
        averageSalary: 140000,
        growthRate: 18
    },
    {
        id: 'inside-sales-representative',
        title: 'Inside Sales Representative',
        slug: 'inside-sales-representative',
        category: 'sales',
        aliases: ['Inside Sales Rep', 'Remote Sales Representative'],
        averageSalary: 55000,
        growthRate: 12
    },
    {
        id: 'sales-engineer-2',
        title: 'Sales Engineer',
        slug: 'sales-engineer-2',
        category: 'sales',
        aliases: ['Solutions Engineer', 'Pre-Sales Engineer'],
        averageSalary: 125000,
        growthRate: 16
    },

    // Healthcare - Batch 11
    {
        id: 'medical-records-technician',
        title: 'Medical Records Technician',
        slug: 'medical-records-technician',
        category: 'healthcare',
        aliases: ['Health Information Technician', 'Medical Records Clerk'],
        averageSalary: 42000,
        growthRate: 12
    },
    {
        id: 'health-unit-coordinator',
        title: 'Health Unit Coordinator',
        slug: 'health-unit-coordinator',
        category: 'healthcare',
        aliases: ['Unit Clerk', 'Ward Secretary'],
        averageSalary: 38000,
        growthRate: 10
    },
    {
        id: 'dietetic-technician',
        title: 'Dietetic Technician',
        slug: 'dietetic-technician',
        category: 'healthcare',
        aliases: ['Dietary Technician', 'Nutrition Assistant'],
        averageSalary: 40000,
        growthRate: 10
    },
    {
        id: 'central-service-technician',
        title: 'Central Service Technician',
        slug: 'central-service-technician',
        category: 'healthcare',
        aliases: ['Sterile Processing Technician', 'Central Sterile Supply'],
        averageSalary: 42000,
        growthRate: 12
    },
    {
        id: 'patient-access-representative',
        title: 'Patient Access Representative',
        slug: 'patient-access-representative',
        category: 'healthcare',
        aliases: ['Patient Registration', 'Admissions Representative'],
        averageSalary: 38000,
        growthRate: 12
    },

    // Finance - Batch 11
    {
        id: 'credit-analyst',
        title: 'Credit Analyst',
        slug: 'credit-analyst',
        category: 'finance',
        aliases: ['Credit Risk Analyst', 'Loan Analyst'],
        averageSalary: 75000,
        growthRate: 10
    },
    {
        id: 'budget-analyst',
        title: 'Budget Analyst',
        slug: 'budget-analyst',
        category: 'finance',
        aliases: ['Budget Manager', 'Financial Planning Analyst'],
        averageSalary: 80000,
        growthRate: 10
    },
    {
        id: 'treasury-analyst',
        title: 'Treasury Analyst',
        slug: 'treasury-analyst',
        category: 'finance',
        aliases: ['Treasury Specialist', 'Cash Management Analyst'],
        averageSalary: 85000,
        growthRate: 12
    },
    {
        id: 'pricing-analyst',
        title: 'Pricing Analyst',
        slug: 'pricing-analyst',
        category: 'finance',
        aliases: ['Pricing Specialist', 'Revenue Management Analyst'],
        averageSalary: 80000,
        growthRate: 14
    },
    {
        id: 'tax-associate',
        title: 'Tax Associate',
        slug: 'tax-associate',
        category: 'finance',
        aliases: ['Tax Analyst', 'Tax Preparation Associate'],
        averageSalary: 70000,
        growthRate: 10
    },

    // HR - Batch 11
    {
        id: 'compensation-analyst',
        title: 'Compensation Analyst',
        slug: 'compensation-analyst',
        category: 'hr',
        aliases: ['Compensation Specialist', 'Salary Analyst'],
        averageSalary: 75000,
        growthRate: 12
    },
    {
        id: 'benefits-administrator',
        title: 'Benefits Administrator',
        slug: 'benefits-administrator',
        category: 'hr',
        aliases: ['Benefits Specialist', 'Employee Benefits Coordinator'],
        averageSalary: 60000,
        growthRate: 10
    },
    {
        id: 'hr-information-systems-specialist',
        title: 'HRIS Specialist',
        slug: 'hris-specialist',
        category: 'hr',
        aliases: ['HR Information Systems Analyst', 'HR Systems Analyst'],
        averageSalary: 75000,
        growthRate: 14
    },
    {
        id: 'talent-management-specialist',
        title: 'Talent Management Specialist',
        slug: 'talent-management-specialist',
        category: 'hr',
        aliases: ['Talent Development Specialist', 'Employee Development'],
        averageSalary: 72000,
        growthRate: 14
    },
    {
        id: 'employee-relations-specialist',
        title: 'Employee Relations Specialist',
        slug: 'employee-relations-specialist',
        category: 'hr',
        aliases: ['ER Specialist', 'Labor Relations Specialist'],
        averageSalary: 70000,
        growthRate: 10
    },

    // Admin - Batch 11
    {
        id: 'executive-administrator',
        title: 'Executive Administrator',
        slug: 'executive-administrator',
        category: 'admin',
        aliases: ['Executive Admin', 'Executive Office Manager'],
        averageSalary: 65000,
        growthRate: 10
    },
    {
        id: 'administrative-coordinator',
        title: 'Administrative Coordinator',
        slug: 'administrative-coordinator',
        category: 'admin',
        aliases: ['Admin Coordinator', 'Office Coordinator'],
        averageSalary: 48000,
        growthRate: 10
    },
    {
        id: 'document-specialist',
        title: 'Document Specialist',
        slug: 'document-specialist',
        category: 'admin',
        aliases: ['Records Management Specialist', 'Documentation Clerk'],
        averageSalary: 42000,
        growthRate: 8
    },
    {
        id: 'data-entry-clerk-2',
        title: 'Data Entry Clerk',
        slug: 'data-entry-clerk-2',
        category: 'admin',
        aliases: ['Data Entry Specialist', 'Data Input Clerk'],
        averageSalary: 36000,
        growthRate: -6
    },
    {
        id: 'office-services-coordinator',
        title: 'Office Services Coordinator',
        slug: 'office-services-coordinator',
        category: 'admin',
        aliases: ['Office Services Manager', 'Facilities Coordinator'],
        averageSalary: 50000,
        growthRate: 10
    },

    // Customer Service - Batch 11
    {
        id: 'technical-support-representative',
        title: 'Technical Support Representative',
        slug: 'technical-support-representative',
        category: 'customer-service',
        aliases: ['Tech Support', 'IT Support Representative'],
        averageSalary: 48000,
        growthRate: 10
    },
    {
        id: 'customer-retention-specialist',
        title: 'Customer Retention Specialist',
        slug: 'customer-retention-specialist',
        category: 'customer-service',
        aliases: ['Retention Specialist', 'Customer Save Specialist'],
        averageSalary: 52000,
        growthRate: 14
    },
    {
        id: 'customer-service-quality-analyst',
        title: 'Customer Service Quality Analyst',
        slug: 'customer-service-quality-analyst',
        category: 'customer-service',
        aliases: ['QA Analyst', 'Quality Assurance Specialist'],
        averageSalary: 50000,
        growthRate: 12
    },
    {
        id: 'billing-specialist',
        title: 'Billing Specialist',
        slug: 'billing-specialist',
        category: 'customer-service',
        aliases: ['Billing Coordinator', 'Invoicing Specialist'],
        averageSalary: 45000,
        growthRate: 8
    },
    {
        id: 'dispute-resolution-specialist',
        title: 'Dispute Resolution Specialist',
        slug: 'dispute-resolution-specialist',
        category: 'customer-service',
        aliases: ['Claims Specialist', 'Dispute Analyst'],
        averageSalary: 48000,
        growthRate: 10
    },

    // Design - Batch 11
    {
        id: 'motion-graphics-designer',
        title: 'Motion Graphics Designer',
        slug: 'motion-graphics-designer',
        category: 'design',
        aliases: ['Motion Designer', 'Animation Designer'],
        averageSalary: 75000,
        growthRate: 16
    },
    {
        id: 'product-designer-2',
        title: 'Product Designer',
        slug: 'product-designer-2',
        category: 'design',
        aliases: ['Digital Product Designer', 'UX Product Designer'],
        averageSalary: 115000,
        growthRate: 18
    },
    {
        id: 'brand-identity-designer',
        title: 'Brand Identity Designer',
        slug: 'brand-identity-designer',
        category: 'design',
        aliases: ['Brand Designer', 'Identity Designer'],
        averageSalary: 70000,
        growthRate: 14
    },
    {
        id: 'illustration-specialist',
        title: 'Illustration Specialist',
        slug: 'illustration-specialist',
        category: 'design',
        aliases: ['Illustrator', 'Digital Illustrator'],
        averageSalary: 58000,
        growthRate: 10
    },
    {
        id: 'design-systems-specialist',
        title: 'Design Systems Specialist',
        slug: 'design-systems-specialist',
        category: 'design',
        aliases: ['Design System Designer', 'Component Designer'],
        averageSalary: 95000,
        growthRate: 20
    },

    // ========== BATCH 12: Additional Jobs ==========

    // Technology - Batch 12
    {
        id: 'site-reliability-engineer',
        title: 'Site Reliability Engineer',
        slug: 'site-reliability-engineer',
        category: 'technology',
        aliases: ['SRE', 'Reliability Engineer'],
        averageSalary: 155000,
        growthRate: 24
    },
    {
        id: 'devsecops-engineer',
        title: 'DevSecOps Engineer',
        slug: 'devsecops-engineer',
        category: 'technology',
        aliases: ['DevSecOps', 'Security DevOps Engineer'],
        averageSalary: 150000,
        growthRate: 26
    },
    {
        id: 'platform-engineer',
        title: 'Platform Engineer',
        slug: 'platform-engineer',
        category: 'technology',
        aliases: ['Platform DevOps Engineer', 'Internal Developer Platform'],
        averageSalary: 150000,
        growthRate: 28
    },
    {
        id: 'kubernetes-engineer',
        title: 'Kubernetes Engineer',
        slug: 'kubernetes-engineer',
        category: 'technology',
        aliases: ['K8s Engineer', 'Container Orchestration Engineer'],
        averageSalary: 145000,
        growthRate: 26
    },
    {
        id: 'data-infrastructure-engineer',
        title: 'Data Infrastructure Engineer',
        slug: 'data-infrastructure-engineer',
        category: 'technology',
        aliases: ['Data Platform Engineer', 'Data Engineering Lead'],
        averageSalary: 150000,
        growthRate: 24
    },

    // Marketing - Batch 12
    {
        id: 'growth-marketer',
        title: 'Growth Marketer',
        slug: 'growth-marketer',
        category: 'marketing',
        aliases: ['Growth Marketing Manager', 'Growth Hacker'],
        averageSalary: 95000,
        growthRate: 20
    },
    {
        id: 'performance-marketer',
        title: 'Performance Marketer',
        slug: 'performance-marketer',
        category: 'marketing',
        aliases: ['Performance Marketing Manager', 'Paid Acquisition'],
        averageSalary: 85000,
        growthRate: 18
    },
    {
        id: 'b2b-marketer',
        title: 'B2B Marketer',
        slug: 'b2b-marketer',
        category: 'marketing',
        aliases: ['B2B Marketing Manager', 'Business-to-Business Marketing'],
        averageSalary: 90000,
        growthRate: 16
    },
    {
        id: 'demand-generation-manager',
        title: 'Demand Generation Manager',
        slug: 'demand-generation-manager',
        category: 'marketing',
        aliases: ['Demand Gen Manager', 'Lead Generation Manager'],
        averageSalary: 95000,
        growthRate: 18
    },
    {
        id: 'marketing-operations-manager',
        title: 'Marketing Operations Manager',
        slug: 'marketing-operations-manager',
        category: 'marketing',
        aliases: ['Marketing Ops', 'MOps Manager'],
        averageSalary: 100000,
        growthRate: 18
    },

    // Sales - Batch 12
    {
        id: 'revenue-operations-manager',
        title: 'Revenue Operations Manager',
        slug: 'revenue-operations-manager',
        category: 'sales',
        aliases: ['RevOps Manager', 'Revenue Ops'],
        averageSalary: 110000,
        growthRate: 20
    },
    {
        id: 'business-development-representative',
        title: 'Business Development Representative',
        slug: 'business-development-representative',
        category: 'sales',
        aliases: ['BDR', 'Sales Development Representative'],
        averageSalary: 55000,
        growthRate: 14
    },
    {
        id: 'account-manager-2',
        title: 'Account Manager',
        slug: 'account-manager-2',
        category: 'sales',
        aliases: ['Client Account Manager', 'Customer Account Manager'],
        averageSalary: 70000,
        growthRate: 12
    },
    {
        id: 'customer-success-manager-2',
        title: 'Customer Success Manager',
        slug: 'customer-success-manager-2',
        category: 'sales',
        aliases: ['CSM', 'Customer Success'],
        averageSalary: 80000,
        growthRate: 16
    },
    {
        id: 'solutions-consultant',
        title: 'Solutions Consultant',
        slug: 'solutions-consultant',
        category: 'sales',
        aliases: ['Solutions Architect', 'Presales Consultant'],
        averageSalary: 130000,
        growthRate: 16
    },

    // Healthcare - Batch 12
    {
        id: 'medical-lab-technician',
        title: 'Medical Laboratory Technician',
        slug: 'medical-lab-technician',
        category: 'healthcare',
        aliases: ['MLT', 'Lab Technician'],
        averageSalary: 52000,
        growthRate: 12
    },
    {
        id: 'phlebotomist',
        title: 'Phlebotomist',
        slug: 'phlebotomist',
        category: 'healthcare',
        aliases: ['Phlebotomy Technician', 'Blood Draw Specialist'],
        averageSalary: 38000,
        growthRate: 10
    },
    {
        id: 'patient-care-technician',
        title: 'Patient Care Technician',
        slug: 'patient-care-technician',
        category: 'healthcare',
        aliases: ['PCT', 'Patient Care Assistant'],
        averageSalary: 35000,
        growthRate: 10
    },
    {
        id: 'medical-assistant-2',
        title: 'Medical Assistant',
        slug: 'medical-assistant-2',
        category: 'healthcare',
        aliases: ['MA', 'Clinical Medical Assistant'],
        averageSalary: 40000,
        growthRate: 14
    },
    {
        id: 'health-information-technician',
        title: 'Health Information Technician',
        slug: 'health-information-technician',
        category: 'healthcare',
        aliases: ['HIT', 'Medical Records Technician'],
        averageSalary: 45000,
        growthRate: 12
    },

    // Finance - Batch 12
    {
        id: 'financial-planner-2',
        title: 'Financial Planner',
        slug: 'financial-planner-2',
        category: 'finance',
        aliases: ['Financial Advisor', 'Wealth Manager'],
        averageSalary: 90000,
        growthRate: 12
    },
    {
        id: 'investment-representative',
        title: 'Investment Representative',
        slug: 'investment-representative',
        category: 'finance',
        aliases: ['Investment Broker', 'Financial Services Representative'],
        averageSalary: 75000,
        growthRate: 10
    },
    {
        id: 'wealth-manager',
        title: 'Wealth Manager',
        slug: 'wealth-manager',
        category: 'finance',
        aliases: ['Wealth Advisor', 'Private Wealth Manager'],
        averageSalary: 120000,
        growthRate: 14
    },
    {
        id: 'financial-controller',
        title: 'Financial Controller',
        slug: 'financial-controller',
        category: 'finance',
        aliases: ['Controller', 'Finance Controller'],
        averageSalary: 110000,
        growthRate: 12
    },
    {
        id: 'fp-and-a-manager',
        title: 'FP&A Manager',
        slug: 'fp-and-a-manager',
        category: 'finance',
        aliases: ['Financial Planning Manager', 'FP&A Analyst'],
        averageSalary: 115000,
        growthRate: 14
    },

    // HR - Batch 12
    {
        id: 'hr-coordinator-2',
        title: 'HR Coordinator',
        slug: 'hr-coordinator-2',
        category: 'hr',
        aliases: ['Human Resources Coordinator', 'HR Admin'],
        averageSalary: 52000,
        growthRate: 10
    },
    {
        id: 'recruiter-2',
        title: 'Recruiter',
        slug: 'recruiter-2',
        category: 'hr',
        aliases: ['Technical Recruiter', 'Corporate Recruiter'],
        averageSalary: 60000,
        growthRate: 12
    },
    {
        id: 'sourcing-specialist',
        title: 'Sourcing Specialist',
        slug: 'sourcing-specialist',
        category: 'hr',
        aliases: ['Talent Sourcing Specialist', 'Recruiting Researcher'],
        averageSalary: 58000,
        growthRate: 14
    },
    {
        id: 'onboarding-specialist',
        title: 'Onboarding Specialist',
        slug: 'onboarding-specialist',
        category: 'hr',
        aliases: ['Employee Onboarding', 'New Hire Orientation'],
        averageSalary: 55000,
        growthRate: 12
    },
    {
        id: 'training-coordinator',
        title: 'Training Coordinator',
        slug: 'training-coordinator',
        category: 'hr',
        aliases: ['Learning Coordinator', 'Training Administrator'],
        averageSalary: 54000,
        growthRate: 10
    },

    // Admin - Batch 12
    {
        id: 'legal-assistant',
        title: 'Legal Assistant',
        slug: 'legal-assistant',
        category: 'admin',
        aliases: ['Paralegal Assistant', 'Legal Admin'],
        averageSalary: 50000,
        growthRate: 8
    },
    {
        id: 'executive-secretary',
        title: 'Executive Secretary',
        slug: 'executive-secretary',
        category: 'admin',
        aliases: ['Executive Administrative Secretary', 'Senior Secretary'],
        averageSalary: 62000,
        growthRate: 6
    },
    {
        id: 'receptionist-2',
        title: 'Receptionist',
        slug: 'receptionist-2',
        category: 'admin',
        aliases: ['Front Desk Receptionist', 'Office Receptionist'],
        averageSalary: 34000,
        growthRate: 4
    },
    {
        id: 'file-clerk',
        title: 'File Clerk',
        slug: 'file-clerk',
        category: 'admin',
        aliases: ['Records Clerk', 'Filing Clerk'],
        averageSalary: 32000,
        growthRate: -6
    },
    {
        id: 'mailroom-clerk',
        title: 'Mailroom Clerk',
        slug: 'mailroom-clerk',
        category: 'admin',
        aliases: ['Mail Clerk', 'Mailroom Associate'],
        averageSalary: 31000,
        growthRate: -4
    },

    // Customer Service - Batch 12
    {
        id: 'call-center-representative-2',
        title: 'Call Center Representative',
        slug: 'call-center-representative-2',
        category: 'customer-service',
        aliases: ['Call Center Agent', 'Inbound Sales Representative'],
        averageSalary: 36000,
        growthRate: 6
    },
    {
        id: 'customer-support-representative',
        title: 'Customer Support Representative',
        slug: 'customer-support-representative',
        category: 'customer-service',
        aliases: ['CSR', 'Customer Service Rep'],
        averageSalary: 40000,
        growthRate: 8
    },
    {
        id: 'contact-center-agent',
        title: 'Contact Center Agent',
        slug: 'contact-center-agent',
        category: 'customer-service',
        aliases: ['Contact Center Representative', 'Multichannel Agent'],
        averageSalary: 38000,
        growthRate: 8
    },
    {
        id: 'service-desk-analyst',
        title: 'Service Desk Analyst',
        slug: 'service-desk-analyst',
        category: 'customer-service',
        aliases: ['IT Service Desk', 'Help Desk Analyst'],
        averageSalary: 52000,
        growthRate: 12
    },
    {
        id: 'customer-experience-specialist',
        title: 'Customer Experience Specialist',
        slug: 'customer-experience-specialist',
        category: 'customer-service',
        aliases: ['CX Specialist', 'Customer Experience Manager'],
        averageSalary: 60000,
        growthRate: 14
    },

    // Design - Batch 12
    {
        id: 'visual-designer',
        title: 'Visual Designer',
        slug: 'visual-designer',
        category: 'design',
        aliases: ['UI Visual Designer', 'Digital Visual Designer'],
        averageSalary: 85000,
        growthRate: 16
    },
    {
        id: 'designer-2',
        title: 'Designer',
        slug: 'designer-2',
        category: 'design',
        aliases: ['Graphic Artist', 'Visual Designer'],
        averageSalary: 65000,
        growthRate: 12
    },
    {
        id: 'production-artist',
        title: 'Production Artist',
        slug: 'production-artist',
        category: 'design',
        aliases: ['Graphic Production Artist', 'Digital Artist'],
        averageSalary: 55000,
        growthRate: 8
    },
    {
        id: 'ux-writer',
        title: 'UX Writer',
        slug: 'ux-writer',
        category: 'design',
        aliases: ['Content Designer', 'Product Content Writer'],
        averageSalary: 90000,
        growthRate: 18
    },
    {
        id: 'content-designer',
        title: 'Content Designer',
        slug: 'content-designer',
        category: 'design',
        aliases: ['UX Content Designer', 'Product Content Designer'],
        averageSalary: 95000,
        growthRate: 20
    },

    // ========== BATCH 13: Additional Jobs ==========

    // Technology - Batch 13
    {
        id: 'embedded-systems-engineer',
        title: 'Embedded Systems Engineer',
        slug: 'embedded-systems-engineer',
        category: 'technology',
        aliases: ['Embedded Software Engineer', 'Firmware Engineer'],
        averageSalary: 125000,
        growthRate: 14
    },
    {
        id: 'iot-engineer',
        title: 'IoT Engineer',
        slug: 'iot-engineer',
        category: 'technology',
        aliases: ['Internet of Things Engineer', 'IoT Developer'],
        averageSalary: 120000,
        growthRate: 18
    },
    {
        id: 'robotics-engineer',
        title: 'Robotics Engineer',
        slug: 'robotics-engineer',
        category: 'technology',
        aliases: ['Robotics Software Engineer', 'Automation Engineer'],
        averageSalary: 115000,
        growthRate: 16
    },
    {
        id: 'edge-computing-engineer',
        title: 'Edge Computing Engineer',
        slug: 'edge-computing-engineer',
        category: 'technology',
        aliases: ['Edge Engineer', 'Distributed Systems Engineer'],
        averageSalary: 135000,
        growthRate: 22
    },
    {
        id: 'quantum-computing-engineer',
        title: 'Quantum Computing Engineer',
        slug: 'quantum-computing-engineer',
        category: 'technology',
        aliases: ['Quantum Engineer', 'Quantum Software Developer'],
        averageSalary: 160000,
        growthRate: 30
    },

    // Marketing - Batch 13
    {
        id: 'viral-marketer',
        title: 'Viral Marketing Specialist',
        slug: 'viral-marketing-specialist',
        category: 'marketing',
        aliases: ['Viral Marketer', 'Social Viral Specialist'],
        averageSalary: 70000,
        growthRate: 16
    },
    {
        id: 'community-builder',
        title: 'Community Builder',
        slug: 'community-builder',
        category: 'marketing',
        aliases: ['Community Builder', 'Online Community Builder'],
        averageSalary: 68000,
        growthRate: 18
    },
    {
        id: 'brand-storyteller',
        title: 'Brand Storyteller',
        slug: 'brand-storyteller',
        category: 'marketing',
        aliases: ['Brand Narrative Specialist', 'Storytelling Marketer'],
        averageSalary: 75000,
        growthRate: 14
    },
    {
        id: 'podcast-marketer',
        title: 'Podcast Marketer',
        slug: 'podcast-marketer',
        category: 'marketing',
        aliases: ['Podcast Marketing Specialist', 'Audio Content Marketer'],
        averageSalary: 62000,
        growthRate: 18
    },
    {
        id: 'livestream-marketer',
        title: 'Livestream Marketer',
        slug: 'livestream-marketer',
        category: 'marketing',
        aliases: ['Live Stream Marketing', 'Streaming Content Marketer'],
        averageSalary: 60000,
        growthRate: 20
    },

    // Sales - Batch 13
    {
        id: 'technical-account-manager',
        title: 'Technical Account Manager',
        slug: 'technical-account-manager',
        category: 'sales',
        aliases: ['TAM', 'Technical Customer Success Manager'],
        averageSalary: 110000,
        growthRate: 16
    },
    {
        id: 'strategic-account-manager-2',
        title: 'Strategic Account Manager',
        slug: 'strategic-account-manager-2',
        category: 'sales',
        aliases: ['Strategic Accounts Manager', 'Key Account Manager'],
        averageSalary: 105000,
        growthRate: 14
    },
    {
        id: 'global-account-manager-2',
        title: 'Global Account Manager',
        slug: 'global-account-manager-2',
        category: 'sales',
        aliases: ['International Account Manager', 'Global Accounts'],
        averageSalary: 130000,
        growthRate: 16
    },
    {
        id: 'sales-analyst',
        title: 'Sales Analyst',
        slug: 'sales-analyst',
        category: 'sales',
        aliases: ['Sales Data Analyst', 'Sales Intelligence Analyst'],
        averageSalary: 70000,
        growthRate: 14
    },
    {
        id: 'sales-coordinator',
        title: 'Sales Coordinator',
        slug: 'sales-coordinator',
        category: 'sales',
        aliases: ['Sales Admin', 'Sales Support Coordinator'],
        averageSalary: 48000,
        growthRate: 10
    },

    // Healthcare - Batch 13
    {
        id: 'diagnostic-medical-sonographer',
        title: 'Diagnostic Medical Sonographer',
        slug: 'diagnostic-medical-sonographer',
        category: 'healthcare',
        aliases: ['Ultrasound Technician', 'Sonographer'],
        averageSalary: 75000,
        growthRate: 14
    },
    {
        id: 'radiologic-technologist',
        title: 'Radiologic Technologist',
        slug: 'radiologic-technologist',
        category: 'healthcare',
        aliases: ['Rad Tech', 'X-Ray Technician'],
        averageSalary: 65000,
        growthRate: 10
    },
    {
        id: 'mri-technologist',
        title: 'MRI Technologist',
        slug: 'mri-technologist',
        category: 'healthcare',
        aliases: ['MRI Technician', 'Magnetic Resonance Imaging Tech'],
        averageSalary: 85000,
        growthRate: 12
    },
    {
        id: 'ct-technologist',
        title: 'CT Technologist',
        slug: 'ct-technologist',
        category: 'healthcare',
        aliases: ['CAT Scan Technician', 'CT Tech'],
        averageSalary: 78000,
        growthRate: 10
    },
    {
        id: 'nuclear-medicine-technologist',
        title: 'Nuclear Medicine Technologist',
        slug: 'nuclear-medicine-technologist',
        category: 'healthcare',
        aliases: ['Nuclear Med Tech', 'Radiology Technologist'],
        averageSalary: 82000,
        growthRate: 10
    },

    // Finance - Batch 13
    {
        id: 'actuary',
        title: 'Actuary',
        slug: 'actuary',
        category: 'finance',
        aliases: ['Actuarial Analyst', 'Risk Analyst'],
        averageSalary: 115000,
        growthRate: 20
    },
    {
        id: 'underwriter',
        title: 'Underwriter',
        slug: 'underwriter',
        category: 'finance',
        aliases: ['Insurance Underwriter', 'Risk Underwriter'],
        averageSalary: 75000,
        growthRate: 8
    },
    {
        id: 'claims-adjuster',
        title: 'Claims Adjuster',
        slug: 'claims-adjuster',
        category: 'finance',
        aliases: ['Insurance Claims Adjuster', 'Claims Examiner'],
        averageSalary: 65000,
        growthRate: 6
    },
    {
        id: 'insurance-broker',
        title: 'Insurance Broker',
        slug: 'insurance-broker',
        category: 'finance',
        aliases: ['Insurance Agent', 'Insurance Sales Broker'],
        averageSalary: 70000,
        growthRate: 10
    },
    {
        id: 'risk-manager-2',
        title: 'Risk Manager',
        slug: 'risk-manager-2',
        category: 'finance',
        aliases: ['Enterprise Risk Manager', 'Risk Management Specialist'],
        averageSalary: 110000,
        growthRate: 14
    },

    // Engineering - Batch 13
    {
        id: 'civil-engineer-2',
        title: 'Civil Engineer',
        slug: 'civil-engineer-2',
        category: 'engineering',
        aliases: ['Civil Engineering', 'Infrastructure Engineer'],
        averageSalary: 90000,
        growthRate: 8
    },
    {
        id: 'structural-engineer',
        title: 'Structural Engineer',
        slug: 'structural-engineer',
        category: 'engineering',
        aliases: ['Structural Engineering', 'Building Engineer'],
        averageSalary: 95000,
        growthRate: 10
    },
    {
        id: 'mechanical-engineer-2',
        title: 'Mechanical Engineer',
        slug: 'mechanical-engineer-2',
        category: 'engineering',
        aliases: ['ME', 'Mechanical Engineering'],
        averageSalary: 95000,
        growthRate: 10
    },
    {
        id: 'electrical-engineer-2',
        title: 'Electrical Engineer',
        slug: 'electrical-engineer-2',
        category: 'engineering',
        aliases: ['EE', 'Electrical Engineering'],
        averageSalary: 100000,
        growthRate: 10
    },
    {
        id: 'chemical-engineer',
        title: 'Chemical Engineer',
        slug: 'chemical-engineer',
        category: 'engineering',
        aliases: ['ChE', 'Chemical Engineering'],
        averageSalary: 105000,
        growthRate: 12
    },

    // Education - Batch 13
    {
        id: 'substitute-teacher',
        title: 'Substitute Teacher',
        slug: 'substitute-teacher',
        category: 'education',
        aliases: ['Sub Teacher', 'Supply Teacher'],
        averageSalary: 40000,
        growthRate: 6
    },
    {
        id: 'teaching-assistant',
        title: 'Teaching Assistant',
        slug: 'teaching-assistant',
        category: 'education',
        aliases: ['TA', 'Teacher Assistant'],
        averageSalary: 32000,
        growthRate: 8
    },
    {
        id: 'curriculum-specialist',
        title: 'Curriculum Specialist',
        slug: 'curriculum-specialist',
        category: 'education',
        aliases: ['Curriculum Coordinator', 'Instructional Coordinator'],
        averageSalary: 65000,
        growthRate: 10
    },
    {
        id: 'instructional-coach',
        title: 'Instructional Coach',
        slug: 'instructional-coach',
        category: 'education',
        aliases: ['Teaching Coach', 'Academic Coach'],
        averageSalary: 60000,
        growthRate: 12
    },
    {
        id: 'education-consultant',
        title: 'Education Consultant',
        slug: 'education-consultant',
        category: 'education',
        aliases: ['Educational Consultant', 'EdTech Consultant'],
        averageSalary: 75000,
        growthRate: 14
    },

    // Skilled Trades - Batch 13
    {
        id: 'electrician-2',
        title: 'Electrician',
        slug: 'electrician-2',
        category: 'skilled-trades',
        aliases: ['Journeyman Electrician', 'Electrical Tradesman'],
        averageSalary: 60000,
        growthRate: 10
    },
    {
        id: 'plumber-2',
        title: 'Plumber',
        slug: 'plumber-2',
        category: 'skilled-trades',
        aliases: ['Journeyman Plumber', 'Pipefitter'],
        averageSalary: 58000,
        growthRate: 10
    },
    {
        id: 'hvac-technician-2',
        title: 'HVAC Technician',
        slug: 'hvac-technician-2',
        category: 'skilled-trades',
        aliases: ['HVAC Tech', 'Heating and Cooling Technician'],
        averageSalary: 55000,
        growthRate: 12
    },
    {
        id: 'welder-2',
        title: 'Welder',
        slug: 'welder-2',
        category: 'skilled-trades',
        aliases: ['Welding Technician', 'Fabrication Welder'],
        averageSalary: 48000,
        growthRate: 8
    },
    {
        id: 'carpenter-2',
        title: 'Carpenter',
        slug: 'carpenter-2',
        category: 'skilled-trades',
        aliases: ['Journeyman Carpenter', 'Finish Carpenter'],
        averageSalary: 52000,
        growthRate: 8
    },

    // ========== BATCH 14: Additional Jobs ==========

    // Technology - Batch 14
    {
        id: 'azure-engineer',
        title: 'Azure Engineer',
        slug: 'azure-engineer',
        category: 'technology',
        aliases: ['Microsoft Azure Engineer', 'Azure Cloud Engineer'],
        averageSalary: 145000,
        growthRate: 24
    },
    {
        id: 'aws-engineer-2',
        title: 'AWS Engineer',
        slug: 'aws-engineer-2',
        category: 'technology',
        aliases: ['Amazon Web Services Engineer', 'AWS Cloud Engineer'],
        averageSalary: 145000,
        growthRate: 24
    },
    {
        id: 'gcp-engineer',
        title: 'GCP Engineer',
        slug: 'gcp-engineer',
        category: 'technology',
        aliases: ['Google Cloud Engineer', 'GCP Cloud Architect'],
        averageSalary: 145000,
        growthRate: 26
    },
    {
        id: 'cloud-security-engineer',
        title: 'Cloud Security Engineer',
        slug: 'cloud-security-engineer',
        category: 'technology',
        aliases: ['Cloud Security Architect', 'Cloud Security Specialist'],
        averageSalary: 155000,
        growthRate: 28
    },
    {
        id: 'database-architect',
        title: 'Database Architect',
        slug: 'database-architect',
        category: 'technology',
        aliases: ['Data Architect', 'DBA Architect'],
        averageSalary: 140000,
        growthRate: 18
    },

    // Marketing - Batch 14
    {
        id: 'email-copywriter',
        title: 'Email Copywriter',
        slug: 'email-copywriter',
        category: 'marketing',
        aliases: ['Email Writer', 'Email Marketing Copywriter'],
        averageSalary: 65000,
        growthRate: 14
    },
    {
        id: 'conversion-copywriter',
        title: 'Conversion Copywriter',
        slug: 'conversion-copywriter',
        category: 'marketing',
        aliases: ['Direct Response Copywriter', 'CRO Copywriter'],
        averageSalary: 75000,
        growthRate: 16
    },
    {
        id: 'seo-copywriter',
        title: 'SEO Copywriter',
        slug: 'seo-copywriter',
        category: 'marketing',
        aliases: ['SEO Writer', 'Search Content Writer'],
        averageSalary: 60000,
        growthRate: 12
    },
    {
        id: 'technical-copywriter',
        title: 'Technical Copywriter',
        slug: 'technical-copywriter',
        category: 'marketing',
        aliases: ['Tech Writer', 'Technology Copywriter'],
        averageSalary: 80000,
        growthRate: 14
    },
    {
        id: 'creative-copywriter',
        title: 'Creative Copywriter',
        slug: 'creative-copywriter',
        category: 'marketing',
        aliases: ['Creative Writer', 'Brand Copywriter'],
        averageSalary: 70000,
        growthRate: 12
    },

    // Sales - Batch 14
    {
        id: 'field-sales-representative',
        title: 'Field Sales Representative',
        slug: 'field-sales-representative',
        category: 'sales',
        aliases: ['Field Sales Rep', 'Outside Sales Representative'],
        averageSalary: 65000,
        growthRate: 12
    },
    {
        id: 'territory-manager',
        title: 'Territory Manager',
        slug: 'territory-manager',
        category: 'sales',
        aliases: ['Sales Territory Manager', 'Area Sales Manager'],
        averageSalary: 90000,
        growthRate: 14
    },
    {
        id: 'regional-sales-manager',
        title: 'Regional Sales Manager',
        slug: 'regional-sales-manager',
        category: 'sales',
        aliases: ['RSM', 'Regional Sales Director'],
        averageSalary: 115000,
        growthRate: 14
    },
    {
        id: 'national-sales-manager',
        title: 'National Sales Manager',
        slug: 'national-sales-manager',
        category: 'sales',
        aliases: ['NSM', 'Country Sales Manager'],
        averageSalary: 145000,
        growthRate: 16
    },
    {
        id: 'vp-of-sales',
        title: 'VP of Sales',
        slug: 'vp-of-sales',
        category: 'sales',
        aliases: ['Vice President of Sales', 'Head of Sales'],
        averageSalary: 200000,
        growthRate: 18
    },

    // Healthcare - Batch 14
    {
        id: 'physical-therapist-3',
        title: 'Physical Therapist',
        slug: 'physical-therapist-3',
        category: 'healthcare',
        aliases: ['PT', 'Physiotherapist'],
        averageSalary: 95000,
        growthRate: 18
    },
    {
        id: 'occupational-therapist-3',
        title: 'Occupational Therapist',
        slug: 'occupational-therapist-3',
        category: 'healthcare',
        aliases: ['OT', 'Occupational Therapy'],
        averageSalary: 90000,
        growthRate: 16
    },
    {
        id: 'speech-language-pathologist-2',
        title: 'Speech Language Pathologist',
        slug: 'speech-language-pathologist-2',
        category: 'healthcare',
        aliases: ['SLP', 'Speech Therapist'],
        averageSalary: 85000,
        growthRate: 18
    },
    {
        id: 'respiratory-therapist-3',
        title: 'Respiratory Therapist',
        slug: 'respiratory-therapist-3',
        category: 'healthcare',
        aliases: ['RT', 'Respiratory Therapy'],
        averageSalary: 70000,
        growthRate: 14
    },
    {
        id: 'radiation-therapist',
        title: 'Radiation Therapist',
        slug: 'radiation-therapist',
        category: 'healthcare',
        aliases: ['Radiation Therapy', 'Medical Radiation Therapist'],
        averageSalary: 90000,
        growthRate: 12
    },

    // Finance - Batch 14
    {
        id: 'financial-analyst-2',
        title: 'Financial Analyst',
        slug: 'financial-analyst-2',
        category: 'finance',
        aliases: ['Finance Analyst', 'Securities Analyst'],
        averageSalary: 85000,
        growthRate: 12
    },
    {
        id: 'investment-banker',
        title: 'Investment Banker',
        slug: 'investment-banker',
        category: 'finance',
        aliases: ['Investment Banking Analyst', 'IB Analyst'],
        averageSalary: 150000,
        growthRate: 14
    },
    {
        id: 'mergers-acquisitions-analyst',
        title: 'Mergers & Acquisitions Analyst',
        slug: 'mergers-acquisitions-analyst',
        category: 'finance',
        aliases: ['M&A Analyst', 'M&A Associate'],
        averageSalary: 140000,
        growthRate: 16
    },
    {
        id: 'commercial-banker',
        title: 'Commercial Banker',
        slug: 'commercial-banker',
        category: 'finance',
        aliases: ['Commercial Banking', 'Business Banker'],
        averageSalary: 90000,
        growthRate: 10
    },
    {
        id: 'branch-manager-bank',
        title: 'Bank Branch Manager',
        slug: 'bank-branch-manager',
        category: 'finance',
        aliases: ['Branch Manager', 'Bank Manager'],
        averageSalary: 75000,
        growthRate: 8
    },

    // Engineering - Batch 14
    {
        id: 'industrial-engineer',
        title: 'Industrial Engineer',
        slug: 'industrial-engineer',
        category: 'engineering',
        aliases: ['IE', 'Industrial Engineering'],
        averageSalary: 92000,
        growthRate: 12
    },
    {
        id: 'environmental-engineer',
        title: 'Environmental Engineer',
        slug: 'environmental-engineer',
        category: 'engineering',
        aliases: ['Environmental Engineering', 'Environmental Consultant'],
        averageSalary: 88000,
        growthRate: 14
    },
    {
        id: 'biomedical-engineer',
        title: 'Biomedical Engineer',
        slug: 'biomedical-engineer',
        category: 'engineering',
        aliases: ['BME', 'Biomedical Engineering'],
        averageSalary: 100000,
        growthRate: 16
    },
    {
        id: 'aerospace-engineer',
        title: 'Aerospace Engineer',
        slug: 'aerospace-engineer',
        category: 'engineering',
        aliases: ['Aeronautical Engineer', 'Astronautical Engineer'],
        averageSalary: 120000,
        growthRate: 12
    },
    {
        id: 'petroleum-engineer',
        title: 'Petroleum Engineer',
        slug: 'petroleum-engineer',
        category: 'engineering',
        aliases: ['Petroleum Engineering', 'Oil & Gas Engineer'],
        averageSalary: 130000,
        growthRate: 8
    },

    // Legal - Batch 14
    {
        id: 'contract-attorney',
        title: 'Contract Attorney',
        slug: 'contract-attorney',
        category: 'legal',
        aliases: ['Contracts Lawyer', 'Contract Specialist Attorney'],
        averageSalary: 130000,
        growthRate: 12
    },
    {
        id: 'compliance-attorney',
        title: 'Compliance Attorney',
        slug: 'compliance-attorney',
        category: 'legal',
        aliases: ['Compliance Lawyer', 'Regulatory Attorney'],
        averageSalary: 140000,
        growthRate: 14
    },
    {
        id: 'employment-attorney',
        title: 'Employment Attorney',
        slug: 'employment-attorney',
        category: 'legal',
        aliases: ['Labor Attorney', 'Employment Law Attorney'],
        averageSalary: 120000,
        growthRate: 12
    },
    {
        id: 'real-estate-attorney-2',
        title: 'Real Estate Attorney',
        slug: 'real-estate-attorney-2',
        category: 'legal',
        aliases: ['Property Lawyer', 'Real Estate Lawyer'],
        averageSalary: 115000,
        growthRate: 10
    },
    {
        id: 'immigration-attorney',
        title: 'Immigration Attorney',
        slug: 'immigration-attorney',
        category: 'legal',
        aliases: ['Immigration Lawyer', 'Visa Attorney'],
        averageSalary: 110000,
        growthRate: 14
    },

    // Real Estate - Batch 14
    {
        id: 'property-manager-2',
        title: 'Property Manager',
        slug: 'property-manager-2',
        category: 'real-estate',
        aliases: ['Real Estate Property Manager', 'Rental Property Manager'],
        averageSalary: 60000,
        growthRate: 10
    },
    {
        id: 'leasing-agent',
        title: 'Leasing Agent',
        slug: 'leasing-agent',
        category: 'real-estate',
        aliases: ['Leasing Consultant', 'Rental Agent'],
        averageSalary: 45000,
        growthRate: 10
    },
    {
        id: 'property-developer',
        title: 'Property Developer',
        slug: 'property-developer',
        category: 'real-estate',
        aliases: ['Real Estate Developer', 'Property Development'],
        averageSalary: 95000,
        growthRate: 12
    },
    {
        id: 'title-examiner',
        title: 'Title Examiner',
        slug: 'title-examiner',
        category: 'real-estate',
        aliases: ['Title Searcher', 'Title Abstractor'],
        averageSalary: 50000,
        growthRate: 8
    },
    {
        id: 'escrow-officer',
        title: 'Escrow Officer',
        slug: 'escrow-officer',
        category: 'real-estate',
        aliases: ['Escrow Agent', 'Closing Officer'],
        averageSalary: 55000,
        growthRate: 10
    },

    // Transportation - Batch 14
    {
        id: 'freight-forwarder',
        title: 'Freight Forwarder',
        slug: 'freight-forwarder',
        category: 'transportation',
        aliases: ['Freight Forwarding Agent', 'Cargo Forwarder'],
        averageSalary: 52000,
        growthRate: 10
    },
    {
        id: 'customs-broker',
        title: 'Customs Broker',
        slug: 'customs-broker',
        category: 'transportation',
        aliases: ['Customs Agent', 'Import/Export Broker'],
        averageSalary: 58000,
        growthRate: 10
    },
    {
        id: 'shipping-receiver',
        title: 'Shipping Receiver',
        slug: 'shipping-receiver',
        category: 'transportation',
        aliases: ['Shipping Clerk', 'Receiving Clerk'],
        averageSalary: 38000,
        growthRate: 6
    },
    {
        id: 'delivery-driver-2',
        title: 'Delivery Driver',
        slug: 'delivery-driver-2',
        category: 'transportation',
        aliases: ['Delivery Driver', 'Package Delivery Driver'],
        averageSalary: 40000,
        growthRate: 10
    },
    {
        id: 'dispatcher-2',
        title: 'Dispatcher',
        slug: 'dispatcher-2',
        category: 'transportation',
        aliases: ['Service Dispatcher', 'Transportation Dispatcher'],
        averageSalary: 45000,
        growthRate: 8
    },

    // ========== BATCH 15: Additional Jobs ==========

    // Technology - Batch 15
    {
        id: 'fullstack-developer-2',
        title: 'Fullstack Developer',
        slug: 'fullstack-developer-2',
        category: 'technology',
        aliases: ['Full Stack Developer', 'Full-Stack Engineer'],
        averageSalary: 125000,
        growthRate: 22
    },
    {
        id: 'mean-stack-developer',
        title: 'MEAN Stack Developer',
        slug: 'mean-stack-developer',
        category: 'technology',
        aliases: ['MEAN Developer', 'MongoDB Express Angular Node Developer'],
        averageSalary: 115000,
        growthRate: 18
    },
    {
        id: 'mern-stack-developer',
        title: 'MERN Stack Developer',
        slug: 'mern-stack-developer',
        category: 'technology',
        aliases: ['MERN Developer', 'MongoDB Express React Node Developer'],
        averageSalary: 115000,
        growthRate: 20
    },
    {
        id: 'nextjs-developer',
        title: 'Next.js Developer',
        slug: 'nextjs-developer',
        category: 'technology',
        aliases: ['NextJS Developer', 'Next.js Framework Developer'],
        averageSalary: 120000,
        growthRate: 24
    },
    {
        id: 'react-native-developer',
        title: 'React Native Developer',
        slug: 'react-native-developer',
        category: 'technology',
        aliases: ['React Native Mobile Developer', 'RN Developer'],
        averageSalary: 120000,
        growthRate: 20
    },

    // Marketing - Batch 15
    {
        id: 'social-media-coordinator',
        title: 'Social Media Coordinator',
        slug: 'social-media-coordinator',
        category: 'marketing',
        aliases: ['Social Media Specialist', 'Social Content Coordinator'],
        averageSalary: 50000,
        growthRate: 14
    },
    {
        id: 'content-manager-marketing',
        title: 'Content Manager',
        slug: 'content-manager-marketing',
        category: 'marketing',
        aliases: ['Content Marketing Manager', 'Content Strategy Manager'],
        averageSalary: 75000,
        growthRate: 16
    },
    {
        id: 'digital-strategist',
        title: 'Digital Strategist',
        slug: 'digital-strategist',
        category: 'marketing',
        aliases: ['Digital Marketing Strategist', 'Digital Strategy Consultant'],
        averageSalary: 85000,
        growthRate: 18
    },
    {
        id: 'marketing-analyst-2',
        title: 'Marketing Analyst',
        slug: 'marketing-analyst-2',
        category: 'marketing',
        aliases: ['Marketing Data Analyst', 'Marketing Research Analyst'],
        averageSalary: 70000,
        growthRate: 16
    },
    {
        id: 'brand-manager-2',
        title: 'Brand Manager',
        slug: 'brand-manager-2',
        category: 'marketing',
        aliases: ['Brand Marketing Manager', 'Product Brand Manager'],
        averageSalary: 100000,
        growthRate: 14
    },

    // Sales - Batch 15
    {
        id: 'sales-associate',
        title: 'Sales Associate',
        slug: 'sales-associate',
        category: 'sales',
        aliases: ['Retail Sales Associate', 'Sales Assistant'],
        averageSalary: 40000,
        growthRate: 8
    },
    {
        id: 'sales-trainer',
        title: 'Sales Trainer',
        slug: 'sales-trainer',
        category: 'sales',
        aliases: ['Sales Training Specialist', 'Sales Coach'],
        averageSalary: 70000,
        growthRate: 14
    },
    {
        id: 'inside-sales-manager',
        title: 'Inside Sales Manager',
        slug: 'inside-sales-manager',
        category: 'sales',
        aliases: ['Inside Sales Team Lead', 'Remote Sales Manager'],
        averageSalary: 85000,
        growthRate: 14
    },
    {
        id: 'outbound-sales-manager',
        title: 'Outbound Sales Manager',
        slug: 'outbound-sales-manager',
        category: 'sales',
        aliases: ['Outbound Team Lead', 'Cold Calling Manager'],
        averageSalary: 85000,
        growthRate: 14
    },
    {
        id: 'client-success-manager',
        title: 'Client Success Manager',
        slug: 'client-success-manager',
        category: 'sales',
        aliases: ['Client Success', 'Account Success Manager'],
        averageSalary: 80000,
        growthRate: 16
    },

    // Healthcare - Batch 15
    {
        id: 'nurse-practitioner',
        title: 'Nurse Practitioner',
        slug: 'nurse-practitioner',
        category: 'healthcare',
        aliases: ['NP', 'Advanced Practice Registered Nurse'],
        averageSalary: 115000,
        growthRate: 26
    },
    {
        id: 'physician-assistant',
        title: 'Physician Assistant',
        slug: 'physician-assistant',
        category: 'healthcare',
        aliases: ['PA', 'Physician Associate'],
        averageSalary: 115000,
        growthRate: 28
    },
    {
        id: 'clinical-nurse-specialist',
        title: 'Clinical Nurse Specialist',
        slug: 'clinical-nurse-specialist',
        category: 'healthcare',
        aliases: ['CNS', 'Advanced Practice Nurse'],
        averageSalary: 105000,
        growthRate: 20
    },
    {
        id: 'nurse-midwife',
        title: 'Nurse Midwife',
        slug: 'nurse-midwife',
        category: 'healthcare',
        aliases: ['Certified Nurse Midwife', 'CNM'],
        averageSalary: 110000,
        growthRate: 18
    },
    {
        id: 'dialysis-technician',
        title: 'Dialysis Technician',
        slug: 'dialysis-technician',
        category: 'healthcare',
        aliases: ['Hemodialysis Technician', 'Dialysis Tech'],
        averageSalary: 45000,
        growthRate: 14
    },

    // Finance - Batch 15
    {
        id: 'staff-accountant',
        title: 'Staff Accountant',
        slug: 'staff-accountant',
        category: 'finance',
        aliases: ['Junior Accountant', 'Accountant I'],
        averageSalary: 60000,
        growthRate: 10
    },
    {
        id: 'senior-accountant',
        title: 'Senior Accountant',
        slug: 'senior-accountant',
        category: 'finance',
        aliases: ['Accountant II', 'Senior Accounting Specialist'],
        averageSalary: 75000,
        growthRate: 10
    },
    {
        id: 'cost-accountant',
        title: 'Cost Accountant',
        slug: 'cost-accountant',
        category: 'finance',
        aliases: ['Cost Accounting Specialist', 'Manufacturing Accountant'],
        averageSalary: 72000,
        growthRate: 10
    },
    {
        id: 'tax-accountant',
        title: 'Tax Accountant',
        slug: 'tax-accountant',
        category: 'finance',
        aliases: ['Taxation Accountant', 'CPA Tax'],
        averageSalary: 80000,
        growthRate: 12
    },
    {
        id: 'audit-accountant',
        title: 'Audit Accountant',
        slug: 'audit-accountant',
        category: 'finance',
        aliases: ['Auditor', 'Internal Auditor'],
        averageSalary: 72000,
        growthRate: 12
    },

    // HR - Batch 15
    {
        id: 'hr-generalist',
        title: 'HR Generalist',
        slug: 'hr-generalist',
        category: 'hr',
        aliases: ['Human Resources Generalist', 'HR Generalist Specialist'],
        averageSalary: 65000,
        growthRate: 12
    },
    {
        id: 'hr-business-partner',
        title: 'HR Business Partner',
        slug: 'hr-business-partner',
        category: 'hr',
        aliases: ['HRBP', 'Human Resources Business Partner'],
        averageSalary: 85000,
        growthRate: 14
    },
    {
        id: 'talent-acquisition-lead',
        title: 'Talent Acquisition Lead',
        slug: 'talent-acquisition-lead',
        category: 'hr',
        aliases: ['Recruiting Lead', 'Talent Acquisition Team Lead'],
        averageSalary: 80000,
        growthRate: 14
    },
    {
        id: 'recruitment-marketer',
        title: 'Recruitment Marketer',
        slug: 'recruitment-marketer',
        category: 'hr',
        aliases: ['Recruitment Marketing Specialist', 'Talent Attraction Marketer'],
        averageSalary: 68000,
        growthRate: 16
    },
    {
        id: 'employee-experience-manager',
        title: 'Employee Experience Manager',
        slug: 'employee-experience-manager',
        category: 'hr',
        aliases: ['EX Manager', 'Employee Engagement Lead'],
        averageSalary: 85000,
        growthRate: 16
    },

    // Admin - Batch 15
    {
        id: 'project-assistant',
        title: 'Project Assistant',
        slug: 'project-assistant',
        category: 'admin',
        aliases: ['Project Support Assistant', 'Project Admin Assistant'],
        averageSalary: 50000,
        growthRate: 10
    },
    {
        id: 'administrative-specialist',
        title: 'Administrative Specialist',
        slug: 'administrative-specialist',
        category: 'admin',
        aliases: ['Admin Specialist', 'Office Specialist'],
        averageSalary: 46000,
        growthRate: 8
    },
    {
        id: 'office-assistant-2',
        title: 'Office Assistant',
        slug: 'office-assistant-2',
        category: 'admin',
        aliases: ['Office Support Assistant', 'Administrative Assistant II'],
        averageSalary: 40000,
        growthRate: 6
    },
    {
        id: 'clerical-assistant',
        title: 'Clerical Assistant',
        slug: 'clerical-assistant',
        category: 'admin',
        aliases: ['Clerk', 'Office Clerk'],
        averageSalary: 34000,
        growthRate: 4
    },
    {
        id: 'transcriptionist',
        title: 'Transcriptionist',
        slug: 'transcriptionist',
        category: 'admin',
        aliases: ['Medical Transcriptionist', 'Legal Transcriptionist'],
        averageSalary: 38000,
        growthRate: -4
    },

    // Customer Service - Batch 15
    {
        id: 'customer-liaison',
        title: 'Customer Liaison',
        slug: 'customer-liaison',
        category: 'customer-service',
        aliases: ['Customer Liaison Officer', 'Client Liaison'],
        averageSalary: 48000,
        growthRate: 10
    },
    {
        id: 'customer-service-lead',
        title: 'Customer Service Lead',
        slug: 'customer-service-lead',
        category: 'customer-service',
        aliases: ['CS Lead', 'Customer Service Team Lead'],
        averageSalary: 52000,
        growthRate: 12
    },
    {
        id: 'customer-advocate-2',
        title: 'Customer Advocate',
        slug: 'customer-advocate-2',
        category: 'customer-service',
        aliases: ['Customer Advocate Representative', 'Client Advocate'],
        averageSalary: 48000,
        growthRate: 12
    },
    {
        id: 'client-services-representative',
        title: 'Client Services Representative',
        slug: 'client-services-representative',
        category: 'customer-service',
        aliases: ['Client Services Rep', 'Client Support Representative'],
        averageSalary: 46000,
        growthRate: 10
    },
    {
        id: 'customer-support-lead',
        title: 'Customer Support Lead',
        slug: 'customer-support-lead',
        category: 'customer-service',
        aliases: ['Support Team Lead', 'Customer Support Supervisor'],
        averageSalary: 58000,
        growthRate: 12
    },

    // Design - Batch 15
    {
        id: 'ui-designer-2',
        title: 'UI Designer',
        slug: 'ui-designer-2',
        category: 'design',
        aliases: ['User Interface Designer', 'UI/UX Designer'],
        averageSalary: 95000,
        growthRate: 18
    },
    {
        id: 'ux-researcher-2',
        title: 'UX Researcher',
        slug: 'ux-researcher-2',
        category: 'design',
        aliases: ['User Researcher', 'User Experience Researcher'],
        averageSalary: 95000,
        growthRate: 20
    },
    {
        id: 'design-lead',
        title: 'Design Lead',
        slug: 'design-lead',
        category: 'design',
        aliases: ['Design Team Lead', 'Senior Designer Lead'],
        averageSalary: 120000,
        growthRate: 16
    },
    {
        id: 'senior-designer',
        title: 'Senior Designer',
        slug: 'senior-designer',
        category: 'design',
        aliases: ['Lead Designer', 'Principal Designer'],
        averageSalary: 105000,
        growthRate: 14
    },
    {
        id: 'design-intern',
        title: 'Design Intern',
        slug: 'design-intern',
        category: 'design',
        aliases: ['Design Internship', 'Junior Designer'],
        averageSalary: 45000,
        growthRate: 12
    },

    // ========== BATCH 16: 100 New Jobs ==========

    // Technology - AI & Data (15 jobs)
    {
        id: 'ai-ethics-officer',
        title: 'AI Ethics Officer',
        slug: 'ai-ethics-officer',
        category: 'technology',
        aliases: ['AI Ethicist', 'Ethics Compliance Officer'],
        averageSalary: 135000,
        growthRate: 25
    },
    {
        id: 'machine-learning-engineer-2',
        title: 'Machine Learning Engineer',
        slug: 'machine-learning-engineer-2',
        category: 'technology',
        aliases: ['ML Engineer', 'Machine Learning Developer'],
        averageSalary: 150000,
        growthRate: 28
    },
    {
        id: 'data-architect-2',
        title: 'Data Architect',
        slug: 'data-architect-2',
        category: 'technology',
        aliases: ['Data Architecture Lead', 'Enterprise Data Architect'],
        averageSalary: 145000,
        growthRate: 20
    },
    {
        id: 'data-analytics-lead',
        title: 'Data Analytics Lead',
        slug: 'data-analytics-lead',
        category: 'technology',
        aliases: ['Head of Data Analytics', 'Analytics Team Lead'],
        averageSalary: 130000,
        growthRate: 22
    },
    {
        id: 'ai-product-manager',
        title: 'AI Product Manager',
        slug: 'ai-product-manager',
        category: 'technology',
        aliases: ['ML Product Manager', 'AI/ML PM'],
        averageSalary: 155000,
        growthRate: 26
    },
    {
        id: 'nlp-engineer',
        title: 'NLP Engineer',
        slug: 'nlp-engineer',
        category: 'technology',
        aliases: ['Natural Language Processing Engineer', 'NLP Developer'],
        averageSalary: 145000,
        growthRate: 30
    },
    {
        id: 'computer-vision-engineer',
        title: 'Computer Vision Engineer',
        slug: 'computer-vision-engineer',
        category: 'technology',
        aliases: ['CV Engineer', 'Vision Systems Engineer'],
        averageSalary: 142000,
        growthRate: 28
    },
    {
        id: 'ml-ops-engineer-2',
        title: 'MLOps Engineer',
        slug: 'ml-ops-engineer-2',
        category: 'technology',
        aliases: ['Machine Learning Operations', 'ML DevOps Engineer'],
        averageSalary: 148000,
        growthRate: 32
    },
    {
        id: 'data-governance-analyst',
        title: 'Data Governance Analyst',
        slug: 'data-governance-analyst',
        category: 'technology',
        aliases: ['Data Compliance Analyst', 'Data Policy Analyst'],
        averageSalary: 95000,
        growthRate: 18
    },
    {
        id: 'business-intelligence-developer',
        title: 'BI Developer',
        slug: 'business-intelligence-developer',
        category: 'technology',
        aliases: ['Business Intelligence Developer', 'BI Engineer'],
        averageSalary: 105000,
        growthRate: 16
    },
    {
        id: 'data-warehouse-architect',
        title: 'Data Warehouse Architect',
        slug: 'data-warehouse-architect',
        category: 'technology',
        aliases: ['DW Architect', 'Enterprise Data Warehouse Lead'],
        averageSalary: 135000,
        growthRate: 18
    },
    {
        id: 'etl-developer',
        title: 'ETL Developer',
        slug: 'etl-developer',
        category: 'technology',
        aliases: ['ETL Engineer', 'Data Integration Developer'],
        averageSalary: 98000,
        growthRate: 14
    },
    {
        id: 'data-quality-analyst',
        title: 'Data Quality Analyst',
        slug: 'data-quality-analyst',
        category: 'technology',
        aliases: ['Data Quality Specialist', 'Data Integrity Analyst'],
        averageSalary: 82000,
        growthRate: 16
    },
    {
        id: 'predictive-analytics-specialist',
        title: 'Predictive Analytics Specialist',
        slug: 'predictive-analytics-specialist',
        category: 'technology',
        aliases: ['Predictive Modeling Analyst', 'Advanced Analytics Specialist'],
        averageSalary: 110000,
        growthRate: 22
    },
    {
        id: 'data-strategy-manager',
        title: 'Data Strategy Manager',
        slug: 'data-strategy-manager',
        category: 'technology',
        aliases: ['Head of Data Strategy', 'Data Strategy Lead'],
        averageSalary: 145000,
        growthRate: 20
    },

    // Marketing - Digital & Performance (12 jobs)
    {
        id: 'performance-marketing-manager',
        title: 'Performance Marketing Manager',
        slug: 'performance-marketing-manager',
        category: 'marketing',
        aliases: ['Performance Marketer', 'Paid Media Manager'],
        averageSalary: 95000,
        growthRate: 20
    },
    {
        id: 'conversion-rate-optimizer',
        title: 'CRO Specialist',
        slug: 'conversion-rate-optimizer',
        category: 'marketing',
        aliases: ['Conversion Rate Optimization Expert', 'CRO Manager'],
        averageSalary: 88000,
        growthRate: 22
    },
    {
        id: 'ppc-specialist-2',
        title: 'PPC Specialist',
        slug: 'ppc-specialist-2',
        category: 'marketing',
        aliases: ['Pay-Per-Click Expert', 'Paid Search Specialist'],
        averageSalary: 72000,
        growthRate: 16
    },
    {
        id: 'display-advertising-manager',
        title: 'Display Advertising Manager',
        slug: 'display-advertising-manager',
        category: 'marketing',
        aliases: ['Display Ads Manager', 'Banner Advertising Lead'],
        averageSalary: 82000,
        growthRate: 14
    },
    {
        id: 'programmatic-ad-manager',
        title: 'Programmatic Ad Manager',
        slug: 'programmatic-ad-manager',
        category: 'marketing',
        aliases: ['Programmatic Advertising Manager', 'Ad Tech Manager'],
        averageSalary: 90000,
        growthRate: 18
    },
    {
        id: 'social-media-advertiser',
        title: 'Social Media Advertiser',
        slug: 'social-media-advertiser',
        category: 'marketing',
        aliases: ['Social Ads Manager', 'Paid Social Specialist'],
        averageSalary: 75000,
        growthRate: 18
    },
    {
        id: 'video-marketing-specialist',
        title: 'Video Marketing Specialist',
        slug: 'video-marketing-specialist',
        category: 'marketing',
        aliases: ['Video Content Marketer', 'Video Marketing Manager'],
        averageSalary: 70000,
        growthRate: 20
    },
    {
        id: 'podcast-marketer',
        title: 'Podcast Marketer',
        slug: 'podcast-marketer',
        category: 'marketing',
        aliases: ['Podcast Marketing Specialist', 'Audio Content Marketer'],
        averageSalary: 68000,
        growthRate: 22
    },
    {
        id: 'affiliate-marketing-manager',
        title: 'Affiliate Marketing Manager',
        slug: 'affiliate-marketing-manager',
        category: 'marketing',
        aliases: ['Affiliate Manager', 'Partnership Marketing Manager'],
        averageSalary: 82000,
        growthRate: 16
    },
    {
        id: 'influencer-marketing-coordinator',
        title: 'Influencer Marketing Coordinator',
        slug: 'influencer-marketing-coordinator',
        category: 'marketing',
        aliases: ['Influencer Coordinator', 'Influencer Campaign Manager'],
        averageSalary: 58000,
        growthRate: 20
    },
    {
        id: 'community-building-manager',
        title: 'Community Building Manager',
        slug: 'community-building-manager',
        category: 'marketing',
        aliases: ['Community Builder', 'Online Community Manager'],
        averageSalary: 78000,
        growthRate: 18
    },
    {
        id: 'event-marketing-manager',
        title: 'Event Marketing Manager',
        slug: 'event-marketing-manager',
        category: 'marketing',
        aliases: ['Event Marketer', 'Events Marketing Lead'],
        averageSalary: 85000,
        growthRate: 14
    },

    // Sales - B2B & Enterprise (10 jobs)
    {
        id: 'enterprise-account-executive',
        title: 'Enterprise Account Executive',
        slug: 'enterprise-account-executive',
        category: 'sales',
        aliases: ['Enterprise AE', 'Enterprise Sales Executive'],
        averageSalary: 145000,
        growthRate: 18
    },
    {
        id: 'strategic-account-manager',
        title: 'Strategic Account Manager',
        slug: 'strategic-account-manager',
        category: 'sales',
        aliases: ['Strategic Accounts Lead', 'Key Account Manager'],
        averageSalary: 125000,
        growthRate: 16
    },
    {
        id: 'solutions-consultant',
        title: 'Solutions Consultant',
        slug: 'solutions-consultant',
        category: 'sales',
        aliases: ['Sales Consultant', 'Pre-Sales Consultant'],
        averageSalary: 115000,
        growthRate: 18
    },
    {
        id: 'sales-engineer-2',
        title: 'Sales Engineer',
        slug: 'sales-engineer-2',
        category: 'sales',
        aliases: ['Technical Sales Engineer', 'Solutions Engineer'],
        averageSalary: 120000,
        growthRate: 20
    },
    {
        id: 'business-development-rep-2',
        title: 'Business Development Rep',
        slug: 'business-development-rep-2',
        category: 'sales',
        aliases: ['BDR', 'Business Development Representative'],
        averageSalary: 55000,
        growthRate: 14
    },
    {
        id: 'sales-development-rep-2',
        title: 'Sales Development Rep',
        slug: 'sales-development-rep-2',
        category: 'sales',
        aliases: ['SDR', 'Sales Development Representative'],
        averageSalary: 52000,
        growthRate: 14
    },
    {
        id: 'demand-generation-manager',
        title: 'Demand Generation Manager',
        slug: 'demand-generation-manager',
        category: 'sales',
        aliases: ['Demand Gen Manager', 'Lead Generation Manager'],
        averageSalary: 98000,
        growthRate: 18
    },
    {
        id: 'sales-operations-analyst-2',
        title: 'Sales Operations Analyst',
        slug: 'sales-operations-analyst-2',
        category: 'sales',
        aliases: ['Sales Ops Analyst', 'Revenue Operations Analyst'],
        averageSalary: 82000,
        growthRate: 16
    },
    {
        id: 'sales-enablement-manager',
        title: 'Sales Enablement Manager',
        slug: 'sales-enablement-manager',
        category: 'sales',
        aliases: ['Sales Enablement Lead', 'Sales Training Manager'],
        averageSalary: 105000,
        growthRate: 18
    },
    {
        id: 'revenue-operations-manager',
        title: 'Revenue Operations Manager',
        slug: 'revenue-operations-manager',
        category: 'sales',
        aliases: ['RevOps Manager', 'Revenue Ops Lead'],
        averageSalary: 110000,
        growthRate: 22
    },

    // Healthcare - Specialized (8 jobs)
    {
        id: 'occupational-therapist-2',
        title: 'Occupational Therapist',
        slug: 'occupational-therapist-2',
        category: 'healthcare',
        aliases: ['OT', 'Occupational Therapy Practitioner'],
        averageSalary: 92000,
        growthRate: 16
    },
    {
        id: 'physical-therapist-assistant',
        title: 'Physical Therapist Assistant',
        slug: 'physical-therapist-assistant',
        category: 'healthcare',
        aliases: ['PTA', 'Physical Therapy Assistant'],
        averageSalary: 65000,
        growthRate: 20
    },
    {
        id: 'medical-sonographer',
        title: 'Medical Sonographer',
        slug: 'medical-sonographer',
        category: 'healthcare',
        aliases: ['Ultrasound Technician', 'Diagnostic Medical Sonographer'],
        averageSalary: 78000,
        growthRate: 18
    },
    {
        id: 'radiologic-technologist',
        title: 'Radiologic Technologist',
        slug: 'radiologic-technologist',
        category: 'healthcare',
        aliases: ['Rad Tech', 'X-Ray Technician'],
        averageSalary: 65000,
        growthRate: 12
    },
    {
        id: 'respiratory-therapist',
        title: 'Respiratory Therapist',
        slug: 'respiratory-therapist',
        category: 'healthcare',
        aliases: ['RT', 'Respiratory Care Practitioner'],
        averageSalary: 72000,
        growthRate: 16
    },
    {
        id: 'speech-language-pathologist',
        title: 'Speech Language Pathologist',
        slug: 'speech-language-pathologist',
        category: 'healthcare',
        aliases: ['SLP', 'Speech Therapist'],
        averageSalary: 85000,
        growthRate: 18
    },
    {
        id: 'dietitian-nutritionist',
        title: 'Dietitian Nutritionist',
        slug: 'dietitian-nutritionist',
        category: 'healthcare',
        aliases: ['Registered Dietitian', 'Clinical Dietitian'],
        averageSalary: 68000,
        growthRate: 14
    },
    {
        id: 'genetic-counselor',
        title: 'Genetic Counselor',
        slug: 'genetic-counselor',
        category: 'healthcare',
        aliases: ['Genetics Counselor', 'Genetic Counseling Specialist'],
        averageSalary: 95000,
        growthRate: 24
    },

    // Finance - Investment & Planning (10 jobs)
    {
        id: 'financial-planner-2',
        title: 'Financial Planner',
        slug: 'financial-planner-2',
        category: 'finance',
        aliases: ['Financial Advisor', 'Wealth Manager'],
        averageSalary: 98000,
        growthRate: 14
    },
    {
        id: 'investment-analyst-2',
        title: 'Investment Analyst',
        slug: 'investment-analyst-2',
        category: 'finance',
        aliases: ['Investment Research Analyst', 'Securities Analyst'],
        averageSalary: 95000,
        growthRate: 12
    },
    {
        id: 'portfolio-manager',
        title: 'Portfolio Manager',
        slug: 'portfolio-manager',
        category: 'finance',
        aliases: ['Investment Portfolio Manager', 'Fund Manager'],
        averageSalary: 135000,
        growthRate: 10
    },
    {
        id: 'risk-management-analyst',
        title: 'Risk Management Analyst',
        slug: 'risk-management-analyst',
        category: 'finance',
        aliases: ['Risk Analyst', 'Enterprise Risk Manager'],
        averageSalary: 92000,
        growthRate: 16
    },
    {
        id: 'credit-analyst-2',
        title: 'Credit Analyst',
        slug: 'credit-analyst-2',
        category: 'finance',
        aliases: ['Credit Risk Analyst', 'Loan Officer'],
        averageSalary: 72000,
        growthRate: 10
    },
    {
        id: 'financial-controller',
        title: 'Financial Controller',
        slug: 'financial-controller',
        category: 'finance',
        aliases: ['Corporate Controller', 'Comptroller'],
        averageSalary: 125000,
        growthRate: 10
    },
    {
        id: 'treasury-analyst',
        title: 'Treasury Analyst',
        slug: 'treasury-analyst',
        category: 'finance',
        aliases: ['Treasury Specialist', 'Cash Management Analyst'],
        averageSalary: 88000,
        growthRate: 12
    },
    {
        id: 'fp-and-a-analyst',
        title: 'FP&A Analyst',
        slug: 'fp-and-a-analyst',
        category: 'finance',
        aliases: ['Financial Planning Analyst', 'Budget Analyst'],
        averageSalary: 95000,
        growthRate: 14
    },
    {
        id: 'tax-manager',
        title: 'Tax Manager',
        slug: 'tax-manager',
        category: 'finance',
        aliases: ['Taxation Manager', 'Tax Compliance Manager'],
        averageSalary: 115000,
        growthRate: 12
    },
    {
        id: 'actuary-2',
        title: 'Actuary',
        slug: 'actuary-2',
        category: 'finance',
        aliases: ['Actuarial Analyst', 'Risk Actuary'],
        averageSalary: 115000,
        growthRate: 18
    },

    // HR - People & Talent (8 jobs)
    {
        id: 'hr-analyst',
        title: 'HR Analyst',
        slug: 'hr-analyst',
        category: 'hr',
        aliases: ['People Analyst', 'HR Data Analyst'],
        averageSalary: 72000,
        growthRate: 16
    },
    {
        id: 'compensation-analyst',
        title: 'Compensation Analyst',
        slug: 'compensation-analyst',
        category: 'hr',
        aliases: ['Comp and Benefits Analyst', 'Salary Analyst'],
        averageSalary: 78000,
        growthRate: 14
    },
    {
        id: 'benefits-administrator',
        title: 'Benefits Administrator',
        slug: 'benefits-administrator',
        category: 'hr',
        aliases: ['Benefits Coordinator', 'Employee Benefits Specialist'],
        averageSalary: 58000,
        growthRate: 10
    },
    {
        id: 'hr-coordinator-2',
        title: 'HR Coordinator',
        slug: 'hr-coordinator-2',
        category: 'hr',
        aliases: ['Human Resources Coordinator', 'HR Admin'],
        averageSalary: 52000,
        growthRate: 12
    },
    {
        id: 'talent-management-specialist',
        title: 'Talent Management Specialist',
        slug: 'talent-management-specialist',
        category: 'hr',
        aliases: ['Talent Development Specialist', 'Succession Planning Specialist'],
        averageSalary: 82000,
        growthRate: 16
    },
    {
        id: 'diversity-inclusion-manager',
        title: 'Diversity Inclusion Manager',
        slug: 'diversity-inclusion-manager',
        category: 'hr',
        aliases: ['DEI Manager', 'Diversity Equity Inclusion Lead'],
        averageSalary: 95000,
        growthRate: 18
    },
    {
        id: 'employee-relations-specialist',
        title: 'Employee Relations Specialist',
        slug: 'employee-relations-specialist',
        category: 'hr',
        aliases: ['ER Specialist', 'Labor Relations Specialist'],
        averageSalary: 75000,
        growthRate: 12
    },
    {
        id: 'organizational-development-manager',
        title: 'Organizational Development Manager',
        slug: 'organizational-development-manager',
        category: 'hr',
        aliases: ['OD Manager', 'Organizational Effectiveness Manager'],
        averageSalary: 105000,
        growthRate: 14
    },

    // Admin - Executive Support (7 jobs)
    {
        id: 'executive-assistant-2',
        title: 'Executive Assistant',
        slug: 'executive-assistant-2',
        category: 'admin',
        aliases: ['EA', 'Executive Administrative Assistant'],
        averageSalary: 72000,
        growthRate: 8
    },
    {
        id: 'executive-secretary',
        title: 'Executive Secretary',
        slug: 'executive-secretary',
        category: 'admin',
        aliases: ['Corporate Secretary', 'Executive Office Secretary'],
        averageSalary: 68000,
        growthRate: 6
    },
    {
        id: 'personal-assistant',
        title: 'Personal Assistant',
        slug: 'personal-assistant',
        category: 'admin',
        aliases: ['PA', 'Executive Personal Assistant'],
        averageSalary: 58000,
        growthRate: 8
    },
    {
        id: 'administrative-manager',
        title: 'Administrative Manager',
        slug: 'administrative-manager',
        category: 'admin',
        aliases: ['Office Manager', 'Admin Services Manager'],
        averageSalary: 62000,
        growthRate: 8
    },
    {
        id: 'receptionist-2',
        title: 'Receptionist',
        slug: 'receptionist-2',
        category: 'admin',
        aliases: ['Front Desk Receptionist', 'Office Receptionist'],
        averageSalary: 36000,
        growthRate: 4
    },
    {
        id: 'virtual-assistant',
        title: 'Virtual Assistant',
        slug: 'virtual-assistant',
        category: 'admin',
        aliases: ['VA', 'Remote Administrative Assistant'],
        averageSalary: 48000,
        growthRate: 14
    },
    {
        id: 'file-clerk',
        title: 'File Clerk',
        slug: 'file-clerk',
        category: 'admin',
        aliases: ['Records Clerk', 'File Management Clerk'],
        averageSalary: 32000,
        growthRate: -4
    },

    // Customer Service - Support Ops (8 jobs)
    {
        id: 'customer-success-manager-2',
        title: 'Customer Success Manager',
        slug: 'customer-success-manager-2',
        category: 'customer-service',
        aliases: ['CSM', 'Client Success Manager'],
        averageSalary: 82000,
        growthRate: 18
    },
    {
        id: 'customer-onboarding-specialist',
        title: 'Customer Onboarding Specialist',
        slug: 'customer-onboarding-specialist',
        category: 'customer-service',
        aliases: ['Onboarding Specialist', 'Client Onboarding Manager'],
        averageSalary: 62000,
        growthRate: 16
    },
    {
        id: 'customer-retention-specialist',
        title: 'Customer Retention Specialist',
        slug: 'customer-retention-specialist',
        category: 'customer-service',
        aliases: ['Retention Specialist', 'Customer Churn Specialist'],
        averageSalary: 58000,
        growthRate: 14
    },
    {
        id: 'customer-experience-manager',
        title: 'Customer Experience Manager',
        slug: 'customer-experience-manager',
        category: 'customer-service',
        aliases: ['CX Manager', 'Client Experience Manager'],
        averageSalary: 95000,
        growthRate: 20
    },
    {
        id: 'technical-customer-support',
        title: 'Technical Customer Support',
        slug: 'technical-customer-support',
        category: 'customer-service',
        aliases: ['Technical Support Representative', 'IT Support Specialist'],
        averageSalary: 55000,
        growthRate: 14
    },
    {
        id: 'customer-service-trainer',
        title: 'Customer Service Trainer',
        slug: 'customer-service-trainer',
        category: 'customer-service',
        aliases: ['CS Trainer', 'Support Training Specialist'],
        averageSalary: 62000,
        growthRate: 12
    },
    {
        id: 'call-center-representative',
        title: 'Call Center Representative',
        slug: 'call-center-representative',
        category: 'customer-service',
        aliases: ['Call Center Agent', 'Inbound Call Representative'],
        averageSalary: 38000,
        growthRate: 6
    },
    {
        id: 'customer-service-quality-analyst',
        title: 'Customer Service Quality Analyst',
        slug: 'customer-service-quality-analyst',
        category: 'customer-service',
        aliases: ['QA Analyst', 'Quality Assurance Specialist'],
        averageSalary: 52000,
        growthRate: 12
    },

    // Design - Visual & Creative (8 jobs)
    {
        id: 'graphic-designer-2',
        title: 'Graphic Designer',
        slug: 'graphic-designer-2',
        category: 'design',
        aliases: ['Graphics Designer', 'Visual Designer'],
        averageSalary: 58000,
        growthRate: 10
    },
    {
        id: 'motion-graphics-designer',
        title: 'Motion Graphics Designer',
        slug: 'motion-graphics-designer',
        category: 'design',
        aliases: ['Motion Designer', 'Animation Designer'],
        averageSalary: 75000,
        growthRate: 16
    },
    {
        id: 'brand-identity-designer',
        title: 'Brand Identity Designer',
        slug: 'brand-identity-designer',
        category: 'design',
        aliases: ['Brand Designer', 'Identity Designer'],
        averageSalary: 72000,
        growthRate: 14
    },
    {
        id: 'print-designer',
        title: 'Print Designer',
        slug: 'print-designer',
        category: 'design',
        aliases: ['Print Media Designer', 'Publication Designer'],
        averageSalary: 55000,
        growthRate: 4
    },
    {
        id: 'packaging-designer',
        title: 'Packaging Designer',
        slug: 'packaging-designer',
        category: 'design',
        aliases: ['Package Designer', 'Product Packaging Designer'],
        averageSalary: 62000,
        growthRate: 8
    },
    {
        id: 'illustration-specialist',
        title: 'Illustration Specialist',
        slug: 'illustration-specialist',
        category: 'design',
        aliases: ['Illustrator', 'Digital Illustrator'],
        averageSalary: 58000,
        growthRate: 10
    },
    {
        id: 'design-systems-specialist',
        title: 'Design Systems Specialist',
        slug: 'design-systems-specialist',
        category: 'design',
        aliases: ['Design System Designer', 'Component Library Designer'],
        averageSalary: 105000,
        growthRate: 20
    },
    {
        id: 'creative-art-director',
        title: 'Creative Art Director',
        slug: 'creative-art-director',
        category: 'design',
        aliases: ['Art Director', 'Creative Director'],
        averageSalary: 125000,
        growthRate: 12
    },

    // Engineering - Technical (10 jobs)
    {
        id: 'civil-engineer-2',
        title: 'Civil Engineer',
        slug: 'civil-engineer-2',
        category: 'engineering',
        aliases: ['Civil Engineering Engineer', 'Infrastructure Engineer'],
        averageSalary: 95000,
        growthRate: 8
    },
    {
        id: 'mechanical-engineer-2',
        title: 'Mechanical Engineer',
        slug: 'mechanical-engineer-2',
        category: 'engineering',
        aliases: ['ME', 'Mechanical Engineering Engineer'],
        averageSalary: 98000,
        growthRate: 10
    },
    {
        id: 'electrical-engineer-2',
        title: 'Electrical Engineer',
        slug: 'electrical-engineer-2',
        category: 'engineering',
        aliases: ['EE', 'Electrical Engineering Engineer'],
        averageSalary: 102000,
        growthRate: 10
    },
    {
        id: 'chemical-engineer',
        title: 'Chemical Engineer',
        slug: 'chemical-engineer',
        category: 'engineering',
        aliases: ['ChemE', 'Process Engineer'],
        averageSalary: 108000,
        growthRate: 10
    },
    {
        id: 'industrial-engineer',
        title: 'Industrial Engineer',
        slug: 'industrial-engineer',
        category: 'engineering',
        aliases: ['IE', 'Manufacturing Engineer'],
        averageSalary: 92000,
        growthRate: 12
    },
    {
        id: 'environmental-engineer',
        title: 'Environmental Engineer',
        slug: 'environmental-engineer',
        category: 'engineering',
        aliases: ['Environmental Engineering Engineer', 'Green Engineer'],
        averageSalary: 98000,
        growthRate: 14
    },
    {
        id: 'biomedical-engineer',
        title: 'Biomedical Engineer',
        slug: 'biomedical-engineer',
        category: 'engineering',
        aliases: ['BME', 'Medical Equipment Engineer'],
        averageSalary: 105000,
        growthRate: 16
    },
    {
        id: 'aerospace-engineer',
        title: 'Aerospace Engineer',
        slug: 'aerospace-engineer',
        category: 'engineering',
        aliases: ['Aeronautical Engineer', 'Astronautical Engineer'],
        averageSalary: 125000,
        growthRate: 10
    },
    {
        id: 'structural-engineer',
        title: 'Structural Engineer',
        slug: 'structural-engineer',
        category: 'engineering',
        aliases: ['Structural Engineering Engineer', 'Building Engineer'],
        averageSalary: 95000,
        growthRate: 8
    },
    {
        id: 'project-engineer',
        title: 'Project Engineer',
        slug: 'project-engineer',
        category: 'engineering',
        aliases: ['Engineering Project Manager', 'Project Engineering Manager'],
        averageSalary: 92000,
        growthRate: 12
    },

    // Legal - Corporate & Compliance (6 jobs)
    {
        id: 'corporate-lawyer',
        title: 'Corporate Lawyer',
        slug: 'corporate-lawyer',
        category: 'legal',
        aliases: ['Corporate Attorney', 'Business Lawyer'],
        averageSalary: 155000,
        growthRate: 10
    },
    {
        id: 'compliance-officer-2',
        title: 'Compliance Officer',
        slug: 'compliance-officer-2',
        category: 'legal',
        aliases: ['Compliance Manager', 'Regulatory Compliance Officer'],
        averageSalary: 95000,
        growthRate: 14
    },
    {
        id: 'contracts-administrator',
        title: 'Contracts Administrator',
        slug: 'contracts-administrator',
        category: 'legal',
        aliases: ['Contract Administrator', 'Contracts Manager'],
        averageSalary: 78000,
        growthRate: 12
    },
    {
        id: 'legal-analyst',
        title: 'Legal Analyst',
        slug: 'legal-analyst',
        category: 'legal',
        aliases: ['Legal Research Analyst', 'Law Analyst'],
        averageSalary: 82000,
        growthRate: 12
    },
    {
        id: 'paralegal-2',
        title: 'Paralegal',
        slug: 'paralegal-2',
        category: 'legal',
        aliases: ['Legal Assistant', 'Paralegal Assistant'],
        averageSalary: 58000,
        growthRate: 12
    },
    {
        id: 'intellectual-property-specialist',
        title: 'Intellectual Property Specialist',
        slug: 'intellectual-property-specialist',
        category: 'legal',
        aliases: ['IP Specialist', 'Patent Specialist'],
        averageSalary: 105000,
        growthRate: 14
    },

    // Education - Teaching & Training (5 jobs)
    {
        id: 'special-education-teacher',
        title: 'Special Education Teacher',
        slug: 'special-education-teacher',
        category: 'education',
        aliases: ['SPED Teacher', 'Special Needs Teacher'],
        averageSalary: 62000,
        growthRate: 10
    },
    {
        id: 'curriculum-developer-2',
        title: 'Curriculum Developer',
        slug: 'curriculum-developer-2',
        category: 'education',
        aliases: ['Instructional Coordinator', 'Curriculum Designer'],
        averageSalary: 72000,
        growthRate: 12
    },
    {
        id: 'instructional-designer-2',
        title: 'Instructional Designer',
        slug: 'instructional-designer-2',
        category: 'education',
        aliases: ['Learning Designer', 'Training Developer'],
        averageSalary: 78000,
        growthRate: 16
    },
    {
        id: 'educational-consultant',
        title: 'Educational Consultant',
        slug: 'educational-consultant',
        category: 'education',
        aliases: ['Education Consultant', 'Academic Consultant'],
        averageSalary: 82000,
        growthRate: 14
    },
    {
        id: 'corporate-trainer-2',
        title: 'Corporate Trainer',
        slug: 'corporate-trainer-2',
        category: 'education',
        aliases: ['Professional Development Trainer', 'Business Trainer'],
        averageSalary: 68000,
        growthRate: 14
    },

    // Real Estate - Property & Sales (5 jobs)
    {
        id: 'real-estate-appraiser',
        title: 'Real Estate Appraiser',
        slug: 'real-estate-appraiser',
        category: 'real-estate',
        aliases: ['Property Appraiser', 'Real Estate Valuer'],
        averageSalary: 62000,
        growthRate: 8
    },
    {
        id: 'property-manager-2',
        title: 'Property Manager',
        slug: 'property-manager-2',
        category: 'real-estate',
        aliases: ['Real Estate Property Manager', 'Rental Property Manager'],
        averageSalary: 58000,
        growthRate: 10
    },
    {
        id: 'real-estate-broker-2',
        title: 'Real Estate Broker',
        slug: 'real-estate-broker-2',
        category: 'real-estate',
        aliases: ['Real Estate Brokerage', 'Broker Associate'],
        averageSalary: 85000,
        growthRate: 10
    },
    {
        id: 'leasing-agent',
        title: 'Leasing Agent',
        slug: 'leasing-agent',
        category: 'real-estate',
        aliases: ['Leasing Consultant', 'Rental Agent'],
        averageSalary: 42000,
        growthRate: 10
    },
    {
        id: 'real-estate-investor',
        title: 'Real Estate Investor',
        slug: 'real-estate-investor',
        category: 'real-estate',
        aliases: ['Property Investor', 'Real Estate Entrepreneur'],
        averageSalary: 95000,
        growthRate: 12
    },

    // Skilled Trades - Construction (5 jobs)
    {
        id: 'electrician-2',
        title: 'Electrician',
        slug: 'electrician-2',
        category: 'skilled-trades',
        aliases: ['Electrical Technician', 'Journeyman Electrician'],
        averageSalary: 62000,
        growthRate: 10
    },
    {
        id: 'plumber-2',
        title: 'Plumber',
        slug: 'plumber-2',
        category: 'skilled-trades',
        aliases: ['Plumbing Technician', 'Journeyman Plumber'],
        averageSalary: 58000,
        growthRate: 8
    },
    {
        id: 'hvac-technician-2',
        title: 'HVAC Technician',
        slug: 'hvac-technician-2',
        category: 'skilled-trades',
        aliases: ['HVAC Tech', 'Heating and Cooling Technician'],
        averageSalary: 55000,
        growthRate: 10
    },
    {
        id: 'carpenter-2',
        title: 'Carpenter',
        slug: 'carpenter-2',
        category: 'skilled-trades',
        aliases: ['Construction Carpenter', 'Finish Carpenter'],
        averageSalary: 52000,
        growthRate: 8
    },
    {
        id: 'welder-2',
        title: 'Welder',
        slug: 'welder-2',
        category: 'skilled-trades',
        aliases: ['Welding Technician', 'Certified Welder'],
        averageSalary: 48000,
        growthRate: 6
    },

    // Hospitality - Food & Beverage (5 jobs)
    {
        id: 'executive-chef',
        title: 'Executive Chef',
        slug: 'executive-chef',
        category: 'hospitality',
        aliases: ['Head Chef', 'Kitchen Manager'],
        averageSalary: 68000,
        growthRate: 10
    },
    {
        id: 'sous-chef',
        title: 'Sous Chef',
        slug: 'sous-chef',
        category: 'hospitality',
        aliases: ['Assistant Chef', 'Second Chef'],
        averageSalary: 52000,
        growthRate: 10
    },
    {
        id: 'restaurant-manager-2',
        title: 'Restaurant Manager',
        slug: 'restaurant-manager-2',
        category: 'hospitality',
        aliases: ['Restaurant General Manager', 'Food Service Manager'],
        averageSalary: 58000,
        growthRate: 12
    },
    {
        id: 'hotel-manager-2',
        title: 'Hotel Manager',
        slug: 'hotel-manager-2',
        category: 'hospitality',
        aliases: ['Hotel General Manager', 'Hospitality Manager'],
        averageSalary: 65000,
        growthRate: 10
    },
    {
        id: 'event-coordinator-2',
        title: 'Event Coordinator',
        slug: 'event-coordinator-2',
        category: 'hospitality',
        aliases: ['Event Planning Coordinator', 'Events Coordinator'],
        averageSalary: 48000,
        growthRate: 14
    },

    // Transportation - Logistics (5 jobs)
    {
        id: 'logistics-coordinator-2',
        title: 'Logistics Coordinator',
        slug: 'logistics-coordinator-2',
        category: 'transportation',
        aliases: ['Logistics Planner', 'Supply Chain Coordinator'],
        averageSalary: 52000,
        growthRate: 12
    },
    {
        id: 'supply-chain-manager',
        title: 'Supply Chain Manager',
        slug: 'supply-chain-manager',
        category: 'transportation',
        aliases: ['Supply Chain Management', 'Logistics Manager'],
        averageSalary: 98000,
        growthRate: 16
    },
    {
        id: 'freight-forwarder',
        title: 'Freight Forwarder',
        slug: 'freight-forwarder',
        category: 'transportation',
        aliases: ['Freight Broker', 'Cargo Agent'],
        averageSalary: 58000,
        growthRate: 10
    },
    {
        id: 'dispatcher',
        title: 'Dispatcher',
        slug: 'dispatcher',
        category: 'transportation',
        aliases: ['Service Dispatcher', 'Transportation Dispatcher'],
        averageSalary: 42000,
        growthRate: 8
    },
    {
        id: 'warehouse-manager',
        title: 'Warehouse Manager',
        slug: 'warehouse-manager',
        category: 'transportation',
        aliases: ['Distribution Center Manager', 'Warehouse Supervisor'],
        averageSalary: 62000,
        growthRate: 10
    },

    // ========== BATCH 17: 100 New Jobs ==========

    // Technology - Cloud & DevOps (12 jobs)
    {
        id: 'aws-cloud-architect',
        title: 'AWS Cloud Architect',
        slug: 'aws-cloud-architect',
        category: 'technology',
        aliases: ['Amazon Web Services Architect', 'AWS Solutions Architect'],
        averageSalary: 155000,
        growthRate: 25
    },
    {
        id: 'azure-cloud-architect',
        title: 'Azure Cloud Architect',
        slug: 'azure-cloud-architect',
        category: 'technology',
        aliases: ['Microsoft Azure Architect', 'Azure Solutions Architect'],
        averageSalary: 150000,
        growthRate: 24
    },
    {
        id: 'gcp-cloud-architect',
        title: 'GCP Cloud Architect',
        slug: 'gcp-cloud-architect',
        category: 'technology',
        aliases: ['Google Cloud Architect', 'GCP Solutions Architect'],
        averageSalary: 152000,
        growthRate: 26
    },
    {
        id: 'kubernetes-administrator',
        title: 'Kubernetes Administrator',
        slug: 'kubernetes-administrator',
        category: 'technology',
        aliases: ['K8s Admin', 'Kubernetes Engineer'],
        averageSalary: 145000,
        growthRate: 28
    },
    {
        id: 'docker-specialist',
        title: 'Docker Specialist',
        slug: 'docker-specialist',
        category: 'technology',
        aliases: ['Containerization Engineer', 'Docker Engineer'],
        averageSalary: 135000,
        growthRate: 22
    },
    {
        id: 'terraform-engineer',
        title: 'Terraform Engineer',
        slug: 'terraform-engineer',
        category: 'technology',
        aliases: ['Infrastructure as Code Engineer', 'IaC Developer'],
        averageSalary: 142000,
        growthRate: 24
    },
    {
        id: 'site-reliability-engineer-2',
        title: 'Site Reliability Engineer',
        slug: 'site-reliability-engineer-2',
        category: 'technology',
        aliases: ['SRE', 'Site Reliability Engineering'],
        averageSalary: 150000,
        growthRate: 26
    },
    {
        id: 'devsecops-engineer',
        title: 'DevSecOps Engineer',
        slug: 'devsecops-engineer',
        category: 'technology',
        aliases: ['DevSecOps Specialist', 'Security DevOps Engineer'],
        averageSalary: 148000,
        growthRate: 28
    },
    {
        id: 'cloud-security-engineer-2',
        title: 'Cloud Security Engineer',
        slug: 'cloud-security-engineer-2',
        category: 'technology',
        aliases: ['Cloud Security Specialist', 'Cloud Security Architect'],
        averageSalary: 150000,
        growthRate: 28
    },
    {
        id: 'infrastructure-engineer-2',
        title: 'Infrastructure Engineer',
        slug: 'infrastructure-engineer-2',
        category: 'technology',
        aliases: ['IT Infrastructure Engineer', 'Infrastructure Specialist'],
        averageSalary: 125000,
        growthRate: 18
    },
    {
        id: 'platform-engineer',
        title: 'Platform Engineer',
        slug: 'platform-engineer',
        category: 'technology',
        aliases: ['Platform Development Engineer', 'Internal Developer Platform'],
        averageSalary: 145000,
        growthRate: 30
    },
    {
        id: 'chaos-engineer',
        title: 'Chaos Engineer',
        slug: 'chaos-engineer',
        category: 'technology',
        aliases: ['Chaos Engineering Specialist', 'Resilience Engineer'],
        averageSalary: 148000,
        growthRate: 28
    },

    // Marketing - Content & Brand (10 jobs)
    {
        id: 'content-marketing-director',
        title: 'Content Marketing Director',
        slug: 'content-marketing-director',
        category: 'marketing',
        aliases: ['Director of Content Marketing', 'Head of Content'],
        averageSalary: 135000,
        growthRate: 18
    },
    {
        id: 'brand-strategist',
        title: 'Brand Strategist',
        slug: 'brand-strategist',
        category: 'marketing',
        aliases: ['Brand Strategy Consultant', 'Brand Planning Director'],
        averageSalary: 105000,
        growthRate: 16
    },
    {
        id: 'content-writer-2',
        title: 'Content Writer',
        slug: 'content-writer-2',
        category: 'marketing',
        aliases: ['Web Content Writer', 'Digital Content Writer'],
        averageSalary: 65000,
        growthRate: 14
    },
    {
        id: 'technical-writer-2',
        title: 'Technical Writer',
        slug: 'technical-writer-2',
        category: 'marketing',
        aliases: ['Technical Documentation Writer', 'Technical Communicator'],
        averageSalary: 82000,
        growthRate: 12
    },
    {
        id: 'copy-editor',
        title: 'Copy Editor',
        slug: 'copy-editor',
        category: 'marketing',
        aliases: ['Editor', 'Content Editor'],
        averageSalary: 58000,
        growthRate: 8
    },
    {
        id: 'brand-manager-2',
        title: 'Brand Manager',
        slug: 'brand-manager-2',
        category: 'marketing',
        aliases: ['Product Brand Manager', 'Brand Marketing Manager'],
        averageSalary: 105000,
        growthRate: 14
    },
    {
        id: 'brand-ambassador',
        title: 'Brand Ambassador',
        slug: 'brand-ambassador',
        category: 'marketing',
        aliases: ['Brand Representative', 'Brand Advocate'],
        averageSalary: 48000,
        growthRate: 12
    },
    {
        id: 'public-relations-specialist-2',
        title: 'Public Relations Specialist',
        slug: 'public-relations-specialist-2',
        category: 'marketing',
        aliases: ['PR Specialist', 'Public Relations Coordinator'],
        averageSalary: 68000,
        growthRate: 10
    },
    {
        id: 'media-relations-manager',
        title: 'Media Relations Manager',
        slug: 'media-relations-manager',
        category: 'marketing',
        aliases: ['PR Manager', 'Communications Manager'],
        averageSalary: 92000,
        growthRate: 12
    },
    {
        id: 'content-strategist-2',
        title: 'Content Strategist',
        slug: 'content-strategist-2',
        category: 'marketing',
        aliases: ['Content Strategy Manager', 'Digital Content Strategist'],
        averageSalary: 95000,
        growthRate: 18
    },

    // Sales - Channel & Partnerships (8 jobs)
    {
        id: 'channel-sales-manager',
        title: 'Channel Sales Manager',
        slug: 'channel-sales-manager',
        category: 'sales',
        aliases: ['Channel Partner Manager', 'Indirect Sales Manager'],
        averageSalary: 115000,
        growthRate: 14
    },
    {
        id: 'partnership-manager',
        title: 'Partnership Manager',
        slug: 'partnership-manager',
        category: 'sales',
        aliases: ['Strategic Partnerships Manager', 'Partner Development Manager'],
        averageSalary: 108000,
        growthRate: 16
    },
    {
        id: 'alliance-manager',
        title: 'Alliance Manager',
        slug: 'alliance-manager',
        category: 'sales',
        aliases: ['Strategic Alliance Manager', 'Business Alliance Manager'],
        averageSalary: 105000,
        growthRate: 14
    },
    {
        id: 'channel-marketing-manager',
        title: 'Channel Marketing Manager',
        slug: 'channel-marketing-manager',
        category: 'sales',
        aliases: ['Channel Marketing Specialist', 'Partner Marketing Manager'],
        averageSalary: 105000,
        growthRate: 14
    },
    {
        id: 'regional-sales-manager-2',
        title: 'Regional Sales Manager',
        slug: 'regional-sales-manager-2',
        category: 'sales',
        aliases: ['RSM', 'Area Sales Manager'],
        averageSalary: 110000,
        growthRate: 12
    },
    {
        id: 'national-sales-manager',
        title: 'National Sales Manager',
        slug: 'national-sales-manager',
        category: 'sales',
        aliases: ['NSM', 'Country Sales Manager'],
        averageSalary: 145000,
        growthRate: 12
    },
    {
        id: 'international-sales-manager',
        title: 'International Sales Manager',
        slug: 'international-sales-manager',
        category: 'sales',
        aliases: ['Global Sales Manager', 'Export Sales Manager'],
        averageSalary: 135000,
        growthRate: 14
    },
    {
        id: 'field-sales-manager',
        title: 'Field Sales Manager',
        slug: 'field-sales-manager',
        category: 'sales',
        aliases: ['Outside Sales Manager', 'Field Sales Director'],
        averageSalary: 115000,
        growthRate: 12
    },

    // Healthcare - Allied Health (8 jobs)
    {
        id: 'medical-assistant-2',
        title: 'Medical Assistant',
        slug: 'medical-assistant-2',
        category: 'healthcare',
        aliases: ['Certified Medical Assistant', 'Clinical Medical Assistant'],
        averageSalary: 42000,
        growthRate: 18
    },
    {
        id: 'pharmacy-technician',
        title: 'Pharmacy Technician',
        slug: 'pharmacy-technician',
        category: 'healthcare',
        aliases: ['Pharmacy Tech', 'Certified Pharmacy Technician'],
        averageSalary: 40000,
        growthRate: 10
    },
    {
        id: 'medical-technologist',
        title: 'Medical Technologist',
        slug: 'medical-technologist',
        category: 'healthcare',
        aliases: ['Clinical Laboratory Scientist', 'Medical Lab Tech'],
        averageSalary: 58000,
        growthRate: 12
    },
    {
        id: 'phlebotomist',
        title: 'Phlebotomist',
        slug: 'phlebotomist',
        category: 'healthcare',
        aliases: ['Phlebotomy Technician', 'Blood Draw Specialist'],
        averageSalary: 38000,
        growthRate: 14
    },
    {
        id: 'medical-lab-technician',
        title: 'Medical Lab Technician',
        slug: 'medical-lab-technician',
        category: 'healthcare',
        aliases: ['MLT', 'Clinical Laboratory Technician'],
        averageSalary: 48000,
        growthRate: 12
    },
    {
        id: 'radiation-therapist',
        title: 'Radiation Therapist',
        slug: 'radiation-therapist',
        category: 'healthcare',
        aliases: ['Radiation Therapy Technician', 'Radiation Oncology Therapist'],
        averageSalary: 92000,
        growthRate: 14
    },
    {
        id: 'nuclear-medicine-technologist',
        title: 'Nuclear Medicine Technologist',
        slug: 'nuclear-medicine-technologist',
        category: 'healthcare',
        aliases: ['Nuclear Med Tech', 'Nuclear Medicine Technician'],
        averageSalary: 82000,
        growthRate: 12
    },
    {
        id: 'medical-records-technician',
        title: 'Medical Records Technician',
        slug: 'medical-records-technician',
        category: 'healthcare',
        aliases: ['Health Information Technician', 'Medical Records Clerk'],
        averageSalary: 42000,
        growthRate: 14
    },

    // Finance - Banking & Lending (8 jobs)
    {
        id: 'loan-officer',
        title: 'Loan Officer',
        slug: 'loan-officer',
        category: 'finance',
        aliases: ['Mortgage Loan Officer', 'Lending Officer'],
        averageSalary: 68000,
        growthRate: 10
    },
    {
        id: 'mortgage-broker',
        title: 'Mortgage Broker',
        slug: 'mortgage-broker',
        category: 'finance',
        aliases: ['Mortgage Loan Broker', 'Mortgage Originator'],
        averageSalary: 85000,
        growthRate: 12
    },
    {
        id: 'bank-teller',
        title: 'Bank Teller',
        slug: 'bank-teller',
        category: 'finance',
        aliases: ['Teller', 'Bank Customer Service Representative'],
        averageSalary: 36000,
        growthRate: -8
    },
    {
        id: 'personal-banker',
        title: 'Personal Banker',
        slug: 'personal-banker',
        category: 'finance',
        aliases: ['Retail Banker', 'Financial Services Representative'],
        averageSalary: 52000,
        growthRate: 6
    },
    {
        id: 'branch-manager',
        title: 'Branch Manager',
        slug: 'branch-manager',
        category: 'finance',
        aliases: ['Bank Branch Manager', 'Financial Center Manager'],
        averageSalary: 78000,
        growthRate: 8
    },
    {
        id: 'underwriter-2',
        title: 'Underwriter',
        slug: 'underwriter-2',
        category: 'finance',
        aliases: ['Insurance Underwriter', 'Loan Underwriter'],
        averageSalary: 72000,
        growthRate: 6
    },
    {
        id: 'claims-adjuster',
        title: 'Claims Adjuster',
        slug: 'claims-adjuster',
        category: 'finance',
        aliases: ['Insurance Claims Adjuster', 'Claims Representative'],
        averageSalary: 62000,
        growthRate: 6
    },
    {
        id: 'insurance-agent',
        title: 'Insurance Agent',
        slug: 'insurance-agent',
        category: 'finance',
        aliases: ['Insurance Sales Agent', 'Insurance Producer'],
        averageSalary: 58000,
        growthRate: 8
    },

    // HR - Learning & Development (6 jobs)
    {
        id: 'learning-development-manager',
        title: 'Learning Development Manager',
        slug: 'learning-development-manager',
        category: 'hr',
        aliases: ['L&D Manager', 'Training and Development Manager'],
        averageSalary: 105000,
        growthRate: 16
    },
    {
        id: 'instructional-designer-3',
        title: 'Instructional Designer',
        slug: 'instructional-designer-3',
        category: 'hr',
        aliases: ['Learning Experience Designer', 'eLearning Developer'],
        averageSalary: 82000,
        growthRate: 18
    },
    {
        id: 'training-specialist',
        title: 'Training Specialist',
        slug: 'training-specialist',
        category: 'hr',
        aliases: ['Corporate Trainer', 'Training Coordinator'],
        averageSalary: 68000,
        growthRate: 14
    },
    {
        id: 'learning-analyst',
        title: 'Learning Analyst',
        slug: 'learning-analyst',
        category: 'hr',
        aliases: ['Training Analyst', 'L&D Analyst'],
        averageSalary: 78000,
        growthRate: 18
    },
    {
        id: 'knowledge-manager',
        title: 'Knowledge Manager',
        slug: 'knowledge-manager',
        category: 'hr',
        aliases: ['Knowledge Management Specialist', 'Information Manager'],
        averageSalary: 92000,
        growthRate: 14
    },
    {
        id: 'performance-consultant',
        title: 'Performance Consultant',
        slug: 'performance-consultant',
        category: 'hr',
        aliases: ['Performance Improvement Consultant', 'Organizational Consultant'],
        averageSalary: 95000,
        growthRate: 16
    },

    // Admin - Clerical (6 jobs)
    {
        id: 'data-entry-clerk',
        title: 'Data Entry Clerk',
        slug: 'data-entry-clerk',
        category: 'admin',
        aliases: ['Data Entry Specialist', 'Data Input Clerk'],
        averageSalary: 35000,
        growthRate: -6
    },
    {
        id: 'word-processor',
        title: 'Word Processor',
        slug: 'word-processor',
        category: 'admin',
        aliases: ['Document Processor', 'Typist'],
        averageSalary: 38000,
        growthRate: -8
    },
    {
        id: 'administrative-assistant-3',
        title: 'Administrative Assistant',
        slug: 'administrative-assistant-3',
        category: 'admin',
        aliases: ['Admin Assistant', 'Office Assistant'],
        averageSalary: 42000,
        growthRate: 6
    },
    {
        id: 'office-clerk',
        title: 'Office Clerk',
        slug: 'office-clerk',
        category: 'admin',
        aliases: ['General Office Clerk', 'Admin Clerk'],
        averageSalary: 34000,
        growthRate: 4
    },
    {
        id: 'mail-room-clerk',
        title: 'Mail Room Clerk',
        slug: 'mail-room-clerk',
        category: 'admin',
        aliases: ['Mail Clerk', 'Mailroom Associate'],
        averageSalary: 32000,
        growthRate: -4
    },
    {
        id: 'courier',
        title: 'Courier',
        slug: 'courier',
        category: 'admin',
        aliases: ['Delivery Courier', 'Messenger'],
        averageSalary: 34000,
        growthRate: -6
    },

    // Customer Service - Support (8 jobs)
    {
        id: 'customer-service-rep-2',
        title: 'Customer Service Rep',
        slug: 'customer-service-rep-2',
        category: 'customer-service',
        aliases: ['CSR', 'Customer Service Representative'],
        averageSalary: 38000,
        growthRate: 6
    },
    {
        id: 'call-center-agent',
        title: 'Call Center Agent',
        slug: 'call-center-agent',
        category: 'customer-service',
        aliases: ['Call Center Representative', 'Phone Agent'],
        averageSalary: 36000,
        growthRate: 6
    },
    {
        id: 'help-desk-technician',
        title: 'Help Desk Technician',
        slug: 'help-desk-technician',
        category: 'customer-service',
        aliases: ['IT Help Desk', 'Technical Support Technician'],
        averageSalary: 48000,
        growthRate: 12
    },
    {
        id: 'customer-care-specialist',
        title: 'Customer Care Specialist',
        slug: 'customer-care-specialist',
        category: 'customer-service',
        aliases: ['Customer Care Representative', 'Client Care Specialist'],
        averageSalary: 40000,
        growthRate: 8
    },
    {
        id: 'service-desk-analyst-2',
        title: 'Service Desk Analyst',
        slug: 'service-desk-analyst-2',
        category: 'customer-service',
        aliases: ['Service Desk Specialist', 'IT Service Desk'],
        averageSalary: 52000,
        growthRate: 12
    },
    {
        id: 'customer-support-rep-2',
        title: 'Customer Support Rep',
        slug: 'customer-support-rep-2',
        category: 'customer-service',
        aliases: ['Customer Support Representative', 'Support Agent'],
        averageSalary: 40000,
        growthRate: 8
    },
    {
        id: 'client-relations-manager',
        title: 'Client Relations Manager',
        slug: 'client-relations-manager',
        category: 'customer-service',
        aliases: ['Client Relations Director', 'Customer Relations Manager'],
        averageSalary: 72000,
        growthRate: 14
    },
    {
        id: 'account-coordinator',
        title: 'Account Coordinator',
        slug: 'account-coordinator',
        category: 'customer-service',
        aliases: ['Account Service Coordinator', 'Client Account Coordinator'],
        averageSalary: 48000,
        growthRate: 12
    },

    // Design - Digital & Web (8 jobs)
    {
        id: 'web-designer-2',
        title: 'Web Designer',
        slug: 'web-designer-2',
        category: 'design',
        aliases: ['Website Designer', 'Web Design Specialist'],
        averageSalary: 65000,
        growthRate: 14
    },
    {
        id: 'digital-designer',
        title: 'Digital Designer',
        slug: 'digital-designer',
        category: 'design',
        aliases: ['Digital Media Designer', 'Interactive Designer'],
        averageSalary: 72000,
        growthRate: 16
    },
    {
        id: 'email-designer',
        title: 'Email Designer',
        slug: 'email-designer',
        category: 'design',
        aliases: ['Email Marketing Designer', 'Newsletter Designer'],
        averageSalary: 62000,
        growthRate: 14
    },
    {
        id: 'production-artist',
        title: 'Production Artist',
        slug: 'production-artist',
        category: 'design',
        aliases: ['Graphic Production Artist', 'Pre-press Artist'],
        averageSalary: 52000,
        growthRate: 6
    },
    {
        id: 'visual-designer-2',
        title: 'Visual Designer',
        slug: 'visual-designer-2',
        category: 'design',
        aliases: ['Visual Design Specialist', 'UI Visual Designer'],
        averageSalary: 85000,
        growthRate: 18
    },
    {
        id: 'interaction-designer',
        title: 'Interaction Designer',
        slug: 'interaction-designer',
        category: 'design',
        aliases: ['IxD Designer', 'Interactive Design Specialist'],
        averageSalary: 95000,
        growthRate: 20
    },
    {
        id: 'product-designer-3',
        title: 'Product Designer',
        slug: 'product-designer-3',
        category: 'design',
        aliases: ['Digital Product Designer', 'Product Design Specialist'],
        averageSalary: 115000,
        growthRate: 22
    },
    {
        id: 'design-researcher',
        title: 'Design Researcher',
        slug: 'design-researcher',
        category: 'design',
        aliases: ['Design Research Specialist', 'User Research Designer'],
        averageSalary: 98000,
        growthRate: 20
    },

    // Engineering - Software (10 jobs)
    {
        id: 'software-architect-2',
        title: 'Software Architect',
        slug: 'software-architect-2',
        category: 'engineering',
        aliases: ['Application Architect', 'Solutions Architect'],
        averageSalary: 155000,
        growthRate: 18
    },
    {
        id: 'solutions-architect-2',
        title: 'Solutions Architect',
        slug: 'solutions-architect-2',
        category: 'engineering',
        aliases: ['Solution Architecture', 'Technical Solutions Architect'],
        averageSalary: 150000,
        growthRate: 18
    },
    {
        id: 'backend-engineer-2',
        title: 'Backend Engineer',
        slug: 'backend-engineer-2',
        category: 'engineering',
        aliases: ['Backend Developer', 'Server-Side Engineer'],
        averageSalary: 135000,
        growthRate: 20
    },
    {
        id: 'frontend-engineer-2',
        title: 'Frontend Engineer',
        slug: 'frontend-engineer-2',
        category: 'engineering',
        aliases: ['Frontend Developer', 'Client-Side Engineer'],
        averageSalary: 130000,
        growthRate: 20
    },
    {
        id: 'mobile-app-developer-2',
        title: 'Mobile App Developer',
        slug: 'mobile-app-developer-2',
        category: 'engineering',
        aliases: ['Mobile Developer', 'App Developer'],
        averageSalary: 125000,
        growthRate: 22
    },
    {
        id: 'ios-developer',
        title: 'iOS Developer',
        slug: 'ios-developer',
        category: 'engineering',
        aliases: ['iPhone Developer', 'iPad Developer'],
        averageSalary: 130000,
        growthRate: 22
    },
    {
        id: 'android-developer',
        title: 'Android Developer',
        slug: 'android-developer',
        category: 'engineering',
        aliases: ['Android App Developer', 'Mobile Android Developer'],
        averageSalary: 125000,
        growthRate: 20
    },
    {
        id: 'game-developer-2',
        title: 'Game Developer',
        slug: 'game-developer-2',
        category: 'engineering',
        aliases: ['Game Programmer', 'Video Game Developer'],
        averageSalary: 115000,
        growthRate: 18
    },
    {
        id: 'embedded-software-engineer',
        title: 'Embedded Software Engineer',
        slug: 'embedded-software-engineer',
        category: 'engineering',
        aliases: ['Embedded Systems Engineer', 'Firmware Engineer'],
        averageSalary: 125000,
        growthRate: 16
    },
    {
        id: 'qa-engineer-2',
        title: 'QA Engineer',
        slug: 'qa-engineer-2',
        category: 'engineering',
        aliases: ['Quality Assurance Engineer', 'Test Engineer'],
        averageSalary: 95000,
        growthRate: 16
    },

    // Legal - Corporate (6 jobs)
    {
        id: 'contracts-manager',
        title: 'Contracts Manager',
        slug: 'contracts-manager',
        category: 'legal',
        aliases: ['Contract Management', 'Commercial Contracts Manager'],
        averageSalary: 105000,
        growthRate: 14
    },
    {
        id: 'legal-counsel',
        title: 'Legal Counsel',
        slug: 'legal-counsel',
        category: 'legal',
        aliases: ['In-House Counsel', 'Corporate Counsel'],
        averageSalary: 145000,
        growthRate: 12
    },
    {
        id: 'compliance-manager-2',
        title: 'Compliance Manager',
        slug: 'compliance-manager-2',
        category: 'legal',
        aliases: ['Corporate Compliance Manager', 'Regulatory Affairs Manager'],
        averageSalary: 115000,
        growthRate: 16
    },
    {
        id: 'legal-assistant-2',
        title: 'Legal Assistant',
        slug: 'legal-assistant-2',
        category: 'legal',
        aliases: ['Legal Administrative Assistant', 'Law Office Assistant'],
        averageSalary: 52000,
        growthRate: 10
    },
    {
        id: 'legal-secretary',
        title: 'Legal Secretary',
        slug: 'legal-secretary',
        category: 'legal',
        aliases: ['Legal Administrative Secretary', 'Law Firm Secretary'],
        averageSalary: 48000,
        growthRate: 6
    },
    {
        id: 'regulatory-affairs-specialist',
        title: 'Regulatory Affairs Specialist',
        slug: 'regulatory-affairs-specialist',
        category: 'legal',
        aliases: ['Regulatory Specialist', 'Compliance Regulatory Specialist'],
        averageSalary: 85000,
        growthRate: 14
    },

    // Education - Higher Ed (4 jobs)
    {
        id: 'academic-advisor',
        title: 'Academic Advisor',
        slug: 'academic-advisor',
        category: 'education',
        aliases: ['Student Advisor', 'College Advisor'],
        averageSalary: 52000,
        growthRate: 12
    },
    {
        id: 'admissions-counselor',
        title: 'Admissions Counselor',
        slug: 'admissions-counselor',
        category: 'education',
        aliases: ['College Admissions Counselor', 'Enrollment Counselor'],
        averageSalary: 48000,
        growthRate: 10
    },
    {
        id: 'student-affairs-coordinator',
        title: 'Student Affairs Coordinator',
        slug: 'student-affairs-coordinator',
        category: 'education',
        aliases: ['Student Services Coordinator', 'Student Life Coordinator'],
        averageSalary: 45000,
        growthRate: 10
    },
    {
        id: 'career-services-advisor',
        title: 'Career Services Advisor',
        slug: 'career-services-advisor',
        category: 'education',
        aliases: ['Career Counselor', 'Employment Services Advisor'],
        averageSalary: 52000,
        growthRate: 12
    },

    // Real Estate - Sales & Leasing (6 jobs)
    {
        id: 'real-estate-agent-2',
        title: 'Real Estate Agent',
        slug: 'real-estate-agent-2',
        category: 'real-estate',
        aliases: ['Real Estate Sales Agent', 'Realtor'],
        averageSalary: 55000,
        growthRate: 10
    },
    {
        id: 'commercial-real-estate-agent',
        title: 'Commercial Real Estate Agent',
        slug: 'commercial-real-estate-agent',
        category: 'real-estate',
        aliases: ['Commercial Realtor', 'Commercial Property Agent'],
        averageSalary: 95000,
        growthRate: 12
    },
    {
        id: 'real-estate-appraiser-2',
        title: 'Real Estate Appraiser',
        slug: 'real-estate-appraiser-2',
        category: 'real-estate',
        aliases: ['Property Appraiser', 'Real Estate Valuer'],
        averageSalary: 65000,
        growthRate: 8
    },
    {
        id: 'property-manager-3',
        title: 'Property Manager',
        slug: 'property-manager-3',
        category: 'real-estate',
        aliases: ['Real Estate Property Manager', 'Rental Manager'],
        averageSalary: 62000,
        growthRate: 10
    },
    {
        id: 'facility-manager',
        title: 'Facility Manager',
        slug: 'facility-manager',
        category: 'real-estate',
        aliases: ['Facilities Manager', 'Building Manager'],
        averageSalary: 72000,
        growthRate: 12
    },
    {
        id: 'real-estate-marketing-manager',
        title: 'Real Estate Marketing Manager',
        slug: 'real-estate-marketing-manager',
        category: 'real-estate',
        aliases: ['Property Marketing Manager', 'Real Estate Marketing Director'],
        averageSalary: 85000,
        growthRate: 14
    },

    // Skilled Trades - Construction (6 jobs)
    {
        id: 'construction-manager',
        title: 'Construction Manager',
        slug: 'construction-manager',
        category: 'skilled-trades',
        aliases: ['Construction Superintendent', 'Site Manager'],
        averageSalary: 98000,
        growthRate: 12
    },
    {
        id: 'construction-supervisor',
        title: 'Construction Supervisor',
        slug: 'construction-supervisor',
        category: 'skilled-trades',
        aliases: ['Site Supervisor', 'Construction Foreman'],
        averageSalary: 72000,
        growthRate: 10
    },
    {
        id: 'construction-laborer',
        title: 'Construction Laborer',
        slug: 'construction-laborer',
        category: 'skilled-trades',
        aliases: ['Construction Worker', 'General Laborer'],
        averageSalary: 38000,
        growthRate: 8
    },
    {
        id: 'heavy-equipment-operator',
        title: 'Heavy Equipment Operator',
        slug: 'heavy-equipment-operator',
        category: 'skilled-trades',
        aliases: ['Equipment Operator', 'Heavy Machine Operator'],
        averageSalary: 52000,
        growthRate: 10
    },
    {
        id: 'construction-estimator',
        title: 'Construction Estimator',
        slug: 'construction-estimator',
        category: 'skilled-trades',
        aliases: ['Construction Cost Estimator', 'Project Estimator'],
        averageSalary: 72000,
        growthRate: 10
    },
    {
        id: 'project-superintendent',
        title: 'Project Superintendent',
        slug: 'project-superintendent',
        category: 'skilled-trades',
        aliases: ['Construction Superintendent', 'Project Superintendent Construction'],
        averageSalary: 85000,
        growthRate: 10
    },

    // Hospitality - Travel & Tourism (6 jobs)
    {
        id: 'travel-agent',
        title: 'Travel Agent',
        slug: 'travel-agent',
        category: 'hospitality',
        aliases: ['Travel Consultant', 'Travel Advisor'],
        averageSalary: 42000,
        growthRate: 6
    },
    {
        id: 'tour-guide',
        title: 'Tour Guide',
        slug: 'tour-guide',
        category: 'hospitality',
        aliases: ['Tour Manager', 'Tour Director'],
        averageSalary: 38000,
        growthRate: 10
    },
    {
        id: 'concierge',
        title: 'Concierge',
        slug: 'concierge',
        category: 'hospitality',
        aliases: ['Hotel Concierge', 'Guest Services Agent'],
        averageSalary: 38000,
        growthRate: 10
    },
    {
        id: 'reservation-agent',
        title: 'Reservation Agent',
        slug: 'reservation-agent',
        category: 'hospitality',
        aliases: ['Booking Agent', 'Reservation Clerk'],
        averageSalary: 36000,
        growthRate: 6
    },
    {
        id: 'flight-attendant',
        title: 'Flight Attendant',
        slug: 'flight-attendant',
        category: 'hospitality',
        aliases: ['Cabin Crew', 'Flight Steward'],
        averageSalary: 62000,
        growthRate: 12
    },
    {
        id: 'cruise-director',
        title: 'Cruise Director',
        slug: 'cruise-director',
        category: 'hospitality',
        aliases: ['Cruise Activities Director', 'Cruise Entertainment Director'],
        averageSalary: 68000,
        growthRate: 14
    },

    // Transportation - Delivery & Driving (6 jobs)
    {
        id: 'delivery-driver-2',
        title: 'Delivery Driver',
        slug: 'delivery-driver-2',
        category: 'transportation',
        aliases: ['Package Delivery Driver', 'Courier Driver'],
        averageSalary: 38000,
        growthRate: 6
    },
    {
        id: 'truck-driver',
        title: 'Truck Driver',
        slug: 'truck-driver',
        category: 'transportation',
        aliases: ['Commercial Truck Driver', 'CDL Driver'],
        averageSalary: 52000,
        growthRate: 8
    },
    {
        id: 'route-driver',
        title: 'Route Driver',
        slug: 'route-driver',
        category: 'transportation',
        aliases: ['Delivery Route Driver', 'Local Route Driver'],
        averageSalary: 42000,
        growthRate: 6
    },
    {
        id: 'bus-driver',
        title: 'Bus Driver',
        slug: 'bus-driver',
        category: 'transportation',
        aliases: ['Transit Bus Driver', 'School Bus Driver'],
        averageSalary: 42000,
        growthRate: 6
    },
    {
        id: 'taxi-driver',
        title: 'Taxi Driver',
        slug: 'taxi-driver',
        category: 'transportation',
        aliases: ['Cab Driver', 'Rideshare Driver'],
        averageSalary: 36000,
        growthRate: 4
    },
    {
        id: 'chauffeur',
        title: 'Chauffeur',
        slug: 'chauffeur',
        category: 'transportation',
        aliases: ['Private Driver', 'Executive Driver'],
        averageSalary: 48000,
        growthRate: 6
    },

    // ========== BATCH 18: 200 New Jobs ==========

    // Technology - Cybersecurity & Data (15 jobs)
    {
        id: 'cybersecurity-analyst-3',
        title: 'Cybersecurity Analyst',
        slug: 'cybersecurity-analyst-3',
        category: 'technology',
        aliases: ['Information Security Analyst', 'Cyber Security Specialist'],
        averageSalary: 115000,
        growthRate: 28
    },
    {
        id: 'security-architect',
        title: 'Security Architect',
        slug: 'security-architect',
        category: 'technology',
        aliases: ['Information Security Architect', 'Enterprise Security Architect'],
        averageSalary: 165000,
        growthRate: 26
    },
    {
        id: 'penetration-tester',
        title: 'Penetration Tester',
        slug: 'penetration-tester',
        category: 'technology',
        aliases: ['Ethical Hacker', 'Pen Test Engineer'],
        averageSalary: 125000,
        growthRate: 30
    },
    {
        id: 'security-consultant-2',
        title: 'Security Consultant',
        slug: 'security-consultant-2',
        category: 'technology',
        aliases: ['Information Security Consultant', 'Cybersecurity Consultant'],
        averageSalary: 135000,
        growthRate: 26
    },
    {
        id: 'information-security-manager',
        title: 'Information Security Manager',
        slug: 'information-security-manager',
        category: 'technology',
        aliases: ['InfoSec Manager', 'Security Manager'],
        averageSalary: 145000,
        growthRate: 24
    },
    {
        id: 'soc-analyst',
        title: 'SOC Analyst',
        slug: 'soc-analyst',
        category: 'technology',
        aliases: ['Security Operations Center Analyst', 'SOC Tier 1 Analyst'],
        averageSalary: 85000,
        growthRate: 26
    },
    {
        id: 'incident-responder',
        title: 'Incident Responder',
        slug: 'incident-responder',
        category: 'technology',
        aliases: ['Incident Response Analyst', 'CSIRT Analyst'],
        averageSalary: 105000,
        growthRate: 28
    },
    {
        id: 'malware-analyst',
        title: 'Malware Analyst',
        slug: 'malware-analyst',
        category: 'technology',
        aliases: ['Malware Reverse Engineer', 'Threat Analyst'],
        averageSalary: 120000,
        growthRate: 28
    },
    {
        id: 'data-engineer-3',
        title: 'Data Engineer',
        slug: 'data-engineer-3',
        category: 'technology',
        aliases: ['Big Data Engineer', 'Data Pipeline Engineer'],
        averageSalary: 135000,
        growthRate: 30
    },
    {
        id: 'data-scientist-3',
        title: 'Data Scientist',
        slug: 'data-scientist-3',
        category: 'technology',
        aliases: ['Data Science Specialist', 'Machine Learning Scientist'],
        averageSalary: 145000,
        growthRate: 32
    },
    {
        id: 'statistician-2',
        title: 'Statistician',
        slug: 'statistician-2',
        category: 'technology',
        aliases: ['Biostatistician', 'Applied Statistician'],
        averageSalary: 98000,
        growthRate: 28
    },
    {
        id: 'quantitative-analyst',
        title: 'Quantitative Analyst',
        slug: 'quantitative-analyst',
        category: 'technology',
        aliases: ['Quant', 'Quantitative Researcher'],
        averageSalary: 155000,
        growthRate: 22
    },
    {
        id: 'business-intelligence-analyst',
        title: 'Business Intelligence Analyst',
        slug: 'business-intelligence-analyst',
        category: 'technology',
        aliases: ['BI Analyst', 'Business Intelligence Specialist'],
        averageSalary: 92000,
        growthRate: 18
    },
    {
        id: 'data-visualization-specialist',
        title: 'Data Visualization Specialist',
        slug: 'data-visualization-specialist',
        category: 'technology',
        aliases: ['Data Viz Specialist', 'Visualization Developer'],
        averageSalary: 95000,
        growthRate: 22
    },
    {
        id: 'data-science-manager',
        title: 'Data Science Manager',
        slug: 'data-science-manager',
        category: 'technology',
        aliases: ['Head of Data Science', 'Lead Data Scientist'],
        averageSalary: 175000,
        growthRate: 28
    },

    // Marketing - Growth & Digital (15 jobs)
    {
        id: 'growth-marketer',
        title: 'Growth Marketer',
        slug: 'growth-marketer',
        category: 'marketing',
        aliases: ['Growth Hacker', 'Growth Marketing Specialist'],
        averageSalary: 95000,
        growthRate: 24
    },
    {
        id: 'growth-manager',
        title: 'Growth Manager',
        slug: 'growth-manager',
        category: 'marketing',
        aliases: ['Head of Growth', 'Growth Marketing Manager'],
        averageSalary: 125000,
        growthRate: 26
    },
    {
        id: 'seo-specialist-2',
        title: 'SEO Specialist',
        slug: 'seo-specialist-2',
        category: 'marketing',
        aliases: ['Search Engine Optimization Specialist', 'SEO Expert'],
        averageSalary: 72000,
        growthRate: 18
    },
    {
        id: 'seo-manager-2',
        title: 'SEO Manager',
        slug: 'seo-manager-2',
        category: 'marketing',
        aliases: ['Search Engine Optimization Manager', 'Head of SEO'],
        averageSalary: 98000,
        growthRate: 20
    },
    {
        id: 'sem-specialist',
        title: 'SEM Specialist',
        slug: 'sem-specialist',
        category: 'marketing',
        aliases: ['Search Engine Marketing Specialist', 'PPC Manager'],
        averageSalary: 68000,
        growthRate: 16
    },
    {
        id: 'digital-marketing-specialist-2',
        title: 'Digital Marketing Specialist',
        slug: 'digital-marketing-specialist-2',
        category: 'marketing',
        aliases: ['Online Marketing Specialist', 'Internet Marketing Specialist'],
        averageSalary: 65000,
        growthRate: 16
    },
    {
        id: 'digital-marketing-manager-2',
        title: 'Digital Marketing Manager',
        slug: 'digital-marketing-manager-2',
        category: 'marketing',
        aliases: ['Online Marketing Manager', 'Internet Marketing Manager'],
        averageSalary: 95000,
        growthRate: 18
    },
    {
        id: 'ecommerce-manager-2',
        title: 'Ecommerce Manager',
        slug: 'ecommerce-manager-2',
        category: 'marketing',
        aliases: ['E-commerce Manager', 'Online Store Manager'],
        averageSalary: 98000,
        growthRate: 20
    },
    {
        id: 'ecommerce-specialist',
        title: 'Ecommerce Specialist',
        slug: 'ecommerce-specialist',
        category: 'marketing',
        aliases: ['E-commerce Specialist', 'Online Sales Specialist'],
        averageSalary: 72000,
        growthRate: 18
    },
    {
        id: 'mobile-marketing-specialist',
        title: 'Mobile Marketing Specialist',
        slug: 'mobile-marketing-specialist',
        category: 'marketing',
        aliases: ['App Marketing Specialist', 'Mobile Advertising Specialist'],
        averageSalary: 75000,
        growthRate: 20
    },
    {
        id: 'app-store-optimization',
        title: 'ASO Specialist',
        slug: 'app-store-optimization',
        category: 'marketing',
        aliases: ['App Store Optimization Specialist', 'ASO Manager'],
        averageSalary: 82000,
        growthRate: 22
    },
    {
        id: 'viral-marketer',
        title: 'Viral Marketer',
        slug: 'viral-marketer',
        category: 'marketing',
        aliases: ['Viral Marketing Specialist', 'Social Viral Marketer'],
        averageSalary: 72000,
        growthRate: 22
    },
    {
        id: 'guerrilla-marketer',
        title: 'Guerrilla Marketer',
        slug: 'guerrilla-marketer',
        category: 'marketing',
        aliases: ['Guerrilla Marketing Specialist', 'Grassroots Marketing'],
        averageSalary: 68000,
        growthRate: 16
    },
    {
        id: 'community-manager-2',
        title: 'Community Manager',
        slug: 'community-manager-2',
        category: 'marketing',
        aliases: ['Online Community Manager', 'Social Community Manager'],
        averageSalary: 72000,
        growthRate: 18
    },
    {
        id: 'user-acquisition-specialist',
        title: 'User Acquisition Specialist',
        slug: 'user-acquisition-specialist',
        category: 'marketing',
        aliases: ['UA Specialist', 'User Acquisition Manager'],
        averageSalary: 92000,
        growthRate: 22
    },

    // Sales - Inside & Field (12 jobs)
    {
        id: 'inside-sales-representative-2',
        title: 'Inside Sales Representative',
        slug: 'inside-sales-representative-2',
        category: 'sales',
        aliases: ['Inside Sales Rep', 'Remote Sales Representative'],
        averageSalary: 52000,
        growthRate: 12
    },
    {
        id: 'inside-sales-manager-2',
        title: 'Inside Sales Manager',
        slug: 'inside-sales-manager-2',
        category: 'sales',
        aliases: ['Inside Sales Team Lead', 'Remote Sales Manager'],
        averageSalary: 92000,
        growthRate: 14
    },
    {
        id: 'outside-sales-representative-2',
        title: 'Outside Sales Representative',
        slug: 'outside-sales-representative-2',
        category: 'sales',
        aliases: ['Field Sales Representative', 'Outside Sales Rep'],
        averageSalary: 58000,
        growthRate: 10
    },
    {
        id: 'field-sales-representative',
        title: 'Field Sales Representative',
        slug: 'field-sales-representative',
        category: 'sales',
        aliases: ['Field Sales Rep', 'Territory Sales Representative'],
        averageSalary: 62000,
        growthRate: 12
    },
    {
        id: 'sales-support-administrator',
        title: 'Sales Support Administrator',
        slug: 'sales-support-administrator',
        category: 'sales',
        aliases: ['Sales Admin', 'Sales Support Specialist'],
        averageSalary: 48000,
        growthRate: 10
    },
    {
        id: 'sales-coordinator-2',
        title: 'Sales Coordinator',
        slug: 'sales-coordinator-2',
        category: 'sales',
        aliases: ['Sales Administration Coordinator', 'Sales Support Coordinator'],
        averageSalary: 46000,
        growthRate: 10
    },
    {
        id: 'bid-manager',
        title: 'Bid Manager',
        slug: 'bid-manager',
        category: 'sales',
        aliases: ['Proposal Manager', 'Bidding Manager'],
        averageSalary: 95000,
        growthRate: 14
    },
    {
        id: 'proposal-writer',
        title: 'Proposal Writer',
        slug: 'proposal-writer',
        category: 'sales',
        aliases: ['RFP Writer', 'Proposal Coordinator'],
        averageSalary: 72000,
        growthRate: 12
    },
    {
        id: 'quota-carrying-rep',
        title: 'Quota Carrying Rep',
        slug: 'quota-carrying-rep',
        category: 'sales',
        aliases: ['Sales Representative', 'Quota Bearing Sales Rep'],
        averageSalary: 55000,
        growthRate: 12
    },
    {
        id: 'sales-associate-2',
        title: 'Sales Associate',
        slug: 'sales-associate-2',
        category: 'sales',
        aliases: ['Retail Sales Associate', 'Sales Clerk'],
        averageSalary: 38000,
        growthRate: 8
    },
    {
        id: 'lead-generation-specialist',
        title: 'Lead Generation Specialist',
        slug: 'lead-generation-specialist',
        category: 'sales',
        aliases: ['Lead Gen Specialist', 'Lead Generation Rep'],
        averageSalary: 48000,
        growthRate: 14
    },
    {
        id: 'sales-veteran',
        title: 'Sales Veteran',
        slug: 'sales-veteran',
        category: 'sales',
        aliases: ['Experienced Sales Rep', 'Senior Sales Representative'],
        averageSalary: 72000,
        growthRate: 10
    },

    // Healthcare - Medical & Nursing (12 jobs)
    {
        id: 'registered-nurse-2',
        title: 'Registered Nurse',
        slug: 'registered-nurse-2',
        category: 'healthcare',
        aliases: ['RN', 'Staff Nurse'],
        averageSalary: 82000,
        growthRate: 12
    },
    {
        id: 'licensed-practical-nurse',
        title: 'Licensed Practical Nurse',
        slug: 'licensed-practical-nurse',
        category: 'healthcare',
        aliases: ['LPN', 'Practical Nurse'],
        averageSalary: 54000,
        growthRate: 10
    },
    {
        id: 'nurse-practitioner-2',
        title: 'Nurse Practitioner',
        slug: 'nurse-practitioner-2',
        category: 'healthcare',
        aliases: ['NP', 'Advanced Practice Nurse'],
        averageSalary: 125000,
        growthRate: 28
    },
    {
        id: 'clinical-nurse-specialist-2',
        title: 'Clinical Nurse Specialist',
        slug: 'clinical-nurse-specialist-2',
        category: 'healthcare',
        aliases: ['CNS', 'Advanced Practice Registered Nurse'],
        averageSalary: 115000,
        growthRate: 24
    },
    {
        id: 'nurse-anesthetist',
        title: 'Nurse Anesthetist',
        slug: 'nurse-anesthetist',
        category: 'healthcare',
        aliases: ['CRNA', 'Anesthesia Nurse'],
        averageSalary: 195000,
        growthRate: 26
    },
    {
        id: 'nurse-midwife-2',
        title: 'Nurse Midwife',
        slug: 'nurse-midwife-2',
        category: 'healthcare',
        aliases: ['CNM', 'Certified Nurse Midwife'],
        averageSalary: 115000,
        growthRate: 22
    },
    {
        id: 'travel-nurse',
        title: 'Travel Nurse',
        slug: 'travel-nurse',
        category: 'healthcare',
        aliases: ['Traveling Nurse', 'Contract Nurse'],
        averageSalary: 110000,
        growthRate: 20
    },
    {
        id: 'home-health-nurse',
        title: 'Home Health Nurse',
        slug: 'home-health-nurse',
        category: 'healthcare',
        aliases: ['Home Care Nurse', 'Visiting Nurse'],
        averageSalary: 72000,
        growthRate: 16
    },
    {
        id: 'hospitalist',
        title: 'Hospitalist',
        slug: 'hospitalist',
        category: 'healthcare',
        aliases: ['Hospital Medicine Physician', 'Inpatient Physician'],
        averageSalary: 215000,
        growthRate: 18
    },
    {
        id: 'emergency-physician',
        title: 'Emergency Physician',
        slug: 'emergency-physician',
        category: 'healthcare',
        aliases: ['ER Doctor', 'Emergency Medicine Physician'],
        averageSalary: 320000,
        growthRate: 16
    },
    {
        id: 'primary-care-physician',
        title: 'Primary Care Physician',
        slug: 'primary-care-physician',
        category: 'healthcare',
        aliases: ['Family Doctor', 'General Practitioner'],
        averageSalary: 235000,
        growthRate: 14
    },
    {
        id: 'medical-director',
        title: 'Medical Director',
        slug: 'medical-director',
        category: 'healthcare',
        aliases: ['Clinical Director', 'Medical Department Director'],
        averageSalary: 285000,
        growthRate: 16
    },

    // Finance - Corporate & Investment (12 jobs)
    {
        id: 'financial-analyst-2',
        title: 'Financial Analyst',
        slug: 'financial-analyst-2',
        category: 'finance',
        aliases: ['Corporate Financial Analyst', 'Finance Analyst'],
        averageSalary: 85000,
        growthRate: 12
    },
    {
        id: 'finance-manager-2',
        title: 'Finance Manager',
        slug: 'finance-manager-2',
        category: 'finance',
        aliases: ['Corporate Finance Manager', 'Financial Planning Manager'],
        averageSalary: 115000,
        growthRate: 14
    },
    {
        id: 'corporate-treasurer',
        title: 'Corporate Treasurer',
        slug: 'corporate-treasurer',
        category: 'finance',
        aliases: ['Treasurer', 'Corporate Treasury Manager'],
        averageSalary: 165000,
        growthRate: 12
    },
    {
        id: 'controller-2',
        title: 'Controller',
        slug: 'controller-2',
        category: 'finance',
        aliases: ['Corporate Controller', 'Financial Controller'],
        averageSalary: 135000,
        growthRate: 10
    },
    {
        id: 'chief-financial-officer-2',
        title: 'Chief Financial Officer',
        slug: 'chief-financial-officer-2',
        category: 'finance',
        aliases: ['CFO', 'Finance Director'],
        averageSalary: 285000,
        growthRate: 12
    },
    {
        id: 'equity-research-analyst',
        title: 'Equity Research Analyst',
        slug: 'equity-research-analyst',
        category: 'finance',
        aliases: ['Stock Research Analyst', 'Securities Analyst'],
        averageSalary: 115000,
        growthRate: 14
    },
    {
        id: 'fixed-income-analyst',
        title: 'Fixed Income Analyst',
        slug: 'fixed-income-analyst',
        category: 'finance',
        aliases: ['Bond Analyst', 'Credit Research Analyst'],
        averageSalary: 105000,
        growthRate: 12
    },
    {
        id: 'trader-2',
        title: 'Trader',
        slug: 'trader-2',
        category: 'finance',
        aliases: ['Securities Trader', 'Equity Trader'],
        averageSalary: 125000,
        growthRate: 10
    },
    {
        id: 'investment-banker',
        title: 'Investment Banker',
        slug: 'investment-banker',
        category: 'finance',
        aliases: ['IB Analyst', 'Investment Banking Analyst'],
        averageSalary: 155000,
        growthRate: 12
    },
    {
        id: 'wealth-manager-2',
        title: 'Wealth Manager',
        slug: 'wealth-manager-2',
        category: 'finance',
        aliases: ['Private Wealth Manager', 'Wealth Advisor'],
        averageSalary: 135000,
        growthRate: 14
    },
    {
        id: 'private-banker-2',
        title: 'Private Banker',
        slug: 'private-banker-2',
        category: 'finance',
        aliases: ['Private Banking Advisor', 'High Net Worth Banker'],
        averageSalary: 125000,
        growthRate: 12
    },
    {
        id: 'fund-manager',
        title: 'Fund Manager',
        slug: 'fund-manager',
        category: 'finance',
        aliases: ['Investment Fund Manager', 'Mutual Fund Manager'],
        averageSalary: 165000,
        growthRate: 12
    },

    // HR - Recruitment & Staffing (10 jobs)
    {
        id: 'technical-recruiter-2',
        title: 'Technical Recruiter',
        slug: 'technical-recruiter-2',
        category: 'hr',
        aliases: ['Tech Recruiter', 'IT Recruiter'],
        averageSalary: 68000,
        growthRate: 16
    },
    {
        id: 'executive-recruiter',
        title: 'Executive Recruiter',
        slug: 'executive-recruiter',
        category: 'hr',
        aliases: ['Headhunter', 'Executive Search Consultant'],
        averageSalary: 105000,
        growthRate: 14
    },
    {
        id: 'recruiter-2',
        title: 'Recruiter',
        slug: 'recruiter-2',
        category: 'hr',
        aliases: ['Talent Recruiter', 'Staffing Specialist'],
        averageSalary: 55000,
        growthRate: 14
    },
    {
        id: 'senior-recruiter',
        title: 'Senior Recruiter',
        slug: 'senior-recruiter',
        category: 'hr',
        aliases: ['Lead Recruiter', 'Principal Recruiter'],
        averageSalary: 72000,
        growthRate: 14
    },
    {
        id: 'recruiting-coordinator',
        title: 'Recruiting Coordinator',
        slug: 'recruiting-coordinator',
        category: 'hr',
        aliases: ['Recruitment Coordinator', 'Staffing Coordinator'],
        averageSalary: 48000,
        growthRate: 12
    },
    {
        id: 'talent-acquisition-specialist',
        title: 'Talent Acquisition Specialist',
        slug: 'talent-acquisition-specialist',
        category: 'hr',
        aliases: ['TA Specialist', 'Sourcing Specialist'],
        averageSalary: 62000,
        growthRate: 16
    },
    {
        id: 'sourcing-specialist',
        title: 'Sourcing Specialist',
        slug: 'sourcing-specialist',
        category: 'hr',
        aliases: ['Candidate Sourcing Specialist', 'Talent Sourcing Specialist'],
        averageSalary: 58000,
        growthRate: 18
    },
    {
        id: 'campus-recruiter',
        title: 'Campus Recruiter',
        slug: 'campus-recruiter',
        category: 'hr',
        aliases: ['College Recruiter', 'University Recruiter'],
        averageSalary: 62000,
        growthRate: 14
    },
    {
        id: 'staffing-manager',
        title: 'Staffing Manager',
        slug: 'staffing-manager',
        category: 'hr',
        aliases: ['Staffing Agency Manager', 'Recruitment Manager'],
        averageSalary: 78000,
        growthRate: 14
    },
    {
        id: 'recruitment-marketing-manager',
        title: 'Recruitment Marketing Manager',
        slug: 'recruitment-marketing-manager',
        category: 'hr',
        aliases: ['Talent Attraction Manager', 'Recruitment Marketing Lead'],
        averageSalary: 92000,
        growthRate: 18
    },

    // Admin - Clerical Support (10 jobs)
    {
        id: 'receptionist-3',
        title: 'Receptionist',
        slug: 'receptionist-3',
        category: 'admin',
        aliases: ['Front Desk Receptionist', 'Office Receptionist'],
        averageSalary: 35000,
        growthRate: 4
    },
    {
        id: 'front-desk-coordinator',
        title: 'Front Desk Coordinator',
        slug: 'front-desk-coordinator',
        category: 'admin',
        aliases: ['Front Office Coordinator', 'Reception Coordinator'],
        averageSalary: 38000,
        growthRate: 6
    },
    {
        id: 'office-administrator',
        title: 'Office Administrator',
        slug: 'office-administrator',
        category: 'admin',
        aliases: ['Office Admin', 'Administrative Coordinator'],
        averageSalary: 45000,
        growthRate: 6
    },
    {
        id: 'administrative-coordinator',
        title: 'Administrative Coordinator',
        slug: 'administrative-coordinator',
        category: 'admin',
        aliases: ['Admin Coordinator', 'Office Support Coordinator'],
        averageSalary: 42000,
        growthRate: 6
    },
    {
        id: 'clerk-2',
        title: 'Clerk',
        slug: 'clerk-2',
        category: 'admin',
        aliases: ['Office Clerk', 'Administrative Clerk'],
        averageSalary: 32000,
        growthRate: 4
    },
    {
        id: 'file-clerk-2',
        title: 'File Clerk',
        slug: 'file-clerk-2',
        category: 'admin',
        aliases: ['Records Clerk', 'Document Clerk'],
        averageSalary: 31000,
        growthRate: -4
    },
    {
        id: 'scanner-operator',
        title: 'Scanner Operator',
        slug: 'scanner-operator',
        category: 'admin',
        aliases: ['Document Scanner', 'Imaging Specialist'],
        averageSalary: 33000,
        growthRate: -6
    },
    {
        id: 'switchboard-operator',
        title: 'Switchboard Operator',
        slug: 'switchboard-operator',
        category: 'admin',
        aliases: ['Phone Operator', 'Receptionist Switchboard'],
        averageSalary: 32000,
        growthRate: -8
    },
    {
        id: 'mail-room-attendant',
        title: 'Mail Room Attendant',
        slug: 'mail-room-attendant',
        category: 'admin',
        aliases: ['Mailroom Attendant', 'Mail Clerk'],
        averageSalary: 31000,
        growthRate: -4
    },
    {
        id: 'general-office-assistant',
        title: 'General Office Assistant',
        slug: 'general-office-assistant',
        category: 'admin',
        aliases: ['Office Assistant', 'General Admin'],
        averageSalary: 36000,
        growthRate: 4
    },

    // Customer Service - Call Center (12 jobs)
    {
        id: 'call-center-manager-2',
        title: 'Call Center Manager',
        slug: 'call-center-manager-2',
        category: 'customer-service',
        aliases: ['Contact Center Manager', 'Call Centre Manager'],
        averageSalary: 72000,
        growthRate: 10
    },
    {
        id: 'call-center-supervisor',
        title: 'Call Center Supervisor',
        slug: 'call-center-supervisor',
        category: 'customer-service',
        aliases: ['Call Center Team Lead', 'Contact Center Supervisor'],
        averageSalary: 48000,
        growthRate: 10
    },
    {
        id: 'inbound-sales-representative',
        title: 'Inbound Sales Representative',
        slug: 'inbound-sales-representative',
        category: 'customer-service',
        aliases: ['Inbound Sales Agent', 'Inbound Sales Rep'],
        averageSalary: 42000,
        growthRate: 8
    },
    {
        id: 'outbound-sales-representative',
        title: 'Outbound Sales Representative',
        slug: 'outbound-sales-representative',
        category: 'customer-service',
        aliases: ['Outbound Sales Agent', 'Telesales Representative'],
        averageSalary: 42000,
        growthRate: 6
    },
    {
        id: 'customer-service-supervisor',
        title: 'Customer Service Supervisor',
        slug: 'customer-service-supervisor',
        category: 'customer-service',
        aliases: ['CS Supervisor', 'Customer Support Supervisor'],
        averageSalary: 46000,
        growthRate: 10
    },
    {
        id: 'support-team-lead',
        title: 'Support Team Lead',
        slug: 'support-team-lead',
        category: 'customer-service',
        aliases: ['Customer Support Lead', 'Support Team Leader'],
        averageSalary: 52000,
        growthRate: 12
    },
    {
        id: 'customer-support-coordinator',
        title: 'Customer Support Coordinator',
        slug: 'customer-support-coordinator',
        category: 'customer-service',
        aliases: ['Support Coordinator', 'CS Coordinator'],
        averageSalary: 42000,
        growthRate: 10
    },
    {
        id: 'contact-center-agent',
        title: 'Contact Center Agent',
        slug: 'contact-center-agent',
        category: 'customer-service',
        aliases: ['Contact Centre Agent', 'Customer Contact Agent'],
        averageSalary: 36000,
        growthRate: 6
    },
    {
        id: 'customer-service-representative-2',
        title: 'Customer Service Representative',
        slug: 'customer-service-representative-2',
        category: 'customer-service',
        aliases: ['CSR', 'Customer Service Rep'],
        averageSalary: 38000,
        growthRate: 6
    },
    {
        id: 'client-services-coordinator',
        title: 'Client Services Coordinator',
        slug: 'client-services-coordinator',
        category: 'customer-service',
        aliases: ['Client Service Coordinator', 'Customer Service Coordinator'],
        averageSalary: 42000,
        growthRate: 10
    },
    {
        id: 'bilingual-customer-service',
        title: 'Bilingual Customer Service',
        slug: 'bilingual-customer-service',
        category: 'customer-service',
        aliases: ['Bilingual CSR', 'Multilingual Customer Service'],
        averageSalary: 42000,
        growthRate: 12
    },
    {
        id: 'remote-customer-service',
        title: 'Remote Customer Service',
        slug: 'remote-customer-service',
        category: 'customer-service',
        aliases: ['Virtual Customer Service', 'Work From Home CS'],
        averageSalary: 38000,
        growthRate: 14
    },

    // Design - Creative & Visual (12 jobs)
    {
        id: 'creative-director-3',
        title: 'Creative Director',
        slug: 'creative-director-3',
        category: 'design',
        aliases: ['CD', 'Creative Design Director'],
        averageSalary: 145000,
        growthRate: 12
    },
    {
        id: 'design-director-3',
        title: 'Design Director',
        slug: 'design-director-3',
        category: 'design',
        aliases: ['Director of Design', 'Design Head'],
        averageSalary: 155000,
        growthRate: 14
    },
    {
        id: 'art-director-3',
        title: 'Art Director',
        slug: 'art-director-3',
        category: 'design',
        aliases: ['Creative Art Director', 'Visual Art Director'],
        averageSalary: 115000,
        growthRate: 12
    },
    {
        id: 'senior-graphic-designer',
        title: 'Senior Graphic Designer',
        slug: 'senior-graphic-designer',
        category: 'design',
        aliases: ['Lead Graphic Designer', 'Graphic Design Lead'],
        averageSalary: 82000,
        growthRate: 12
    },
    {
        id: 'junior-designer-2',
        title: 'Junior Designer',
        slug: 'junior-designer-2',
        category: 'design',
        aliases: ['Entry Level Designer', 'Assistant Designer'],
        averageSalary: 48000,
        growthRate: 12
    },
    {
        id: 'production-designer',
        title: 'Production Designer',
        slug: 'production-designer',
        category: 'design',
        aliases: ['Digital Production Designer', 'Design Production'],
        averageSalary: 62000,
        growthRate: 8
    },
    {
        id: 'design-assistant',
        title: 'Design Assistant',
        slug: 'design-assistant',
        category: 'design',
        aliases: ['Junior Design Assistant', 'Graphic Design Assistant'],
        averageSalary: 45000,
        growthRate: 10
    },
    {
        id: 'visual-merchandiser',
        title: 'Visual Merchandiser',
        slug: 'visual-merchandiser',
        category: 'design',
        aliases: ['Visual Merchandising', 'Retail Display Designer'],
        averageSalary: 42000,
        growthRate: 8
    },
    {
        id: 'exhibition-designer',
        title: 'Exhibition Designer',
        slug: 'exhibition-designer',
        category: 'design',
        aliases: ['Exhibit Designer', 'Display Designer'],
        averageSalary: 58000,
        growthRate: 10
    },
    {
        id: 'environmental-graphic-designer',
        title: 'Environmental Graphic Designer',
        slug: 'environmental-graphic-designer',
        category: 'design',
        aliases: ['EGD Designer', 'Wayfinding Designer'],
        averageSalary: 65000,
        growthRate: 12
    },
    {
        id: 'textile-designer',
        title: 'Textile Designer',
        slug: 'textile-designer',
        category: 'design',
        aliases: ['Fabric Designer', 'Surface Pattern Designer'],
        averageSalary: 58000,
        growthRate: 8
    },
    {
        id: 'furniture-designer',
        title: 'Furniture Designer',
        slug: 'furniture-designer',
        category: 'design',
        aliases: ['Furniture Design Specialist', 'Product Furniture Designer'],
        averageSalary: 68000,
        growthRate: 10
    },

    // Engineering - IT & Network (12 jobs)
    {
        id: 'network-engineer-2',
        title: 'Network Engineer',
        slug: 'network-engineer-2',
        category: 'engineering',
        aliases: ['Network Infrastructure Engineer', 'Network Support Engineer'],
        averageSalary: 105000,
        growthRate: 14
    },
    {
        id: 'network-administrator-2',
        title: 'Network Administrator',
        slug: 'network-administrator-2',
        category: 'engineering',
        aliases: ['Network Admin', 'System Administrator'],
        averageSalary: 85000,
        growthRate: 12
    },
    {
        id: 'systems-administrator-2',
        title: 'Systems Administrator',
        slug: 'systems-administrator-2',
        category: 'engineering',
        aliases: ['SysAdmin', 'System Admin'],
        averageSalary: 88000,
        growthRate: 12
    },
    {
        id: 'database-administrator-2',
        title: 'Database Administrator',
        slug: 'database-administrator-2',
        category: 'engineering',
        aliases: ['DBA', 'Database Admin'],
        averageSalary: 105000,
        growthRate: 12
    },
    {
        id: 'storage-engineer',
        title: 'Storage Engineer',
        slug: 'storage-engineer',
        category: 'engineering',
        aliases: ['Storage Administrator', 'Storage Solutions Engineer'],
        averageSalary: 110000,
        growthRate: 14
    },
    {
        id: 'linux-system-administrator',
        title: 'Linux System Administrator',
        slug: 'linux-system-administrator',
        category: 'engineering',
        aliases: ['Linux Admin', 'Linux Systems Engineer'],
        averageSalary: 95000,
        growthRate: 14
    },
    {
        id: 'windows-system-administrator',
        title: 'Windows System Administrator',
        slug: 'windows-system-administrator',
        category: 'engineering',
        aliases: ['Windows Admin', 'Windows Systems Engineer'],
        averageSalary: 88000,
        growthRate: 10
    },
    {
        id: 'it-manager-2',
        title: 'IT Manager',
        slug: 'it-manager-2',
        category: 'engineering',
        aliases: ['Information Technology Manager', 'IT Department Manager'],
        averageSalary: 125000,
        growthRate: 12
    },
    {
        id: 'it-director',
        title: 'IT Director',
        slug: 'it-director',
        category: 'engineering',
        aliases: ['Director of IT', 'Information Technology Director'],
        averageSalary: 175000,
        growthRate: 14
    },
    {
        id: 'chief-information-officer',
        title: 'Chief Information Officer',
        slug: 'chief-information-officer',
        category: 'engineering',
        aliases: ['CIO', 'Chief IT Officer'],
        averageSalary: 285000,
        growthRate: 12
    },
    {
        id: 'devops-engineer-3',
        title: 'DevOps Engineer',
        slug: 'devops-engineer-3',
        category: 'engineering',
        aliases: ['Development Operations Engineer', 'DevOps Specialist'],
        averageSalary: 135000,
        growthRate: 24
    },
    {
        id: 'release-engineer',
        title: 'Release Engineer',
        slug: 'release-engineer',
        category: 'engineering',
        aliases: ['Release Management Engineer', 'Build Engineer'],
        averageSalary: 115000,
        growthRate: 18
    },

    // Legal - Government & Public (10 jobs)
    {
        id: 'assistant-district-attorney',
        title: 'Assistant District Attorney',
        slug: 'assistant-district-attorney',
        category: 'legal',
        aliases: ['ADA', 'Prosecutor'],
        averageSalary: 85000,
        growthRate: 10
    },
    {
        id: 'public-defender',
        title: 'Public Defender',
        slug: 'public-defender',
        category: 'legal',
        aliases: ['Defense Attorney', 'Public Interest Lawyer'],
        averageSalary: 78000,
        growthRate: 10
    },
    {
        id: 'magistrate-judge',
        title: 'Magistrate Judge',
        slug: 'magistrate-judge',
        category: 'legal',
        aliases: ['Magistrate', 'Court Judge'],
        averageSalary: 165000,
        growthRate: 8
    },
    {
        id: 'court-clerk',
        title: 'Court Clerk',
        slug: 'court-clerk',
        category: 'legal',
        aliases: ['Courtroom Clerk', 'Judicial Clerk'],
        averageSalary: 42000,
        growthRate: 6
    },
    {
        id: 'court-reporter',
        title: 'Court Reporter',
        slug: 'court-reporter',
        category: 'legal',
        aliases: ['Stenographer', 'Court Stenographer'],
        averageSalary: 62000,
        growthRate: 8
    },
    {
        id: 'legal-aid-attorney',
        title: 'Legal Aid Attorney',
        slug: 'legal-aid-attorney',
        category: 'legal',
        aliases: ['Legal Services Attorney', 'Non-Profit Lawyer'],
        averageSalary: 58000,
        growthRate: 8
    },
    {
        id: 'government-attorney',
        title: 'Government Attorney',
        slug: 'government-attorney',
        category: 'legal',
        aliases: ['Government Lawyer', 'Public Sector Attorney'],
        averageSalary: 95000,
        growthRate: 10
    },
    {
        id: 'administrative-law-judge',
        title: 'Administrative Law Judge',
        slug: 'administrative-law-judge',
        category: 'legal',
        aliases: ['ALJ', 'Hearing Officer'],
        averageSalary: 125000,
        growthRate: 8
    },
    {
        id: 'legal-educator',
        title: 'Legal Educator',
        slug: 'legal-educator',
        category: 'legal',
        aliases: ['Law Professor', 'Legal Studies Instructor'],
        averageSalary: 135000,
        growthRate: 12
    },
    {
        id: 'law-clerk-2',
        title: 'Law Clerk',
        slug: 'law-clerk-2',
        category: 'legal',
        aliases: ['Judicial Clerk', 'Legal Judicial Clerk'],
        averageSalary: 55000,
        growthRate: 8
    },

    // Education - K-12 & Special Ed (10 jobs)
    {
        id: 'elementary-school-teacher',
        title: 'Elementary School Teacher',
        slug: 'elementary-school-teacher',
        category: 'education',
        aliases: ['Primary Teacher', 'Elementary Teacher'],
        averageSalary: 62000,
        growthRate: 8
    },
    {
        id: 'middle-school-teacher',
        title: 'Middle School Teacher',
        slug: 'middle-school-teacher',
        category: 'education',
        aliases: ['Junior High Teacher', 'Intermediate School Teacher'],
        averageSalary: 62000,
        growthRate: 8
    },
    {
        id: 'high-school-teacher',
        title: 'High School Teacher',
        slug: 'high-school-teacher',
        category: 'education',
        aliases: ['Secondary Teacher', 'High School Educator'],
        averageSalary: 65000,
        growthRate: 8
    },
    {
        id: 'substitute-teacher',
        title: 'Substitute Teacher',
        slug: 'substitute-teacher',
        category: 'education',
        aliases: ['Sub Teacher', 'Supply Teacher'],
        averageSalary: 42000,
        growthRate: 6
    },
    {
        id: 'teaching-assistant-2',
        title: 'Teaching Assistant',
        slug: 'teaching-assistant-2',
        category: 'education',
        aliases: ['Teacher Aide', 'Classroom Assistant'],
        averageSalary: 32000,
        growthRate: 8
    },
    {
        id: 'special-education-teacher-2',
        title: 'Special Education Teacher',
        slug: 'special-education-teacher-2',
        category: 'education',
        aliases: ['SPED Teacher', 'Special Needs Teacher'],
        averageSalary: 62000,
        growthRate: 10
    },
    {
        id: 'school-counselor',
        title: 'School Counselor',
        slug: 'school-counselor',
        category: 'education',
        aliases: ['Guidance Counselor', 'Student Counselor'],
        averageSalary: 62000,
        growthRate: 10
    },
    {
        id: 'school-psychologist',
        title: 'School Psychologist',
        slug: 'school-psychologist',
        category: 'education',
        aliases: ['Educational Psychologist', 'School Psychology Specialist'],
        averageSalary: 82000,
        growthRate: 12
    },
    {
        id: 'principal-2',
        title: 'Principal',
        slug: 'principal-2',
        category: 'education',
        aliases: ['School Principal', 'Headmaster'],
        averageSalary: 105000,
        growthRate: 10
    },
    {
        id: 'vice-principal',
        title: 'Vice Principal',
        slug: 'vice-principal',
        category: 'education',
        aliases: ['Assistant Principal', 'Deputy Principal'],
        averageSalary: 92000,
        growthRate: 10
    },

    // Real Estate - Property Management (12 jobs)
    {
        id: 'real-estate-assistant',
        title: 'Real Estate Assistant',
        slug: 'real-estate-assistant',
        category: 'real-estate',
        aliases: ['Real Estate Administrative Assistant', 'Realtor Assistant'],
        averageSalary: 45000,
        growthRate: 10
    },
    {
        id: 'real-estate-coordinator',
        title: 'Real Estate Coordinator',
        slug: 'real-estate-coordinator',
        category: 'real-estate',
        aliases: ['Property Coordinator', 'Real Estate Office Coordinator'],
        averageSalary: 48000,
        growthRate: 10
    },
    {
        id: 'showing-assistant',
        title: 'Showing Assistant',
        slug: 'showing-assistant',
        category: 'real-estate',
        aliases: ['Property Showing Assistant', 'Real Estate Showing Agent'],
        averageSalary: 42000,
        growthRate: 10
    },
    {
        id: 'leasing-consultant',
        title: 'Leasing Consultant',
        slug: 'leasing-consultant',
        category: 'real-estate',
        aliases: ['Leasing Agent', 'Apartment Leasing Consultant'],
        averageSalary: 42000,
        growthRate: 10
    },
    {
        id: 'assistant-property-manager',
        title: 'Assistant Property Manager',
        slug: 'assistant-property-manager',
        category: 'real-estate',
        aliases: ['Property Management Assistant', 'Assistant PM'],
        averageSalary: 52000,
        growthRate: 12
    },
    {
        id: 'regional-property-manager',
        title: 'Regional Property Manager',
        slug: 'regional-property-manager',
        category: 'real-estate',
        aliases: ['Multi-Site Property Manager', 'Regional PM'],
        averageSalary: 85000,
        growthRate: 12
    },
    {
        id: 'asset-manager-real-estate',
        title: 'Asset Manager Real Estate',
        slug: 'asset-manager-real-estate',
        category: 'real-estate',
        aliases: ['Real Estate Asset Manager', 'Property Asset Manager'],
        averageSalary: 95000,
        growthRate: 14
    },
    {
        id: 'hoa-manager',
        title: 'HOA Manager',
        slug: 'hoa-manager',
        category: 'real-estate',
        aliases: ['Homeowners Association Manager', 'Community Association Manager'],
        averageSalary: 62000,
        growthRate: 10
    },
    {
        id: 'property-management-assistant',
        title: 'Property Management Assistant',
        slug: 'property-management-assistant',
        category: 'real-estate',
        aliases: ['PM Assistant', 'Property Admin Assistant'],
        averageSalary: 42000,
        growthRate: 10
    },
    {
        id: 'real-estate-transaction-coordinator',
        title: 'Real Estate Transaction Coordinator',
        slug: 'real-estate-transaction-coordinator',
        category: 'real-estate',
        aliases: ['Transaction Coordinator', 'Real Estate TC'],
        averageSalary: 52000,
        growthRate: 12
    },
    {
        id: 'commercial-property-manager',
        title: 'Commercial Property Manager',
        slug: 'commercial-property-manager',
        category: 'real-estate',
        aliases: ['Commercial Real Estate Manager', 'Business Property Manager'],
        averageSalary: 75000,
        growthRate: 12
    },
    {
        id: 'residential-property-manager',
        title: 'Residential Property Manager',
        slug: 'residential-property-manager',
        category: 'real-estate',
        aliases: ['Residential PM', 'Apartment Manager'],
        averageSalary: 55000,
        growthRate: 10
    },

    // Skilled Trades - Specialized (12 jobs)
    {
        id: 'master-electrician',
        title: 'Master Electrician',
        slug: 'master-electrician',
        category: 'skilled-trades',
        aliases: ['Licensed Electrician', 'Electrical Contractor'],
        averageSalary: 78000,
        growthRate: 12
    },
    {
        id: 'industrial-electrician',
        title: 'Industrial Electrician',
        slug: 'industrial-electrician',
        category: 'skilled-trades',
        aliases: ['Industrial Electrical Technician', 'Factory Electrician'],
        averageSalary: 72000,
        growthRate: 12
    },
    {
        id: 'commercial-electrician',
        title: 'Commercial Electrician',
        slug: 'commercial-electrician',
        category: 'skilled-trades',
        aliases: ['Commercial Electrical Technician', 'Business Electrician'],
        averageSalary: 68000,
        growthRate: 12
    },
    {
        id: 'residential-electrician',
        title: 'Residential Electrician',
        slug: 'residential-electrician',
        category: 'skilled-trades',
        aliases: ['Home Electrician', 'House Wiring Electrician'],
        averageSalary: 58000,
        growthRate: 10
    },
    {
        id: 'service-plumber',
        title: 'Service Plumber',
        slug: 'service-plumber',
        category: 'skilled-trades',
        aliases: ['Residential Plumber', 'Home Service Plumber'],
        averageSalary: 62000,
        growthRate: 10
    },
    {
        id: 'commercial-plumber',
        title: 'Commercial Plumber',
        slug: 'commercial-plumber',
        category: 'skilled-trades',
        aliases: ['Industrial Plumber', 'Business Plumber'],
        averageSalary: 68000,
        growthRate: 10
    },
    {
        id: 'pipefitter',
        title: 'Pipefitter',
        slug: 'pipefitter',
        category: 'skilled-trades',
        aliases: ['Pipe Fitter', 'Steamfitter'],
        averageSalary: 65000,
        growthRate: 10
    },
    {
        id: 'steamfitter',
        title: 'Steamfitter',
        slug: 'steamfitter',
        category: 'skilled-trades',
        aliases: ['Steam Pipefitter', 'High-Pressure Pipefitter'],
        averageSalary: 72000,
        growthRate: 10
    },
    {
        id: 'sheet-metal-worker',
        title: 'Sheet Metal Worker',
        slug: 'sheet-metal-worker',
        category: 'skilled-trades',
        aliases: ['Sheet Metal Technician', 'Metal Fabricator'],
        averageSalary: 58000,
        growthRate: 8
    },
    {
        id: 'ironworker',
        title: 'Ironworker',
        slug: 'ironworker',
        category: 'skilled-trades',
        aliases: ['Structural Ironworker', 'Steel Worker'],
        averageSalary: 62000,
        growthRate: 10
    },
    {
        id: 'glazier',
        title: 'Glazier',
        slug: 'glazier',
        category: 'skilled-trades',
        aliases: ['Glass Installer', 'Window Installer'],
        averageSalary: 52000,
        growthRate: 8
    },
    {
        id: 'roofer-2',
        title: 'Roofer',
        slug: 'roofer-2',
        category: 'skilled-trades',
        aliases: ['Roofing Contractor', 'Roofing Technician'],
        averageSalary: 48000,
        growthRate: 8
    },

    // Hospitality - Food Service (12 jobs)
    {
        id: 'line-cook',
        title: 'Line Cook',
        slug: 'line-cook',
        category: 'hospitality',
        aliases: ['Restaurant Cook', 'Prep Cook'],
        averageSalary: 38000,
        growthRate: 10
    },
    {
        id: 'prep-cook',
        title: 'Prep Cook',
        slug: 'prep-cook',
        category: 'hospitality',
        aliases: ['Kitchen Prep', 'Preparation Cook'],
        averageSalary: 32000,
        growthRate: 8
    },
    {
        id: 'short-order-cook',
        title: 'Short Order Cook',
        slug: 'short-order-cook',
        category: 'hospitality',
        aliases: ['Grill Cook', 'Fast Food Cook'],
        averageSalary: 32000,
        growthRate: 6
    },
    {
        id: 'head-chef',
        title: 'Head Chef',
        slug: 'head-chef',
        category: 'hospitality',
        aliases: ['Executive Chef', 'Kitchen Head'],
        averageSalary: 68000,
        growthRate: 10
    },
    {
        id: 'pastry-chef',
        title: 'Pastry Chef',
        slug: 'pastry-chef',
        category: 'hospitality',
        aliases: ['Pastry Chef', 'Dessert Chef'],
        averageSalary: 52000,
        growthRate: 10
    },
    {
        id: 'baker-2',
        title: 'Baker',
        slug: 'baker-2',
        category: 'hospitality',
        aliases: ['Baker', 'Pastry Baker'],
        averageSalary: 32000,
        growthRate: 6
    },
    {
        id: 'dishwasher',
        title: 'Dishwasher',
        slug: 'dishwasher',
        category: 'hospitality',
        aliases: ['Dishwasher', 'Kitchen Utility'],
        averageSalary: 28000,
        growthRate: 4
    },
    {
        id: 'server-2',
        title: 'Server',
        slug: 'server-2',
        category: 'hospitality',
        aliases: ['Waiter', 'Waitress'],
        averageSalary: 32000,
        growthRate: 8
    },
    {
        id: 'bartender-2',
        title: 'Bartender',
        slug: 'bartender-2',
        category: 'hospitality',
        aliases: ['Barkeeper', 'Mixologist'],
        averageSalary: 35000,
        growthRate: 8
    },
    {
        id: 'barista',
        title: 'Barista',
        slug: 'barista',
        category: 'hospitality',
        aliases: ['Coffee Barista', 'Coffee Shop Barista'],
        averageSalary: 30000,
        growthRate: 10
    },
    {
        id: 'host-hostess',
        title: 'Host Hostess',
        slug: 'host-hostess',
        category: 'hospitality',
        aliases: ['Restaurant Host', 'Greeter'],
        averageSalary: 28000,
        growthRate: 6
    },
    {
        id: 'food-server',
        title: 'Food Server',
        slug: 'food-server',
        category: 'hospitality',
        aliases: ['Food Service Worker', 'Restaurant Server'],
        averageSalary: 30000,
        growthRate: 6
    },

    // Transportation - Logistics & Supply Chain (12 jobs)
    {
        id: 'logistics-manager-2',
        title: 'Logistics Manager',
        slug: 'logistics-manager-2',
        category: 'transportation',
        aliases: ['Logistics Management', 'Supply Chain Manager'],
        averageSalary: 92000,
        growthRate: 16
    },
    {
        id: 'transportation-manager',
        title: 'Transportation Manager',
        slug: 'transportation-manager',
        category: 'transportation',
        aliases: ['Transport Manager', 'Fleet Transportation Manager'],
        averageSalary: 85000,
        growthRate: 12
    },
    {
        id: 'distribution-manager',
        title: 'Distribution Manager',
        slug: 'distribution-manager',
        category: 'transportation',
        aliases: ['Distribution Center Manager', 'Logistics Distribution'],
        averageSalary: 88000,
        growthRate: 14
    },
    {
        id: 'inventory-manager',
        title: 'Inventory Manager',
        slug: 'inventory-manager',
        category: 'transportation',
        aliases: ['Inventory Control Manager', 'Stock Manager'],
        averageSalary: 72000,
        growthRate: 12
    },
    {
        id: 'procurement-specialist',
        title: 'Procurement Specialist',
        slug: 'procurement-specialist',
        category: 'transportation',
        aliases: ['Purchasing Specialist', 'Procurement Officer'],
        averageSalary: 68000,
        growthRate: 14
    },
    {
        id: 'purchasing-agent',
        title: 'Purchasing Agent',
        slug: 'purchasing-agent',
        category: 'transportation',
        aliases: ['Buyer', 'Purchasing Officer'],
        averageSalary: 62000,
        growthRate: 10
    },
    {
        id: 'buyer-2',
        title: 'Buyer',
        slug: 'buyer-2',
        category: 'transportation',
        aliases: ['Retail Buyer', 'Merchandise Buyer'],
        averageSalary: 62000,
        growthRate: 8
    },
    {
        id: 'supply-chain-analyst',
        title: 'Supply Chain Analyst',
        slug: 'supply-chain-analyst',
        category: 'transportation',
        aliases: ['Supply Chain Analysis', 'Logistics Analyst'],
        averageSalary: 75000,
        growthRate: 18
    },
    {
        id: 'import-export-coordinator',
        title: 'Import Export Coordinator',
        slug: 'import-export-coordinator',
        category: 'transportation',
        aliases: ['Import Coordinator', 'Export Coordinator'],
        averageSalary: 58000,
        growthRate: 12
    },
    {
        id: 'customs-broker',
        title: 'Customs Broker',
        slug: 'customs-broker',
        category: 'transportation',
        aliases: ['Customs Clearance Broker', 'Import Broker'],
        averageSalary: 62000,
        growthRate: 10
    },
    {
        id: 'freight-agent',
        title: 'Freight Agent',
        slug: 'freight-agent',
        category: 'transportation',
        aliases: ['Freight Sales Agent', 'Logistics Sales Agent'],
        averageSalary: 52000,
        growthRate: 10
    },
    {
        id: 'load-planner',
        title: 'Load Planner',
        slug: 'load-planner',
        category: 'transportation',
        aliases: ['Freight Load Planner', 'Transportation Planner'],
        averageSalary: 58000,
        growthRate: 12
    },

    // ========== BATCH 19: 300 New Jobs ==========

    // Technology - Emerging Tech & Analytics (20 jobs)
    {
        id: 'ai-engineer-2',
        title: 'AI Engineer',
        slug: 'ai-engineer-2',
        category: 'technology',
        aliases: ['Artificial Intelligence Engineer', 'AI Development Engineer'],
        averageSalary: 160000,
        growthRate: 32
    },
    {
        id: 'generative-ai-specialist',
        title: 'Generative AI Specialist',
        slug: 'generative-ai-specialist',
        category: 'technology',
        aliases: ['GenAI Specialist', 'Generative AI Developer'],
        averageSalary: 175000,
        growthRate: 35
    },
    {
        id: 'prompt-engineer',
        title: 'Prompt Engineer',
        slug: 'prompt-engineer',
        category: 'technology',
        aliases: ['AI Prompt Engineer', 'LLM Prompt Specialist'],
        averageSalary: 125000,
        growthRate: 30
    },
    {
        id: 'llm-engineer',
        title: 'LLM Engineer',
        slug: 'llm-engineer',
        category: 'technology',
        aliases: ['Large Language Model Engineer', 'Language Model Developer'],
        averageSalary: 165000,
        growthRate: 34
    },
    {
        id: 'ai-research-scientist',
        title: 'AI Research Scientist',
        slug: 'ai-research-scientist',
        category: 'technology',
        aliases: ['Machine Learning Research Scientist', 'Deep Learning Researcher'],
        averageSalary: 195000,
        growthRate: 30
    },
    {
        id: 'data-science-lead',
        title: 'Data Science Lead',
        slug: 'data-science-lead',
        category: 'technology',
        aliases: ['Lead Data Scientist', 'Principal Data Scientist'],
        averageSalary: 175000,
        growthRate: 28
    },
    {
        id: 'analytics-engineer',
        title: 'Analytics Engineer',
        slug: 'analytics-engineer',
        category: 'technology',
        aliases: ['Data Analytics Engineer', 'Analytics Developer'],
        averageSalary: 135000,
        growthRate: 28
    },
    {
        id: 'data-product-manager',
        title: 'Data Product Manager',
        slug: 'data-product-manager',
        category: 'technology',
        aliases: ['Data PM', 'Analytics Product Manager'],
        averageSalary: 155000,
        growthRate: 26
    },
    {
        id: 'business-intelligence-lead',
        title: 'Business Intelligence Lead',
        slug: 'business-intelligence-lead',
        category: 'technology',
        aliases: ['BI Lead', 'Head of Business Intelligence'],
        averageSalary: 145000,
        growthRate: 20
    },
    {
        id: 'data-lake-architect',
        title: 'Data Lake Architect',
        slug: 'data-lake-architect',
        category: 'technology',
        aliases: ['Data Lakehouse Architect', 'Big Data Architect'],
        averageSalary: 155000,
        growthRate: 24
    },
    {
        id: 'streaming-engineer',
        title: 'Streaming Engineer',
        slug: 'streaming-engineer',
        category: 'technology',
        aliases: ['Real-time Data Engineer', 'Stream Processing Engineer'],
        averageSalary: 145000,
        growthRate: 28
    },
    {
        id: 'etl-architect',
        title: 'ETL Architect',
        slug: 'etl-architect',
        category: 'technology',
        aliases: ['Data Integration Architect', 'ETL Solution Architect'],
        averageSalary: 140000,
        growthRate: 20
    },
    {
        id: 'data-platform-engineer',
        title: 'Data Platform Engineer',
        slug: 'data-platform-engineer',
        category: 'technology',
        aliases: ['Data Infrastructure Engineer', 'Platform Data Engineer'],
        averageSalary: 145000,
        growthRate: 26
    },
    {
        id: 'ml-infrastructure-engineer',
        title: 'ML Infrastructure Engineer',
        slug: 'ml-infrastructure-engineer',
        category: 'technology',
        aliases: ['Machine Learning Infrastructure', 'ML Platform Engineer'],
        averageSalary: 155000,
        growthRate: 30
    },
    {
        id: 'data-governance-lead',
        title: 'Data Governance Lead',
        slug: 'data-governance-lead',
        category: 'technology',
        aliases: ['Head of Data Governance', 'Data Governance Manager'],
        averageSalary: 145000,
        growthRate: 22
    },
    {
        id: 'data-privacy-officer',
        title: 'Data Privacy Officer',
        slug: 'data-privacy-officer',
        category: 'technology',
        aliases: ['Privacy Officer', 'Data Protection Officer'],
        averageSalary: 135000,
        growthRate: 24
    },
    {
        id: 'data-catalog-manager',
        title: 'Data Catalog Manager',
        slug: 'data-catalog-manager',
        category: 'technology',
        aliases: ['Metadata Manager', 'Data Catalog Specialist'],
        averageSalary: 125000,
        growthRate: 22
    },
    {
        id: 'data-steward',
        title: 'Data Steward',
        slug: 'data-steward',
        category: 'technology',
        aliases: ['Data Governance Steward', 'Data Quality Steward'],
        averageSalary: 95000,
        growthRate: 18
    },
    {
        id: 'synthetic-data-engineer',
        title: 'Synthetic Data Engineer',
        slug: 'synthetic-data-engineer',
        category: 'technology',
        aliases: ['Synthetic Data Specialist', 'Data Generation Engineer'],
        averageSalary: 135000,
        growthRate: 28
    },
    {
        id: 'edge-computing-engineer',
        title: 'Edge Computing Engineer',
        slug: 'edge-computing-engineer',
        category: 'technology',
        aliases: ['Edge Engineer', 'IoT Edge Engineer'],
        averageSalary: 140000,
        growthRate: 26
    },

    // Marketing - Advanced Digital & Growth (20 jobs)
    {
        id: 'head-of-growth',
        title: 'Head of Growth',
        slug: 'head-of-growth',
        category: 'marketing',
        aliases: ['VP of Growth', 'Growth Lead'],
        averageSalary: 185000,
        growthRate: 28
    },
    {
        id: 'vp-of-marketing-2',
        title: 'VP of Marketing',
        slug: 'vp-of-marketing-2',
        category: 'marketing',
        aliases: ['Vice President of Marketing', 'Marketing VP'],
        averageSalary: 195000,
        growthRate: 18
    },
    {
        id: 'chief-marketing-officer-3',
        title: 'Chief Marketing Officer',
        slug: 'chief-marketing-officer-3',
        category: 'marketing',
        aliases: ['CMO', 'Chief Marketing Officer'],
        averageSalary: 285000,
        growthRate: 16
    },
    {
        id: 'performance-marketing-director',
        title: 'Performance Marketing Director',
        slug: 'performance-marketing-director',
        category: 'marketing',
        aliases: ['Director of Performance Marketing', 'Paid Media Director'],
        averageSalary: 135000,
        growthRate: 22
    },
    {
        id: 'digital-marketing-director-2',
        title: 'Digital Marketing Director',
        slug: 'digital-marketing-director-2',
        category: 'marketing',
        aliases: ['Director of Digital Marketing', 'Online Marketing Director'],
        averageSalary: 145000,
        growthRate: 20
    },
    {
        id: 'content-marketing-manager-2',
        title: 'Content Marketing Manager',
        slug: 'content-marketing-manager-2',
        category: 'marketing',
        aliases: ['Content Marketing Lead', 'Content Strategy Manager'],
        averageSalary: 105000,
        growthRate: 18
    },
    {
        id: 'brand-director',
        title: 'Brand Director',
        slug: 'brand-director',
        category: 'marketing',
        aliases: ['Director of Branding', 'Brand Marketing Director'],
        averageSalary: 155000,
        growthRate: 16
    },
    {
        id: 'product-marketing-director',
        title: 'Product Marketing Director',
        slug: 'product-marketing-director',
        category: 'marketing',
        aliases: ['Director of Product Marketing', 'Product Marketing VP'],
        averageSalary: 165000,
        growthRate: 18
    },
    {
        id: 'field-marketing-manager',
        title: 'Field Marketing Manager',
        slug: 'field-marketing-manager',
        category: 'marketing',
        aliases: ['Regional Marketing Manager', 'Field Marketing Director'],
        averageSalary: 115000,
        growthRate: 16
    },
    {
        id: 'trade-marketing-manager',
        title: 'Trade Marketing Manager',
        slug: 'trade-marketing-manager',
        category: 'marketing',
        aliases: ['Trade Marketing Specialist', 'Channel Marketing Manager'],
        averageSalary: 105000,
        growthRate: 14
    },
    {
        id: 'customer-marketing-manager',
        title: 'Customer Marketing Manager',
        slug: 'customer-marketing-manager',
        category: 'marketing',
        aliases: ['Customer Advocacy Marketing', 'Client Marketing Manager'],
        averageSalary: 115000,
        growthRate: 18
    },
    {
        id: 'lifecycle-marketing-manager',
        title: 'Lifecycle Marketing Manager',
        slug: 'lifecycle-marketing-manager',
        category: 'marketing',
        aliases: ['Customer Lifecycle Marketing', 'CLM Manager'],
        averageSalary: 105000,
        growthRate: 20
    },
    {
        id: 'retention-marketing-manager',
        title: 'Retention Marketing Manager',
        slug: 'retention-marketing-manager',
        category: 'marketing',
        aliases: ['Customer Retention Marketing', 'Churn Marketing Manager'],
        averageSalary: 108000,
        growthRate: 20
    },
    {
        id: 'referral-marketing-manager',
        title: 'Referral Marketing Manager',
        slug: 'referral-marketing-manager',
        category: 'marketing',
        aliases: ['Referral Program Manager', 'Word of Mouth Marketing'],
        averageSalary: 98000,
        growthRate: 18
    },
    {
        id: 'influencer-marketing-manager',
        title: 'Influencer Marketing Manager',
        slug: 'influencer-marketing-manager',
        category: 'marketing',
        aliases: ['Influencer Marketing Lead', 'Influencer Partnership Manager'],
        averageSalary: 105000,
        growthRate: 22
    },
    {
        id: 'social-media-director',
        title: 'Social Media Director',
        slug: 'social-media-director',
        category: 'marketing',
        aliases: ['Director of Social Media', 'Head of Social'],
        averageSalary: 125000,
        growthRate: 20
    },
    {
        id: 'email-marketing-director',
        title: 'Email Marketing Director',
        slug: 'email-marketing-director',
        category: 'marketing',
        aliases: ['Director of Email Marketing', 'CRM Marketing Director'],
        averageSalary: 120000,
        growthRate: 18
    },
    {
        id: 'marketing-automation-director',
        title: 'Marketing Automation Director',
        slug: 'marketing-automation-director',
        category: 'marketing',
        aliases: ['Director of Marketing Automation', 'Marketing Ops Director'],
        averageSalary: 135000,
        growthRate: 22
    },
    {
        id: 'web-analytics-manager',
        title: 'Web Analytics Manager',
        slug: 'web-analytics-manager',
        category: 'marketing',
        aliases: ['Digital Analytics Manager', 'Website Analytics Lead'],
        averageSalary: 115000,
        growthRate: 20
    },
    {
        id: 'attribution-specialist',
        title: 'Attribution Specialist',
        slug: 'attribution-specialist',
        category: 'marketing',
        aliases: ['Marketing Attribution Analyst', 'Attribution Modeling'],
        averageSalary: 108000,
        growthRate: 24
    },

    // Sales - Enterprise & Strategic (18 jobs)
    {
        id: 'vp-of-sales-2',
        title: 'VP of Sales',
        slug: 'vp-of-sales-2',
        category: 'sales',
        aliases: ['Vice President of Sales', 'Sales VP'],
        averageSalary: 225000,
        growthRate: 18
    },
    {
        id: 'chief-revenue-officer-3',
        title: 'Chief Revenue Officer',
        slug: 'chief-revenue-officer-3',
        category: 'sales',
        aliases: ['CRO', 'Chief Revenue Officer'],
        averageSalary: 285000,
        growthRate: 20
    },
    {
        id: 'sales-vice-president',
        title: 'Sales Vice President',
        slug: 'sales-vice-president',
        category: 'sales',
        aliases: ['VP Sales', 'Sales VP'],
        averageSalary: 205000,
        growthRate: 16
    },
    {
        id: 'global-sales-director',
        title: 'Global Sales Director',
        slug: 'global-sales-director',
        category: 'sales',
        aliases: ['Worldwide Sales Director', 'International Sales Director'],
        averageSalary: 175000,
        growthRate: 16
    },
    {
        id: 'enterprise-sales-director',
        title: 'Enterprise Sales Director',
        slug: 'enterprise-sales-director',
        category: 'sales',
        aliases: ['Director of Enterprise Sales', 'Enterprise Sales VP'],
        averageSalary: 185000,
        growthRate: 18
    },
    {
        id: 'commercial-director',
        title: 'Commercial Director',
        slug: 'commercial-director',
        category: 'sales',
        aliases: ['Director of Commercial', 'Commercial VP'],
        averageSalary: 175000,
        growthRate: 16
    },
    {
        id: 'business-development-director',
        title: 'Business Development Director',
        slug: 'business-development-director',
        category: 'sales',
        aliases: ['Director of Business Development', 'BD Director'],
        averageSalary: 155000,
        growthRate: 16
    },
    {
        id: 'sales-operations-director',
        title: 'Sales Operations Director',
        slug: 'sales-operations-director',
        category: 'sales',
        aliases: ['Director of Sales Operations', 'Sales Ops Director'],
        averageSalary: 145000,
        growthRate: 18
    },
    {
        id: 'revenue-operations-director',
        title: 'Revenue Operations Director',
        slug: 'revenue-operations-director',
        category: 'sales',
        aliases: ['Director of Revenue Operations', 'RevOps Director'],
        averageSalary: 155000,
        growthRate: 24
    },
    {
        id: 'customer-success-director',
        title: 'Customer Success Director',
        slug: 'customer-success-director',
        category: 'sales',
        aliases: ['Director of Customer Success', 'CS Director'],
        averageSalary: 155000,
        growthRate: 20
    },
    {
        id: 'vp-of-customer-success',
        title: 'VP of Customer Success',
        slug: 'vp-of-customer-success',
        category: 'sales',
        aliases: ['Vice President Customer Success', 'Customer Success VP'],
        averageSalary: 215000,
        growthRate: 22
    },
    {
        id: 'key-account-manager-2',
        title: 'Key Account Manager',
        slug: 'key-account-manager-2',
        category: 'sales',
        aliases: ['KAM', 'Key Accounts Manager'],
        averageSalary: 125000,
        growthRate: 16
    },
    {
        id: 'global-account-manager',
        title: 'Global Account Manager',
        slug: 'global-account-manager',
        category: 'sales',
        aliases: ['GAM', 'Worldwide Account Manager'],
        averageSalary: 155000,
        growthRate: 18
    },
    {
        id: 'sales-director-3',
        title: 'Sales Director',
        slug: 'sales-director-3',
        category: 'sales',
        aliases: ['Director of Sales', 'Sales Division Director'],
        averageSalary: 165000,
        growthRate: 16
    },
    {
        id: 'territory-manager',
        title: 'Territory Manager',
        slug: 'territory-manager',
        category: 'sales',
        aliases: ['Sales Territory Manager', 'Area Manager'],
        averageSalary: 105000,
        growthRate: 14
    },
    {
        id: 'vertical-sales-manager',
        title: 'Vertical Sales Manager',
        slug: 'vertical-sales-manager',
        category: 'sales',
        aliases: ['Industry Sales Manager', 'Vertical Market Manager'],
        averageSalary: 125000,
        growthRate: 16
    },
    {
        id: 'sales-consultant',
        title: 'Sales Consultant',
        slug: 'sales-consultant',
        category: 'sales',
        aliases: ['Sales Advisor', 'Sales Solutions Consultant'],
        averageSalary: 85000,
        growthRate: 14
    },
    {
        id: 'revenue-assurance-manager',
        title: 'Revenue Assurance Manager',
        slug: 'revenue-assurance-manager',
        category: 'sales',
        aliases: ['Revenue Protection Manager', 'Revenue Analyst'],
        averageSalary: 105000,
        growthRate: 16
    },

    // Healthcare - Medical & Allied (18 jobs)
    {
        id: 'physician-assistant-2',
        title: 'Physician Assistant',
        slug: 'physician-assistant-2',
        category: 'healthcare',
        aliases: ['PA', 'Physician Associate'],
        averageSalary: 125000,
        growthRate: 28
    },
    {
        id: 'clinical-nurse-leader',
        title: 'Clinical Nurse Leader',
        slug: 'clinical-nurse-leader',
        category: 'healthcare',
        aliases: ['CNL', 'Nursing Leader'],
        averageSalary: 105000,
        growthRate: 20
    },
    {
        id: 'nurse-educator-2',
        title: 'Nurse Educator',
        slug: 'nurse-educator-2',
        category: 'healthcare',
        aliases: ['Nursing Education Specialist', 'Nurse Instructor'],
        averageSalary: 92000,
        growthRate: 18
    },
    {
        id: 'nurse-administrator',
        title: 'Nurse Administrator',
        slug: 'nurse-administrator',
        category: 'healthcare',
        aliases: ['Nursing Administrator', 'Nurse Manager Administrator'],
        averageSalary: 115000,
        growthRate: 16
    },
    {
        id: 'patient-care-technician',
        title: 'Patient Care Technician',
        slug: 'patient-care-technician',
        category: 'healthcare',
        aliases: ['PCT', 'Patient Care Assistant'],
        averageSalary: 38000,
        growthRate: 14
    },
    {
        id: 'certified-nursing-assistant-2',
        title: 'Certified Nursing Assistant',
        slug: 'certified-nursing-assistant-2',
        category: 'healthcare',
        aliases: ['CNA', 'Nursing Assistant'],
        averageSalary: 36000,
        growthRate: 12
    },
    {
        id: 'home-health-aide',
        title: 'Home Health Aide',
        slug: 'home-health-aide',
        category: 'healthcare',
        aliases: ['HHA', 'Home Care Aide'],
        averageSalary: 32000,
        growthRate: 18
    },
    {
        id: 'personal-care-aide',
        title: 'Personal Care Aide',
        slug: 'personal-care-aide',
        category: 'healthcare',
        aliases: ['PCA', 'Personal Care Assistant'],
        averageSalary: 30000,
        growthRate: 18
    },
    {
        id: 'medical-assistant-3',
        title: 'Medical Assistant',
        slug: 'medical-assistant-3',
        category: 'healthcare',
        aliases: ['MA', 'Clinical Medical Assistant'],
        averageSalary: 40000,
        growthRate: 16
    },
    {
        id: 'emedical-records-technician-2',
        title: 'Medical Records Technician',
        slug: 'emedical-records-technician-2',
        category: 'healthcare',
        aliases: ['Health Information Technician', 'Medical Records Clerk'],
        averageSalary: 42000,
        growthRate: 14
    },
    {
        id: 'health-information-manager',
        title: 'Health Information Manager',
        slug: 'health-information-manager',
        category: 'healthcare',
        aliases: ['HIM Manager', 'Medical Records Manager'],
        averageSalary: 72000,
        growthRate: 16
    },
    {
        id: 'medical-biller',
        title: 'Medical Biller',
        slug: 'medical-biller',
        category: 'healthcare',
        aliases: ['Medical Billing Specialist', 'Healthcare Biller'],
        averageSalary: 42000,
        growthRate: 12
    },
    {
        id: 'medical-coding-specialist',
        title: 'Medical Coding Specialist',
        slug: 'medical-coding-specialist',
        category: 'healthcare',
        aliases: ['Medical Coder', 'Healthcare Coding Specialist'],
        averageSalary: 52000,
        growthRate: 14
    },
    {
        id: 'health-unit-coordinator',
        title: 'Health Unit Coordinator',
        slug: 'health-unit-coordinator',
        category: 'healthcare',
        aliases: ['HUC', 'Unit Clerk'],
        averageSalary: 38000,
        growthRate: 12
    },
    {
        id: 'sterile-processing-technician',
        title: 'Sterile Processing Technician',
        slug: 'sterile-processing-technician',
        category: 'healthcare',
        aliases: ['Sterile Tech', 'Central Service Technician'],
        averageSalary: 42000,
        growthRate: 12
    },
    {
        id: 'surgical-technologist',
        title: 'Surgical Technologist',
        slug: 'surgical-technologist',
        category: 'healthcare',
        aliases: ['Surgical Tech', 'Operating Room Technician'],
        averageSalary: 54000,
        growthRate: 14
    },
    {
        id: 'cardiovascular-technologist',
        title: 'Cardiovascular Technologist',
        slug: 'cardiovascular-technologist',
        category: 'healthcare',
        aliases: ['CV Tech', 'Cardiac Technician'],
        averageSalary: 68000,
        growthRate: 16
    },
    {
        id: 'vascular-technologist',
        title: 'Vascular Technologist',
        slug: 'vascular-technologist',
        category: 'healthcare',
        aliases: ['Vascular Sonographer', 'Vascular Tech'],
        averageSalary: 72000,
        growthRate: 16
    },

    // Finance - Corporate Finance & Accounting (18 jobs)
    {
        id: 'fp-and-a-director',
        title: 'FP&A Director',
        slug: 'fp-and-a-director',
        category: 'finance',
        aliases: ['Director of FP&A', 'Financial Planning Director'],
        averageSalary: 165000,
        growthRate: 16
    },
    {
        id: 'financial-planning-director',
        title: 'Financial Planning Director',
        slug: 'financial-planning-director',
        category: 'finance',
        aliases: ['Director of Financial Planning', 'FP Director'],
        averageSalary: 155000,
        growthRate: 14
    },
    {
        id: 'corporate-controller-2',
        title: 'Corporate Controller',
        slug: 'corporate-controller-2',
        category: 'finance',
        aliases: ['Assistant Controller', 'Corporate Controlling'],
        averageSalary: 145000,
        growthRate: 12
    },
    {
        id: 'assistant-controller',
        title: 'Assistant Controller',
        slug: 'assistant-controller',
        category: 'finance',
        aliases: ['Assistant Comptroller', 'Deputy Controller'],
        averageSalary: 115000,
        growthRate: 10
    },
    {
        id: 'chief-accounting-officer',
        title: 'Chief Accounting Officer',
        slug: 'chief-accounting-officer',
        category: 'finance',
        aliases: ['CAO', 'Head of Accounting'],
        averageSalary: 185000,
        growthRate: 14
    },
    {
        id: 'international-tax-manager',
        title: 'International Tax Manager',
        slug: 'international-tax-manager',
        category: 'finance',
        aliases: ['Global Tax Manager', 'Cross-Border Tax Manager'],
        averageSalary: 145000,
        growthRate: 14
    },
    {
        id: 'tax-director',
        title: 'Tax Director',
        slug: 'tax-director',
        category: 'finance',
        aliases: ['Director of Tax', 'Tax Department Director'],
        averageSalary: 165000,
        growthRate: 12
    },
    {
        id: 'transfer-pricing-manager',
        title: 'Transfer Pricing Manager',
        slug: 'transfer-pricing-manager',
        category: 'finance',
        aliases: ['Transfer Pricing Specialist', 'International Pricing Manager'],
        averageSalary: 135000,
        growthRate: 14
    },
    {
        id: 'vat-manager',
        title: 'VAT Manager',
        slug: 'vat-manager',
        category: 'finance',
        aliases: ['Value Added Tax Manager', 'Indirect Tax Manager'],
        averageSalary: 125000,
        growthRate: 12
    },
    {
        id: 'finance-director',
        title: 'Finance Director',
        slug: 'finance-director',
        category: 'finance',
        aliases: ['Director of Finance', 'Financial Director'],
        averageSalary: 175000,
        growthRate: 14
    },
    {
        id: 'treasury-director',
        title: 'Treasury Director',
        slug: 'treasury-director',
        category: 'finance',
        aliases: ['Director of Treasury', 'Head of Treasury'],
        averageSalary: 155000,
        growthRate: 12
    },
    {
        id: 'treasury-analyst-2',
        title: 'Treasury Analyst',
        slug: 'treasury-analyst-2',
        category: 'finance',
        aliases: ['Treasury Specialist', 'Treasury Operations Analyst'],
        averageSalary: 82000,
        growthRate: 12
    },
    {
        id: 'cash-manager',
        title: 'Cash Manager',
        slug: 'cash-manager',
        category: 'finance',
        aliases: ['Cash Management Manager', 'Liquidity Manager'],
        averageSalary: 98000,
        growthRate: 12
    },
    {
        id: 'financial-reporting-manager',
        title: 'Financial Reporting Manager',
        slug: 'financial-reporting-manager',
        category: 'finance',
        aliases: ['Financial Reporting Lead', 'Reporting Manager'],
        averageSalary: 125000,
        growthRate: 14
    },
    {
        id: 'sec-reporting-manager',
        title: 'SEC Reporting Manager',
        slug: 'sec-reporting-manager',
        category: 'finance',
        aliases: ['SEC Filing Manager', 'Regulatory Reporting Manager'],
        averageSalary: 135000,
        growthRate: 12
    },
    {
        id: 'sox-compliance-manager',
        title: 'SOX Compliance Manager',
        slug: 'sox-compliance-manager',
        category: 'finance',
        aliases: ['Sarbanes-Oxley Manager', 'Internal Controls Manager'],
        averageSalary: 125000,
        growthRate: 12
    },
    {
        id: 'internal-audit-manager',
        title: 'Internal Audit Manager',
        slug: 'internal-audit-manager',
        category: 'finance',
        aliases: ['Internal Audit Lead', 'IA Manager'],
        averageSalary: 125000,
        growthRate: 14
    },
    {
        id: 'external-auditor-2',
        title: 'External Auditor',
        slug: 'external-auditor-2',
        category: 'finance',
        aliases: ['Statutory Auditor', 'Public Auditor'],
        averageSalary: 85000,
        growthRate: 10
    },

    // HR - Leadership & Development (16 jobs)
    {
        id: 'chief-human-resources-officer-2',
        title: 'Chief Human Resources Officer',
        slug: 'chief-human-resources-officer-2',
        category: 'hr',
        aliases: ['CHRO', 'Chief People Officer'],
        averageSalary: 285000,
        growthRate: 16
    },
    {
        id: 'vp-of-human-resources-2',
        title: 'VP of Human Resources',
        slug: 'vp-of-human-resources-2',
        category: 'hr',
        aliases: ['Vice President of HR', 'HR VP'],
        averageSalary: 195000,
        growthRate: 16
    },
    {
        id: 'hr-director-3',
        title: 'HR Director',
        slug: 'hr-director-3',
        category: 'hr',
        aliases: ['Director of HR', 'Human Resources Director'],
        averageSalary: 135000,
        growthRate: 14
    },
    {
        id: 'talent-acquisition-director',
        title: 'Talent Acquisition Director',
        slug: 'talent-acquisition-director',
        category: 'hr',
        aliases: ['Director of Talent Acquisition', 'TA Director'],
        averageSalary: 145000,
        growthRate: 18
    },
    {
        id: 'head-of-talent-acquisition',
        title: 'Head of Talent Acquisition',
        slug: 'head-of-talent-acquisition',
        category: 'hr',
        aliases: ['Talent Acquisition Head', 'Recruitment Head'],
        averageSalary: 155000,
        growthRate: 18
    },
    {
        id: 'talent-management-director',
        title: 'Talent Management Director',
        slug: 'talent-management-director',
        category: 'hr',
        aliases: ['Director of Talent Management', 'TM Director'],
        averageSalary: 145000,
        growthRate: 18
    },
    {
        id: 'organizational-development-director',
        title: 'Organizational Development Director',
        slug: 'organizational-development-director',
        category: 'hr',
        aliases: ['OD Director', 'Director of Organizational Development'],
        averageSalary: 155000,
        growthRate: 16
    },
    {
        id: 'compensation-director',
        title: 'Compensation Director',
        slug: 'compensation-director',
        category: 'hr',
        aliases: ['Director of Compensation', 'Comp and Benefits Director'],
        averageSalary: 165000,
        growthRate: 16
    },
    {
        id: 'benefits-director',
        title: 'Benefits Director',
        slug: 'benefits-director',
        category: 'hr',
        aliases: ['Director of Benefits', 'Employee Benefits Director'],
        averageSalary: 145000,
        growthRate: 14
    },
    {
        id: 'hr-information-systems-manager',
        title: 'HR Information Systems Manager',
        slug: 'hr-information-systems-manager',
        category: 'hr',
        aliases: ['HRIS Manager', 'HR Systems Manager'],
        averageSalary: 125000,
        growthRate: 18
    },
    {
        id: 'hr-analytics-manager',
        title: 'HR Analytics Manager',
        slug: 'hr-analytics-manager',
        category: 'hr',
        aliases: ['People Analytics Manager', 'Workforce Analytics Manager'],
        averageSalary: 135000,
        growthRate: 22
    },
    {
        id: 'diversity-equity-inclusion-director',
        title: 'Diversity Equity Inclusion Director',
        slug: 'diversity-equity-inclusion-director',
        category: 'hr',
        aliases: ['DEI Director', 'Director of Diversity'],
        averageSalary: 155000,
        growthRate: 20
    },
    {
        id: 'employee-relations-director',
        title: 'Employee Relations Director',
        slug: 'employee-relations-director',
        category: 'hr',
        aliases: ['ER Director', 'Director of Employee Relations'],
        averageSalary: 135000,
        growthRate: 14
    },
    {
        id: 'talent-development-director',
        title: 'Talent Development Director',
        slug: 'talent-development-director',
        category: 'hr',
        aliases: ['Director of Talent Development', 'L&D Director'],
        averageSalary: 145000,
        growthRate: 18
    },
    {
        id: 'university-relations-manager',
        title: 'University Relations Manager',
        slug: 'university-relations-manager',
        category: 'hr',
        aliases: ['Campus Relations Manager', 'College Relations Manager'],
        averageSalary: 98000,
        growthRate: 14
    },
    {
        id: 'employer-branding-manager',
        title: 'Employer Branding Manager',
        slug: 'employer-branding-manager',
        category: 'hr',
        aliases: ['Employer Brand Manager', 'Talent Brand Manager'],
        averageSalary: 115000,
        growthRate: 20
    },
    {
        id: 'workforce-planning-manager',
        title: 'Workforce Planning Manager',
        slug: 'workforce-planning-manager',
        category: 'hr',
        aliases: ['Workforce Planning Analyst', 'Strategic Workforce Manager'],
        averageSalary: 125000,
        growthRate: 16
    },

    // Admin - Executive Support (14 jobs)
    {
        id: 'chief-of-staff',
        title: 'Chief of Staff',
        slug: 'chief-of-staff',
        category: 'admin',
        aliases: ['COS', 'Executive Chief of Staff'],
        averageSalary: 185000,
        growthRate: 18
    },
    {
        id: 'executive-assistant-3',
        title: 'Executive Assistant',
        slug: 'executive-assistant-3',
        category: 'admin',
        aliases: ['C-Level EA', 'Executive Assistant to CEO'],
        averageSalary: 85000,
        growthRate: 10
    },
    {
        id: 'senior-executive-assistant',
        title: 'Senior Executive Assistant',
        slug: 'senior-executive-assistant',
        category: 'admin',
        aliases: ['Senior EA', 'Executive Assistant Senior'],
        averageSalary: 78000,
        growthRate: 10
    },
    {
        id: 'administrative-director',
        title: 'Administrative Director',
        slug: 'administrative-director',
        category: 'admin',
        aliases: ['Director of Administration', 'Admin Director'],
        averageSalary: 95000,
        growthRate: 12
    },
    {
        id: 'office-manager-3',
        title: 'Office Manager',
        slug: 'office-manager-3',
        category: 'admin',
        aliases: ['Office Manager Lead', 'Senior Office Manager'],
        averageSalary: 68000,
        growthRate: 10
    },
    {
        id: 'department-assistant',
        title: 'Department Assistant',
        slug: 'department-assistant',
        category: 'admin',
        aliases: ['Department Administrative Assistant', 'Division Assistant'],
        averageSalary: 48000,
        growthRate: 8
    },
    {
        id: 'division-assistant',
        title: 'Division Assistant',
        slug: 'division-assistant',
        category: 'admin',
        aliases: ['Division Administrative Assistant', 'Divisional Assistant'],
        averageSalary: 52000,
        growthRate: 8
    },
    {
        id: 'executive-office-manager',
        title: 'Executive Office Manager',
        slug: 'executive-office-manager',
        category: 'admin',
        aliases: ['C-Suite Office Manager', 'Executive Suites Manager'],
        averageSalary: 78000,
        growthRate: 10
    },
    {
        id: 'administrative-services-manager',
        title: 'Administrative Services Manager',
        slug: 'administrative-services-manager',
        category: 'admin',
        aliases: ['Admin Services Manager', 'Office Services Manager'],
        averageSalary: 72000,
        growthRate: 10
    },
    {
        id: 'contract-administrator',
        title: 'Contract Administrator',
        slug: 'contract-administrator',
        category: 'admin',
        aliases: ['Contracts Admin', 'Contract Specialist'],
        averageSalary: 62000,
        growthRate: 12
    },
    {
        id: 'document-controller',
        title: 'Document Controller',
        slug: 'document-controller',
        category: 'admin',
        aliases: ['Document Control Specialist', 'Document Management Coordinator'],
        averageSalary: 58000,
        growthRate: 10
    },
    {
        id: 'records-manager-2',
        title: 'Records Manager',
        slug: 'records-manager-2',
        category: 'admin',
        aliases: ['Records Management', 'Document Records Manager'],
        averageSalary: 65000,
        growthRate: 10
    },
    {
        id: 'front-desk-manager',
        title: 'Front Desk Manager',
        slug: 'front-desk-manager',
        category: 'admin',
        aliases: ['Reception Manager', 'Front Office Manager'],
        averageSalary: 52000,
        growthRate: 8
    },
    {
        id: 'administrative-assistant-4',
        title: 'Administrative Assistant',
        slug: 'administrative-assistant-4',
        category: 'admin',
        aliases: ['Admin Assistant', 'Administrative Aid'],
        averageSalary: 44000,
        growthRate: 6
    },
    {
        id: 'office-services-coordinator',
        title: 'Office Services Coordinator',
        slug: 'office-services-coordinator',
        category: 'admin',
        aliases: ['Office Services Coordinator', 'Facilities Coordinator'],
        averageSalary: 48000,
        growthRate: 8
    },

    // Customer Service - Leadership (14 jobs)
    {
        id: 'vp-of-customer-service',
        title: 'VP of Customer Service',
        slug: 'vp-of-customer-service',
        category: 'customer-service',
        aliases: ['Vice President Customer Service', 'Customer Service VP'],
        averageSalary: 195000,
        growthRate: 16
    },
    {
        id: 'customer-service-director-2',
        title: 'Customer Service Director',
        slug: 'customer-service-director-2',
        category: 'customer-service',
        aliases: ['Director of Customer Service', 'CS Director'],
        averageSalary: 135000,
        growthRate: 14
    },
    {
        id: 'director-of-customer-experience',
        title: 'Director of Customer Experience',
        slug: 'director-of-customer-experience',
        category: 'customer-service',
        aliases: ['CX Director', 'Customer Experience Director'],
        averageSalary: 155000,
        growthRate: 20
    },
    {
        id: 'head-of-customer-support',
        title: 'Head of Customer Support',
        slug: 'head-of-customer-support',
        category: 'customer-service',
        aliases: ['Customer Support Head', 'Support Team Head'],
        averageSalary: 145000,
        growthRate: 18
    },
    {
        id: 'customer-success-director-2',
        title: 'Customer Success Director',
        slug: 'customer-success-director-2',
        category: 'customer-service',
        aliases: ['Director of Customer Success', 'CS Director'],
        averageSalary: 155000,
        growthRate: 20
    },
    {
        id: 'customer-support-director',
        title: 'Customer Support Director',
        slug: 'customer-support-director',
        category: 'customer-service',
        aliases: ['Director of Support', 'Technical Support Director'],
        averageSalary: 135000,
        growthRate: 16
    },
    {
        id: 'contact-center-director',
        title: 'Contact Center Director',
        slug: 'contact-center-director',
        category: 'customer-service',
        aliases: ['Director of Contact Center', 'Call Center Director'],
        averageSalary: 125000,
        growthRate: 12
    },
    {
        id: 'customer-service-manager-3',
        title: 'Customer Service Manager',
        slug: 'customer-service-manager-3',
        category: 'customer-service',
        aliases: ['CS Manager', 'Service Manager'],
        averageSalary: 78000,
        growthRate: 12
    },
    {
        id: 'customer-support-manager-2',
        title: 'Customer Support Manager',
        slug: 'customer-support-manager-2',
        category: 'customer-service',
        aliases: ['Support Manager', 'Technical Support Manager'],
        averageSalary: 82000,
        growthRate: 14
    },
    {
        id: 'client-services-director',
        title: 'Client Services Director',
        slug: 'client-services-director',
        category: 'customer-service',
        aliases: ['Director of Client Services', 'Client Service Director'],
        averageSalary: 125000,
        growthRate: 14
    },
    {
        id: 'customer-advocacy-manager',
        title: 'Customer Advocacy Manager',
        slug: 'customer-advocacy-manager',
        category: 'customer-service',
        aliases: ['Advocacy Manager', 'Customer Champion'],
        averageSalary: 105000,
        growthRate: 16
    },
    {
        id: 'customer-insights-manager',
        title: 'Customer Insights Manager',
        slug: 'customer-insights-manager',
        category: 'customer-service',
        aliases: ['Customer Research Manager', 'Voice of Customer Manager'],
        averageSalary: 115000,
        growthRate: 18
    },
    {
        id: 'customer-retention-director',
        title: 'Customer Retention Director',
        slug: 'customer-retention-director',
        category: 'customer-service',
        aliases: ['Director of Retention', 'Retention Marketing Director'],
        averageSalary: 135000,
        growthRate: 18
    },
    {
        id: 'customer-loyalty-manager',
        title: 'Customer Loyalty Manager',
        slug: 'customer-loyalty-manager',
        category: 'customer-service',
        aliases: ['Loyalty Program Manager', 'Customer Loyalty Lead'],
        averageSalary: 98000,
        growthRate: 16
    },
    {
        id: 'complaint-resolution-manager',
        title: 'Complaint Resolution Manager',
        slug: 'complaint-resolution-manager',
        category: 'customer-service',
        aliases: ['Complaints Manager', 'Escalations Manager'],
        averageSalary: 88000,
        growthRate: 14
    },

    // Design - Leadership & Creative (16 jobs)
    {
        id: 'chief-creative-officer-2',
        title: 'Chief Creative Officer',
        slug: 'chief-creative-officer-2',
        category: 'design',
        aliases: ['CCO', 'Executive Creative Director'],
        averageSalary: 245000,
        growthRate: 14
    },
    {
        id: 'design-director-4',
        title: 'Design Director',
        slug: 'design-director-4',
        category: 'design',
        aliases: ['Creative Design Director', 'Design Leadership'],
        averageSalary: 165000,
        growthRate: 14
    },
    {
        id: 'creative-director-4',
        title: 'Creative Director',
        slug: 'creative-director-4',
        category: 'design',
        aliases: ['CD Creative', 'Creative Design Director'],
        averageSalary: 155000,
        growthRate: 12
    },
    {
        id: 'ux-director',
        title: 'UX Director',
        slug: 'ux-director',
        category: 'design',
        aliases: ['Director of UX', 'User Experience Director'],
        averageSalary: 175000,
        growthRate: 22
    },
    {
        id: 'product-design-director',
        title: 'Product Design Director',
        slug: 'product-design-director',
        category: 'design',
        aliases: ['Director of Product Design', 'Design Product Director'],
        averageSalary: 185000,
        growthRate: 22
    },
    {
        id: 'design-systems-lead',
        title: 'Design Systems Lead',
        slug: 'design-systems-lead',
        category: 'design',
        aliases: ['Design Systems Manager', 'Component Library Lead'],
        averageSalary: 155000,
        growthRate: 24
    },
    {
        id: 'content-design-lead',
        title: 'Content Design Lead',
        slug: 'content-design-lead',
        category: 'design',
        aliases: ['UX Writing Lead', 'Content Strategy Design'],
        averageSalary: 145000,
        growthRate: 20
    },
    {
        id: 'service-designer-2',
        title: 'Service Designer',
        slug: 'service-designer-2',
        category: 'design',
        aliases: ['Service Design Specialist', 'Service Experience Designer'],
        averageSalary: 125000,
        growthRate: 22
    },
    {
        id: 'experience-designer',
        title: 'Experience Designer',
        slug: 'experience-designer',
        category: 'design',
        aliases: ['XD Designer', 'Customer Experience Designer'],
        averageSalary: 135000,
        growthRate: 20
    },
    {
        id: 'design-operations-manager',
        title: 'Design Operations Manager',
        slug: 'design-operations-manager',
        category: 'design',
        aliases: ['Design Ops Manager', 'Design Operations Lead'],
        averageSalary: 125000,
        growthRate: 20
    },
    {
        id: 'brand-design-director',
        title: 'Brand Design Director',
        slug: 'brand-design-director',
        category: 'design',
        aliases: ['Director of Brand Design', 'Brand Creative Director'],
        averageSalary: 165000,
        growthRate: 16
    },
    {
        id: 'marketing-design-director',
        title: 'Marketing Design Director',
        slug: 'marketing-design-director',
        category: 'design',
        aliases: ['Director of Marketing Design', 'Creative Marketing Director'],
        averageSalary: 155000,
        growthRate: 16
    },
    {
        id: 'communication-designer',
        title: 'Communication Designer',
        slug: 'communication-designer',
        category: 'design',
        aliases: ['Communications Design Specialist', 'Information Designer'],
        averageSalary: 98000,
        growthRate: 18
    },
    {
        id: 'information-architect-2',
        title: 'Information Architect',
        slug: 'information-architect-2',
        category: 'design',
        aliases: ['IA Specialist', 'Information Architecture Lead'],
        averageSalary: 115000,
        growthRate: 18
    },
    {
        id: 'industrial-designer-2',
        title: 'Industrial Designer',
        slug: 'industrial-designer-2',
        category: 'design',
        aliases: ['Product Industrial Designer', 'Manufacturing Designer'],
        averageSalary: 95000,
        growthRate: 12
    },
    {
        id: 'ux-writer',
        title: 'UX Writer',
        slug: 'ux-writer',
        category: 'design',
        aliases: ['Content Designer', 'UX Content Writer'],
        averageSalary: 115000,
        growthRate: 22
    },
    {
        id: 'design-research-lead',
        title: 'Design Research Lead',
        slug: 'design-research-lead',
        category: 'design',
        aliases: ['Design Research Manager', 'UX Research Lead'],
        averageSalary: 135000,
        growthRate: 22
    },

    // Engineering - Leadership & Architecture (18 jobs)
    {
        id: 'chief-technology-officer-3',
        title: 'Chief Technology Officer',
        slug: 'chief-technology-officer-3',
        category: 'engineering',
        aliases: ['CTO', 'Chief Technology Officer'],
        averageSalary: 295000,
        growthRate: 16
    },
    {
        id: 'vp-of-engineering-2',
        title: 'VP of Engineering',
        slug: 'vp-of-engineering-2',
        category: 'engineering',
        aliases: ['Vice President of Engineering', 'Engineering VP'],
        averageSalary: 245000,
        growthRate: 18
    },
    {
        id: 'director-of-engineering',
        title: 'Director of Engineering',
        slug: 'director-of-engineering',
        category: 'engineering',
        aliases: ['Engineering Director', 'Director of Software Engineering'],
        averageSalary: 195000,
        growthRate: 18
    },
    {
        id: 'head-of-engineering',
        title: 'Head of Engineering',
        slug: 'head-of-engineering',
        category: 'engineering',
        aliases: ['Engineering Head', 'Lead of Engineering'],
        averageSalary: 215000,
        growthRate: 20
    },
    {
        id: 'principal-engineer-2',
        title: 'Principal Engineer',
        slug: 'principal-engineer-2',
        category: 'engineering',
        aliases: ['Staff Engineer', 'Principal Software Engineer'],
        averageSalary: 195000,
        growthRate: 20
    },
    {
        id: 'distinguished-engineer',
        title: 'Distinguished Engineer',
        slug: 'distinguished-engineer',
        category: 'engineering',
        aliases: ['Principal Plus Engineer', 'Fellow Engineer'],
        averageSalary: 245000,
        growthRate: 18
    },
    {
        id: 'engineering-fellow',
        title: 'Engineering Fellow',
        slug: 'engineering-fellow',
        category: 'engineering',
        aliases: ['Technical Fellow', 'Principal Fellow'],
        averageSalary: 265000,
        growthRate: 16
    },
    {
        id: 'software-engineering-manager',
        title: 'Software Engineering Manager',
        slug: 'software-engineering-manager',
        category: 'engineering',
        aliases: ['Engineering Manager', 'Software Development Manager'],
        averageSalary: 175000,
        growthRate: 18
    },
    {
        id: 'technical-lead-2',
        title: 'Technical Lead',
        slug: 'technical-lead-2',
        category: 'engineering',
        aliases: ['Tech Lead', 'Team Lead'],
        averageSalary: 165000,
        growthRate: 18
    },
    {
        id: 'staff-engineer-2',
        title: 'Staff Engineer',
        slug: 'staff-engineer-2',
        category: 'engineering',
        aliases: ['Staff Software Engineer', 'Senior Staff Engineer'],
        averageSalary: 235000,
        growthRate: 22
    },
    {
        id: 'solutions-architect-3',
        title: 'Solutions Architect',
        slug: 'solutions-architect-3',
        category: 'engineering',
        aliases: ['Solution Architect', 'Enterprise Solutions Architect'],
        averageSalary: 175000,
        growthRate: 20
    },
    {
        id: 'enterprise-architect-2',
        title: 'Enterprise Architect',
        slug: 'enterprise-architect-2',
        category: 'engineering',
        aliases: ['Enterprise Solutions Architect', 'EA'],
        averageSalary: 185000,
        growthRate: 18
    },
    {
        id: 'cloud-architect-2',
        title: 'Cloud Architect',
        slug: 'cloud-architect-2',
        category: 'engineering',
        aliases: ['Cloud Solutions Architect', 'Cloud Infrastructure Architect'],
        averageSalary: 175000,
        growthRate: 26
    },
    {
        id: 'data-architect-3',
        title: 'Data Architect',
        slug: 'data-architect-3',
        category: 'engineering',
        aliases: ['Data Solution Architect', 'Enterprise Data Architect'],
        averageSalary: 165000,
        growthRate: 24
    },
    {
        id: 'mobile-architect',
        title: 'Mobile Architect',
        slug: 'mobile-architect',
        category: 'engineering',
        aliases: ['Mobile Solutions Architect', 'App Architect'],
        averageSalary: 165000,
        growthRate: 24
    },
    {
        id: 'frontend-architect',
        title: 'Frontend Architect',
        slug: 'frontend-architect',
        category: 'engineering',
        aliases: ['Frontend Solutions Architect', 'Client-Side Architect'],
        averageSalary: 165000,
        growthRate: 22
    },
    {
        id: 'backend-architect',
        title: 'Backend Architect',
        slug: 'backend-architect',
        category: 'engineering',
        aliases: ['Backend Solutions Architect', 'Server-Side Architect'],
        averageSalary: 170000,
        growthRate: 22
    },
    {
        id: 'devops-architect',
        title: 'DevOps Architect',
        slug: 'devops-architect',
        category: 'engineering',
        aliases: ['DevOps Solution Architect', 'DevOps Infrastructure Architect'],
        averageSalary: 175000,
        growthRate: 26
    },

    // Legal - Corporate & Specialized (16 jobs)
    {
        id: 'general-counsel-2',
        title: 'General Counsel',
        slug: 'general-counsel-2',
        category: 'legal',
        aliases: ['GC', 'Chief Legal Officer'],
        averageSalary: 245000,
        growthRate: 14
    },
    {
        id: 'chief-legal-officer',
        title: 'Chief Legal Officer',
        slug: 'chief-legal-officer',
        category: 'legal',
        aliases: ['CLO', 'Head of Legal'],
        averageSalary: 265000,
        growthRate: 14
    },
    {
        id: 'corporate-secretary-2',
        title: 'Corporate Secretary',
        slug: 'corporate-secretary-2',
        category: 'legal',
        aliases: ['Assistant Corporate Secretary', 'Corporate Secretary Officer'],
        averageSalary: 185000,
        growthRate: 12
    },
    {
        id: 'associate-general-counsel',
        title: 'Associate General Counsel',
        slug: 'associate-general-counsel',
        category: 'legal',
        aliases: ['AGC', 'Assistant General Counsel'],
        averageSalary: 175000,
        growthRate: 14
    },
    {
        id: 'regulatory-affairs-director',
        title: 'Regulatory Affairs Director',
        slug: 'regulatory-affairs-director',
        category: 'legal',
        aliases: ['Director of Regulatory Affairs', 'RA Director'],
        averageSalary: 155000,
        growthRate: 14
    },
    {
        id: 'corporate-governance-manager',
        title: 'Corporate Governance Manager',
        slug: 'corporate-governance-manager',
        category: 'legal',
        aliases: ['Governance Manager', 'Corporate Compliance Manager'],
        averageSalary: 145000,
        growthRate: 14
    },
    {
        id: 'securities-lawyer',
        title: 'Securities Lawyer',
        slug: 'securities-lawyer',
        category: 'legal',
        aliases: ['Securities Attorney', 'Capital Markets Lawyer'],
        averageSalary: 185000,
        growthRate: 12
    },
    {
        id: 'mergers-acquisitions-attorney',
        title: 'Mergers Acquisitions Attorney',
        slug: 'mergers-acquisitions-attorney',
        category: 'legal',
        aliases: ['M&A Lawyer', 'M&A Attorney'],
        averageSalary: 225000,
        growthRate: 12
    },
    {
        id: 'intellectual-property-lawyer',
        title: 'Intellectual Property Lawyer',
        slug: 'intellectual-property-lawyer',
        category: 'legal',
        aliases: ['IP Attorney', 'Patent Lawyer'],
        averageSalary: 175000,
        growthRate: 14
    },
    {
        id: 'employment-lawyer',
        title: 'Employment Lawyer',
        slug: 'employment-lawyer',
        category: 'legal',
        aliases: ['Labor Attorney', 'Employment Law Attorney'],
        averageSalary: 145000,
        growthRate: 12
    },
    {
        id: 'environmental-lawyer',
        title: 'Environmental Lawyer',
        slug: 'environmental-lawyer',
        category: 'legal',
        aliases: ['Environmental Attorney', 'Environmental Law Specialist'],
        averageSalary: 135000,
        growthRate: 14
    },
    {
        id: 'immigration-lawyer',
        title: 'Immigration Lawyer',
        slug: 'immigration-lawyer',
        category: 'legal',
        aliases: ['Immigration Attorney', 'Visa Lawyer'],
        averageSalary: 95000,
        growthRate: 14
    },
    {
        id: 'real-estate-attorney-2',
        title: 'Real Estate Attorney',
        slug: 'real-estate-attorney-2',
        category: 'legal',
        aliases: ['Real Estate Lawyer', 'Property Attorney'],
        averageSalary: 125000,
        growthRate: 12
    },
    {
        id: 'tax-attorney-2',
        title: 'Tax Attorney',
        slug: 'tax-attorney-2',
        category: 'legal',
        aliases: ['Tax Lawyer', 'Taxation Attorney'],
        averageSalary: 155000,
        growthRate: 12
    },
    {
        id: 'patent-attorney-2',
        title: 'Patent Attorney',
        slug: 'patent-attorney-2',
        category: 'legal',
        aliases: ['Patent Lawyer', 'Intellectual Property Attorney'],
        averageSalary: 165000,
        growthRate: 14
    },
    {
        id: 'litigation-director',
        title: 'Litigation Director',
        slug: 'litigation-director',
        category: 'legal',
        aliases: ['Director of Litigation', 'Litigation Manager'],
        averageSalary: 175000,
        growthRate: 12
    },
    {
        id: 'legal-operations-manager',
        title: 'Legal Operations Manager',
        slug: 'legal-operations-manager',
        category: 'legal',
        aliases: ['Legal Ops Manager', 'Legal Department Manager'],
        averageSalary: 125000,
        growthRate: 14
    },

    // Education - Higher Ed Administration (14 jobs)
    {
        id: 'university-president',
        title: 'University President',
        slug: 'university-president',
        category: 'education',
        aliases: ['College President', 'University Chancellor'],
        averageSalary: 285000,
        growthRate: 12
    },
    {
        id: 'college-dean',
        title: 'College Dean',
        slug: 'college-dean',
        category: 'education',
        aliases: ['Academic Dean', 'Department Chair'],
        averageSalary: 155000,
        growthRate: 14
    },
    {
        id: 'academic-director',
        title: 'Academic Director',
        slug: 'academic-director',
        category: 'education',
        aliases: ['Director of Education', 'Academic Program Director'],
        averageSalary: 125000,
        growthRate: 14
    },
    {
        id: 'department-head-education',
        title: 'Department Head',
        slug: 'department-head-education',
        category: 'education',
        aliases: ['Academic Department Head', 'Department Chair'],
        averageSalary: 135000,
        growthRate: 14
    },
    {
        id: 'program-director-education',
        title: 'Program Director',
        slug: 'program-director-education',
        category: 'education',
        aliases: ['Academic Program Director', 'Education Program Director'],
        averageSalary: 105000,
        growthRate: 14
    },
    {
        id: 'curriculum-director',
        title: 'Curriculum Director',
        slug: 'curriculum-director',
        category: 'education',
        aliases: ['Director of Curriculum', 'Curriculum Coordinator'],
        averageSalary: 115000,
        growthRate: 14
    },
    {
        id: 'director-of-admissions',
        title: 'Director of Admissions',
        slug: 'director-of-admissions',
        category: 'education',
        aliases: ['Admissions Director', 'Enrollment Director'],
        averageSalary: 105000,
        growthRate: 14
    },
    {
        id: 'director-of-student-affairs',
        title: 'Director of Student Affairs',
        slug: 'director-of-student-affairs',
        category: 'education',
        aliases: ['Student Affairs Director', 'Student Life Director'],
        averageSalary: 105000,
        growthRate: 14
    },
    {
        id: 'registrar',
        title: 'Registrar',
        slug: 'registrar',
        category: 'education',
        aliases: ['Academic Registrar', 'College Registrar'],
        averageSalary: 88000,
        growthRate: 10
    },
    {
        id: 'academic-advisor-2',
        title: 'Academic Advisor',
        slug: 'academic-advisor-2',
        category: 'education',
        aliases: ['College Advisor', 'Student Advisor'],
        averageSalary: 58000,
        growthRate: 12
    },
    {
        id: 'financial-aid-director',
        title: 'Financial Aid Director',
        slug: 'financial-aid-director',
        category: 'education',
        aliases: ['Director of Financial Aid', 'Student Finance Director'],
        averageSalary: 92000,
        growthRate: 12
    },
    {
        id: 'student-success-coordinator',
        title: 'Student Success Coordinator',
        slug: 'student-success-coordinator',
        category: 'education',
        aliases: ['Student Success Advisor', 'Retention Coordinator'],
        averageSalary: 52000,
        growthRate: 14
    },
    {
        id: 'higher-education-consultant',
        title: 'Higher Education Consultant',
        slug: 'higher-education-consultant',
        category: 'education',
        aliases: ['Education Consultant', 'Academic Consultant'],
        averageSalary: 95000,
        growthRate: 14
    },
    {
        id: 'distance-learning-director',
        title: 'Distance Learning Director',
        slug: 'distance-learning-director',
        category: 'education',
        aliases: ['Online Learning Director', 'E-Learning Director'],
        averageSalary: 115000,
        growthRate: 18
    },

    // Real Estate - Sales & Management (16 jobs)
    {
        id: 'real-estate-broker-3',
        title: 'Real Estate Broker',
        slug: 'real-estate-broker-3',
        category: 'real-estate',
        aliases: ['Real Estate Brokerage Owner', 'Broker Owner'],
        averageSalary: 115000,
        growthRate: 12
    },
    {
        id: 'broker-owner',
        title: 'Broker Owner',
        slug: 'broker-owner',
        category: 'real-estate',
        aliases: ['Real Estate Broker Owner', 'Brokerage Owner'],
        averageSalary: 145000,
        growthRate: 14
    },
    {
        id: 'team-leader-real-estate',
        title: 'Real Estate Team Leader',
        slug: 'team-leader-real-estate',
        category: 'real-estate',
        aliases: ['Real Estate Team Lead', 'Agent Team Leader'],
        averageSalary: 125000,
        growthRate: 14
    },
    {
        id: 'selling-manager-real-estate',
        title: 'Selling Manager Real Estate',
        slug: 'selling-manager-real-estate',
        category: 'real-estate',
        aliases: ['Real Estate Selling Manager', 'Sales Manager Real Estate'],
        averageSalary: 105000,
        growthRate: 12
    },
    {
        id: 'real-estate-mentor',
        title: 'Real Estate Mentor',
        slug: 'real-estate-mentor',
        category: 'real-estate',
        aliases: ['Real Estate Coach', 'Agent Mentor'],
        averageSalary: 85000,
        growthRate: 14
    },
    {
        id: 'luxury-property-specialist',
        title: 'Luxury Property Specialist',
        slug: 'luxury-property-specialist',
        category: 'real-estate',
        aliases: ['Luxury Real Estate Agent', 'High-End Property Specialist'],
        averageSalary: 155000,
        growthRate: 14
    },
    {
        id: 'commercial-real-estate-broker',
        title: 'Commercial Real Estate Broker',
        slug: 'commercial-real-estate-broker',
        category: 'real-estate',
        aliases: ['Commercial Broker', 'Commercial Property Broker'],
        averageSalary: 135000,
        growthRate: 14
    },
    {
        id: 'real-estate-investor-2',
        title: 'Real Estate Investor',
        slug: 'real-estate-investor-2',
        category: 'real-estate',
        aliases: ['Property Investor', 'Real Estate Entrepreneur'],
        averageSalary: 125000,
        growthRate: 14
    },
    {
        id: 'property-developer',
        title: 'Property Developer',
        slug: 'property-developer',
        category: 'real-estate',
        aliases: ['Real Estate Developer', 'Property Development'],
        averageSalary: 145000,
        growthRate: 14
    },
    {
        id: 'real-estate-wholesaler',
        title: 'Real Estate Wholesaler',
        slug: 'real-estate-wholesaler',
        category: 'real-estate',
        aliases: ['Property Wholesaler', 'Real Estate Flipping'],
        averageSalary: 85000,
        growthRate: 16
    },
    {
        id: 'house-flipper',
        title: 'House Flipper',
        slug: 'house-flipper',
        category: 'real-estate',
        aliases: ['Property Flipper', 'Real Estate Flipping'],
        averageSalary: 75000,
        growthRate: 14
    },
    {
        id: 'rental-property-owner',
        title: 'Rental Property Owner',
        slug: 'rental-property-owner',
        category: 'real-estate',
        aliases: ['Landlord', 'Rental Property Investor'],
        averageSalary: 65000,
        growthRate: 12
    },
    {
        id: 'property-management-director',
        title: 'Property Management Director',
        slug: 'property-management-director',
        category: 'real-estate',
        aliases: ['Director of Property Management', 'Property Management VP'],
        averageSalary: 125000,
        growthRate: 14
    },
    {
        id: 'regional-property-director',
        title: 'Regional Property Director',
        slug: 'regional-property-director',
        category: 'real-estate',
        aliases: ['Regional Director Real Estate', 'Multi-Site Director'],
        averageSalary: 135000,
        growthRate: 14
    },
    {
        id: 'community-association-manager',
        title: 'Community Association Manager',
        slug: 'community-association-manager',
        category: 'real-estate',
        aliases: ['HOA Manager', 'Community Manager'],
        averageSalary: 78000,
        growthRate: 12
    },
    {
        id: 'leasing-director',
        title: 'Leasing Director',
        slug: 'leasing-director',
        category: 'real-estate',
        aliases: ['Director of Leasing', 'Leasing VP'],
        averageSalary: 115000,
        growthRate: 14
    },
    {
        id: 'real-estate-analyst',
        title: 'Real Estate Analyst',
        slug: 'real-estate-analyst',
        category: 'real-estate',
        aliases: ['Property Analyst', 'Real Estate Market Analyst'],
        averageSalary: 85000,
        growthRate: 14
    },

    // Skilled Trades - Specializations (16 jobs)
    {
        id: 'solar-panel-installer',
        title: 'Solar Panel Installer',
        slug: 'solar-panel-installer',
        category: 'skilled-trades',
        aliases: ['PV Installer', 'Solar Energy Installer'],
        averageSalary: 58000,
        growthRate: 22
    },
    {
        id: 'wind-turbine-technician',
        title: 'Wind Turbine Technician',
        slug: 'wind-turbine-technician',
        category: 'skilled-trades',
        aliases: ['Wind Tech', 'Wind Energy Technician'],
        averageSalary: 62000,
        growthRate: 28
    },
    {
        id: 'hvac-installation-technician',
        title: 'HVAC Installation Technician',
        slug: 'hvac-installation-technician',
        category: 'skilled-trades',
        aliases: ['HVAC Installer', 'Heating Installer'],
        averageSalary: 58000,
        growthRate: 14
    },
    {
        id: 'refrigeration-technician-2',
        title: 'Refrigeration Technician',
        slug: 'refrigeration-technician-2',
        category: 'skilled-trades',
        aliases: ['Refrigeration Tech', 'Cooling Systems Technician'],
        averageSalary: 56000,
        growthRate: 12
    },
    {
        id: 'fire-protection-technician',
        title: 'Fire Protection Technician',
        slug: 'fire-protection-technician',
        category: 'skilled-trades',
        aliases: ['Fire Safety Tech', 'Fire Suppression Technician'],
        averageSalary: 58000,
        growthRate: 14
    },
    {
        id: 'fire-alarm-technician',
        title: 'Fire Alarm Technician',
        slug: 'fire-alarm-technician',
        category: 'skilled-trades',
        aliases: ['Fire Alarm Installer', 'Fire Safety Systems Technician'],
        averageSalary: 56000,
        growthRate: 14
    },
    {
        id: 'security-alarm-technician',
        title: 'Security Alarm Technician',
        slug: 'security-alarm-technician',
        category: 'skilled-trades',
        aliases: ['Alarm Technician', 'Security Systems Installer'],
        averageSalary: 52000,
        growthRate: 14
    },
    {
        id: 'elevator-technician',
        title: 'Elevator Technician',
        slug: 'elevator-technician',
        category: 'skilled-trades',
        aliases: ['Elevator Installer', 'Elevator Repair Technician'],
        averageSalary: 92000,
        growthRate: 14
    },
    {
        id: 'escalator-technician',
        title: 'Escalator Technician',
        slug: 'escalator-technician',
        category: 'skilled-trades',
        aliases: ['Escalator Repair', 'Moving Walkway Technician'],
        averageSalary: 88000,
        growthRate: 12
    },
    {
        id: 'locksmith',
        title: 'Locksmith',
        slug: 'locksmith',
        category: 'skilled-trades',
        aliases: ['Locksmith Technician', 'Security Locksmith'],
        averageSalary: 48000,
        growthRate: 10
    },
    {
        id: 'landscaper-2',
        title: 'Landscaper',
        slug: 'landscaper-2',
        category: 'skilled-trades',
        aliases: ['Landscaping Technician', 'Groundskeeper'],
        averageSalary: 38000,
        growthRate: 10
    },
    {
        id: 'tree-surgeon',
        title: 'Tree Surgeon',
        slug: 'tree-surgeon',
        category: 'skilled-trades',
        aliases: ['Arborist', 'Tree Care Specialist'],
        averageSalary: 52000,
        growthRate: 12
    },
    {
        id: 'groundskeeper-2',
        title: 'Groundskeeper',
        slug: 'groundskeeper-2',
        category: 'skilled-trades',
        aliases: ['Grounds Maintenance', 'Landscape Maintenance'],
        averageSalary: 35000,
        growthRate: 8
    },
    {
        id: 'pest-control-technician',
        title: 'Pest Control Technician',
        slug: 'pest-control-technician',
        category: 'skilled-trades',
        aliases: ['Exterminator', 'Pest Control Specialist'],
        averageSalary: 42000,
        growthRate: 10
    },
    {
        id: 'janitor-2',
        title: 'Janitor',
        slug: 'janitor-2',
        category: 'skilled-trades',
        aliases: ['Custodian', 'Cleaning Technician'],
        averageSalary: 32000,
        growthRate: 6
    },
    {
        id: 'custodian-2',
        title: 'Custodian',
        slug: 'custodian-2',
        category: 'skilled-trades',
        aliases: ['Building Custodian', 'School Custodian'],
        averageSalary: 34000,
        growthRate: 6
    },
    {
        id: 'maintenance-technician',
        title: 'Maintenance Technician',
        slug: 'maintenance-technician',
        category: 'skilled-trades',
        aliases: ['Facilities Maintenance', 'Building Maintenance Technician'],
        averageSalary: 48000,
        growthRate: 10
    },

    // Hospitality - Events & Services (16 jobs)
    {
        id: 'event-manager-2',
        title: 'Event Manager',
        slug: 'event-manager-2',
        category: 'hospitality',
        aliases: ['Events Manager', 'Event Planning Manager'],
        averageSalary: 68000,
        growthRate: 16
    },
    {
        id: 'wedding-planner',
        title: 'Wedding Planner',
        slug: 'wedding-planner',
        category: 'hospitality',
        aliases: ['Wedding Coordinator', 'Bridal Consultant'],
        averageSalary: 58000,
        growthRate: 14
    },
    {
        id: 'event-coordinator-3',
        title: 'Event Coordinator',
        slug: 'event-coordinator-3',
        category: 'hospitality',
        aliases: ['Events Coordinator', 'Event Planning Coordinator'],
        averageSalary: 48000,
        growthRate: 14
    },
    {
        id: 'conference-services-manager',
        title: 'Conference Services Manager',
        slug: 'conference-services-manager',
        category: 'hospitality',
        aliases: ['Conference Manager', 'Events Services Manager'],
        averageSalary: 62000,
        growthRate: 14
    },
    {
        id: 'banquet-manager',
        title: 'Banquet Manager',
        slug: 'banquet-manager',
        category: 'hospitality',
        aliases: ['Banquet Captain', 'Events Banquet Manager'],
        averageSalary: 58000,
        growthRate: 12
    },
    {
        id: 'catering-manager',
        title: 'Catering Manager',
        slug: 'catering-manager',
        category: 'hospitality',
        aliases: ['Catering Director', 'Food Service Manager'],
        averageSalary: 62000,
        growthRate: 14
    },
    {
        id: 'food-service-manager-2',
        title: 'Food Service Manager',
        slug: 'food-service-manager-2',
        category: 'hospitality',
        aliases: ['Food Service Director', 'Dining Services Manager'],
        averageSalary: 62000,
        growthRate: 14
    },
    {
        id: 'dining-room-manager',
        title: 'Dining Room Manager',
        slug: 'dining-room-manager',
        category: 'hospitality',
        aliases: ['Restaurant Manager', 'Dining Room Supervisor'],
        averageSalary: 58000,
        growthRate: 12
    },
    {
        id: 'kitchen-manager-2',
        title: 'Kitchen Manager',
        slug: 'kitchen-manager-2',
        category: 'hospitality',
        aliases: ['Kitchen Head', 'Back of House Manager'],
        averageSalary: 58000,
        growthRate: 12
    },
    {
        id: 'sous-chef-2',
        title: 'Sous Chef',
        slug: 'sous-chef-2',
        category: 'hospitality',
        aliases: ['Second Chef', 'Assistant Executive Chef'],
        averageSalary: 62000,
        growthRate: 12
    },
    {
        id: 'executive-chef-2',
        title: 'Executive Chef',
        slug: 'executive-chef-2',
        category: 'hospitality',
        aliases: ['Head Chef', 'Executive Kitchen Chef'],
        averageSalary: 78000,
        growthRate: 12
    },
    {
        id: 'head-chef-2',
        title: 'Head Chef',
        slug: 'head-chef-2',
        category: 'hospitality',
        aliases: ['Kitchen Head', 'Lead Chef'],
        averageSalary: 72000,
        growthRate: 12
    },
    {
        id: 'pastry-chef-2',
        title: 'Pastry Chef',
        slug: 'pastry-chef-2',
        category: 'hospitality',
        aliases: ['Dessert Chef', 'Pastry Head Chef'],
        averageSalary: 58000,
        growthRate: 12
    },
    {
        id: 'baker-3',
        title: 'Baker',
        slug: 'baker-3',
        category: 'hospitality',
        aliases: ['Bakery Baker', 'Pastry Baker'],
        averageSalary: 36000,
        growthRate: 8
    },
    {
        id: 'barista-2',
        title: 'Barista',
        slug: 'barista-2',
        category: 'hospitality',
        aliases: ['Coffee Barista', 'Coffee Shop Barista'],
        averageSalary: 32000,
        growthRate: 12
    },
    {
        id: 'mixologist',
        title: 'Mixologist',
        slug: 'mixologist',
        category: 'hospitality',
        aliases: ['Bartender Mixologist', 'Craft Bartender'],
        averageSalary: 42000,
        growthRate: 12
    },
    {
        id: 'sommelier',
        title: 'Sommelier',
        slug: 'sommelier',
        category: 'hospitality',
        aliases: ['Wine Steward', 'Wine Sommelier'],
        averageSalary: 62000,
        growthRate: 14
    },

    // Transportation - Specialized (16 jobs)
    {
        id: 'logistics-director',
        title: 'Logistics Director',
        slug: 'logistics-director',
        category: 'transportation',
        aliases: ['Director of Logistics', 'Logistics VP'],
        averageSalary: 145000,
        growthRate: 18
    },
    {
        id: 'supply-chain-director',
        title: 'Supply Chain Director',
        slug: 'supply-chain-director',
        category: 'transportation',
        aliases: ['Director of Supply Chain', 'SC Director'],
        averageSalary: 155000,
        growthRate: 18
    },
    {
        id: 'vp-of-logistics',
        title: 'VP of Logistics',
        slug: 'vp-of-logistics',
        category: 'transportation',
        aliases: ['Vice President of Logistics', 'Logistics VP'],
        averageSalary: 195000,
        growthRate: 18
    },
    {
        id: 'vp-of-supply-chain',
        title: 'VP of Supply Chain',
        slug: 'vp-of-supply-chain',
        category: 'transportation',
        aliases: ['Vice President Supply Chain', 'SC VP'],
        averageSalary: 205000,
        growthRate: 20
    },
    {
        id: 'logistics-coordinator-3',
        title: 'Logistics Coordinator',
        slug: 'logistics-coordinator-3',
        category: 'transportation',
        aliases: ['Logistics Coordination', 'Shipping Coordinator'],
        averageSalary: 55000,
        growthRate: 14
    },
    {
        id: 'export-coordinator',
        title: 'Export Coordinator',
        slug: 'export-coordinator',
        category: 'transportation',
        aliases: ['Export Documentation', 'Export Specialist'],
        averageSalary: 58000,
        growthRate: 12
    },
    {
        id: 'import-coordinator',
        title: 'Import Coordinator',
        slug: 'import-coordinator',
        category: 'transportation',
        aliases: ['Import Documentation', 'Import Specialist'],
        averageSalary: 56000,
        growthRate: 12
    },
    {
        id: 'freight-forwarder-2',
        title: 'Freight Forwarder',
        slug: 'freight-forwarder-2',
        category: 'transportation',
        aliases: ['Freight Forwarding', 'Cargo Forwarder'],
        averageSalary: 62000,
        growthRate: 12
    },
    {
        id: 'shipping-coordinator-2',
        title: 'Shipping Coordinator',
        slug: 'shipping-coordinator-2',
        category: 'transportation',
        aliases: ['Shipping Manager', 'Export Shipping Coordinator'],
        averageSalary: 54000,
        growthRate: 10
    },
    {
        id: 'warehouse-supervisor',
        title: 'Warehouse Supervisor',
        slug: 'warehouse-supervisor',
        category: 'transportation',
        aliases: ['Warehouse Team Lead', 'Distribution Supervisor'],
        averageSalary: 58000,
        growthRate: 12
    },
    {
        id: 'fulfillment-associate',
        title: 'Fulfillment Associate',
        slug: 'fulfillment-associate',
        category: 'transportation',
        aliases: ['Order Fulfillment', 'Warehouse Associate'],
        averageSalary: 38000,
        growthRate: 14
    },
    {
        id: 'order-picker',
        title: 'Order Picker',
        slug: 'order-picker',
        category: 'transportation',
        aliases: ['Warehouse Picker', 'Order Selector'],
        averageSalary: 36000,
        growthRate: 12
    },
    {
        id: 'forklift-operator',
        title: 'Forklift Operator',
        slug: 'forklift-operator',
        category: 'transportation',
        aliases: ['Forklift Driver', 'Forklift Truck Operator'],
        averageSalary: 40000,
        growthRate: 10
    },
    {
        id: 'material-handler',
        title: 'Material Handler',
        slug: 'material-handler',
        category: 'transportation',
        aliases: ['Materials Handler', 'Warehouse Material Handler'],
        averageSalary: 36000,
        growthRate: 10
    },
    {
        id: 'shipping-receiver',
        title: 'Shipping Receiver',
        slug: 'shipping-receiver',
        category: 'transportation',
        aliases: ['Receiving Clerk', 'Warehouse Receiver'],
        averageSalary: 36000,
        growthRate: 10
    },
    {
        id: 'quality-control-inspector',
        title: 'Quality Control Inspector',
        slug: 'quality-control-inspector',
        category: 'transportation',
        aliases: ['QC Inspector', 'Quality Assurance Inspector'],
        averageSalary: 42000,
        growthRate: 10
    },
    {
        id: 'traffic-manager',
        title: 'Traffic Manager',
        slug: 'traffic-manager',
        category: 'transportation',
        aliases: ['Logistics Traffic Manager', 'Transportation Traffic Manager'],
        averageSalary: 68000,
        growthRate: 12
    },

    // ==================== BATCH 20 - 100 New Jobs ====================

    // Technology - Batch 20 (6 jobs)
    {
        id: 'machine-learning-engineer-2',
        title: 'Machine Learning Engineer',
        slug: 'machine-learning-engineer-2',
        category: 'technology',
        aliases: ['ML Engineer', 'Machine Learning Developer'],
        averageSalary: 165000,
        growthRate: 35
    },
    {
        id: 'deep-learning-engineer',
        title: 'Deep Learning Engineer',
        slug: 'deep-learning-engineer',
        category: 'technology',
        aliases: ['Deep Learning Developer', 'Neural Network Engineer'],
        averageSalary: 175000,
        growthRate: 38
    },
    {
        id: 'computer-vision-engineer',
        title: 'Computer Vision Engineer',
        slug: 'computer-vision-engineer',
        category: 'technology',
        aliases: ['CV Engineer', 'Visual AI Engineer'],
        averageSalary: 160000,
        growthRate: 32
    },
    {
        id: 'natural-language-processing-engineer',
        title: 'Natural Language Processing Engineer',
        slug: 'natural-language-processing-engineer',
        category: 'technology',
        aliases: ['NLP Engineer', 'Computational Linguist'],
        averageSalary: 155000,
        growthRate: 30
    },
    {
        id: 'reinforcement-learning-engineer',
        title: 'Reinforcement Learning Engineer',
        slug: 'reinforcement-learning-engineer',
        category: 'technology',
        aliases: ['RL Engineer', 'AI Agent Engineer'],
        averageSalary: 170000,
        growthRate: 36
    },
    {
        id: 'ai-ethics-engineer',
        title: 'AI Ethics Engineer',
        slug: 'ai-ethics-engineer',
        category: 'technology',
        aliases: ['Responsible AI Engineer', 'AI Safety Engineer'],
        averageSalary: 145000,
        growthRate: 28
    },

    // Marketing - Batch 20 (6 jobs)
    {
        id: 'community-manager-2',
        title: 'Community Manager',
        slug: 'community-manager-2',
        category: 'marketing',
        aliases: ['Online Community Manager', 'Community Lead'],
        averageSalary: 85000,
        growthRate: 20
    },
    {
        id: 'demand-generation-manager',
        title: 'Demand Generation Manager',
        slug: 'demand-generation-manager',
        category: 'marketing',
        aliases: ['Demand Gen Manager', 'Revenue Marketing Manager'],
        averageSalary: 110000,
        growthRate: 22
    },
    {
        id: 'product-marketing-manager-2',
        title: 'Product Marketing Manager',
        slug: 'product-marketing-manager-2',
        category: 'marketing',
        aliases: ['PMM', 'Product Marketing Specialist'],
        averageSalary: 120000,
        growthRate: 20
    },
    {
        id: 'growth-marketing-manager',
        title: 'Growth Marketing Manager',
        slug: 'growth-marketing-manager',
        category: 'marketing',
        aliases: ['Growth Manager', 'Growth Hacking Manager'],
        averageSalary: 115000,
        growthRate: 24
    },
    {
        id: 'brand-manager-2',
        title: 'Brand Manager',
        slug: 'brand-manager-2',
        category: 'marketing',
        aliases: ['Brand Marketing Manager', 'Product Brand Manager'],
        averageSalary: 115000,
        growthRate: 16
    },
    {
        id: 'content-strategist-2',
        title: 'Content Strategist',
        slug: 'content-strategist-2',
        category: 'marketing',
        aliases: ['Content Strategy Manager', 'Content Lead'],
        averageSalary: 95000,
        growthRate: 18
    },

    // Sales - Batch 20 (6 jobs)
    {
        id: 'sales-development-representative-2',
        title: 'Sales Development Representative',
        slug: 'sales-development-representative-2',
        category: 'sales',
        aliases: ['SDR', 'Sales Development Rep'],
        averageSalary: 55000,
        growthRate: 18
    },
    {
        id: 'business-development-representative-2',
        title: 'Business Development Representative',
        slug: 'business-development-representative-2',
        category: 'sales',
        aliases: ['BDR', 'Business Development Rep'],
        averageSalary: 55000,
        growthRate: 18
    },
    {
        id: 'inside-sales-representative-2',
        title: 'Inside Sales Representative',
        slug: 'inside-sales-representative-2',
        category: 'sales',
        aliases: ['Inside Sales Rep', 'Remote Sales Representative'],
        averageSalary: 58000,
        growthRate: 16
    },
    {
        id: 'outside-sales-representative',
        title: 'Outside Sales Representative',
        slug: 'outside-sales-representative',
        category: 'sales',
        aliases: ['Field Sales Representative', 'External Sales Rep'],
        averageSalary: 65000,
        growthRate: 14
    },
    {
        id: 'account-executive-3',
        title: 'Account Executive',
        slug: 'account-executive-3',
        category: 'sales',
        aliases: ['Sales Executive', 'Account Manager Sales'],
        averageSalary: 85000,
        growthRate: 18
    },
    {
        id: 'sales-coordinator-2',
        title: 'Sales Coordinator',
        slug: 'sales-coordinator-2',
        category: 'sales',
        aliases: ['Sales Admin', 'Sales Support Coordinator'],
        averageSalary: 52000,
        growthRate: 12
    },

    // Healthcare - Batch 20 (6 jobs)
    {
        id: 'medical-assistant-2',
        title: 'Medical Assistant',
        slug: 'medical-assistant-2',
        category: 'healthcare',
        aliases: ['Certified Medical Assistant', 'Clinical Medical Assistant'],
        averageSalary: 42000,
        growthRate: 18
    },
    {
        id: 'phlebotomist-2',
        title: 'Phlebotomist',
        slug: 'phlebotomist-2',
        category: 'healthcare',
        aliases: ['Phlebotomy Technician', 'Blood Draw Specialist'],
        averageSalary: 40000,
        growthRate: 16
    },
    {
        id: 'medical-technologist',
        title: 'Medical Technologist',
        slug: 'medical-technologist',
        category: 'healthcare',
        aliases: ['Clinical Laboratory Technologist', 'Medical Lab Scientist'],
        averageSalary: 58000,
        growthRate: 14
    },
    {
        id: 'radiologic-technologist',
        title: 'Radiologic Technologist',
        slug: 'radiologic-technologist',
        category: 'healthcare',
        aliases: ['Rad Tech', 'X-Ray Technologist'],
        averageSalary: 65000,
        growthRate: 12
    },
    {
        id: 'sonographer-2',
        title: 'Sonographer',
        slug: 'sonographer-2',
        category: 'healthcare',
        aliases: ['Ultrasound Technician', 'Ultrasound Technologist'],
        averageSalary: 75000,
        growthRate: 14
    },
    {
        id: 'occupational-therapist-2',
        title: 'Occupational Therapist',
        slug: 'occupational-therapist-2',
        category: 'healthcare',
        aliases: ['OT', 'Occupational Therapy Practitioner'],
        averageSalary: 90000,
        growthRate: 16
    },

    // Finance - Batch 20 (6 jobs)
    {
        id: 'financial-advisor-2',
        title: 'Financial Advisor',
        slug: 'financial-advisor-2',
        category: 'finance',
        aliases: ['Wealth Manager', 'Financial Consultant'],
        averageSalary: 95000,
        growthRate: 14
    },
    {
        id: 'investment-analyst',
        title: 'Investment Analyst',
        slug: 'investment-analyst',
        category: 'finance',
        aliases: ['Investment Research Analyst', 'Securities Analyst'],
        averageSalary: 95000,
        growthRate: 16
    },
    {
        id: 'portfolio-manager-2',
        title: 'Portfolio Manager',
        slug: 'portfolio-manager-2',
        category: 'finance',
        aliases: ['Investment Portfolio Manager', 'Fund Manager'],
        averageSalary: 135000,
        growthRate: 14
    },
    {
        id: 'risk-manager-2',
        title: 'Risk Manager',
        slug: 'risk-manager-2',
        category: 'finance',
        aliases: ['Enterprise Risk Manager', 'Risk Management Manager'],
        averageSalary: 120000,
        growthRate: 16
    },
    {
        id: 'credit-analyst-2',
        title: 'Credit Analyst',
        slug: 'credit-analyst-2',
        category: 'finance',
        aliases: ['Credit Risk Analyst', 'Loan Analyst'],
        averageSalary: 70000,
        growthRate: 12
    },
    {
        id: 'treasury-manager-2',
        title: 'Treasury Manager',
        slug: 'treasury-manager-2',
        category: 'finance',
        aliases: ['Corporate Treasury Manager', 'Treasury Operations Manager'],
        averageSalary: 115000,
        growthRate: 14
    },

    // HR - Batch 20 (6 jobs)
    {
        id: 'hr-coordinator-2',
        title: 'HR Coordinator',
        slug: 'hr-coordinator-2',
        category: 'hr',
        aliases: ['Human Resources Coordinator', 'HR Admin'],
        averageSalary: 50000,
        growthRate: 14
    },
    {
        id: 'recruiter-3',
        title: 'Recruiter',
        slug: 'recruiter-3',
        category: 'hr',
        aliases: ['Technical Recruiter', 'Talent Acquisition Specialist'],
        averageSalary: 60000,
        growthRate: 18
    },
    {
        id: 'technical-recruiter-2',
        title: 'Technical Recruiter',
        slug: 'technical-recruiter-2',
        category: 'hr',
        aliases: ['IT Recruiter', 'Tech Recruiter'],
        averageSalary: 70000,
        growthRate: 20
    },
    {
        id: 'hr-business-partner-2',
        title: 'HR Business Partner',
        slug: 'hr-business-partner-2',
        category: 'hr',
        aliases: ['HRBP', 'Strategic HR Partner'],
        averageSalary: 105000,
        growthRate: 16
    },
    {
        id: 'training-and-development-manager',
        title: 'Training and Development Manager',
        slug: 'training-and-development-manager',
        category: 'hr',
        aliases: ['Learning and Development Manager', 'Training Manager'],
        averageSalary: 85000,
        growthRate: 16
    },
    {
        id: 'compensation-analyst-2',
        title: 'Compensation Analyst',
        slug: 'compensation-analyst-2',
        category: 'hr',
        aliases: ['Compensation and Benefits Analyst', 'Total Rewards Analyst'],
        averageSalary: 80000,
        growthRate: 14
    },

    // Admin - Batch 20 (6 jobs)
    {
        id: 'administrative-assistant-3',
        title: 'Administrative Assistant',
        slug: 'administrative-assistant-3',
        category: 'admin',
        aliases: ['Admin Assistant', 'Office Assistant'],
        averageSalary: 45000,
        growthRate: 10
    },
    {
        id: 'receptionist-2',
        title: 'Receptionist',
        slug: 'receptionist-2',
        category: 'admin',
        aliases: ['Front Desk Receptionist', 'Office Receptionist'],
        averageSalary: 36000,
        growthRate: 8
    },
    {
        id: 'data-entry-clerk-2',
        title: 'Data Entry Clerk',
        slug: 'data-entry-clerk-2',
        category: 'admin',
        aliases: ['Data Entry Specialist', 'Data Entry Operator'],
        averageSalary: 38000,
        growthRate: 8
    },
    {
        id: 'virtual-assistant-2',
        title: 'Virtual Assistant',
        slug: 'virtual-assistant-2',
        category: 'admin',
        aliases: ['VA', 'Online Administrative Assistant'],
        averageSalary: 48000,
        growthRate: 16
    },
    {
        id: 'office-clerk',
        title: 'Office Clerk',
        slug: 'office-clerk',
        category: 'admin',
        aliases: ['General Office Clerk', 'Administrative Clerk'],
        averageSalary: 38000,
        growthRate: 8
    },
    {
        id: 'file-clerk',
        title: 'File Clerk',
        slug: 'file-clerk',
        category: 'admin',
        aliases: ['Records Clerk', 'File Management Clerk'],
        averageSalary: 35000,
        growthRate: 6
    },

    // Customer Service - Batch 20 (6 jobs)
    {
        id: 'customer-service-representative-3',
        title: 'Customer Service Representative',
        slug: 'customer-service-representative-3',
        category: 'customer-service',
        aliases: ['CSR', 'Customer Service Rep'],
        averageSalary: 40000,
        growthRate: 10
    },
    {
        id: 'call-center-representative-2',
        title: 'Call Center Representative',
        slug: 'call-center-representative-2',
        category: 'customer-service',
        aliases: ['Call Center Agent', 'Phone Representative'],
        averageSalary: 38000,
        growthRate: 10
    },
    {
        id: 'customer-support-specialist',
        title: 'Customer Support Specialist',
        slug: 'customer-support-specialist',
        category: 'customer-service',
        aliases: ['Support Specialist', 'Customer Care Specialist'],
        averageSalary: 45000,
        growthRate: 14
    },
    {
        id: 'technical-support-specialist-2',
        title: 'Technical Support Specialist',
        slug: 'technical-support-specialist-2',
        category: 'customer-service',
        aliases: ['Tech Support Specialist', 'IT Support Specialist'],
        averageSalary: 55000,
        growthRate: 16
    },
    {
        id: 'customer-success-manager-2',
        title: 'Customer Success Manager',
        slug: 'customer-success-manager-2',
        category: 'customer-service',
        aliases: ['CSM', 'Client Success Manager'],
        averageSalary: 85000,
        growthRate: 20
    },
    {
        id: 'help-desk-technician-2',
        title: 'Help Desk Technician',
        slug: 'help-desk-technician-2',
        category: 'customer-service',
        aliases: ['Help Desk Specialist', 'Service Desk Technician'],
        averageSalary: 50000,
        growthRate: 14
    },

    // Design - Batch 20 (6 jobs)
    {
        id: 'graphic-designer-3',
        title: 'Graphic Designer',
        slug: 'graphic-designer-3',
        category: 'design',
        aliases: ['Graphics Designer', 'Visual Designer'],
        averageSalary: 58000,
        growthRate: 14
    },
    {
        id: 'ui-designer-2',
        title: 'UI Designer',
        slug: 'ui-designer-2',
        category: 'design',
        aliases: ['User Interface Designer', 'UI/UX Designer'],
        averageSalary: 85000,
        growthRate: 18
    },
    {
        id: 'ux-designer-3',
        title: 'UX Designer',
        slug: 'ux-designer-3',
        category: 'design',
        aliases: ['User Experience Designer', 'Experience Designer'],
        averageSalary: 95000,
        growthRate: 20
    },
    {
        id: 'product-designer-2',
        title: 'Product Designer',
        slug: 'product-designer-2',
        category: 'design',
        aliases: ['Digital Product Designer', 'Product UX Designer'],
        averageSalary: 110000,
        growthRate: 22
    },
    {
        id: 'visual-designer-2',
        title: 'Visual Designer',
        slug: 'visual-designer-2',
        category: 'design',
        aliases: ['Digital Visual Designer', 'Brand Visual Designer'],
        averageSalary: 80000,
        growthRate: 16
    },
    {
        id: 'motion-designer',
        title: 'Motion Designer',
        slug: 'motion-designer',
        category: 'design',
        aliases: ['Motion Graphics Designer', 'Animation Designer'],
        averageSalary: 85000,
        growthRate: 20
    },

    // Engineering - Batch 20 (6 jobs)
    {
        id: 'software-engineer-3',
        title: 'Software Engineer',
        slug: 'software-engineer-3',
        category: 'engineering',
        aliases: ['Software Developer', 'Application Developer'],
        averageSalary: 120000,
        growthRate: 22
    },
    {
        id: 'frontend-developer-2',
        title: 'Frontend Developer',
        slug: 'frontend-developer-2',
        category: 'engineering',
        aliases: ['Front-End Developer', 'Client-Side Developer'],
        averageSalary: 115000,
        growthRate: 20
    },
    {
        id: 'backend-developer-2',
        title: 'Backend Developer',
        slug: 'backend-developer-2',
        category: 'engineering',
        aliases: ['Back-End Developer', 'Server-Side Developer'],
        averageSalary: 120000,
        growthRate: 22
    },
    {
        id: 'full-stack-developer-2',
        title: 'Full Stack Developer',
        slug: 'full-stack-developer-2',
        category: 'engineering',
        aliases: ['Fullstack Developer', 'Full-Stack Engineer'],
        averageSalary: 135000,
        growthRate: 24
    },
    {
        id: 'mobile-developer-2',
        title: 'Mobile Developer',
        slug: 'mobile-developer-2',
        category: 'engineering',
        aliases: ['Mobile App Developer', 'iOS/Android Developer'],
        averageSalary: 125000,
        growthRate: 22
    },
    {
        id: 'devops-engineer-2',
        title: 'DevOps Engineer',
        slug: 'devops-engineer-2',
        category: 'engineering',
        aliases: ['DevOps Engineer II', 'Senior DevOps Engineer'],
        averageSalary: 140000,
        growthRate: 24
    },

    // Legal - Batch 20 (6 jobs)
    {
        id: 'paralegal-2',
        title: 'Paralegal',
        slug: 'paralegal-2',
        category: 'legal',
        aliases: ['Legal Assistant', 'Paralegal Assistant'],
        averageSalary: 58000,
        growthRate: 12
    },
    {
        id: 'legal-assistant-2',
        title: 'Legal Assistant',
        slug: 'legal-assistant-2',
        category: 'legal',
        aliases: ['Law Office Assistant', 'Legal Secretary'],
        averageSalary: 50000,
        growthRate: 10
    },
    {
        id: 'contract-attorney',
        title: 'Contract Attorney',
        slug: 'contract-attorney',
        category: 'legal',
        aliases: ['Contract Lawyer', 'Freelance Attorney'],
        averageSalary: 95000,
        growthRate: 12
    },
    {
        id: 'compliance-manager-2',
        title: 'Compliance Manager',
        slug: 'compliance-manager-2',
        category: 'legal',
        aliases: ['Regulatory Compliance Manager', 'Corporate Compliance Manager'],
        averageSalary: 110000,
        growthRate: 16
    },
    {
        id: 'contracts-manager',
        title: 'Contracts Manager',
        slug: 'contracts-manager',
        category: 'legal',
        aliases: ['Contract Management Manager', 'Contract Administrator'],
        averageSalary: 95000,
        growthRate: 14
    },
    {
        id: 'legal-researcher',
        title: 'Legal Researcher',
        slug: 'legal-researcher',
        category: 'legal',
        aliases: ['Legal Research Analyst', 'Law Researcher'],
        averageSalary: 70000,
        growthRate: 12
    },

    // Education - Batch 20 (5 jobs)
    {
        id: 'elementary-school-teacher',
        title: 'Elementary School Teacher',
        slug: 'elementary-school-teacher',
        category: 'education',
        aliases: ['Primary School Teacher', 'Elementary Teacher'],
        averageSalary: 58000,
        growthRate: 8
    },
    {
        id: 'high-school-teacher-2',
        title: 'High School Teacher',
        slug: 'high-school-teacher-2',
        category: 'education',
        aliases: ['Secondary School Teacher', 'High School Educator'],
        averageSalary: 62000,
        growthRate: 8
    },
    {
        id: 'special-education-teacher-2',
        title: 'Special Education Teacher',
        slug: 'special-education-teacher-2',
        category: 'education',
        aliases: ['Special Ed Teacher', 'Exceptional Education Teacher'],
        averageSalary: 65000,
        growthRate: 10
    },
    {
        id: 'teaching-assistant-2',
        title: 'Teaching Assistant',
        slug: 'teaching-assistant-2',
        category: 'education',
        aliases: ['Teacher Assistant', 'Classroom Assistant'],
        averageSalary: 32000,
        growthRate: 10
    },
    {
        id: 'substitute-teacher',
        title: 'Substitute Teacher',
        slug: 'substitute-teacher',
        category: 'education',
        aliases: ['Sub Teacher', 'Supply Teacher'],
        averageSalary: 40000,
        growthRate: 8
    },

    // Real Estate - Batch 20 (6 jobs)
    {
        id: 'real-estate-agent-2',
        title: 'Real Estate Agent',
        slug: 'real-estate-agent-2',
        category: 'real-estate',
        aliases: ['Realtor', 'Real Estate Sales Agent'],
        averageSalary: 55000,
        growthRate: 14
    },
    {
        id: 'real-estate-salesperson',
        title: 'Real Estate Salesperson',
        slug: 'real-estate-salesperson',
        category: 'real-estate',
        aliases: ['Real Estate Sales Associate', 'Property Salesperson'],
        averageSalary: 50000,
        growthRate: 12
    },
    {
        id: 'leasing-agent-2',
        title: 'Leasing Agent',
        slug: 'leasing-agent-2',
        category: 'real-estate',
        aliases: ['Leasing Consultant', 'Rental Agent'],
        averageSalary: 42000,
        growthRate: 14
    },
    {
        id: 'property-manager-2',
        title: 'Property Manager',
        slug: 'property-manager-2',
        category: 'real-estate',
        aliases: ['Real Estate Property Manager', 'Rental Property Manager'],
        averageSalary: 65000,
        growthRate: 14
    },
    {
        id: 'real-estate-appraiser-2',
        title: 'Real Estate Appraiser',
        slug: 'real-estate-appraiser-2',
        category: 'real-estate',
        aliases: ['Property Appraiser', 'Real Estate Valuer'],
        averageSalary: 62000,
        growthRate: 10
    },
    {
        id: 'title-examiner',
        title: 'Title Examiner',
        slug: 'title-examiner',
        category: 'real-estate',
        aliases: ['Title Searcher', 'Title Analyst'],
        averageSalary: 52000,
        growthRate: 8
    },

    // Skilled Trades - Batch 20 (6 jobs)
    {
        id: 'electrician-2',
        title: 'Electrician',
        slug: 'electrician-2',
        category: 'skilled-trades',
        aliases: ['Electrical Contractor', 'Journeyman Electrician'],
        averageSalary: 60000,
        growthRate: 14
    },
    {
        id: 'plumber-2',
        title: 'Plumber',
        slug: 'plumber-2',
        category: 'skilled-trades',
        aliases: ['Plumbing Contractor', 'Journeyman Plumber'],
        averageSalary: 58000,
        growthRate: 12
    },
    {
        id: 'hvac-technician-2',
        title: 'HVAC Technician',
        slug: 'hvac-technician-2',
        category: 'skilled-trades',
        aliases: ['HVAC Tech', 'Heating and Cooling Technician'],
        averageSalary: 58000,
        growthRate: 16
    },
    {
        id: 'carpenter-2',
        title: 'Carpenter',
        slug: 'carpenter-2',
        category: 'skilled-trades',
        aliases: ['Construction Carpenter', 'Finish Carpenter'],
        averageSalary: 55000,
        growthRate: 10
    },
    {
        id: 'welder-2',
        title: 'Welder',
        slug: 'welder-2',
        category: 'skilled-trades',
        aliases: ['Welding Technician', 'Fabricator Welder'],
        averageSalary: 48000,
        growthRate: 10
    },
    {
        id: 'automotive-technician-2',
        title: 'Automotive Technician',
        slug: 'automotive-technician-2',
        category: 'skilled-trades',
        aliases: ['Auto Mechanic', 'Car Mechanic'],
        averageSalary: 48000,
        growthRate: 10
    },

    // Hospitality - Batch 20 (6 jobs)
    {
        id: 'hotel-manager-2',
        title: 'Hotel Manager',
        slug: 'hotel-manager-2',
        category: 'hospitality',
        aliases: ['Hotel General Manager', 'Hospitality Manager'],
        averageSalary: 65000,
        growthRate: 12
    },
    {
        id: 'front-desk-agent-2',
        title: 'Front Desk Agent',
        slug: 'front-desk-agent-2',
        category: 'hospitality',
        aliases: ['Hotel Front Desk Agent', 'Hotel Receptionist'],
        averageSalary: 36000,
        growthRate: 10
    },
    {
        id: 'housekeeper-2',
        title: 'Housekeeper',
        slug: 'housekeeper-2',
        category: 'hospitality',
        aliases: ['Hotel Housekeeper', 'Room Attendant'],
        averageSalary: 32000,
        growthRate: 10
    },
    {
        id: 'concierge-2',
        title: 'Concierge',
        slug: 'concierge-2',
        category: 'hospitality',
        aliases: ['Hotel Concierge', 'Guest Services Agent'],
        averageSalary: 40000,
        growthRate: 12
    },
    {
        id: 'restaurant-manager-2',
        title: 'Restaurant Manager',
        slug: 'restaurant-manager-2',
        category: 'hospitality',
        aliases: ['Food Service Manager', 'Dining Manager'],
        averageSalary: 55000,
        growthRate: 14
    },
    {
        id: 'bartender-2',
        title: 'Bartender',
        slug: 'bartender-2',
        category: 'hospitality',
        aliases: ['Barkeeper', 'Mixologist'],
        averageSalary: 32000,
        growthRate: 12
    },

    // Transportation - Batch 20 (5 jobs)
    {
        id: 'delivery-driver-2',
        title: 'Delivery Driver',
        slug: 'delivery-driver-2',
        category: 'transportation',
        aliases: ['Package Delivery Driver', 'Courier Driver'],
        averageSalary: 40000,
        growthRate: 14
    },
    {
        id: 'truck-driver-2',
        title: 'Truck Driver',
        slug: 'truck-driver-2',
        category: 'transportation',
        aliases: ['Semi Truck Driver', 'CDL Driver'],
        averageSalary: 52000,
        growthRate: 12
    },
    {
        id: 'bus-driver-2',
        title: 'Bus Driver',
        slug: 'bus-driver-2',
        category: 'transportation',
        aliases: ['Transit Bus Driver', 'School Bus Driver'],
        averageSalary: 42000,
        growthRate: 10
    },
    {
        id: 'dispatcher-2',
        title: 'Dispatcher',
        slug: 'dispatcher-2',
        category: 'transportation',
        aliases: ['Fleet Dispatcher', 'Service Dispatcher'],
        averageSalary: 45000,
        growthRate: 10
    },
    {
        id: 'route-driver',
        title: 'Route Driver',
        slug: 'route-driver',
        category: 'transportation',
        aliases: ['Delivery Route Driver', 'Regular Route Driver'],
        averageSalary: 42000,
        growthRate: 10
    }
]


// Helper function to get job by slug
export function getJobBySlug(slug: string): JobTitle | undefined {
    return jobTitles.find(job => job.slug === slug)
}

// Helper function to get jobs by category
export function getJobsByCategory(category: string): JobTitle[] {
    return jobTitles.filter(job => job.category === category)
}

// Helper function to search jobs
export function searchJobs(query: string): JobTitle[] {
    const lowerQuery = query.toLowerCase()
    return jobTitles.filter(job =>
        job.title.toLowerCase().includes(lowerQuery) ||
        job.aliases.some(alias => alias.toLowerCase().includes(lowerQuery))
    )
}
