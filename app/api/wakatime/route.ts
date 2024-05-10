import { NextResponse } from 'next/server';

export const runtime = 'edge';

export const GET = async () => {
  const res = await fetch(
    'https://wakatime.com/api/v1/users/current/all_time_since_today',
    {
      headers: {
        Authorization: `Basic ${process.env.WAKATIME_API_KEY}`,
      },
      next: {
        revalidate: 60 * 60 * 5,
      },
    }
  );

  const {
    data: { total_seconds },
  } = await res.json();

  return NextResponse.json({
    seconds: total_seconds,
  });
};
