"use client";

import React, { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import rehypeRaw from "rehype-raw";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { Copy, Check, X } from "lucide-react";
import Link from "next/link";
import { useTheme } from "@/src/context/ThemeContext";
import NewsletterSignup from "./NewsletterSignup";
import ContactForm from "./ContactForm";
import CopyPageDropdown from "./CopyPageDropdown";
import siteConfig from "@/src/config/siteConfig";
import DiffCodeBlock from "./DiffCodeBlock";

// Lazy language registration - loads grammars on-demand instead of bundling all 14 upfront
const registeredLanguages = new Set<string>();

const languageLoaders: Record<string, () => Promise<{ default: unknown }>> = {
    jsx: () => import("react-syntax-highlighter/dist/esm/languages/prism/jsx"),
    tsx: () => import("react-syntax-highlighter/dist/esm/languages/prism/tsx"),
    typescript: () => import("react-syntax-highlighter/dist/esm/languages/prism/typescript"),
    javascript: () => import("react-syntax-highlighter/dist/esm/languages/prism/javascript"),
    bash: () => import("react-syntax-highlighter/dist/esm/languages/prism/bash"),
    json: () => import("react-syntax-highlighter/dist/esm/languages/prism/json"),
    css: () => import("react-syntax-highlighter/dist/esm/languages/prism/css"),
    markdown: () => import("react-syntax-highlighter/dist/esm/languages/prism/markdown"),
    python: () => import("react-syntax-highlighter/dist/esm/languages/prism/python"),
    sql: () => import("react-syntax-highlighter/dist/esm/languages/prism/sql"),
    yaml: () => import("react-syntax-highlighter/dist/esm/languages/prism/yaml"),
    go: () => import("react-syntax-highlighter/dist/esm/languages/prism/go"),
    rust: () => import("react-syntax-highlighter/dist/esm/languages/prism/rust"),
    diff: () => import("react-syntax-highlighter/dist/esm/languages/prism/diff"),
};

// Alias map for common language names
const languageAliases: Record<string, string> = {
    ts: "typescript",
    js: "javascript",
    shell: "bash",
    sh: "bash",
    md: "markdown",
    py: "python",
    yml: "yaml",
};

async function ensureLanguageRegistered(lang: string): Promise<void> {
    const canonical = languageAliases[lang] || lang;
    if (registeredLanguages.has(lang)) return;
    const loader = languageLoaders[canonical];
    if (!loader) return;
    try {
        const mod = await loader();
        const grammar = mod.default || mod;
        SyntaxHighlighter.registerLanguage(canonical, grammar as never);
        registeredLanguages.add(canonical);
        // Also mark alias as registered
        if (lang !== canonical) registeredLanguages.add(lang);
        // Register all aliases for this canonical language
        for (const [alias, target] of Object.entries(languageAliases)) {
            if (target === canonical) registeredLanguages.add(alias);
        }
    } catch {
        // Silently fall back to plain text
    }
}

/* ---------------- Security ---------------- */

const ALLOWED_IFRAME_DOMAINS = [
    "youtube.com",
    "www.youtube.com",
    "youtube-nocookie.com",
    "www.youtube-nocookie.com",
    "platform.twitter.com",
    "platform.x.com",
];

// Sanitize schema that allows collapsible sections (details/summary) and inline styles
const sanitizeSchema = {
    ...defaultSchema,
    tagNames: [...(defaultSchema.tagNames || []), "details", "summary", "iframe"],
    attributes: {
        ...defaultSchema.attributes,
        details: ["open"],
        ul: ["style"],
        ol: ["style"],
        li: ["style"],
        div: ["style"],
        p: ["style"],
        a: ["style", "href", "target", "rel"],
        img: [...(defaultSchema.attributes?.img || []), "style"],
        span: ["className", "class", "style"],
        iframe: [
            "src",
            "width",
            "height",
            "allow",
            "allowfullscreen",
            "frameborder",
            "title",
            "style",
        ],
    },
};

function InlineCopyButton({ command }: { command: string }) {
    const [copied, setCopied] = useState(false);

    const copy = async (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        await navigator.clipboard.writeText(command);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <button className="inline-copy-button" onClick={copy}>
            {copied ? <Check size={12} /> : <Copy size={12} />}
        </button>
    );
}

function iframe(props: { src?: string;[key: string]: unknown }) {
    const src = props.src as string;
    if (!src) return null;

    try {
        const url = new URL(src);
        const isAllowed = ALLOWED_IFRAME_DOMAINS.some(
            d => url.hostname === d || url.hostname.endsWith("." + d)
        );

        if (!isAllowed) return null;

        return (
            <div className="embed-container">
                <iframe {...props} loading="lazy" />
            </div>
        );
    } catch {
        return null;
    }
}

function span({ className, children }: { className?: string; children?: React.ReactNode }) {
    if (className === "copy-command") {
        const command = getTextContent(children);
        return (
            <span className="copy-command">
                <code className="inline-code">{command}</code>
                <InlineCopyButton command={command} />
            </span>
        );
    }
    return <span className={className}>{children}</span>;
}


// Copy button component for code blocks
function CodeCopyButton({ code }: { code: string }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <button
            className="code-copy-button"
            onClick={handleCopy}
            aria-label={copied ? "Copied!" : "Copy code"}
            title={copied ? "Copied!" : "Copy code"}
        >
            {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
    );
}

// Lazy code block that loads language grammar on-demand
function LazyCodeBlock({
    code,
    language,
    theme,
    isTextBlock,
}: {
    code: string;
    language: string;
    theme: { [key: string]: React.CSSProperties };
    isTextBlock: boolean;
}) {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        if (language === "text" || registeredLanguages.has(language)) {
            setReady(true);
            return;
        }
        ensureLanguageRegistered(language).then(() => setReady(true));
    }, [language]);

    const textBlockStyle = isTextBlock
        ? {
            whiteSpace: "pre-wrap" as const,
            wordWrap: "break-word" as const,
            overflowWrap: "break-word" as const,
        }
        : {};

    // Render immediately - SyntaxHighlighter gracefully handles unregistered languages
    return (
        <div className={`code-block-wrapper ${isTextBlock ? "code-block-text" : ""}`}>
            {language !== "text" && <span className="code-language">{language}</span>}
            <CodeCopyButton code={code} />
            <SyntaxHighlighter
                style={theme}
                language={ready ? (languageAliases[language] || language) : "text"}
                PreTag="div"
                customStyle={textBlockStyle}
                codeTagProps={isTextBlock ? { style: textBlockStyle } : undefined}
            >
                {code}
            </SyntaxHighlighter>
        </div>
    );
}

