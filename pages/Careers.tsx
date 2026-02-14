
import React from 'react';
import { Mail, Send, Clock, Sparkles, TrendingUp, BarChart3 } from 'lucide-react';

const CareerCard: React.FC<{ 
  title: string, 
  focus: string, 
  experience: string, 
  icon: React.ReactNode, 
  color: string 
}> = ({ title, focus, experience, icon, color }) => (
  <div className="border border-slate-100 rounded-[2.5rem] p-8 md:p-10 hover:border-blue-500 hover:shadow-2xl transition-all bg-white group">
    <div className={`p-4 rounded-2xl mb-8 inline-block ${color}`}>
      {icon}
    </div>
    <div className="mb-6">
      <h3 className="font-serif text-3xl font-bold text-slate-900 m-0 mb-2 group-hover:text-blue-600 transition-colors">{title}</h3>
      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[10px] font-bold text-blue-600 uppercase tracking-widest">
        <Clock size={12} /> Priority Hiring • Q1 2026
      </span>
    </div>
    <div className="space-y-6">
      <div>
        <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Focus Areas</h4>
        <p className="text-sm text-slate-700 leading-relaxed m-0">{focus}</p>
      </div>
      <div>
        <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Desired Experience</h4>
        <p className="text-sm text-slate-500 italic m-0">{experience}</p>
      </div>
      <a href={`mailto:rivic.revan.ande@gmail.com?subject=Strategic Inquiry: ${title}`} className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-blue-600 transition-all w-full justify-center">
        Initialize Contact
      </a>
    </div>
  </div>
);

const Careers: React.FC = () => {
  return (
    <article className="prose prose-lg prose-slate max-w-none">
      <header className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-bold uppercase tracking-widest mb-6">
          Founder Search Phase
        </div>
        <h1 className="text-5xl font-bold mb-4 tracking-tight">Co-Founder Search: <br/>Pioneering <span className="text-blue-600">Quantum-Safe Security.</span></h1>
        <p className="text-xl text-slate-500 font-serif italic max-w-2xl leading-relaxed">
          Seeking highly motivated partners to complement the deep technical expertise of our founder and scale RivicQ into the global leader of cryptographic resilience.
        </p>
      </header>

      <section className="mb-20">
        <div className="bg-slate-50 p-8 md:p-12 rounded-[3rem] border border-slate-100 flex flex-col md:flex-row gap-10 items-center">
          <div className="w-20 h-20 bg-blue-600 text-white rounded-3xl flex items-center justify-center shrink-0 shadow-xl shadow-blue-200">
            <Sparkles size={32} />
          </div>
          <div>
            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2 m-0">The Co-Founder Role</h3>
            <p className="text-slate-600 text-sm leading-relaxed m-0">
              You will be a strategic partner instrumental in securing initial funding, establishing enterprise partnerships, and rapidly scaling RivicQ's market presence alongside <strong>Revan Ande</strong>.
            </p>
          </div>
        </div>
      </section>

      <div className="not-prose grid md:grid-cols-2 gap-8 mb-24">
        <CareerCard 
          title="Co-Founder (Business & Strategy)"
          icon={<TrendingUp size={28} />}
          color="bg-blue-50 text-blue-600"
          focus="Lead fundraising efforts, manage investor relations, and define the Go-To-Market (GTM) execution strategy."
          experience="Proven track record in B2B tech sales, VC networking, or financial modeling for deep-tech startups."
        />
        <CareerCard 
          title="Head of Sales & Marketing"
          icon={<BarChart3 size={28} />}
          color="bg-emerald-50 text-emerald-600"
          focus="Establish the sales pipeline, oversee high-impact marketing campaigns, and drive adoption of CSaaS and DevSecOps tools."
          experience="Experience defining successful GTM motions for cybersecurity products and navigating the enterprise procurement cycle. Opening soon."
        />
      </div>

      <section className="not-prose bg-slate-900 rounded-[3rem] p-12 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-white m-0">Join the Quantum-Safe Future</h2>
        <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto italic">
          "If you are a passionate leader ready to tackle the challenges of cryptographic debt and scale a deeptech startup, let's talk."
        </p>
        <a 
          href="mailto:rivic.revan.ande@gmail.com?subject=Strategic Partnership: Co-Founder Application" 
          className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 uppercase text-xs tracking-widest"
        >
          Submit Statement of Interest <Send size={18}/>
        </a>
        <p className="mt-8 text-[10px] text-slate-500 uppercase tracking-widest font-bold">
          Please CC: revan.ande@rivicq.xyz
        </p>
      </section>

      <footer className="mt-12 text-center text-[10px] text-slate-400 uppercase tracking-widest font-bold">
        RivicQ Technologies • Berlin Headquarters
      </footer>
    </article>
  );
};

export default Careers;
