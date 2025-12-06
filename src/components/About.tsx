import React from 'react';
import { Github, Twitter, Send, Briefcase } from 'lucide-react';
import CircuitBoard from './CircuitBoard';

export default function About() {
  return (
    <section className="min-h-screen bg-black pt-24 px-4 relative overflow-hidden">
      <CircuitBoard />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent z-10"></div>
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
      <div className="max-w-4xl mx-auto relative z-20">
        <div className="mb-12">
          <h1 className="font-mono text-4xl md:text-6xl font-black text-white mb-8">
            about
          </h1>
        </div>

        <div className="bg-[#111] border border-gray-800 p-8 md:p-12 mb-8">
          <div className="font-mono text-2xl md:text-4xl text-white leading-tight space-y-4">
            <div className="text-[#39ff14]">grant grey</div>
            <div className="text-gray-300">solana token dev</div>
            <a
              href="https://wifnode.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-400 hover:text-[#39ff14] transition-colors"
            >
              <Briefcase size={24} />
              <span>building at wifnodes</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#111] border border-gray-800 p-6">
            <h3 className="font-mono text-xl text-[#39ff14] mb-4 uppercase tracking-wider">
              focus
            </h3>
            <div className="font-mono text-gray-300 space-y-2">
              <p>• smart contract development</p>
              <p>• token launch infrastructure</p>
              <p>• defi protocol integrations</p>
              <p>• mev strategies & protection</p>
              <p>• high-frequency trading systems</p>
            </div>
          </div>

          <div className="bg-[#111] border border-gray-800 p-6">
            <h3 className="font-mono text-xl text-[#39ff14] mb-4 uppercase tracking-wider">
              stack
            </h3>
            <div className="font-mono text-gray-300 space-y-2">
              <p>• rust / move / solidity</p>
              <p>• typescript / python</p>
              <p>• evm / svm / movevm</p>
              <p>• docker / kubernetes</p>
              <p>• postgresql / redis</p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-black border border-[#39ff14]/30 p-8">
          <h3 className="font-mono text-xl text-[#39ff14] mb-6 uppercase tracking-wider">
            connect
          </h3>
          
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/grntcodes"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 bg-transparent border border-gray-600 text-gray-300 px-4 py-2 font-mono hover:border-[#39ff14] hover:text-[#39ff14] transition-all duration-200"
            >
              <Github size={20} />
              <span>/grntcodes</span>
            </a>

            <a
              href="https://x.com/grntcodes"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 bg-transparent border border-gray-600 text-gray-300 px-4 py-2 font-mono hover:border-[#39ff14] hover:text-[#39ff14] transition-all duration-200"
            >
              <Twitter size={20} />
              <span>@grntcodes</span>
            </a>

            <a
              href="https://t.me/crackedChainDev"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 bg-transparent border border-gray-600 text-gray-300 px-4 py-2 font-mono hover:border-[#39ff14] hover:text-[#39ff14] transition-all duration-200"
            >
              <Send size={20} />
              <span>@crackedChainDev</span>
            </a>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="font-mono text-gray-500 text-sm">
            shipping code since the early blocks
          </div>
        </div>
      </div>
    </section>
  );
}