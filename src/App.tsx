import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Repos from './components/Repos';
import Logs from './components/Logs';
import About from './components/About';
import Contact from './components/Contact';

type Section = 'home' | 'repos' | 'logs' | 'about' | 'contact';

function App() {
  const [currentSection, setCurrentSection] = useState<Section>('home');

  useEffect(() => {
    // Handle smooth scroll to sections
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setCurrentSection(hash as Section);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Check initial hash

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (section: Section) => {
    setCurrentSection(section);
    window.location.hash = section === 'home' ? '' : section;
  };

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <Header currentSection={currentSection} onNavigate={handleNavigate} />
      <div id="home"><Hero onNavigate={handleNavigate} /></div>
      <div id="repos"><Repos /></div>
      <div id="logs"><Logs /></div>
      <div id="about"><About /></div>
      <div id="contact"><Contact /></div>
    </div>
  );
}

export default App;