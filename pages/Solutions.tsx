
import React from 'react';
import { ShieldCheck, Server, Cpu, Database, Landmark, ShieldAlert, Cloud, Lock, ExternalLink, FileText, FileCheck } from 'lucide-react';

const SolutionSection: React.FC<{ 
  title: string, 
  icon: React.ReactNode, 
  children: React.ReactNode, 
  reference: { title: string, link: string, code: string, authority: string } 
}> = ({ title, icon, children, reference }) => (
  <div className="mb-16 border-b border-slate-100 pb-12 last:border-0">
    <div className="flex items-center gap-4 mb-6">
      <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl border border-blue-100/50">
        {icon}
      </div>
      <h3 className="text-2xl font-serif font-bold text-slate-900 m-0">{title}</h3>
    </div>
    
    <div className="text-slate-600 leading-relaxed mb-8 text-lg">
      {children}
    </div>

    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 relative overflow-hidden group hover:border-blue-300 transition-colors">
      <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
        <FileCheck size={100} className="text-slate-900"/>
      </div>
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <ShieldCheck size={16} className="text-emerald-600" />
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Verified Standard</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-bold text-slate-900 m-0 flex items-center gap-2">
              {reference.title}
              <span className="px-2 py-0.5 bg-slate-200 text-slate-600 text-[9px] rounded-full">{reference.code}</span>
            </h4>
            <p className="text-xs text-slate-500 m-0 mt-1">Authority: {reference.authority}</p>
          </div>
          <a href={reference.link} target="_blank" rel="noopener noreferrer" className="shrink-0 px-4 py-2 bg-white border border-slate-200 text-blue-600 text-xs font-bold rounded-lg hover:bg-blue-50 hover:border-blue-200 transition-all flex items-center gap-2 uppercase tracking-widest shadow-sm">
            See Official Rule <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </div>
  </div>
);

const Solutions: React.FC = () => {
  return (
    <article className="prose prose-lg prose-slate max-w-none">
      <header className="mb-16">
        <h1 className="text-5xl font-bold mb-4 tracking-tight">Industry Solutions</h1>
        <p className="lead font-serif italic text-slate-600 text-xl">
          Simple, secure upgrades for industries that need to protect data for a long time.
        </p>
      </header>
      
      <div className="not-prose">
        <SolutionSection 
          title="Banks & Payments"
          icon={<Landmark size={24}/>}
          reference={{
            title: "PCI DSS v4.0",
            code: "SEC. 12.3.3",
            authority: "PCI Security Standards Council",
            link: "https://docs-prv.pcisecuritystandards.org/PCI%20DSS/Standard/PCI-DSS-v4_0.pdf"
          }}
        >
          <p>
            New rules say banks must use stronger encryption. RivicQ helps you upgrade your payment systems to use new, quantum-safe signatures. This ensures that every transaction is secure and cannot be hacked by future computers.
          </p>
        </SolutionSection>

        <SolutionSection 
          title="Fintech & Cloud Apps"
          icon={<Cloud size={24}/>}
          reference={{
            title: "EU DORA Act",
            code: "EU 2022/2554",
            authority: "European Parliament",
            link: "https://eur-lex.europa.eu/eli/reg/2022/2554/oj"
          }}
        >
          <p>
            European laws (DORA) now require financial apps to be resilient. Our Cloud HSMs secure the connections between your apps (APIs) so that customer data remains private and compliant with EU law.
          </p>
        </SolutionSection>

        <SolutionSection 
          title="Government & Defense"
          icon={<ShieldAlert size={24}/>}
          reference={{
            title: "CNSA Suite 2.0",
            code: "NSA/CSS",
            authority: "National Security Agency",
            link: "https://media.defense.gov/2022/Sep/07/2003071834/-1/-1/0/CSA_CNSA_2.0_ALGORITHMS_.PDF"
          }}
        >
          <p>
            Classified data is being stolen now to be decrypted later. We provide high-security, physical hardware solutions (air-gapped) that use the strongest random number generators to protect national secrets.
          </p>
        </SolutionSection>

        <SolutionSection 
          title="Infrastructure & Factories"
          icon={<Server size={24}/>}
          reference={{
            title: "Guide to OT Security",
            code: "NIST SP 800-82r3",
            authority: "NIST",
            link: "https://csrc.nist.gov/pubs/sp/800/82/r3/final"
          }}
        >
          <p>
            Factory systems often run for 20 years. We help you create a list of all your digital keys (CryptoBOM) and secure the ones used in your machinery, ensuring your supply chain is safe from cyber attacks.
          </p>
        </SolutionSection>
      </div>

      <div className="mt-16 bg-slate-900 rounded-[2.5rem] p-12 text-center text-white relative overflow-hidden shadow-2xl">
        <div className="relative z-10">
           <h3 className="text-2xl font-serif font-bold mb-4 m-0 text-white">Need help with regulations?</h3>
           <p className="text-slate-400 text-sm mb-8 max-w-xl mx-auto">
             Our team can check your systems and tell you exactly what you need to do to be compliant.
           </p>
           <a href="mailto:rivic.revan.ande@gmail.com" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-all text-xs uppercase tracking-widest">
              Contact Us <FileText size={16}/>
           </a>
        </div>
      </div>

    </article>
  );
};

export default Solutions;
