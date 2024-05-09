import { SiNextdotjs } from '@icons-pack/react-simple-icons';
import { Book } from '@styled-icons/boxicons-regular';

const CurrentlyLearnFramwork = () => {
  return (
    <div className="flex flex-col gap-6 p-4 rounded-xl shadow-feature-card dark:shadow-feature-card-dark lg:p-6">
      <div className="flex items-center gap-2">
        <Book className="size-[18px]" />
        <h2 className="text-sm font-light">Active learn</h2>
      </div>
      <div className="flex items-center justify-center">
        <SiNextdotjs size={80} className="text-zinc-800 dark:text-zinc-200" />
      </div>
    </div>
  );
};

export default CurrentlyLearnFramwork;
