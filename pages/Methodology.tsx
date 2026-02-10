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
        <p className="text-xl text-slate-500 font-serif italic">The principles of high-assurance infrastructure.</p>
      </header>

      <section className="mb-20">
        <p className="text-lg text-slate-700 leading-relaxed">
          RivicQ does not just "add" encryption. We rethink the lifecycle of cryptographic trust. Our methodology is built on four core pillars that bridge the gap between classical reliability and quantum safety.
        </p>
      </section>

      <div className="not-prose grid md:grid-cols-2 gap-8 mb-24">
        <MethodBlock 
          icon={<RefreshCw size={24}/>}
          title="Hybrid-First Implementation"
          desc="We never abandon proven security. Our protocol wraps NIST-standardized PQC algorithms in classical FIPS-validated shells, ensuring that even if a new mathematical vulnerability is found in one, the other holds the line."
        />
        <MethodBlock 
          icon={<Cpu size={24}/>}
          title="Hardware Rooted Entropy"
          desc="Predictability is the enemy of security. We harvest randomness from non-deterministic physical quantum processes rather than algorithmic PRNGs, generating truly unique keys."
        />
        <MethodBlock 
          icon={<Lock size={24}/>}
          title="Zero-Knowledge KMS"
          desc="We architect for maximum isolation. RivicQ infrastructure is designed so that raw keys are generated, stored, and rotated inside a physical hardware boundary that we cannot access."
        />
        <MethodBlock 
          icon={<Microscope size={24}/>}
          title="Continuous Auditability"
          desc="Static trust is a myth. Every cryptographic operation in the RivicQ mesh is logged in a tamper-evident audit trail, bound to the hardware's unique identity."
        />
      </div>

      <section className="bg-slate-900 text-white p-12 md:p-16 rounded-[3rem] relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-white text-3xl font-serif mb-6 m-0">The Leap Berlin Connection</h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            Our methodology is refined through residency at Leap Berlin, collaborating with resident physicists and cryptographers at the WISTA Innovations-zentrum to test our protocol against real-world quantum hardware simulations.
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