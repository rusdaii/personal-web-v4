import '@/styles/globals.css';

import { GeistSans } from 'geist/font/sans';

import { calsans } from '@/assets/font/calsans';
import Providers from '@/components/global/Providers';
import { Toaster } from '@/components/ui/sonner';
import { cn } from '@/lib/utils';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${calsans.variable} scroll-smooth`}
    >
      <body className={cn('antialiased')}>
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
