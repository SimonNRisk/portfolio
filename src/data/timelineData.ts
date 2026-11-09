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
    title: "Software Engineering Intern",
    company: "Shopify",
    companyUrl: "https://www.shopify.com/",
    details:
      "I led work on local SSD caching for an experimental Rust analytics database used for observability. By sharing token spans, streamlining serialization across the WebAssembly boundary, and skipping unnecessary AST passes, I reduced ShopifyQL memory use by 24% and end-to-end P95 latency by 18%. I also helped ship seven visualizations that 500 merchants used in their first two weeks.",
    year: "May 2026 - Sep. 2026",
    image: "/images/companies/shopify.svg",
    startDate: "2026-05-01",
    endDate: "2026-09-01",
    type: "professional",
  },
  {
    title: "Software Engineer Intern",
    company: "Super.com",
    companyUrl: "https://www.super.com/",
    details: "Worked on the cash advance platform across the stack. Launched a cross-sell experiment, cut calls to a third party services in half, and refactored our decisioning flow with event-driven architecture to reduce latency, resilience, and costs.",
    year: "Jan. 2026 - May 2026",
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
      "Was a member of the Growth Engineering team focused on GTM and revenue projects. Launched a tool for agentically determining high-revenue potential users within 1 hour of signup, and another for allowing prospects to create a customized chatbot from a single prompt, driving deals and cutting churn.",
    year: "Sep. 2025 - Jan. 2026",
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
    year: "May 2025 - Sep. 2025",
    image: "/images/companies/loop.png",
    startDate: "2025-05-01",
    endDate: "2025-09-01",
    type: "professional",
  },
  // Club Experience
  {
    title: "Quantitative Developer",
    company: "Queen's University Investment Counsel (QUIC)",
    companyUrl: "https://www.quic.ca/",
    details:
      "I was QUIC's first engineering hire in its 23-year history, building risk infrastructure for its $3.4M portfolio. I designed an event-driven risk platform in Rust that streams market and position updates through Redpanda, keeps live state in Redis, and is monitored with Prometheus and Grafana.",
    year: "Mar. 2026 - Present",
    image: "/images/companies/queens.png",
    startDate: "2026-03-01",
    endDate: "present",
    type: "volunteer",
  },
  {
    title: "Co-Chair",
    company: "QTMA",
    companyUrl: "https://www.instagram.com/queenstechmedia",
    details:
      "I co-chair QTMA, a student-run product incubator. I help oversee four product teams, recruit members, advise on product direction, and run technical workshops for a community of 50+. We won two demo days, a first in the club's history, with a RAG tool that helps small businesses create organic content.",
    year: "Mar. 2025 - Present",
    image: "/images/companies/qtma.png",
    startDate: "2025-03-01",
    endDate: "present",
    type: "volunteer",
  },
  {
    title: "Senior Software Lead",
    company: "CREO Solutions",
    companyUrl: "https://www.creosolutions.ca/",
    details:
      "I lead software at CREO Solutions, a student-run consultancy, where I built and deployed a FastAPI support agent using Azure AI Search and Azure Speech. It brings in requests through webhooks, reads documents with OCR, checks context before using tools, and can escalate conversations to HubSpot. It handles around 3,000 inquiries a month.",
    year: "Mar. 2024 - Present",
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
  // Education
  {
    title: "Applied Math & Engineering",
    company: "Queen's University",
    companyUrl: "https://www.queensu.ca/",
    details: "I'm currently a third-year Applied Mathematics & Engineering student at Queen's University. Took a gap year to work for some cool companies.",
    year: "2023-2028",
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
