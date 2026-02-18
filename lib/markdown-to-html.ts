/**
 * Server-side Markdown to HTML converter for SSR article content.
 * Uses the same remark/rehype pipeline as the client-side BlogPost component
 * but outputs an HTML string for dangerouslySetInnerHTML in Server Components.
 */
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import rehypeSlug from "rehype-slug";
import { visit } from "unist-util-visit";

/** Downshift h1 → h2 in body content so only the page title remains h1 (SEO best practice) */
function rehypeDownshiftH1() {
  return (tree: Parameters<typeof visit>[0]) => {
    visit(tree, "element", (node: { tagName: string }) => {
      if (node.tagName === "h1") node.tagName = "h2";
    });
  };
}

/** Permissive sanitize schema aligned with client-side BlogPost.tsx so crawlers see same content */
const sanitizeSchema = {
  ...defaultSchema,
  tagNames: [...(defaultSchema.tagNames || []), "details", "summary", "iframe"],
  attributes: {
    ...defaultSchema.attributes,
    "*": [...(defaultSchema.attributes?.["*"] || []), "id", "className"],
    details: ["open"],
    ul: ["style"],
    ol: ["style"],
    li: ["style"],
    div: ["style"],
    p: ["style"],
    a: ["style", "href", "target", "rel"],
    img: [...(defaultSchema.attributes?.img || []), "style"],
    span: ["className", "class", "style"],
    iframe: ["src", "width", "height", "allow", "allowfullscreen", "frameborder", "title", "style"],
  },
};

/** Convert Markdown string to sanitized HTML string */
export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeDownshiftH1)
    .use(rehypeSlug)
    .use(rehypeSanitize, sanitizeSchema)
    .use(rehypeStringify)
    .process(markdown);

  return String(result);
}
