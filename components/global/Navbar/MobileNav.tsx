import { Menu } from '@styled-icons/boxicons-regular';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { NAVIGATION_LINKS } from '@/lib/constants/links';

const MobileNav = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Toggle menu"
          className="focus-visible:ring-0 focus-visible:outline-none focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="size-4" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-52">
        {NAVIGATION_LINKS.map((link) => (
          <DropdownMenuItem key={link.text} asChild>
            <Link href={link.href} className="flex items-center gap-4">
              {link.icon}
              <div>{link.text}</div>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MobileNav;
