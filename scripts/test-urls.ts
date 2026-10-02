// scripts/test-urls.ts
/**
 * Test all URLs to verify they return 200 status codes
 * Reads URLs from all-urls.txt and checks each one
 */

import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

interface TestResult {
  url: string
  status: number
  error?: string
  timestamp: string
}

interface TestSummary {
  total: number
  success: number
  failed: number
  failures: TestResult[]
  timestamp: string
}

async function testUrl(url: string): Promise<TestResult> {
  const timestamp = new Date().toISOString()
  try {
    const response = await fetch(url, {
      method: 'GET',
      redirect: 'follow',
      headers: {
        'User-Agent': 'HireNest-URL-Tester/1.0'
      }
    })
    return {
      url,
      status: response.status,
      timestamp
    }
  } catch (error) {
    return {
      url,
      status: 0,
      error: error instanceof Error ? error.message : String(error),
      timestamp
    }
  }
}

async function main() {
  // Load URLs
  const urlsPath = join(process.cwd(), 'scripts', 'all-urls.txt')
  const urlsContent = readFileSync(urlsPath, 'utf-8')
  const urls = urlsContent.split('\n').filter(Boolean).map(u => u.trim())

  console.log(`Testing ${urls.length} URLs...\n`)

  const results: TestResult[] = []
  let successCount = 0
  let failCount = 0
  const batchSize = 10

  // Process URLs in batches to avoid overwhelming the server
  for (let i = 0; i < urls.length; i += batchSize) {
    const batch = urls.slice(i, i + batchSize)
    const batchResults = await Promise.all(batch.map(testUrl))

    for (const result of batchResults) {
      results.push(result)

      if (result.status === 200) {
        successCount++
        process.stdout.write('.')
      } else {
        failCount++
        process.stdout.write(`\n[${result.status}] ${result.url}`)
        if (result.error) {
          process.stdout.write(`\n  Error: ${result.error}`)
        }
      }
    }

    // Show progress every 100 URLs
    if ((i + batchSize) % 100 === 0) {
      console.log(`\n  Progress: ${Math.min(i + batchSize, urls.length)}/${urls.length} (${successCount} passed, ${failCount} failed)`)
    }
  }

  // Generate summary
  const failResults = results.filter(r => r.status !== 200)
  const summary: TestSummary = {
    total: results.length,
    success: successCount,
    failed: failCount,
    failures: failResults,
    timestamp: new Date().toISOString()
  }

  // Write results
  const resultsPath = join(process.cwd(), 'scripts', 'url-test-results.json')
  writeFileSync(resultsPath, JSON.stringify(summary, null, 2))

  console.log(`\n\n${'='.repeat(50)}`)
  console.log(`TEST RESULTS`)
  console.log(`${'='.repeat(50)}`)
  console.log(`Total URLs tested: ${results.length}`)
  console.log(`Successful (200): ${successCount}`)
  console.log(`Failed: ${failCount}`)
  console.log(`Success rate: ${((successCount / results.length) * 100).toFixed(2)}%`)
  console.log(`${'='.repeat(50)}`)

  if (failResults.length > 0) {
    console.log(`\nFailed URLs by status code:`)
    const byStatus: Record<number, TestResult[]> = {}
    for (const result of failResults) {
      if (!byStatus[result.status]) byStatus[result.status] = []
      byStatus[result.status].push(result)
    }
    for (const [status, fails] of Object.entries(byStatus)) {
      console.log(`\n  ${status} (${fails.length} URLs):`)
      fails.slice(0, 5).forEach(f => console.log(`    - ${f.url}`))
      if (fails.length > 5) {
        console.log(`    ... and ${fails.length - 5} more`)
      }
    }
  }

  console.log(`\nDetailed results saved to: ${resultsPath}`)

  // Exit with error code if any failures
  if (failCount > 0) {
    process.exit(1)
  }
}

main().catch(error => {
  console.error('Error running tests:', error)
  process.exit(1)
})
