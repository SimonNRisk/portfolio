import type { LearningBlock, LearningFigureBlock } from "./types";

export function h2(text: string): LearningBlock {
  return { type: "h2", text };
}

export function h3(text: string): LearningBlock {
  return { type: "h3", text };
}

/** One paragraph; use multiple `p()` entries for several paragraphs. */
export function p(text: string): LearningBlock {
  return { type: "p", text };
}

export function list(items: string[], ordered = false): LearningBlock {
  return { type: "list", ordered, items };
}

export function figure(
  src: string,
  alt: string,
  size: { width: number; height: number },
  caption?: string
): LearningFigureBlock {
  return { type: "figure", src, alt, width: size.width, height: size.height, caption };
}

/** Mermaid source (e.g. `flowchart LR` …). Renders client-side as SVG. */
export function mermaid(diagram: string, caption?: string): LearningBlock {
  return { type: "mermaid", diagram, caption };
}
