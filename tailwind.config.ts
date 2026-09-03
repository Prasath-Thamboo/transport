import type { Config } from "tailwindcss";

/**
 * Tailwind v4 reads its design tokens from the `@theme` block in
 * `src/styles/globals.css` — that file is the single source of truth for
 * colors, radii, shadows and fonts. This config is kept only for tooling
 * that still expects a file here; content sources are auto-detected in v4.
 */
export default {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
} satisfies Config;
