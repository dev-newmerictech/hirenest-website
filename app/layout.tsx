import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "./styles/global.css";
import "./styles/hirenest-post.css";
import { Provider } from "@/components/ui/provider";
import { Box } from "@chakra-ui/react";
import { Block as Navbar } from '@/src/components/blocks/marketing-navbars/navbar-island/block';
import { Block as Footer } from '@/src/components/blocks/footers/footer-with-four-columns/block';
import StructuredDataWrapper from "./StructuredDataWrapper";
import AttributionCapture from "./components/AttributionCapture";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});


import { ConvexClientProvider } from "@/src/providers/ConvexClientProvider";

const FIXED_DATE = "2024-01-01T00:00:00.000Z";

import { ThemeProvider } from "@/src/context/ThemeContext";
import { FontProvider } from "@/src/context/FontContext";
import { SupabaseAuthProvider } from "@/src/context/SupabaseAuthContext";
import { ConditionalLayout } from "./ConditionalLayout";

export const metadata: Metadata = {
  metadataBase: new URL('https://hirenest.ai'),
  alternates: {
    canonical: 'https://hirenest.ai',
    languages: {
      'x-default': 'https://hirenest.ai',
      'en': 'https://hirenest.ai',
    },
  },
  title: {
    default: "Hirenest - Connect Job Seekers with Employers",
    template: "%s | Hirenest"
  },
  description: "AI-powered platform connecting job seekers with employers. Find your dream job or hire exceptional talent with smart matching technology.",
  keywords: ["Hirenest", "job search", "recruitment", "hiring", "careers", "employment", "job seekers", "job providers", "talent acquisition"],
  authors: [{ name: "Hirenest" }],
  creator: "Hirenest",
  publisher: "Hirenest",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hirenest.ai",
    siteName: "Hirenest",
    title: "Hirenest - Connect Job Seekers with Employers",
    description: "AI-powered platform connecting job seekers with employers. Find your dream job or hire exceptional talent.",
    images: [
      {
        url: "https://hirenest.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hirenest - Connect Job Seekers with Employers",
        type: "image/png",
      },
    ],
    emails: ["support@hirenest.com"],
    phoneNumbers: [],
    countryName: "United States",
  },
  twitter: {
    card: "summary_large_image",
    site: "@hirenest",
    creator: "@hirenest",
    title: "Hirenest - Connect Job Seekers with Employers",
    description: "AI-powered platform connecting job seekers with employers. Find your dream job or hire exceptional talent.",
    images: {
      url: "https://hirenest.ai/og-image.png",
      alt: "Hirenest - Connect Job Seekers with Employers",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/icon.png',
      },
    ],
  },
  verification: {
    google: 'SqIaihXLeSiPTgcIzHdNg544Qq56dGxLAy8c8mmsImk',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  other: {
    // Open Graph article dates (for compatibility)
    'article:published_time': "2024-01-01T00:00:00.000Z",
    'article:modified_time': FIXED_DATE,
    // Standard meta tags for dates
    'published_time': "2024-01-01T00:00:00.000Z",
    'modified_time': FIXED_DATE,
    // Additional date formats for better SEO
    'date': "2024-01-01T00:00:00.000Z",
    'last-modified': FIXED_DATE,
    // Ahrefs site verification
    'ahrefs-site-verification': '9d53d325e70fb9a019b6bebdb98c427aded20a7491d6ba73f31efad3358b6622',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* ... head ... */}
      <head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Hirenest RSS Feed"
          href="https://hirenest.ai/rss.xml"
        />
        <link
          rel="alternate"
          type="application/xml"
          title="Hirenest LLM Metadata"
          href="https://hirenest.ai/llms.txt"
        />
        {/* JS Detection: Add class when JavaScript is enabled
             This allows CSS to hide SSR fallback content after hydration,
             while keeping it visible for SEO crawlers and users with JS disabled */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js-loaded', 'js-available');`
          }}
        />
        {/* Structured Data - Combined Organization & Website */}
        <StructuredDataWrapper />
        <meta name="linksindexer-site-verification" content="f4e5bfc7cf21ea2ab5130cf9f64b50c13b10e7603a78a51e098525db8969c1a3"></meta>
        {/* Ahrefs Analytics */}
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="tI+0vq92ZbFL7onBCkAeVQ"
          strategy="afterInteractive"
        />

        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PT6NYXN1VG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-PT6NYXN1VG');
          `}
        </Script>

        {/* PostHog Analytics */}
        <Script id="posthog-analytics" strategy="afterInteractive">
          {`
            !function(t,e){var o,n,p,r;e._SV||(window.posthog && window.posthog.loaded)||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init ns hs wi ls ds rs os capture calculateEventProperties fs register register_once register_for_session unregister unregister_for_session bs getFeatureFlag getFeatureFlagPayload getFeatureFlagResult isFeatureEnabled reloadFeatureFlags updateFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSurveysLoaded onSessionId getSurveys getActiveMatchingSurveys renderSurvey displaySurvey cancelPendingSurvey canRenderSurvey canRenderSurveyAsync identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException startExceptionAutocapture stopExceptionAutocapture loadToolbar get_property getSessionProperty gs cs createPersonProfile setInternalOrTestUser ts ys opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing get_explicit_consent_status is_capturing clear_opt_in_out_capturing vs debug M ps getPageViewId captureTraceFeedback captureTraceMetric Xr".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e._SV=1)}(document,window.posthog||[]);
            posthog.init('phc_PlOglv6S1bfBO9ZA5bu4LVpWMS50uNoLfNIipPK4O97', {
                api_host: 'https://us.i.posthog.com',
                defaults: '2026-01-30',
                person_profiles: 'identified_only',
            })
          `}
        </Script>

        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '3222662094581134');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=3222662094581134&ev=PageView&noscript=1"
          />
        </noscript>

        {/* Privacy-friendly analytics by Plausible */}
        <Script
          src="https://plausible.io/js/pa-Qp1UVMUMD1BO3GmoYFccD.js"
          strategy="afterInteractive"
        />
        <Script id="plausible-init" strategy="afterInteractive">
          {`
          window.plausible=window.plausible||function(){(plausible.q = plausible.q || []).push(arguments)},plausible.init=plausible.init||function(i){plausible.o = i || {}};
          plausible.init()
          `}
        </Script>
      </head>
      <body className={`${inter.variable} antialiased`}>
        <AttributionCapture />
        <ConvexClientProvider>
          <ThemeProvider>
            <FontProvider>
              <SupabaseAuthProvider>
                <Provider>
                  <Box bg="gray.100">
                    <ConditionalLayout navbar={<Navbar />} footer={<Footer />}>
                      {children}
                    </ConditionalLayout>
                  </Box>
                </Provider>
              </SupabaseAuthProvider>
            </FontProvider>
          </ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
