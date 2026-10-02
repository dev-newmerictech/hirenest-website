/**
 * Authentication validation utilities
 * Handles email domain validation for restricted access
 */

import siteConfig from "../config/siteConfig";

/**
 * Check if an email address is authorized to access protected routes
 * @param email - The email address to validate
 * @returns true if the email is from an authorized domain, false otherwise
 */
export function isAuthorizedEmail(email: string | null | undefined): boolean {
  if (!email) return false;

  const allowedDomains = siteConfig.allowedEmailDomains || [];
  if (allowedDomains.length === 0) return true; // No restriction if empty

  // Extract domain from email
  const emailDomain = email.split("@")[1]?.toLowerCase();
  if (!emailDomain) return false;

  // Check if email domain matches any allowed domain
  return allowedDomains.some(
    (domain) => emailDomain === domain.toLowerCase() || email.endsWith(`@${domain.toLowerCase()}`)
  );
}

/**
 * Get the unauthorized error message based on email
 * @param email - The email that was rejected
 * @returns User-friendly error message
 */
export function getUnauthorizedMessage(email: string | null | undefined): string {
  const allowedDomains = siteConfig.allowedEmailDomains || ["tinycheque.com"];
  const domainsList = allowedDomains.join(", ");

  return email
    ? `Access restricted. Only users with @${domainsList} email addresses can access this page.`
    : "Please sign in to access this page.";
}

/**
 * Validate email format
 * @param email - The email to validate
 * @returns true if valid email format, false otherwise
 */
export function isValidEmailFormat(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
