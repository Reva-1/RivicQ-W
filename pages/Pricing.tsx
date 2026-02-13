
import React, { useState } from 'react';
import { Check, Send, ShieldCheck, Mail, Building2, User } from 'lucide-react';

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
        {price !== 'Custom' && <span className="text-slate-500 font-medium">/mo</span>}
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
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Sales: ${formData.name} (${formData.company})`);
    const body = encodeURIComponent(`Inquiry:\n${formData.message}\n\nFrom: ${formData.email}`);
    // Submit via mailto as requested
    window.location.href = `mailto:rivic.revan.ande@gmail.com?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 8000);
  };

  return (
    <article className="prose prose-lg prose-slate max-w-none">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Pricing & Plans</h1>
      <p className="lead font-serif italic text-slate-500 mb-12">
        Transparent pricing for quantum-safe products and classical security services.
      </p>

      <section className="mb-20">
        <div className="flex items-center gap-3 mb-10">
          <ShieldCheck className="text-blue-600" size={28} />
          <h2 className="m-0 font-serif text-3xl">Platform & SaaS</h2>
        </div>
        <div className="not-prose grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PricingCard 
            title="Community" price="Free" description="For researchers exploring PQC standards."
            features={["Open Source Agent", "CycloneDX Export", "Public Git Support"]}
            cta="Start Building"
          />
          <PricingCard 
            title="Business" price="€499" isFeatured badge="Most Popular"
            description="Full visibility for regulated microservices."
            features={["Continuous Scanning", "Central Dashboard", "Policy Enforcement"]}
            cta="Start Trial"
          />
          <PricingCard 
            title="Enterprise" price="Custom" badge="Q2 2026 Access"
            description="Control for mission-critical infrastructure."
            features={["Dedicated HSM clusters", "24/7 Support", "Compliance Reporting"]}
            cta="Contact Sales"
          />
        </div>
      </section>

      {/* Contact Sales Section */}
      <section id="contact-sales" className="not-prose scroll-mt-24 mb-24">
        <div className="bg-slate-50 rounded-[3rem] p-10 md:p-16 border border-slate-100 shadow-sm">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="p-3 bg-blue-600 text-white rounded-2xl w-fit mb-6">
                <Mail size={24} />
              </div>
              <h2 className="text-4xl font-serif font-bold mb-6 text-slate-900 m-0">Contact Sales</h2>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed max-w-md">
                Our specialized engineering team is ready to discuss your PQC migration path and enterprise security needs.
              </p>
              <div className="flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
                <Check size={16} className="text-emerald-500" /> Response within 24 hours
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl border border-slate-100">
              {formSubmitted ? (
                <div className="text-center py-12 animate-fadeIn">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <Check size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Inquiry Ready</h3>
                  <p className="text-slate-500 text-sm">Please complete the submission in your default email client.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                      <input required className="w-full px-5 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 transition-all" placeholder="John Doe" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                      <input required type="email" className="w-full px-5 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 transition-all" placeholder="j.doe@company.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Company</label>
                    <input required className="w-full px-5 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 transition-all" placeholder="Enterprise Infrastructure Ltd." value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Your Inquiry</label>
                    <textarea required className="w-full px-5 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 transition-all min-h-[140px] resize-none" placeholder="How can we help with your transition?" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
                  </div>
                  <button type="submit" className="w-full py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-blue-600 transition-all flex items-center justify-center gap-2 shadow-xl shadow-slate-200 uppercase tracking-widest text-xs mt-4">
                    Send Inquiry <Send size={16}/>
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
