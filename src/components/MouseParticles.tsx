"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  life: number;
  rotation: number;
  image: string;
  alt: string;
}

export default function MouseParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastMousePosition = useRef<{ x: number; y: number } | null>(null);

  const createParticle = (x: number, y: number) => {
    const newParticle: Particle = {
      x,
      y,
      size: Math.random() * 20 + 20,
      speedX: (Math.random() - 0.5) * 2, // Slower horizontal movement
      speedY: (Math.random() - 0.5) * 2, // Slower vertical movement
      opacity: 0.8,
      life: 60, // Longer life (1 second at 60fps)
      rotation: Math.random() * 360, // Random initial rotation
      image: "/images/simon/simon_nobg.png", // Single image
      alt: "Photo of Simon Risk without a background",
    };

    setParticles((prevParticles) => {
      // Limit the number of particles to prevent performance issues
      const maxParticles = 50;
      const newParticles = [...prevParticles, newParticle];
      return newParticles.length > maxParticles ? newParticles.slice(-maxParticles) : newParticles;
    });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const x = e.clientX;
      const y = e.clientY;

      // Only create particles if mouse is within the hero section bounds
      if (x >= containerRect.left && x <= containerRect.right && y >= containerRect.top && y <= containerRect.bottom) {
        // Convert global coordinates to relative coordinates within the container
        const relativeX = x - containerRect.left;
        const relativeY = y - containerRect.top;

        // Only create particle if mouse has moved a noticeable distance
        const minDistance = 60; // Minimum pixels to move before creating new particle
        if (lastMousePosition.current) {
          const distance = Math.sqrt(
            Math.pow(relativeX - lastMousePosition.current.x, 2) + Math.pow(relativeY - lastMousePosition.current.y, 2)
          );

          if (distance >= minDistance) {
            createParticle(relativeX, relativeY);
            lastMousePosition.current = { x: relativeX, y: relativeY };
          }
        } else {
          // Create first particle
          createParticle(relativeX, relativeY);
          lastMousePosition.current = { x: relativeX, y: relativeY };
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prevParticles) => {
        const updatedParticles = prevParticles
          .map((particle) => ({
            ...particle,
            x: particle.x + particle.speedX,
            y: particle.y + particle.speedY,
            opacity: particle.opacity - 0.01,
            life: particle.life - 1,
            rotation: particle.rotation + 2, // Add rotation
          }))
          .filter((particle) => particle.life > 0 && particle.opacity > 0);

        return updatedParticles;
      });
    }, 16);

    return () => clearInterval(interval);
  }, [particles.length]);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none z-10">
      {particles.map((particle, index) => (
        <div
          key={index}
          className="absolute"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            transform: `translate(-50%, -50%) rotate(${particle.rotation}deg)`,
            opacity: particle.opacity,
          }}
        >
          <Image
            src={particle.image}
            alt={particle.alt}
            className="rounded-lg object-cover"
            width={particle.size}
            height={particle.size}
          />
        </div>
      ))}
    </div>
  );
}
