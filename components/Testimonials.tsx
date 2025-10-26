
import React from 'react';
import type { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    quote: 'Stellar has completely transformed how our team works. We are more organized and productive than ever before. It\'s a game-changer.',
    author: 'Sarah Johnson',
    title: 'CEO, Innovate Inc.',
    avatarUrl: 'https://picsum.photos/id/1011/100/100',
  },
  {
    quote: 'The intuitive design and powerful features make Stellar the best project management tool I\'ve ever used. Highly recommended!',
    author: 'Michael Chen',
    title: 'Lead Developer, Tech Solutions',
    avatarUrl: 'https://picsum.photos/id/1012/100/100',
  },
  {
    quote: 'From day one, our team\'s efficiency skyrocketed. The collaboration features are top-notch. We couldn\'t imagine our workflow without Stellar.',
    author: 'Jessica Williams',
    title: 'Project Manager, Creative Minds',
    avatarUrl: 'https://picsum.photos/id/1027/100/100',
  },
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="bg-white dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700/80 backdrop-blur-sm relative h-full flex flex-col transition-all duration-300 hover:border-violet-400 dark:hover:border-violet-500/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-violet-500/10">
     <svg className="absolute top-6 left-6 w-10 h-10 text-slate-200 dark:text-slate-700" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
        <path d="M9.352 4C4.456 4 0 8.456 0 13.352c0 4.288 3.424 8.224 8.128 9.024L9.352 28h6.4L12.064 21.6c.16-.016.32-.032.464-.064 3.072-1.072 5.376-4.08 5.376-7.52 0-4.416-3.584-8-8-8-1.536 0-3.008.448-4.224 1.28L9.352 4z" />
     </svg>
    <p className="relative z-10 mt-4 text-lg text-slate-700 dark:text-slate-300 flex-grow">"{testimonial.quote}"</p>
    <div className="mt-6 flex items-center flex-shrink-0">
      <img className="h-12 w-12 rounded-full" src={testimonial.avatarUrl} alt={testimonial.author} />
      <div className="ml-4">
        <p className="font-semibold text-slate-900 dark:text-white">{testimonial.author}</p>
        <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.title}</p>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">Loved by teams worldwide.</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our customers are saying about their experience with Stellar.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-1 lg:grid-cols-3 items-stretch">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;