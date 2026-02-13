
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8 text-slate-500">
      <div className="max-w-7xl mx-auto px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
             <Link to="/" className="inline-flex items-center gap-3 mb-6 group">
                <div className="p-2 bg-blue-600 text-white rounded-lg group-hover:bg-slate-900 transition-all duration-300">
                  <Lock size={24} />
                </div>
                <div>
                  <span className="block font-serif font-bold text-xl text-slate-900 tracking-tight">RivicQ</span>
                  <span className="text-[10px] text-blue-600 uppercase tracking-widest font-bold">
                    Quantum-Safe Infrastructure
                  </span>
                </div>
             </Link>

             <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3 text-xs leading-relaxed">
                  <MapPin size={14} className="mt-0.5 flex-shrink-0 text-blue-600" />
                  <p>
                    WISTA Innovation Center<br/>
                    Rudower Chaussee 29, 12489 Berlin<br/>
                    <span className="text-slate-900 font-bold">Leap Quantum Hub</span>
                  </p>
                </div>
                <div className="flex items-center space-x-3 text-xs">
                   <a href="mailto:rivic.revan.ande@gmail.com" className="hover:text-blue-600 transition-colors inline-flex items-center gap-2 font-bold uppercase tracking-widest text-[10px]">
                     <Mail size={14} className="flex-shrink-0 text-blue-600" />
                     Email Us
                   </a>
                </div>
             </div>
          </div>

          <div>
            <h3 className="text-[10px] font-bold text-slate-900 uppercase tracking-[0.2em] mb-4">Protocol</h3>
            <ul className="space-y-2 list-none p-0 text-xs">
              <li><Link to="/rqsp" className="hover:text-blue-600 transition-colors">RQSP Logic</Link></li>
              <li><Link to="/platform" className="hover:text-blue-600 transition-colors">ML-KEM 768</Link></li>
              <li><Link to="/platform" className="hover:text-blue-600 transition-colors">CryptoBOM</Link></li>
              <li><span className="text-slate-400 italic">Technical Whitepaper (Coming Soon)</span></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-bold text-slate-900 uppercase tracking-[0.2em] mb-4">Governance</h3>
            <ul className="space-y-2 list-none p-0 text-xs">
              <li><Link to="/trust" className="hover:text-blue-600 transition-colors">Trust Center</Link></li>
              <li><Link to="/legal" className="hover:text-blue-600 transition-colors">Legal & Terms</Link></li>
              <li><Link to="/compliance" className="hover:text-blue-600 transition-colors">Compliance</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-bold text-slate-900 uppercase tracking-[0.2em] mb-4">Connect</h3>
            <ul className="space-y-2 list-none p-0 text-xs">
              <li><a href="https://github.com/rivic-q" target="_blank" className="hover:text-blue-600 transition-colors">GitHub</a></li>
              <li><a href="https://linkedin.com/company/rivic-q" target="_blank" className="hover:text-blue-600 transition-colors">LinkedIn</a></li>
              <li><Link to="/careers" className="hover:text-blue-600 transition-colors">Careers</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-widest">
          <div>&copy; 2026 All rights @RivicQ Technologies GmbH.</div>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
             <Link to="/legal" className="hover:text-blue-600">Terms</Link>
             <Link to="/privacy" className="hover:text-blue-600">Privacy</Link>
             <a href="mailto:rivic.revan.ande@gmail.com" className="hover:text-blue-600 inline-flex items-center gap-1.5" aria-label="Contact Email">
               <Mail size={12} /> Contact
             </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
