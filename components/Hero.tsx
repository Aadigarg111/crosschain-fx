'use client';

import React from 'react';
import WaitlistButton from './WaitlistButton';

export default function Hero() {
  return (
    <section className="hero-gradient grid-pattern pt-32 pb-24 relative overflow-hidden">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Seamless Cross-Border <span className="gradient-text">Forex</span> on the Finternet
          </h1>
          <p className="text-[rgba(255,255,255,0.7)] text-lg mb-8">
            CrossChain FX leverages tokenization and unified ledger technology to enable instant, low-cost currency exchanges across global markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="primary-gradient text-white font-semibold px-6 py-3 rounded-lg cta-button">
              Start Trading
            </button>
            <WaitlistButton />
          </div>
        </div>
        
        <div className="relative">
          <div className="bg-[rgba(153,69,255,0.1)] rounded-xl p-8 glass-effect">
            <div className="glass-effect rounded-lg p-6 border border-[rgba(255,255,255,0.1)]">
              <h3 className="text-xl font-semibold mb-6">Exchange Currency</h3>
              
              <div className="mb-4">
                <label className="block text-sm text-[rgba(255,255,255,0.5)] mb-2">You Send</label>
                <div className="flex bg-[#232323] rounded-lg overflow-hidden border border-[rgba(255,255,255,0.1)]">
                  <input 
                    type="number" 
                    defaultValue="1000" 
                    className="flex-1 bg-transparent border-none px-4 py-3 text-white focus:outline-none"
                  />
                  <select className="w-24 bg-[rgba(153,69,255,0.1)] border-l border-[rgba(255,255,255,0.1)] text-white px-2 py-3 focus:outline-none">
                    <option>USD</option>
                    <option>EUR</option>
                    <option>GBP</option>
                  </select>
                </div>
              </div>
              
              <div className="flex justify-center my-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#14F195" viewBox="0 0 24 24" className="w-6 h-6">
                  <path d="M7 10l5 5 5-5z"/>
                </svg>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm text-[rgba(255,255,255,0.5)] mb-2">Recipient Gets</label>
                <div className="flex bg-[#232323] rounded-lg overflow-hidden border border-[rgba(255,255,255,0.1)]">
                  <input 
                    type="number" 
                    defaultValue="920.50" 
                    className="flex-1 bg-transparent border-none px-4 py-3 text-white focus:outline-none"
                  />
                  <select className="w-24 bg-[rgba(153,69,255,0.1)] border-l border-[rgba(255,255,255,0.1)] text-white px-2 py-3 focus:outline-none">
                    <option>EUR</option>
                    <option>USD</option>
                    <option>GBP</option>
                  </select>
                </div>
              </div>
              
              <p className="text-center text-sm text-[rgba(255,255,255,0.5)] mb-6">1 USD = 0.9205 EUR</p>
              
              <button className="w-full primary-gradient text-white font-semibold py-3 rounded-lg cta-button">
                Exchange Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
