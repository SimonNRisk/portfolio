"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function ScrollArrow() {
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter();

  const scrollToAbout = () => {
    router.push("#about");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      scrollToAbout();
      setIsVisible(false);
    }, 11000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
      <button onClick={scrollToAbout} className="group cursor-pointer transition-all duration-300 hover:scale-110">
        <div className="animate-bounce-5-times">
          <svg
            className="w-8 h-8 text-gray-600 group-hover:text-gray-900 transition-colors duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </button>
    </div>
  );
}
