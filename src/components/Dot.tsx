import React from 'react';

interface DotProps {
  color: string;
}

export const Dot: React.FC<DotProps> = ({ color }) => {
  return (
    <div style={{ backgroundColor: color }} className='w-2 h-2 bg-red-800 rounded-full' />
  );
};
