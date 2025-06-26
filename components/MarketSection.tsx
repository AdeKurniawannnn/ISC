"use client";

import { motion } from "framer-motion";

const marketPositions = [
  {
    icon: "🌏",
    title: "Asia-Pacific Dominance",
    description: "Leading supplier to major regional markets"
  },
  {
    icon: "🇺🇸",
    title: "US Market Growth",
    description: "Strong performance in premium segments"
  },
  {
    icon: "🇪🇺",
    title: "European Expansion",
    description: "Growing presence in sustainability-focused markets"
  },
  {
    icon: "📈",
    title: "Premium Positioning",
    description: "Higher value per ton demonstrates quality"
  }
];

export default function MarketSection() {
  return (
    <section className="min-h-screen bg-white flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Global Market Leadership
            </h2>
            <div className="max-w-3xl mx-auto">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Strategic Market Position
              </h3>
              <p className="text-gray-600">
                Indonesia&apos;s strategic position continues to strengthen, with 11% volume growth and 24% value increase in early 2025.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Market Positions */}
            <div className="md:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {marketPositions.map((position, index) => (
                  <motion.div
                    key={position.title}
                    className="bg-gray-50 rounded-xl p-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-2xl">{position.icon}</div>
                      <div>
                        <h4 className="font-semibold text-blue-900 mb-2">
                          {position.title}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {position.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quote Card */}
            <motion.div
              className="bg-blue-600 text-white rounded-xl p-8 flex items-center"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <blockquote className="text-lg italic">
                &quot;Indonesia&apos;s commitment to sustainable practices and quality excellence positions us as the preferred supplier for discerning global buyers.&quot;
              </blockquote>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
