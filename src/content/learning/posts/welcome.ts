import { h2, p } from "../helpers";
import type { LearningPost } from "../types";

export const welcomePost: LearningPost = {
  slug: "welcome",
  navGroup: "Start",
  navLabel: "Welcome",
  kicker: "Learning",
  title: "Welcome",
  intro:
    "Each topic is its own page under /learning. Add a file in posts/, export a LearningPost, and append it to LEARNING_POSTS in registry.ts.",
  blocks: [
    h2("How this works"),
    p(
      "The sidebar lists all topics. Choosing one navigates to a dedicated route, so you are not scrolling through one long document."
    ),
    p("To add a page: copy an existing post file, change slug and metadata, edit blocks, then register the export in registry.ts."),
  ],
};
