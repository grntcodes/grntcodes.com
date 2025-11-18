import React from 'react';

export default function BinaryRain() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
      <svg
        className="w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="binary" width="20" height="20" patternUnits="userSpaceOnUse">
            <text x="2" y="8" fill="#39ff14" fontSize="6" fontFamily="monospace" opacity="0.8">
              1
              <animate attributeName="y" values="0;100" dur="8s" repeatCount="indefinite"/>
            </text>
            <text x="10" y="15" fill="#39ff14" fontSize="6" fontFamily="monospace" opacity="0.6">
              0
              <animate attributeName="y" values="0;100" dur="10s" repeatCount="indefinite"/>
            </text>
            <text x="16" y="5" fill="#39ff14" fontSize="6" fontFamily="monospace" opacity="0.7">
              1
              <animate attributeName="y" values="0;100" dur="12s" repeatCount="indefinite"/>
            </text>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#binary)"/>
      </svg>
    </div>
  );
}
