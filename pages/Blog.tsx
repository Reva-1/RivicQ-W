
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

const BlogPost: React.FC<{ title: string, date: string, excerpt: string, content: React.ReactNode, tags: string[] }> = ({ title, date, excerpt, content, tags }) => (
  <div className="mb-16 border-b border-slate-100 pb-12 last:border-0">
    <div className="flex flex-wrap gap-2 mb-4">
      {tags.map(tag => (
        <span key={tag} className="text-[10px] font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1">
          <Tag size={10}/> {tag}
        </span>
      ))}
    </div>
    <h2 className="text-3xl font-serif font-bold text-slate-900 mb-3 group hover:text-blue-600 transition-colors">
      {title}
    </h2>
    <div className="flex items-center gap-6 text-sm text-slate-400 mb-6">
      <span className="flex items-center gap-2"><Calendar size={14}/> {date}</span>
      <span className="flex items-center gap-2"><User size={14}/> RivicQ Editorial</span>
    </div>
    <p className="lead text-lg text-slate-600 italic mb-6">
      {excerpt}
    </p>
    <div className="prose prose-slate prose-sm text-slate-700 mb-8">
      {content}
    </div>
    <Link to="/story" className="inline-flex items-center font-bold text-sm text-slate-900 hover:text-blue-600 group">
      Read More <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform"/>
    </Link>
  </div>
);

const Blog: React.FC = () => {
  return (
    <article className="prose prose-lg prose-slate max-w-none">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog & Insights</h1>
      <p className="text-slate-500 font-serif italic mb-12">Narratives from the intersection of Quantum, Blockchain, and Security.</p>

      <div className="not-prose">
        
        <BlogPost 
          title="Rivic — Born from Berlin, Built for the Future"
          date="Dec 25, 2025"
          excerpt="Every deep-tech venture has a beginning. Ours started with a critical question about the longevity of digital trust."
          tags={["Company Vision", "Berlin Tech", "Cybersecurity"]}
          content={
            <div className="space-y-4">
              <p>
                RivicQ wasn't designed in a vacuum. It was born out of rigorous academic inquiry and a clear market need. In a world where AI and Quantum computing are rapidly advancing, traditional encryption methods are becoming liabilities.
              </p>
              <blockquote className="border-l-4 border-blue-500 pl-4 py-2 bg-slate-50 rounded-r font-serif italic text-xl">
                "Can we build security that's ready before the threat arrives?"
              </blockquote>
              <p>
                Our foundation in Berlin's innovation ecosystem allowed us to bridge the gap between theoretical physics and practical software engineering. From early protocol definitions to securing federal interest, our mission has always been to build infrastructure that survives the test of time.
              </p>
            </div>
          }
        />

        <BlogPost 
          title="Our Mission: Safeguarding the Tomorrow of Digital Assets"
          date="Jan 10, 2026"
          excerpt="At Rivic Technologies, our mission is to deliver robust, future-proof security solutions that safeguard digital infrastructures."
          tags={["Mission", "PQC", "Future-Proof"]}
          content={
            <div className="space-y-4">
              <p>
                We are committed to developing innovative security technologies that combine quantum-resistant cryptography, artificial intelligence, and blockchain verification to create comprehensive protection for organizations of all sizes.
              </p>
              <p>
                Our goal is to make quantum-safe security accessible and implementable today, ensuring that our clients are prepared for the security challenges of tomorrow. The future doesn't wait. Neither should security.
              </p>
            </div>
          }
        />

      </div>
    </article>
  );
};

export default Blog;
