
import React from 'react';
import { ShieldCheck, Lock, Activity, CheckCircle, Database, Award, ArrowRight } from 'lucide-react';

const TrustCenter: React.FC = () => {
  return (
    <article className="prose prose-slate max-w-none">
      <header className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-[10px] font-bold uppercase tracking-widest mb-6">
          Verified Infrastructure
        </div>
        <h1 className="text-5xl font-bold mb-6">Trust Center</h1>
        <p className="text-xl text-slate-500 font-serif italic">Transparency is the foundation of quantum resilience.</p>
      </header>

      <section className="not-prose grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
        {[
          { icon: <Award className="text-blue-600" />, label: "Certification", val: "FIPS 140-3 L3" },
          { icon: <Activity className="text-emerald-600" />, label: "Uptime", val: "99.999%" },
          { icon: <ShieldCheck className="text-purple-600" />, label: "Security", val: "Post-Quantum" },
        ].map((stat, i) => (
          <div key={i} className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm">
            <div className="mb-4">{stat.icon}</div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</div>
            <div className="text-2xl font-serif font-bold text-slate-900">{stat.val}</div>
          </div>
        ))}
      </section>

      {/* CTA SECTION - UPDATED TO MATCH IMAGE 4 */}
      <section className="not-prose bg-[#0f172a] text-white p-10 md:p-16 rounded-[3rem] mb-20 relative overflow-hidden">
        <div className="relative z-10">
          <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-2xl">
            Our ethical hacking practices and disclosure policies are aligned with industry standards. We believe in proactive transparency as the only way to secure the post-quantum world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/#/compliance" className="px-10 py-4 bg-blue-600 text-white rounded-full font-bold text-sm hover:bg-blue-500 transition-all flex items-center justify-center gap-2 shadow-xl shadow-blue-500/20">
              View Compliance Timeline
            </a>
            <a href="/#/legal" className="px-10 py-4 border border-slate-700 text-white rounded-full font-bold text-sm hover:bg-white/10 transition-all flex items-center justify-center">
              Security Disclosures
            </a>
          </div>
        </div>
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
                <p className="text-sm text-slate-500 mt-1 leading-relaxed">RivicQ never has access to your raw cryptographic material.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 w-10 h-10 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center">
                <Database size={18} className="text-slate-900"/>
              </div>
              <div>
                <h4 className="m-0 font-bold text-slate-900">Hardware Isolation</h4>
                <p className="text-sm text-slate-500 mt-1 leading-relaxed">Anchored by physical tamper-resistant mechanisms (NIST FIPS 140-3).</p>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100 flex flex-col justify-center">
             <h4 className="font-serif font-bold text-xl mb-4">Continuous Verification</h4>
             <ul className="space-y-3 p-0 list-none m-0">
                {['Quarterly external penetration tests', 'Real-time SIEM monitoring', 'Automated dependency scanning', 'SOC2 Readiness Audit'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-600 m-0">
                    <CheckCircle size={14} className="text-emerald-500 shrink-0"/> {item}
                  </li>
                ))}
             </ul>
          </div>
        </div>
      </section>
    </article>
  );
};

export default TrustCenter;
