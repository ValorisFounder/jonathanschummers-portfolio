import Image from "next/image";
import { Tag } from "@/components/tag";
import type { Project } from "@/lib/data";

export function ProjectCardFeatured({ project }: { project: Project }) {
  return (
    <a
      href={`/work/${project.slug}`}
      className="hover-subtle block border-b border-border px-xl py-xl max-md:px-md md:max-lg:px-lg"
    >
      <div className="grid gap-lg md:grid-cols-2 md:items-center">
        <div>
          <h3 className="font-display text-h3 font-bold tracking-h3 leading-h3 text-text-primary">
            {project.title}
          </h3>
          {project.description && (
            <p className="mt-sm font-body text-body leading-body text-text-secondary max-w-[500px]">
              {project.description}
            </p>
          )}
          <p className="mt-md font-display text-h2 font-bold tracking-h2 leading-h2 text-text-primary">
            {project.metric}
          </p>
          <div className="mt-md flex flex-wrap gap-xs">
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </div>

        {project.image && (
          <div className="flex justify-center md:justify-end">
            <Image
              src={project.image}
              alt={project.slug}
              width={560}
              height={380}
              className="object-cover"
            />
          </div>
        )}
      </div>
    </a>
  );
}
