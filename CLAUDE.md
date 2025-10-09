# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an EMS (Emergency Management System) frontend built with Next.js 15.5.4, React 19, and Tailwind CSS v4. The project uses TypeScript and is managed with pnpm.

## Development Commands

```bash
# Development server with Turbopack
pnpm dev

# Production build with Turbopack
pnpm build

# Start production server
pnpm start

# Run linter
pnpm lint
```

The development server runs on http://localhost:3000.

## Architecture

### Tech Stack
- **Next.js 15.5.4** with App Router
- **React 19.1.0** with React Server Components enabled
- **Tailwind CSS v4** (latest version with new inline theme syntax)
- **TypeScript 5** with strict mode enabled
- **Turbopack** for faster development builds

### Styling System

This project uses a **modern Tailwind CSS v4 setup** that works differently from v3:

1. **globals.css structure**:
   - `@import "tailwindcss"` loads Tailwind (no separate config file needed)
   - `@theme inline` block defines Tailwind theme tokens that reference CSS variables
   - CSS variables in `:root` and `.dark` contain actual color values using OKLCH color space
   - Custom dark mode variant: `@custom-variant dark (&:is(.dark *))`

2. **Theme system**:
   - Uses `next-themes` for theme management
   - Theme provider wraps the app in `app/layout.tsx`
   - Dark mode uses class-based strategy (`.dark` class on HTML element)
   - Supports system preference detection
   - All color tokens automatically switch based on theme

3. **Writing styles**:
   - Use Tailwind utility classes in components (e.g., `bg-background`, `text-foreground`)
   - All semantic color tokens are available: `primary`, `secondary`, `muted`, `accent`, `destructive`, `card`, `popover`, `sidebar`
   - Use `dark:` prefix for dark mode variants
   - The `cn()` utility in `lib/utils.ts` combines class names with proper Tailwind merging

### Component Structure

- **shadcn/ui ready**: `components.json` is configured for New York style components
- Path aliases configured in `tsconfig.json`:
  - `@/*` maps to project root
  - Standard aliases: `@/components`, `@/lib`, `@/hooks`, `@/components/ui`
- Icon library: Lucide React
- Utility functions: `lib/utils.ts` exports `cn()` for className merging

### Theme Provider

The `ThemeProvider` component (`components/theme-provider.tsx`) wraps the app with:
- `attribute="class"` - Uses class-based dark mode
- `defaultTheme="system"` - Respects OS preference
- `enableSystem` - Enables system theme detection
- `disableTransitionOnChange` - Prevents flash during theme switch

To use themes in components:
```tsx
import { useTheme } from "next-themes"

const { theme, setTheme } = useTheme()
```

### File Organization

- `app/` - Next.js App Router pages and layouts
- `components/` - React components (UI components go in `components/ui/`)
- `lib/` - Utility functions and shared logic
- `public/` - Static assets

## Key Considerations

1. **Turbopack**: All commands use `--turbopack` flag for faster builds
2. **No traditional tailwind.config.js**: Tailwind v4 uses inline configuration in `globals.css`
3. **CSS Variables**: Colors are defined as CSS variables that automatically switch with theme
4. **OKLCH Colors**: Modern color space used for better perceptual uniformity
5. **React Server Components**: Default for components in `app/` directory (use `"use client"` when needed)
6. **suppressHydrationWarning**: Applied to `<html>` tag in layout to prevent theme hydration warnings
