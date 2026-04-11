/**
 * One file per topic under `posts/`. Register it in `registry.ts`.
 * Each topic is its own route: `/learning/<slug>`.
 */

export type LearningFigureBlock = {
  type: "figure";
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

export type LearningMermaidBlock = {
  type: "mermaid";
  diagram: string;
  caption?: string;
};

export type LearningCodeBlock = {
  type: "code";
  /** Shiki / TextMate id, e.g. `typescript`, `bash`, `json` (see highlightLearningCode.ts aliases). */
  language: string;
  code: string;
  caption?: string;
};

export type LearningBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "list"; ordered: boolean; items: string[] }
  | LearningFigureBlock
  | LearningMermaidBlock
  | LearningCodeBlock;

/** A single learning page (sidebar entry + `/learning/[slug]`). */
export type LearningPost = {
  slug: string;
  navGroup: string;
  navLabel: string;
  kicker: string;
  title: string;
  subtitle?: string;
  intro?: string;
  blocks: LearningBlock[];
};
