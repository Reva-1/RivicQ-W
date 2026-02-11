
import React from 'react';
import { ShieldAlert, Globe, Landmark, AlertCircle, CheckCircle2 } from 'lucide-react';

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
                    <th className="p-4 font-bold text-slate-900">Standard / Regulation</th>
                    <th className="p-4 font-bold text-slate-900">Mandate / Requirement</th>
                    <th className="p-4 font-bold text-slate-900">Deadline</th>
                    <th className="p-4 font-bold text-slate-900">Status</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
                {data.map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                        <td className="p-4 font-bold text-slate-800">{row.standard}</td>
                        <td className="p-4 text-slate-600">{row.mandate}</td>
                        <td className="p-4 font-mono font-bold text-slate-900 whitespace-nowrap">{row.deadline}</td>
                        <td className="p-4">
                            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                                row.status === 'ACTIVE' ? 'bg-emerald-100 text-emerald-800' : 
                                row.status === 'MANDATORY' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'
                            }`}>
                                {row.status === 'ACTIVE' ? <CheckCircle2 size={10}/> : <AlertCircle size={10}/>}
                                {row.status}
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
      <h1>PQC Compliance Deadlines</h1>
      <p className="lead font-serif italic text-slate-600">
        Global mandates for Post-Quantum Cryptography transition.
      </p>

      {/* Hero Alert */}
      <div className="not-prose bg-amber-50 border-l-4 border-amber-500 p-6 my-8 rounded-r-xl">
        <div className="flex items-start gap-4">
            <ShieldAlert className="text-amber-600 shrink-0 mt-1" />
            <div>
                <h4 className="m-0 font-bold text-amber-900">Critical Migration Alert: EU DORA</h4>
                <p className="text-sm text-amber-800 mt-1 leading-relaxed">
                    The <strong>Digital Operational Resilience Act (DORA)</strong> becomes enforceable in <strong>January 2025</strong>. Financial nodes must demonstrate crypto-agility and PQC readiness.
                </p>
            </div>
        </div>
      </div>

      <section>
        <h2>Global Transition Timeline</h2>
        <div className="not-prose space-y-8 my-12">
            {[
                { year: "2024", title: "NIST FIPS Standardization", desc: "NIST finalized FIPS 203 (ML-KEM) and 204 (ML-DSA) as official global standards." },
                { year: "2025", title: "DORA Enforcement (EU)", desc: "Mandatory compliance for financial institutions to secure systems against cryptographic failure." },
                { year: "2030", title: "NSA CNSA 2.0 Deadline", desc: "Mandatory PQC for all firmware and networking hardware used in National Security Systems." },
                { year: "2035", title: "Classical Phase-out", desc: "Target date for retirement of all non-quantum resistant legacy cryptography (RSA/ECC)." }
            ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center font-bold text-sm z-10 group-hover:bg-blue-600 transition-colors">
                            {item.year}
                        </div>
                        <div className="w-0.5 h-full bg-slate-100 -mt-2"></div>
                    </div>
                    <div className="pb-8">
                        <h4 className="m-0 font-serif font-bold text-lg text-slate-900">{item.title}</h4>
                        <p className="text-sm text-slate-600 mt-2 leading-relaxed">{item.desc}</p>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* European Union */}
      <ComplianceTable 
        title="European Framework"
        jurisdiction="EUROPEAN UNION"
        data={[
            { standard: "DORA", mandate: "ICT Risk & Crypto-Agility", deadline: "Jan 17, 2025", status: "MANDATORY" },
            { standard: "NIS2", mandate: "State-of-the-art Cryptography", deadline: "Oct 17, 2024", status: "ACTIVE" },
            { standard: "Cyber Resilience Act", mandate: "Hardware Security Boundaries", deadline: "2026", status: "PHASING IN" }
        ]}
      />

      {/* United States */}
      <ComplianceTable 
        title="USA Federal Mandates"
        jurisdiction="UNITED STATES (NIST / NSA)"
        data={[
            { standard: "NIST FIPS 203/204", mandate: "PQC Algorithm Adoption", deadline: "Aug 2024", status: "ACTIVE" },
            { standard: "CNSA 2.0", mandate: "Mandatory PQC for NSS", deadline: "2030-2033", status: "MANDATORY" },
            { standard: "Quantum Readiness Act", mandate: "Federal Data Migration Strategy", deadline: "Active", status: "ACTIVE" }
        ]}
      />

      <section className="bg-slate-50 p-8 rounded-2xl border border-slate-200 mt-16">
        <div className="flex items-center gap-3 mb-4">
            <AlertCircle className="text-blue-600" />
            <h3 className="m-0 font-serif font-bold text-slate-900">How to Prepare?</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
            <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-2">1. Inventory (CryptoBOM)</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                    Identify legacy RSA/ECC primitives. Use the RivicQ AI Auditor to inventory your cryptographic debt.
                </p>
            </div>
            <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-2">2. Hybrid Migration</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                    Don't rip and replace. Implement hybrid schemes to maintain current compliance while gaining quantum safety.
                </p>
            </div>
        </div>
      </section>

    </article>
  );
};

export default Compliance;
