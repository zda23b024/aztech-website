import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Building2, Code2, Eye, Flag, Gem, Mail, MapPin, Phone, ServerCog, TerminalSquare } from 'lucide-react';
import ContactForm from '@/components/aztech/ContactForm';
import SectionHeader from '@/components/aztech/SectionHeader';
import { BlogCard, JobCard, ProjectCard, ResearchCard, ServiceCard, TeamCard } from '@/components/aztech/Cards';
import { company, contacts, insights, jobs, projects, research, services, team } from '@/data/company';

const pages = ['about', 'solutions', 'projects', 'team', 'research', 'insights', 'careers', 'contact'] as const;
type PageSlug = (typeof pages)[number];

const pageTitles: Record<PageSlug, string> = {
  about: 'About',
  solutions: 'Solutions',
  projects: 'Projects',
  team: 'Team',
  research: 'Research & Innovation',
  insights: 'Insights',
  careers: 'Careers',
  contact: 'Contact',
};

export function generateStaticParams() {
  return pages.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  if (!pages.includes(slug as PageSlug)) return {};

  return {
    title: pageTitles[slug as PageSlug],
    description: company.description,
  };
}

function PageShell({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="relative overflow-hidden bg-[#dfe8ee] px-4 py-10 text-slate-950 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-2xl border border-slate-700 bg-[#101b2a] p-6 shadow-xl sm:p-8 lg:p-10">
            <div className="absolute inset-0 tech-grid opacity-20" />
            <div className="absolute right-0 top-0 h-56 w-56 bg-cyan-400/15 blur-3xl" />
            <div className="relative grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="inline-flex rounded-md border border-cyan-400/25 bg-cyan-400/10 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-cyan-300">
                  {eyebrow}
                </p>
                <h1 className="mt-5 max-w-3xl text-3xl font-bold leading-tight tracking-normal text-white sm:text-4xl">
                  {title}
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
                  {description}
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {[
                  { label: 'Web apps', icon: Code2 },
                  { label: 'APIs & systems', icon: ServerCog },
                  { label: 'Automation', icon: TerminalSquare },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-center gap-3 rounded-lg border border-slate-600 bg-white/8 p-4">
                      <span className="grid h-10 w-10 place-items-center rounded-md bg-cyan-400/10 text-cyan-300">
                        <Icon size={20} aria-hidden />
                      </span>
                      <span className="text-sm font-bold text-slate-100">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#eef3f6] px-4 py-20 text-slate-950 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">{children}</div>
      </div>
    </>
  );
}

function AboutPage() {
  const blocks = [
    {
      icon: Building2,
      title: 'Who We Are',
      text: 'Aztech is a technology organization founded and operated by brothers who build websites, mobile apps, business systems, automation and AI-powered solutions.',
    },
    {
      icon: Flag,
      title: 'Our Mission',
      text: 'To build practical digital solutions that help people, teams and organizations move from ideas to working technology.',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      text: 'To become a trusted technology organization based in Tanzania and serving businesses locally and across Africa with thoughtful software, AI, data and automation work.',
    },
    {
      icon: Gem,
      title: 'Our Values',
      text: 'We value clarity, technical craft, responsibility, learning, collaboration and honest delivery.',
    },
  ];

  return (
    <PageShell eyebrow="About Aztech" title="A founder-led technology organization building practical systems for business." description="Aztech helps businesses and offices turn ideas, manual work and repeated tasks into websites, apps, management systems, reports, notifications and AI-powered workflows.">
      <div className="grid gap-6 md:grid-cols-2">
        {blocks.map((block) => {
          const Icon = block.icon;
          return (
            <article key={block.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
              <Icon className="text-cyan-600 dark:text-cyan-300" size={28} aria-hidden />
              <h2 className="mt-5 text-xl font-bold">{block.title}</h2>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{block.text}</p>
            </article>
          );
        })}
      </div>
    </PageShell>
  );
}

function SolutionsPage() {
  return (
    <PageShell eyebrow="Solutions" title="Digital solutions for businesses, offices and organizations." description="From websites and mobile apps to booking, inventory, CRM, reports and AI-powered automation, Aztech builds systems based on what your work actually needs.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => <ServiceCard key={service.title} service={service} />)}
      </div>
    </PageShell>
  );
}

function ProjectsPage() {
  return (
    <PageShell eyebrow="Projects" title="Systems Aztech builds for clients." description="Aztech delivers practical websites, platforms, management systems, automation and AI-powered tools for real business operations.">
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project) => <ProjectCard key={project.name} project={project} />)}
      </div>
    </PageShell>
  );
}

