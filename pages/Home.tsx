
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight, Lock, Zap, Activity, Cloud, Search, CheckCircle2, ShieldAlert, Cpu, Globe, Info, Target, Users, Microscope, Database, RefreshCw, Layers, Terminal, Server, CreditCard, Key, Settings, BarChart3, Landmark, Box, Github } from 'lucide-react';
import HSMBlueprint from '../components/HSMBlueprint';

const EcosystemSection: React.FC = () => (
  <section className="not-prose py-24 border-y border-slate-100 bg-white -mx-8 md:-mx-16 px-8 md:px-16">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-sm font-bold text-slate-400 uppercase tracking-[0.4em] mb-4">Strategic Ecosystem & Support</h2>
        <div className="h-px w-24 bg-blue-600 mx-auto"></div>
      </div>

      {/* Tier 1: Academic & Institutional Foundation */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-20 items-center opacity-70 hover:opacity-100 transition-opacity duration-500">
        <div className="flex flex-col items-center group">
          <div className="p-4 bg-slate-50 rounded-2xl mb-3 group-hover:bg-blue-50 transition-colors">
            <Landmark size={32} className="text-slate-900" />
          </div>
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest text-center">SIB Berlin<br/><span className="text-[8px] font-medium">Investitionsbank</span></span>
        </div>
        <div className="flex flex-col items-center group">
          <div className="p-4 bg-slate-50 rounded-2xl mb-3 group-hover:bg-blue-50 transition-colors">
            <Activity size={32} className="text-blue-600" />
          </div>
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest text-center">Leap Berlin<br/><span className="text-[8px] font-medium">Quantum Hub</span></span>
        </div>
        <div className="flex flex-col items-center group">
          <div className="p-4 bg-slate-50 rounded-2xl mb-3 group-hover:bg-blue-50 transition-colors">
            <Microscope size={32} className="text-slate-900" />
          </div>
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest text-center">TU Berlin<br/><span className="text-[8px] font-medium">Security in IT</span></span>
        </div>
      </div>

      {/* Tier 2: Technical Infrastructure Partners */}
      <div className="bg-slate-50 rounded-[3rem] p-10 md:p-16 border border-slate-100">
        <h3 className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.3em] text-center mb-12">Integrated Infrastructure Stack</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-12 items-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
          <div className="flex flex-col items-center gap-2">
            <Cpu size={28} className="text-blue-600"/>
            <span className="text-[9px] font-bold text-slate-900 uppercase tracking-widest">IBM Q</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Cloud size={28} className="text-blue-500"/>
            <span className="text-[9px] font-bold text-slate-900 uppercase tracking-widest">GCP</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Github size={28} className="text-slate-900"/>
            <span className="text-[9px] font-bold text-slate-900 uppercase tracking-widest">GitHub</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Box size={28} className="text-orange-500"/>
            <span className="text-[9px] font-bold text-slate-900 uppercase tracking-widest">AWS</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Zap size={28} className="text-indigo-600"/>
            <span className="text-[9px] font-bold text-slate-900 uppercase tracking-widest">KIPU Q</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Settings size={28} className="text-emerald-600"/>
            <span className="text-[9px] font-bold text-slate-900 uppercase tracking-widest">Q-CTRL</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const EndToEndScope: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    {
      title: "1. AI Discovery",
      icon: <Search className="text-blue-500" />,
      desc: "Scan codebases and cloud VPCs to find hidden cryptographic liabilities.",
      action: "SaaS Layer: Infrastructure Scanners",
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
      action: "Orchestration Layer: Control Plane",
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
            System Status: Operational • Berlin Innovation Labs
          </div>
          
          <div className="mb-4">
             <p className="text-[10px] md:text-[12px] font-mono font-bold text-blue-600 uppercase tracking-[0.4em] mb-6 border-l-2 border-blue-600 pl-4 leading-relaxed">
               Robust Integrated Verified Infrastructure <br className="md:hidden" /> Computing & Quantum
             </p>
             <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-[0.95] tracking-tight text-slate-900">
               Secure your <br/>infrastructure for the <span className="text-blue-600">next 50 years.</span>
             </h1>
          </div>

          <p className="text-xl md:text-2xl text-slate-500 font-serif italic leading-relaxed m-0 max-w-3xl">
            Building the institutional transition platform for quantum resilience. RivicQ bridges legacy cryptographic debt with hardware-verified security.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 not-prose mt-12">
            <a href="#scope" className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl shadow-slate-200 flex items-center justify-center gap-2 group">
              Explore Platform <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform"/>
            </a>
            <Link to="/pricing" className="px-10 py-5 bg-white border border-slate-200 text-slate-600 rounded-2xl font-bold text-xs uppercase tracking-widest hover:border-slate-900 transition-all text-center">
              Request Lab Access
            </Link>
          </div>
        </div>
      </section>

      <EcosystemSection />

      {/* 2. End-to-End Scope */}
      <section id="scope" className="py-24 scroll-mt-24 px-4 md:px-0">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 m-0">Institutional Resilience</h2>
          <p className="text-slate-500 text-xs md:text-sm mt-3 uppercase tracking-widest font-bold">End-to-End Cryptographic Lifecycle</p>
        </div>
        <EndToEndScope />
      </section>

      {/* 3. Regulatory Alignment Section */}
      <section className="py-24 border-y border-slate-100 bg-slate-50 -mx-8 md:-mx-16 px-8 md:px-16 not-prose">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-slate-900 m-0">Regulatory Compliance Perimeter</h2>
          <p className="text-xs text-blue-600 font-bold uppercase tracking-[0.2em] mt-3">Direct Mapping to Global Standards</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-4 md:px-0">
          {[
            { name: "DORA", label: "Finance (EU)" },
            { name: "NIS2", label: "Critical Infra" },
            { name: "CRA", label: "Resilience Act" },
            { name: "CNSA", label: "Defense (US)" },
            { name: "NIST", label: "PQC Standards" },
            { name: "BSI", label: "BSI Germany" }
          ].map((reg, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 text-center hover:border-blue-500 transition-all group shadow-sm">
              <div className="text-lg font-black text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">{reg.name}</div>
              <div className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">{reg.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Identity Triad */}
      <section className="py-24 border-y border-slate-100 not-prose px-4 md:px-0">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center border border-blue-100 shadow-sm">
              <Users size={24}/>
            </div>
            <h3 className="text-2xl font-serif font-bold text-slate-900 m-0">The Berlin Hub</h3>
            <p className="text-sm text-slate-600 leading-relaxed m-0">
              Operating within Leap Berlin, we leverage direct access to quantum hardware benchmarks and deep-tech ecosystem mentorship.
            </p>
          </div>
          <div className="space-y-6">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center border border-emerald-100 shadow-sm">
              <Target size={24}/>
            </div>
            <h3 className="text-2xl font-serif font-bold text-slate-900 m-0">Data Longevity</h3>
            <p className="text-sm text-slate-600 leading-relaxed m-0">
              Neutralizing "Harvest Now, Decrypt Later" for organizations requiring confidentiality that persists for 50+ years.
            </p>
          </div>
          <div className="space-y-6">
            <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center border border-indigo-100 shadow-sm">
              <Cpu size={24}/>
            </div>
            <h3 className="text-2xl font-serif font-bold text-slate-900 m-0">Verified RoT</h3>
            <p className="text-sm text-slate-600 leading-relaxed m-0">
              Our root-of-trust is anchored in physical magnesium-alloy HSM chassis, verified by NIST FIPS 140-3 protocols.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Hardware Visualization */}
      <section className="not-prose -mx-8 md:-mx-16 mb-24 bg-white py-12 md:py-24 border-y border-slate-50 px-4 md:px-0">
        <div className="px-8 md:px-16 mb-12 text-center">
            <h2 className="text-3xl font-serif font-bold text-slate-900 m-0">FIPS 140-3 HSM Architecture</h2>
            <p className="text-sm text-slate-500 mt-3 font-bold uppercase tracking-widest">Virtualized Physical Boundary</p>
        </div>
        <HSMBlueprint />
      </section>

      {/* 6. CTA */}
      <section className="py-24 text-center not-prose bg-slate-900 text-white rounded-[3rem] md:rounded-[4rem] px-8 md:px-16 mb-24 relative overflow-hidden shadow-2xl mx-4 md:mx-0">
        <div className="absolute inset-0 bg-technical opacity-5"></div>
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-white m-0 leading-tight">Prepare for the <br className="md:hidden" /> Quantum Era.</h2>
          <p className="text-slate-400 text-base md:text-lg mb-12 max-w-xl mx-auto italic leading-relaxed">
            "Cryptographic debt is the single largest liability for modern infrastructure. Start your migration journey today."
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/pricing" className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-blue-500 transition-all shadow-xl shadow-blue-500/20 text-center">
              Initialize Pilot
            </Link>
            <a href="mailto:contact@rivicq.xyz" className="px-10 py-5 border border-slate-700 text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-white/5 transition-all text-center">
              Engineering Consultation
            </a>
          </div>
        </div>
      </section>

    </article>
  );
};

export default Home;
