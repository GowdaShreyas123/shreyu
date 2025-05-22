'use client';
import React, { useState } from 'react';

// Sample testimonials
const testimonials = [
  {
    name: 'Alice Johnson',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
    quote:
      'Alice has been a fantastic teammate. She always goes above and beyond to deliver high-quality work.',
  },
  {
    name: 'David Smith',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
    quote:
      'Working with David was a pleasure. His expertise and professionalism are unmatched.',
  },
  {
    name: 'Sophia Lee',
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
    quote:
      'Sophia’s designs are clean and elegant. She has a great eye for detail.',
  },
];

export default function TestimonialCard() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const selectTestimonial = (i: number) => {
    setIndex(i);
  };

  const testimonial = testimonials[index];

  return (
    <div className="flex flex-col items-center  min-h-screen bg-gray-100 p-6">
      <div className="max-w-lg text-center">
        <div className="flex justify-center  mb-4">
      <img src="/logo.jpg" alt="Logo" width={100} />
    </div>

        <h2 className="text-4xl font-bold mt-25 text-gray-800">Our Clients Say</h2>

         
    <div>
      {/* Testimonial Card */}
      <div className="bg-white p-16 mt-16 rounded-lg shadow-lg relative">
        {/* Profile Image */}
        <div className="flex items-center justify-center mb-4">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-20 h-20 rounded-full object-cover"
          />
        </div>

        {/* Quote */}
        <p className="text-gray-600 mb-4 text-center">"{testimonial.quote}"</p>

        {/* Name */}
        <p className="font-bold text-lg text-gray-700 text-center">{testimonial.name}</p>

        {/* Pagination Dots (INSIDE CARD ONLY) */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, i) => (
            <span
              key={i}
              onClick={() => selectTestimonial(i)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-200 ${
                i === index ? 'bg-purple-500' : 'bg-gray-300'
              }`}
            ></span>
          ))}
        </div>
      </div>

      {/* Navigation Buttons (OUTSIDE CARD) */}
      <div className="flex justify-center mt-6 space-x-4">
        <button onClick={prev} className="bg-purple-500 text-white p-3 rounded-full">
          &lt;
        </button>
        <button onClick={next} className="bg-purple-500 text-white p-3 rounded-full">
          &gt;
        </button>
      </div>
    </div>
    </div>
    </div>
  );
}
