
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight, Lock, Zap, Activity, ChevronDown, Cpu, Target, Scale, Cloud } from 'lucide-react';
import HSMBlueprint from '../components/HSMBlueprint';

const Home: React.FC = () => {
  return (
    <article className="prose prose-slate max-w-none">
      
      {/* Hero Section */}
      <section className="pt-12 md:pt-16 mb-12 relative">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/50 backdrop-blur-sm border border-blue-100/50 text-blue-600 text-[10px] font-bold uppercase tracking-widest mb-8">
            <Activity size={10} className="text-blue-500 animate-pulse"/>
            Protocol Status: Nominal • NIST FIPS 203/204 Ready
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1] tracking-tight text-slate-900">
            The Engine for <br/> <span className="text-blue-600">Quantum Resilience.</span>
          </h1>
          <div className="mb-10">
            <p className="text-xl md:text-2xl text-slate-500 font-serif italic leading-relaxed m-0">
              RivicQ — <span className="text-slate-900 font-bold not-italic">Robust Integrated Verified Infrastructure Computing & Quantum</span> — addresses cryptographic debt by migrating mission-critical systems to lattice-based security across physical and cloud estates.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 not-prose mb-12">
            <Link to="/rqsp" className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold text-sm hover:bg-blue-600 transition-all shadow-xl shadow-slate-400/10">
              Explore Protocol
            </Link>
            <Link to="/cloud-hsm" className="px-8 py-4 bg-white border border-slate-200 text-slate-600 rounded-full font-bold text-sm hover:border-slate-900 transition-all shadow-sm">
              Cloud HSM Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Core Technology: HSM Blueprint */}
      <section className="not-prose -mx-8 md:-mx-16 mb-24">
        <div className="px-8 md:px-16 mb-8">
            <h2 className="text-3xl font-serif font-bold text-slate-900 m-0">FIPS 140-3 Hardware Boundary</h2>
            <p className="text-xs text-blue-600 font-bold uppercase tracking-[0.3em] mt-2">Physical & Cloud-Native Root of Trust (RoT)</p>
        </div>
        <HSMBlueprint />
      </section>

      {/* Why RivicQ? Section */}
      <section className="py-24 not-prose relative border-t border-slate-100">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 tracking-tight">Core Cryptographic Foundations</h2>
          <p className="text-lg text-slate-500 font-serif italic max-w-2xl mx-auto">
            Security anchored in high-entropy physics and lattice mathematics, delivered with cloud-scale agility.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500">
            <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl border border-blue-100/50 inline-block mb-6">
              <Zap size={24}/>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">PQC Migration</h3>
            <p className="text-sm text-slate-600 leading-relaxed m-0">
              Standardized implementation of ML-KEM and ML-DSA to neutralize "Harvest Now, Decrypt Later" threats across all environments.
            </p>
          </div>
          <div className="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500">
            <div className="p-4 bg-emerald-50 text-emerald-600 rounded-2xl border border-emerald-100/50 inline-block mb-6">
              <Cloud size={24}/>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Cloud HSM Bridge</h3>
            <p className="text-sm text-slate-600 leading-relaxed m-0">
              High-performance virtualized HSMs providing dedicated, FIPS-validated hardware security with cloud-native scalability and PQC readiness.
            </p>
          </div>
          <div className="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500">
            <div className="p-4 bg-purple-50 text-purple-600 rounded-2xl border border-purple-100/50 inline-block mb-6">
              <Scale size={24}/>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">CryptoBOM Analysis</h3>
            <p className="text-sm text-slate-600 leading-relaxed m-0">
              Automated auditing of the software supply chain to identify and inventory vulnerable classical cryptographic primitives in your cloud stack.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-24 border-t border-slate-100/50">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-serif font-bold mb-6 text-slate-900 leading-tight">Addressing <br/> Cryptographic Debt.</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Legacy RSA and ECC primitives are systemic risks. RivicQ provides the technical bridge to a quantum-safe future by isolating risk at the physical and Cloud HSM layer.
            </p>
            <div className="space-y-4 not-prose">
              {[
                { title: "NIST FIPS 203/204", desc: "Implementation of global PQC standards." },
                { title: "Hybrid Cloud HSM", desc: "Magnesium-alloy physical units and virtualized cloud instances." },
                { title: "Continuous Monitoring", desc: "Real-time CBOM risk telemetry for cloud workloads." }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 bg-white/50 backdrop-blur-sm hover:bg-white hover:border-slate-300 transition-all shadow-sm">
                  <div className="p-2 bg-slate-100 text-slate-900 rounded-lg">
                    <ShieldCheck size={18}/>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 m-0">{item.title}</h4>
                    <p className="text-xs text-slate-500 m-0">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 text-white p-12 rounded-[2.5rem] relative overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Cloud size={120}/>
            </div>
            <div className="absolute inset-0 bg-technical opacity-5"></div>
            <div className="relative z-10">
              <h3 className="text-white text-3xl font-serif mb-6 m-0">Berlin Deep-Tech Hub</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Based in Adlershof WISTA, we anchor our research in the city's elite quantum ecosystem, focusing on the intersection of hardware, Cloud HSM virtualization, and PQC math.
              </p>
              <div className="flex flex-wrap items-center gap-8">
                 <div className="text-center">
                    <span className="block text-2xl font-bold text-blue-400 tracking-tighter">Cloud HSM</span>
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Virtualized</span>
                 </div>
                 <div className="w-px h-10 bg-slate-800 hidden sm:block"></div>
                 <div className="text-center">
                    <span className="block text-2xl font-bold text-indigo-400 tracking-tighter">TRL 4</span>
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Tech Readiness</span>
                 </div>
                 <div className="w-px h-10 bg-slate-800 hidden sm:block"></div>
                 <div className="text-center">
                    <span className="block text-2xl font-bold text-emerald-400">L3</span>
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">FIPS Security</span>
                 </div>
              </div>
              <Link to="/story" className="mt-10 inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-white transition-colors group/link">
                Technical Journey <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform"/>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </article>
  );
};

export default Home;
