import { Section } from "@/components/blueprint-shell";
import { ArrowRightIcon } from "@heroicons/react/16/solid";

export function About() {
  return (
    <Section id="about" className="!py-3xl max-md:!py-xl">
      <div className="grid gap-xl md:grid-cols-2">
        {/* Left — Parcours */}
        <div>
          <p className="font-body text-label font-semibold uppercase tracking-label text-text-secondary mb-lg">
            About
          </p>
          <div className="max-w-[500px]">
            <p className="font-body text-body leading-body text-text-primary">
              I started in user research — two master&apos;s degrees, deep in
              methodology and psychology. Then I joined TotalEnergies Digital
              Factory for 3 years, where I worked as Lead Designer in product
              squads building tools from scratch: product vision, first designs,
              user testing, iteration. Always embedded in a product team.
            </p>
            <p className="mt-sm font-body text-body leading-body text-text-primary">
              Going freelance changed everything. I went all-in on AI — not just
              for design, but for research, product thinking, and development. I
              broadened into product management and started coding what I design.
              At the same time, I began investing in real estate in Luxembourg
              and building my own products.
            </p>
          </div>
          <a
            href="#"
            className="mt-lg inline-flex items-center gap-xs font-body text-body-sm font-semibold text-text-secondary transition-colors duration-[var(--dur-fast)] ease-out [@media(hover:hover){&:hover}]:text-text-primary"
          >
            More about me
            <ArrowRightIcon className="size-3.5" />
          </a>
        </div>

        {/* Right — Passion */}
        <div>
          <p className="font-body text-label font-semibold uppercase tracking-label text-text-secondary mb-lg">
            Side project
          </p>
          <div className="max-w-[500px]">
            <p className="font-body text-body leading-body text-text-primary">
              Outside of work, I&apos;m a cycling obsessive. After 8 years
              playing fantasy cycling with the same group of friends — and 8
              years complaining about every app we tried — I decided to build my
              own.
            </p>
            <p className="mt-sm font-body text-body leading-body text-text-primary">
              WattHunter is a fantasy cycling game designed for fans who actually
              care about the sport.
            </p>
          </div>
          <div className="mt-lg flex gap-sm">
            <div className="h-[280px] w-[140px] rounded-pill border border-border bg-surface" />
            <div className="h-[280px] w-[140px] rounded-pill border border-border bg-surface" />
          </div>
        </div>
      </div>
    </Section>
  );
}
