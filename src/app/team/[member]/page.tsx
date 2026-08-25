import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Github, Linkedin, Mail } from 'lucide-react';
import { team } from '@/data/company';

export function generateStaticParams() {
  return team.map((member) => ({ member: member.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ member: string }> }): Promise<Metadata> {
  const { member } = await params;
  const profile = team.find((item) => item.slug === member);

  if (!profile) return {};

  return {
    title: profile.name,
    description: `${profile.name} - ${profile.role} at Aztech.`,
  };
}

export default async function TeamProfile({ params }: { params: Promise<{ member: string }> }) {
  const { member } = await params;
  const profile = team.find((item) => item.slug === member);

  if (!profile) {
    notFound();
  }

  const sections = [
    { title: 'Education', items: profile.education },
    { title: 'Experience', items: profile.experience },
    { title: 'Expertise', items: profile.expertise },
    { title: 'Projects', items: profile.projects },
    { title: 'Research', items: profile.research },
  ].filter((section) => section.items?.length);

  return (
    <>
      <section className="relative overflow-hidden bg-[#eef9fb] px-4 py-16 text-slate-950 sm:px-6 lg:px-8">
        <div className="absolute inset-0 tech-grid opacity-35" />
        <div className="relative mx-auto max-w-7xl">
          <Link href="/team" className="inline-flex items-center gap-2 text-sm font-bold text-cyan-700 hover:text-cyan-900">
            <ArrowLeft size={16} aria-hidden /> Back to team
          </Link>
          <div className="mt-10 grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            {profile.photo ? (
              <Image
                src={profile.photo}
                alt={`${profile.name} profile photo`}
                width={520}
                height={520}
                priority
                className="aspect-square max-w-sm rounded-2xl border border-cyan-100 bg-white object-cover object-center shadow-sm"
              />
            ) : (
              <div className="grid aspect-square max-w-sm place-items-center rounded-2xl border border-cyan-100 bg-white text-5xl font-bold text-cyan-700 shadow-sm">
                {profile.name.split(' ').map((part) => part[0]).join('').slice(0, 2)}
              </div>
            )}
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-cyan-700">{profile.role}</p>
              <h1 className="mt-4 text-3xl font-bold tracking-normal sm:text-4xl">{profile.name}</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{profile.biography}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {profile.skills.map((skill) => (
                  <span key={skill} className="rounded-md border border-cyan-100 bg-white px-3 py-1.5 text-sm font-semibold text-slate-700">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {profile.email ? <a href={`mailto:${profile.email}`} className="profile-link"><Mail size={17} aria-hidden /> Email</a> : null}
                {profile.github ? <a href={profile.github} className="profile-link"><Github size={17} aria-hidden /> GitHub</a> : null}
                {profile.linkedin ? <a href={profile.linkedin} className="profile-link"><Linkedin size={17} aria-hidden /> LinkedIn</a> : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 text-slate-950 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {sections.map((section) => (
            <article key={section.title} className="rounded-lg border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.04]">
              <h2 className="text-xl font-bold">{section.title}</h2>
              <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {section.items?.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
