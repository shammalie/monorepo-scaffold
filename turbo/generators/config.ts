import type { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  // Package generator
  plop.setGenerator("package", {
    description: "Generate a new package for the monorepo",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the package?",
        validate: (input: string) => {
          if (input.includes(".")) {
            return "Package name cannot include an extension";
          }
          if (input.includes(" ")) {
            return "Package name cannot include spaces";
          }
          if (!input) {
            return "Package name is required";
          }
          return true;
        },
      },
      {
        type: "list",
        name: "type",
        message: "What type of package is this?",
        choices: [
          { name: "React UI Library", value: "ui" },
          { name: "Utility Library", value: "utils" },
          { name: "API Client", value: "api-client" },
          { name: "Database/Prisma", value: "database" },
          { name: "Shared Types", value: "types" },
          { name: "Configuration", value: "config" },
        ],
      },
      {
        type: "input",
        name: "description",
        message: "Package description:",
        default: "A new package for the monorepo",
      },
    ],
    actions: [
      {
        type: "add",
        path: "packages/{{ dashCase name }}/package.json",
        templateFile: "../../templates/package/package.json",
      },
      {
        type: "add",
        path: "packages/{{ dashCase name }}/tsconfig.json",
        templateFile: "../../templates/package/tsconfig.json",
      },
      {
        type: "add",
        path: "packages/{{ dashCase name }}/README.md",
        templateFile: "../../templates/package/README.md",
      },
      {
        type: "add",
        path: "packages/{{ dashCase name }}/src/index.ts",
        templateFile: "../../templates/package/src/index.ts",
      },
      {
        type: "add",
        path: "packages/{{ dashCase name }}/src/lib/index.ts",
        templateFile: "../../templates/package/src/lib/index.ts",
      },
    ],
  });

  // Tooling generator
  plop.setGenerator("tooling", {
    description: "Generate a new tooling package for the monorepo",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the tooling package?",
        validate: (input: string) => {
          if (input.includes(".")) {
            return "Tooling name cannot include an extension";
          }
          if (input.includes(" ")) {
            return "Tooling name cannot include spaces";
          }
          if (!input) {
            return "Tooling name is required";
          }
          return true;
        },
      },
      {
        type: "list",
        name: "type",
        message: "What type of tooling is this?",
        choices: [
          { name: "ESLint Configuration", value: "eslint" },
          { name: "TypeScript Configuration", value: "typescript" },
          { name: "Prettier Configuration", value: "prettier" },
          { name: "Jest/Vitest Configuration", value: "testing" },
          { name: "Rollup/Vite Configuration", value: "bundler" },
          { name: "Other Configuration", value: "config" },
        ],
      },
      {
        type: "input",
        name: "description",
        message: "Tooling description:",
        default: "A new tooling configuration for the monorepo",
      },
    ],
    actions: [
      {
        type: "add",
        path: "tooling/{{ dashCase name }}/package.json",
        templateFile: "../../templates/tooling/package.json",
      },
      {
        type: "add",
        path: "tooling/{{ dashCase name }}/index.js",
        templateFile: "../../templates/tooling/index.js",
      },
      {
        type: "add",
        path: "tooling/{{ dashCase name }}/README.md",
        templateFile: "../../templates/tooling/README.md",
      },
    ],
  });

  // App generator
  plop.setGenerator("app", {
    description: "Generate a new application for the monorepo",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the app?",
        validate: (input: string) => {
          if (input.includes(".")) {
            return "App name cannot include an extension";
          }
          if (input.includes(" ")) {
            return "App name cannot include spaces";
          }
          if (!input) {
            return "App name is required";
          }
          return true;
        },
      },
      {
        type: "list",
        name: "type",
        message: "What type of app is this?",
        choices: [
          { name: "Next.js App", value: "nextjs" },
          { name: "Hono API", value: "hono" },
          { name: "Express API", value: "express" },
          { name: "Vite React App", value: "vite-react" },
          { name: "Node.js CLI", value: "cli" },
        ],
      },
      {
        type: "input",
        name: "description",
        message: "App description:",
        default: "A new application for the monorepo",
      },
    ],
    actions: [
      {
        type: "addMany",
        destination: "apps/{{ dashCase name }}",
        templateFiles: "../../templates/app-{{ type }}/**/*",
        base: "../../templates/app-{{ type }}",
      },
    ],
  });
}
