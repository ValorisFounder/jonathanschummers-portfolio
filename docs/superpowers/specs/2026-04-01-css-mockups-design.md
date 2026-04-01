# CSS Mockups & Interactions — Homepage

**Date:** 2026-04-01
**Status:** Approved

---

## Context

The homepage currently shows flat images in project cards. This spec adds CSS device mockups (browser frames, iPhone frames) and hover interactions to give the portfolio a premium, interactive feel — without external dependencies or Figma exports.

The layout structure (featured + compact cards) stays unchanged. Only the visual treatment of project images changes.

---

## Components

### 1. `<BrowserFrame>` — macOS-style browser mockup

**Structure:**
```
┌─────────────────────────────────┐
│ ● ● ●   [ url-bar-text      ]  │  ← chrome bar
├─────────────────────────────────┤
│                                 │
│         {children}              │  ← viewport (img, scrollable content, etc.)
│                                 │
└─────────────────────────────────┘
```

**Props:**
- `url: string` — text displayed in the URL bar
- `children: ReactNode` — viewport content
- `className?: string` — passed to the outer wrapper

**Styling (design system tokens):**
- Outer: `rounded-[12px]` (no existing radius token at 12px — hardcoded), `overflow-hidden`, shadow `0 8px 32px rgba(0,0,0,0.08)`
- Chrome bar: `bg-surface`, `border-b border-border`, padding `12px 16px`, flex row
- Traffic dots: 3 circles 10px, hard-coded colors `#ef4444` / `#f59e0b` / `#22c55e` (standard macOS, not design system)
- URL bar: `bg-background`, `rounded-md`, `text-tertiary`, `text-[12px]`, padding `6px 12px`
- Viewport: no fixed height by default — the parent controls sizing

**Dark mode:**
- Chrome bar bg: `surface` token (zinc-800 in dark)
- URL bar bg: `bg` token (zinc-950 in dark)
- Dots stay the same colors

---

### 2. `<IPhoneFrame>` — iPhone device mockup

**Structure:**
```
┌──────────────────────┐
│    ┌──────────┐      │  ← dynamic island (centered pill)
│    └──────────┘      │
│  ┌──────────────┐    │
│  │              │    │
│  │  {children}  │    │  ← viewport (border-radius clipped)
│  │              │    │
│  └──────────────┘    │
│       ────           │  ← home indicator (optional)
└──────────────────────┘
```

**Props:**
- `children: ReactNode` — viewport content (screenshot image)
- `showHomeIndicator?: boolean` — default `false`
- `className?: string`

**Styling:**
- Outer: `bg-zinc-900` (light) / `bg-zinc-800` (dark), `rounded-[28px]`, padding `8px`, subtle shadow
- Dynamic Island: `w-[72px] h-[20px]`, `bg-black`, `rounded-full`, centered, `z-10`, negative margin to overlap viewport top
- Viewport: `rounded-[20px]`, `overflow-hidden`
- Home indicator (when shown): `w-[80px] h-[4px]`, `bg-white`, `rounded-full`, centered, `mt-2 mb-1`

**Dark mode:**
- Outer bg stays `zinc-900` / `zinc-800` — the device body is always dark regardless of site theme
- Dynamic Island stays black

---

## Interactions

### 3. Scroll-on-Hover — NOD project

Applied to the NOD featured card's `<BrowserFrame>`. Valoris also gets a `<BrowserFrame>` (static, no scroll interaction) once a real screenshot replaces the current placeholder image.

**Behavior:**
- Viewport has a fixed height (matches card image area, ~320px)
- The screenshot image is taller than the viewport
- On hover: the image translates up to reveal the rest
- On mouse leave: returns to top

**CSS:**
```
.scroll-viewport {
  height: 320px;  /* or whatever fits the card */
  overflow: hidden;
}

.scroll-content {
  transition: transform 6s cubic-bezier(0.25, 0.1, 0.25, 1);
}

.scroll-viewport:hover .scroll-content {
  transform: translateY(calc(-100% + 320px));
}
```

- Duration: `6s` — very slow, cinematic
- Easing: `cubic-bezier(0.25, 0.1, 0.25, 1)` — smooth deceleration
- URL bar text: `app.nod-factory.com/dashboard`

---

### 4. Perspective-on-Hover — Compact card thumbnails

Applied to Spie Batignolles, SmartIntegrity, Malaama compact card thumbnails.

**Behavior:**
- Default: image is flat (`transform: none`)
- On card hover: image tilts into 3D perspective
- On mouse leave: returns to flat

**CSS:**
```
.perspective-container {
  perspective: 1200px;
}

.perspective-target {
  transition: transform 0.4s ease;
}

.card:hover .perspective-target {
  transform: rotateY(8deg) rotateX(2deg);
}
```

