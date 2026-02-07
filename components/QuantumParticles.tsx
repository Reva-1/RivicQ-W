import React, { useMemo } from 'react';

const QuantumParticles: React.FC<{ color?: string, opacity?: number }> = ({ color = 'bg-white', opacity = 0.1 }) => {
  // Generate static random positions to avoid re-render hydration mismatches or performance hits
  const particles = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 10 + 2}px`,
      duration: `${Math.random() * 10 + 10}s`,
      delay: `${Math.random() * 5}s`,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {particles.map((p, i) => (
        <div
          key={i}
          className={`absolute rounded-full ${color} animate-float blur-sm`}
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            opacity: opacity,
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
};

export default QuantumParticles;