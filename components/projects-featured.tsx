import { projects } from "@/lib/data";
import { ProjectCardFeatured } from "@/components/project-card-featured";

export function ProjectsFeatured() {
  const featured = projects.filter((p) => p.type === "featured");

  return (
    <section id="work">
      {featured.map((project) => (
        <ProjectCardFeatured key={project.slug} project={project} />
      ))}
    </section>
  );
}
