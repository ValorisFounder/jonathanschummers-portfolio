# Design System Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement the design system tokens, layout blueprint, and base components defined in `docs/superpowers/specs/2026-03-20-design-system-design.md` — producing a working foundation for the portfolio homepage (étape 3).

**Architecture:** CSS variables for all tokens in `globals.css` via Tailwind v4 `@theme inline`. Fonts loaded via `next/font/google` in root layout. Base components as React Server Components by default, `'use client'` only for dark mode toggle. Layout blueprint (vertical borders, max-width, horizontal separators) as a reusable `BlueprintShell` wrapper.

**Tech Stack:** Next.js 16, Tailwind CSS v4, CSS custom properties, `next/font/google` (Space Grotesk + Manrope)

**Spec:** `docs/superpowers/specs/2026-03-20-design-system-design.md`

---

## File Structure

```
app/
├── globals.css                  ← MODIFY: design tokens (colors, spacing, radius, motion, typography)
├── layout.tsx                   ← MODIFY: swap Geist → Space Grotesk + Manrope, metadata, dark class
├── page.tsx                     ← MODIFY: replace version selector with real homepage shell
│
components/
├── blueprint-shell.tsx          ← CREATE: layout wrapper (vertical borders, max-width 1400px, horizontal separators)
├── button.tsx                   ← CREATE: Primary, Brand, Outline variants + invert support
├── tag.tsx                      ← CREATE: non-interactive pill label
├── dark-mode-toggle.tsx         ← CREATE: 'use client' — toggle dark class + localStorage
│
lib/
├── cn.ts                        ← CREATE: className merge utility (clsx + tailwind-merge)
```

---

## Task 1: Utility — `cn()` helper

**Files:**
- Create: `lib/cn.ts`

- [ ] **Step 1: Install clsx + tailwind-merge**

```bash
npm install clsx tailwind-merge
```

- [ ] **Step 2: Create `lib/cn.ts`**

```ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

- [ ] **Step 3: Commit**

```bash
git add lib/cn.ts package.json package-lock.json
git commit -m "feat: add cn() class merge utility"
```

---

## Task 2: Design Tokens — Colors, Spacing, Radius, Motion

**Files:**
- Modify: `app/globals.css`

- [ ] **Step 1: Replace `app/globals.css` with full token system**

Replace the entire contents of `app/globals.css` with:

```css
@import "tailwindcss";

/* ============================================
   DESIGN TOKENS — Portfolio Jonathan Schummers
   Spec: docs/superpowers/specs/2026-03-20-design-system-design.md
   ============================================ */

/*
  Architecture:
  - :root uses --sem-* prefix for semantic custom properties
  - @theme inline maps --sem-* → --color-* for Tailwind utility classes
  - This avoids circular variable references in Tailwind v4
*/

/* --- Light mode (default) --- */
:root {
  /* Semantic colors */
  --sem-bg: #fafafa;
  --sem-fg: #18181b;
  --sem-muted: #52525c;
  --sem-subtle: #71717b;
  --sem-faint: #9f9fa9;
  --sem-border: #e4e4e7;
  --sem-border-strong: #d4d4d8;
  --sem-surface: #f4f4f5;
  --sem-invert-bg: #18181b;
  --sem-invert-fg: #fafafa;

  /* Accent */
  --sem-accent-subtle: #d4e3ff;
  --sem-accent-muted: #3670f5;
  --sem-accent: #0A4CF0;
  --sem-accent-hover: #0839b8;
  --sem-accent-text: #0A4CF0;

  /* Spacing — base 8px */
  --sem-space-xs: 8px;
  --sem-space-sm: 16px;
  --sem-space-md: 24px;
  --sem-space-lg: 32px;
  --sem-space-xl: 48px;
  --sem-space-2xl: 64px;
  --sem-space-3xl: 96px;
  --sem-space-4xl: 128px;

  /* Radius */
  --sem-radius-none: 0px;
  --sem-radius-sm: 1px;
  --sem-radius-pill: 3px;

  /* Motion — duration and easing separated for Tailwind compatibility */
  --dur-fast: 150ms;
  --dur-base: 300ms;
  --dur-slow: 400ms;
  --ease-default: ease-out;

  /* Disabled */
  --sem-disabled-bg: #e4e4e7;
  --sem-disabled-fg: #9f9fa9;
}

