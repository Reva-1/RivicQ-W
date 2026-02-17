
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight, Lock, Zap, Activity, Cloud, Search, CheckCircle2, ShieldAlert, Cpu, Globe, Info, Target, Users, Microscope } from 'lucide-react';
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
              Protecting the world's most critical data from the machines of tomorrow. We bridge the gap between legacy security and future-proof resilience.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 not-prose mb-12">
            <Link to="/enterprise" className="px-10 py-4 bg-slate-900 text-white rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl shadow-slate-200 flex items-center gap-2">
              Explore Enterprise <ArrowRight size={14}/>
            </Link>
            <Link to="/cloud-hsm" className="px-10 py-4 bg-white border border-slate-200 text-slate-600 rounded-lg font-bold text-xs uppercase tracking-widest hover:border-slate-900 transition-all">
              HSM Infrastructure
            </Link>
          </div>
        </div>
      </section>

      {/* Simplified Identity Section */}
      <section className="py-24 border-y border-slate-100 not-prose">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4 m-0">Security Simplified</h2>
          <p className="text-slate-500 text-sm uppercase tracking-widest font-bold">The RivicQ Foundation</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Who we are */}
          <div className="flex flex-col items-center text-center p-8 bg-slate-50 rounded-[3rem] border border-slate-100">
            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-blue-600 mb-6 border border-slate-100">
              <Users size={28} />
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-900 mb-4">Who we are</h3>
            <p className="text-slate-600 text-sm leading-relaxed m-0">
              A team of security engineers and quantum researchers in Berlin, dedicated to fixing the fundamental flaw in global encryption before quantum computers break it.
            </p>
          </div>

          {/* What we do */}
          <div className="flex flex-col items-center text-center p-8 bg-slate-50 rounded-[3rem] border border-slate-100">
            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-emerald-600 mb-6 border border-slate-100">
              <Target size={28} />
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-900 mb-4">What we do</h3>
            <p className="text-slate-600 text-sm leading-relaxed m-0">
              We help companies find weak "locks" in their software and replace them with new, quantum-safe ones, keeping their secrets safe for the next 50 years.
            </p>
          </div>

          {/* How we do it */}
          <div className="flex flex-col items-center text-center p-8 bg-slate-50 rounded-[3rem] border border-slate-100">
            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-indigo-600 mb-6 border border-slate-100">
              <Cpu size={28} />
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-900 mb-4">How we do it</h3>
            <p className="text-slate-600 text-sm leading-relaxed m-0">
              We use AI to scan your code, create a digital inventory (CryptoBOM), and provide a physical "cloud vault" (Cloud HSM) to store your new keys.
            </p>
          </div>
        </div>
      </section>

      {/* Strategic Challenge & Solution */}
      <section className="py-20 not-prose">
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

      {/* Core Technology: HSM Blueprint */}
      <section className="not-prose -mx-8 md:-mx-16 mb-24 bg-slate-50 py-24 border-y border-slate-100">
        <div className="px-8 md:px-16 mb-12 text-center">
            <h2 className="text-3xl font-serif font-bold text-slate-900 m-0">Hardware-Rooted Trust</h2>
            <p className="text-sm text-slate-500 mt-3 font-bold uppercase tracking-widest">Virtualized HSM Boundary (FIPS 140-3)</p>
        </div>
        <HSMBlueprint />
      </section>

      {/* CTA Section */}
      <section className="py-24 text-center not-prose bg-slate-900 text-white rounded-[4rem] px-8 md:px-16 mb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-technical opacity-5"></div>
        <div className="relative z-10">
          <h2 className="text-4xl font-serif font-bold mb-6 text-white m-0">Ready to secure your future?</h2>
          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto italic">
            "The future belongs to those who prepare for it today." Join the elite enterprises already transitioning to quantum-safe infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/enterprise" className="px-10 py-4 bg-blue-600 text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-blue-500 transition-all shadow-xl shadow-blue-500/20">
              Enterprise End-to-End Demo
            </Link>
            <Link to="/ideal-customer" className="px-10 py-4 border border-slate-700 text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-white/5 transition-all">
              Are you an Ideal Customer?
            </Link>
          </div>
        </div>
      </section>

    </article>
  );
};

// Internal icon proxy for local use
const ShieldIcon = ShieldCheck;

export default Home;
