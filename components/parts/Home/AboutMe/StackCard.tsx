/* eslint-disable no-unused-vars */
/* eslint-disable import/order */
'use client';
import React from 'react';

import { Chip } from '@styled-icons/boxicons-regular';

import { Marquee } from '@/components/ui/marquee';

import { TECH_STACKS, TOOL_STACKS } from '@/lib/constants/stacks';

const TechStacksIcon = () => {
  return TECH_STACKS.map((stack) => (
    <React.Fragment key={stack.name}>{stack.icon}</React.Fragment>
  ));
};

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const StackCard = () => {
  return (
    <div className="flex flex-col gap-2 p-4 overflow-hidden h-60 rounded-xl shadow-feature-card dark:shadow-feature-card-dark lg:p-6">
      <div className="flex items-center gap-2">
        <Chip className="size-[18px]" />
        <h2 className="text-sm font-light">Stacks</h2>
      </div>

      <Marquee className="py-4 flex" fade pauseOnHover>
        {TECH_STACKS.map((stack) => (
          <span
            key={stack.name}
            className={cn(
              buttonVariants({ size: 'icon', variant: 'ghost' }),
              'size-10 hover:bg-transparent'
            )}
          >
            {stack.icon}
          </span>
        ))}
      </Marquee>
      <Marquee gap="20px" className="py-4" reverse fade pauseOnHover>
        {TOOL_STACKS.map((stack) => (
          <span
            key={stack.name}
            className={cn(
              buttonVariants({
                size: 'icon',
                variant: 'ghost',
              }),
              'size-10 hover:bg-transparent'
            )}
          >
            {stack.icon}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default StackCard;
