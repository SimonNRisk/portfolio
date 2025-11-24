export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  projectUrl: string;
  deployedUrl?: string;
}

export const projects: Project[] = [
  {
    title: "LinkedIn Content Generation & Analytics Platform",
    description:
      "A full-stack platform for generating, scheduling, and analyzing LinkedIn content. Built with Next.js frontend and FastAPI backend, featuring real-time API communication, OpenAI integration, and LinkedIn OAuth authentication.",
    imageUrl: "/images/astro.png",
    technologies: ["Next.js", "FastAPI", "TypeScript", "Python", "OpenAI API", "LinkedIn OAuth"],
    projectUrl: "https://github.com/SimonNRisk/qtma25",
    deployedUrl: "https://qtma25.vercel.app/",
  },
  {
    title: "Accountability Buddy",
    description:
      "To help keep myself productive, I built a website with Typescript, Next.js, and Firebase, that shows the live status of my daily checklist (resetting daily via a cron job). Friends can sign up with their email and recieve emails when I fail to get my stuff done on-time.",
    imageUrl: "/images/acc.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Cron jobs", "Sendgrid", "Firebase"],
    projectUrl: "https://github.com/SimonNRisk/accountability-buddy",
    deployedUrl: "https://accountability-buddy-opal.vercel.app/",
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
