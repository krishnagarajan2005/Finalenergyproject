import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { ApplianceLoad } from '../constants';
import { cn } from '../lib/utils';

interface LoadCardProps {
  load: ApplianceLoad;
}

export const LoadCard: React.FC<LoadCardProps> = ({ load }) => {
  const Icon = load.icon;
  
  const statusColors = {
    'Low': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    'Medium': 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    'High': 'bg-rose-500/20 text-rose-400 border-rose-500/30',
    'Non-Use': 'bg-slate-500/20 text-slate-400 border-slate-500/30',
  };

  const trendIcons = {
    'up': <TrendingUp className="w-4 h-4 text-rose-400" />,
    'down': <TrendingDown className="w-4 h-4 text-emerald-400" />,
    'stable': <Minus className="w-4 h-4 text-slate-400" />,
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="glass p-5 rounded-2xl flex flex-col gap-4 group transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
            <Icon className="w-6 h-6" />
          </div>
          <h3 className="font-display font-semibold text-lg">{load.name}</h3>
        </div>
        <div className={cn("px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border", statusColors[load.status])}>
          {load.status}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-y-3 gap-x-4 py-2 border-y border-white/5">
        <div className="flex flex-col">
          <span className="text-[10px] text-slate-500 uppercase font-bold tracking-tight">Current</span>
          <span className="text-sm font-mono font-medium">{load.current}A</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] text-slate-500 uppercase font-bold tracking-tight">Voltage</span>
          <span className="text-sm font-mono font-medium">{load.voltage}V</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] text-slate-500 uppercase font-bold tracking-tight">Power</span>
          <span className="text-sm font-mono font-medium text-blue-400">{load.power}W</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] text-slate-500 uppercase font-bold tracking-tight">Usage</span>
          <span className="text-sm font-mono font-medium">{load.hours} hrs</span>
        </div>
      </div>

      <div className="flex items-center justify-between mt-1">
        <div className="flex flex-col">
          <span className="text-[10px] text-slate-500 uppercase font-bold tracking-tight">Est. Price</span>
          <span className="text-lg font-display font-bold text-emerald-400">₹{load.price}</span>
        </div>
        <div className="flex items-center gap-1">
          {trendIcons[load.trend]}
          <span className="text-[10px] font-bold uppercase text-slate-500">Trend</span>
        </div>
      </div>
    </motion.div>
  );
};

export const AddLoadCard: React.FC = () => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="glass p-5 rounded-2xl flex flex-col items-center justify-center gap-3 border-dashed border-2 border-white/10 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all group min-h-[220px]"
    >
      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all">
        <span className="text-3xl font-light">+</span>
      </div>
      <span className="font-display font-medium text-slate-400 group-hover:text-white">ADD LOAD CARD</span>
    </motion.button>
  );
};
