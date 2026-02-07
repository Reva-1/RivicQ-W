import React from 'react';

const Roadmap: React.FC = () => {
  return (
    <article className="prose prose-lg prose-slate max-w-none">
      <h1>Roadmap</h1>
      <p>Our path to full quantum resiliency.</p>

      <div className="not-prose mt-10">
        <div className="border-l-2 border-gray-100 pl-8 space-y-12">
          
          <div className="relative">
            <span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full bg-black border-4 border-white"></span>
            <h3 className="font-serif text-xl font-bold">2026 - Current</h3>
            <div className="mt-2 text-gray-600 font-sans text-sm">Phase 1: Compliance & Foundation</div>
            <ul className="mt-4 list-disc list-outside ml-4 space-y-2 text-gray-700 font-serif">
               <li>ISO 27001:2022 Certification</li>
               <li>FIPS 140-3 Level 3 HSM Integration</li>
               <li>CryptoBOM SaaS MVP Launch</li>
               <li>Pilot programs with Berlin Fintech partners</li>
            </ul>
          </div>

          <div className="relative">
            <span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full bg-gray-300 border-4 border-white"></span>
            <h3 className="font-serif text-xl font-bold text-gray-500">2027</h3>
            <div className="mt-2 text-gray-500 font-sans text-sm">Phase 2: Expansion & Identity</div>
            <ul className="mt-4 list-disc list-outside ml-4 space-y-2 text-gray-500 font-serif">
               <li>eIDAS 2.0 / EUDI Wallet Integration</li>
               <li>PCI DSS v4.0 Full Quantum Migration</li>
               <li>Cross-Chain Identity Bridge Mainnet</li>
            </ul>
          </div>

          <div className="relative">
            <span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full bg-gray-200 border-4 border-white"></span>
            <h3 className="font-serif text-xl font-bold text-gray-400">2028 - 2030</h3>
            <div className="mt-2 text-gray-400 font-sans text-sm">Phase 3: Deep Tech</div>
            <ul className="mt-4 list-disc list-outside ml-4 space-y-2 text-gray-400 font-serif">
               <li>NIST AI RMF 1.0 Compliance</li>
               <li>Automated Remediation (Self-Healing Crypto)</li>
               <li>EU Cyber Resilience Act Certification</li>
            </ul>
          </div>

        </div>
      </div>
    </article>
  );
};

export default Roadmap;