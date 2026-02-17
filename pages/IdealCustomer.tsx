
import React from 'react';
import { Landmark, ShieldAlert, HeartPulse, Zap, Radio, Globe, ShieldCheck, CheckCircle2, ArrowRight, Star, Cpu, Lock, Microscope } from 'lucide-react';
import { Link } from 'react-router-dom';

const CustomerCard: React.FC<{ 
  title: string, 
  icon: React.ReactNode, 
  why: string, 
  necessity: string,
  badge: string
}> = ({ title, icon, why, necessity, badge }) => (
  <div className="p-8 md:p-12 border border-slate-100 bg-white rounded-[3rem] shadow-sm hover:border-blue-200 transition-all group flex flex-col h-full">
    <div className="flex justify-between items-start mb-8">
      <div className="p-4 bg-slate-50 text-slate-900 rounded-2xl group-hover:bg-slate-900 group-hover:text-white transition-all">
        {icon}
      </div>
      <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest rounded-full">{badge}</span>
    </div>
    <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6">{title}</h3>
    
    <div className="space-y-6 flex-grow">
      <div>
        <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">The Challenge</h4>
        <p className="text-sm text-slate-600 leading-relaxed m-0">{why}</p>
      </div>
      <div>
        <h4 className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-2">Why RivicQ is Necessary</h4>
        <p className="text-sm text-slate-800 font-medium leading-relaxed m-0">{necessity}</p>
      </div>
    </div>
    
    <div className="mt-10 pt-6 border-t border-slate-50">
       <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
         <Star size={12} className="text-blue-500" /> High-Assurance Priority
       </div>
    </div>
  </div>
);

const IdealCustomer: React.FC = () => {
  return (
    <article className="prose prose-slate max-w-none">
      <header className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-[9px] font-bold uppercase tracking-[0.2em] mb-6 shadow-sm">
          Strategic Market Intelligence
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-slate-900 leading-tight">
          Who We <span className="text-blue-600">Protect.</span>
        </h1>
        <p className="text-xl text-slate-500 font-serif italic max-w-3xl leading-relaxed">
          RivicQ is built for organizations whose data value exceeds the 50-year threat horizon. If your security failure means societal failure, you are our ideal customer.
        </p>
      </header>

      {/* Ideal Customer Profiles */}
      <section className="not-prose grid md:grid-cols-2 gap-8 mb-24">
        <CustomerCard 
          title="Central Banks & Finance"
          icon={<Landmark size={28}/>}
          badge="Regulatory Compliance"
          why="Transaction ledgers and core deposits are being targeted by 'Harvest Now, Decrypt Later' state actors."
          necessity="RivicQ ensures that financial records remain confidential and immutable for decades, meeting DORA requirements today."
        />
        <CustomerCard 
          title="National Defense & Gov"
          icon={<ShieldAlert size={28}/>}
          badge="High-Assurance"
          why="Classified communications and strategic assets require a Root of Trust that physics itself cannot break."
          necessity="Our FIPS 140-3 Cloud HSMs provide the air-gapped security of a physical bunker with cloud-native scalability."
        />
        <CustomerCard 
          title="Critical Infrastructure"
          icon={<Zap size={28}/>}
          badge="Grid Resilience"
          why="Power grids and water systems rely on long-lived hardware with hardcoded keys that are impossible to patch manually."
          necessity="RivicQ's RQSP protocol automates the transformation of legacy keys into quantum-safe ones remotely."
        />
        <CustomerCard 
          title="Deep Tech & Research"
          icon={<Microscope size={28}/>}
          badge="IP Protection"
          why="Intellectual property in biotech, aerospace, and AI represents trillions in future value, vulnerable to quantum theft."
          necessity="We create a permanent, non-deterministic vault for the world's most valuable trade secrets."
        />
      </section>

      {/* The Necessity Argument */}
      <section className="mb-24 py-24 border-y border-slate-100">
        <div className="max-w-3xl mx-auto text-center">
           <h2 className="text-4xl font-serif font-bold text-slate-900 mb-8 m-0">Why Now?</h2>
           <p className="text-lg text-slate-600 leading-relaxed mb-12">
             The arrival of a cryptographically relevant quantum computer is no longer a "if" but a "when." For organizations handling sensitive data, <strong>the breach has already started.</strong> Intercepted data is being stored now for decryption later. RivicQ is the only platform that provides immediate, actionable remediation.
           </p>
           
           <div className="grid md:grid-cols-3 gap-8 not-prose">
              <div className="space-y-2">
                 <div className="text-3xl font-bold text-slate-900">50+</div>
                 <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Year Data Life</div>
              </div>
              <div className="space-y-2">
                 <div className="text-3xl font-bold text-slate-900">Jan 2025</div>
                 <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">DORA Deadline</div>
              </div>
              <div className="space-y-2">
                 <div className="text-3xl font-bold text-slate-900">Zero</div>
                 <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Migration Delay</div>
              </div>
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="not-prose bg-slate-950 text-white p-12 md:p-16 rounded-[4rem] relative overflow-hidden text-center shadow-2xl">
        <div className="absolute inset-0 bg-technical opacity-5"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-serif font-bold mb-6 text-white m-0">Do You Fit the Profile?</h2>
          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto italic">
            "We don't sell to everyone. We protect those who cannot afford to fail."
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/pricing" className="px-10 py-4 bg-blue-600 text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-blue-500 transition-all shadow-xl shadow-blue-500/20">
              Request a Consultation
            </Link>
            <Link to="/enterprise" className="px-10 py-4 border border-slate-700 text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-white/5 transition-all">
              Enterprise Overview
            </Link>
          </div>
        </div>
      </section>

      <footer className="mt-12 text-center text-[10px] text-slate-400 uppercase tracking-widest font-bold">
        RivicQ Technologies • Strategy Division
      </footer>
    </article>
  );
};

export default IdealCustomer;
