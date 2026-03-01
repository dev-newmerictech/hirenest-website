import { useRef, useEffect, useCallback, useState } from "react";
import {
    Copy,
    Check,
    AlertCircle,
    MessageSquare,
    Sparkles,
    FileText,
    Globe2,
    ChevronDown,
} from "lucide-react";
import siteConfig from "@/src/config/siteConfig";
import { FilePdf } from "@phosphor-icons/react";


// Maximum URL length for query parameters (conservative limit)
const MAX_URL_LENGTH = 6000;

// Universal AI prompt for reading content
const AI_READ_PROMPT = `Read the article at the URL below. If the content loads successfully:
- Provide a concise accurate summary
- Be ready to answer follow up questions using only this document

If the content cannot be loaded:
- Say so explicitly
- Do not guess or infer content

URL:`;

// Construct GitHub raw URL for a slug (Mock function to satisfy TS until usage is updated)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getGitHubRawUrl(slug: string): string {
    // Return a safe fallback or original logic
    const { owner, repo, branch, contentPath } = siteConfig.gitHubRepo;
    return `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${contentPath}/${slug}.md`;
}

// Extended props interface with optional metadata
interface CopyPageDropdownProps {
    title: string;
    content: string;
    url: string;
    slug: string;
    description?: string;
    date?: string;
    tags?: string[];
    readTime?: string;
}
function formatForPrint(props: CopyPageDropdownProps): {
    title: string;
    metadata: string[];
    description: string;
    content: string;
} {
    const { title, content, description, date, tags, readTime } = props;

    const metadata: string[] = [];
    if (date) metadata.push(date);
    if (readTime) metadata.push(readTime);
    if (tags && tags.length > 0) metadata.push(tags.join(", "));

    // Strip common markdown syntax for cleaner display
    const cleanContent = content
        .replace(/^#{1,6}\s+/gm, "")             // Remove heading markers
        .replace(/\*\*([^*]+)\*\*/g, "$1")     // Bold to plain
        .replace(/\*([^*]+)\*/g, "$1")         // Italic to plain
        .replace(/`([^`]+)`/g, "$1")           // Inline code to plain
        .replace(/^\s*[-*+]\s+/gm, "- ")       // Normalize list markers
        .replace(/^\s*>\s+/gm, "")             // Remove blockquote markers
        .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1"); // Links to text only

    return {
        title,
        metadata,
        description: description || "",
        content: cleanContent,
    };
}


// Enhanced markdown format for better LLM parsing
function formatAsMarkdown(props: CopyPageDropdownProps): string {
    const { title, content, url, description, date, tags, readTime } = props;

    // Build metadata section
    const metadataLines: string[] = [];
    metadataLines.push(`Source: ${url}`);
    if (date) metadataLines.push(`Date: ${date}`);
    if (readTime) metadataLines.push(`Reading time: ${readTime}`);
    if (tags && tags.length > 0) metadataLines.push(`Tags: ${tags.join(", ")}`);

    // Build the full markdown document
    let markdown = `# ${title}\n\n`;

    // Add description if available
    if (description) {
        markdown += `> ${description}\n\n`;
    }

    // Add metadata block
    markdown += `---\n${metadataLines.join("\n")}\n---\n\n`;

    // Add main content
    markdown += content;

    return markdown;
}

// Generate a valid skill name (lowercase, hyphens, max 64 chars)
function generateSkillName(slug: string): string {
    return slug
        .toLowerCase()
        .replace(/[^a-z0-9-]/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "")
        .slice(0, 64);
}