/* --- Dark mode --- */
.dark {
  --sem-bg: #09090b;
  --sem-fg: #e4e4e7;
  --sem-muted: #9f9fa9;
  --sem-subtle: #71717b;
  --sem-faint: #52525c;
  --sem-border: #3f3f47;
  --sem-border-strong: #52525c;
  --sem-surface: #27272a;
  --sem-invert-bg: #fafafa;
  --sem-invert-fg: #18181b;

  /* Accent — adjusted for contrast on dark bg */
  --sem-accent-text: #6d9dfa;
  --sem-accent: #0A4CF0;
  --sem-accent-hover: #0839b8;
  --sem-accent-subtle: #d4e3ff;
  --sem-accent-muted: #3670f5;

  /* Disabled */
  --sem-disabled-bg: #3f3f47;
  --sem-disabled-fg: #52525c;
}

@media (prefers-color-scheme: dark) {
  :root:not(.light) {
    --sem-bg: #09090b;
    --sem-fg: #e4e4e7;
    --sem-muted: #9f9fa9;
    --sem-subtle: #71717b;
    --sem-faint: #52525c;
    --sem-border: #3f3f47;
    --sem-border-strong: #52525c;
    --sem-surface: #27272a;
    --sem-invert-bg: #fafafa;
    --sem-invert-fg: #18181b;
    --sem-accent-text: #6d9dfa;
    --sem-accent: #0A4CF0;
    --sem-accent-hover: #0839b8;
    --sem-accent-subtle: #d4e3ff;
    --sem-accent-muted: #3670f5;
    --sem-disabled-bg: #3f3f47;
    --sem-disabled-fg: #52525c;
  }
}

/* --- Tailwind v4 theme registration --- */
@theme inline {
  /* Colors → generates bg-*, text-*, border-* utilities */
  --color-bg: var(--sem-bg);
  --color-fg: var(--sem-fg);
  --color-muted: var(--sem-muted);
  --color-subtle: var(--sem-subtle);
  --color-faint: var(--sem-faint);
  --color-border: var(--sem-border);
  --color-border-strong: var(--sem-border-strong);
  --color-surface: var(--sem-surface);
  --color-invert-bg: var(--sem-invert-bg);
  --color-invert-fg: var(--sem-invert-fg);
  --color-accent: var(--sem-accent);
  --color-accent-hover: var(--sem-accent-hover);
  --color-accent-text: var(--sem-accent-text);
  --color-accent-subtle: var(--sem-accent-subtle);
  --color-accent-muted: var(--sem-accent-muted);
  --color-disabled-bg: var(--sem-disabled-bg);
  --color-disabled-fg: var(--sem-disabled-fg);

  /* Spacing → generates p-*, m-*, gap-* utilities */
  --spacing-xs: var(--sem-space-xs);
  --spacing-sm: var(--sem-space-sm);
  --spacing-md: var(--sem-space-md);
  --spacing-lg: var(--sem-space-lg);
  --spacing-xl: var(--sem-space-xl);
  --spacing-2xl: var(--sem-space-2xl);
  --spacing-3xl: var(--sem-space-3xl);
  --spacing-4xl: var(--sem-space-4xl);

  /* Radius → generates rounded-* utilities */
  --radius-none: var(--sem-radius-none);
  --radius-sm: var(--sem-radius-sm);
  --radius-pill: var(--sem-radius-pill);

  /* Fonts */
  --font-display: var(--font-space-grotesk);
  --font-body: var(--font-manrope);
}

/* --- Reduced motion --- */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    transition-duration: 0ms !important;
    animation-duration: 0ms !important;
  }

  img, video {
    filter: none !important;
  }
}

