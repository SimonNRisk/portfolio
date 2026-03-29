import MouseParticles from "@/components/MouseParticles";
import AnimatedText from "@/components/AnimatedText";
import { ScrollArrow } from "@/components/ScrollArrow";
import { NotARobotContact } from "@/components/NotARobotContact";

type HeroSectionProps = {
  revealedEmail: string | null;
  onContactClick: () => void;
  showHumanOnlyHint: boolean;
};

export default function HeroSection({ revealedEmail, onContactClick, showHumanOnlyHint }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-4">
      <MouseParticles />
      <div className="max-w-4xl mx-auto relative z-20 flex w-full flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gray-900 tracking-tight leading-tight">
          <AnimatedText text="Hello, I'm Simon" />
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
          <AnimatedText
            text="Welcome to my portfolio! This is where I (somewhat infrequently) publish the projects that I've finished and the coolest thing I'm working on"
            className="delay-1000"
            speed={10}
          />
        </p>
        <br />
        <p className="text-xl md:text-2xl text-gray-600 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
          <AnimatedText text="Verify you're a human to get in touch!" className="delay-1000" speed={15} />
        </p>
        <div className="flex flex-col items-center gap-3">
          <NotARobotContact
            email={revealedEmail ?? ""}
            verified={revealedEmail !== null}
            onRequestChallenge={onContactClick}
            showHumanHint={showHumanOnlyHint && revealedEmail === null}
          />
        </div>
      </div>
      <ScrollArrow />
    </section>
  );
}
