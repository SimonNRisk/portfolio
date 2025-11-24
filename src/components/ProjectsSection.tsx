import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projectsData";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center text-gray-900 tracking-tight">Featured Projects</h2>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto leading-relaxed text-lg">
          Hover to access the github repo (where there&apos;s usually a demo video) or click on the links to see the
          deployed projects
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
