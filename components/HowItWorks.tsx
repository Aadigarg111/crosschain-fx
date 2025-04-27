'use client';

import React from 'react';

interface StepProps {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
}

const Step: React.FC<StepProps> = ({ number, title, description, isLast = false }) => (
  <div className="relative">
    <div className="flex flex-col items-center">
      <div className="primary-gradient w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mb-6 z-10">
        {number}
      </div>
      {!isLast && (
        <div className="absolute top-6 left-1/2 w-full h-0.5 primary-gradient -z-10 hidden md:block"></div>
      )}
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-[rgba(255,255,255,0.7)] text-center max-w-xs">{description}</p>
    </div>
  </div>
);

export default function HowItWorks() {
  const steps = [
    {
      title: 'Create Account',
      description: 'Sign up and complete the streamlined KYC/AML verification process.'
    },
    {
      title: 'Deposit Funds',
      description: 'Fund your account with your local currency through multiple payment methods.'
    },
    {
      title: 'Exchange Currency',
      description: 'Select currency pairs and execute trades with real-time rates and minimal fees.'
    },
    {
      title: 'Instant Settlement',
      description: 'Receive funds in the target currency instantly, ready for withdrawal or further use.'
    }
  ];

  return (
    <section id="how-it-works" className="radial-gradient-purple py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="gradient-text">CrossChain FX</span> Works
          </h2>
          <p className="text-[rgba(255,255,255,0.7)] max-w-3xl mx-auto">
            Our platform simplifies the cross-border forex process through tokenization and unified ledger technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {steps.map((step, index) => (
            <Step 
              key={index}
              number={index + 1}
              title={step.title}
              description={step.description}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
