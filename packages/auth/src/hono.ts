import { auth } from "./config";

// Hono specific utilities and handlers
export { auth };

// Hono middleware for authentication
export function createAuthMiddleware() {
  return async (c: any, next: () => Promise<void>) => {
    // Add session to context
    const session = await auth.api.getSession({ headers: c.req.raw.headers });
    c.set("session", session);
    c.set("user", session?.user);
    await next();
  };
}

// Auth route handlers for Hono
export function createAuthRoutes() {
  return {
    "/api/auth/*": auth.handler,
  };
}

// Session utilities for Hono
export async function getSession(c: any) {
  return await auth.api.getSession({ headers: c.req.raw.headers });
}

export async function requireAuth(c: any) {
  const session = await getSession(c);
  if (!session) {
    return c.json({ error: "Unauthorized" }, 401);
  }
  return session;
}

// Re-export types
export type { Session, User } from "./config";
