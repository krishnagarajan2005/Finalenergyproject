import React from 'react';
import { motion } from 'motion/react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';
import { MOCK_LOADS, CHART_DATA } from '../constants';
import { LoadCard, AddLoadCard } from './LoadCard';
import { SmartSuggestionPanel } from './SmartSuggestionPanel';
import { cn } from '../lib/utils';

export const Dashboard: React.FC = () => {
  const pieData = MOCK_LOADS.map(load => ({
    name: load.name,
    value: load.power
  }));

  const COLORS = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444'];

  const statusGrid = MOCK_LOADS.map(load => ({
    name: load.name,
    power: load.power,
    status: load.status
  }));

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'High': return 'text-rose-400 bg-rose-500/10 border-rose-500/20';
      case 'Medium': return 'text-amber-400 bg-amber-500/10 border-amber-500/20';
      case 'Low': return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
      default: return 'text-slate-400 bg-slate-500/10 border-slate-500/20';
    }
  };

  return (
    <div className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col gap-10">
        
        {/* SECTION 1: LOAD CARDS */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-display font-bold">Appliance Load Monitoring</h2>
            <span className="text-slate-400 text-sm">Real-time data update every 5s</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {MOCK_LOADS.map((load) => (
              <LoadCard key={load.id} load={load} />
            ))}
            <AddLoadCard />
          </div>
        </section>

        {/* Main Dashboard Grid */}
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* LEFT PANEL: SMART SUGGESTIONS */}
          <div className="lg:col-span-3">
            <SmartSuggestionPanel loads={MOCK_LOADS} />
          </div>

          {/* RIGHT CONTENT: GRAPHS */}
          <div className="lg:col-span-9 flex flex-col gap-8">
            
            {/* SECTION 2: GRAPH + PIE CHART */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Dual Line Graph */}
              <div className="glass p-6 rounded-3xl border-white/5">
                <h3 className="text-lg font-display font-bold mb-6">Current vs Voltage Trend</h3>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={CHART_DATA}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                      <XAxis 
                        dataKey="time" 
                        stroke="#94a3b8" 
                        fontSize={12} 
                        tickLine={false} 
                        axisLine={false} 
                      />
                      <YAxis 
                        stroke="#94a3b8" 
                        fontSize={12} 
                        tickLine={false} 
                        axisLine={false} 
                      />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#0f172a', 
                          borderColor: '#ffffff20', 
                          borderRadius: '12px',
                          color: '#fff' 
                        }} 
                      />
                      <Line 
                        type="monotone" 
                        dataKey="current" 
                        stroke="#3b82f6" 
                        strokeWidth={3} 
                        dot={{ r: 4, fill: '#3b82f6' }} 
                        activeDot={{ r: 6 }} 
                        name="Current (A)"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="voltage" 
                        stroke="#8b5cf6" 
                        strokeWidth={3} 
                        dot={{ r: 4, fill: '#8b5cf6' }} 
                        activeDot={{ r: 6 }} 
                        name="Voltage (V)"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Pie Chart */}
              <div className="glass p-6 rounded-3xl border-white/5 flex flex-col">
                <h3 className="text-lg font-display font-bold mb-6">Load Distribution (Watts)</h3>
                <div className="h-[240px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#0f172a', 
                          borderColor: '#ffffff20', 
                          borderRadius: '12px' 
                        }} 
                      />
                      <Legend verticalAlign="bottom" height={36} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 flex flex-col gap-2">
                  <h4 className="text-xs font-bold uppercase text-slate-500 tracking-wider mb-1">Usage Hours List</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {MOCK_LOADS.map((load, i) => (
                      <div key={load.id} className="flex items-center justify-between p-2 rounded-lg bg-white/5">
                        <span className="text-xs font-medium text-slate-300">{load.name}</span>
                        <span className="text-xs font-bold text-blue-400">{load.hours} hrs</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 3: LOAD STATUS GRID */}
            <section className="glass p-6 rounded-3xl border-white/5">
              <h3 className="text-lg font-display font-bold mb-6">Load Status Summary</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {statusGrid.map((item, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5 flex flex-col gap-2">
                    <span className="text-xs font-medium text-slate-400">{item.name}</span>
                    <span className="text-xl font-display font-bold">{item.power}W</span>
                    <div className={cn("px-2 py-0.5 rounded-full text-[10px] font-bold uppercase text-center border", getStatusColor(item.status))}>
                      {item.status}
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};
