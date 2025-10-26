export interface TimelineData {
  title: string;
  company: string;
  companyUrl: string;
  details: string;
  year: string;
  image: string; // Path to company logo/image
  startDate: string; // YYYY-MM-DD format
  endDate: string; // YYYY-MM-DD format or "present"
}

export const timelineData: TimelineData[] = [
  // Professional Experience Only
  {
    title: "Software Engineer Intern",
    company: "Super.com",
    companyUrl: "https://www.super.com/",
    details: "Incoming Software Engineer Intern at Super.com (W25).",
    year: "Incoming W25",
    image: "/images/companies/super.com.png",
    startDate: "2026-01-01",
    endDate: "2026-05-01",
  },
  {
    title: "Software Engineer Intern",
    company: "Botpress",
    companyUrl: "https://www.botpress.com/",
    details:
      "Currently working as a Software Engineer Intern on the Growth team at Botpress, focused on GTM and revenue projects through engineering.",
    year: "Sept 2025 - Present",
    image: "/images/companies/botpress.png",
    startDate: "2025-09-01",
    endDate: "2025-12-31",
  },
  {
    title: "Software Engineer Intern",
    company: "Loop Financial",
    companyUrl: "https://www.bankonloop.com/",
    details:
      "Worked across the stack with TypeScript, React, Ruby on Rails, and GraphQL. Treated like a regular member of the engineering team - did a few weeks as the on-call engineer, led development of high-impact features, and ran daily syncs.",
    year: "May 2025 - Sept 2025",
    image: "/images/companies/loop.png",
    startDate: "2025-05-01",
    endDate: "2025-09-01",
  },
];

// Timeline constants
const TIMELINE_START = new Date("2023-01-01");
const TIMELINE_END = new Date("2027-05-01");

// Function to sort timeline data chronologically
export function getSortedTimelineData(): TimelineData[] {
  return timelineData.sort((a, b) => {
    // If both are present/ongoing, sort by start date (most recent first)
    if (a.endDate === "present" && b.endDate === "present") {
      const dateA = new Date(a.startDate);
      const dateB = new Date(b.startDate);
      return dateB.getTime() - dateA.getTime(); // Most recent first
    }

    // If only one is present, it goes first
    if (a.endDate === "present" && b.endDate !== "present") {
      return -1;
    }
    if (b.endDate === "present" && a.endDate !== "present") {
      return 1;
    }

    // For completed items, sort by start date (most recent first)
    const dateA = new Date(a.startDate);
    const dateB = new Date(b.startDate);
    return dateB.getTime() - dateA.getTime();
  });
}
