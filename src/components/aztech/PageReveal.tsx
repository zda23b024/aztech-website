'use client';

import { AnimatePresence, motion, type TargetAndTransition, useReducedMotion } from 'framer-motion';
import { usePathname } from 'next/navigation';

type RevealStyle = {
  initial: TargetAndTransition;
  animate: TargetAndTransition;
  exit: TargetAndTransition;
  curtain: {
    className: string;
    initial: TargetAndTransition;
    animate: TargetAndTransition;
    exit: TargetAndTransition;
  };
};

const reveals: Record<string, RevealStyle> = {
  home: {
    initial: { opacity: 0, scale: 0.975, y: 12, filter: 'blur(12px)' },
    animate: { opacity: 1, scale: 1, filter: 'blur(0px)' },
    exit: { opacity: 0, scale: 1.01, y: -10, filter: 'blur(8px)' },
    curtain: {
      className: 'origin-center bg-[linear-gradient(135deg,#071B46_0%,#0759E6_58%,#09CBEF_100%)]',
      initial: { scaleY: 1 },
      animate: { scaleY: 0 },
      exit: { scaleY: 1 },
    },
  },
  about: {
    initial: { opacity: 0, x: -38, rotate: -0.35, filter: 'blur(8px)' },
    animate: { opacity: 1, x: 0, filter: 'blur(0px)' },
    exit: { opacity: 0, x: 24, filter: 'blur(7px)' },
    curtain: {
      className: 'origin-left bg-[linear-gradient(90deg,#123E73_0%,#087CFF_68%,#09CBEF_100%)]',
      initial: { scaleX: 1 },
      animate: { scaleX: 0 },
      exit: { scaleX: 1 },
    },
  },
  solutions: {
    initial: { opacity: 0, y: 42, scale: 0.99, filter: 'blur(9px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
    exit: { opacity: 0, y: -26, filter: 'blur(7px)' },
    curtain: {
      className: 'origin-bottom bg-[linear-gradient(0deg,#071B46_0%,#0759E6_52%,#09CBEF_100%)]',
      initial: { scaleY: 1 },
      animate: { scaleY: 0 },
      exit: { scaleY: 1 },
    },
  },
  projects: {
    initial: { opacity: 0, x: 42, scale: 0.985, filter: 'blur(8px)' },
    animate: { opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' },
    exit: { opacity: 0, x: -32, scale: 0.99, filter: 'blur(7px)' },
    curtain: {
      className: 'origin-right bg-[linear-gradient(270deg,#071B46_0%,#087CFF_62%,#09CBEF_100%)]',
      initial: { scaleX: 1 },
      animate: { scaleX: 0 },
      exit: { scaleX: 1 },
    },
  },
  team: {
    initial: { opacity: 0, y: -34, scale: 0.982, filter: 'blur(10px)' },
    animate: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' },
    exit: { opacity: 0, y: 22, scale: 0.99, filter: 'blur(8px)' },
    curtain: {
      className: 'origin-top bg-[linear-gradient(180deg,#09CBEF_0%,#087CFF_42%,#123E73_100%)]',
      initial: { scaleY: 1 },
      animate: { scaleY: 0 },
      exit: { scaleY: 1 },
    },
  },
  achievements: {
    initial: { opacity: 0, scale: 0.945, y: 18, rotate: 0.25, filter: 'blur(8px)' },
    animate: { opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' },
    exit: { opacity: 0, scale: 1.015, y: -16, filter: 'blur(7px)' },
    curtain: {
      className: 'origin-center bg-[radial-gradient(circle_at_50%_50%,#09CBEF_0%,#087CFF_42%,#071B46_100%)]',
      initial: { clipPath: 'circle(150% at 50% 50%)' },
      animate: { clipPath: 'circle(0% at 50% 50%)' },
      exit: { clipPath: 'circle(150% at 50% 50%)' },
    },
  },
  contact: {
    initial: { opacity: 0, y: 28, scale: 1.01, filter: 'blur(14px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
    exit: { opacity: 0, y: -18, filter: 'blur(8px)' },
    curtain: {
      className: 'origin-bottom bg-[linear-gradient(12deg,#071B46_0%,#123E73_48%,#09CBEF_100%)]',
      initial: { y: '0%' },
      animate: { y: '-100%' },
      exit: { y: '0%' },
    },
  },
  profile: {
    initial: { opacity: 0, x: -28, scale: 0.982, filter: 'blur(10px)' },
    animate: { opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' },
    exit: { opacity: 0, x: 20, scale: 0.995, filter: 'blur(7px)' },
    curtain: {
      className: 'origin-left bg-[linear-gradient(115deg,#071B46_0%,#123E73_54%,#09CBEF_100%)]',
      initial: { skewX: -8, x: '-8%', scaleX: 1.18 },
      animate: { skewX: -8, x: '112%', scaleX: 1.18 },
      exit: { skewX: -8, x: '-8%', scaleX: 1.18 },
    },
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
  const pageEase = [0.22, 1, 0.36, 1] as const;
  const transition = { duration: 0.7, ease: pageEase };

  return (
    <>
      {!reduceMotion ? (
        <AnimatePresence mode="wait">
          <motion.div
            key={`${pathname}-curtain`}
            aria-hidden
            className={`pointer-events-none fixed inset-x-0 bottom-0 top-16 z-40 lg:top-20 ${reveal.curtain.className}`}
            initial={reveal.curtain.initial}
            animate={reveal.curtain.animate}
            exit={reveal.curtain.exit}
            transition={{ duration: 0.62, ease: [0.83, 0, 0.17, 1] as const }}
          />
        </AnimatePresence>
      ) : null}

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          initial={reduceMotion ? { opacity: 0 } : reveal.initial}
          animate={reduceMotion ? { opacity: 1 } : reveal.animate}
          exit={reduceMotion ? { opacity: 0 } : reveal.exit}
          transition={reduceMotion ? { duration: 0.18 } : transition}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
