import { Tag } from "@/components/tag";
import type { Project } from "@/lib/data";

export function ProjectCardCompact({ project }: { project: Project }) {
  return (
    <a
      href={`/work/${project.slug}`}
      className="hover-subtle flex flex-col gap-sm border-b border-border px-xl py-lg max-md:px-md md:max-lg:px-lg md:flex-row md:items-center md:justify-between"
    >
      <div className="flex-1">
        <h3 className="font-display text-h3 font-bold tracking-h3 leading-h3 text-text-primary">
          {project.title}
        </h3>
        <div className="mt-xs flex flex-wrap gap-xs">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
      <p className="font-display text-body font-bold tracking-h2 text-text-secondary whitespace-nowrap md:text-right">
        {project.metric}
      </p>
    </a>
  );
}
