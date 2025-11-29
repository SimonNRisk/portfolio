export interface TimelineData {
  title: string;
  company: string;
  companyUrl: string;
  details: string;
  year: string;
  image: string; // Path to company logo/image
  startDate: string; // YYYY-MM-DD format
  endDate: string; // YYYY-MM-DD format or "present"
  type: "professional" | "volunteer" | "education";
}

export const timelineData: TimelineData[] = [
  // Professional Experience Only
  {
    title: "Software Engineer Intern",
    company: "Super.com",
    companyUrl: "https://www.super.com/",
    details: "Incoming Software Engineer Intern at Super.com (W26).",
    year: "Incoming W26",
    image: "/images/companies/super.com.png",
    startDate: "2026-01-01",
    endDate: "2026-05-01",
    type: "professional",
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
    type: "professional",
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
    type: "professional",
  },
  {
    title: "Senior Software Developer",
    company: "QTMA",
    companyUrl: "https://www.instagram.com/queenstechmedia",
    details:
      "Senior Software Developer at Queen's Technology & Media Association, a startup incubator for Queen's students. I run our engineering team of 5 students",
    year: "March 2025 - Present",
    image: "/images/companies/qtma.png",
    startDate: "2025-03-01",
    endDate: "present",
    type: "volunteer",
  },
  {
    title: "Project Manager",
    company: "CREO Solutions",
    companyUrl: "https://www.creosolutions.ca/",
    details:
      "Current Project Manager, previous Software Engineer at CREO Solutions. CREO Solutions is Canada's premier student-run consultancy founded in 2004 at Queen’s University - we consult for SMBs, and I specifically work on digital transformation projects.",
    year: "March 2024 - Present",
    image: "/images/companies/creo.png",
    startDate: "2024-03-01",
    endDate: "present",
    type: "volunteer",
  },
  {
    title: "Venture Founder",
    company: "Inqubate",
    companyUrl: "https://www.inqubate.ca/",
    details: "I built a speech therapy startup that generated over $2K in revenue.",
    year: "May 2024 - May 2025",
    image: "/images/companies/inqubate.png",
    startDate: "2024-05-01",
    endDate: "2025-05-01",
    type: "volunteer",
  },
  {
    title: "Applied Math & Engineering",
    company: "Queen's University",
    companyUrl: "https://www.queensu.ca/",
    details: "I'm currently a third-year Applied Mathematics & Engineering student at Queen's University.",
    year: "2023-2027",
    image: "/images/companies/queens.png",
    startDate: "2023-09-01",
    endDate: "2027-04-01",
    type: "education",
  },
  {
    title: "High School Student",
    company: "Kingston Collegiate & Vocational Institute",
    companyUrl: "https://en.wikipedia.org/wiki/Kingston_Collegiate_and_Vocational_Institute",
    details:
      "I attended the oldest secondary school in Canada (pretty cool) in Kingston, Ontario. I did IB certificate with HLs in Math, Physics, and Chemistry.",
    year: "2019-2023",
    image: "/images/companies/kcvi.png",
    startDate: "2019-09-01",
    endDate: "2023-06-01",
    type: "education",
  },
];

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
