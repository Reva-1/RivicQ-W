
import React from 'react';
import { Link } from 'react-router-dom';
import { Landmark, Zap, Database, HeartPulse, Radio, Truck, Globe, FileText, ExternalLink, Cpu, ShieldCheck } from 'lucide-react';

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
      <h1>Use Cases</h1>
      <p className="lead font-serif italic text-slate-500">
        RivicQ is deployed where data longevity requires immediate PQC migration.
      </p>

      <div className="not-prose grid grid-cols-1 gap-8 mt-12">
        
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

      <div className="not-prose bg-slate-900 text-white p-12 rounded-[2.5rem] mt-16 text-center shadow-2xl">
            <h2 className="text-white font-serif text-3xl mb-4 m-0">Does your infrastructure have a 10-year secret?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-8 mt-4">
                If data must stay secret for a decade or more, you are already at risk. Let's design your PQC migration path.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/compliance" className="px-8 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-all">
                    View Migration Deadlines
                </Link>
                <Link to="/resources" className="px-8 py-3 border border-slate-700 text-white font-bold rounded-xl hover:bg-white/5 transition-all">
                    Technical Resources
                </Link>
            </div>
      </div>
    </article>
  );
};

export default UseCases;
