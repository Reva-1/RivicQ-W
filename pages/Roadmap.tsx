
import React from 'react';

const Roadmap: React.FC = () => {
  return (
    <article className="prose prose-lg prose-slate max-w-none">
      <h1>Roadmap 2026-2030</h1>
      <p className="lead font-serif italic text-slate-500">Our trajectory toward complete cryptographic resiliency.</p>

      <div className="not-prose mt-10">
        <div className="border-l-2 border-slate-100 pl-8 space-y-12">
          
          <div className="relative">
            <span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full bg-slate-900 border-4 border-white"></span>
            <h3 className="font-serif text-xl font-bold">2026 - Current</h3>
            <div className="mt-2 text-blue-600 font-sans text-[10px] font-bold uppercase tracking-widest">Foundation & PQC-Native SaaS</div>
            <ul className="mt-4 list-disc list-outside ml-4 space-y-2 text-slate-600 font-serif">
               <li>ISO 27001:2022 Certification</li>
               <li>FIPS 140-3 Level 3 HSM Integration Mesh</li>
               <li>CryptoBOM SaaS Enterprise Launch</li>
               <li>Pilot programs with Berlin Deep-Tech partners</li>
            </ul>
          </div>

          <div className="relative">
            <span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full bg-slate-300 border-4 border-white"></span>
            <h3 className="font-serif text-xl font-bold text-slate-500">2027</h3>
            <div className="mt-2 text-slate-400 font-sans text-[10px] font-bold uppercase tracking-widest">Hardware Expansion</div>
            <ul className="mt-4 list-disc list-outside ml-4 space-y-2 text-slate-500 font-serif">
               <li>Custom ASIC PQC Accelerator prototyping</li>
               <li>PCI DSS v4.0 HSM Migration Modules</li>
               <li>Hybrid ML-KEM Global Registry</li>
            </ul>
          </div>

          <div className="relative">
            <span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full bg-slate-200 border-4 border-white"></span>
            <h3 className="font-serif text-xl font-bold text-slate-400">2028 - 2030</h3>
            <div className="mt-2 text-slate-400 font-sans text-[10px] font-bold uppercase tracking-widest">Self-Healing Infrastructure</div>
            <ul className="mt-4 list-disc list-outside ml-4 space-y-2 text-slate-400 font-serif">
               <li>NIST AI RMF 1.0 Compliance Engine</li>
               <li>Automated Cryptographic Remediation</li>
               <li>Full Classical Primitive Retirement (Internal Mesh)</li>
            </ul>
          </div>

        </div>
      </div>
    </article>
  );
};

export default Roadmap;
