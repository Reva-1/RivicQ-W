
import React from 'react';
import { Link } from 'react-router-dom';
import { Landmark, Zap, Database, HeartPulse, Radio, Truck, Globe, FileText, ExternalLink, Cpu, ShieldCheck, Lock, ShieldAlert, Scale, Info } from 'lucide-react';

const UseCaseCard: React.FC<{ 
  icon: React.ReactNode, 
  title: string, 
  subtitle: string, 
  problem: string, 
  solution: string, 
  reference: { name: string, link: string } 
}> = ({ icon, title, subtitle, problem, solution, reference }) => (
  <div className="border border-slate-100 rounded-2xl p-8 bg-white shadow-sm hover:shadow-md transition-shadow group">
    <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-slate-900 text-white rounded-xl group-hover:bg-blue-600 transition-colors">
            {icon}
        </div>
        <div>
            <h3 className="m-0 text-xl font-serif font-bold text-slate-900">{title}</h3>
            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">{subtitle}</span>
        </div>
    </div>
    <div className="space-y-4">
        <div>
            <h4 className="text-xs font-bold text-red-600 uppercase tracking-wider mb-2">The Challenge</h4>
            <p className="text-sm text-slate-600 leading-relaxed m-0">{problem}</p>
        </div>
        <div>
            <h4 className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">The RivicQ Solution</h4>
            <p className="text-sm text-slate-700 leading-relaxed font-medium m-0">{solution}</p>
        </div>
        <div className="pt-4 border-t border-slate-50">
            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Industry Reference</h4>
            <a href={reference.link} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-slate-900 hover:text-blue-600 flex items-center gap-1 transition-colors">
                {reference.name} <ExternalLink size={10} />
            </a>
        </div>
    </div>
  </div>
);

