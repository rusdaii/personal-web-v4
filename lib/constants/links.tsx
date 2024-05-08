import { CodeAlt } from '@styled-icons/boxicons-regular';
import { BookIcon, HomeIcon, UserIcon } from 'lucide-react';

type NavigationLinks = Array<{
  icon: React.ReactNode
  href: string
  text: string
}>

export const NAVIGATION_LINKS: NavigationLinks = [
  {
    icon: <HomeIcon className="size-4" />,
    href: '/',
    text: 'Home',
  },
  {
    icon: <BookIcon className="size-4" />,
    href: '/blog',
    text: 'Blog',
  },
  {
    icon: <CodeAlt className="size-4" />,
    href: '/projects',
    text: 'Projects',
  },
  {
    icon: <UserIcon className="size-4" />,
    href: '/about',
    text: 'About',
  },
];
