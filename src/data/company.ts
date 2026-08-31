import {
  Boxes,
  BrainCircuit,
  CalendarCheck,
  ChartNoAxesColumnIncreasing,
  ClipboardList,
  Globe2,
  Smartphone,
  UsersRound,
} from 'lucide-react';
import type {
  BlogPost,
  Company,
  JobOpening,
  Project,
  ResearchItem,
  Service,
  TeamMember,
} from '@/types/company';

export const company: Company = {
  name: 'Aztech',
  tagline: 'Technology | Innovation | Impact',
  description:
    'Aztech builds websites, mobile applications, business management systems, automation and AI-powered solutions for businesses, offices and organizations.',
  email: 'aliyyahya99@gmail.com',
  phone: '+255 772 503 379',
  location: 'Chukwani, Zanzibar',
  socials: [
    { label: 'GitHub', href: 'https://github.com/zda23b024' },
  ],
};

export const contacts = [
  {
    name: 'Ali Yahya Ali',
    role: 'Founder / CEO',
    phone: '+255 772 503 379',
    email: 'aliyyahya99@gmail.com',
  },
  {
    name: 'Zakariya Yahya Ally',
    role: 'Co-Founder / CTO',
    phone: '+255 773 083 703',
    email: 'zda23b024@iitmz.ac.in',
    github: 'https://www.github.com/zda23b024',
    linkedin: 'https://www.linkedin.com/in/zakariya-yahya-ally-4367662a3',
  },
];

export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Projects', href: '/projects' },
  { label: 'Team', href: '/team' },
  { label: 'Achievement & Certification', href: '/achievements' },
];

export const services: Service[] = [
  {
    title: 'Business Websites',
    description: 'Professional websites for businesses, offices, organizations and personal brands that need a strong online presence.',
    icon: Globe2,
  },
  {
    title: 'Mobile Applications',
    description: 'Custom mobile app interfaces and product experiences designed around your users and business workflow.',
    icon: Smartphone,
  },
  {
    title: 'Management Systems',
    description: 'Business management systems for tracking operations, staff, customers, sales, services and daily activities.',
    icon: ClipboardList,
  },
  {
    title: 'Online Booking & Registration',
    description: 'Booking, appointment, registration and request systems that help customers interact with your business online.',
    icon: CalendarCheck,
  },
  {
    title: 'Inventory & Sales Systems',
    description: 'Systems for stock tracking, sales records, product movement, reporting and business visibility.',
    icon: Boxes,
  },
  {
    title: 'Customer Management (CRM)',
    description: 'Simple CRM tools for managing customers, leads, follow-ups, communication and service history.',
    icon: UsersRound,
  },
  {
    title: 'Automated Reports & Notifications',
    description: 'Automated reports, reminders, alerts and notifications that reduce manual work and save time.',
    icon: ChartNoAxesColumnIncreasing,
  },
  {
    title: 'AI-powered Solutions',
    description: 'AI-assisted tools, data workflows and smart features that help businesses work faster and make better decisions.',
    icon: BrainCircuit,
  },
];

export const projects: Project[] = [
  {
    name: 'Business Management System',
    description: 'A customizable system for offices and companies that want to manage daily operations digitally.',
    problem: 'Many businesses still track work manually, which wastes time and makes reporting difficult.',
    solution: 'A web-based system for records, users, sales, customers, reports and notifications.',
    technologies: ['Web App', 'Database', 'Reports', 'Notifications'],
    category: 'Business System',
    status: 'Client-ready service',
  },
  {
    name: 'Online Booking & Registration Platform',
    description: 'A booking and registration system for appointments, services, events or customer requests.',
    problem: 'Manual booking through calls and messages can be slow, confusing and hard to organize.',
    solution: 'A digital booking flow with forms, status tracking, confirmations and admin management.',
    technologies: ['Forms', 'Admin Dashboard', 'Automation'],
    category: 'Web Platform',
    status: 'Client-ready service',
  },
  {
    name: 'AI-powered Business Assistant',
    description: 'A practical AI solution for automating support, summaries, reports and customer communication.',
    problem: 'Businesses spend time repeating the same explanations, reports and follow-ups.',
    solution: 'AI-assisted workflows that help teams respond faster, summarize data and generate useful updates.',
    technologies: ['AI', 'Automation', 'Data'],
    category: 'AI Solution',
    status: 'Client-ready service',
  },
];

