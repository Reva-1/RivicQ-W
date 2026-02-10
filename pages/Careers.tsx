import React from 'react';
import { Mail, Send } from 'lucide-react';

const Careers: React.FC = () => {
  const openPositions = [
    {
      title: "HSM Engineer",
      description: "Take command of our physical and cloud root-of-trust. You will be responsible for managing, configuring, and securing Hardware Security Modules (HSMs), specifically focusing on their integration with PQC algorithms. Your mission is to ensure strict FIPS 140-3 compliance for all key generation and storage processes across both cloud-based HSMs (AWS CloudHSM, Azure Dedicated HSM) and complex on-premise deployments."
    },
    {
      title: "AI Security Specialist",
      description: "Secure the future of machine learning against quantum threats. You will architect 'Model Armor' frameworks to protect weights, training data, and inference pipelines. Key responsibilities include implementing PQC-encrypted data lakes and ensuring AI-driven security agents are resilient against adversarial quantum attacks."
    },
    {
      title: "Compliance Officer",
      description: "Lead our regulatory strategy in the evolving global landscape. You must have deep expertise in EU DORA, NIS2, and GDPR, as well as the upcoming NIST PQC standards. You will bridge the gap between technical cryptographic implementations and legal mandates, ensuring our clients stay ahead of mandatory migration deadlines."
    },
    {
      title: "DevSecOps Engineer (PQC Focus)",
      description: "Integrate quantum-safe security directly into the heartbeat of software delivery. You will build and maintain CI/CD pipelines that automate CryptoBOM generation and HSM-backed artifact signing. Experience with Kubernetes, Terraform, and hardware-security-module (HSM) orchestration is vital for this high-impact role."
    },
    {
      title: "Head of Cryptography",
      description: "Lead our core research team in implementing NIST FIPS 203/204 algorithms. You will architect the hybrid key exchange protocols and oversee the HSM integration layer. We are looking for a visionary with a PhD in Mathematics or Computer Science and deep experience with lattice-based cryptography to guide our transition strategy."
    },
    {
      title: "Cloud Engineer (IBM/GCP)",
      description: "Design and maintain our cloud-native infrastructure across AWS and GCP. You will manage Kubernetes clusters, set up secure CI/CD pipelines, and ensure high availability for our HSM-backed services. Experience with Terraform, zero-trust architecture, and confidential computing is essential for this role."
    },
    {
      title: "Penetration Tester",
      description: "Challenge our defenses before the adversaries do. You will conduct rigorous security assessments of our APIs, smart contracts, and web applications. Focus on identifying logic flaws, implementation vulnerabilities in our cryptographic wrappers, and ensuring our PQC integrations are robust against side-channel attacks."
    },
    {
      title: "Red Team Specialist",
      description: "Simulate advanced persistent threats (APTs) to test our incident response capabilities. You will design complex attack scenarios targeting our hybrid infrastructure, from social engineering to exploiting zero-day vulnerabilities in third-party dependencies. Your goal is to keep our Blue Team sharp and our infrastructure resilient."
    },
    {
      title: "Ambassador",
      description: "Represent RivicQ at global deep-tech conferences and quantum computing summits. You will build relationships with key stakeholders in the cybersecurity ecosystem and help translate complex technical concepts into business value for our partners. A strong background in technical sales or developer advocacy is preferred."
    },
    {
      title: "Research Intern",
      description: "Work alongside world-class cryptographers on optimizing PQC primitives for embedded devices. You will contribute to open-source libraries and help benchmark performance of Kyber and Dilithium on various hardware architectures (ARM, RISC-V). This is a unique opportunity to publish papers and gain hands-on experience in post-quantum security."
    }
  ];

  return (
    <article className="prose prose-lg prose-slate max-w-none">
      <h1>Careers</h1>
      <p>
        Join the founding team. We are building the security infrastructure for the next 50 years of computing.
      </p>

      <h3>Open Positions</h3>
      <div className="not-prose space-y-8 mt-8">
          {openPositions.map((role, i) => (
              <div key={i} className="group border border-gray-200 rounded-lg p-6 hover:border-black transition-colors bg-white shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-serif text-xl font-bold text-gray-900 group-hover:underline decoration-2 underline-offset-4">{role.title}</h4>
                    <a href={`mailto:careers@rivic.xyz?subject=Application: ${role.title}`} className="px-4 py-2 bg-gray-900 text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-cyan-600 transition-colors">
                        Apply Now
                    </a>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {role.description}
                  </p>
              </div>
          ))}
      </div>

      <div className="mt-20 not-prose">
        <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-white">Don't see your dream role?</h2>
            <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
              We're always looking for talented individuals passionate about PQC and deep tech security. Send us an open application and tell us how you can help secure the quantum future!
            </p>
            <a 
              href="mailto:careers@rivic.xyz?subject=Open Application: Future Cryptography Leader" 
              className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20"
            >
              Send Open Application <Send size={18}/>
            </a>
            <p className="mt-8 text-[10px] uppercase tracking-[0.3em] font-bold text-slate-500">
              Join the 2026 Founder Cohort
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Careers;