import React, { useState } from 'react';
import { Copy, Check, Terminal, Code2, Cpu, Globe, Lock, ShieldCheck, Database, Zap } from 'lucide-react';

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
      <p>Install the Python client via pip to start generating quantum-safe signatures.</p>
      <CodeSnippet lang="terminal" code="pip install rivicq-sdk" />
      <CodeSnippet lang="python" code={`from rivicq import RivicQClient

# Initialize client with HSM-backed API key
client = RivicQClient(api_key="your_hsm_api_key")

# Generate a quantum-safe signature (ML-DSA-65 / Dilithium)
message = "Authorize payment of 1.5 BTC"
signature = client.sign(
    payload=message,
    algorithm="ML-DSA-65",
    context="transaction-auth"
)

print(f"Post-Quantum Signature: {signature.hex()[:32]}...")`} />

      <h3>KMS Session Key Management</h3>
      <p>Manage post-quantum session keys with built-in rotation and hardware entropy anchoring via the RivicQ KMS API.</p>
      <CodeSnippet lang="python" code={`# Create a new PQC session key for real-time encrypted communication
session = client.kms.create_session(
    algorithm="ML-KEM-768",
    rotation_interval="1h",
    metadata={"service": "auth-gateway", "env": "production"}
)

# Encrypt data using the ephemeral session key
# The private part never leaves the RivicQ HSM boundary
ciphertext = session.encrypt(b"SENSITIVE_PII_DATA")

# Export the public key for client-side encapsulation
public_key = session.export_public_key()

print(f"Active Session ID: {session.id}")
print(f"Public Key (PQC): {public_key.hex()[:32]}...")`} />

      <h2>Go SDK</h2>
      <p>Perfect for high-performance microservices and cloud-native infrastructure.</p>
      <CodeSnippet lang="terminal" code="go get github.com/rivic-q/rivicq-go" />
      <CodeSnippet lang="go" code={`package main

import (
    "github.com/rivic-q/rivicq-go"
    "fmt"
)

func main() {
    client := rivicq.NewClient("your_api_key")
    
    // Encapsulate key using ML-KEM-768 (Kyber)
    ciphertext, sharedSecret, _ := client.Encapsulate("ML-KEM-768")
    
    fmt.Printf("Quantum-Safe Ciphertext Generated: %x\\n", ciphertext)
}`} />

      <hr className="my-16 border-slate-100" />

      <section>
        <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <Zap size={200} />
          </div>
          <div className="relative z-10">
            <h3 className="text-white font-serif text-2xl mb-4 m-0">Need a Custom Implementation?</h3>
            <p className="text-slate-400 mb-8 max-w-xl text-sm leading-relaxed">
              We provide professional engineering support for integrating RivicQ into legacy C/C++ environments, embedded systems, and custom HSM providers.
            </p>
            <div className="flex flex-wrap gap-4">
               <a href="https://github.com/rivic-q" target="_blank" className="px-6 py-3 bg-white text-slate-900 font-bold rounded-xl text-xs hover:bg-indigo-400 transition-all flex items-center gap-2">
                 <Terminal size={14}/> Full API Docs
               </a>
               <a href="mailto:support@rivic.xyz" className="px-6 py-3 border border-slate-700 text-white font-bold rounded-xl text-xs hover:bg-white/5 transition-all">
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