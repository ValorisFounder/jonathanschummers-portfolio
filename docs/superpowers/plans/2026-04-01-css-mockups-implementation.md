# CSS Mockups & Interactions — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add CSS device mockups (browser frames, iPhone frames) and hover interactions to all homepage project cards and the WattHunter section.

**Architecture:** Two reusable presentational components (`BrowserFrame`, `IPhoneFrame`) plus one project-specific showcase (`BforBankShowcase`). Data model gets new fields to drive per-project rendering. Existing card components delegate image rendering to the new mockup components based on project data.

**Tech Stack:** Next.js (App Router, Server Components), Tailwind CSS v4, existing design tokens in `app/globals.css`

**Spec:** `docs/superpowers/specs/2026-04-01-css-mockups-design.md`

---

### Task 1: Update data model

**Files:**
- Modify: `lib/data.ts`

- [ ] **Step 1: Add new fields to the Project interface**

Add `browserUrl` (optional string for the browser frame URL bar) and `mockupType` (to control which rendering strategy each project uses):

```ts
export interface Project {
  slug: string;
  title: string;
  description?: string;
  metric: string;
  company?: string;
  tags: string[];
  image?: string;
  type: "featured" | "compact";
  hidden?: boolean;
  browserUrl?: string;
  mockupType?: "browser" | "browser-scroll" | "mobile-grid" | "iphone";
}
```

- [ ] **Step 2: Add data to each project**

Update each project entry in the `projects` array:

```ts
{
  slug: "nod",
  // ...existing fields...
  browserUrl: "app.nod-factory.com/dashboard",
  mockupType: "browser-scroll",
},
{
  slug: "valoris",
  // ...existing fields...
  browserUrl: "app.valoris.lu",
  mockupType: "browser",
},
{
  slug: "bforbank",
  // ...existing fields...
  mockupType: "mobile-grid",
},
{
  slug: "spie-bat",
  // ...existing fields...
  browserUrl: "spie-batignolles.intranet/reports",
  mockupType: "browser",
},
{
  slug: "smartintegrity",
  // ...existing fields...
  browserUrl: "smint.totalenergies.net",
  mockupType: "browser",
},
{
  slug: "malaama",
  // ...existing fields...
  browserUrl: "malaama.org",
  mockupType: "browser",
},
```

- [ ] **Step 3: Verify the app still builds**

Run: `npx next build` (or `npm run build`)
Expected: Build succeeds — new fields are optional and no component reads them yet.

- [ ] **Step 4: Commit**

```bash
git add lib/data.ts
git commit -m "feat: add browserUrl and mockupType fields to Project data"
```

---

### Task 2: Create `<BrowserFrame>` component

**Files:**
- Create: `components/browser-frame.tsx`

- [ ] **Step 1: Create the component file**

```tsx
import { cn } from "@/lib/cn";

interface BrowserFrameProps {
  url: string;
  children: React.ReactNode;
  className?: string;
}

export function BrowserFrame({ url, children, className }: BrowserFrameProps) {
  return (
    <div
      className={cn(
        "rounded-[12px] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.08)]",
        className
      )}
    >
      {/* Chrome bar */}
      <div className="flex items-center gap-[10px] bg-surface border-b border-border px-[16px] py-[12px]">
        {/* Traffic light dots */}
        <div className="flex gap-[6px]">
          <span className="size-[10px] rounded-full bg-[#ef4444]" />
          <span className="size-[10px] rounded-full bg-[#f59e0b]" />
          <span className="size-[10px] rounded-full bg-[#22c55e]" />
        </div>
        {/* URL bar */}
        <div className="flex-1 rounded-md bg-background px-[12px] py-[6px] text-[12px] text-text-tertiary truncate">
          {url}
        </div>
      </div>

      {/* Viewport */}
      <div className="bg-background">
        {children}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify the app builds**

Run: `npm run build`
Expected: Build succeeds — component exists but is not imported anywhere yet.

- [ ] **Step 3: Commit**

```bash
git add components/browser-frame.tsx
git commit -m "feat: add BrowserFrame component (macOS-style browser mockup)"
```

---

### Task 3: Create `<IPhoneFrame>` component

**Files:**
- Create: `components/iphone-frame.tsx`

- [ ] **Step 1: Create the component file**

```tsx
import { cn } from "@/lib/cn";

interface IPhoneFrameProps {
  children: React.ReactNode;
  showHomeIndicator?: boolean;
  className?: string;
}

