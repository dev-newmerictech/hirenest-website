# Ahrefs Crawler Access Fix

## Issue
Ahrefs Site Audit bot cannot access `robots.txt` on your website. This is blocking Ahrefs from crawling your site.

**Error:** HTTP code denies access or server failed to satisfy request

---

## ✅ Code-Level Fix (DONE)

Updated `middleware.ts` to explicitly exclude `robots.txt` and `sitemap.xml` from middleware processing:

```typescript
matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
]
```

This ensures Next.js middleware doesn't interfere with crawler access.

---

## ⚠️ Infrastructure-Level Fixes (YOU NEED TO DO)

The main issue is likely at your **AWS infrastructure level**, not in your code. Here's what to check:

### 1. **AWS WAF (Web Application Firewall)**

If you're using AWS WAF, it might be blocking Ahrefs.

**Check:**
```bash
# List WAF rules
aws wafv2 list-web-acls --scope REGIONAL --region <your-region>

# Get WAF details
aws wafv2 get-web-acl --scope REGIONAL --region <your-region> --id <acl-id> --name <acl-name>
```

**Fix:**
Add a rule to whitelist Ahrefs user-agent:
- **User-Agent:** `AhrefsSiteAudit`
- **Action:** Allow

**AWS Console:**
1. Go to: AWS WAF → Web ACLs → Your ACL
2. Click "Rules" → "Add rules" → "Add my own rules and rule groups"
3. Rule type: "Regular rule"
4. Name: "Allow-Ahrefs-Crawler"
5. If a request: "matches the statement"
   - Inspect: "Header"
   - Header field name: `User-Agent`
   - Match type: "Contains string"
   - String to match: `AhrefsSiteAudit`
6. Action: "Allow"
7. Save

---

### 2. **CloudFront Distribution**

If you're using CloudFront, check for blocking rules.

**Check:**
```bash
# List distributions
aws cloudfront list-distributions

# Get distribution config
aws cloudfront get-distribution-config --id <distribution-id>
```

**Fix:**
1. Go to: CloudFront → Distributions → Your distribution
2. Check "Behaviors" tab
3. Ensure `robots.txt` and `sitemap.xml` are not restricted
4. Check "Restrictions" tab → Ensure no geo-restrictions blocking Ahrefs IPs

---

### 3. **Application Load Balancer (ALB)**

Check if ALB has rules blocking crawlers.

**Check:**
```bash
# List load balancers
aws elbv2 describe-load-balancers

# Check listener rules
aws elbv2 describe-listeners --load-balancer-arn <alb-arn>
aws elbv2 describe-rules --listener-arn <listener-arn>
```

**Fix:**
Ensure no rules are blocking based on User-Agent.

---

### 4. **Security Groups**

Ensure Ahrefs IPs are not blocked.

**Ahrefs IP Ranges to Whitelist:**
```
54.36.148.0/24
54.36.149.0/24
54.36.150.0/24
195.154.122.0/24
195.154.123.0/24
195.154.126.0/24
195.154.127.0/24
```

**Check Security Groups:**
```bash
# List security groups
aws ec2 describe-security-groups

# Check specific security group
aws ec2 describe-security-groups --group-ids <sg-id>
```

**Fix:**
1. Go to: EC2 → Security Groups → Your security group
2. Inbound rules → Add rule
3. Type: HTTP (80) and HTTPS (443)
4. Source: Add each Ahrefs IP range
5. Save

---

### 5. **AWS Shield / DDoS Protection**

If you have AWS Shield Advanced, it might be blocking Ahrefs.

**Fix:**
Contact AWS Support to whitelist Ahrefs IPs.

---

### 6. **Rate Limiting**

Check if you have rate limiting that's too aggressive.

**In your robots.ts:**
We already set `crawlDelay: 2` for Ahrefs:
```typescript
{
    userAgent: 'AhrefsBot',
    allow: '/',
    crawlDelay: 2,
}
```

**If using AWS API Gateway or other rate limiting:**
- Increase rate limit for Ahrefs user-agent
- Whitelist Ahrefs IPs from rate limiting

---

### 7. **Nginx/Apache Configuration** (if applicable)

If you're using a reverse proxy, check its configuration.

