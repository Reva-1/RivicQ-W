
import React from 'react';
import { Cloud, ShieldCheck, Zap, Server, Lock, Cpu, ArrowRight, CheckCircle2, Activity, Database, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const CloudHSM: React.FC = () => {
  return (
    <article className="prose prose-slate max-w-none">
      <header className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600 text-white text-[9px] font-bold uppercase tracking-[0.2em] mb-6 shadow-sm">
          FIPS 140-3 Level 3 • Post-Quantum Ready
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-slate-900 leading-tight">
          Enterprise <span className="text-blue-600">Cloud HSM.</span>
        </h1>
        <p className="text-xl text-slate-500 font-serif italic max-w-3xl leading-relaxed">
          High-performance, virtualized hardware security modules providing dedicated cryptographic isolation with the elasticity of the cloud.
        </p>
      </header>

      {/* Hero Visual Block */}
      <section className="not-prose mb-24 relative">
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-16 text-white overflow-hidden relative shadow-2xl">
          <div className="absolute inset-0 bg-technical opacity-10"></div>
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6 m-0">Hardware Security, <br/>Cloud Agility.</h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                RivicQ Cloud HSM bridges the gap between rigid on-premise hardware and vulnerable software key stores. Every instance is anchored in physical magnesium-alloy chassis located in our secure Berlin data hubs.
              </p>
              <div className="flex gap-4">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-blue-400">&lt; 2ms</span>
                  <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Latency</span>
                </div>
                <div className="w-px h-10 bg-slate-800"></div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-emerald-400">10k+</span>
                  <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Ops/Sec</span>
                </div>
                <div className="w-px h-10 bg-slate-800"></div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-indigo-400">L3</span>
                  <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">FIPS Boundary</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full aspect-square bg-blue-600/10 rounded-full blur-3xl absolute -inset-4"></div>
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] shadow-2xl">
                <div className="flex items-center gap-4 mb-8">
                  <Cloud size={32} className="text-blue-400" />
                  <div className="h-px flex-grow bg-slate-700"></div>
                  <Lock size={32} className="text-emerald-400" />
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-slate-500">KEM_ALGO:</span>
                    <span className="text-blue-400">ML-KEM-768</span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-slate-500">SIGN_ALGO:</span>
                    <span className="text-blue-400">ML-DSA-65</span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-slate-500">ISOLATION:</span>
                    <span className="text-emerald-400">TENANT_VPC_EXCLUSIVE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="mb-24">
        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-10">Technical Architecture</h2>
        <div className="not-prose grid md:grid-cols-2 gap-8">
          <div className="p-8 border border-slate-100 bg-white rounded-[2.5rem] shadow-sm">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl w-fit mb-6">
              <Layers size={24} />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-4 m-0">Multi-Tenant Isolation</h4>
            <p className="text-sm text-slate-500 leading-relaxed m-0">
              Unlike shared cloud KMS, RivicQ provides dedicated cryptographic instances. Your keys are processed on specific hardware accelerators that are physically isolated and cryptographically bound to your VPC.
            </p>
          </div>
          <div className="p-8 border border-slate-100 bg-white rounded-[2.5rem] shadow-sm">
            <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl w-fit mb-6">
              <Activity size={24} />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-4 m-0">Automatic PQC Wrapping</h4>
            <p className="text-sm text-slate-500 leading-relaxed m-0">
              Our Cloud HSM mesh automatically wraps classical keys in PQC-tunnels (ML-KEM). This ensures that intercepted cloud traffic remains safe even from future quantum analysis.
            </p>
          </div>
        </div>
      </section>

      {/* Key Use Cases */}
      <section className="mb-24 py-16 bg-slate-50 rounded-[3rem] border border-slate-100 px-8 md:px-12">
        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-10 text-center">Cloud Use Cases</h2>
        <div className="not-prose grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="mx-auto w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center mb-6">
              <Server size={20} className="text-blue-600" />
            </div>
            <h5 className="font-bold text-slate-900 mb-2">TLS Offloading</h5>
            <p className="text-xs text-slate-500 leading-relaxed">Establish quantum-safe SSL/TLS sessions at the network edge with minimal latency.</p>
          </div>
          <div className="text-center">
            <div className="mx-auto w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center mb-6">
              <Database size={20} className="text-blue-600" />
            </div>
            <h5 className="font-bold text-slate-900 mb-2">Database Encryption</h5>
            <p className="text-xs text-slate-500 leading-relaxed">Secure data-at-rest across multi-cloud environments with hardware-backed key management.</p>
          </div>
          <div className="text-center">
            <div className="mx-auto w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center mb-6">
              <ShieldCheck size={20} className="text-blue-600" />
            </div>
            <h5 className="font-bold text-slate-900 mb-2">Code Signing</h5>
            <p className="text-xs text-slate-500 leading-relaxed">Sign container images and firmware using PQC signatures (ML-DSA) within the CI/CD pipeline.</p>
          </div>
        </div>
      </section>

      {/* Compliance Block */}
      <section className="mb-24">
        <div className="p-10 border border-slate-900 bg-white rounded-[2.5rem] relative overflow-hidden">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="shrink-0">
              <ShieldCheck size={64} className="text-emerald-600" />
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4 m-0">FIPS 140-3 Level 3 Validated</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Our Cloud HSMs meet the most stringent physical and logical security requirements. They are certified for use in highly regulated sectors including Finance (DORA), Defense, and Healthcare.
              </p>
              <div className="flex flex-wrap gap-4">
                {["DORA", "SOC2", "HIPAA", "eIDAS 2.0"].map((cert, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold rounded-full uppercase tracking-widest">{cert}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="not-prose bg-blue-600 text-white p-12 md:p-16 rounded-[3rem] text-center shadow-2xl">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-white m-0">Ready for Cloud Resilience?</h2>
        <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto italic leading-relaxed">
          Request a technical consultation or access our Cloud HSM playground.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="mailto:rivic.revan.ande@gmail.com?subject=Cloud HSM Inquiry" className="px-10 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all flex items-center gap-2 justify-center shadow-xl">
            Request Demo <ArrowRight size={18}/>
          </a>
          <Link to="/pricing" className="px-10 py-4 border border-blue-400 text-white font-bold rounded-xl hover:bg-white/10 transition-all flex items-center gap-2 justify-center">
            View Pricing <Activity size={18}/>
          </Link>
        </div>
      </section>
      
      <footer className="mt-12 text-center text-[10px] text-slate-400 uppercase tracking-widest font-bold">
        RivicQ Technologies • Cloud HSM Division
      </footer>
    </article>
  );
};

export default CloudHSM;
