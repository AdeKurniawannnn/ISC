"use client";

import { useState } from "react";
import CompanyCard, { Company } from "@/components/CompanyCard";

const companies: Company[] = [
  {
    name: "Java Sea Aquaculture",
    slug: "java-sea-aquaculture",
    logo: "/company1.png",
    email: "info@javasea.com",
    phone: "+62 21 777 2211",
    sector: "Exporter",
  },
  {
    name: "Borneo Blue Farms",
    slug: "borneo-blue-farms",
    logo: "/company2.png",
    email: "contact@borneoblue.co.id",
    phone: "+62 541 123 456",
    sector: "Farmer Co-op",
  },
  {
    name: "Sumatra Shrimp Co.",
    slug: "sumatra-shrimp-co",
    logo: "/company3.png",
    email: "hello@sumatrashrimp.co.id",
    phone: "+62 61 888 9999",
    sector: "Processor",
  },
];



export default function DirectoryPage() {
  const [query, setQuery] = useState("");

  const filtered = companies.filter((c) =>
    c.name.toLowerCase().includes(query.toLowerCase()) ||
    c.sector.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8">Member Directory</h1>
      <input
        type="text"
        placeholder="Search companies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full md:w-80 border rounded-lg px-4 py-2 mb-8"
      />
      <div className="grid gap-6">
        {filtered.length === 0 && (
          <p className="text-neutral-500">No companies match your search.</p>
        )}
        {filtered.map((company) => (
          <CompanyCard key={company.slug} company={company} />
        ))}
      </div>
    </main>
  );
}
