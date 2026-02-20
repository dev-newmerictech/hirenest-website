// indexnow_tracker.js
// Enhanced IndexNow submission with tracking
// Usage: node indexnow_tracker.js

const axios = require('axios');
const fs = require('fs');
const path = require('path');

// =============================================
// CONFIGURATION
// =============================================
const API_KEY = 'hirenest2026indexnowkey';
const HOST = 'hirenest.ai';

// Individual sitemaps containing actual page URLs
const SITEMAPS = [
    'https://hirenest.ai/interview-questions-sitemap.xml',
    'https://hirenest.ai/resume-keywords-sitemap.xml',
    'https://hirenest.ai/salary-sitemap.xml',
    'https://hirenest.ai/cover-letter-sitemap.xml',
    'https://hirenest.ai/job-description-sitemap.xml'
];

const BATCH_SIZE = 100;
const TRACKING_FILE = path.join(__dirname, 'indexnow_submitted.json');

// IndexNow endpoints
const ENDPOINTS = [
    'https://api.indexnow.org/indexnow',
    'https://www.bing.com/indexnow',
    'https://yandex.com/indexnow'
];

// =============================================
// TRACKING SYSTEM
// =============================================
function loadTrackingData() {
    try {
        if (fs.existsSync(TRACKING_FILE)) {
            const data = fs.readFileSync(TRACKING_FILE, 'utf8');
            return JSON.parse(data);
        }
    } catch (e) {
        console.log('⚠️  Could not load tracking file, starting fresh');
    }
    return {
        submitted: {},
        lastSubmitted: null
    };
}

function saveTrackingData(data) {
    try {
        fs.writeFileSync(TRACKING_FILE, JSON.stringify(data, null, 2));
    } catch (e) {
        console.error('❌ Could not save tracking data:', e.message);
    }
}

function isRecentlySubmitted(url, trackingData, daysOld = 7) {
    const timestamp = trackingData.submitted[url];
    if (!timestamp) return false;
    const daysSince = (Date.now() - timestamp) / (1000 * 60 * 60 * 24);
    return daysSince < daysOld;
}

// =============================================
// FETCH URLs FROM SITEMAP
// =============================================
async function fetchUrls(sitemapUrl) {
    try {
        const response = await axios.get(sitemapUrl, { timeout: 30000 });
        const xml = response.data;

        // Extract URLs from <url> tags
        const urlMatches = xml.match(/<url>[\s\S]*?<\/url>/g);
        if (urlMatches) {
            const urls = urlMatches.map(u => {
                const locMatch = u.match(/<loc>(.*?)<\/loc>/);
                return locMatch ? locMatch[1].trim() : null;
            }).filter(Boolean);
            return urls;
        }
        return [];
    } catch (error) {
        console.log(`   ❌ Error fetching ${sitemapUrl}: ${error.message}`);
        return [];
    }
}

async function getAllUrls() {
    console.log('📡 Fetching URLs from all sitemaps...');
    const allUrls = new Set();

    for (const sitemapUrl of SITEMAPS) {
        console.log(`   📂 ${sitemapUrl}`);
        const urls = await fetchUrls(sitemapUrl);
        console.log(`      ✅ ${urls.length} URLs found`);
        urls.forEach(url => allUrls.add(url));
    }

    return Array.from(allUrls);
}

// =============================================
// SUBMIT TO INDEXNOW
// =============================================
async function submitToIndexNow(urls) {
    const payload = {
        host: HOST,
        key: API_KEY,
        keyLocation: `https://${HOST}/${API_KEY}.txt`,
        urlList: urls
    };

    const headers = { 'Content-Type': 'application/json' };

    for (const endpoint of ENDPOINTS) {
        try {
            const resp = await axios.post(endpoint, payload, { headers, timeout: 30000 });
            console.log(`   ✅ ${endpoint} → ${resp.status}`);
        } catch (error) {
            const status = error.response?.status || 'No response';
            console.log(`   ❌ ${endpoint} → ${status}`);
        }
    }
}

