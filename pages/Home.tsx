
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight, Lock, Zap, Activity, Cloud, Search, CheckCircle2, ShieldAlert, Cpu, Globe, Info, Target, Users, Microscope, Database, RefreshCw, Layers, Terminal, Server, CreditCard, Key, Settings, BarChart3 } from 'lucide-react';
import HSMBlueprint from '../components/HSMBlueprint';

const EndToEndScope: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    {
      title: "1. AI Discovery",
      icon: <Search className="text-blue-500" />,
      desc: "Scan codebases and cloud VPCs to find hidden cryptographic liabilities.",
      action: "SaaS Layer: GitHub/GitLab Scanners",
      bg: "bg-blue-50"
    },
    {
      title: "2. Dynamic Inventory",
      icon: <Database className="text-indigo-500" />,
      desc: "Generate a live Cryptographic Bill of Materials (CryptoBOM) for compliance.",
      action: "Asset Layer: CycloneDX Reporting",
      bg: "bg-indigo-50"
    },
    {
      title: "3. HSM Transformation",
      icon: <RefreshCw className="text-emerald-500" />,
      desc: "Wrap vulnerable keys in NIST-standard PQC layers within physical vaults.",
      action: "Hardware Layer: FIPS 140-3 HSM",
      bg: "bg-emerald-50"
    },
    {
      title: "4. Unified Governance",
      icon: <Settings className="text-slate-900" />,
      desc: "Manage multi-tenant isolation, policies, and quantum-safe identity.",
      action: "Orchestration Layer: RQSP Control Plane",
      bg: "bg-slate-100"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep(s => (s + 1) % steps.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="not-prose grid lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-white p-6 md:p-16 rounded-[2.5rem] md:rounded-[4rem] border border-slate-100 shadow-sm relative overflow-hidden">
      <div className="absolute inset-0 bg-technical opacity-5"></div>
      
      <div className="relative z-10 space-y-4 md:space-y-6 order-2 lg:order-1">
        {steps.map((step, i) => (
          <div key={i} className={`flex items-start gap-4 p-4 md:p-6 rounded-2xl md:rounded-3xl transition-all duration-500 border ${activeStep === i ? 'bg-white border-blue-100 shadow-xl scale-[1.02]' : 'bg-transparent border-transparent opacity-40 scale-95'}`}>
            <div className={`p-2 md:p-3 rounded-xl md:rounded-2xl ${activeStep === i ? step.bg : 'bg-slate-50'}`}>
              {step.icon}
            </div>
            <div>
              <h4 className="text-base md:text-lg font-bold text-slate-900 m-0">{step.title}</h4>
              <p className="text-xs md:text-sm text-slate-500 mt-1 m-0">{step.desc}</p>
              {activeStep === i && <p className="text-[9px] md:text-[10px] font-bold text-blue-600 uppercase mt-2 md:mt-3 tracking-widest">{step.action}</p>}
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-[300px] md:min-h-[400px] order-1 lg:order-2">
        <div className="w-full aspect-square max-w-[280px] md:max-w-[320px] rounded-full border-2 border-slate-100 flex flex-col items-center justify-center p-6 md:p-8 text-center animate-fadeIn relative group">
           <div className="absolute inset-0 border-2 border-dashed border-blue-200 rounded-full animate-spin-slow"></div>
           <div className={`w-16 h-16 md:w-24 md:h-24 rounded-[1.5rem] md:rounded-[2.5rem] flex items-center justify-center mb-4 md:mb-6 shadow-2xl transition-colors duration-1000 ${activeStep === 3 ? 'bg-emerald-600 text-white' : 'bg-blue-600 text-white'}`}>
             {steps[activeStep].icon}
           </div>
           <div className="font-mono text-[9px] md:text-[10px] text-blue-500 font-bold uppercase tracking-widest mb-2">Operational Scope</div>
           <div className="text-slate-900 font-bold text-base md:text-lg leading-tight h-14">{steps[activeStep].action}</div>
        </div>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <article className="prose prose-slate max-w-none">
      
      {/* 1. Hero Section */}
      <section className="pt-6 md:pt-16 mb-20 px-4 md:px-0">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 text-white text-[9px] font-bold uppercase tracking-[0.2em] mb-8 shadow-sm">
            <Activity size={10} className="text-blue-400 animate-pulse"/>
            System Status: R&D Lab • Berlin Innovation
          </div>
          
          {/* RivicQ Full Name Section */}
          <div className="mb-4">
             <p className="text-[10px] md:text-[12px] font-mono font-bold text-blue-600 uppercase tracking-[0.4em] mb-4 border-l-2 border-blue-600 pl-4">
               Robust Integrated Verified Infrastructure <br className="md:hidden" /> Computing & Quantum
             </p>
             <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-[0.95] tracking-tight text-slate-900">
               Secure your <br/>infrastructure for the <span className="text-blue-600">next 50 years.</span>
             </h1>
          </div>

          <p className="text-xl md:text-2xl text-slate-500 font-serif italic leading-relaxed m-0 max-w-3xl">
            Building the transition layer between legacy encryption and the quantum future. RivicQ provides high-assurance cryptographic resilience.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 not-prose mt-12">
            <a href="#scope" className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl shadow-slate-200 flex items-center justify-center gap-2 group">
              See the Scope <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform"/>
            </a>
            <Link to="/pricing" className="px-10 py-5 bg-white border border-slate-200 text-slate-600 rounded-2xl font-bold text-xs uppercase tracking-widest hover:border-slate-900 transition-all text-center">
              Request Lab Access
            </Link>
          </div>
        </div>
      </section>

      {/* 2. End-to-End Scope */}
      <section id="scope" className="py-24 scroll-mt-24 px-4 md:px-0">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 m-0">The Full Lifecycle</h2>
          <p className="text-slate-500 text-xs md:text-sm mt-3 uppercase tracking-widest font-bold">End-to-End Cryptographic Resiliency</p>
        </div>
        <EndToEndScope />
      </section>

      {/* 3. Addressing the Enterprise Gaps: Roadmap Section */}
      <section className="py-24 border-y border-slate-100 bg-slate-50 -mx-8 md:-mx-16 px-8 md:px-16 not-prose">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 px-4">
            <h2 className="text-3xl font-serif font-bold text-slate-900 m-0">Roadmap to Enterprise Launch</h2>
            <p className="text-xs text-blue-600 font-bold uppercase tracking-[0.2em] mt-3">Closing the Critical Infrastructure Gaps</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-4 md:px-0">
            <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm">
               <div className="flex items-center gap-3 mb-6">
                 <Server size={20} className="text-blue-500"/>
                 <h4 className="text-sm font-bold text-slate-900 m-0 uppercase tracking-widest">SaaS Architecture</h4>
               </div>
               <ul className="space-y-3 m-0 p-0 text-xs text-slate-500">
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Cloud Deployment (Active)</li>
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div> Kratos Auth & Multi-tenancy</li>
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div> PostgreSQL Production Instance</li>
               </ul>
            </div>
            
            <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm">
               <div className="flex items-center gap-3 mb-6">
                 <Cpu size={20} className="text-indigo-500"/>
                 <h4 className="text-sm font-bold text-slate-900 m-0 uppercase tracking-widest">Quantum Engine</h4>
               </div>
               <ul className="space-y-3 m-0 p-0 text-xs text-slate-500">
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div> IBM Q / KIPU API Integration</li>
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div> Real-world Entanglement Validation</li>
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div> REST Enterprise Endpoints</li>
               </ul>
            </div>

            <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm">
               <div className="flex items-center gap-3 mb-6">
                 <CreditCard size={20} className="text-emerald-500"/>
                 <h4 className="text-sm font-bold text-slate-900 m-0 uppercase tracking-widest">Enterprise Operations</h4>
               </div>
               <ul className="space-y-3 m-0 p-0 text-xs text-slate-500">
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div> Stripe Payment & Subscriptions</li>
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div> Prometheus/Grafana Observability</li>
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div> SOC2 Readiness Audit</li>
               </ul>
            </div>

            <div className="p-8 bg-slate-900 rounded-3xl border border-slate-800 shadow-xl flex flex-col justify-center items-center text-center">
                <span className="text-blue-400 font-bold text-3xl mb-2">Q4 2025</span>
                <span className="text-slate-400 text-[10px] uppercase tracking-widest font-bold">Planned Enterprise Launch</span>
                <Link to="/roadmap" className="mt-6 text-white text-xs font-bold uppercase tracking-widest border-b border-blue-500 pb-1 hover:text-blue-400 transition-colors">See Detailed Roadmap</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Identity Triad */}
      <section className="py-24 border-y border-slate-100 not-prose px-4 md:px-0">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center border border-blue-100 shadow-sm">
              <Users size={24}/>
            </div>
            <h3 className="text-2xl font-serif font-bold text-slate-900 m-0">Who We Are</h3>
            <p className="text-sm text-slate-600 leading-relaxed m-0">
              A deep-tech team in Berlin building the bridge between today's vulnerable internet and tomorrow's quantum-resistant future.
            </p>
          </div>
          <div className="space-y-6">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center border border-emerald-100 shadow-sm">
              <Target size={24}/>
            </div>
            <h3 className="text-2xl font-serif font-bold text-slate-900 m-0">What We Do</h3>
            <p className="text-sm text-slate-600 leading-relaxed m-0">
              We find weak links in encryption and replace them with unbreakable, physical hardware-rooted security.
            </p>
          </div>
          <div className="space-y-6">
            <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center border border-indigo-100 shadow-sm">
              <Cpu size={24}/>
            </div>
            <h3 className="text-2xl font-serif font-bold text-slate-900 m-0">How We Do It</h3>
            <p className="text-sm text-slate-600 leading-relaxed m-0">
              Using AI to scan your code and dedicated physical hardware (HSMs) to store your new, quantum-safe secrets.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Hardware Visualization */}
      <section className="not-prose -mx-8 md:-mx-16 mb-24 bg-white py-12 md:py-24 border-y border-slate-50 px-4 md:px-0">
        <div className="px-8 md:px-16 mb-12 text-center">
            <h2 className="text-3xl font-serif font-bold text-slate-900 m-0">Rooted in Physics</h2>
            <p className="text-sm text-slate-500 mt-3 font-bold uppercase tracking-widest">Virtualized HSM Boundary (FIPS 140-3)</p>
        </div>
        <HSMBlueprint />
      </section>

      {/* 6. CTA */}
      <section className="py-24 text-center not-prose bg-slate-900 text-white rounded-[3rem] md:rounded-[4rem] px-8 md:px-16 mb-24 relative overflow-hidden shadow-2xl mx-4 md:mx-0">
        <div className="absolute inset-0 bg-technical opacity-5"></div>
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-white m-0 leading-tight">Ready for the <br className="md:hidden" /> Quantum Era?</h2>
          <p className="text-slate-400 text-base md:text-lg mb-12 max-w-xl mx-auto italic leading-relaxed">
            "The best time to secure your infrastructure was 5 years ago. The second best time is now."
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/pricing" className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-blue-500 transition-all shadow-xl shadow-blue-500/20 text-center">
              Get Started
            </Link>
            <a href="mailto:rivic.revan.ande@gmail.com" className="px-10 py-5 border border-slate-700 text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-white/5 transition-all text-center">
              Consult with an Engineer
            </a>
          </div>
        </div>
      </section>

    </article>
  );
};

export default Home;
