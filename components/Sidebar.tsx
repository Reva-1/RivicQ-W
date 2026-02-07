import React from 'react';
import { NavLink } from 'react-router-dom';
import { Github, Twitter, Mail } from 'lucide-react';

const Sidebar: React.FC = () => {
  const links = [
    { name: 'Introduction', path: '/' },
    { name: 'Platform Specs', path: '/platform' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Services', path: '/services' },
    { name: 'Use Cases', path: '/use-cases' },
    { name: 'Roadmap', path: '/roadmap' },
    { name: 'Resources & Tools', path: '/resources' },
    { name: 'Company', path: '', isHeader: true },
    { name: 'Team', path: '/team' },
    { name: 'Investors', path: '/investors' },
    { name: 'Careers', path: '/careers' },
  ];

  return (
    <div className="w-full md:w-64 flex-shrink-0 md:fixed md:h-screen overflow-y-auto border-r border-gray-100 bg-white p-8 z-50">
      
      <div className="mb-8">
        <h1 className="font-serif text-2xl font-bold tracking-tight text-gray-900 mb-2">
          RivicQ
        </h1>
        <p className="font-sans text-xs text-gray-500 leading-relaxed mb-6">
          Quantum-safe infrastructure,<br/> 
          Identity & Compliance.
        </p>
      </div>

      <nav className="space-y-1 mb-12">
        {links.map((link, idx) => (
          link.isHeader ? (
            <div key={idx} className="pt-6 pb-2 font-sans text-xs font-bold text-gray-400 uppercase tracking-widest">
              {link.name}
            </div>
          ) : (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `block px-2 -mx-2 py-1.5 font-sans text-sm transition-colors ${
                  isActive 
                    ? 'text-black font-semibold bg-gray-50 rounded-md' 
                    : 'text-gray-600 hover:text-black hover:underline decoration-gray-300 underline-offset-4'
                }`
              }
            >
              {link.name}
            </NavLink>
          )
        ))}
      </nav>

      <div className="pt-8 border-t border-gray-100">
        <div className="flex gap-4 mb-4">
          <a href="https://github.com/rivic-q" className="text-gray-400 hover:text-black transition-colors"><Github size={18} /></a>
          <a href="mailto:hello@rivic.xyz" className="text-gray-400 hover:text-black transition-colors"><Mail size={18} /></a>
        </div>
        <p className="font-sans text-[10px] text-gray-400">
          © 2026 RivicQ Berlin.<br/>
          Leap Quantum Accelerator.
        </p>
      </div>
    </div>
  );
};

export default Sidebar;