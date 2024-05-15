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

export interface ProjectList extends Array<ShowcaseProject> {}

// Page payloads

export interface HomePagePayload {
  overview?: PortableTextBlock[];
  showcaseProjects?: ShowcaseProject[];
  title?: string;
  logo?: Image;
}

export interface ProjectsPagePayload {
  title?: string;
  overview?: PortableTextBlock[];
  projectsList?: ProjectList;
}

export interface AboutPagePayload {
  overview?: PortableTextBlock[];
  title?: string;
  aboutMe?: PortableTextBlock[];
}

export interface ProjectPayload {
  coverImage?: Image;
  description?: PortableTextBlock[];
  overview?: PortableTextBlock[];
  site?: string;
  source?: string;
  slug: string;
  tags?: string[];
  title?: string;
}

export interface SlugProjectsQuery {
  slug: string;
  _updatedAt: string;
}

export interface SettingsPayload {
  ogImage?: Image;
}

export interface ResumePayload {
  pdfFile?: File;
  resumeUrl?: string;
}
