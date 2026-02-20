const { google } = require('googleapis');
const axios = require('axios');

// =============================================
// CONFIGURATION
// =============================================
const SERVICE_ACCOUNT_FILE = './service_account.json';

const SITEMAPS = [
  'https://hirenest.ai/main-sitemap.xml',
  'https://hirenest.ai/sitemap-posts.xml',
  'https://hirenest.ai/interview-questions-sitemap.xml',
  'https://hirenest.ai/resume-keywords-sitemap.xml',
  'https://hirenest.ai/salary-sitemap.xml',
  'https://hirenest.ai/cover-letter-sitemap.xml',
  'https://hirenest.ai/job-description-sitemap.xml'
];

const DELAY_MS = 500;
const DAILY_LIMIT = 200;

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
    console.log('👉 Make sure service_account.json is in same folder');
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
      console.log('⚠️  Daily limit reached! Run again tomorrow.');
      process.exit(0);
    }
    console.log(`   ❌ Failed: ${url} → ${status}: ${message}`);
    return false;
  }
}

// =============================================
// DELAY
// =============================================
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// =============================================
// MAIN
// =============================================
async function main() {
  console.log('🚀 Google Indexing API for hirenest.ai');
  console.log('='.repeat(50));

  // Authenticate
  console.log('\n🔐 Authenticating...');
  const authClient = await authenticate();

  // Fetch all URLs
  console.log('\n📡 Fetching URLs from all sitemaps...');
  let allUrls = [];

  for (let i = 0; i < SITEMAPS.length; i++) {
    const sitemap = SITEMAPS[i];
    const name = sitemap.split('/').pop();
    process.stdout.write(`   [${i+1}/7] ${name}: `);
    const urls = await fetchUrls(sitemap);
    allUrls.push(...urls);
    console.log(`${urls.length} URLs`);
  }

  // Remove duplicates
  allUrls = [...new Set(allUrls)];
  console.log(`\n📊 Total unique URLs: ${allUrls.length}`);
  console.log(`⚠️  Daily limit: ${DAILY_LIMIT} URLs`);
  console.log(`📅 Days to complete: ${Math.ceil(allUrls.length / DAILY_LIMIT)} days`);

  // Submit URLs
  console.log(`\n📤 Submitting to Google...`);
  console.log('-'.repeat(50));

  let success = 0;
  let failed = 0;
  const todayUrls = allUrls.slice(0, DAILY_LIMIT);

  for (let i = 0; i < todayUrls.length; i++) {
    const url = todayUrls[i];
    process.stdout.write(`[${i+1}/${todayUrls.length}] `);
    const result = await submitUrl(authClient, url);

    if (result) {
      success++;
      console.log(`✅ ${url}`);
    } else {
      failed++;
    }

    await sleep(DELAY_MS);
  }

  // Summary
  console.log('\n' + '='.repeat(50));
  console.log(`✅ Success:    ${success}`);
  console.log(`❌ Failed:     ${failed}`);
  console.log(`📊 Total:      ${todayUrls.length}`);
  console.log(`📅 Remaining:  ${allUrls.length - todayUrls.length} URLs`);
  console.log('\n🎉 Done! Run again tomorrow for next 200 URLs!');
  console.log('='.repeat(50));
}

main();