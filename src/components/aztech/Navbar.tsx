'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navigation } from '@/data/company';
import Logo from './Logo';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#DCE7F5] bg-white/92 shadow-[0_10px_30px_rgba(7,27,70,0.05)] backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8" aria-label="Main navigation">
        <Logo />

        <div className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-semibold text-[#071B46]/75 transition hover:bg-[#F7FAFF] hover:text-[#087CFF] focus:outline-none focus:ring-2 focus:ring-[#087CFF]"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className="brand-gradient hidden rounded-md px-4 py-2 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(8,124,255,0.18)] transition hover:bg-[#071B46] hover:bg-none focus:outline-none focus:ring-2 focus:ring-[#087CFF] focus:ring-offset-2 focus:ring-offset-white lg:inline-flex"
        >
          Work With Us
        </Link>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#DCE7F5] text-[#071B46] focus:outline-none focus:ring-2 focus:ring-[#087CFF] lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="border-t border-[#DCE7F5] bg-white px-4 py-4 shadow-xl lg:hidden"
          >
            <div className="mx-auto grid max-w-7xl gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-base font-semibold text-[#071B46]/80 hover:bg-[#F7FAFF] hover:text-[#087CFF]"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="brand-gradient mt-3 rounded-md px-4 py-3 text-center font-semibold text-white"
              >
                Work With Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
