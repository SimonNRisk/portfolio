export type LearningNavItem = {
  slug: string;
  /** Short label in the sidebar (typically a few words). */
  label: string;
};

export type LearningNavSection = {
  title: string;
  items: LearningNavItem[];
};
