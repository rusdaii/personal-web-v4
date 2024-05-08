'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

import { Separator } from '@/components/ui/separator'

import ThemeSwitch from '../ThemeSwitch'
import CommandMenu from './CommandMenu'
import NavigationLink from './NavigationLink'
import MobileNav from './MobileNav'

const Navbar = () => {
  return (
    <motion.header
      className="container fixed top-4 inset-x-0"
      initial={{
        y: -100,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 0.3,
      }}
    >
      <div className="flex justify-between px-8 items-center bg-background/30 h-[60px] rounded-2xl  shadow-sm saturate-100 backdrop-blur-[10px] transition-colors">
        <Link href="/">Logo</Link>
        <div className="flex items-center gap-2">
          <NavigationLink />
          <Separator orientation="vertical" className="h-6" />
          <ThemeSwitch />
          <CommandMenu />
          <MobileNav />
        </div>
      </div>
    </motion.header>
  )
}

export default Navbar
