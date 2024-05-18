'use client';
import React from 'react';

import { m, LazyMotion, domAnimation } from 'framer-motion';
import Link from 'next/link';
import { PortableTextBlock } from 'next-sanity';

type HeroProps = {
  description?: PortableTextBlock[];
};

const Hero: React.FC<HeroProps> = ({ description }) => {
  return (
    <section className="container px-5 sm:px-8 space-y-6">
      <div className="flex justify-center items-center text-center">
        <LazyMotion features={domAnimation}>
          <m.div
            className="flex flex-col gap-4 will-change-[transform,opacity] md:max-w-xl"
            initial={{
              y: 40,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            {description && (
              <>
                <span>
                  <h1 className="bg-gradient-to-b from-black via-black/90 to-black/70 to-90% bg-clip-text font-calsans text-2xl md:text-4xl font-bold leading-9 text-transparent dark:from-white dark:via-white/90 dark:to-white/70 sm:leading-[3.5rem]">
                    {description[0].children[0].text}
                  </h1>
                  <h2 className="bg-gradient-to-b from-black via-black/90 to-black/70 to-90% bg-clip-text font-calsans text-xl md:text-3xl font-bold leading-9 text-transparent dark:from-white dark:via-white/90 dark:to-white/70 sm:leading-[3.5rem]">
                    I like coding so bad and hardware enthusiast too 👨🏽‍💻.
                  </h2>
                </span>

                <m.div
                  className="flex justify-center items-center gap-3.5 px-2.5"
                  initial={{
                    x: -50,
                    opacity: 0,
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                  }}
                  transition={{ delay: 0.6 }}
                >
                  <div>
                    <span className="relative flex h-2 w-2">
                      <span className=" bg-primary absolute -top-1 -left-1 inline-flex h-4 w-4 animate-ping rounded-full opacity-75" />
                      <span className="bg-primary relative inline-flex h-2 w-2 rounded-full" />
                    </span>
                  </div>
                  <Link href={'mailto:rusdaii.html@gmail.com'} target="_blank">
                    <h2 className="font-calsans text-sm uppercase">
                      AVAILABLE FOR HIRE
                    </h2>
                  </Link>
                </m.div>
              </>
            )}
          </m.div>
        </LazyMotion>
      </div>
    </section>
  );
};

export default Hero;
