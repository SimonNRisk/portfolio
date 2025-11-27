"use client";

import { useRef, useState, useEffect, useCallback } from "react";

export default function AsciiDonut() {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  const [frame, setFrame] = useState("");
  const rotation = useRef({ x: 0, y: 0 });
  const lastMouse = useRef<{ x: number; y: number } | null>(null);
  const isDragging = useRef(false);

  const normalizeAngle = (angle: number) => {
    const TWO_PI = Math.PI * 2;
    return ((angle % TWO_PI) + TWO_PI) % TWO_PI;
  };

  const renderDonutRef = useRef<() => void>();

  const renderDonut = useCallback(() => {
    // 🔄 Smooth idle animation
    if (!isDragging.current) {
      rotation.current.y += 0.007; // Y-axis (spin)
      rotation.current.x += 0.003; // X-axis (tilt)
    }

    rotation.current.x = normalizeAngle(rotation.current.x);
    rotation.current.y = normalizeAngle(rotation.current.y);

    const A = rotation.current.x;
    const B = rotation.current.y;

    const chars = ".,-~:;=!*#$@";
    const output = Array(1760).fill(" ");
    const zbuffer = Array(1760).fill(0);

    for (let j = 0; j < Math.PI * 2; j += 0.07) {
      for (let i = 0; i < Math.PI * 2; i += 0.02) {
        const sinA = Math.sin(A),
          cosA = Math.cos(A);
        const sinB = Math.sin(B),
          cosB = Math.cos(B);
        const sinI = Math.sin(i),
          cosI = Math.cos(i);
        const sinJ = Math.sin(j),
          cosJ = Math.cos(j);

        const h = cosJ + 2;
        const D = 1 / (sinI * h * sinA + sinJ * cosA + 5);
        const t = sinI * h * cosA - sinJ * sinA;

        const x = Math.floor(40 + 30 * D * (cosI * h * cosB - t * sinB));
        const y = Math.floor(12 + 15 * D * (cosI * h * sinB + t * cosB));
        const o = x + 80 * y;

        const N = Math.floor(
          8 * ((sinJ * sinA - sinI * cosJ * cosA) * cosB - sinI * cosJ * sinA - sinJ * cosA - cosI * cosJ * sinB)
        );

        if (22 > y && y > 0 && x > 0 && 80 > x && D > zbuffer[o]) {
          zbuffer[o] = D;
          output[o] = chars[N > 0 ? N : 0];
        }
      }
    }

    let text = "";
    for (let i = 0; i < 1760; i++) {
      text += i % 80 ? output[i] : "\n";
    }

    setFrame(text);
    animationRef.current = requestAnimationFrame(renderDonutRef.current!);
  }, []);

  useEffect(() => {
    renderDonutRef.current = renderDonut;
  }, [renderDonut]);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    lastMouse.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !lastMouse.current) return;

    const dx = e.clientX - lastMouse.current.x;
    const dy = e.clientY - lastMouse.current.y;

    rotation.current.y += dx * 0.01;
    rotation.current.x += dy * 0.01;

    lastMouse.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    lastMouse.current = null;
  };

  useEffect(() => {
    animationRef.current = requestAnimationFrame(renderDonut);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [renderDonut]);

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className="my-4 cursor-grab active:cursor-grabbing"
    >
      <pre className="text-[10px] leading-[10px] font-mono text-black select-none">{frame}</pre>
    </div>
  );
}
