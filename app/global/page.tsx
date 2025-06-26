export const metadata = {
  title: "Global Reach | Indonesian Shrimp Council",
};

const resources = [
  {
    title: "Export Market Overview",
    description:
      "Interactive dashboards highlighting key destination markets, pricing trends, and demand forecasts.",
    href: "/global/export-market-overview",
  },
  {
    title: "International Partnership Network",
    description:
      "Directory of overseas importers, distributors, and logistics partners vetted by ISC.",
    href: "/global/partners",
  },
  {
    title: "Global Presence Documentation",
    description:
      "Case studies and reports demonstrating Indonesian shrimp success stories worldwide.",
    href: "/global/presence",
  },
  {
    title: "Market Entry Support",
    description:
      "Guidelines and services to help members enter new export destinations efficiently.",
    href: "/global/market-entry",
  },
  {
    title: "Quality Assurance",
    description:
      "Information on quality control protocols and certifications recognised by major markets.",
    href: "/global/quality-assurance",
  },
];

export default function GlobalReachPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 space-y-16">
      <header>
        <h1 className="text-3xl font-bold mb-4">Global Reach</h1>
        <p className="text-neutral-700 leading-relaxed max-w-3xl">
          Indonesian shrimp products are enjoyed in over 70 countries across the
          globe. Explore resources designed to expand market access and foster
          international partnerships.
        </p>
      </header>

      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {resources.map((res) => (
          <a
            key={res.title}
            href={res.href}
            className="block border rounded-lg p-6 shadow hover:shadow-md transition"
          >
            <h2 className="text-lg font-semibold mb-2">{res.title}</h2>
            <p className="text-neutral-700 leading-relaxed text-sm">
              {res.description}
            </p>
          </a>
        ))}
      </section>
    </main>
  );
}
