"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DonutSection from "@/components/DonutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import { TriviaBlob } from "@/components/TriviaBlob";
import { Trivia } from "@/components/Trivia";

export default function Home() {
  const [clickedTrivia, setClickedTrivia] = useState(false);

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <ParticleBackground />
      </div>

      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <AboutSection />
        {!clickedTrivia && <TriviaBlob onClick={() => setClickedTrivia(true)} />}
        {clickedTrivia && <Trivia onClose={() => setClickedTrivia(false)} />}
        <DonutSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
