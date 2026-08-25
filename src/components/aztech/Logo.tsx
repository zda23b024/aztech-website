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
        width={1536}
        height={1024}
        priority={tone === 'dark'}
        className={tone === 'light' ? 'h-auto w-[170px] sm:w-[210px]' : 'h-auto w-[92px] sm:w-[104px] lg:w-[118px]'}
      />
    </Link>
  );
}
