import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Award, BadgeCheck, Building2, Code2, Eye, Flag, Gem, Mail, MapPin, Phone, Rocket, ServerCog, ShieldCheck, TerminalSquare } from 'lucide-react';
import ContactForm from '@/components/aztech/ContactForm';
import SectionHeader from '@/components/aztech/SectionHeader';
import { BlogCard, JobCard, ProjectCard, ServiceCard, TeamCard } from '@/components/aztech/Cards';
import { company, contacts, insights, jobs, projects, services, team } from '@/data/company';

const pages = ['about', 'solutions', 'projects', 'team', 'achievements', 'insights', 'careers', 'contact'] as const;
type PageSlug = (typeof pages)[number];

const pageTitles: Record<PageSlug, string> = {
  about: 'About',
  solutions: 'Solutions',
  projects: 'Projects',
  team: 'Team',
  achievements: 'Achievement & Certification',
  insights: 'Insights',
  careers: 'Careers',
  contact: 'Contact',
};

const achievements = [
  {
    title: 'Founder-led technology company',
    description: 'Aztech has been established as a real technology organization focused on websites, mobile applications, management systems, automation and AI-powered solutions.',
    icon: Award,
  },
  {
    title: 'Client-ready digital services',
    description: 'The company has packaged practical development services for businesses, offices and organizations that need reliable digital operations.',
    icon: Rocket,
  },
  {
    title: 'Technical leadership foundation',
    description: 'Aztech combines computer mathematics, data science, AI and software engineering through its founder and co-founder leadership.',
    icon: ShieldCheck,
  },
];

const certifications = [
  {
    title: 'Academic technology foundation',
    description: 'Ali Yahya Ali studies Computer Mathematics at SUMAIT University and has diploma education experience from SUZA.',
    icon: BadgeCheck,
  },
  {
    title: 'Data Science and AI training',
    description: 'Zakariya Yahya Ally studies Data Science and Artificial Intelligence at IIT Madras Zanzibar Campus.',
    icon: BadgeCheck,
  },
  {
    title: 'Professional readiness',
    description: 'Aztech documents its skills, services and leadership credentials clearly so clients can understand the team behind the work.',
    icon: ShieldCheck,
  },
];

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
      <section className="relative overflow-hidden bg-[#F7FAFF] px-4 py-10 text-[#071B46] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="brand-gradient relative overflow-hidden rounded-2xl border border-[#09CBEF]/25 p-6 shadow-[0_24px_60px_rgba(7,89,230,0.14)] sm:p-8 lg:p-10">
            <div className="absolute inset-0 tech-grid opacity-20" />
            <div className="absolute right-0 top-0 h-56 w-56 bg-[#09CBEF]/8 blur-3xl" />
            <div className="relative grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="inline-flex rounded-md border border-[#09CBEF]/30 bg-[#09CBEF]/10 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-[#09CBEF]">
                  {eyebrow}
                </p>
                <h1 className="mt-5 max-w-5xl text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                  {title}
                </h1>
                <p className="mt-5 max-w-5xl text-base leading-7 text-slate-300">
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
                    <div key={item.label} className="flex items-center gap-3 rounded-lg border border-[#09CBEF]/18 bg-[#071B46]/18 p-4">
                      <span className="grid h-10 w-10 place-items-center rounded-md bg-[#09CBEF]/8 text-[#45DDF4]">
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
      <div className="bg-[#F7FAFF] px-4 py-20 text-[#071B46] sm:px-6 lg:px-8">
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
      text: 'To design and build reliable websites, applications, management systems and AI-powered tools that help businesses work faster, serve customers better and grow with confidence.',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      text: 'To become a trusted technology partner for businesses in Tanzania and across Africa, known for practical innovation, strong engineering and digital systems that create real impact.',
    },
    {
      icon: Rocket,
      title: 'Our Motto',
      text: 'Technology that moves ideas forward.',
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
            <article key={block.title} className="brand-card rounded-lg p-6">
              <Icon className="text-[#0759E6]" size={28} aria-hidden />
              <h2 className="mt-5 text-xl font-bold text-[#071B46]">{block.title}</h2>
              <p className="mt-3 leading-7 text-[#64748B]">{block.text}</p>
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
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
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
        <SectionHeader eyebrow="Team Members" title="Engineers, technical thinkers and builders." />
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {members.map((member) => <TeamCard key={member.slug} member={member} />)}
        </div>
      </div>
    </PageShell>
  );
}

