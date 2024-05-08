import { FC } from 'react';

import { EncodeDataAttributeCallback } from '@sanity/react-loader';

import { Header } from '@/components/shared/Header';
import { AboutPagePayload } from '@/types';

export interface AboutPageProps {
  data: AboutPagePayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

const AboutPage: FC<AboutPageProps> = ({ data }) => {
  const { overview = [], title = '' } = data ?? {};

  return <div>{title && <Header title={title} description={overview} />}</div>;
};

export default AboutPage;
