import React from 'react';

export default function ScanLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0 opacity-5 animate-scan"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #39ff14 0px, transparent 2px, transparent 4px)'
        }}
      />
    </div>
  );
}
