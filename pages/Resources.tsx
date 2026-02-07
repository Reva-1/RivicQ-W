import React, { useState } from 'react';
import { Copy, Check, ExternalLink, ShieldCheck, FileText, Github, BarChart3, Cloud } from 'lucide-react';

const Resources: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const code = `helm repo add rivicq https://charts.rivic.xyz
helm install cryptobom-agent rivicq/cbom-agent \\
  --set scanner.mode=passive \\
  --set exporters.prometheus.enabled=true`;

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <article className="prose prose-lg prose-slate max-w-none">
      <h1>Resources & Tools</h1>
      <p>
        Access our open-source tools, compliance guides, and latest research on the post-quantum transition.
      </p>

      {/* CryptoBOM Section */}
      <section className="mt-8">
        <h2>RivicQ CryptoBOM SaaS</h2>
        <p>
            The Cryptographic Bill of Materials (CBOM) is the first step towards quantum safety. You cannot secure what you cannot see. 
            Our tool creates a dynamic inventory of all cryptographic assets in your software supply chain.
        </p>
        
        <div className="not-prose bg-gray-900 text-gray-100 rounded-lg p-6 my-6 border border-gray-800">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-white font-bold text-xl flex items-center gap-2">
                        <Github className="text-white" size={24}/>
                        cryptobom-saas
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">Open Source CBOM Scanner & Inventory Agent</p>
                </div>
                <a href="https://github.com/rivic-q/cryptobom-saas.git" target="_blank" rel="noopener noreferrer" className="bg-white text-black px-4 py-2 rounded font-bold text-sm hover:bg-cyan-400 transition-colors">
                    View on GitHub
                </a>
            </div>
            
            <div className="relative bg-black rounded p-4 font-mono text-sm text-green-400 border border-gray-700 overflow-x-auto">
                <button 
                    onClick={handleCopy} 
                    className="absolute top-4 right-4 text-gray-500 hover:text-white"
                >
                    {copied ? <Check size={16}/> : <Copy size={16} />}
                </button>
                <pre>{code}</pre>
            </div>
        </div>

        <h3>Open Source (CNCF) vs Enterprise Edition</h3>
        <p>
            We believe in open standards. The core scanner is open source and compatible with standard CNCF tooling. 
            The Enterprise edition adds advanced integration for regulated industries.
        </p>

        <div className="not-prose overflow-x-auto mt-6">
            <table className="w-full text-sm text-left border-collapse">
                <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                        <th className="p-4 font-bold text-gray-900">Feature</th>
                        <th className="p-4 font-bold text-gray-900 w-1/3">Open Source (Community)</th>
                        <th className="p-4 font-bold text-gray-900 w-1/3">Enterprise (SaaS)</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    <tr>
                        <td className="p-4 font-medium">Inventory Format</td>
                        <td className="p-4 text-gray-600">Standard CycloneDX (JSON)</td>
                        <td className="p-4 text-gray-600">CycloneDX + Real-time Inventory DB</td>
                    </tr>
                    <tr>
                        <td className="p-4 font-medium flex items-center gap-2">
                             <Cloud size={16} className="text-blue-500" /> CNCF Tooling
                        </td>
                        <td className="p-4 text-gray-600">
                            Prometheus Metrics, Grafana Dashboards, OPA Gatekeeper Support
                        </td>
                        <td className="p-4 text-gray-600">
                            Managed Control Plane, Multi-Cluster Aggregation
                        </td>
                    </tr>
                    <tr>
                        <td className="p-4 font-medium flex items-center gap-2">
                            <BarChart3 size={16} className="text-purple-500" /> IBMQ Integration
                        </td>
                        <td className="p-4 text-gray-600 italic">Not Included</td>
                        <td className="p-4 text-gray-600">
                            <strong>IBM Quantum Safe Advisor</strong> deep integration, specialized reporting for Mainframe/Z-Series
                        </td>
                    </tr>
                    <tr>
                        <td className="p-4 font-medium">Remediation</td>
                        <td className="p-4 text-gray-600">Manual Alerts</td>
                        <td className="p-4 text-gray-600">Automated PRs & Crypto-Agility Policy Enforcement</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </section>

      <hr className="my-10 border-gray-100"/>

      {/* Blogs & Insights */}
      <section>
        <h2>Blogs & Insights</h2>
        <div className="not-prose grid gap-6 mt-6">
            <a href="#" className="block group">
                <h4 className="font-serif text-xl font-bold text-gray-900 group-hover:text-cyan-700 decoration-2 underline-offset-4 group-hover:underline">
                    PQC Compliance Deadlines & Timeline
                </h4>
                <p className="text-gray-500 text-sm mt-2">
                    A comprehensive timeline of NIST standardization (FIPS 203/204), NSA CNSA 2.0 mandates, and the EU Cyber Resilience Act. Know when you need to migrate.
                </p>
                <div className="flex gap-2 mt-3">
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Compliance</span>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Regulation</span>
                </div>
            </a>

            <a href="#" className="block group">
                <h4 className="font-serif text-xl font-bold text-gray-900 group-hover:text-cyan-700 decoration-2 underline-offset-4 group-hover:underline">
                    Why "Harvest Now, Decrypt Later" Matters Today
                </h4>
                <p className="text-gray-500 text-sm mt-2">
                    Analyzing the risk of long-term data interception. Why financial institutions and healthcare providers are at highest risk for retrospective decryption.
                </p>
                <div className="flex gap-2 mt-3">
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Threat Analysis</span>
                </div>
            </a>
        </div>
      </section>

      <hr className="my-10 border-gray-100"/>

      {/* Security & Compliance Links */}
      <section>
        <h2>Security & Compliance</h2>
        <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <a href="https://csrc.nist.gov/projects/post-quantum-cryptography" target="_blank" rel="noopener noreferrer" className="block p-4 border border-gray-200 rounded hover:border-black transition-colors group">
                <div className="flex items-center gap-3 mb-1">
                    <ShieldCheck size={18} className="text-gray-800 group-hover:text-black"/>
                    <span className="font-bold text-gray-900">NIST PQC Standards Overview</span>
                </div>
                <span className="text-xs text-gray-500">Official FIPS 203, 204, 205 Specs</span>
            </a>

             <div className="block p-4 border border-gray-200 rounded hover:border-black transition-colors cursor-pointer group">
                <div className="flex items-center gap-3 mb-1">
                    <FileText size={18} className="text-blue-600 group-hover:text-black"/>
                    <span className="font-bold text-gray-900">FIPS 140-3 Validation Details</span>
                </div>
                <span className="text-xs text-gray-500">Module Certification Status (Internal)</span>
            </div>

            <div className="block p-4 border border-gray-200 rounded hover:border-black transition-colors cursor-pointer group">
                <div className="flex items-center gap-3 mb-1">
                    <FileText size={18} className="text-purple-600 group-hover:text-black"/>
                    <span className="font-bold text-gray-900">DORA Compliance Checklist</span>
                </div>
                <span className="text-xs text-gray-500">EU Digital Operational Resilience Act Guide</span>
            </div>
            
            <a href="https://www.bsi.bund.de/EN" target="_blank" rel="noopener noreferrer" className="block p-4 border border-gray-200 rounded hover:border-black transition-colors group">
                <div className="flex items-center gap-3 mb-1">
                    <ShieldCheck size={18} className="text-red-700 group-hover:text-black"/>
                    <span className="font-bold text-gray-900">BSI Germany</span>
                </div>
                <span className="text-xs text-gray-500">Migration Recommendations</span>
            </a>
        </div>
      </section>

    </article>
  );
};

export default Resources;