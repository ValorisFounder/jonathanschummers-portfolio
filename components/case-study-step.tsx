import type { CaseStudyStep as StepData } from "@/lib/case-studies";
import { CaseStudyContent } from "./case-study-content";
import { CaseStudyImageGrid } from "./case-study-image-grid";

interface CaseStudyStepProps {
  step: StepData;
  stepIndex: number;
  groupId: string;
  isFirstWithContent: boolean;
}

export function CaseStudyStep({
  step,
  stepIndex,
  groupId,
  isFirstWithContent,
}: CaseStudyStepProps) {
  const marginClass =
    isFirstWithContent ? "mt-lg" : stepIndex === 0 ? "" : "mt-xl";

  return (
    <div className={marginClass}>
      {stepIndex > 0 && groupId === "how" && (
        <hr className="border-t border-border/50 mb-xl" />
      )}
      <h3 className="font-display text-h3 font-bold leading-h3 tracking-h3 text-text-primary">
        {step.heading}
      </h3>
      <div className="mt-xs">
        <CaseStudyContent text={step.content} />
      </div>
      <CaseStudyImageGrid images={step.images} />
    </div>
  );
}
