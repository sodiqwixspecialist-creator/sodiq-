import React, { useEffect, useState } from 'react';
import { SCAN_STEPS } from '../constants';
import { Settings, Server, Shield, Search, Database } from 'lucide-react';
import { motion } from 'framer-motion';

interface ScanningProps {
  onComplete: () => void;
  targetUrl: string;
}

export const Scanning: React.FC<ScanningProps> = ({ onComplete, targetUrl }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    let mounted = true;
    let totalDuration = SCAN_STEPS.reduce((acc, step) => acc + step.duration, 0);
    let elapsed = 0;
    
    // Progress bar ticker
    const progressInterval = setInterval(() => {
      elapsed += 100;
      const rawProgress = Math.min((elapsed / totalDuration) * 100, 100);
      if (mounted) setProgress(rawProgress);
    }, 100);

    // Step logic
    const executeStep = async (index: number) => {
      if (index >= SCAN_STEPS.length) {
        setTimeout(onComplete, 800);
        return;
      }

      const step = SCAN_STEPS[index];
      if(mounted) {
          setCurrentStepIndex(index);
          setLogs(prev => [`[${new Date().toLocaleTimeString()}] ${step.message}`, ...prev].slice(0, 6));
      }

      setTimeout(() => {
        if (mounted) executeStep(index + 1);
      }, step.duration);
    };

    executeStep(0);

    return () => {
      mounted = false;
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  const CurrentIcon = () => {
     const step = SCAN_STEPS[currentStepIndex];
     if (!step) return <Settings className="w-16 h-16 text-[#0073AA] animate-spin" />;
     
     if (step.message.includes("Server")) return <Server className="w-16 h-16 text-[#0073AA] animate-pulse" />;
     if (step.message.includes("Security")) return <Shield className="w-16 h-16 text-[#0073AA] animate-pulse" />;
     if (step.message.includes("Crawler")) return <Search className="w-16 h-16 text-[#0073AA] animate-bounce" />;
     if (step.message.includes("Core")) return <Database className="w-16 h-16 text-[#0073AA] animate-pulse" />;
     
     return <Settings className="w-16 h-16 text-[#0073AA] animate-spin" />;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-2xl p-8 border border-gray-100">
        
        <div className="flex flex-col items-center mb-8">
          <div className="mb-6 p-4 bg-blue-50 rounded-full border border-blue-100">
            <CurrentIcon />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 animate-pulse">
            {SCAN_STEPS[currentStepIndex]?.message || "Initializing..."}
          </h2>
          <p className="text-sm text-gray-500 mt-2">Target: <span className="font-mono text-[#0073AA]">{targetUrl}</span></p>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-4 mb-2 overflow-hidden">
          <motion.div 
            className="bg-[#0073AA] h-4 rounded-full relative"
            style={{ width: `${progress}%` }}
            layoutId="progress"
          >
             <div className="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_2s_infinite]"></div>
          </motion.div>
        </div>
        <div className="flex justify-between text-xs font-bold text-gray-500 uppercase tracking-wider mb-8">
          <span>Initializing</span>
          <span>{Math.round(progress)}% Complete</span>
        </div>

        {/* Fake Console Logs */}
        <div className="bg-[#1e1e1e] rounded-lg p-4 font-mono text-xs text-green-400 h-48 overflow-hidden shadow-inner border border-gray-800">
          <div className="flex items-center gap-2 border-b border-gray-700 pb-2 mb-2 text-gray-400">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-2">System Terminal</span>
          </div>
          <div className="space-y-1">
             {logs.map((log, i) => (
               <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={i === 0 ? "text-white font-bold" : "text-gray-500"}
               >
                 <span className="mr-2 opacity-50">$</span>{log}
               </motion.div>
             ))}
             <motion.div 
               animate={{ opacity: [0, 1, 0] }} 
               transition={{ repeat: Infinity, duration: 0.8 }}
               className="inline-block w-2 h-4 bg-green-400 align-middle ml-1"
             />
          </div>
        </div>

      </div>
    </div>
  );
};