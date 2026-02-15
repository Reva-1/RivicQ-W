
import React, { useState } from 'react';
import { Check, Send, ShieldCheck, Mail, Briefcase, Zap, Shield, Loader2, AlertTriangle, FileText, Clock } from 'lucide-react';
import { aiService } from '../services/aiService';

const PricingCard: React.FC<{ 
  title: string, 
  price: string, 
  description: string, 
  features: string[], 
  isFeatured?: boolean,
  cta: string,
  badge?: string
}> = ({ title, price, description, features, isFeatured, cta, badge }) => (
  <div className={`flex flex-col p-8 rounded-3xl border transition-all duration-300 relative ${
    isFeatured 
      ? 'border-blue-600 shadow-2xl shadow-blue-100 bg-white ring-2 ring-blue-600 ring-offset-4' 
      : 'border-slate-100 bg-slate-50 hover:border-slate-300'
  }`}>
    {badge && (
      <span className="absolute -top-3 left-8 bg-slate-900 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
        {badge}
      </span>
    )}
    <div className="mb-8">
      <h3 className="text-xl font-serif font-bold text-slate-900 m-0 mb-2">{title}</h3>
      <div className="flex items-baseline gap-1 mb-4">
        <span className="text-4xl font-bold tracking-tight text-slate-900">{price}</span>
        {/* Only show /mo if price looks like a monthly fee */}
        {['Free', 'Custom', 'Inquire', 'Contact'].indexOf(price) === -1 && <span className="text-slate-500 font-medium">/mo</span>}
      </div>
      <p className="text-sm text-slate-600 leading-relaxed min-h-[40px]">{description}</p>
    </div>
    
    <div className="flex-grow space-y-4 mb-8">
      {features.map((feature, i) => (
        <div key={i} className="flex items-start gap-3">
          <div className={`mt-0.5 rounded-full p-0.5 ${isFeatured ? 'bg-blue-100 text-blue-600' : 'bg-slate-200 text-slate-600'}`}>
            <Check size={12} />
          </div>
          <span className="text-sm text-slate-700">{feature}</span>
        </div>
      ))}
    </div>

    <a 
      href="#contact-sales" 
      className={`w-full py-4 rounded-xl font-bold text-sm text-center transition-all ${
        isFeatured 
          ? 'bg-blue-600 text-white hover:bg-blue-700' 
          : 'bg-white border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white'
      }`}
    >
      {cta}
    </a>
  </div>
);

