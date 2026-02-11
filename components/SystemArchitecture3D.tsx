
import React from 'react';
import { Github, Terminal, Database, ShieldAlert, Lock, ArrowRight, Server, Cloud, Activity } from 'lucide-react';

const SystemArchitecture3D: React.FC = () => {
  const steps = [
    {
      label: "Discovery",
      title: "SAST & DAST",
      icon: <Github size={20} />,
      color: "blue",
      details: "Source & HANDSHAKES",
      sub: "Legacy scan"
    },
    {
      label: "Catalog",
      title: "CBOM Engine",
      icon: <Database size={20} />,
      color: "indigo",
      details: "CycloneDX Inventory",
      sub: "Risk scoring"
    },
    {
      label: "Remediate",
      title: "HSM Mesh",
      icon: <Lock size={20} />,
      color: "emerald",
      details: "PQC Rotation",
      sub: "Kyber/Dilithium"
    }
  ];

  return (
    <div className="w-full py-24 bg-white overflow-hidden relative border-y border-slate-50 mb-12 flex flex-col items-center">
      {/* Background technical grid */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-technical"></div>

      <div className="relative z-10 text-center mb-16 px-6">
        <h3 className="text-4xl font-serif font-bold text-slate-900 m-0">CryptoBOM DevSecOps Lifecycle</h3>
        <p className="text-xs text-blue-600 font-bold uppercase tracking-[0.3em] mt-3">Discover • Catalog • Orchestrate</p>
      </div>

      <div className="relative w-full max-w-5xl px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Connecting Line - Behind */}
        <div className="hidden md:block absolute top-1/2 left-20 right-20 h-0.5 bg-slate-100 -z-0"></div>

        {steps.map((step, i) => (
          <div key={i} className="relative z-10 w-full md:w-1/3 flex flex-col items-center group">
            {/* The Node Card */}
            <div className={`w-full max-w-[280px] p-8 rounded-[2.5rem] bg-white border-2 border-slate-100 shadow-sm transition-all duration-500
                            hover:border-${step.color}-500 hover:shadow-2xl hover:shadow-${step.color}-500/10 hover:-translate-y-2 cursor-default`}>
              
              <div className="flex justify-between items-start mb-8">
                <div className={`p-4 bg-${step.color}-50 text-${step.color}-600 rounded-2xl group-hover:bg-${step.color}-600 group-hover:text-white transition-all`}>
                  {step.icon}
                </div>
                <span className={`text-[10px] font-bold text-${step.color}-600 uppercase tracking-widest`}>Phase 0{i+1}</span>
              </div>

              <div className="mb-6">
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-1">{step.label}</h4>
                <h5 className="text-xl font-serif font-bold text-slate-900 m-0 group-hover:text-blue-600 transition-colors">{step.title}</h5>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-50">
                <div className="flex items-center gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full bg-${step.color}-500`}></div>
                  <span className="text-[10px] font-bold text-slate-600 uppercase tracking-tight">{step.details}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full bg-slate-200`}></div>
                  <span className="text-[10px] font-medium text-slate-400 uppercase tracking-tight">{step.sub}</span>
                </div>
              </div>
            </div>

            {/* Stage Indicator Arrow */}
            {i < steps.length - 1 && (
              <div className="md:hidden my-6 text-slate-200">
                <ArrowRight className="rotate-90" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Infrastructure Details */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl px-8 w-full">
        <div className="p-10 bg-slate-900 rounded-[3rem] text-white relative overflow-hidden group shadow-xl">
           <div className="absolute top-0 right-0 p-8 opacity-5 text-blue-400 pointer-events-none group-hover:scale-110 transition-transform">
              <Server size={140} />
           </div>
           <h4 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-4 flex items-center gap-2">
             <Terminal size={14}/> Static Discovery
           </h4>
           <p className="text-xs text-slate-400 leading-relaxed m-0">
             Continuous scanning of VCS repositories (Git) and CI/CD artifacts to identify "Cryptographic Debt" before deployment. Hooks into standard pipelines via RivicQ CLI.
           </p>
        </div>

        <div className="p-10 bg-white border border-slate-100 rounded-[3rem] shadow-sm relative overflow-hidden group hover:border-blue-200 transition-all">
           <div className="absolute top-0 right-0 p-8 opacity-5 text-slate-900 pointer-events-none group-hover:scale-110 transition-transform">
              <Activity size={140} />
           </div>
           <h4 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4 flex items-center gap-2">
             <Cloud size={14}/> Dynamic Remediation
           </h4>
           <p className="text-xs text-slate-500 leading-relaxed m-0">
             Sidecar agents monitor TLS/RPC traffic in runtime clusters (K8s). Policy-driven orchestration forces legacy nodes to wrap classical keys in PQC tunnels (ML-KEM).
           </p>
        </div>
      </div>

      <div className="mt-12 font-mono text-[10px] text-slate-400 tracking-[0.3em] uppercase font-bold">
        RivicQ Protocol Pipeline • Secure-by-Design
      </div>
    </div>
  );
};

export default SystemArchitecture3D;
