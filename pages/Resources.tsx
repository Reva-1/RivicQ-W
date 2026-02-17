
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Copy, Check, ExternalLink, ShieldCheck, FileText, Globe, Landmark, Lock, ChevronDown, ChevronUp, Zap, Activity, Workflow, ShieldAlert, ArrowRight, Layers, Search, Database, Repeat, Cpu, Terminal, Info, Target, LayoutGrid, Beaker, Gavel, Bookmark, PhoneCall } from 'lucide-react';
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
        <h1 className="text-5xl font-bold mb-4 tracking-tight">Resources & Technical POC</h1>
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
            <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Coming Soon (Q3 2026)</span>
          </div>
        </div>
        <p className="text-slate-600 mb-8">
            Our technical proof-of-concept is currently undergoing rigorous validation in the <strong>Leap Berlin Quantum Lab</strong>. We are testing the physical entropy harvesting core against high-performance computing clusters to baseline PQC orchestration benchmarks.
        </p>
        <div className="not-prose bg-blue-50 border border-blue-100 p-6 rounded-2xl mb-12 flex items-center gap-4 italic text-sm text-blue-800">
          <div className="shrink-0 text-blue-600">
            <Info size={20} aria-hidden="true" />
          </div>
          <span>While lab validation is in progress, you can preview the intended scanning logic and risk-mapping interface below.</span>
        </div>
        <CryptoBOMScannerDemo />
      </section>

      {/* Security & Compliance Section */}
      <section className="mb-24 not-prose">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-emerald-600 text-white rounded-2xl shadow-lg shadow-emerald-100">
             <Gavel size={28}/>
          </div>
          <div>
            <h2 className="m-0 text-3xl font-serif font-bold text-slate-900">Security & Compliance</h2>
            <p className="text-xs text-emerald-600 font-bold uppercase tracking-widest mt-1">
              Global Standards & Regulatory Frameworks
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
          {[
            { 
              title: "NIST PQC Standards Overview", 
              icon: <FileText size={20} className="text-blue-600" />,
              link: "https://csrc.nist.gov/projects/post-quantum-cryptography",
              desc: "Official finalized standards for ML-KEM and ML-DSA from the US National Institute of Standards.",
              external: true
            },
            { 
              title: "FIPS 140-3 Validation Details", 
              icon: <ShieldCheck size={20} className="text-indigo-600" />,
              link: "#",
              desc: "Security requirements for cryptographic modules. (Active Validation Placeholder)",
              external: false,
              status: "PLACEHOLDER"
            },
            { 
              title: "DORA Compliance Checklist", 
              icon: <Landmark size={20} className="text-emerald-600" />,
              link: "#",
              desc: "Mandatory ICT resilience mapping for European Financial Entities. (Interactive Checklist)",
              external: false,
              status: "PLACEHOLDER"
            },
            { 
              title: "BSI Germany (BSI Bund)", 
              icon: <Lock size={20} className="text-slate-900" />,
              link: "https://www.bsi.bund.de/EN/Service-Navi/Publications/TechnicalGuidelines/TechnicalGuidelines_node.html",
              desc: "Technical guidelines TR-02102 for crypto-agility from Germany's Federal Office for IT Security.",
              external: true
            },
            { 
              title: "RivicQ Technical Paper", 
              icon: <Bookmark size={20} className="text-amber-600" />,
              link: "#",
              desc: "Official mapping to NIST, EU DORA, and BSI standards. (Q4 2026)",
              status: "COMING SOON",
              external: false
            }
          ].map((item, i) => (
            <div key={i} role="listitem">
              <div className="p-6 border border-slate-100 bg-white rounded-2xl shadow-sm hover:border-emerald-500 transition-all group flex flex-col h-full">
                <div className="mb-4 flex justify-between items-start">
                  <div className="p-2 bg-slate-50 rounded-lg group-hover:bg-emerald-50 transition-colors">
                    {item.icon}
                  </div>
                  {item.status && (
                    <span className="text-[8px] font-bold px-2 py-0.5 bg-amber-50 text-amber-600 rounded-full tracking-tighter">
                      {item.status}
                    </span>
                  )}
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-2 m-0 group-hover:text-emerald-600 transition-colors">
                  {item.title}
                </h4>
                <p className="text-[11px] text-slate-500 leading-relaxed mb-6 flex-grow">
                  {item.desc}
                </p>
                <a 
                  href={item.link} 
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className={`flex items-center gap-1 text-[9px] font-bold uppercase tracking-widest transition-colors ${item.link === '#' ? 'text-slate-300 cursor-default' : 'text-blue-600 hover:text-slate-900'}`}
                  aria-label={`${item.title} (${item.external ? 'External' : 'Internal'} link)`}
                >
                  {item.link === '#' ? "Placeholder/Soon" : (item.external ? "External Resource" : "Access Guide")} <ExternalLink size={10} aria-hidden="true" />
                </a>
              </div>
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
            <p className="text-xs text-blue-600 font-bold uppercase tracking-widest mt-1">
              Aligned with <a href="https://owasp.org/Top10/A02_2021-Cryptographic_Failures/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-400 transition-colors">OWASP A02:2021 Standards</a>
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4" role="list">
          {[
            { 
                id: "A02:01", 
                title: "Sensitive Data Exposure", 
                desc: "Discovery of cleartext transmission (HTTP/FTP) and verification of PQC tunnel encapsulation.",
                link: "https://owasp.org/Top10/A02_2021-Cryptographic_Failures/" 
            },
            { 
                id: "A02:02", 
                title: "Legacy Algorithm Usage", 
                desc: "Identifying SHA-1, MD5, and RSA < 2048 usage that is vulnerable to classical and quantum factoring.",
                link: "https://owasp.org/Top10/A02_2021-Cryptographic_Failures/#legacy-algorithms"
            },
            { 
                id: "A02:03", 
                title: "Insufficient Entropy", 
                desc: "Auditing Pseudo-Random Number Generators (PRNG) against NIST SP 800-90B quantum-safety.",
                link: "https://owasp.org/Top10/A02_2021-Cryptographic_Failures/#insufficient-entropy"
            },
            { 
                id: "A02:04", 
                title: "Improper Key Management", 
                desc: "Detecting keys in source code, env vars, or local storage. Integration with HSM RoT boundaries.",
                link: "https://owasp.org/Top10/A02_2021-Cryptographic_Failures/#key-management"
            },
            { 
                id: "A02:05", 
                title: "Not Using Authenticated Encryption", 
                desc: "Scanning for ECB/CBC modes vs GCM/AEAD modes required for modern data integrity.",
                link: "https://owasp.org/Top10/A02_2021-Cryptographic_Failures/#authenticated-encryption"
            },
            { 
                id: "A02:06", 
                title: "Protocol Agility Failures", 
                desc: "Assessing the ability to rotate algorithms dynamically via the RQSP orchestration layer.",
                link: "https://owasp.org/Top10/A02_2021-Cryptographic_Failures/#crypto-agility"
            }
          ].map((item, i) => (
            <div key={i} role="listitem">
              <a 
                href={item.link} 
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 border border-slate-100 bg-white rounded-2xl shadow-sm hover:border-blue-500 transition-all group block decoration-none h-full focus:ring-2 focus:ring-blue-500/10 focus:outline-none"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[10px] font-mono font-bold text-slate-400 group-hover:text-blue-600 transition-colors uppercase tracking-widest">{item.id}</span>
                  <ExternalLink size={12} className="text-slate-300 group-hover:text-blue-500" aria-hidden="true" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-2 m-0">{item.title}</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed m-0">{item.desc}</p>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Discovery & Risk Mapping Workflow */}
      <section className="mb-24">
        <h2 className="text-3xl font-serif font-bold mb-8">Discovery, Scanning & Risk Mapping</h2>
        <div className="not-prose grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-slate-50 border border-slate-100 rounded-[2.5rem] relative group overflow-hidden">
            <div className="absolute -top-4 -right-4 opacity-5 text-slate-900 group-hover:scale-110 transition-transform" aria-hidden="true">
              <Search size={120} />
            </div>
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 mb-6 border border-slate-100">
              <Search size={24} aria-hidden="true" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-3 m-0">01. Discovery</h4>
            <p className="text-xs text-slate-500 leading-relaxed m-0">
              Recursive indexing of VCS repositories and container registries to baseline the organization's cryptographic footprint.
            </p>
          </div>

          <div className="p-8 bg-slate-50 border border-slate-100 rounded-[2.5rem] relative group overflow-hidden">
            <div className="absolute -top-4 -right-4 opacity-5 text-slate-900 group-hover:scale-110 transition-transform" aria-hidden="true">
              <Database size={120} />
            </div>
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-indigo-600 mb-6 border border-slate-100">
              <Database size={24} aria-hidden="true" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-3 m-0">02. Scanning</h4>
            <p className="text-xs text-slate-500 leading-relaxed m-0">
              Technical audit using RivicQ proprietary heuristics to calculate the Quantum Risk Score for every identified primitive.
            </p>
          </div>

          <div className="p-8 bg-slate-50 border border-slate-100 rounded-[2.5rem] relative group overflow-hidden">
            <div className="absolute -top-4 -right-4 opacity-5 text-slate-900 group-hover:scale-110 transition-transform" aria-hidden="true">
              <LayoutGrid size={120} />
            </div>
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-emerald-600 mb-6 border border-slate-100">
              <LayoutGrid size={24} aria-hidden="true" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-3 m-0">03. Mapping</h4>
            <p className="text-xs text-slate-500 leading-relaxed m-0">
              Final generation of the CryptoBOM (CycloneDX) with explicit mapping to NIST FIPS remediation paths.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-24">
        <h2 className="text-3xl font-serif font-bold mb-10">Frequently Asked Questions</h2>
        <div className="not-prose space-y-2">
          <FAQItem 
            id="sbom"
            question="What is the difference between SBOM and CryptoBOM?"
            answer="A Software Bill of Materials (SBOM) lists components and libraries. A Cryptographic Bill of Materials (CryptoBOM) explicitly catalogs the cryptographic primitives, key sizes, and expiry dates within those components, which is critical for mitigating quantum threats."
          />
          <FAQItem 
            id="owasp"
            question="How does RivicQ address OWASP A02:2021?"
            answer="RivicQ provides automated scanning that specifically targets cryptographic failures. We go beyond basic CVE checks to analyze the mathematical strength and implementation of encryption across your entire infrastructure."
          />
          <FAQItem 
            id="poc"
            question="Can the POC scan my private repository?"
            answer="The web-based POC is for preview. Full laboratory validation is in progress at Leap Berlin. For private repository scanning, we provide a secure CLI tool and a managed SaaS instance that connects via SSH/HTTPS."
          />
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

      <div className="not-prose bg-slate-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
          <h3 className="text-2xl font-serif font-bold mb-4 m-0 text-white">Download the Full PQC Compliance Guide</h3>
          <p className="text-slate-400 text-sm mb-8 max-w-xl mx-auto italic">
            RivicQ Technical Paper: Official Mapping to NIST, EU DORA, and BSI Germany standards. (Coming Soon Q4 2026)
          </p>
          <button disabled className="px-10 py-4 bg-slate-800 text-slate-400 font-bold rounded-xl cursor-not-allowed flex items-center gap-2 mx-auto shadow-xl">
             Notify Me on Release <ArrowRight size={18} aria-hidden="true"/>
          </button>
      </div>

    </article>
  );
};

export default Resources;
