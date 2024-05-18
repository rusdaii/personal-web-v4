import React from 'react';

type GridBackgroundProps = {
  children: React.ReactNode;
};

const GridBackground: React.FC<GridBackgroundProps> = ({ children }) => {
  return (
    <div className="h-dvh w-full dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      {children}
    </div>
  );
};

export default GridBackground;
