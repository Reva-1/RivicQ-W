
import React, { useState } from 'react';
import { Copy, Check, Terminal, Cpu, Lock, Globe, Zap } from 'lucide-react';

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
        <pre className="m-0 text-slate-300">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};

const SDK: React.FC = () => {
  return (
    <article className="prose prose-lg prose-slate max-w-none">
      <h1>Developer SDK</h1>
      <p className="lead font-serif italic text-slate-600">
        Integrate quantum-safe primitives into your applications with our high-level libraries.
      </p>

      <section>
        <div className="not-prose grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
          {[
            { icon: <Cpu className="text-blue-600"/>, title: "PQC Native", desc: "ML-KEM and ML-DSA out of the box." },
            { icon: <Lock className="text-emerald-600"/>, title: "HSM Anchored", desc: "Private keys never leave hardware." },
            { icon: <Globe className="text-purple-600"/>, title: "Cross-Platform", desc: "Python, Go, Node.js and Rust." },
          ].map((item, i) => (
            <div key={i} className="p-6 bg-slate-50 border border-slate-100 rounded-2xl flex flex-col items-center text-center">
              <div className="mb-4">{item.icon}</div>
              <h4 className="m-0 font-bold text-slate-900 text-sm">{item.title}</h4>
              <p className="text-xs text-slate-500 mt-2 m-0">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <h2>Python SDK</h2>
      <CodeSnippet lang="terminal" code="pip install rivicq-sdk" />
      <CodeSnippet lang="python" code={`from rivicq import RivicQClient
client = RivicQClient(api_key="hsm_key")
signature = client.sign(payload="Authorize", algorithm="ML-DSA-65")`} />

      <section className="mt-16">
        <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <Zap size={200} />
          </div>
          <div className="relative z-10">
            <h3 className="text-white font-serif text-2xl mb-4 m-0">Custom Implementation?</h3>
            <p className="text-slate-400 mb-8 max-w-xl text-sm leading-relaxed">
              Need integration support for legacy C/C++, Embedded systems, or custom HSM hardware?
            </p>
            <div className="flex flex-wrap gap-4">
               <a href="https://github.com/rivic-q" target="_blank" className="px-6 py-3 bg-white text-slate-900 font-bold rounded-xl text-xs flex items-center gap-2">
                 <Terminal size={14}/> Full API Docs
               </a>
               <a href="mailto:rivic.revan.ande@gmail.com" className="px-6 py-3 border border-slate-700 text-white font-bold rounded-xl text-xs hover:bg-white/5 transition-all">
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
