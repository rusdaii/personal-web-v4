import React from 'react';

import { ClockIcon } from 'lucide-react';
import useSWR from 'swr';

import { fetcher } from '@/lib/fetcher';
import { type Wakatime } from '@/types/api';

const CodingHours = () => {
  const { data: wakatimeData } = useSWR<Wakatime>('/api/wakatime', fetcher, {
    refreshInterval: 1000 * 60 * 60 * 5,
  });

  const capturedTime = wakatimeData?.seconds
    ? Math.round(wakatimeData.seconds / 60 / 60) + 1800 // time since using wakatime + time spent before using wakatime
    : '--';

  return (
    <div className="flex flex-col gap-6 p-4 rounded-xl shadow-feature-card dark:shadow-feature-card-dark lg:p-6">
      <div className="flex items-center gap-2">
        <ClockIcon className="size-[18px]" />
        <h2 className="text-sm font-light">Coding hours</h2>
      </div>
      <div className="flex items-center justify-center text-4xl font-semibold grow font-title">
        {capturedTime} hrs
      </div>
    </div>
  );
};

export default CodingHours;
