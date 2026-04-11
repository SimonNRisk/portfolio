import { code, h2, h3, list, mermaid, p } from "../helpers";
import type { LearningPost } from "../types";

export const nPlusOnePost: LearningPost = {
  slug: "n-plus-one",
  navGroup: "Queries",
  navLabel: "N+1 queries",
  kicker: "10/04/2026",
  title: "N+1 queries",
  intro: "A common database performance problem when querying related records.",
  blocks: [
    h2("Problem Introduction"),
    p(
      "Imagine you have a social media platform like simpler version of Instagram or Facebook. You'd probably have two main tables, a \"Posts\" table and a \"Users\" table. The posts table would contain all of the posts with a user FK, and the users table would contain a list of posts IDs per user. When a user first open the app, they want to see the  latest post from their friends - how is this actually achieved?"
    ),
    h3("Naive Approach"),
    p(
      "Using an ORM, you likely structure your code like the following:"
    ),
    code(
      `// Pseudocode: load posts, then load each author in a loop
const posts = await db.post.findMany({ take: 100 });

for (const post of posts) {
  post.author = await db.user.findUnique({ where: { id: post.authorId } });
}`,
      "typescript",
      "Each iteration hits the database again → N extra queries after the first."
    ),
    list(
      [
        "Load 100 records in one SELECT.",
        "Touch a relation on each row → 100 more SELECTs.",
        "Total: 101 queries.",
      ],
      false
    ),
    mermaid(
      `flowchart LR
  A[App] --> B[SELECT authors]
  B --> C[SELECT books x N]
  style C fill:#f3f4f6`,
      "Naive lazy-loading pattern"
    ),
    p(
      "Mermaid renders as SVG in the browser. Invalid diagram text shows an error where the figure would be."
    ),
  ],
};
