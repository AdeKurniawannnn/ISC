"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "💧",
    title: "Water Conservation",
    description: "30% reduction in water consumption"
  },
  {
    icon: "📊",
    title: "Carbon Tracking",
    description: "Complete transparency for buyers"
  },
  {
    icon: "🌳",
    title: "Ecosystem Protection",
    description: "Mangrove conservation integrated"
  }
];

export default function CarbonSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-emerald-800 via-emerald-700 to-emerald-600 text-white flex items-center">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Carbon Footprint Pioneers
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Calculator Card */}
          <motion.div
            className="md:col-span-1 bg-emerald-700/20 backdrop-blur rounded-xl p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="mb-4 text-2xl">🧮</div>
              <h3 className="text-xl font-semibold mb-2">Carbon Calculator Preview</h3>
              <p className="text-sm text-white/80 mb-4">
                Interactive tool for transparency
              </p>
              <p className="text-xs text-white/70 mb-4">
                Developed with BRIN (Indonesia's National Research Agency)
              </p>
              <button 
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-6 rounded-md transition-colors">
                Try Calculator
              </button>
            </div>
          </motion.div>

          {/* Features */}
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-emerald-700/30 backdrop-blur rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-white/80">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
