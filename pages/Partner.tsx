
import React, { useState } from 'react';
import { Handshake, Percent, Award, Zap, ArrowRight, ShieldCheck, Users, Briefcase, Mail, Send, CheckCircle, Info, Loader2, Quote, Star, TrendingUp } from 'lucide-react';
import { aiService } from '../services/aiService';

const TierCard: React.FC<{ 
  title: string, 
  icon: React.ReactNode, 
  description: string, 
  benefits: string[], 
  accentColor: string 
}> = ({ title, icon, description, benefits, accentColor }) => (
  <div className="flex flex-col p-8 rounded-[2.5rem] border border-slate-200 bg-white hover:border-slate-400 hover:shadow-xl transition-all duration-300 group">
    <div className={`mb-6 w-12 h-12 rounded-xl flex items-center justify-center border border-slate-100 shadow-sm ${accentColor}`}>
      {icon}
    </div>
    <h3 className="text-xl font-serif font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-sm text-slate-500 leading-relaxed mb-6">{description}</p>
    <ul className="space-y-3 flex-grow m-0 p-0 list-none">
      {benefits.map((benefit, i) => (
        <li key={i} className="flex items-start gap-3 text-xs text-slate-600 font-medium">
          <CheckCircle size={14} className="text-slate-900 shrink-0 mt-0.5" />
          {benefit}
        </li>
      ))}
    </ul>
    <button className="mt-8 w-full py-3 rounded-lg border border-slate-900 text-slate-900 font-bold text-xs hover:bg-slate-900 hover:text-white transition-all uppercase tracking-widest">
      Partner Inquiry
    </button>
  </div>
);

