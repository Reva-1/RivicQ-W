import React, { useState, useEffect } from 'react';
import { ShieldCheck, Cpu, Box, Lock, Zap, X, Atom, CheckCircle2, Sparkles, Activity } from 'lucide-react';

type Layer = 'physical' | 'engine' | 'quantum' | null;

const HSMBlueprint: React.FC = () => {
    const [activeLayer, setActiveLayer] = useState<Layer>(null);
    const [isBooting, setIsBooting] = useState(false);
    const [entropyBits, setEntropyBits] = useState<string>('10101100');

    // Simulated bitstream generation
    useEffect(() => {
        const interval = setInterval(() => {
            const bits = Array.from({ length: 8 }, () => Math.round(Math.random())).join('');
            setEntropyBits(bits);
        }, 150);
        return () => clearInterval(interval);
    }, []);

    // Trigger secure boot animation when 'engine' is selected
    useEffect(() => {
        if (activeLayer === 'engine') {
            setIsBooting(true);
            const timer = setTimeout(() => setIsBooting(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [activeLayer]);

    const layerDetails: Record<string, { title: string, desc: string, stats: string[] }> = {
        physical: {
            title: "Physical Boundary",
            desc: "A tamper-resistant magnesium-alloy chassis with active environmental monitoring. It anchors the immutable Root of Trust (RoT) for the entire module.",
            stats: ["FIPS 140-3 Level 3", "Tamper-Responsive Mesh", "Environmental Seals"]
        },
        engine: {
            title: "Security Engine",
            desc: "The cryptographic core that handles policy enforcement and secure boot. It verifies firmware signatures against the hardware RoT on every power cycle.",
            stats: ["Secure Boot Logic", "Policy Enforcement", "Hybrid PQC Acceleration"]
        },
        quantum: {
            title: "Quantum Entropy Engine",
            desc: "A dedicated silicon-based quantum device harvesting true randomness from quantum tunneling effects. It provides the non-deterministic entropy required for PQC key generation.",
            stats: ["QRNG Stochastic Core", "Tunneling Junctions", "NIST SP 800-90B Compliant"]
        }
    };

    return (
        <div className="w-full py-24 md:py-36 flex flex-col items-center justify-center bg-white overflow-visible relative group border-y border-slate-50 mb-8">
            
            {/* Background Decor */}
            <div className="absolute inset-0 pointer-events-none" 
                 style={{ 
                     backgroundImage: 'linear-gradient(to right, #f1f5f9 1px, transparent 1px), linear-gradient(to bottom, #f1f5f9 1px, transparent 1px)',
                     backgroundSize: '100px 100px',
                     maskImage: 'radial-gradient(circle at center, black 10%, transparent 80%)',
                     opacity: 0.5
                 }}>
            </div>

            {/* Interaction Panel */}
            {activeLayer && (
                <div className="absolute top-10 right-10 z-[60] w-80 bg-white/95 backdrop-blur-md border border-slate-100 rounded-3xl p-8 shadow-2xl animate-fadeIn ring-1 ring-blue-50">
                    <button 
                        onClick={() => setActiveLayer(null)}
                        className="absolute top-4 right-4 text-slate-300 hover:text-slate-900 transition-colors"
                    >
                        <X size={18} />
                    </button>
                    <div className="inline-block px-2 py-0.5 bg-blue-50 text-blue-600 text-[9px] font-bold uppercase tracking-widest rounded mb-3">
                        Subsystem Inspector
                    </div>
                    <h4 className="text-2xl font-serif font-bold text-slate-900 mb-2 m-0">{layerDetails[activeLayer].title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed mb-6 m-0">{layerDetails[activeLayer].desc}</p>
                    <div className="space-y-2">
                        {layerDetails[activeLayer].stats.map((stat, i) => (
                            <div key={i} className="flex items-center gap-2 text-[10px] font-bold text-slate-700 uppercase tracking-widest bg-slate-50 px-3 py-2 rounded-xl border border-slate-100">
                                <CheckCircle2 size={12} className="text-blue-500" /> {stat}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* 3D Scene Container */}
            <div className="relative w-[320px] h-[320px] md:w-[500px] md:h-[500px] [perspective:4000px] mt-4 mb-16">
                
                {/* Rotated Assembly */}
                <div className={`relative w-full h-full [transform-style:preserve-3d] [transform:rotateX(55deg)_rotateZ(45deg)] transition-all duration-1000 ease-out ${activeLayer ? '[transform:rotateX(45deg)_rotateZ(15deg)_scale(0.85)]' : 'group-hover:[transform:rotateX(60deg)_rotateZ(45deg)_scale(0.95)]'}`}>
                    
                    {/* Layer 1: Physical Chassis */}
                    <div 
                        onClick={() => setActiveLayer('physical')}
                        className={`absolute inset-0 bg-white border border-slate-200 rounded-[4rem] shadow-[20px_20px_100px_rgba(15,23,42,0.1)] 
                                  [transform:translateZ(0px)] transition-all duration-700 cursor-pointer hover:bg-slate-50
                                  ${activeLayer === 'physical' ? '[transform:translateZ(-100px)] border-blue-600 border-2' : activeLayer ? 'opacity-10' : 'group-hover:[transform:translateZ(-40px)]'} flex items-center justify-center`}
                    >
                         <div className="w-[85%] h-[85%] border-2 border-dashed border-slate-100 rounded-[3.5rem] flex items-center justify-center opacity-40">
                            <Box size={56} className="text-slate-200" strokeWidth={0.5} />
                         </div>
                    </div>

                    {/* Layer 2: Security Engine */}
                    <div 
                        onClick={() => setActiveLayer('engine')}
                        className={`absolute inset-0 bg-slate-900 border border-slate-800 rounded-[4rem] shadow-2xl overflow-hidden
                                  [transform:translateZ(100px)] transition-all duration-700 cursor-pointer
                                  ${activeLayer === 'engine' ? '[transform:translateZ(20px)] border-blue-500 border-2 shadow-[0_0_50px_rgba(37,99,235,0.3)]' : activeLayer ? 'opacity-10' : 'group-hover:[transform:translateZ(80px)]'} flex items-center justify-center`}
                    >
                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                        <div className="relative z-10 flex flex-col items-center">
                            <div className={`p-5 bg-slate-800 rounded-3xl border border-slate-700 transition-all duration-500 ${activeLayer === 'engine' ? 'scale-110 border-blue-500' : ''}`}>
                                <Cpu size={48} className="text-blue-500" strokeWidth={1} />
                            </div>
                            <span className="mt-4 text-[9px] font-bold text-slate-500 tracking-[0.4em] uppercase">Controller Plane</span>
                        </div>
                    </div>

                    {/* Layer 3: Quantum Entropy Engine */}
                    <div 
                        onClick={() => setActiveLayer('quantum')}
                        className={`absolute inset-0 w-80 h-80 md:w-[420px] md:h-[420px] m-auto bg-black border border-blue-500/20 shadow-[0_0_120px_rgba(37,99,235,0.2)] rounded-[4rem] cursor-pointer
                                  [transform:translateZ(200px)] transition-all duration-1000 overflow-visible
                                  ${activeLayer === 'quantum' ? '[transform:translateZ(300px)_scale(1.1)] border-blue-400' : activeLayer ? 'opacity-5' : 'group-hover:[transform:translateZ(190px)]'} flex items-center justify-center z-50`}
                    >
                         {/* Quantum Visual Background */}
                         <div className={`absolute inset-0 transition-opacity duration-1000 rounded-[4rem] overflow-hidden ${activeLayer === 'quantum' ? 'opacity-100' : 'opacity-40'}`}>
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(37,99,235,0.15)_0%,_transparent_70%)]"></div>
                            
                            {/* Tunneling Junctions (Glow Points) */}
                            {[...Array(6)].map((_, i) => (
                                <div key={i} 
                                     className="absolute w-2 h-2 bg-blue-400 rounded-full animate-pulse blur-[2px] opacity-20"
                                     style={{ 
                                         left: `${15 + Math.random() * 70}%`, 
                                         top: `${15 + Math.random() * 70}%`,
                                         animationDelay: `${i * 0.5}s`
                                     }}></div>
                            ))}

                            {/* Stochastic Particle Streams */}
                            {activeLayer === 'quantum' && Array.from({ length: 15 }).map((_, i) => (
                                <div key={i} className="absolute left-1/2 top-1/2 w-[1px] h-[1px] bg-blue-300 rounded-full animate-harvest-particle"
                                     style={{ 
                                         animationDelay: `${i * 0.2}s`,
                                         '--tx': `${(Math.random() - 0.5) * 500}px`,
                                         '--ty': `${(Math.random() - 0.5) * 500}px`
                                     } as React.CSSProperties}></div>
                            ))}
                         </div>

                         {/* The Quantum Entropy Chip Architecture */}
                         <div className="relative w-[92%] h-[92%] bg-slate-950 rounded-[3.5rem] border border-blue-500/10 backdrop-blur-xl flex flex-col items-center justify-center p-12 overflow-hidden shadow-inner">
                             {/* Silicon Circuit Trace Patterns */}
                             <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
                                 backgroundImage: 'linear-gradient(90deg, #3b82f6 1px, transparent 1px), linear-gradient(0deg, #3b82f6 1px, transparent 1px)',
                                 backgroundSize: '24px 24px'
                             }}></div>

                             {/* Central Entropy Core Visual */}
                             <div className="relative z-20 w-36 h-36 md:w-56 md:h-56 flex flex-col items-center justify-center">
                                 {/* Rotating Field Rings */}
                                 <div className="absolute inset-0 border-t border-b border-blue-500/20 rounded-full animate-[spin_25s_linear_infinite]"></div>
                                 <div className="absolute inset-4 border-l border-r border-blue-400/20 rounded-full animate-[spin_18s_linear_infinite_reverse]"></div>
                                 
                                 {/* Harvesting Core */}
                                 <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center shadow-[0_0_60px_rgba(37,99,235,0.7)] transition-all duration-1000 ${activeLayer === 'quantum' ? 'scale-110 rotate-[45deg]' : 'scale-90 rotate-0'}`}>
                                     <Atom size={32} className={`text-white transition-all duration-1000 ${activeLayer === 'quantum' ? 'animate-spin-slow rotate-[-45deg]' : ''}`} />
                                 </div>

                                 {/* Real-time Bitstream Display (The Proof of Randomness) */}
                                 <div className={`mt-12 transition-all duration-1000 ${activeLayer === 'quantum' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                                     <div className="flex flex-col items-center gap-2">
                                         <div className="font-mono text-[10px] text-blue-400 font-bold tracking-[0.5em] uppercase">Stochastic Output</div>
                                         <div className="flex gap-1.5">
                                             {entropyBits.split('').map((bit, idx) => (
                                                 <span key={idx} className={`w-3 h-5 flex items-center justify-center text-[10px] font-mono font-bold rounded ${bit === '1' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-500'}`}>
                                                     {bit}
                                                 </span>
                                             ))}
                                         </div>
                                         <div className="flex items-center gap-1.5 mt-2">
                                             <Activity size={10} className="text-emerald-400 animate-pulse" />
                                             <span className="text-[8px] font-mono text-emerald-500/80 uppercase tracking-widest">Entropy Level: N-DETERMINISTIC</span>
                                         </div>
                                     </div>
                                 </div>
                             </div>

                             <div className={`mt-auto flex flex-col items-center transition-all duration-1000 ${activeLayer === 'quantum' ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                                <div className="flex items-center gap-3 px-6 py-2 bg-blue-900/40 border border-blue-400/30 rounded-full backdrop-blur-md shadow-2xl">
                                    <Sparkles size={14} className="text-blue-300" />
                                    <span className="text-[10px] font-mono text-blue-100 font-bold tracking-[0.3em] uppercase">RivicQ Nano Chip Core</span>
                                </div>
                             </div>
                         </div>
                    </div>
                </div>
            </div>
            
            {/* Assembly Legend */}
            <div className="text-center mt-12 z-10 animate-fadeIn pointer-events-none">
                <h3 className="font-serif text-3xl text-slate-900 font-bold tracking-tight mb-3">
                    {activeLayer === 'quantum' ? 'True Quantum Randomness Source' : activeLayer === 'engine' ? 'Secure Cryptographic Controller' : activeLayer === 'physical' ? 'FIPS 140-3 Hardware Boundary' : 'System Architecture Exploration'}
                </h3>
                <div className="flex items-center justify-center gap-6">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <Zap size={12} className="text-blue-600"/> Quantum-Safe Hardware
                    </span>
                    <div className="w-1.5 h-1.5 bg-slate-200 rounded-full"></div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <ShieldCheck size={12} className="text-emerald-600"/> Verified PQC Implementation
                    </span>
                </div>
            </div>

            <style>{`
                @keyframes secure-boot {
                    from { transform: translateY(160px); opacity: 0; }
                    20% { opacity: 1; }
                    80% { opacity: 1; }
                    to { transform: translateY(-20px); opacity: 0; }
                }
                .animate-secure-boot { animation: secure-boot 3s cubic-bezier(0.4, 0, 0.2, 1) forwards; }

                @keyframes harvest-particle {
                    0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
                    10% { opacity: 0.8; }
                    100% { transform: translate(calc(-50% + var(--tx)), calc(-50% + var(--ty))) scale(1.5); opacity: 0; }
                }
                .animate-harvest-particle { animation: harvest-particle 2.5s ease-out infinite; }
                
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow { animation: spin-slow 12s linear infinite; }
            `}</style>
        </div>
    );
};

export default HSMBlueprint;