"use client";

import { motion } from "framer-motion";

const certifications = [
  "ASC",
  "Fair Trade",
  "HACCP",
  "IndoGAP",
  "BRC",
  "IFS"
];

const partnerships = [
  {
    icon: "🔬",
    title: "BRIN Partnership",
    description: "Scientific research collaboration"
  },
  {
    icon: "🌐",
    title: "International Buyers",
    description: "Direct global relationships"
  },
  {
    icon: "🏛️",
    title: "Government Support",
    description: "Ministry backing"
  },
  {
    icon: "🎓",
    title: "Academic Institutions",
    description: "Continuous innovation"
  }
];

export default function StandardsSection() {
  return (
    <section className="min-h-screen bg-white flex items-center">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Trusted by Global Standards
          </h2>
        </motion.div>

        {/* Certifications */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {certifications.map((cert) => (
            <div
              key={cert}
              className="bg-gray-50 px-8 py-4 rounded-lg font-semibold text-gray-700"
            >
              {cert}
            </div>
          ))}
        </motion.div>

        {/* Partnerships Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {partnerships.map((partner) => (
            <motion.div
              key={partner.title}
              className="bg-gray-50 rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="text-3xl mb-4">{partner.icon}</div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  {partner.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {partner.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
