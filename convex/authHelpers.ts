import { MutationCtx } from "./_generated/server";

// Allowed email domains for admin access
const ALLOWED_EMAIL_DOMAINS = ["tinycheque.com"];

// Temporary bypass for development/unauthenticated dashboard
// Set to false to enforce authentication in production
const BYPASS_AUTH = true;

/**
 * Verify that the current user is authenticated and authorized.
 * Throws an error if not authenticated or unauthorized.
 * Use in all admin-only Convex mutations.
 */
export async function requireAuth(ctx: MutationCtx): Promise<{ email: string }> {
  const identity = await ctx.auth.getUserIdentity();
  if (!identity) {
    if (BYPASS_AUTH) {
      // Return a mock identity for development/unauthenticated access
      return { email: "anonymous@admin.com" };
    }
    throw new Error("Not authenticated");
  }

  const email = identity.email?.toLowerCase();
  if (!email || !email.includes("@")) {
    throw new Error("No valid email in identity");
  }

  const domain = email.split("@")[1];
  if (!ALLOWED_EMAIL_DOMAINS.includes(domain)) {
    throw new Error("Unauthorized: email domain not allowed");
  }

  return { email };
}
