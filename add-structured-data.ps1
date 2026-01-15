# PowerShell script to add structured data to all pages
# Run this from the project root directory

$routes = @(
    @{ path = "career-insights"; image = "career_insights_hero.png"; metadataKey = "careerInsights"; title = "Career Insights Dashboard" },
    @{ path = "skill-assessments"; image = "skill_assessments_hero.png"; metadataKey = "skillAssessments"; title = "Skill Assessments" },
    @{ path = "profile-optimization"; image = "profile_optimization_hero.png"; metadataKey = "profileOptimization"; title = "Profile Optimization" },
    @{ path = "fast-track-applications"; image = "fast_track_applications_hero.png"; metadataKey = "fastTrackApplications"; title = "Fast-Track Applications" },
    @{ path = "ai-candidate-ranking"; image = "ai_candidate_ranking_hero.png"; metadataKey = "aiCandidateRanking"; title = "AI Candidate Ranking" },
    @{ path = "custom-assessments"; image = "skill_assessments_hero.png"; metadataKey = "customAssessments"; title = "Custom Assessments" },
    @{ path = "hiring-analytics"; image = "ai_candidate_ranking_hero.png"; metadataKey = "hiringAnalytics"; title = "Hiring Analytics" },
    @{ path = "verified-candidates"; image = "ai_candidate_ranking.png"; metadataKey = "verifiedCandidates"; title = "Verified Candidates" },
    @{ path = "quick-screening"; image = "quick_screening_hero.png"; metadataKey = "quickScreening"; title = "Quick Screening" },
    @{ path = "team-collaboration"; image = "ai_candidate_ranking_hero.png"; metadataKey = "teamCollaboration"; title = "Team Collaboration" },
    @{ path = "about"; image = "about-hero.png"; metadataKey = "about"; title = "About Hirenest" },
    @{ path = "careers"; image = "careers-hero.png"; metadataKey = "careers"; title = "Careers" },
    @{ path = "privacy-policy"; image = "og-image.png"; metadataKey = "privacyPolicy"; title = "Privacy Policy" },
    @{ path = "terms-of-service"; image = "og-image.png"; metadataKey = "termsOfService"; title = "Terms of Service" },
    @{ path = "refund-policy"; image = "og-image.png"; metadataKey = "refundPolicy"; title = "Refund Policy" },
    @{ path = "cookie-policy"; image = "og-image.png"; metadataKey = "cookiePolicy"; title = "Cookie Policy" },
    @{ path = "security"; image = "og-image.png"; metadataKey = "security"; title = "Security" }
)

Write-Host "Adding structured data to $($routes.Count) pages..." -ForegroundColor Green

foreach ($route in $routes) {
    $routePath = "app\$($route.path)"
    $layoutFile = "$routePath\layout.tsx"
    $structuredDataFile = "$routePath\structured-data.tsx"
    
    Write-Host "`nProcessing: $($route.path)" -ForegroundColor Cyan
    
    # Check if layout.tsx already exists
    if (Test-Path $layoutFile) {
        Write-Host "  ✓ layout.tsx already exists" -ForegroundColor Yellow
    } else {
        # Create layout.tsx
        $layoutContent = @"
import { Metadata } from 'next';
import { pageMetadata } from '../lib/metadata';

export const metadata: Metadata = pageMetadata.$($route.metadataKey);

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
"@
        Set-Content -Path $layoutFile -Value $layoutContent
        Write-Host "  ✓ Created layout.tsx" -ForegroundColor Green
    }
    
    # Check if structured-data.tsx already exists
    if (Test-Path $structuredDataFile) {
        Write-Host "  ✓ structured-data.tsx already exists" -ForegroundColor Yellow
    } else {
        # Create structured-data.tsx
        $componentName = ($route.path -replace '-', '') + "StructuredData"
        $componentName = $componentName.Substring(0,1).ToUpper() + $componentName.Substring(1)
        
        $structuredDataContent = @"
'use client'

import { 
    generateFAQSchema, 
    generateImageObjectSchema, 
    generateVideoObjectSchema 
} from '../lib/structured-data';
import { faqs } from '@/src/components/blocks/faqs/faq-with-inline-headline/data';

export function $componentName() {
    // Generate FAQ Schema
    const faqSchema = generateFAQSchema(faqs);

    // Generate Image Schema
    const imageSchema = generateImageObjectSchema(
        'https://hirenest.ai/$($route.image)',
        {
            name: '$($route.title)',
            description: 'Hirenest $($route.title) - AI-powered platform features',
            width: 1200,
            height: 630,
            encodingFormat: 'image/png',
            uploadDate: '2024-01-15T00:00:00.000Z',
            author: 'Hirenest Team'
        }
    );

    // Generate Video Schema
    const videoSchema = generateVideoObjectSchema(
        '$($route.title) Demo',
        'Learn about Hirenest $($route.title) and how it can help you achieve your goals.',
        'https://hirenest.ai/$($route.image)',
        '2024-01-15T00:00:00.000Z',
        {
            duration: 'PT4M00S',
            width: 1920,
            height: 1080
        }
    );

    return (
        <>
            {/* FAQ Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            
            {/* Image Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(imageSchema) }}
            />
            
            {/* Video Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
            />
        </>
    );
}
"@
        Set-Content -Path $structuredDataFile -Value $structuredDataContent
        Write-Host "  ✓ Created structured-data.tsx" -ForegroundColor Green
    }
}

Write-Host "`n✅ Done! Created structured data files for all pages." -ForegroundColor Green
Write-Host "`n⚠️  Next steps:" -ForegroundColor Yellow
Write-Host "1. Import the structured data component in each page.tsx"
Write-Host "2. Add <ComponentName /> at the start of the return statement"
Write-Host "`nExample:"
Write-Host "  import { CareerinsightsStructuredData } from './structured-data';"
Write-Host "  // In component:"
Write-Host "  <CareerinsightsStructuredData />"
