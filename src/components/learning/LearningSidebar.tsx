"use client";

import { useEffect, useState } from "react";
import type { LearningNavSection } from "./types";

type LearningNavTreeProps = {
  sections: LearningNavSection[];
  onNavigate?: () => void;
};

function LearningNavTree({ sections, onNavigate }: LearningNavTreeProps) {
  return (
    <nav aria-label="Learning topics" className="space-y-8">
      {sections.map((section) => (
        <div key={section.title}>
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-400">
            {section.title}
          </p>
          <ul className="space-y-0.5 border-l border-gray-200">
            {section.items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => onNavigate?.()}
                  className="block border-l border-transparent py-1.5 pl-4 text-sm text-gray-600 transition-colors hover:border-gray-300 hover:text-gray-900 -ml-px"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}

type LearningSidebarProps = {
  sections: LearningNavSection[];
};

export function LearningSidebar({ sections }: LearningSidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <div className="lg:hidden">
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:border-gray-300 hover:bg-gray-50"
        >
          <span className="text-gray-500" aria-hidden>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </span>
          Topics
        </button>
      </div>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Learning navigation"
        >
          <button
            type="button"
            className="absolute inset-0 bg-gray-900/20 backdrop-blur-[2px]"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          />
          <aside className="absolute left-0 top-0 flex h-full w-[min(20rem,88vw)] flex-col border-r border-gray-200 bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3">
              <span className="text-sm font-semibold text-gray-900">On this page</span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="rounded-md p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-800"
                aria-label="Close"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="overflow-y-auto px-4 py-5">
              <LearningNavTree sections={sections} onNavigate={() => setMobileOpen(false)} />
            </div>
          </aside>
        </div>
      )}

      <aside className="hidden w-60 shrink-0 lg:block xl:w-64">
        <div className="sticky top-28 pr-1">
          <LearningNavTree sections={sections} />
        </div>
      </aside>
    </>
  );
}
