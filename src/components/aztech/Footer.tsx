import Link from 'next/link';
import { company, contacts, navigation, services } from '@/data/company';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="border-t border-slate-700 bg-[#101b2a] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_2fr] lg:px-8">
        <div>
          <Logo tone="light" />
          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-300">
            Technology • Innovation • Impact
          </p>
          <p className="mt-4 max-w-md text-sm leading-6 text-slate-300">
            {company.description}
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-cyan-300">Company</h2>
            <div className="mt-4 grid gap-3">
              {navigation.slice(1, 6).map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-slate-300 hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-cyan-300">Solutions</h2>
            <div className="mt-4 grid gap-3">
              {services.slice(0, 5).map((service) => (
                <Link key={service.title} href="/solutions" className="text-sm text-slate-300 hover:text-white">
                  {service.title}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-cyan-300">Contact</h2>
            <div className="mt-4 grid gap-3 text-sm text-slate-300">
              {contacts.map((contact) => (
                <div key={contact.email}>
                  <a href={`mailto:${contact.email}`} className="hover:text-white">{contact.email}</a>
                  <p className="mt-1 text-xs text-slate-400">{contact.phone}</p>
                </div>
              ))}
              <span>{company.location}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Aztech. All rights reserved.
      </div>
    </footer>
  );
}
