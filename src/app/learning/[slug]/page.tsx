import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LearningArticle } from "@/components/learning/LearningArticle";
import { getLearningPost, LEARNING_POSTS } from "@/content/learning/registry";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return LEARNING_POSTS.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = getLearningPost(params.slug);
  if (!post) return { title: "Not found" };
  return {
    title: post.title,
    description: post.intro ?? post.title,
  };
}

export default function LearningPostPage({ params }: PageProps) {
  const post = getLearningPost(params.slug);
  if (!post) notFound();

  return <LearningArticle post={post} />;
}
