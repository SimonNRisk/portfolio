"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function ChatButton() {
  const [showTextBubble, setShowTextBubble] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(true);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const showBubble = () => {
      // Fade in: show bubble with fade-in animation
      setIsFadingOut(false);
      setShowTextBubble(true);

      // After 3 seconds, start fade out
      setTimeout(() => {
        setIsFadingOut(true);

        // After fade-out animation completes (0.3s), hide the bubble
        setTimeout(() => {
          setShowTextBubble(false);
        }, 300);
      }, 3000);
    };

    // Show immediately on mount, then repeat every 8.3 seconds
    // (3s show + 0.3s fade out + 5s wait = 8.3s total)
    showBubble();
    const bubbleInterval = setInterval(showBubble, 8300);

    return () => clearInterval(bubbleInterval);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button ref={buttonRef} className="w-20 h-20 rounded-full overflow-hidden shadow-sm relative" id="bp-toggle-chat">
        <Image src="/images/arlo-nobg.png" alt="Toggle chat" width={80} height={80} />
      </button>
      {showTextBubble && (
        <div className={`absolute bottom-14 -left-16 z-50 ${isFadingOut ? "animate-fade-out" : "animate-fade-in"}`}>
          <Image
            src="/images/textbubble-text.png"
            alt="Bark bark"
            width={100}
            height={100}
            className="drop-shadow-lg"
          />
        </div>
      )}
    </div>
  );
}
