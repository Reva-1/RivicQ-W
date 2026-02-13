
import React, { useState, useEffect } from 'react';
import { Database, ArrowRight, Github, Terminal, Atom, Layers, Repeat, Search, Cloud, Shield } from 'lucide-react';
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
        <p className="text-slate-500 font-serif italic text-xl">The technical foundation of a quantum-safe infrastructure stack across physical and cloud domains.</p>
        <p className="text-slate-400 text-[10px] font-mono uppercase tracking-[0.3em] font-bold mt-6">Protocol Specification v1.4 • NIST Compliant • Cloud-Enabled</p>
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
            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">Industrial & Cloud Readiness Stack</p>
          </div>
        </div>

        <div className="not-prose grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:border-blue-500 hover:scale-[1.01] transition-all duration-500 group">
            <div className="mb-6 flex items-center justify-between">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Search size={24} />
              </div>
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Discovery</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-900 mb-4">Audit (SAST/DAST)</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              AI-driven scanning to identify cryptographic drift and legacy primitives across cloud microservices and Git repositories.
            </p>
          </div>

          <div className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:border-emerald-500 hover:scale-[1.01] transition-all duration-500 group">
            <div className="mb-6 flex items-center justify-between">
              <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl group-hover:bg-emerald-600 group-hover:text-white transition-all">
                <Database size={24} />
              </div>
              <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">Inventory</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-900 mb-4">CryptoBOM SaaS</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Centralized visibility into your Cryptographic Bill of Materials, tracking key age, rotation, and risk scores in multi-cloud environments.
            </p>
          </div>
        </div>

        <div className="not-prose grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-8 bg-slate-900 text-white border border-slate-800 rounded-[2.5rem] shadow-xl hover:border-blue-400 hover:scale-[1.01] transition-all duration-500 group">
            <div className="mb-6 flex items-center justify-between">
              <div className="p-3 bg-blue-600 text-white rounded-xl">
                <Cloud size={24} />
              </div>
              <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Infrastructure</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-white mb-4">Cloud HSM (vHSM)</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Virtualized FIPS 140-3 Hardware Security Modules providing dedicated PQC-ready root of trust with cloud-native elasticity.
            </p>
            <Link to="/cloud-hsm" className="text-xs font-bold text-blue-400 flex items-center gap-2 hover:text-white transition-colors uppercase tracking-widest">
              View Specifications <ArrowRight size={14} />
            </Link>
          </div>

          <div className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:border-indigo-500 hover:scale-[1.01] transition-all duration-500 group">
            <div className="mb-6 flex items-center justify-between">
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <Repeat size={24} />
              </div>
              <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest">Remediation</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-900 mb-4">RQSP Mesh</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Hardware-native orchestration for automatic algorithm rotation and hybrid KEM encapsulation, bridging on-prem and Cloud HSMs.
            </p>
          </div>
        </div>
      </section>

      <section className="my-24 not-prose">
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 bg-slate-900 text-white rounded-2xl">
            <Atom size={24} className="animate-spin-slow" />
          </div>
          <div>
            <h2 className="text-3xl font-serif font-bold text-slate-900 m-0">Vulnerability Simulator</h2>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">Simulating TTV (Time-To-Vulnerability)</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-slate-950 rounded-[2.5rem] p-8 font-mono text-[11px] text-indigo-200 shadow-2xl relative overflow-hidden">
            <pre className="overflow-x-auto leading-relaxed text-indigo-300 relative z-10">
{`from qiskit import QuantumCircuit
from rivicq_core import QuantumRiskAnalyzer

analyzer = QuantumRiskAnalyzer(target="cloud_hsm_cluster")
analyzer.update_complexity(${complexity})
results = analyzer.simulate(backend="qasm", shots=1024)`}
            </pre>
            <div className="mt-10 space-y-3 relative z-10">
              <div className="flex justify-between items-center">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Circuit Depth</label>
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
               <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mt-2">Quantum Risk Index</div>
            </div>
            <p className="mt-8 text-[11px] text-slate-600 leading-relaxed">
              <strong>Assessment:</strong> {riskScore > 75 ? 'Critical exposure detected in cloud endpoints. Immediate Cloud HSM migration required.' : 'Stable cryptographic footprint. Monitoring scheduled.'}
            </p>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Platform;
