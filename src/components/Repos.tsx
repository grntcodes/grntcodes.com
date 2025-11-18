import React, { useState, useEffect } from 'react';
import { Github, Star, Clock, ExternalLink } from 'lucide-react';
import BinaryRain from './BinaryRain';

interface Repo {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  updated_at: string;
  html_url: string;
  language: string;
}

export default function Repos() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchRepos();
  }, []);

  const fetchRepos = async () => {
    try {
      // Using a public GitHub API endpoint - in production, you might want to use your actual username
      const response = await fetch('https://api.github.com/users/grntcodes/repos?sort=updated&per_page=6');
      
      if (!response.ok) {
        throw new Error('Failed to fetch repositories');
      }
      
      const data = await response.json();
      setRepos(data);
    } catch (err) {
      setError('Failed to load repositories. Check connection or GitHub API limits.');
      // Fallback demo data
      setRepos([
        {
          id: 1,
          name: 'solana-token-scaffold',
          description: 'Anchor-based token program scaffold for rapid Solana development',
          stargazers_count: 47,
          updated_at: '2025-01-15T10:30:00Z',
          html_url: '#',
          language: 'Rust'
        },
        {
          id: 2,
          name: 'spl-cpi-toolkit',
          description: 'Cross-program invocation utilities for SPL token operations',
          stargazers_count: 23,
          updated_at: '2025-01-14T15:45:00Z',
          html_url: '#',
          language: 'Rust'
        },
        {
          id: 3,
          name: 'grnt-trading-bot',
          description: 'High-frequency trading bot for Solana DeFi protocols',
          stargazers_count: 89,
          updated_at: '2025-01-13T09:20:00Z',
          html_url: '#',
          language: 'TypeScript'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  if (loading) {
    return (
      <section className="min-h-screen bg-black pt-24 px-4 relative overflow-hidden">
        <BinaryRain />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent z-10"></div>
        <div className="max-w-7xl mx-auto relative z-20">
          <div className="flex items-center justify-center h-96">
            <div className="text-[#39ff14] font-mono text-xl animate-pulse">
              loading repos...
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-black pt-24 px-4 relative overflow-hidden">
      <BinaryRain />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent z-10"></div>
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
      <div className="max-w-7xl mx-auto relative z-20">
        <div className="mb-12">
          <h1 className="font-mono text-4xl md:text-6xl font-black text-white mb-4">
            repos
          </h1>
          <p className="font-mono text-lg text-gray-400">
            live from github. updated automatically.
          </p>
          {error && (
            <p className="font-mono text-sm text-[#39ff14] mt-2 opacity-70">
              {error}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="group bg-[#111] border border-gray-800 p-6 hover:border-[#39ff14] transition-all duration-300 hover:shadow-lg hover:shadow-[#39ff14]/10"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-mono text-xl font-bold text-white group-hover:text-[#39ff14] transition-colors">
                  {repo.name}
                </h3>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#39ff14] transition-colors"
                >
                  <ExternalLink size={20} />
                </a>
              </div>

              <p className="font-mono text-sm text-gray-400 mb-4 min-h-[2.5rem]">
                {repo.description || 'No description available'}
              </p>

              <div className="flex items-center justify-between text-sm text-gray-500 font-mono">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Star size={16} />
                    <span>{repo.stargazers_count}</span>
                  </div>
                  {repo.language && (
                    <span className="px-2 py-1 bg-[#39ff14]/10 text-[#39ff14] rounded text-xs">
                      {repo.language}
                    </span>
                  )}
                </div>
                <div className="flex items-center space-x-1">
                  <Clock size={16} />
                  <span>{formatDate(repo.updated_at)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/grntcodes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 font-mono text-[#39ff14] hover:text-white transition-colors border border-[#39ff14] px-6 py-3 hover:bg-[#39ff14] hover:text-black"
          >
            <Github size={20} />
            <span>View All on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}