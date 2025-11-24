import MouseParticles from "@/components/MouseParticles";
import AnimatedText from "@/components/AnimatedText";
import { ScrollArrow } from "@/components/ScrollArrow";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-4">
      <MouseParticles />
      <div className="max-w-4xl mx-auto relative z-20">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gray-900 tracking-tight leading-tight">
          <AnimatedText text="Hello, I'm Simon" />
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
          <AnimatedText
            text="Welcome to my portfolio! This is where I (somewhat infrequently) publish the projects that I've finished and the coolest thing I'm working on"
            className="delay-1000"
            speed={20}
          />
        </p>
      </div>
      <ScrollArrow />
    </section>
  );
}
