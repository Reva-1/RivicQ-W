
import React from 'react';
import { Zap, Workflow, ShieldAlert, Database, Lock, ShieldCheck, ArrowRight, Atom, Share2 } from 'lucide-react';

const QuantumEntropyAnimation: React.FC = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20 group-hover:opacity-40 transition-opacity duration-700">
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="w-4 h-4 bg-blue-600 rounded-full blur-[2px] shadow-[0_0_20px_rgba(37,99,235,1)] z-10"></div>
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full animate-radiate"
          style={{
            animationDelay: `${i * 0.25}s`,
            '--rot': `${i * 30}deg`,
          } as React.CSSProperties}
        />
      ))}
    </div>
    <style>{`
      @keyframes radiate {
        0% { transform: rotate(var(--rot)) translateY(0) scale(1); opacity: 0; }
        20% { opacity: 0.8; }
        100% { transform: rotate(var(--rot)) translateY(140px) scale(0.1); opacity: 0; }
      }
      .animate-radiate { animation: radiate 4s cubic-bezier(0.4, 0, 0.2, 1) infinite; }
    `}</style>
  </div>
);

const ProtocolStep: React.FC<{ 
  step: string, 
  title: string, 
  desc: string, 
  icon: React.ReactNode, 
  color: string,
  details: string[],
  animation?: React.ReactNode
}> = ({ step, title, desc, icon, color, details, animation }) => (
  <div className="relative p-8 md:p-12 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group overflow-hidden">
    {animation}
    <span className={`absolute -right-6 -bottom-6 text-9xl font-black opacity-[0.03] transition-opacity group-hover:opacity-[0.07] ${color.replace('bg-', 'text-')}`}>
      {step}
    </span>
    <div className="relative z-10">
      <div className={`mb-8 p-4 rounded-2xl shadow-sm inline-block bg-white border border-slate-50 ${color.replace('bg-', 'text-')}`}>
        {icon}
      </div>
      <div className="mb-2">
        <span className={`text-[10px] font-bold uppercase tracking-[0.3em] ${color.replace('bg-', 'text-')}`}>Phase {step}</span>
        <h3 className="text-3xl font-serif font-bold text-slate-900 mt-1">{title}</h3>
      </div>
      <p className="text-slate-600 leading-relaxed mb-8 text-lg">{desc}</p>
      <ul className="space-y-3 p-0 m-0">
        {details.map((detail, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-slate-500 list-none">
            <div className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${color}`}></div>
            {detail}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const RQSP: React.FC = () => {
  return (
    <article className="prose prose-slate max-w-none">
      <header className="mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-bold uppercase tracking-widest mb-6">
          Core Logic v1.4
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Quantum Safe <br/><span className="text-blue-600">Security Protocol.</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-500 font-serif italic leading-relaxed max-w-2xl">
          RQSP is the orchestration engine that transforms quantum-safe algorithms into an end-to-end defense strategy.
        </p>
      </header>

      <div className="not-prose space-y-12 mb-24">
        <ProtocolStep 
          step="01"
          icon={<Zap size={32} />}
          color="bg-blue-600"
          title="Quantum Entropy Harvesting"
          desc="The protocol begins with the physical layer, harvesting true randomness from non-deterministic quantum processes."
          animation={<QuantumEntropyAnimation />}
          details={["Eliminates algorithmic predictability", "Hardware-bound seed generation", "Verified by NIST SP 800-22"]}
        />
        <ProtocolStep 
          step="02"
          icon={<Workflow size={32} />}
          color="bg-purple-600"
          title="Hybrid Key Encapsulation"
          desc="We wrap the future in the safety of the present using Hybrid KEM techniques."
          details={["ML-KEM-768 combined with classical X25519", "Dual-defense cryptographic layering", "FIPS 203 compliant architecture"]}
        />
      </div>

      {/* CTA SECTION - UPDATED TO MATCH IMAGE 2 */}
      <section className="not-prose bg-white border border-slate-100 rounded-[3rem] p-10 md:p-16 relative overflow-hidden shadow-sm group">
        <div className="absolute right-0 top-0 opacity-5 -mr-16 -mt-16 pointer-events-none group-hover:scale-105 transition-transform duration-1000">
          <ShieldCheck size={400} />
        </div>
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-slate-900 text-4xl font-serif font-bold mb-6 m-0">Implement RQSP today.</h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-10">
            Our SDKs provide native bindings to the RQSP orchestration engine, allowing your developers to deploy quantum-safe tunnels and signatures with a single line of code.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/#/sdk" className="px-10 py-4 bg-blue-600 text-white rounded-full font-bold text-sm hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-blue-500/20">
              View SDK Docs <ArrowRight size={18}/>
            </a>
            <a href="/#/platform" className="px-10 py-4 border border-slate-200 text-slate-600 rounded-full font-bold text-sm hover:bg-slate-50 transition-all flex items-center justify-center">
              Technical Architecture
            </a>
          </div>
        </div>
      </section>
    </article>
  );
};

export default RQSP;