/* --- Global focus-visible (spec section 4.6) --- */
a:focus-visible,
button:focus-visible {
  outline: 2px solid var(--sem-fg);
  outline-offset: 2px;
}

/* --- Hover inversion pattern (spec section 4.3) --- */
/* Use on project rows and clickable list items */
.hover-invert {
  transition: background-color var(--dur-base) var(--ease-default),
              color var(--dur-base) var(--ease-default);
}
.hover-invert img {
  filter: grayscale(1);
  transition: filter var(--dur-slow) var(--ease-default);
}
@media (hover: hover) {
  .hover-invert:hover {
    background-color: var(--sem-invert-bg);
    color: var(--sem-invert-fg);
  }
  .hover-invert:hover img {
    filter: grayscale(0);
  }
}

/* --- Base styles --- */
body {
  background-color: var(--sem-bg);
  color: var(--sem-fg);
  font-family: var(--font-body), sans-serif;
}
```

- [ ] **Step 2: Verify the dev server compiles without errors**

```bash
npm run dev
```

Expected: compiles successfully, page loads (will look broken — fonts not wired yet, that's Task 3).

- [ ] **Step 3: Commit**

```bash
git add app/globals.css
git commit -m "feat: implement design tokens — colors, spacing, radius, motion"
```

---

## Task 3: Typography — Fonts in Root Layout

**Files:**
- Modify: `app/layout.tsx`

**Important:** Before writing code, check the Next.js 16 font docs at `node_modules/next/dist/docs/` to confirm the `next/font/google` API hasn't changed.

- [ ] **Step 1: Read Next.js 16 font docs**

```bash
find node_modules/next/dist/docs -name "*.md" | head -20
```

Then read any file related to fonts to confirm the API.

- [ ] **Step 2: Update `app/layout.tsx`**

Replace the entire contents with:

```tsx
import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jonathan Schummers — Product Designer",
  description:
    "Portfolio de Jonathan Schummers, Product Designer freelance basé à Paris.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${spaceGrotesk.variable} ${manrope.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
```

Key changes vs. current:
- Geist → Space Grotesk (display) + Manrope (body)
- `lang="fr"` (site is in French)
- `suppressHydrationWarning` on `<html>` for dark mode class mismatch
- Real metadata

- [ ] **Step 3: Verify fonts load**

```bash
npm run dev
```

Open browser, inspect `<html>` — verify `--font-space-grotesk` and `--font-manrope` CSS variables are present. Body text should render in Manrope.

- [ ] **Step 4: Commit**

```bash
git add app/layout.tsx
git commit -m "feat: swap Geist for Space Grotesk + Manrope typography"
```

---

## Task 4: Blueprint Shell — Layout Wrapper

**Files:**
- Create: `components/blueprint-shell.tsx`

- [ ] **Step 1: Create `components/blueprint-shell.tsx`**

```tsx
import { cn } from "@/lib/cn";

export function BlueprintShell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-[1400px]",
        "border-x border-border",
        className
      )}
    >
      {children}
    </div>
  );
}

export function Section({
  children,
  className,
  invert = false,
}: {
  children: React.ReactNode;
  className?: string;
  invert?: boolean;
}) {
  return (
    <section
      className={cn(
        "border-b border-border",
        "px-xl py-xl",
        "max-md:px-md",
        "md:max-lg:px-lg",
        invert && "bg-invert-bg text-invert-fg border-border-strong",
        className
      )}
    >
      {children}
    </section>
  );
}
```

- [ ] **Step 2: Verify it compiles**

```bash
npm run dev
```

Expected: no errors (component not used yet, but imports should resolve).

- [ ] **Step 3: Commit**

```bash
git add components/blueprint-shell.tsx
git commit -m "feat: add BlueprintShell layout wrapper with Section component"
```

---

## Task 5: Button Component

**Files:**
- Create: `components/button.tsx`

- [ ] **Step 1: Create `components/button.tsx`**

```tsx
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "brand" | "outline";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  invert?: boolean;
  href?: string;
}

