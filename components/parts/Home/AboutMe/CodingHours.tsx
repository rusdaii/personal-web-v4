import React from 'react';

import { ClockIcon } from 'lucide-react';
import useSWR from 'swr';

import { fetcher } from '@/lib/fetcher';
import { type Wakatime } from '@/types/api';

const CodingHours = () => {
  const { data: wakatimeData } = useSWR<Wakatime>('/api/wakatime', fetcher);

  const capturedTime = wakatimeData?.seconds
    ? Math.round(wakatimeData.seconds / 60 / 60)
    : 0;

  const nonCapturedTime = 2348;

  const totalTime = capturedTime + nonCapturedTime;

  return (
    <div className="flex flex-col gap-6 p-4 rounded-xl shadow-feature-card dark:shadow-feature-card-dark lg:p-6">
      <div className="flex items-center gap-2">
        <ClockIcon className="size-[18px]" />
        <h2 className="text-sm font-light">Coding hours</h2>
      </div>
      <div className="flex items-center justify-center text-4xl font-semibold grow font-title">
        {totalTime} hrs
      </div>
    </div>
  );
};

export default CodingHours;
