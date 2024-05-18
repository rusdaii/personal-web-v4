import React from 'react';

import Image from 'next/image';

const RouteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Image
        width={1512}
        height={550}
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2"
        src="/images/header-gradient.svg"
        alt=""
        role="presentation"
        priority
      />
      <main className="container py-24 px-5 sm:px-8">{children}</main>

      <Image
        width={1512}
        height={447}
        className="absolute -bottom-6 left-1/2 -z-10 -translate-x-1/2"
        src="/images/footer-gradient.svg"
        alt=""
        role="presentation"
        priority
      />
    </>
  );
};

export default RouteLayout;
