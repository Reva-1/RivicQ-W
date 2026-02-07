import React from 'react';

const Solutions: React.FC = () => {
  return (
    <article className="prose prose-lg prose-slate max-w-none">
      <h1>Industry Solutions</h1>
      
      <h3>Payment Processors</h3>
      <p>
        Prepare for PCI DSS v4.0 quantum-readiness requirements. We offer HSM-backed tokenization that utilizes PQC algorithms, ensuring credit card data remains secure against future decryption capabilities.
      </p>

      <h3>Fintech & Neobanks</h3>
      <p>
        Ensure digital sovereignty and DORA compliance. Our SDKs integrate into mobile banking apps to establish a quantum-safe TLS tunnel (Hybrid Kyber) for all API communications.
      </p>

      <h3>Government & Defense</h3>
      <p>
        Protect Top Secret classifications. We offer on-premise, air-gapped deployments of the RivicQ platform, utilizing high-entropy Quantum Random Number Generators (QRNG).
      </p>

      <h3>Automotive & Manufacturing</h3>
      <p>
        Secure the supply chain. We generate HBOMs (Hardware Bill of Materials) and CBOMs for vehicle ECUs, ensuring that every component's cryptographic posture is known and managed.
      </p>
      
      <hr className="my-10" />

      <h2>Real-World Adoption References</h2>
      <ul>
        <li>
            <strong>Apple iMessage PQ3:</strong> Deployed Kyber to secure messaging against HNDL attacks.
        </li>
        <li>
            <strong>Signal PQXDH:</strong> Updated protocol to include post-quantum key agreement.
        </li>
        <li>
            <strong>Google Chrome:</strong> Enabled hybrid Kyber support in TLS ClientHello.
        </li>
      </ul>
      <p>
        RivicQ brings this level of advanced security engineering to the enterprise market.
      </p>
    </article>
  );
};

export default Solutions;