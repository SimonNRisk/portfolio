import { SimonPhotoButton } from "@/components/SimonPhotoButton";
import { Timeline } from "@/components/Timeline";
import { getSortedTimelineData } from "@/data/timelineData";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <SimonPhotoButton />
        <h2 className="text-5xl font-bold mb-6 text-gray-900">About Me</h2>
        <p className="text-gray-600 dark:text-gray-600 text-lg leading-relaxed mb-12">
          I&apos;m currently an Applied Mathematics & Engineering student at Queen&apos;s University, specializing in
          Computer Engineering. I really like software, and I&apos;m really passionate about my work doing something
          good for the world - whatever that may be.
        </p>
      </div>

      {/* Timeline Section */}
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">My Life</h3>
          <p className="text-gray-600 text-lg">A timeline of my professional and personal experiences</p>
        </div>
        <Timeline data={getSortedTimelineData()} />
      </div>
    </section>
  );
}
