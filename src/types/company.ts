import type { LucideIcon } from 'lucide-react';

export interface SocialLink {
  label: string;
  href: string;
}

export interface Company {
  name: string;
  tagline: string;
  description: string;
  email: string;
  phone: string;
  location: string;
  socials: SocialLink[];
}

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Project {
  name: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  category: string;
  status: string;
  github?: string;
}

export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  group: 'Leadership' | 'Team Members';
  biography: string;
  photo?: string;
  skills: string[];
  github?: string;
  linkedin?: string;
  email?: string;
  education?: string[];
  experience?: string[];
  expertise?: string[];
  projects?: string[];
  research?: string[];
}

export interface ResearchItem {
  title: string;
  description: string;
  authors: string[];
  date: string;
  technologies: string[];
  link?: string;
  status: string;
}

export interface BlogPost {
  title: string;
  author: string;
  date: string;
  category: string;
  readingTime: string;
  tags: string[];
  excerpt: string;
}

export interface JobOpening {
  title: string;
  type: string;
  location: string;
  description: string;
  status: string;
}