- Angles: `rotateY(8deg) rotateX(2deg)` — subtle, premium
- Duration: `0.4s ease` — matches design system `--dur-slow`
- The `<BrowserFrame>` wrapping the screenshot is the perspective target

---

### 5. BforBank Mobile Grid — 4-column animated showcase

Replaces the current BforBank featured card image with an animated grid of mobile screens.

**Structure:**
```
┌─────────────────────────────────────────────────┐
│  [col1]   [col2]   [col3]   [col4]             │
│  ┌───┐    ┌───┐    ┌───┐    ┌───┐              │
│  │ A │    │ D │    │ G │    │ J │              │
│  └───┘    └───┘    └───┘    └───┘              │
│  ┌───┐    ┌───┐    ┌───┐    ┌───┐              │
│  │ B │    │ E │    │ H │    │ K │              │
│  └───┘    └───┘    └───┘    └───┘              │
│  ┌───┐    ┌───┐                                │
│  │ C │    │ F │    (some cols have 2, some 3)   │
│  └───┘    └───┘                                │
└─────────────────────────────────────────────────┘
```

**Container:**
- `bg-zinc-900` (light) / `bg-zinc-800` (dark), `rounded-[12px]`, `overflow-hidden`
- Height: `480px` fixed
- Padding: `24px`
- Flex row, `gap: 16px`

**Columns:**
- Each column: flex column, `gap: 16px`, `flex: 1`
- Initial vertical offsets (staggered) to create visual rhythm:
  - Col 1: `translateY(0)`
  - Col 2: `translateY(-60px)`
  - Col 3: `translateY(-30px)`
  - Col 4: `translateY(-80px)`

**Hover animation:**
- On container hover, columns shift:
  - Col 1: `translateY(-100px)` (up)
  - Col 2: `translateY(40px)` (down)
  - Col 3: `translateY(-80px)` (up)
  - Col 4: `translateY(30px)` (down)
- `transition: transform 5s cubic-bezier(0.25, 0.1, 0.25, 1)` — slow, subtle
- Total movement: ~100-120px max per column (roughly half a phone screen)

**Screen assignment (matching Figma reference):**
Based on the screenshots provided and the Figma grid layout:

| Col 1 | Col 2 | Col 3 | Col 4 |
|-------|-------|-------|-------|
| Offer selection (`IMG_2622.webp`) | Category select (`IMG_2625.webp`) | Home/Balance (`Frame 1597884611.webp`) | Country select (`IMG_2636.webp`) |
| Password step (`IMG_2632.webp`) | Card view (`IMG_2623.webp`) | Transactions (`IMG_2628.webp`) | Transfer confirm (`IMG_3216 3.webp`) |
| | Email step (`IMG_2635.webp`) | Fiscal info (`IMG_2636-1.webp`) | Category select 2 (`IMG_2625.webp`) |

Each screen is wrapped in `<IPhoneFrame showHomeIndicator={false}>`.

---

## WattHunter — About Section

- 3 screenshots already available: `IMG_6432.webp`, `IMG_6433.webp`, `IMG_6438.webp`
- Each wrapped in `<IPhoneFrame showHomeIndicator={true}>`
- Layout: horizontal row of 2-3 phones (matching current About section design)
- No hover animation for now

---

## Token Additions

None required. All styling uses existing design system tokens.

The only "off-system" colors are the macOS traffic light dots (`#ef4444`, `#f59e0b`, `#22c55e`) — these are standard and expected for a browser mockup.

---

## Files to Create/Modify

**New components:**
- `components/browser-frame.tsx`
- `components/iphone-frame.tsx`
- `components/bforbank-showcase.tsx` — the 4-column animated grid (BforBank-specific)

**Modified components:**
- `components/project-card-featured.tsx` — integrate `<BrowserFrame>` for NOD/Valoris, `<BforBankShowcase>` for BforBank
- `components/project-card-compact.tsx` — integrate `<BrowserFrame>` + perspective hover for thumbnail
- `components/about.tsx` — integrate `<IPhoneFrame>` for WattHunter screenshots

**Data changes:**
- `lib/data.ts` — add `url` field to Project interface for browser frame URL bar text; add `mockupType` to distinguish rendering behavior

---

## Responsive Considerations

- **Desktop (>1024px):** Full mockup experience with all hover interactions
- **Tablet (768-1024px):** Mockups scale down proportionally, hover still works
- **Mobile (<768px):** 
  - BforBank grid: reduce to 2 columns, shorter height
  - Scroll-on-hover (NOD): disable on touch (no hover), show static top of page
  - Perspective hover (compact cards): disable on touch
  - All device frames scale proportionally

---

## What This Spec Does NOT Cover

- Case study pages (etape 4-5) — mockups there will reuse these same components
- Video MP4 in mockups — not planned for now
- Horizontal accordion for testimonials — explicitly excluded
- Layout changes — the Featured + Grid structure stays as-is
