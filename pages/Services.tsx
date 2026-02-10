import React from 'react';
import { ShieldAlert, Eye, Terminal, Activity, Server, Lock } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <article className="prose prose-lg prose-slate max-w-none">
      <h1>Cybersecurity Services</h1>
      <p className="lead text-xl text-gray-600 font-serif italic">
        Beyond our core platform, we offer expert services to secure your infrastructure against classical and quantum threats.
      </p>

      {/* Offensive Security */}
      <section className="mt-12">
        <h2 className="flex items-center gap-2">
          <ShieldAlert className="text-red-600" />
          Offensive Security
        </h2>
        <div className="grid gap-8 md:grid-cols-2 not-prose">
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 hover:border-slate-900 transition-colors">
             <h3 className="font-serif text-xl font-bold mb-2">Red Teaming</h3>
             <p className="text-sm text-slate-600 mb-4">
               Full-scope adversary simulation. We simulate Advanced Persistent Threats (APTs) targeting your people, processes, and technology to test your real-world detection and response capabilities.
             </p>
             <ul className="text-xs list-disc pl-4 text-slate-500 space-y-1">
               <li>APT Simulation & Scenario Design</li>
               <li>Social Engineering (Phishing/Vishing)</li>
               <li>Assumed Breach Assessments</li>
             </ul>
          </div>

          <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 hover:border-slate-900 transition-colors">
             <h3 className="font-serif text-xl font-bold mb-2">Penetration Testing</h3>
             <p className="text-sm text-slate-600 mb-4">
               Technical security assessments to identify vulnerabilities before attackers do. We focus on finding deep logic flaws and implementation errors in your stack.
             </p>
             <ul className="text-xs list-disc pl-4 text-slate-500 space-y-1">
               <li>Web App, API & Cloud Security</li>
               <li>Smart Contract & Web3 Audits</li>
               <li>PQC Implementation Review</li>
             </ul>
          </div>
        </div>
      </section>

      {/* Advisory & Compliance */}
      <section className="mt-12">
        <h2 className="flex items-center gap-2">
          <Eye className="text-blue-600" />
          Advisory & Compliance
        </h2>
        <div className="space-y-8">
           <div>
             <h3 className="font-bold text-gray-900 mt-0">PQC Consulting</h3>
             <p>
               Strategic guidance on migrating to Post-Quantum Cryptography. We help you conduct inventory assessments and create a roadmap to replace legacy RSA/ECC with NIST-standard algorithms (ML-KEM, ML-DSA) without disrupting business operations.
             </p>
           </div>
           
           <div className="grid md:grid-cols-2 gap-8">
               <div>
                 <h3 className="font-bold text-gray-900">Internal Audits</h3>
                 <p className="text-gray-700">
                   Gap analysis and pre-assessment for major security frameworks. We prepare you for external certification audits by identifying non-conformities early.
                 </p>
                 <div className="flex gap-2 mt-2 not-prose">
                    <span className="px-2 py-1 bg-slate-100 text-[10px] font-bold text-slate-600 rounded">ISO 27001</span>
                    <span className="px-2 py-1 bg-slate-100 text-[10px] font-bold text-slate-600 rounded">TISAX</span>
                 </div>
               </div>

               <div>
                 <h3 className="font-bold text-gray-900">Compliance Automation</h3>
                 <p className="text-gray-700">
                   Implementation of automated evidence collection systems to satisfy DORA, NIS2, and GDPR requirements. Reduce the manual burden of compliance documentation.
                 </p>
               </div>
           </div>
        </div>
      </section>

      {/* DevSecOps Architecture Diagram Section */}
      <section className="mt-16 mb-8">
        <h2 className="flex items-center gap-2 mb-8">
            <Server className="text-gray-800"/>
            Enterprise Architecture
        </h2>
        
        <div className="not-prose bg-white border border-slate-200 rounded-2xl p-6 md:p-12 shadow-sm overflow-x-auto">
            <div className="flex flex-col gap-8 text-center text-[10px] font-bold min-w-[600px] uppercase tracking-widest">
                
                {/* Flow inputs */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
                    <div className="flex flex-col items-center group">
                        <div className="mb-4 text-slate-400 flex items-center gap-2"><Terminal size={12}/> Repository</div>
                        <div className="p-4 border border-slate-200 rounded-xl bg-slate-50 w-full max-w-[160px]">
                            Source Git
                        </div>
                        <div className="h-6 w-px bg-slate-200"></div>
                    </div>
                    
                    <div className="flex flex-col items-center group">
                         <div className="mb-4 text-slate-400 flex items-center gap-2"><ShieldAlert size={12}/> Security</div>
                         <div className="p-4 border border-blue-200 rounded-xl bg-blue-50/30 w-full max-w-[160px] text-blue-600">
                            RivicQ Scanner
                         </div>
                         <div className="h-6 w-px bg-slate-200"></div>
                    </div>

                    <div className="flex flex-col items-center group">
                        <div className="mb-4 text-slate-400 flex items-center gap-2"><Activity size={12}/> Policy</div>
                         <div className="p-4 border border-slate-200 rounded-xl bg-slate-50 w-full max-w-[160px]">
                            Policy Engine
                         </div>
                         <div className="h-6 w-px bg-slate-200"></div>
                    </div>
                </div>

                {/* Integration Bus / Pipeline */}
                <div className="relative border border-slate-100 rounded-2xl p-8 bg-slate-50/50">
                    <span className="absolute top-0 left-6 -translate-y-1/2 bg-white border border-slate-100 px-3 py-1 text-slate-400 text-[9px] rounded-full">Pipeline Stage</span>
                    
                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <div className="p-3 border border-slate-200 text-slate-400 rounded-lg bg-white w-32">Build</div>
                        <div className="hidden md:block w-8 h-px bg-slate-200"></div>
                        
                        <div className="p-3 border border-blue-600 rounded-lg bg-white w-32 shadow-sm text-blue-600">
                            Scan
                        </div>
                        <div className="hidden md:block w-8 h-px bg-slate-200"></div>

                        <div className="p-3 border border-slate-900 rounded-lg bg-slate-900 text-white w-32">Gate</div>
                        <div className="hidden md:block w-8 h-px bg-slate-200"></div>

                        <div className="p-3 border border-slate-200 rounded-lg bg-white w-32 text-slate-400">Registry</div>
                    </div>
                </div>

                {/* Output Arrow */}
                <div className="flex justify-center">
                    <div className="h-8 w-px bg-slate-200"></div>
                </div>

                {/* Runtime Environment */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="border border-slate-200 rounded-xl p-8 flex flex-col items-center justify-center bg-slate-50 min-h-[120px]">
                        <div className="text-slate-900 mb-1">Runtime Cluster</div>
                        <div className="text-[9px] text-slate-400 font-normal">Kubernetes Environment</div>
                    </div>

                    <div className="flex flex-col gap-3">
                         <div className="border border-slate-200 rounded-lg p-3 flex items-center justify-center gap-3 bg-white text-slate-400">
                            <Activity size={14}/> 
                            <span>Threat Detection</span>
                         </div>
                         <div className="border border-slate-900 rounded-lg p-3 flex items-center justify-center gap-3 bg-slate-900 text-white">
                            <Lock size={14}/> 
                            <span>RivicQ HSM Mesh</span>
                         </div>
                    </div>
                </div>

            </div>
        </div>
      </section>

    </article>
  );
};

export default Services;