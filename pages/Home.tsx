import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight, Lock, Zap, Activity, ChevronDown, Rocket, Target, Scale } from 'lucide-react';
import HSMBlueprint from '../components/HSMBlueprint';

const Home: React.FC = () => {
  return (
    <article className="prose prose-slate max-w-none">
      
      {/* Hero Section */}
      <section className="pt-12 md:pt-20 mb-20 relative">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-bold uppercase tracking-widest mb-8">
            <Activity size={10} className="text-blue-500 animate-pulse"/>
            Protocol Status: Nominal
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1] tracking-tight text-slate-900">
            Infrastructure <br/> for <span className="text-blue-600">Quantum Trust.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 font-serif italic leading-relaxed mb-10">
            RivicQ anchors digital identity in physical hardware, providing the transition layer for a post-quantum world.
          </p>
          <div className="flex flex-wrap gap-4 not-prose">
            <Link to="/rqsp" className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold text-sm hover:bg-blue-600 transition-all shadow-xl shadow-slate-200/20">
              Explore Protocol
            </Link>
            <Link to="/pricing" className="px-8 py-4 border border-slate-200 text-slate-600 rounded-full font-bold text-sm hover:border-slate-900 transition-all">
              Enterprise Inquiry
            </Link>
          </div>
        </div>
      </section>

      {/* Blueprint Container */}
      <section className="not-prose -mx-8 md:-mx-16 relative py-12 overflow-hidden border-t border-slate-50">
        <HSMBlueprint />
      </section>

      {/* Why RivicQ? Section */}
      <section className="py-24 not-prose border-t border-slate-50">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Why RivicQ?</h2>
          <p className="text-lg text-slate-500 font-serif italic max-w-2xl mx-auto">
            Security that isn't just quantum-safe, but operationally resilient.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-500">
            <div className="p-4 bg-white text-blue-600 rounded-2xl shadow-sm border border-slate-100 inline-block mb-6">
              <Zap size={24}/>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Quantum-Safe Native</h3>
            <p className="text-sm text-slate-600 leading-relaxed m-0">
              Built natively on lattice-based primitives (ML-KEM/ML-DSA) from the first line of code, not as an afterthought.
            </p>
          </div>
          <div className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-500">
            <div className="p-4 bg-white text-emerald-600 rounded-2xl shadow-sm border border-slate-100 inline-block mb-6">
              <Lock size={24}/>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">HSM Isolation</h3>
            <p className="text-sm text-slate-600 leading-relaxed m-0">
              All critical key material is generated and stored in FIPS 140-3 validated physical boundaries that never phone home.
            </p>
          </div>
          <div className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-500">
            <div className="p-4 bg-white text-purple-600 rounded-2xl shadow-sm border border-slate-100 inline-block mb-6">
              <Scale size={24}/>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Global Compliance</h3>
            <p className="text-sm text-slate-600 leading-relaxed m-0">
              Automate the mapping of your infrastructure to upcoming mandates like EU DORA and NIST CNSA 2.0.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-24">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-serif font-bold mb-6 text-slate-900">Securing the data <br/> of the next decade.</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Classical encryption has an expiration date. RivicQ prevents "Harvest Now, Decrypt Later" attacks by implementing NIST-standard PQC primitives today.
            </p>
            <div className="space-y-4 not-prose">
              {[
                { title: "FIPS 140-3 Certified", desc: "Hardware-anchored root of trust." },
                { title: "Hybrid PQC Channels", desc: "Backwards compatible security tunnels." },
                { title: "CryptoBOM Engine", desc: "Automated inventory of cryptographic debt." }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 bg-white hover:border-slate-300 transition-all">
                  <div className="p-2 bg-slate-50 text-slate-900 rounded-lg">
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

          <div className="bg-slate-900 text-white p-12 rounded-[2.5rem] relative overflow-hidden group shadow-2xl">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Lock size={120}/>
            </div>
            <div className="relative z-10">
              <h3 className="text-white text-3xl font-serif mb-6 m-0">Berlin Hub</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Based in Adlershof WISTA Innovations-zentrum, we collaborate with resident cryptographers to define the next generation of security.
              </p>
              <div className="flex items-center gap-6">
                 <div className="text-center">
                    <span className="block text-2xl font-bold text-blue-500">2026</span>
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Standardized</span>
                 </div>
                 <div className="w-px h-10 bg-slate-800"></div>
                 <div className="text-center">
                    <span className="block text-2xl font-bold text-emerald-500">L3</span>
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Security Level</span>
                 </div>
              </div>
              <Link to="/story" className="mt-10 inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-white transition-colors">
                Founder Journey <ArrowRight size={16}/>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </article>
  );
};

export default Home;