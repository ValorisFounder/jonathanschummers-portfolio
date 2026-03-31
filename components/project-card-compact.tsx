import Image from "next/image";
import { Tag } from "@/components/tag";
import type { Project } from "@/lib/data";

const DEFAULT_IMAGE = "/images/Experiences/Smartintegrity/Principal.webp";

export function ProjectCardCompact({ project }: { project: Project }) {
  const imageSrc = project.image || DEFAULT_IMAGE;

  return (
    <a
      href={`/work/${project.slug}`}
      className="hover-subtle flex gap-xl border-b border-border px-xl py-md max-md:px-md md:max-lg:px-lg"
    >
      {/* Text left */}
      <div className="flex-1 flex flex-col justify-center gap-sm">
        <div className="flex flex-col gap-xs">
          {project.company && (
            <p className="font-body text-label font-bold uppercase tracking-label text-text-secondary">
              {project.company}
            </p>
          )}
          <h3 className="font-display text-h3 font-bold tracking-h3 leading-h3 text-text-primary">
            {project.title}
          </h3>
        </div>
        <div className="flex flex-wrap gap-sm">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>

      {/* Thumbnail right */}
      <div className="w-[236px] shrink-0 py-md overflow-hidden max-md:hidden">
        <Image
          src={imageSrc}
          alt={project.title}
          width={236}
          height={135}
          className="w-full h-full object-cover"
        />
      </div>
    </a>
  );
}
