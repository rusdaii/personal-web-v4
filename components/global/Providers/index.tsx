'use client'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'
import React from 'react'

type ProvidersProps = {
  children: React.ReactNode
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  )
}

export default Providers
