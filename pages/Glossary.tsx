
import React from 'react';
import { Book, Search, Info } from 'lucide-react';

const GlossaryItem: React.FC<{ term: string, definition: string, category: string }> = ({ term, definition, category }) => (
  <div className="py-8 border-b border-slate-100 last:border-0 group">
    <div className="flex flex-col md:flex-row md:items-start gap-4">
      <div className="md:w-1/3">
        <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-2 py-0.5 rounded-full mb-2 inline-block">
          {category}
        </span>
        <h3 className="text-2xl font-serif font-bold text-slate-900 m-0 group-hover:text-blue-600 transition-colors">
          {term}
        </h3>
      </div>
      <div className="md:w-2/3">
        <p className="text-slate-600 leading-relaxed m-0 text-sm md:text-base">
          {definition}
        </p>
      </div>
    </div>
  </div>
);

const Glossary: React.FC = () => {
  const items = [
    { 
      term: "ML-KEM (Kyber)", 
      category: "NIST Standard", 
      definition: "Module-Lattice Key Encapsulation Mechanism (FIPS 203). The primary standard for establishing secure shared keys across networks in a post-quantum world." 
    },
    { 
      term: "ML-DSA (Dilithium)", 
      category: "NIST Standard", 
      definition: "Module-Lattice Digital Signature Algorithm (FIPS 204). Used for authenticating messages and verifying identity in PQC-native environments." 
    },
    { 
      term: "Lattice-based Cryptography", 
      category: "Mathematics", 
      definition: "A class of cryptographic primitives based on geometric lattice problems. They are the leading candidates for PQC due to their efficiency and resistance to Shor's algorithm." 
    },
    { 
      term: "Crypto-Agility", 
      category: "Strategy", 
      definition: "The ability to switch between cryptographic algorithms without redesigning the underlying infrastructure. Essential for surviving the transition from classical to PQC." 
    },
    { 
      term: "Shor's Algorithm", 
      category: "Quantum Mechanics", 
      definition: "A quantum computer algorithm that can efficiently factor large integers, thereby breaking current RSA and ECC encryption standards." 
    },
    { 
      term: "Hybrid KEM", 
      category: "Implementation", 
      definition: "Combining a classical key exchange (like X25519) with a post-quantum one (ML-KEM) to provide layered security during the transition period." 
    }
  ];

  return (
    <article className="prose prose-slate max-w-none">
      <header className="mb-16">
        <h1 className="text-5xl font-bold mb-4">Glossary of Terms</h1>
        <p className="text-xl text-slate-500 font-serif italic">
          The technical lexicon of Post-Quantum Cryptography.
        </p>
      </header>

      <div className="not-prose">
        {items.map((item, i) => (
          <GlossaryItem key={i} {...item} />
        ))}
      </div>
    </article>
  );
};

export default Glossary;
