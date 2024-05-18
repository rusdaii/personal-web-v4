import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { draftMode } from 'next/headers';
import Link from 'next/link';
import { toPlainText } from 'next-sanity';

import ProjectsPage from '@/components/pages/projectsPage/ProjectsPage';
import { studioUrl } from '@/sanity/lib/api';
import { loadProjectsPage } from '@/sanity/loader/loadQuery';

const ProjectsPagePreview = dynamic(
  () => import('@/components/pages/projectsPage/ProjectsPagePreview')
);

export const generateMetadata = async (): Promise<Metadata> => {
  const { data: projectsPage } = await loadProjectsPage();

  return {
    title: projectsPage?.title
      ? {
          template: `%s | ${projectsPage.title}`,
          default: projectsPage.title || 'Projects',
        }
      : undefined,
    description: projectsPage?.overview
      ? toPlainText(projectsPage.overview)
      : undefined,
  };
};

const ProjectRoute = async () => {
  const initial = await loadProjectsPage();

  if (draftMode().isEnabled) {
    return <ProjectsPagePreview initial={initial} />;
  }

  if (!initial.data) {
    return (
      <div className="text-center">
        You don&rsquo;t have a projects page yet,{' '}
        <Link href={`${studioUrl}/desk/home`} className="underline">
          create one now
        </Link>
        !
      </div>
    );
  }

  return <ProjectsPage data={initial.data} />;
};

export default ProjectRoute;
