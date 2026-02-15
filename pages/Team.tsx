
import React, { useState } from 'react';
import { Mail, CheckCircle2, Send, Loader2, MessageSquare } from 'lucide-react';
import { aiService } from '../services/aiService';

const Team: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await aiService.submitInquiry({
        type: 'GENERAL_CONTACT',
        name: formData.name,
        email: formData.email,
        message: formData.message
      });
      setFormSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
       alert("Server unreachable.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <article className="prose prose-lg prose-slate max-w-none">
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
        <p className="text-xl text-slate-500 font-serif italic leading-relaxed">
          A team of engineers and researchers building the future of security in Berlin.
        </p>
      </header>

      <section className="mb-16">
        <h3 className="text-2xl font-serif font-bold text-slate-900 border-b border-slate-100 pb-4 mb-8">Leadership</h3>
        <div className="not-prose">
          <div className="flex flex-col md:flex-row gap-6 items-start">
             <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center font-serif text-2xl font-bold">R</div>
             <div>
                <h4 className="text-xl font-bold text-slate-900 m-0">Revan Ande</h4>
                <p className="text-blue-600 font-bold text-[10px] uppercase tracking-[0.2em] mt-1 mb-3">Founder</p>
                <p className="text-sm text-slate-500 leading-relaxed max-w-xl">
                  Security Researcher and Resident at Leap Berlin Quantum Deep-Tech Accelerator. Focused on building practical tools to secure data against quantum threats.
                </p>
             </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h3 className="text-2xl font-serif font-bold text-slate-900 border-b border-slate-100 pb-4 mb-8">Advisors & Mentors</h3>
        <p className="text-slate-500 text-sm mb-8 italic">Guided by industry leaders across academia, enterprise, and government.</p>
        
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
                  <p className="text-xs text-slate-500 mt-1 m-0"><strong>{mentor.org}</strong> • {mentor.role}</p>
                </div>
              </div>
            ))}
        </div>
      </section>

      <section className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-100 mt-20">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 mb-6">
              <MessageSquare size={24}/>
            </div>
            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4 m-0">General Inquiry</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              For research collaboration, press, or general questions about our PQC technology.
            </p>
            <div className="flex items-center gap-2 font-bold text-blue-600 text-sm uppercase tracking-widest">
              <Mail size={16} /> rivic.revan.ande@gmail.com
            </div>
          </div>

          <div className="md:w-1/2">
            {formSubmitted ? (
               <div className="h-full flex flex-col items-center justify-center text-center p-6 bg-white rounded-2xl border border-slate-200 shadow-sm animate-fadeIn">
                 <CheckCircle2 size={32} className="text-emerald-500 mb-4"/>
                 <h4 className="font-bold text-slate-900">Message Sent</h4>
                 <p className="text-xs text-slate-500 mt-2">We will get back to you shortly.</p>
                 <button onClick={() => setFormSubmitted(false)} className="mt-4 text-[10px] text-blue-600 font-bold uppercase tracking-widest hover:underline">Send New</button>
               </div>
            ) : (
               <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <input required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="Your Name" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-600" />
                  <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} placeholder="Email Address" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-600" />
                  <textarea required value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} placeholder="How can we help?" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm min-h-[100px] resize-none outline-none focus:ring-2 focus:ring-blue-600" />
                  <button type="submit" disabled={isSubmitting} className="w-full py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-blue-600 transition-all text-xs uppercase tracking-widest flex items-center justify-center gap-2 disabled:opacity-50">
                    {isSubmitting ? <Loader2 size={14} className="animate-spin"/> : <><Send size={14}/> Send Message</>}
                  </button>
               </form>
            )}
          </div>
        </div>
      </section>
    </article>
  );
};

export default Team;
