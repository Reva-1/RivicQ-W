
import React from 'react';
import { ShieldAlert, Globe, Landmark, AlertCircle, CheckCircle2, ExternalLink, ArrowRight, FileText, Gavel, FileCheck } from 'lucide-react';

const ComplianceTable: React.FC<{ title: string, jurisdiction: string, data: any[] }> = ({ title, jurisdiction, data }) => (
  <div className="mb-12">
    <div className="flex items-center justify-between mb-4">
        <div>
            <h3 className="m-0 text-xl font-serif font-bold text-slate-900">{title}</h3>
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{jurisdiction}</span>
        </div>
        <div className="h-0.5 flex-grow mx-4 bg-slate-100 hidden md:block"></div>
    </div>
    <div className="not-prose overflow-x-auto">
        <table className="w-full text-sm text-left border-collapse bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
            <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="p-4 font-bold text-slate-900">Regulation</th>
                    <th className="p-4 font-bold text-slate-900">Key Requirement</th>
                    <th className="p-4 font-bold text-slate-900">Deadline</th>
                    <th className="p-4 font-bold text-slate-900">RivicQ Solution</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
                {data.map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                        <td className="p-4 font-bold text-slate-800">{row.standard}</td>
                        <td className="p-4 text-slate-600 text-xs leading-relaxed max-w-xs">{row.mandate}</td>
                        <td className="p-4 font-mono font-bold text-slate-900 whitespace-nowrap text-xs">{row.deadline}</td>
                        <td className="p-4">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-[10px] font-bold uppercase tracking-wide">
                                <CheckCircle2 size={12}/> {row.solution}
                            </span>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  </div>
);

const Compliance: React.FC = () => {
  return (
    <article className="prose prose-lg prose-slate max-w-none">
      <header className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600 text-white text-[9px] font-bold uppercase tracking-[0.2em] mb-6">
          Regulatory Intelligence
        </div>
        <h1 className="text-5xl font-bold mb-4 tracking-tight">Compliance Reference</h1>
        <p className="lead font-serif italic text-slate-600 text-xl">
          A definitive guide to the new PQC (Post-Quantum Cryptography) laws: NIS2, DORA, and NIST.
        </p>
      </header>

      {/* 1. NIS2 Directive */}
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-blue-100 text-blue-700 rounded-lg">
             <Globe size={24}/>
          </div>
          <h2 className="text-3xl font-serif font-bold m-0">NIS2 Directive</h2>
        </div>
        <p className="text-lg text-slate-600">
           The <strong>Network and Information Security (NIS2) Directive</strong> expands cybersecurity requirements to essential sectors (Energy, Transport, Health) across the EU.
        </p>
        <div className="bg-slate-50 border-l-4 border-blue-600 p-6 rounded-r-xl my-6 not-prose">
           <h4 className="font-bold text-slate-900 text-sm uppercase tracking-widest mb-2">Key Obligation: Supply Chain Security</h4>
           <p className="text-sm text-slate-600 m-0 leading-relaxed">
             Companies must assess the security of their suppliers. If your software vendor uses weak encryption, you are non-compliant.
           </p>
           <div className="mt-4 flex items-center gap-2 text-xs font-bold text-blue-700">
              <CheckCircle2 size={14}/> RivicQ CryptoBOM automatically audits supply chain dependencies.
           </div>
        </div>
      </section>

      {/* 2. DORA */}
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-indigo-100 text-indigo-700 rounded-lg">
             <Landmark size={24}/>
          </div>
          <h2 className="text-3xl font-serif font-bold m-0">DORA (Finance)</h2>
        </div>
        <p className="text-lg text-slate-600">
           The <strong>Digital Operational Resilience Act (DORA)</strong> mandates that financial institutions must prove they can withstand severe ICT disruptions.
        </p>
        <ComplianceTable 
          title="Financial Sector Rules"
          jurisdiction="EU Enforcement: Jan 2025"
          data={[
              { standard: "Article 9", mandate: "Protection of data integrity and confidentiality using state-of-the-art encryption.", deadline: "Jan 17, 2025", solution: "PQC Cloud HSM" },
              { standard: "RTS on Risks", mandate: "Policy for cryptographic key management and rotation.", deadline: "Active", solution: "Auto-Rotation" },
          ]}
        />
      </section>

      {/* 3. NIST PQC */}
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-emerald-100 text-emerald-700 rounded-lg">
             <FileCheck size={24}/>
          </div>
          <h2 className="text-3xl font-serif font-bold m-0">NIST PQC Standards</h2>
        </div>
        <p className="text-lg text-slate-600">
           The <strong>US National Institute of Standards and Technology (NIST)</strong> has finalized the algorithms that replace RSA and ECC.
        </p>
        
        <div className="not-prose grid md:grid-cols-2 gap-6 my-8">
           <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
              <h4 className="font-bold text-slate-900 mb-2">FIPS 203 (ML-KEM)</h4>
              <p className="text-xs text-slate-500 mb-4">Replaces RSA for Key Exchange (Encryption).</p>
              <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full">Supported by RivicQ</span>
           </div>
           <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
              <h4 className="font-bold text-slate-900 mb-2">FIPS 204 (ML-DSA)</h4>
              <p className="text-xs text-slate-500 mb-4">Replaces ECDSA for Digital Signatures (Identity).</p>
              <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full">Supported by RivicQ</span>
           </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white p-12 rounded-[2.5rem] mt-16 text-center shadow-2xl">
        <h3 className="text-white font-serif text-3xl mb-4 m-0">Download the Compliance Checklist</h3>
        <p className="text-slate-400 text-sm mb-8 max-w-xl mx-auto mt-4">
          A single PDF mapping RivicQ features to every clause in NIS2 and DORA.
        </p>
        <div className="flex justify-center">
            <a href="mailto:rivic.revan.ande@gmail.com?subject=Request Compliance Checklist" className="px-8 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-all flex items-center gap-2 uppercase tracking-widest text-xs">
                Get the Checklist <FileText size={16}/>
            </a>
        </div>
      </section>

    </article>
  );
};

export default Compliance;
