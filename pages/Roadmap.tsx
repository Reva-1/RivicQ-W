
import React from 'react';
import { Target, Server, Cpu, CreditCard, Activity, BarChart3, Database, Key } from 'lucide-react';

const Milestone: React.FC<{ date: string, title: string, items: string[], icon: React.ReactNode, isCurrent?: boolean }> = ({ date, title, items, icon, isCurrent }) => (
  <div className="relative pl-12 pb-12 last:pb-0">
    <div className={`absolute left-0 top-1 w-9 h-9 rounded-full border flex items-center justify-center z-10 shadow-sm transition-all ${isCurrent ? 'bg-blue-600 text-white border-blue-600 ring-4 ring-blue-50 scale-110' : 'bg-white text-slate-400 border-slate-200'}`}>
      {icon}
    </div>
    <div className="absolute left-[17px] top-1 w-px h-full bg-slate-100 -z-0"></div>
    <div className="flex flex-col">
      <span className={`text-[10px] font-mono font-bold uppercase tracking-[0.2em] mb-1 ${isCurrent ? 'text-blue-600' : 'text-slate-400'}`}>{date}</span>
      <h3 className={`m-0 text-xl font-serif font-bold mb-3 ${isCurrent ? 'text-slate-900' : 'text-slate-500'}`}>{title}</h3>
      <ul className="space-y-2 m-0 p-0 list-none">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-3 text-xs text-slate-500">
            <div className={`w-1 h-1 rounded-full ${isCurrent && i < 2 ? 'bg-blue-500' : 'bg-slate-200'}`}></div> {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Roadmap: React.FC = () => {
  return (
    <article className="prose prose-lg prose-slate max-w-none">
      <header className="mb-16">
        <h1 className="text-5xl font-bold mb-4 tracking-tight">Enterprise Launch Roadmap</h1>
        <p className="lead font-serif italic text-slate-500">The path to commercial-grade quantum resilience.</p>
      </header>

      <section className="mb-20 not-prose">
        <Milestone 
          date="Q1-Q2 2025"
          isCurrent
          title="Architectural Stabilization"
          icon={<Server size={16}/>}
          items={[
            "Local Docker CryptoBOM Agent MVP (Complete)",
            "Kratos OAuth Implementation (Active)",
            "PostgreSQL Multi-tenant Schema Design",
            "Initial Cloud Instance Deployment (Berlin Region)"
          ]}
        />
        
        <Milestone 
          date="Q3 2025"
          title="Integration & Scale"
          icon={<Cpu size={16}/>}
          items={[
            "IBM Q & KIPU API Hardware Connectors",
            "Stripe Enterprise Subscription Mesh",
            "Prometheus/Grafana Observability Stack",
            "REST API v1 Public Beta"
          ]}
        />

        <Milestone 
          date="Q4 2025"
          title="Enterprise Launch"
          icon={<Target size={16}/>}
          items={[
            "FIPS 140-3 Hardware Finalization",
            "SOC2 Type I Compliance Audit",
            "DORA Regulatory Mapping Dashboard",
            "Institutional Launch (Financial Sector)"
          ]}
        />
      </section>

      <section className="bg-slate-900 p-10 md:p-16 rounded-[4rem] border border-slate-800 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
          <Activity size={240} />
        </div>
        <div className="relative z-10">
          <h2 className="text-white font-serif text-3xl mb-6 m-0">Closing the Infrastructure Gaps</h2>
          <p className="text-slate-400 text-lg leading-relaxed italic mb-10 max-w-2xl">
            "We are systematically transitioning from academic research to industrial infrastructure. Every milestone is a step toward a quantum-safe global economy."
          </p>
          <div className="grid md:grid-cols-3 gap-8">
             <div className="space-y-1">
                <span className="block text-2xl font-bold text-blue-400">99.9%</span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">SLA Objective</span>
             </div>
             <div className="space-y-1">
                <span className="block text-2xl font-bold text-emerald-400">Verified</span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">NIST PQC Standards</span>
             </div>
             <div className="space-y-1">
                <span className="block text-2xl font-bold text-indigo-400">Sovereign</span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">EU/German Residency</span>
             </div>
          </div>
        </div>
      </section>

    </article>
  );
};

export default Roadmap;
