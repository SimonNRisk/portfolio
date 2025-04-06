'use client';

import React, { useEffect, useState } from 'react';

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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.log('MouseParticles component mounted');
    
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      console.log('Mouse moved to:', x, y);
      setMousePosition({ x, y });
      
      // Create multiple particles at once for a better effect
      for (let i = 0; i < 3; i++) {
        createParticle(x, y);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    console.log('Current particles:', particles.length);
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

  const createParticle = (x: number, y: number) => {
    const newParticle: Particle = {
      x,
      y,
      size: Math.random() * 2 + 2, // Larger size (2-4px)
      speedX: (Math.random() - 0.5) * 0.3, // Slower movement
      speedY: (Math.random() - 0.5) * 0.3,
      opacity: 0.1, // More subtle opacity
      life: 50,
      rotation: Math.random() * 360, // Random initial rotation
    };

    setParticles((prevParticles) => {
      const updatedParticles = [...prevParticles, newParticle];
      return updatedParticles.slice(-15);
    });
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
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