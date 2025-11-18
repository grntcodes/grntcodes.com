import React from 'react';

export default function CircuitBoard() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-15">
      <svg
        className="w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="circuit" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="5" cy="5" r="1.5" fill="#39ff14" opacity="0.6"/>
            <circle cx="35" cy="35" r="1.5" fill="#39ff14" opacity="0.6"/>
            <path d="M 5 5 L 20 5 L 20 20 L 35 20 L 35 35"
              stroke="#39ff14" strokeWidth="0.5" fill="none" opacity="0.4"/>
            <path d="M 35 5 L 20 5 L 20 35"
              stroke="#39ff14" strokeWidth="0.5" fill="none" opacity="0.3"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)"/>
      </svg>
    </div>
  );
}