// Format content as an Anthropic Agent Skill file (SKILL.md format)
// Follows: https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview
function formatAsSkill(props: CopyPageDropdownProps): string {
    const { title, content, slug, description, tags } = props;

    // Generate compliant skill name
    const skillName = generateSkillName(slug);

    // Build description with "when to use" triggers (max 1024 chars)
    const tagList = tags && tags.length > 0 ? tags.join(", ") : "";
    let skillDescription = description || `Guide about ${title.toLowerCase()}.`;

    // Add usage triggers to description
    if (tagList) {
        skillDescription += ` Use when working with ${tagList.toLowerCase()} or when asked about ${title.toLowerCase()}.`;
    } else {
        skillDescription += ` Use when asked about ${title.toLowerCase()}.`;
    }

    // Truncate description if needed (max 1024 chars)
    if (skillDescription.length > 1024) {
        skillDescription = skillDescription.slice(0, 1021) + "...";
    }

    // Build YAML frontmatter (required by Agent Skills spec)
    let skill = `---\n`;
    skill += `name: ${skillName}\n`;
    skill += `description: ${skillDescription}\n`;
    skill += `---\n\n`;

    // Add title
    skill += `# ${title}\n\n`;

    // Add instructions section
    skill += `## Instructions\n\n`;
    skill += content;

    // Add examples section placeholder if content doesn't include examples
    if (!content.toLowerCase().includes("## example")) {
        skill += `\n\n## Examples\n\n`;
        skill += `Use this skill when the user asks about topics covered in this guide.\n`;
    }

    return skill;
}

// Check if URL length exceeds safe limits
function isUrlTooLong(url: string): boolean {
    return url.length > MAX_URL_LENGTH;
}

// Feedback state type
type FeedbackState = "idle" | "copied" | "error" | "url-too-long";

