'use client';

import './style.css';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 items-center min-h-dvh">
      <div className="place-self-center">
        <span className="text-2xl md:text-3xl lg:text-5xl">404</span>
        <h1 className="font-semibold text-4xl md:text-5xl lg:text-6xl">
          Lost in Space
        </h1>
        <p className="text-sm md:text-base py-5 md:py-7">
          You have reached the edge of the universe.
          <br />
          The page you requested could not be found.
          <br />
          Don&apos;t worry and return to the previous page.
        </p>
        <div className="flex gap-5">
          <Button className="rounded-xl">
            <Link href="/">Back to home</Link>
          </Button>
          <Button
            className="rounded-xl"
            variant="outline"
            onClick={() => router.back()}
          >
            Previous page
          </Button>
        </div>
      </div>
      <div className="box hidden md:block">
        <Image
          src="/images/astronaut.svg"
          alt="astronaut"
          width={500}
          height={500}
          className="astronaut"
        />
      </div>
    </div>
  );
};

export default NotFound;
