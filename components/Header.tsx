'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 glass-effect border-b border-[rgba(255,255,255,0.1)]">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="primary-gradient w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold mr-2">
            FX
          </div>
          <span className="text-xl font-bold gradient-text">CrossChain FX</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            <li><Link href="#features" className="text-white hover:text-[#14F195] font-medium nav-link">Features</Link></li>
            <li><Link href="#how-it-works" className="text-white hover:text-[#14F195] font-medium nav-link">How It Works</Link></li>
            <li><Link href="#testimonials" className="text-white hover:text-[#14F195] font-medium nav-link">Testimonials</Link></li>
            <li><Link href="#contact" className="text-white hover:text-[#14F195] font-medium nav-link">Contact</Link></li>
          </ul>
        </nav>

        <button className="hidden md:block primary-gradient text-white font-semibold px-6 py-2 rounded-lg cta-button">
          Get Started
        </button>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-effect">
          <nav className="container mx-auto px-4 py-4">
            <ul className="flex flex-col gap-4">
              <li><Link href="#features" className="block text-white hover:text-[#14F195] font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Features</Link></li>
              <li><Link href="#how-it-works" className="block text-white hover:text-[#14F195] font-medium py-2" onClick={() => setMobileMenuOpen(false)}>How It Works</Link></li>
              <li><Link href="#testimonials" className="block text-white hover:text-[#14F195] font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Testimonials</Link></li>
              <li><Link href="#contact" className="block text-white hover:text-[#14F195] font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
              <li>
                <button className="w-full primary-gradient text-white font-semibold px-6 py-2 rounded-lg cta-button">
                  Get Started
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
