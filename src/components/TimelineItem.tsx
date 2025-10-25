"use client";

import { useState } from "react";

interface TimelineItemProps {
  title: string;
  company: string;
  details: string;
  year: string;
}

export function TimelineItem({ title, company, details, year }: TimelineItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

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
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 truncate">{title}</h3>
            </div>

            {/* Expandable content */}
            {isExpanded && (
              <div className="space-y-2 mb-3">
                <div className="text-sm font-medium text-blue-600">{company}</div>
                <div className="text-gray-600 text-sm leading-relaxed">{details}</div>
              </div>
            )}

            {/* Toggle button */}
            <div className="mt-auto">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200"
              >
                {isExpanded ? "Show Less" : "Learn More"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
