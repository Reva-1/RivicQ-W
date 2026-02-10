import React from 'react';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white text-gray-900 font-serif">
      <Sidebar />
      <main className="flex-grow md:ml-64 w-full">
        <div className="max-w-4xl px-8 py-12 md:py-20 mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;