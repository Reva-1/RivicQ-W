import React from 'react';
import { Scale, FileText, Globe, Landmark } from 'lucide-react';

const Legal: React.FC = () => {
  return (
    <article className="prose prose-slate max-w-none">
      <header className="mb-16">
        <h1 className="text-5xl font-bold mb-4">Legal & Terms</h1>
        <p className="text-xl text-slate-500 font-serif italic">The framework of our engagement.</p>
      </header>

      {/* Impressum Section */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <Landmark className="text-blue-600" size={24} />
          <h2 className="m-0 text-2xl font-serif font-bold">Impressum (Legal Notice)</h2>
        </div>
        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
          <div className="grid md:grid-cols-2 gap-8 text-sm">
            <div>
              <h4 className="font-bold text-slate-900 mb-2">Service Provider</h4>
              <p className="text-slate-600 leading-relaxed">
                RivicQ Technologies GmbH<br/>
                Rudower Chaussee 29<br/>
                12489 Berlin, Germany
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-2">Represented By</h4>
              <p className="text-slate-600">Revan Sai Ande (Founder)</p>
              <h4 className="font-bold text-slate-900 mb-2 mt-4">Contact</h4>
              <p className="text-slate-600">Email: hello@rivic.xyz</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-serif font-bold mb-6">Terms of Service</h2>
        <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
          <p>
            Welcome to RivicQ. By accessing our platform and utilizing our SDKs, you agree to comply with the following terms. Our services are provided primarily to organizations seeking to enhance their cryptographic resilience.
          </p>
          <h4 className="font-bold text-slate-900">1. License & Usage</h4>
          <p>
            RivicQ grants you a limited, non-exclusive license to utilize our SDKs and APIs for the purpose of securing your applications. You may not reverse-engineer the core HSM firmware or attempt to bypass security boundaries established by the RQSP protocol.
          </p>
          <h4 className="font-bold text-slate-900">2. Intellectual Property</h4>
          <p>
            All cryptographic logic, including the RQSP (Quantum Safe Security Protocol) orchestration engine, remains the property of RivicQ Technologies GmbH. Open-source components are provided under their respective licenses as noted in the documentation.
          </p>
          <h4 className="font-bold text-slate-900">3. Limitation of Liability</h4>
          <p>
            While we implement state-of-the-art quantum-safe algorithms as defined by NIST, cryptography is an evolving field. RivicQ is not liable for future mathematical breakthroughs that may impact the security of standardized algorithms.
          </p>
        </div>
      </section>

      <section className="mb-20">
        <div className="p-6 bg-blue-50 border border-blue-100 rounded-xl text-xs text-blue-800 italic">
          Disclaimer: This legal text is provided for informational purposes as part of the 2026 platform architecture and should be reviewed by professional legal counsel before entering binding enterprise contracts.
        </div>
      </section>

    </article>
  );
};

export default Legal;