// Image lightbox component
function ImageLightbox({
    src,
    alt,
    onClose,
}: {
    src: string;
    alt: string;
    onClose: () => void;
}) {
    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    React.useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };
        document.addEventListener("keydown", handleEscape);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "";
        };
    }, [onClose]);

    return (
        <div className="image-lightbox-backdrop" onClick={handleBackdropClick}>
            <button
                className="image-lightbox-close"
                onClick={onClose}
                aria-label="Close lightbox"
            >
                <X size={24} />
            </button>
            <div className="image-lightbox-content">
                <img src={src} alt={alt} className="image-lightbox-image" />
                {alt && <div className="image-lightbox-caption">{alt}</div>}
            </div>
        </div>
    );
}

// Cursor Dark Theme colors for syntax highlighting
const cursorDarkTheme: { [key: string]: React.CSSProperties } = {
    'code[class*="language-"]': {
        color: "#d4d4d4",
        background: "#1e1e1e",
        fontFamily:
            "SF Mono, Monaco, Cascadia Code, Roboto Mono, Consolas, Courier New, monospace",
        fontSize: "14px",
        textAlign: "left" as const,
        whiteSpace: "pre" as const,
        wordSpacing: "normal",
        wordBreak: "normal" as const,
        wordWrap: "normal" as const,
        lineHeight: "1.6",
        tabSize: 4,
        hyphens: "none" as const,
    },
    'pre[class*="language-"]': {
        color: "#d4d4d4",
        background: "#1e1e1e",
        fontFamily:
            "SF Mono, Monaco, Cascadia Code, Roboto Mono, Consolas, Courier New, monospace",
        fontSize: "14px",
        textAlign: "left" as const,
        whiteSpace: "pre" as const,
        wordSpacing: "normal",
        wordBreak: "normal" as const,
        wordWrap: "normal" as const,
        lineHeight: "1.6",
        tabSize: 4,
        hyphens: "none" as const,
        padding: "1.5em",
        margin: "1.5em 0",
        overflow: "auto" as const,
        borderRadius: "8px",
    },
    comment: { color: "#6a9955", fontStyle: "italic" },
    prolog: { color: "#6a9955" },
    doctype: { color: "#6a9955" },
    cdata: { color: "#6a9955" },
    punctuation: { color: "#d4d4d4" },
    property: { color: "#9cdcfe" },
    tag: { color: "#569cd6" },
    boolean: { color: "#569cd6" },
    number: { color: "#b5cea8" },
    constant: { color: "#4fc1ff" },
    symbol: { color: "#4fc1ff" },
    deleted: { color: "#f44747" },
    selector: { color: "#d7ba7d" },
    "attr-name": { color: "#92c5f6" },
    string: { color: "#ce9178" },
    char: { color: "#ce9178" },
    builtin: { color: "#569cd6" },
    inserted: { color: "#6a9955" },
    operator: { color: "#d4d4d4" },
    entity: { color: "#dcdcaa" },
    url: { color: "#9cdcfe", textDecoration: "underline" },
    variable: { color: "#9cdcfe" },
    atrule: { color: "#569cd6" },
    "attr-value": { color: "#ce9178" },
    function: { color: "#dcdcaa" },
    "function-variable": { color: "#dcdcaa" },
    keyword: { color: "#569cd6" },
    regex: { color: "#d16969" },
    important: { color: "#569cd6", fontWeight: "bold" },
    bold: { fontWeight: "bold" },
    italic: { fontStyle: "italic" },
    namespace: { opacity: 0.7 },
    "class-name": { color: "#4ec9b0" },
    parameter: { color: "#9cdcfe" },
    decorator: { color: "#dcdcaa" },
};

