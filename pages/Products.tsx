
import React from 'react';
import { Github, Layout, ArrowRight, CheckCircle2, Shield, Zap, Database, Globe, Lock, Server, Search } from 'lucide-react';
import ProductDemo from '../components/ProductDemo';

const ProductTier: React.FC<{
  title: string,
  price: string,
  badge?: string,
  features: string[],
  ctaText: string,
  ctaLink: string,
  isDark?: boolean
}> = ({ title, price, badge, features, ctaText, ctaLink, isDark }) => (
  <div className={`p-8 rounded-[2.5rem] border flex flex-col h-full transition-all duration-300 ${isDark ? 'bg-slate-900 border-slate-800 text-white shadow-2xl' : 'bg-white border-slate-200 text-slate-900 shadow-sm hover:border-blue-300'}`}>
    <div className="mb-6">
      {badge && (
        <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 ${isDark ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600'}`}>
          {badge}
        </span>
      )}
      <h3 className="text-2xl font-serif font-bold mb-2">{title}</h3>
      <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{price}</p>
    </div>
    
    <div className="flex-grow space-y-4 mb-8">
      {features.map((feat, i) => (
        <div key={i} className="flex items-start gap-3">
          <CheckCircle2 size={16} className={`shrink-0 mt-0.5 ${isDark ? 'text-emerald-400' : 'text-blue-600'}`} />
          <span className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{feat}</span>
        </div>
      ))}
    </div>

    <a 
      href={ctaLink} 
      target={ctaLink.startsWith('http') ? '_blank' : '_self'}
      className={`w-full py-4 rounded-xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all ${
        isDark 
        ? 'bg-blue-600 text-white hover:bg-blue-500' 
        : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
      }`}
    >
      {ctaText} {ctaLink.includes('github') ? <Github size={14}/> : <ArrowRight size={14}/>}
    </a>
  </div>
);

const Products: React.FC = () => {
  return (
    <article className="prose prose-slate max-w-none">
      <header className="mb-16 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[9px] font-bold uppercase tracking-[0.2em] mb-6">
          Product Suite v1.0
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-slate-900">
          CryptoBOM <span className="text-blue-600">SaaS.</span>
        </h1>
        <p className="text-xl text-slate-500 font-serif italic leading-relaxed">
          The world's first platform to automatically inventory, analyze, and secure your cryptographic assets against quantum threats.
        </p>
      </header>

      {/* Visual Demo Section */}
      <section className="not-prose mb-24">
        <ProductDemo />
        <div className="mt-6 flex justify-center gap-8 text-[10px] font-bold uppercase tracking-widest text-slate-400">
          <div className="flex items-center gap-2"><Search size={12}/> 1. Discover</div>
          <div className="flex items-center gap-2"><Database size={12}/> 2. Inventory</div>
          <div className="flex items-center gap-2"><Shield size={12}/> 3. Remediate</div>
        </div>
      </section>

      {/* Product Tiers */}
      <section className="mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-slate-900 m-0">Choose your Engine</h2>
          <p className="text-slate-500 mt-2">Open source for community, Enterprise for scale.</p>
        </div>

        <div className="not-prose grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* OSS Tier */}
          <ProductTier 
            title="Open Source (OSS)"
            price="Free Forever"
            badge="Community Edition"
            features={[
              "Local CLI Scanner",
              "Basic CryptoBOM Generation (JSON)",
              "Detects RSA/ECC/Weak Hash",
              "Community Support via GitHub"
            ]}
            ctaText="View on GitHub"
            ctaLink="https://github.com/rivic-q/cryptobom-saas"
          />

          {/* Enterprise Tier */}
          <ProductTier 
            title="Enterprise SaaS"
            price="Custom Pricing"
            badge="Coming Soon • Join Waitlist"
            isDark
            features={[
              "Continuous CI/CD Monitoring",
              "Automated NIST Remediation",
              "Cloud HSM Integration",
              "DORA & FIPS Compliance Reports",
              "24/7 Dedicated Support"
            ]}
            ctaText="Join Waitlist"
            ctaLink="mailto:rivic.revan.ande@gmail.com?subject=Enterprise Waitlist Request"
          />
        </div>
      </section>

      {/* Why CryptoBOM? */}
      <section className="mb-24">
        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-10">Why you need a CryptoBOM</h2>
        <div className="not-prose grid md:grid-cols-3 gap-6">
           <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100">
              <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 mb-4">
                 <Zap size={20}/>
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Instant Visibility</h4>
              <p className="text-sm text-slate-500 leading-relaxed">You can't fix what you can't see. We find every key, certificate, and algorithm hidden in your code.</p>
           </div>
           <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100">
              <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-emerald-600 mb-4">
                 <Lock size={20}/>
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Automated Compliance</h4>
              <p className="text-sm text-slate-500 leading-relaxed">Automatically generate the reports required by EU DORA and US NIST regulations.</p>
           </div>
           <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100">
              <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-purple-600 mb-4">
                 <Server size={20}/>
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Cloud HSM Ready</h4>
              <p className="text-sm text-slate-500 leading-relaxed">Seamlessly move identified weak keys into our secure Cloud Hardware Security Modules.</p>
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="not-prose bg-blue-600 text-white p-12 md:p-16 rounded-[3rem] text-center shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="relative z-10">
           <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-white m-0">Ready to Scan?</h2>
           <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
             Start with our open source tool today, or contact us to demo the full Enterprise platform.
           </p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <a href="https://github.com/rivic-q/cryptobom-saas" target="_blank" className="px-10 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all flex items-center gap-2 justify-center shadow-xl">
               <Github size={18}/> Download OSS
             </a>
             <a href="mailto:rivic.revan.ande@gmail.com?subject=Product Demo Request" className="px-10 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all flex items-center gap-2 justify-center">
               Book Enterprise Demo <ArrowRight size={18}/>
             </a>
           </div>
        </div>
      </section>
      
      <footer className="mt-12 text-center text-[10px] text-slate-400 uppercase tracking-widest font-bold">
        RivicQ Technologies • CryptoBOM Division
      </footer>
    </article>
  );
};

export default Products;
