"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "17,000+", label: "Islands" },
  { value: "241,000", label: "MT Annual Export" },
  { value: "250%", label: "Growth Target" },
  { value: "ASC", label: "Certified" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 min-h-screen flex items-center">
      {/* Wave Pattern Background */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="waves" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 20 Q10 0 20 20 Q30 40 40 20" stroke="white" fill="none" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#waves)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-20 pb-32">
        <div className="max-w-5xl mx-auto text-center text-white">
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Indonesia&apos;s Premium Shrimp:<br />
            Where Tradition Meets Excellence
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-6 opacity-90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Discover the world&apos;s finest shrimp from Indonesia&apos;s pristine archipelago waters
          </motion.p>
          
          <motion.p 
            className="text-base md:text-lg mb-12 max-w-3xl mx-auto opacity-80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            From the crystal-clear waters of Indonesia&apos;s 17,000 islands comes the world&apos;s most sought-after shrimp. 
            Our unified industry represents over 241,000 metric tons of annual export excellence.
          </motion.p>

          {/* Stats Grid */}
          <motion.div 
            className="grid grid-cols-4 gap-4 mb-12 p-6 bg-white/10 backdrop-blur rounded-2xl mx-auto max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {stats.map((stat) => (
              <div 
                key={stat.label}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <a
              href="#explore"
              className="px-8 py-3 bg-orange-500 hover:bg-orange-400 text-white font-semibold rounded-md transition-colors"
            >
              Explore Excellence
            </a>
            <a
              href="#connect"
              className="px-8 py-3 bg-transparent border border-white hover:bg-white/10 text-white font-semibold rounded-md transition-colors"
            >
              Connect with Suppliers
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
