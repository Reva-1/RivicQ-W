
import React from 'react';
import { Mail } from 'lucide-react';

const Team: React.FC = () => {
  return (
    <article className="prose prose-lg prose-slate max-w-none">
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
        <p className="text-xl text-slate-500 font-serif italic leading-relaxed">
          A multidisciplinary collective of cryptographers, engineers, and researchers building the foundations of quantum-safe computing in Berlin.
        </p>
      </header>

      <section className="mb-16">
        <h3 className="text-2xl font-serif font-bold text-slate-900 border-b border-slate-100 pb-4 mb-8">Founder</h3>
        <div className="not-prose">
          <div className="flex flex-col md:flex-row gap-6 items-start">
             <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center font-serif text-2xl font-bold">R</div>
             <div>
                <h4 className="text-xl font-bold text-slate-900 m-0">Revan Sai Ande</h4>
                <p className="text-blue-600 font-bold text-[10px] uppercase tracking-[0.2em] mt-1 mb-3">Founder & Managing Director</p>
                <p className="text-sm text-slate-500 leading-relaxed max-w-xl">
                  Security Researcher. Leap Berlin Quantum Deep-Tech Accelerator Resident at WISTA Adlershof.
                </p>
             </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h3 className="text-2xl font-serif font-bold text-slate-900 border-b border-slate-100 pb-4 mb-8">Advisors & Mentors</h3>
        <p className="text-slate-500 text-sm mb-8 italic">Guided by industry leaders across academia, enterprise, and public governance.</p>
        
        <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {[
              { name: "Prof. Jean-Pierre Seifert", org: "TU Berlin", role: "Quantum Computing & Cryptography" },
              { name: "André Nikolski", org: "Leap Berlin", role: "Deep-Tech Accelerator Lead" },
              { name: "Sebastian Grodzietzki", org: "IBM Quantum", role: "Enterprise Security Strategy" },
              { name: "Norbert Herrmann", org: "Berlin Public Administration", role: "Public Sector Innovation" },
              { name: "Mujib Bazhwal", org: "Zukunft Gründen", role: "Entrepreneurship & Growth" }
            ].map((mentor, i) => (
              <div key={i} className="flex gap-4 group">
                <div className="w-1 h-auto bg-slate-100 group-hover:bg-blue-600 transition-colors"></div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 m-0">{mentor.name}</h4>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1 m-0">{mentor.org}</p>
                  <p className="text-xs text-slate-500 mt-1 m-0">{mentor.role}</p>
                </div>
              </div>
            ))}
        </div>
      </section>

      <section className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-100 mt-20">
        <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4 m-0">Inquiry</h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          For technical collaboration, research inquiries, or speaking engagements, please reach our Berlin headquarters.
        </p>
        <a href="mailto:rivic.revan.ande@gmail.com" className="inline-flex items-center gap-2 font-bold text-blue-600 hover:text-slate-900 transition-colors text-sm uppercase tracking-widest">
          <Mail size={16} /> rivic.revan.ande@gmail.com
        </a>
      </section>
    </article>
  );
};

export default Team;
