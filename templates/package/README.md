# @repo/{{ dashCase name }}

{{ description }}

## Installation

This package is part of the monorepo and should be installed as a workspace dependency:

```json
{
  "dependencies": {
    "@repo/{{ dashCase name }}": "workspace:*"
  }
}
```

## Usage

```typescript
import { exampleFunction } from "@repo/{{ dashCase name }}";

const result = exampleFunction("hello");
console.log(result); // "HELLO"
```

## Development

- `pnpm dev` - Start development mode
- `pnpm build` - Build the package
- `pnpm lint` - Lint the code
- `pnpm test` - Run tests
- `pnpm type-check` - Check TypeScript types
