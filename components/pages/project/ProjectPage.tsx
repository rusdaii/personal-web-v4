import type { EncodeDataAttributeCallback } from '@sanity/react-loader';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { CustomPortableText } from '@/components/shared/CustomPortableText/CustomPortableText';
import { Header } from '@/components/shared/Header';
import RevealHeader from '@/components/shared/RevealHeader';
import { BlurImage } from '@/components/ui/blurImage';
import { Button } from '@/components/ui/button';
import { urlForImage } from '@/sanity/lib/utils';
import type { ProjectPayload } from '@/types';

export interface ProjectPageProps {
  data: ProjectPayload | null;
  encodeDataAttribute?: EncodeDataAttributeCallback;
}

export function ProjectPage({ data, encodeDataAttribute }: ProjectPageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { coverImage, description, overview, site, source, tags, title } =
    data ?? {};

  const imageUrl = urlForImage(coverImage)?.url();

  return (
    <div className="max-w-3xl mx-auto pt-10">
      <div className="mb-20 space-y-6">
        {/* Header */}
        <RevealHeader>
          <Header
            title={title}
            description={overview}
            headingClasses="text-2xl"
            descriptionClasses="dark:!text-white"
          />
        </RevealHeader>

        <RevealHeader transitionDelay={0.1}>
          <span className="flex items-center gap-4">
            {site && (
              <Link href={site} target="_blank" className="group relative">
                <Button size="sm" className="flex gap-1 items-center">
                  <span>Visit Site</span>
                  <ArrowRight className="size-4 -rotate-45 group-hover:-rotate-[60deg] transition-all" />
                </Button>
              </Link>
            )}
            {source && (
              <Link href={source} target="_blank" className="group relative">
                <Button size="sm" className="flex gap-1 items-center">
                  <span>Source Code</span>
                  <ArrowRight className="size-4 -rotate-45 group-hover:-rotate-[60deg] transition-all" />
                </Button>
              </Link>
            )}
          </span>
        </RevealHeader>

        <div className="rounded-lg border p-3">
          {/* Image  */}
          {imageUrl && (
            <BlurImage
              width={1280}
              height={832}
              data-sanity={encodeDataAttribute?.('description')}
              src={imageUrl}
              alt={title ? title : 'Cover image'}
              className="rounded-lg object-cover"
            />
          )}

          <div className="p-3 lg:p-4">
            <div className="flex flex-row flex-wrap items-center gap-3">
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
        </div>

        {/* Description */}
        {description && (
          <CustomPortableText
            paragraphClasses="max-w-3xl text-sm md:text-default text-gray-600"
            value={description}
          />
        )}
      </div>
      <div className="absolute left-0 w-screen border-t" />
    </div>
  );
}

export default ProjectPage;
