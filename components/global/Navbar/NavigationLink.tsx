import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { NAVIGATION_LINKS } from '@/lib/constants/links';
import { cn } from '@/lib/utils';

const NavigationLink = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="hidden space-x-2 md:flex">
        {NAVIGATION_LINKS.map((link) => {
          const isActive = link.href === pathname;
          return (
            <li
              key={link.text}
              className="relative flex h-[60px] items-center justify-center"
            >
              <Link
                className={cn(
                  'rounded px-3 py-2 text-sm font-medium transition-colors',
                  {
                    ['text-muted-foreground hover:text-foreground']: !isActive,
                  },
                  {
                    ['text-foreground']: isActive,
                  }
                )}
                href={link.href}
              >
                {link.text}
              </Link>
              {isActive && (
                <>
                  <div className="absolute bottom-0 left-1/2 h-px w-12 -translate-x-1/2 bg-nav-link-indicator dark:bg-nav-link-indicator-dark" />
                </>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavigationLink;
