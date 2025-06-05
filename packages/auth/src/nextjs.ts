import { auth } from "./config";
import { toNextJsHandler } from "better-auth/next-js";

// Next.js specific utilities and handlers
export { auth };

// API route handlers for Next.js
export const authHandlers = toNextJsHandler(auth.handler);

// Server-side session utilities for Next.js
export const getSession = (headers: Headers) =>
  auth.api.getSession({ headers });

// Helper function to create auth client (to be used on client-side)
export function createAuthClient() {
  // This should be imported from better-auth/react in the actual client component
  // We're just providing the configuration here
  return {
    baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
  };
}

// Re-export types
export type { Session, User } from "./config";
