import {
  type IconType,
  SiGithub,
  SiInstagram,
  SiX,
  SiLinkedin,
} from '@icons-pack/react-simple-icons';
import { CodeAlt } from '@styled-icons/boxicons-regular';
import { BookIcon, HomeIcon, UserIcon } from 'lucide-react';

type NavigationLinks = Array<{
  icon: React.ReactNode;
  href: string;
  text: string;
}>;

type SocialLinks = Array<{
  href: string;
  title: string;
  icon: IconType;
}>;

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

export const SOCIAL_LINKS: SocialLinks = [
  {
    href: 'https://github.com/rusdaii',
    title: 'GitHub',
    icon: SiGithub,
  },
  {
    href: 'https://linkedin.com/in/rusdaii/',
    title: 'LinkedIn',
    icon: SiLinkedin,
  },
  {
    href: 'https://www.instagram.com/rusdaii/',
    title: 'Instagram',
    icon: SiInstagram,
  },
  {
    href: 'https://x.com/rusdaii',
    title: 'X',
    icon: SiX,
  },
];
