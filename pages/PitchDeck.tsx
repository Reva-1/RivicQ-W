
import React from 'react';
import { Target, TrendingUp, BarChart3, Globe2, LayoutGrid, ArrowRight, ExternalLink, Zap, Lock, Microscope, Beaker, ShieldCheck, PieChart, Users, Layers, TrendingDown, AlertTriangle, Info, CheckCircle2, Landmark, FileText, BarChart, Rocket, Shield } from 'lucide-react';

const PitchDeck: React.FC = () => {
  return (
    <article className="prose prose-lg prose-slate max-w-none">
      <header className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-[9px] font-bold uppercase tracking-[0.2em] mb-6 shadow-sm">
          RivicQ Private Placement • Series Pre-Seed • Q1 2026
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-slate-900 leading-tight">
          Robust Integrated Verified <br/><span className="text-blue-600">Infrastructure Computing & Quantum.</span>
        </h1>
        <p className="text-xl text-slate-500 font-serif italic max-w-3xl leading-relaxed">
          Pioneering a full-stack quantum resilience platform bridging software visibility with hardware-native security.
        </p>
      </header>

      {/* 1. Market Opportunity */}
      <section className="mb-24">
        <div className="flex items-center gap-4 mb-10">
          <div className="p-3 bg-blue-600 text-white rounded-2xl shadow-lg shadow-blue-200">
            <PieChart size={24} />
          </div>
          <div>
            <h2 className="text-3xl font-serif font-bold text-slate-900 m-0">Market Opportunity</h2>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">Global PQC Transition</p>
          </div>
        </div>
        
        <div className="not-prose grid md:grid-cols-3 gap-8 mb-6">
          <div className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:border-blue-200 transition-all relative group overflow-hidden">
            <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">TAM (2030)</span>
            <h4 className="text-4xl font-bold text-slate-900 mt-2 mb-4">$13.5B</h4>
            <p className="text-xs text-slate-500 leading-relaxed m-0">Global PQC + HSM + Cryptographic Security market driven by "Harvest Now, Decrypt Later" threats.</p>
          </div>
          <div className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:border-indigo-200 transition-all relative group overflow-hidden">
            <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest">SAM (Immediate)</span>
            <h4 className="text-4xl font-bold text-slate-900 mt-2 mb-4">$4.2B</h4>
            <p className="text-xs text-slate-500 leading-relaxed m-0">EU/US enterprises with immediate PQC needs for DORA, NIS2, and eIDAS 2.0 compliance.</p>
          </div>
          <div className="p-8 bg-slate-900 text-white rounded-[2.5rem] shadow-xl hover:scale-[1.02] transition-all relative group overflow-hidden">
            <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">SOM (Target)</span>
            <h4 className="text-4xl font-bold text-white mt-2 mb-4">$840M</h4>
            <p className="text-xs text-slate-400 leading-relaxed m-0">20% SAM penetration achievable by 2030 focusing on BFSI (28%) and Government sectors.</p>
          </div>
        </div>
        
        {/* Market References */}
        <div className="not-prose flex flex-col md:flex-row gap-4 px-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl">
          <div className="flex items-center gap-2 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
            <Info size={12} className="text-blue-500" /> References:
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[10px] text-slate-500 italic">
            <span>[1] MarketsandMarkets: Post-Quantum Cryptography Market Forecast 2024-2030</span>
            <span>[2] EU Commission DORA Impact Assessment & eIDAS Framework Reports</span>
            <span>[3] RivicQ Internal Market Capture Strategy v1.2</span>
          </div>
        </div>
      </section>

      {/* 2. Traction & Unfair Advantages */}
      <section className="mb-24">
        <div className="flex items-center gap-4 mb-10">
          <div className="p-3 bg-emerald-600 text-white rounded-2xl shadow-lg">
            <Rocket size={24} />
          </div>
          <div>
            <h2 className="text-3xl font-serif font-bold text-slate-900 m-0">Current Traction</h2>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">Highly Validated Foundation</p>
          </div>
        </div>

        <div className="not-prose grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
            <h4 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider flex items-center gap-2">
              <CheckCircle2 size={16} className="text-blue-600" /> Infrastructure Support
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed m-0">
              Secured <strong>$350K in Google Cloud AI Credits</strong> to build the RivicQ MVP without burning early investor capital.
            </p>
          </div>
          <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
            <h4 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider flex items-center gap-2">
              <Landmark size={16} className="text-blue-600" /> Accelerator Backing
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed m-0">
              Active residents of the <strong>Leap Berlin Quantum Accelerator</strong> and validated by <strong>SIB (Scholarship Program)</strong>.
            </p>
          </div>
          <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
            <h4 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider flex items-center gap-2">
              <Users size={16} className="text-blue-600" /> Academic Partnerships
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed m-0">
              Backed by research faculty from <strong>TU Berlin (Prof. Dr. Jean-Pierre Seifert)</strong> focusing on PQC validation.
            </p>
          </div>
          <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
            <h4 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider flex items-center gap-2">
              <Shield size={16} className="text-blue-600" /> Open Source Traction
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed m-0">
              Early modular components live and gaining visibility at <strong>github.com/rivic-q</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* 3. SWOT Analysis */}
      <section className="mb-24">
        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-10">SWOT Analysis (Pre-Seed Reality)</h2>
        <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-blue-50 border border-blue-100 rounded-[2.5rem]">
            <h4 className="font-bold text-blue-900 uppercase tracking-widest text-[10px] mb-4">Strengths</h4>
            <ul className="text-xs text-blue-800 space-y-2 m-0 p-0 list-none">
              <li className="flex items-center gap-2">• First-mover combining PQC + CBOM + HSM</li>
              <li className="flex items-center gap-2">• Deep academic and accelerator integration</li>
            </ul>
          </div>
          <div className="p-8 bg-slate-100 border border-slate-200 rounded-[2.5rem]">
            <h4 className="font-bold text-slate-600 uppercase tracking-widest text-[10px] mb-4">Weaknesses</h4>
            <ul className="text-xs text-slate-500 space-y-2 m-0 p-0 list-none">
              <li className="flex items-center gap-2">• Early-stage product (Pre-Revenue)</li>
              <li className="flex items-center gap-2">• Solo founder seeking key co-founding hires</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. The Ask */}
      <section className="mb-24">
        <div className="p-10 md:p-16 bg-white border border-slate-200 rounded-[3rem] shadow-sm">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6 m-0">The Ask – Pre-Seed Round</h2>
          <div className="flex items-baseline gap-2 mb-10">
            <span className="text-5xl font-bold text-slate-900">€150-500k</span>
          </div>
          <p className="text-slate-600 mb-10">Capital to finalize the MVP, make strategic early hires (Co-founder/Engineering), and launch pilot programs with design partners.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-1">
              <span className="text-2xl font-bold text-blue-600">40%</span>
              <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">Product & Eng.</span>
            </div>
            <div className="space-y-1">
              <span className="text-2xl font-bold text-indigo-600">30%</span>
              <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">GTM & Sales</span>
            </div>
            <div className="space-y-1">
              <span className="text-2xl font-bold text-emerald-600">20%</span>
              <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">Compliance</span>
            </div>
            <div className="space-y-1">
              <span className="text-2xl font-bold text-slate-400">10%</span>
              <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">Operations</span>
            </div>
          </div>
        </div>
      </section>

      {/* Investor CTA */}
      <section className="not-prose bg-[#0f172a] text-white p-12 md:p-16 rounded-[3rem] relative overflow-hidden text-center shadow-2xl">
        <div className="absolute inset-0 bg-technical opacity-5"></div>
        <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto mt-4 relative z-10 leading-relaxed">
          Request the full technical Whitepaper and 2026-2032 revenue projections.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
          <a href="mailto:rivic.revan.ande@gmail.com?subject=Investor Inquiry: Data Room Access" className="px-10 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-all flex items-center gap-2 justify-center shadow-xl shadow-blue-500/20">
            Connect with IR <ArrowRight size={18}/>
          </a>
          <a href="/#/team" className="px-10 py-4 border border-slate-700 text-white font-bold rounded-xl hover:bg-white/5 transition-all flex items-center gap-2 justify-center">
            Investment Status <Beaker size={18}/>
          </a>
        </div>
      </section>
      
      <footer className="mt-12 text-center text-[10px] text-slate-400 uppercase tracking-widest font-bold">
        RivicQ Technologies • Berlin
      </footer>
    </article>
  );
};

export default PitchDeck;
