import React from 'react';

export default function NetworkNodes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
      <svg
        className="w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="network" width="30" height="30" patternUnits="userSpaceOnUse">
            <circle cx="15" cy="15" r="2" fill="#39ff14" opacity="0.8">
              <animate attributeName="r" values="1.5;2.5;1.5" dur="3s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite"/>
            </circle>
            <line x1="15" y1="15" x2="30" y2="0" stroke="#39ff14" strokeWidth="0.3" opacity="0.4"/>
            <line x1="15" y1="15" x2="30" y2="30" stroke="#39ff14" strokeWidth="0.3" opacity="0.4"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#network)"/>
      </svg>
    </div>
  );
}
