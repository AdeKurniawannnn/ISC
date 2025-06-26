export const metadata = {
  title: "Environmental Certification Portfolio | Indonesian Shrimp Council",
};

export default function CertificationPortfolioPage() {
  const certs = [
    {
      name: "ASC Shrimp",
      description: "Aquaculture Stewardship Council certification for responsible farming.",
    },
    {
      name: "BAP 4-Star",
      description: "Best Aquaculture Practices – farm, hatchery, feed mill & processing plant.",
    },
    {
      name: "EU Organic",
      description: "European Union organic aquaculture standard for eco-friendly production.",
    },
  ];

  return (
    <main className="max-w-3xl mx-auto px-6 py-16 space-y-10">
      <h1 className="text-3xl font-bold mb-4">Environmental Certification Portfolio</h1>
      <p className="text-neutral-700 leading-relaxed mb-8">
        Our members maintain internationally recognised certifications to meet
        stringent sustainability and food-safety requirements.
      </p>

      <ul className="grid gap-6">
        {certs.map((c) => (
          <li key={c.name} className="border rounded-lg p-6 shadow">
            <h2 className="text-xl font-semibold mb-1">{c.name}</h2>
            <p className="text-neutral-700 leading-relaxed">{c.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
