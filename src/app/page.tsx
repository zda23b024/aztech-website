import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Award, BadgeCheck, CheckCircle2, Sparkles } from 'lucide-react';
import SectionHeader from '@/components/aztech/SectionHeader';
import { BlogCard, ProjectCard, ServiceCard, TeamCard } from '@/components/aztech/Cards';
import { capabilityStats, insights, projects, services, team, technologyStack } from '@/data/company';

export default function Home() {
  const leadership = team.filter((member) => member.group === 'Leadership').slice(0, 2);

  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#04132F]">
        <Image
          src="/brand/aztech-hero-office.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,19,47,0.94)_0%,rgba(7,27,70,0.84)_45%,rgba(7,89,230,0.52)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_22%,rgba(9,203,239,0.28),transparent_32%),radial-gradient(circle_at_18%_75%,rgba(8,124,255,0.24),transparent_34%)]" />
        <div className="absolute inset-0 tech-grid opacity-25" />
        <div className="relative mx-auto min-h-[calc(100vh-5rem)] max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid min-h-[calc(100vh-13rem)] items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-md border border-[#09CBEF]/30 bg-white/10 px-3 py-1.5 text-sm font-semibold text-white shadow-sm backdrop-blur">
                <Sparkles size={16} aria-hidden /> Technology | AI | Digital
              </div>
              <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
                Build the Digital System Your Business Runs On.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-50/86">
                Aztech designs and develops business websites, mobile applications, management systems, booking platforms, inventory tools, CRM workflows, automated reports and AI-powered solutions.
              </p>
              <div className="mt-7 grid gap-3 text-sm font-semibold text-blue-50 sm:grid-cols-3">
                {['Business-ready systems', 'AI-powered workflows', 'Built from Zanzibar'].map((item) => (
                  <span key={item} className="inline-flex items-center gap-2 rounded-md border border-white/14 bg-white/8 px-3 py-2 backdrop-blur">
                    <CheckCircle2 className="text-[#09CBEF]" size={16} aria-hidden />
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/solutions" className="inline-flex items-center justify-center gap-2 rounded-md bg-[#087CFF] px-5 py-3 font-semibold text-white shadow-[0_20px_45px_rgba(8,124,255,0.35)] transition hover:bg-[#09CBEF] hover:text-[#04132F] focus:outline-none focus:ring-2 focus:ring-[#09CBEF]">
                  Explore Our Solutions <ArrowRight size={18} aria-hidden />
                </Link>
                <Link href="/projects" className="inline-flex items-center justify-center rounded-md border border-white/30 bg-white/10 px-5 py-3 font-semibold text-white backdrop-blur transition hover:border-[#09CBEF] hover:bg-white hover:text-[#0759E6] focus:outline-none focus:ring-2 focus:ring-[#09CBEF]">
                  View Our Projects
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-white/16 bg-white/12 p-4 shadow-[0_28px_70px_rgba(0,0,0,0.24)] backdrop-blur-md sm:p-5">
              <div className="rounded-xl border border-[#09CBEF]/24 bg-[#03112B]/78 p-5">
                <p className="text-sm font-semibold uppercase tracking-widest text-[#09CBEF]">What Aztech delivers</p>
                <div className="mt-5 grid gap-3">
                  {technologyStack.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="flex items-center justify-between rounded-lg border border-[#087CFF]/24 bg-[#0759E6]/16 p-4">
                        <span className="flex items-center gap-3 text-sm font-semibold text-white">
                          <span className="grid h-10 w-10 place-items-center rounded-md bg-[#087CFF]/18 text-[#09CBEF]">
                            <Icon size={20} aria-hidden />
                          </span>
                          {item.label}
                        </span>
                        <ArrowRight className="text-[#09CBEF]" size={18} aria-hidden />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <dl className="grid gap-3 pb-2 sm:grid-cols-3">
            {capabilityStats.map((item) => (
              <div key={item.label} className="rounded-lg border border-white/14 bg-white/12 p-4 shadow-[0_18px_44px_rgba(0,0,0,0.14)] backdrop-blur-md">
                <dt className="text-xs font-bold uppercase tracking-widest text-[#09CBEF]">{item.label}</dt>
                <dd className="mt-2 text-sm font-semibold text-white">{item.value}</dd>
              </div>
            ))}
          </dl>
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
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => <ProjectCard key={project.name} project={project} />)}
          </div>
        </div>
      </section>

      <section className="bg-[#F2F7FF] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader eyebrow="Team" title="Founder-led, collaborative and built around engineering craft." description="Aztech is led by Ali Yahya Ali and Zakariya Yahya Ally, brothers building practical technology for businesses and organizations." />
          <div className="grid gap-5">
            {leadership.map((member) => <TeamCard key={member.slug} member={member} />)}
          </div>
        </div>
      </section>

      <section className="bg-[#EEF5FF] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <SectionHeader eyebrow="Achievement" title="A growing technology company with clear direction." />
            <Link href="/achievements" className="brand-card brand-card-hover mt-8 block rounded-lg p-6">
              <Award className="text-[#0759E6]" size={28} aria-hidden />
              <h3 className="mt-4 text-lg font-bold text-[#071B46]">Founder-led and client-ready</h3>
              <p className="mt-3 text-sm leading-6 text-[#64748B]">
                Aztech is building a real service company around websites, mobile apps, business systems, automation and AI-powered tools.
              </p>
            </Link>
          </div>
          <div>
            <SectionHeader eyebrow="Certification" title="Education and skills behind the work." />
            <div className="mt-8 grid gap-5">
              <Link href="/certification" className="brand-card brand-card-hover block rounded-lg p-6">
                <BadgeCheck className="text-[#0759E6]" size={28} aria-hidden />
                <h3 className="mt-4 text-lg font-bold text-[#071B46]">Computer mathematics, data science and AI</h3>
                <p className="mt-3 text-sm leading-6 text-[#64748B]">
                  The Aztech team combines academic technology training with practical software and business-system development.
                </p>
              </Link>
              {insights.slice(0, 1).map((post) => <BlogCard key={post.title} post={post} />)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7FAFF] px-4 py-20 text-[#071B46] sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-lg border border-[#0759E6]/25 bg-[#04132F] p-8 shadow-[0_24px_60px_rgba(7,27,70,0.16)] lg:flex-row lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-[#09CBEF]">Work with us</p>
            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">Ready to turn an idea into a serious digital product?</h2>
          </div>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 font-semibold text-[#0759E6] transition hover:bg-[#09CBEF] hover:text-[#04132F]">
            Work With Us <ArrowRight size={18} aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
