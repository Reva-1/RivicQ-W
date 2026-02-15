
import React, { useState, useEffect } from 'react';
import { Search, FileCode, ShieldAlert, CheckCircle2, ArrowRight, Database, Lock, Server } from 'lucide-react';

const ProductDemo: React.FC = () => {
  const [step, setStep] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);

  // Simulation Timeline (Total ~30s)
  useEffect(() => {
    const sequence = [
      { t: 500, s: 1, log: "> Initializing CryptoBOM Agent v1.4..." },
      { t: 1500, s: 1, log: "> Connecting to repository: rivic-q/core-banking..." },
      { t: 3000, s: 2, log: "> Phase 1: Deep Discovery initiated." },
      { t: 4500, s: 2, log: "> Scanning: /auth/login.ts ... [RSA-2048 DETECTED]" },
      { t: 6000, s: 2, log: "> Scanning: /certs/root_ca.pem ... [SHA-1 SIGNATURE]" },
      { t: 8000, s: 2, log: "> Scanning: /lib/encrypt.py ... [AES-128-ECB]" },
      { t: 11000, s: 3, log: "> Phase 2: Quantum Risk Mapping." },
      { t: 13000, s: 3, log: "> Analyzing against Shor's Algorithm complexity..." },
      { t: 15000, s: 3, log: "> RSA-2048 -> Risk Score: CRITICAL (Factorable < 24h)" },
      { t: 18000, s: 4, log: "> Phase 3: NIST Compliance Check." },
      { t: 20000, s: 4, log: "> Mapping remediation path: ML-KEM-768 (FIPS 203)" },
      { t: 23000, s: 4, log: "> Mapping remediation path: ML-DSA-44 (FIPS 204)" },
      { t: 26000, s: 5, log: "> Generating CycloneDX Inventory..." },
      { t: 28000, s: 5, log: "> Audit Complete. Dashboard Updated." },
    ];

    let timeouts: ReturnType<typeof setTimeout>[] = [];

    // Loop logic
    const runSequence = () => {
      setStep(0);
      setLogs([]);
      
      sequence.forEach(({ t, s, log }) => {
        const timeout = setTimeout(() => {
          setStep(s);
          setLogs(prev => [...prev.slice(-4), log]); // Keep last 5 logs
        }, t);
        timeouts.push(timeout);
      });

      // Restart loop
      const reset = setTimeout(runSequence, 32000);
      timeouts.push(reset);
    };

    runSequence();

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto bg-slate-900 rounded-[2rem] overflow-hidden shadow-2xl border border-slate-800">
      {/* Window Header */}
      <div className="bg-slate-950 px-6 py-4 flex items-center justify-between border-b border-slate-800">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
        </div>
        <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
           RivicQ Automated Scanner • Live Preview
        </div>
      </div>

      <div className="grid md:grid-cols-2">
        {/* Left: Terminal View */}
        <div className="p-8 font-mono text-xs h-[300px] flex flex-col">
          <div className="flex-grow space-y-3">
             {logs.map((log, i) => (
               <div key={i} className={`pb-2 border-b border-slate-800/50 ${log.includes("CRITICAL") ? "text-red-400 font-bold" : log.includes("Phase") ? "text-blue-400 pt-2" : "text-slate-400"}`}>
                 {log}
               </div>
             ))}
             <div className="w-2 h-4 bg-blue-500 animate-pulse inline-block"></div>
          </div>
        </div>

        {/* Right: Visual State */}
        <div className="bg-slate-800/50 p-8 border-l border-slate-800 flex flex-col justify-center items-center relative overflow-hidden">
           
           {/* Step 1: Idle/Init */}
           {step <= 1 && (
             <div className="text-center animate-fadeIn">
               <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-500/20">
                 <Search size={32} className="text-blue-500 animate-pulse"/>
               </div>
               <h4 className="text-white font-bold mb-2">Connecting...</h4>
               <p className="text-slate-400 text-xs">Accessing Codebase</p>
             </div>
           )}

           {/* Step 2: Scanning */}
           {step === 2 && (
             <div className="text-center animate-fadeIn">
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <div className="absolute inset-0 border-4 border-t-blue-500 border-r-transparent border-b-blue-500 border-l-transparent rounded-full animate-spin"></div>
                  <FileCode size={32} className="absolute inset-0 m-auto text-white"/>
                </div>
                <h4 className="text-white font-bold mb-2">Deep Discovery</h4>
                <p className="text-slate-400 text-xs">Parsing Cryptographic Primitives</p>
             </div>
           )}

           {/* Step 3: Risk Mapping */}
           {step === 3 && (
             <div className="text-center animate-fadeIn">
                <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-500/20 animate-pulse">
                  <ShieldAlert size={32} className="text-red-500"/>
                </div>
                <h4 className="text-white font-bold mb-2">Risk Detected</h4>
                <p className="text-red-400 text-xs font-bold">RSA-2048 (Non-Compliant)</p>
             </div>
           )}

           {/* Step 4: Remediation */}
           {step >= 4 && (
             <div className="text-center animate-fadeIn">
                <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/20">
                  <CheckCircle2 size={32} className="text-emerald-500"/>
                </div>
                <h4 className="text-white font-bold mb-2">Remediation Mapped</h4>
                <p className="text-emerald-400 text-xs font-bold">NIST FIPS 203 (ML-KEM)</p>
             </div>
           )}

           {/* Progress Bar */}
           <div className="absolute bottom-0 left-0 h-1 bg-blue-600 transition-all duration-1000 ease-linear" style={{ width: `${(step/5)*100}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default ProductDemo;
