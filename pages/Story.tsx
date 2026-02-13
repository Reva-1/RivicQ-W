
import React from 'react';
import { GraduationCap, Award, Hospital, Rocket, Landmark, Github, Code, Zap, Globe, Target, ShieldCheck as ShieldIcon, Share2, Cpu, Flame } from 'lucide-react';

const TimelineItem: React.FC<{ date: string, title: string, content: string, icon: React.ReactNode, type?: 'milestone' | 'challenge' }> = ({ date, title, content, icon, type = 'milestone' }) => (
  <div className="relative pl-12 pb-12 last:pb-0 group">
    <div className={`absolute left-0 top-1 w-9 h-9 rounded-full bg-white border-2 ${type === 'challenge' ? 'border-red-200' : 'border-slate-900'} flex items-center justify-center z-10 shadow-sm transition-transform group-hover:scale-110 group-hover:bg-slate-50`}>
      {icon}
    </div>
    <div className={`absolute left-[17px] top-1 w-0.5 h-full ${type === 'challenge' ? 'bg-gradient-to-b from-red-100 to-slate-100' : 'bg-slate-100'} -z-0`}></div>
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
        <h1 className="text-5xl font-bold mb-4">Our Story</h1>
        <p className="text-xl text-slate-500 font-serif italic">From hacker culture to quantum-safe infrastructure.</p>
      </header>

      <section className="mb-20">
        <div className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none text-blue-600">
                <Target size={120} />
            </div>
            <p className="m-0 text-slate-700 text-lg leading-relaxed relative z-10">
                Moving to Berlin in 2024 to pursue a Master’s in Computer Science was the spark. The city's hacker culture—EthBerlin, Cardano, and various AI sprints—turned a study plan into a builder’s journey. RivicQ was born from the realization that security shouldn't just react to the future; it must be built ahead of it.
            </p>
        </div>
      </section>

      <div className="not-prose mb-24">
        <h2 className="font-serif text-3xl font-bold mb-12 text-slate-900">Evolution Roadmap</h2>
        
        <div className="max-w-3xl">
          <TimelineItem 
            date="Early 2024"
            title="The Hacker Phase"
            icon={<Code size={16} className="text-slate-400"/>}
            content="Initial exploration of AI, Blockchain, and Quantum vulnerabilities through intensive hackathons at EthBerlin and Cardano."
          />
          <TimelineItem 
            date="Early August 2024"
            title="RivicID & Radar Hackathon"
            icon={<Share2 size={16} className="text-blue-500"/>}
            content="First major project: RivicID, a cross-chain identity protocol, was submitted to the Solana Radar Hackathon. Supported by the Superteam Solana community, this milestone validated our approach to decentralized, verifiable identity."
          />
          <TimelineItem 
            date="January 2025"
            title="SIB Scholarship"
            icon={<Award size={16} className="text-blue-600"/>}
            content="Secured the SIB scholarship, marking the transition from academic research to full-time founder trajectory."
          />
          <TimelineItem 
            date="February 2025"
            title="Lean Canvas & Product Strategy"
            icon={<GraduationCap size={16} className="text-slate-400"/>}
            content="Joined the SLB Lean Canvas Program. Refined the cryptographic value prop and built the initial PQC wrapper prototype."
          />
          <TimelineItem 
            date="March 6, 2025"
            title="Cyber Innovation Hub Pitch"
            icon={<ShieldIcon size={16} className="text-slate-400"/>}
            content="Presented RivicQ at the Bundeswehr Cyber Innovation Hub, focusing on dual-use quantum-safe applications for defense."
          />
          <TimelineItem 
            date="April 2025"
            title="Federal Recognition"
            icon={<Landmark size={16} className="text-slate-400"/>}
            content="Submitted technical proposals to SPRIN-D and applied for Solana Foundation grants to secure decentralized networks."
          />
          <TimelineItem 
            date="June - July 2025"
            title="Resilience Period"
            type="challenge"
            icon={<Hospital size={16} className="text-red-500"/>}
            content="A critical health interval forced a return to India. This 'forced reflection' became the fuel for the company's long-term vision."
          />
          <TimelineItem 
            date="December 11, 2025"
            title="Venture Cafe: Rave Logic"
            icon={<Zap size={16} className="text-yellow-500"/>}
            content="Demonstrated the intersection of algorithmic logic and culture at the Algorithmic Rave event in Berlin."
          />
          <TimelineItem 
            date="December 25, 2025"
            title="Official Launch"
            icon={<Globe size={16} className="text-blue-600"/>}
            content="RivicQ formally announced its mission to the global tech community, establishing its digital presence."
          />
          <TimelineItem 
            date="January 2026"
            title="Berlin Quantum Space"
            icon={<Cpu size={16} className="text-indigo-600"/>}
            content="RivicQ officially entered the Berlin Quantum Space, integrating into the city's elite network of quantum-computing research and industrial validation facilities."
          />
          <TimelineItem 
            date="January 22, 2026"
            title="Leap Berlin Residency"
            icon={<Rocket size={16} className="text-blue-600"/>}
            content="Signed contract for residency at the Leap Berlin Quantum Accelerator at WISTA Innovations-zentrum."
          />
          <TimelineItem 
            date="January 27, 2026"
            title="Leap Quantum Strategy"
            icon={<Award size={16} className="text-emerald-500"/>}
            content="Delivered the first internal pitch at Leap Quantum, initiating deep technical collaboration with resident physicists."
          />
          <TimelineItem 
            date="February 10, 2026"
            title="Bar BQ Networking at Leap"
            icon={<Flame size={16} className="text-orange-500"/>}
            content="Participated in the high-profile Bar BQ networking session at Leap Berlin, connecting with key industry players and the broader deep-tech community to expand the RivicQ ecosystem."
          />
        </div>
      </div>

      <section className="bg-slate-50 border border-slate-100 p-12 md:p-16 rounded-[3rem] relative overflow-hidden mb-20">
        <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none text-slate-900">
          <Github size={200} />
        </div>
        <div className="relative z-10 max-w-2xl">
            <h2 className="text-slate-900 text-3xl font-serif mb-6 m-0">Rejection is Data</h2>
            <p className="text-slate-600 leading-relaxed italic mb-8">
                Like every honest startup, our path was paved with rejections from accelerators like Reaktor and Web3 Fund. We view every "No" as a debugging report—a signal that we need to build more, refine more, and test more. 
            </p>
            <p className="text-xl font-bold text-blue-600 m-0 uppercase tracking-widest">
                The build continues.
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
