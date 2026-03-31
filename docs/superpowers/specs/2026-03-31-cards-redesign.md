# Cards Redesign + Design System Compliance

**Date:** 2026-03-31
**Status:** Implemented

---

## Context

The portfolio homepage has two types of project cards that diverged from the Figma spec in layout structure, element order, and values. Additionally, the codebase had hardcoded values (`rounded-[4px]`, `px-[12px]`, `h-[600px]`, `max-w-[500px]`) that bypassed or contradicted the design system tokens.

This refactor achieves two things in one pass:
1. Bring both card components in line with the approved Figma design
2. Add missing tokens to `globals.css` and fix compliance in `tag.tsx`

---

## Design Decisions

### Featured Card

- **Height**: `h-[560px]` with `overflow-hidden` (was `h-[600px]`)
- **Padding**: `pt-xl2 pb-xl2 px-xl` — 72px top/bottom, 48px sides (both columns)
- **Content order**: company → title → tags → divider → description → CTA
- **Divider**: `w-1/2 h-px bg-border` — 50% of text column width, dynamic/responsive
- **Description max-width**: `max-w-lg` (512px, nearest 8px-grid Tailwind class to Figma's 500px)
- **Tag gap**: `gap-sm` (16px)
- **Inner group gap** (company + title): `gap-xs` (8px)
- **Outer column gap** (between groups): `gap-md` (24px)

### Compact Card

- **Padding**: `px-xl py-md` — 48px horizontal, 24px vertical
- **Right side**: thumbnail image `w-[236px]` — Figma-specified exception, no token
- **Content order**: company → title → tags (left) | image (right)
- **Tag gap**: `gap-sm` (16px), was `gap-xs` (8px)
- **Gap between text and image**: `gap-xl` (48px)

### Tag Component

- **Border-radius**: `rounded-md` (8px) — matches Figma, was `rounded-[4px]`
- **Padding horizontal**: `px-[10px]` — Figma exact, intentional exception off 8px grid
- **Padding vertical**: `py-[6px]` — unchanged, Figma exact

---

## Token Additions (`globals.css`)

### `:root`

```css
--sem-space-xl2: 72px;    /* 9 × 8px — featured card top/bottom padding */
--sem-radius-md: 8px;     /* tags, interactive chips */
```

### `@theme inline`

```css
--spacing-xl2: var(--sem-space-xl2);
--radius-md: var(--sem-radius-md);   /* overrides Tailwind default 6px → 8px */
```

---

## Known Exceptions (intentional, documented)

| Value | Where | Reason |
|---|---|---|
| `px-[10px]` | `tag.tsx` | Figma exact (10px), between 8px grid steps — visually correct |
| `py-[6px]` | `tag.tsx` | Figma exact (6px), between 8px grid steps — visually correct |
| `w-[236px]` | `project-card-compact.tsx` | Figma-specified thumbnail width, no token |

---

## Open: Compact Card Images

The 3 compact projects (spie-bat, smartintegrity, malaama) have no `image` in `lib/data.ts`. The thumbnail column is conditionally rendered — cards will display text-only until images are added.
