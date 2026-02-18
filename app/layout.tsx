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
        {/* Structured Data - Combined Organization & Website */}
        <StructuredDataWrapper />

        {/* Ahrefs Analytics */}
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="tI+0vq92ZbFL7onBCkAeVQ"
          strategy="afterInteractive"
        />

      </head>
      <body className={`${inter.variable} antialiased`}>
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