// Cursor Light Theme colors for syntax highlighting (uses dark background for better code readability)
const cursorLightTheme: { [key: string]: React.CSSProperties } = {
    'code[class*="language-"]': {
        color: "#d4d4d4",
        background: "#1e1e1e",
        fontFamily:
            "SF Mono, Monaco, Cascadia Code, Roboto Mono, Consolas, Courier New, monospace",
        fontSize: "14px",
        textAlign: "left" as const,
        whiteSpace: "pre" as const,
        wordSpacing: "normal",
        wordBreak: "normal" as const,
        wordWrap: "normal" as const,
        lineHeight: "1.6",
        tabSize: 4,
        hyphens: "none" as const,
    },
    'pre[class*="language-"]': {
        color: "#d4d4d4",
        background: "#1e1e1e",
        fontFamily:
            "SF Mono, Monaco, Cascadia Code, Roboto Mono, Consolas, Courier New, monospace",
        fontSize: "14px",
        textAlign: "left" as const,
        whiteSpace: "pre" as const,
        wordSpacing: "normal",
        wordBreak: "normal" as const,
        wordWrap: "normal" as const,
        lineHeight: "1.6",
        tabSize: 4,
        hyphens: "none" as const,
        padding: "1.5em",
        margin: "1.5em 0",
        overflow: "auto" as const,
        borderRadius: "8px",
    },
    comment: { color: "#6a9955", fontStyle: "italic" },
    prolog: { color: "#6a9955" },
    doctype: { color: "#6a9955" },
    cdata: { color: "#6a9955" },
    punctuation: { color: "#d4d4d4" },
    property: { color: "#9cdcfe" },
    tag: { color: "#569cd6" },
    boolean: { color: "#569cd6" },
    number: { color: "#b5cea8" },
    constant: { color: "#4fc1ff" },
    symbol: { color: "#4fc1ff" },
    deleted: { color: "#f44747" },
    selector: { color: "#d7ba7d" },
    "attr-name": { color: "#92c5f6" },
    string: { color: "#ce9178" },
    char: { color: "#ce9178" },
    builtin: { color: "#569cd6" },
    inserted: { color: "#6a9955" },
    operator: { color: "#d4d4d4" },
    entity: { color: "#dcdcaa" },
    url: { color: "#9cdcfe", textDecoration: "underline" },
    variable: { color: "#9cdcfe" },
    atrule: { color: "#569cd6" },
    "attr-value": { color: "#ce9178" },
    function: { color: "#dcdcaa" },
    "function-variable": { color: "#dcdcaa" },
    keyword: { color: "#569cd6" },
    regex: { color: "#d16969" },
    important: { color: "#569cd6", fontWeight: "bold" },
    bold: { fontWeight: "bold" },
    italic: { fontStyle: "italic" },
    namespace: { opacity: 0.7 },
    "class-name": { color: "#4ec9b0" },
    parameter: { color: "#9cdcfe" },
    decorator: { color: "#dcdcaa" },
};

// Tan Theme colors for syntax highlighting (uses dark background for better code readability)
const cursorTanTheme: { [key: string]: React.CSSProperties } = {
    'code[class*="language-"]': {
        color: "#d4d4d4",
        background: "#1e1e1e",
        fontFamily:
            "SF Mono, Monaco, Cascadia Code, Roboto Mono, Consolas, Courier New, monospace",
        fontSize: "14px",
        textAlign: "left" as const,
        whiteSpace: "pre" as const,
        wordSpacing: "normal",
        wordBreak: "normal" as const,
        wordWrap: "normal" as const,
        lineHeight: "1.6",
        tabSize: 4,
        hyphens: "none" as const,
    },
    'pre[class*="language-"]': {
        color: "#d4d4d4",
        background: "#1e1e1e",
        fontFamily:
            "SF Mono, Monaco, Cascadia Code, Roboto Mono, Consolas, Courier New, monospace",
        fontSize: "14px",
        textAlign: "left" as const,
        whiteSpace: "pre" as const,
        wordSpacing: "normal",
        wordBreak: "normal" as const,
        wordWrap: "normal" as const,
        lineHeight: "1.6",
        tabSize: 4,
        hyphens: "none" as const,
        padding: "1.5em",
        margin: "1.5em 0",
        overflow: "auto" as const,
        borderRadius: "8px",
    },
    comment: { color: "#6a9955", fontStyle: "italic" },
    prolog: { color: "#6a9955" },
    doctype: { color: "#6a9955" },
    cdata: { color: "#6a9955" },
    punctuation: { color: "#d4d4d4" },
    property: { color: "#9cdcfe" },
    tag: { color: "#569cd6" },
    boolean: { color: "#569cd6" },
    number: { color: "#b5cea8" },
    constant: { color: "#4fc1ff" },
    symbol: { color: "#4fc1ff" },
    deleted: { color: "#f44747" },
    selector: { color: "#d7ba7d" },
    "attr-name": { color: "#92c5f6" },
    string: { color: "#ce9178" },
    char: { color: "#ce9178" },
    builtin: { color: "#569cd6" },
    inserted: { color: "#6a9955" },
    operator: { color: "#d4d4d4" },
    entity: { color: "#dcdcaa" },
    url: { color: "#9cdcfe", textDecoration: "underline" },
    variable: { color: "#9cdcfe" },
    atrule: { color: "#569cd6" },
    "attr-value": { color: "#ce9178" },
    function: { color: "#dcdcaa" },
    "function-variable": { color: "#dcdcaa" },
    keyword: { color: "#569cd6" },
    regex: { color: "#d16969" },
    important: { color: "#569cd6", fontWeight: "bold" },
    bold: { fontWeight: "bold" },
    italic: { fontStyle: "italic" },
    namespace: { opacity: 0.7 },
    "class-name": { color: "#4ec9b0" },
    parameter: { color: "#9cdcfe" },
    decorator: { color: "#dcdcaa" },
};

interface CopyPageDropdownProps {
    title: string;
    content: string;
    url: string;
    slug: string;
    description?: string;
    date?: string;
    tags?: string[];
    readTime?: string;
    authorName?: string;
    authorImage?: string;
}

