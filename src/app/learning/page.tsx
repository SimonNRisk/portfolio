import { LearningShell } from "@/components/learning/LearningShell";
import { LEARNING_NAV } from "@/components/learning/nav-data";
import { WelcomeNote } from "@/components/learning/WelcomeNote";

export default function LearningPage() {
  return (
    <LearningShell nav={LEARNING_NAV}>
      <WelcomeNote />
    </LearningShell>
  );
}
