import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
} from 'recharts';
import { TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { PREDICTION_DATA } from '../constants';
import { cn } from '../lib/utils';

export const Prediction: React.FC = () => {
  const [viewMode, setViewMode] = useState<'month' | 'year'>('month');

  const comparisonData = [
    { param: 'Voltage', current: '220V', predicted: '218V', change: -0.9, trend: 'down' },
    { param: 'Current', current: '16.4A', predicted: '15.8A', change: -3.6, trend: 'down' },
    { param: 'Power', current: '3608W', predicted: '3444W', change: -4.5, trend: 'down' },
    { param: 'Rate', current: '₹7.5/unit', predicted: '₹7.8/unit', change: 4.0, trend: 'up' },
    { param: 'Hours', current: '180 hrs', predicted: '165 hrs', change: -8.3, trend: 'down' },
  ];

  return (
    <div className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col gap-10">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-display font-bold">Energy Forecast</h1>
            <p className="text-slate-400">AI-driven predictions for your future energy consumption.</p>
          </div>
          
          <div className="flex p-1 rounded-xl bg-white/5 border border-white/10 w-fit">
            <button
              onClick={() => setViewMode('month')}
              className={cn(
                "px-6 py-2 rounded-lg text-sm font-bold transition-all",
                viewMode === 'month' ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20" : "text-slate-400 hover:text-white"
              )}
            >
              Month
            </button>
            <button
              onClick={() => setViewMode('year')}
              className={cn(
                "px-6 py-2 rounded-lg text-sm font-bold transition-all",
                viewMode === 'year' ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20" : "text-slate-400 hover:text-white"
              )}
            >
              Year
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* LEFT: Prediction Graph */}
          <div className="lg:col-span-8">
            <div className="glass p-6 rounded-3xl border-white/10 h-full">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-display font-bold">Monthly Trend Forecast</h3>
                <div className="flex items-center gap-2 text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full text-xs font-bold border border-emerald-500/20">
                  <TrendingUp className="w-4 h-4" />
                  <span>Optimizing...</span>
                </div>
              </div>
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={PREDICTION_DATA}>
                    <defs>
                      <linearGradient id="colorPower" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                    <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#0f172a', 
                        borderColor: '#ffffff20', 
                        borderRadius: '12px' 
                      }} 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="power" 
                      stroke="#3b82f6" 
                      strokeWidth={4}
                      fillOpacity={1} 
                      fill="url(#colorPower)" 
                      animationDuration={2000}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* RIGHT: Prediction Details Card */}
          <div className="lg:col-span-4">
            <div className="glass p-8 rounded-3xl border-white/10 h-full flex flex-col gap-8">
              <h3 className="text-xl font-display font-bold">
                {viewMode === 'month' ? 'Next Month Forecast' : 'Annual Forecast 2026'}
              </h3>
              
              <div className="space-y-6">
                {viewMode === 'month' ? (
                  <>
                    <DetailItem label="Predicted Voltage" value="218V" />
                    <DetailItem label="Predicted Current" value="15.8A" />
                    <DetailItem label="Total Power Usage" value="3444W" highlight />
                    <DetailItem label="Energy Rate" value="₹7.8/unit" />
                    <DetailItem label="Usage Hours" value="165 hrs" />
                  </>
                ) : (
                  <>
                    <DetailItem label="Predicted Year" value="2026" />
                    <DetailItem label="Annual Avg Voltage" value="220.5V" />
                    <DetailItem label="Annual Current" value="192.4A" />
                    <DetailItem label="Total Power Usage" value="42,500W" highlight />
                    <DetailItem label="Total Cost Estimate" value="₹1,24,500" />
                  </>
                )}
              </div>

              <div className="mt-auto p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                <p className="text-sm text-emerald-400 leading-relaxed">
                  <span className="font-bold">AI Insight:</span> By switching to energy-efficient modes during peak hours (6 PM - 10 PM), you can save an additional ₹450 next month.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FINAL SECTION: COMPARISON TABLE */}
        <section className="glass rounded-3xl border-white/10 overflow-hidden">
          <div className="p-6 border-b border-white/10">
            <h3 className="text-xl font-display font-bold">Parameter Comparison</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/5">
                  <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500 tracking-wider">Parameter</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500 tracking-wider">This Month</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500 tracking-wider">Next Month Prediction</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500 tracking-wider">Change</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {comparisonData.map((row, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors group">
                    <td className="px-6 py-4 font-medium text-slate-300">{row.param}</td>
                    <td className="px-6 py-4 font-mono">{row.current}</td>
                    <td className="px-6 py-4 font-mono text-blue-400">{row.predicted}</td>
                    <td className="px-6 py-4">
                      <div className={cn(
                        "flex items-center gap-1 font-bold",
                        row.trend === 'down' ? "text-emerald-400" : "text-rose-400"
                      )}>
                        {row.trend === 'down' ? <ArrowDownRight className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
                        {Math.abs(row.change)}%
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

const DetailItem = ({ label, value, highlight = false }: { label: string, value: string, highlight?: boolean }) => (
  <div className="flex items-center justify-between">
    <span className="text-slate-400 text-sm">{label}</span>
    <span className={cn(
      "font-display font-bold",
      highlight ? "text-2xl text-blue-400" : "text-lg text-white"
    )}>
      {value}
    </span>
  </div>
);
