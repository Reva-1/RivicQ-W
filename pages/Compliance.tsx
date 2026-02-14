
import React from 'react';
import { ShieldAlert, Globe, Landmark, AlertCircle, CheckCircle2, ShieldCheck, Search, Database, Lock, ExternalLink, ArrowRight, FileText } from 'lucide-react';

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
      <h1>PQC Compliance & Regulatory Standards</h1>
      <p className="lead font-serif italic text-slate-600">
        Navigating the mandatory transition to Post-Quantum Cryptography across major global jurisdictions.
      </p>

      {/* 1. Global Transition Timeline */}
      <section className="mt-12">
        <h2 className="text-3xl font-serif font-bold mb-8">01. Global Transition Timeline</h2>
        <div className="not-prose space-y-8 my-12">
            {[
                { year: "2024", title: "NIST FIPS Finalization", desc: "Release of FIPS 203 (ML-KEM) and FIPS 204 (ML-DSA)." },
                { year: "2025", title: "DORA Enforcement", desc: "Mandatory ICT risk frameworks for EU financial entities." },
                { year: "2030", title: "CNSA 2.0 Deadline", desc: "Mandatory PQC for all US National Security Systems." },
                { year: "2035", title: "Classical Retirement", desc: "The target date for complete removal of legacy RSA/ECC primitives." }
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

      {/* 2. European Union (DORA/NIS2) */}
      <section className="mb-20">
        <h2 className="text-3xl font-serif font-bold mb-8">02. European Union Framework</h2>
        <div className="not-prose bg-amber-50 border-l-4 border-amber-500 p-6 my-8 rounded-r-xl mb-12">
          <div className="flex items-start gap-4">
              <ShieldAlert className="text-amber-600 shrink-0 mt-1" />
              <div>
                  <h4 className="m-0 font-bold text-amber-900 uppercase tracking-widest text-xs">Regulation Alert: EU DORA</h4>
                  <p className="text-sm text-amber-800 mt-2 leading-relaxed">
                      The <strong>Digital Operational Resilience Act (DORA)</strong> becomes enforceable on <strong>January 17, 2025</strong>. Financial nodes must prove cryptographic agility and readiness for PQC migration.
                  </p>
                  <a href="https://eur-lex.europa.eu/eli/reg/2022/2554/oj" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-amber-900 hover:underline mt-2 inline-flex items-center gap-1">
                     View Official Text (EUR-Lex) <ExternalLink size={10}/>
                  </a>
              </div>
          </div>
        </div>
        <ComplianceTable 
          title="EU Regulations"
          jurisdiction="EUROPEAN COMMISSION"
          data={[
              { standard: "DORA", mandate: "ICT Risk & Crypto-Agility", deadline: "Jan 17, 2025", status: "MANDATORY" },
              { standard: "NIS2", mandate: "State-of-the-art Cryptography", deadline: "Oct 17, 2024", status: "ACTIVE" },
              { standard: "Cyber Resilience Act", mandate: "Vulnerability Disclosure", deadline: "2026", status: "PHASING IN" }
          ]}
        />
      </section>

      {/* 3. BSI Germany (TR-02102) */}
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-6">
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/ed/BSI_Logo.svg" alt="BSI Logo" className="h-8 m-0" />
          <h2 className="text-3xl font-serif font-bold m-0">03. BSI Compliance (Germany)</h2>
        </div>
        <p className="text-slate-600">
          The <strong>Federal Office for Information Security (BSI)</strong> provides the most granular technical guidelines for cryptographic mechanisms in Germany.
        </p>
        <div className="not-prose bg-white border border-slate-200 rounded-2xl p-8 shadow-sm group">
           <div className="flex justify-between items-start mb-6">
             <h4 className="text-slate-900 font-bold flex items-center gap-2 m-0">
               <Landmark size={18} className="text-blue-600"/> BSI TR-02102-1
             </h4>
             <a href="https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Publikationen/TechnischeRichtlinien/TR02102/bsi-tr-02102-1-pdf.html" 
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[10px] font-bold text-blue-600 uppercase tracking-widest hover:text-slate-900 transition-colors">
               Official PDF <ExternalLink size={12}/>
             </a>
           </div>
           <p className="text-sm text-slate-500 mb-6 leading-relaxed">
             This guideline recommends the adoption of <strong>Hybrid Cryptography</strong> to maintain backward compatibility while ensuring resistance against future quantum decryption.
           </p>
           <ul className="space-y-3 p-0 m-0">
              {[
                "Hybrid ML-KEM Implementation (Module-Lattice-based)",
                "Stateful Hash-Based Signatures (LMS/XMSS) for firmware",
                "Strict use of AES-256 for symmetric data-at-rest"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-xs font-bold text-slate-700 uppercase tracking-wide">
                  <CheckCircle2 size={14} className="text-emerald-500"/> {item}
                </li>
              ))}
           </ul>
           <div className="mt-8 pt-6 border-t border-slate-50 flex justify-end">
              <a href="https://www.bsi.bund.de/EN/Service-Navi/Publications/TechnicalGuidelines/tr02102/tr02102_node.html" 
                 target="_blank" rel="noopener noreferrer"
                 className="text-[10px] font-bold text-slate-400 hover:text-blue-600 flex items-center gap-1 transition-colors uppercase tracking-widest">
                Learn more at BSI.bund.de <ArrowRight size={12}/>
              </a>
           </div>
        </div>
      </section>

      {/* 4. USA Mandates (NIST) */}
      <section className="mb-20">
        <h2 className="text-3xl font-serif font-bold mb-8">04. USA Federal Mandates (NIST)</h2>
        <div className="not-prose mb-8 grid md:grid-cols-2 gap-4">
          <a href="https://csrc.nist.gov/pubs/fips/203/final" target="_blank" className="p-4 bg-white border border-slate-200 rounded-xl flex items-center justify-between hover:border-blue-500 transition-all group">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-all">
                <FileText size={18}/>
              </div>
              <span className="text-xs font-bold text-slate-900 uppercase tracking-widest">NIST FIPS 203 (ML-KEM)</span>
            </div>
            <ExternalLink size={14} className="text-slate-300"/>
          </a>
          <a href="https://csrc.nist.gov/pubs/fips/204/final" target="_blank" className="p-4 bg-white border border-slate-200 rounded-xl flex items-center justify-between hover:border-blue-500 transition-all group">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <FileText size={18}/>
              </div>
              <span className="text-xs font-bold text-slate-900 uppercase tracking-widest">NIST FIPS 204 (ML-DSA)</span>
            </div>
            <ExternalLink size={14} className="text-slate-300"/>
          </a>
        </div>
        <ComplianceTable 
          title="USA National Standards"
          jurisdiction="UNITED STATES (NIST / NSA)"
          data={[
              { standard: "NIST FIPS 203/204", mandate: "PQC Algorithm Adoption", deadline: "Aug 2024", status: "ACTIVE" },
              { standard: "CNSA 2.0", mandate: "NSS Implementation", deadline: "2030-2033", status: "MANDATORY" },
              { standard: "Quantum Readiness Act", mandate: "Agency Inventory", deadline: "Active", status: "ACTIVE" }
          ]}
        />
        <div className="mt-6 p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600 italic">
          Ref: <a href="https://www.nist.gov/news-events/news/2024/08/nist-releases-first-3-finalized-post-quantum-cryptography-standards" target="_blank" className="font-bold underline">NIST Release: First 3 Finalized PQC Standards (Aug 2024)</a>
        </div>
      </section>

      <section className="bg-slate-900 text-white p-12 rounded-[2.5rem] mt-16 text-center">
        <h3 className="text-white font-serif text-3xl mb-4 m-0">Does your roadmap meet these deadlines?</h3>
        <p className="text-slate-400 text-sm mb-8 max-w-xl mx-auto mt-4">
          Avoid the "last-minute scramble" for DORA and BSI compliance. Let's map your migration path today.
        </p>
        <div className="flex justify-center">
            <a href="mailto:rivic.revan.ande@gmail.com" className="px-8 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-all flex items-center gap-2">
                Consult with Compliance Team <ArrowRight size={18}/>
            </a>
        </div>
      </section>

    </article>
  );
};

export default Compliance;
