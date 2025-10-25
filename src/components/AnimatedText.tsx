"use client";

import React, { useState, useEffect } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  speed?: number;
}

export default function AnimatedText({ text, className = "", speed = 50 }: AnimatedTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return <span className={`inline-block ${className}`}>{displayText}</span>;
}
