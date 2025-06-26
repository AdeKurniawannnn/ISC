"use client";

import { motion } from "framer-motion";

const categories = [
  {
    icon: "🏆",
    title: "Certification Success",
    description: "Farmers achieving international standards"
  },
  {
    icon: "🌱",
    title: "Sustainability Champions",
    description: "Environmental leadership stories"
  },
  {
    icon: "📈",
    title: "Export Achievements",
    description: "Market expansion successes"
  },
  {
    icon: "🤝",
    title: "Partnership Stories",
    description: "Collaboration driving growth"
  }
];

export default function StoriesSection() {
  return (
    <section className="min-h-screen bg-gray-50 flex items-center">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Stories of Excellence
          </h2>
        </motion.div>

        {/* Featured Story */}
        <motion.div
          className="bg-white rounded-2xl shadow-sm p-8 mb-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            &quot;From Traditional Ponds to Global Markets&quot;
          </h3>
          <p className="text-gray-600 mb-6 italic">
            Pak Suharto's journey from small-scale farmer to ASC-certified supplier showcases how Indonesian innovation transforms traditional aquaculture...
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-md transition-colors">
            Read Full Story
          </button>
        </motion.div>

        {/* Story Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              className="bg-white rounded-xl p-6 cursor-pointer hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="text-3xl mb-4">{category.icon}</div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  {category.title}
                </h4>
                <p className="text-sm text-gray-600">
                  {category.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
