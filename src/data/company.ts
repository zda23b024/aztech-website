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
  location: 'Michenzani, Zanzibar Block No 1',
  locationUrl: 'https://www.google.com/maps/search/?api=1&query=Michenzani%20Block%20No%201%20Zanzibar',
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
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=320&h=240&q=80',
  },
  {
    title: 'Mobile Applications',
    description: 'Custom mobile app interfaces and product experiences designed around your users and business workflow.',
    icon: Smartphone,
    imageUrl: 'https://images.unsplash.com/photo-1597320691074-e930812569cb?auto=format&fit=crop&w=320&h=240&q=80',
  },
  {
    title: 'Management Systems',
    description: 'Business management systems for tracking operations, staff, customers, sales, services and daily activities.',
    icon: ClipboardList,
    imageUrl: 'https://www.jmc.co.id/blog/wp-content/uploads/2024/03/Pengertian-dan-Manfaat-Aplikasi-DMS-Document-Management-System-contoh.jpg',
  },
  {
    title: 'Online Booking & Registration',
    description: 'Booking, appointment, registration and request systems that help customers interact with your business online.',
    icon: CalendarCheck,
    imageUrl: 'https://www.gettimely.com/media/gondmlbu/hand-phone-adobe-online-bookings-close.jpg?height=400&quality=90&v=1dc154d638c33b0&width=600',
  },
  {
    title: 'Inventory & Sales Systems',
    description: 'Systems for stock tracking, sales records, product movement, reporting and business visibility.',
    icon: Boxes,
    imageUrl: 'https://www.newseria.pl/files/_uploaded/glownekonf_238416076.jpg',
  },
  {
    title: 'Customer Management (CRM)',
    description: 'Simple CRM tools for managing customers, leads, follow-ups, communication and service history.',
    icon: UsersRound,
    imageUrl: 'https://webula.ch/uploads/images/pages/1766041732172-03625e8.jpeg',
  },
  {
    title: 'Automated Reports & Notifications',
    description: 'Automated reports, reminders, alerts and notifications that reduce manual work and save time.',
    icon: ChartNoAxesColumnIncreasing,
    imageUrl: 'https://www.softimpact.net/ExtImages/News2654494-637979819599583911.png',
  },
  {
    title: 'AI-powered Solutions',
    description: 'AI-assisted tools, data workflows and smart features that help businesses work faster and make better decisions.',
    icon: BrainCircuit,
    imageUrl: 'https://www.ricoh.co.jp/magazines/workstyle/assets/img/internal-chatbot-case-studies1.webp',
  },
];

export const projects: Project[] = [
  {
    name: 'The City Whisper App',
    description: 'A city-focused mobile experience for discovering local places, reporting needs and helping people understand what is happening around them.',
    problem: 'City information and local service updates are often scattered, slow to find and difficult for residents or visitors to act on.',
    solution: 'A mobile-first app that brings city discovery, local updates and community reporting into one accessible digital experience.',
    technologies: ['Mobile App', 'City Guide', 'Community', 'Maps'],
    category: 'Civic Mobile App',
    status: 'Completed project',
    github: 'https://github.com/zda23b024/The_City_Whisper_App',
    imageUrl: 'https://www.choicely.com/hubfs/city-guide-app-01-.webp',
  },
  {
    name: 'Zanfibre Billing System',
    description: 'A billing and account-management system built for internet service operations, customer records, payments and subscription tracking.',
    problem: 'Internet service billing needs organized customer accounts, payment visibility and reliable tracking of active plans.',
    solution: 'A focused billing dashboard for managing customers, invoices, service plans and payment workflows in one place.',
    technologies: ['Billing', 'Dashboard', 'Customers', 'Payments'],
    category: 'Billing System',
    status: 'Completed project',
    github: 'https://github.com/zda23b024/zanfibre_billing_system',
    imageUrl: 'https://infohub.delltechnologies.com/static/media/dd324815-d808-49b4-af7e-9811d74e1c82.png',
  },
  {
    name: 'Food Delivery App Zanzibar',
    description: 'A food ordering and delivery app concept for Zanzibar, connecting customers with restaurants and delivery coordination.',
    problem: 'Food orders, restaurant menus and delivery communication can become difficult to manage through calls and messages alone.',
    solution: 'A digital ordering flow that supports browsing food, placing orders and coordinating delivery more clearly.',
    technologies: ['Food App', 'Ordering', 'Delivery', 'Mobile'],
    category: 'Delivery App',
    status: 'Completed project',
    github: 'https://github.com/zda23b024/food_delivery_app_Zanzibar',
    imageUrl: 'https://www.radicalstart.com/blog/content/images/2023/11/Uber-Eats-App.jpg',
  },
  {
    name: 'E-Library',
    description: 'A planned digital library platform for organizing learning materials, books, notes and academic resources in one searchable place.',
    problem: 'Students and readers often need a simple way to find, organize and access digital learning resources.',
    solution: 'A web-based e-library experience with resource categories, search, reading access and structured academic content.',
    technologies: ['E-Library', 'Learning', 'Search', 'Web App'],
    category: 'Planned Platform',
    status: 'Upcoming project',
    imageUrl: 'https://www.elearning.rtb.gov.rw/pluginfile.php/7481/coursecat/description/elibrary%20by%20Bosco.png',
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
    phone: '+255 772 503 379',
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
    phone: '+255 773 083 703',
    education: ['Data Science and Artificial Intelligence, IIT Madras Zanzibar Campus, 2023 - 2027'],
    experience: ['Soft-Tech Consultants Ltd, Dar es Salaam, Tanzania'],
    expertise: ['AI-powered solutions', 'Data science', 'Analytics dashboards', 'Automation systems', 'Software systems for business operations'],
    projects: ['Aztech AI and data systems direction'],
    research: ['Applied AI and data systems for practical business problems'],
  },
  {
    slug: 'abdallah-sadri-abdallah',
    name: 'Abdallah Sadri Abdallah',
    role: 'Developer',
    group: 'Team Members',
    biography:
      'Abdallah Sadri Abdallah is a Developer at Aztech with a focus on data science, artificial intelligence and practical software systems for business needs.',
    photo: '/team/abdallah-sadri-abdallah.png',
    skills: ['Data Science', 'Artificial Intelligence', 'Software Development', 'Business Systems'],
    github: 'https://github.com/Abdallahdula',
    email: 'zda23b014@iitmz.ac.in',
    phone: '+255 679 913 946',
    education: ['Data Science and Artificial Intelligence, IIT Madras Zanzibar Campus'],
    experience: ['Aztech software development and digital product work'],
    expertise: ['Data science', 'Artificial intelligence', 'Software engineering', 'Business systems', 'Automation workflows'],
    projects: ['Aztech websites and business systems support', 'AI and data-driven product support'],
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
