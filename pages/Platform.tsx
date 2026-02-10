import React, { useState, useEffect } from 'react';
import { Cpu, Activity, ShieldCheck, ScrollText, CheckCircle, ExternalLink, FileText, Zap, ShieldAlert, Workflow, Database, Lock, ArrowRight, Settings2, Github, LayoutGrid, Terminal, Info, Atom, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Platform: React.FC = () => {
  const [complexity, setComplexity] = useState(65);
  const [shots, setShots] = useState(1024);
  const [riskScore, setRiskScore] = useState(0);

  useEffect(() => {
    const baseRisk = complexity * 0.8;
    const shotFactor = Math.log10(shots) * 5;
    const finalScore = Math.min(100, Math.round(baseRisk + shotFactor));
    setRiskScore(finalScore);
  }, [complexity, shots]);

  const workflowSteps = [
    {
      icon: <Github size={20} />,
      title: "Code Commit",
      desc: "Source Analysis",
      detail: "RivicQ hooks into Git pushes to scan source code for legacy RSA/ECC primitives before they hit the build.",
      role: "Repository Watcher",
      tooltip: "Monitors VCS for cryptographic drift"
    },
    {
      icon: <Terminal size={20} />,
      title: "CI/CD Scan",
      desc: "Static Testing",
      detail: "Our runner analyzes binary dependencies and linked libraries for quantum-vulnerability within the pipeline.",
      role: "Pipeline Runner",
      tooltip: "Automated vulnerability scanning in CI"
    },
    {
      icon: <FileText size={20} />,
      title: "CBOM Generation",
      desc: "Asset Inventory",
      detail: "A dynamic Cryptographic Bill of Materials is produced, cataloging all algorithms, keys, and expiry dates.",
      role: "Inventory Engine",
      tooltip: "Generates verifiable crypto-inventory"
    },
    {
      icon: <ShieldAlert size={20} />,
      title: "Policy Check",
      desc: "Compliance Gate",
      detail: "The Policy Engine evaluates the CBOM against mandates like DORA or CNSA 2.0 to ensure strict compliance.",
      role: "Gatekeeper",
      tooltip: "Enforces NIST & EU DORA standards"
    },
    {
      icon: <ShieldCheck size={20} />,
      title: "Enforcement",
      desc: "Secure Release",
      detail: "Non-compliant builds are automatically blocked, and remediation PRs are issued to upgrade to PQC.",
      role: "Infrastructure Guard",
      tooltip: "Blocks insecure deployments"
    }
  ];

  return (
    <article className="prose prose-slate max-w-none">
      <header className="mb-16">
        <h1 className="text-5xl font-bold mb-4 tracking-tight text-slate-900">Architecture & Logic</h1>
        <p className="text-slate-400 text-[10px] font-mono uppercase tracking-[0.3em] font-bold">Protocol Specification v1.4</p>
      </header>

      <section className="mb-20">
        <p className="text-lg text-slate-600 leading-relaxed">
          The RivicQ architecture is a multi-layered security mesh that encapsulates legacy environments in a quantum-resistant shell, anchoring all cryptographic operations in validated hardware.
        </p>
        <div className="not-prose bg-white/50 backdrop-blur-sm border border-slate-100 p-8 rounded-[2rem] flex flex-col md:flex-row items-center gap-8 my-12 transition-all hover:bg-white hover:shadow-xl shadow-sm">
            <div className="p-4 bg-slate-900 text-white rounded-2xl shadow-sm">
                <Lock size={32}/>
            </div>
            <div className="flex-grow">
                <h3 className="text-xl font-serif font-bold text-slate-900 m-0 mb-2 tracking-tight">Powered by RQSP</h3>
                <p className="text-sm text-slate-500 m-0 leading-relaxed italic">
                    Infrastructure orchestrated by the Quantum Safe Security Protocol (RQSP).
                </p>
            </div>
            <Link to="/rqsp" className="px-6 py-3 bg-blue-600 text-white rounded-full text-xs font-bold hover:bg-blue-700 transition-all flex items-center gap-2 shrink-0 shadow-lg shadow-blue-500/20">
                Explore Protocol <ArrowRight size={14}/>
            </Link>
        </div>
      </section>

      {/* Enhanced Workflow Section */}
      <section className="my-24 not-prose">
        <div className="flex items-center gap-4 mb-16">
          <div className="p-4 bg-slate-900 text-white rounded-2xl">
            <Workflow size={24} />
          </div>
          <div>
            <h2 className="text-3xl font-serif font-bold text-slate-900 m-0">End-to-End Audit Workflow</h2>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">DevSecOps Pipeline Lifecycle</p>
          </div>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[2.75rem] left-12 right-12 h-0.5 bg-slate-100 -z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {workflowSteps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 rounded-3xl border border-slate-100 bg-white/80 backdrop-blur-sm hover:bg-white hover:border-blue-200 hover:shadow-xl transition-all group relative z-10">
                <div className="relative mb-6">
                  {/* Icon Container */}
                  <div className="w-14 h-14 bg-white border border-slate-100 rounded-2xl flex items-center justify-center text-slate-400 group-hover:border-blue-500 group-hover:text-blue-600 transition-all shadow-sm">
                    {step.icon}
                  </div>
                  
                  {/* Tooltip / Role Tag */}
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[9px] font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap shadow-xl">
                    <div className="flex items-center gap-2">
                      <span className="text-blue-400 uppercase tracking-widest">{step.role}</span>
                    </div>
                    {/* Tooltip arrow */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-slate-900"></div>
                  </div>

                  {/* Step Number Badge */}
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-slate-100 rounded-full border border-white text-slate-400 text-[10px] font-bold flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    0{i+1}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex flex-col">
                    <h4 className="text-[10px] font-bold text-blue-600 mb-1 uppercase tracking-[0.2em]">{step.desc}</h4>
                    <h5 className="text-sm font-bold text-slate-900 m-0">{step.title}</h5>
                  </div>
                  
                  <p className="text-[10px] text-slate-500 leading-relaxed m-0 font-medium">
                    {step.detail}
                  </p>

                  {/* Context Label (Short Description) */}
                  <div className="pt-3 mt-3 border-t border-slate-50 flex items-center justify-center gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity">
                    <Info size={10} className="text-slate-400" />
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-tighter">{step.tooltip}</span>
                  </div>
                </div>
                
                {i < workflowSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-6 top-[2.75rem] -translate-y-1/2 text-slate-200 z-0">
                    <ArrowRight size={16}/>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simulator Section - Explicitly Qiskit Driven */}
      <section className="my-24 not-prose">
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 bg-slate-900 text-white rounded-2xl">
            <Atom size={24} className="animate-spin-slow" />
          </div>
          <div>
            <h2 className="text-3xl font-serif font-bold text-slate-900 m-0">Qiskit Simulation Engine</h2>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">Quantum-Vulnerability Benchmarking</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-slate-950 rounded-[2.5rem] p-8 font-mono text-[11px] text-indigo-200 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
              <Terminal size={120} />
            </div>
            <div className="flex justify-between items-center mb-6 text-slate-500 border-b border-white/10 pb-4 relative z-10">
              <span className="flex items-center gap-2 text-emerald-400"><Cpu size={12}/> qiskit_runtime_v3.py</span>
              <span className="text-[9px] opacity-50 uppercase tracking-widest">Active Backend: QASM Simulator</span>
            </div>
            <pre className="overflow-x-auto leading-relaxed text-indigo-300 relative z-10">
{`from qiskit import QuantumCircuit, transpile
from qiskit.providers.basicaer import QasmSimulatorPy
from rivicq_core import QuantumRiskAnalyzer

# Define legacy target (RSA-2048)
qc = QuantumCircuit(qubits=512, bits=512)
analyzer = QuantumRiskAnalyzer(target="legacy_pki")

# Configure Simulation parameters
analyzer.update_complexity(${complexity})
results = analyzer.simulate(backend="qasm", shots=${shots})

# Telemetry: Feed scores back to Policy Engine
risk_data = results.calculate_risk_index()
rivicq_client.policy.update_risk_telemetry(risk_data)`}
            </pre>
            <div className="mt-10 space-y-8 relative z-10">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Circuit Depth (Complexity)</label>
                  <span className="text-blue-400 font-bold">{complexity}</span>
                </div>
                <input 
                  type="range" min="10" max="100" value={complexity} 
                  onChange={(e) => setComplexity(parseInt(e.target.value))}
                  className="w-full h-1 bg-slate-800 rounded-full appearance-none cursor-pointer accent-blue-500"
                />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Statistical Confidence (Shots)</label>
                  <span className="text-blue-400 font-bold">{shots}</span>
                </div>
                <select 
                  value={shots} 
                  onChange={(e) => setShots(parseInt(e.target.value))}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg py-2 px-3 text-blue-300 outline-none focus:border-blue-500 transition-colors"
                >
                  <option value="512">512 Shots</option>
                  <option value="1024">1024 Shots</option>
                  <option value="4096">4096 Shots</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-100 rounded-[2.5rem] p-10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-center mb-10">
                 <div className={`text-7xl font-bold font-mono transition-colors duration-700 ${riskScore > 75 ? 'text-red-500' : 'text-slate-900'}`}>
                    {riskScore}<span className="text-2xl text-slate-200">/100</span>
                 </div>
                 <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mt-2">Aggregated Risk Telemetry</div>
              </div>
              
              {/* Feedback Loop Visualization */}
              <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-100/50 mb-8 flex items-center gap-4">
                <div className="p-3 bg-blue-600 text-white rounded-xl shadow-lg">
                  <Share2 size={20} className="animate-pulse" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-blue-900 m-0">Policy Feedback Loop</h4>
                  <p className="text-[10px] text-blue-700 leading-relaxed m-0 mt-1 font-medium">
                    This risk score is automatically fed back to the **RQSP Policy Orchestrator**, triggering mandatory key rotation if the score exceeds the enterprise threshold (75).
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <div className="flex justify-between text-xs font-bold mb-2">
                    <span className="text-slate-500 uppercase tracking-wider">Exposure Density</span>
                    <span className="text-slate-900">{Math.round(riskScore * 0.9)}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-50 rounded-full overflow-hidden">
                    <div className={`h-full transition-all duration-700 ${riskScore > 75 ? 'bg-red-500' : 'bg-slate-900'}`} style={{ width: `${riskScore * 0.9}%` }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-bold mb-2">
                    <span className="text-slate-500 uppercase tracking-wider">Estimated TTV</span>
                    <span className="text-slate-900">{(20 - (riskScore / 5)).toFixed(1)} Years</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-50 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 transition-all duration-700" style={{ width: `${100 - riskScore}%` }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 p-5 bg-slate-50 rounded-2xl border border-slate-100 text-[11px] text-slate-600 leading-relaxed italic">
              <strong>Policy Verdict:</strong> {riskScore > 75 ? 'High exposure identified. Immediate RQSP migration mandatory for legacy nodes.' : 'Infrastructure stable. Proceed with scheduled CryptoBOM rotation.'}
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-serif font-bold mb-10 tracking-tight text-slate-900">Certification & Trust</h2>
        <div className="not-prose grid md:grid-cols-2 gap-6">
          {[
            { icon: <ShieldCheck className="text-blue-600" size={20}/>, title: "TRL 4 Readiness", desc: "Technology validated in lab (Quantum Sandbox)." },
            { icon: <ShieldCheck className="text-indigo-600" size={20}/>, title: "FIPS 140-3 L3", desc: "Hardware boundary validation." },
            { icon: <ScrollText className="text-slate-900" size={20}/>, title: "ISO 27001", desc: "Security management standards." },
            { icon: <CheckCircle className="text-emerald-600" size={20}/>, title: "eIDAS 2.0", desc: "EU identity compliance ready." }
          ].map((cert, i) => (
            <div key={i} className="p-6 border border-slate-100 rounded-2xl bg-white/50 backdrop-blur-sm hover:bg-white hover:border-slate-300 hover:shadow-lg transition-all shadow-sm">
              <div className="mb-4">{cert.icon}</div>
              <h4 className="text-lg font-serif font-bold mb-2 m-0 text-slate-900">{cert.title}</h4>
              <p className="text-sm text-slate-500 m-0 leading-relaxed">{cert.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </article>
  );
};

export default Platform;