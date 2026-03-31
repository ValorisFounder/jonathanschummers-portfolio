import { projects } from "@/lib/data";
import { ProjectCardCompact } from "@/components/project-card-compact";
export function ProjectsCompact() {
  const compact = projects.filter((p) => p.type === "compact");

  return (
    <section>
      {compact.map((project) => (
        <ProjectCardCompact key={project.slug} project={project} />
      ))}
    </section>
  );
}
