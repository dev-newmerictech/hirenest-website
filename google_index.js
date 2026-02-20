// google_index.js
// Google Indexing API Submission Script for Hirenest.ai
// Usage: node google_index.js

const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');
const https = require('https');

// =============================================
// CONFIGURATION
// =============================================
const SITE_URL = 'https://hirenest.ai';
const SERVICE_ACCOUNT_FILE = 'service_account.json';
const PROJECT_ID = 'indexing-api-487915'; // Correct project ID
const SITEMAPS = [
    `${SITE_URL}/main-sitemap.xml`,
    `${SITE_URL}/sitemap-posts.xml`,
    `${SITE_URL}/interview-questions-sitemap.xml`,
    `${SITE_URL}/resume-keywords-sitemap.xml`,
    `${SITE_URL}/salary-sitemap.xml`,
    `${SITE_URL}/cover-letter-sitemap.xml`,
    `${SITE_URL}/job-description-sitemap.xml`
];

// Rate limiting: delays between API calls
const DELAY_MS = 100; // 100ms between requests
const BATCH_DELAY_MS = 1000; // 1 second delay between batches

// =============================================
// FETCH URLs FROM SITEMAP
// =============================================
function fetchUrls(sitemapUrl) {
    return new Promise((resolve, reject) => {
        https.get(sitemapUrl, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    // Check if it's a sitemap index (contains <sitemap> tags)
                    const sitemapMatches = data.match(/<sitemap>[\s\S]*?<\/sitemap>/g);
                    if (sitemapMatches) {
                        // It's a sitemap index - extract URLs
                        const urls = sitemapMatches.map(sm => {
                            const match = sm.match(/<loc>(.*?)<\/loc>/);
                            return match ? match[1] : null;
                        }).filter(Boolean);
                        resolve({ urls, isIndex: true });
                    } else {
                        // It's a regular sitemap - extract <url> tags
                        const urlMatches = data.match(/<url>[\s\S]*?<\/url>/g);
                        if (urlMatches) {
                            const urls = urlMatches.map(u => {
                                const match = u.match(/<loc>(.*?)<\/loc>/);
                                return match ? match[1] : null;
                            }).filter(Boolean);
                            resolve({ urls, isIndex: false });
                        } else {
                            resolve({ urls: [], isIndex: false });
                        }
                    }
                } catch (e) {
                    reject(new Error(`Failed to parse ${sitemapUrl}: ${e.message}`));
                }
            });
        }).on('error', (e) => {
            reject(new Error(`Failed to fetch ${sitemapUrl}: ${e.message}`));
        });
    });
}

async function getAllUrls(sitemapUrls) {
    const allUrls = new Set();
    let processed = 0;

    for (const sitemapUrl of sitemapUrls) {
        process.stdout.write(`\r📂 Fetching sitemap ${++processed}/${sitemapUrls.length}...`);
        try {
            const { urls, isIndex } = await fetchUrls(sitemapUrl);

            if (isIndex) {
                // It's a sitemap index - fetch each child sitemap
                for (const childSitemap of urls) {
                    process.stdout.write(`\r📂 Fetching child sitemap...`);
                    const child = await fetchUrls(childSitemap);
                    child.urls.forEach(url => allUrls.add(url));
                }
            } else {
                urls.forEach(url => allUrls.add(url));
            }
        } catch (e) {
            console.error(`\n❌ Error with ${sitemapUrl}: ${e.message}`);
        }
    }

    console.log(`\r✅ Found ${allUrls.size} total URLs${' '.repeat(30)}`);
    return Array.from(allUrls);
}

// =============================================
// SUBMIT TO GOOGLE INDEXING API
// =============================================
async function submitUrlToIndexing(indexing, url) {
    try {
        await indexing.urlNotifications.publish({
            body: {
                url: url,
                type: 'URL_UPDATED'
            }
        });
        return { url, success: true };
    } catch (e) {
        return { url, success: false, error: e.message };
    }
}

