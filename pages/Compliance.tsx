
import React from 'react';
import { ShieldAlert, Globe, Landmark, AlertCircle, CheckCircle2, ExternalLink, ArrowRight, FileText, Gavel, FileCheck, ShieldCheck, Scale } from 'lucide-react';

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
          Compliance & Regulatory Intelligence
        </div>
        <h1 className="text-5xl font-bold mb-4 tracking-tight">Governance Reference</h1>
        <p className="lead font-serif italic text-slate-600 text-xl">
          Mapping RivicQ capability to the global PQC regulatory landscape.
        </p>
      </header>

      {/* Regulatory Badges Grid */}
      <section className="not-prose mb-24 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {[
          { name: "DORA", label: "EU Finance", desc: "Jan 2025 Enforcement", icon: <Landmark size={20}/> },
          { name: "NIS2", label: "EU Energy/Health", desc: "Oct 2024 Transposition", icon: <ShieldAlert size={20}/> },
          { name: "CRA", label: "EU Hardware", desc: "Product Resilience", icon: <FileCheck size={20}/> },
          { name: "CNSA", label: "US Gov/NSA", desc: "Suite 2.0 PQC", icon: <Scale size={20}/> },
          { name: "NIST", label: "Global PQC", desc: "ML-KEM / ML-DSA", icon: <Globe size={20}/> },
          { name: "BSI", label: "DE BSI", desc: "TR-02102-1", icon: <ShieldCheck size={20}/> }
        ].map((badge, i) => (
          <div key={i} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex flex-col items-center text-center group hover:bg-white hover:border-blue-500 transition-all duration-300">
            <div className="mb-4 p-2 bg-white rounded-lg text-slate-900 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
              {badge.icon}
            </div>
            <div className="text-xl font-black text-slate-900 mb-1">{badge.name}</div>
            <div className="text-[9px] font-bold text-blue-600 uppercase tracking-widest mb-1">{badge.label}</div>
            <div className="text-[8px] font-medium text-slate-400 uppercase tracking-tighter">{badge.desc}</div>
          </div>
        ))}
      </section>

      {/* 1. DORA & NIS2 */}
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-blue-100 text-blue-700 rounded-lg">
             <Landmark size={24}/>
          </div>
          <h2 className="text-3xl font-serif font-bold m-0">EU Directives (DORA & NIS2)</h2>
        </div>
        <p className="text-lg text-slate-600">
           The <strong>DORA (Digital Operational Resilience Act)</strong> and <strong>NIS2 Directive</strong> mandate state-of-the-art encryption for critical infrastructure and financial entities.
        </p>
        <ComplianceTable 
          title="EU Regulatory Framework"
          jurisdiction="Enforcement: 2024-2025"
          data={[
              { standard: "DORA Art. 9", mandate: "Institutional cryptographic data protection.", deadline: "Jan 17, 2025", solution: "vHSM vVault" },
              { standard: "NIS2 Art. 21", mandate: "Supply chain security & CBOM transparency.", deadline: "Oct 17, 2024", solution: "CryptoBOM SaaS" },
              { standard: "CRA (Annex I)", mandate: "Hardware-rooted secure boot & identity.", deadline: "Q3 2026", solution: "FIPS 140-3 HSM" },
          ]}
        />
      </section>

      {/* 2. NIST & CNSA 2.0 */}
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-emerald-100 text-emerald-700 rounded-lg">
             <FileCheck size={24}/>
          </div>
          <h2 className="text-3xl font-serif font-bold m-0">Global PQC Standards</h2>
        </div>
        <p className="text-lg text-slate-600">
           The finalized <strong>NIST Post-Quantum Cryptography</strong> standards (FIPS 203/204) are the mandatory baseline for future-proof security.
        </p>
        
        <div className="not-prose grid md:grid-cols-2 gap-6 my-8">
           <div className="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm group hover:border-blue-500 transition-all">
              <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-2">FIPS 203 (ML-KEM)</div>
              <h4 className="font-bold text-slate-900 text-xl mb-3 m-0">NIST Kyber</h4>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">Mandatory key exchange replacement for RSA and ECC. RivicQ provides native acceleration for ML-KEM-768.</p>
              <div className="flex items-center gap-2 text-emerald-600 font-bold text-[10px] uppercase tracking-widest">
                <CheckCircle2 size={12}/> Verified Implemention
              </div>
           </div>
           <div className="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm group hover:border-indigo-500 transition-all">
              <div className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-2">FIPS 204 (ML-DSA)</div>
              <h4 className="font-bold text-slate-900 text-xl mb-3 m-0">NIST Dilithium</h4>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">The new standard for digital signatures and sovereign identity. Full support in RivicQ RQSP Protocol.</p>
              <div className="flex items-center gap-2 text-emerald-600 font-bold text-[10px] uppercase tracking-widest">
                <CheckCircle2 size={12}/> Verified Implemention
              </div>
           </div>
        </div>
      </section>

      {/* 3. BSI Germany */}
      <section className="mb-24">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-slate-100 text-slate-900 rounded-lg border border-slate-200">
             <ShieldCheck size={24}/>
          </div>
          <h2 className="text-3xl font-serif font-bold m-0">BSI Germany (TR-02102)</h2>
        </div>
        <div className="p-8 bg-slate-900 text-white rounded-[3rem] relative overflow-hidden">
           <div className="absolute top-0 right-0 p-12 opacity-5 text-white">
             <Scale size={160} />
           </div>
           <p className="text-slate-400 text-lg leading-relaxed italic mb-8 relative z-10">
             "BSI TR-02102-1 requires crypto-agility and the adoption of PQC-hybrid schemes for long-term data confidentiality."
           </p>
           <div className="flex flex-col md:flex-row gap-8 relative z-10 border-t border-white/10 pt-8">
              <div>
                <div className="text-blue-400 font-bold text-xs uppercase tracking-widest mb-1">Status</div>
                <div className="text-white text-sm font-bold">Compliant via Hybrid RQSP</div>
              </div>
              <div>
                <div className="text-blue-400 font-bold text-xs uppercase tracking-widest mb-1">Local Residency</div>
                <div className="text-white text-sm font-bold">Berlin/Frankfurt Node Deployment</div>
              </div>
           </div>
        </div>
      </section>

      <section className="py-24 text-center not-prose">
        <h3 className="text-3xl font-serif font-bold text-slate-900 mb-6">Audit Readiness</h3>
        <p className="text-slate-500 mb-10 max-w-xl mx-auto italic">
          Request a full regulatory mapping of your infrastructure to NIST and DORA standards.
        </p>
        <a href="mailto:contact@rivicq.xyz" className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-blue-500 transition-all shadow-xl shadow-blue-500/20">
          Request Compliance Scoping <ArrowRight size={18}/>
        </a>
      </section>

    </article>
  );
};

export default Compliance;
