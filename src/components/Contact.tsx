import React from 'react';
import { Mail, Send, Globe, Twitter } from 'lucide-react';
import NetworkNodes from './NetworkNodes';

export default function Contact() {
  return (
    <section className="min-h-screen bg-black pt-24 px-4 relative overflow-hidden">
      <NetworkNodes />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent z-10"></div>
      <div className="max-w-4xl mx-auto relative z-20">
        <div className="mb-12">
          <h1 className="font-mono text-4xl md:text-6xl font-black text-white mb-4">
            contact
          </h1>
          <p className="font-mono text-lg text-gray-400">
            direct lines. no middlemen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-[#111] border border-gray-800 p-6">
              <h3 className="font-mono text-xl text-[#39ff14] mb-4 uppercase tracking-wider flex items-center">
                <Mail className="mr-2" size={20} />
                email
              </h3>
              <a
                href="mailto:grntcoder@gmail.com"
                className="font-mono text-white hover:text-[#39ff14] transition-colors text-lg"
              >
                grntcoder@gmail.com
              </a>
              <p className="font-mono text-gray-400 text-sm mt-2">
                for project inquiries and collaborations
              </p>
            </div>

            <div className="bg-[#111] border border-gray-800 p-6">
              <h3 className="font-mono text-xl text-[#39ff14] mb-4 uppercase tracking-wider flex items-center">
                <Send className="mr-2" size={20} />
                telegram
              </h3>
              <a
                href="https://t.me/crackedChainDev"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-white hover:text-[#39ff14] transition-colors text-lg"
              >
                @crackedChainDev
              </a>
              <p className="font-mono text-gray-400 text-sm mt-2">
                fastest response time
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-[#111] border border-gray-800 p-6">
              <h3 className="font-mono text-xl text-[#39ff14] mb-4 uppercase tracking-wider">
                social
              </h3>
              <div className="space-y-3">
                <a
                  href="https://grntcodes.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 font-mono text-white hover:text-[#39ff14] transition-colors"
                >
                  <Globe size={20} />
                  <span>grntcodes.com</span>
                </a>
                <a
                  href="https://x.com/grntcodes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 font-mono text-white hover:text-[#39ff14] transition-colors"
                >
                  <Twitter size={20} />
                  <span>x.com/grntcodes</span>
                </a>
              </div>
            </div>

            <div className="bg-black border border-[#39ff14]/30 p-6">
              <h3 className="font-mono text-sm text-[#39ff14] mb-3 uppercase tracking-wider">
                response time
              </h3>
              <div className="font-mono text-gray-300 text-sm space-y-1">
                <p>telegram: &lt; 2 hours</p>
                <p>email: &lt; 24 hours</p>
                <p>social: when i see it</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-[#111] border border-gray-800 p-8 text-center">
          <h3 className="font-mono text-xl text-white mb-4">
            open to collaborate on:
          </h3>
          <div className="font-mono text-gray-400 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>token launches</div>
            <div>defi protocols</div>
            <div>trading bots</div>
            <div>infrastructure</div>
          </div>
          <div className="mt-6 font-mono text-[#39ff14] text-sm">
            serious inquiries only
          </div>
        </div>
      </div>
    </section>
  );
}