const Pricing: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '', timeline: 'Immediate' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await aiService.submitInquiry({
        type: 'SALES_PILOT',
        ...formData
      });
      setFormSubmitted(true);
      setFormData({ name: '', email: '', company: '', message: '', timeline: 'Immediate' });
    } catch (error) {
      alert("Unable to reach the server. Please check your connection or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <article className="prose prose-lg prose-slate max-w-none">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Pricing & Plans</h1>
      <p className="lead font-serif italic text-slate-500 mb-12">
        Transparent pricing for quantum-safe products and professional security services.
      </p>

      {/* CryptoBOM SaaS Section */}
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-10">
          <Zap className="text-blue-600" size={28} />
          <h2 className="m-0 font-serif text-3xl">CryptoBOM SaaS</h2>
        </div>
        <div className="not-prose grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PricingCard 
            title="Community" 
            price="Free" 
            description="For researchers and developers exploring PQC standards."
            features={["Open Source Agent", "Local JSON Export", "Public Git Scanning", "Community Support"]}
            cta="Start Building"
          />
          <PricingCard 
            title="Pilot Program" 
            price="Inquire" 
            isFeatured 
            badge="Limited Slots"
            description="Proof-of-Concept validation for organizations starting their migration."
            features={["Deep Scan Analysis", "Remediation Roadmap", "Dedicated Engineer Support", "1 Month Access"]}
            cta="Request Pilot"
          />
          <PricingCard 
            title="PQC Enterprise" 
            price="€5,000" 
            badge="Full Suite"
            description="Total infrastructure control for regulated industries."
            features={["Continuous Monitoring", "Cloud HSM Integration", "DORA Compliance Reports", "24/7 SLA Support"]}
            cta="Contact Sales"
          />
        </div>
      </section>

      {/* CSaaS Section */}
      <section className="mb-24">
        <div className="flex items-center gap-3 mb-10">
          <Shield className="text-indigo-600" size={28} />
          <h2 className="m-0 font-serif text-3xl">Cyber Security as a Service (CSaaS)</h2>
        </div>
        <p className="text-slate-600 mb-8">
          On-demand security expertise to harden your infrastructure against current and future threats.
        </p>
        <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-8">
           <PricingCard 
             title="Strategic Advisory" 
             price="Contact" 
             description="Leadership guidance for compliance and architecture."
             features={["vCISO Services", "NIS2 & DORA Gap Analysis", "PQC Migration Strategy", "Architecture Review"]}
             cta="Get Quote"
           />
           <PricingCard 
             title="Offensive Security" 
             price="Contact" 
             description="Technical validation of your defenses."
             features={["Red Teaming", "Penetration Testing (Web/Cloud)", "Smart Contract Audits", "Hardware Side-Channel Analysis"]}
             cta="Get Quote"
           />
        </div>
      </section>

      {/* Contact Sales Section */}
      <section id="contact-sales" className="not-prose scroll-mt-24 mb-24">
        <div className="bg-slate-50 rounded-[3rem] p-10 md:p-16 border border-slate-100 shadow-sm">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left: Problems We Solve */}
            <div>
              <div className="p-3 bg-blue-600 text-white rounded-2xl w-fit mb-6">
                <Mail size={24} />
              </div>
              <h2 className="text-4xl font-serif font-bold mb-6 text-slate-900 m-0">Secure Your Infrastructure</h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Our engineering team is ready to scope your Pilot or Enterprise needs. Tell us what challenge you are facing.
              </p>

              <div className="space-y-6">
                 <div className="flex gap-4">
                    <div className="mt-1">
                      <AlertTriangle size={18} className="text-amber-500" />
                    </div>
                    <div>
                       <h4 className="font-bold text-slate-900 text-sm m-0">Regulatory Pressure?</h4>
                       <p className="text-xs text-slate-500 m-0 mt-1">Need DORA or NIST compliance reports for auditors.</p>
                    </div>
                 </div>
                 <div className="flex gap-4">
                    <div className="mt-1">
                      <Clock size={18} className="text-blue-500" />
                    </div>
                    <div>
                       <h4 className="font-bold text-slate-900 text-sm m-0">Legacy Debt?</h4>
                       <p className="text-xs text-slate-500 m-0 mt-1">Found hardcoded RSA-2048 keys in critical infrastructure.</p>
                    </div>
                 </div>
                 <div className="flex gap-4">
                    <div className="mt-1">
                      <FileText size={18} className="text-emerald-500" />
                    </div>
                    <div>
                       <h4 className="font-bold text-slate-900 text-sm m-0">Budgeting PQC?</h4>
                       <p className="text-xs text-slate-500 m-0 mt-1">Need a Pilot to validate costs before full migration.</p>
                    </div>
                 </div>
              </div>
            </div>

            {/* Right: The Form */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl border border-slate-100">
              {formSubmitted ? (
                <div className="text-center py-12 animate-fadeIn">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <Check size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Request Received</h3>
                  <p className="text-slate-500 text-sm">Our sales engineering team will review your requirements and contact you within 24 hours.</p>
                  <button onClick={() => setFormSubmitted(false)} className="mt-6 text-blue-600 text-xs font-bold uppercase tracking-widest hover:underline">Send another request</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                      <input required className="w-full px-5 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 transition-all" placeholder="John Doe" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Work Email</label>
                      <input required type="email" className="w-full px-5 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 transition-all" placeholder="name@company.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Company</label>
                      <input required className="w-full px-5 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 transition-all" placeholder="Organization Ltd." value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Timeline</label>
                      <select className="w-full px-5 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 transition-all appearance-none" value={formData.timeline} onChange={e => setFormData({...formData, timeline: e.target.value})}>
                        <option value="Immediate">Immediate (Audit/Breach)</option>
                        <option value="Q3 2026">Q3 2026 (Planning)</option>
                        <option value="2027+">2027+ (Research)</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Challenge / Inquiry</label>
                    <textarea required className="w-full px-5 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 transition-all min-h-[140px] resize-none" placeholder="We are looking to migrate our core banking signing keys to PQC..." value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
                  </div>
                  <button type="submit" disabled={isSubmitting} className="w-full py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-blue-600 transition-all flex items-center justify-center gap-2 shadow-xl shadow-slate-200 uppercase tracking-widest text-xs mt-4 disabled:opacity-50 disabled:cursor-not-allowed">
                    {isSubmitting ? <Loader2 size={16} className="animate-spin"/> : <><Send size={16}/> Submit Request</>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Pricing;
