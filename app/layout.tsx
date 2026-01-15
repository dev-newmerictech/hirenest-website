import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/ui/provider";
import { Box } from "@chakra-ui/react";
import { Block as Navbar } from '@/src/components/blocks/marketing-navbars/navbar-island/block';
import { Block as Footer } from '@/src/components/blocks/footers/footer-with-four-columns/block';

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://hirenest.com'),
  title: {
    default: "Hirenest - Connect Job Seekers with Employers",
    template: "%s | Hirenest"
  },
  description: "Hirenest - Your trusted platform connecting job seekers with top employers. Find your dream job or discover exceptional talent for your organization.",
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
    url: "https://hirenest.com",
    siteName: "Hirenest",
    title: "Hirenest - Connect Job Seekers with Employers",
    description: "Your trusted platform connecting job seekers with top employers. Find your dream job or discover exceptional talent for your organization.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hirenest - Connect Job Seekers with Employers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hirenest - Connect Job Seekers with Employers",
    description: "Your trusted platform connecting job seekers with top employers. Find your dream job or discover exceptional talent for your organization.",
    images: ["/og-image.png"],
    creator: "@hirenest",
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
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Hirenest RSS Feed"
          href="https://hirenest.com/rss.xml"
        />
        <link
          rel="alternate"
          type="application/xml"
          title="Hirenest LLM Metadata"
          href="https://hirenest.com/llms.xml"
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Provider>
          <Box bg="gray.100">
            <Navbar />
            {children}
            <Footer />
          </Box>
        </Provider>
      </body>
    </html>
  );
}
