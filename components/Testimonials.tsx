'use client';

import React from 'react';

interface TestimonialProps {
  content: string;
  name: string;
  title: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ content, name, title }) => (
  <div className="dark-gradient rounded-xl p-6 border border-[rgba(255,255,255,0.1)]">
    <p className="text-[rgba(255,255,255,0.7)] italic mb-6">{content}</p>
    <div className="flex items-center">
      <div className="primary-gradient w-12 h-12 rounded-full mr-4"></div>
      <div>
        <h4 className="font-semibold">{name}</h4>
        <p className="text-sm text-[rgba(255,255,255,0.5)]">{title}</p>
      </div>
    </div>
  </div>
);

export default function Testimonials() {
  const testimonials = [
    {
      content: "CrossChain FX has transformed how our business handles international payments. We've reduced our forex costs by 85% and can now settle transactions in seconds instead of days.",
      name: "Sarah Johnson",
      title: "CFO, Global Imports Ltd."
    },
    {
      content: "As someone who regularly sends money to family abroad, CrossChain FX has been a game-changer. The fees are transparent, the rates are competitive, and the money arrives instantly.",
      name: "Miguel Hernandez",
      title: "Software Engineer"
    },
    {
      content: "The API integration was seamless, allowing us to incorporate CrossChain FX's capabilities directly into our financial management system. Our treasury operations have never been more efficient.",
      name: "David Chen",
      title: "CTO, TechFinance Solutions"
    }
  ];

  return (
    <section id="testimonials" className="bg-[#121212] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="gradient-text">Users Say</span>
          </h2>
          <p className="text-[rgba(255,255,255,0.7)] max-w-3xl mx-auto">
            Businesses and individuals around the world trust CrossChain FX for their cross-border payment needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={index}
              content={testimonial.content}
              name={testimonial.name}
              title={testimonial.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
