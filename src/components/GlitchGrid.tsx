import React from 'react';

export default function GlitchGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <svg 
        className="w-full h-full" 
        viewBox="0 0 100 100" 
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#39ff14" strokeWidth="0.5" opacity="0.3"/>
          </pattern>
          <pattern id="glitchGrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect width="20" height="20" fill="url(#grid)"/>
            <rect x="5" y="5" width="2" height="10" fill="#39ff14" opacity="0.6">
              <animate attributeName="opacity" values="0.6;0;0.6" dur="2s" repeatCount="indefinite"/>
            </rect>
            <rect x="15" y="10" width="3" height="2" fill="#39ff14" opacity="0.4">
              <animate attributeName="opacity" values="0.4;0;0.4" dur="1.5s" repeatCount="indefinite"/>
            </rect>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#glitchGrid)"/>
      </svg>
    </div>
  );
}