export default function CopyPageDropdown(props: CopyPageDropdownProps) {
    const { title, slug } = props;

    const [feedback, setFeedback] = useState<FeedbackState>("idle");
    const [feedbackMessage, setFeedbackMessage] = useState("");
    const detailsRef = useRef<HTMLDetailsElement>(null);
    const summaryRef = useRef<HTMLElement>(null);

    // Clear feedback after delay
    const clearFeedback = useCallback(() => {
        setTimeout(() => {
            setFeedback("idle");
            setFeedbackMessage("");
        }, 2000);
    }, []);

    // Close dropdown when clicking outside (JS enhancement)
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                detailsRef.current &&
                !detailsRef.current.contains(event.target as Node)
            ) {
                detailsRef.current.open = false;
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Close details element after action (JS enhancement)
    const closeDetails = useCallback(() => {
        if (detailsRef.current) {
            detailsRef.current.open = false;
        }
    }, []);

    // Safe clipboard write with error handling
    const writeToClipboard = async (text: string): Promise<boolean> => {
        try {
            await navigator.clipboard.writeText(text);
            return true;
        } catch (error) {
            // Fallback for older browsers or permission issues
            try {
                const textarea = document.createElement("textarea");
                textarea.value = text;
                textarea.style.position = "fixed";
                textarea.style.opacity = "0";
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand("copy");
                document.body.removeChild(textarea);
                return true;
            } catch {
                console.error("Failed to copy to clipboard:", error);
                return false;
            }
        }
    };

    // Handle copy page action with error handling
    const handleCopyPage = async () => {
        const markdown = formatAsMarkdown(props);
        const success = await writeToClipboard(markdown);

        if (success) {
            setFeedback("copied");
            setFeedbackMessage("Copied!");
        } else {
            setFeedback("error");
            setFeedbackMessage("Failed to copy");
        }

        clearFeedback();
        setTimeout(() => closeDetails(), 1500);
    };

    // Handle download skill file (Anthropic Agent Skills format)
    const handleDownloadSkill = () => {
        const skillContent = formatAsSkill(props);
        const blob = new Blob([skillContent], {
            type: "text/markdown;charset=utf-8",
        });
        const url = URL.createObjectURL(blob);

        // Create temporary link and trigger download as SKILL.md
        const link = document.createElement("a");
        link.href = url;
        link.download = "SKILL.md";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Clean up object URL
        URL.revokeObjectURL(url);

        setFeedback("copied");
        setFeedbackMessage("Downloaded!");
        clearFeedback();
        setTimeout(() => closeDetails(), 1500);
    };

    // Handle export as PDF (triggers browser print dialog)
    const handleExportPDF = () => {
        const printData = formatForPrint(props);
        const printWindow = window.open("", "_blank");
        if (!printWindow) { return; }

        const escapeHtml = (str: string) =>
            str.replace(/</g, "&lt;").replace(/>/g, "&gt;");

        // Grab rendered HTML from the live article content and clean it
        let renderedContent = "";
        const articleEl = document.querySelector(".hirenest-content") || document.querySelector(".blog-post-content");
        if (articleEl) {
            const clone = articleEl.cloneNode(true) as HTMLElement;
            // Remove UI-only elements that shouldn't appear in PDF
            clone.querySelectorAll(
                ".heading-anchor, .copy-page-dropdown, .copy-page-trigger, .blog-h1-wrapper, .code-copy-button, .code-language, .blog-meta, .blog-image-caption, button"
            ).forEach(el => el.remove());
            renderedContent = clone.innerHTML;
        } else {
            renderedContent = escapeHtml(printData.content);
        }

        // Collect all stylesheets from the current page (includes route-styles.css)
        const pageStyles = Array.from(document.styleSheets)
            .map(sheet => {
                try {
                    return Array.from(sheet.cssRules).map(rule => rule.cssText).join("\n");
                } catch { return ""; }
            })
            .join("\n");

        // Get current theme for CSS variable resolution
        const currentTheme = document.documentElement.getAttribute("data-theme") || "light";

        printWindow.document.write(`<!DOCTYPE html>
<html data-theme="${currentTheme}">
<head>
  <title>${escapeHtml(printData.title)}</title>
  <style>${pageStyles}</style>
  <style>
    /* PDF-specific overrides */
    body { margin: 0; padding: 0; }
    .pdf-wrapper {
      max-width: 750px;
      margin: 0 auto;
      padding: 40px 24px;
    }
    .pdf-title { font-size: 28px; font-weight: 700; margin-bottom: 8px; color: var(--text-primary, #1a1a1a); }
    .pdf-meta { color: var(--text-secondary, #666); font-size: 14px; margin-bottom: 16px; }
    .pdf-desc { font-size: 18px; color: var(--text-secondary, #444); margin-bottom: 24px; font-style: italic; }
    .heading-anchor { display: none !important; }
    .copy-page-dropdown, .copy-page-trigger { display: none !important; }
    @media print {
      body { padding: 0; }
      .hirenest-content img, .hirenest-content .blog-image { page-break-inside: avoid; }
      .hirenest-content pre, .hirenest-content .code-block-wrapper, .hirenest-content blockquote { page-break-inside: avoid; }
    }
  </style>
</head>
<body>
  <div class="pdf-wrapper">
    <div class="pdf-title">${escapeHtml(printData.title)}</div>
    ${printData.metadata.length > 0 ? `<div class="pdf-meta">${printData.metadata.join(" | ")}</div>` : ""}
    ${printData.description ? `<div class="pdf-desc">${escapeHtml(printData.description)}</div>` : ""}
    <div class="hirenest-content">${renderedContent}</div>
  </div>
</body>
</html>`);
        printWindow.document.close();
        printWindow.print();
        closeDetails();
    };

    // Get feedback icon
    const getFeedbackIcon = () => {
        switch (feedback) {
            case "copied":
                return <Check size={16} className="copy-page-icon feedback-success" />;
            case "error":
                return (
                    <AlertCircle size={16} className="copy-page-icon feedback-error" />
                );
            case "url-too-long":
                return <Check size={16} className="copy-page-icon feedback-warning" />;
            default:
                return <Copy size={16} className="copy-page-icon" />;
        }
    };

    // Generate URLs for external links
    const blogUrl = typeof window !== "undefined"
        ? `${window.location.origin}/blog/${slug}`
        : `/blog/${slug}`;

    const rawMarkdownUrl = typeof window !== "undefined"
        ? `${window.location.origin}/raw/${slug}`
        : `/raw/${slug}`;

    const chatGptUrl = `https://chatgpt.com/?q=${encodeURIComponent(`${AI_READ_PROMPT} ${blogUrl}`)}`;
    const claudeUrl = `https://claude.ai/new?q=${encodeURIComponent(`${AI_READ_PROMPT} ${blogUrl}`)}`;
    const perplexityUrl = `https://www.perplexity.ai/search?q=${encodeURIComponent(`${AI_READ_PROMPT} ${blogUrl}`)}`;

    // Suppress unused variable warnings for functions that may be used later
    void isUrlTooLong;
    void MAX_URL_LENGTH;

    return (
        <details className="copy-page-dropdown" ref={detailsRef}>
            {/* Native summary element works without JavaScript */}
            <summary
                ref={summaryRef}
                className="copy-page-trigger"
                aria-label={`Copy or share: ${title}`}
            >
                <Copy size={14} aria-hidden="true" />
                <span>Copy page</span>
                <ChevronDown size={14} className="dropdown-chevron" aria-hidden="true" />
            </summary>

            {/* Dropdown menu - rendered natively by <details> element */}
            <div className="copy-page-menu" role="menu" aria-label="Copy and share options">
                {/* Copy page option (requires JS) */}
                <button
                    className="copy-page-item js-only"
                    onClick={handleCopyPage}
                    role="menuitem"
                    tabIndex={0}
                    type="button"
                >
                    {getFeedbackIcon()}
                    <div className="copy-page-item-content">
                        <span className="copy-page-item-title">
                            {feedback !== "idle" ? feedbackMessage : "Copy page"}
                        </span>
                        <span className="copy-page-item-desc">
                            Copy page as Markdown for LLMs
                        </span>
                    </div>
                </button>

                {/* View as Markdown (works without JS - uses href) */}
                <a
                    className="copy-page-item"
                    href={rawMarkdownUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    role="menuitem"
                    onClick={closeDetails}
                >
                    <FileText size={16} className="copy-page-icon" aria-hidden="true" />
                    <div className="copy-page-item-content">
                        <span className="copy-page-item-title">
                            View as Markdown
                            <span className="external-arrow" aria-hidden="true">
                                ↗
                            </span>
                        </span>
                        <span className="copy-page-item-desc">Open raw .md file</span>
                    </div>
                </a>

                {/* Download as SKILL.md (requires JS) */}
                <button
                    className="copy-page-item js-only"
                    onClick={handleDownloadSkill}
                    role="menuitem"
                    tabIndex={0}
                    type="button"
                >
                    <Sparkles
                        size={20}
                        className="copy-page-icon"
                        aria-hidden="true"
                    />
                    <div className="copy-page-item-content">
                        <span className="copy-page-item-title">Download as {slug}.md</span>
                        <span className="copy-page-item-desc">
                            Export as Anthropic Agent Skill file
                        </span>
                    </div>
                </button>

                {/* Open in ChatGPT (works without JS - uses href) */}
                <a
                    className="copy-page-item"
                    href={chatGptUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    role="menuitem"
                    onClick={closeDetails}
                >
                    <MessageSquare
                        size={20}
                        className="copy-page-icon"
                        aria-hidden="true"
                    />
                    <div className="copy-page-item-content">
                        <span className="copy-page-item-title">
                            Open in ChatGPT
                            <span className="external-arrow" aria-hidden="true">
                                ↗
                            </span>
                        </span>
                        <span className="copy-page-item-desc">
                            Ask questions about this page
                        </span>
                    </div>
                </a>

                {/* Open in Claude (works without JS - uses href) */}
                <a
                    className="copy-page-item"
                    href={claudeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    role="menuitem"
                    onClick={closeDetails}
                >
                    <Sparkles
                        size={20}
                        className="copy-page-icon"
                        aria-hidden="true"
                    />
                    <div className="copy-page-item-content">
                        <span className="copy-page-item-title">
                            Open in Claude
                            <span className="external-arrow" aria-hidden="true">
                                ↗
                            </span>
                        </span>
                        <span className="copy-page-item-desc">
                            Ask questions about this page
                        </span>
                    </div>
                </a>

                {/* Open in Perplexity (works without JS - uses href) */}
                <a
                    className="copy-page-item"
                    href={perplexityUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    role="menuitem"
                    onClick={closeDetails}
                >
                    <Globe2
                        size={20}
                        className="copy-page-icon"
                        aria-hidden="true"
                    />
                    <div className="copy-page-item-content">
                        <span className="copy-page-item-title">
                            Open in Perplexity
                            <span className="external-arrow" aria-hidden="true">
                                ↗
                            </span>
                        </span>
                        <span className="copy-page-item-desc">
                            Ask questions about this page
                        </span>
                    </div>
                </a>

                {/* Export as PDF (requires JS) */}
                <button
                    className="copy-page-item js-only"
                    onClick={handleExportPDF}
                    role="menuitem"
                    tabIndex={0}
                    type="button"
                >
                    <FilePdf size={16} className="copy-page-icon" aria-hidden="true" />
                    <div className="copy-page-item-content">
                        <span className="copy-page-item-title">Export as PDF</span>
                        <span className="copy-page-item-desc">
                            Print or save as PDF
                        </span>
                    </div>
                </button>
            </div>
        </details>
    );
}