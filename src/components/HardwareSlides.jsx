import React, { useState } from "react";
import { HardwareData } from "./HardwareData";
import Image from "next/legacy/image";
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";

const HardwareSlides = () => {
  const [currentHW, setCurrentHW] = useState(0);
  const length = HardwareData.length;

  const nextSlide = () => {
    setCurrentHW(currentHW === length-1 ? 0 : currentHW + 1);
  };
  const prevSlide = () => {
    setCurrentHW(currentHW === 0 ? length - 1 : currentHW - 1);
  };
  return (
    <div className='bg-white h-auto p-20'>
      <h1 className='text-center text-4xl font-bold mb-20'>Hardware</h1>
      <div className='relative max-w-[1240px] mx-auto justify-center p-4'>
        {HardwareData.map((hw, index) => {
          return (
            <div
              key={index}
              className={
                index === currentHW
                  ? "opacity-[1] ease-in duration-300"
                  : "opacity-0 h-0"
              }
            >
              <AiOutlineLeftCircle
                size={50}
                className='absolute top-0 left-0 z-10 h-full lg:opacity-40 md:opacity-0 cursor-pointer'
                onClick={prevSlide}
              />
              {index === currentHW && (
                <div className='grid lg:grid-cols-3 lg:grid-rows-1 md:grid-cols-1 md:grid-rows-2 gap-5'>
                  <div className='lg:col-span-2 md:col-span-1 md:border-0 lg:border-r-2 flex justify-center'>
                    <Image src={hw.image} alt='/' width={500} height={400} />
                  </div>
                  <div className='py-10 px-5'>
                    <h3 className='font-bold text-3xl mb-10'>{hw.name}</h3>
                    <div className='text-lg'>
                      Available Color:
                      <div className='mt-5 flex justify-center gap-3 border-2 w-[5rem] p-2'>
                        {hw.color.map((color, index) => (
                          <div
                            key={index}
                            className='w-5 h-5 rounded-full border-black border-2 border-dotted'
                            style={{ backgroundColor: color }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <AiOutlineRightCircle
                size={50}
                className='absolute top-0 right-0 z-10 h-full lg:opacity-40 md:opacity-0 cursor-pointer '
                onClick={nextSlide}
              />
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HardwareSlides;
