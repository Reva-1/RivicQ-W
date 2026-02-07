import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Mail, Shield, Briefcase, Lock, Download, MapPin, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark border-t border-gray-800 pt-16 pb-8 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          
          {/* Brand & Contact Column */}
          <div className="lg:col-span-2">
             {/* GitHub Link replacing Logo */}
             <a href="https://github.com/rivic-q" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 mb-6 group p-3 -ml-3 rounded-xl hover:bg-white/5 transition-all">
                <div className="p-2 bg-white text-dark rounded-lg group-hover:bg-cyan-400 group-hover:scale-110 transition-all duration-300">
                  <Github size={32} />
                </div>
                <div>
                  <span className="block font-heading font-bold text-2xl text-white tracking-wider group-hover:text-cyan-400 transition-colors">RIVIC-Q</span>
                  <span className="text-xs text-gray-400 uppercase tracking-widest flex items-center gap-1 group-hover:text-white">
                    Open Source Repository <ExternalLink size={10} />
                  </span>
                </div>
             </a>

             <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3 text-sm text-gray-400">
                  <MapPin size={18} className="mt-1 flex-shrink-0 text-cyan-500" />
                  <p className="leading-relaxed">
                    Rudower Chaussee 29,<br/>
                    12489 Berlin<br/>
                    6th Floor, WISTA Innovations- und Gründerzentrum (IGZ)<br/>
                    <span className="text-cyan-400 font-semibold block mt-1">Leap Berlin Quantum</span>
                  </p>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-400">
                   <Mail size={18} className="flex-shrink-0 text-cyan-500" />
                   <a href="mailto:hello@rivic.xyz" className="hover:text-cyan-400 transition-colors">hello@rivic.xyz</a>
                </div>
             </div>

             <p className="text-gray-500 text-sm max-w-sm">
               Securing the digital future with quantum-safe infrastructure. FIPS 140-3 HSM & Post-Quantum Cryptography.
             </p>
          </div>

          {/* Links Column 1: Platform */}
          <div>
            <h3 className="font-heading font-bold text-white text-lg mb-4">Platform</h3>
            <ul className="space-y-3">
              {['Post-Quantum Cryptography', 'Hardware Security Modules', 'Unified Identity', 'Compliance Automation', 'CryptoBOM SaaS'].map((item) => (
                <li key={item}>
                  <Link to="/platform" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors hover:translate-x-1 inline-block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2: Company */}
          <div>
            <h3 className="font-heading font-bold text-white text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {[
                { name: 'About RivicQ', path: '/' },
                { name: 'Use Cases', path: '/use-cases' },
                { name: 'Team & Advisors', path: '/team' },
                { name: 'Careers', path: '/careers' },
                { name: 'Investors', path: '/investors' },
                { name: 'Blog', path: '/resources' },
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-gray-400 hover:text-cyan-400 text-sm transition-colors hover:translate-x-1 inline-block">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 3: Resources */}
          <div>
            <h3 className="font-heading font-bold text-white text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                  <Link to="/resources" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors hover:translate-x-1 inline-block">
                    Documentation
                  </Link>
              </li>
              <li>
                  <a href="https://github.com/rivic-q" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors hover:translate-x-1 inline-block">
                    GitHub (Open Source)
                  </a>
              </li>
              <li>
                  <a href="/assets/RivicQ_Pitch_Deck.pdf" download className="flex items-center text-cyan-500 hover:text-white text-sm font-bold transition-colors hover:translate-x-1">
                    <Download size={14} className="mr-2"/>
                    Download Pitch Deck
                  </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="border-t border-gray-800 py-10">
            <h3 className="text-xl font-heading font-bold text-center mb-8 text-white">Contact Departments</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                
                {/* Investors */}
                <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group">
                    <div className="w-10 h-10 mx-auto bg-purple-500/20 rounded-full flex items-center justify-center mb-3 group-hover:bg-purple-500 transition-colors">
                        <Shield size={18} className="text-purple-400 group-hover:text-white" />
                    </div>
                    <p className="font-bold text-gray-200 mb-1">Investors</p>
                    <a href="mailto:investors@rivic.xyz" className="text-sm text-gray-400 hover:text-cyan-400 font-medium block">investors@rivic.xyz</a>
                </div>

                {/* Careers */}
                <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group">
                    <div className="w-10 h-10 mx-auto bg-green-500/20 rounded-full flex items-center justify-center mb-3 group-hover:bg-green-500 transition-colors">
                        <Briefcase size={18} className="text-green-400 group-hover:text-white" />
                    </div>
                    <p className="font-bold text-gray-200 mb-1">Careers</p>
                    <a href="mailto:careers@rivic.xyz" className="text-sm text-gray-400 hover:text-cyan-400 font-medium block">careers@rivic.xyz</a>
                </div>

                {/* Support */}
                <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group">
                    <div className="w-10 h-10 mx-auto bg-orange-500/20 rounded-full flex items-center justify-center mb-3 group-hover:bg-orange-500 transition-colors">
                        <Mail size={18} className="text-orange-400 group-hover:text-white" />
                    </div>
                    <p className="font-bold text-gray-200 mb-1">Support</p>
                    <a href="mailto:support@rivic.xyz" className="text-sm text-gray-400 hover:text-cyan-400 font-medium block">support@rivic.xyz</a>
                </div>
            </div>
        </div>


        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-gray-500">
          <div>
            &copy; 2026 RivicQ. All rights reserved. <span className="mx-2 hidden md:inline">|</span> Berlin, Germany
          </div>
          
          {/* Social Icons - GitHub Only */}
          <div className="flex space-x-6">
             <a href="https://github.com/rivic-q" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                <Github size={24} />
             </a>
          </div>

          <div className="flex items-center space-x-4">
             <Link to="#" className="hover:text-cyan-400 transition-colors">Privacy</Link>
             <span className="text-gray-700">|</span>
             <Link to="#" className="hover:text-cyan-400 transition-colors">Terms</Link>
             <span className="text-gray-700">|</span>
             <a href="mailto:compliance@rivic.xyz" className="hover:text-cyan-400 transition-colors">Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;