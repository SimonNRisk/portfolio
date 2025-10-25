"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import ProjectCard from "@/components/ProjectCard";
import SkillCard from "@/components/SkillCard";
import MouseParticles from "@/components/MouseParticles";
import AnimatedText from "@/components/AnimatedText";
import AsciiDonut from "@/components/AsciiDonut";
import { SimonPhotoButton } from "@/components/SimonPhotoButton";
import { ScrollArrow } from "@/components/ScrollArrow";
import { CodedToday } from "@/components/CodedToday";

export default function Home() {
  const projects = [
    {
      title: "OpenAI Sales Email Chrome Extension",
      description:
        "A sleek Gmail Chrome extension that drafts personalized sales emails using OpenAI, Clearbit, and RAG-enhanced templates-designed with a clean UI and deployed to 40+ users",
      imageUrl: "/images/cold_email.jpg",
      technologies: ["Chrome Extension", "OpenAI API", "Clearbit API", "RAG", "TypeScript"],
      projectUrl: "https://github.com/SimonNRisk/automating_sales_emails",
    },
    {
      title: "Accountability Buddy",
      description:
        "To help keep myself productive, I built a website with Typescript, Next.js, and Firebase, that shows the live status of my daily checklist (resetting daily via a cron job). Friends can sign up with their email and recieve emails when I fail to get my stuff done on-time.",
      imageUrl: "/images/acc.png",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Cron jobs", "Sendgrid", "Firebase"],
      projectUrl: "https://accountability-buddy-opal.vercel.app/",
    },
    {
      title: "Music Genre Classifier",
      description:
        'An modern, user-friendly iOS application that listens to real-time songs, identifies their genres and "vibe", and saved them for periodic vibe overviews',
      imageUrl: "/images/audio.jpg",
      technologies: ["SwiftUI", "RestAPI", "Geometry-Based Models", "Tree-Based Models"],
      projectUrl: "https://github.com/IsaiahIruoha/music-genre-detector-ios",
    },
  ];

  const skills = [
    {
      name: "Frontend Development",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      description:
        "Building responsive and interactive web applications using modern technologies like React, Next.js, and TypeScript.",
    },
    {
      name: "Backend Development",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
          />
        </svg>
      ),
      description:
        "I've developed robust and scalable server-side apps and features with Ruby on Rails, Node.js, Express, and various databases.",
    },
    {
      name: "AI/ML Research",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      ),
      description:
        "Applying mathematical modeling and optimization techniques to build and improve machine learning and AI systems.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="fixed inset-0 pointer-events-none z-0">
        <ParticleBackground />
      </div>
      <MouseParticles />
      <div className="relative z-10">
        <Navbar />

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center text-center px-4">
          <div className="max-w-4xl mx-auto">
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

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <SimonPhotoButton />
            <h2 className="text-5xl font-bold mb-6 text-gray-900">
              <AnimatedText text="About Me" />
            </h2>
            <p className="text-gray-600 dark:text-gray-600 text-lg leading-relaxed">
              I'm currently an Applied Mathematics & Engineering student at Queen's University, specializing in Computer
              Engineering. I really like software, and I'm really passionate about my work doing something good for the
              world - whatever that may be.
              <br />
              <br />I spent summer `25 at
              <a
                href="https://www.bankonloop.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline ml-1"
              >
                Loop Financial
              </a>{" "}
              as a <strong>Software Engineering Intern</strong>. I had tons of fun, and worked across the stack with{" "}
              <strong>Typescript, React, Ruby on Rails, and GraphQL</strong>. During my time @ Loop, I was treated like
              a regular member of the engineering team - I did a few weeks as the on-call engineer, led the development
              of a high-impact few features, and ran our daily syncs.
              <br />
              <br />
              At Queen's, I'm a <strong>Project Manager</strong> (previously Software Consultant) at
              <a
                href="https://www.creosolutions.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline ml-1"
              >
                CREO Solutions
              </a>
              , where I've led the development of full-stack, AI-integrated products for real-world clients. I'm also a
              member of
              <a
                href="https://www.qtma.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline mx-1"
              >
                QTMA
              </a>
              , Queen's leading product incubator.
              <br />
              <br />
              Previously, I built a speech therapy startup that generated over <strong>$2K in revenue</strong>, and I’m
              proud to say I’m a <strong>4× intramural volleyball champion</strong>.
            </p>
          </div>
        </section>

        {/* Donut Section */}
        <section className="py-12 px-4">
          <div className="flex flex-col items-center">
            <AsciiDonut />
            <div className="flex items-center gap-1 text-sm text-gray-600 mt-2 animate-bounce">
              <span className="text-lg">↑</span>
              <span className="italic font-medium">drag me</span>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-center text-gray-900 tracking-tight">
              <AnimatedText text="Featured Projects" />
            </h2>
            <p className="text-gray-600 text-center mb-4 max-w-2xl mx-auto leading-relaxed text-lg">
              <AnimatedText text="Here are some of my recent projects that showcase my skills and experience building cool stuff with software." />
            </p>
            <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto leading-relaxed text-lg font-semibold">
              <AnimatedText text="Click on them to see the deployed projects, a demo video, or the github repo" />
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-32 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-center text-gray-900 tracking-tight">
              <AnimatedText text="Skills & Expertise" />
            </h2>
            <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto leading-relaxed text-lg">
              <AnimatedText text="My love for engineering spans across many different sectors" />
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {skills.map((skill, index) => (
                <SkillCard key={index} {...skill} />
              ))}
            </div>
          </div>
          <CodedToday />
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-900 tracking-tight">
              <AnimatedText text="Let's Work Together" />
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              <AnimatedText text="I'm always interested in hearing about new projects and opportunities. Let's work together to create something amazing!" />
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="mailto:risk.simon@queensu.ca"
                className="inline-block px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-300 text-lg font-medium"
              >
                Contact Me
              </a>
              <a
                href="https://www.linkedin.com/in/simon-risk/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-50 transition-all duration-300 text-lg font-medium border border-gray-200 hover:border-gray-300"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