function AchievementsPage() {
  return (
    <PageShell eyebrow="Achievement & Certification" title="Milestones and credentials behind Aztech." description="Aztech is growing as a practical technology company with clear service focus, strong technical leadership and an academic foundation in computer mathematics, data science and AI.">
      <SectionHeader eyebrow="Achievement" title="Milestones that show Aztech is building with purpose." />
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {achievements.map((item) => {
          const Icon = item.icon;
          return (
            <article key={item.title} className="brand-card brand-card-hover rounded-lg p-6">
              <span className="grid h-11 w-11 place-items-center rounded-md bg-[#087CFF]/10 text-[#0759E6] ring-1 ring-[#09CBEF]/20">
                <Icon size={22} aria-hidden />
              </span>
              <h2 className="mt-5 text-xl font-bold text-[#071B46]">{item.title}</h2>
              <p className="mt-3 leading-7 text-[#64748B]">{item.description}</p>
            </article>
          );
        })}
      </div>
      <div className="mt-16">
        <SectionHeader eyebrow="Certification" title="Education and credentials behind the Aztech team." />
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {certifications.map((item) => {
          const Icon = item.icon;
          return (
            <article key={item.title} className="brand-card brand-card-hover rounded-lg p-6">
              <span className="grid h-11 w-11 place-items-center rounded-md bg-[#087CFF]/10 text-[#0759E6] ring-1 ring-[#09CBEF]/20">
                <Icon size={22} aria-hidden />
              </span>
              <h2 className="mt-5 text-xl font-bold text-[#071B46]">{item.title}</h2>
              <p className="mt-3 leading-7 text-[#64748B]">{item.description}</p>
            </article>
          );
        })}
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
        <div className="brand-card rounded-lg p-6">
          <h2 className="text-xl font-bold text-[#071B46]">Why Aztech</h2>
          <p className="mt-4 leading-7 text-[#64748B]">
            Work on practical technology with a young, ambitious and technical team focused on useful websites, systems, AI, data and automation.
          </p>
          <div className="mt-6 grid gap-3 text-sm font-semibold text-[#071B46]/75">
            <span>Open Positions: shared when available</span>
            <span>Internships: interest open</span>
            <span>Collaborations: product and technology partnerships</span>
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
        <div className="brand-card rounded-lg p-6">
          <h2 className="text-xl font-bold text-[#071B46]">Contact details</h2>
          <div className="mt-6 grid gap-4 text-sm text-[#64748B]">
            {contacts.map((contact) => (
              <div key={contact.email} className="rounded-lg border border-[#DCE7F5] bg-[#F7FAFF] p-4">
                <p className="font-bold text-[#071B46]">{contact.name}</p>
                <p className="mt-1 text-xs font-semibold text-[#0759E6]">{contact.role}</p>
                <a className="mt-3 flex items-center gap-3 transition hover:text-[#087CFF]" href={`mailto:${contact.email}`}>
                  <Mail size={18} aria-hidden /> {contact.email}
                </a>
                <a className="mt-2 flex items-center gap-3 transition hover:text-[#087CFF]" href={`tel:${contact.phone.replaceAll(' ', '')}`}>
                  <Phone size={18} aria-hidden /> {contact.phone}
                </a>
              </div>
            ))}
            <a
              href={company.locationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 transition hover:text-[#087CFF]"
            >
              <MapPin size={18} aria-hidden /> {company.location}
            </a>
          </div>
          <div className="mt-8">
            <p className="text-sm font-bold uppercase tracking-widest text-[#0759E6]">Social</p>
            <div className="mt-3 flex flex-wrap gap-3">
              {company.socials.map((social) => (
                <a key={social.label} href={social.href} className="rounded-md border border-[#DCE7F5] px-3 py-2 text-sm font-semibold text-[#0759E6] transition hover:border-[#087CFF] hover:bg-[#F7FAFF] hover:text-[#071B46]">
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
    case 'achievements':
      return <AchievementsPage />;
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
