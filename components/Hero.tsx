import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div
        className="absolute inset-0 z-0 animate-background-pan opacity-10 dark:opacity-20"
        style={{
          backgroundImage: `radial-gradient(at 20% 25%, hsla(260, 80%, 60%, 0.4) 0px, transparent 50%),
                            radial-gradient(at 75% 30%, hsla(300, 80%, 65%, 0.4) 0px, transparent 50%),
                            radial-gradient(at 20% 80%, hsla(210, 80%, 60%, 0.4) 0px, transparent 50%),
                            radial-gradient(at 80% 85%, hsla(340, 80%, 65%, 0.4) 0px, transparent 50%)`,
          backgroundSize: '200% 200%',
        }}
      ></div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-pink-500 dark:from-violet-400 dark:to-pink-500">
          Revolutionize Your Workflow
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-400">
          Stellar is the all-in-one platform designed to bring your teams, projects, and goals together.
          Achieve more with less effort.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="#"
            className="w-full sm:w-auto inline-block bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-violet-500/30"
          >
            Start Your Free Trial
          </a>
          <a
            href="#"
            className="w-full sm:w-auto inline-block bg-slate-100 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-300 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold py-3 px-8 rounded-full transition-colors duration-300"
          >
            Watch Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;