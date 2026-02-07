import React from 'react';

const Investors: React.FC = () => {
  return (
    <article className="prose prose-lg prose-slate max-w-none">
      <h1>Investor Relations</h1>
      <p className="lead">
        RivicQ is currently raising a Pre-Seed round (€300K–€500K) to accelerate the development of our CryptoBOM SaaS and HSM integration layer.
      </p>

      <h3>Investment Memo Highlights</h3>
      
      <h4>The Problem</h4>
      <p>
        The global encryption standard (RSA/ECC) is expiring. Regulatory mandates (PCI DSS v4.0, DORA, NIS2) are forcing enterprises to adopt Post-Quantum Cryptography now.
      </p>

      <h4>The Solution</h4>
      <p>
        RivicQ provides the "rails" for this transition: A B2B platform that discovers legacy crypto (CryptoBOM) and replaces it with NIST-standard, HSM-backed quantum-safe keys.
      </p>

      <h4>Traction</h4>
      <ul>
          <li>Leap Berlin Quantum Accelerator Resident</li>
          <li>Exists Program Applicant (BMWi)</li>
          <li>Academic partnerships with TU Berlin</li>
      </ul>

      <h4>Use of Funds</h4>
      <ul>
          <li><strong>40% Product:</strong> Engineering the SaaS platform and SDKs.</li>
          <li><strong>30% Team:</strong> Hiring senior cryptographers and backend engineers.</li>
          <li><strong>20% Go-to-Market:</strong> Pilot acquisition and certification costs.</li>
          <li><strong>10% Ops:</strong> IP protection and legal.</li>
      </ul>

      <div className="not-prose mt-8">
          <a href="/assets/RivicQ_Pitch_Deck.pdf" className="inline-block bg-black text-white px-6 py-3 rounded text-sm font-bold no-underline hover:bg-gray-800 transition-colors">
             Download Pitch Deck (PDF)
          </a>
          <p className="mt-4 text-sm text-gray-500">
              For deep-tech investor inquiries: <a href="mailto:investors@rivic.xyz" className="underline text-black">investors@rivic.xyz</a>
          </p>
      </div>

    </article>
  );
};

export default Investors;