import SkillCard from "@/components/SkillCard";
import { Skills } from "@/data/SkillsData";
import { CodedToday } from "@/components/CodedToday";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-32 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center text-gray-900 tracking-tight">Skills & Expertise</h2>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto leading-relaxed text-lg">
          My love for engineering spans across many different sectors. <CodedToday />
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {Skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
