
import React, { useState } from 'react';
import { Building2, Send, CheckCircle2, Award, Activity, MessageSquare } from 'lucide-react';

const Investors: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Investor Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Details: ${formData.message}`);
    window.location.href = `mailto:rivic.revan.ande@gmail.com?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <article className="prose prose-lg prose-slate max-w-none">
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Investor Relations</h1>
        <p className="lead font-serif italic text-slate-600">
          RivicQ is raising a Pre-Seed round to finalize our FIPS 140-3 HSM integration layer and CryptoBOM SaaS platform.
        </p>
      </header>

      <section className="mb-20">
        <div className="grid md:grid-cols-3 gap-6 not-prose">
          <div className="p-8 border border-slate-100 rounded-[2.5rem] bg-white shadow-sm hover:shadow-lg transition-all">
             <div className="p-3 bg-blue-50 text-blue-600 rounded-xl mb-6 inline-block"><CheckCircle2 size={24}/></div>
             <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-2">Accelerator Status</h4>
             <p className="text-xs text-slate-500 leading-relaxed m-0">Leap Berlin Quantum Hub Resident.</p>
          </div>
          <div className="p-8 border border-slate-100 rounded-[2.5rem] bg-white shadow-sm hover:shadow-lg transition-all group">
             <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl mb-6 inline-block"><Activity size={24} className="animate-pulse"/></div>
             <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-2">EXIST Program</h4>
             <p className="text-xs text-slate-500 leading-relaxed m-0">In Progress for 2026 Founding Grant.</p>
          </div>
          <div className="p-8 border border-slate-100 rounded-[2.5rem] bg-white shadow-sm hover:shadow-lg transition-all group">
             <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl mb-6 inline-block"><Award size={24}/></div>
             <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-2">TU Berlin Partnership</h4>
             <p className="text-xs text-slate-500 leading-relaxed m-0">Collaborative validation with Prof. Seifert.</p>
          </div>
        </div>
      </section>

      <section className="not-prose bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden mb-24">
        <div className="grid lg:grid-cols-2 gap-16 relative z-10">
          <div>
            <h2 className="text-white text-4xl font-serif font-bold mb-6 m-0">Partner with us.</h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              We are identifying strategic capital partners who understand the gravity of the post-quantum transition.
            </p>
            <a href="mailto:rivic.revan.ande@gmail.com" className="inline-flex items-center gap-2 bg-blue-600 text-white px-10 py-5 rounded-full font-bold hover:bg-blue-500 transition-all shadow-xl shadow-blue-500/20">
               <Send size={18}/> Connect with IR
            </a>
          </div>

          <div className="bg-white rounded-[2.5rem] p-8 shadow-2xl">
            {formSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12"><h3 className="text-slate-900 text-2xl font-bold m-0">Inquiry Sent</h3></div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input required placeholder="Name" className="w-full px-5 py-3 bg-slate-50 border rounded-xl text-sm" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                <input required type="email" placeholder="Work Email" className="w-full px-5 py-3 bg-slate-50 border rounded-xl text-sm" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                <textarea required placeholder="Investment Message" className="w-full px-5 py-3 bg-slate-50 border rounded-xl text-sm min-h-[100px]" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} />
                <button type="submit" className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-blue-600 transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-widest">
                  Connect with IR <MessageSquare size={16}/>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </article>
  );
};

export default Investors;
