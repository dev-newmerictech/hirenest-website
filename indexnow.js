// indexnow.js
// IndexNow submission script for Hirenest.ai
// Usage: node indexnow.js

const axios = require('axios');

// =============================================
// CONFIGURATION
// =============================================
const API_KEY = '279f11ab88964690926423cc793b3f68';
const HOST = 'hirenest.ai';
const KEY_LOCATION = `https://${HOST}/${API_KEY}.txt`;

const SITEMAPS = [
    'https://hirenest.ai/jobs-sitemap.xml',
    'https://hirenest.ai/job-description-sitemap.xml',
    'https://hirenest.ai/interview-questions-sitemap.xml',
    'https://hirenest.ai/resume-keywords-sitemap.xml',
    'https://hirenest.ai/salary-sitemap.xml',
    'https://hirenest.ai/cover-letter-sitemap.xml',
];

const ENDPOINTS = [
    'https://api.indexnow.org/indexnow',
    'https://www.bing.com/indexnow',
    'https://yandex.com/indexnow'
];

const BATCH_SIZE = 100;
const DELAY_MS = 2000;

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
    console.log('\n📡 Fetching URLs from all sitemaps...');
    console.log('─'.repeat(60));

    const allUrls = new Set();
    let processed = 0;

    for (const sitemapUrl of SITEMAPS) {
        processed++;
        const sitemapName = sitemapUrl.split('/').pop();
        process.stdout.write(`\r📂 [${processed}/${SITEMAPS.length}] Fetching ${sitemapName}...`);

        const urls = await fetchUrls(sitemapUrl);
        urls.forEach(url => allUrls.add(url));

        console.log(` \r✅ [${processed}/${SITEMAPS.length}] ${sitemapName}: ${urls.length} URLs`);
    }

    return Array.from(allUrls);
}

// =============================================
// SUBMIT TO INDEXNOW
// =============================================
async function submitBatch(urls, batchNum, totalBatches) {
    const payload = {
        host: HOST,
        key: API_KEY,
        keyLocation: KEY_LOCATION,
        urlList: urls
    };

    const headers = { 'Content-Type': 'application/json' };
    const results = [];

    for (const endpoint of ENDPOINTS) {
        const endpointName = endpoint.split('//')[1].split('/')[0];
        try {
            const resp = await axios.post(endpoint, payload, { headers, timeout: 30000 });
            console.log(`   ✅ ${endpointName}: ${resp.status} ${resp.statusText}`);
            results.push({ endpoint: endpointName, status: 'success', code: resp.status });
        } catch (error) {
            const status = error.response?.status || 'No response';
            console.log(`   ❌ ${endpointName}: ${status}`);
            results.push({ endpoint: endpointName, status: 'failed', code: status });
        }
    }

    return results;
}

// =============================================
// MAIN
// =============================================
async function main() {
    console.log('\n' + '═'.repeat(60));
    console.log('🚀 INDEXNOW SUBMISSION FOR HIRENEST.AI');
    console.log('═'.repeat(60));
    console.log(`🔑 API Key: ${API_KEY}`);
    console.log(`🌐 Host: ${HOST}`);
    console.log(`📦 Batch Size: ${BATCH_SIZE} URLs`);
    console.log(`🎯 Endpoints: ${ENDPOINTS.length}`);

    // Fetch all URLs
    const allUrls = await getAllUrls();
    console.log('─'.repeat(60));
    console.log(`\n📊 Total URLs found: ${allUrls.length}`);

    if (allUrls.length === 0) {
        console.log('\n❌ No URLs found to submit!');
        return;
    }

    // Show sample URLs
    console.log('\n📋 Sample URLs:');
    allUrls.slice(0, 3).forEach(url => console.log(`   - ${url}`));
    if (allUrls.length > 3) {
        console.log(`   ... and ${allUrls.length - 3} more`);
    }

    // Calculate batches
    const batches = [];
    for (let i = 0; i < allUrls.length; i += BATCH_SIZE) {
        batches.push(allUrls.slice(i, Math.min(i + BATCH_SIZE, allUrls.length)));
    }

    console.log(`\n📦 Submitting in ${batches.length} batches...`);
    console.log('⚠️  Starting in 3 seconds... (Press Ctrl+C to cancel)');
    await new Promise(r => setTimeout(r, 3000));

    console.log('\n' + '─'.repeat(60));

    // Submit each batch
    let submittedCount = 0;
    const allResults = [];

    for (let i = 0; i < batches.length; i++) {
        const batch = batches[i];
        console.log(`\n📦 Batch ${i + 1}/${batches.length} (${batch.length} URLs)`);

        const results = await submitBatch(batch, i + 1, batches.length);
        allResults.push(...results);

        submittedCount += batch.length;
        process.stdout.write(`   Progress: ${submittedCount}/${allUrls.length} URLs submitted`);

        // Delay between batches (except last)
        if (i < batches.length - 1) {
            await new Promise(r => setTimeout(r, DELAY_MS));
        }
        console.log();
    }

    // Summary
    console.log('\n' + '═'.repeat(60));
    console.log('📊 SUBMISSION SUMMARY');
    console.log('═'.repeat(60));

    // Group results by endpoint
    const endpointSummary = {};
    for (const result of allResults) {
        if (!endpointSummary[result.endpoint]) {
            endpointSummary[result.endpoint] = { success: 0, failed: 0 };
        }
        if (result.status === 'success') {
            endpointSummary[result.endpoint].success++;
        } else {
            endpointSummary[result.endpoint].failed++;
        }
    }

    console.log(`\n📤 Total URLs submitted: ${submittedCount}`);
    console.log(`📦 Total batches: ${batches.length}`);
    console.log('\n📊 Results by endpoint:');

    for (const [endpoint, stats] of Object.entries(endpointSummary)) {
        const total = stats.success + stats.failed;
        const successRate = total > 0 ? Math.round((stats.success / total) * 100) : 0;
        console.log(`   ${endpoint}:`);
        console.log(`      ✅ Success: ${stats.success}`);
        console.log(`      ❌ Failed:  ${stats.failed}`);
        console.log(`      📈 Rate:    ${successRate}%`);
    }

    console.log('\n💡 Tips:');
    console.log('   • IndexNow submissions typically process within 24-48 hours');
    console.log('   • Check Bing Webmaster Tools for detailed status');
    console.log('   • 403 errors may indicate domain verification needed');
    console.log('   • Re-run this script weekly for new content');

    console.log('\n' + '═'.repeat(60) + '\n');
}

main().catch(error => {
    console.error('\n❌ Fatal error:', error.message);
    process.exit(1);
});
