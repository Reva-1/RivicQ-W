import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Mail, Shield, Briefcase, Lock, Download, MapPin, ExternalLink, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8 text-slate-500">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          
          {/* Brand & Contact Column */}
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
                   <Mail size={14} className="flex-shrink-0 text-blue-600" />
                   <a href="mailto:hello@rivic.xyz" className="hover:text-blue-600 transition-colors">hello@rivic.xyz</a>
                </div>
             </div>
          </div>

          {/* Links Column 1: Platform */}
          <div>
            <h3 className="text-[10px] font-bold text-slate-900 uppercase tracking-[0.2em] mb-4">Protocol</h3>
            <ul className="space-y-2 list-none p-0">
              {['RQSP Logic', 'ML-KEM 768', 'Dilithium 5', 'CryptoBOM'].map((item) => (
                <li key={item}>
                  <Link to="/platform" className="text-xs hover:text-blue-600 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2: Governance */}
          <div>
            <h3 className="text-[10px] font-bold text-slate-900 uppercase tracking-[0.2em] mb-4">Governance</h3>
            <ul className="space-y-2 list-none p-0">
              {[
                { name: 'Trust Center', path: '/trust' },
                { name: 'Legal & Terms', path: '/legal' },
                { name: 'Privacy Policy', path: '/privacy' },
                { name: 'Compliance', path: '/compliance' },
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-xs hover:text-blue-600 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 3: Connect */}
          <div>
            <h3 className="text-[10px] font-bold text-slate-900 uppercase tracking-[0.2em] mb-4">Connect</h3>
            <ul className="space-y-2 list-none p-0">
              <li><a href="https://github.com/rivic-q" className="text-xs hover:text-blue-600 transition-colors">GitHub</a></li>
              <li><a href="https://linkedin.com/company/rivic-q" className="text-xs hover:text-blue-600 transition-colors">LinkedIn</a></li>
              <li><Link to="/careers" className="text-xs hover:text-blue-600 transition-colors">Careers</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-widest">
          <div className="mb-4 md:mb-0">
            &copy; 2026@ RivicQ Technologies GmbH. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6">
             <Link to="/legal" className="hover:text-blue-600 transition-colors">Terms</Link>
             <Link to="/privacy" className="hover:text-blue-600 transition-colors">Privacy</Link>
             <a href="mailto:hello@rivic.xyz" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;