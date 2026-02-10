import React from 'react';
import { ShieldCheck, Lock, Activity, CheckCircle, Database, Globe, Scale, Award } from 'lucide-react';

const TrustCenter: React.FC = () => {
  return (
    <article className="prose prose-slate max-w-none">
      <header className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-[10px] font-bold uppercase tracking-widest mb-6">
          Verified Infrastructure
        </div>
        <h1 className="text-5xl font-bold mb-6">Trust Center</h1>
        <p className="text-xl text-slate-500 font-serif italic">
          Transparency is the foundation of quantum resilience.
        </p>
      </header>

      {/* Hero Stats */}
      <section className="not-prose grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
        {[
          { icon: <Award className="text-blue-600" />, label: "Certification", val: "FIPS 140-3 L3" },
          { icon: <Activity className="text-emerald-600" />, label: "Uptime", val: "99.999%" },
          { icon: <ShieldCheck className="text-purple-600" />, label: "Security", val: "Post-Quantum" },
        ].map((stat, i) => (
          <div key={i} className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-4">{stat.icon}</div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</div>
            <div className="text-2xl font-serif font-bold text-slate-900">{stat.val}</div>
          </div>
        ))}
      </section>

      <section className="mb-20">
        <h2 className="text-3xl font-serif font-bold mb-8">Security by Design</h2>
        <div className="grid md:grid-cols-2 gap-12 not-prose">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="shrink-0 w-10 h-10 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center">
                <Lock size={18} className="text-slate-900"/>
              </div>
              <div>
                <h4 className="m-0 font-bold text-slate-900">Zero-Knowledge Architecture</h4>
                <p className="text-sm text-slate-500 mt-1 leading-relaxed">Your keys are generated and stored within the hardware boundary. RivicQ never has access to your raw cryptographic material.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 w-10 h-10 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center">
                <Database size={18} className="text-slate-900"/>
              </div>
              <div>
                <h4 className="m-0 font-bold text-slate-900">Hardware Isolation</h4>
                <p className="text-sm text-slate-500 mt-1 leading-relaxed">We utilize Thales and AWS CloudHSM clusters, anchored by physical tamper-resistant mechanisms (NIST FIPS 140-3).</p>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100">
             <h4 className="font-serif font-bold text-xl mb-4">Continuous Verification</h4>
             <ul className="space-y-3 p-0 list-none">
                {['Quarterly external penetration tests', 'Real-time threat monitoring (SIEM)', 'Automated dependency scanning', 'SOC2 Type II Compliance (Target 2026)'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-600">
                    <CheckCircle size={14} className="text-emerald-500 shrink-0"/> {item}
                  </li>
                ))}
             </ul>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white p-12 md:p-16 rounded-[3rem] mb-20 relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-white text-3xl font-serif mb-6 m-0">Compliance and Ethics</h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-2xl">
            Our ethical hacking practices and disclosure policies are aligned with industry standards. We believe in proactive transparency as the only way to secure the post-quantum world.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/#/compliance" className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold text-xs hover:bg-blue-500 transition-all">
              View Compliance Timeline
            </a>
            <a href="/#/legal" className="px-8 py-3 border border-slate-700 text-white rounded-full font-bold text-xs hover:bg-white/10 transition-all">
              Security Disclosures
            </a>
          </div>
        </div>
      </section>

    </article>
  );
};

export default TrustCenter;