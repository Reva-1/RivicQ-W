
import React from 'react';
import { ShieldAlert, Terminal, Activity, ArrowRight, CheckCircle2, Microscope, Search, GitBranch, Shield, Zap, Lock, ShieldCheck } from 'lucide-react';

const ServiceDetail: React.FC<{ 
  title: string, 
  desc: string, 
  points: string[], 
  icon: React.ReactNode,
  badge?: string 
}> = ({ title, desc, points, icon, badge }) => (
  <div className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group">
    <div className="flex justify-between items-start mb-6">
      <div className="p-4 bg-slate-50 text-slate-900 rounded-2xl group-hover:bg-slate-900 group-hover:text-white transition-all">
        {icon}
      </div>
      {badge && (
        <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[9px] font-bold uppercase tracking-widest rounded-full">{badge}</span>
      )}
    </div>
    <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">{title}</h3>
    <p className="text-sm text-slate-500 leading-relaxed mb-8">{desc}</p>
    <ul className="space-y-3 m-0 p-0 list-none">
      {points.map((p, i) => (
        <li key={i} className="flex items-center gap-3 text-xs font-bold text-slate-700 uppercase tracking-wide">
          <CheckCircle2 size={14} className="text-emerald-500" /> {p}
        </li>
      ))}
    </ul>
    <div className="mt-10 pt-6 border-t border-slate-50">
      <a href="mailto:rivic.revan.ande@gmail.com" className="text-xs font-bold text-blue-600 hover:text-slate-900 flex items-center gap-1 transition-colors uppercase tracking-widest">
        Request Scope <ArrowRight size={14}/>
      </a>
    </div>
  </div>
);

const Services: React.FC = () => {
  return (
    <article className="prose prose-lg prose-slate max-w-none">
      <header className="mb-16">
        <h1 className="text-5xl font-bold mb-4 tracking-tight">Technical Services</h1>
        <p className="lead text-xl text-gray-600 font-serif italic">
          High-assurance offensive security and strategic compliance advisory.
        </p>
      </header>

      <div className="not-prose grid md:grid-cols-2 gap-8 mb-24">
        <ServiceDetail 
          icon={<ShieldAlert size={24}/>}
          title="Red Teaming"
          badge="Adversary Simulation"
          desc="Full-scope simulations of Advanced Persistent Threats (APTs) targeting your people, processes, and technology."
          points={[
            "Scenario-based adversary logic",
            "Assume-Breach assessments",
            "Hardware side-channel audit"
          ]}
        />
        <ServiceDetail 
          icon={<Terminal size={24}/>}
          title="Penetration Testing"
          badge="Audit & Discovery"
          desc="Technical vulnerability assessments focusing on deep logic flaws and legacy cryptographic debt."
          points={[
            "Web App & API security",
            "Infrastructure cloud audit",
            "PQC implementation review"
          ]}
        />
        <ServiceDetail 
          icon={<Search size={24}/>}
          title="Vulnerability Management"
          badge="Proactive Defense"
          desc="Continuous scanning and prioritization of security flaws across your infrastructure, ensuring a proactive defense posture."
          points={[
            "Asset inventory & tracking",
            "Automated patch validation",
            "Risk-based prioritization"
          ]}
        />
        <ServiceDetail 
          icon={<Microscope size={24}/>}
          title="PQC Advisory"
          badge="Strategic Migration"
          desc="Guidance on navigating the transition from classical RSA/ECC to NIST-standardized PQC."
          points={[
            "NIST FIPS 203/204 readiness",
            "EU DORA gap analysis",
            "Hybrid migration roadmaps"
          ]}
        />
      </div>

      {/* DevSecOps Enterprise Architecture Section */}
      <section className="mb-24 py-16 border-t border-slate-100">
        <div className="flex items-center gap-4 mb-10">
          <div className="p-3 bg-indigo-600 text-white rounded-2xl shadow-lg">
            <GitBranch size={24} />
          </div>
          <div>
            <h2 className="text-4xl font-serif font-bold text-slate-900 m-0">DevSecOps Enterprise Architecture</h2>
            <p className="text-xs text-indigo-600 font-bold uppercase tracking-widest mt-1">Industrial-Scale Security Integration</p>
          </div>
        </div>

        <div className="bg-slate-50 rounded-[3rem] p-10 md:p-16 border border-slate-100 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none text-slate-900 group-hover:scale-110 transition-transform duration-700">
            <Shield size={200} />
          </div>
          
          <div className="relative z-10 max-w-3xl">
            <p className="text-lg text-slate-700 leading-relaxed mb-12">
              We design and implement comprehensive security architectures that embed protection directly into the development lifecycle. Our approach ensures that security is not a bottleneck but a seamless component of your industrial-scale delivery pipeline.
            </p>

            <div className="grid md:grid-cols-2 gap-10 not-prose">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="p-2 bg-white rounded-lg shadow-sm border border-slate-100 text-indigo-600 h-fit">
                    <Zap size={18}/>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm m-0">CI/CD Security Orchestration</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">Automated injection of PQC-wrappers and CryptoBOM scanning into build agents.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="p-2 bg-white rounded-lg shadow-sm border border-slate-100 text-indigo-600 h-fit">
                    <ShieldCheck size={18}/>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm m-0">Infrastructure as Code (IaC)</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">Securing Terraform and Kubernetes configurations with hardware-rooted identity and drift detection.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="p-2 bg-white rounded-lg shadow-sm border border-slate-100 text-indigo-600 h-fit">
                    <Activity size={18}/>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm m-0">Policy as Code (PaC)</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">Programmatic enforcement of cryptographic standards across global clusters using OPA and Rego.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="p-2 bg-white rounded-lg shadow-sm border border-slate-100 text-indigo-600 h-fit">
                    <Lock size={18}/>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm m-0">Zero-Trust Networking</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">Implementing micro-segmentation anchored in physical HSM root-of-trust for all service meshes.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
               <a href="mailto:rivic.revan.ande@gmail.com?subject=Architecture Inquiry: DevSecOps" className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-indigo-600 transition-all text-xs uppercase tracking-widest shadow-xl shadow-slate-200">
                Consult on Architecture <ArrowRight size={16}/>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center mt-24">
         <h2 className="text-3xl font-serif font-bold mb-6">Start a conversation.</h2>
         <p className="text-slate-500 mb-10 max-w-xl mx-auto">Our lead engineers are available to discuss your specific infrastructure security challenges.</p>
         <a href="mailto:rivic.revan.ande@gmail.com" className="inline-flex items-center gap-2 bg-blue-600 text-white px-10 py-5 rounded-full font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20">
            Consult our Team <ArrowRight size={18}/>
         </a>
      </section>
    </article>
  );
};

export default Services;
