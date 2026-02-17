
import React, { useState } from 'react';
import { Check, Send, ShieldCheck, Mail, Briefcase, Zap, Shield, Loader2, AlertTriangle, FileText, Clock, Cloud } from 'lucide-react';
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
  <div className={`flex flex-col p-8 rounded-[3rem] border transition-all duration-300 relative ${
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
      className={`w-full py-4 rounded-xl font-bold text-xs uppercase tracking-widest text-center transition-all ${
        isFeatured 
          ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200' 
          : 'bg-white border border-slate-200 text-slate-900 hover:bg-slate-900 hover:text-white hover:border-slate-900'
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
      <h1 className="text-5xl font-bold mb-4 tracking-tight">Access & Pricing</h1>
      <p className="lead font-serif italic text-slate-500 mb-12">
        Infrastructure-grade security, simplified for modern adoption.
      </p>

      {/* Access Section */}
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-10">
          <Cloud className="text-blue-600" size={28} />
          <h2 className="m-0 font-serif text-3xl">Platform Access</h2>
        </div>
        <div className="not-prose grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PricingCard 
            title="Discovery (OSS)" 
            price="Free" 
            description="Open source code auditing for researchers and small projects."
            features={["CLI Scanner", "Local CBOM Output", "Public Repo Scanning", "Community Support"]}
            cta="Get Source Code"
          />
          <PricingCard 
            title="Pilot Mesh" 
            price="Inquire" 
            isFeatured 
            badge="Managed Transition"
            description="Full support for your first quantum-safe application migration."
            features={["Deep Scan & Inventory", "Managed Cloud HSM Access", "Remediation Roadmap", "1-on-1 Engineering Support"]}
            cta="Request Pilot Access"
          />
          <PricingCard 
            title="Sovereign Node" 
            price="Custom" 
            badge="Private HSM"
            description="Physically isolated hardware for regulated industries (Banking, Defense)."
            features={["Dedicated Hardware L3", "DORA Compliance Mesh", "24/7 Priority Support", "Full API Orchestration"]}
            cta="Contact Sales"
          />
        </div>
      </section>

      {/* Advisory Section */}
      <section className="mb-24">
        <div className="flex items-center gap-3 mb-10">
          <Shield className="text-indigo-600" size={28} />
          <h2 className="m-0 font-serif text-3xl">Expert Services</h2>
        </div>
        <p className="text-slate-600 mb-8">
          Beyond technology, we provide the strategy needed for a safe transition.
        </p>
        <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-8">
           <PricingCard 
             title="PQC Migration Strategy" 
             price="Consult" 
             description="Strategic roadmap for high-assurance sectors."
             features={["Compliance Gap Analysis", "Legacy Debt Discovery", "Board-level Reporting", "Migration Costing"]}
             cta="Request Scoping"
           />
           <PricingCard 
             title="Red Team: Quantum" 
             price="Consult" 
             description="Validation of your current defenses against future threats."
             features={["Adversary Simulation", "Hardware Audit", "Encapsulation Review", "Defensive Hardening"]}
             cta="Request Scoping"
           />
        </div>
      </section>

      {/* Contact Sales Section */}
      <section id="contact-sales" className="not-prose scroll-mt-24 mb-24">
        <div className="bg-slate-900 rounded-[4rem] p-10 md:p-20 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-technical opacity-10"></div>
          <div className="grid lg:grid-cols-2 gap-16 items-start relative z-10">
            
            <div>
              <div className="p-3 bg-blue-600 text-white rounded-2xl w-fit mb-6">
                <Mail size={24} />
              </div>
              <h2 className="text-4xl font-serif font-bold mb-6 text-white m-0">Consult our Engineers</h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Whether you need a Pilot slot or an architectural review, our team in Berlin is ready to assist.
              </p>

              <div className="space-y-6">
                 <div className="flex gap-4">
                    <div className="mt-1">
                      <AlertTriangle size={18} className="text-amber-500" />
                    </div>
                    <div>
                       <h4 className="font-bold text-white text-sm m-0">Regulatory Pressure?</h4>
                       <p className="text-xs text-slate-500 m-0 mt-1">Ask us about DORA Article 9 compliance mapping.</p>
                    </div>
                 </div>
                 <div className="flex gap-4">
                    <div className="mt-1">
                      <Clock size={18} className="text-blue-500" />
                    </div>
                    <div>
                       <h4 className="font-bold text-white text-sm m-0">Timing is Critical</h4>
                       <p className="text-xs text-slate-500 m-0 mt-1">Average PQC migration takes 18-36 months. Start the clock now.</p>
                    </div>
                 </div>
              </div>
            </div>

            <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl">
              {formSubmitted ? (
                <div className="text-center py-12 animate-fadeIn">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <Check size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Received</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">Our infrastructure team will review your requirements and respond within 24 hours.</p>
                  <button onClick={() => setFormSubmitted(false)} className="mt-8 text-blue-600 text-xs font-bold uppercase tracking-widest hover:underline">New Communication</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                      <input required className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 text-slate-900 transition-all" placeholder="John Doe" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Email</label>
                      <input required type="email" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 text-slate-900 transition-all" placeholder="john@company.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Company / Organization</label>
                    <input required className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 text-slate-900 transition-all" placeholder="Global Infrastructure Ltd." value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Message</label>
                    <textarea required className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 text-slate-900 transition-all min-h-[140px] resize-none" placeholder="How can we help you prepare for the quantum transition?" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
                  </div>
                  <button type="submit" disabled={isSubmitting} className="w-full py-5 bg-slate-900 text-white font-bold rounded-2xl hover:bg-blue-600 transition-all flex items-center justify-center gap-3 shadow-xl uppercase tracking-widest text-xs disabled:opacity-50">
                    {isSubmitting ? <Loader2 size={16} className="animate-spin"/> : <><Send size={16}/> Submit Inquiry</>}
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