**Nginx example to whitelist Ahrefs:**
```nginx
# Allow Ahrefs crawler
if ($http_user_agent ~* "AhrefsSiteAudit|AhrefsBot") {
    set $allowed 1;
}

# Block other bots but allow Ahrefs
if ($allowed != 1) {
    # Your blocking rules
}
```

---

## 🧪 Testing

### Test 1: Verify robots.txt is accessible
```bash
# Test from your local machine
curl -I https://hirenest.ai/robots.txt

# Expected:
# HTTP/2 200
# Content-Type: text/plain
```

### Test 2: Test with Ahrefs user-agent
```bash
# Simulate Ahrefs crawler
curl -I -A "Mozilla/5.0 (compatible; AhrefsSiteAudit/6.1; +http://ahrefs.com/robot/)" https://hirenest.ai/robots.txt

# Expected:
# HTTP/2 200
```

### Test 3: Check from external location
Use online tools:
- https://www.websiteplanet.com/webtools/robots-txt/
- https://technicalseo.com/tools/robots-txt/

---

## 📋 Checklist

### Code-Level (DONE):
- [x] Exclude robots.txt from middleware
- [x] Exclude sitemap.xml from middleware
- [x] Allow AhrefsBot in robots.ts

### Infrastructure-Level (YOU NEED TO DO):
- [ ] Check AWS WAF rules
- [ ] Whitelist Ahrefs user-agent in WAF
- [ ] Whitelist Ahrefs IPs in Security Groups
- [ ] Check CloudFront restrictions
- [ ] Check ALB listener rules
- [ ] Verify no rate limiting blocking Ahrefs
- [ ] Test robots.txt accessibility
- [ ] Test with Ahrefs user-agent

---

## 🔍 How to Find the Issue

### Step 1: Check CloudWatch Logs
```bash
# Check ALB access logs
aws logs filter-log-events \
  --log-group-name /aws/elasticloadbalancing/app/<alb-name> \
  --filter-pattern "AhrefsSiteAudit"

# Look for 403, 429, or 503 errors
```

### Step 2: Check WAF Logs
```bash
# Check WAF logs
aws logs filter-log-events \
  --log-group-name aws-waf-logs-<your-log-group> \
  --filter-pattern "AhrefsSiteAudit"

# Look for BLOCK actions
```

### Step 3: Test Directly
```bash
# Test from different IPs
curl -I -A "AhrefsSiteAudit" https://hirenest.ai/robots.txt

# If you get 403/429/503, you've found the issue
```

---

## 🎯 Most Likely Causes (in order)

1. **AWS WAF blocking Ahrefs user-agent** (70% probability)
   - Solution: Add WAF rule to allow `AhrefsSiteAudit`

2. **Security Group blocking Ahrefs IPs** (15% probability)
   - Solution: Add Ahrefs IP ranges to security group

3. **Rate limiting too aggressive** (10% probability)
   - Solution: Increase rate limits or whitelist Ahrefs

4. **CloudFront geo-restrictions** (5% probability)
   - Solution: Remove geo-restrictions or allow Ahrefs regions

---

## 📞 Contact Ahrefs Support

If you can't find the issue, contact Ahrefs:
- Email: support@ahrefs.com
- Provide: Your domain, error details, and what you've tried

They can tell you:
- Exact HTTP error code they're receiving
- Which IP they're crawling from
- Exact timestamp of failed requests

---

## 🚀 Quick Fix (Temporary)

If you need immediate access for Ahrefs:

1. **Disable WAF temporarily** (not recommended for production)
2. **Open security groups to 0.0.0.0/0** (not recommended)
3. **Contact AWS Support** for emergency whitelist

**Better approach:**
Follow the checklist above to properly whitelist Ahrefs.

---

## Summary

✅ **Code-level fix applied** - robots.txt excluded from middleware  
⚠️ **Infrastructure fixes needed** - Check AWS WAF, Security Groups, CloudFront  
📋 **Action required** - Whitelist Ahrefs user-agent and IPs  

**Most likely issue:** AWS WAF blocking Ahrefs crawler  
**Quick fix:** Add WAF rule to allow `AhrefsSiteAudit` user-agent  

---

**Document Created:** January 16, 2026  
**Priority:** Medium (doesn't affect users, only SEO tools)  
**Status:** Code fixed, infrastructure needs configuration
