import React from 'react';

const Team: React.FC = () => {
  return (
    <article className="prose prose-lg prose-slate max-w-none">
      <h1>Team</h1>
      <p>
        We are a team of cryptographers, engineers, and researchers based in Berlin, Germany.
      </p>

      <h3>Founder</h3>
      <ul>
        <li>
            <strong>Revan Sai Ande</strong> &mdash; Founder
            <br/>
            <span className="text-gray-600 text-sm">Leap Berlin Quantum Deep-Tech Accelerator Resident.</span>
        </li>
      </ul>

      <h3>Advisors & Mentors</h3>
      <p>Guided by industry experts from academia and enterprise.</p>
      <ul>
          <li>
              <strong>Prof. Jean-Pierre Seifert</strong> &mdash; TU Berlin (Quantum Computing & Cryptography)
          </li>
          <li>
              <strong>André Nikolski</strong> &mdash; Leap Berlin (Deep-Tech Accelerator)
          </li>
          <li>
              <strong>Sebastian Grodzietzki</strong> &mdash; IBM Quantum
          </li>
          <li>
              <strong>Norbert Herrmann</strong> &mdash; Berlin Public Administration
          </li>
          <li>
              <strong>Mujib Bazhwal</strong> &mdash; Zukunft Gründen
          </li>
      </ul>

      <h3>Contact</h3>
      <p>
        For general inquiries: <a href="mailto:hello@rivic.xyz">hello@rivic.xyz</a>
      </p>
    </article>
  );
};

export default Team;