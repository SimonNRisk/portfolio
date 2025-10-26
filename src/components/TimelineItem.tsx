"use client";

import { useState } from "react";

interface TimelineItemProps {
  title: string;
  company: string;
  companyUrl: string;
  details: string;
  year: string;
  image: string;
}

export function TimelineItem({ title, company, companyUrl, details, year, image }: TimelineItemProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="flex items-start justify-between">
      {/* Left side - Date */}
      <div className="flex-1 flex justify-end pr-8">
        <div className="text-right flex items-center" style={{ height: "48px", paddingTop: "16px" }}>
          <div className="text-sm font-medium text-gray-500">{year}</div>
        </div>
      </div>

      {/* Timeline dot */}
      <div
        className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"
        style={{ marginTop: "16px" }}
      ></div>

      {/* Right side - Company info */}
      <div className="flex-1 pl-8">
        <div
          className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 w-96 ${isExpanded ? "min-h-32" : "h-32"}`}
        >
          <div className="p-4 flex flex-col">
            {/* Always visible: Icon + Title */}
            <div className="flex items-center mb-3">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-3 flex-shrink-0 border border-gray-200">
                <img src={image} alt={`${company} logo`} className="w-8 h-8 object-contain" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 truncate">{title}</h3>
            </div>

            {/* Expandable content */}
            {isExpanded && (
              <div className="space-y-2 mb-3">
                <a
                  href={companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-blue-600"
                >
                  {company}
                </a>
                <div className="text-gray-600 text-sm leading-relaxed">{details}</div>
              </div>
            )}

            {/* Toggle button */}
            <div className="mt-auto">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200"
              >
                {isExpanded ? "Show Less" : `${company}`}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
