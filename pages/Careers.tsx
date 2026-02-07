import React from 'react';

const Careers: React.FC = () => {
  const openPositions = [
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

      <div className="mt-12 bg-gray-50 p-8 rounded text-sm border-l-4 border-gray-900">
          <p className="font-bold text-lg mb-2">Don't see a fit?</p>
          <p className="text-gray-600 mb-4">
              We are always looking for passionate people interested in quantum computing, cybersecurity, and cryptography.
          </p>
          <a href="mailto:careers@rivic.xyz" className="text-black font-bold underline">Send us an open application.</a>
      </div>
    </article>
  );
};

export default Careers;