interface BlogPostProps {
    content: string;
    postTitle?: string;
    slug?: string; // For tracking source of newsletter/contact form signups
    pageType?: "post" | "page"; // Type of content (for tracking)
    copyPageProps?: CopyPageDropdownProps; // Props for CopyPageDropdown component
}

// Content segment types for inline embeds
type ContentSegment =
    | { type: "content"; value: string }
    | { type: "newsletter" }
    | { type: "contactform" };

// Strip HTML comments from content, preserving special placeholders
// Removes <!-- ... --> but keeps <!-- newsletter --> and <!-- contactform -->
function stripHtmlComments(content: string): string {
    // First, temporarily replace special placeholders with markers
    const markers = {
        newsletter: "___NEWSLETTER_PLACEHOLDER___",
        contactform: "___CONTACTFORM_PLACEHOLDER___",
    };

    let processed = content;

    // Replace special placeholders with markers
    processed = processed.replace(/<!--\s*newsletter\s*-->/gi, markers.newsletter);
    processed = processed.replace(/<!--\s*contactform\s*-->/gi, markers.contactform);

    // Remove all remaining HTML comments (including multi-line)
    processed = processed.replace(/<!--[\s\S]*?-->/g, "");

    // Restore special placeholders
    processed = processed.replace(markers.newsletter, "<!-- newsletter -->");
    processed = processed.replace(markers.contactform, "<!-- contactform -->");

    return processed;
}

// Auto-detect and add code fences to unfenced code blocks
function autoAddCodeFences(content: string): string {
    // Don't process if content is empty
    if (!content || !content.trim()) return content;

    const lines = content.split('\n');
    const result: string[] = [];
    let i = 0;
    let inCodeFence = false;

    while (i < lines.length) {
        const line = lines[i];

        // Track if we're inside an existing code fence
        if (line.trim().startsWith('```')) {
            inCodeFence = !inCodeFence;
            result.push(line);
            i++;
            continue;
        }

        // Skip if inside code fence
        if (inCodeFence) {
            result.push(line);
            i++;
            continue;
        }

        // Detect JSON-like blocks starting with {
        if (line.trim().startsWith('{') && !line.trim().startsWith('{%')) {
            const codeBlock: string[] = [];
            let braceCount = 0;
            let j = i;

            // Collect lines until braces are balanced
            while (j < lines.length) {
                const currentLine = lines[j];
                codeBlock.push(currentLine);
                braceCount += (currentLine.match(/\{/g) || []).length;
                braceCount -= (currentLine.match(/\}/g) || []).length;

                if (braceCount <= 0 && codeBlock.length > 1) {
                    break;
                }
                j++;
            }

            // If we collected a multi-line block, wrap it
            if (codeBlock.length >= 2) {
                result.push('```json');
                result.push(...codeBlock);
                result.push('```');
                i = j + 1;
                continue;
            }
        }

        // Detect code starting with common keywords
        const codeKeywords = /^(const|let|var|function|import|export|class|interface|type|async|await)\s/;
        if (codeKeywords.test(line.trim())) {
            const codeBlock: string[] = [];
            let j = i;

            // Collect lines that look like code
            while (j < lines.length) {
                const currentLine = lines[j];
                const trimmed = currentLine.trim();

                // Stop at empty line followed by non-code, or heading
                if (trimmed === '' && j > i) {
                    // Check if next non-empty line looks like prose
                    let nextNonEmpty = j + 1;
                    while (nextNonEmpty < lines.length && lines[nextNonEmpty].trim() === '') {
                        nextNonEmpty++;
                    }
                    if (nextNonEmpty < lines.length) {
                        const nextLine = lines[nextNonEmpty].trim();
                        // If next line starts with capital letter and isn't code, stop
                        if (/^[A-Z][a-z]/.test(nextLine) && !codeKeywords.test(nextLine)) {
                            break;
                        }
                    }
                }

                // Stop at headings
                if (trimmed.startsWith('#')) {
                    break;
                }

                codeBlock.push(currentLine);
                j++;

                // If we hit balanced braces after collecting some code, could stop
                if (codeBlock.length > 2 && trimmed.endsWith('}') || trimmed.endsWith('};') || trimmed.endsWith(');')) {
                    // Check if next line looks like prose
                    if (j < lines.length && /^[A-Z][a-z]/.test(lines[j].trim())) {
                        break;
                    }
                }
            }

            if (codeBlock.length >= 2) {
                // Detect language
                const codeText = codeBlock.join('\n');
                let lang = 'javascript';
                if (/:\s*(string|number|boolean|any|void)/.test(codeText) ||
                    /interface\s+\w+/.test(codeText) ||
                    /type\s+\w+\s*=/.test(codeText) ||
                    /<[A-Z][a-zA-Z]*(\s|>|,)/.test(codeText)) {
                    lang = 'typescript';
                }

                result.push('```' + lang);
                result.push(...codeBlock);
                result.push('```');
                i = j;
                continue;
            }
        }

        // Detect bash/npm commands
        if (/^(npm|yarn|npx|pnpm|git|cd|ls|mkdir|rm|cp|mv|curl|wget)\s/.test(line.trim()) ||
            /^\$\s/.test(line.trim())) {
            const codeBlock: string[] = [];
            let j = i;

            while (j < lines.length) {
                const currentLine = lines[j];
                const trimmed = currentLine.trim();

                // Continue if line is continuation or another command
                if (trimmed === '' ||
                    /^(npm|yarn|npx|pnpm|git|cd|ls|mkdir|rm|cp|mv|curl|wget|\$|&&|\|)/.test(trimmed) ||
                    trimmed.startsWith('--') ||
                    trimmed.startsWith('-')) {
                    if (trimmed === '' && codeBlock.length > 0) {
                        break;
                    }
                    if (trimmed !== '') {
                        codeBlock.push(currentLine);
                    }
                    j++;
                } else {
                    break;
                }
            }

            if (codeBlock.length >= 1) {
                result.push('```bash');
                result.push(...codeBlock);
                result.push('```');
                i = j;
                continue;
            }
        }

        // Default: just add the line as-is
        result.push(line);
        i++;
    }

    return result.join('\n');
}

