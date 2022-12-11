import React from 'react';
import { FiAperture } from 'react-icons/fi';

const LoaderPrimary = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <FiAperture className="  text-6xl animate-spin text-[#64feda]" />
    </div>
  );
};

export default LoaderPrimary;
