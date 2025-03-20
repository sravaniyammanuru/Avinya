import { useEffect, useRef } from 'react';

interface ParticleBackgroundProps {
  count?: number;
}

export default function ParticleBackground({ count = 100 }: ParticleBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    
    // Clear any existing particles
    container.innerHTML = '';
    
    // Create particles
    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Random size between 2-6px
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random position
      const xPos = Math.random() * 100;
      const yPos = Math.random() * 100;
      particle.style.left = `${xPos}%`;
      particle.style.top = `${yPos}%`;
      
      // Random color (purple, teal, or pink)
      const colors = ['#5e35b1', '#00bcd4', '#f50057'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      particle.style.backgroundColor = color;
      
      // Random opacity
      const opacity = Math.random() * 0.5 + 0.3;
      particle.style.opacity = opacity.toString();
      
      // Animation
      const duration = Math.random() * 20 + 10;
      const delay = Math.random() * 5;
      particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
      
      // Add particle to container
      container.appendChild(particle);
    }
  }, [count]);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 z-0"
    />
  );
}
