import { Suspense } from 'react';

import type { Metadata, Viewport } from 'next';
import dynamic from 'next/dynamic';
import { draftMode } from 'next/headers';
import Image from 'next/image';
import { toPlainText } from 'next-sanity';

import Navbar from '@/components/global/Navbar';
const Footer = dynamic(() => import('@/components/global/Footer'));
import { urlForOpenGraphImage } from '@/sanity/lib/utils';
import { loadHomePage, loadSettings } from '@/sanity/loader/loadQuery';

const LiveVisualEditing = dynamic(
  () => import('@/sanity/loader/LiveVisualEditing')
);

export async function generateMetadata(): Promise<Metadata> {
  const [{ data: settings }, { data: homePage }] = await Promise.all([
    loadSettings(),
    loadHomePage(),
  ]);

  const ogImage = urlForOpenGraphImage(settings?.ogImage);
  return {
    title: homePage?.title
      ? {
          template: `%s | ${homePage.title}`,
          default: homePage.title || 'Personal website',
        }
      : undefined,
    description: homePage?.overview
      ? toPlainText(homePage.overview)
      : undefined,
    openGraph: {
      images: ogImage ? [ogImage] : [],
    },
  };
}

export const viewport: Viewport = {
  themeColor: '#000',
};

export default async function IndexRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Suspense>
        <Navbar />
      </Suspense>
      <main className="container flex flex-col flex-grow min-h-screen py-24 px-5 sm:px-8">
        <Suspense>{children}</Suspense>
      </main>
      <Suspense>
        <Footer />
      </Suspense>

      <Image
        width={1512}
        height={550}
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2"
        src="/images/gradient-background-top.png"
        alt=""
        role="presentation"
        priority
      />
      <Image
        width={1512}
        height={447}
        className="absolute -bottom-6 left-1/2 -z-10 -translate-x-1/2"
        src="/images/gradient-background-bottom.png"
        alt=""
        role="presentation"
        priority
      />

      {draftMode().isEnabled && <LiveVisualEditing />}
    </>
  );
}
