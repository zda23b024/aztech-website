import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, CheckCircle2, Github, Linkedin, Mail, MessageCircle, Phone, PlayCircle } from 'lucide-react';
import type { BlogPost, JobOpening, Project, ResearchItem, Service, TeamMember } from '@/types/company';

const cardBase = 'brand-card brand-card-hover rounded-lg p-6';
const bodyText = 'text-sm leading-6 text-slate-600';
const chip = 'rounded-md border border-[#DCE7F5] bg-[#F7FAFF] px-2.5 py-1 text-xs font-semibold text-[#0759E6]';
const contactIcon = 'grid h-9 w-9 place-items-center rounded-full border border-[#DCE7F5] bg-[#F7FAFF] text-[#0759E6] transition hover:border-[#087CFF] hover:bg-[#087CFF] hover:text-white';

function phoneHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, '')}`;
}

function whatsappHref(phone: string) {
  return `https://wa.me/${phone.replace(/\D/g, '')}`;
}

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <article className={`${cardBase} group flex min-h-64 flex-col items-center justify-center text-center hover:-translate-y-1`}>
      <div className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-lg border border-[#09CBEF]/25 bg-[#E9F8FF] text-[#0759E6] shadow-[0_18px_38px_rgba(8,124,255,0.14)] transition group-hover:border-[#087CFF]/40 group-hover:bg-white group-hover:text-[#087CFF]">
        {service.imageUrl ? (
          <img
            src={service.imageUrl}
            alt=""
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          <Icon size={38} strokeWidth={2.2} aria-hidden />
        )}
      </div>
      <h3 className="mt-5 text-lg font-bold text-[#071B46]">{service.title}</h3>
      <p className={`mt-3 max-w-sm ${bodyText}`}>{service.description}</p>
    </article>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="brand-card brand-card-hover flex h-full flex-col overflow-hidden rounded-lg sm:flex-row">
      <div className="relative min-h-52 w-full shrink-0 bg-[#E9F8FF] sm:w-1/2">
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt=""
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : null}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,62,115,0.04),rgba(18,62,115,0.20))]" />
      </div>
      <div className="flex min-h-56 w-full flex-col p-5 sm:w-1/2">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-md bg-[#09CBEF]/10 px-2.5 py-1 text-xs font-bold text-[#0759E6]">
            {project.category}
          </span>
          <span className="rounded-md border border-[#DCE7F5] bg-white px-2.5 py-1 text-xs font-bold text-[#0759E6]">
            {project.status}
          </span>
        </div>
        <h3 className="mt-4 text-xl font-bold leading-tight text-[#071B46]">
          {project.name}
        </h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="rounded-md border border-[#DCE7F5] bg-white px-2.5 py-1 text-xs font-semibold text-slate-600">
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          {project.demoUrl ? (
            <a href={project.demoUrl} className="inline-flex items-center gap-1.5 rounded-md bg-[#087CFF] px-3 py-2 text-xs font-bold text-white transition hover:bg-[#123E73]">
              <PlayCircle size={15} aria-hidden /> Video demo
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-md border border-[#DCE7F5] bg-white px-3 py-2 text-xs font-bold text-slate-500">
              <PlayCircle size={15} aria-hidden /> Demo coming soon
            </span>
          )}
          {project.github ? (
            <a href={project.github} className="inline-flex items-center gap-1.5 rounded-md border border-[#DCE7F5] bg-white px-3 py-2 text-xs font-bold text-[#0759E6] transition hover:border-[#087CFF] hover:bg-[#F7FAFF]">
              <Github size={15} aria-hidden /> Code
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="brand-card brand-card-hover flex flex-col items-center rounded-lg p-5 text-center">
      {member.photo ? (
        <Image
          src={member.photo}
          alt={`${member.name} profile photo`}
          width={168}
          height={168}
          className="h-28 w-28 rounded-full border-4 border-white object-cover object-center shadow-[0_14px_30px_rgba(7,27,70,0.12)] ring-1 ring-[#09CBEF]/35"
        />
      ) : (
        <div className="grid h-28 w-28 place-items-center rounded-full border-4 border-white bg-[#E9F8FF] text-3xl font-bold text-[#0759E6] shadow-[0_14px_30px_rgba(7,27,70,0.12)] ring-1 ring-[#09CBEF]/35">
          {member.name.split(' ').map((part) => part[0]).join('').slice(0, 2)}
        </div>
      )}
      <h3 className="mt-5 text-lg font-bold leading-snug text-[#071B46]">{member.name}</h3>
      <p className="mt-2 text-[11px] font-bold uppercase tracking-widest text-slate-400">{member.role}</p>
      <p className="mt-2 text-sm font-semibold text-slate-600">
        {member.name === 'Abdallah Sadri Abdallah' ? 'Data Science | Artificial Intelligence' : member.skills.slice(0, 2).join(' | ')}
      </p>
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {member.phone ? (
          <>
            <a href={phoneHref(member.phone)} className={contactIcon} aria-label={`Call ${member.name}`} title="Call">
              <Phone size={17} aria-hidden />
            </a>
            <a href={whatsappHref(member.phone)} className={`${contactIcon} text-[#16A34A] hover:border-[#16A34A] hover:bg-[#16A34A]`} aria-label={`WhatsApp ${member.name}`} title="WhatsApp">
              <MessageCircle size={17} aria-hidden />
            </a>
          </>
        ) : null}
        {member.email ? (
          <a href={`mailto:${member.email}`} className={contactIcon} aria-label={`Email ${member.name}`} title="Email">
            <Mail size={17} aria-hidden />
          </a>
        ) : null}
        {member.linkedin ? (
          <a href={member.linkedin} className={contactIcon} aria-label={`${member.name} on LinkedIn`} title="LinkedIn">
            <Linkedin size={17} aria-hidden />
          </a>
        ) : null}
        {member.github ? (
          <a href={member.github} className={contactIcon} aria-label={`${member.name} on GitHub`} title="GitHub">
            <Github size={17} aria-hidden />
          </a>
        ) : null}
      </div>
      <Link href={`/team/${member.slug}`} className="mt-5 inline-flex items-center justify-center gap-2 rounded-md bg-[#087CFF] px-3.5 py-2 text-sm font-semibold text-white transition hover:bg-[#071B46] focus:outline-none focus:ring-2 focus:ring-[#087CFF]">
        View profile <ArrowUpRight size={16} aria-hidden />
      </Link>
    </article>
  );
}

export function ResearchCard({ item }: { item: ResearchItem }) {
  return (
    <article className={cardBase}>
      <p className="text-sm font-bold text-[#0759E6]">{item.status}</p>
      <h3 className="mt-3 text-lg font-bold text-[#071B46]">{item.title}</h3>
      <p className={`mt-3 ${bodyText}`}>{item.description}</p>
      <p className="mt-4 text-sm text-slate-500">{item.authors.join(', ')} | {item.date}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {item.technologies.map((tech) => (
          <span key={tech} className="rounded-md border border-[#DCE7F5] px-2.5 py-1 text-xs font-semibold text-slate-600">
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className={cardBase}>
      <p className="text-sm font-bold text-[#0759E6]">{post.category}</p>
      <h3 className="mt-3 text-lg font-bold text-[#071B46]">{post.title}</h3>
      <p className={`mt-3 ${bodyText}`}>{post.excerpt}</p>
      <p className="mt-4 text-sm text-slate-500">{post.author} | {post.date} | {post.readingTime}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span key={tag} className={chip}>
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

export function JobCard({ job }: { job: JobOpening }) {
  return (
    <article className={cardBase}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-[#071B46]">{job.title}</h3>
          <p className="mt-1 text-sm font-semibold text-[#0759E6]">{job.type} | {job.location}</p>
        </div>
        <span className={chip}>{job.status}</span>
      </div>
      <p className={`mt-4 ${bodyText}`}>{job.description}</p>
      <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-500">
        <CheckCircle2 size={16} aria-hidden /> Details will be added when hiring opens.
      </p>
    </article>
  );
}
