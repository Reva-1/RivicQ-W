
import React, { Suspense } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import { Loader2 } from 'lucide-react';

// Lazy Load Pages
const Home = React.lazy(() => import('./pages/Home'));
const Platform = React.lazy(() => import('./pages/Platform'));
const CloudHSM = React.lazy(() => import('./pages/CloudHSM'));
const RQSP = React.lazy(() => import('./pages/RQSP'));
const SDK = React.lazy(() => import('./pages/SDK'));
const Solutions = React.lazy(() => import('./pages/Solutions'));
const Roadmap = React.lazy(() => import('./pages/Roadmap'));
const Team = React.lazy(() => import('./pages/Team'));
const Careers = React.lazy(() => import('./pages/Careers'));
const Resources = React.lazy(() => import('./pages/Resources'));
const UseCases = React.lazy(() => import('./pages/UseCases'));
const Services = React.lazy(() => import('./pages/Services'));
const Blog = React.lazy(() => import('./pages/Blog'));
const Story = React.lazy(() => import('./pages/Story'));
const Compliance = React.lazy(() => import('./pages/Compliance'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
const Legal = React.lazy(() => import('./pages/Legal'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const TrustCenter = React.lazy(() => import('./pages/TrustCenter'));
const Glossary = React.lazy(() => import('./pages/Glossary'));
const Methodology = React.lazy(() => import('./pages/Methodology'));
const Partner = React.lazy(() => import('./pages/Partner'));

const RouteHandler = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
    const titles: Record<string, string> = {
      '/': 'RivicQ | Quantum-Safe Infrastructure',
      '/rqsp': 'RQSP Protocol | RivicQ',
      '/platform': 'Platform Architecture | RivicQ',
      '/cloud-hsm': 'Cloud HSM vHSM | RivicQ',
      '/methodology': 'Scientific Methodology | RivicQ',
      '/sdk': 'Developer SDK | RivicQ',
      '/solutions': 'Industry Solutions | RivicQ',
      '/services': 'Services & Red Teaming | RivicQ',
      '/use-cases': 'Use Cases | RivicQ',
      '/roadmap': 'Roadmap 2026-2030 | RivicQ',
      '/team': 'Our Team | RivicQ',
      '/careers': 'Careers | RivicQ',
      '/resources': 'Resources & Tools | RivicQ',
      '/blog': 'Blog & Insights | RivicQ',
      '/story': 'Our Story | RivicQ',
      '/compliance': 'PQC Compliance Deadlines | RivicQ',
      '/pricing': 'Pricing & Enterprise Plans | RivicQ',
      '/legal': 'Legal & Terms | RivicQ',
      '/privacy': 'Privacy Policy | RivicQ',
      '/trust': 'Trust Center | RivicQ',
      '/glossary': 'Glossary of Quantum Terms | RivicQ',
      '/partner': 'Partner Program | RivicQ'
    };
    document.title = titles[pathname] || 'RivicQ | Quantum-Safe Security';
  }, [pathname]);
  return null;
};

const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <Loader2 className="animate-spin text-slate-200" size={32} />
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <RouteHandler />
      <Layout>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rqsp" element={<RQSP />} />
            <Route path="/platform" element={<Platform />} />
            <Route path="/cloud-hsm" element={<CloudHSM />} />
            <Route path="/methodology" element={<Methodology />} />
            <Route path="/sdk" element={<SDK />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/services" element={<Services />} />
            <Route path="/use-cases" element={<UseCases />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/team" element={<Team />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/story" element={<Story />} />
            <Route path="/compliance" element={<Compliance />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/trust" element={<TrustCenter />} />
            <Route path="/glossary" element={<Glossary />} />
            <Route path="/partner" element={<Partner />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
};

export default App;
