
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight, Lock, Zap, Activity, Cloud, Search, CheckCircle2, ShieldAlert, Cpu, Globe, Info, Target, Users, Microscope, Database, RefreshCw, Layers, Terminal } from 'lucide-react';
import HSMBlueprint from '../components/HSMBlueprint';

const EndToEndProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    {
      title: "1. Discover",
      icon: <Search className="text-blue-500" />,
      desc: "Our AI scanner finds hidden security holes in your software.",
      status: "Scanning: Legacy RSA-2048 keys",
      bg: "bg-blue-50"
    },
    {
      title: "2. Inventory",
      icon: <Database className="text-indigo-500" />,
      desc: "We build a complete list (CryptoBOM) of all your digital keys.",
      status: "Cataloging: 42 vulnerable assets",
      bg: "bg-indigo-50"
    },
    {
      title: "3. Vaulting",
      icon: <RefreshCw className="text-emerald-500" />,
      desc: "Move keys from code into our secure, physical Cloud HSM.",
      status: "Migration: Secure Key Wrapping",
      bg: "bg-emerald-50"
    },
    {
      title: "4. Fortify",
      icon: <Lock className="text-slate-900" />,
      desc: "Upgrade to unbreakable, quantum-safe encryption forever.",
      status: "Active: NIST ML-KEM Protection",
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
    <div className="not-prose grid md:grid-cols-2 gap-12 items-center bg-white p-10 md:p-16 rounded-[4rem] border border-slate-100 shadow-sm relative overflow-hidden">
      <div className="absolute inset-0 bg-technical opacity-5"></div>
      
      <div className="relative z-10 space-y-8">
        {steps.map((step, i) => (
          <div key={i} className={`flex items-start gap-4 p-6 rounded-3xl transition-all duration-500 border ${activeStep === i ? 'bg-white border-blue-100 shadow-xl scale-[1.02]' : 'bg-transparent border-transparent opacity-40 scale-95'}`}>
            <div className={`p-3 rounded-2xl ${activeStep === i ? step.bg : 'bg-slate-50'}`}>
              {step.icon}
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900 m-0">{step.title}</h4>
              <p className="text-sm text-slate-500 mt-1 m-0">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-[400px]">
        <div className="w-full aspect-square max-w-[320px] rounded-full border-2 border-slate-100 flex flex-col items-center justify-center p-8 text-center animate-fadeIn relative group">
           <div className="absolute inset-0 border-2 border-dashed border-blue-200 rounded-full animate-spin-slow"></div>
           <div className={`w-24 h-24 rounded-[2.5rem] flex items-center justify-center mb-6 shadow-2xl transition-colors duration-1000 ${activeStep === 3 ? 'bg-emerald-600 text-white' : 'bg-blue-600 text-white'}`}>
             {steps[activeStep].icon}
           </div>
           <div className="font-mono text-[10px] text-blue-500 font-bold uppercase tracking-widest mb-2">Automated Lifecycle</div>
           <div className="text-slate-900 font-bold text-lg leading-tight h-14">{steps[activeStep].status}</div>
           <div className="flex gap-1.5 mt-8">
             {steps.map((_, i) => (
               <div key={i} className={`h-1 rounded-full transition-all duration-500 ${activeStep === i ? 'w-8 bg-blue-600' : 'w-2 bg-slate-200'}`}></div>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <article className="prose prose-slate max-w-none">
      
      {/* 1. Hero Section */}
      <section className="pt-12 md:pt-16 mb-20">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 text-white text-[9px] font-bold uppercase tracking-[0.2em] mb-8 shadow-sm">
            <Activity size={10} className="text-blue-400 animate-pulse"/>
            System Status: 2030 Ready • Berlin Hub
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-[0.95] tracking-tight text-slate-900">
            Fix your security <br/> before the <span className="text-blue-600">machines do.</span>
          </h1>
          <p className="text-2xl text-slate-500 font-serif italic leading-relaxed m-0 max-w-3xl">
            Today's encryption is being harvested now to be decrypted later. RivicQ provides the complete transition layer to protect your data forever.
          </p>
          <div className="flex flex-wrap gap-4 not-prose mt-12">
            <a href="#process" className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl shadow-slate-200 flex items-center gap-2 group">
              See the Process <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform"/>
            </a>
            <Link to="/products" className="px-10 py-5 bg-white border border-slate-200 text-slate-600 rounded-2xl font-bold text-xs uppercase tracking-widest hover:border-slate-900 transition-all">
              Explore Our Tools
            </Link>
          </div>
        </div>
      </section>

      {/* 2. End-to-End Scope Rework */}
      <section id="process" className="py-24 scroll-mt-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-slate-900 m-0">The Full Lifecycle</h2>
          <p className="text-slate-500 text-sm mt-3 uppercase tracking-widest font-bold">RivicQ's End-to-End Scope of Protection</p>
        </div>
        <EndToEndProcess />
      </section>

      {/* 3. Simple Identity Triad */}
      <section className="py-24 border-y border-slate-100 not-prose">
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

      {/* 4. The Challenge */}
      <section className="py-24">
        <div className="max-w-3xl">
          <span className="text-blue-600 font-bold text-[10px] uppercase tracking-[0.3em] mb-4 block">The Problem</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-8 m-0">Data has a shelf life.</h2>
          <p className="text-xl text-slate-600 leading-relaxed mb-12">
            Most companies use encryption (RSA/ECC) designed decades ago. While safe today, quantum computers will break these in minutes. Hackers are stealing data <strong>today</strong> to unlock it in a few years.
          </p>
          <div className="not-prose p-10 bg-slate-900 rounded-[3rem] text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
               <ShieldAlert size={120} />
             </div>
             <div className="relative z-10 grid sm:grid-cols-2 gap-10">
                <div className="space-y-2">
                   <div className="text-emerald-400 font-bold text-3xl">50+ Years</div>
                   <p className="text-slate-400 text-xs uppercase tracking-widest font-bold">Secure Duration with RivicQ</p>
                </div>
                <div className="space-y-2">
                   <div className="text-red-400 font-bold text-3xl">&lt; 24 Hours</div>
                   <p className="text-slate-400 text-xs uppercase tracking-widest font-bold">Legacy Cracking Time</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 5. Hardware Visualization */}
      <section className="not-prose -mx-8 md:-mx-16 mb-24 bg-slate-50 py-24 border-y border-slate-100">
        <div className="px-8 md:px-16 mb-12 text-center">
            <h2 className="text-3xl font-serif font-bold text-slate-900 m-0">Rooted in Physics</h2>
            <p className="text-sm text-slate-500 mt-3 font-bold uppercase tracking-widest">Virtualized HSM Boundary (FIPS 140-3)</p>
        </div>
        <HSMBlueprint />
      </section>

      {/* 6. CTA */}
      <section className="py-24 text-center not-prose bg-slate-900 text-white rounded-[4rem] px-8 md:px-16 mb-24 relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-technical opacity-5"></div>
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-white m-0">Ready for the Quantum Era?</h2>
          <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto italic leading-relaxed">
            "The best time to secure your infrastructure was 5 years ago. The second best time is now."
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/pricing" className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-blue-500 transition-all shadow-xl shadow-blue-500/20">
              Get Started
            </Link>
            <a href="mailto:rivic.revan.ande@gmail.com" className="px-10 py-5 border border-slate-700 text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-white/5 transition-all">
              Consult with an Engineer
            </a>
          </div>
        </div>
      </section>

    </article>
  );
};

export default Home;
