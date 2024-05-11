import './style.css';

import React from 'react';

import {
  PortableText,
  type PortableTextBlock,
  type PortableTextComponents,
} from 'next-sanity';
import type { Image } from 'sanity';

import ImageBox from '@/components/shared/ImageBox';

type CustomPortableTextProps = {
  paragraphClasses?: string;
  value: PortableTextBlock[];
};

export const CustomPortableText: React.FC<CustomPortableTextProps> = ({
  paragraphClasses,
  value,
}) => {
  const components: PortableTextComponents = {
    block: {
      normal: ({ children }) => {
        return <p className={paragraphClasses}>{children}</p>;
      },
      h2: ({ children }) => {
        return (
          <h2 className="text-2xl font-bold !text-foreground py-5">
            {children}
          </h2>
        );
      },
      bullet: ({ children }) => {
        return <ul className="list-disc">{children}</ul>;
      },
    },
    marks: {
      link: ({ children, value }) => {
        return (
          <a
            className="underline transition hover:opacity-50"
            href={value?.href}
            rel="noreferrer noopener"
          >
            {children}
          </a>
        );
      },
    },
    types: {
      image: ({
        value,
      }: {
        value: Image & { alt?: string; caption?: string };
      }) => {
        return (
          <div className="my-6 space-y-2">
            <ImageBox
              image={value}
              alt={value.alt}
              classesWrapper="relative aspect-[16/9]"
            />
            {value?.caption && (
              <div className="font-sans text-sm text-gray-600">
                {value.caption}
              </div>
            )}
          </div>
        );
      },
    },
  };

  return <PortableText components={components} value={value} />;
};
