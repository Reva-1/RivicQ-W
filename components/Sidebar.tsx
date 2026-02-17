
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Github, Mail, Linkedin, Globe, Shield, Lock, Cpu, Globe2, Sparkles, Layout, Building, Users, Scale, ShieldCheck, Microscope, BookOpen, Handshake, Briefcase, Cloud, Box, Atom, Star, Target, FileText } from 'lucide-react';

const Sidebar: React.FC = () => {
  const groups = [
    {
      label: 'Corporate',
      links: [
        { name: 'Home', path: '/', icon: <Layout size={12}/> },
        { name: 'Our Story', path: '/story', icon: <Sparkles size={12}/> },
        { name: 'Products & SaaS', path: '/products', icon: <Box size={12}/> },
        { name: 'Use Cases', path: '/use-cases', icon: <FileText size={12}/> },
      ]
    },
    {
      label: 'Technology',
      links: [
        { name: 'Cloud HSM', path: '/cloud-hsm', icon: <Cloud size={12}/> },
        { name: 'Architecture', path: '/platform', icon: <Cpu size={12}/> },
        { name: 'RQSP Protocol', path: '/rqsp', icon: <Lock size={12}/> },
        { name: 'Developer SDK', path: '/sdk', icon: <Layout size={12}/> },
      ]
    },
    {
      label: 'Intelligence',
      links: [
        { name: 'Quantum Research', path: '/research', icon: <Atom size={12}/> },
        { name: 'Trust Center', path: '/trust', icon: <ShieldCheck size={12}/> },
        { name: 'Methodology', path: '/methodology', icon: <Microscope size={12}/> },
        { name: 'Resources & Compliance', path: '/resources', icon: <ShieldCheck size={12}/> },
      ]
    },
    {
      label: 'Company',
      links: [
        { name: 'Partner Program', path: '/partner', icon: <Handshake size={12}/> },
        { name: 'Roadmap', path: '/roadmap', icon: <Globe2 size={12}/> },
        { name: 'Pricing', path: '/pricing', icon: <Layout size={12}/> },
        { name: 'Team', path: '/team', icon: <Users size={12}/> },
        { name: 'Legal & Rights', path: '/legal', icon: <Scale size={12}/> },
      ]
    }
  ];

  return (
    <aside className="w-full md:w-64 flex-shrink-0 md:fixed md:h-screen border-r border-slate-200 bg-white/70 backdrop-blur-xl flex flex-col z-50" role="complementary" aria-label="Main Sidebar Navigation">
      
      <div className="p-8 pb-6">
        <NavLink to="/" className="group block" aria-label="RivicQ Home">
          <h1 className="font-serif text-2xl font-bold tracking-tight text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
            RivicQ
          </h1>
          <div className="h-0.5 w-8 bg-blue-600 mb-3 group-hover:w-full transition-all duration-300"></div>
          <div className="space-y-0.5">
            <p className="font-sans text-[9px] uppercase tracking-[0.2em] text-blue-600 font-bold leading-tight">
              Quantum Safe
            </p>
            <p className="font-sans text-[9px] uppercase tracking-[0.2em] text-slate-400 font-bold leading-tight">
              Security Protocol
            </p>
          </div>
        </NavLink>
      </div>

      <nav className="flex-grow overflow-y-auto px-8 py-4 space-y-8 scrollbar-hide" aria-label="Sidebar Sections">
        {groups.map((group, idx) => (
          <div key={idx} role="group" aria-labelledby={`nav-group-${idx}`}>
            <h3 id={`nav-group-${idx}`} className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-3 border-b border-slate-100/50 pb-1">
              {group.label}
            </h3>
            <div className="space-y-1">
              {group.links.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `group flex items-center gap-3 py-1.5 text-sm transition-all focus:outline-none focus:ring-1 focus:ring-blue-100 rounded-lg ${
                      isActive 
                        ? 'text-slate-900 font-bold' 
                        : 'text-slate-500 hover:text-slate-900'
                    }`
                  }
                  aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
                >
                  {({ isActive }) => (
                    <>
                      <div className={`w-1 h-1 rounded-full transition-all ${isActive ? 'bg-blue-600 scale-150' : 'bg-transparent group-hover:bg-slate-300'}`} aria-hidden="true"></div>
                      {link.name}
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </nav>

      <div className="p-8 pt-4 border-t border-slate-100">
        <div className="flex gap-4 mb-6">
          <a href="https://github.com/rivic-q" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors focus:text-slate-900" title="GitHub" aria-label="RivicQ GitHub Repository"><Github size={16} /></a>
          <a href="https://www.linkedin.com/company/rivic-q" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors focus:text-blue-600" title="LinkedIn" aria-label="RivicQ LinkedIn Page"><Linkedin size={16} /></a>
          <a href="mailto:rivic.revan.ande@gmail.com" className="text-slate-400 hover:text-slate-900 transition-colors focus:text-slate-900" title="Email Contact" aria-label="Email RivicQ"><Mail size={16} /></a>
        </div>
        <div className="flex items-center gap-2 text-[9px] font-bold text-slate-400 uppercase tracking-tight">
          <Globe size={10} className="text-blue-500" aria-hidden="true"/>
          <span>Berlin • Leap Quantum</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
