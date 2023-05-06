import React from "react";
import Image from "next/legacy/image";

const Hero = ({ heading, message }) => {
  return (
    <div className='flex items-center h-screen pd-12 bg-fixed bg-contain custom-img px-5'>
      {/*Overlay*/}
      <div className='absolute top-0 bottom-0 left-0 right-0 z-[2] '></div>
      <div className='flex justify-center m-auto'>
        <div className='max-w-[40rem] mt-[5rem]'>
          <h2 className='text-4xl font-bold mb-9'>{heading}</h2>
          <p className='text-lg'>{message}</p>
        </div>
        <div className='hidden md:block'>
          <Image
            src='/assets/Business_1.png'
            alt='/'
            width={500}
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
