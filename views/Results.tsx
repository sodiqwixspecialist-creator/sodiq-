import React, { useState, useEffect } from 'react';
import { 
  CRITICAL_ERRORS, 
  ICONS_MAP, 
  WARNINGS, 
  PLUGIN_CONFLICTS, 
  EXPERT_INFO 
} from '../constants';
import { AuditSection, ErrorItem } from '../components/AuditSection';
import { AlertOctagon, Download, ExternalLink, CheckCircle, XCircle, AlertTriangle, Zap, Shield, UserCheck, MessageCircle, Activity } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ResultsProps {
  url: string;
}

export const Results: React.FC<ResultsProps> = ({ url }) => {
  const [showModal, setShowModal] = useState(false);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    // Show "System Update Required" popup after 3 seconds
    const timer = setTimeout(() => setShowModal(true), 3000);
    
    const handleScroll = () => {
      setShowSticky(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
        clearTimeout(timer);
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleDownload = () => {
    alert("This full technical report contains sensitive server data.\n\nIt has been automatically forwarded to your assigned expert, Adam, for security review.");
  };

  const domain = url.replace(/(^\w+:|^)\/\//, '').split('/')[0];
  const serverTime = Math.floor(Math.random() * (850 - 500 + 1) + 500); // Random high latency
  const score = 24;

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Sticky Top Banner for Expert */}
      <AnimatePresence>
      {showSticky && (
        <motion.div 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            className="fixed top-0 left-0 right-0 bg-red-600 text-white z-[60] shadow-lg"
        >
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    <span className="font-bold text-sm md:text-base">16 Critical Errors require immediate attention.</span>
                </div>
                <a 
                    href={`https://t.me/${EXPERT_INFO.telegram}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white text-red-600 px-4 py-1.5 rounded text-sm font-bold hover:bg-gray-100 transition-colors"
                >
                    Fix Now
                </a>
            </div>
        </motion.div>
      )}
      </AnimatePresence>

      <div className="bg-[#1d2327] text-white pt-10 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Audit Report: <span className="text-[#72aee6]">{domain}</span></h1>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span>Scan ID: #WP-{Math.floor(Math.random()*100000)}</span>
                <span>•</span>
                <span>{new Date().toLocaleString()}</span>
              </div>
            </div>
            <div className="mt-6 md:mt-0 flex gap-3">
               <button onClick={handleDownload} className="flex items-center gap-2 px-6 py-3 bg-[#0073AA] hover:bg-[#005177] rounded font-bold text-sm transition-colors">
                  <Download className="w-4 h-4" /> Download Report (PDF)
               </button>
            </div>
          </div>

          {/* Score Card */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="col-span-1 bg-white rounded-lg p-6 flex flex-col items-center justify-center text-center shadow-lg border-t-4 border-red-500">
                <div className="relative w-32 h-32 flex items-center justify-center mb-4">
                    <svg className="w-full h-full transform -rotate-90">
                        <circle cx="64" cy="64" r="56" stroke="#f3f4f6" strokeWidth="12" fill="none" />
                        <circle cx="64" cy="64" r="56" stroke="#ef4444" strokeWidth="12" fill="none" strokeDasharray="351.86" strokeDashoffset={351.86 * (1 - score / 100)} />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-4xl font-extrabold text-red-600">{score}</span>
                        <span className="text-xs text-gray-500 font-bold uppercase">Critical</span>
                    </div>
                </div>
                <h3 className="text-gray-900 font-bold">Overall Health Score</h3>
                <p className="text-xs text-gray-500 mt-1">Below industry standard (85+)</p>
            </div>

            <div className="col-span-1 md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <MetricCard label="Server Response" value={`${serverTime}ms`} status="bad" sub="Target: <200ms" />
                <MetricCard label="PHP Version" value="7.4.33 (EOL)" status="critical" sub="Security Support Ended" />
                <MetricCard label="Indexability" value="Failed" status="critical" sub="Robots.txt Blocking" />
                <MetricCard label="SSL Status" value="Mixed Content" status="warning" sub="Not Fully Secure" />
                <MetricCard label="Database" value="High Latency" status="bad" sub="Query Time > 1s" />
                <MetricCard label="Sitemap" value="Corrupted" status="critical" sub="XML Parse Error" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column: Errors */}
            <div className="lg:col-span-2">
                <AuditSection title="Critical Issues Detected (16)" severity="critical" icon={<AlertOctagon className="w-6 h-6" />}>
                   <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded text-sm text-red-800 flex gap-3">
                      <AlertTriangle className="w-5 h-5 shrink-0" />
                      <p><strong>Urgent Attention Needed:</strong> The following errors are critically impacting your site's SEO rankings, security, and user experience.</p>
                   </div>
                   {CRITICAL_ERRORS.map((error) => (
                       <ErrorItem 
                         key={error.id}
                         title={error.title}
                         description={error.description}
                         technicalDetails={error.technicalDetails}
                         icon={ICONS_MAP[error.id] || <AlertTriangle />}
                       />
                   ))}
                </AuditSection>

                <AuditSection title="Plugin Conflicts" severity="warning" icon={<Zap className="w-6 h-6" />}>
                    <p className="mb-4 text-sm text-gray-600">The following plugins are attempting to modify the same core hooks, causing memory exhaustion:</p>
                    <ul className="space-y-3">
                        {PLUGIN_CONFLICTS.map((conflict, i) => (
                            <li key={i} className="flex items-center gap-3 p-3 bg-amber-50 rounded border border-amber-100 text-sm text-gray-800 font-medium">
                                <XCircle className="w-4 h-4 text-amber-600" />
                                {conflict}
                            </li>
                        ))}
                    </ul>
                </AuditSection>

                <AuditSection title="Performance & Speed" severity="warning" icon={<Activity className="w-6 h-6" />}>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {WARNINGS.map((warn, i) => (
                             <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                                {warn}
                             </li>
                        ))}
                    </ul>
                </AuditSection>
            </div>

            {/* Right Column: Expert & Actions */}
            <div className="lg:col-span-1 space-y-6">
                {/* Expert Card */}
                <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden sticky top-24">
                    <div className="bg-[#0073AA] p-6 text-white text-center">
                        <div className="w-24 h-24 mx-auto bg-white rounded-full p-1 mb-3">
                             {/* Placeholder avatar */}
                             <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-gray-400">
                                <UserCheck className="w-12 h-12" />
                             </div>
                        </div>
                        <h2 className="text-xl font-bold">{EXPERT_INFO.name}</h2>
                        <p className="text-blue-100 text-sm font-medium">{EXPERT_INFO.role}</p>
                        <div className="flex items-center justify-center gap-1 mt-2 text-yellow-400 text-sm">
                            ★★★★★ <span className="text-white opacity-80">(4.9/5)</span>
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="mb-6 text-center">
                            <p className="text-sm text-gray-600 mb-4">
                                "I have reviewed your scan results. The <strong>Core File Corruption</strong> and <strong>16 critical errors</strong> require immediate manual repair to prevent data loss."
                            </p>
                            <div className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-bold rounded-full mb-1">
                                ● Online Now
                            </div>
                        </div>
                        
                        <a 
                           href={`https://t.me/${EXPERT_INFO.telegram}`} 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="block w-full bg-[#0088cc] hover:bg-[#0077b5] text-white text-center font-bold py-3 rounded-lg mb-3 shadow transition-colors flex items-center justify-center gap-2"
                        >
                           <MessageCircle className="w-5 h-5" /> Chat on Telegram
                        </a>
                        
                        <a 
                           href={`mailto:${EXPERT_INFO.email}`}
                           className="block w-full bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-700 text-center font-bold py-3 rounded-lg transition-colors"
                        >
                           Email Adam Directly
                        </a>

                        <div className="mt-6 border-t pt-4">
                            <h4 className="text-xs font-bold text-gray-500 uppercase mb-2">Expert Qualifications</h4>
                            <ul className="text-xs text-gray-500 space-y-1">
                                <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-[#0073AA]" /> Certified WP Security Analyst</li>
                                <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-[#0073AA]" /> Database Optimization Specialist</li>
                                <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-[#0073AA]" /> 1,200+ Sites Repaired</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Security Badge */}
                 <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center">
                    <Shield className="w-12 h-12 text-[#0073AA] mx-auto mb-3" />
                    <h3 className="font-bold text-gray-900">100% Secure Repair</h3>
                    <p className="text-xs text-gray-500 mt-2">
                        All fixes performed by our experts are backed by a 30-day money-back guarantee and full site backup.
                    </p>
                 </div>
            </div>
        </div>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4 backdrop-blur-sm">
            <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-lg shadow-2xl max-w-md w-full overflow-hidden"
            >
                <div className="bg-red-600 p-4 flex items-center gap-3">
                    <AlertOctagon className="text-white w-8 h-8" />
                    <h3 className="text-white font-bold text-lg">System Update Required</h3>
                </div>
                <div className="p-6">
                    <p className="text-gray-700 mb-4">
                        <strong>Warning:</strong> Your WordPress core files are out of sync with the database. Automatic updates have failed.
                    </p>
                    <p className="text-gray-600 text-sm mb-6">
                        Please contact the assigned expert immediately to prevent permanent site suspension or crawler de-indexing.
                    </p>
                    <div className="flex gap-3">
                        <button 
                            onClick={() => setShowModal(false)}
                            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-2 rounded"
                        >
                            Close
                        </button>
                        <a 
                            href={`https://t.me/${EXPERT_INFO.telegram}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded flex items-center justify-center gap-2"
                        >
                            Contact Expert
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
      )}
      </AnimatePresence>
    </div>
  );
};

const MetricCard: React.FC<{label: string, value: string, status: 'good'|'warning'|'bad'|'critical', sub: string}> = ({ label, value, status, sub }) => {
    const colors = {
        good: 'bg-green-100 text-green-800 border-green-200',
        warning: 'bg-yellow-100 text-yellow-800 border-yellow-200',
        bad: 'bg-orange-100 text-orange-800 border-orange-200',
        critical: 'bg-red-100 text-red-800 border-red-200'
    };

    return (
        <div className={`p-4 rounded border ${colors[status]} flex flex-col justify-between`}>
            <span className="text-xs font-bold uppercase tracking-wider opacity-70">{label}</span>
            <div>
                <span className="text-lg font-bold block">{value}</span>
                <span className="text-[10px] opacity-80">{sub}</span>
            </div>
        </div>
    )
}