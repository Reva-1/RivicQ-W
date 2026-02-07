import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <article className="prose prose-lg prose-slate max-w-none">
      
      {/* Introduction: Who Are We */}
      <section>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Classical & Quantum Safe Security</h1>
        <p className="lead text-xl text-gray-600 font-serif italic mb-6">
          RivicQ is a Berlin-based Deep Tech startup building the transition layer for the post-quantum internet.
        </p>
        <div className="p-4 border-l-4 border-black bg-gray-50 mb-6">
          <p className="font-bold font-serif text-lg m-0">
             RivicQ: Robust Integrated Verified Identity Computing Quantum
          </p>
        </div>
        <p>
           We are a team of cryptographers and engineers based at the <strong>Leap Berlin Quantum Accelerator</strong>. 
           We specialize in Post-Quantum Cryptography (PQC), Hardware Security Modules (HSM), and Automated Compliance.
        </p>
      </section>

      <hr className="my-10 border-gray-100" />

      {/* The Problem */}
      <section>
        <h2>The Problem</h2>
        <p className="font-bold text-gray-900">Do you have a problem with your current cybersecurity?</p>
        <p>
          If you manage critical infrastructure, financial data, or long-term secrets, the answer is likely <strong>yes</strong>, even if you don't know it yet.
        </p>
        <ul>
          <li>
            <strong>Harvest Now, Decrypt Later (HNDL):</strong> State-sponsored actors are intercepting encrypted traffic today to decrypt it once powerful quantum computers arrive.
          </li>
          <li>
            <strong>Regulatory Pressure:</strong> New mandates like <strong>DORA</strong>, <strong>PCI DSS v4.0</strong>, and <strong>NIS2</strong> require organizations to demonstrate crypto-agility and stronger key management.
          </li>
          <li>
            <strong>Supply Chain & BOM Risks:</strong> Modern infrastructure relies on opaque third-party dependencies. Without visibility into your <strong>SBOM</strong> (Software), <strong>HBOM</strong> (Hardware), <strong>AIBOM</strong> (AI), and <strong>CBOM</strong> (Crypto Bill of Materials), you are vulnerable to compromised upstream components with outdated cryptography.
          </li>
        </ul>
      </section>

      {/* What We Do / Solution */}
      <section>
        <h2>What We Do</h2>
        <p>
          We provide a <strong>hybrid security platform</strong>. We don't ask you to rip and replace your entire infrastructure. Instead, we wrap your existing systems in a quantum-safe shell.
        </p>
        
        {/* Pen Art / Sketch Style HSM Architecture Diagram */}
        <div className="not-prose my-12 p-8 bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-xl">
          <h3 className="font-serif font-bold text-2xl mb-8 text-center underline decoration-wavy decoration-gray-400 underline-offset-8">RivicQ System Architecture</h3>
          
          <div className="flex flex-col gap-6 max-w-2xl mx-auto">
            
            {/* Layer 1: Application */}
            <div className="flex flex-col items-center">
              <div className="w-full bg-white border-2 border-black rounded-lg p-4 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
                <span className="text-xs font-bold tracking-widest text-black uppercase border-b-2 border-gray-200 pb-1 mb-2 block">Application Layer</span>
                <div className="font-serif font-bold text-lg text-black">Client Apps / SDKs</div>
                <div className="text-xs text-gray-500 font-mono mt-1">(TLS 1.3 + Hybrid PQC)</div>
              </div>
              {/* Connector */}
              <div className="h-8 w-0.5 bg-black border-l-2 border-dashed border-black my-1"></div>
            </div>

            {/* Layer 2: RivicQ Gateway */}
            <div className="flex flex-col items-center">
              <div className="w-full bg-white border-2 border-black rounded-lg p-6 relative shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
                <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white border-2 border-black px-4 py-1 text-sm font-bold text-black uppercase tracking-widest rounded-full">RivicQ Core</span>
                <div className="grid grid-cols-2 gap-6 mt-4">
                  <div className="border-2 border-black p-3 rounded bg-gray-50 text-center">
                    <div className="text-xs font-bold uppercase mb-1">Policy Engine</div>
                    <div className="font-serif italic">CryptoBOM</div>
                  </div>
                  <div className="border-2 border-black p-3 rounded bg-gray-50 text-center">
                    <div className="text-xs font-bold uppercase mb-1">Algorithms</div>
                    <div className="font-serif italic">NIST FIPS 203/204</div>
                  </div>
                </div>
              </div>
              {/* Connector */}
              <div className="h-8 w-0.5 bg-black border-l-2 border-dashed border-black my-1"></div>
            </div>

            {/* Layer 3: Hardware Root of Trust */}
            <div className="w-full bg-black border-2 border-black rounded-lg p-6 text-center text-white shadow-[4px_4px_0px_0px_rgba(100,100,100,1)]">
              <span className="text-xs font-bold tracking-widest text-gray-300 uppercase border-b border-gray-600 pb-1 mb-3 block">Hardware Root of Trust (HSM Layer)</span>
              <div className="flex justify-center flex-wrap gap-4 mt-4 font-mono text-sm">
                <span className="border border-white px-3 py-1 rounded hover:bg-white hover:text-black transition-colors cursor-default">AWS CloudHSM</span>
                <span className="border border-white px-3 py-1 rounded hover:bg-white hover:text-black transition-colors cursor-default">Thales Luna</span>
                <span className="border border-white px-3 py-1 rounded hover:bg-white hover:text-black transition-colors cursor-default">IBM 4769</span>
              </div>
            </div>

          </div>
          <p className="text-center text-xs font-mono text-gray-500 mt-8">
            Fig 1.0 - High-Assurance Hybrid Architecture Sketch
          </p>
        </div>
      </section>

      {/* How Will This Help You */}
      <section>
        <h2>How This Helps You</h2>
        <div className="grid md:grid-cols-2 gap-8 not-prose">
          <div className="bg-white p-6 border-l-4 border-black shadow-sm">
            <h4 className="font-serif font-bold text-xl mb-3">Future-Proof Security</h4>
            <p className="text-gray-700 leading-relaxed">
              Your data remains secure even if RSA is broken tomorrow. By implementing hybrid keys (Classical + Quantum), you get the best of both worlds without sacrificing performance.
            </p>
          </div>
          <div className="bg-white p-6 border-l-4 border-black shadow-sm">
            <h4 className="font-serif font-bold text-xl mb-3">Automated Compliance</h4>
            <p className="text-gray-700 leading-relaxed">
              Pass audits faster. Our CryptoBOM automatically maps your cryptographic assets to regulatory requirements, saving you months of manual auditing for DORA and ISO standards.
            </p>
          </div>
        </div>
      </section>

      <div className="not-prose mt-12 p-8 bg-black text-white rounded-xl shadow-xl font-sans text-center">
        <h4 className="font-bold text-xl mb-4">Ready to secure your infrastructure?</h4>
        <p className="text-gray-300 mb-6 max-w-xl mx-auto">
          RivicQ is currently working with select partners in Finance and Critical Infrastructure.
        </p>
        <Link to="/platform" className="inline-block px-6 py-3 bg-white text-black font-bold rounded hover:bg-gray-200 transition-colors">
          View Technical Specs
        </Link>
      </div>
    </article>
  );
};

export default Home;