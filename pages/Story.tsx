
import React from 'react';
import { Award, Building2, Rocket, Landmark, Globe, Target, ShieldCheck as ShieldIcon, Share2, Cpu, Briefcase, Network } from 'lucide-react';

const TimelineItem: React.FC<{ date: string, title: string, content: string, icon: React.ReactNode }> = ({ date, title, content, icon }) => (
  <div className="relative pl-12 pb-12 last:pb-0 group">
    <div className={`absolute left-0 top-1 w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center z-10 shadow-sm transition-transform group-hover:scale-110 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900`}>
      {icon}
    </div>
    <div className="absolute left-[17px] top-1 w-px h-full bg-slate-100 -z-0"></div>
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
        <h1 className="text-5xl font-bold mb-4 tracking-tight text-slate-900">Corporate History</h1>
        <p className="text-xl text-slate-500 font-serif italic max-w-2xl leading-relaxed">
          The evolution of RivicQ: from fundamental cryptographic research to global infrastructure resilience.
        </p>
      </header>

      <section className="mb-20">
        <div className="bg-slate-50 p-10 md:p-16 rounded-[3rem] border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none text-blue-600">
                <Target size={180} />
            </div>
            <p className="m-0 text-slate-700 text-lg leading-relaxed relative z-10 max-w-3xl">
                RivicQ Technologies was established to address the critical obsolescence of global cryptographic infrastructure. Founded in the Berlin innovation ecosystem, we have systematically transitioned from theoretical research to the development of commercial-grade Post-Quantum Cryptography (PQC) orchestration platforms for high-assurance sectors.
            </p>
        </div>
      </section>

      <div className="not-prose mb-24">
        <h2 className="font-serif text-3xl font-bold mb-16 text-slate-900 text-center uppercase tracking-widest">Strategic Milestones</h2>
        
        <div className="max-w-3xl mx-auto">
          <TimelineItem 
            date="Q3 2024"
            title="Protocol Architecture & Standards Mapping"
            icon={<Network size={16}/>}
            content="Formalized the Rivic Quantum Security Protocol (RQSP) architecture. Completed comprehensive mapping of lattice-based primitives against emerging NIST FIPS 203/204 draft standards."
          />
          <TimelineItem 
            date="Q4 2024"
            title="Technical Validation & Peer Review"
            icon={<Share2 size={16}/>}
            content="Successful internal validation of the PQC orchestration layer. Peer review of cross-chain interoperability modules for high-throughput decentralized environments."
          />
          <TimelineItem 
            date="January 2025"
            title="Strategic Institutional Support"
            icon={<Award size={16}/>}
            content="Secured foundational institutional support through the SIB framework, enabling the transition to commercial product engineering and FIPS 140-3 compliance roadmapping."
          />
          <TimelineItem 
            date="February 2025"
            title="Enterprise Strategy Finalization"
            icon={<Briefcase size={16}/>}
            content="Conclusion of the SLB industrial acceleration program. Finalized the value proposition for the Cryptographic Bill of Materials (CBOM) as a core enterprise compliance asset."
          />
          <TimelineItem 
            date="March 2025"
            title="Governmental Sector Engagement"
            icon={<Landmark size={16}/>}
            content="Presented architectural frameworks at the Bundeswehr Cyber Innovation Hub. Aligned internal R&D with federal defense requirements for long-term secure communications."
          />
          <TimelineItem 
            date="April 2025"
            title="Federal R&D Proposals"
            icon={<ShieldIcon size={16}/>}
            content="Submission of technical proposals to federal innovation agencies (SPRIN-D), focusing on sovereign infrastructure protection and decentralized network resilience."
          />
          <TimelineItem 
            date="December 2025"
            title="Global Infrastructure Launch"
            icon={<Globe size={16}/>}
            content="Formally debuted the RivicQ enterprise suite. Established a permanent digital presence and initiated the Infrastructure Partner Program for global scale."
          />
          <TimelineItem 
            date="January 2026"
            title="Berlin Quantum Ecosystem Integration"
            icon={<Cpu size={16}/>}
            content="Formalized integration into Berlin's elite deep-tech research community. Establishing physical residency within specialized quantum validation facilities."
          />
          <TimelineItem 
            date="February 2026"
            title="WISTA Leap Berlin Residency"
            icon={<Rocket size={16}/>}
            content="Operational start at the Leap Berlin Quantum Accelerator. Securing direct access to hardware benchmarks for Cloud HSM entropy validation."
          />
        </div>
      </div>

      <section className="bg-slate-900 text-white p-12 md:p-20 rounded-[4rem] relative overflow-hidden mb-24 shadow-2xl">
        <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none text-white">
          <Landmark size={240} />
        </div>
        <div className="relative z-10 max-w-2xl">
            <h2 className="text-white text-4xl font-serif font-bold mb-8 m-0 leading-tight">Engineering for Permanence</h2>
            <p className="text-slate-400 text-lg leading-relaxed italic mb-10">
                Our trajectory is defined by structural validation and regulatory foresight. We view every technical challenge as a mandatory milestone toward securing the world's most critical data assets for the next fifty years.
            </p>
            <div className="flex items-center gap-6">
               <div className="h-0.5 w-12 bg-blue-500"></div>
               <p className="text-xs font-bold text-blue-500 m-0 uppercase tracking-[0.3em]">
                 Established Berlin • Serving Globally
               </p>
            </div>
        </div>
      </section>

      <footer className="mt-12 text-center text-[10px] text-slate-400 uppercase tracking-widest font-bold">
        RivicQ Technologies • Berlin
      </footer>
    </article>
  );
};

export default Story;
