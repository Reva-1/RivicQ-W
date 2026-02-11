import React, { useState } from 'react';
import { Check, Send, ShieldCheck, Mail, Target, Building2, User } from 'lucide-react';

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
        {price !== 'Custom' && price !== 'Request Quote' && <span className="text-slate-500 font-medium">/mo</span>}
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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`Sales Inquiry from ${formData.name} (${formData.company})`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\nInquiry:\n${formData.message}`);
    const mailto = `mailto:sales@rivic.xyz?subject=${subject}&body=${body}`;
    
    window.location.href = mailto;
    
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 8000);
  };

  return (
    <article className="prose prose-lg prose-slate max-w-none">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Pricing & Plans</h1>
      <p className="lead font-serif italic text-slate-500 mb-12">
        Transparent pricing for quantum-safe products and classical security services.
      </p>

      {/* Section 1: Platform & SaaS */}
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-10">
          <ShieldCheck className="text-blue-600" size={28} />
          <h2 className="m-0 font-serif text-3xl">Platform & SaaS</h2>
        </div>
        <div className="not-prose grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PricingCard 
            title="Community"
            price="Free"
            description="For developers and researchers exploring PQC standards."
            features={[
              "Open Source CryptoBOM Agent",
              "Standard CycloneDX Export",
              "Public GitHub Support",
              "NIST Standard Primitives"
            ]}
            cta="Start Building"
          />
          <PricingCard 
            title="Business"
            price="€499"
            isFeatured
            badge="Popular for Startups"
            description="Full visibility for regulated microservices under DORA/NIS2."
            features={[
              "Continuous CryptoBOM Scanning",
              "Centralized Dashboard",
              "Basic SIEM Integration",
              "Policy Enforcement Engine",
              "Business Hours Support"
            ]}
            cta="Start Trial"
          />
          <PricingCard 
            title="Enterprise"
            price="Custom"
            badge="Early Access Q2 2026"
            description="Strategic control for global, mission-critical infrastructure. Pre-register for the Q2 2026 SaaS rollout."
            features={[
              "Unlimited Scanning Nodes",
              "Automated Remediation PRs",
              "Dedicated HSM Clusters",
              "24/7 Critical Support",
              "Custom Compliance Reporting"
            ]}
            cta="Contact Sales"
          />
        </div>
      </section>

      <hr className="my-16 border-slate-100" />

      {/* Section 2: Professional Services */}
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-4">
          <Target className="text-red-600" size={28} />
          <h2 className="m-0 font-serif text-3xl">Classical Security Services</h2>
        </div>
        <p className="text-slate-500 italic font-serif mb-10">
          High-end offensive security and compliance advisory for high-growth tech companies.
        </p>

        <div className="not-prose grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PricingCard 
            title="Startup Audit"
            price="Request Quote"
            badge="Fixed Price"
            description="Essential security baseline for startups seeking certification or funding."
            features={[
              "Comprehensive Web App Pentest",
              "ISO 27001 Gap Analysis",
              "Basic Vulnerability Scan",
              "Detailed Remediation Report",
              "Re-test within 30 days"
            ]}
            cta="Get Startup Quote"
          />
          <PricingCard 
            title="Advanced Security"
            price="Request Quote"
            isFeatured
            badge="Scale-up Choice"
            description="Continuous protection for companies with active production traffic."
            features={[
              "Quarterly Red Teaming",
              "Managed Vulnerability Scans",
              "DORA / NIS2 Readiness Audit",
              "API & Cloud Security Review",
              "Direct Slack Support"
            ]}
            cta="Book Consultation"
          />
          <PricingCard 
            title="Strategic Defense"
            price="Custom"
            badge="Enterprise Service"
            description="Full-scope partnership for global infrastructure security."
            features={[
              "Ongoing APT Simulations",
              "Full PQC Migration Advisory",
              "DevSecOps Pipeline Design",
              "Dedicated Security Architect",
              "Incident Response Retainer"
            ]}
            cta="Contact Sales"
          />
        </div>
      </section>

      <hr className="my-16 border-slate-100" />

      {/* Simplified Contact Sales Section (Light Theme) */}
      <section id="contact-sales" className="not-prose scroll-mt-20">
        <div className="bg-slate-50 rounded-[3rem] p-8 md:p-16 border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none text-blue-600">
            <Mail size={400} />
          </div>

          <div className="grid md:grid-cols-2 gap-16 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-widest mb-6">
                Inquiry Hub
              </div>
              <h2 className="text-4xl font-serif font-bold mb-6 text-slate-900 m-0">Contact Sales</h2>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed max-w-md">
                Ready to future-proof your infrastructure? Our engineering team will help you find the right path for your compliance journey.
              </p>

              <div className="space-y-8">
                {[
                  { icon: <Building2 className="text-blue-600"/>, title: "Enterprise Solutions", desc: "Custom implementation for global infrastructure." },
                  { icon: <ShieldCheck className="text-emerald-600"/>, title: "Compliance Mapping", desc: "DORA, NIS2 & SOC2 ready architecture." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-xl border border-slate-100 shadow-sm shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="m-0 font-bold text-slate-900 text-sm">{item.title}</h4>
                      <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl shadow-slate-200/50 border border-slate-100">
              {formSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-fadeIn">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                    <Send size={24} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Request Ready</h3>
                  <p className="text-slate-600">Please complete the submission in your email client to notify our team.</p>
                  <button 
                    onClick={() => setFormSubmitted(false)}
                    className="mt-6 text-sm font-bold text-blue-600 hover:underline"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                      <div className="relative">
                        <User size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"/>
                        <input 
                          required 
                          type="text" 
                          className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none text-sm transition-all focus:bg-white" 
                          placeholder="Jane Doe"
                          value={formData.name}
                          onChange={e => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Work Email</label>
                      <div className="relative">
                        <Mail size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"/>
                        <input 
                          required 
                          type="email" 
                          className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none text-sm transition-all focus:bg-white" 
                          placeholder="jane@company.com"
                          value={formData.email}
                          onChange={e => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Company Name</label>
                    <div className="relative">
                      <Building2 size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"/>
                      <input 
                        required 
                        type="text" 
                        className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none text-sm transition-all focus:bg-white" 
                        placeholder="Organization Ltd."
                        value={formData.company}
                        onChange={e => setFormData({...formData, company: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Your Inquiry</label>
                    <textarea 
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none text-sm min-h-[140px] resize-none transition-all focus:bg-white" 
                      placeholder="Tell us about your infrastructure goals..."
                      value={formData.message}
                      onChange={e => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>

                  <button type="submit" className="w-full py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-blue-600 transition-all flex items-center justify-center gap-2 shadow-lg shadow-slate-200">
                    Submit Inquiry <Send size={16}/>
                  </button>
                  
                  <p className="text-[9px] text-center text-slate-400 mt-4 px-4 leading-relaxed uppercase tracking-tight font-bold">
                    Encrypted Connection • Verified Sales Channel
                  </p>
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