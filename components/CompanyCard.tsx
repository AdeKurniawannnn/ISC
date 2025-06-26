import Link from "next/link";
import Image from "next/image";

export interface Company {
  name: string;
  slug: string;
  logo: string;
  email: string;
  phone: string;
  sector: string;
}

export default function CompanyCard({ company }: { company: Company }) {
  return (
    <div className="border rounded-lg p-4 flex items-center gap-4 bg-white shadow-sm hover:shadow-md transition">
      <Image
        src={company.logo}
        alt={`${company.name} logo`}
        width={56}
        height={56}
        className="object-contain rounded"
      />
      <div className="flex-1">
        <h3 className="font-semibold text-neutral-800">
          <Link href={`/directory/${company.slug}`} className="hover:underline">
            {company.name}
          </Link>
        </h3>
        <p className="text-xs text-neutral-500 uppercase tracking-wide">
          {company.sector}
        </p>
        <p className="text-sm text-neutral-600 mt-1">
          {company.email} • {company.phone}
        </p>
      </div>
    </div>
  );
}
