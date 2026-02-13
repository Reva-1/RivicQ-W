
import React from 'react';
import { Target, TrendingUp, BarChart3, Globe2, LayoutGrid, ArrowRight, ExternalLink, Zap, Lock, Microscope, Beaker, ShieldCheck, PieChart, Users, Layers, TrendingDown, AlertTriangle, Info, CheckCircle2, Landmark, FileText, BarChart } from 'lucide-react';

const PitchDeck: React.FC = () => {
  return (
    <article className="prose prose-lg prose-slate max-w-none">
      <header className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-[9px] font-bold uppercase tracking-[0.2em] mb-6 shadow-sm">
          RivicQ Private Placement • Series Pre-Seed • Q1 2026
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-slate-900 leading-tight">
          Investor <span className="text-blue-600">Pitch Deck.</span>
        </h1>
        <p className="text-xl text-slate-500 font-serif italic max-w-2xl leading-relaxed">
          Addressing the $482B cryptographic debt crisis through hardware-native post-quantum orchestration.
        </p>
      </header>

      {/* 1. Market Analysis (TAM/SAM/SOM) */}
      <section className="mb-24">
        <div className="flex items-center gap-4 mb-10">
          <div className="p-3 bg-blue-600 text-white rounded-2xl shadow-lg shadow-blue-200">
            <PieChart size={24} />
          </div>
          <div>
            <h2 className="text-3xl font-serif font-bold text-slate-900 m-0">Market Opportunity</h2>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">Sizing the Quantum Migration</p>
          </div>
        </div>
        
        <div className="not-prose grid md:grid-cols-3 gap-8 mb-8">
          <div className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:border-blue-200 transition-all relative group overflow-hidden">
            <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:scale-110 transition-transform">
               <Globe2 size={120} />
            </div>
            <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">TAM (Total Addressable) [1]</span>
            <h4 className="text-4xl font-bold text-slate-900 mt-2 mb-4">$482B</h4>
            <p className="text-xs text-slate-500 leading-relaxed m-0">Global cybersecurity spend by 2030. The "Harvest Now, Decrypt Later" threat makes PQC the primary growth driver.</p>
          </div>
          <div className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:border-indigo-200 transition-all relative group overflow-hidden">
            <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:scale-110 transition-transform">
               <Landmark size={120} />
            </div>
            <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest">SAM (Serviceable Addressable) [2]</span>
            <h4 className="text-4xl font-bold text-slate-900 mt-2 mb-4">$12B</h4>
            <p className="text-xs text-slate-500 leading-relaxed m-0">The highly regulated segment (Finance/Gov) requiring FIPS-certified HSM and CBOM automation services.</p>
          </div>
          <div className="p-8 bg-slate-900 text-white rounded-[2.5rem] shadow-xl hover:scale-[1.02] transition-all relative group overflow-hidden">
            <div className="absolute -right-4 -bottom-4 opacity-[0.05] group-hover:scale-110 transition-transform">
               <Target size={120} />
            </div>
            <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">SOM (Serviceable Obtainable) [3]</span>
            <h4 className="text-4xl font-bold text-white mt-2 mb-4">$850M</h4>
            <p className="text-xs text-slate-400 leading-relaxed m-0">RivicQ Year 5 Target: Capture 7% of Tier-1 EU Critical Nodes through Leap Berlin hub expansion.</p>
          </div>
        </div>

        {/* References Footer */}
        <div className="not-prose bg-slate-50 p-6 rounded-2xl border border-slate-100">
          <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
            <Info size={12}/> Global Market Data & Reference Mapping
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[10px] text-slate-500 font-medium">
            <div className="space-y-1">
              <span className="text-slate-900 font-bold block">[1] Global Cybersecurity</span>
              <a href="https://www.gartner.com/en/newsroom/press-releases/2024-09-11-gartner-forecasts-global-information-security-spending-to-grow-15-percent-in-2025" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 underline flex items-center gap-1">
                Gartner Forecast 2024-2030 <ExternalLink size={10}/>
              </a>
            </div>
            <div className="space-y-1">
              <span className="text-slate-900 font-bold block">[2] PQC Market Analysis</span>
              <a href="https://www.fortunebusinessinsights.com/quantum-cryptography-market-103131" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 underline flex items-center gap-1">
                Fortune Business Insights: Quantum Market <ExternalLink size={10}/>
              </a>
            </div>
            <div className="space-y-1">
              <span className="text-slate-900 font-bold block">[3] RivicQ Internal Projection</span>
              <span className="text-slate-400">Mapped to 340 EU Financial & Infrastructure Critical Nodes at €2.5M ARPU.</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Regulatory Mapping */}
      <section className="mb-24">
        <div className="flex items-center gap-4 mb-10">
          <div className="p-3 bg-emerald-600 text-white rounded-2xl shadow-lg shadow-emerald-100">
            <ShieldCheck size={24} />
          </div>
          <div>
            <h2 className="text-3xl font-serif font-bold text-slate-900 m-0">Regulatory Mapping</h2>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">Direct Compliance Alignment</p>
          </div>
        </div>

        <div className="not-prose space-y-4">
          {[
            { 
              reg: "EU DORA (Digital Operational Resilience Act)", 
              mapping: "Article 7 (ICT Risk) & Article 8 (Cryptographic Hygiene)", 
              solution: "RivicQ automated CryptoBOM scanners provide mandatory visibility and rotation proof for EU Financial nodes.",
              deadline: "January 2025 (Enforced)",
              ref: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32022R2554"
            },
            { 
              reg: "NIST FIPS 203 / 204", 
              mapping: "Implementation of ML-KEM and ML-DSA standards", 
              solution: "Our HSM mesh natively orchestrates NIST-finalized algorithms, removing implementation risk from the end user.",
              deadline: "August 2024 (Finalized)",
              ref: "https://csrc.nist.gov/pubs/fips/203/final"
            },
            { 
              reg: "BSI TR-02102-1 (Germany)", 
              mapping: "Hybrid Encryption & Stateful Signatures", 
              solution: "Hybrid X25519/ML-KEM tunnels meet German federal guidelines for mission-critical infrastructure data.",
              deadline: "Active Guideline",
              ref: "https://www.bsi.bund.de/DE/Service-Navi/Publikationen/TechnischeRichtlinien/tr02102/tr02102_node.html"
            }
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white border border-slate-100 rounded-3xl flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm hover:border-emerald-300 transition-colors group">
              <div className="max-w-xl">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-slate-900 font-bold m-0">{item.reg}</h4>
                  <span className="text-[9px] font-bold px-2 py-0.5 bg-emerald-50 text-emerald-600 rounded-full">{item.deadline}</span>
                </div>
                <p className="text-[10px] text-slate-400 font-mono font-bold uppercase tracking-widest mb-2">{item.mapping}</p>
                <p className="text-xs text-slate-500 leading-relaxed m-0">{item.solution}</p>
              </div>
              <a href={item.ref} target="_blank" rel="noopener noreferrer" className="p-3 bg-emerald-50 text-emerald-600 rounded-xl hover:bg-emerald-600 hover:text-white transition-all">
                <ExternalLink size={20}/>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SWOT Analysis */}
      <section className="mb-24">
        <div className="flex items-center gap-4 mb-10">
          <div className="p-3 bg-slate-900 text-white rounded-2xl shadow-lg">
            <LayoutGrid size={24} />
          </div>
          <div>
            <h2 className="text-3xl font-serif font-bold text-slate-900 m-0">SWOT Analysis</h2>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">Strategic Positioning</p>
          </div>
        </div>

        <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 bg-emerald-50/30 border border-emerald-100 rounded-[2.5rem]">
            <h4 className="flex items-center gap-2 text-emerald-800 font-bold text-sm mb-4 uppercase tracking-widest">
              <Zap size={16}/> Strengths
            </h4>
            <ul className="text-xs space-y-3 text-emerald-900/70 p-0 list-none font-medium">
              <li>• Berlin Leap Quantum Hub Residency (Direct Lab Access)</li>
              <li>• FIPS 140-3 Hardware Native Approach (Immutable RoT)</li>
              <li>• Hybrid Cryptographic Orchestration (No Single Point of Failure)</li>
              <li>• TU Berlin Academic Alignment & Validation Pipeline</li>
            </ul>
          </div>
          <div className="p-8 bg-amber-50/30 border border-amber-100 rounded-[2.5rem]">
            <h4 className="flex items-center gap-2 text-amber-800 font-bold text-sm mb-4 uppercase tracking-widest">
              <TrendingDown size={16}/> Weaknesses
            </h4>
            <ul className="text-xs space-y-3 text-amber-900/70 p-0 list-none font-medium">
              <li>• Early-stage TRL (TRL 4 - Lab Prototyping)</li>
              <li>• Talent scarcity for specialized PQC mathematicians</li>
              <li>• High initial CAPEX for custom HSM/ASIC fabrication</li>
              <li>• Long sales cycle for Gov/Fin procurement nodes</li>
            </ul>
          </div>
          <div className="p-8 bg-blue-50/30 border border-blue-100 rounded-[2.5rem]">
            <h4 className="flex items-center gap-2 text-blue-800 font-bold text-sm mb-4 uppercase tracking-widest">
              <Globe2 size={16}/> Opportunities
            </h4>
            <ul className="text-xs space-y-3 text-blue-900/70 p-0 list-none font-medium">
              <li>• Enforcement of EU DORA (Jan 2025) as a market catalyst</li>
              <li>• Mandatory NIST PQC transition for US National Security</li>
              <li>• Expansion into NATO/EU Defense Supply Chain contracts</li>
              <li>• Increasing "Harvest Now, Decrypt Later" awareness in Fintech</li>
            </ul>
          </div>
          <div className="p-8 bg-red-50/30 border border-red-100 rounded-[2.5rem]">
            <h4 className="flex items-center gap-2 text-red-800 font-bold text-sm mb-4 uppercase tracking-widest">
              <AlertTriangle size={16}/> Threats
            </h4>
            <ul className="text-xs space-y-3 text-red-900/70 p-0 list-none font-medium">
              <li>• Big Tech (AWS/Azure) building proprietary PQC cloud modules</li>
              <li>• Unpredicted mathematical breakthroughs on Lattice problems</li>
              <li>• Fragmentation of PQC standards between global jurisdictions</li>
              <li>• Aggressive consolidation by legacy HSM giants (Thales/DigiCert)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Business & Revenue Model */}
      <section className="mb-24">
        <div className="flex items-center gap-4 mb-10">
          <div className="p-3 bg-indigo-600 text-white rounded-2xl shadow-lg shadow-indigo-100">
            <Layers size={24} />
          </div>
          <div>
            <h2 className="text-3xl font-serif font-bold text-slate-900 m-0">Revenue Model</h2>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">Multi-Tiered Value Capture</p>
          </div>
        </div>

        <div className="not-prose grid md:grid-cols-3 gap-6 mb-12">
          <div className="p-8 border border-slate-100 rounded-3xl bg-slate-50 hover:border-blue-200 transition-all group">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-blue-100 text-blue-600 rounded-lg"><BarChart size={16}/></div>
              <h4 className="text-slate-900 font-bold m-0 text-sm">Subscription (SaaS)</h4>
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed mb-6 italic">Cybersecurity & Visibility Layer</p>
            <p className="text-[11px] text-slate-600 leading-relaxed mb-6">Continuous CryptoBOM scanning for vulnerabilities in the CI/CD pipeline. Billed per repository/service.</p>
            <div className="text-blue-600 font-mono text-[10px] font-bold uppercase tracking-widest group-hover:translate-x-1 transition-transform">€15k - €85k ACV</div>
          </div>
          <div className="p-8 border border-slate-100 rounded-3xl bg-slate-50 hover:border-indigo-200 transition-all group">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg"><Lock size={16}/></div>
              <h4 className="text-slate-900 font-bold m-0 text-sm">Managed HSM Nodes</h4>
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed mb-6 italic">PQC Hardware & Root of Trust</p>
            <p className="text-[11px] text-slate-600 leading-relaxed mb-6">Leasing of physical PQC-accelerated HSM units for financial settlement and air-gapped Gov nodes.</p>
            <div className="text-indigo-600 font-mono text-[10px] font-bold uppercase tracking-widest group-hover:translate-x-1 transition-transform">CAPEX + License Fee</div>
          </div>
          <div className="p-8 border border-slate-100 rounded-3xl bg-slate-50 hover:border-emerald-200 transition-all group">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg"><Microscope size={16}/></div>
              <h4 className="text-slate-900 font-bold m-0 text-sm">PQC Advisory</h4>
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed mb-6 italic">Strategic Migration & Red-Team</p>
            <p className="text-[11px] text-slate-600 leading-relaxed mb-6">One-time high-margin strategic migration audits and offensive security (Red Team) for infrastructure nodes.</p>
            <div className="text-emerald-600 font-mono text-[10px] font-bold uppercase tracking-widest group-hover:translate-x-1 transition-transform">Project Based (TCV)</div>
          </div>
        </div>

        {/* Strategic Revenue Mapping Footer */}
        <div className="not-prose bg-slate-900 rounded-[2rem] p-8 text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 opacity-10 p-10"><BarChart3 size={140}/></div>
          <h5 className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
            <Info size={12}/> Revenue Stream Verification & Market Mapping
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-[10px] relative z-10">
            <div className="p-4 bg-white/5 rounded-xl border border-white/10">
              <span className="font-bold text-white block mb-2 uppercase tracking-widest">Cybersecurity Integration</span>
              <p className="text-slate-400 m-0 leading-relaxed mb-3">Our SaaS model maps to the $482B general cybersecurity TAM, capturing the mandatory audit requirements of DORA Article 8.</p>
              <a href="https://cybersecurityventures.com/cybersecurity-market-size-and-share/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white underline flex items-center gap-1">
                Cybersecurity Market Ref <ExternalLink size={8}/>
              </a>
            </div>
            <div className="p-4 bg-white/5 rounded-xl border border-white/10">
              <span className="font-bold text-white block mb-2 uppercase tracking-widest">PQC Migration Services</span>
              <p className="text-slate-400 m-0 leading-relaxed mb-3">Professional services scale with the $12B PQC SAM, driven by the NIST migration deadline of August 2024.</p>
              <a href="https://csrc.nist.gov/projects/post-quantum-cryptography" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white underline flex items-center gap-1">
                NIST PQC Standardization <ExternalLink size={8}/>
              </a>
            </div>
            <div className="p-4 bg-white/5 rounded-xl border border-white/10">
              <span className="font-bold text-white block mb-2 uppercase tracking-widest">HSM Hardware Sales</span>
              <p className="text-slate-400 m-0 leading-relaxed mb-3">Physical node leasing correlates with the HSM hardware market growth in the Financial and Defense supply chains.</p>
              <a href="https://www.grandviewresearch.com/industry-analysis/hardware-security-modules-hsm-market" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white underline flex items-center gap-1">
                HSM Market Forecast <ExternalLink size={8}/>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-slate-900 text-white p-12 md:p-16 rounded-[3rem] relative overflow-hidden text-center shadow-2xl">
        <div className="absolute inset-0 bg-technical opacity-5"></div>
        <h2 className="text-white text-3xl font-serif font-bold mb-4 m-0 relative z-10">Access the Data Room</h2>
        <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto mt-4 relative z-10">
          Request the deep-dive technical Whitepaper and full 2026-2032 revenue projections.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
          <a href="mailto:rivic.revan.ande@gmail.com?subject=Investor Inquiry: Full Deck & Financial Model" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-all flex items-center gap-2 justify-center shadow-xl shadow-blue-500/20">
            Connect with IR <ArrowRight size={18}/>
          </a>
          <a href="/#/investors" className="px-8 py-4 border border-slate-700 text-white font-bold rounded-xl hover:bg-white/5 transition-all flex items-center gap-2 justify-center">
            Investment Status <Beaker size={18}/>
          </a>
        </div>
      </section>
      
      <footer className="mt-12 text-center">
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.4em] m-0">
          Confidential • RivicQ Technologies GmbH • Berlin
        </p>
      </footer>
    </article>
  );
};

export default PitchDeck;
