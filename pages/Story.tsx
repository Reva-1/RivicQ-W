
import React from 'react';
import { GraduationCap, Award, Building2, Rocket, Landmark, Globe, Target, ShieldCheck as ShieldIcon, Share2, Cpu, Briefcase, Network } from 'lucide-react';

const TimelineItem: React.FC<{ date: string, title: string, content: string, icon: React.ReactNode }> = ({ date, title, content, icon }) => (
  <div className="relative pl-12 pb-12 last:pb-0 group">
    <div className={`absolute left-0 top-1 w-9 h-9 rounded-full bg-white border-2 border-slate-900 flex items-center justify-center z-10 shadow-sm transition-transform group-hover:scale-110 group-hover:bg-slate-50`}>
      {icon}
    </div>
    <div className="absolute left-[17px] top-1 w-0.5 h-full bg-slate-100 -z-0"></div>
    <div className="flex flex-col">
      <span className="text-[10px] font-mono font-bold text-blue-600 uppercase tracking-[0.2em] mb-1">{date}</span>
      <h3 className="m-0 text-xl font-serif font-bold text-slate-900 mb-2 transition-colors group-hover:text-blue-600">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed m-0 max-w-xl">{content}</p>
    </div>
  </div>
);

const Story: React.FC = () => {
  return (
    <article className="prose prose-slate max-w-none">
      <header className="mb-16">
        <h1 className="text-5xl font-bold mb-4">Our History</h1>
        <p className="text-xl text-slate-500 font-serif italic">
          Born from academic rigor, built for enterprise resilience.
        </p>
      </header>

      <section className="mb-20">
        <div className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none text-blue-600">
                <Target size={120} />
            </div>
            <p className="m-0 text-slate-700 text-lg leading-relaxed relative z-10">
                RivicQ was founded on a singular premise: the cryptographic infrastructure of the internet is approaching a critical obsolescence event. Founded in Berlin's deep-tech ecosystem, we transitioned from advanced academic research to commercial infrastructure, establishing a new standard for Post-Quantum Cryptography (PQC) integration in regulated industries.
            </p>
        </div>
      </section>

      <div className="not-prose mb-24">
        <h2 className="font-serif text-3xl font-bold mb-12 text-slate-900">Corporate Milestones</h2>
        
        <div className="max-w-3xl">
          <TimelineItem 
            date="Q3 2024"
            title="Protocol Definition & Architecture"
            icon={<Network size={16} className="text-slate-400"/>}
            content="Definition of the core Rivic Quantum Security Protocol (RQSP). Development of the initial architecture for decentralized identity verification compliant with emerging NIST draft standards."
          />
          <TimelineItem 
            date="Q4 2024"
            title="Technical Validation"
            icon={<Share2 size={16} className="text-blue-500"/>}
            content="Successful proof-of-concept deployment of PQC primitives. Validation of cross-chain interoperability modules and secure signature schemes within high-throughput environments."
          />
          <TimelineItem 
            date="January 2025"
            title="Strategic Funding & Support"
            icon={<Award size={16} className="text-blue-600"/>}
            content="Secured the SIB grant, transitioning operations from research to commercial product development. Establishment of core engineering principles focused on FIPS 140-3 compliance."
          />
          <TimelineItem 
            date="February 2025"
            title="Product Strategy Finalization"
            icon={<Briefcase size={16} className="text-slate-400"/>}
            content="Completion of the SLB Lean Canvas Program. Refined the cryptographic value proposition to focus on 'Cryptographic Bill of Materials' (CBOM) as the entry point for enterprise engagement."
          />
          <TimelineItem 
            date="March 2025"
            title="Defense Sector Alignment"
            icon={<ShieldIcon size={16} className="text-slate-400"/>}
            content="Presented RivicQ dual-use capabilities at the Bundeswehr Cyber Innovation Hub, aligning product roadmap with federal defense standards for secure communications."
          />
          <TimelineItem 
            date="April 2025"
            title="Federal Grant Submission"
            icon={<Landmark size={16} className="text-slate-400"/>}
            content="Submission of technical proposals to SPRIN-D and Solana Foundation, focusing on sovereign infrastructure protection and decentralized network resilience."
          />
          <TimelineItem 
            date="December 2025"
            title="Commercial Launch"
            icon={<Globe size={16} className="text-blue-600"/>}
            content="RivicQ formally announced its enterprise suite to the global tech community, establishing its digital presence and opening the partner program."
          />
          <TimelineItem 
            date="January 2026"
            title="Berlin Quantum Ecosystem"
            icon={<Cpu size={16} className="text-indigo-600"/>}
            content="Official integration into the Berlin Quantum Space. Establishing physical presence within the city's elite network of quantum-computing research and industrial validation facilities."
          />
          <TimelineItem 
            date="January 22, 2026"
            title="Leap Berlin Residency"
            icon={<Rocket size={16} className="text-blue-600"/>}
            content="Executed contract for residency at the Leap Berlin Quantum Accelerator at WISTA Innovations-zentrum, securing access to specialized hardware labs."
          />
          <TimelineItem 
            date="Q1 2026"
            title="Strategic Industry Partnerships"
            icon={<Building2 size={16} className="text-emerald-500"/>}
            content="Initiated deep technical collaboration with resident physicists and hardware vendors to validate the Cloud HSM entropy source against physical quantum effects."
          />
        </div>
      </div>

      <section className="bg-slate-50 border border-slate-100 p-12 md:p-16 rounded-[3rem] relative overflow-hidden mb-20">
        <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none text-slate-900">
          <GraduationCap size={200} />
        </div>
        <div className="relative z-10 max-w-2xl">
            <h2 className="text-slate-900 text-3xl font-serif mb-6 m-0">Engineering Excellence</h2>
            <p className="text-slate-600 leading-relaxed italic mb-8">
                Our trajectory is defined by rigorous testing and validation. We view every regulatory hurdle and technical challenge not as a barrier, but as a necessary gate to ensure our infrastructure is capable of securing the world's most critical data for decades to come.
            </p>
            <p className="text-xl font-bold text-blue-600 m-0 uppercase tracking-widest">
                Built for the Long Term.
            </p>
        </div>
      </section>

      <footer className="mt-12 text-center text-[10px] text-slate-400 uppercase tracking-widest font-bold">
        RivicQ Technologies • Berlin
      </footer>
    </article>
  );
};

export default Story;
