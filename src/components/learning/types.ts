export type LearningNavItem = {
  id: string;
  /** Short label shown in the sidebar (typically 1–3 words). */
  label: string;
};

export type LearningNavSection = {
  title: string;
  items: LearningNavItem[];
};
