
import React from 'react';
import { ShieldAlert, Terminal, Activity, ArrowRight, CheckCircle2, ShieldCheck, Microscope } from 'lucide-react';

const ServiceDetail: React.FC<{ 
  title: string, 
  desc: string, 
  points: string[], 
  icon: React.ReactNode,
  badge?: string 
}> = ({ title, desc, points, icon, badge }) => (
  <div className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group">
    <div className="flex justify-between items-start mb-6">
      <div className="p-4 bg-slate-50 text-slate-900 rounded-2xl group-hover:bg-slate-900 group-hover:text-white transition-all">
        {icon}
      </div>
      {badge && (
        <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[9px] font-bold uppercase tracking-widest rounded-full">{badge}</span>
      )}
    </div>
    <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">{title}</h3>
    <p className="text-sm text-slate-500 leading-relaxed mb-8">{desc}</p>
    <ul className="space-y-3 m-0 p-0 list-none">
      {points.map((p, i) => (
        <li key={i} className="flex items-center gap-3 text-xs font-bold text-slate-700 uppercase tracking-wide">
          <CheckCircle2 size={14} className="text-emerald-500" /> {p}
        </li>
      ))}
    </ul>
    <div className="mt-10 pt-6 border-t border-slate-50">
      <a href="mailto:rivic.revan.ande@gmail.com" className="text-xs font-bold text-blue-600 hover:text-slate-900 flex items-center gap-1 transition-colors uppercase tracking-widest">
        Request Scope <ArrowRight size={14}/>
      </a>
    </div>
  </div>
);

const Services: React.FC = () => {
  return (
    <article className="prose prose-lg prose-slate max-w-none">
      <header className="mb-16">
        <h1 className="text-5xl font-bold mb-4 tracking-tight">Technical Services</h1>
        <p className="lead text-xl text-gray-600 font-serif italic">
          High-assurance offensive security and strategic compliance advisory.
        </p>
      </header>

      <div className="not-prose grid md:grid-cols-2 gap-8 mb-24">
        <ServiceDetail 
          icon={<ShieldAlert size={24}/>}
          title="Red Teaming"
          badge="Adversary Simulation"
          desc="Full-scope simulations of Advanced Persistent Threats (APTs) targeting your people, processes, and technology."
          points={[
            "Scenario-based adversary logic",
            "Assume-Breach assessments",
            "Hardware side-channel audit"
          ]}
        />
        <ServiceDetail 
          icon={<Terminal size={24}/>}
          title="Penetration Testing"
          badge="Audit & Discovery"
          desc="Technical vulnerability assessments focusing on deep logic flaws and legacy cryptographic debt."
          points={[
            "Web App & API security",
            "Infrastructure cloud audit",
            "PQC implementation review"
          ]}
        />
        <ServiceDetail 
          icon={<Microscope size={24}/>}
          title="PQC Advisory"
          badge="Strategic Migration"
          desc="Guidance on navigating the transition from classical RSA/ECC to NIST-standardized PQC."
          points={[
            "NIST FIPS 203/204 readiness",
            "EU DORA gap analysis",
            "Hybrid migration roadmaps"
          ]}
        />
        <ServiceDetail 
          icon={<Activity size={24}/>}
          title="Security Engineering"
          badge="Platform Support"
          desc="Custom integration support for RivicQ SDKs into legacy C/C++, Embedded, and high-performance environments."
          points={[
            "HSM native integration",
            "Entropy source hardening",
            "Zero-Knowledge architecture"
          ]}
        />
      </div>

      <section className="text-center">
         <h2 className="text-3xl font-serif font-bold mb-6">Start a conversation.</h2>
         <p className="text-slate-500 mb-10 max-w-xl mx-auto">Our lead engineers are available to discuss your specific infrastructure security challenges.</p>
         <a href="mailto:rivic.revan.ande@gmail.com" className="inline-flex items-center gap-2 bg-blue-600 text-white px-10 py-5 rounded-full font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20">
            Consult our Team <ArrowRight size={18}/>
         </a>
      </section>
    </article>
  );
};

export default Services;
