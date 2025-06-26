export const metadata = {
  title: "About Indonesian Shrimp | Indonesian Shrimp Council",
};

export default function AboutPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 space-y-16">
      <section>
        <h1 className="text-3xl font-bold mb-4">Our Heritage &amp; Natural Advantage</h1>
        <p className="text-neutral-700 leading-relaxed">
          Indonesia’s unique archipelago provides pristine coastal waters and an
          ideal climate for sustainable shrimp farming. Generations of coastal
          communities have cultivated shrimp, passing down hard-earned
          expertise that makes Indonesia one of the world’s most reliable
          suppliers.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Quality Standards</h2>
        <p className="text-neutral-700 leading-relaxed">
          Our members follow stringent bio-security protocols, traceability
          programs, and internationally recognized food-safety certifications.
          Continuous improvement keeps Indonesian shrimp competitive on a global
          stage.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Basic Industry Statistics</h2>
        <ul className="list-disc ml-6 space-y-2 text-neutral-700">
          <li>Annual production: <strong>900,000 + tons</strong></li>
          <li>Export destinations: <strong>70+ countries</strong></li>
          <li>Jobs supported: <strong>&gt;1 million</strong></li>
        </ul>
      </section>
    </main>
  );
}
