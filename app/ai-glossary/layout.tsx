import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Glossary - Technical Terms Explained",
  description: "Comprehensive glossary of Artificial Intelligence, Machine Learning, and Deep Learning terms explained in simple language.",
  keywords: ["AI glossary", "artificial intelligence terms", "machine learning dictionary", "AI terminology"],
  openGraph: {
    title: "AI Glossary - Technical Terms Explained",
    description: "Comprehensive glossary of Artificial Intelligence, Machine Learning, and Deep Learning terms explained in simple language.",
    url: "https://www.hirenest.ai/ai-glossary",
  },
};

export default function AIGlossaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
