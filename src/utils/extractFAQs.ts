// Extract FAQ items from HTML content (details/summary tags) or Markdown headings
export function extractFAQs(content: string): Array<{ question: string; answer: string }> | null {
  const faqs: Array<{ question: string; answer: string }> = [];

  // Method 1: Match <details> tags with <summary> as the question and content as the answer
  const detailsRegex = /<details\b[^>]*>([\s\S]*?)<\/details>/gi;
  const matches = [...content.matchAll(detailsRegex)];

  for (const match of matches) {
    const detailsContent = match[1];
    // Extract the summary (question)
    const summaryMatch = detailsContent.match(/<summary\b[^>]*>([\s\S]*?)<\/summary>/i);
    if (summaryMatch) {
      const question = summaryMatch[1]
        .replace(/<[^>]*>/g, '') // Remove HTML tags
        .trim();
      // The answer is everything after the summary, before closing details
      let answer = detailsContent.replace(summaryMatch[0], '').trim();
      // Clean up answer: remove extra HTML but keep text content
      answer = answer
        .replace(/<[^>]*>/g, '') // Remove HTML tags
        .replace(/\s+/g, ' ') // Normalize whitespace
        .trim();

      if (question && answer) {
        faqs.push({ question, answer });
      }
    }
  }

  // Method 2: Extract from markdown headings (if no <details> tags found)
  if (faqs.length === 0) {
    // Look for FAQ section - handle bold markers
    const faqSectionRegex = /^##\s+\*{0,2}(.*?(FAQ|Frequently Asked Questions|Questions).*?)\*{0,2}$/mi;
    const faqSectionMatch = content.match(faqSectionRegex);

    if (faqSectionMatch) {
      const faqStartIndex = content.indexOf(faqSectionMatch[0]);
      const contentAfterFaq = content.substring(faqStartIndex);

      // Extract Q&A pairs - handle both \n and \r\n line breaks
      const qaRegex = /^###\s+\*{0,2}(.+?)\*{0,2}$[\r\n]+([\s\S]*?)(?=[\r\n]+###\s+|[\r\n]+##\s+|$)/gm;
      let qaMatch;
      let extractedCount = 0;

      while ((qaMatch = qaRegex.exec(contentAfterFaq)) !== null && extractedCount < 50) {
        let question = qaMatch[1].trim()
          .replace(/^\*\*|\*\*$/g, '') // Remove bold markers
          .replace(/\?+$/, ''); // Remove existing question marks

        // Add question mark if not present
        if (!question.endsWith('?')) {
          question += '?';
        }

        let answer = qaMatch[2].trim()
          .replace(/```[\s\S]*?```/g, '') // Remove code blocks
          .replace(/[\r\n]+/g, ' ') // Replace line breaks with spaces
          .replace(/\s+/g, ' ') // Normalize whitespace
          .trim();

        // Limit answer length
        if (answer.length > 300) {
          answer = answer.substring(0, 297) + '...';
        }

        if (question && answer && answer.length > 10) {
          faqs.push({ question, answer });
          extractedCount++;
        }
      }
    }
  }

  return faqs.length > 0 ? faqs : null;
}
