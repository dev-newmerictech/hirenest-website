// WorkOS configuration utility
// Checks if WorkOS environment variables are set

const workosClientId = process.env.NEXT_PUBLIC_WORKOS_CLIENT_ID;
const workosRedirectUri = process.env.NEXT_PUBLIC_WORKOS_REDIRECT_URI;

// True if both WorkOS client ID and redirect URI are configured
export const isWorkOSConfigured = Boolean(workosClientId && workosRedirectUri);

// Export the values for use in AuthKitProvider
export const workosConfig = {
  clientId: workosClientId,
  redirectUri: workosRedirectUri,
};
