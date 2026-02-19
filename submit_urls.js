const axios = require('axios');

// =============================================
// CONFIGURATION
// =============================================
const API_KEY = 'hirenest2026indexnowkey';
const HOST = 'hirenest.ai';
const BATCH_SIZE = 100;

// Get sitemap URL from command line or use default
const SITEMAP_URL = process.argv[2] || 'https://hirenest.ai/sitemap.xml';

const ENDPOINTS = [
  'https://api.indexnow.org/indexnow',
  'https://www.bing.com/indexnow',
  'https://yandex.com/indexnow'
];

// All child sitemaps
const ALL_SITEMAPS = [
  'https://hirenest.ai/main-sitemap.xml',
  'https://hirenest.ai/sitemap-posts.xml',
  'https://hirenest.ai/interview-questions-sitemap.xml',
  'https://hirenest.ai/resume-keywords-sitemap.xml',
  'https://hirenest.ai/salary-sitemap.xml',
  'https://hirenest.ai/cover-letter-sitemap.xml',
  'https://hirenest.ai/job-description-sitemap.xml'
];

// =============================================
// FETCH ALL URLs FROM A SITEMAP
// =============================================
async function fetchUrls(sitemapUrl) {
  const urls = [];
  try {
    console.log(`📡 Fetching: ${sitemapUrl}`);
    const response = await axios.get(sitemapUrl, { timeout: 10000 });
    const xml = response.data;

    const urlMatches = xml.match(/<url>[\s\S]*?<\/url>/g);
    if (urlMatches) {
      for (const url of urlMatches) {
        const locMatch = url.match(/<loc>(.*?)<\/loc>/);
        if (locMatch) urls.push(locMatch[1].trim());
      }
      console.log(`   ✅ Found ${urls.length} URLs`);
    } else {
      console.log(`   ⚠️ No URLs found in this sitemap`);
    }
  } catch (error) {
    console.log(`   ❌ Error: ${error.message}`);
  }
  return urls;
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
      const resp = await axios.post(endpoint, payload, { headers });
      console.log(`   ✅ ${endpoint} → Status: ${resp.status}`);
    } catch (error) {
      const status = error.response?.status || 'No response';
      const message = error.response?.data || error.message;
      console.log(`   ❌ ${endpoint} → ${status}: ${JSON.stringify(message)}`);
    }
  }
}

// =============================================
// SPLIT INTO BATCHES
// =============================================
function chunkArray(array, size) {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}

// =============================================
// MAIN
// =============================================
async function main() {
  console.log('🚀 IndexNow Submission for hirenest.ai');
  console.log('='.repeat(50));

  let allUrls = [];

  // Fetch from ALL child sitemaps
  console.log('\n📂 Fetching URLs from all child sitemaps...\n');
  for (const sitemap of ALL_SITEMAPS) {
    const urls = await fetchUrls(sitemap);
    allUrls.push(...urls);
  }

  console.log(`\n📊 Total URLs found: ${allUrls.length}`);

  if (allUrls.length === 0) {
    console.log('❌ No URLs found. Check your sitemaps.');
    return;
  }

  const batches = chunkArray(allUrls, BATCH_SIZE);
  console.log(`\n📤 Submitting in ${batches.length} batches...`);
  console.log('-'.repeat(50));

  for (let i = 0; i < batches.length; i++) {
    console.log(`\n📦 Batch ${i + 1}/${batches.length} (${batches[i].length} URLs)`);
    await submitToIndexNow(batches[i]);
  }

  console.log('\n' + '='.repeat(50));
  console.log(`🎉 Done! ${allUrls.length} URLs submitted to IndexNow!`);
}

main();