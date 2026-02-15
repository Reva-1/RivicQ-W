
import React from 'react';
import { Cloud, ShieldCheck, Zap, Server, Lock, Cpu, ArrowRight, CheckCircle2, Activity, Database, Layers, ExternalLink, ScanSearch, BrainCircuit, Network, Workflow, RefreshCw, Key } from 'lucide-react';
import { Link } from 'react-router-dom';

const CloudHSM: React.FC = () => {
  return (
    <article className="prose prose-slate max-w-none">
      <header className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600 text-white text-[9px] font-bold uppercase tracking-[0.2em] mb-6 shadow-sm">
          FIPS 140-3 Level 3 • Post-Quantum Ready
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-slate-900 leading-tight">
          Cloud <span className="text-blue-600">Hardware Security.</span>
        </h1>
        <p className="text-xl text-slate-500 font-serif italic max-w-3xl leading-relaxed">
          Physical security devices available in the cloud to protect your most sensitive keys.
        </p>
      </header>

      {/* Hero Visual Block */}
      <section className="not-prose mb-24 relative">
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-16 text-white overflow-hidden relative shadow-2xl">
          <div className="absolute inset-0 bg-technical opacity-10"></div>
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6 m-0">Physical Security in the Cloud.</h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Normally, hardware security is hard to manage. RivicQ Cloud HSM gives you the protection of a physical bank vault for your data, but with the ease of cloud software. Each unit is anchored in our secure data centers in Berlin.
              </p>
              <div className="flex gap-4">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-blue-400">&lt; 2ms</span>
                  <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Fast</span>
                </div>
                <div className="w-px h-10 bg-slate-800"></div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-emerald-400">10k+</span>
                  <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Operations/Sec</span>
                </div>
                <div className="w-px h-10 bg-slate-800"></div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-indigo-400">L3</span>
                  <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Security Level</span>
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
                    <span className="text-slate-500">Algorithm:</span>
                    <span className="text-blue-400">NIST ML-KEM</span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-slate-500">Signature:</span>
                    <span className="text-blue-400">NIST ML-DSA</span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-slate-500">Isolation:</span>
                    <span className="text-emerald-400">Exclusive</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration with CryptoBOM (NEW SECTION) */}
      <section className="mb-24">
        <div className="flex items-center gap-4 mb-10">
          <div className="p-3 bg-emerald-600 text-white rounded-2xl shadow-lg">
            <Workflow size={24} />
          </div>
          <div>
            <h2 className="text-3xl font-serif font-bold text-slate-900 m-0">The Remediation Engine</h2>
            <p className="text-xs text-emerald-600 font-bold uppercase tracking-widest mt-1">How Cloud HSM fixes CryptoBOM findings</p>
          </div>
        </div>

        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
          CryptoBOM finds the problems; Cloud HSM provides the solution. When our SaaS scanner detects a weak key in your software, the Cloud HSM offers an immediate, secure destination to migrate that risk away from your code.
        </p>

        <div className="not-prose grid md:grid-cols-3 gap-6">
           {/* Step 1 */}
           <div className="p-8 border border-slate-100 rounded-[2rem] bg-slate-50 relative">
              <div className="absolute top-8 right-8 text-slate-200 font-black text-6xl opacity-20">1</div>
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-red-500 mb-6 border border-slate-100">
                <ScanSearch size={24}/>
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-3">Identify</h4>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                <strong>CryptoBOM SaaS</strong> scans your codebase and detects a hardcoded RSA-2048 private key.
              </p>
              <div className="text-[10px] font-mono text-red-500 bg-red-50 p-2 rounded border border-red-100">
                Warning: Weak Key Exposed
              </div>
           </div>

           {/* Step 2 */}
           <div className="p-8 border border-blue-100 rounded-[2rem] bg-blue-50/30 relative">
              <div className="absolute top-8 right-8 text-blue-200 font-black text-6xl opacity-20">2</div>
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 mb-6 border border-blue-100">
                <RefreshCw size={24}/>
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-3">Migrate</h4>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                You use the <strong>RivicQ SDK</strong> to import that key material securely into the Cloud HSM.
              </p>
              <div className="text-[10px] font-mono text-blue-600 bg-blue-50 p-2 rounded border border-blue-100">
                Action: Key Import > Wrap
              </div>
           </div>

           {/* Step 3 */}
           <div className="p-8 border border-slate-100 rounded-[2rem] bg-slate-50 relative">
              <div className="absolute top-8 right-8 text-slate-200 font-black text-6xl opacity-20">3</div>
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-emerald-600 mb-6 border border-slate-100">
                <ShieldCheck size={24}/>
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-3">Secure</h4>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                The key is deleted from code. The app now calls the HSM to sign data. The key never leaves the vault.
              </p>
              <div className="text-[10px] font-mono text-emerald-600 bg-emerald-50 p-2 rounded border border-emerald-100">
                Status: FIPS 140-3 Protected
              </div>
           </div>
        </div>
      </section>

      {/* Discovery & Intelligence Section */}
      <section className="mb-24">
        <div className="grid md:grid-cols-2 gap-12 not-prose items-center">
          <div>
             <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Smart Intelligence</h2>
             <p className="text-lg text-slate-600 leading-relaxed mb-8">
               Our Cloud HSM doesn't just store keys; it acts as a watchdog. It uses smart AI models inside our secure hardware to spot patterns of old, weak security in your cloud traffic.
             </p>
             
             <div className="space-y-6">
                <div className="flex gap-4">
                   <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg h-fit border border-indigo-100">
                      <BrainCircuit size={20} />
                   </div>
                   <div>
                      <h4 className="font-bold text-slate-900 text-sm m-0">Quantum Execution Environment</h4>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                        Execute Post-Quantum algorithms (ML-KEM) directly inside the hardware boundary, ensuring the math itself is protected from side-channel attacks.
                      </p>
                   </div>
                </div>

                <div className="flex gap-4">
                   <div className="p-2 bg-blue-50 text-blue-600 rounded-lg h-fit border border-blue-100">
                      <Key size={20} />
                   </div>
                   <div>
                      <h4 className="font-bold text-slate-900 text-sm m-0">Lifecycle Management</h4>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                        Automatically rotate keys based on the policies defined in your CryptoBOM dashboard.
                      </p>
                   </div>
                </div>
             </div>
          </div>

          <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-20 text-indigo-500 animate-pulse">
                <BrainCircuit size={120} />
             </div>
             <div className="relative z-10 font-mono text-[10px] space-y-3">
                <div className="text-slate-500 border-b border-slate-800 pb-2 mb-4">
                   // HSM_LOG_STREAM
                </div>
                <div className="flex justify-between">
                   <span className="text-indigo-400">OPERATION:</span>
                   <span className="text-white">Sign_Transaction</span>
                </div>
                <div className="flex justify-between">
                   <span className="text-indigo-400">ALGORITHM:</span>
                   <span className="text-emerald-400">ML-DSA-44 (FIPS 204)</span>
                </div>
                <div className="flex justify-between">
                   <span className="text-indigo-400">PROTECTION:</span>
                   <span className="text-emerald-400">Hardware_Backed</span>
                </div>
                <div className="mt-4 p-3 bg-emerald-900/20 border border-emerald-500/30 rounded-lg text-emerald-200">
                   {`> Success: Signature Generated.`}
                   <br/>
                   {`> Audit: Logged to Immutable Ledger.`}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="mb-24">
        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-10">Why it's better</h2>
        <div className="not-prose grid md:grid-cols-2 gap-8">
          <div className="p-8 border border-slate-100 bg-white rounded-[2.5rem] shadow-sm">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl w-fit mb-6">
              <Layers size={24} />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-4 m-0">Your Own Private Space</h4>
            <p className="text-sm text-slate-500 leading-relaxed m-0">
              Unlike other cloud services where you share space, we give you a dedicated, isolated environment. Your keys are never mixed with anyone else's.
            </p>
          </div>
          <div className="p-8 border border-slate-100 bg-white rounded-[2.5rem] shadow-sm">
            <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl w-fit mb-6">
              <Activity size={24} />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-4 m-0">Automatic Upgrades</h4>
            <p className="text-sm text-slate-500 leading-relaxed m-0">
              Our system automatically wraps your old keys in new, quantum-safe protection. This keeps your data safe even if someone tries to steal it today to crack it later.
            </p>
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
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4 m-0">Certified Security</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Our Cloud HSMs meet the highest security standards (FIPS 140-3 Level 3). This means they are approved for use in Banking, Defense, and Healthcare.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                {["Banking (DORA)", "Healthcare (HIPAA)", "Gov ID (eIDAS)"].map((cert, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold rounded-full uppercase tracking-widest">{cert}</span>
                ))}
              </div>
              <div className="flex items-center gap-1">
                 <a href="https://csrc.nist.gov/pubs/fips/140-3/final" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-blue-600 hover:text-slate-900 flex items-center gap-1 uppercase tracking-widest transition-colors">
                   View Standard <ExternalLink size={12}/>
                 </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="not-prose bg-blue-600 text-white p-12 md:p-16 rounded-[3rem] text-center shadow-2xl">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-white m-0">Secure your Cloud.</h2>
        <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto italic leading-relaxed">
          Ask us for a demo or check our pricing.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="mailto:rivic.revan.ande@gmail.com?subject=Cloud HSM Inquiry" className="px-10 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all flex items-center gap-2 justify-center shadow-xl">
            Request Demo <ArrowRight size={18}/>
          </a>
          <Link to="/pricing" className="px-10 py-4 border border-blue-400 text-white font-bold rounded-xl hover:bg-white/10 transition-all flex items-center gap-2 justify-center">
            See Pricing <Activity size={18}/>
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
