
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Copy, Check, ExternalLink, ShieldCheck, FileText, Globe, Landmark, Lock, ChevronDown, ChevronUp, Zap, Activity, Workflow, ShieldAlert, ArrowRight, Layers, Search, Database, Repeat, Cpu, Terminal, Info, Target, LayoutGrid, Beaker, Gavel, Bookmark, PhoneCall, FileCheck } from 'lucide-react';
import CryptoBOMScannerDemo from '../components/CryptoBOMScannerDemo';

const FAQItem: React.FC<{ question: string, answer: React.ReactNode, id: string }> = ({ question, answer, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-100 py-6 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left group focus:outline-none focus:text-blue-600"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${id}`}
      >
        <h4 className="font-serif text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors m-0">
          {question}
        </h4>
        {isOpen ? <ChevronUp size={20} className="text-slate-400" /> : <ChevronDown size={20} className="text-slate-400" />}
      </button>
      {isOpen && (
        <div id={`faq-answer-${id}`} className="mt-4 animate-fadeIn" role="region">
          <div className="text-slate-600 leading-relaxed text-sm m-0">
            {answer}
          </div>
        </div>
      )}
    </div>
  );
};

const Resources: React.FC = () => {
  return (
    <article className="prose prose-lg prose-slate max-w-none">
      <header className="mb-12">
        <h1 className="text-5xl font-bold mb-4 tracking-tight">Resources & technical POC</h1>
        <p className="lead font-serif italic text-slate-600">
          Open-source tools, compliance checklists, and laboratory validation reports for the post-quantum transition.
        </p>
      </header>

      {/* Interactive POC Section */}
      <section className="mb-24">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-blue-600 text-white rounded-2xl shadow-lg">
             <Beaker size={28}/>
          </div>
          <div>
            <h2 className="m-0 text-3xl font-serif font-bold text-slate-900">Technical POC: Lab Validation</h2>
            <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Current Research Environment</span>
          </div>
        </div>
        <p className="text-slate-600 mb-8">
            Our technical proof-of-concept is currently undergoing rigorous validation in the <strong>Leap Berlin Quantum Lab</strong>. We are testing physical entropy harvesting against IBM Q simulations.
        </p>
        <CryptoBOMScannerDemo />
      </section>

      {/* Security & Compliance Section (Requested) */}
      <section className="mb-24 not-prose">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-emerald-600 text-white rounded-2xl shadow-lg shadow-emerald-100">
             <FileCheck size={28}/>
          </div>
          <div>
            <h2 className="m-0 text-3xl font-serif font-bold text-slate-900">Security & Compliance</h2>
            <p className="text-xs text-emerald-600 font-bold uppercase tracking-widest mt-1">Global Regulatory Frameworks</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { 
              title: "NIST PQC Standards Overview", 
              icon: <ExternalLink size={20} className="text-blue-600" />,
              link: "https://csrc.nist.gov/projects/post-quantum-cryptography",
              desc: "Official finalized standards for ML-KEM and ML-DSA from US NIST.",
              external: true
            },
            { 
              title: "FIPS 140-3 Validation Details", 
              icon: <ShieldCheck size={20} className="text-indigo-600" />,
              link: "#",
              desc: "Technical specifications for RivicQ's physical and virtual HSM boundaries.",
              external: false,
              status: "PLACEHOLDER"
            },
            { 
              title: "DORA Compliance Checklist", 
              icon: <Landmark size={20} className="text-emerald-600" />,
              link: "#",
              desc: "Digital Operational Resilience Act mapping for EU financial institutions.",
              external: false,
              status: "PLACEHOLDER"
            },
            { 
              title: "BSI Germany Guidelines", 
              icon: <Globe size={20} className="text-slate-900" />,
              link: "https://www.bsi.bund.de/EN/Service-Navi/Publications/TechnicalGuidelines/TechnicalGuidelines_node.html",
              desc: "Technical guidelines for crypto-agility from the BSI Bund Germany.",
              external: true
            },
            { 
              title: "RivicQ Technical Paper", 
              icon: <Bookmark size={20} className="text-amber-600" />,
              link: "#",
              desc: "Full institutional mapping of RQSP to NIST, DORA, and BSI standards.",
              status: "Q4 2025",
              external: false
            }
          ].map((item, i) => (
            <div key={i} className="p-6 border border-slate-100 bg-white rounded-2xl shadow-sm hover:border-blue-500 transition-all group flex flex-col h-full">
              <div className="mb-4 flex justify-between items-start">
                <div className="p-2 bg-slate-50 rounded-lg group-hover:bg-blue-50 transition-colors">
                  {item.icon}
                </div>
                {item.status && (
                  <span className="text-[8px] font-bold px-2 py-0.5 bg-amber-50 text-amber-600 rounded-full tracking-tighter">
                    {item.status}
                  </span>
                )}
              </div>
              <h4 className="text-sm font-bold text-slate-900 mb-2 m-0">{item.title}</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed mb-6 flex-grow">
                {item.desc}
              </p>
              <a 
                href={item.link} 
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className={`flex items-center gap-1 text-[9px] font-bold uppercase tracking-widest transition-colors ${item.link === '#' ? 'text-slate-300 cursor-default' : 'text-blue-600 hover:text-slate-900'}`}
              >
                {item.link === '#' ? "Link Soon" : (item.external ? "External Site" : "Access Guide")} <ArrowRight size={10} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* OWASP Section */}
      <section className="mb-24 not-prose">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-slate-900 text-white rounded-2xl shadow-lg">
             <ShieldCheck size={28}/>
          </div>
          <div>
            <h2 className="m-0 text-3xl font-serif font-bold text-slate-900">OWASP Cryptographic Checklist</h2>
            <p className="text-xs text-blue-600 font-bold uppercase tracking-widest mt-1">Aligned with OWASP A02:2021</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { id: "A02:01", title: "Sensitive Data Exposure", desc: "Discovery of cleartext transmission and PQC tunnel verification." },
            { id: "A02:02", title: "Legacy Algorithm Usage", desc: "Identifying SHA-1, MD5, and RSA < 2048 vulnerable to quantum factoring." },
            { id: "A02:03", title: "Insufficient Entropy", desc: "Auditing PRNGs against NIST SP 800-90B quantum-safety." },
            { id: "A02:04", title: "Improper Key Management", desc: "Detecting keys in code vs HSM RoT boundaries." }
          ].map((item, i) => (
            <div key={i} className="p-6 border border-slate-100 bg-white rounded-2xl shadow-sm hover:border-blue-500 transition-all group">
              <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-2 block">{item.id}</span>
              <h4 className="text-sm font-bold text-slate-900 mb-2 m-0">{item.title}</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed m-0">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Next Steps CTA Section */}
      <section className="mb-24 not-prose">
        <div className="bg-slate-50 border border-slate-200 rounded-[3rem] p-10 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5 text-slate-900 pointer-events-none">
            <PhoneCall size={160} />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6 m-0">Next Steps</h2>
            <p className="text-xl text-slate-600 font-serif italic mb-10 max-w-2xl leading-relaxed">
              Contact Sales for a PQC Consultation.
            </p>
            <Link to="/pricing" className="inline-flex items-center gap-3 px-10 py-5 bg-slate-900 text-white rounded-xl font-bold hover:bg-blue-600 transition-all shadow-xl shadow-slate-200 uppercase text-xs tracking-widest">
              Consult with Sales <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

    </article>
  );
};

export default Resources;
