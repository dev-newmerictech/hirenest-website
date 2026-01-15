#!/usr/bin/env node

/**
 * Script to add structured data (FAQ, Image, Video schemas) to all pages
 * This creates layout.tsx and structured-data.tsx for each route
 */

const routes = [
    // Job Seeker Features
    { path: 'career-insights', image: 'career_insights_hero.png', title: 'Career Insights Dashboard' },
    { path: 'skill-assessments', image: 'skill_assessments_hero.png', title: '350+ Skill Assessments' },
    { path: 'profile-optimization', image: 'profile_optimization_hero.png', title: 'Profile Optimization Tools' },
    { path: 'fast-track-applications', image: 'fast_track_applications_hero.png', title: 'Fast-Track Applications' },
    
    // Employer Features
    { path: 'ai-candidate-ranking', image: 'ai_candidate_ranking_hero.png', title: 'AI Candidate Ranking' },
    { path: 'custom-assessments', image: 'skill_assessments_hero.png', title: 'Custom Assessment Builder' },
    { path: 'hiring-analytics', image: 'ai_candidate_ranking_hero.png', title: 'Hiring Analytics Dashboard' },
    { path: 'verified-candidates', image: 'ai_candidate_ranking_hero.png', title: 'Verified Candidate Profiles' },
    { path: 'quick-screening', image: 'quick_screening_hero.png', title: 'Quick Screening Tools' },
    { path: 'team-collaboration', image: 'ai_candidate_ranking_hero.png', title: 'Team Collaboration Tools' },
    
    // Company Pages
    { path: 'about', image: 'about-hero.png', title: 'About Hirenest' },
    { path: 'careers', image: 'careers-hero.png', title: 'Careers at Hirenest' },
    
    // Legal Pages
    { path: 'privacy-policy', image: 'og-image.png', title: 'Privacy Policy' },
    { path: 'terms-of-service', image: 'og-image.png', title: 'Terms of Service' },
    { path: 'refund-policy', image: 'og-image.png', title: 'Refund Policy' },
    { path: 'cookie-policy', image: 'og-image.png', title: 'Cookie Policy' },
    { path: 'security', image: 'og-image.png', title: 'Security' },
];

console.log('Routes to process:', routes.length);
console.log('Pages:', routes.map(r => r.path).join(', '));
