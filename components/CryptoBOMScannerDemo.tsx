import React, { useState, useEffect } from 'react';
import { Search, ShieldAlert, CheckCircle2, ShieldCheck, Database, FileCode } from 'lucide-react';

const CryptoBOMScannerDemo: React.FC = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [results, setResults] = useState<any[]>([]);

  const mockVulnerabilities = [
    { id: 1, file: 'auth_service.py', algo: 'RSA-1024', status: 'CRITICAL', recommendation: 'Upgrade to ML-KEM' },
    { id: 2, file: 'payment_gateway.go', algo: 'SHA-1', status: 'VULNERABLE', recommendation: 'Switch to SHA-3' },
    { id: 3, file: 'kernel_sign.c', algo: 'ECDSA-P256', status: 'QUANTUM-WEAK', recommendation: 'Implement SLH-DSA' },
    { id: 4, file: 'session_manager.js', algo: 'AES-256-GCM', status: 'SAFE', recommendation: 'No Action Required' },
  ];

  const handleScan = () => {
    setIsScanning(true);
    setProgress(0);
    setResults([]);
    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsScanning(false);
          setResults(mockVulnerabilities);
          return 100;
        }
        return prev + 5;
      });
    }, 100);
  };

  return (
    <div className="not-prose bg-white border-2 border-slate-900 rounded-2xl shadow-xl overflow-hidden my-12">
      <div className="bg-slate-900 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="ml-4 text-xs font-mono text-slate-400 uppercase tracking-widest">CryptoBOM Runtime Scanner v2.1</span>
        </div>
        <div className="text-[10px] font-mono text-blue-400 animate-pulse">SYSTEM: ONLINE</div>
      </div>

      <div className="p-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Controls */}
          <div className="w-full md:w-1/3 space-y-6">
            <h3 className="text-xl font-serif font-bold text-slate-900 m-0">Interactive Demo</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Simulate the RivicQ agent scanning your microservices for quantum-vulnerable cryptographic primitives.
            </p>
            <button 
              onClick={handleScan}
              disabled={isScanning}
              className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                isScanning ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200'
              }`}
            >
              {isScanning ? (
                <>Scanning Stack...</>
              ) : (
                <>
                  <Search size={18} />
                  Start Inventory Scan
                </>
              )}
            </button>
            
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Scan Progress</span>
                <span className="text-[10px] font-mono text-blue-600 font-bold">{progress}%</span>
              </div>
              <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                <div 
                  className="bg-blue-600 h-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Visualization / Results */}
          <div className="w-full md:w-2/3 min-h-[300px] bg-slate-950 rounded-xl p-4 font-mono text-[11px] relative overflow-hidden">
             {results.length === 0 && !isScanning && (
               <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-600 opacity-50">
                  <Database size={40} className="mb-4" />
                  <p>Awaiting Scan Initiation...</p>
               </div>
             )}

             {isScanning && (
                <div className="space-y-2">
                   <div className="text-green-500 animate-pulse">{`> initializing_agent_discovery...`}</div>
                   <div className="text-slate-400">{`> mapping container_fs...`}</div>
                   <div className="text-slate-400">{`> crawling ./src/services/auth...`}</div>
                   <div className="text-blue-400">{`> analyzing linked_libraries (libcrypto.so.1.1)...`}</div>
                   {progress > 50 && <div className="text-amber-500 animate-bounce">{`> WARNING: detected non-compliant primitive (RSA-1024)`}</div>}
                   {progress > 80 && <div className="text-amber-500">{`> WARNING: quantum-vulnerable ECC found`}</div>}
                </div>
             )}

             {results.length > 0 && !isScanning && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex items-center gap-2 text-blue-400 border-b border-slate-800 pb-2 mb-4">
                    <ShieldCheck size={14}/>
                    <span className="uppercase tracking-widest">Inventory Report Generated</span>
                  </div>
                  {results.map((item) => (
                    <div key={item.id} className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-l-2 border-slate-800 pl-4 py-1 hover:bg-white/5 transition-colors group">
                      <div className="flex items-center gap-3">
                         <FileCode size={14} className="text-slate-500" />
                         <span className="text-slate-200">{item.file}</span>
                         <span className="text-slate-500 font-normal px-1.5 py-0.5 bg-slate-800 rounded">{item.algo}</span>
                      </div>
                      <div className="flex items-center gap-4">
                         <span className={`font-bold ${
                           item.status === 'CRITICAL' ? 'text-red-500' : 
                           item.status === 'QUANTUM-WEAK' ? 'text-amber-500' :
                           item.status === 'VULNERABLE' ? 'text-yellow-500' : 'text-emerald-500'
                         }`}>
                           {item.status}
                         </span>
                         <span className="text-slate-500 italic hidden lg:inline group-hover:text-blue-400 transition-colors">
                           {item.recommendation}
                         </span>
                      </div>
                    </div>
                  ))}
                  <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between items-center">
                    <span className="text-slate-500">Scan completed in 4.2s</span>
                    <button className="text-blue-400 hover:text-white underline decoration-blue-800 underline-offset-4">Export CycloneDX JSON</button>
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