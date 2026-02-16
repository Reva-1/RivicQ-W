
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, MapPin, Copyright, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10 text-slate-500">
      <div className="max-w-7xl mx-auto px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-20">
          <div className="lg:col-span-2">
             <Link to="/" className="inline-flex items-center gap-4 mb-8 group">
                <div className="p-2.5 bg-slate-900 text-white rounded-lg group-hover:bg-blue-600 transition-all duration-300">
                  <Lock size={22} />
                </div>
                <div>
                  <span className="block font-serif font-bold text-2xl text-slate-900 tracking-tight">RivicQ</span>
                  <span className="text-[9px] text-blue-600 uppercase tracking-[0.2em] font-bold">
                    Quantum-Safe Infrastructure
                  </span>
                </div>
             </Link>

             <div className="space-y-6 mb-10">
                <div className="flex items-start space-x-4 text-xs leading-relaxed max-w-xs">
                  <MapPin size={16} className="mt-0.5 flex-shrink-0 text-slate-300" />
                  <p className="m-0">
                    WISTA Innovation Center Adlershof<br/>
                    Rudower Chaussee 29, 12489 Berlin<br/>
                    <span className="text-slate-900 font-bold">Leap Quantum Hub Resident</span>
                  </p>
                </div>
                <div className="flex gap-4">
                  <a href="https://linkedin.com/company/rivicq" target="_blank" className="p-2 bg-slate-50 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all"><Linkedin size={18}/></a>
                  <a href="https://github.com/rivic-q" target="_blank" className="p-2 bg-slate-50 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-all"><Github size={18}/></a>
                  <a href="mailto:contact@rivicq.xyz" className="p-2 bg-slate-50 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all"><Mail size={18}/></a>
                </div>
             </div>
          </div>

          <div>
            <h3 className="text-[10px] font-bold text-slate-900 uppercase tracking-[0.25em] mb-6">Product Suite</h3>
            <ul className="space-y-3 list-none p-0 text-xs font-medium">
              <li><Link to="/products" className="hover:text-blue-600 transition-colors">CryptoBOM SaaS</Link></li>
              <li><Link to="/cloud-hsm" className="hover:text-blue-600 transition-colors">Cloud HSM vHSM</Link></li>
              <li><Link to="/sdk" className="hover:text-blue-600 transition-colors">Developer SDK</Link></li>
              <li><Link to="/platform" className="hover:text-blue-600 transition-colors">Platform Core</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-bold text-slate-900 uppercase tracking-[0.25em] mb-6">Governance</h3>
            <ul className="space-y-3 list-none p-0 text-xs font-medium">
              <li><Link to="/compliance" className="hover:text-blue-600 transition-colors">Compliance Hub</Link></li>
              <li><Link to="/research" className="hover:text-blue-600 transition-colors">Quantum R&D</Link></li>
              <li><Link to="/trust" className="hover:text-blue-600 transition-colors">Trust Center</Link></li>
              <li><Link to="/legal" className="hover:text-blue-600 transition-colors">Legal & Rights</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-bold text-slate-900 uppercase tracking-[0.25em] mb-6">Institutional</h3>
            <ul className="space-y-3 list-none p-0 text-xs font-medium">
              <li><Link to="/story" className="hover:text-blue-600 transition-colors">Corporate History</Link></li>
              <li><Link to="/team" className="hover:text-blue-600 transition-colors">Team & Advisors</Link></li>
              <li><Link to="/investors" className="hover:text-blue-600 transition-colors">Investor Relations</Link></li>
              <li><Link to="/careers" className="hover:text-blue-600 transition-colors">Careers</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em] gap-6 text-slate-400">
          <div className="flex items-center gap-2">
            <Copyright size={12} className="text-slate-300" />
            <span>2024-2026 RivicQ Technologies. All rights reserved.</span>
          </div>
          <div className="flex items-center space-x-8">
             <Link to="/legal" className="hover:text-blue-600 transition-colors">Impressum</Link>
             <Link to="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
             <Link to="/legal" className="hover:text-blue-600 transition-colors">IP Rights</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
