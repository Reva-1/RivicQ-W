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
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:border-black transition-colors">
             <h3 className="font-serif text-xl font-bold mb-2">Red Teaming</h3>
             <p className="text-sm text-gray-600 mb-4">
               Full-scope adversary simulation. We simulate Advanced Persistent Threats (APTs) targeting your people, processes, and technology to test your real-world detection and response capabilities.
             </p>
             <ul className="text-sm list-disc pl-4 text-gray-700 space-y-1">
               <li>APT Simulation & Scenario Design</li>
               <li>Social Engineering (Phishing/Vishing)</li>
               <li>Assumed Breach Assessments</li>
             </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:border-black transition-colors">
             <h3 className="font-serif text-xl font-bold mb-2">Penetration Testing</h3>
             <p className="text-sm text-gray-600 mb-4">
               Technical security assessments to identify vulnerabilities before attackers do. We focus on finding deep logic flaws and implementation errors in your stack.
             </p>
             <ul className="text-sm list-disc pl-4 text-gray-700 space-y-1">
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
                    <span className="px-2 py-1 bg-gray-100 text-xs font-bold text-gray-600 rounded">ISO 27001</span>
                    <span className="px-2 py-1 bg-gray-100 text-xs font-bold text-gray-600 rounded">TISAX</span>
                 </div>
               </div>

               <div>
                 <h3 className="font-bold text-gray-900">Compliance Automation</h3>
                 <p className="text-gray-700">
                   Implementation of automated evidence collection systems to satisfy DORA, NIS2, and GDPR requirements. Reduce the manual burden of compliance documentation.
                 </p>
               </div>
           </div>

           {/* Vulnerability Management - Added */}
           <div className="not-prose bg-blue-50/50 p-6 rounded-lg border border-blue-100">
             <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <Activity className="text-blue-600" size={20}/>
                Vulnerability Management
             </h3>
             <p className="text-gray-700 text-sm">
               Continuous scanning and lifecycle management of vulnerabilities. We go beyond automated reports to provide context-aware risk prioritization, ensuring your team fixes what actually matters.
             </p>
             <div className="flex gap-2 mt-3">
                <span className="px-2 py-1 bg-white text-xs font-bold text-gray-600 rounded border border-gray-200">Qualys</span>
                <span className="px-2 py-1 bg-white text-xs font-bold text-gray-600 rounded border border-gray-200">Tenable</span>
                <span className="px-2 py-1 bg-white text-xs font-bold text-gray-600 rounded border border-gray-200">Snyk</span>
             </div>
           </div>
        </div>
      </section>

      {/* DevSecOps */}
      <section className="mt-12">
        <h2 className="flex items-center gap-2">
           <Terminal className="text-purple-600" />
           DevSecOps
        </h2>
        <p>
          Integrate security into your CI/CD pipelines with our specialized tooling.
        </p>
        
        <div className="not-prose grid gap-6 md:grid-cols-2 mt-6">
            <div className="border-2 border-black rounded-lg p-6 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow bg-white">
                <div className="flex justify-between items-start mb-2">
                   <h4 className="font-serif font-bold text-lg">CryptoBOM Enterprise</h4>
                   <span className="bg-green-100 text-green-800 text-[10px] font-bold px-2 py-1 uppercase rounded tracking-wide">Available</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  The enterprise-grade scanner for your Cryptographic Bill of Materials. Continuous monitoring of code repositories and container images for weak crypto primitives.
                </p>
                <ul className="text-xs space-y-1 font-mono text-gray-500">
                    <li>+ Automated PR Remediation</li>
                    <li>+ IBM Quantum Safe Advisor Integration</li>
                    <li>+ Real-time Compliance Dashboards</li>
                </ul>
            </div>

            <div className="border-2 border-gray-200 rounded-lg p-6 bg-gray-50">
                <div className="flex justify-between items-start mb-2">
                   <h4 className="font-serif font-bold text-lg text-gray-500">eIDAS with ZKP</h4>
                   <span className="bg-yellow-100 text-yellow-800 text-[10px] font-bold px-2 py-1 uppercase rounded tracking-wide">Coming Soon</span>
                </div>
                <p className="text-sm text-gray-500 mb-4">
                  Next-generation identity wallets integrating Zero-Knowledge Proofs (ZKP) for privacy-preserving attribute verification under eIDAS 2.0 regulations.
                </p>
                 <ul className="text-xs space-y-1 font-mono text-gray-400">
                    <li>+ AnonCreds Support</li>
                    <li>+ Selective Disclosure</li>
                    <li>+ Quantum-Resistant Signatures</li>
                </ul>
            </div>
        </div>
      </section>

      {/* Enterprise Architecture Diagram Section - Added */}
      <section className="mt-16 mb-8">
        <h2 className="flex items-center gap-2 mb-8">
            <Server className="text-gray-800"/>
            DevSecOps Enterprise Architecture
        </h2>
        
        <div className="not-prose bg-white border-2 border-black rounded-xl p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] overflow-hidden">
            <div className="flex flex-col gap-8 text-center text-xs font-bold">
                
                {/* Flow inputs */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
                    <div className="flex flex-col items-center group">
                        <div className="mb-2 text-gray-500 flex items-center gap-1"><Terminal size={12}/> Developers</div>
                        <div className="p-4 border-2 border-black rounded bg-gray-50 w-full max-w-[160px] group-hover:bg-gray-100 transition-colors">
                            Source Code<br/>(Git Repos)
                        </div>
                        <div className="h-6 w-0.5 bg-black"></div>
                    </div>
                    
                    <div className="flex flex-col items-center group">
                         <div className="mb-2 text-gray-500 flex items-center gap-1"><ShieldAlert size={12}/> Sec Engineers</div>
                         <div className="p-4 border-2 border-black rounded bg-blue-50 w-full max-w-[160px] group-hover:bg-blue-100 transition-colors">
                            RivicQ<br/>CryptoBOM
                         </div>
                         <div className="h-6 w-0.5 bg-black"></div>
                    </div>

                    <div className="flex flex-col items-center group">
                        <div className="mb-2 text-gray-500 flex items-center gap-1"><Activity size={12}/> Simulation</div>
                         <div className="p-4 border-2 border-black rounded bg-purple-50 w-full max-w-[160px] group-hover:bg-purple-100 transition-colors">
                            Qiskit / PQQ<br/>Policy Engine
                         </div>
                         <div className="h-6 w-0.5 bg-black"></div>
                    </div>
                </div>

                {/* Integration Bus / Pipeline */}
                <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-6 bg-gray-50/50">
                    <span className="absolute top-0 left-4 -translate-y-1/2 bg-white px-2 text-gray-400 uppercase tracking-widest text-[10px]">CI/CD Integration</span>
                    
                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-2">
                        <div className="p-3 border-2 border-gray-300 text-gray-400 rounded bg-white w-32">Build</div>
                        <div className="hidden md:block w-8 h-0.5 bg-gray-300"></div>
                        <div className="h-4 w-0.5 bg-gray-300 md:hidden"></div>
                        
                        <div className="p-3 border-2 border-blue-600 rounded bg-white w-32 shadow-sm text-blue-700">
                            Scan<br/><span className="font-mono text-[10px] text-gray-500">SAST / DAST</span>
                        </div>
                        <div className="hidden md:block w-8 h-0.5 bg-black"></div>
                        <div className="h-4 w-0.5 bg-black md:hidden"></div>

                        <div className="p-3 border-2 border-black rounded bg-black text-white w-32 shadow-lg">Policy Gate</div>
                        <div className="hidden md:block w-8 h-0.5 bg-black"></div>
                        <div className="h-4 w-0.5 bg-black md:hidden"></div>

                        <div className="p-3 border-2 border-gray-800 rounded bg-white w-32">Registry</div>
                    </div>
                </div>

                {/* Output Arrow */}
                <div className="flex justify-center">
                    <div className="h-8 w-0.5 bg-black"></div>
                </div>

                {/* Runtime Environment */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="border-2 border-black rounded-lg p-6 flex flex-col items-center justify-center bg-gray-100 relative min-h-[120px]">
                        <span className="absolute top-2 left-2 text-gray-400 uppercase tracking-widest text-[10px]">Production</span>
                        <div className="font-serif text-lg font-bold text-gray-800">Kubernetes Runtime</div>
                        <div className="mt-1 text-gray-500 font-normal">Deploy & Release</div>
                    </div>

                    <div className="flex flex-col gap-4">
                         <div className="border-2 border-gray-300 rounded p-3 flex items-center justify-center gap-3 bg-white text-gray-600">
                            <Activity size={16}/> 
                            <span>AI Threat Detection</span>
                         </div>
                         <div className="border-2 border-black rounded p-3 flex items-center justify-center gap-3 bg-black text-white shadow-md">
                            <Lock size={16}/> 
                            <span>RivicQ KMS & HSM</span>
                         </div>
                    </div>
                </div>

                <div className="mt-4 text-gray-400 font-mono text-[10px] uppercase tracking-wider">
                    Fig 2.1 - DevSecOps Architecture Flow
                </div>

            </div>
        </div>
      </section>

    </article>
  );
};

export default Services;