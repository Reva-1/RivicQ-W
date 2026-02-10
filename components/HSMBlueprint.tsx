import React, { useState, useEffect } from 'react';
import { ShieldCheck, Cpu, Box, Lock, Zap, X, Info, Atom, CheckCircle2, Waves, Sparkles } from 'lucide-react';

type Layer = 'physical' | 'engine' | 'quantum' | null;

const HSMBlueprint: React.FC = () => {
    const [activeLayer, setActiveLayer] = useState<Layer>(null);
    const [isBooting, setIsBooting] = useState(false);

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
            stats: ["True Randomness (QRNG)", "Stochastic Tunneling Core", "NIST SP 800-90B Compliant"]
        }
    };

    return (
        <div className="w-full py-24 md:py-36 flex flex-col items-center justify-center bg-white overflow-visible relative group border-y border-slate-50 mb-8">
            
            {/* Background Atmosphere */}
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
                    
                    {/* Secure Boot Verification Beam */}
                    <div className={`absolute inset-0 z-40 pointer-events-none transition-opacity duration-700 ${activeLayer === 'engine' ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 h-[160px] w-[2px] bg-gradient-to-t from-blue-500 via-emerald-400 to-transparent [transform:translateZ(0px)_rotateX(-90deg)]">
                             <div className={`absolute top-0 w-full h-1/2 bg-blue-400 ${isBooting ? 'animate-secure-boot' : 'opacity-0'} shadow-[0_0_20px_#3b82f6]`}></div>
                        </div>
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 [transform:translateZ(170px)_rotateZ(-45deg)] flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] shadow-2xl border border-slate-800 whitespace-nowrap">
                           <ShieldCheck size={16} className={`text-emerald-400 ${isBooting ? 'animate-pulse' : ''}`}/> {isBooting ? 'Verifying Integrity...' : 'Trust Anchor Verified'}
                        </div>
                    </div>

                    {/* --- LAYER 1: PHYSICAL CHASSIS --- */}
                    <div 
                        onClick={() => setActiveLayer('physical')}
                        className={`absolute inset-0 bg-white border border-slate-200 rounded-[4rem] shadow-[20px_20px_100px_rgba(15,23,42,0.1)] 
                                  [transform:translateZ(0px)] transition-all duration-700 cursor-pointer hover:bg-slate-50
                                  ${activeLayer === 'physical' ? '[transform:translateZ(-80px)] border-blue-600 border-2' : activeLayer ? 'opacity-10' : 'group-hover:[transform:translateZ(-30px)]'} flex items-center justify-center`}
                    >
                         <div className="w-[85%] h-[85%] border-2 border-dashed border-slate-100 rounded-[3.5rem] flex items-center justify-center opacity-40">
                            <Box size={56} className="text-slate-200" strokeWidth={0.5} />
                         </div>
                    </div>

                    {/* --- LAYER 2: SECURITY ENGINE --- */}
                    <div 
                        onClick={() => setActiveLayer('engine')}
                        className={`absolute inset-0 bg-slate-900 border border-slate-800 rounded-[4rem] shadow-2xl overflow-hidden
                                  [transform:translateZ(100px)] transition-all duration-700 cursor-pointer
                                  ${activeLayer === 'engine' ? '[transform:translateZ(20px)] border-blue-500 border-2' : activeLayer ? 'opacity-10' : 'group-hover:[transform:translateZ(80px)]'} flex items-center justify-center`}
                    >
                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                        <div className="relative z-10 flex flex-col items-center">
                            <div className={`p-5 bg-slate-800 rounded-3xl border border-slate-700 transition-all duration-500 ${activeLayer === 'engine' ? 'scale-110 border-blue-500 shadow-[0_0_30px_rgba(37,99,235,0.2)]' : ''}`}>
                                <Cpu size={48} className="text-blue-500" strokeWidth={1} />
                            </div>
                            <span className="mt-4 text-[9px] font-bold text-slate-500 tracking-[0.4em] uppercase">Control Plane</span>
                        </div>
                    </div>

                    {/* --- LAYER 3: QUANTUM ENTROPY ENGINE (THE CORE) --- */}
                    <div 
                        onClick={() => setActiveLayer('quantum')}
                        className={`absolute inset-0 w-72 h-72 md:w-[400px] md:h-[400px] m-auto bg-black border border-blue-500/20 shadow-[0_0_120px_rgba(37,99,235,0.2)] rounded-[3.5rem] cursor-pointer
                                  [transform:translateZ(200px)] transition-all duration-1000 overflow-visible
                                  ${activeLayer === 'quantum' ? '[transform:translateZ(300px)_scale(1.1)] border-blue-400 shadow-[0_0_150px_rgba(37,99,235,0.5)]' : activeLayer ? 'opacity-5' : 'group-hover:[transform:translateZ(190px)]'} flex items-center justify-center z-50`}
                    >
                         {/* Quantum Field Atmosphere */}
                         <div className={`absolute inset-0 transition-opacity duration-1000 ${activeLayer === 'quantum' ? 'opacity-100' : 'opacity-40'}`}>
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(37,99,235,0.2)_0%,_transparent_75%)] animate-pulse"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] opacity-[0.05] animate-[spin_60s_linear_infinite]" 
                                 style={{backgroundImage: 'conic-gradient(from 0deg, transparent, #3b82f6, transparent, #3b82f6, transparent)'}}></div>
                            
                            {/* Stochastic Particle Emission (Quantum Entropy) */}
                            {activeLayer === 'quantum' && Array.from({ length: 12 }).map((_, i) => (
                                <div key={i} className="absolute left-1/2 top-1/2 w-1 h-1 bg-blue-300 rounded-full animate-radiate-entropy"
                                     style={{ 
                                         animationDelay: `${i * 0.3}s`,
                                         '--tx': `${(Math.random() - 0.5) * 400}px`,
                                         '--ty': `${(Math.random() - 0.5) * 400}px`
                                     } as React.CSSProperties}></div>
                            ))}
                         </div>

                         {/* The Quantum Chip Visual */}
                         <div className="relative w-[90%] h-[90%] bg-slate-900/80 rounded-[3rem] border border-blue-500/10 backdrop-blur-xl flex flex-col items-center justify-center p-8 overflow-hidden group/chip">
                             <div className="absolute inset-4 border border-blue-500/5 rounded-[2.5rem]"></div>
                             
                             {/* Chip Trace Lines */}
                             <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
                                 backgroundImage: 'linear-gradient(90deg, transparent 49%, rgba(59,130,246,0.3) 50%, transparent 51%), linear-gradient(0deg, transparent 49%, rgba(59,130,246,0.3) 50%, transparent 51%)',
                                 backgroundSize: '40px 40px'
                             }}></div>

                             {/* Central Tunneling Core */}
                             <div className="relative z-20 w-32 h-32 md:w-48 md:h-48 flex items-center justify-center">
                                 {/* Rotating Rings */}
                                 <div className="absolute inset-0 border-2 border-dashed border-blue-500/30 rounded-full animate-[spin_20s_linear_infinite]"></div>
                                 <div className="absolute inset-4 border border-blue-400/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                                 
                                 {/* Pulsating Core */}
                                 <div className={`w-12 h-12 md:w-16 md:h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(37,99,235,0.6)] transition-all duration-700 ${activeLayer === 'quantum' ? 'scale-110' : 'scale-90'}`}>
                                     <Atom size={activeLayer === 'quantum' ? 32 : 24} className="text-white animate-spin-slow" />
                                 </div>

                                 {/* Entropy Wave Circles */}
                                 <div className="absolute inset-0 border border-blue-400/40 rounded-full animate-entropy-wave"></div>
                                 <div className="absolute inset-0 border border-blue-400/40 rounded-full animate-entropy-wave [animation-delay:1.5s]"></div>
                             </div>

                             <div className={`mt-10 flex flex-col items-center transition-all duration-1000 ${activeLayer === 'quantum' ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                                <div className="flex items-center gap-2 px-4 py-1.5 bg-blue-900/40 border border-blue-400/30 rounded-full backdrop-blur-md">
                                    <Sparkles size={12} className="text-blue-300 animate-pulse" />
                                    <span className="text-[9px] font-mono text-blue-100 font-bold tracking-[0.25em] uppercase">Entropy Output: TRULY RANDOM</span>
                                </div>
                                <p className="mt-4 text-[8px] text-blue-400/60 font-mono tracking-widest uppercase">Harvesting Non-Deterministic States</p>
                             </div>
                         </div>
                    </div>
                </div>
            </div>
            
            {/* Status Footer */}
            <div className="text-center mt-12 z-10 animate-fadeIn pointer-events-none">
                <p className="font-serif text-2xl text-slate-900 font-bold tracking-tight mb-2">
                    {activeLayer === 'quantum' ? 'Stochastic Tunneling Core Active' : activeLayer === 'engine' ? 'Secure Boot Sequence' : activeLayer === 'physical' ? 'Physical Security Boundary' : 'Modular HSM Architecture'}
                </p>
                <div className="flex items-center justify-center gap-4">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <Zap size={10} className="text-blue-500"/> Quantum Entropy Engine
                    </span>
                    <div className="w-1 h-1 bg-slate-200 rounded-full"></div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <ShieldCheck size={10} className="text-emerald-500"/> FIPS 140-3 Compliant
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
                .animate-secure-boot { animation: secure-boot 3s ease-out forwards; }

                @keyframes radiate-entropy {
                    0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
                    10% { opacity: 0.8; }
                    100% { transform: translate(calc(-50% + var(--tx)), calc(-50% + var(--ty))) scale(1); opacity: 0; }
                }
                .animate-radiate-entropy { animation: radiate-entropy 3s ease-out infinite; }

                @keyframes entropy-wave {
                    0% { transform: scale(0.4); opacity: 1; }
                    100% { transform: scale(1.8); opacity: 0; }
                }
                .animate-entropy-wave { animation: entropy-wave 3s linear infinite; }
                
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow { animation: spin-slow 10s linear infinite; }
            `}</style>
        </div>
    );
};

export default HSMBlueprint;