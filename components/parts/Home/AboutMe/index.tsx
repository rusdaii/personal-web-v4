'use client';
import React from 'react';

import { m, useInView, LazyMotion, domAnimation } from 'framer-motion';
import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

import CodingHours from './CodingHours';
import Connect from './Connect';
import CurrentlyLearnFramwork from './CurrentlyLearnFramwork';
import LocationCard from './LocationCard';
import StackCard from './StackCard';

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

const AboutMe: React.FC = () => {
  const cardsRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(cardsRef, { once: true, margin: '-100px' });

  return (
    <LazyMotion features={domAnimation}>
      <m.section
        initial="initial"
        animate={isInView ? 'animate' : 'initial'}
        variants={variants}
        ref={cardsRef}
        transition={{
          duration: 0.5,
        }}
        className="relative my-24 will-change-[transform,opacity]"
      >
        <m.h1
          className="text-3xl font-bold text-center font-calsans sm:text-4xl"
          initial={{
            y: 30,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
          }}
        >
          About Me
        </m.h1>
        <m.div
          className="grid gap-4 mt-12 md:grid-cols-2"
          initial={{
            y: 40,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
          }}
        >
          <div className="grid gap-4">
            <LocationCard />
            <StackCard />
          </div>
          <div className="grid gap-4">
            <Connect />
            <div className="grid gap-4 [@media(min-width:450px)]:grid-cols-2">
              <CodingHours />
              <CurrentlyLearnFramwork />
            </div>
          </div>
        </m.div>
        <div className="flex items-center justify-center my-8">
          <Link
            href="/about"
            className={cn(buttonVariants({ variant: 'outline' }), 'rounded-xl')}
          >
            Know more about me
          </Link>
        </div>
      </m.section>
    </LazyMotion>
  );
};

export default AboutMe;
