import React from 'react';

import { SiSpotify } from '@icons-pack/react-simple-icons';
import Link from 'next/link';
import useSWR from 'swr';

import { fetcher } from '@/lib/fetcher';
import { Song } from '@/types/api';

const SpotifyNowPlaying = () => {
  const { data, isLoading } = useSWR<Song>('/api/spotify', fetcher, {
    refreshInterval: 5000,
  });

  return (
    <div className="flex items-center gap-4">
      <SiSpotify fill="#1DB954" aria-label="Spotify" />

      <div className="inline-flex w-full items-center justify-center gap-1 text-sm md:justify-start">
        <p>
          {isLoading && 'Loading ...'}
          {!isLoading &&
            (data?.isPlaying && data.songUrl ? (
              <Link href={data.songUrl}>
                {data.name} - {data.artist}
              </Link>
            ) : (
              'Not Listening - Spotify'
            ))}
        </p>
      </div>
    </div>
  );
};

export default SpotifyNowPlaying;
