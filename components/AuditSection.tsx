import React, { useState } from 'react';
import { ChevronDown, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface AuditSectionProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  severity?: 'critical' | 'warning' | 'info';
}

export const AuditSection: React.FC<AuditSectionProps> = ({ title, icon, children, severity = 'info' }) => {
  const borderColor = severity === 'critical' ? 'border-red-500' : severity === 'warning' ? 'border-amber-500' : 'border-blue-500';
  const headerBg = severity === 'critical' ? 'bg-red-50' : severity === 'warning' ? 'bg-amber-50' : 'bg-blue-50';
  const iconColor = severity === 'critical' ? 'text-red-600' : severity === 'warning' ? 'text-amber-600' : 'text-blue-600';

  return (
    <div className={`bg-white rounded-lg shadow-sm border-l-4 ${borderColor} mb-6 overflow-hidden`}>
      <div className={`px-6 py-4 border-b border-gray-100 ${headerBg} flex items-center justify-between`}>
        <div className="flex items-center gap-3">
          {icon && <span className={iconColor}>{icon}</span>}
          <h3 className="font-bold text-gray-800 text-lg">{title}</h3>
        </div>
        {severity === 'critical' && (
          <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-bold uppercase rounded-full tracking-wide">
            Action Required
          </span>
        )}
      </div>
      <div className="p-6">
        {children}
      </div>
    </div>
  );
};

interface ErrorItemProps {
  title: string;
  description: string;
  technicalDetails: string;
  icon: React.ReactNode;
}

export const ErrorItem: React.FC<ErrorItemProps> = ({ title, description, technicalDetails, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-red-100 rounded-md mb-3 bg-white hover:shadow-md transition-shadow">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left"
      >
        <div className="flex items-start gap-3">
          <div className="mt-1 p-2 bg-red-50 rounded-full text-red-600 shrink-0">
            {icon}
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-sm md:text-base">{title}</h4>
            <p className="text-xs md:text-sm text-red-600 font-medium mt-1">Status: Failed</p>
          </div>
        </div>
        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 pl-[4.5rem]">
              <p className="text-gray-600 text-sm mb-3">{description}</p>
              <div className="bg-gray-900 text-gray-200 p-3 rounded text-xs font-mono border-l-2 border-red-500">
                <div className="flex items-center gap-2 mb-1 text-red-400 font-bold uppercase tracking-wider text-[10px]">
                  <AlertCircle className="w-3 h-3" /> System Log
                </div>
                {technicalDetails}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};