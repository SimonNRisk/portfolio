export interface TimelineData {
  title: string;
  company: string;
  details: string;
  year: string;
  startDate: string; // YYYY-MM-DD format
  endDate: string; // YYYY-MM-DD format or "present"
}

export const timelineData: TimelineData[] = [
  // Professional Experience Only
  {
    title: "Software Engineer",
    company: "Botpress",
    details:
      "Currently working as a Software Engineer at Botpress, focusing on AI-powered conversational solutions and chatbot development.",
    year: "Sept 2025 - Present",
    startDate: "2025-09-01",
    endDate: "2027-05-01",
  },
  {
    title: "Software Engineering Intern",
    company: "Loop Financial",
    details:
      "Spent summer '25 at Loop Financial as a Software Engineering Intern. Worked across the stack with TypeScript, React, Ruby on Rails, and GraphQL. Treated like a regular member of the engineering team - did a few weeks as the on-call engineer, led development of high-impact features, and ran daily syncs.",
    year: "May 2025 - Sept 2025",
    startDate: "2025-05-01",
    endDate: "2025-09-01",
  },
  {
    title: "Project Manager",
    company: "CREO Solutions",
    details:
      "Currently serving as Project Manager (previously Software Consultant) at CREO Solutions, where I've led the development of full-stack, AI-integrated products for real-world clients. Leading teams and delivering solutions that make a real impact.",
    year: "Mar 2024 - Present",
    startDate: "2024-03-01",
    endDate: "2027-05-01",
  },
];

// Timeline constants
const TIMELINE_START = new Date("2023-01-01");
const TIMELINE_END = new Date("2027-05-01");

// Function to sort timeline data chronologically
export function getSortedTimelineData(): TimelineData[] {
  return timelineData.sort((a, b) => {
    const dateA = new Date(a.startDate);
    const dateB = new Date(b.startDate);
    return dateA.getTime() - dateB.getTime();
  });
}
