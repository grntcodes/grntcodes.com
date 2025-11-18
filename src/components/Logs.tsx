import React, { useState, useEffect } from 'react';
import { Calendar, Code, Zap } from 'lucide-react';
import ScanLines from './ScanLines';

interface LogEntry {
  id: number;
  date: string;
  content: string;
  type: 'code' | 'deploy' | 'note';
}

interface GitHubCommit {
  sha: string;
  commit: {
    message: string;
    author: {
      date: string;
    };
  };
  repository?: {
    name: string;
  };
}

export default function Logs() {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGitHubActivity();
  }, []);

  const fetchGitHubActivity = async () => {
    try {
      // Fetch user's recent events (pushes, commits, etc)
      const eventsRes = await fetch('https://api.github.com/users/grntcodes/events/public?per_page=30');
      const events = await eventsRes.json();

      // Filter for push events and extract commits
      const commitLogs: LogEntry[] = [];
      let id = 1;

      for (const event of events) {
        if (event.type === 'PushEvent' && event.payload.commits) {
          for (const commit of event.payload.commits.slice(0, 1)) { // Take first commit from each push
            const message = commit.message.split('\n')[0]; // First line only
            if (message && !message.toLowerCase().includes('merge') && message.length > 10) {
              commitLogs.push({
                id: id++,
                date: new Date(event.created_at).toISOString().split('T')[0],
                content: message.toLowerCase(),
                type: 'code'
              });
            }
          }
        }
      }

      // Remove duplicates and limit to 8 most recent
      const uniqueLogs = commitLogs
        .filter((log, index, self) =>
          index === self.findIndex(l => l.content === log.content)
        )
        .slice(0, 8);

      setLogs(uniqueLogs);
      setLoading(false);
    } catch (err) {
      console.error('Failed to fetch GitHub activity:', err);
      setLoading(false);
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'code':
        return <Code size={16} className="text-[#39ff14]" />;
      case 'deploy':
        return <Zap size={16} className="text-[#39ff14]" />;
      default:
        return <Calendar size={16} className="text-[#39ff14]" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'code':
        return 'text-blue-400';
      case 'deploy':
        return 'text-[#39ff14]';
      default:
        return 'text-gray-400';
    }
  };

  if (loading) {
    return (
      <section className="min-h-screen bg-black pt-24 px-4 relative overflow-hidden">
        <ScanLines />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent z-10"></div>
        <div className="max-w-4xl mx-auto relative z-20">
          <div className="flex items-center justify-center h-96">
            <div className="text-[#39ff14] font-mono text-xl animate-pulse">
              loading logs...
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-black pt-24 px-4 relative overflow-hidden">
      <ScanLines />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent z-10"></div>
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
      <div className="max-w-4xl mx-auto relative z-20">
        <div className="mb-12">
          <h1 className="font-mono text-4xl md:text-6xl font-black text-white mb-4">
            logs
          </h1>
          <p className="font-mono text-lg text-gray-400">
            real-time dev drops. raw progress. no fluff.
          </p>
        </div>

        {logs.length === 0 ? (
          <div className="text-center text-gray-500 font-mono py-12">
            no logs yet. check back soon.
          </div>
        ) : (
          <div className="space-y-4">
          {logs.map((log, index) => (
            <div
              key={log.id}
              className="group bg-[#111] border-l-4 border-[#39ff14]/20 p-6 hover:border-l-[#39ff14] hover:bg-[#111]/80 transition-all duration-300 animate-fade-in-up"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  {getIcon(log.type)}
                </div>
                
                <div className="flex-grow">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="font-mono text-[#39ff14] text-sm">
                      [{log.date}]
                    </span>
                    <span className={`font-mono text-xs uppercase tracking-wider px-2 py-1 rounded ${getTypeColor(log.type)} border border-current opacity-60`}>
                      {log.type}
                    </span>
                  </div>
                  
                  <p className="font-mono text-white leading-relaxed">
                    {log.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <div className="inline-block font-mono text-gray-500 text-sm border border-gray-800 px-4 py-2">
            logs auto-update from github activity
          </div>
        </div>
      </div>
    </section>
  );
}