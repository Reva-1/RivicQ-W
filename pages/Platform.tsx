import React from 'react';

const Platform: React.FC = () => {
  return (
    <article className="prose prose-lg prose-slate max-w-none">
      <h1>System Architecture</h1>
      <p className="text-gray-500 font-sans text-sm uppercase tracking-wide">Technical Specification v1.3</p>

      <p>
        The RivicQ architecture is designed as a multi-layered defense system that wraps legacy infrastructure in a quantum-safe shell. 
        It operates on a "Hybrid by Default" principle, ensuring backwards compatibility while enforcing forward secrecy.
      </p>

      <h2>1. The HSM Layer (Root of Trust)</h2>
      <p>
        At the core of RivicQ is the Hardware Security Module layer. We do not trust software memory for key storage. 
        All cryptographic operations—generation, signing, and decryption—occur within FIPS 140-3 validated boundaries.
      </p>
      
      <div className="not-prose bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 font-sans text-sm">
        <h4 className="font-bold text-gray-900 mb-4">Hardware Abstraction Layer</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded border border-gray-100">
                <h5 className="font-bold text-xs uppercase tracking-wide text-gray-500 mb-2">Cloud HSM Cluster</h5>
                <ul className="space-y-1 text-gray-700">
                    <li>• AWS CloudHSM (FIPS 140-2 L3)</li>
                    <li>• Google Cloud KMS (HSM Protection)</li>
                    <li>• Azure Dedicated HSM</li>
                </ul>
            </div>
            <div className="bg-white p-4 rounded border border-gray-100">
                <h5 className="font-bold text-xs uppercase tracking-wide text-gray-500 mb-2">Enterprise HSM (On-Prem)</h5>
                <ul className="space-y-1 text-gray-700">
                    <li>• Thales Luna Network HSM</li>
                    <li>• Utimaco SecurityServer</li>
                    <li>• Entrust nShield</li>
                </ul>
            </div>
        </div>
      </div>

      <h2>2. Post-Quantum Cryptography Layer</h2>
      <p>
        RivicQ implements the primary algorithms selected by NIST for standardization. Our implementation focuses on a <strong>Hybrid Mode</strong>, 
        combining classical algorithms with PQC primitives.
      </p>
      
      <div className="overflow-x-auto not-prose my-6">
        <table className="min-w-full text-sm font-sans border-collapse text-left">
          <thead>
            <tr className="border-b border-gray-200 text-gray-500">
              <th className="py-2 pr-4 font-semibold">Algorithm</th>
              <th className="py-2 px-4 font-semibold">Type</th>
              <th className="py-2 px-4 font-semibold">NIST Standard</th>
              <th className="py-2 pl-4 font-semibold">Use Case</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr>
              <td className="py-3 pr-4 font-medium">ML-KEM (Kyber)</td>
              <td className="py-3 px-4">Lattice-based</td>
              <td className="py-3 px-4">FIPS 203</td>
              <td className="py-3 pl-4">Key Encapsulation (Encryption)</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-medium">ML-DSA (Dilithium)</td>
              <td className="py-3 px-4">Lattice-based</td>
              <td className="py-3 px-4">FIPS 204</td>
              <td className="py-3 pl-4">Digital Signatures</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-medium">SLH-DSA (SPHINCS+)</td>
              <td className="py-3 px-4">Hash-based</td>
              <td className="py-3 px-4">FIPS 205</td>
              <td className="py-3 pl-4">Firmware Signing (Stateless)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>3. CryptoBOM & Governance</h2>
      <p>
        The Management Layer provides visibility. The <strong>CryptoBOM (Cryptographic Bill of Materials)</strong> engine scans codebases and container registries to inventory every cryptographic call.
      </p>
      <ul>
        <li><strong>Discovery:</strong> Identifies weak primitives (e.g., SHA-1, RSA-1024).</li>
        <li><strong>Policy Engine:</strong> Enforces "Quantum-Safe Only" policies for new deployments.</li>
        <li><strong>Compliance Mapping:</strong> Automatically maps findings to PCI DSS v4.0 and ISO 27001 controls.</li>
      </ul>

      <h2>4. Integration Layer</h2>
      <p>
        Applications consume RivicQ services via a RESTful API or gRPC sidecar. The complexity of key negotiation, rotation, and HSM connection pooling is handled entirely by the RivicQ Gateway.
      </p>

      <h2>5. eIDAS with ZKP</h2>
      <p>
        RivicQ extends trust beyond infrastructure to user identity. We integrate with <strong>eIDAS 2.0</strong> wallets using <strong>Zero-Knowledge Proofs (ZKP)</strong>. 
        This enables users to prove attributes (like age or citizenship) without revealing sensitive underlying data. The ZKP circuits are cryptographically bound to the HSM Root of Trust, 
        ensuring that identity assertions are both private and quantum-resistant.
      </p>

    </article>
  );
};

export default Platform;