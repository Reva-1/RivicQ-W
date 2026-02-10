
import React from 'react';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#fafafa] relative">
      {/* Background elements */}
      <div className="fixed inset-0 bg-technical opacity-40 pointer-events-none"></div>
      <div className="fixed top-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-100/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="fixed bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-slate-100/30 blur-[120px] rounded-full pointer-events-none"></div>

      <Sidebar />
      <main className="flex-grow md:ml-64 w-full relative z-10">
        <div className="max-w-4xl px-8 py-12 md:py-24 mx-auto animate-fadeIn">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
