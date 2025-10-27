"use client";

import React, { useEffect, useState, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  life: number;
  rotation: number;
}

export default function MouseParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const createParticle = (x: number, y: number) => {
    const newParticle: Particle = {
      x,
      y,
      size: Math.random() * 2 + 2, // Larger size (2-4px)
      speedX: (Math.random() - 0.5) * 2, // Slower horizontal movement
      speedY: (Math.random() - 0.5) * 2, // Slower vertical movement
      opacity: 0.8,
      life: 60, // Longer life (1 second at 60fps)
      rotation: Math.random() * 360, // Random initial rotation
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

        // Create multiple particles at once for a better effect
        for (let i = 0; i < 3; i++) {
          createParticle(relativeX, relativeY);
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
          className="absolute w-0 h-0"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            transform: `translate(-50%, -50%) rotate(${particle.rotation}deg)`,
            opacity: particle.opacity,
          }}
        >
          <div
            className="w-full h-full"
            style={{
              width: 0,
              height: 0,
              borderLeft: `${particle.size}px solid transparent`,
              borderRight: `${particle.size}px solid transparent`,
              borderBottom: `${particle.size * 1.5}px solid black`,
            }}
          />
        </div>
      ))}
    </div>
  );
}
