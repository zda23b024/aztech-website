import Link from 'next/link';

interface LogoProps {
  tone?: 'light' | 'dark';
}

export default function Logo({ tone = 'dark' }: LogoProps) {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="Aztech home">
      <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-lg border border-cyan-300/40 bg-slate-950 text-cyan-200 shadow-[0_0_28px_rgba(34,211,238,0.28)]">
        <span className="absolute inset-1 rounded-md border border-emerald-300/25" />
        <span className="h-3 w-3 rotate-45 border-2 border-cyan-300 transition-transform duration-300 group-hover:rotate-[135deg]" />
      </span>
      <span className={`text-xl font-bold italic tracking-normal ${tone === 'light' ? 'text-white' : 'text-slate-950'}`}>
        Aztech
      </span>
    </Link>
  );
}
