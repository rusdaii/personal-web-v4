import {
  SiAmazonaws,
  SiCloudinary,
  SiCss3,
  SiDocker,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVisualstudiocode,
  SiWindows11,
} from '@icons-pack/react-simple-icons';

type TechStacksType = {
  name: string;
  icon: React.ReactElement;
}[];

export const TECH_STACKS: TechStacksType = [
  {
    name: 'HTML',
    icon: <SiHtml5 className="size-10" />,
  },
  {
    name: 'CSS',
    icon: <SiCss3 className="size-10" />,
  },
  {
    name: 'Node.js',
    icon: <SiNodedotjs className="size-10" />,
  },
  {
    name: 'Javascript',
    icon: <SiJavascript className="size-10" />,
  },
  {
    name: 'Typescript',
    icon: <SiTypescript className="size-10" />,
  },
  {
    name: 'React',
    icon: <SiReact className="size-10" />,
  },
  {
    name: 'Next.js',
    icon: <SiNextdotjs className="size-10" />,
  },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss className="size-10" />,
  },
  {
    name: 'PostgreSQL',
    icon: <SiPostgresql className="size-10" />,
  },
];

export const TOOL_STACKS: TechStacksType = [
  {
    name: 'Git',
    icon: <SiGit className="size-10" />,
  },
  {
    name: 'Github',
    icon: <SiGithub className="size-10" />,
  },
  {
    name: 'VS Code',
    icon: <SiVisualstudiocode className="size-10" />,
  },
  {
    name: 'Prisma',
    icon: <SiPrisma className="size-10" />,
  },
  {
    name: 'Express',
    icon: <SiExpress className="size-10" />,
  },
  {
    name: 'Docker',
    icon: <SiDocker className="size-10" />,
  },
  {
    name: 'Amazon Web Services',
    icon: <SiAmazonaws className="size-10" />,
  },
  {
    name: 'Cloudinary',
    icon: <SiCloudinary className="size-10" />,
  },
  {
    name: 'Vercel',
    icon: <SiVercel className="size-10" />,
  },
  {
    name: 'Linux',
    icon: <SiLinux className="size-10" />,
  },
  {
    name: 'Windows',
    icon: <SiWindows11 className="size-10" />,
  },
];
