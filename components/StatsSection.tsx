"use client";

import { motion } from "framer-motion";

export default function StatsSection() {
  const stats = [
    {
      label: "Annual Export Value",
      value: "$2.1B",
    },
    {
      label: "Global Market Share",
      value: "18%",
    },
    {
      label: "Jobs Supported",
      value: "> 1M",
    },
  ];

  return (
    <motion.section
      className="max-w-6xl mx-auto px-6 mb-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-semibold mb-8 text-center md:text-left">
        Quick Industry Statistics
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        {stats.map((item, index) => (
          <motion.div
            key={item.label}
            className="relative bg-white border border-neutral-200 rounded-lg p-6 pl-8 shadow-sm hover:shadow-md transition-shadow before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-emerald-600 before:rounded-l-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <p className="text-4xl font-bold text-emerald-700 mb-2">
              {item.value}
            </p>
            <p className="text-sm text-neutral-600 font-medium uppercase tracking-wide">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
