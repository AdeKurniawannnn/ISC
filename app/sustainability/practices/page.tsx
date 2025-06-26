export const metadata = {
  title: "Environmental Practices | Indonesian Shrimp Council",
};

export default function EnvironmentalPracticesPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 space-y-10">
      <h1 className="text-3xl font-bold mb-4">Environmental Practices</h1>
      <p className="text-neutral-700 leading-relaxed">
        Indonesian shrimp farmers are embracing best-in-class environmental
        practices to protect coastal ecosystems while maintaining productivity.
      </p>

      <ul className="list-disc ml-6 space-y-3 text-neutral-700">
        <li>
          <strong>Mangrove-Friendly Pond Design:</strong> Encouraging buffer
          zones and reforestation initiatives.
        </li>
        <li>
          <strong>Low-carbon Feed:</strong> Utilising sustainably sourced
          ingredients and optimised feeding schedules.
        </li>
        <li>
          <strong>Effluent Management:</strong> Implementing sedimentation ponds
          and biofilters to reduce nutrient discharge.
        </li>
        <li>
          <strong>Renewable Energy:</strong> Transitioning aeration systems to
          solar-powered alternatives.
        </li>
      </ul>

      <div className="border-l-4 border-emerald-600 bg-neutral-50 p-4">
        <p className="text-neutral-800">
          For full technical manuals and training resources, members can access
          the <a href="/resources" className="text-emerald-700 underline">Resource
          Center</a>.
        </p>
      </div>
    </main>
  );
}
