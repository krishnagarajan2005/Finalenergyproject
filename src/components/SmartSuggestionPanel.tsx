import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, AlertCircle, CheckCircle2, Info } from 'lucide-react';
import { ApplianceLoad } from '../constants';
import { cn } from '../lib/utils';

interface SmartSuggestionPanelProps {
  loads: ApplianceLoad[];
}

export const SmartSuggestionPanel: React.FC<SmartSuggestionPanelProps> = ({ loads }) => {
  const getSuggestion = (load: ApplianceLoad) => {
    if (load.status === 'High') {
      return {
        message: `${load.name} is consuming high power (${load.power}W). Consider reducing usage to save costs.`,
        type: 'warning',
        icon: AlertCircle,
        color: 'border-rose-500/50 text-rose-400 bg-rose-500/5'
      };
    }
    if (load.status === 'Medium') {
      return {
        message: `${load.name} is consuming ${load.power}W. Usage is moderate and within expected range.`,
        type: 'info',
        icon: Info,
        color: 'border-blue-500/50 text-blue-400 bg-blue-500/5'
      };
    }
    return {
      message: `${load.name} consumption is minimal and efficient.`,
      type: 'success',
      icon: CheckCircle2,
      color: 'border-emerald-500/50 text-emerald-400 bg-emerald-500/5'
    };
  };

  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="flex items-center gap-2 mb-2">
        <Sparkles className="w-5 h-5 text-purple-400" />
        <h2 className="text-lg font-display font-bold">AI Smart Suggestions</h2>
      </div>
      
      <div className="flex flex-col gap-3 overflow-y-auto pr-2 max-h-[600px] custom-scrollbar">
        {loads.map((load) => {
          const suggestion = getSuggestion(load);
          const Icon = suggestion.icon;
          
          return (
            <motion.div
              key={load.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className={cn(
                "p-4 rounded-xl border-l-4 glass transition-all hover:translate-x-1",
                suggestion.color
              )}
            >
              <div className="flex gap-3">
                <Icon className="w-5 h-5 shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold uppercase tracking-wider opacity-70">{load.name}</span>
                  <p className="text-sm leading-relaxed text-slate-200">
                    {suggestion.message}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
