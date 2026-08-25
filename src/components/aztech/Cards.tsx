import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, CheckCircle2, Mail } from 'lucide-react';
import type { BlogPost, JobOpening, Project, ResearchItem, Service, TeamMember } from '@/types/company';

const cardBase = 'brand-card brand-card-hover rounded-lg p-6';
const bodyText = 'text-sm leading-6 text-slate-600';
const chip = 'rounded-md border border-[#DCE7F5] bg-[#F7FAFF] px-2.5 py-1 text-xs font-semibold text-[#0759E6]';

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <article className={`${cardBase} group hover:-translate-y-1`}>
      <div className="flex h-11 w-11 items-center justify-center rounded-md bg-[#087CFF]/10 text-[#0759E6] ring-1 ring-[#09CBEF]/20">
        <Icon size={22} aria-hidden />
      </div>
      <h3 className="mt-5 text-lg font-bold text-[#071B46]">{service.title}</h3>
      <p className={`mt-3 ${bodyText}`}>{service.description}</p>
    </article>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={cardBase}>
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-md bg-[#09CBEF]/10 px-2.5 py-1 text-xs font-bold text-[#0759E6]">
          {project.category}
        </span>
        <span className={chip}>{project.status}</span>
      </div>
      <h3 className="mt-5 text-xl font-bold text-[#071B46]">{project.name}</h3>
      <p className={`mt-3 ${bodyText}`}>{project.description}</p>
      <div className="mt-5 grid gap-4 text-sm sm:grid-cols-2">
        <div>
          <p className="font-bold text-[#071B46]">Problem</p>
          <p className="mt-1 leading-6 text-slate-600">{project.problem}</p>
        </div>
        <div>
          <p className="font-bold text-[#071B46]">Solution</p>
          <p className="mt-1 leading-6 text-slate-600">{project.solution}</p>
        </div>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span key={tech} className="rounded-md border border-[#DCE7F5] px-2.5 py-1 text-xs font-semibold text-slate-600">
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className={cardBase}>
      <div className="flex items-start gap-4">
        {member.photo ? (
          <Image
            src={member.photo}
            alt={`${member.name} profile photo`}
            width={72}
            height={72}
            className="h-16 w-16 shrink-0 rounded-lg object-cover object-center ring-1 ring-[#09CBEF]/35"
          />
        ) : (
          <div className="grid h-14 w-14 shrink-0 place-items-center rounded-lg bg-[#087CFF]/10 text-lg font-bold text-[#0759E6]">
            {member.name.split(' ').map((part) => part[0]).join('').slice(0, 2)}
          </div>
        )}
        <div>
          <h3 className="text-lg font-bold text-[#071B46]">{member.name}</h3>
          <p className="text-sm font-semibold text-[#0759E6]">{member.role}</p>
        </div>
      </div>
      <p className={`mt-4 ${bodyText}`}>{member.biography}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {member.skills.map((skill) => (
          <span key={skill} className={chip}>
            {skill}
          </span>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link href={`/team/${member.slug}`} className="inline-flex items-center gap-1 text-sm font-semibold text-[#087CFF] hover:text-[#071B46]">
          View profile <ArrowUpRight size={16} aria-hidden />
        </Link>
        {member.email ? (
          <a href={`mailto:${member.email}`} className="inline-flex items-center gap-1 text-sm font-semibold text-slate-600 hover:text-[#0759E6]">
            <Mail size={15} aria-hidden /> Email
          </a>
        ) : null}
      </div>
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
