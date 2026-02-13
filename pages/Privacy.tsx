
import React from 'react';
import { Eye, Lock, ShieldAlert, Award, Mail, ShieldCheck, Database, Fingerprint } from 'lucide-react';

const Privacy: React.FC = () => {
  return (
    <article className="prose prose-slate max-w-none">
      <header className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[9px] font-bold uppercase tracking-[0.2em] mb-6 border border-emerald-100">
          GDPR & PQC Compliant
        </div>
        <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-xl text-slate-500 font-serif italic">Protecting your data from today's eyes and tomorrow's machines.</p>
      </header>

      <section className="mb-12">
        <p className="text-lg text-slate-600 leading-relaxed">
          RivicQ Technologies ("RivicQ") is committed to protecting the privacy of our clients and users. Our privacy framework is built on the principle of <strong>Zero-Knowledge Security</strong>: we architect our systems so that we never have access to your raw cryptographic keys or unencrypted data.
        </p>
      </section>

      <div className="not-prose grid md:grid-cols-3 gap-6 mb-16">
        <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm">
          <div className="mb-4 text-blue-600"><Database size={24}/></div>
          <h3 className="font-serif font-bold text-xl mb-3">Data Isolation</h3>
          <p className="text-xs text-slate-500 leading-relaxed">User data and metadata are stored in siloedconfidential compute environments, separated by hardware-native boundaries.</p>
        </div>
        <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm">
          <div className="mb-4 text-emerald-600"><Lock size={24}/></div>
          <h3 className="font-serif font-bold text-xl mb-3">PQC Encryption</h3>
          <p className="text-xs text-slate-500 leading-relaxed">All data-at-rest is encrypted using quantum-safe AES-256 with key management anchored in FIPS 140-3 HSMs.</p>
        </div>
        <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm">
          <div className="mb-4 text-indigo-600"><Eye size={24}/></div>
          <h3 className="font-serif font-bold text-xl mb-3">Zero Telemetry</h3>
          <p className="text-xs text-slate-500 leading-relaxed">Our SDKs and agents perform local auditing. No source code or private parameters are ever transmitted to RivicQ servers.</p>
        </div>
      </div>

      <section className="mb-16">
        <h2 className="text-2xl font-serif font-bold mb-6">1. Information We Collect</h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          We collect minimal data necessary to provide our services, primarily consisting of:
        </p>
        <ul className="text-sm text-slate-500 space-y-2">
          <li>• <strong>Account Metadata:</strong> Organization name and administrative contact details.</li>
          <li>• <strong>Audit Logs:</strong> Non-sensitive telemetry regarding successful/failed cryptographic operations for troubleshooting.</li>
          <li>• <strong>Technical Contact:</strong> Business email for security notifications and SDK updates.</li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-serif font-bold mb-6">2. Data Retention & Erasure</h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          Under GDPR, users have the "Right to be Forgotten." Upon request, RivicQ will permanently delete all metadata associated with your account. Due to the nature of our HSM-anchored root-of-trust, certain hardware-bound public audit records may persist to maintain the integrity of the overall security mesh.
        </p>
      </section>

      <section className="mb-20">
        <div className="bg-slate-950 p-10 rounded-[3rem] text-white relative overflow-hidden">
           <div className="absolute top-0 right-0 p-12 opacity-10">
             <Fingerprint size={120} />
           </div>
           <h3 className="text-white font-serif text-2xl mb-4 m-0">The 50-Year Privacy Standard</h3>
           <p className="text-slate-400 text-sm leading-relaxed mb-6">
             In the healthcare and government sectors, data must remain private for 50+ years. We treat all data as if it will be subjected to future quantum analysis, ensuring that your privacy persists beyond the limits of classical cryptography.
           </p>
           <div className="flex items-center gap-2 p-3 bg-white/5 border border-white/10 rounded-xl">
              <ShieldCheck size={16} className="text-emerald-400" />
              <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest m-0">
                PQC-Native Data Protection Protocol Active
              </p>
           </div>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-2xl font-serif font-bold mb-6">Privacy Inquiries</h2>
        <div className="text-sm text-slate-600 flex items-center gap-4">
          <span className="font-bold">Berlin HQ:</span>
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
