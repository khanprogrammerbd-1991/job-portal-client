import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  // Optional: only needed if your backend is on a separate URL.
  // In Next.js browser code, env variables must start with NEXT_PUBLIC_
  baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL,
});

// Export the helper methods from the SAME authClient instance
export const { signIn, signUp, useSession, signOut } = authClient;