'use client';

import React, { useState } from 'react';

export default function WaitlistButton() {
  const [email, setEmail] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setEmail('');
      
      // Close modal after success message is shown
      setTimeout(() => {
        setIsModalOpen(false);
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <>
      <button 
        onClick={() => setIsModalOpen(true)}
        className="primary-gradient text-white font-semibold px-6 py-3 rounded-lg cta-button"
      >
        Join Waitlist
      </button>

      {/* Modal Backdrop */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          {/* Modal Content */}
          <div className="glass-effect rounded-xl p-6 max-w-md w-full border border-[rgba(255,255,255,0.1)] relative">
            {/* Close Button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-[rgba(255,255,255,0.7)] hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {!isSubmitted ? (
              <>
                <h3 className="text-2xl font-bold mb-2">Join Our Waitlist</h3>
                <p className="text-[rgba(255,255,255,0.7)] mb-6">
                  Be the first to know when CrossChain FX launches. Get early access and exclusive benefits.
                </p>
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm text-[rgba(255,255,255,0.7)] mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="w-full bg-[#232323] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#14F195] transition-colors"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full primary-gradient text-white font-semibold py-3 rounded-lg cta-button flex items-center justify-center"
                  >
                    {isLoading ? (
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : "Join Waitlist"}
                  </button>
                </form>
                
                <p className="text-xs text-[rgba(255,255,255,0.5)] mt-4 text-center">
                  By joining, you agree to our Terms of Service and Privacy Policy.
                </p>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 primary-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                <p className="text-[rgba(255,255,255,0.7)]">
                  You've been added to our waitlist. We'll notify you when CrossChain FX launches.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
