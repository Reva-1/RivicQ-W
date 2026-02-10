import React, { useState } from 'react';
import { Copy, Check, ExternalLink, ShieldCheck, FileText, Github, BarChart3, Cloud, Landmark, Lock, Globe, ChevronDown, ChevronUp, Send, MessageSquare, Briefcase, Zap, Activity, Monitor, Workflow, ShieldAlert } from 'lucide-react';

const CodeBlock: React.FC<{ code: string, label?: string }> = ({ code, label }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="not-prose bg-gray-900 text-gray-100 rounded-lg p-6 my-6 border border-gray-800">
      <div className="flex justify-between items-center mb-4">
        <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">{label || 'Terminal Snippet'}</span>
        <button 
          onClick={handleCopy} 
          className="text-gray-500 hover:text-white flex items-center gap-2 text-xs transition-colors"
        >
          {copied ? (
            <><Check size={14}/> Copied!</>
          ) : (
            <><Copy size={14} /> Copy</>
          )}
        </button>
      </div>
      <div className="bg-black rounded p-4 font-mono text-sm text-green-400 border border-gray-700 overflow-x-auto">
        <pre className="m-0">{code}</pre>
      </div>
    </div>
  );
};

const FAQItem: React.FC<{ question: string, answer: React.ReactNode }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 py-6 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left group"
      >
        <h4 className="font-serif text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors m-0">
          {question}
        </h4>
        {isOpen ? <ChevronUp size={20} className="text-slate-400" /> : <ChevronDown size={20} className="text-slate-400" />}
      </button>
      {isOpen && (
        <div className="mt-4 animate-fadeIn">
          <p className="text-slate-600 leading-relaxed text-sm m-0">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

const Resources: React.FC = () => {
  const helmCode = `helm repo add rivicq https://charts.rivic.xyz
helm install cryptobom-agent rivicq/cbom-agent \\
  --set scanner.mode=passive \\
  --set exporters.prometheus.enabled=true`;

  const apiCode = `curl -X POST https://api.rivic.xyz/v1/sign \\
  -H "Authorization: Bearer $RIVICQ_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "mechanism": "ML-DSA-65",
    "payload_base64": "SGVsbG8gUXVhbnR1bQ=="
  }'`;

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <article className="prose prose-lg prose-slate max-w-none">
      <h1>Resources & Tools</h1>
      <p>
        Access our open-source tools, compliance guides, and latest research on the post-quantum transition.
      </p>

      {/* CryptoBOM Section */}
      <section className="mt-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-blue-600 text-white rounded-2xl shadow-lg shadow-blue-100">
             <ShieldAlert size={28}/>
          </div>
          <h2 className="m-0 text-3xl font-serif font-bold">RivicQ CryptoBOM SaaS</h2>
        </div>
        
        <p>
            The Cryptographic Bill of Materials (CBOM) is the first step towards quantum safety. You cannot secure what you cannot see. 
            Our tool creates a dynamic inventory of all cryptographic assets in your software supply chain.
        </p>
        
        <CodeBlock code={helmCode} label="Helm Installation (Agent)" />

        <div className="not-prose flex justify-between items-center mb-6">
          <p className="text-sm text-slate-500 m-0">Interested in integrating our HSM-backed signing API?</p>
          <a href="https://github.com/rivic-q" target="_blank" rel="noopener noreferrer" className="bg-white border-2 border-slate-900 text-slate-900 px-4 py-2 rounded font-bold text-sm hover:bg-slate-900 hover:text-white transition-all">
            GitHub Docs
          </a>
        </div>
        
        <CodeBlock code={apiCode} label="PQC Signing API Example" />

        <h3>Open Source (CNCF) vs Enterprise Edition</h3>
        <p>
            We believe in open standards. The core scanner is open source and compatible with standard CNCF tooling. 
            The Enterprise edition adds advanced integration for regulated industries and mission-critical workflows.
        </p>

        <div className="not-prose overflow-x-auto mt-6">
            <table className="w-full text-sm text-left border-collapse bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                        <th className="p-4 font-bold text-slate-900">Feature</th>
                        <th className="p-4 font-bold text-slate-900 w-1/3">Open Source (Community)</th>
                        <th className="p-4 font-bold text-slate-900 w-1/3 text-blue-600">Enterprise (SaaS)</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                    <tr>
                        <td className="p-4 font-medium">Inventory Format</td>
                        <td className="p-4 text-slate-600">Standard CycloneDX (JSON)</td>
                        <td className="p-4 text-slate-600">CycloneDX + Real-time Inventory DB</td>
                    </tr>
                    <tr>
                        <td className="p-4 font-medium flex items-center gap-2">
                             <Cloud size={16} className="text-blue-500" /> CNCF Tooling
                        </td>
                        <td className="p-4 text-slate-600">
                            Prometheus Metrics, Grafana Dashboards
                        </td>
                        <td className="p-4 text-slate-600">
                            Managed Control Plane, Multi-Cluster Aggregation
                        </td>
                    </tr>
                    <tr>
                        <td className="p-4 font-medium flex items-center gap-2">
                            <BarChart3 size={16} className="text-purple-500" /> IBMQ Integration
                        </td>
                        <td className="p-4 text-slate-500 italic">Not Included</td>
                        <td className="p-4 text-slate-600">
                            <strong>IBM Quantum Safe Advisor</strong> deep integration
                        </td>
                    </tr>
                    <tr className="bg-blue-50/50">
                        <td className="p-4 font-bold text-blue-900 flex items-center gap-2">
                            <ShieldCheck size={16} /> Enterprise Features
                        </td>
                        <td className="p-4 text-slate-400 italic">Basic Community Support</td>
                        <td className="p-4 text-blue-900">
                            <ul className="list-none p-0 m-0 space-y-2">
                                <li className="flex items-start gap-2">
                                  <Monitor size={14} className="mt-1 shrink-0"/> 
                                  <span><strong>Real-time Monitoring:</strong> Continuous live tracking of cryptographic state.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <Workflow size={14} className="mt-1 shrink-0"/> 
                                  <span><strong>Automated Remediation:</strong> Automatic PR creation for vulnerability fixes.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <Activity size={14} className="mt-1 shrink-0"/> 
                                  <span><strong>SIEM/SOAR Integration:</strong> Native Splunk & Sentinel connectors.</span>
                                </li>
                                <li className="flex items-start gap-2 text-emerald-700">
                                  <ShieldCheck size={14} className="mt-1 shrink-0"/> 
                                  <span><strong>Dedicated Support:</strong> 24/7 technical cryptography support.</span>
                                </li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="not-prose mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/#/pricing#contact" className="px-10 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200/50 flex items-center gap-2">
                Request an Enterprise Demo <ArrowRight size={18}/>
            </a>
            <a href="/#/pricing" className="px-10 py-4 border-2 border-slate-900 text-slate-900 font-bold rounded-xl hover:bg-slate-900 hover:text-white transition-all">
                View Enterprise Plans
            </a>
        </div>
      </section>

      <hr className="my-16 border-gray-100"/>

      {/* Regulatory & Compliance Links */}
      <section>
        <h2>Regulatory & Compliance Hub</h2>
        <p>
          Official checklists and regulatory texts for compliance with upcoming quantum-safe standards.
        </p>
        <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <a href="https://www.iso.org/standard/27001" target="_blank" rel="noopener noreferrer" className="block p-5 border border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-md transition-all group bg-white">
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-blue-50 rounded group-hover:bg-blue-600 transition-colors">
                      <ShieldCheck size={20} className="text-blue-600 group-hover:text-white"/>
                    </div>
                    <span className="font-bold text-gray-900 text-lg">ISO/IEC 27001:2022</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">Information Security Management Systems (ISMS) Requirements.</p>
                <div className="text-xs font-bold text-blue-600 flex items-center">
                   OFFICIAL STANDARD <ExternalLink size={10} className="ml-1"/>
                </div>
            </a>
            <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32022R2554" target="_blank" rel="noopener noreferrer" className="block p-5 border border-gray-200 rounded-lg hover:border-indigo-600 hover:shadow-md transition-all group bg-white">
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-indigo-50 rounded group-hover:bg-indigo-600 transition-colors">
                      <Landmark size={20} className="text-indigo-600 group-hover:text-white"/>
                    </div>
                    <span className="font-bold text-gray-900 text-lg">EU DORA Regulation</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">Digital Operational Resilience Act - Official Journal L 333.</p>
                <div className="text-xs font-bold text-indigo-600 flex items-center">
                   OFFICIAL LEGAL TEXT <ExternalLink size={10} className="ml-1"/>
                </div>
            </a>
        </div>
      </section>

      {/* New Security & Compliance Section */}
      <section className="mt-16">
        <h2 className="flex items-center gap-3">
          <ShieldCheck className="text-blue-600" />
          Security & Compliance
        </h2>
        <p>
          Access detailed technical standards and implementation checklists for your security transition.
        </p>
        <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <a href="https://csrc.nist.gov/projects/post-quantum-cryptography" target="_blank" rel="noopener noreferrer" className="p-6 border border-slate-200 rounded-2xl bg-white hover:border-blue-600 hover:shadow-lg transition-all flex justify-between items-center group">
              <div>
                <h4 className="m-0 text-slate-900 font-bold group-hover:text-blue-600">NIST PQC Standards Overview</h4>
                <p className="text-xs text-slate-500 m-0 mt-1">NIST's official project for post-quantum crypto.</p>
              </div>
              <ExternalLink size={18} className="text-slate-300 group-hover:text-blue-600 shrink-0"/>
            </a>
            <a href="/#/resources" className="p-6 border border-slate-200 rounded-2xl bg-white hover:border-blue-600 hover:shadow-lg transition-all flex justify-between items-center group">
              <div>
                <h4 className="m-0 text-slate-900 font-bold group-hover:text-blue-600">FIPS 140-3 Validation Details</h4>
                <p className="text-xs text-slate-500 m-0 mt-1">Hardware boundary security requirements.</p>
              </div>
              <ArrowRight size={18} className="text-slate-300 group-hover:text-blue-600 shrink-0"/>
            </a>
            <a href="/#/resources" className="p-6 border border-slate-200 rounded-2xl bg-white hover:border-blue-600 hover:shadow-lg transition-all flex justify-between items-center group">
              <div>
                <h4 className="m-0 text-slate-900 font-bold group-hover:text-blue-600">DORA Compliance Checklist</h4>
                <p className="text-xs text-slate-500 m-0 mt-1">Checklist for financial institutions (EU).</p>
              </div>
              <ArrowRight size={18} className="text-slate-300 group-hover:text-blue-600 shrink-0"/>
            </a>
            <a href="https://www.bsi.bund.de/" target="_blank" rel="noopener noreferrer" className="p-6 border border-slate-200 rounded-2xl bg-white hover:border-blue-600 hover:shadow-lg transition-all flex justify-between items-center group">
              <div>
                <h4 className="m-0 text-slate-900 font-bold group-hover:text-blue-600">BSI Germany</h4>
                <p className="text-xs text-slate-500 m-0 mt-1">Federal Office for Information Security.</p>
              </div>
              <ExternalLink size={18} className="text-slate-300 group-hover:text-blue-600 shrink-0"/>
            </a>
        </div>
      </section>

      <hr className="my-10 border-gray-100"/>

      {/* FAQ Section */}
      <section id="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="not-prose mt-8">
          <FAQItem 
            question="What is Post-Quantum Cryptography (PQC)?"
            answer="PQC refers to cryptographic algorithms (usually based on lattices, codes, or hashes) that are thought to be secure against an attack by a quantum computer. Current standards like RSA and ECC are vulnerable to Shor's algorithm, which a sufficiently powerful quantum computer could execute."
          />
          <FAQItem 
            question="Why do I need an HSM if I use PQC?"
            answer="An HSM (Hardware Security Module) provides a physical root of trust. While PQC algorithms protect against mathematical attacks from quantum computers, an HSM protects against physical theft, unauthorized software access, and tampering. It ensures that your private keys never exist in plaintext in a computer's volatile memory."
          />
          <FAQItem 
            question="What is a CryptoBOM?"
            answer="A Cryptographic Bill of Materials (CryptoBOM) is an extension of an SBOM. It specifically inventories every cryptographic asset, algorithm, key size, and library used by an application. This visibility is essential for 'crypto-agility'—the ability to quickly switch algorithms when a vulnerability is discovered."
          />
        </div>
      </section>

    </article>
  );
};

export default Resources;

const ArrowRight: React.FC<{ size?: number, className?: string }> = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);