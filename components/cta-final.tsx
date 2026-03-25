import { Section } from "@/components/blueprint-shell";
import { Button } from "@/components/button";
import { IconLinkedIn } from "@/components/icons";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";

export function CtaFinal() {
  return (
    <Section id="contact" className="!py-3xl max-md:!py-xl">
      <div className="max-w-[600px]">
        <h2 className="font-display text-h2 font-bold tracking-h2 leading-h2 text-text-primary">
          Have a project? Let&apos;s talk.
        </h2>
        <p className="mt-sm font-body text-body-sm text-text-secondary">
          Available for freelance projects starting May 2026
        </p>
        <div className="mt-lg flex flex-wrap items-center gap-md">
          <Button href="https://calendly.com/jonathan-schummers/discovery-call">
            Book a call
            <ArrowUpRightIcon className="ml-xs size-3.5" />
          </Button>
          <a
            href="mailto:jonathan.schummers@gmail.com"
            className="font-body text-body-sm text-text-secondary underline underline-offset-[3px] transition-colors duration-[var(--dur-fast)] ease-out [@media(hover:hover){&:hover}]:text-text-primary"
          >
            jonathan.schummers@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/jonathanschummers"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary transition-colors duration-[var(--dur-fast)] ease-out [@media(hover:hover){&:hover}]:text-text-primary"
            aria-label="LinkedIn"
          >
            <IconLinkedIn size={18} />
          </a>
        </div>
      </div>
    </Section>
  );
}
