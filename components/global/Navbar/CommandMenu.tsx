import React from 'react';

import { SiGithub, SiLinkedin, SiX } from '@icons-pack/react-simple-icons';
import { Command, Link } from '@styled-icons/boxicons-regular';

import { Button } from '@/components/ui/button';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';

type Groups = Array<{
  name: string;
  actions: Array<{
    title: string;
    icon: React.ReactNode;
    onSelect: () => void | Promise<void>;
  }>;
}>;

const CommandMenu = () => {
  const [open, setOpen] = React.useState(false);
  const [copy] = useCopyToClipboard();

  const openLink = React.useCallback((url: string) => {
    setOpen(false);
    window.open(url, '_blank', 'noopener noreferrer');
  }, []);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const groups: Groups = [
    {
      name: 'General',
      actions: [
        {
          title: 'Copy link',
          icon: <Link className="mr-3 size-4" />,
          onSelect: async () => {
            setOpen(false);

            await copy({
              text: window.location.href,
              successMessage: (
                <div className="flex flex-col">
                  <div>Copied</div>
                  <div className="text-sm text-muted-foreground">
                    You can now share it with anyone.
                  </div>
                </div>
              ),
            });
          },
        },
      ],
    },
    {
      name: 'Social',
      actions: [
        {
          title: 'Github',
          icon: <SiGithub className="mr-3 size-4" />,
          onSelect: () => openLink('https://github.com/rusdaii'),
        },
        {
          title: 'Twitter',
          icon: <SiX className="mr-3 size-4" />,
          onSelect: () => openLink('https://twitter.com/rusdaii'),
        },
        {
          title: 'LinkedIn',
          icon: <SiLinkedin className="mr-3 size-4" />,
          onSelect: () => openLink('https://www.linkedin.com/in/rusdaii'),
        },
        {
          title: 'Email',
          icon: <Link className="mr-3 size-4" />,
          onSelect: () => openLink('mailto:  '),
        },
      ],
    },
  ];

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        aria-label="Command menu"
        onClick={() => setOpen(true)}
        className="focus-visible:ring-0 focus-visible:outline-none focus-visible:ring-offset-0"
      >
        <Command className="size-4" />
        <span className="sr-only">Command menu</span>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>
            No results found for <strong>command</strong>
          </CommandEmpty>
          {groups.map((group, i) => (
            <React.Fragment key={group.name}>
              <CommandGroup heading={group.name}>
                {group.actions.map((action) => (
                  <CommandItem
                    key={action.title}
                    onSelect={action.onSelect}
                    className={`${group.name === 'Social' ? 'cursor-pointer' : 'cursor-default'}`}
                  >
                    {action.icon}
                    {action.title}
                  </CommandItem>
                ))}
              </CommandGroup>
              {i !== groups.length - 1 && <CommandSeparator />}
            </React.Fragment>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default CommandMenu;
