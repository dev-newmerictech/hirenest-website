const { google } = require('googleapis');
const axios = require('axios');

// =============================================
// CONFIGURATION
// =============================================
const SERVICE_ACCOUNT_FILE = './service_account.json';
const DAILY_LIMIT = 200;

// Priority order - most important pages first
const PRIORITY_SITEMAPS = [
    // High priority - new job pages
    { url: 'https://hirenest.ai/jobs-sitemap.xml', priority: 1, name: 'Jobs' },
    // Medium priority - programmatic SEO pages
    { url: 'https://hirenest.ai/interview-questions-sitemap.xml', priority: 2, name: 'Interview Q&A' },
    { url: 'https://hirenest.ai/resume-keywords-sitemap.xml', priority: 2, name: 'Resume Keywords' },
    { url: 'https://hirenest.ai/salary-sitemap.xml', priority: 2, name: 'Salary Guides' },
    { url: 'https://hirenest.ai/job-description-sitemap.xml', priority: 2, name: 'Job Descriptions' },
    { url: 'https://hirenest.ai/cover-letter-sitemap.xml', priority: 2, name: 'Cover Letters' },
];

const DELAY_MS = 500;

// Track file for submitted URLs
const TRACKING_FILE = './google_index_tracking.json';

// =============================================
// TRACKING SYSTEM
// =============================================
function loadTracking() {
    try {
        if (require('fs').existsSync(TRACKING_FILE)) {
            return JSON.parse(require('fs').readFileSync(TRACKING_FILE, 'utf8'));
        }
    } catch (e) {}
    return { submitted: [], lastRun: null, totalSubmitted: 0 };
}

function saveTracking(tracking) {
    require('fs').writeFileSync(TRACKING_FILE, JSON.stringify(tracking, null, 2));
}

// =============================================
// AUTHENTICATE
// =============================================
async function authenticate() {
    try {
        const auth = new google.auth.GoogleAuth({
            keyFile: SERVICE_ACCOUNT_FILE,
            scopes: ['https://www.googleapis.com/auth/indexing']
        });
        const client = await auth.getClient();
        console.log('✅ Authenticated with Google!');
        return client;
    } catch (error) {
        console.log('❌ Authentication failed:', error.message);
        process.exit(1);
    }
}

// =============================================
// FETCH URLs FROM SITEMAP
// =============================================
async function fetchUrls(sitemapUrl) {
    const urls = [];
    try {
        const response = await axios.get(sitemapUrl, { timeout: 10000 });
        const xml = response.data;
        const urlMatches = xml.match(/<url>[\s\S]*?<\/url>/g);
        if (urlMatches) {
            for (const url of urlMatches) {
                const locMatch = url.match(/<loc>(.*?)<\/loc>/);
                if (locMatch) urls.push(locMatch[1].trim());
            }
        }
    } catch (error) {
        console.log(`   ❌ Error fetching ${sitemapUrl}: ${error.message}`);
    }
    return urls;
}

// =============================================
// SUBMIT URL TO GOOGLE
// =============================================
async function submitUrl(authClient, url) {
    try {
        await authClient.request({
            url: 'https://indexing.googleapis.com/v3/urlNotifications:publish',
            method: 'POST',
            data: {
                url: url,
                type: 'URL_UPDATED'
            }
        });
        return true;
    } catch (error) {
        const status = error.response?.status;
        const message = error.response?.data?.error?.message || error.message;
        if (status === 429) {
            console.log('\n⚠️  Daily limit reached!');
            return 'LIMIT';
        }
        console.log(`   ❌ Failed: ${url} → ${status}: ${message}`);
        return false;
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// =============================================
// MAIN
// =============================================
async function main() {
    console.log('🚀 Google Indexing API - Priority Based Submission');
    console.log('='.repeat(60));

    const authClient = await authenticate();
    const tracking = loadTracking();
    const submittedSet = new Set(tracking.submitted);

    console.log(`\n📊 Previously submitted: ${tracking.totalSubmitted} URLs`);
    console.log(`📅 Last run: ${tracking.lastRun || 'Never'}`);
    console.log(`⚠️  Daily limit: ${DAILY_LIMIT} URLs\n`);

    // Fetch URLs by priority
    console.log('📡 Fetching URLs by priority...\n');
    let allUrls = [];

    for (const sitemap of PRIORITY_SITEMAPS) {
        process.stdout.write(`   [${sitemap.priority}] ${sitemap.name}: `);
        const urls = await fetchUrls(sitemap.url);
        console.log(`${urls.length} URLs`);

        // Add priority info
        for (const url of urls) {
            allUrls.push({ url, priority: sitemap.priority, source: sitemap.name });
        }
    }

    // Filter out already submitted URLs
    const newUrls = allUrls.filter(item => !submittedSet.has(item.url));
    console.log(`\n📊 Total URLs: ${allUrls.length}`);
    console.log(`✅ Already submitted: ${submittedSet.size}`);
    console.log(`🆕 New to submit: ${newUrls.length}\n`);

    if (newUrls.length === 0) {
        console.log('✅ All URLs have been submitted!');
        console.log('💡 Run this script again after adding new pages.\n');
        return;
    }

    // Sort by priority (1 = highest)
    newUrls.sort((a, b) => a.priority - b.priority);

    // Take only daily limit
    const todayUrls = newUrls.slice(0, DAILY_LIMIT);
    console.log(`📤 Submitting ${todayUrls.length} URLs today (highest priority first)...\n`);

    let success = 0;
    let failed = 0;

    for (let i = 0; i < todayUrls.length; i++) {
        const item = todayUrls[i];
        process.stdout.write(`[${i+1}/${todayUrls.length}] [${item.source}] `);

        const result = await submitUrl(authClient, item.url);

        if (result === 'LIMIT') {
            console.log('\n⚠️  Stopped due to daily limit');
            break;
        }

        if (result) {
            success++;
            submittedSet.add(item.url);
            console.log(`✅ ${item.url.substring(0, 60)}...`);
        } else {
            failed++;
        }

        await sleep(DELAY_MS);
    }

    // Update tracking
    tracking.submitted = Array.from(submittedSet);
    tracking.totalSubmitted = submittedSet.size;
    tracking.lastRun = new Date().toISOString();
    saveTracking(tracking);

    // Summary
    console.log('\n' + '='.repeat(60));
    console.log(`✅ Success:        ${success}`);
    console.log(`❌ Failed:         ${failed}`);
    console.log(`📊 Total tracked:  ${tracking.totalSubmitted}`);
    console.log(`📅 Remaining:      ${newUrls.length - todayUrls.length} URLs`);
    console.log('\n💡 Run again tomorrow for next batch!');
    console.log('='.repeat(60) + '\n');
}

main().catch(error => {
    console.error('\n❌ Fatal error:', error.message);
    process.exit(1);
});
