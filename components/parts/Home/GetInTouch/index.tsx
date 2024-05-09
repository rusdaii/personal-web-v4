'use client';
import React from 'react';

import { motion, useAnimate, useInView } from 'framer-motion';
import { Mail } from 'lucide-react';

import { Button } from '@/components/ui/button';

const variants = {
  initial: {
    y: 40,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

const GetInTouch: React.FC = () => {
  const [scope, animate] = useAnimate();
  const cardsRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(cardsRef, { once: true, margin: '-100px' });

  React.useEffect(() => {
    animate(
      [
        ['#pointer', { left: 200, top: 60 }, { duration: 0 }],
        ['#javascript', { opacity: 1 }, { duration: 0.3 }],
        [
          '#pointer',
          { left: 50, top: 102 },
          { at: '+0.5', duration: 0.5, ease: 'easeInOut' },
        ],
        ['#javascript', { opacity: 0.4 }, { at: '-0.3', duration: 0.1 }],
        ['#react-js', { opacity: 1 }, { duration: 0.3 }],
        [
          '#pointer',
          { left: 224, top: 170 },
          { at: '+0.5', duration: 0.5, ease: 'easeInOut' },
        ],
        ['#react-js', { opacity: 0.4 }, { at: '-0.3', duration: 0.1 }],
        ['#typescript', { opacity: 1 }, { duration: 0.3 }],
        [
          '#pointer',
          { left: 88, top: 198 },
          { at: '+0.5', duration: 0.5, ease: 'easeInOut' },
        ],
        ['#typescript', { opacity: 0.4 }, { at: '-0.3', duration: 0.1 }],
        ['#next-js', { opacity: 1 }, { duration: 0.3 }],
        [
          '#pointer',
          { left: 200, top: 60 },
          { at: '+0.5', duration: 0.5, ease: 'easeInOut' },
        ],
        ['#next-js', { opacity: 0.4 }, { at: '-0.3', duration: 0.1 }],
      ],
      {
        repeat: Number.POSITIVE_INFINITY,
      }
    );
  }, [animate]);

  return (
    <motion.div
      className="relative rounded-xl p-1 shadow-feature-card backdrop-blur-lg will-change-[transform,opacity] dark:shadow-feature-card-dark"
      initial="initial"
      animate={isInView ? 'animate' : 'initial'}
      variants={variants}
      ref={cardsRef}
      transition={{
        duration: 0.5,
      }}
    >
      <div className="flex flex-col gap-6 rounded-[11px] p-4 lg:p-6">
        <div className="flex gap-12 max-md:flex-col">
          <div className="relative size-64 max-md:mx-auto" ref={scope}>
            <div
              id="next-js"
              className="absolute bottom-12 left-14 rounded-3xl border bg-gradient-to-b from-zinc-50 to-zinc-100 px-2 py-1.5 text-xs opacity-40 dark:from-zinc-800 dark:to-zinc-900"
            >
              Next.js
            </div>
            <div
              id="react-js"
              className="absolute left-2 top-20 rounded-3xl border bg-gradient-to-b from-zinc-50 to-zinc-100 px-2 py-1.5 text-xs opacity-40 dark:from-zinc-800 dark:to-zinc-900"
            >
              React.js
            </div>
            <div
              id="typescript"
              className="absolute bottom-20 right-1 rounded-3xl border bg-gradient-to-b from-zinc-50 to-zinc-100 px-2 py-1.5 text-xs opacity-40 dark:from-zinc-800 dark:to-zinc-900"
            >
              TypeScript
            </div>
            <div
              id="javascript"
              className="absolute right-8 top-10 rounded-3xl border bg-gradient-to-b from-zinc-50 to-zinc-100 px-2 py-1.5 text-xs opacity-40 dark:from-zinc-800 dark:to-zinc-900"
            >
              JavaScript
            </div>

            <div id="pointer" className="absolute">
              <svg
                width="16.8"
                height="18.2"
                viewBox="0 0 12 13"
                stroke="white"
                strokeWidth="1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 5.50676L0 0L2.83818 13L6.30623 7.86537L12 5.50676V5.50676Z"
                />
              </svg>
            </div>
          </div>

          <div className="flex flex-col justify-center px-4">
            <p className="mb-2 bg-gradient-to-r from-black to-black/70 bg-clip-text font-title text-3xl font-bold text-transparent dark:from-zinc-100 dark:to-zinc-400">
              Any questions?
            </p>
            <p className="text-zinc-800 dark:text-zinc-300">
              Feel free to reach out to me!{' '}
            </p>
            <div className="my-8">
              <a href="mailto:rusdaii.html@gmail.com">
                <Button variant="outline" className="rounded-xl">
                  <Mail className="size-4 mr-2" />
                  Mail me
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GetInTouch;
