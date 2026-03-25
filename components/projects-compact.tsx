import { projects } from "@/lib/data";
import { ProjectCardCompact } from "@/components/project-card-compact";
import { ArrowRightIcon } from "@heroicons/react/16/solid";

export function ProjectsCompact() {
  const compact = projects.filter((p) => p.type === "compact");

  return (
    <section>
      {compact.map((project) => (
        <ProjectCardCompact key={project.slug} project={project} />
      ))}
      <div className="px-xl py-lg max-md:px-md md:max-lg:px-lg">
        <a
          href="#"
          className="inline-flex items-center gap-xs font-body text-body-sm font-semibold text-text-secondary transition-colors duration-[var(--dur-fast)] ease-out [@media(hover:hover){&:hover}]:text-text-primary"
        >
          See all projects
          <ArrowRightIcon className="size-3.5" />
        </a>
      </div>
    </section>
  );
}