const UseCases: React.FC = () => {
  return (
    <article className="prose prose-lg prose-slate max-w-none">
      <header className="mb-16">
        <h1 className="text-5xl font-bold mb-4">Use Cases</h1>
        <p className="lead font-serif italic text-slate-500">
          RivicQ is deployed where data longevity and infrastructure integrity require immediate PQC migration.
        </p>
      </header>

      <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        
        {/* Financial Services */}
        <UseCaseCard 
            icon={<Landmark size={24}/>}
            title="Banking Core Migration"
            subtitle="DORA & PCI DSS Compliance"
            problem="Transaction signing systems rely on RSA-2048. Data retention mandates make these logs prime targets for 'Harvest Now, Decrypt Later' attacks."
            solution="We integrate Hybrid ML-DSA signatures into existing HSM infrastructure, satisfying current audits while neutralizing future quantum threats."
            reference={{ name: "NIST PQC Standardization Project", link: "https://csrc.nist.gov/projects/post-quantum-cryptography" }}
        />

        {/* Energy & Utilities */}
        <UseCaseCard 
            icon={<Zap size={24}/>}
            title="Energy & Critical Infrastructure"
            subtitle="OT Grid Resilience"
            problem="Smart meters and controllers have lifecycles of 20+ years. Hardcoded classical keys are impossible to patch once quantum computers arrive."
            solution="We implement stateful hash-based signatures (LMS) for firmware updates, ensuring that grid controls remain verifiable for decades."
            reference={{ name: "BSI TR-02102 Cryptographic Mechanisms", link: "https://www.bsi.bund.de/" }}
        />

        {/* IoT & Embedded Systems */}
        <UseCaseCard 
            icon={<Cpu size={24}/>}
            title="IoT & Embedded Systems"
            subtitle="Secure Device Lifecycle"
            problem="Limited processing power and long field lifespans (15+ years) make legacy devices vulnerable to future quantum attacks, with difficult manual patching."
            solution="RivicQ provides low-overhead PQC primitives optimized for embedded ARM/RISC-V cores and HSM-based remote attestation for secure boot."
            reference={{ name: "NIST SP 800-193 (Platform Firmware Resiliency)", link: "https://csrc.nist.gov/pubs/sp/800/193/final" }}
        />

        {/* Healthcare */}
        <UseCaseCard 
            icon={<HeartPulse size={24}/>}
            title="Healthcare & Life Sciences"
            subtitle="The 50-Year Secret"
            problem="Genomic data and sensitive health records must stay private for a lifetime. Encrypted data intercepted today is vulnerable to future decryption."
            solution="RivicQ provides PQC-wrapped storage layers for EMR systems, ensuring patient confidentiality persists throughout the entire patient lifecycle."
            reference={{ name: "NIST SP 800-140 Hardware Security", link: "https://csrc.nist.gov/" }}
        />

        {/* Telecommunications */}
        <UseCaseCard 
            icon={<Radio size={24}/>}
            title="Telecommunications"
            subtitle="5G/6G Backhaul Defense"
            problem="Fiber backhauls handle massive traffic volumes. State-sponsored adversaries can intercept and store these flows for future processing."
            solution="Establishing Hybrid ML-KEM tunnels at the network edge allows telcos to secure core traffic with near-zero latency overhead."
            reference={{ name: "ETSI Quantum-Safe Whitepaper", link: "https://www.etsi.org/" }}
        />

      </div>

      <div className="not-prose bg-slate-900 text-white p-12 rounded-[2.5rem] mt-16 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-technical opacity-5 pointer-events-none"></div>
            <h2 className="text-white font-serif text-3xl mb-4 m-0 relative z-10">Does your infrastructure have a 10-year secret?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-8 mt-4 relative z-10">
                If data must stay secret for a decade or more, you are already at risk. Let's design your PQC migration path.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                <Link to="/compliance" className="px-8 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-all">
                    View Migration Deadlines
                </Link>
                <Link to="/resources" className="px-8 py-3 border border-slate-700 text-white font-bold rounded-xl hover:bg-white/5 transition-all">
                    Technical Resources
                </Link>
            </div>
      </div>

      {/* Proprietary & NDA Protection Section */}
      <section className="mt-24 pt-16 border-t border-slate-100">
        <div className="not-prose bg-white rounded-[3rem] p-10 md:p-16 border border-slate-100 shadow-sm">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3">
              <div className="flex items-center gap-2 mb-6 text-slate-900">
                <ShieldAlert size={24} className="text-red-600" />
                <h3 className="text-xl font-bold uppercase tracking-widest m-0">Proprietary Notice</h3>
              </div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">Confidential Information</p>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <p className="text-xs text-slate-600 leading-relaxed font-mono m-0">
                  ALL RIGHTS RESERVED. This content is protected by a Non-Disclosure Agreement (NDA).
                </p>
              </div>
            </div>

            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Scale size={16} className="text-blue-600" /> Intellectual Property
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  All <strong>Patents</strong>, <strong>Designs</strong>, <strong>Protocols</strong>, and <strong>Trademarks</strong> associated with RivicQ Technologies GmbH are the exclusive intellectual property of the company. Everything presented belongs strictly to RivicQ.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Lock size={16} className="text-blue-600" /> NDA Enforcement
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Any unauthorized use, reproduction, or disclosure of these technical use cases, methodology, or architecture constitutes a violation of the NDA and will be prosecuted under the laws of the Federal Republic of Germany.
                </p>
              </div>
              <div className="sm:col-span-2">
                <div className="flex items-center gap-3 p-4 bg-blue-50/50 border border-blue-100 rounded-2xl">
                  <Info size={16} className="text-blue-600 shrink-0" />
                  <p className="text-[10px] text-blue-700 font-bold uppercase tracking-widest m-0 leading-normal">
                    Proprietary Algorithm "RQSP" & CBOM Heuristics are Registered Trademarks of RivicQ Technologies GmbH.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-12 text-center">
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.4em] m-0">
          Confidential • RivicQ Technologies GmbH • Berlin
        </p>
      </footer>
    </article>
  );
};

export default UseCases;
