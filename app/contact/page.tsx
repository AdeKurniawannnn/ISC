"use client";
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Placeholder submit handler – would POST to an API route
    setSent(true);
  }

  const faqs = [
    {
      q: "How do I become a member?",
      a: "Please reach out via the form with your company details, and our membership team will contact you.",
    },
    {
      q: "Where can I access export regulations?",
      a: "We maintain an up-to-date regulation library for members; contact us for credentials.",
    },
  ];

  return (
    <main className="max-w-4xl mx-auto px-6 py-16 space-y-16">
      <section>
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        {sent ? (
          <p className="text-emerald-600 font-medium">
            Thank you! Your message has been sent.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              required
              type="text"
              name="name"
              placeholder="Your name"
              className="w-full border rounded-lg px-4 py-2"
            />
            <input
              required
              type="email"
              name="email"
              placeholder="Your email"
              className="w-full border rounded-lg px-4 py-2"
            />
            <textarea
              required
              name="message"
              placeholder="Your message"
              rows={5}
              className="w-full border rounded-lg px-4 py-2"
            />
            <button
              type="submit"
              className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700"
            >
              Send Message
            </button>
          </form>
        )}
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((f) => (
            <details key={f.q} className="border rounded-lg p-4">
              <summary className="cursor-pointer font-medium">{f.q}</summary>
              <p className="mt-2 text-neutral-700">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Office Location */}
      <section className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Office Location</h2>
          <p className="text-neutral-700 leading-relaxed mb-2">
            Indonesia Shrimp Council Headquarters
          </p>
          <address className="not-italic text-neutral-700 leading-relaxed">
            Jl. Pantai Indah No. 88<br />
            Jakarta Utara 14470<br />
            Indonesia
          </address>
          <p className="mt-4 text-neutral-700">
            Phone: <a href="tel:+622122334455" className="text-emerald-700 hover:underline">+62&nbsp;21&nbsp;2233&nbsp;4455</a>
          </p>
          <p className="text-neutral-700">
            Email: <a href="mailto:info@indonesianshrimp.id" className="text-emerald-700 hover:underline">info@indonesianshrimp.id</a>
          </p>
        </div>
        <div className="relative h-64 w-full rounded-lg overflow-hidden shadow">
          <Image src="/jakarta-map.jpg" alt="Map showing ISC office location" fill className="object-cover object-center" />
        </div>
      </section>

      {/* Communication Channels */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Communication Channels</h2>
        <ul className="flex flex-wrap gap-6 text-neutral-700">
          <li>
            <a href="https://www.linkedin.com/company/indonesianshrimpcouncil" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700">LinkedIn</a>
          </li>
          <li>
            <a href="https://twitter.com/indo_shrimp" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700">Twitter</a>
          </li>
          <li>
            <a href="https://www.facebook.com/indonesianshrimp" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700">Facebook</a>
          </li>
          <li>
            <a href="https://www.instagram.com/indonesianshrimp" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700">Instagram</a>
          </li>
        </ul>
      </section>

      {/* Media Kit */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Media Kit &amp; Brand Assets</h2>
        <p className="text-neutral-700 leading-relaxed mb-4">
          Download our logo pack, brand guidelines, high-resolution photos, and fact sheets.
        </p>
        <Link href="/media/ISC-media-kit.zip" className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700">
          Download Media Kit (ZIP)
        </Link>
      </section>

    </main>
  );
}
