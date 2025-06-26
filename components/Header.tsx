"use client";

import Link from "next/link";
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white/30 backdrop-blur-lg shadow-md border-b border-white/20 backdrop-saturate-150 fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/" className="text-xl font-semibold">
          {/* Replace with your logo */}
          <span className="text-emerald-600">ISC</span> Logo
        </Link>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-neutral-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
        <nav className={`md:flex md:items-center md:gap-6 text-sm font-medium text-neutral-700 ${isMenuOpen ? 'absolute top-full left-0 w-full bg-white/90 backdrop-blur-lg shadow-lg flex flex-col items-center gap-4 py-4' : 'hidden'}`}>
          <Link href="/sustainability" className="hover:text-emerald-600">Sustainability</Link>
          <Link href="/global-reach" className="hover:text-emerald-600">Global Reach</Link>
          <Link href="/about" className="hover:text-emerald-600">About Us</Link>
          <Link href="/certification" className="hover:text-emerald-600">Certification</Link>
          <Link href="/blog" className="hover:text-emerald-600">Updates</Link>
          <Link href="/resources" className="hover:text-emerald-600">Resources</Link>
          <Link href="/contact" className="bg-emerald-500 text-white px-4 py-2 rounded-md hover:bg-emerald-600 transition-colors">
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
