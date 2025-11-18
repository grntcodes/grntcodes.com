import React from 'react';
import { Github, Terminal } from 'lucide-react';

interface HeaderProps {
  currentSection: string;
  onNavigate: (section: string) => void;
}

export default function Header({ currentSection, onNavigate }: HeaderProps) {
  const navItems = ['repos', 'logs', 'about', 'contact'];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-[#39ff14]/20">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center space-x-2 text-[#39ff14] hover:text-white transition-colors duration-200"
        >
          <Terminal size={24} className="animate-pulse" />
          <span className="font-mono text-lg font-bold">grntcodes</span>
        </button>

        <nav className="flex space-x-6">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => onNavigate(item)}
              className={`font-mono text-sm uppercase tracking-wider transition-all duration-200 hover:text-[#39ff14] hover:scale-105 ${
                currentSection === item ? 'text-[#39ff14]' : 'text-white'
              }`}
            >
              {item}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}