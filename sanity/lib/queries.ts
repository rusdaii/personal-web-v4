import { groq } from 'next-sanity';

export const homePageQuery = groq`
  *[_type == "home"][0]{
    _id,
    overview,
    showcaseProjects[]->{
      _type,
      coverImage,
      overview,
      "slug": slug.current,
      tags,
      title,
    },
    title,
    logo,
  }
`;

export const projectsPageQuery = groq`
  *[_type == "projects"][0]{
    _id,
    title,
    overview,
    projectsList[]->{
      _type,
      coverImage,
      overview,
      "slug": slug.current,
      tags,
      title,
    },
  }
  `;

export const aboutPageQuery = groq`
  *[_type == "about"][0]{
    _id,
    overview,
    title,
  }
`;

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    coverImage,
    description,
    overview,
    site,
    source,
    "slug": slug.current,
    tags,
    title,
  }
`;

export const settingsQuery = groq`
  *[_type == "settings"][0]{
    ogImage,
  }
`;
