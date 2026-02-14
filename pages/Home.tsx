
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight, Lock, Zap, Activity, Cloud, Search, CheckCircle2 } from 'lucide-react';
import HSMBlueprint from '../components/HSMBlueprint';

const Home: React.FC = () => {
  return (
    <article className="prose prose-slate max-w-none">
      
      {/* Hero Section */}
      <section className="pt-12 md:pt-16 mb-16 relative">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/50 backdrop-blur-sm border border-blue-100/50 text-blue-600 text-[10px] font-bold uppercase tracking-widest mb-8">
            <Activity size={10} className="text-blue-500 animate-pulse"/>
            System Status: Ready for Future Threats
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1] tracking-tight text-slate-900">
            Security for the <br/> <span className="text-blue-600">Quantum Age.</span>
          </h1>
          <div className="mb-10">
            <p className="text-xl md:text-2xl text-slate-500 font-serif italic leading-relaxed m-0">
              RivicQ helps companies upgrade their digital security. We replace old encryption "locks" with new, quantum-safe ones to protect your data from future supercomputers.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 not-prose mb-12">
            <Link to="/platform" className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold text-sm hover:bg-blue-600 transition-all shadow-xl shadow-slate-400/10">
              See How It Works
            </Link>
            <Link to="/cloud-hsm" className="px-8 py-4 bg-white border border-slate-200 text-slate-600 rounded-full font-bold text-sm hover:border-slate-900 transition-all shadow-sm">
              Our Cloud Hardware
            </Link>
          </div>
        </div>
      </section>

      {/* The Problem & Solution Structure */}
      <section className="py-16 border-t border-slate-100 not-prose">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
             <span className="text-red-500 font-bold text-xs uppercase tracking-widest mb-2 block">The Problem</span>
             <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Old Locks break easily.</h2>
             <p className="text-slate-600 leading-relaxed text-lg">
               Most of the world's data is protected by encryption standards created decades ago (like RSA). Powerful new "Quantum Computers" will soon be able to break these locks instantly. Hackers are already stealing encrypted data today to unlock it later.
             </p>
          </div>
          <div>
             <span className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-2 block">Our Solution</span>
             <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">We build stronger keys.</h2>
             <p className="text-slate-600 leading-relaxed text-lg">
               RivicQ provides a "Transition Layer." We don't just patch your software; we provide a secure platform (Cloud HSM) that generates new, complex keys that even quantum computers cannot break.
             </p>
          </div>
        </div>
      </section>

      {/* How We Do It */}
      <section className="py-16 bg-slate-50 rounded-[3rem] px-8 md:px-12 mb-24 not-prose">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">How We Do It</h2>
          <p className="text-slate-500">A simple 3-step process to secure your infrastructure.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
              <Search size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">1. Find</h3>
            <p className="text-slate-600 text-sm">
              We scan your code and systems to find "weak locks"—places where you are using old security methods that need upgrading.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
              <Cloud size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">2. Secure</h3>
            <p className="text-slate-600 text-sm">
              We move your most important digital keys into our secure "Cloud Vaults" (HSMs). These are physical devices that are incredibly hard to hack.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">3. Upgrade</h3>
            <p className="text-slate-600 text-sm">
              We automatically update your encryption to the new global standards (NIST PQC), ensuring your data stays safe for the next 50 years.
            </p>
          </div>
        </div>
      </section>

      {/* The Outcomes */}
      <section className="py-16 not-prose mb-24">
        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-10 text-center">The Outcome</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
           <div className="flex items-start gap-4 p-6 border border-slate-100 rounded-2xl hover:border-blue-200 transition-colors">
              <CheckCircle2 className="text-emerald-500 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-slate-900 m-0">Compliance Ready</h4>
                <p className="text-sm text-slate-500 mt-2 m-0">You meet all new government regulations (like DORA and NIST) instantly.</p>
              </div>
           </div>
           <div className="flex items-start gap-4 p-6 border border-slate-100 rounded-2xl hover:border-blue-200 transition-colors">
              <CheckCircle2 className="text-emerald-500 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-slate-900 m-0">Long-Term Safety</h4>
                <p className="text-sm text-slate-500 mt-2 m-0">Your sensitive data (financial, health, legal) is safe from future attacks.</p>
              </div>
           </div>
        </div>
      </section>

      {/* Core Technology: HSM Blueprint */}
      <section className="not-prose -mx-8 md:-mx-16 mb-24 bg-slate-50 py-24">
        <div className="px-8 md:px-16 mb-8 text-center">
            <h2 className="text-3xl font-serif font-bold text-slate-900 m-0">Our Secure Technology</h2>
            <p className="text-sm text-slate-500 mt-2">A look inside our Hardware Security Module (HSM).</p>
        </div>
        <HSMBlueprint />
      </section>

      {/* Narrative Section */}
      <section className="py-24 border-t border-slate-100/50">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-serif font-bold mb-6 text-slate-900 leading-tight">Built in Berlin.<br/> Verified Globally.</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              RivicQ isn't just software. We are a deep-tech company based in Berlin's innovation hub. We combine rigorous hardware engineering with smart cloud software to solve the biggest security challenge of our time.
            </p>
            <div className="space-y-4 not-prose">
              {[
                { title: "Standardized", desc: "We use the official keys approved by global governments (NIST)." },
                { title: "Hybrid Cloud", desc: "Secure hardware you can access from anywhere." },
                { title: "Continuous Watch", desc: "We watch your systems 24/7 for security risks." }
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
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Security Level</span>
                 </div>
              </div>
              <Link to="/story" className="mt-10 inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-white transition-colors group/link">
                Our Journey <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform"/>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </article>
  );
};

export default Home;
