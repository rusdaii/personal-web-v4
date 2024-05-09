'use client';
import React from 'react';

import { Chip } from '@styled-icons/boxicons-regular';

import { Marquee } from '@/components/ui/marquee';
import { TECH_STACKS, TOOL_STACKS } from '@/lib/constants/stacks';

const StackCard = () => {
  return (
    <div className="flex flex-col gap-2 p-4 overflow-hidden h-60 rounded-xl shadow-feature-card dark:shadow-feature-card-dark lg:p-6">
      <div className="flex items-center gap-2">
        <Chip className="size-[18px]" />
        <h2 className="text-sm font-light">Stacks</h2>
      </div>
      <Marquee gap="20px" className="py-4" fade pauseOnHover>
        {TECH_STACKS.map((stack) => (
          <span key={stack.name}>{stack.icon}</span>
        ))}
      </Marquee>
      <Marquee gap="20px" className="py-4" reverse fade pauseOnHover>
        {TOOL_STACKS.map((stack) => (
          <span key={stack.name}>{stack.icon}</span>
        ))}
      </Marquee>
    </div>
  );
};

export default StackCard;
