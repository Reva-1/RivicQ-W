
import React, { useState } from 'react';
import { Copy, Check, Terminal, Cpu, Lock, Globe, Zap, ArrowRight } from 'lucide-react';

const CodeSnippet: React.FC<{ code: string, lang: string }> = ({ code, lang }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="not-prose bg-slate-900 rounded-xl overflow-hidden my-6 border border-slate-800 shadow-xl group">
      <div className="bg-slate-800 px-4 py-2 flex justify-between items-center border-b border-slate-700">
        <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">{lang}</span>
        <button onClick={handleCopy} className="text-slate-400 hover:text-white transition-colors">
          {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
        </button>
      </div>
      <div className="p-5 font-mono text-sm overflow-x-auto">
        <pre className="m-0 text-slate-300"><code>{code}</code></pre>
      </div>
    </div>
  );
};

const SDK: React.FC = () => {
  return (
    <article className="prose prose-lg prose-slate max-w-none">
      <h1>Developer SDK</h1>
      <p className="lead font-serif italic text-slate-600">Integrate quantum-safe primitives with high-level libraries.</p>

      <section>
        <div className="not-prose grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
          {[
            { icon: <Cpu className="text-blue-600"/>, title: "PQC Native", desc: "ML-KEM and ML-DSA out of the box." },
            { icon: <Lock className="text-emerald-600"/>, title: "HSM Anchored", desc: "Private keys never leave hardware." },
            { icon: <Globe className="text-purple-600"/>, title: "Cross-Platform", desc: "Python, Go, and Rust support." },
          ].map((item, i) => (
            <div key={i} className="p-6 bg-slate-50 border border-slate-100 rounded-2xl flex flex-col items-center text-center">
              <div className="mb-4">{item.icon}</div>
              <h4 className="m-0 font-bold text-slate-900 text-sm">{item.title}</h4>
              <p className="text-xs text-slate-500 mt-2 m-0">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <h2>Example: Python Integration</h2>
      <CodeSnippet lang="python" code={`from rivicq import RivicQClient
client = RivicQClient(api_key="hsm_key")
signature = client.sign(payload="Authorize", algorithm="ML-DSA-65")`} />

      {/* CTA SECTION - UPDATED TO MATCH IMAGE 3 */}
      <section className="mt-16 not-prose">
        <div className="bg-[#0f172a] text-white rounded-[3rem] p-10 md:p-16 relative overflow-hidden group">
          <div className="absolute right-0 bottom-0 opacity-5 -mr-16 -mb-16 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
            <Zap size={400} />
          </div>
          <div className="relative z-10">
            <p className="text-slate-400 mb-10 max-w-xl text-lg leading-relaxed">
              Need integration support for legacy C/C++, Embedded systems, or custom HSM hardware?
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
               <a href="https://github.com/rivic-q" target="_blank" className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl text-sm flex items-center justify-center gap-2 hover:bg-slate-100 transition-all">
                 <Terminal size={18}/> Full API Docs
               </a>
               <a href="mailto:rivic.revan.ande@gmail.com" className="px-8 py-4 border border-slate-700 text-white font-bold rounded-xl text-sm flex items-center justify-center hover:bg-white/5 transition-all">
                 Contact Engineering Support
               </a>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default SDK;
