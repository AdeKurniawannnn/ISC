import Link from "next/link";
import Image from "next/image";

const stories = [
  {
    title: "Shrimp Exports Hit Record High in Q1 2025",
    slug: "shrimp-exports-record-high-2025",
    image: "/story1.jpg",
  },
  {
    title: "Sustainable Farming Practices in Aceh Province",
    slug: "sustainable-farming-aceh",
    image: "/story2.jpg",
  },
  {
    title: "Technology Boosts Yield for Small Farms",
    slug: "tech-boosts-yield",
    image: "/story3.jpg",
  },
];

export default function StoriesPreview() {
  return (
    <section className="max-w-6xl mx-auto px-6 mb-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-semibold">Latest Stories</h2>
        <Link href="/stories" className="text-emerald-700 hover:underline">
          View all →
        </Link>
      </div>
      <div className="grid gap-8 sm:grid-cols-3">
        {stories.map((story) => (
          <Link
            key={story.slug}
            href={`/stories/${story.slug}`}
            className="group block rounded-lg overflow-hidden shadow hover:shadow-md transition"
          >
            <div className="relative h-40">
              <Image
                src={story.image}
                alt={story.title}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="p-4 bg-white">
              <h3 className="text-sm font-medium text-neutral-800 leading-snug line-clamp-2">
                {story.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
