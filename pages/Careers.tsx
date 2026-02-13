
import React from 'react';
import { Mail, Send, Calendar, Clock, Sparkles } from 'lucide-react';

const Careers: React.FC = () => {
  const openPositions = [
    {
      title: "HSM Engineer",
      status: "Opening Soon",
      description: "Manage physical root-of-trust boundaries. You will be responsible for configuring Hardware Security Modules (HSMs) focusing on NIST FIPS 140-3 L3 compliance for post-quantum key material."
    },
    {
      title: "PQC Cryptographer",
      status: "Opening Soon",
      description: "Implement and optimize lattice-based primitives (ML-KEM/ML-DSA). PhD in Mathematics or CS preferred, focusing on performance-critical cryptographic implementations."
    },
    {
      title: "AI Security Specialist",
      status: "Opening Soon",
      description: "Architect security frameworks to protect AI training data and inference pipelines against adversarial quantum-enhanced attacks."
    },
    {
      title: "DevSecOps Engineer",
      status: "Opening Soon",
      description: "Integrate automated CryptoBOM generation and HSM-backed artifact signing into global CI/CD pipelines (GitHub Actions, GitLab)."
    },
    {
      title: "Compliance Strategist",
      status: "Opening Soon",
      description: "Bridge the gap between technical PQC implementation and regulatory mandates like EU DORA and NIS2 for financial enterprise nodes."
    },
    {
      title: "Cloud Infrastructure Lead",
      status: "Opening Soon",
      description: "Manage our cloud-native confidential computing environments across AWS and GCP, ensuring high availability for our HSM-as-a-Service mesh."
    },
    {
      title: "Offensive Security (Red Team)",
      status: "Opening Soon",
      description: "Conduct rigorous adversary simulations against hybrid cryptographic infrastructures to identify logic flaws and side-channel vulnerabilities."
    },
    {
      title: "Penetration Tester",
      status: "Opening Soon",
      description: "Deep technical auditing of APIs and web applications, focusing on the discovery of legacy cryptographic debt and implementation risks."
    },
    {
      title: "Quantum Ecosystem Ambassador",
      status: "Opening Soon",
      description: "Represent RivicQ at global summits, building strategic relationships within the Berlin Deep-Tech and global Quantum Computing sectors."
    },
    {
      title: "Research Intern (PQC)",
      status: "Opening Soon",
      description: "Assist our core team in benchmarking PQC algorithms on various hardware architectures (ARM/RISC-V). Opportunity for co-authorship on research papers."
    }
  ];

  return (
    <article className="prose prose-lg prose-slate max-w-none">
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Careers at RivicQ</h1>
        <p className="lead font-serif italic text-slate-600">
          Building the foundation for the next fifty years of cryptographic trust. Join the 2026 Founder Cohort.
        </p>
      </header>

      <div className="not-prose bg-blue-50 border border-blue-100 p-6 rounded-2xl mb-12 flex items-center gap-4">
        <div className="p-3 bg-blue-600 text-white rounded-xl shadow-lg">
          <Sparkles size={20} />
        </div>
        <div>
          <h4 className="text-blue-900 font-bold m-0">2026 Founder Cohort Recruitment</h4>
          <p className="text-xs text-blue-700 m-0 mt-1">We are currently accepting pre-applications for all roles listed below. Formal hiring cycles commence Q3 2026.</p>
        </div>
      </div>

      <div className="not-prose space-y-6 mt-8">
          {openPositions.map((role, i) => (
              <div key={i} className="group border border-slate-100 rounded-2xl p-8 hover:border-blue-500 hover:shadow-xl transition-all bg-white relative overflow-hidden">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-serif text-2xl font-bold text-slate-900 m-0">{role.title}</h4>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-100 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                          <Clock size={10}/> {role.status}
                        </span>
                      </div>
                      <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Berlin / Remote</span>
                    </div>
                    <a href={`mailto:rivic.revan.ande@gmail.com?subject=Pre-Application: ${role.title}`} className="px-6 py-3 bg-slate-900 text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-blue-600 transition-all shadow-lg shadow-slate-200">
                        Pre-Apply
                    </a>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed m-0 max-w-2xl">
                    {role.description}
                  </p>
              </div>
          ))}
      </div>

      <div className="mt-20 not-prose">
        <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-white">Submit an Open Application</h2>
            <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
              We are always identifying visionary talent in the Post-Quantum specialization. Send us your research or CV, and we will contact you during our next recruitment phase.
            </p>
            <a 
              href="mailto:rivic.revan.ande@gmail.com?subject=Open Application: Future Cryptography Leader" 
              className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20"
            >
              Send Open Application <Send size={18}/>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Careers;
