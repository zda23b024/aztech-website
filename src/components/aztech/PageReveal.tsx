'use client';

import { motion, type TargetAndTransition, useReducedMotion } from 'framer-motion';
import { usePathname } from 'next/navigation';

type RevealStyle = {
  initial: TargetAndTransition;
  animate: TargetAndTransition;
};

const reveals: Record<string, RevealStyle> = {
  home: {
    initial: { opacity: 0, scale: 0.985, filter: 'blur(10px)' },
    animate: { opacity: 1, scale: 1, filter: 'blur(0px)' },
  },
  about: {
    initial: { opacity: 0, x: -24, filter: 'blur(8px)' },
    animate: { opacity: 1, x: 0, filter: 'blur(0px)' },
  },
  solutions: {
    initial: { opacity: 0, y: 26, filter: 'blur(7px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  },
  projects: {
    initial: { opacity: 0, x: 28, scale: 0.992, filter: 'blur(8px)' },
    animate: { opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' },
  },
  team: {
    initial: { opacity: 0, y: -18, scale: 0.99, filter: 'blur(9px)' },
    animate: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' },
  },
  achievements: {
    initial: { opacity: 0, scale: 0.96, y: 10, filter: 'blur(7px)' },
    animate: { opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' },
  },
  contact: {
    initial: { opacity: 0, y: 16, filter: 'blur(12px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  },
  profile: {
    initial: { opacity: 0, x: -18, scale: 0.99, filter: 'blur(8px)' },
    animate: { opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' },
  },
};

function revealForPath(pathname: string) {
  if (pathname.startsWith('/team/')) return reveals.profile;

  const slug = pathname.split('/').filter(Boolean)[0] ?? 'home';
  return reveals[slug] ?? reveals.home;
}

export default function PageReveal({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const reveal = revealForPath(pathname);

  return (
    <motion.div
      key={pathname}
      initial={reduceMotion ? { opacity: 0 } : reveal.initial}
      animate={reduceMotion ? { opacity: 1 } : reveal.animate}
      transition={{ duration: reduceMotion ? 0.18 : 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
