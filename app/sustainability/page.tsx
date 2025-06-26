export const metadata = {
  title: "Sustainability & Environment | Indonesian Shrimp Council",
};

export default function SustainabilityPage() {
  const items = [
    {
      title: "Carbon Calculator",
      description:
        "Estimate the carbon footprint of your shrimp production and identify reduction strategies.",
      href: "/sustainability/carbon-calculator",
    },
    {
      title: "Environmental Practices",
      description:
        "Learn best-practice pond management and mangrove restoration techniques.",
      href: "/sustainability/practices",
    },
    {
      title: "Certification Portfolio",
      description:
        "View environmental certifications held by our members.",
      href: "/sustainability/certifications",
    },
    {
      title: "Sustainability Stories",
      description:
        "Read real-world case studies of eco-friendly farming initiatives.",
      href: "/sustainability/stories",
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-16 space-y-16">
      <header>
        <h1 className="text-3xl font-bold mb-4">Sustainability &amp; Environment</h1>
        <p className="text-neutral-700 leading-relaxed max-w-3xl">
          The Indonesian Shrimp Council is committed to sustainable growth that
          safeguards our coastal ecosystems. Explore our environmental tools
          and resources below.
        </p>
      </header>

      <section className="grid gap-8 md:grid-cols-2">
        {items.map((it) => (
          <a
            key={it.title}
            href={it.href}
            className="block border border-neutral-200 rounded-lg p-6 shadow hover:shadow-md hover:border-emerald-500 hover:bg-emerald-50 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50"
          >
            <h2 className="text-xl font-semibold mb-2">{it.title}</h2>
            <p className="text-neutral-700 leading-relaxed">{it.description}</p>
          </a>
        ))}
      </section>
    </main>
  );
}
