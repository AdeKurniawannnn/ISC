"use client";

import Link from "next/link";

const footerLinks = {
  "About ISC": [
    { name: "Vision & Mission", href: "/about/vision" },
    { name: "Member Directory", href: "/members" },
    { name: "Leadership Team", href: "/about/leadership" }
  ],
  "Resources": [
    { name: "Market Intelligence", href: "/resources/market" },
    { name: "Technical Resources", href: "/resources/technical" },
    { name: "Training Materials", href: "/resources/training" }
  ],
  "Sustainability": [
    { name: "Carbon Calculator", href: "/sustainability/calculator" },
    { name: "Environmental Practices", href: "/sustainability/practices" },
    { name: "Certification Support", href: "/sustainability/certification" }
  ],
  "Connect": [
    { name: "Contact Information", href: "/contact" },
    { name: "Media Kit", href: "/media" }
  ]
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-orange-500 font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Indonesian Shrimp Council. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