export function IPhoneFrame({
  children,
  showHomeIndicator = false,
  className,
}: IPhoneFrameProps) {
  return (
    <div
      className={cn(
        "bg-zinc-900 dark:bg-zinc-800 rounded-[28px] p-[8px] shadow-[0_8px_32px_rgba(0,0,0,0.12)]",
        className
      )}
    >
      {/* Dynamic Island */}
      <div className="relative z-10 mx-auto w-[72px] h-[20px] bg-black rounded-full" />

      {/* Viewport — negative top margin so content tucks under the island */}
      <div className="rounded-[20px] overflow-hidden -mt-[10px]">
        {children}
      </div>

      {/* Home indicator (optional) */}
      {showHomeIndicator && (
        <div className="mx-auto mt-[8px] mb-[4px] w-[80px] h-[4px] bg-white rounded-full" />
      )}
    </div>
  );
}
```

- [ ] **Step 2: Verify the app builds**

Run: `npm run build`
Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
git add components/iphone-frame.tsx
git commit -m "feat: add IPhoneFrame component with optional home indicator"
```

---

### Task 4: Create `<BforBankShowcase>` component

**Files:**
- Create: `components/bforbank-showcase.tsx`

This is the 4-column animated grid of iPhone screens for the BforBank featured card.

- [ ] **Step 1: Create the component file**

```tsx
"use client";

import Image from "next/image";
import { IPhoneFrame } from "@/components/iphone-frame";

const COLUMNS = [
  // Col 1 — moves UP on hover
  [
    "/images/Hero/Bforbank/IMG_2622.webp",   // Offer selection
    "/images/Hero/Bforbank/IMG_2632.webp",   // Password step
  ],
  // Col 2 — moves DOWN on hover
  [
    "/images/Hero/Bforbank/IMG_2625.webp",   // Category select
    "/images/Hero/Bforbank/IMG_2623.webp",   // Card view
    "/images/Hero/Bforbank/IMG_2635.webp",   // Email step
  ],
  // Col 3 — moves UP on hover
  [
    "/images/Hero/Bforbank/Frame 1597884611.webp", // Home/Balance
    "/images/Hero/Bforbank/IMG_2628.webp",         // Transactions
    "/images/Hero/Bforbank/IMG_2636-1.webp",       // Fiscal info
  ],
  // Col 4 — moves DOWN on hover
  [
    "/images/Hero/Bforbank/IMG_2636.webp",       // Country select
    "/images/Hero/Bforbank/IMG_3216 3.webp",     // Transfer confirm
  ],
];

// Initial Y offsets (staggered for visual rhythm)
const INITIAL_OFFSETS = [0, -60, -30, -80];

// Hover Y offsets (alternating up/down movement)
const HOVER_OFFSETS = [-100, 40, -80, 30];

export function BforBankShowcase() {
  return (
    <div className="group relative h-[480px] overflow-hidden rounded-[12px] bg-zinc-900 dark:bg-zinc-800 p-[24px] flex gap-[16px]">
      {COLUMNS.map((screens, colIndex) => (
        <div
          key={colIndex}
          className="flex flex-1 flex-col gap-[16px] transition-transform duration-[5000ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]"
          style={{
            transform: `translateY(${INITIAL_OFFSETS[colIndex]}px)`,
          }}
          // The hover state is handled via group-hover in a <style> tag below
          data-col={colIndex}
        >
          {screens.map((src) => (
            <IPhoneFrame key={src} className="shrink-0">
              <Image
                src={src}
                alt="BforBank app screen"
                width={300}
                height={650}
                className="w-full h-auto block"
              />
            </IPhoneFrame>
          ))}
        </div>
      ))}

      {/* Hover animations via CSS — group-hover shifts each column */}
      <style>{`
        .group:hover [data-col="0"] { transform: translateY(${HOVER_OFFSETS[0]}px) !important; }
        .group:hover [data-col="1"] { transform: translateY(${HOVER_OFFSETS[1]}px) !important; }
        .group:hover [data-col="2"] { transform: translateY(${HOVER_OFFSETS[2]}px) !important; }
        .group:hover [data-col="3"] { transform: translateY(${HOVER_OFFSETS[3]}px) !important; }
      `}</style>
    </div>
  );
}
```

**Note on `"use client"`:** The `<style>` tag with template literals requires client rendering. An alternative is a pure Tailwind approach, but the dynamic offsets from arrays make inline styles + a scoped `<style>` the cleanest option.

