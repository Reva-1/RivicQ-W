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
      term: "Shor's Algorithm", 
      category: "Quantum Mechanics", 
      definition: "A quantum computer algorithm for finding the prime factors of an integer. Developed in 1994, it proves that a sufficiently powerful quantum computer can efficiently break RSA and ECC encryption." 
    },
    { 
      term: "Lattice-based Cryptography", 
      category: "Mathematics", 
      definition: "A type of post-quantum cryptography that relies on the complexity of geometric lattice problems. Algorithms like Kyber (ML-KEM) and Dilithium (ML-DSA) are built on this foundation." 
    },
    { 
      term: "Crypto-Agility", 
      category: "Security Strategy", 
      definition: "The ability of a system to quickly switch between multiple cryptographic primitives (algorithms) without significant infrastructure changes. This is critical for the PQC transition." 
    },
    { 
      term: "ML-KEM (Kyber)", 
      category: "NIST Standard", 
      definition: "Module-Lattice Key Encapsulation Mechanism. Standardized as FIPS 203, it is the primary algorithm for establishing secure shared keys across a network in a quantum world." 
    },
    { 
      term: "Harvest Now, Decrypt Later (HNDL)", 
      category: "Threat Vector", 
      definition: "An attack strategy where adversaries intercept and store encrypted data today, waiting for future quantum computers to become powerful enough to decrypt it." 
    },
    { 
      term: "Hybrid Cryptography", 
      category: "Implementation", 
      definition: "A security model that combines a classical algorithm (like RSA or Curve25519) with a post-quantum algorithm. It ensures security even if one of the algorithms is later found to be weak." 
    }
  ];

  return (
    <article className="prose prose-slate max-w-none">
      <header className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-widest mb-6">
          <Book size={10} /> Reference Library
        </div>
        <h1 className="text-5xl font-bold mb-4">Glossary of Terms</h1>
        <p className="text-xl text-slate-500 font-serif italic leading-relaxed">
          Understanding the lexicon of the post-quantum transition.
        </p>
      </header>

      <section className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-12 flex items-center gap-4 not-prose">
        <Search className="text-slate-400" size={18}/>
        <span className="text-sm text-slate-400 font-medium italic">Search functionality coming in v2.0...</span>
      </section>

      <div className="not-prose">
        {items.map((item, i) => (
          <GlossaryItem key={i} {...item} />
        ))}
      </div>

      <section className="mt-20 p-8 bg-blue-50 border border-blue-100 rounded-[2rem] flex items-start gap-6 not-prose">
        <div className="p-3 bg-white rounded-xl shadow-sm">
          <Info className="text-blue-600" size={20}/>
        </div>
        <div>
          <h4 className="m-0 font-serif font-bold text-slate-900 text-lg mb-2">Technical Whitepapers</h4>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            For a deeper mathematical dive, please request our internal research papers on Lattice Complexity and HSM Entropy Optimization.
          </p>
          <a href="mailto:research@rivic.xyz" className="text-blue-600 text-xs font-bold uppercase tracking-widest hover:underline">
            Request Whitepapers
          </a>
        </div>
      </section>
    </article>
  );
};

export default Glossary;