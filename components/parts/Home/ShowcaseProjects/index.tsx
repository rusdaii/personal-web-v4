'use client';
import React from 'react';

import { EncodeDataAttributeCallback } from '@sanity/react-loader';
import { RightArrowAlt, Code } from '@styled-icons/boxicons-regular';
import { m, useInView, LazyMotion, domAnimation } from 'framer-motion';
import Link from 'next/link';
import { PortableTextBlock } from 'next-sanity';

import { CustomPortableText } from '@/components/shared/CustomPortableText/CustomPortableText';
import { BlurImage } from '@/components/ui/blurImage';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { urlForImage } from '@/sanity/lib/utils';
import { ShowcaseProject } from '@/types';

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

type ShowCaseProjectProps = {
  projects: ShowcaseProject[];
  encodeDataAttribute?: EncodeDataAttributeCallback;
};

type CardProps = {
  project: ShowcaseProject;
  encodeDataAttribute?: EncodeDataAttributeCallback;
};

const ShowcaseProjects: React.FC<ShowCaseProjectProps> = ({
  projects,
  encodeDataAttribute,
}) => {
  const projectsRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(projectsRef, { once: true, margin: '-100px' });

  return (
    <LazyMotion features={domAnimation}>
      <m.section
        initial="initial"
        animate={isInView ? 'animate' : 'initial'}
        variants={variants}
        ref={projectsRef}
        transition={{
          duration: 0.5,
        }}
        className="relative my-24 will-change-[transform,opacity]"
      >
        <m.h1
          className="text-center font-calsans text-3xl font-bold sm:text-4xl"
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
          Featured Projects
        </m.h1>
        <m.div
          className="mt-12 grid gap-4 md:grid-cols-2"
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
          {projects.map((project) => (
            <CardProps
              key={project.slug}
              project={project}
              encodeDataAttribute={encodeDataAttribute}
            />
          ))}
        </m.div>
        <div className="my-8 flex items-center justify-center">
          <Link
            href="/projects"
            className={cn(
              buttonVariants({
                variant: 'outline',
              }),
              'rounded-xl'
            )}
          >
            See all project
          </Link>
        </div>
      </m.section>
    </LazyMotion>
  );
};

const CardProps: React.FC<CardProps> = ({ project, encodeDataAttribute }) => {
  const { slug, title, overview } = project;

  const imageUrl = project && urlForImage(project.coverImage)?.url();

  return (
    <Link
      key={slug}
      href={`/projects/${slug}`}
      data-sanity={encodeDataAttribute?.(['showcaseProjects', 'slug'])}
      className="group relative rounded-xl p-2 shadow-feature-card dark:shadow-feature-card-dark"
    >
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <Code className="size-[18px]" />
          <h2 className="font-light">Project</h2>
        </div>
        <RightArrowAlt className="size-[20px] -rotate-45 opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
      {imageUrl && (
        <BlurImage
          width={1280}
          height={832}
          src={imageUrl}
          alt={title ? title : 'Cover image'}
          className="rounded-lg object-cover"
        />
      )}
      <div className="flex-1 px-2 py-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">{title}</h2>
          <div>
            <CustomPortableText
              value={overview as PortableTextBlock[]}
              paragraphClasses="mt-2 dark:!text-muted-foreground"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ShowcaseProjects;
