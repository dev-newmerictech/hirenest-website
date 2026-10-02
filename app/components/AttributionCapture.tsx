'use client';
import { useEffect } from 'react';

const COOKIE_EXPIRY_DAYS = 30;
const ATTRIBUTION_PARAMS = [
  // Platform click IDs
  'gclid', 'gbraid', 'wbraid',  // Google/YouTube
  'fbclid',                       // Meta (Facebook/Instagram)
  'twclid',                       // X (Twitter)
  'rdt_cid',                      // Reddit
  // UTM parameters
  'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content',
];

function setCookie(name: string, value: string, days: number) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  const isLocal = typeof window !== 'undefined' && 
    (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');
  
  if (isLocal) {
    // On localhost: no domain restriction (shared across ports), no Secure flag (HTTP)
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
  } else {
    // In production: scope to .hirenest.ai domain for cross-subdomain sharing
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; domain=.hirenest.ai; SameSite=Lax; Secure`;
  }
}

function getCookie(name: string): string {
  if (typeof document === 'undefined') return '';
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return decodeURIComponent(parts.pop()?.split(';').shift() || '');
  return '';
}

function deriveSource(params: URLSearchParams): string | null {
  if (params.get('gclid') || params.get('gbraid') || params.get('wbraid')) return 'google_ads';
  if (params.get('fbclid')) return 'meta';
  if (params.get('twclid')) return 'x';
  if (params.get('rdt_cid')) return 'reddit';
  if (params.get('utm_source')) return params.get('utm_source')!;
  return null;
}

/**
 * AttributionCapture — Invisible component that runs on every page load.
 * 
 * When a user arrives from an ad platform (YouTube, Facebook, Instagram, X, Reddit),
 * the platform appends click IDs and/or UTM params to the URL. This component:
 * 
 * 1. Reads all attribution-related URL parameters
 * 2. Stores them as first-party cookies on `.hirenest.ai` domain
 * 3. Derives the acquisition source (google_ads, meta, x, reddit, etc.)
 * 4. Captures the HTTP referrer (first touch only)
 * 
 * These cookies are shared with `app.hirenest.ai` (same root domain),
 * allowing the frontend app to read them during signup.
 */
export default function AttributionCapture() {
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);

      // Store each attribution param as a cookie
      for (const param of ATTRIBUTION_PARAMS) {
        const value = params.get(param);
        if (value) {
          setCookie(`hn_${param}`, value, COOKIE_EXPIRY_DAYS);
        }
      }

      // Derive and store the platform source
      const source = deriveSource(params);
      if (source) {
        setCookie('hn_source', source, COOKIE_EXPIRY_DAYS);
      }

      // Capture referrer (first touch only — don't overwrite if already set)
      if (document.referrer && !getCookie('hn_referrer')) {
        setCookie('hn_referrer', document.referrer, COOKIE_EXPIRY_DAYS);
      }
    } catch (err) {
      // Non-fatal — never break the page for attribution tracking
      console.warn('[AttributionCapture] Error:', err);
    }
  }, []);

  return null; // Invisible component — no UI output
}
