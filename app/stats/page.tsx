export const metadata = {
  title: "Industry Statistics & Potential | Indonesian Shrimp Council",
};

import StatsSection from "@/components/StatsSection";

export default function StatsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 space-y-16">
      <section>
        <h1 className="text-3xl font-bold mb-4">Industry Statistics &amp; Potential</h1>
        <p className="text-neutral-700 leading-relaxed">
          Indonesia is one of the world’s leading shrimp exporters thanks to
          favourable climatic conditions, skilled farmers, and a robust export
          infrastructure. Explore key figures showcasing our industry’s scale
          and future growth potential.
        </p>
      </section>

      {/* Re-use the Home page statistics component for consistency */}
      <StatsSection />

      <section>
        <h2 className="text-2xl font-semibold mb-4">Growth Projections</h2>
        <p className="text-neutral-700 leading-relaxed">
          Government initiatives, sustainable practices, and technological
          innovation are projected to boost annual production to <strong>1.3
          million tons</strong> by 2030. Continued investment in value-added
          processing will unlock new markets and increase export revenues.
        </p>
      </section>
    </main>
  );
}
