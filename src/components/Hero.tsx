import React from 'react';
import { Github, ArrowRight } from 'lucide-react';
import GlitchText from './GlitchText';
import GlitchGrid from './GlitchGrid';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="min-h-screen bg-black relative flex items-center justify-center overflow-hidden">
      <GlitchGrid />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent z-10"></div>

      <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
        <h1 className="font-mono text-6xl md:text-8xl font-black text-white mb-4">
          <GlitchText>grntcodes</GlitchText>
        </h1>
        
        <h2 className="font-mono text-xl md:text-2xl text-[#39ff14] mb-2 tracking-wider">
          ship fast. scale harder.
        </h2>
        
        <p className="font-mono text-lg text-gray-400 mb-12 tracking-wide">
          crypto token development on Solana
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://github.com/grntcodes"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-2 bg-transparent border-2 border-[#39ff14] text-[#39ff14] px-8 py-4 font-mono uppercase tracking-wider hover:bg-[#39ff14] hover:text-black transition-all duration-200 hover:shadow-lg hover:shadow-[#39ff14]/20"
          >
            <Github size={20} />
            <span>View GitHub</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>

          <button
            onClick={() => onNavigate('logs')}
            className="group flex items-center space-x-2 bg-[#39ff14] text-black px-8 py-4 font-mono uppercase tracking-wider hover:bg-white transition-all duration-200 hover:shadow-lg"
          >
            <span>Read Logs</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <button
        onClick={() => onNavigate('repos')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer hover:scale-110 transition-transform z-30"
        aria-label="Scroll to repos section"
      >
        <div className="w-6 h-10 border-2 border-[#39ff14]/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#39ff14] rounded-full mt-2 animate-bounce"></div>
        </div>
      </button>
    </section>
  );
}