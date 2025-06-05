# My TypeScript Monorepo

A modern, full-stack TypeScript monorepo built with Turborepo, featuring Next.js, Hono, Prisma, tRPC, and shadcn/ui.

## 🏗️ Monorepo Architecture

This monorepo uses [Turborepo](https://turbo.build/) to manage multiple packages and applications in a single repository. The architecture is designed for scalability, maintainability, and developer experience.

### Directory Structure

```
my-monorepo/
├── apps/                   # Deliverable applications
│   ├── core/              # Next.js frontend application
│   └── api/               # Hono backend API server
├── packages/              # Shared packages and utilities
│   ├── prisma/            # Database schema and ORM
│   ├── trpc/              # tRPC setup and configurations
│   └── ui/                # shadcn/ui components library
├── tooling/               # Development tooling configurations
│   ├── eslint/            # ESLint configurations
│   ├── prettier/          # Prettier configurations
│   └── vitest/            # Testing configurations
├── package.json           # Root package configuration
├── pnpm-workspace.yaml    # PNPM workspace configuration
├── turbo.json             # Turborepo pipeline configuration
└── tsconfig.json          # Root TypeScript configuration
```

## 🛠️ Technology Stack

### Core Technologies

- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Turborepo](https://turbo.build/)** - High-performance build system
- **[pnpm](https://pnpm.io/)** - Fast, disk space efficient package manager

### Frontend (apps/core)

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautiful, reusable components

### Backend (apps/api)

- **[Hono](https://hono.dev/)** - Fast, lightweight web framework
- **[Node.js](https://nodejs.org/)** - JavaScript runtime

### Database & API

- **[Prisma](https://www.prisma.io/)** - Type-safe database ORM
- **[tRPC](https://trpc.io/)** - End-to-end typesafe APIs
- **[PostgreSQL](https://www.postgresql.org/)** - Primary database (configurable)

### Development Tools

- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting
- **[Vitest](https://vitest.dev/)** - Testing framework

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm 8+
- PostgreSQL (for database)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd my-monorepo
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   # Edit .env with your database URL and other configurations
   ```

4. **Generate Prisma client**

   ```bash
   pnpm --filter @repo/prisma db:generate
   ```

5. **Run database migrations** (optional, for development)
   ```bash
   pnpm --filter @repo/prisma db:push
   ```

## 📦 Package Details

### Apps

#### `apps/core` - Next.js Frontend

The main frontend application built with Next.js 15 and the App Router.

**Key Features:**

- Server-side rendering
- Modern React 19 features
- Tailwind CSS for styling
- shadcn/ui component library
- tRPC integration for type-safe API calls

**Commands:**

```bash
pnpm --filter @repo/core dev     # Start development server
pnpm --filter @repo/core build   # Build for production
pnpm --filter @repo/core start   # Start production server
```

#### `apps/api` - Hono Backend

A fast, lightweight API server built with Hono.

**Key Features:**

- High-performance HTTP server
- CORS and logging middleware
- Prisma database integration
- Type-safe with TypeScript

**Commands:**

```bash
pnpm --filter @repo/api dev       # Start development server
pnpm --filter @repo/api build     # Build for production
pnpm --filter @repo/api start     # Start production server
```

### Packages

#### `packages/prisma` - Database Layer

Contains the database schema, migrations, and Prisma client configuration.

**Key Features:**

- PostgreSQL schema definition
- Database migrations
- Type-safe database client
- Seed scripts

**Commands:**

```bash
pnpm --filter @repo/prisma db:generate  # Generate Prisma client
pnpm --filter @repo/prisma db:push      # Push schema to database
pnpm --filter @repo/prisma db:migrate   # Run migrations
pnpm --filter @repo/prisma db:studio    # Open Prisma Studio
pnpm --filter @repo/prisma db:seed      # Seed database
```

#### `packages/trpc` - API Layer

Provides type-safe API definitions and client/server setup.

**Key Features:**

- End-to-end type safety
- Automatic TypeScript inference
- React Query integration
- Shared router definitions

#### `packages/ui` - Component Library

A collection of reusable UI components based on shadcn/ui.

**Key Features:**

- Radix UI primitives
- Tailwind CSS styling
- Customizable design system
- TypeScript support

### Tooling

#### `tooling/eslint` - Linting Configuration

Shared ESLint configurations for different package types.

**Configurations:**

- `index.js` - Base TypeScript configuration
- `next.js` - Next.js specific rules
- `hono.js` - Node.js/Hono specific rules
- `package.js` - Package/library specific rules

#### `tooling/prettier` - Code Formatting

Shared Prettier configuration for consistent code formatting.

#### `tooling/vitest` - Testing Setup

Shared Vitest configurations for unit and integration testing.

**Configurations:**

- `index.js` - Base testing configuration
- `unit.js` - Unit test specific setup
- `integration.js` - Integration test specific setup

## 🏃‍♂️ Development Commands

### Global Commands (from root)

```bash
# Development - start all apps
pnpm dev

# Build - build all packages and apps
pnpm build

# Lint - lint all packages
pnpm lint

# Test - run all tests
pnpm test

# Type check - check TypeScript across all packages
pnpm type-check

# Format - format code with Prettier
pnpm format

# Clean - clean all build outputs
pnpm clean
```

### Filtered Commands

Run commands for specific packages using the `--filter` flag:

```bash
# Start only the frontend
pnpm --filter @repo/core dev

# Build only the API
pnpm --filter @repo/api build

# Lint only the UI package
pnpm --filter @repo/ui lint
```

## 🧪 Testing

The monorepo includes comprehensive testing setup with Vitest:

```bash
# Run all tests
pnpm test

# Run unit tests only
pnpm test:unit

# Run integration tests only
pnpm test:integration

# Run tests with UI
pnpm --filter @repo/ui test --ui
```

## 🔧 Turborepo Configuration

The `turbo.json` file defines the build pipeline and task dependencies:

- **Build tasks** have dependencies on their internal packages
- **Development tasks** run with caching disabled
- **Database tasks** bypass caching for consistency
- **Lint/test tasks** are optimized with input-based caching

### Pipeline Tasks

- `build` - Build packages and applications
- `dev` - Start development servers
- `lint` - Run ESLint
- `test` - Run test suites
- `type-check` - TypeScript type checking
- `db:*` - Database operations

## 📁 Adding New Packages

To add a new package to the monorepo:

1. Create a new directory under `packages/` or `apps/`
2. Add a `package.json` with the `@repo/` namespace
3. Add the package to the workspace in `pnpm-workspace.yaml`
4. Update `tsconfig.json` paths if needed
5. Add appropriate linting and testing configuration

Example package.json:

```json
{
  "name": "@repo/new-package",
  "version": "0.1.0",
  "private": true,
  "main": "./src/index.ts",
  "types": "./src/index.ts"
}
```

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Run `pnpm lint` and `pnpm test`
4. Ensure `pnpm build` passes
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details.

---

**Built with ❤️ using modern TypeScript tooling**
