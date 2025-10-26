
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const App: React.FC = () => {
  // Initialize state from localStorage or default to 'dark'
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) {
        return storedTheme;
      }
    }
    return 'dark';
  });

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === 'dark' ? 'light' : 'dark');
    root.classList.add(theme);
  }, [theme]);

  return (
    <div className="bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 font-sans antialiased transition-colors duration-300">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-slate-800/[0.2] [mask-image:linear-gradient(to_bottom,white_20%,transparent_100%)] dark:opacity-100 opacity-0 transition-opacity duration-300"></div>
      <div className="relative z-10">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main>
          <Hero />
          <Features />
          <Testimonials />
          <Pricing />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;