# Generate Blog Links for SEO
# This script fetches your sitemap and extracts all blog post URLs
# Then generates HTML links to add to index.html

import requests
import xml.etree.ElementTree as ET

print("Fetching sitemap from https://hirenest.ai/sitemap.xml...")

try:
    # Fetch the main sitemap
    response = requests.get("https://hirenest.ai/sitemap.xml")
    response.raise_for_status()
    
    root = ET.fromstring(response.content)
    
    # XML namespace
    ns = {'sm': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
    
    # Check if it's a sitemap index
    sitemaps = root.findall('.//sm:sitemap/sm:loc', ns)
    
    blog_urls = []
    
    if sitemaps:
        # It's a sitemap index, fetch each sitemap
        print(f"Found {len(sitemaps)} sitemaps")
        for sitemap_loc in sitemaps:
            sitemap_url = sitemap_loc.text
            if 'sitemap-posts' in sitemap_url:
                print(f"Fetching {sitemap_url}...")
                sub_response = requests.get(sitemap_url)
                sub_root = ET.fromstring(sub_response.content)
                urls = sub_root.findall('.//sm:url/sm:loc', ns)
                for url in urls:
                    if '/blog/' in url.text:
                        blog_urls.append(url.text)
    else:
        # It's a regular sitemap
        urls = root.findall('.//sm:url/sm:loc', ns)
        for url in urls:
            if '/blog/' in url.text:
                blog_urls.append(url.text)
    
    print(f"\nFound {len(blog_urls)} blog posts")
    print("\n<!-- Copy this HTML and paste it into index.html -->")
    print("<!-- Replace the 'Recent Blog Posts' section (around line 435) -->")
    print("\n<h2>Blog Posts</h2>")
    print("<ul>")
    
    for url in blog_urls:
        # Extract slug from URL
        slug = url.split('/blog/')[-1]
        # Create title from slug
        title = slug.replace('-', ' ').title()
        print(f'  <li><a href="/blog/{slug}">{title}</a></li>')
    
    print("</ul>")
    
    print(f"\n\n✓ Generated {len(blog_urls)} blog post links")
    print("\nNext steps:")
    print("1. Copy the HTML above")
    print("2. Open index.html")
    print("3. Find the 'Recent Blog Posts' section (line ~435)")
    print("4. Replace the example links with the generated links")
    print("5. Run: npm run build")
    print("6. Deploy to GCP")
    
except Exception as e:
    print(f"Error: {e}")
    print("\nAlternative: Manually add blog post links to index.html")
    print("Visit https://hirenest.ai/blog and copy the URLs of your most important posts")
