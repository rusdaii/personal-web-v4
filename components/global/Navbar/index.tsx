'use client';
import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import ThemeSwitch from '@/components/global/ThemeSwitch';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

import CommandMenu from './CommandMenu';
import MobileNav from './MobileNav';
import NavigationLink from './NavigationLink';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    document.addEventListener('scroll', changeBackground);

    return () => document.removeEventListener('scroll', changeBackground);
  }, []);

  return (
    <motion.header
      className={cn(
        `fixed inset-x-0 top-4 px-8 z-40 mx-auto flex h-[60px] max-w-5xl items-center justify-between rounded-2xl 
        bg-background/30 shadow-sm saturate-100 backdrop-blur-[10px] transition-colors`,
        isScrolled && 'bg-background/80'
      )}
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
      <Link href="/">
        <span className="sr-only">Homepage</span>
        <Image
          src="/images/logo.png"
          alt="rusdaii logo"
          width={100}
          height={100}
          className="rounded-full w-7 h-7 md:w-9 md:h-9"
        />
      </Link>
      <div className="flex items-center gap-2">
        <NavigationLink />
        <Separator orientation="vertical" className="h-6" />
        <ThemeSwitch />
        <CommandMenu />
        <MobileNav />
      </div>
    </motion.header>
  );
};

export default Navbar;
