'use client';

import { FC } from 'react';

import { QueryResponseInitial, useQuery } from '@sanity/react-loader';

import { aboutPageQuery } from '@/sanity/lib/queries';
import { AboutPagePayload } from '@/types';

import AboutPage from './AboutPage';

type Props = {
  initial: QueryResponseInitial<AboutPagePayload | null>
}

const AboutPagePreview: FC<Props> = ({ initial }) => {
  const { data, encodeDataAttribute } = useQuery<AboutPagePayload | null>(
    aboutPageQuery,
    {},
    { initial },
  );

  if (!data) {
    return (
      <div className="text-center">
        Please start editing your About document to see the preview!
      </div>
    );
  }

  return <AboutPage data={data} encodeDataAttribute={encodeDataAttribute} />;
};

export default AboutPagePreview;
