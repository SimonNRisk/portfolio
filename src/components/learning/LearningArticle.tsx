import type { LearningPost } from "@/content/learning/types";
import { learningContentMeasure } from "./contentMeasure";
import { LearningBlocks } from "./LearningBlocks";

type LearningArticleProps = {
  post: LearningPost;
};

export function LearningArticle({ post }: LearningArticleProps) {
  return (
    <article className="rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm sm:p-8 md:p-10 lg:p-12">
      <header className="mb-10 border-b border-gray-100 pb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-400">{post.kicker}</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">{post.title}</h1>
        {post.subtitle ? (
          <p className="mt-2 text-lg font-medium text-gray-600 sm:text-xl">{post.subtitle}</p>
        ) : null}
        {post.intro ? (
          <p className={`mt-4 text-sm leading-relaxed text-gray-500 sm:text-[15px] ${learningContentMeasure}`}>
            {post.intro}
          </p>
        ) : null}
      </header>

      <div className="min-h-[40vh]">
        <LearningBlocks blocks={post.blocks} />
      </div>
    </article>
  );
}
