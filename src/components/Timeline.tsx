"use client";

import { useState } from "react";
import { TimelineItem } from "./TimelineItem";

interface TimelineData {
  title: string;
  company: string;
  companyUrl: string;
  details: string;
  year: string;
  image: string;
  startDate: string;
  endDate: string;
  type: "professional" | "volunteer" | "education";
}

interface TimelineProps {
  data: TimelineData[];
}

export function Timeline({ data }: TimelineProps) {
  const [filterType, setFilterType] = useState<"professional" | "volunteer" | "education">("professional");

  const filteredData = data.filter((item) => item.type === filterType);

  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Filter dropdown */}
      <div className="mb-8 flex justify-center">
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value as "professional" | "volunteer" | "education")}
          className="px-4 py-2 text-black border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="professional">Professional</option>
          <option value="volunteer">Volunteer</option>
          <option value="education">Education</option>
        </select>
      </div>

      {/* Central line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300"></div>

      {/* Timeline items */}
      <div className="space-y-8">
        {filteredData.map((item, index) => (
          <TimelineItem
            key={index}
            title={item.title}
            company={item.company}
            companyUrl={item.companyUrl}
            details={item.details}
            year={item.year}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}
