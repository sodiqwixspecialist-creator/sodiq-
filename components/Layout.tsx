import React from 'react';
import { ShieldCheck, Activity, Menu } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800">
      {/* Official Header */}
      <header className="bg-white border-b-2 border-[#0073AA] shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#0073AA] flex items-center justify-center text-white">
              <span className="font-bold text-lg">W</span>
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-gray-900 leading-none">
                WordPress <span className="text-[#0073AA]">Diagnostic</span> Center
              </h1>
              <p className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold">
                Official System Audit Tool
              </p>
            </div>
          </div>
          
          <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-[#0073AA] transition-colors">Tools</a>
            <a href="#" className="hover:text-[#0073AA] transition-colors">Security</a>
            <a href="#" className="hover:text-[#0073AA] transition-colors">Performance</a>
            <div className="flex items-center gap-1 text-[#0073AA]">
              <ShieldCheck className="w-4 h-4" />
              <span>Verified Secure</span>
            </div>
          </nav>
          
          <button className="md:hidden text-gray-600">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Official Footer */}
      <footer className="bg-[#1d2327] text-white py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                 <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[#1d2327]">
                  <span className="font-bold text-xs">W</span>
                </div>
                <span className="font-semibold text-lg">WP Diagnostic Center</span>
              </div>
              <p className="text-gray-400 text-sm max-w-sm">
                Advanced diagnostic engine utilizing deep-scan technology to identify WordPress core failures, database corruption, and security vulnerabilities.
              </p>
            </div>
            
            <div>
              <h3 className="uppercase text-xs font-bold text-gray-500 tracking-wider mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white">Knowledge Base</a></li>
                <li><a href="#" className="hover:text-white">API Status</a></li>
                <li><a href="#" className="hover:text-white">Security Bulletins</a></li>
              </ul>
            </div>

            <div>
              <h3 className="uppercase text-xs font-bold text-gray-500 tracking-wider mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li className="flex items-center gap-2 text-green-400">
                   <Activity className="w-3 h-3" /> All Systems Operational
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-xs text-gray-500">
            &copy; {new Date().getFullYear()} WordPress Diagnostic Center. Not affiliated with The WordPress Foundation.
          </div>
        </div>
      </footer>
    </div>
  );
};