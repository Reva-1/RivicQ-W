
import React from 'react';
import { Atom, Network, ShieldCheck, Globe, Cpu, Lock, Workflow, Share2, FileKey, Zap, Server } from 'lucide-react';

const ResearchCard: React.FC<{ 
    title: string, 
    subtitle: string, 
    icon: React.ReactNode, 
    children: React.ReactNode, 
    status?: string 
}> = ({ title, subtitle, icon, children, status }) => (
    <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 md:p-10 shadow-sm relative overflow-hidden group hover:shadow-xl hover:border-blue-200 transition-all duration-500">
        <div className="absolute top-0 right-0 p-8 opacity-[0.03] text-slate-900 pointer-events-none group-hover:scale-110 transition-transform">
            {icon}
        </div>
        <div className="relative z-10">
            <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-slate-50 text-slate-900 rounded-2xl group-hover:bg-slate-900 group-hover:text-white transition-all">
                    {icon}
                </div>
                {status && (
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[9px] font-bold uppercase tracking-widest rounded-full">
                        {status}
                    </span>
                )}
            </div>
            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-1">{title}</h3>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">{subtitle}</p>
            <div className="text-sm text-slate-600 leading-relaxed">
                {children}
            </div>
        </div>
    </div>
);

const QuantumResearch: React.FC = () => {
    return (
        <article className="prose prose-lg prose-slate max-w-none">
            <header className="mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-[9px] font-bold uppercase tracking-[0.2em] mb-6">
                    R&D Division • Berlin
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-slate-900">
                    Quantum <span className="text-blue-600">Research.</span>
                </h1>
                <p className="text-xl text-slate-500 font-serif italic max-w-3xl leading-relaxed">
                    Exploring the frontier of cryptographic physics, decentralized trust, and sovereign identity.
                </p>
            </header>

            {/* Core Pillars */}
            <section className="mb-24 not-prose grid md:grid-cols-2 gap-8">
                
                {/* PQC Focus */}
                <ResearchCard 
                    title="Post-Quantum Cryptography" 
                    subtitle="Software Layer Defense" 
                    icon={<FileKey size={32}/>}
                    status="Production Ready"
                >
                    <p className="mb-4">
                        Our primary research focuses on the optimization and implementation of <strong>NIST-standardized lattice-based algorithms</strong> (ML-KEM and ML-DSA).
                    </p>
                    <ul className="space-y-2 list-none p-0 m-0 text-slate-500 text-xs">
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div> <strong>Kyber (ML-KEM):</strong> Optimized for < 10ms TLS handshakes.</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div> <strong>Dilithium (ML-DSA):</strong> High-throughput signatures for blockchain.</li>
                    </ul>
                </ResearchCard>

                {/* QKD Focus */}
                <ResearchCard 
                    title="Quantum Key Distribution" 
                    subtitle="Hardware Physics Layer" 
                    icon={<Atom size={32}/>}
                    status="Lab Phase (Leap Berlin)"
                >
                    <p className="mb-4">
                        While PQC handles the math, QKD handles the physics. We are researching <strong>Quantum Random Number Generation (QRNG)</strong> chips to seed our Cloud HSMs.
                    </p>
                    <p className="text-xs text-slate-500 italic">
                        Partnering with Leap Berlin hardware vendors to integrate photonic chips that detect eavesdropping via quantum entanglement collapse.
                    </p>
                </ResearchCard>

            </section>

            {/* Web3 & Cross-Chain */}
            <section className="mb-24">
                <div className="flex items-center gap-3 mb-10">
                    <div className="p-3 bg-indigo-600 text-white rounded-2xl shadow-lg">
                        <Network size={24} />
                    </div>
                    <div>
                        <h2 className="text-3xl font-serif font-bold text-slate-900 m-0">Cross-Chain & Web3</h2>
                        <p className="text-xs text-indigo-600 font-bold uppercase tracking-widest mt-1">Solana • Arcium • RivicID</p>
                    </div>
                </div>

                <div className="not-prose grid md:grid-cols-1 gap-8">
                    {/* Solana Integration */}
                    <div className="p-10 bg-slate-950 text-white rounded-[2.5rem] relative overflow-hidden shadow-2xl">
                         <div className="absolute top-0 right-0 p-12 opacity-10">
                             <Zap size={140} />
                         </div>
                         <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Active Research</span>
                                </div>
                                <h3 className="text-3xl font-serif font-bold mb-4">Solana High-Speed PQC</h3>
                                <p className="text-slate-400 leading-relaxed mb-6">
                                    Solana's high throughput requires signature schemes that are incredibly fast. Current PQC signatures are large. We are developing <strong>"Compact-Dilithium"</strong> wrappers specifically for the Solana Virtual Machine (SVM).
                                </p>
                                <div className="flex gap-4">
                                   <div className="px-4 py-2 bg-white/10 rounded-lg border border-white/10 text-xs font-mono">TPS: 65,000+</div>
                                   <div className="px-4 py-2 bg-white/10 rounded-lg border border-white/10 text-xs font-mono">Verify: &lt;400µs</div>
                                </div>
                            </div>
                            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 font-mono text-[10px] text-blue-300">
                                {`// RivicQ Solana Wrapper
program_id: PQC_Verify_111111111111111
instruction: Verify_ML_DSA_Signature

pub fn process_instruction(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    sig_data: &[u8],
) -> ProgramResult {
    // Offload to RivicQ Oracle for
    // gas-efficient PQC verification
    ...
}`}
                            </div>
                         </div>
                    </div>

                    {/* Arcium & Confidential Computing */}
                    <div className="p-10 bg-white border border-slate-200 rounded-[2.5rem] relative overflow-hidden group hover:border-blue-300 transition-all">
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="md:w-1/3">
                                <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl w-fit mb-4">
                                    <Server size={24}/>
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">Arcium Integration</h3>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Confidential Computing Network</p>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Arcium allows for encrypted computation. RivicQ acts as the <strong>Integrity Layer</strong>. While Arcium keeps data private during processing, RivicQ ensures the cryptographic keys protecting that data are quantum-resistant.
                                </p>
                            </div>
                            <div className="md:w-2/3 grid grid-cols-2 gap-4">
                                <div className="p-6 bg-slate-50 rounded-2xl">
                                    <h4 className="font-bold text-slate-900 text-sm mb-2">Multi-Party Computation (MPC)</h4>
                                    <p className="text-xs text-slate-500">Splitting PQC keys across nodes so no single point of failure exists.</p>
                                </div>
                                <div className="p-6 bg-slate-50 rounded-2xl">
                                    <h4 className="font-bold text-slate-900 text-sm mb-2">RivicID</h4>
                                    <p className="text-xs text-slate-500">Using Arcium's confidential network to verify identity without revealing PII, signed by RivicQ PQC keys.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* eIDAS & Digital Identity */}
            <section className="mb-24">
                <div className="flex items-center gap-3 mb-8">
                    <ShieldCheck size={28} className="text-emerald-600"/>
                    <h2 className="m-0 text-3xl font-serif font-bold">eIDAS 2.0 & Digital Wallets</h2>
                </div>
                <div className="p-8 border-l-4 border-emerald-500 bg-slate-50 rounded-r-2xl">
                    <p className="text-lg text-slate-700 italic mb-4">
                        "The European Digital Identity Wallet (EUDI) must be secure for decades."
                    </p>
                    <p className="text-sm text-slate-600">
                        <strong>eIDAS 2.0</strong> regulates electronic identification in the EU. RivicQ is researching the implementation of <strong>Gemini-PQC</strong> signatures for EU Digital Wallets. This ensures that a digital ID issued today cannot be forged by a quantum computer in 2030.
                    </p>
                    <div className="mt-6 flex gap-4">
                        <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-500">QES (Qualified Elec. Signatures)</span>
                        <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-500">X.509 Certificates</span>
                    </div>
                </div>
            </section>

        </article>
    );
};

export default QuantumResearch;
