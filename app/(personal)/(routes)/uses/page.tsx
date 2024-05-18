import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

const UsesRoute = () => {
  return (
    <section className="flex flex-col justify-center items-center h-dvh">
      <Image
        src="/images/ui-design.svg"
        alt="Coding"
        width={300}
        height={300}
      />
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-center">
          This page is under construction.
          <br />
          please come back later.
        </h1>
        <Link href="/">
          <Button size="sm" variant="outline">
            Back to home
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default UsesRoute;
