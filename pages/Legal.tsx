
import React from 'react';
import { Landmark, ShieldCheck, Scale, FileText, Globe, Gavel, ShieldAlert, Award, Mail, Info, Copyright, FileCheck } from 'lucide-react';

const LegalSection: React.FC<{ title: string, children: React.ReactNode, icon?: React.ReactNode, id?: string }> = ({ title, children, icon, id }) => (
  <div id={id} className="mb-16 border-b border-slate-100 pb-12 last:border-0 scroll-mt-24">
    <div className="flex items-center gap-3 mb-6">
      {icon && <div className="p-2 bg-slate-50 text-slate-900 rounded-lg border border-slate-100">{icon}</div>}
      <h3 className="m-0 text-2xl font-serif font-bold text-slate-900">{title}</h3>
    </div>
    <div className="text-slate-600 text-sm leading-relaxed space-y-4 text-justify">
      {children}
    </div>
  </div>
);

const Legal: React.FC = () => {
  return (
    <article className="prose prose-slate max-w-none">
      <header className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-[9px] font-bold uppercase tracking-[0.2em] mb-6">
          Legal Framework v2.4 (DE/EU)
        </div>
        <h1 className="text-5xl font-bold mb-4 tracking-tight">Legal, IP & Rights</h1>
        <p className="text-xl text-slate-500 font-serif italic">
          Mandatory disclosures, intellectual property rights, and terms of use under German and International Law.
        </p>
      </header>

      {/* 1. Impressum - MANDATORY FOR GERMANY */}
      <section className="mb-20 bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-200">
        <div className="flex items-center gap-3 mb-8 border-b border-slate-200 pb-4">
          <Landmark className="text-slate-900" size={24} />
          <h2 className="m-0 text-3xl font-serif font-bold">Impressum</h2>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-auto">Legal Notice</span>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 text-sm">
          <div>
            <h4 className="font-bold text-slate-900 mb-3 uppercase tracking-widest text-[10px]">Angaben gemäß § 5 TMG</h4>
            <p className="text-slate-700 leading-relaxed m-0 font-medium">
              <strong>RivicQ Technologies</strong><br/>
              (Startup in Gründung / In Foundation)<br/>
              Rudower Chaussee 29<br/>
              12489 Berlin<br/>
              Germany
            </p>
            <p className="text-xs text-slate-500 mt-2">
              Located at: WISTA Innovation Center Adlershof<br/>
              Leap Quantum Hub
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-3 uppercase tracking-widest text-[10px]">Vertreten durch (Represented by)</h4>
            <p className="text-slate-700 m-0 font-bold">Revan Ande</p>
            <p className="text-xs text-slate-500">Founder & CEO</p>
            
            <h4 className="font-bold text-slate-900 mb-2 mt-6 uppercase tracking-widest text-[10px]">Kontakt (Contact)</h4>
            <p className="text-slate-600 m-0">
              Email: <a href="mailto:rivic.revan.ande@gmail.com" className="text-blue-600 font-bold hover:underline">rivic.revan.ande@gmail.com</a><br/>
            </p>

             <h4 className="font-bold text-slate-900 mb-2 mt-6 uppercase tracking-widest text-[10px]">Registereintrag (Registration)</h4>
            <p className="text-slate-600 m-0 text-xs">
              Entry in the Commercial Register (Handelsregister) pending.<br/>
              Court of Registry: Amtsgericht Charlottenburg (Berlin)
            </p>
          </div>
        </div>
      </section>

      {/* 2. Intellectual Property Rights (Strict) */}
      <section className="not-prose mb-24">
        <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-blue-600 text-white rounded-2xl shadow-lg">
                <Award size={24}/>
            </div>
            <div>
                <h2 className="text-3xl font-serif font-bold text-slate-900 m-0">Intellectual Property</h2>
                <p className="text-xs text-blue-600 font-bold uppercase tracking-widest mt-1">Trademarks, Patents & Design Rights</p>
            </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 border border-slate-200 bg-white rounded-[2.5rem] shadow-sm">
                <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900 mb-4">
                    <ShieldCheck size={20} className="text-emerald-600"/> Trademarks (Markenrecht)
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    The following names, logos, and service marks are unregistered or registered trademarks of RivicQ Technologies and are protected under the German Trademark Act (MarkenG) and EUIPO regulations:
                </p>
                <ul className="space-y-2 text-sm font-bold text-slate-800">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div> RivicQ™</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div> CryptoBOM™ (Cryptographic Bill of Materials)</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div> RQSP™ (Rivic Quantum Security Protocol)</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div> Cloud vHSM™</li>
                </ul>
                <p className="text-[10px] text-slate-400 mt-4 italic">
                    Use of these marks without express written permission is strictly prohibited.
                </p>
            </div>

            <div className="p-8 border border-slate-200 bg-white rounded-[2.5rem] shadow-sm">
                <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900 mb-4">
                    <FileCheck size={20} className="text-indigo-600"/> Patents & Utility Models
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    RivicQ actively protects its technical innovations. Patent applications are pending for the following core technologies under the Patent Cooperation Treaty (PCT):
                </p>
                <ul className="space-y-3 text-sm text-slate-700">
                    <li className="border-l-2 border-indigo-200 pl-3">
                        <strong className="block text-slate-900">Cloud HSM Orchestration Layer</strong>
                        <span className="text-xs text-slate-500">Method for virtualizing physical root-of-trust in multi-tenant environments.</span>
                    </li>
                    <li className="border-l-2 border-indigo-200 pl-3">
                        <strong className="block text-slate-900">Hybrid PQC Tunneling</strong>
                        <span className="text-xs text-slate-500">System for dynamic key encapsulation using combined classical and lattice-based primitives.</span>
                    </li>
                </ul>
            </div>
        </div>

        <div className="mt-8 p-6 bg-slate-900 text-white rounded-2xl flex items-start gap-4">
            <Copyright size={24} className="text-blue-400 shrink-0 mt-1"/>
            <div>
                <h4 className="font-bold text-sm uppercase tracking-widest mb-2">Copyright (Urheberrecht)</h4>
                <p className="text-xs text-slate-400 leading-relaxed m-0">
                    The content, design, source code, and architecture of this website are subject to German Copyright Law (Urheberrechtsgesetz - UrhG). Reproduction, editing, distribution, and any kind of use outside the limits of copyright law require the written consent of RivicQ Technologies. Downloads and copies of this site are only permitted for private, non-commercial use.
                </p>
            </div>
        </div>
    </section>

    {/* 3. General Terms & Liability */}
    <section className="not-prose">
        <h2 className="font-serif text-3xl font-bold text-slate-900 mb-10 border-b-2 border-slate-900 pb-4 inline-block">Terms & Liability</h2>
        
        <LegalSection title="Haftung für Inhalte (Liability for Content)" icon={<ShieldAlert size={20}/>}>
          <p>
            As a service provider, we are responsible for our own content on these pages in accordance with § 7 Para.1 TMG under general laws. According to §§ 8 to 10 TMG, however, we are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information under general laws remain unaffected.
          </p>
        </LegalSection>

        <LegalSection title="Dispute Resolution" icon={<Gavel size={20}/>}>
          <p>
            The European Commission provides a platform for online dispute resolution (OS): <a href="https://ec.europa.eu/consumers/odr" className="text-blue-600 hover:underline">https://ec.europa.eu/consumers/odr</a>.
            We are not willing or obliged to participate in dispute settlement proceedings before a consumer arbitration board.
          </p>
        </LegalSection>

        <LegalSection title="Applicable Law & Jurisdiction" icon={<Globe size={20}/>}>
          <p>
            These terms and conditions are governed by the laws of the <strong>Federal Republic of Germany</strong>. The exclusive place of jurisdiction for all disputes arising from the contractual relationship is <strong>Berlin</strong>, provided the user is a merchant, a legal entity under public law, or a special fund under public law.
          </p>
        </LegalSection>
      </section>

      <section className="bg-slate-50 border border-slate-100 p-8 md:p-12 rounded-[3rem] mt-16">
        <div className="flex items-center gap-3 mb-4">
          <Mail size={20} className="text-blue-600"/>
          <h3 className="m-0 font-bold text-slate-900">Legal Contact</h3>
        </div>
        <p className="text-sm text-slate-600 mb-6">
            For intellectual property inquiries, takedown requests, or licensing information:
        </p>
        <a href="mailto:rivic.revan.ande@gmail.com" className="inline-flex items-center gap-2 font-bold text-blue-600 hover:text-slate-900 transition-colors text-xs uppercase tracking-widest">
           <Mail size={16} /> Contact Legal Department
        </a>
      </section>

      <footer className="mt-12 text-center text-[10px] text-slate-400 uppercase tracking-widest font-bold">
        © 2026 RivicQ Technologies. All Rights Reserved. • Berlin
      </footer>
    </article>
  );
};

export default Legal;
