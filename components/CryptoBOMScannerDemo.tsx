
import React, { useState } from 'react';
import { Search, ShieldAlert, CheckCircle2, ShieldCheck, Database, FileCode, Loader2, Code2 } from 'lucide-react';
import { aiService, ScanResult } from '../services/aiService';

const CryptoBOMScannerDemo: React.FC = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [codeSnippet, setCodeSnippet] = useState(`// Example vulnerable code
const crypto = require('crypto');
const secret = 'quantum-weak-secret';

// Using legacy RSA 1024
const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 1024,
});

// Using MD5 hashing
const hash = crypto.createHash('md5').update('password').digest('hex');`);

  const [results, setResults] = useState<ScanResult[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleScan = async () => {
    setIsScanning(true);
    setError(null);
    setResults([]);
    
    try {
      const report = await aiService.scanCode(codeSnippet);
      setResults(report);
    } catch (err) {
      setError("AI Service unavailable. Ensure the backend server is running.");
    } finally {
      setIsScanning(false);
    }
  };

  return (
    <div className="not-prose bg-white border-2 border-slate-900 rounded-2xl shadow-xl overflow-hidden my-12">
      <div className="bg-slate-900 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="ml-4 text-xs font-mono text-slate-400 uppercase tracking-widest">RivicQ AI Auditor v3.0</span>
        </div>
        <div className={`text-[10px] font-mono ${isScanning ? 'text-yellow-400 animate-pulse' : 'text-blue-400'}`}>
          {isScanning ? 'ANALYZING...' : 'SYSTEM: READY'}
        </div>
      </div>

      <div className="p-8">
        <div className="flex flex-col gap-8">
          
          {/* Input Area */}
          <div className="w-full space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-serif font-bold text-slate-900 m-0">Live AI Code Auditor</h3>
              <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <Code2 size={12}/> Editor Mode
              </div>
            </div>
            
            <textarea 
              value={codeSnippet}
              onChange={(e) => setCodeSnippet(e.target.value)}
              className="w-full h-48 p-4 bg-slate-950 text-indigo-300 font-mono text-xs rounded-xl border border-slate-800 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              placeholder="Paste code snippet here..."
            />

            <button 
              onClick={handleScan}
              disabled={isScanning}
              className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                isScanning ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200'
              }`}
            >
              {isScanning ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  AI is Auditing Cryptography...
                </>
              ) : (
                <>
                  <Search size={18} />
                  Run AI Security Scan
                </>
              )}
            </button>
          </div>

          {/* Visualization / Results */}
          <div className="w-full min-h-[250px] bg-slate-950 rounded-xl p-6 font-mono text-[11px] relative overflow-hidden border border-slate-800">
             {error && (
               <div className="absolute inset-0 flex flex-col items-center justify-center text-red-400 p-8 text-center">
                  <ShieldAlert size={40} className="mb-4" />
                  <p className="font-bold">{error}</p>
               </div>
             )}

             {results.length === 0 && !isScanning && !error && (
               <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-600 opacity-50">
                  <Database size={40} className="mb-4" />
                  <p>Awaiting Audit Input...</p>
               </div>
             )}

             {isScanning && (
                <div className="space-y-3">
                   <div className="text-blue-400 animate-pulse">{`> Tokenizing source...`}</div>
                   <div className="text-slate-400">{`> Abstract Syntax Tree generation complete.`}</div>
                   <div className="text-slate-400">{`> Mapping cryptographic primitives...`}</div>
                   <div className="text-indigo-400">{`> Connecting to RivicQ Intelligence Mesh...`}</div>
                   <div className="text-blue-500 animate-bounce">{`> Querying Gemini-3-Pro for PQC vulnerabilities...`}</div>
                </div>
             )}

             {results.length > 0 && !isScanning && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                    <div className="flex items-center gap-2 text-blue-400">
                      <ShieldCheck size={16}/>
                      <span className="uppercase tracking-widest font-bold">Audit Report Generated</span>
                    </div>
                    <span className="text-[9px] text-slate-500 uppercase">Engine: Gemini-3-Pro-Preview</span>
                  </div>

                  <div className="grid gap-4">
                    {results.map((item, i) => (
                      <div key={i} className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-l-2 border-slate-800 pl-4 py-2 hover:bg-white/5 transition-colors group">
                        <div className="flex items-center gap-3">
                           <FileCode size={14} className="text-slate-500" />
                           <div className="flex flex-col">
                              <span className="text-slate-200 font-bold">{item.algo}</span>
                              <span className="text-[9px] text-slate-500">{item.file}</span>
                           </div>
                        </div>
                        <div className="flex items-center gap-6">
                           <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                             item.status === 'CRITICAL' ? 'bg-red-500/20 text-red-500' : 
                             item.status === 'QUANTUM-WEAK' ? 'bg-amber-500/20 text-amber-500' :
                             item.status === 'VULNERABLE' ? 'bg-yellow-500/20 text-yellow-500' : 'bg-emerald-500/20 text-emerald-500'
                           }`}>
                             {item.status}
                           </span>
                           <span className="text-slate-400 text-[10px] leading-relaxed max-w-[250px]">
                             {item.recommendation}
                           </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 pt-4 border-t border-slate-800 flex justify-between items-center">
                    <div className="flex gap-4">
                      <div className="flex items-center gap-2 text-[9px] text-slate-500">
                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div> PQC Validated
                      </div>
                    </div>
                    <button className="text-blue-400 hover:text-white underline decoration-blue-800 underline-offset-4 text-[10px] uppercase font-bold tracking-widest">
                      Export CBOM (CycloneDX)
                    </button>
                  </div>
                </div>
             )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoBOMScannerDemo;
