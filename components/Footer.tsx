'use client';

import Link from 'next/link';
import Image from 'next/image';
import TikTok from '@/assets/tiktok.svg';
import Instagram from '@/assets/instagram.svg';
import ContactForm from "./contact-form";

const navItems = [
  { name: 'Home', href: '/#home' },
  { name: 'Features', href: '/#features' },
  { name: 'Testimonials', href: '/#testimonials' },
  { name: 'About', href: '/#about' },
];

const legalItems = [
  { name: 'FAQs', href: '/FAQs' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms & Conditions', href: '/terms' },
  { name: 'Delete Account', href: '/delete' },
];

export default function Footer() {
  return (
    <footer className="bg-[#1E1B4B] text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-16 justify-between">
          {/* Left: brand + nav */}
          <div className="flex flex-col gap-10 flex-shrink-0">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Image
                  src='/logo.png'
                  alt="HouseFlow Logo"
                  width={1000}
                  height={1000}
                  className='h-10 w-10'
                />
                <span className="font-bold text-xl">HouseFlow</span>
              </div>
              <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
                The smart household app that makes co-living fairer, calmer, and more efficient.
              </p>
            </div>

            <div className="flex gap-14">
              <div className="flex flex-col gap-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">Navigate</p>
                {navItems.map((item) => (
                  <Link key={item.name} href={item.href} className="text-gray-300 text-sm hover:text-white transition-colors">
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">Legal</p>
                {legalItems.map((item) => (
                  <Link key={item.name} href={item.href} className="text-gray-300 text-sm hover:text-white transition-colors">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right: contact form */}
          <div className="w-full lg:max-w-md bg-white/5 rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">Get in touch</h3>
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">&copy; 2025 HouseFlow. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {[
              { name: 'TikTok', href: 'https://www.tiktok.com/@houseflow.app?_t=ZN-8zZAqZ9NxJO&_r=1', Icon: TikTok },
              { name: 'Instagram', href: 'https://www.instagram.com/houseflow_app?igsh=MWhtc2t0NzBoZXMwMQ==', Icon: Instagram },
            ].map(({ name, href, Icon }) => (
              <Link key={name} href={href} className="cursor-pointer">
                <Icon className="w-6 h-6 fill-gray-400 hover:fill-white transition-colors" />
              </Link>
            ))}
          </div>
          <a href="https://woodhams-software.vercel.app/" className="text-gray-400 text-sm hover:text-white transition-colors">
            Created by Woodhams Software
          </a>
        </div>
      </div>
    </footer>
  );
}