// =============================================
// MAIN
// =============================================
async function main() {
    console.log('\n' + '='.repeat(60));
    console.log('🚀 INDEXNOW SUBMISSION FOR HIRENEST.AI');
    console.log('   with URL tracking to avoid duplicates');
    console.log('='.repeat(60));

    // Load tracking data
    const trackingData = loadTrackingData();
    const previouslySubmitted = Object.keys(trackingData.submitted).length;
    console.log(`\n📂 Previously submitted: ${previouslySubmitted} URLs`);

    // Fetch all URLs
    const allUrls = await getAllUrls();
    console.log(`\n📊 Total URLs found: ${allUrls.length}`);

    // Filter out recently submitted URLs
    const newUrls = allUrls.filter(url => !isRecentlySubmitted(url, trackingData, 7));
    console.log(`🆕 New URLs to submit: ${newUrls.length}`);
    console.log(`✅ Skip (submitted <7 days ago): ${allUrls.length - newUrls.length}`);

    if (newUrls.length === 0) {
        console.log('\n✅ All URLs were submitted in the last 7 days. Nothing to do!');
        console.log('   To re-submit all URLs, delete indexnow_submitted.json and run again.');
        return;
    }

    // Show sample URLs
    console.log('\n📋 Sample new URLs:');
    newUrls.slice(0, 5).forEach(url => console.log(`   - ${url}`));
    if (newUrls.length > 5) {
        console.log(`   ... and ${newUrls.length - 5} more`);
    }

    // Confirm
    console.log(`\n⚠️  Ready to submit ${newUrls.length} URLs...`);
    console.log('   Press Ctrl+C to cancel, or wait 3 seconds to continue...');
    await new Promise(r => setTimeout(r, 3000));

    // Calculate batches
    const batches = [];
    for (let i = 0; i < newUrls.length; i += BATCH_SIZE) {
        batches.push(newUrls.slice(i, Math.min(i + BATCH_SIZE, newUrls.length)));
    }

    console.log(`\n📤 Submitting in ${batches.length} batches (max ${BATCH_SIZE} per batch)...`);
    console.log('-'.repeat(60));

    let submittedCount = 0;
    const now = Date.now();

    for (let i = 0; i < batches.length; i++) {
        const batch = batches[i];
        console.log(`\n📦 Batch ${i + 1}/${batches.length} (${batch.length} URLs)`);

        await submitToIndexNow(batch);

        // Track submissions
        batch.forEach(url => {
            trackingData.submitted[url] = now;
        });
        submittedCount += batch.length;

        // Save tracking after each batch
        saveTrackingData(trackingData);

        // Delay between batches
        if (i < batches.length - 1) {
            await new Promise(r => setTimeout(r, 2000));
        }
    }

    // Final save
    saveTrackingData(trackingData);

    // Summary
    console.log('\n' + '='.repeat(60));
    console.log('📊 SUBMISSION SUMMARY');
    console.log('='.repeat(60));
    console.log(`✅ Submitted: ${submittedCount} URLs`);
    console.log(`📁 Tracking file: indexnow_submitted.json`);
    console.log(`📅 Timestamp: ${new Date().toISOString()}`);
    console.log(`📊 Total submitted: ${Object.keys(trackingData.submitted).length} URLs (all time)`);

    console.log('\n💡 Tips:');
    console.log('   • URLs submitted within 7 days are skipped on next run');
    console.log('   • Delete indexnow_submitted.json to reset and submit all URLs');
    console.log('   • Google typically crawls IndexNow submissions within 24-48 hours');
    console.log('   • No daily quota limits for IndexNow (unlike Google Indexing API)');
    console.log('='.repeat(60) + '\n');
}

main().catch(error => {
    console.error('\n❌ Fatal error:', error.message);
    process.exit(1);
});
