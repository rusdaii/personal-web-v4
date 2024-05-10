import React from 'react';

import { CustomPortableText } from '@/components/shared/CustomPortableText';
import { cn } from '@/lib/utils';

interface HeaderProps {
  centered?: boolean;
  description?: any[];
  title?: string;
  headingClasses?: string;
  descriptionClasses?: string;
}
export const Header: React.FC<HeaderProps> = ({
  title,
  description,
  centered = false,
  headingClasses,
  descriptionClasses,
}) => {
  if (!description && !title) {
    return null;
  }
  return (
    <div className={`${centered ? 'text-center' : 'w-5/6 lg:w-3/5'}`}>
      {/* Title */}
      {title && (
        <h1 className={cn('text-3xl font-bold tracking-tight', headingClasses)}>
          {title}
        </h1>
      )}
      {/* Description */}
      {description && (
        <div className="mt-2">
          <CustomPortableText
            value={description}
            paragraphClasses={descriptionClasses}
          />
        </div>
      )}
    </div>
  );
};
