import type { LearningPost } from "./types";
import { nPlusOnePost } from "./posts/n-plus-one";
import { welcomePost } from "./posts/welcome";

/** Ordered list — sidebar and static routes are derived from this. */
export const LEARNING_POSTS: LearningPost[] = [welcomePost, nPlusOnePost];

const bySlug = new Map(LEARNING_POSTS.map((post) => [post.slug, post]));

export function getLearningPost(slug: string): LearningPost | undefined {
  return bySlug.get(slug);
}

export function getDefaultLearningSlug(): string {
  return LEARNING_POSTS[0]?.slug ?? "welcome";
}
