"use client";

import { motion } from "framer-motion";

const associations = [
  {
    icon: "🏭",
    title: "Exporters-Processors",
    subtitle: "Processing Excellence"
  },
  {
    icon: "🎯",
    title: "Producer Association",
    subtitle: "Farming Innovation"
  },
  {
    icon: "👥",
    title: "Shrimp Club Indonesia",
    subtitle: "Industry Leadership"
  },
  {
    icon: "⭐",
    title: "PMI Young Farmers",
    subtitle: "Next Generation"
  }
];

const stats = [
  {
    number: "200,000+",
    label: "Industry Professionals"
  },
  {
    number: "50+",
    label: "Processing Facilities"
  },
  {
    number: "15+",
    label: "International Certifications"
  },
  {
    number: "100+",
    label: "Export Destinations"
  }
];

export default function UnitySection() {
  return (
    <section className="min-h-screen bg-gray-50 flex items-center">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Uniting Indonesia&apos;s Shrimp Excellence
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            The Indonesian Shrimp Council represents the collective strength of our nation&apos;s leading aquaculture associations.
          </p>
        </motion.div>

        {/* Associations Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {associations.map((partner) => (
            <div 
              key={partner.title}
              className="bg-white rounded-lg p-6 text-center shadow-sm"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                {partner.icon}
              </div>
              <h3 className="font-semibold text-blue-900 mb-1">{partner.title}</h3>
              <p className="text-sm text-gray-600">{partner.subtitle}</p>
            </div>
          ))}
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {stats.map((feature) => (
            <div key={feature.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {feature.number}
              </div>
              <div className="text-gray-600">
                {feature.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
