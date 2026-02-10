import React from 'react';
import { Cloud, Server, ShieldCheck, Box, Settings, Lock } from 'lucide-react';

const SystemArchitecture3D: React.FC = () => {
    return (
        <div className="w-full py-16 md:py-24 flex flex-col items-center justify-center bg-white overflow-visible relative group border-y border-gray-100 mb-12">
            
            {/* Background Grid */}
             <div className="absolute inset-0 pointer-events-none" 
                 style={{ 
                     backgroundImage: 'linear-gradient(#f1f5f9 1px, transparent 1px), linear-gradient(90deg, #f1f5f9 1px, transparent 1px)',
                     backgroundSize: '30px 30px',
                     maskImage: 'radial-gradient(circle at center, black 60%, transparent 100%)',
                     opacity: 0.6
                 }}>
            </div>

            {/* 3D Scene Container */}
            <div className="relative w-[280px] h-[320px] md:w-[350px] md:h-[400px] [perspective:2000px] mt-8 mb-24">
                
                {/* Rotated Assembly */}
                <div className="relative w-full h-full [transform-style:preserve-3d] [transform:rotateX(55deg)_rotateZ(45deg)] transition-transform duration-700 ease-out group-hover:[transform:rotateX(60deg)_rotateZ(45deg)_scale(0.95)]">
                    
                    {/* --- LAYER 1: HSM & PHYSICAL INFRASTRUCTURE (BOTTOM) --- */}
                    <div className="absolute inset-0 bg-slate-900 border-2 border-slate-700 rounded-xl shadow-[20px_20px_60px_rgba(0,0,0,0.3)] 
                                  [transform:translateZ(0px)] transition-all duration-700 group-hover:[transform:translateZ(-60px)] flex items-center justify-center">
                         
                         {/* Thickness */}
                         <div className="absolute top-0 left-0 w-full h-full bg-slate-800 [transform:translateZ(-15px)] rounded-xl"></div>
                         <div className="absolute -bottom-3 -right-3 w-full h-3 bg-slate-950 origin-bottom [transform:rotateX(-90deg)]"></div>
                         <div className="absolute -bottom-3 -right-3 w-3 h-full bg-slate-950 origin-right [transform:rotateY(90deg)]"></div>

                         <div className="text-slate-600 flex flex-col items-center justify-center [transform:rotateZ(-45deg)]">
                             <div className="grid grid-cols-2 gap-2 opacity-50">
                                <Server size={24} /> <Server size={24} />
                                <Server size={24} /> <Server size={24} />
                             </div>
                             <div className="mt-2 text-[10px] font-mono tracking-widest text-slate-500">PHYSICAL LAYER</div>
                         </div>
                         
                         {/* Label */}
                         <div className="absolute -right-24 md:-right-48 bottom-10 w-20 md:w-36 h-[1px] bg-slate-800 origin-left [transform:rotateZ(-45deg)]"></div>
                         <div className="absolute -right-28 md:-right-64 bottom-[-40px] flex items-center gap-2 text-white bg-slate-900 border border-slate-700 px-3 py-1.5 rounded shadow-lg [transform:translateZ(20px)]">
                            <Lock size={14} className="text-emerald-400"/>
                            <div className="flex flex-col">
                                <span className="text-[10px] font-bold whitespace-nowrap">HSM ROOT OF TRUST</span>
                                <span className="text-[8px] text-gray-400 font-mono">FIPS 140-3 (AWS/Thales)</span>
                            </div>
                         </div>
                    </div>

                    {/* --- LAYER 2: KUBERNETES & CLOUD (MIDDLE) --- */}
                    <div className="absolute inset-0 bg-blue-50/90 border-2 border-blue-400 rounded-xl shadow-[0_0_30px_rgba(37,99,235,0.2)]
                                  [transform:translateZ(80px)] transition-all duration-700 group-hover:[transform:translateZ(60px)] flex items-center justify-center backdrop-blur-sm">
                         
                         {/* Thickness */}
                         <div className="absolute -bottom-1 -right-1 w-full h-1 bg-blue-200 origin-bottom [transform:rotateX(-90deg)]"></div>
                         <div className="absolute -bottom-1 -right-1 w-1 h-full bg-blue-200 origin-right [transform:rotateY(90deg)]"></div>

                         <div className="relative z-10 flex flex-col items-center justify-center [transform:rotateZ(-45deg)]">
                             <Cloud size={48} className="text-blue-500 mb-2" strokeWidth={1}/>
                             <span className="text-[10px] font-bold text-blue-800 tracking-widest">CLOUD RUNTIME</span>
                         </div>

                        {/* Label */}
                         <div className="absolute -left-20 md:-left-40 top-1/2 w-16 md:w-32 h-[1px] bg-blue-400 origin-right"></div>
                         <div className="absolute -left-32 md:-left-64 top-1/2 -mt-4 flex items-center gap-2 text-blue-900 bg-white border border-blue-200 px-3 py-1.5 rounded shadow-lg [transform:translateZ(60px)]">
                            <Box size={14} className="text-blue-600"/>
                            <div className="flex flex-col">
                                <span className="text-[10px] font-bold whitespace-nowrap">KUBERNETES & CNCF</span>
                                <span className="text-[8px] text-gray-500 font-mono">Orchestration Layer</span>
                            </div>
                         </div>
                    </div>

                    {/* --- LAYER 3: RIVICQ SECURITY MESH (TOP) --- */}
                    <div className="absolute inset-0 bg-white/80 border-2 border-indigo-500 rounded-xl shadow-lg
                                  [transform:translateZ(160px)] transition-all duration-700 group-hover:[transform:translateZ(180px)] flex items-center justify-center backdrop-blur-md">
                         
                         {/* Mesh Pattern */}
                         <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>

                         {/* Icon */}
                         <div className="relative z-10 flex flex-col items-center justify-center [transform:rotateZ(-45deg)]">
                             <ShieldCheck size={48} className="text-indigo-600 mb-2" strokeWidth={1.5}/>
                             <span className="text-[10px] font-bold text-indigo-900 tracking-widest">RIVICQ MESH</span>
                         </div>
                         
                         {/* Label */}
                         <div className="absolute -right-20 md:-right-40 top-10 w-16 md:w-32 h-[1px] bg-indigo-400 origin-left [transform:rotateZ(45deg)]"></div>
                         <div className="absolute -right-24 md:-right-60 top-[-30px] flex items-center gap-2 text-gray-900 bg-white border border-indigo-100 px-3 py-1.5 rounded shadow-lg [transform:translateZ(170px)]">
                            <Settings size={14} className="text-indigo-600"/>
                            <div className="flex flex-col">
                                <span className="text-[10px] font-bold whitespace-nowrap">CRYPTOBOM & POLICY</span>
                                <span className="text-[8px] text-gray-500 font-mono">DevSecOps Integration</span>
                            </div>
                         </div>
                    </div>
                    
                    {/* Data Flow / Connection Line */}
                     <div className="absolute inset-0 flex items-center justify-center [transform:translateZ(0)]">
                         <div className="w-[2px] h-0 bg-indigo-500/30 transition-all duration-1000 delay-300 group-hover:h-[240px] [transform:rotateX(-90deg)_translateZ(90px)]"></div>
                    </div>

                </div>
            </div>
            
            <p className="mt-8 font-mono text-[10px] md:text-xs text-gray-400 tracking-[0.2em] uppercase">
                Interactive Stack • Hover to Expand
            </p>
        </div>
    );
};

export default SystemArchitecture3D;