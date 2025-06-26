"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    icon: "🌴",
    title: "Archipelago Excellence",
    description: "Indonesia's unique geography creates the perfect environment for premium shrimp cultivation. Our pristine waters and optimal climate produce superior quality.",
    quote: "Indonesia's archipelago advantage delivers naturally superior shrimp quality.",
    imageUrl: "/icons/palm-tree.png"
  },
  {
    icon: "🌱",
    title: "Sustainability Leadership",
    description: "Leading with ASC certification, Fair Trade practices, and revolutionary carbon footprint tracking. Traditional wisdom meets modern stewardship.",
    quote: "Pioneering sustainable practices that protect our oceans while delivering premium quality.",
    imageUrl: "/icons/leaf.png"
  },
  {
    icon: "🏆",
    title: "Quality Assurance",
    description: "End-to-end traceability, HACCP compliance, and rigorous food safety management ensure every shrimp meets international standards.",
    quote: "From pond to plate, every Indonesian shrimp is traceable, safe, and premium quality.",
    imageUrl: "/icons/trophy.png"
  }
];

export default function Features() {
  return (
    <section className="min-h-screen bg-white flex items-center">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Why Indonesian Shrimp Leads the Global Market
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-gray-50 rounded-2xl p-8 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-6 text-4xl">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {feature.description}
              </p>
              
              <div className="mt-auto">
                <blockquote className="italic text-gray-500 border-l-4 border-orange-500 pl-4 text-left">
                  {feature.quote}
                </blockquote>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
