'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

const navItems = [
  { name: 'Home', href: '/#home' },
  { name: 'Features', href: '/#features' },
  { name: 'Testimonials', href: '/#testimonials' },
  { name: 'About', href: '/#about' },
  { name: 'Contact', href: '/#contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <nav className="max-w-6xl mx-auto bg-white/90 backdrop-blur-md rounded-2xl shadow-sm border border-gray-100 px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/#home" className="flex items-center gap-2">
            <Image
              src='/logo.png'
              alt="HouseFlow Logo"
              width={1000}
              height={1000}
              className='h-10 w-10'
            />
            <span className="font-bold text-lg text-[#1E1B4B]">HouseFlow</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-500 hover:text-[#7C74F5] transition-colors text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="https://apps.apple.com/us/app/houseflow-app/id6747577123"
            className="hidden md:block bg-[#7C74F5] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#6C63FF] transition-colors cursor-pointer"
          >
            Download Free
          </a>

          {/* Mobile Hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden cursor-pointer">
            {menuOpen ? (
              <XMarkIcon className="h-7 w-7 text-[#1E1B4B]" />
            ) : (
              <Bars3Icon className="h-7 w-7 text-[#1E1B4B]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 pb-2 flex flex-col gap-3 border-t border-gray-100 pt-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-600 hover:text-[#7C74F5] transition-colors text-sm font-medium py-1"
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://apps.apple.com/us/app/houseflow-app/id6747577123"
              className="mt-2 bg-[#7C74F5] text-white text-sm font-semibold px-5 py-2.5 rounded-full text-center hover:bg-[#6C63FF] transition-colors"
            >
              Download Free
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
