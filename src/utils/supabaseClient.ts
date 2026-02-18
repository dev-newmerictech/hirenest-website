/**
 * Supabase Client Configuration
 * Uses createBrowserClient from @supabase/ssr to store auth tokens
 * in cookies (not localStorage), so the middleware can read them.
 */

import { createBrowserClient } from "@supabase/ssr";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// True if both Supabase environment variables are set
export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

// Create browser client that stores session in cookies (syncs with middleware)
export const supabase = isSupabaseConfigured
  ? createBrowserClient(supabaseUrl!, supabaseAnonKey!)
  : null;

// Export the config for use in providers
export const supabaseConfig = {
  url: supabaseUrl,
  anonKey: supabaseAnonKey,
};
