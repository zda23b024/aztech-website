import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Award, BadgeCheck, Sparkles } from 'lucide-react';
import SectionHeader from '@/components/aztech/SectionHeader';
import { ProjectCard, ServiceCard, TeamCard } from '@/components/aztech/Cards';
import { projects, services, team } from '@/data/company';

export default function Home() {
  const featuredTeam = team;
  const rollingTeam = [...featuredTeam, ...featuredTeam];

  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#123E73]">
        <Image
          src="/brand/aztech-hero-office.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,62,115,0.90)_0%,rgba(23,83,143,0.78)_48%,rgba(8,124,255,0.48)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_22%,rgba(9,203,239,0.28),transparent_32%),radial-gradient(circle_at_18%_75%,rgba(8,124,255,0.24),transparent_34%)]" />
        <div className="absolute inset-0 tech-grid opacity-25" />
        <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8">
          <div className="flex w-full justify-center">
            <div className="mx-auto flex max-w-5xl flex-col items-center">
              <div className="inline-flex items-center gap-2 rounded-md border border-[#09CBEF]/30 bg-white/10 px-3 py-1.5 text-sm font-semibold text-white shadow-sm backdrop-blur">
                <Sparkles size={16} aria-hidden /> Technology | AI | Digital
              </div>
              <h1 className="mt-6 max-w-5xl text-3xl font-bold leading-[1.08] text-white sm:text-4xl lg:whitespace-nowrap lg:text-5xl">
                Smart Software for modern Businesses.
              </h1>
              <p className="mt-6 max-w-5xl text-lg leading-8 text-blue-50/86">
                Aztech designs and develops business websites, mobile applications, management systems, booking platforms, inventory tools, CRM workflows, automated reports and AI-powered solutions.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link href="/solutions" className="inline-flex items-center justify-center gap-2 rounded-md bg-[#087CFF] px-5 py-3 font-semibold text-white shadow-[0_20px_45px_rgba(8,124,255,0.35)] transition hover:bg-[#09CBEF] hover:text-[#123E73] focus:outline-none focus:ring-2 focus:ring-[#09CBEF]">
                  Explore Our Solutions <ArrowRight size={18} aria-hidden />
                </Link>
                <Link href="/projects" className="inline-flex items-center justify-center rounded-md border border-white/30 bg-white/10 px-5 py-3 font-semibold text-white backdrop-blur transition hover:border-[#09CBEF] hover:bg-white hover:text-[#0759E6] focus:outline-none focus:ring-2 focus:ring-[#09CBEF]">
                  View Our Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#EEF5FF] px-4 py-20 text-[#071B46] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Development services"
            title="Engineering services for real products and operations."
            description="We help businesses, offices and organizations turn manual work into useful digital systems, from websites and mobile apps to reports, notifications and AI-powered workflows."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 4).map((service) => <ServiceCard key={service.title} service={service} />)}
          </div>
        </div>
      </section>

      <section className="bg-[#E7F1FF] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Projects" title="Systems Aztech builds for real businesses." description="Aztech delivers practical systems for businesses, offices and organizations that need reliable digital operations." />
          <div className="mt-10 grid gap-6 xl:grid-cols-2">
            {projects.map((project) => <ProjectCard key={project.name} project={project} />)}
          </div>
        </div>
      </section>

      <section className="bg-[#F2F7FF] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Team" title="Founder-led, collaborative and built around engineering craft." description="Aztech is led by Ali Yahya Ali and Zakariya Yahya Ally, brothers building practical technology for businesses and organizations." />
          <div className="team-carousel mt-10 overflow-hidden">
            <div className="team-carousel-track flex gap-5">
              {rollingTeam.map((member, index) => (
                <div key={`${member.slug}-${index}`} className="team-carousel-card shrink-0">
                  <TeamCard member={member} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#EEF5FF] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Achievement & Certification" title="A growing technology company with skilled leadership." />
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <Link href="/achievements" className="brand-card brand-card-hover block rounded-lg p-6">
              <Award className="text-[#0759E6]" size={28} aria-hidden />
              <h3 className="mt-4 text-lg font-bold text-[#071B46]">Founder-led and client-ready</h3>
              <p className="mt-3 text-sm leading-6 text-[#64748B]">
                Aztech is building a real service company around websites, mobile apps, business systems, automation and AI-powered tools.
              </p>
            </Link>
            <Link href="/achievements" className="brand-card brand-card-hover block rounded-lg p-6">
              <BadgeCheck className="text-[#0759E6]" size={28} aria-hidden />
              <h3 className="mt-4 text-lg font-bold text-[#071B46]">Computer mathematics, data science and AI</h3>
              <p className="mt-3 text-sm leading-6 text-[#64748B]">
                The Aztech team combines academic technology training with practical software and business-system development.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F7FAFF] px-4 py-20 text-[#071B46] sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-lg border border-[#09CBEF]/25 bg-[#123E73] p-8 shadow-[0_24px_60px_rgba(7,89,230,0.14)] lg:flex-row lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-[#09CBEF]">Work with us</p>
            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">Ready to turn an idea into a serious digital product?</h2>
          </div>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 font-semibold text-[#0759E6] transition hover:bg-[#09CBEF] hover:text-[#123E73]">
            Work With Us <ArrowRight size={18} aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
