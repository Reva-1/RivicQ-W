
import React from 'react';
import { Landmark, ShieldCheck, Scale, FileText, Globe, Gavel, ShieldAlert, Award, Mail, Info } from 'lucide-react';

const LegalSection: React.FC<{ title: string, children: React.ReactNode, icon?: React.ReactNode }> = ({ title, children, icon }) => (
  <div className="mb-12 border-b border-slate-100 pb-8 last:border-0">
    <div className="flex items-center gap-3 mb-4">
      {icon && <div className="text-blue-600">{icon}</div>}
      <h3 className="m-0 text-2xl font-serif font-bold text-slate-900">{title}</h3>
    </div>
    <div className="text-slate-600 text-sm leading-relaxed space-y-4">
      {children}
    </div>
  </div>
);

const Legal: React.FC = () => {
  return (
    <article className="prose prose-slate max-w-none">
      <header className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-[9px] font-bold uppercase tracking-[0.2em] mb-6">
          Legal Framework v2.1
        </div>
        <h1 className="text-5xl font-bold mb-4 tracking-tight">Legal & Terms</h1>
        <p className="text-xl text-slate-500 font-serif italic">
          Defining the boundaries of trust, liability, and ownership.
        </p>
      </header>

      {/* Impressum (Legal Notice) - Essential for German Companies */}
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-6">
          <Landmark className="text-blue-600" size={24} />
          <h2 className="m-0 text-2xl font-serif font-bold">Impressum (Legal Notice)</h2>
        </div>
        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
          <div className="grid md:grid-cols-2 gap-8 text-sm">
            <div>
              <h4 className="font-bold text-slate-900 mb-2 uppercase tracking-widest text-[10px]">Service Provider</h4>
              <p className="text-slate-600 leading-relaxed m-0">
                RivicQ Technologies<br/>
                Rudower Chaussee 29<br/>
                12489 Berlin, Germany
              </p>
              <p className="text-xs text-slate-400 mt-2">WISTA Innovation Center Adlershof • Leap Quantum Hub</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-2 uppercase tracking-widest text-[10px]">Represented By</h4>
              <p className="text-slate-600 m-0 font-bold text-slate-900">Revan Ande</p>
              <p className="text-xs text-slate-500">Founder</p>
              
              <h4 className="font-bold text-slate-900 mb-2 mt-6 uppercase tracking-widest text-[10px]">Registry & Tax</h4>
              <p className="text-slate-600 m-0">Commercial Register: Amtsgericht Charlottenburg (Berlin)<br/>Tax ID: DE (Pending Acquisition)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Proprietary Rights & IP Expansion */}
      <section className="mb-20">
        <div className="p-8 md:p-12 bg-slate-900 rounded-[3rem] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <Award size={200} />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="text-blue-400" size={32} />
              <h2 className="text-white text-3xl font-serif font-bold m-0 tracking-tight">Intellectual Property</h2>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed mb-8 italic">
              "Every technical tool and design element belongs exclusively to RivicQ."
            </p>
            <div className="grid md:grid-cols-1 gap-6">
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                 <h4 className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-3">Ownership</h4>
                 <p className="text-xs text-slate-300 leading-relaxed m-0">
                   The <strong>RQSP Protocol</strong> and all associated designs are the sole property of RivicQ Technologies.
                 </p>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                 <h4 className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-3">Confidentiality</h4>
                 <p className="text-xs text-slate-300 leading-relaxed m-0">
                   Use of our technical materials or lab data is subject to our Non-Disclosure Agreement (NDA). Unauthorized sharing is prohibited.
                 </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms of Service Framework */}
      <section className="not-prose mt-16">
        <h2 className="font-serif text-3xl font-bold text-slate-900 mb-10 border-b-2 border-slate-900 pb-4 inline-block">Terms of Service</h2>
        
        <LegalSection title="1. What We Provide" icon={<FileText size={20}/>}>
          <p>
            RivicQ provides advanced security software and hardware tools designed to reduce risks from quantum computing. Our services are for businesses and regulated industries (like Finance and Defense).
          </p>
        </LegalSection>

        <LegalSection title="2. Liability" icon={<ShieldAlert size={20}/>}>
          <p>
            We use the latest security standards approved by NIST. However, because technology changes rapidly, we cannot guarantee absolute protection against every theoretical future threat, though we strive to provide the best defense possible today.
          </p>
        </LegalSection>

        <LegalSection title="3. Ethical Use" icon={<Gavel size={20}/>}>
          <p>
            You must not use our tools for illegal activities, hacking, or bypassing security. We will stop service for anyone using our tech for the wrong reasons.
          </p>
        </LegalSection>

        <LegalSection title="4. Governing Law" icon={<Globe size={20}/>}>
          <p>
            These terms are governed by the laws of Germany. Any legal disputes will be handled in Berlin.
          </p>
        </LegalSection>
      </section>

      <section className="bg-slate-50 border border-slate-100 p-8 md:p-12 rounded-[3rem] mt-16">
        <div className="flex items-center gap-3 mb-4">
          <Mail size={20} className="text-blue-600"/>
          <h3 className="m-0 font-bold text-slate-900">Legal Contact</h3>
        </div>
        <p className="text-sm text-slate-600 mb-6">For specific contracts or compliance documents, please email us.</p>
        <a href="mailto:rivic.revan.ande@gmail.com" className="inline-flex items-center gap-2 font-bold text-blue-600 hover:text-slate-900 transition-colors text-xs uppercase tracking-widest">
           <Mail size={16} /> Contact Legal Team
        </a>
      </section>

      <footer className="mt-12 text-center text-[10px] text-slate-400 uppercase tracking-widest font-bold">
        Last Revised: February 2026 • RivicQ Technologies • Berlin
      </footer>
    </article>
  );
};

export default Legal;
