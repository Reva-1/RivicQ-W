import React from 'react';
import { Link } from 'react-router-dom';
import { Landmark, Zap, Database, HeartPulse, Radio, Truck, Globe, FileText, ExternalLink, Cpu } from 'lucide-react';

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
      <p className="lead">
        RivicQ is deployed in environments where data longevity exceeds the timeline for quantum breaking (10+ years) or where regulatory pressure demands immediate action.
      </p>

      <div className="not-prose grid grid-cols-1 gap-8 mt-12">
        
        {/* Financial Services */}
        <UseCaseCard 
            icon={<Landmark size={24}/>}
            title="Financial Services & Banking"
            subtitle="DORA & PCI DSS v4.0 Compliance"
            problem="Banking networks rely on RSA-2048 for transaction signing. Financial records must be retained for decades, making them a prime target for retrospective decryption."
            solution="We deploy a hybrid signature scheme (ML-DSA + RSA) within existing HSM infrastructure, allowing banks to meet current mandates while securing data for the quantum future."
            reference={{ name: "PCI Security Standards Council - PQC RFC", link: "https://www.pcisecuritystandards.org/" }}
        />

        {/* IoT and Embedded Systems */}
        <UseCaseCard 
            icon={<Cpu size={24}/>}
            title="IoT & Embedded Systems"
            subtitle="Secure Lifecycle Management"
            problem="Industrial IoT, smart meters, and automotive ECUs have lifecycles of 15-20 years. These devices often have extremely limited update capabilities and are vulnerable to future quantum-powered forgery."
            solution="RivicQ's lightweight PQC primitives and hardware-anchored trust provide secure-boot and remote-update mechanisms that remain unforgeable even in a post-quantum world."
            reference={{ name: "NIST Lightweight Cryptography (LWC) Project", link: "https://csrc.nist.gov/projects/lightweight-cryptography" }}
        />

        {/* Healthcare */}
        <UseCaseCard 
            icon={<HeartPulse size={24}/>}
            title="Healthcare & Life Sciences"
            subtitle="The 50-Year Secret Problem"
            problem="Patient health records and genomic data are sensitive for a lifetime. If intercepted today, this data remains highly valuable and dangerous when decrypted 10-15 years from now."
            solution="RivicQ provides end-to-end PQC-wrapped storage layers for EMR (Electronic Medical Record) systems, ensuring patient confidentiality persists throughout the patient's entire life."
            reference={{ name: "NIST Special Publication 800-140C", link: "https://csrc.nist.gov/" }}
        />

        {/* Energy & Utilities */}
        <UseCaseCard 
            icon={<Zap size={24}/>}
            title="Energy & Critical Infrastructure"
            subtitle="Grid Resilience & OT Security"
            problem="Smart meters and industrial controllers (SCADA) have lifecycles of 20+ years. Their cryptographic roots are often hardcoded and impossible to patch once deployed."
            solution="We implement stateful hash-based signatures (LMS/XMSS) for over-the-air firmware updates, ensuring that critical grid infrastructure can always be securely updated."
            reference={{ name: "BSI TR-02102-1: Cryptographic Mechanisms", link: "https://www.bsi.bund.de/" }}
        />

        {/* Telecommunications */}
        <UseCaseCard 
            icon={<Radio size={24}/>}
            title="Telecommunications"
            subtitle="5G/6G Backhaul Encryption"
            problem="Network backbone infrastructure handles massive volumes of encrypted traffic. State-sponsored 'Harvest Now' attacks are particularly aggressive against high-capacity fiber backhauls."
            solution="Integrating RivicQ Mesh at the network edge allows telcos to establish quantum-safe tunnels for core-to-edge communication without significant latency penalties."
            reference={{ name: "ETSI White Paper No. 56: Quantum-Safe Cryptography", link: "https://www.etsi.org/" }}
        />

        {/* Logistics & Trade */}
        <UseCaseCard 
            icon={<Truck size={24}/>}
            title="Logistics & Global Trade"
            subtitle="Supply Chain Integrity"
            problem="Trade finance relies on digital Bills of Lading and manifests. Forgery of these documents using quantum computing could collapse global shipping trust."
            solution="We anchor logistics document signatures in a quantum-safe HSM mesh, providing an immutable and verifiable chain of custody that withstands cryptographic obsolescence."
            reference={{ name: "eIDAS 2.0 Regulation (EU) 2024/1183", link: "https://eur-lex.europa.eu/" }}
        />

        {/* Web3 */}
        <UseCaseCard 
            icon={<Database size={24}/>}
            title="Web3 & Digital Identity"
            subtitle="Account Abstraction & EIDAS 2.0"
            problem="Most blockchain wallets use ECC (Secp256k1), which will be completely broken by quantum computers, potentially leading to the total theft of digital assets."
            solution="We provide ERC-4337 compliant smart contract wallets that support PQC signatures, enabling a transition for users to secure their digital identities and assets."
            reference={{ name: "Vitalik Buterin: Quantum Resistance via Hardfork", link: "https://ethereum.org/" }}
        />

      </div>

      <div className="not-prose bg-slate-900 text-white p-12 rounded-3xl mt-16 text-center">
            <h2 className="text-white font-serif text-3xl mb-4">Does your industry have a 10-year secret?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-8">
                If the data you encrypt today needs to stay secret for more than 10 years, you are already at risk. Let's design your migration path.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/compliance" className="px-8 py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-cyan-400 transition-colors">
                    View Compliance Deadlines
                </Link>
                <Link to="/resources" className="px-8 py-3 border border-slate-700 text-white font-bold rounded-lg hover:bg-white/5 transition-colors">
                    Browse Documentation
                </Link>
            </div>
      </div>
    </article>
  );
};

export default UseCases;