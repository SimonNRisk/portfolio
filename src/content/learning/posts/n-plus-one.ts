import { h2, h3, list, mermaid, p } from "../helpers";
import type { LearningPost } from "../types";

export const nPlusOnePost: LearningPost = {
  slug: "n-plus-one",
  navGroup: "Queries",
  navLabel: "N+1 queries",
  kicker: "Learning",
  title: "N+1 queries",
  intro: "When an ORM issues one query per row instead of batching, latency and load spike.",
  blocks: [
    h2("What goes wrong"),
    p(
      "When an ORM runs one query for a list and then one query per row for an association, you get 1 + N database round trips. Fixing it usually means eager loading or a join-shaped query."
    ),
    h3("Typical shape"),
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