const Partner: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ company: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await aiService.submitInquiry({
        type: 'PARTNERSHIP',
        name: 'Partner Applicant',
        email: formData.email,
        company: formData.company,
        message: formData.message
      });
      setFormSubmitted(true);
      setFormData({ company: '', email: '', message: '' });
    } catch (error) {
       alert("Server unreachable. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <article className="prose prose-slate max-w-none">
      <header className="mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 text-white text-[9px] font-bold uppercase tracking-[0.2em] mb-6">
          Strategic Ecosystem
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-slate-900">
          Scale with <br/><span className="text-blue-600">Quantum Trust.</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-500 font-serif italic leading-relaxed max-w-2xl">
          We provide the infrastructure. You provide the integration. Together, we secure the future of global digital identity.
        </p>
      </header>

      {/* Partner Success Stories Section */}
      <section className="mb-24 not-prose">
        <div className="flex items-center gap-3 mb-12">
          <div className="p-3 bg-blue-600 text-white rounded-2xl shadow-lg">
            <TrendingUp size={24} />
          </div>
          <div>
            <h2 className="m-0 text-3xl font-serif font-bold text-slate-900">Partner Success</h2>
            <p className="text-xs text-blue-600 font-bold uppercase tracking-widest mt-1">Growth & Mutual Benefits</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-10 bg-white border border-slate-100 rounded-[3rem] shadow-sm relative group hover:border-blue-200 transition-colors">
            <div className="absolute top-8 right-10 text-blue-600/10 group-hover:text-blue-600/20 transition-colors">
              <Quote size={64} fill="currentColor" />
            </div>
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-blue-500 text-blue-500" />)}
            </div>
            <p className="text-lg text-slate-700 font-serif italic leading-relaxed mb-8 relative z-10">
              "Partnering with RivicQ allowed us to capture a new tier of high-assurance clients. The integration of the RQSP protocol into our MSSP stack resulted in a 40% increase in contract value for our cryptographic consulting services. It's a true mutual growth engine."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-400">MJ</div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 m-0">Marcus Jensen</h4>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest m-0">CEO, NordSec Solutions</p>
              </div>
            </div>
          </div>

          <div className="p-10 bg-slate-900 text-white rounded-[3rem] shadow-xl relative group">
            <div className="absolute top-8 right-10 text-white/5 group-hover:text-white/10 transition-colors">
              <Quote size={64} fill="currentColor" />
            </div>
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-emerald-500 text-emerald-500" />)}
            </div>
            <p className="text-lg text-slate-300 font-serif italic leading-relaxed mb-8 relative z-10">
              "The RivicQ Partner Program gave us early access to NIST-finalized primitives that our competitors simply didn't have. This allowed us to lead the DORA compliance migration for three major banks last year. The technical support is unrivaled."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center font-bold text-white/30">SL</div>
              <div>
                <h4 className="text-sm font-bold text-white m-0">Sarah Lin</h4>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest m-0">CTO, InfraGuard Global</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discount with Us Section */}
      <section className="not-prose mb-24">
        <div className="bg-slate-50 border border-slate-200 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
            <Percent size={200} className="text-slate-900" />
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-white border border-slate-200 rounded-xl text-blue-600 shadow-sm">
                <Zap size={20} />
              </div>
              <div>
                <h2 className="text-2xl font-serif font-bold text-slate-900 m-0">Incentive Program</h2>
                <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest m-0">Discount with us</p>
              </div>
            </div>
            
            <p className="text-slate-600 text-base leading-relaxed mb-10 max-w-2xl">
              Our partner discounts are designed to accelerate the adoption of Post-Quantum Cryptography (PQC). We offer transparent, tiered incentives for infrastructure migration and client referrals.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm hover:border-blue-300 transition-colors">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-5xl font-bold text-slate-900">25%</span>
                  <span className="text-blue-600 font-bold uppercase text-[10px] tracking-widest">OFF</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3">Early Adopter Incentive</h4>
                <p className="text-xs text-slate-500 leading-relaxed m-0">
                  Applied to the first 12 months of service for all client referrals initiated by certified Infrastructure Partners.
                </p>
              </div>
              
              <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm hover:border-blue-300 transition-colors">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-5xl font-bold text-slate-900">15%</span>
                  <span className="text-blue-600 font-bold uppercase text-[10px] tracking-widest">OFF</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3">Service Bundle Rebate</h4>
                <p className="text-xs text-slate-500 leading-relaxed m-0">
                  Automatic discount when combining HSM-as-a-Service with our CryptoBOM Enterprise scanning suite (Available Q2 2026).
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <a href="#partner-form" className="px-8 py-4 bg-slate-900 text-white rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-blue-600 transition-all shadow-lg shadow-slate-200">
                Register for Discounts
              </a>
              <div className="flex items-center gap-2 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                <Info size={14} className="text-blue-500" /> Program Terms Apply
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Tiers */}
      <section className="not-prose mb-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Partnership Tiers</h2>
          <div className="h-1 w-12 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <TierCard 
            title="Infrastructure"
            icon={<Briefcase size={20} />}
            accentColor="text-blue-600 bg-blue-50"
            description="For cloud providers and data centers hosting FIPS 140-3 PQC native compute nodes."
            benefits={[
              "Wholesale Volume Pricing",
              "White-label Dashboard",
              "L3 Hardware Certification",
              "Dedicated DevOps Channel"
            ]}
          />
          <TierCard 
            title="Advisory / MSSP"
            icon={<Users size={20} />}
            accentColor="text-emerald-600 bg-emerald-50"
            description="For security consultancies guiding enterprises through the quantum transition journey."
            benefits={[
              "Client Referral Commissions",
              "Audit Readiness Toolkits",
              "Sales Training Access",
              "Partner Marketing Portal"
            ]}
          />
          <TierCard 
            title="Research / Lab"
            icon={<Handshake size={20} />}
            accentColor="text-purple-600 bg-purple-50"
            description="For academic hubs exploring lattice-based primitives and algorithmic optimization."
            benefits={[
              "Grant Collaboration Support",
              "Free HSM Compute Hours",
              "Direct R&D Pipeline",
              "Academic Sponsorship"
            ]}
          />
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 border-t border-slate-100">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="sticky top-24">
            <h2 className="text-4xl font-serif font-bold mb-8 text-slate-900">Secure the <br/> future with us.</h2>
            <div className="space-y-10">
              {[
                { title: "Technical Onboarding", desc: "Get direct access to our engineering team for seamless SDK integration." },
                { title: "Compliance Mapping", desc: "Official documentation for DORA, NIST, and BSI compliance reporting." },
                { title: "Market Growth", desc: "Gain qualified leads through our global Compliance Intelligence hub." }
              ].map((item, i) => (
                <div key={i} className="flex gap-5">
                  <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-slate-900 h-fit">
                    <Award size={20}/>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 m-0 mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-500 m-0 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-12 shadow-sm">
             <div className="text-center mb-10">
                <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center mx-auto mb-6">
                   <Mail size={24} />
                </div>
                <h3 className="font-serif font-bold text-2xl mb-2 m-0 text-slate-900">Partner Application</h3>
                <p className="text-sm text-slate-500 m-0">Tell us about your organization's goals.</p>
             </div>
             
             {formSubmitted ? (
               <div className="flex flex-col items-center justify-center h-full py-10 animate-fadeIn text-center">
                 <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
                   <CheckCircle size={24}/>
                 </div>
                 <h4 className="text-xl font-bold text-slate-900 mb-2">Application Received</h4>
                 <p className="text-slate-500 text-sm">A Partner Manager will review your details and reach out within 48 hours.</p>
               </div>
             ) : (
               <form id="partner-form" onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Company Name</label>
                    <input required value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} placeholder="Organization Ltd." className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-600 outline-none transition-all focus:bg-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Work Email</label>
                    <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} placeholder="partners@company.com" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-600 outline-none transition-all focus:bg-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Partnership Goals</label>
                    <textarea required value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} placeholder="Describe your interest in quantum-safe infrastructure..." className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-sm min-h-[140px] resize-none focus:ring-2 focus:ring-blue-600 outline-none transition-all focus:bg-white" />
                  </div>
                  <button type="submit" disabled={isSubmitting} className="w-full py-5 bg-slate-900 text-white font-bold rounded-xl hover:bg-blue-600 transition-all flex items-center justify-center gap-3 uppercase tracking-[0.2em] text-[10px] shadow-xl shadow-slate-100 disabled:opacity-50">
                    {isSubmitting ? <Loader2 size={16} className="animate-spin"/> : <><Send size={16}/> Submit Application</>}
                  </button>
               </form>
             )}
          </div>
        </div>
      </section>

    </article>
  );
};

export default Partner;
