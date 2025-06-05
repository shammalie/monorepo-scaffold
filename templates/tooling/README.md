# @repo/{{ dashCase name }}-config

{{ description }}

## Installation

This package is part of the monorepo tooling and should be installed as a workspace dependency:

```json
{
  "devDependencies": {
    "@repo/{{ dashCase name }}-config": "workspace:*"
  }
}
```

## Usage

Import and use the configuration:

```typescript
import config from "@repo/{{ dashCase name }}-config";
```

## Configuration

This package provides shared configuration for all packages in the monorepo.
