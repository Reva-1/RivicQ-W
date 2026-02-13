
import React from 'react';
import { Landmark, ShieldCheck, Scale, FileText, Globe, Gavel, ShieldAlert, Award, Mail } from 'lucide-react';

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
          Legal Framework v1.5
        </div>
        <h1 className="text-5xl font-bold mb-4 tracking-tight">Legal & Terms</h1>
        <p className="text-xl text-slate-500 font-serif italic">
          Defining the boundaries of trust and responsibility in the quantum-safe transition.
        </p>
      </header>

      {/* Impressum */}
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
                RivicQ Technologies GmbH<br/>
                Rudower Chaussee 29<br/>
                12489 Berlin, Germany
              </p>
              <p className="text-xs text-slate-400 mt-2">WISTA Innovation Center Adlershof</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-2 uppercase tracking-widest text-[10px]">Represented By</h4>
              <p className="text-slate-600 m-0">Revan Sai Ande (Founder & Managing Director)</p>
              
              <h4 className="font-bold text-slate-900 mb-2 mt-6 uppercase tracking-widest text-[10px]">Contact</h4>
              <div className="text-slate-600 m-0 flex items-center gap-3">
                <span>Secure Inquiries:</span>
                <a href="mailto:rivic.revan.ande@gmail.com" className="text-blue-600 font-bold hover:text-slate-900 transition-colors inline-flex items-center gap-2" aria-label="Send Email">
                  <Mail size={16} /> 
                  <span className="text-[10px] uppercase tracking-widest">Connect</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proprietary Rights & IP */}
      <section className="mb-20">
        <div className="p-8 md:p-12 bg-slate-900 rounded-[3rem] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <Award size={200} />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="text-blue-400" size={32} />
              <h2 className="text-white text-3xl font-serif font-bold m-0 tracking-tight">Proprietary Rights Notice</h2>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed mb-8 italic">
              "Everything belongs to RivicQ."
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                 <h4 className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-3">Intellectual Property</h4>
                 <p className="text-xs text-slate-300 leading-relaxed m-0">
                   All <strong>Patents</strong>, <strong>Designs</strong>, <strong>Technical Drawings</strong>, and <strong>Trademarks</strong> associated with our technologies, protocols (RQSP), and branding belong exclusively to RivicQ Technologies GmbH. Unauthorized use or reproduction is strictly prohibited.
                 </p>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                 <h4 className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-3">NDA & Confidentiality</h4>
                 <p className="text-xs text-slate-300 leading-relaxed m-0">
                   Access to technical specifications, laboratory data, and architecture blueprints is governed by a strict <strong>Non-Disclosure Agreement (NDA)</strong>. Any breach of this agreement to secure RivicQ's competitive advantage will be prosecuted.
                 </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms of Service */}
      <section className="not-prose mt-16">
        <h2 className="font-serif text-3xl font-bold text-slate-900 mb-10 border-b-2 border-slate-900 pb-4 inline-block">Terms of Service</h2>
        
        <LegalSection title="1. General Acceptance" icon={<Globe size={20}/>}>
          <p>
            By accessing the RivicQ platform, utilizing our SDKs, or engaging with our advisory services, you agree to be bound by these Terms. These terms govern the relationship between RivicQ Technologies GmbH ("RivicQ") and its clients, partners, and individual users.
          </p>
          <p>
            Our services are intended for professional and institutional use by organizations seeking to enhance their cryptographic resilience against both classical and quantum threats.
          </p>
        </LegalSection>

        <LegalSection title="2. Intellectual Property & RQSP" icon={<ShieldCheck size={20}/>}>
          <p>
            The <strong>RQSP (Quantum Safe Security Protocol)</strong>, including all underlying orchestration logic, HSM integration patterns, and proprietary risk-scoring heuristics, remains the exclusive property of RivicQ Technologies GmbH.
          </p>
          <p>
            Users are granted a limited, non-exclusive license to utilize our SDKs for application development. Reverse-engineering of core protocol logic or attempting to bypass hardware-based security boundaries (HSM Mesh) is strictly prohibited and constitutes a breach of contract.
          </p>
        </LegalSection>

        <LegalSection title="3. Limitation of Liability & Quantum Disclaimer" icon={<Gavel size={20}/>}>
          <p>
            While RivicQ implements state-of-the-art quantum-safe algorithms as defined by NIST (FIPS 203, 204), cryptography is an evolving scientific field. RivicQ is not liable for future mathematical breakthroughs or the development of unexpected quantum computing capabilities that may impact the theoretical security of standardized algorithms.
          </p>
          <p>
            Furthermore, RivicQ is not responsible for security breaches resulting from improper integration of our SDKs or failure to follow hardware isolation guidelines provided in our technical documentation.
          </p>
        </LegalSection>

        <LegalSection title="4. Ethical Usage & Compliance" icon={<Scale size={20}/>}>
          <p>
            Our technology is designed to protect legitimate digital infrastructure. Usage of RivicQ tools for illegal activities, including but not limited to unauthorized data interception, malware development, or evasion of lawful regulatory oversight, will result in immediate termination of service and reporting to relevant authorities.
          </p>
          <p>
            Clients are responsible for ensuring their use of RivicQ products complies with local export control regulations and national security mandates in their respective jurisdictions.
          </p>
        </LegalSection>

        <LegalSection title="5. Confidentiality" icon={<FileText size={20}/>}>
          <p>
            In the course of security audits, red-teaming, or HSM migrations, RivicQ may be exposed to sensitive client infrastructure data. We maintain strict non-disclosure policies (NDA) and utilize zero-knowledge architecture wherever possible to ensure that we never have access to client private keys or raw unencrypted data.
          </p>
        </LegalSection>

        <LegalSection title="6. Governing Law" icon={<Landmark size={20}/>}>
          <p>
            These terms are governed by and construed in accordance with the laws of the <strong>Federal Republic of Germany</strong>. The place of jurisdiction for all disputes arising out of or in connection with these terms is <strong>Berlin</strong>.
          </p>
        </LegalSection>
      </section>

      <section className="bg-slate-900 text-white p-10 md:p-16 rounded-[3rem] mt-16 relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <h3 className="text-white font-serif text-2xl mb-6 m-0">Looking for a Master Service Agreement (MSA)?</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-10">
            For enterprise partnerships involving deep HSM integration or managed red-teaming, we provide tailored MSAs that address specific regulatory requirements like DORA and NIS2.
          </p>
          <a href="mailto:rivic.revan.ande@gmail.com?subject=Legal Inquiry: MSA Request" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-all text-xs uppercase tracking-widest shadow-xl shadow-blue-500/20">
            <Mail size={16} /> Request Enterprise Terms
          </a>
        </div>
      </section>

      <footer className="mt-12 text-center text-[10px] text-slate-400 uppercase tracking-widest font-bold">
        Last Updated: February 2026 • RivicQ Technologies GmbH • Berlin
      </footer>
    </article>
  );
};

export default Legal;
