import React from 'react';

import { EncodeDataAttributeCallback } from '@sanity/react-loader';

import ProjectCard from '@/components/parts/Projects/ProjectCard';
import { Header } from '@/components/shared/Header';
import RevealHeader from '@/components/shared/RevealHeader';
import { ProjectsPagePayload } from '@/types';

export interface ProjectsPageProps {
  data: ProjectsPagePayload | null;
  encodeDataAttribute?: EncodeDataAttributeCallback;
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({
  data,
  encodeDataAttribute,
}) => {
  const { title, overview, projectsList } = data ?? {};

  return (
    <section>
      <RevealHeader>
        <Header
          title={title}
          description={overview}
          headingClasses="my-4 text-4xl font-bold md:text-5xl"
          descriptionClasses="dark:!text-white"
        />
      </RevealHeader>

      <div className="grid gap-4 md:grid-cols-2 mt-16 sm:mt-24">
        {projectsList?.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            encodeDataAttribute={encodeDataAttribute}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
