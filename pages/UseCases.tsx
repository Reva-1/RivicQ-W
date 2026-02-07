import React from 'react';
import { Link } from 'react-router-dom';

const UseCases: React.FC = () => {
  return (
    <article className="prose prose-lg prose-slate max-w-none">
      <h1>Use Cases</h1>
      <p>
        RivicQ is deployed in environments where data longevity exceeds the timeline for quantum breaking (10+ years) or where regulatory pressure demands immediate action.
      </p>

      <div className="space-y-12 mt-12">
        
        <section>
          <h3>1. Financial Services & Banking</h3>
          <p className="font-serif italic text-gray-600">Compliance with DORA & PCI DSS v4.0</p>
          <p>
            <strong>Problem:</strong> Banking networks rely on RSA-2048 for transaction signing. Financial data must be retained for 7-10 years, making it prime target for "Harvest Now, Decrypt Later".
          </p>
          <p>
            <strong>RivicQ Solution:</strong> We deploy a hybrid signature scheme (ML-DSA + RSA) within the bank's existing HSM infrastructure. This allows the bank to remain compliant with current regulations while signing transaction logs with quantum-safe keys.
          </p>
        </section>

        <section>
          <h3>2. Critical Infrastructure (IoT/OT)</h3>
          <p className="font-serif italic text-gray-600">Secure Firmware Updates (OTA)</p>
          <p>
            <strong>Problem:</strong> Smart meters and industrial controllers have lifecycles of 15-20 years. Once deployed, their cryptographic root of trust cannot be easily changed.
          </p>
          <p>
            <strong>RivicQ Solution:</strong> We implement stateful or stateless hash-based signatures (LMS/XMSS or SPHINCS+) for firmware validation. This ensures that even if ECC is broken, the update mechanism remains secure, allowing operators to patch devices.
          </p>
        </section>

        <section>
          <h3>3. Web3 & Blockchain Identity</h3>
          <p className="font-serif italic text-gray-600">Cross-Chain Account Abstraction</p>
          <p>
            <strong>Problem:</strong> Ethereum and Solana wallets use ECC keys which are vulnerable to quantum derivation.
          </p>
          <p>
            <strong>RivicQ Solution:</strong> We provide an Account Abstraction (ERC-4337 compliant) smart contract wallet that supports PQC signatures. This enables a unified identity that bridges assets securely across chains without relying on a single point of failure.
          </p>
        </section>

        <section className="not-prose bg-gray-50 p-8 rounded-md mt-8">
            <h4 className="font-bold text-lg mb-2">Contact Solutions Team</h4>
            <p className="text-gray-600 text-sm mb-4">
                We design custom migration architectures for enterprise clients.
            </p>
            <a href="mailto:hello@rivic.xyz" className="text-black text-sm font-bold underline">Email hello@rivic.xyz</a>
        </section>

      </div>
    </article>
  );
};

export default UseCases;