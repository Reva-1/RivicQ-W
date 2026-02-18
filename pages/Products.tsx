
import React from 'react';
// Added missing Link import from react-router-dom
import { Link } from 'react-router-dom';
import { Github, Layout, ArrowRight, CheckCircle2, Shield, Zap, Database, Globe, Lock, Server, Search } from 'lucide-react';
import ProductDemo from '../components/ProductDemo';

const ProductTier: React.FC<{
  title: string,
  price: string,
  badge?: string,
  features: string[],
  ctaText: string,
  ctaLink: string,
  isDark?: boolean
}> = ({ title, price, badge, features, ctaText, ctaLink, isDark }) => (
  <div className={`p-8 rounded-[2.5rem] border flex flex-col h-full transition-all duration-300 ${isDark ? 'bg-slate-900 border-slate-800 text-white shadow-2xl' : 'bg-white border-slate-200 text-slate-900 shadow-sm hover:border-blue-300'}`}>
    <div className="mb-6">
      {badge && (
        <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 ${isDark ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600'}`}>
          {badge}
        </span>
      )}
      <h3 className="text-2xl font-serif font-bold mb-2">{title}</h3>
      <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{price}</p>
    </div>
    
    <div className="flex-grow space-y-4 mb-8">
      {features.map((feat, i) => (
        <div key={i} className="flex items-start gap-3">
          <CheckCircle2 size={16} className={`shrink-0 mt-0.5 ${isDark ? 'text-emerald-400' : 'text-blue-600'}`} />
          <span className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{feat}</span>
        </div>
      ))}
    </div>

    <button 
      onClick={() => window.location.href = ctaLink}
      className={`w-full py-4 rounded-xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all ${
        isDark 
        ? 'bg-blue-600 text-white hover:bg-blue-500' 
        : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
      }`}
    >
      {ctaText} {ctaLink.includes('github') ? <Github size={14}/> : <ArrowRight size={14}/>}
    </button>
  </div>
);

const Products: React.FC = () => {
  return (
    <article className="prose prose-slate max-w-none">
      <header className="mb-16 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[9px] font-bold uppercase tracking-[0.2em] mb-6">
          RivicQ Product Suite
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-slate-900">
          CryptoBOM <span className="text-blue-600">SaaS.</span>
        </h1>
        <p className="text-xl text-slate-500 font-serif italic leading-relaxed">
          Advanced infrastructure to inventory, analyze, and remediate cryptographic assets across global distributed environments.
        </p>
      </header>

      {/* Visual Demo Section */}
      <section className="not-prose mb-24">
        <ProductDemo />
        <div className="mt-6 flex justify-center gap-8 text-[10px] font-bold uppercase tracking-widest text-slate-400">
          <div className="flex items-center gap-2"><Search size={12}/> 1. Discovery (SaaS)</div>
          <div className="flex items-center gap-2"><Database size={12}/> 2. Inventory (CBOM)</div>
          <div className="flex items-center gap-2"><Shield size={12}/> 3. Secure (vHSM)</div>
        </div>
      </section>

      {/* Product Tiers */}
      <section className="mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-slate-900 m-0">Deployment Options</h2>
          <p className="text-slate-500 mt-2">Open source for auditability, Enterprise for institutional scale.</p>
        </div>

        <div className="not-prose grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <ProductTier 
            title="Open Source (OSS)"
            price="Community Licensed"
            badge="Developer Core"
            features={[
              "Local CLI Binary",
              "CycloneDX CBOM Generation",
              "Static Primitives Analysis",
              "Community Governance"
            ]}
            ctaText="View Repository"
            ctaLink="https://github.com/rivic-q"
          />

          <ProductTier 
            title="Enterprise SaaS"
            price="Institutional Scale"
            badge="Advanced Governance"
            isDark
            features={[
              "CI/CD Orchestration",
              "Managed NIST Remediation",
              "Cloud HSM Root-of-Trust",
              "Regulatory Compliance Mapping",
              "SLA-backed Infrastructure"
            ]}
            ctaText="Join Enterprise Pilot"
            ctaLink="mailto:contact@rivicq.xyz?subject=Enterprise Pilot Inquiry"
          />
        </div>
      </section>

      {/* Value Pillars */}
      <section className="mb-24">
        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-10 text-center">Institutional Cryptographic Visibility</h2>
        <div className="not-prose grid md:grid-cols-3 gap-6">
           <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100">
              <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 mb-4">
                 <Zap size={20}/>
              </div>
              <h4 className="font-bold text-slate-900 mb-2 text-base">Full Stack Audit</h4>
              <p className="text-xs text-slate-500 leading-relaxed m-0">Detect vulnerable keys, certificates, and legacy algorithms deep within binaries and container images.</p>
           </div>
           <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100">
              <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-emerald-600 mb-4">
                 <Lock size={20}/>
              </div>
              <h4 className="font-bold text-slate-900 mb-2 text-base">Automated Compliance</h4>
              <p className="text-xs text-slate-500 leading-relaxed m-0">Generate verifiable evidence of state-of-the-art encryption for EU DORA and NIS2 regulatory reporting.</p>
           </div>
           <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100">
              <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-purple-600 mb-4">
                 <Server size={20}/>
              </div>
              <h4 className="font-bold text-slate-900 mb-2 text-base">vHSM Remediation</h4>
              <p className="text-xs text-slate-500 leading-relaxed m-0">Migrate legacy secrets directly into FIPS 140-3 hardware boundaries with one-click orchestration.</p>
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="not-prose bg-blue-600 text-white p-12 md:p-16 rounded-[3rem] text-center shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-technical opacity-10"></div>
        <div className="relative z-10">
           <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-white m-0">Infrastructure Health Audit</h2>
           <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
             Evaluate your organization's cryptographic debt today. Start with our open core or request a full enterprise assessment.
           </p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <button onClick={() => window.location.href='https://github.com/rivic-q'} className="px-10 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all flex items-center gap-2 justify-center shadow-xl">
               <Github size={18}/> Access Open Core
             </button>
             <Link to="/pricing" className="px-10 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all flex items-center gap-2 justify-center shadow-lg">
               Consult on Pricing <ArrowRight size={18}/>
             </Link>
           </div>
        </div>
      </section>
      
      <footer className="mt-12 text-center text-[10px] text-slate-400 uppercase tracking-widest font-bold">
        Robust Integrated Verified Infrastructure Computing & Quantum • Berlin
      </footer>
    </article>
  );
};

export default Products;