export function Button({
  variant = "primary",
  invert = false,
  className,
  children,
  href,
  ...props
}: ButtonProps) {
  const base = cn(
    "inline-flex items-center justify-center",
    "font-body font-semibold text-[14px]",
    "px-md py-[12px]",
    "rounded-sm",
    "transition-colors duration-[var(--dur-fast)] ease-out",
    "focus-visible:outline-2 focus-visible:outline-fg focus-visible:outline-offset-2",
    "active:scale-[0.98]",
    "disabled:cursor-not-allowed disabled:bg-disabled-bg disabled:text-disabled-fg"
  );

  // Hover styles use @media (hover: hover) via Tailwind — no sticky hover on touch
  const variants: Record<string, string> = {
    primary: invert
      ? "bg-invert-bg text-invert-fg [@media(hover:hover){&:hover}]:bg-[#e4e4e7]"
      : "bg-fg text-bg [@media(hover:hover){&:hover}]:bg-[#3f3f47]",
    brand:
      "bg-accent text-white [@media(hover:hover){&:hover}]:bg-accent-hover",
    outline: invert
      ? "border border-border-strong text-invert-fg bg-transparent [@media(hover:hover){&:hover}]:bg-invert-bg [@media(hover:hover){&:hover}]:text-invert-fg"
      : "border border-border-strong text-fg bg-transparent [@media(hover:hover){&:hover}]:bg-fg [@media(hover:hover){&:hover}]:text-bg",
  };

  const cls = cn(base, variants[variant], className);

  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }

  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}
```

**Note on touch devices (spec section 3.3):** Hover styles are wrapped in `@media (hover: hover)` to prevent sticky hover on touch devices. If Tailwind v4 supports a built-in `hover:` modifier that respects `@media (hover: hover)`, use that instead of the verbose arbitrary syntax. Check Tailwind v4 docs during implementation.

- [ ] **Step 2: Verify it compiles**

```bash
npm run dev
```

- [ ] **Step 3: Commit**

```bash
git add components/button.tsx
git commit -m "feat: add Button component with Primary, Brand, Outline variants"
```

---

## Task 6: Tag Component

**Files:**
- Create: `components/tag.tsx`

- [ ] **Step 1: Create `components/tag.tsx`**

```tsx
import { cn } from "@/lib/cn";

export function Tag({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-block",
        "border border-border-strong",
        "rounded-pill",
        "px-[10px] py-[4px]",
        "font-body font-semibold text-[11px] uppercase tracking-[0.08em]",
        "text-muted",
        className
      )}
    >
      {children}
    </span>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/tag.tsx
git commit -m "feat: add Tag pill component"
```

---

## Task 7: Dark Mode Toggle

**Files:**
- Create: `components/dark-mode-toggle.tsx`
- Modify: `app/layout.tsx` (add inline script for flash prevention)

- [ ] **Step 1: Create `components/dark-mode-toggle.tsx`**

```tsx
"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

