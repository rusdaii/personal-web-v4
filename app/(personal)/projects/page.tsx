import { loadProjectsPage } from '@/sanity/loader/loadQuery';

const ProjectRoute = async () => {
  const initial = await loadProjectsPage();

  console.log(initial.data);

  return <div>ProjectRoute</div>;
};

export default ProjectRoute;
