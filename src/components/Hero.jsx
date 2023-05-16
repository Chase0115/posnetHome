import React from "react";
import Image from "next/legacy/image";
import AnimatedTextWord from "@/styles/AnimatedTextWord";
import { prefix } from "@/config/config";

const Hero = ({ heading, message }) => {
  return (
    <div
      id='home'
      className='flex items-center h-screen pd-12 bg-fixed bg-contain px-5'
      style={{ backgroundImage: `url(${prefix}/assets/company_bg.jpg)`}}
    >
      {/*Overlay*/}
      <div className='absolute top-0 bottom-0 left-0 right-0 z-[2] '></div>
      <div className='flex justify-center m-auto'>
        <div className='max-w-[40rem] mt-[5rem]'>
          <h2 className='hidden md:block md:text-4xl md:font-bold md:mb-9'>
            <AnimatedTextWord text={heading} />
          </h2>
          <h2 className='text-3xl font-bold mb-9 md:hidden'>
            <AnimatedTextWord text='More than just a POS,' />
            <AnimatedTextWord text='POSNET' />
          </h2>
          <p className='text-lg'>{message}</p>
        </div>
        <div className='hidden md:block'>
          <Image
            src={`${prefix}/assets/Business_1.png`}
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
