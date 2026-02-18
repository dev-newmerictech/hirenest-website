import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  /* ===============================
     BLOG POSTS
  =============================== */

  posts: defineTable({
    slug: v.string(),
    title: v.string(),
    description: v.string(),
    content: v.string(),
    date: v.string(),
    published: v.boolean(),
    tags: v.array(v.string()),
    readTime: v.optional(v.string()),
    image: v.optional(v.string()),
    showImageAtTop: v.optional(v.boolean()),
    excerpt: v.optional(v.string()),
    featured: v.optional(v.boolean()),
    featuredOrder: v.optional(v.number()),
    authorName: v.optional(v.string()),
    authorImage: v.optional(v.string()),
    layout: v.optional(v.string()),
    rightSidebar: v.optional(v.boolean()),
    showFooter: v.optional(v.boolean()),
    footer: v.optional(v.string()),
    showSocialFooter: v.optional(v.boolean()),
    aiChat: v.optional(v.boolean()),
    blogFeatured: v.optional(v.boolean()),
    newsletter: v.optional(v.boolean()),
    contactForm: v.optional(v.boolean()),
    unlisted: v.optional(v.boolean()),

    // 🔥 Sync metadata (CRITICAL FOR 10K+ POSTS)
    lastSyncedAt: v.number(),
    lastSyncRunId: v.optional(v.string()),

    // Vector embedding for semantic search
    embedding: v.optional(v.array(v.float64())),
  })
    .index("by_slug", ["slug"])
    .index("by_date", ["date"])
    .index("by_published", ["published"])
    .index("by_published_date", ["published", "date"]) // ✅ REQUIRED
    .index("by_featured", ["featured"])
    .index("by_blogFeatured", ["blogFeatured"])
    .index("by_authorName", ["authorName"])
    .index("by_lastSyncRunId", ["lastSyncRunId"]) // ✅ REQUIRED
    .searchIndex("search_content", {
      searchField: "content",
      filterFields: ["published"],
    })
    .searchIndex("search_title", {
      searchField: "title",
      filterFields: ["published"],
    })
    .vectorIndex("by_embedding", {
      vectorField: "embedding",
      dimensions: 1536,
      filterFields: ["published"],
    }),

  /* ===============================
     POST SUMMARIES (Lightweight for pagination)
     NO content, NO embedding - just metadata for listing
  =============================== */

  postSummaries: defineTable({
    postId: v.id("posts"),
    slug: v.string(),
    title: v.string(),
    description: v.string(),
    date: v.string(),
    published: v.boolean(),
    tags: v.array(v.string()),
    readTime: v.optional(v.string()),
    image: v.optional(v.string()),
    excerpt: v.optional(v.string()),
    featured: v.optional(v.boolean()),
    featuredOrder: v.optional(v.number()),
    authorName: v.optional(v.string()),
    authorImage: v.optional(v.string()),
    blogFeatured: v.optional(v.boolean()),
    unlisted: v.optional(v.boolean()),
  })
    .index("by_postId", ["postId"])
    .index("by_slug", ["slug"])
    .index("by_published_date", ["published", "date"])
    .index("by_published", ["published"]),

  /* ===============================
     STATIC PAGES
  =============================== */

  pages: defineTable({
    slug: v.string(),
    title: v.string(),
    content: v.string(),
    published: v.boolean(),
    order: v.optional(v.number()),
    showInNav: v.optional(v.boolean()),
    excerpt: v.optional(v.string()),
    image: v.optional(v.string()),
    showImageAtTop: v.optional(v.boolean()),
    featured: v.optional(v.boolean()),
    featuredOrder: v.optional(v.number()),
    authorName: v.optional(v.string()),
    authorImage: v.optional(v.string()),
    layout: v.optional(v.string()),
    rightSidebar: v.optional(v.boolean()),
    showFooter: v.optional(v.boolean()),
    footer: v.optional(v.string()),
    showSocialFooter: v.optional(v.boolean()),
    aiChat: v.optional(v.boolean()),
    contactForm: v.optional(v.boolean()),
    newsletter: v.optional(v.boolean()),
    textAlign: v.optional(v.string()),
    lastSyncedAt: v.number(),

    // Vector embedding for semantic search
    embedding: v.optional(v.array(v.float64())),
  })
    .index("by_slug", ["slug"])
    .index("by_published", ["published"])
    .index("by_featured", ["featured"])
    .searchIndex("search_content", {
      searchField: "content",
      filterFields: ["published"],
    })
    .searchIndex("search_title", {
      searchField: "title",
      filterFields: ["published"],
    })
    .vectorIndex("by_embedding", {
      vectorField: "embedding",
      dimensions: 1536,
      filterFields: ["published"],
    }),

  /* ===============================
     VIEW COUNTS
  =============================== */

  viewCounts: defineTable({
    slug: v.string(),
    count: v.number(),
  }).index("by_slug", ["slug"]),

  /* ===============================
     SITE CONFIG
  =============================== */

  siteConfig: defineTable({
    key: v.string(),
    value: v.any(),
  }).index("by_key", ["key"]),

  /* ===============================
     PAGE ANALYTICS
  =============================== */

  pageViews: defineTable({
    path: v.string(),
    pageType: v.string(),
    sessionId: v.string(),
    timestamp: v.number(),
  })
    .index("by_path", ["path"])
    .index("by_timestamp", ["timestamp"])
    .index("by_session_path", ["sessionId", "path"]),

  /* ===============================
     ACTIVE SESSIONS
  =============================== */

  activeSessions: defineTable({
    sessionId: v.string(),
    currentPath: v.string(),
    lastSeen: v.number(),
    city: v.optional(v.string()),
    country: v.optional(v.string()),
    latitude: v.optional(v.number()),
    longitude: v.optional(v.number()),
  })
    .index("by_sessionId", ["sessionId"])
    .index("by_lastSeen", ["lastSeen"]),

  /* ===============================
     AI CHAT
  =============================== */

  aiChats: defineTable({
    sessionId: v.string(),
    contextId: v.string(),
    messages: v.array(
      v.object({
        role: v.union(v.literal("user"), v.literal("assistant")),
        content: v.string(),
        timestamp: v.number(),
        attachments: v.optional(
          v.array(
            v.object({
              type: v.union(v.literal("image"), v.literal("link")),
              storageId: v.optional(v.id("_storage")),
              url: v.optional(v.string()),
              scrapedContent: v.optional(v.string()),
              title: v.optional(v.string()),
            }),
          ),
        ),
      }),
    ),
    pageContext: v.optional(v.string()),
    lastMessageAt: v.optional(v.number()),
  })
    .index("by_session_and_context", ["sessionId", "contextId"])
    .index("by_session", ["sessionId"]),



  /* ===============================
     AI GENERATED IMAGES
  =============================== */

  aiGeneratedImages: defineTable({
    sessionId: v.string(),
    prompt: v.string(),
    model: v.string(),
    storageId: v.id("_storage"),
    mimeType: v.string(),
    createdAt: v.number(),
  })
    .index("by_sessionId", ["sessionId"])
    .index("by_createdAt", ["createdAt"])
    .index("by_storageId", ["storageId"]),

  /* ===============================
     NEWSLETTER
  =============================== */

  newsletterSubscribers: defineTable({
    email: v.string(),
    subscribed: v.boolean(),
    subscribedAt: v.number(),
    unsubscribedAt: v.optional(v.number()),
    source: v.string(),
    unsubscribeToken: v.string(),
  })
    .index("by_email", ["email"])
    .index("by_subscribed", ["subscribed"]),

  newsletterSentPosts: defineTable({
    postSlug: v.string(),
    sentAt: v.number(),
    sentCount: v.number(),
    type: v.optional(v.string()),
    subject: v.optional(v.string()),
  })
    .index("by_postSlug", ["postSlug"])
    .index("by_sentAt", ["sentAt"]),

  /* ===============================
     CONTACT FORM
  =============================== */

  contactMessages: defineTable({
    name: v.string(),
    email: v.string(),
    message: v.string(),
    source: v.string(),
    createdAt: v.number(),
    emailSentAt: v.optional(v.number()),
  }).index("by_createdAt", ["createdAt"]),
  // Ask AI sessions for header AI chat feature
  // Stores questions and stream IDs for RAG-based Q&A
  askAISessions: defineTable({
    question: v.string(), // User's question
    streamId: v.string(), // Persistent text streaming ID
    model: v.optional(v.string()), // Selected AI model
    createdAt: v.number(), // Timestamp when session was created
    responseText: v.optional(v.string()), // Stored response text
    sources: v.optional(
      v.array(
        v.object({
          title: v.string(),
          slug: v.string(),
          type: v.string(),
        })
      )
    ), // Optional sources cited in the response
  }).index("by_stream", ["streamId"]),

  // Content version history for posts and pages
  // Stores snapshots before each update for 3-day retention
  contentVersions: defineTable({
    contentType: v.union(v.literal("post"), v.literal("page")), // Type of content
    contentId: v.string(), // ID of the post or page (stored as string for flexibility)
    slug: v.string(), // Slug for display and querying
    title: v.string(), // Title at time of snapshot
    content: v.string(), // Full markdown content at time of snapshot
    description: v.optional(v.string()), // Description (posts only)
    createdAt: v.number(), // Timestamp when version was created
    source: v.union(
      v.literal("sync"),
      v.literal("dashboard"),
      v.literal("restore")
    ), // What triggered the version capture
  })
    .index("by_content", ["contentType", "contentId"])
    .index("by_slug", ["contentType", "slug"])
    .index("by_createdAt", ["createdAt"])
    .index("by_content_createdAt", ["contentType", "contentId", "createdAt"]),

  // Version control settings
  // Stores toggle state for version control feature
  versionControlSettings: defineTable({
    key: v.string(), // Setting key: "enabled"
    value: v.boolean(), // Setting value
  }).index("by_key", ["key"]),
});
