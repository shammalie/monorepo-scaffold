# @repo/auth

Better-auth configuration package for Next.js and Hono applications in the monorepo.

## Installation

This package is part of the monorepo and should be installed as a workspace dependency:

```json
{
  "dependencies": {
    "@repo/auth": "workspace:*"
  }
}
```

## Environment Variables

Make sure to set these environment variables:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/database"
GITHUB_CLIENT_ID="your_github_client_id"
GITHUB_CLIENT_SECRET="your_github_client_secret"
GOOGLE_CLIENT_ID="your_google_client_id"
GOOGLE_CLIENT_SECRET="your_google_client_secret"
```

## Usage

### Next.js (apps/core)

```typescript
// app/api/auth/[...all]/route.ts
import { authHandlers } from "@repo/auth/nextjs";

export const { GET, POST } = authHandlers;
```

```typescript
// app/layout.tsx or any component
import { useSession, signIn, signOut } from "@repo/auth/nextjs";

export function AuthButton() {
  const session = useSession();

  if (session.data) {
    return (
      <button onClick={() => signOut()}>
        Sign out {session.data.user.email}
      </button>
    );
  }

  return <button onClick={() => signIn()}>Sign in</button>;
}
```

### Hono (apps/api)

```typescript
// src/index.ts
import { Hono } from "hono";
import { createAuthMiddleware, createAuthRoutes } from "@repo/auth/hono";

const app = new Hono();

// Add auth middleware
app.use("*", createAuthMiddleware());

// Add auth routes
const authRoutes = createAuthRoutes();
Object.entries(authRoutes).forEach(([path, handler]) => {
  app.all(path, handler);
});
```

```typescript
// src/protected-route.ts
import { requireAuth } from "@repo/auth/hono";

app.get("/protected", async (c) => {
  const session = await requireAuth(c);
  if (!session) return; // Already handled by requireAuth

  return c.json({ message: "Protected data", user: session.user });
});
```

## Configuration

The package provides a shared configuration that works with both frameworks. You can extend the configuration by
modifying `src/config.ts`.

## Development

- `pnpm dev` - Start development mode
- `pnpm build` - Build the package
- `pnpm lint` - Lint the code
- `pnpm test` - Run tests
- `pnpm type-check` - Check TypeScript types
