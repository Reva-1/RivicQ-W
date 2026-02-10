import React from 'react';
import { Shield, Eye, Lock, Globe } from 'lucide-react';

const Privacy: React.FC = () => {
  return (
    <article className="prose prose-slate max-w-none">
      <header className="mb-16">
        <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-xl text-slate-500 font-serif italic">Quantum-safe data handling for a private future.</p>
      </header>

      <section className="mb-12">
        <p className="text-lg text-slate-600 leading-relaxed">
          At RivicQ, privacy is not just a policy; it is built into our code. We operate under the principle of <strong>Data Minimization</strong> and are fully compliant with the <strong>General Data Protection Regulation (GDPR)</strong>.
        </p>
      </section>

      <div className="not-prose grid md:grid-cols-2 gap-8 mb-16">
        <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm">
          <div className="mb-4 text-blue-600"><Lock size={24}/></div>
          <h3 className="font-serif font-bold text-xl mb-3">Encryption at Rest</h3>
          <p className="text-sm text-slate-500 leading-relaxed">All metadata processed by our CryptoBOM scanner is encrypted using quantum-safe AES-256 with rotation managed by our internal HSM mesh.</p>
        </div>
        <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm">
          <div className="mb-4 text-emerald-600"><Eye size={24}/></div>
          <h3 className="font-serif font-bold text-xl mb-3">Zero Telemetry</h3>
          <p className="text-sm text-slate-500 leading-relaxed">Our on-premise agents do not phone home with your source code. Only high-level cryptographic metadata is analyzed to provide risk assessments.</p>
        </div>
      </div>

      <section className="mb-16">
        <h2 className="text-2xl font-serif font-bold mb-6">Your Rights</h2>
        <div className="space-y-4 text-sm text-slate-600">
          <p>Under GDPR, you have the following rights regarding your data:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Right to Access:</strong> Request a copy of the metadata we hold.</li>
            <li><strong>Right to Erasure:</strong> Request the deletion of your account and associated audit trails.</li>
            <li><strong>Right to Portability:</strong> Export your CryptoBOM inventory in CycloneDX format.</li>
          </ul>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-2xl font-serif font-bold mb-6">Contact Privacy Officer</h2>
        <p className="text-sm text-slate-600">
          For any data-related inquiries, please contact our Berlin office at: <br/>
          <a href="mailto:privacy@rivic.xyz" className="text-blue-600 font-bold hover:underline">privacy@rivic.xyz</a>
        </p>
      </section>

    </article>
  );
};

export default Privacy;