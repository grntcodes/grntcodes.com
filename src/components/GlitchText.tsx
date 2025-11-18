import React, { useState, useEffect } from 'react';

interface GlitchTextProps {
  children: string;
  className?: string;
}

export default function GlitchText({ children, className = '' }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.95) {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 150);
      }
    }, 1000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <span 
      className={`${className} ${isGlitching ? 'animate-pulse text-[#39ff14]' : ''} transition-colors duration-75`}
      style={{
        textShadow: isGlitching ? '2px 0 #39ff14, -2px 0 #ff0040' : 'none',
      }}
    >
      {children}
    </span>
  );
}