export const team: TeamMember[] = [
  {
    slug: 'ali-yahya-ali',
    name: 'Ali Yahya Ali',
    role: 'Founder / CEO',
    group: 'Leadership',
    biography:
      'Ali Yahya Ali is the Founder of Aztech. He studies Computer Mathematics at SUMAIT University and focuses on building practical technology systems for businesses and organizations.',
    photo: '/team/ali-yahya-ali.png',
    skills: ['Leadership', 'Computer Mathematics', 'Software Development', 'Business Systems'],
    email: 'aliyyahya99@gmail.com',
    education: ['Computer Mathematics, SUMAIT University', 'Diploma education at SUZA'],
    expertise: ['Business websites', 'Management systems', 'Digital product planning', 'Technology operations'],
    projects: ['Aztech business websites and systems direction'],
    research: ['Practical software systems for business operations'],
  },
  {
    slug: 'zakariya-yahya-ally',
    name: 'Zakariya Yahya Ally',
    role: 'Co-Founder / CTO',
    group: 'Leadership',
    biography:
      'Zakariya Yahya Ally is the Co-Founder and technology lead at Aztech. He is a Data Science and Artificial Intelligence student at IIT Madras Zanzibar Campus and focuses on AI-powered systems, data workflows and software engineering.',
    photo: '/team/zakariya-yahya-ally.png',
    skills: ['Data Science', 'Artificial Intelligence', 'Software Engineering', 'Analytics', 'Business Systems'],
    github: 'https://www.github.com/zda23b024',
    linkedin: 'https://www.linkedin.com/in/zakariya-yahya-ally-4367662a3',
    email: 'zda23b024@iitmz.ac.in',
    education: ['Data Science and Artificial Intelligence, IIT Madras Zanzibar Campus, 2023 - 2027'],
    experience: ['Soft-Tech Consultants Ltd, Dar es Salaam, Tanzania'],
    expertise: ['AI-powered solutions', 'Data science', 'Analytics dashboards', 'Automation systems', 'Software systems for business operations'],
    projects: ['Aztech AI and data systems direction'],
    research: ['Applied AI and data systems for practical business problems'],
  },
];

export const research: ResearchItem[] = [
  {
    title: 'Applied AI for Practical Business Problems',
    description:
      'Exploration area for building AI systems that solve grounded problems in business, education, logistics and public services.',
    authors: ['Aztech Team'],
    date: 'Active focus',
    technologies: ['AI', 'Data Science', 'Automation'],
    status: 'Research direction',
  },
  {
    title: 'Automation Patterns for Small and Growing Organizations',
    description:
      'A technical investigation into workflows that reduce repetitive work without requiring heavy enterprise systems.',
    authors: ['Aztech Team'],
    date: 'Active focus',
    technologies: ['Automation', 'Software Engineering'],
    status: 'Experiment direction',
  },
];

export const insights: BlogPost[] = [
  {
    title: 'Why Practical AI Matters for Businesses',
    author: 'Aztech Team',
    date: 'Aztech insight',
    category: 'AI',
    readingTime: '4 min read',
    tags: ['AI', 'Business', 'Automation'],
    excerpt:
      'Practical guidance on focusing AI work on useful, understandable and maintainable business solutions.',
  },
  {
    title: 'Turning Manual Business Work into Digital Systems',
    author: 'Aztech Team',
    date: 'Aztech insight',
    category: 'Software Engineering',
    readingTime: '5 min read',
    tags: ['Systems', 'Web Apps', 'Operations'],
    excerpt:
      'A practical article about replacing repeated manual work with websites, dashboards, reports and automation.',
  },
];

export const jobs: JobOpening[] = [
  {
    title: 'Software Engineering Internship',
    type: 'Internship',
    location: 'Remote / Hybrid',
    description: 'Aztech welcomes internship interest from people who want to learn by helping build practical software, AI and automation work.',
    status: 'Interest open',
  },
  {
    title: 'AI / Data Collaboration',
    type: 'Collaboration',
    location: 'Remote',
    description: 'Aztech welcomes research, academic and startup collaborations in AI, data science and practical business technology.',
    status: 'Expressions of interest',
  },
];