async function submitBatch(indexing, urls, delay) {
    const results = [];
    for (let i = 0; i < urls.length; i++) {
        const url = urls[i];
        process.stdout.write(`\r📤 Submitting ${i + 1}/${urls.length} (${Math.round((i / urls.length) * 100)}%)`);

        const result = await submitUrlToIndexing(indexing, url);
        results.push(result);

        // Show progress indicators
        if ((i + 1) % 100 === 0 || i === urls.length - 1) {
            const successCount = results.filter(r => r.success).length;
            const failCount = results.filter(r => !r.success).length;
            process.stdout.write(`\r✅ ${successCount} | ❌ ${failCount} | 📦 Batch ${i + 1}/${urls.length}${' '.repeat(20)}`);
        }

        // Delay to avoid rate limiting
        if (i < urls.length - 1) {
            await new Promise(r => setTimeout(r, delay));
        }
    }
    return results;
}

// =============================================
// MAIN FUNCTION
// =============================================
async function main() {
    console.log('\n' + '='.repeat(60));
    console.log('🚀 GOOGLE INDEXING API SUBMISSION FOR HIRENEST.AI');
    console.log('='.repeat(60));

    // Check for service account file
    const keyPath = path.join(__dirname, SERVICE_ACCOUNT_FILE);
    if (!fs.existsSync(keyPath)) {
        console.error(`\n❌ ERROR: ${SERVICE_ACCOUNT_FILE} not found!`);
        console.error(`   Please place ${SERVICE_ACCOUNT_FILE} in: ${__dirname}`);
        console.error('\n   You can download it from Google Cloud Console:');
        console.error('   1. Go to: https://console.cloud.google.com/apis/credentials');
        console.error(`   2. Select project: civil-dolphin-488002-e6`);
        console.error('   3. Create Service Account key');
        console.error('   4. Save it as service_account.json in this folder');
        process.exit(1);
    }

    // Authenticate
    console.log('\n🔑 Authenticating with Google...');
    const auth = new google.auth.GoogleAuth({
        keyFile: keyPath,
        scopes: ['https://www.googleapis.com/auth/indexing']
    });

    const indexing = google.indexing({ version: 'v3', auth });

    // Fetch all URLs
    console.log('\n📡 Fetching URLs from sitemaps...');
    const allUrls = await getAllUrls(SITEMAPS);

    if (allUrls.length === 0) {
        console.log('\n⚠️  No URLs found to submit!');
        process.exit(0);
    }

    // Show sample URLs
    console.log('\n📋 Sample URLs:');
    allUrls.slice(0, 3).forEach(url => console.log(`   - ${url}`));
    if (allUrls.length > 3) {
        console.log(`   ... and ${allUrls.length - 3} more`);
    }

    // Ask for confirmation
    console.log(`\n⚠️  Ready to submit ${allUrls.length} URLs to Google Indexing API`);
    console.log('   Daily quota: 200 URL submissions per day');
    console.log('\n   Press Ctrl+C to cancel, or wait 3 seconds to continue...');
    await new Promise(r => setTimeout(r, 3000));

    // Submit URLs
    console.log('\n📤 Submitting to Google Indexing API...');
    console.log('-'.repeat(60));

    const allResults = await submitBatch(indexing, allUrls, DELAY_MS);

    // Summary
    console.log('\n' + '='.repeat(60));
    console.log('📊 SUBMISSION SUMMARY');
    console.log('='.repeat(60));

    const successful = allResults.filter(r => r.success);
    const failed = allResults.filter(r => !r.success);

    console.log(`\n✅ Successful: ${successful.length} URLs`);
    console.log(`❌ Failed:     ${failed.length} URLs`);

    if (failed.length > 0) {
        console.log('\n❌ Failed URLs:');
        failed.slice(0, 10).forEach(f => {
            console.log(`   - ${f.url}`);
            console.log(`     Error: ${f.error?.substring(0, 100)}`);
        });
        if (failed.length > 10) {
            console.log(`   ... and ${failed.length - 10} more`);
        }
    }

    console.log('\n📌 IMPORTANT NOTES:');
    console.log('   • Submission does NOT guarantee indexing');
    console.log('   • Google may take days to weeks to index pages');
    console.log('   • Use Google Search Console to monitor indexing status');
    console.log('   • Daily quota: 200 URL notifications');
    console.log('   • Wait before re-submitting same URLs (avoid duplicates)');

    console.log('\n' + '='.repeat(60));
    console.log(`🎉 Done! ${allUrls.length} URLs submitted to Google Indexing!`);
    console.log('='.repeat(60) + '\n');
}

// Run
main().catch(error => {
    console.error('\n❌ Fatal error:', error.message);
    process.exit(1);
});
