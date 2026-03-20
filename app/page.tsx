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