export function DarkModeToggle({ className }: { className?: string }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const isDark = stored === "dark" || (!stored && prefersDark);
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
    // Add .light when user explicitly chose light, so :root:not(.light) media query is defeated
    document.documentElement.classList.toggle("light", !isDark);
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    document.documentElement.classList.toggle("light", !next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Activer le mode clair" : "Activer le mode sombre"}
      className={cn(
        "p-xs",
        "text-fg transition-colors duration-[var(--dur-fast)] ease-out",
        "[@media(hover:hover){&:hover}]:text-muted",
        className
      )}
    >
      {dark ? (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      ) : (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}
```

- [ ] **Step 2: Add dark mode flash prevention script to `app/layout.tsx`**

Add this inline script inside `<head>` (or before `<body>`) to prevent FOUC:

In `app/layout.tsx`, update the `<html>` tag to include the script:

```tsx
<html
  lang="fr"
  className={`${spaceGrotesk.variable} ${manrope.variable} h-full antialiased`}
  suppressHydrationWarning
>
  <head>
    <script
      dangerouslySetInnerHTML={{
        __html: `(function(){try{var d=document.documentElement,t=localStorage.getItem('theme'),p=matchMedia('(prefers-color-scheme:dark)').matches;if(t==='dark'||(t==null&&p)){d.classList.add('dark')}else if(t==='light'){d.classList.add('light')}}catch(e){}})()`,
      }}
    />
  </head>
  <body className="min-h-full flex flex-col">{children}</body>
</html>
```

- [ ] **Step 3: Verify dark mode toggle works**

```bash
npm run dev
```

Test: import and render `<DarkModeToggle />` temporarily on the page. Click it — page should toggle between light/dark. Refresh — should persist. Remove the temporary import after verification.

- [ ] **Step 4: Commit**

```bash
git add components/dark-mode-toggle.tsx app/layout.tsx
git commit -m "feat: add dark mode toggle with localStorage persistence + FOUC prevention"
```

---

## Task 8: Demo Page — Visual Verification

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Replace `app/page.tsx` with a design system demo**

This is a temporary page to visually verify all tokens and components. It will be replaced by the real homepage in étape 3.

```tsx
import Image from "next/image";
import { BlueprintShell, Section } from "@/components/blueprint-shell";
import { Button } from "@/components/button";
import { Tag } from "@/components/tag";
import { DarkModeToggle } from "@/components/dark-mode-toggle";

export default function DesignSystemDemo() {
  return (
    <BlueprintShell>
      {/* Header with toggle */}
      <Section className="flex items-center justify-between">
        <h1 className="font-display text-[clamp(48px,8vw,96px)] font-bold uppercase leading-[0.92] tracking-[-0.03em]">
          Design
          <br />
          System
        </h1>
        <DarkModeToggle />
      </Section>

      {/* Typography */}
      <Section>
        <p className="font-body text-[11px] font-semibold uppercase tracking-[0.08em] text-muted mb-lg">
          Typography
        </p>
        <h2 className="font-display text-[clamp(24px,3vw,32px)] font-bold tracking-[-0.02em] leading-[1.2] mb-sm">
          Heading H2 — Space Grotesk
        </h2>
        <h3 className="font-display text-[clamp(18px,2vw,20px)] font-medium tracking-[-0.01em] leading-[1.3] mb-sm">
          Subheading H3 — Space Grotesk Medium
        </h3>
        <p className="font-body text-[15px] leading-[1.65] max-w-[600px]">
          Body text in Manrope. Le design est structuré par les bordures, pas par les ombres.
          Direction visuelle inspirée d&apos;un layout architectural blueprint.
        </p>
        <p className="font-display text-[clamp(36px,5vw,56px)] font-bold tracking-[-0.04em] leading-[1] mt-lg">
          42%
        </p>
        <p className="font-body text-[12px] font-medium tracking-[0.01em] text-muted">
          Caption / Small text
        </p>
      </Section>

      {/* Buttons */}
      <Section>
        <p className="font-body text-[11px] font-semibold uppercase tracking-[0.08em] text-muted mb-lg">
          Buttons
        </p>
        <div className="flex flex-wrap gap-sm">
          <Button variant="primary">Primary</Button>
          <Button variant="brand">Brand CTA</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="primary" disabled>
            Disabled
          </Button>
        </div>
      </Section>

      {/* Buttons on inverted section */}
      <Section invert>
        <p className="font-body text-[11px] font-semibold uppercase tracking-[0.08em] text-invert-fg/60 mb-lg">
          Buttons — Inverted Section
        </p>
        <div className="flex flex-wrap gap-sm">
          <Button variant="primary" invert>
            Primary Invert
          </Button>
          <Button variant="brand">Brand CTA</Button>
          <Button variant="outline" invert>
            Outline Invert
          </Button>
        </div>
      </Section>

      {/* Tags */}
      <Section>
        <p className="font-body text-[11px] font-semibold uppercase tracking-[0.08em] text-muted mb-lg">
          Tags
        </p>
        <div className="flex flex-wrap gap-xs">
          <Tag>Product Design</Tag>
          <Tag>UX Research</Tag>
          <Tag>Design System</Tag>
          <Tag>Figma</Tag>
          <Tag>Prototyping</Tag>
        </div>
      </Section>

      {/* Hover Inversion Pattern (spec 4.3) */}
      <Section>
        <p className="font-body text-[11px] font-semibold uppercase tracking-[0.08em] text-muted mb-lg">
          Hover Inversion
        </p>
        <div className="divide-y divide-border">
          <a href="#" className="hover-invert flex items-center gap-md px-md py-sm">
            <Image
              src="/images/Hero/NOD.webp"
              alt="NOD"
              width={80}
              height={60}
              className="object-cover"
            />
            <span className="font-display font-bold text-[18px]">NOD — Plateforme immobilière</span>
          </a>
          <a href="#" className="hover-invert flex items-center gap-md px-md py-sm">
            <Image
              src="/images/Hero/BFOR.webp"
              alt="BforBank"
              width={80}
              height={60}
              className="object-cover"
            />
            <span className="font-display font-bold text-[18px]">BforBank — Application bancaire</span>
          </a>
        </div>
      </Section>

      {/* Colors */}
      <Section>
        <p className="font-body text-[11px] font-semibold uppercase tracking-[0.08em] text-muted mb-lg">
          Colors
        </p>
        <div className="grid grid-cols-5 gap-xs">
          <div className="h-16 bg-fg" />
          <div className="h-16 bg-muted" />
          <div className="h-16 bg-subtle" />
          <div className="h-16 bg-faint" />
          <div className="h-16 bg-border" />
        </div>
        <div className="mt-xs grid grid-cols-3 gap-xs">
          <div className="h-16 bg-accent" />
          <div className="h-16 bg-accent-hover" />
          <div className="h-16 bg-accent-subtle" />
        </div>
      </Section>

      {/* Links */}
      <Section>
        <p className="font-body text-[11px] font-semibold uppercase tracking-[0.08em] text-muted mb-lg">
          Links & Focus
        </p>
        <p className="font-body text-[15px] leading-[1.65]">
          Texte avec un{" "}
          <a
            href="#"
            className="text-fg underline underline-offset-[3px] transition-colors duration-[var(--dur-fast)] ease-out [@media(hover:hover){&:hover}]:text-muted"
          >
            lien inline
          </a>{" "}
          pour tester le style. Tab pour voir le focus ring.
        </p>
      </Section>
    </BlueprintShell>
  );
}
```

- [ ] **Step 2: Verify visually in browser**

```bash
npm run dev
```

Check:
- Blueprint layout (vertical borders visible on desktop)
- Typography hierarchy (display vs body fonts)
- Button variants render correctly (all 3 + disabled)
- Tags render with pill shape
- Dark mode toggle works + persists on refresh
- Inverted section (black band) with correct button colors
- Hover inversion row: bg flips to black, text to white, image goes color (desktop only)
- Touch test (DevTools mobile mode): hover effects should NOT apply
- Responsive: resize to mobile (< 768px) — padding should reduce
- Tab through page: focus rings visible on buttons and links
- `prefers-reduced-motion` — enable in OS settings, transitions should be instant, images stay in color

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: add design system demo page for visual verification"
```

---

## Task 9: Cleanup — Update Roadmap

**Files:**
- Modify: `docs/roadmap.md`

- [ ] **Step 1: Mark étape 2 design system tasks as complete in `docs/roadmap.md`**

Update the étape 2 section:

```markdown
### Etape 2 — Direction visuelle & Design System (2-3h)
- [x] Explorer 2-3 directions visuelles (visual companion)
- [x] Choisir typographie, palette, spacing, shadows, animations
- [x] Implementer en CSS variables + Tailwind config
- [x] Creer composants de base (Nav, Footer, Button, Card)
```

(Nav and Footer are deferred to étape 3 per spec section 6 — Button and Tag are done.)

- [ ] **Step 2: Commit**

```bash
git add docs/roadmap.md
git commit -m "docs: mark etape 2 design system as complete"
```