// Parse content for inline embed placeholders
// Supports: <!-- newsletter --> and <!-- contactform -->
function parseContentForEmbeds(content: string): ContentSegment[] {
    const segments: ContentSegment[] = [];

    // Pattern matches <!-- newsletter --> or <!-- contactform --> (case insensitive)
    const pattern = /<!--\s*(newsletter|contactform)\s*-->/gi;

    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = pattern.exec(content)) !== null) {
        // Add content before the placeholder
        if (match.index > lastIndex) {
            const textBefore = content.slice(lastIndex, match.index);
            if (textBefore.trim()) {
                segments.push({ type: "content", value: textBefore });
            }
        }

        // Add the embed placeholder
        const embedType = match[1].toLowerCase();
        if (embedType === "newsletter") {
            segments.push({ type: "newsletter" });
        } else if (embedType === "contactform") {
            segments.push({ type: "contactform" });
        }

        lastIndex = match.index + match[0].length;
    }

    // Add remaining content after last placeholder
    if (lastIndex < content.length) {
        const remaining = content.slice(lastIndex);
        if (remaining.trim()) {
            segments.push({ type: "content", value: remaining });
        }
    }

    // If no placeholders found, return single content segment
    if (segments.length === 0) {
        segments.push({ type: "content", value: content });
    }

    return segments;
}

// Generate slug from heading text for anchor links
function generateSlug(text: string): string {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .trim();
}

// Extract text content from React children
function getTextContent(children: React.ReactNode): string {
    if (typeof children === "string") return children;
    if (Array.isArray(children)) {
        return children.map(getTextContent).join("");
    }
    if (children && typeof children === "object" && "props" in children) {
        return getTextContent((children as React.ReactElement<{ children?: React.ReactNode }>).props.children);
    }
    return "";
}

// Re-export for backward compatibility (actual implementation in shared utility)
export { extractFAQs } from "@/src/utils/extractFAQs";

// Anchor link component for headings
function HeadingAnchor({ id }: { id: string }) {
    const handleClick = (_e: React.MouseEvent<HTMLAnchorElement>) => {
        // Copy URL to clipboard, but allow default scroll behavior
        const url = `${window.location.origin}${window.location.pathname}#${id}`;
        navigator.clipboard.writeText(url).catch(() => {
            // Silently fail if clipboard API is not available
        });
    };

    return (
        <a
            href={`#${id}`}
            className="heading-anchor"
            onClick={handleClick}
            aria-label="Copy link to heading"
            title="Copy link to heading"
        >
            #
        </a>
    );
}

