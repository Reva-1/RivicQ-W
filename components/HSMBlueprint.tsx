
import React, { useState, useEffect } from 'react';
import { ShieldCheck, Cpu, Box, Lock, Zap, X, Atom, CheckCircle2, Sparkles, Activity, Loader2, Key, Cloud, Network, Server } from 'lucide-react';

type Layer = 'physical' | 'engine' | 'quantum' | 'cloud' | null;

const HSMBlueprint: React.FC = () => {
    const [activeLayer, setActiveLayer] = useState<Layer>(null);
    const [isBooting, setIsBooting] = useState(false);
    const [bootStep, setBootStep] = useState(0);
    const [entropyBits, setEntropyBits] = useState<string>('10101100');

    // Simulated bitstream generation
    useEffect(() => {
        const interval = setInterval(() => {
            const bits = Array.from({ length: 8 }, () => Math.round(Math.random())).join('');
            setEntropyBits(bits);
        }, 150);
        return () => clearInterval(interval);
    }, []);

    // Trigger secure boot animation steps when 'engine' is selected
    useEffect(() => {
        if (activeLayer === 'engine') {
            setIsBooting(true);
            setBootStep(0);
            
            const steps = [
                () => setBootStep(1), // Initialization
                () => setBootStep(2), // Root of Trust Handshake
                () => setBootStep(3), // Signature Verification
                () => setBootStep(4), // Success
            ];

            const timers = steps.map((step, i) => setTimeout(step, (i + 1) * 800));
            const endTimer = setTimeout(() => setIsBooting(false), 4500);

            return () => {
                timers.forEach(clearTimeout);
                clearTimeout(endTimer);
            };
        }
    }, [activeLayer]);

    const layerDetails: Record<string, { title: string, desc: string, stats: string[] }> = {
        physical: {
            title: "Physical Boundary",
            desc: "A tamper-resistant magnesium-alloy chassis with active environmental monitoring.",
            stats: ["FIPS 140-3 Level 3", "Tamper-Responsive Mesh", "Environmental Seals"]
        },
        engine: {
            title: "Security Engine",
            desc: "The cryptographic core handling policy enforcement and secure boot.",
            stats: ["Secure Boot Logic", "Policy Enforcement", "Hybrid PQC Acceleration"]
        },
        quantum: {
            title: "Quantum Entropy Engine",
            desc: "A dedicated chip harvesting randomness from quantum tunneling effects.",
            stats: ["QRNG Stochastic Core", "Tunneling Junctions", "NIST SP 800-90B"]
        },
        cloud: {
            title: "Cloud vHSM Interface",
            desc: "The virtualization boundary projecting hardware RoT into cloud VPCs.",
            stats: ["Virtual Air-Gap", "Active Discovery Agent", "REST/gRPC"]
        }
    };

    return (
        <div className="w-full py-12 md:py-24 md:py-36 flex flex-col items-center justify-center bg-white overflow-hidden relative group border-y border-slate-50 mb-8">
            
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
                <div className="absolute top-4 right-4 md:top-10 md:right-10 z-[60] w-[calc(100%-2rem)] md:w-80 bg-white/95 backdrop-blur-md border border-slate-100 rounded-3xl p-6 md:p-8 shadow-2xl animate-fadeIn ring-1 ring-blue-50">
                    <button 
                        onClick={() => setActiveLayer(null)}
                        className="absolute top-4 right-4 text-slate-300 hover:text-slate-900 transition-colors"
                    >
                        <X size={18} />
                    </button>
                    <div className="inline-block px-2 py-0.5 bg-blue-50 text-blue-600 text-[9px] font-bold uppercase tracking-widest rounded mb-3">
                        Subsystem Inspector
                    </div>
                    <h4 className="text-xl md:text-2xl font-serif font-bold text-slate-900 mb-2 m-0">{layerDetails[activeLayer].title}</h4>
                    <p className="text-xs md:text-sm text-slate-500 leading-relaxed mb-6 m-0">{layerDetails[activeLayer].desc}</p>
                    <div className="space-y-2">
                        {layerDetails[activeLayer].stats.map((stat, i) => (
                            <div key={i} className="flex items-center gap-2 text-[10px] font-bold text-slate-700 uppercase tracking-widest bg-slate-50 px-3 py-2 rounded-xl border border-slate-100">
                                <CheckCircle2 size={12} className="text-blue-500" /> {stat}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* 3D Scene Container with Mobile Scaling */}
            <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] [perspective:4000px] mt-4 mb-16 scale-[0.85] md:scale-100">
                
                {/* Rotated Assembly */}
                <div className={`relative w-full h-full [transform-style:preserve-3d] [transform:rotateX(55deg)_rotateZ(45deg)] transition-all duration-1000 ease-out ${activeLayer ? '[transform:rotateX(45deg)_rotateZ(15deg)_scale(0.85)]' : 'group-hover:[transform:rotateX(60deg)_rotateZ(45deg)_scale(0.95)]'}`}>
                    
                    {/* Layer 1: Physical Chassis */}
                    <div 
                        onClick={() => setActiveLayer('physical')}
                        className={`absolute inset-0 bg-white border border-slate-200 rounded-[3rem] md:rounded-[4rem] shadow-[20px_20px_100px_rgba(15,23,42,0.1)] 
                                  [transform:translateZ(0px)] transition-all duration-700 cursor-pointer hover:bg-slate-50
                                  ${activeLayer === 'physical' ? '[transform:translateZ(-100px)] border-blue-600 border-2' : activeLayer ? 'opacity-10' : 'group-hover:[transform:translateZ(-40px)]'} flex items-center justify-center`}
                    >
                         <div className="w-[85%] h-[85%] border-2 border-dashed border-slate-100 rounded-[2.5rem] md:rounded-[3.5rem] flex items-center justify-center relative overflow-hidden">
                            <Box size={40} md:size={56} className="text-slate-200" strokeWidth={0.5} />
                         </div>
                    </div>

                    {/* Layer 2: Security Engine */}
                    <div 
                        onClick={() => setActiveLayer('engine')}
                        className={`absolute inset-0 bg-slate-900 border border-slate-800 rounded-[3rem] md:rounded-[4rem] shadow-2xl overflow-hidden
                                  [transform:translateZ(90px)] transition-all duration-700 cursor-pointer
                                  ${activeLayer === 'engine' ? '[transform:translateZ(20px)] border-blue-500 border-2 shadow-[0_0_50px_rgba(37,99,235,0.3)]' : activeLayer ? 'opacity-10' : 'group-hover:[transform:translateZ(70px)]'} flex items-center justify-center`}
                    >
                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                        <div className="relative z-10 flex flex-col items-center">
                            <div className={`p-4 md:p-5 bg-slate-800 rounded-2xl md:rounded-3xl border border-slate-700 transition-all duration-500 ${activeLayer === 'engine' ? 'scale-110 border-blue-50' : ''}`}>
                                <Cpu size={40} md:size={48} className="text-blue-500" strokeWidth={1} />
                            </div>
                        </div>
                    </div>

                    {/* Layer 3: Quantum Entropy Engine */}
                    <div 
                        onClick={() => setActiveLayer('quantum')}
                        className={`absolute inset-0 w-[260px] h-[260px] md:w-[420px] md:h-[420px] m-auto bg-black border border-blue-500/20 shadow-[0_0_120px_rgba(37,99,235,0.2)] rounded-[3rem] md:rounded-[4rem] cursor-pointer
                                  [transform:translateZ(180px)] transition-all duration-1000 overflow-visible
                                  ${activeLayer === 'quantum' ? '[transform:translateZ(300px)_scale(1.1)] border-blue-400' : activeLayer ? 'opacity-5' : 'group-hover:[transform:translateZ(180px)]'} flex items-center justify-center z-50`}
                    >
                         <div className="relative w-[92%] h-[92%] bg-slate-950 rounded-[2.5rem] md:rounded-[3.5rem] border border-blue-500/10 flex flex-col items-center justify-center p-6 md:p-12 overflow-hidden shadow-inner">
                             <div className="relative z-20 w-32 h-32 md:w-56 md:h-56 flex flex-col items-center justify-center">
                                 <div className={`w-12 h-12 md:w-20 md:h-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl md:rounded-2xl flex items-center justify-center shadow-[0_0_60px_rgba(37,99,235,0.7)]`}>
                                     <Atom size={24} md:size={32} className={`text-white animate-spin-slow`} />
                                 </div>
                             </div>
                         </div>
                    </div>

                    {/* Layer 4: Cloud vHSM */}
                    <div 
                        onClick={() => setActiveLayer('cloud')}
                        className={`absolute inset-0 bg-blue-50/10 border border-blue-400/30 rounded-[3rem] md:rounded-[4rem] shadow-[0_0_80px_rgba(59,130,246,0.1)] backdrop-blur-sm
                                  [transform:translateZ(270px)] transition-all duration-700 cursor-pointer hover:bg-blue-50/20
                                  ${activeLayer === 'cloud' ? '[transform:translateZ(400px)] border-blue-400 border-2' : activeLayer ? 'opacity-5' : 'group-hover:[transform:translateZ(300px)]'} flex items-center justify-center z-[60]`}
                    >
                         <div className="flex flex-col items-center justify-center text-blue-300">
                            <Cloud size={48} md:size={64} strokeWidth={1} />
                         </div>
                    </div>

                </div>
            </div>
            
            {/* Assembly Legend */}
            <div className="text-center mt-6 md:mt-12 z-10 animate-fadeIn pointer-events-none px-6">
                <h3 className="font-serif text-xl md:text-3xl text-slate-900 font-bold tracking-tight mb-3">
                    {activeLayer ? layerDetails[activeLayer].title : 'System Architecture Exploration'}
                </h3>
                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                    <span className="text-[10px] md:text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <Zap size={12} className="text-blue-600"/> Quantum-Safe Hardware
                    </span>
                    <div className="w-1.5 h-1.5 bg-slate-200 rounded-full hidden md:block"></div>
                    <span className="text-[10px] md:text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <Cloud size={12} className="text-blue-600"/> Cloud Virtualization
                    </span>
                </div>
            </div>
        </div>
    );
};

export default HSMBlueprint;
