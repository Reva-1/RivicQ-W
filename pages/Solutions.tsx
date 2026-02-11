
import React from 'react';
import { ShieldCheck, Server, Cpu, Database, Landmark, ShieldAlert } from 'lucide-react';

const Solutions: React.FC = () => {
  return (
    <article className="prose prose-lg prose-slate max-w-none">
      <h1>Industry Solutions</h1>
      <p className="lead font-serif italic text-slate-600">
        Enterprise-grade PQC migration for high-security environments.
      </p>
      
      <h3>Payment Processors & Banking</h3>
      <p>
        Prepare for <strong>PCI DSS v4.0</strong> quantum-readiness. We provide HSM-backed tokenization using ML-DSA signatures, ensuring transaction integrity against future quantum decryption.
      </p>

      <h3>Fintech Infrastructure</h3>
      <p>
        Ensure digital sovereignty and <strong>EU DORA</strong> compliance. Our SDKs establish quantum-safe TLS tunnels (Hybrid ML-KEM) for secure API-to-API communication between critical financial nodes.
      </p>

      <h3>Government & Defense</h3>
      <p>
        Protect classified assets from "Harvest Now, Decrypt Later" threats. We offer air-gapped deployments of the RivicQ mesh, utilizing physical Quantum Random Number Generators (QRNG) for high-entropy key material.
      </p>

      <h3>Critical Infrastructure & OT</h3>
      <p>
        Secure the industrial supply chain. We generate <strong>CryptoBOMs</strong> for SCADA systems and vehicle ECUs, ensuring long-lived infrastructure remains unforgeable for decades.
      </p>
      
      <hr className="my-10 border-slate-100" />

      <h2>Technical Migration Standards</h2>
      <div className="not-prose grid gap-4">
        {[
          { icon: <ShieldCheck size={18} className="text-blue-600"/>, title: "FIPS 203 (ML-KEM)", desc: "Primary key encapsulation standard." },
          { icon: <ShieldCheck size={18} className="text-blue-600"/>, title: "FIPS 204 (ML-DSA)", desc: "Module-lattice digital signature standard." },
          { icon: <ShieldCheck size={18} className="text-blue-600"/>, title: "FIPS 140-3 L3", desc: "Hardware security boundary requirements." }
        ].map((std, i) => (
          <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 border border-slate-100 rounded-xl">
            {std.icon}
            <div>
                <span className="block font-bold text-slate-900 text-sm">{std.title}</span>
                <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">{std.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};

export default Solutions;
