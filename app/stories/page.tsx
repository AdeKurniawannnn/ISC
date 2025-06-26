import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Member Success Stories | Indonesian Shrimp Council",
};

const stories = [
  {
    title: "Shrimp Exports Hit Record High in Q1 2025",
    slug: "shrimp-exports-record-high-2025",
    image: "/story1.jpg",
    body: "Indonesia’s shrimp exports reached a new milestone in Q1 2025 thanks to improved cold-chain logistics and streamlined customs procedures. Exporters report a 15% increase in average selling price year-on-year.",
  },
  {
    title: "Sustainable Farming Practices in Aceh Province",
    slug: "sustainable-farming-aceh",
    image: "/story2.jpg",
    body: "Farmers in Aceh have adopted mangrove-friendly pond designs and low-carbon feed, reducing their environmental footprint while increasing yields by 8%.",
  },
  {
    title: "Technology Boosts Yield for Small Farms",
    slug: "tech-boosts-yield",
    image: "/story3.jpg",
    body: "IoT-based water-quality sensors and AI-driven feed optimisation tools have helped small-scale farmers raise productivity and profitability.",
  },
];

export default function StoriesIndexPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-10">Member Success Stories</h1>
      <div className="grid gap-10 md:grid-cols-3">
        {stories.map((story) => (
          <Link
            key={story.slug}
            href={`/stories/${story.slug}`}
            className="group block rounded-lg overflow-hidden shadow hover:shadow-md transition"
          >
            <div className="relative h-48">
              <Image
                src={story.image}
                alt={story.title}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="p-4 bg-white">
              <h2 className="text-lg font-semibold mb-1 group-hover:text-emerald-700 transition-colors">
                {story.title}
              </h2>
              <p className="text-sm text-neutral-700 line-clamp-3">
                {story.body}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
