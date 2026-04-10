import type { LearningNavSection } from "./types";

/** Sidebar entries; anchor `id` must match a section in the article. */
export const LEARNING_NAV: LearningNavSection[] = [
  {
    title: "Start",
    items: [{ id: "welcome", label: "Welcome" }],
  },
];
