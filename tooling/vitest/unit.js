import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    include: ["src/**/*.{test,spec}.{js,ts,tsx}"],
    exclude: [
      "node_modules",
      "dist",
      ".next",
      "tests/**/*",
      "src/**/*.integration.{test,spec}.{js,ts,tsx}",
    ],
    typecheck: {
      tsconfig: "./tsconfig.json",
    },
    coverage: {
      reporter: ["text", "html"],
      exclude: [
        "node_modules/",
        "src/**/*.d.ts",
        "src/**/*.config.{js,ts}",
        "src/**/*.test.{js,ts,tsx}",
        "src/**/*.spec.{js,ts,tsx}",
      ],
    },
  },
}); 