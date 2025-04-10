"use client";
import React, { useState, useEffect, useCallback } from "react";

const Particles = () => {
  const [particles, setParticles] = useState<
    Array<{
      id: number;
      x: number;
      y: number;
      size: number;
      speed: number;
      opacity: number;
      direction: number;
    }>
  >([]);

  const initParticles = useCallback(() => {
    const newParticles = [];
    const particleCount = window.innerWidth < 768 ? 30 : 50;

    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 5 + 1,
        speed: Math.random() * 0.2 + 0.1,
        opacity: Math.random() * 0.5 + 0.1,
        direction: Math.random() > 0.5 ? 1 : -1,
      });
    }
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    initParticles();

    const handleResize = () => {
      initParticles();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [initParticles]);

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prevParticles) =>
        prevParticles.map((p) => ({
          ...p,
          y: (p.y + p.speed) % 100,
          x: (p.x + p.speed * p.direction * 0.3) % 100,
        }))
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 w-full z-20">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </div>
  );
};

export default Particles;
