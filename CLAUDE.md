# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Fluxo is a Bun-based monorepo with separate frontend and backend applications:
- **apps/web** - React 19 + Vite frontend
- **apps/api** - Elysia backend on Bun runtime

## Commands

All commands use Bun. Never use npm, yarn, or pnpm.

```bash
# Install dependencies
bun install

# Development
bun run dev:web    # Start frontend (Vite on port 5173)
bun run dev:api    # Start backend (Elysia on port 3333)

# Build
bun --cwd apps/web build    # Runs tsc -b && vite build

# Linting & Formatting (Ultracite/Biome)
bun run fix             # Auto-fix issues (shortcut)
bun x ultracite check   # Check for issues

# Tests
bun test                   # Run all tests
bun test path/to/file      # Run specific test file

# Commits (interactive conventional commit with emoji)
bun run commit
```

## Architecture

**Monorepo Structure:**
- Root package.json defines workspaces: `["apps/*"]`
- Each app has its own package.json and TypeScript config
- Shared devDependencies at root (commitlint, husky, Biome/Ultracite)

**Frontend (apps/web):**
- React 19 with Vite
- Strict TypeScript with separate configs for app vs node (uses project references)

**Backend (apps/api):**
- Elysia framework on Bun runtime
- Entry point: `src/server.ts`
- Prefer Bun native APIs over Node equivalents

## Code Standards

This project uses Ultracite (Biome-based) for linting and formatting. See `.claude/ultracite.md` for detailed code standards including:
- Type safety and explicitness guidelines
- Modern JS/TS patterns (arrow functions, optional chaining, destructuring)
- React/JSX best practices
- Async/await patterns

Run `bun run fix` before committing. The project uses semicolons sparingly (`asNeeded` in biome.jsonc).

## Commit Convention

Commits use conventional commits with emoji prefixes:

| Type     | Emoji | Description |
|----------|-------|-------------|
| feat     | ✨    | New feature |
| fix      | 🐛    | Bug fix |
| docs     | 📝    | Documentation |
| style    | 💄    | Formatting |
| refactor | ♻️    | Code refactoring |
| perf     | 🚀    | Performance |
| test     | ✅    | Tests |
| build    | 📦    | Build system |
| ci       | 👷    | CI/CD |
| chore    | 🔧    | Other changes |
| revert   | ⏪    | Revert |

Format: `emoji type(scope): description`
Example: `✨ feat(auth): add login endpoint`

Use `bun run commit` for interactive commit creation.
