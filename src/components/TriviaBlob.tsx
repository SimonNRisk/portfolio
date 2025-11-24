"use client";

import Image from "next/image";

export const TriviaBlob = ({ onClick }: { onClick: () => void }) => {
  return (
    <div
      className="absolute top-1/3 left-0 z-30 w-16 h-16 p-2 pl-4 rounded-lg shadow-lg hover:cursor-pointer hover:scale-125 transition-transform duration-300 ease-in-out"
      onClick={onClick}
    >
      <Image src="/images/nerd.png" alt="Trivia Blob" width={64} height={64} />
    </div>
  );
};
