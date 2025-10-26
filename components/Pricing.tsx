import React, { useState } from 'react';
import type { PricingPlan } from '../types';

const pricingPlans: PricingPlan[] = [
  {
    name: 'Starter',
    price: '$29',
    features: [
      '5 Projects',
      'Basic Analytics',
      '24/7 Support',
      '10 GB Storage',
    ],
    isPopular: false,
  },
  {
    name: 'Pro',
    price: '$79',
    features: [
      'Unlimited Projects',
      'Advanced Analytics',
      'Priority Support',
      '100 GB Storage',
      'Team Collaboration Tools',
      'API Access',
    ],
    isPopular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: [
      'Everything in Pro',
      'Dedicated Account Manager',
      'Custom Integrations',
      'Enterprise-grade Security',
      'SLA',
    ],
    isPopular: false,
  },
];

const CheckIcon = () => (
  <svg className="h-6 w-6 text-violet-500 dark:text-violet-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const Spinner: React.FC = () => (
  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
);


const PricingCard: React.FC<{ plan: PricingPlan }> = ({ plan }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleChoosePlanClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const cardClasses = `
    bg-white dark:bg-slate-800/50 p-8 rounded-2xl border backdrop-blur-sm
    flex flex-col relative transition-colors duration-300
    ${plan.isPopular ? 'border-violet-500 shadow-2xl shadow-violet-500/20' : 'border-slate-200 dark:border-slate-700/80'}
  `;

  return (
    <div className={cardClasses}>
      {plan.isPopular && (
        <div className="absolute top-0 right-8 -translate-y-1/2 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          Most Popular
        </div>
      )}
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{plan.name}</h3>
      <p className="mt-4">
        <span className="text-4xl font-extrabold text-slate-900 dark:text-white">{plan.price}</span>
        {plan.price !== 'Custom' && <span className="text-slate-500 dark:text-slate-400">/month</span>}
      </p>
      <p className="mt-4 text-slate-600 dark:text-slate-400 h-12">
        {plan.name === 'Starter' ? 'For small teams getting started.' : plan.name === 'Pro' ? 'For growing businesses that need more power.' : 'For large organizations with custom needs.'}
      </p>
      <ul className="mt-8 space-y-4">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckIcon />
            <span className="ml-3 text-slate-600 dark:text-slate-300">{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-8">
        <button
          onClick={handleChoosePlanClick}
          disabled={isLoading}
          className={`w-full font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center disabled:opacity-75 disabled:cursor-not-allowed disabled:scale-100 ${
          plan.isPopular
          ? 'bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white'
          : 'bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200'
        }`}>
          {isLoading ? <Spinner /> : (plan.price === 'Custom' ? 'Contact Sales' : 'Choose Plan')}
        </button>
      </div>
    </div>
  );
};


const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">Flexible pricing for teams of all sizes.</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Choose the plan that's right for you. All plans come with a 14-day free trial, no credit card required.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-1 lg:grid-cols-3 items-stretch">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;