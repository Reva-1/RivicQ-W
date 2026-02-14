
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
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Regulatory Verification</span>
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
            View Official Doc <ExternalLink size={12} />
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
          Enterprise-grade PQC migration for high-security environments, verified against global regulatory standards.
        </p>
      </header>
      
      <div className="not-prose">
        <SolutionSection 
          title="Payment Processors & Banking"
          icon={<Landmark size={24}/>}
          reference={{
            title: "PCI DSS v4.0 Standard",
            code: "SEC. 12.3.3",
            authority: "PCI Security Standards Council",
            link: "https://docs-prv.pcisecuritystandards.org/PCI%20DSS/Standard/PCI-DSS-v4_0.pdf"
          }}
        >
          <p>
            The transition to <strong>PCI DSS v4.0</strong> requires cryptographic agility. RivicQ provides HSM-backed tokenization using <strong>ML-DSA (Dilithium)</strong> signatures, ensuring transaction integrity and non-repudiation against future quantum decryption attempts. We support hybrid-cloud processing to meet the new "Strong Cryptography" definitions.
          </p>
        </SolutionSection>

        <SolutionSection 
          title="Fintech & Cloud-Native Infrastructure"
          icon={<Cloud size={24}/>}
          reference={{
            title: "Digital Operational Resilience Act",
            code: "EU 2022/2554",
            authority: "European Parliament & Council",
            link: "https://eur-lex.europa.eu/eli/reg/2022/2554/oj"
          }}
        >
          <p>
            Ensure digital sovereignty and full <strong>DORA</strong> compliance. Our <strong>Cloud HSM (vHSM)</strong> clusters establish quantum-safe TLS tunnels (Hybrid ML-KEM) for secure API-to-API communication, satisfying DORA's Article 9 requirement for "protection of data availability, authenticity, integrity, and confidentiality."
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
            Protect classified assets from "Harvest Now, Decrypt Later" threats. We align directly with the <strong>Commercial National Security Algorithm Suite 2.0</strong>, offering air-gapped physical deployments and Privately Managed Cloud HSM zones that utilize high-entropy quantum random number generation (QRNG) for National Security Systems (NSS).
          </p>
        </SolutionSection>

        <SolutionSection 
          title="Critical Infrastructure & OT"
          icon={<Server size={24}/>}
          reference={{
            title: "Guide to OT Security",
            code: "NIST SP 800-82r3",
            authority: "NIST",
            link: "https://csrc.nist.gov/pubs/sp/800/82/r3/final"
          }}
        >
          <p>
            Secure the industrial supply chain. We generate <strong>CryptoBOMs</strong> for SCADA systems and vehicle ECUs, using a unified root of trust that spans from local gateway HSMs to centralized Cloud management. This fulfills the NIST requirement for "Cryptographic Key Management" in Operational Technology environments.
          </p>
        </SolutionSection>
      </div>

      <div className="mt-16 bg-slate-900 rounded-[2.5rem] p-12 text-center text-white relative overflow-hidden shadow-2xl">
        <div className="relative z-10">
           <h3 className="text-2xl font-serif font-bold mb-4 m-0 text-white">Need a customized architecture review?</h3>
           <p className="text-slate-400 text-sm mb-8 max-w-xl mx-auto">
             Our solutions engineers can map your specific infrastructure to these regulatory requirements.
           </p>
           <a href="mailto:rivic.revan.ande@gmail.com" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-all text-xs uppercase tracking-widest">
              Contact Solutions Team <FileText size={16}/>
           </a>
        </div>
      </div>

    </article>
  );
};

export default Solutions;
