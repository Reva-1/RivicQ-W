
import React, { useState, useEffect } from 'react';
import { Database, ArrowRight, Github, Terminal, Atom, Layers, Repeat, Search, Cloud, Shield, Cpu, Network } from 'lucide-react';
import { Link } from 'react-router-dom';
import SystemArchitecture3D from '../components/SystemArchitecture3D';

const Platform: React.FC = () => {
  const [complexity, setComplexity] = useState(65);
  const [shots] = useState(1024);
  const [riskScore, setRiskScore] = useState(0);

  useEffect(() => {
    const baseRisk = complexity * 0.8;
    const finalScore = Math.min(100, Math.round(baseRisk + 12));
    setRiskScore(finalScore);
  }, [complexity]);

  return (
    <article className="prose prose-slate max-w-none">
      <header className="mb-16">
        <h1 className="text-5xl font-bold mb-4 tracking-tight text-slate-900">Products & Architecture</h1>
        <p className="text-slate-500 font-serif italic text-xl">The foundation of your new, quantum-safe security system.</p>
        <p className="text-slate-400 text-[10px] font-mono uppercase tracking-[0.3em] font-bold mt-6">Protocol v1.4 • NIST Compliant • Cloud Ready</p>
      </header>

      <section className="not-prose -mx-8 md:-mx-16 mb-24">
         <SystemArchitecture3D />
      </section>

      <section className="mb-24">
        <div className="flex items-center gap-4 mb-10">
          <div className="p-3 bg-blue-600 text-white rounded-2xl shadow-lg">
            <Layers size={24} />
          </div>
          <div>
            <h2 className="text-3xl font-serif font-bold text-slate-900 m-0">Our Core Products</h2>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">Tools to find, fix, and secure.</p>
          </div>
        </div>

        <div className="not-prose grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:border-blue-500 hover:scale-[1.01] transition-all duration-500 group">
            <div className="mb-6 flex items-center justify-between">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Search size={24} />
              </div>
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Find</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-900 mb-4">Security Audit (Scanner)</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              We use smart AI to scan your systems and find where you are using old, weak security methods that need updating.
            </p>
          </div>

          <div className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:border-emerald-500 hover:scale-[1.01] transition-all duration-500 group">
            <div className="mb-6 flex items-center justify-between">
              <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl group-hover:bg-emerald-600 group-hover:text-white transition-all">
                <Database size={24} />
              </div>
              <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">Inventory</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-900 mb-4">CryptoBOM Dashboard</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              A dashboard that lists every "digital lock" (key) in your company. It tells you which ones are safe (managed) and which ones are risky (hidden).
            </p>
          </div>
        </div>

        <div className="not-prose grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-8 bg-slate-900 text-white border border-slate-800 rounded-[2.5rem] shadow-xl hover:border-blue-400 hover:scale-[1.01] transition-all duration-500 group">
            <div className="mb-6 flex items-center justify-between">
              <div className="p-3 bg-blue-600 text-white rounded-xl">
                <Cloud size={24} />
              </div>
              <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Secure Hardware</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-white mb-4">Cloud HSM</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Our secure cloud hardware acts as a "digital vault" for your keys, protected by physical barriers and quantum-safe tech.
            </p>
            <Link to="/cloud-hsm" className="text-xs font-bold text-blue-400 flex items-center gap-2 hover:text-white transition-colors uppercase tracking-widest">
              See Hardware Details <ArrowRight size={14} />
            </Link>
          </div>

          <div className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:border-indigo-500 hover:scale-[1.01] transition-all duration-500 group">
            <div className="mb-6 flex items-center justify-between">
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <Repeat size={24} />
              </div>
              <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest">Upgrade</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-900 mb-4">RQSP Automation</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Our automated system helps you switch from old keys to new keys instantly, without stopping your business.
            </p>
          </div>
        </div>
      </section>

      {/* Strategic Integrations */}
      <section className="not-prose mb-24 border-t border-slate-100 pt-16">
         <h2 className="text-2xl font-serif font-bold text-slate-900 mb-8 text-center">We work with</h2>
         <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-3 px-6 py-3 bg-slate-50 border border-slate-200 rounded-xl">
               <Cpu size={20} className="text-blue-600"/>
               <span className="text-xs font-bold text-slate-700 uppercase tracking-widest">IBM Quantum</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-slate-50 border border-slate-200 rounded-xl">
               <Cloud size={20} className="text-blue-600"/>
               <span className="text-xs font-bold text-slate-700 uppercase tracking-widest">Google Cloud HSM</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-slate-50 border border-slate-200 rounded-xl">
               <Network size={20} className="text-blue-600"/>
               <span className="text-xs font-bold text-slate-700 uppercase tracking-widest">AWS Nitro</span>
            </div>
         </div>
      </section>

      <section className="my-24 not-prose">
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 bg-slate-900 text-white rounded-2xl">
            <Atom size={24} className="animate-spin-slow" />
          </div>
          <div>
            <h2 className="text-3xl font-serif font-bold text-slate-900 m-0">Risk Simulator</h2>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">Check your Quantum Risk Score</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-slate-950 rounded-[2.5rem] p-8 font-mono text-[11px] text-indigo-200 shadow-2xl relative overflow-hidden">
            <pre className="overflow-x-auto leading-relaxed text-indigo-300 relative z-10">
{`from qiskit import QuantumCircuit
from rivicq_core import QuantumRiskAnalyzer

// Simulate attack complexity
analyzer = QuantumRiskAnalyzer(target="cloud_hsm_cluster")
analyzer.update_complexity(${complexity})
results = analyzer.simulate(backend="ibmq_qasm_simulator")`}
            </pre>
            <div className="mt-10 space-y-3 relative z-10">
              <div className="flex justify-between items-center">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Attack Power</label>
                <span className="text-blue-400 font-bold">{complexity}</span>
              </div>
              <input 
                type="range" min="10" max="100" value={complexity} 
                onChange={(e) => setComplexity(parseInt(e.target.value))}
                className="w-full h-1 bg-slate-800 rounded-full appearance-none cursor-pointer accent-blue-500"
              />
            </div>
          </div>

          <div className="bg-white border border-slate-100 rounded-[2.5rem] p-10 shadow-sm flex flex-col justify-between">
            <div className="text-center">
               <div className={`text-7xl font-bold font-mono ${riskScore > 75 ? 'text-red-500' : 'text-slate-900'}`}>
                  {riskScore}<span className="text-2xl text-slate-200">/100</span>
               </div>
               <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mt-2">Risk Index</div>
            </div>
            <p className="mt-8 text-[11px] text-slate-600 leading-relaxed">
              <strong>What this means:</strong> {riskScore > 75 ? 'Critical risk detected. Your encryption is weak against future attacks. You need to upgrade immediately.' : 'Your systems are relatively stable, but constant monitoring is recommended.'}
            </p>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Platform;
