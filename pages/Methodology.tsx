
import React from 'react';
import { Microscope, Shield, Zap, RefreshCw, Cpu, Lock } from 'lucide-react';

const MethodBlock: React.FC<{ title: string, desc: string, icon: React.ReactNode }> = ({ title, desc, icon }) => (
  <div className="p-8 border border-slate-100 rounded-3xl bg-white shadow-sm hover:shadow-md transition-all">
    <div className="mb-6 p-4 bg-slate-50 text-slate-900 rounded-2xl inline-block">
      {icon}
    </div>
    <h3 className="text-xl font-serif font-bold mb-4 m-0">{title}</h3>
    <p className="text-sm text-slate-600 leading-relaxed m-0">
      {desc}
    </p>
  </div>
);

const Methodology: React.FC = () => {
  return (
    <article className="prose prose-slate max-w-none">
      <header className="mb-16">
        <h1 className="text-5xl font-bold mb-4">Our Methodology</h1>
        <p className="text-xl text-slate-500 font-serif italic">How we build high-trust security.</p>
      </header>

      <section className="mb-20">
        <p className="text-lg text-slate-700 leading-relaxed">
          RivicQ doesn't just add encryption. We rethink how trust works. Our method is built on four simple pillars that make sure your data is safe today and tomorrow.
        </p>
      </section>

      <div className="not-prose grid md:grid-cols-2 gap-8 mb-24">
        <MethodBlock 
          icon={<RefreshCw size={24}/>}
          title="Hybrid Protection"
          desc="We use a 'belt and suspenders' approach. We wrap new quantum-safe algorithms inside proven classical encryption. If one fails, the other still protects you."
        />
        <MethodBlock 
          icon={<Cpu size={24}/>}
          title="True Randomness"
          desc="If a hacker can guess your key, they can steal your data. We use physical quantum effects to create keys that are truly random and impossible to guess."
        />
        <MethodBlock 
          icon={<Lock size={24}/>}
          title="Zero-Knowledge"
          desc="We design our systems so that we can never see your keys. They are generated and stored inside secure hardware that even we cannot access."
        />
        <MethodBlock 
          icon={<Microscope size={24}/>}
          title="Always Watching"
          desc="Security isn't a one-time thing. We keep a permanent record of every security operation, so you always know who accessed what and when."
        />
      </div>

      <section className="bg-slate-900 text-white p-12 md:p-16 rounded-[3rem] relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-white text-3xl font-serif mb-6 m-0">Tested in Berlin</h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            Our methods are tested and proven at Leap Berlin. We work with physicists and cryptographers to make sure our security holds up against real-world simulations.
          </p>
          <div className="flex items-center gap-6">
            <div className="text-center">
              <span className="block text-2xl font-bold text-blue-400">PQC</span>
              <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Standardized</span>
            </div>
            <div className="w-px h-10 bg-slate-800"></div>
            <div className="text-center">
              <span className="block text-2xl font-bold text-emerald-400">FIPS</span>
              <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Compliant</span>
            </div>
          </div>
        </div>
      </section>

    </article>
  );
};

export default Methodology;
