import type { EncodeDataAttributeCallback } from '@sanity/react-loader';
import Link from 'next/link';

import { ProjectListItem } from '@/components/pages/home/ProjectListItem';
import Hero from '@/components/parts/Home/Hero';
import { resolveHref } from '@/sanity/lib/utils';
import type { HomePagePayload } from '@/types';

export interface HomePageProps {
  data: HomePagePayload | null;
  encodeDataAttribute?: EncodeDataAttributeCallback;
}

export function HomePage({ data, encodeDataAttribute }: HomePageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { overview = [], showcaseProjects = [], logo } = data ?? {};

  return (
    <div className="space-y-20">
      <Hero description={overview} image={logo} />
      {/* Showcase projects */}
      {showcaseProjects && showcaseProjects.length > 0 && (
        <div className="rounded-md border">
          {showcaseProjects.map((project, key) => {
            const href = resolveHref(project?._type, project?.slug);
            if (!href) {
              return null;
            }
            return (
              <Link
                key={key}
                href={href}
                data-sanity={encodeDataAttribute?.([
                  'showcaseProjects',
                  key,
                  'slug',
                ])}
              >
                <ProjectListItem project={project} odd={key % 2} />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default HomePage;
