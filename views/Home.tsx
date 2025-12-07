import React, { useState } from 'react';
import { Search, Shield, CheckCircle2, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

interface HomeProps {
  onStartAudit: (url: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onStartAudit }) => {
  const [url, setUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim().length > 3) {
      onStartAudit(url);
    }
  };

  return (
    <div className="min-h-full flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-100">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl w-full space-y-8 text-center"
      >
        <div>
          <div className="mx-auto h-20 w-20 bg-[#0073AA] rounded-full flex items-center justify-center shadow-lg mb-6">
            <Search className="h-10 w-10 text-white" />
          </div>
          <h2 className="mt-6 text-4xl font-extrabold text-gray-900 tracking-tight">
            Advanced WordPress System Analyzer
          </h2>
          <p className="mt-2 text-lg text-gray-600 max-w-2xl mx-auto">
            Detect hidden performance bottlenecks, security vulnerabilities, and core integrity failures before they crash your site.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
          <form className="mt-2 space-y-6" onSubmit={handleSubmit}>
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">https://</span>
              </div>
              <input
                type="text"
                required
                className="focus:ring-[#0073AA] focus:border-[#0073AA] block w-full pl-16 pr-12 sm:text-lg border-gray-300 rounded-lg py-4"
                placeholder="www.yourwebsite.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-4 px-4 border border-transparent text-lg font-bold rounded-lg text-white bg-[#0073AA] hover:bg-[#005177] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0073AA] shadow-lg transition-all hover:scale-[1.01]"
            >
              Run Full System Audit
            </button>
          </form>
          
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <Shield className="w-4 h-4 text-green-600" /> AES-256 Secure Scan
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-green-600" /> ISO 27001 Certified
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-green-600" /> Est. Time: 15s
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mt-12">
           <div className="p-6 bg-white rounded-lg shadow-sm border-t-4 border-[#0073AA]">
             <h3 className="font-bold text-gray-900 mb-2">Core Integrity</h3>
             <p className="text-sm text-gray-600">Deep scan of wp-admin and wp-includes for unauthorized file modifications.</p>
           </div>
           <div className="p-6 bg-white rounded-lg shadow-sm border-t-4 border-[#0073AA]">
             <h3 className="font-bold text-gray-900 mb-2">Plugin Conflicts</h3>
             <p className="text-sm text-gray-600">Heuristic analysis of active plugins to detect resource overlap and JS errors.</p>
           </div>
           <div className="p-6 bg-white rounded-lg shadow-sm border-t-4 border-[#0073AA]">
             <h3 className="font-bold text-gray-900 mb-2">Database Health</h3>
             <p className="text-sm text-gray-600">Latency checks on SQL queries to identify slow endpoints and bloat.</p>
           </div>
        </div>

        <p className="text-xs text-gray-400 mt-8">
          Trusted by 45,000+ WordPress Site Owners. Engine updated: {new Date().toLocaleDateString()}
        </p>

      </motion.div>
    </div>
  );
};