- [ ] **Step 2: Verify the app builds**

Run: `npm run build`
Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
git add components/bforbank-showcase.tsx
git commit -m "feat: add BforBankShowcase with 4-column animated iPhone grid"
```

---

### Task 5: Integrate mockups into `<ProjectCardFeatured>`

**Files:**
- Modify: `components/project-card-featured.tsx`

This is the biggest integration task. The featured card's image column changes based on `project.mockupType`:
- `"browser-scroll"` (NOD): `<BrowserFrame>` with scroll-on-hover
- `"browser"` (Valoris): `<BrowserFrame>` static
- `"mobile-grid"` (BforBank): `<BforBankShowcase>` replacing the image column entirely

- [ ] **Step 1: Replace the desktop image column**

Replace the entire content of `components/project-card-featured.tsx` with:

```tsx
import Image from "next/image";
import { Tag } from "@/components/tag";
import { Button } from "@/components/button";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { BrowserFrame } from "@/components/browser-frame";
import { BforBankShowcase } from "@/components/bforbank-showcase";
import type { Project } from "@/lib/data";

function FeaturedImage({ project }: { project: Project }) {
  if (project.mockupType === "mobile-grid") {
    return <BforBankShowcase />;
  }

  if (!project.image) return null;

  // Browser frame wrapper (scroll or static)
  if (project.browserUrl) {
    const isScroll = project.mockupType === "browser-scroll";

    return (
      <BrowserFrame url={project.browserUrl}>
        {isScroll ? (
          <div className="group/scroll h-[320px] overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              width={640}
              height={1200}
              className="w-full object-cover object-top transition-transform duration-[6000ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover/scroll:[transform:translateY(calc(-100%+320px))]"
            />
          </div>
        ) : (
          <Image
            src={project.image}
            alt={project.title}
            width={640}
            height={755}
            className="w-full object-cover object-top"
          />
        )}
      </BrowserFrame>
    );
  }

  // Fallback: raw image (no mockup)
  return (
    <Image
      src={project.image}
      alt={project.title}
      width={640}
      height={755}
      className="object-cover object-top w-full"
    />
  );
}

