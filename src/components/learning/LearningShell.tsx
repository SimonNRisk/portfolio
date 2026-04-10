import type { LearningNavSection } from "./types";
import { LearningSidebar } from "./LearningSidebar";

type LearningShellProps = {
  nav: LearningNavSection[];
  children: React.ReactNode;
};

export function LearningShell({ nav, children }: LearningShellProps) {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 pb-20 pt-24 sm:px-6 lg:flex-row lg:gap-8 lg:px-8 lg:pt-28 xl:max-w-[90rem] xl:gap-10 2xl:max-w-[96rem]">
      <LearningSidebar sections={nav} />
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}
