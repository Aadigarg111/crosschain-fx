'use client';

import React from 'react';
import WaitlistButton from './WaitlistButton';

export default function CTA() {
  return (
    <section id="contact" className="hero-gradient py-24 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Transform Your Cross-Border Payments?
        </h2>
        <p className="text-[rgba(255,255,255,0.7)] max-w-2xl mx-auto mb-8">
          Join thousands of businesses and individuals who are already saving time and money with CrossChain FX.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="primary-gradient text-white font-semibold px-8 py-3 rounded-lg cta-button">
            Get Started Today
          </button>
          <WaitlistButton />
        </div>
      </div>
    </section>
  );
}
