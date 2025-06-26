export const metadata = {
  title: "Sustainability Stories | Indonesian Shrimp Council",
};

const stories = [
  {
    title: "Mangrove Restoration Success in West Java",
    summary:
      "A cooperative of small-scale farmers partnered with NGOs to replant 50 hectares of mangroves, improving water quality and biodiversity.",
  },
  {
    title: "Solar Aerators Reduce Emissions by 35%",
    summary:
      "A pilot project demonstrated significant energy savings and lower GHG emissions by converting to solar-powered paddle wheels.",
  },
  {
    title: "Zero-Water-Exchange Technology Trial",
    summary:
      "Closed-loop systems in East Kalimantan cut effluent discharge while maintaining high survival rates.",
  },
];

export default function SustainabilityStoriesPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 space-y-10">
      <h1 className="text-3xl font-bold mb-4">Sustainability Stories</h1>
      <p className="text-neutral-700 leading-relaxed mb-8">
        Real-world case studies showcasing environmental stewardship and
        innovative practices across Indonesia’s shrimp industry.
      </p>

      <ul className="grid gap-6">
        {stories.map((s) => (
          <li key={s.title} className="border rounded-lg p-6 shadow">
            <h2 className="text-xl font-semibold mb-1">{s.title}</h2>
            <p className="text-neutral-700 leading-relaxed">{s.summary}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
