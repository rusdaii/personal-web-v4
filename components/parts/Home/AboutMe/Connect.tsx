import React from 'react';

import { Link as LinkIcon } from '@styled-icons/boxicons-regular';
import Link from 'next/link';

import { SOCIAL_LINKS } from '@/lib/constants/links';

const Connect: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 p-4 rounded-xl shadow-feature-card dark:shadow-feature-card-dark lg:p-6">
      <div className="flex items-center gap-2">
        <LinkIcon className="size-[18px]" />
        <h2 className="text-sm font-light">Connect</h2>
      </div>
      <div className="flex flex-col gap-4 px-2">
        {SOCIAL_LINKS.map((link) => {
          const { href, title, icon } = link;

          const Icon = icon;

          return (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-3 transition-colors text-muted-foreground hover:text-foreground"
            >
              <Icon className="size-[18px]" />
              <h2 className="font-light">{title}</h2>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Connect;
