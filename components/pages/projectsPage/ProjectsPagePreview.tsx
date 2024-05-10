import React from 'react';

import { QueryResponseInitial } from '@sanity/react-loader';

import { projectsPageQuery } from '@/sanity/lib/queries';
import { useQuery } from '@/sanity/loader/useQuery';
import { ProjectsPagePayload } from '@/types';

import ProjectsPage from './ProjectsPage';

type ProjectsPagePreviewProps = {
  initial: QueryResponseInitial<ProjectsPagePayload | null>;
};

const ProjectsPagePreview: React.FC<ProjectsPagePreviewProps> = ({
  initial,
}) => {
  const { data, encodeDataAttribute } = useQuery<ProjectsPagePayload | null>(
    projectsPageQuery,
    {},
    { initial }
  );

  if (!data) {
    return (
      <div className="text-center">
        Please start editing your Projects document to see the preview!
      </div>
    );
  }

  return <ProjectsPage data={data} encodeDataAttribute={encodeDataAttribute} />;
};

export default ProjectsPagePreview;
