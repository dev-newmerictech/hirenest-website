/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type * as aiChatActions from "../aiChatActions.js";
import type * as aiChats from "../aiChats.js";
import type * as aiImageGeneration from "../aiImageGeneration.js";
import type * as askAI from "../askAI.js";
import type * as authHelpers from "../authHelpers.js";
import type * as contact from "../contact.js";
import type * as contactActions from "../contactActions.js";
import type * as crons from "../crons.js";
import type * as embeddings from "../embeddings.js";
import type * as embeddingsQueries from "../embeddingsQueries.js";
import type * as files from "../files.js";
import type * as fs from "../fs.js";
import type * as http from "../http.js";
import type * as llmsTxt from "../llmsTxt.js";
import type * as newsletter from "../newsletter.js";
import type * as newsletterActions from "../newsletterActions.js";
import type * as pages from "../pages.js";
import type * as posts from "../posts.js";
import type * as rss from "../rss.js";
import type * as search from "../search.js";
import type * as semanticSearch from "../semanticSearch.js";
import type * as semanticSearchQueries from "../semanticSearchQueries.js";
import type * as sitemaps from "../sitemaps.js";
import type * as stats from "../stats.js";
import type * as versions from "../versions.js";

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";

declare const fullApi: ApiFromModules<{
  aiChatActions: typeof aiChatActions;
  aiChats: typeof aiChats;
  aiImageGeneration: typeof aiImageGeneration;
  askAI: typeof askAI;
  authHelpers: typeof authHelpers;
  contact: typeof contact;
  contactActions: typeof contactActions;
  crons: typeof crons;
  embeddings: typeof embeddings;
  embeddingsQueries: typeof embeddingsQueries;
  files: typeof files;
  fs: typeof fs;
  http: typeof http;
  llmsTxt: typeof llmsTxt;
  newsletter: typeof newsletter;
  newsletterActions: typeof newsletterActions;
  pages: typeof pages;
  posts: typeof posts;
  rss: typeof rss;
  search: typeof search;
  semanticSearch: typeof semanticSearch;
  semanticSearchQueries: typeof semanticSearchQueries;
  sitemaps: typeof sitemaps;
  stats: typeof stats;
  versions: typeof versions;
}>;

/**
 * A utility for referencing Convex functions in your app's public API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;

/**
 * A utility for referencing Convex functions in your app's internal API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = internal.myModule.myFunction;
 * ```
 */
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;

export declare const components: {};
