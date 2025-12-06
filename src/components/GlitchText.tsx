import React, { useState, useEffect } from 'react';

interface GlitchTextProps {
  children: string;
  className?: string;
}

export default function GlitchText({ children, className = '' }: GlitchTextProps) {
  const [displayText, setDisplayText] = useState(children);
  const [isGlitching, setIsGlitching] = useState(false);
  const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`0123456789';

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.92) {
        setIsGlitching(true);

        // Scramble random characters
        const scrambleCount = Math.floor(Math.random() * 3) + 1;
        let scrambled = children.split('');
        for (let i = 0; i < scrambleCount; i++) {
          const pos = Math.floor(Math.random() * children.length);
          scrambled[pos] = glitchChars[Math.floor(Math.random() * glitchChars.length)];
        }
        setDisplayText(scrambled.join(''));

        // Reset after glitch
        setTimeout(() => {
          setDisplayText(children);
          setIsGlitching(false);
        }, 100 + Math.random() * 100);
      }
    }, 800);

    return () => clearInterval(glitchInterval);
  }, [children]);

  return (
    <span className={`relative inline-block ${className}`}>
      {/* Main text */}
      <span className="relative z-10">{displayText}</span>

      {/* Glitch layers */}
      <span
        className={`absolute inset-0 text-[#ff0040] ${isGlitching ? 'opacity-80' : 'opacity-0'}`}
        style={{
          clipPath: isGlitching ? 'inset(10% 0 60% 0)' : 'none',
          transform: isGlitching ? 'translateX(-4px)' : 'none',
          transition: 'none',
        }}
        aria-hidden="true"
      >
        {displayText}
      </span>
      <span
        className={`absolute inset-0 text-[#00ffff] ${isGlitching ? 'opacity-80' : 'opacity-0'}`}
        style={{
          clipPath: isGlitching ? 'inset(50% 0 20% 0)' : 'none',
          transform: isGlitching ? 'translateX(4px)' : 'none',
          transition: 'none',
        }}
        aria-hidden="true"
      >
        {displayText}
      </span>
      <span
        className={`absolute inset-0 text-[#39ff14] ${isGlitching ? 'opacity-60' : 'opacity-0'}`}
        style={{
          clipPath: isGlitching ? 'inset(70% 0 5% 0)' : 'none',
          transform: isGlitching ? 'translateX(-2px) translateY(2px)' : 'none',
          transition: 'none',
        }}
        aria-hidden="true"
      >
        {displayText}
      </span>
    </span>
  );
}