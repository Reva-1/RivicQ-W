import React, { useState } from 'react';
import { Mail, MessageSquare, Building2, Send, ChevronDown } from 'lucide-react';

const Investors: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: 'General Investment',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Investor Inquiry: ${formData.inquiryType} from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nType: ${formData.inquiryType}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:investors@rivic.xyz?subject=${subject}&body=${body}`;
    
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <article className="prose prose-lg prose-slate max-w-none">
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Investor Relations</h1>
        <p className="lead font-serif italic text-slate-600">
          RivicQ is currently raising a Pre-Seed round (€300K–€500K) to accelerate the development of our CryptoBOM SaaS and HSM integration layer.
        </p>
      </header>

      <section className="mb-16">
        <h3>Investment Memo Highlights</h3>
        <div className="grid md:grid-cols-2 gap-8 not-prose mt-8">
          <div className="p-6 border border-slate-100 rounded-2xl bg-white shadow-sm">
            <h4 className="text-red-600 font-bold uppercase tracking-widest text-[10px] mb-2">The Problem</h4>
            <p className="text-sm text-slate-600 leading-relaxed m-0">
              The global encryption standard (RSA/ECC) is expiring. Regulatory mandates (PCI DSS v4.0, DORA, NIS2) are forcing enterprises to adopt Post-Quantum Cryptography now.
            </p>
          </div>
          <div className="p-6 border border-slate-100 rounded-2xl bg-white shadow-sm">
            <h4 className="text-blue-600 font-bold uppercase tracking-widest text-[10px] mb-2">The Solution</h4>
            <p className="text-sm text-slate-600 leading-relaxed m-0">
              RivicQ provides the "rails" for this transition: A B2B platform that discovers legacy crypto (CryptoBOM) and replaces it with NIST-standard, HSM-backed quantum-safe keys.
            </p>
          </div>
        </div>
        
        <div className="mt-8 space-y-4">
          <h4 className="font-bold text-slate-900">Traction</h4>
          <ul>
              <li>Leap Berlin Quantum Accelerator Resident</li>
              <li>Exists Program Applicant (BMWi)</li>
              <li>Academic partnerships with TU Berlin</li>
          </ul>

          <h4 className="font-bold text-slate-900">Use of Funds</h4>
          <ul>
              <li><strong>40% Product:</strong> Engineering the SaaS platform and SDKs.</li>
              <li><strong>30% Team:</strong> Hiring senior cryptographers and backend engineers.</li>
              <li><strong>20% Go-to-Market:</strong> Pilot acquisition and certification costs.</li>
              <li><strong>10% Ops:</strong> IP protection and legal.</li>
          </ul>
        </div>
      </section>

      <section className="not-prose bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden mb-20">
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none text-blue-400">
          <Building2 size={300} />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 relative z-10">
          <div>
            <h2 className="text-white text-4xl font-serif font-bold mb-6 m-0">Partner with us.</h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              We are looking for strategic partners and investors who understand the gravity of the post-quantum transition. Download our full memo and deck to see the roadmap.
            </p>
            <a href="mailto:investors@rivic.xyz" className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-500 transition-all shadow-xl shadow-blue-500/20">
               <Send size={18}/> Connect with IR
            </a>
          </div>

          <div className="bg-white rounded-[2rem] p-8 shadow-2xl">
            {formSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-fadeIn">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-slate-900 text-2xl font-bold mb-2">Inquiry Sent</h3>
                <p className="text-slate-600">Thank you for your interest. Our IR team will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                  <input 
                    required 
                    type="text" 
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                  <input 
                    required 
                    type="email" 
                    placeholder="jane@fund.vc"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Inquiry Type</label>
                  <div className="relative">
                    <select 
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none cursor-pointer"
                      value={formData.inquiryType}
                      onChange={e => setFormData({...formData, inquiryType: e.target.value})}
                    >
                      <option>General Investment</option>
                      <option>Partnership Opportunity</option>
                      <option>Media Inquiry</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Message</label>
                  <textarea 
                    required 
                    placeholder="Tell us about your interest..."
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all min-h-[100px] resize-none"
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
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

const CheckCircle2: React.FC<{ size?: number, className?: string }> = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
    <path d="m9 12 2 2 4-4"></path>
  </svg>
);