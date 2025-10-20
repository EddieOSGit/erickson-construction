
import React from 'react';
import type { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    quote: "Erickson Construction built our dream home, and the process was seamless from start to finish. Their attention to detail and craftsmanship is second to none. We couldn't be happier!",
    author: 'The Johnson Family',
    location: 'Kennewick, WA',
  },
  {
    quote: "We hired them to build a new garage, and they exceeded all our expectations. The crew was professional, clean, and finished the project ahead of schedule. Highly recommended!",
    author: 'Mark T.',
    location: 'Benton County, WA',
  },
  {
    quote: "Our kitchen remodel was a huge undertaking, but Erickson Construction made it feel easy. They listened to our ideas and delivered a space that is both beautiful and functional.",
    author: 'Sarah & David P.',
    location: 'Franklin County, WA',
  },
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="bg-white p-8 rounded-lg shadow-md text-center">
    <p className="text-slate-600 italic mb-4">"{testimonial.quote}"</p>
    <p className="font-bold text-slate-800">{testimonial.author}</p>
    <p className="text-sm text-slate-500">{testimonial.location}</p>
  </div>
);

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">What Our Clients Say</h2>
        <p className="max-w-3xl mx-auto text-slate-600 mb-12">
          We're proud to have built a reputation for quality and reliability. Here's what some of our satisfied clients have to say.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