function AuthorProfile({ name, image }: { name: string; image?: string }) {
    const slug = name.toLowerCase().replace(/\s+/g, '-');

    return (
        <div className="author-profile-card" style={{
            marginTop: '4rem',
            padding: '2rem',
            background: 'var(--bg-secondary, #f8f9fa)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            border: '1px solid var(--border-color, #eef0f3)'
        }}>
            {image ? (
                <img
                    src={image}
                    alt={name}
                    style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '2px solid var(--bg-primary, #ffffff)'
                    }}
                />
            ) : (
                <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'var(--primary, #000)',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    fontWeight: 'bold'
                }}>
                    {name.charAt(0)}
                </div>
            )}
            <div>
                <h3 style={{ marginTop: 0, marginBottom: '0.5rem', fontSize: '1.1rem', color: 'var(--text-secondary, #666)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>About the Author</h3>
                <p style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary, #000)' }}>{name}</p>
                <div>
                    <Link
                        href={`/blog/author/${slug}`}
                        style={{
                            color: 'var(--primary, #000)',
                            textDecoration: 'none',
                            fontSize: '0.95rem',
                            fontWeight: 500,
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px'
                        }}
                    >
                        Read more posts by {name} →
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default function BlogPost({ content, slug, pageType = "post", copyPageProps }: BlogPostProps) {
    const { theme } = useTheme();
    const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);
    const isLightboxEnabled = siteConfig.imageLightbox?.enabled !== false;
    const firstH1Rendered = useRef(false);

    // Reset ref when content changes
    useEffect(() => {
        firstH1Rendered.current = false;
    }, [content]);

    const getCodeTheme = () => {
        switch (theme) {
            case "dark":
                return cursorDarkTheme;
            case "light":
                return cursorLightTheme;
            case "tan":
                return cursorTanTheme;
            default:
                return cursorDarkTheme;
        }
    };

    // Strip HTML comments (except special placeholders) and auto-add code fences before processing
    const cleanedContent = autoAddCodeFences(stripHtmlComments(content));

    // Parse content for inline embeds
    const segments = parseContentForEmbeds(cleanedContent);
    const hasInlineEmbeds = segments.some((s) => s.type !== "content");

    // Helper to render the h1 title with CopyPageDropdown if copyPageProps.title exists
    const renderTitleH1 = () => {
        if (!copyPageProps?.title) return null;

        const id = generateSlug(getTextContent(copyPageProps.title));
        return (
            <div className="blog-h1-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <h1 id={id} className="blog-h1" style={{ margin: 0, flex: 1, minWidth: 0 }}>
                    <HeadingAnchor id={id} />
                    {copyPageProps.title}
                </h1>
                {copyPageProps && (
                    <div style={{ flexShrink: 0 }}>
                        <CopyPageDropdown {...copyPageProps} />
                    </div>
                )}
                {copyPageProps.date && (
                    <div className="blog-meta" style={{ width: '100%', marginTop: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)', display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
                        <time dateTime={new Date(copyPageProps.date).toISOString().split('T')[0]} itemProp="datePublished">
                            {new Date(copyPageProps.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </time>
                        <time dateTime={new Date(copyPageProps.date).toISOString().split('T')[0]} itemProp="dateModified" style={{ display: 'none' }}>
                            {new Date(copyPageProps.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </time>
                        {copyPageProps.authorName && (
                            <>
                                <span style={{ opacity: 0.5 }}>•</span>
                                <span itemProp="author" itemScope itemType="https://schema.org/Person" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    {copyPageProps.authorImage && (
                                        <img
                                            src={copyPageProps.authorImage}
                                            alt={copyPageProps.authorName}
                                            style={{
                                                width: '24px',
                                                height: '24px',
                                                borderRadius: '50%',
                                                objectFit: 'cover'
                                            }}
                                        />
                                    )}
                                    <Link
                                        href={`/blog/author/${copyPageProps.authorName.toLowerCase().replace(/\s+/g, '-')}`}
                                        style={{ color: 'inherit', textDecoration: 'none', fontWeight: 500 }}
                                        itemProp="name"
                                    >
                                        {copyPageProps.authorName}
                                    </Link>
                                </span>
                            </>
                        )}
                        {copyPageProps.readTime && (
                            <>
                                <span style={{ opacity: 0.5 }}>•</span>
                                <span>{copyPageProps.readTime} read</span>
                            </>
                        )}
                        {/* {copyPageProps.tags && copyPageProps.tags.length > 0 && (
              <>
                <span style={{ opacity: 0.5 }}>•</span>
                <div style={{ display: 'flex', gap: '6px', alignItems: 'center', flexWrap: 'wrap' }}>
                  {copyPageProps.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/blog/tag/${encodeURIComponent(tag)}`}
                      style={{
                        color: 'var(--text-secondary)',
                        textDecoration: 'none',
                        background: 'var(--bg-secondary)',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        fontSize: '0.8rem',
                        fontWeight: 500,
                        transition: 'all 0.2s ease',
                        border: '1px solid var(--border-color)',
                        textTransform: 'capitalize'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.background = 'var(--bg-hover)';
                        e.currentTarget.style.color = 'var(--text-primary)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.background = 'var(--bg-secondary)';
                        e.currentTarget.style.color = 'var(--text-secondary)';
                      }}
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </>
            )} */}
                    </div>
                )}
            </div>
        );
    };

    // Helper to render a single markdown segment
    const renderMarkdown = (markdownContent: string, key?: number) => (
        <ReactMarkdown
            key={key}
            remarkPlugins={[remarkGfm, remarkBreaks]}
            rehypePlugins={[rehypeRaw, [rehypeSanitize, sanitizeSchema]]}
            components={{
                code(codeProps) {
                    const { className, children, style, ...restProps } = codeProps as {
                        className?: string;
                        children?: React.ReactNode;
                        style?: React.CSSProperties;
                        inline?: boolean;
                    };
                    const match = /language-(\w+)/.exec(className || "");

                    // Detect inline code: no language class AND content is short without newlines
                    const codeContent = String(children);
                    const hasNewlines = codeContent.includes('\n');
                    const isShort = codeContent.length < 80;
                    const hasLanguage = !!match || !!className;

                    // It's inline only if: no language, short content, no newlines
                    const isInline = !hasLanguage && isShort && !hasNewlines;

                    if (isInline) {
                        return (
                            <code className="inline-code" style={style} {...restProps}>
                                {children}
                            </code>
                        );
                    }

                    const codeString = String(children).replace(/\n$/, "");
                    const language = match ? match[1] : "text";
                    const isTextBlock = language === "text";

                    return (
                        <LazyCodeBlock
                            code={codeString}
                            language={language}
                            theme={getCodeTheme()}
                            isTextBlock={isTextBlock}
                        />
                    );
                },
                img({ src, alt }) {
                    const handleImageClick = () => {
                        if (isLightboxEnabled && src) {
                            setLightboxImage({ src: String(src), alt: alt || "Blog illustration" });
                        }
                    };
                    return (
                        <span className="blog-image-wrapper">
                            <img
                                src={src}
                                alt={alt || "Blog illustration"}
                                width={800}
                                height={450}
                                className={`blog-image ${isLightboxEnabled ? "blog-image-clickable" : ""}`}
                                loading="lazy"
                                onClick={isLightboxEnabled ? handleImageClick : undefined}
                                style={{ width: '100%', height: 'auto', aspectRatio: '16/9', objectFit: 'cover', ...(isLightboxEnabled ? { cursor: "pointer" } : {}) }}
                            />
                            {alt && <span className="blog-image-caption">{alt}</span>}
                        </span>
                    );
                },
                a({ href, children }) {
                    const isExternal = href?.startsWith("http");
                    return (
                        <a
                            href={href}
                            target={isExternal ? "_blank" : undefined}
                            rel={isExternal ? "noopener noreferrer" : undefined}
                            className="blog-link"
                        >
                            {children}
                        </a>
                    );
                },
                blockquote({ children }) {
                    return (
                        <blockquote className="blog-blockquote">{children}</blockquote>
                    );
                },
                h1({ children }) {
                    // If copyPageProps.title exists, skip all h1s from markdown (title is rendered separately)
                    if (copyPageProps?.title) {
                        return null;
                    }

                    // No copyPageProps.title, render h1 from markdown content normally
                    const id = generateSlug(getTextContent(children));
                    const isFirstH1 = !firstH1Rendered.current;
                    if (isFirstH1) {
                        firstH1Rendered.current = true;
                    }

                    return (
                        <div className="blog-h1-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                            <h2 id={id} className="blog-h1" style={{ margin: 0, flex: 1, minWidth: 0 }}>
                                <HeadingAnchor id={id} />
                                {children}
                            </h2>
                            {isFirstH1 && copyPageProps && (
                                <div style={{ flexShrink: 0 }}>
                                    <CopyPageDropdown {...copyPageProps} />
                                </div>
                            )}
                        </div>
                    );
                },
                h2({ children }) {
                    const id = generateSlug(getTextContent(children));
                    return (
                        <h2 id={id} className="blog-h2">
                            <HeadingAnchor id={id} />
                            {children}
                        </h2>
                    );
                },
                h3({ children }) {
                    const id = generateSlug(getTextContent(children));
                    return (
                        <h3 id={id} className="blog-h3">
                            <HeadingAnchor id={id} />
                            {children}
                        </h3>
                    );
                },
                h4({ children }) {
                    const id = generateSlug(getTextContent(children));
                    return (
                        <h4 id={id} className="blog-h4">
                            <HeadingAnchor id={id} />
                            {children}
                        </h4>
                    );
                },
                h5({ children }) {
                    const id = generateSlug(getTextContent(children));
                    return (
                        <h5 id={id} className="blog-h5">
                            <HeadingAnchor id={id} />
                            {children}
                        </h5>
                    );
                },
                h6({ children }) {
                    const id = generateSlug(getTextContent(children));
                    return (
                        <h6 id={id} className="blog-h6">
                            <HeadingAnchor id={id} />
                            {children}
                        </h6>
                    );
                },
                ul({ children }) {
                    return <ul className="blog-ul">{children}</ul>;
                },
                ol({ children }) {
                    return <ol className="blog-ol">{children}</ol>;
                },
                li({ children }) {
                    return <li className="blog-li">{children}</li>;
                },
                hr() {
                    return <hr className="blog-hr" />;
                },
                // Table components for GitHub-style tables
                table({ children }) {
                    return (
                        <div className="blog-table-wrapper">
                            <table className="blog-table">{children}</table>
                        </div>
                    );
                },
                thead({ children }) {
                    return <thead className="blog-thead">{children}</thead>;
                },
                tbody({ children }) {
                    return <tbody className="blog-tbody">{children}</tbody>;
                },
                tr({ children }) {
                    return <tr className="blog-tr">{children}</tr>;
                },
                th({ children }) {
                    return <th className="blog-th">{children}</th>;
                },
                td({ children }) {
                    return <td className="blog-td">{children}</td>;
                },
            }}
        >
            {markdownContent}
        </ReactMarkdown>
    );

    // Build source string for tracking
    const sourcePrefix = pageType === "page" ? "page" : "post";
    const source = slug ? `${sourcePrefix}:${slug}` : sourcePrefix;

    // Render with inline embeds if placeholders exist
    if (hasInlineEmbeds) {
        return (
            <>
                <article className="blog-post-content">
                    {renderTitleH1()}
                    {segments.map((segment, index) => {
                        if (segment.type === "newsletter") {
                            // Newsletter signup inline
                            return siteConfig.newsletter?.enabled ? (
                                <NewsletterSignup
                                    key={`newsletter-${index}`}
                                    source={pageType === "page" ? "post" : "post"}
                                    postSlug={slug}
                                />
                            ) : null;
                        }
                        if (segment.type === "contactform") {
                            // Contact form inline
                            return siteConfig.contactForm?.enabled ? (
                                <ContactForm
                                    key={`contactform-${index}`}
                                    source={source}
                                />
                            ) : null;
                        }
                        // Markdown content segment
                        return renderMarkdown(segment.value, index);
                    })}
                    {copyPageProps?.authorName && (
                        <AuthorProfile name={copyPageProps.authorName} image={copyPageProps.authorImage} />
                    )}
                </article>
                {lightboxImage && (
                    <ImageLightbox
                        src={lightboxImage.src}
                        alt={lightboxImage.alt}
                        onClose={() => setLightboxImage(null)}
                    />
                )}
            </>
        );
    }

    // No inline embeds, render content normally
    return (
        <>
            <article className="blog-post-content">
                {renderTitleH1()}
                <ReactMarkdown
                    remarkPlugins={[remarkGfm, remarkBreaks]}
                    rehypePlugins={[rehypeRaw, [rehypeSanitize, sanitizeSchema]]}
                    components={{
                        code(codeProps) {
                            const { className, children, style, ...restProps } = codeProps as {
                                className?: string;
                                children?: React.ReactNode;
                                style?: React.CSSProperties;
                                inline?: boolean;
                            };
                            const match = /language-(\w+)/.exec(className || "");

                            // Detect inline code: no language class AND content is short without newlines
                            const codeContent = String(children);
                            const hasNewlines = codeContent.includes('\n');
                            const isShort = codeContent.length < 80;
                            const hasLanguage = !!match || !!className;

                            // It's inline only if: no language, short content, no newlines
                            const isInline = !hasLanguage && isShort && !hasNewlines;

                            if (isInline) {
                                return (
                                    <code className="inline-code" style={style} {...restProps}>
                                        {children}
                                    </code>
                                );
                            }

                            const codeString = String(children).replace(/\n$/, "");
                            const language = match ? match[1] : "text";
                            const isTextBlock = language === "text";

                            return (
                                <LazyCodeBlock
                                    code={codeString}
                                    language={language}
                                    theme={getCodeTheme()}
                                    isTextBlock={isTextBlock}
                                />
                            );
                        },
                        img({ src, alt }) {
                            const handleImageClick = () => {
                                if (isLightboxEnabled && src) {
                                    setLightboxImage({ src: String(src), alt: alt || "" });
                                }
                            };
                            return (
                                <span className="blog-image-wrapper">
                                    <img
                                        src={src}
                                        alt={alt || ""}
                                        width={800}
                                        height={450}
                                        className={`blog-image ${isLightboxEnabled ? "blog-image-clickable" : ""}`}
                                        loading="lazy"
                                        onClick={isLightboxEnabled ? handleImageClick : undefined}
                                        style={{ width: '100%', height: 'auto', ...(isLightboxEnabled ? { cursor: "pointer" } : {}) }}
                                    />
                                    {alt && <span className="blog-image-caption">{alt}</span>}
                                </span>
                            );
                        },
                        a({ href, children }) {
                            const isExternal = href?.startsWith("http");
                            return (
                                <a
                                    href={href}
                                    target={isExternal ? "_blank" : undefined}
                                    rel={isExternal ? "noopener noreferrer" : undefined}
                                    className="blog-link"
                                >
                                    {children}
                                </a>
                            );
                        },
                        blockquote({ children }) {
                            return (
                                <blockquote className="blog-blockquote">{children}</blockquote>
                            );
                        },
                        h1({ children }) {
                            // If copyPageProps.title exists, skip all h1s from markdown (title is rendered separately)
                            if (copyPageProps?.title) {
                                return null;
                            }

                            // No copyPageProps.title, render h1 from markdown content normally
                            const id = generateSlug(getTextContent(children));
                            const isFirstH1 = !firstH1Rendered.current;
                            if (isFirstH1) {
                                firstH1Rendered.current = true;
                            }

                            return (
                                <div className="blog-h1-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                                    <h2 id={id} className="blog-h1" style={{ margin: 0, flex: 1, minWidth: 0 }}>
                                        <HeadingAnchor id={id} />
                                        {children}
                                    </h2>
                                    {isFirstH1 && copyPageProps && (
                                        <div style={{ flexShrink: 0 }}>
                                            <CopyPageDropdown {...copyPageProps} />
                                        </div>
                                    )}
                                </div>
                            );
                        },
                        h2({ children }) {
                            const id = generateSlug(getTextContent(children));
                            return (
                                <h2 id={id} className="blog-h2">
                                    <HeadingAnchor id={id} />
                                    {children}
                                </h2>
                            );
                        },
                        h3({ children }) {
                            const id = generateSlug(getTextContent(children));
                            return (
                                <h3 id={id} className="blog-h3">
                                    <HeadingAnchor id={id} />
                                    {children}
                                </h3>
                            );
                        },
                        h4({ children }) {
                            const id = generateSlug(getTextContent(children));
                            return (
                                <h4 id={id} className="blog-h4">
                                    <HeadingAnchor id={id} />
                                    {children}
                                </h4>
                            );
                        },
                        h5({ children }) {
                            const id = generateSlug(getTextContent(children));
                            return (
                                <h5 id={id} className="blog-h5">
                                    <HeadingAnchor id={id} />
                                    {children}
                                </h5>
                            );
                        },
                        h6({ children }) {
                            const id = generateSlug(getTextContent(children));
                            return (
                                <h6 id={id} className="blog-h6">
                                    <HeadingAnchor id={id} />
                                    {children}
                                </h6>
                            );
                        },
                        ul({ children }) {
                            return <ul className="blog-ul">{children}</ul>;
                        },
                        ol({ children }) {
                            return <ol className="blog-ol">{children}</ol>;
                        },
                        li({ children }) {
                            return <li className="blog-li">{children}</li>;
                        },
                        hr() {
                            return <hr className="blog-hr" />;
                        },
                        // Table components for GitHub-style tables
                        table({ children }) {
                            return (
                                <div className="blog-table-wrapper">
                                    <table className="blog-table">{children}</table>
                                </div>
                            );
                        },
                        thead({ children }) {
                            return <thead className="blog-thead">{children}</thead>;
                        },
                        tbody({ children }) {
                            return <tbody className="blog-tbody">{children}</tbody>;
                        },
                        tr({ children }) {
                            return <tr className="blog-tr">{children}</tr>;
                        },
                        th({ children }) {
                            return <th className="blog-th">{children}</th>;
                        },
                        td({ children }) {
                            return <td className="blog-td">{children}</td>;
                        },
                    }}
                >
                    {cleanedContent}
                </ReactMarkdown>
                {copyPageProps?.authorName && (
                    <AuthorProfile name={copyPageProps.authorName} image={copyPageProps.authorImage} />
                )}
            </article>
            {lightboxImage && (
                <ImageLightbox
                    src={lightboxImage.src}
                    alt={lightboxImage.alt}
                    onClose={() => setLightboxImage(null)}
                />
            )}
        </>
    );
}