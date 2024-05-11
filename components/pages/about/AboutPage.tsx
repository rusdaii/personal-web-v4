import { FC } from 'react';

import { EncodeDataAttributeCallback } from '@sanity/react-loader';

import { CustomPortableText } from '@/components/shared/CustomPortableText/CustomPortableText';
import { Header } from '@/components/shared/Header';
import RevealHeader from '@/components/shared/RevealHeader';
import { AboutPagePayload } from '@/types';

export interface AboutPageProps {
  data: AboutPagePayload | null;
  encodeDataAttribute?: EncodeDataAttributeCallback;
}

const AboutPage: FC<AboutPageProps> = ({ data }) => {
  const { overview = [], title = '', aboutMe } = data ?? {};

  return (
    <div>
      {title && (
        <RevealHeader>
          <Header
            title={title}
            description={overview}
            headingClasses="my-4 text-4xl font-bold md:text-5xl"
            descriptionClasses="dark:!text-white"
          />
        </RevealHeader>
      )}
      <RevealHeader className="mt-10" transitionDelay={0.2}>
        {aboutMe && (
          <CustomPortableText value={aboutMe} paragraphClasses="py-3" />
        )}
      </RevealHeader>
    </div>
  );
};

export default AboutPage;
