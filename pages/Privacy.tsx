
import React from 'react';
import { Eye, Lock, ShieldAlert, Award, Mail } from 'lucide-react';

const Privacy: React.FC = () => {
  return (
    <article className="prose prose-slate max-w-none">
      <header className="mb-16">
        <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-xl text-slate-500 font-serif italic">Quantum-safe data handling for a private future.</p>
      </header>

      <section className="mb-12">
        <p className="text-lg text-slate-600 leading-relaxed">
          At RivicQ, privacy is built into our code. We operate under <strong>Data Minimization</strong> principles and are fully <strong>GDPR</strong> compliant.
        </p>
      </section>

      <div className="not-prose grid md:grid-cols-2 gap-8 mb-16">
        <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm">
          <div className="mb-4 text-blue-600"><Lock size={24}/></div>
          <h3 className="font-serif font-bold text-xl mb-3">Encryption at Rest</h3>
          <p className="text-sm text-slate-500 leading-relaxed">All metadata is encrypted using quantum-safe AES-256 with HSM-managed rotation.</p>
        </div>
        <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm">
          <div className="mb-4 text-emerald-600"><Eye size={24}/></div>
          <h3 className="font-serif font-bold text-xl mb-3">Zero Telemetry</h3>
          <p className="text-sm text-slate-500 leading-relaxed">Agents do not exfiltrate source code. Only cryptographic metadata is analyzed.</p>
        </div>
      </div>

      <section className="mb-20">
        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
           <div className="flex items-center gap-3 mb-4 text-slate-900">
             <ShieldAlert size={20} className="text-red-600" />
             <h2 className="m-0 text-xl font-serif font-bold">Proprietary Notice & Confidentiality</h2>
           </div>
           <p className="text-sm text-slate-600 leading-relaxed mb-6">
             All technical details, methodologies, and architectural patterns shared via our platform are protected by <strong>Non-Disclosure Agreements (NDA)</strong>.
           </p>
           <div className="flex items-center gap-2 p-3 bg-white border border-slate-200 rounded-xl">
              <Award size={16} className="text-blue-600" />
              <p className="text-[10px] font-bold text-slate-900 uppercase tracking-widest m-0">
                Patents, Design, and Trademark belong exclusively to RivicQ Technologies GmbH.
              </p>
           </div>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-2xl font-serif font-bold mb-6">Privacy Inquiries</h2>
        <div className="text-sm text-slate-600 flex items-center gap-4">
          <span className="font-bold">Contact Privacy Officer:</span>
          <a href="mailto:rivic.revan.ande@gmail.com" className="text-blue-600 font-bold hover:text-slate-900 transition-colors inline-flex items-center gap-2" aria-label="Contact Privacy Officer">
            <Mail size={18} />
            <span className="text-xs uppercase tracking-widest">Send Secure Message</span>
          </a>
        </div>
      </section>
    </article>
  );
};

export default Privacy;