function TeamPage() {
  const leadership = team.filter((member) => member.group === 'Leadership');
  const members = team.filter((member) => member.group === 'Team Members');

  return (
    <PageShell eyebrow="Team" title="The brothers building Aztech." description="Aztech is led by Ali Yahya Ali and Zakariya Yahya Ally, combining software development, computer mathematics, data science and AI.">
      <SectionHeader eyebrow="Leadership" title="Founder and co-founder profiles." />
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {leadership.map((member) => <TeamCard key={member.slug} member={member} />)}
      </div>
      <div className="mt-16">
        <SectionHeader eyebrow="Team Members" title="Engineers, researchers and builders." />
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {members.map((member) => <TeamCard key={member.slug} member={member} />)}
        </div>
      </div>
    </PageShell>
  );
}

function ResearchPage() {
  return (
    <PageShell eyebrow="Research & Innovation" title="Experiments in AI, automation and business systems." description="Aztech explores practical ideas that can become useful tools for businesses, offices and organizations.">
      <div className="grid gap-6 lg:grid-cols-2">
        {research.map((item) => <ResearchCard key={item.title} item={item} />)}
      </div>
    </PageShell>
  );
}

function InsightsPage() {
  return (
    <PageShell eyebrow="Insights" title="Thinking about AI, data, software engineering and business technology." description="Technical writing, product lessons and practical ideas from Aztech's work in software, AI, data and business systems.">
      <div className="grid gap-6 lg:grid-cols-2">
        {insights.map((post) => <BlogCard key={post.title} post={post} />)}
      </div>
    </PageShell>
  );
}

function CareersPage() {
  return (
    <PageShell eyebrow="Careers" title="Build practical technology with Aztech." description="Aztech welcomes internship interest, collaborations and partnerships from people who want to build useful software, AI, data and automation systems.">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-6">
          <h2 className="text-xl font-bold">Why Aztech</h2>
          <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
            Work on practical technology with a young, ambitious and technical team focused on useful websites, systems, AI, data and automation.
          </p>
          <div className="mt-6 grid gap-3 text-sm font-semibold text-slate-600 dark:text-slate-300">
            <span>Open Positions: shared when available</span>
            <span>Internships: interest open</span>
            <span>Collaborations: research and product partnerships</span>
          </div>
        </div>
        <div className="grid gap-5">
          {jobs.map((job) => <JobCard key={job.title} job={job} />)}
        </div>
      </div>
    </PageShell>
  );
}

function ContactPage() {
  return (
    <PageShell eyebrow="Contact" title="Have a business, office or system idea? Contact Aztech." description="Tell us what you need. Aztech can help with websites, mobile applications, management systems, booking, inventory, CRM, automated reports and AI-powered solutions.">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-lg border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.04]">
          <h2 className="text-xl font-bold">Contact details</h2>
          <div className="mt-6 grid gap-4 text-sm text-slate-600 dark:text-slate-300">
            {contacts.map((contact) => (
              <div key={contact.email} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="font-bold text-slate-950">{contact.name}</p>
                <p className="mt-1 text-xs font-semibold text-cyan-700">{contact.role}</p>
                <a className="mt-3 flex items-center gap-3 hover:text-cyan-700" href={`mailto:${contact.email}`}>
                  <Mail size={18} aria-hidden /> {contact.email}
                </a>
                <a className="mt-2 flex items-center gap-3 hover:text-cyan-700" href={`tel:${contact.phone.replaceAll(' ', '')}`}>
                  <Phone size={18} aria-hidden /> {contact.phone}
                </a>
              </div>
            ))}
            <span className="flex items-center gap-3">
              <MapPin size={18} aria-hidden /> {company.location}
            </span>
          </div>
          <div className="mt-8">
            <p className="text-sm font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-300">Social</p>
            <div className="mt-3 flex flex-wrap gap-3">
              {company.socials.map((social) => (
                <a key={social.label} href={social.href} className="rounded-md border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-600 hover:text-slate-950 dark:border-white/10 dark:text-slate-300 dark:hover:text-white">
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </PageShell>
  );
}

export default async function CorporatePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  switch (slug) {
    case 'about':
      return <AboutPage />;
    case 'solutions':
      return <SolutionsPage />;
    case 'projects':
      return <ProjectsPage />;
    case 'team':
      return <TeamPage />;
    case 'research':
      return <ResearchPage />;
    case 'insights':
      return <InsightsPage />;
    case 'careers':
      return <CareersPage />;
    case 'contact':
      return <ContactPage />;
    default:
      notFound();
  }
}
