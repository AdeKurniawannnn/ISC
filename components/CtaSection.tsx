"use client";

import { motion } from "framer-motion";

const ctaCards = [
  {
    title: "International Buyers",
    description: "Connect with Certified Suppliers",
    buttonText: "Find Suppliers",
    buttonLink: "/suppliers"
  },
  {
    title: "Industry Professionals",
    description: "Join Our Community",
    buttonText: "Join Now",
    buttonLink: "/join"
  },
  {
    title: "Sustainability Partners",
    description: "Explore Carbon Calculator",
    buttonText: "Try Calculator",
    buttonLink: "/calculator"
  }
];

export default function CtaSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white flex items-center">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience Indonesian Shrimp Excellence?
          </h2>
        </motion.div>

        {/* CTA Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {ctaCards.map((card, index) => (
            <motion.div
              key={card.title}
              className="bg-blue-600/50 backdrop-blur-sm rounded-xl p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-blue-100 mb-6">{card.description}</p>
              <button
                className="bg-orange-500 hover:bg-orange-400 text-white font-semibold py-2 px-6 rounded-md transition-colors"
                onClick={() => window.location.href = card.buttonLink}
              >
                {card.buttonText}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div
          className="text-center text-blue-100"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="font-semibold mb-2">Indonesian Shrimp Council</div>
          <div className="flex items-center justify-center gap-4">
            <span>📧 info@indonesianshrimp.council.org</span>
            <span>📞 +62 21 XXXX XXXX</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
