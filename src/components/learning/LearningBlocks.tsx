import type { LearningBlock } from "@/content/learning/types";
import { learningContentMeasure } from "./contentMeasure";
import { MermaidBlock } from "./MermaidBlock";

function renderBlock(block: LearningBlock, index: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2
          key={index}
          className="mt-10 scroll-mt-28 text-2xl font-semibold tracking-tight text-gray-900 first:mt-0 sm:text-[1.65rem]"
        >
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 key={index} className="mt-8 scroll-mt-28 text-lg font-semibold text-gray-900 sm:text-xl">
          {block.text}
        </h3>
      );
    case "p":
      return (
        <p
          key={index}
          className={`mt-4 text-[15px] leading-relaxed text-gray-700 first:mt-0 ${learningContentMeasure}`}
        >
          {block.text}
        </p>
      );
    case "list":
      if (block.ordered) {
        return (
          <ol
            key={index}
            className={`mt-4 list-decimal space-y-2 pl-6 text-[15px] leading-relaxed text-gray-700 marker:text-gray-400 ${learningContentMeasure}`}
          >
            {block.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        );
      }
      return (
        <ul
          key={index}
          className={`mt-4 list-disc space-y-2 pl-6 text-[15px] leading-relaxed text-gray-700 marker:text-gray-400 ${learningContentMeasure}`}
        >
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "figure":
      return (
        <figure key={index} className={`my-8 ${learningContentMeasure}`}>
          {/* eslint-disable-next-line @next/next/no-img-element -- content-defined paths from /public */}
          <img
            src={block.src}
            alt={block.alt}
            width={block.width}
            height={block.height}
            className="h-auto w-full max-w-full rounded-xl border border-gray-200 bg-gray-50 object-cover shadow-sm"
            loading="lazy"
          />
          {block.caption ? (
            <figcaption className="mt-2 text-sm text-gray-500">{block.caption}</figcaption>
          ) : null}
        </figure>
      );
    case "mermaid":
      return <MermaidBlock key={index} diagram={block.diagram} caption={block.caption} />;
    default: {
      const _exhaustive: never = block;
      return _exhaustive;
    }
  }
}

type LearningBlocksProps = {
  blocks: LearningBlock[];
};

export function LearningBlocks({ blocks }: LearningBlocksProps) {
  return <>{blocks.map((block, i) => renderBlock(block, i))}</>;
}
