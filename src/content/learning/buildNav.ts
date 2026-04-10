import type { LearningNavSection } from "@/components/learning/types";
import type { LearningPost } from "./types";

/** Sidebar groups from post order and `navGroup` / `navLabel`. */
export function buildLearningNav(posts: LearningPost[]): LearningNavSection[] {
  const groupOrder: string[] = [];
  const byGroup = new Map<string, { slug: string; label: string }[]>();

  for (const post of posts) {
    if (!byGroup.has(post.navGroup)) {
      byGroup.set(post.navGroup, []);
      groupOrder.push(post.navGroup);
    }
    byGroup.get(post.navGroup)!.push({ slug: post.slug, label: post.navLabel });
  }

  return groupOrder.map((title) => ({
    title,
    items: byGroup.get(title)!,
  }));
}
