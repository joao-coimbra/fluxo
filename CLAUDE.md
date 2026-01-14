# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Fluxo is a Bun-based monorepo with separate frontend and backend applications:
- **apps/web** - React 19 + Vite frontend
- **apps/api** - Elysia backend (see apps/api/CLAUDE.md for Bun-specific patterns)

## Commands

All commands use Bun. Never use npm, yarn, or pnpm.

```bash
# Install dependencies
bun install

# Development
bun run dev:web    # Start frontend (Vite dev server)
bun run dev:api    # Start backend

# Frontend-specific (from root)
bun --cwd apps/web build   # Build frontend
bun --cwd apps/web lint    # Lint frontend

# Backend (from root)
bun --cwd apps/api run index.ts

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
- Shared devDependencies at root (commitlint, husky, TypeScript)

**Frontend (apps/web):**
- React 19 with Vite 7
- Strict TypeScript with separate configs for app vs node
- ESLint flat config with react-hooks and react-refresh plugins

**Backend (apps/api):**
- Elysia framework on Bun runtime
- Very strict TypeScript (bundler mode, ESNext target)
- Prefer Bun native APIs (see apps/api/CLAUDE.md)

## Commit Convention

Commits use conventional commits with emoji prefixes. The commitlint config parses emoji-prefixed messages:

| Type     | Emoji | Description |
|----------|-------|-------------|
| feat     | ✨    | New feature |
| fix      | 🐛    | Bug fix |
| docs     | 📝    | Documentation |
| style    | 💄    | Formatting |
| refactor | ♻️    | Code refactoring |
| perf     | ⚡    | Performance |
| test     | ✅    | Tests |
| build    | 📦    | Build system |
| ci       | 👷    | CI/CD |
| chore    | 🔧    | Other changes |
| revert   | ⏪    | Revert |

Format: `emoji type(scope): description`
Example: `✨ feat(auth): add login endpoint`

Use `bun run commit` for interactive commit creation.
