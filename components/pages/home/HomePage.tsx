import type { EncodeDataAttributeCallback } from '@sanity/react-loader';

import AboutMe from '@/components/parts/Home/AboutMe';
import GetInTouch from '@/components/parts/Home/GetInTouch';
import Hero from '@/components/parts/Home/Hero';
import ShowcaseProjects from '@/components/parts/Home/ShowcaseProjects';
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

      <ShowcaseProjects
        projects={showcaseProjects}
        encodeDataAttribute={encodeDataAttribute}
      />

      <AboutMe />

      <GetInTouch />
    </div>
  );
}

export default HomePage;
