import { redirect } from "next/navigation";
import { getDefaultLearningSlug } from "@/content/learning/registry";

export default function LearningIndexPage() {
  redirect(`/learning/${getDefaultLearningSlug()}`);
}
