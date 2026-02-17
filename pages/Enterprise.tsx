
import React, { useState, useEffect } from 'react';
import { ShieldCheck, ArrowRight, Lock, Zap, Activity, Cloud, Search, CheckCircle2, ShieldAlert, Cpu, Globe, Server, Database, RefreshCw, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const EndToEndDemo: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    {
      title: "Discovery",
      icon: <Search size={24} />,
      desc: "Our AI scanner crawls your infrastructure and code repositories.",
      status: "Scanning: /auth/v1/certificates",
      color: "blue"
    },
    {
      title: "Inventory",
      icon: <Database size={24} />,
      desc: "Every weak 'lock' (RSA/ECC) is cataloged into a CryptoBOM.",
      status: "Found: 12 Vulnerable Primitives",
      color: "indigo"
    },
    {
      title: "Transformation",
      icon: <RefreshCw size={24} />,
      desc: "Legacy keys are imported and wrapped in NIST-standard PQC layers.",
      status: "Deploying ML-KEM-768",
      color: "emerald"
    },
    {
      title: "Fortification",
      icon: <Lock size={24} />,
      desc: "Keys are stored in FIPS 140-3 Cloud HSM vaults.",
      status: "Status: Post-Quantum Secured",
      color: "blue"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <div className="not-prose w-full bg-slate-900 rounded-[3rem] p-8 md:p-12 border border-slate-800 shadow-2xl overflow-hidden relative">
      <div className="absolute inset-0 bg-technical opacity-5"></div>
      
      <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
        {/* Left: Interactive Stepper */}
        <div className="w-full md:w-1/2 space-y-6">
          {steps.map((step, idx) => (
            <div 
              key={idx}
              className={`p-6 rounded-2xl border transition-all duration-500 flex items-start gap-4 ${
                activeStep === idx 
                  ? `bg-slate-800 border-blue-500 shadow-[0_0_30px_rgba(37,99,235,0.2)]` 
                  : 'bg-transparent border-slate-800 opacity-40'
              }`}
            >
              <div className={`p-3 rounded-xl ${activeStep === idx ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-500'}`}>
                {step.icon}
              </div>
              <div>
                <h4 className="text-white font-bold m-0 text-lg">{step.title}</h4>
                <p className="text-slate-400 text-sm mt-1 m-0">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Visualization Panel */}
        <div className="w-full md:w-1/2 flex items-center justify-center min-h-[400px]">
           <div className="relative w-full aspect-square max-w-[340px]">
              {/* Outer Ring */}
              <div className="absolute inset-0 border border-slate-800 rounded-full animate-spin-slow"></div>
              
              {/* Central Core */}
              <div className="absolute inset-8 border border-slate-800/50 rounded-full"></div>
              
              {/* Active Visualizer */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center animate-fadeIn">
                   <div className={`w-24 h-24 rounded-[2rem] flex items-center justify-center mx-auto mb-6 shadow-2xl ${activeStep === 3 ? 'bg-emerald-600 text-white' : 'bg-blue-600 text-white shadow-blue-500/20'}`}>
                      {steps[activeStep].icon}
                   </div>
                   <div className="font-mono text-[10px] text-blue-400 tracking-[0.2em] uppercase font-bold mb-2">
                      RivicQ Core OS
                   </div>
                   <div className="text-white font-bold text-sm h-6">
                      {steps[activeStep].status}
                   </div>
                   
                   {/* Progress Dots */}
                   <div className="flex justify-center gap-1.5 mt-6">
                      {steps.map((_, i) => (
                        <div key={i} className={`h-1 rounded-full transition-all duration-500 ${activeStep === i ? 'w-6 bg-blue-500' : 'w-2 bg-slate-700'}`}></div>
                      ))}
                   </div>
                </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

const Enterprise: React.FC = () => {
  return (
    <article className="prose prose-slate max-w-none">
      <header className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-[9px] font-bold uppercase tracking-[0.2em] mb-6 shadow-sm">
          FIPS 140-3 • Global Tier 1 Infrastructure
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-slate-900 leading-tight">
          Sovereign Security <br/>at <span className="text-blue-600">Global Scale.</span>
        </h1>
        <p className="text-xl text-slate-500 font-serif italic max-w-3xl leading-relaxed">
          RivicQ Enterprise provides the high-assurance foundation for the world's most critical infrastructures. We don't just secure data; we secure permanence.
        </p>
      </header>

      {/* End-to-End Demo Section */}
      <section className="mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-slate-900 m-0">The End-to-End Experience</h2>
          <p className="text-slate-500 text-sm mt-2 uppercase tracking-widest font-bold">Automated Migration Lifecycle</p>
        </div>
        <EndToEndDemo />
      </section>

      {/* Enterprise Pillars */}
      <section className="py-24 border-y border-slate-100 not-prose mb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
           {[
             { title: "SLA Guaranteed", desc: "99.999% uptime for cryptographic operations across global regions.", icon: <Activity className="text-blue-600"/> },
             { title: "Dedicated vHSM", desc: "Physically isolated hardware segments for Tier 1 compliance.", icon: <Server className="text-emerald-600"/> },
             { title: "Active CBOM", desc: "Continuous auditing of every cryptographic bill of materials.", icon: <Layers className="text-indigo-600"/> },
             { title: "PQC Orchestration", desc: "NIST-standardized migration paths enforced by policy.", icon: <Zap className="text-amber-600"/> }
           ].map((item, i) => (
             <div key={i} className="p-8 border border-slate-100 rounded-[2.5rem] bg-white hover:border-blue-200 transition-all shadow-sm">
                <div className="p-3 bg-slate-50 rounded-xl w-fit mb-6 border border-slate-100">
                  {item.icon}
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed m-0">{item.desc}</p>
             </div>
           ))}
        </div>
      </section>

      {/* Regulatory Context */}
      <section className="mb-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Designed for Compliance.</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              RivicQ Enterprise maps directly to global mandates like <strong>EU DORA</strong>, <strong>NIS2</strong>, and <strong>CNSA 2.0</strong>. We provide the proof of resilience required by modern regulators.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-blue-50 border border-blue-100 rounded-2xl">
                <CheckCircle2 size={18} className="text-blue-600"/>
                <span className="text-sm font-bold text-blue-900">NIST FIPS 203/204 Compliant</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-100 rounded-2xl">
                <ShieldCheck size={18} className="text-emerald-600"/>
                <span className="text-sm font-bold text-emerald-900">GDPR & Sovereign Compute Ready</span>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 rounded-[3rem] p-12 border border-slate-200 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-5 text-slate-900">
               <Globe size={160} />
             </div>
             <h3 className="text-2xl font-serif font-bold text-slate-900 m-0 mb-6">Global Residency</h3>
             <ul className="space-y-4 m-0 p-0 list-none">
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div> Berlin Deep-Tech Hub (HQ)
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <div className="w-2 h-2 rounded-full bg-slate-400"></div> Frankfurt Financial Mesh
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <div className="w-2 h-2 rounded-full bg-slate-400"></div> AWS Nitro Enclaves Support
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <div className="w-2 h-2 rounded-full bg-slate-400"></div> Google Cloud HSM Integration
                </li>
             </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="not-prose bg-blue-600 text-white p-12 md:p-16 rounded-[4rem] text-center shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-technical opacity-10"></div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white m-0">Scale with Security.</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto italic leading-relaxed">
            Join the elite circle of enterprises defining the post-quantum standard. Our strategic engineers are ready to scope your migration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/pricing" className="px-10 py-4 bg-slate-900 text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-slate-800 transition-all shadow-xl">
              Contact Enterprise Sales
            </Link>
          </div>
        </div>
      </section>

      <footer className="mt-12 text-center text-[10px] text-slate-400 uppercase tracking-widest font-bold">
        RivicQ Technologies • Enterprise Division
      </footer>
    </article>
  );
};

export default Enterprise;
