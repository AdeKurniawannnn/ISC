"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PlatformIntroSection() {
  return (
    <motion.section
      className="max-w-6xl mx-auto px-6 mb-24 grid md:grid-cols-2 gap-12 items-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="relative h-72 w-full md:h-96 shadow rounded-lg overflow-hidden">
        <Image
          src="/platform-screenshot.jpg"
          alt="ISC digital platform screenshot"
          fill
          className="object-cover object-center"
        />
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">
          Introducing the ISC Digital Platform
        </h2>
        <p className="text-neutral-700 leading-relaxed mb-6">
          Our upcoming platform offers members one-stop access to market
          dashboards, certification tools, and a vibrant community forum.
          Designed to streamline workflows and accelerate growth, the platform
          will be available in beta soon.
        </p>
        <ul className="list-disc ml-6 space-y-2 text-neutral-700">
          <li>Real-time export analytics &amp; price trends</li>
          <li>Carbon footprint calculator &amp; sustainability toolkit</li>
          <li>Secure document vault for certifications</li>
          <li>Partner matchmaking directory</li>
        </ul>
        <Link
          href="/contact"
          className="inline-block mt-8 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg"
        >
          Join Beta Waitlist
        </Link>
      </div>
    </motion.section>
  );
}
