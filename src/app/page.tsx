"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DonutSection from "@/components/DonutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import { TriviaBlob } from "@/components/TriviaBlob";
import { Trivia } from "@/components/Trivia";
import { ContactCaptchaModal } from "@/components/Captcha/ContactCaptchaModal";
import { useContactReveal } from "@/hooks/useContactReveal";

export default function Home() {
  const [clickedTrivia, setClickedTrivia] = useState(false);
  const {
    contactClicked,
    openContactModal,
    closeContactModal,
    revealedEmail,
    showHumanOnlyHint,
    handleContactVerified,
    onCaptchaFail,
  } = useContactReveal();

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <ParticleBackground />
      </div>

      <div className="relative z-10">
        <Navbar />
        <HeroSection revealedEmail={revealedEmail ?? null} onContactClick={openContactModal} showHumanOnlyHint={showHumanOnlyHint} />
        <AboutSection />
        {!clickedTrivia && <TriviaBlob onClick={() => setClickedTrivia(true)} />}
        {clickedTrivia && <Trivia onClose={() => setClickedTrivia(false)} />}
        <DonutSection />
        <ProjectsSection />
        <SkillsSection />
        <Footer />

        <ContactCaptchaModal
          open={contactClicked}
          onClose={closeContactModal}
          onVerified={handleContactVerified}
          onCaptchaFail={onCaptchaFail}
        />
      </div>
    </main>
  );
}
