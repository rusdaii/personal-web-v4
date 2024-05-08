import { Metadata } from 'next';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import { toPlainText } from 'next-sanity';

import AboutPage from '@/components/pages/about/AboutPage';
import AboutPagePreview from '@/components/pages/about/AboutPagePreview';
import { urlForOpenGraphImage } from '@/sanity/lib/utils';
import { loadAboutPage, loadSettings } from '@/sanity/loader/loadQuery';

export const generateMetadata = async (): Promise<Metadata> => {
  const [{ data: settings }, { data: aboutPage }] = await Promise.all([
    loadSettings(),
    loadAboutPage(),
  ]);

  const ogImage = urlForOpenGraphImage(settings?.ogImage);

  return {
    title: aboutPage?.title
      ? {
          template: `%s | ${aboutPage.title}`,
          default: aboutPage.title || 'About',
        }
      : undefined,
    description: aboutPage?.overview
      ? toPlainText(aboutPage.overview)
      : undefined,
    openGraph: {
      images: ogImage ? [ogImage] : [],
    },
  };
};

const AboutRoute = async () => {
  const initial = await loadAboutPage();

  if (draftMode().isEnabled) {
    return <AboutPagePreview initial={initial} />;
  }

  if (!initial.data) {
    notFound();
  }

  return <AboutPage data={initial.data} />;
};

export default AboutRoute;
