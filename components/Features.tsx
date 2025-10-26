
import React from 'react';
import type { Feature } from '../types';

const features: Feature[] = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-violet-500 dark:text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Blazing Fast',
    description: 'Experience unparalleled speed and responsiveness. Never wait for your tools again.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-violet-500 dark:text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-3-5.197m-3 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 003-5.197m-3 0a4 4 0 110-5.292" />
      </svg>
    ),
    title: 'Team Collaboration',
    description: 'Work seamlessly with your team in real-time, with shared spaces and instant updates.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-violet-500 dark:text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Robust Security',
    description: 'Your data is safe with us. We use industry-leading encryption and security protocols.',
  },
];

const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => (
  <div className="bg-white dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700/80 backdrop-blur-sm transition-all duration-300 hover:border-violet-400 dark:hover:border-violet-500/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-violet-500/10">
    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-slate-100 dark:bg-slate-700 mb-4">{feature.icon}</div>
    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{feature.title}</h3>
    <p className="mt-2 text-slate-600 dark:text-slate-400">{feature.description}</p>
  </div>
);

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">Everything you need, nothing you don't.</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Stellar provides powerful features to streamline your entire project lifecycle from start to finish.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;