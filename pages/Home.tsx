
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight, Lock, Zap, Activity, Cloud, Search, CheckCircle2, ShieldAlert, Cpu, Globe } from 'lucide-react';
import HSMBlueprint from '../components/HSMBlueprint';

const Home: React.FC = () => {
  return (
    <article className="prose prose-slate max-w-none">
      
      {/* Hero Section */}
      <section className="pt-12 md:pt-16 mb-20 relative">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 text-white text-[9px] font-bold uppercase tracking-[0.2em] mb-8 shadow-sm">
            <Activity size={10} className="text-blue-400 animate-pulse"/>
            Infrastructure Status: Operational • Quantum-Ready
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.05] tracking-tight text-slate-900">
            Resilient Infrastructure for the <br/> <span className="text-blue-600">Quantum Era.</span>
          </h1>
          <div className="mb-12">
            <p className="text-xl md:text-2xl text-slate-500 font-serif italic leading-relaxed m-0 max-w-3xl">
              RivicQ provides the architectural transition layer for enterprise security. We facilitate the migration from legacy cryptographic primitives to NIST-standardized Post-Quantum Cryptography (PQC).
            </p>
          </div>
          <div className="flex flex-wrap gap-4 not-prose mb-12">
            <Link to="/platform" className="px-10 py-4 bg-slate-900 text-white rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl shadow-slate-200">
              Technical Overview
            </Link>
            <Link to="/cloud-hsm" className="px-10 py-4 bg-white border border-slate-200 text-slate-600 rounded-lg font-bold text-xs uppercase tracking-widest hover:border-slate-900 transition-all">
              HSM Infrastructure
            </Link>
          </div>
        </div>
      </section>

      {/* Strategic Challenge & Solution */}
      <section className="py-20 border-t border-slate-100 not-prose">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
             <span className="text-blue-600 font-bold text-[10px] uppercase tracking-[0.2em] mb-3 block">Market Exposure</span>
             <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6 m-0">Cryptographic Obsolescence</h2>
             <p className="text-slate-600 leading-relaxed text-base m-0">
               Current asymmetric encryption standards (RSA/ECC) face terminal vulnerability from fault-tolerant quantum computing. 'Harvest Now, Decrypt Later' (HNDL) strategies already compromise the long-term integrity of sensitive enterprise and governmental data.
             </p>
          </div>
          <div>
             <span className="text-blue-600 font-bold text-[10px] uppercase tracking-[0.2em] mb-3 block">RivicQ Framework</span>
             <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6 m-0">Quantum-Resistant Primitives</h2>
             <p className="text-slate-600 leading-relaxed text-base m-0">
               RivicQ orchestrates the deployment of lattice-based cryptographic primitives. By decoupling security logic from the application layer through our Cloud HSM mesh, we enable seamless crypto-agility and regulatory compliance across distributed environments.
             </p>
          </div>
        </div>
      </section>

      {/* Operational Methodology */}
      <section className="py-20 bg-slate-50 rounded-[3rem] px-8 md:px-16 mb-24 not-prose border border-slate-100">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4 m-0">Operational Methodology</h2>
          <p className="text-slate-500 text-sm uppercase tracking-widest font-bold">Standardized Integration Lifecycle</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 transition-all hover:shadow-xl hover:border-blue-100 group">
            <div className="w-12 h-12 bg-slate-50 text-slate-900 rounded-xl flex items-center justify-center mb-8 border border-slate-100 group-hover:bg-slate-900 group-hover:text-white transition-all">
              <Search size={22} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-4 m-0">01. Discovery</h3>
            <p className="text-slate-500 text-sm leading-relaxed m-0">
              Automated scanning of the cryptographic estate to identify legacy dependencies and calculate organizational Quantum Risk Scores.
            </p>
          </div>

          <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 transition-all hover:shadow-xl hover:border-blue-100 group">
            <div className="w-12 h-12 bg-slate-50 text-slate-900 rounded-xl flex items-center justify-center mb-8 border border-slate-100 group-hover:bg-slate-900 group-hover:text-white transition-all">
              <Cloud size={22} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-4 m-0">02. Isolation</h3>
            <p className="text-slate-500 text-sm leading-relaxed m-0">
              Virtualization of root-of-trust through FIPS 140-3 Cloud HSMs, establishing a hardware-anchored boundary for sensitive key material.
            </p>
          </div>

          <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 transition-all hover:shadow-xl hover:border-blue-100 group">
            <div className="w-12 h-12 bg-slate-50 text-slate-900 rounded-xl flex items-center justify-center mb-8 border border-slate-100 group-hover:bg-slate-900 group-hover:text-white transition-all">
              <ShieldCheck size={22} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-4 m-0">03. Transformation</h3>
            <p className="text-slate-500 text-sm leading-relaxed m-0">
              Deployment of ML-KEM and ML-DSA primitives via the RQSP protocol, ensuring compliance with NIST and EU regulatory mandates.
            </p>
          </div>
        </div>
      </section>

      {/* Strategic Outcomes */}
      <section className="py-20 not-prose mb-24 border-b border-slate-100">
        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12 text-center m-0">Strategic Outcomes</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
           <div className="flex items-start gap-5 p-8 border border-slate-100 rounded-3xl hover:border-blue-200 transition-all bg-white group">
              <div className="p-3 bg-slate-50 rounded-xl text-emerald-600 group-hover:bg-emerald-50 transition-colors">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 m-0 text-lg">Regulatory Alignment</h4>
                <p className="text-sm text-slate-500 mt-2 m-0 leading-relaxed">Immediate compliance with DORA, NIS2, and CNSA 2.0 cryptographic mandates through automated remediation paths.</p>
              </div>
           </div>
           <div className="flex items-start gap-5 p-8 border border-slate-100 rounded-3xl hover:border-blue-200 transition-all bg-white group">
              <div className="p-3 bg-slate-50 rounded-xl text-blue-600 group-hover:bg-blue-50 transition-colors">
                <ShieldIcon size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 m-0 text-lg">Long-Term Data Sovereignty</h4>
                <p className="text-sm text-slate-500 mt-2 m-0 leading-relaxed">Securing mission-critical data assets against the 50-year cryptographic threat horizon through PQC orchestration.</p>
              </div>
           </div>
        </div>
      </section>

      {/* Core Technology: HSM Blueprint */}
      <section className="not-prose -mx-8 md:-mx-16 mb-24 bg-slate-50 py-24 border-y border-slate-100">
        <div className="px-8 md:px-16 mb-12 text-center">
            <h2 className="text-3xl font-serif font-bold text-slate-900 m-0">Hardware-Rooted Trust</h2>
            <p className="text-sm text-slate-500 mt-3 font-bold uppercase tracking-widest">Virtualized HSM Boundary (FIPS 140-3)</p>
        </div>
        <HSMBlueprint />
      </section>

      {/* Narrative Section */}
      <section className="py-24">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          <div>
            <h2 className="text-4xl font-serif font-bold mb-8 text-slate-900 leading-[1.1] m-0">Berlin Deep-Tech.<br/> Global Governance.</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-10">
              RivicQ operates at the intersection of mathematical theory and hardware engineering. Based in Berlin's Adlershof WISTA innovation hub, we collaborate with elite research institutions to validate the reliability of quantum-safe architectures for global enterprise.
            </p>
            <div className="space-y-4 not-prose">
              {[
                { title: "Standardized Frameworks", desc: "Native integration of NIST-approved lattice-based primitives." },
                { title: "Distributed Orchestration", desc: "Cloud-native HSM virtualization for global service delivery." },
                { title: "Continuous Integrity", desc: "Autonomous auditing of the cryptographic bill of materials (CBOM)." }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-5 p-5 rounded-2xl border border-slate-100 bg-white hover:border-slate-300 transition-all shadow-sm group">
                  <div className="p-2.5 bg-slate-50 text-slate-900 rounded-lg group-hover:bg-slate-900 group-hover:text-white transition-all">
                    <ShieldCheck size={20}/>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 m-0">{item.title}</h4>
                    <p className="text-xs text-slate-500 m-0 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-950 text-white p-12 md:p-16 rounded-[3rem] relative overflow-hidden group shadow-2xl">
            <div className="absolute top-0 right-0 p-10 opacity-10">
              <Globe size={140} className="text-blue-400"/>
            </div>
            <div className="absolute inset-0 bg-technical opacity-5"></div>
            <div className="relative z-10">
              <div className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.3em] mb-4">Strategic Residency</div>
              <h3 className="text-white text-3xl font-serif mb-6 m-0">Leap Berlin Quantum Hub</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-10">
                Anchored within the city's premier deep-tech ecosystem, RivicQ validates its architectural primitives against high-performance hardware benchmarks to ensure commercial scalability.
              </p>
              <div className="grid grid-cols-2 gap-8">
                 <div>
                    <span className="block text-2xl font-bold text-white tracking-tight">TRL 4-5</span>
                    <span className="text-[9px] text-slate-500 uppercase tracking-widest font-bold">Readiness Level</span>
                 </div>
                 <div>
                    <span className="block text-2xl font-bold text-white tracking-tight">FIPS 140-3</span>
                    <span className="text-[9px] text-slate-500 uppercase tracking-widest font-bold">Certification Goal</span>
                 </div>
              </div>
              <Link to="/story" className="mt-12 inline-flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-widest hover:text-white transition-colors group/link">
                Corporate History <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform"/>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </article>
  );
};

// Internal icon proxy for local use
const ShieldIcon = ShieldCheck;

export default Home;
