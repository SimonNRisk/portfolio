import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Learning",
  description: "Notes and concepts I am learning and writing about.",
};

export default function LearningLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-neutral-50 text-gray-900 antialiased selection:bg-gray-200 selection:text-gray-900">
      <Navbar />
      {children}
    </div>
  );
}
