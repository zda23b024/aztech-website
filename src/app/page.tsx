import Link from 'next/link';
import { ArrowRight, Award, BadgeCheck, Cpu, Sparkles } from 'lucide-react';
import SectionHeader from '@/components/aztech/SectionHeader';
import { BlogCard, ProjectCard, ServiceCard, TeamCard } from '@/components/aztech/Cards';
import { capabilityStats, insights, projects, services, team, technologyStack } from '@/data/company';

export default function Home() {
  const leadership = team.filter((member) => member.group === 'Leadership').slice(0, 2);

  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#F7FAFF]">
        <div className="absolute inset-0 tech-grid opacity-45" />
        <div className="absolute inset-x-0 top-0 h-96 bg-[radial-gradient(circle_at_25%_18%,rgba(8,124,255,0.14),transparent_35%),radial-gradient(circle_at_76%_12%,rgba(9,203,239,0.12),transparent_30%)]" />
        <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.18fr_0.82fr] lg:px-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-md border border-[#DCE7F5] bg-white/88 px-3 py-1.5 text-sm font-semibold text-[#0759E6] shadow-sm">
              <Sparkles size={16} aria-hidden /> Software development and AI engineering
            </div>
            <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-[1.08] text-[#071B46] sm:text-5xl">
              We Design, Build, and Ship Modern Digital Products.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#475569]">
              Aztech builds business websites, mobile applications, management systems, booking platforms, inventory tools, CRM systems, automated reports and AI-powered solutions.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/solutions" className="brand-gradient inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 font-semibold text-white shadow-[0_16px_34px_rgba(8,124,255,0.18)] transition hover:bg-[#071B46] hover:bg-none focus:outline-none focus:ring-2 focus:ring-[#087CFF]">
                Explore Our Solutions <ArrowRight size={18} aria-hidden />
              </Link>
              <Link href="/projects" className="inline-flex items-center justify-center rounded-md border border-[#087CFF] bg-white px-5 py-3 font-semibold text-[#0759E6] transition hover:border-[#071B46] hover:bg-[#F7FAFF] hover:text-[#071B46] focus:outline-none focus:ring-2 focus:ring-[#087CFF]">
                View Our Projects
              </Link>
            </div>
            <dl className="mt-10 grid gap-3 sm:grid-cols-3">
              {capabilityStats.map((item) => (
                <div key={item.label} className="brand-card rounded-lg p-4">
                  <dt className="text-xs font-bold uppercase tracking-widest text-[#0759E6]">{item.label}</dt>
                  <dd className="mt-2 text-sm font-semibold text-[#071B46]">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto min-h-[340px] w-full max-w-[520px]">
            <div className="absolute inset-0 rounded-2xl border border-[#0759E6]/25 bg-[#04132F] shadow-[0_28px_70px_rgba(7,27,70,0.18)]" />
            <div className="absolute inset-5 rounded-xl border border-[#087CFF]/22 bg-[#071B46]" />
            <div className="absolute inset-5 rounded-xl bg-[radial-gradient(circle_at_50%_50%,rgba(9,203,239,0.16),transparent_34%),radial-gradient(circle_at_18%_20%,rgba(8,124,255,0.16),transparent_26%)]" />
            <div className="absolute left-1/2 top-1/2 grid h-28 w-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[#09CBEF]/45 bg-[#09CBEF]/10 text-[#09CBEF] shadow-[0_0_54px_rgba(9,203,239,0.22)]">
              <Cpu size={44} aria-hidden />
            </div>
            {technologyStack.map((item, index) => {
              const Icon = item.icon;
              const positions = ['left-8 top-10', 'right-8 top-16', 'bottom-12 left-10', 'bottom-8 right-10'];
              return (
                <div key={item.label} className={`absolute ${positions[index]} rounded-lg border border-[#087CFF]/28 bg-white/9 p-4 shadow-xl backdrop-blur`}>
                  <Icon className="text-[#09CBEF]" size={22} aria-hidden />
                  <p className="mt-2 text-sm font-bold text-white">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 text-[#071B46] sm:px-6 lg:px-8">
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

      <section className="bg-[#EEF5FF] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Projects" title="Systems Aztech builds for real businesses." description="Aztech delivers practical systems for businesses, offices and organizations that need reliable digital operations." />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => <ProjectCard key={project.name} project={project} />)}
          </div>
        </div>
      </section>

      <section className="bg-[#F7FAFF] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader eyebrow="Team" title="Founder-led, collaborative and built around engineering craft." description="Aztech is led by Ali Yahya Ali and Zakariya Yahya Ally, brothers building practical technology for businesses and organizations." />
          <div className="grid gap-5">
            {leadership.map((member) => <TeamCard key={member.slug} member={member} />)}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
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