export function ProjectCardFeatured({ project }: { project: Project }) {
  return (
    <a
      href={`/work/${project.slug}`}
      className="hover-subtle block border-b border-border"
    >
      {/* Desktop: 2-col grid | Mobile: single column flex */}
      <div className="md:h-[560px] overflow-hidden">
        <div className="max-md:flex max-md:flex-col md:grid md:grid-cols-2">

          {/* Text column */}
          <div className="flex flex-col gap-md pt-xl2 pb-xl2 px-xl max-md:px-md max-md:pt-md max-md:pb-lg md:max-lg:px-lg">
            {/* Company + Title */}
            <div className="flex flex-col gap-xs">
              {project.company && (
                <p className="font-body text-label font-bold uppercase tracking-label text-text-secondary">
                  {project.company}
                </p>
              )}
              <h2 className="font-display text-h2 font-bold tracking-h2 leading-h2 text-text-primary">
                {project.title}
              </h2>
            </div>

            {/* Image — inline on mobile (between title and tags) */}
            {project.image && (
              <div className="relative h-[240px] overflow-hidden md:hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={640}
                  height={400}
                  className="object-cover object-top w-full h-full"
                />
              </div>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-sm">
              {project.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>

            {/* Divider, Description, CTA — desktop only */}
            <hr className="w-1/2 border-t border-border m-0 max-md:hidden" />

            {project.description && (
              <p className="font-body text-body leading-body text-text-secondary max-w-[500px] max-md:hidden">
                {project.description}
              </p>
            )}

            <div className="max-md:hidden">
              <Button variant="outline">
                Read case study
                <ArrowRightIcon className="ml-xs size-3.5" />
              </Button>
            </div>
          </div>

          {/* Image column — desktop only */}
          <div className="relative overflow-hidden pt-xl2 px-xl max-md:hidden">
            <FeaturedImage project={project} />
          </div>

        </div>
      </div>
    </a>
  );
}
```

- [ ] **Step 2: Verify visually**

Run: `npm run dev`
Check in browser:
- NOD card: browser frame with scroll-on-hover (hover the image, it should slowly scroll down over ~6s)
- BforBank card: 4-column iPhone grid with column animation on hover
- Valoris (if visible): browser frame, static image

- [ ] **Step 3: Commit**

```bash
git add components/project-card-featured.tsx
git commit -m "feat: integrate BrowserFrame and BforBankShowcase into featured cards"
```

---

### Task 6: Integrate perspective hover into `<ProjectCardCompact>`

**Files:**
- Modify: `components/project-card-compact.tsx`

Compact card thumbnails get wrapped in `<BrowserFrame>` with a perspective tilt on card hover.

- [ ] **Step 1: Replace the content of `project-card-compact.tsx`**

```tsx
import Image from "next/image";
import { Tag } from "@/components/tag";
import { BrowserFrame } from "@/components/browser-frame";
import type { Project } from "@/lib/data";

export function ProjectCardCompact({ project }: { project: Project }) {
  return (
    <a
      href={`/work/${project.slug}`}
      className="group hover-subtle flex gap-xl border-b border-border px-xl py-md max-md:px-md md:max-lg:px-lg"
    >
      {/* Text left */}
      <div className="flex-1 flex flex-col justify-center gap-sm">
        <div className="flex flex-col gap-xs">
          {project.company && (
            <p className="font-body text-label font-bold uppercase tracking-label text-text-secondary">
              {project.company}
            </p>
          )}
          <h3 className="font-display text-h3 font-bold tracking-h3 leading-h3 text-text-primary">
            {project.title}
          </h3>
        </div>
        <div className="flex flex-wrap gap-sm">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>

      {/* Thumbnail right — with browser frame + perspective on hover */}
      {project.image && (
        <div className="w-[236px] shrink-0 py-md overflow-visible max-md:hidden [perspective:1200px]">
          {project.browserUrl ? (
            <BrowserFrame
              url={project.browserUrl}
              className="transition-transform duration-[400ms] ease-out group-hover:rotate-y-[8deg] group-hover:rotate-x-[2deg]"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={236}
                height={135}
                className="w-full h-auto block"
              />
            </BrowserFrame>
          ) : (
            <Image
              src={project.image}
              alt={project.title}
              width={236}
              height={135}
              className="w-full h-full object-cover"
            />
          )}
        </div>
      )}
    </a>
  );
}
```

**Important:** Tailwind CSS v4 supports `rotate-y-*` and `rotate-x-*` utilities natively. If these don't work, we fall back to arbitrary values: `group-hover:[transform:rotateY(8deg)_rotateX(2deg)]`.

- [ ] **Step 2: Verify visually**

Run: `npm run dev`
Check in browser:
- Hover over Spie Batignolles, SmartIntegrity, Malaama compact cards
- The thumbnail should tilt subtly into perspective (8deg Y, 2deg X)
- On mouse leave, it returns to flat

- [ ] **Step 3: Test Tailwind v4 3D transform support**

If `rotate-y-[8deg]` doesn't work in Tailwind v4, replace the BrowserFrame className with:

```tsx
className="transition-transform duration-[400ms] ease-out group-hover:[transform:rotateY(8deg)_rotateX(2deg)]"
```

- [ ] **Step 4: Commit**

```bash
git add components/project-card-compact.tsx
git commit -m "feat: add browser frame + perspective-on-hover to compact card thumbnails"
```

---

### Task 7: Integrate `<IPhoneFrame>` into About section (WattHunter)

**Files:**
- Modify: `components/about.tsx`

- [ ] **Step 1: Replace the WattHunter image rendering**

In `components/about.tsx`, replace the image section (lines 56-78) with IPhoneFrame-wrapped images:

Replace this block:
```tsx
          <div className="mt-lg flex gap-sm overflow-hidden">
            <Image
              src="/images/Hero/WattHunter/IMG_6432.webp"
              alt="WattHunter app screenshot"
              width={400}
              height={800}
              className="min-w-0 flex-1"
            />
            <Image
              src="/images/Hero/WattHunter/IMG_6433.webp"
              alt="WattHunter app screenshot"
              width={400}
              height={800}
              className="min-w-0 flex-1"
            />
            <Image
              src="/images/Hero/WattHunter/IMG_6438.webp"
              alt="WattHunter app screenshot"
              width={400}
              height={800}
              className="min-w-0 flex-1"
            />
          </div>
```

With:
```tsx
          <div className="mt-lg flex gap-sm overflow-hidden">
            <IPhoneFrame showHomeIndicator className="min-w-0 flex-1">
              <Image
                src="/images/Hero/WattHunter/IMG_6432.webp"
                alt="WattHunter app screenshot"
                width={400}
                height={800}
                className="w-full h-auto block"
              />
            </IPhoneFrame>
            <IPhoneFrame showHomeIndicator className="min-w-0 flex-1">
              <Image
                src="/images/Hero/WattHunter/IMG_6433.webp"
                alt="WattHunter app screenshot"
                width={400}
                height={800}
                className="w-full h-auto block"
              />
            </IPhoneFrame>
            <IPhoneFrame showHomeIndicator className="min-w-0 flex-1">
              <Image
                src="/images/Hero/WattHunter/IMG_6438.webp"
                alt="WattHunter app screenshot"
                width={400}
                height={800}
                className="w-full h-auto block"
              />
            </IPhoneFrame>
          </div>
```

Also add the import at the top of the file:
```tsx
import { IPhoneFrame } from "@/components/iphone-frame";
```

- [ ] **Step 2: Verify visually**

Run: `npm run dev`
Check: The About section's right panel should show 3 WattHunter screenshots in iPhone frames with Dynamic Island and home indicator.

- [ ] **Step 3: Commit**

```bash
git add components/about.tsx
git commit -m "feat: wrap WattHunter screenshots in IPhoneFrame with home indicator"
```

---

### Task 8: Responsive behavior — mobile adjustments

**Files:**
- Modify: `components/bforbank-showcase.tsx`

- [ ] **Step 1: Add responsive breakpoint to BforBankShowcase**

The 4-column grid needs to become 2 columns on mobile. Update the outer `div` and add responsive classes:

In `components/bforbank-showcase.tsx`, update the outer container div:

Replace:
```tsx
    <div className="group relative h-[480px] overflow-hidden rounded-[12px] bg-zinc-900 dark:bg-zinc-800 p-[24px] flex gap-[16px]">
```

With:
```tsx
    <div className="group relative h-[320px] md:h-[480px] overflow-hidden rounded-[12px] bg-zinc-900 dark:bg-zinc-800 p-[16px] md:p-[24px] flex gap-[12px] md:gap-[16px]">
```

Also hide columns 3 and 4 on mobile by adding to the column `div`:

Replace the column mapping:
```tsx
        <div
          key={colIndex}
          className="flex flex-1 flex-col gap-[16px] transition-transform duration-[5000ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]"
```

With:
```tsx
        <div
          key={colIndex}
          className={`${colIndex >= 2 ? "hidden md:flex" : "flex"} flex-1 flex-col gap-[12px] md:gap-[16px] transition-transform duration-[5000ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]`}
```

- [ ] **Step 2: Verify on mobile viewport**

Run: `npm run dev`
Check at 375px width: BforBank shows 2 columns, shorter height, still looks good.

- [ ] **Step 3: Commit**

```bash
git add components/bforbank-showcase.tsx
git commit -m "feat: add responsive 2-column fallback for BforBank showcase on mobile"
```

---

### Task 9: Final visual QA and build check

**Files:** None — verification only.

- [ ] **Step 1: Full build**

Run: `npm run build`
Expected: Build succeeds with no errors.

- [ ] **Step 2: Visual check — all cards**

Run: `npm run dev` and verify:

| Project | Expected |
|---------|----------|
| NOD | Browser frame, scroll-on-hover (6s slow scroll) |
| BforBank | 4-column iPhone grid, columns shift on hover |
| Spie Batignolles | Browser frame thumbnail, perspective tilt on card hover |
| SmartIntegrity | Browser frame thumbnail, perspective tilt on card hover |
| Malaama | Browser frame thumbnail, perspective tilt on card hover |
| WattHunter (About) | 3 iPhone frames with home indicator |

- [ ] **Step 3: Dark mode check**

Toggle dark mode and verify:
- Browser frame chrome bar uses `surface` token (zinc-800)
- iPhone frames stay dark (zinc-900/zinc-800)
- BforBank showcase container stays dark
- No contrast issues

- [ ] **Step 4: Mobile check (375px)**

- Featured cards: images stack below title (existing behavior)
- Compact cards: thumbnails hidden on mobile (existing behavior)
- BforBank: 2 columns, shorter grid
- WattHunter: phones stack/shrink naturally

- [ ] **Step 5: Commit all remaining changes (if any tweaks were needed)**

```bash
git add -A
git commit -m "fix: visual QA adjustments for CSS mockups"
```
