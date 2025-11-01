'use client';

import React, { useEffect, useRef, useState } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
  layer: number;
  brightness: number;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  brightness: number;
  life: number;
}

type QualityLevel = 'low' | 'medium' | 'high';

interface StarfieldProps {
  quality?: QualityLevel;
}

const Starfield: React.FC<StarfieldProps> = ({ quality = 'medium' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const starsRef = useRef<Star[]>([]);
  const shootingStarsRef = useRef<ShootingStar[]>([]);
  const animationFrameRef = useRef<number>();

  // Quality settings
  const qualitySettings = {
    low: { starCount: 100, layers: 2, shootingStarChance: 0.0001 },
    medium: { starCount: 200, layers: 3, shootingStarChance: 0.0003 },
    high: { starCount: 400, layers: 4, shootingStarChance: 0.0005 },
  };

  const settings = qualitySettings[quality];

  // Initialize dimensions
  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Initialize stars
  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    const stars: Star[] = [];
    for (let i = 0; i < settings.starCount; i++) {
      stars.push({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.5 + 0.1,
        layer: Math.floor(Math.random() * settings.layers),
        brightness: Math.random() * 0.5 + 0.5,
      });
    }
    starsRef.current = stars;
  }, [dimensions, settings.starCount, settings.layers]);

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let lastTime = 0;
    const targetFPS = 60;
    const frameInterval = 1000 / targetFPS;

    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;

      if (deltaTime >= frameInterval) {
        lastTime = currentTime - (deltaTime % frameInterval);

        // Clear canvas with nebula gradient
        const gradient = ctx.createRadialGradient(
          dimensions.width / 2,
          dimensions.height / 2,
          0,
          dimensions.width / 2,
          dimensions.height / 2,
          dimensions.width / 2
        );
        gradient.addColorStop(0, 'rgba(10, 10, 15, 1)');
        gradient.addColorStop(0.5, 'rgba(10, 10, 15, 0.98)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 1)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, dimensions.width, dimensions.height);

        // Draw stars with parallax
        starsRef.current.forEach((star) => {
          const parallaxFactor = 1 + star.layer * 0.3;
          star.y += star.speed * parallaxFactor;

          if (star.y > dimensions.height) {
            star.y = 0;
            star.x = Math.random() * dimensions.width;
          }

          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${star.brightness})`;
          ctx.fill();

          // Add twinkle effect for some stars
          if (Math.random() > 0.99) {
            star.brightness = Math.random() * 0.5 + 0.5;
          }
        });

        // Create shooting stars
        if (Math.random() < settings.shootingStarChance) {
          shootingStarsRef.current.push({
            x: Math.random() * dimensions.width,
            y: Math.random() * (dimensions.height / 2),
            length: Math.random() * 80 + 40,
            speed: Math.random() * 10 + 10,
            angle: Math.PI / 4 + Math.random() * 0.4,
            brightness: 1,
            life: 1,
          });
        }

        // Draw and update shooting stars
        shootingStarsRef.current = shootingStarsRef.current.filter((star) => {
          star.x += Math.cos(star.angle) * star.speed;
          star.y += Math.sin(star.angle) * star.speed;
          star.life -= 0.01;
          star.brightness = star.life;

          if (star.life > 0) {
            const gradient = ctx.createLinearGradient(
              star.x,
              star.y,
              star.x - Math.cos(star.angle) * star.length,
              star.y - Math.sin(star.angle) * star.length
            );
            gradient.addColorStop(0, `rgba(147, 197, 253, ${star.brightness})`);
            gradient.addColorStop(1, 'rgba(147, 197, 253, 0)');

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(star.x, star.y);
            ctx.lineTo(
              star.x - Math.cos(star.angle) * star.length,
              star.y - Math.sin(star.angle) * star.length
            );
            ctx.stroke();
            return true;
          }
          return false;
        });
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [dimensions, settings.shootingStarChance]);

  // Handle reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (mediaQuery.matches && animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={dimensions.width}
      height={dimensions.height}
      className="fixed inset-0 -z-10"
      aria-hidden="true"
    />
  );
};

export default Starfield;
