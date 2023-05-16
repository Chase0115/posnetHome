import React from "react";
import StatisticBox from "./StatisticBox";
import { RiCustomerService2Fill } from "react-icons/ri";
import { HiDesktopComputer } from "react-icons/hi";
import { BsFillBuildingFill } from "react-icons/bs";

const Statistics = () => {
  return (
    <div id='about' className='py-12 z-[2] h-auto bg-white/50 px-10'>
      <div className='flex flex-col justify-center items-center h-full max-w-[1240px] m-auto'>
        <h1 className='text-4xl font-bold mb-5'>POSNET</h1>
        <p className='max-w-[860px] mb-10 text-xl'>
          Our company provides quality point of sale hardware and exceptional
          customer support to meet the unique needs of businesses in various
          industries. With a large customer base,{" "}
          <b>
            responsive technical support team, and expertise in handling
            franchise client&apos;s data.
          </b>
        </p>
        <div className='grid lg:grid-cols-3 gap-x-[5rem] md:grid-cols-1 gap-y-5'>
          <StatisticBox
            icon={<HiDesktopComputer />}
            desc='POS Installation'
            numbers='2000'
          />
          <StatisticBox
            icon={<RiCustomerService2Fill />}
            desc='Technical Support'
            numbers='55000'
          />
          <StatisticBox
            icon={<BsFillBuildingFill />}
            desc='Franchise Client'
            numbers='20'
          />
        </div>
      </div>
    </div>
  );
};

export default Statistics;
