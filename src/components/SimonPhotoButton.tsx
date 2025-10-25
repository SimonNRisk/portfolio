"use client";

import { useState } from "react";

export function SimonPhotoButton() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "/images/simon/simon-headtilt.jpg",
    "/images/simon/simon-laugh.jpg",
    "/images/simon/simon-sad.jpg",
    "/images/simon/simon-toothless.jpg",
    "/images/simon/simon.jpg",
  ];
  const handleClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  return (
    <button onClick={handleClick}>
      <img
        src={images[currentImageIndex]}
        alt="Simon"
        className="mx-auto mb-6 w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-md"
      />
    </button>
  );
}
