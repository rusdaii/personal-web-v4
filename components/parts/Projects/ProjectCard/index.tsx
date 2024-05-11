import React from 'react';

import { EncodeDataAttributeCallback } from '@sanity/react-loader';
import Link from 'next/link';
import { PortableTextBlock } from 'next-sanity';

import { CustomPortableText } from '@/components/shared/CustomPortableText/CustomPortableText';
import { BlurImage } from '@/components/ui/blurImage';
import { urlForImage } from '@/sanity/lib/utils';
import { ShowcaseProject } from '@/types';

type ProjectCardProps = {
  project: ShowcaseProject;
  encodeDataAttribute?: EncodeDataAttributeCallback;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  encodeDataAttribute,
}) => {
  const { slug, title, overview, tags } = project;

  const imageUrl = project && urlForImage(project.coverImage)?.url();

  return (
    <Link
      href={`/projects/${slug}`}
      className="group rounded-xl px-2 py-4 shadow-feature-card dark:shadow-feature-card-dark"
      data-sanity={encodeDataAttribute?.(['showcaseProjects', 'slug'])}
    >
      {imageUrl && (
        <BlurImage
          src={imageUrl}
          width={1280}
          height={832}
          imageClassName="group-hover:scale-105"
          alt={title ? title : 'Cover image'}
          className="rounded-lg"
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
        <div className="mt-4 flex flex-wrap gap-2">
          {tags?.map((tag, key) => (
            <div
              key={key}
              className="rounded-full border bg-zinc-50 px-3 py-2 text-xs leading-4 dark:bg-zinc-900"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
