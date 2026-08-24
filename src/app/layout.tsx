import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/aztech/Navbar';
import Footer from '@/components/aztech/Footer';
import { company } from '@/data/company';
import { siteUrl } from '@/lib/siteUrl';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Aztech | Technology and Innovation',
    template: '%s | Aztech',
  },
  description: company.description,
  keywords: [
    'Aztech',
    'technology',
    'software engineering',
    'artificial intelligence',
    'data science',
    'automation',
    'business technology',
  ],
  authors: [{ name: 'Aztech' }],
  creator: 'Aztech',
  publisher: 'Aztech',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    title: 'Aztech | Technology and Innovation',
    description: company.description,
    siteName: 'Aztech',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aztech | Technology and Innovation',
    description: company.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-[#e4edf2] font-sans text-slate-900 antialiased">
        <Navbar />
        <main className="pt-16 lg:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
