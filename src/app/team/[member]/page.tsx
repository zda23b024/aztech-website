import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Github, Linkedin, Mail, MessageCircle, Phone } from 'lucide-react';
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
  const cleanPhone = profile.phone?.replace(/[^\d+]/g, '');
  const whatsappPhone = profile.phone?.replace(/\D/g, '');

  return (
    <>
      <section className="relative overflow-hidden bg-[#F7FAFF] px-4 py-16 text-[#071B46] sm:px-6 lg:px-8">
        <div className="absolute inset-0 tech-grid opacity-35" />
        <div className="relative mx-auto max-w-7xl">
          <Link href="/team" className="inline-flex items-center gap-2 text-sm font-bold text-[#0759E6] transition hover:text-[#071B46]">
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
                className="aspect-square max-w-sm rounded-full border-4 border-white bg-white object-cover object-center shadow-[0_18px_44px_rgba(7,27,70,0.12)] ring-1 ring-[#09CBEF]/35"
              />
            ) : (
              <div className="grid aspect-square max-w-sm place-items-center rounded-full border-4 border-white bg-[#E9F8FF] text-5xl font-bold text-[#0759E6] shadow-[0_18px_44px_rgba(7,27,70,0.12)] ring-1 ring-[#09CBEF]/35">
                {profile.name.split(' ').map((part) => part[0]).join('').slice(0, 2)}
              </div>
            )}
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-[#0759E6]">{profile.role}</p>
              <h1 className="mt-4 text-3xl font-extrabold text-[#071B46] sm:text-4xl">{profile.name}</h1>
              <p className="mt-6 max-w-5xl text-lg leading-8 text-[#64748B]">{profile.biography}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {profile.skills.map((skill) => (
                  <span key={skill} className="rounded-md border border-[#DCE7F5] bg-white px-3 py-1.5 text-sm font-semibold text-[#071B46]/75">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {cleanPhone ? <a href={`tel:${cleanPhone}`} className="profile-link"><Phone size={17} aria-hidden /> Call</a> : null}
                {whatsappPhone ? <a href={`https://wa.me/${whatsappPhone}`} className="profile-link"><MessageCircle size={17} aria-hidden /> WhatsApp</a> : null}
                {profile.email ? <a href={`mailto:${profile.email}`} className="profile-link"><Mail size={17} aria-hidden /> Email</a> : null}
                {profile.github ? <a href={profile.github} className="profile-link"><Github size={17} aria-hidden /> GitHub</a> : null}
                {profile.linkedin ? <a href={profile.linkedin} className="profile-link"><Linkedin size={17} aria-hidden /> LinkedIn</a> : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 text-[#071B46] sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {sections.map((section) => (
            <article key={section.title} className="brand-card rounded-lg p-6">
              <h2 className="text-xl font-bold text-[#071B46]">{section.title}</h2>
              <ul className="mt-4 grid gap-3 text-sm leading-6 text-[#64748B]">
                {section.items?.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
