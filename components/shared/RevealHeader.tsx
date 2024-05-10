'use client';
import React from 'react';

import { LazyMotion, domAnimation, m } from 'framer-motion';

type RevealHeaderProps = {
  children: React.ReactNode;
  transitionDelay?: number;
};

const animation = {
  hide: {
    x: -30,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
  },
};

const RevealHeader: React.FC<RevealHeaderProps> = ({
  children,
  transitionDelay,
}) => {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: transitionDelay }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
};

export default RevealHeader;
