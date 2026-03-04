import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Zap, 
  LineChart, 
  ShieldCheck, 
  Smartphone, 
  Cpu, 
  BarChart3 
} from 'lucide-react';

export const Home: React.FC<{ onStart: () => void }> = ({ onStart }) => {
  const features = [
    {
      icon: Cpu,
      title: "AI Prediction",
      desc: "Advanced neural networks forecast your energy usage patterns with 98% accuracy."
    },
    {
      icon: BarChart3,
      title: "Real-time Monitoring",
      desc: "Track every appliance's consumption live with granular detail and voltage analysis."
    },
    {
      icon: ShieldCheck,
      title: "Smart Optimization",
      desc: "Automatically receive suggestions to optimize load distribution and reduce waste."
    },
    {
      icon: Smartphone,
      title: "Remote Control",
      desc: "Manage your smart home energy from anywhere with our seamless mobile integration."
    }
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 text-center mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-sm font-bold border border-blue-500/20 mb-6 inline-block">
            AI-POWERED ENERGY MANAGEMENT
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
            Smart Energy Monitoring for a <br />
            <span className="text-gradient">Smarter Future</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Optimize your power consumption with AI-driven insights. Monitor, predict, and save energy with our advanced real-time dashboard.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={onStart}
              className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all flex items-center gap-2 group shadow-lg shadow-blue-500/25"
            >
              Get Started Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-full glass hover:bg-white/10 text-white font-bold transition-all">
              Learn More
            </button>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
            <div className="relative glass rounded-3xl p-8 border-white/10 aspect-video flex items-center justify-center overflow-hidden">
              <Zap className="w-32 h-32 text-blue-500/20 absolute" />
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="w-16 h-16 rounded-2xl bg-blue-500 flex items-center justify-center shadow-xl shadow-blue-500/40">
                  <LineChart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold">98% Accuracy</h3>
                <p className="text-slate-400">In energy load prediction and cost forecasting.</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              AI-Based Energy Prediction and <br />
              <span className="text-blue-400">Smart Optimization</span>
            </h2>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Our system utilizes state-of-the-art machine learning algorithms to analyze your historical usage data and provide real-time optimization strategies. We don't just show you data; we give you actionable insights.
            </p>
            <ul className="space-y-4">
              {['Real-time appliance tracking', 'Predictive maintenance alerts', 'Cost reduction strategies'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-200">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Key Features</h2>
          <p className="text-slate-400">Everything you need to manage your energy consumption efficiently.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl border-white/5 hover:border-blue-500/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-all">
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="glass rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden border-white/10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 -z-10"></div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Ready to optimize your home?</h2>
          <p className="text-slate-300 text-lg mb-10 max-w-xl mx-auto">
            Join thousands of smart homeowners who are saving up to 30% on their energy bills every month.
          </p>
          <button 
            onClick={onStart}
            className="px-10 py-4 rounded-full bg-white text-slate-950 font-bold hover:scale-105 transition-all shadow-xl shadow-white/10"
          >
            Start Monitoring Now
          </button>
        </div>
      </section>
    </div>
  );
};
