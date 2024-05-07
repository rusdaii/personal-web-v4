import '../styles/globals.css'

import { GeistSans } from 'geist/font/sans'

import Providers from '@/components/global/Providers'
import { cn } from '@/lib/utils'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable}`}
    >
      <body className={cn(' antialiased')}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
