import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  tone?: 'light' | 'dark';
}

export default function Logo({ tone = 'dark' }: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center ${tone === 'light' ? 'rounded-lg bg-white px-3 py-2 shadow-sm' : ''}`}
      aria-label="Aztech home"
    >
      <Image
        src="/brand/aztech-logo.png"
        alt="Aztech"
        width={2172}
        height={724}
        priority={tone === 'dark'}
        className="h-auto w-[148px] sm:w-[168px] lg:w-[188px]"
      />
    </Link>
  );
}
