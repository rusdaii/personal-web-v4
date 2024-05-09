import type { PortableTextBlock } from 'next-sanity';
import type { Image } from 'sanity';

export interface ShowcaseProject {
  _type: string;
  coverImage?: Image;
  overview?: PortableTextBlock[];
  slug?: string;
  tags?: string[];
  title?: string;
}

// Page payloads

export interface HomePagePayload {
  overview?: PortableTextBlock[];
  showcaseProjects?: ShowcaseProject[];
  title?: string;
  logo?: Image;
}

export interface AboutPagePayload {
  overview?: PortableTextBlock[];
  title?: string;
}

export interface ProjectPayload {
  client?: string;
  coverImage?: Image;
  description?: PortableTextBlock[];
  duration?: {
    start?: string;
    end?: string;
  };
  overview?: PortableTextBlock[];
  site?: string;
  slug: string;
  tags?: string[];
  title?: string;
}

export interface SettingsPayload {
  ogImage?: Image;
}
