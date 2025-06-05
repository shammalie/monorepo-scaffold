// Export the main configuration
export * from "./config";

// Export framework-specific utilities
export * as nextjs from "./nextjs";
export * as hono from "./hono";

// Re-export commonly used functions
export { auth } from "./config";
