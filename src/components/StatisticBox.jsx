import React from "react";

const StatisticBox = ({ icon, desc, numbers }) => {
  return (
    <div className='flex items-center w-[20rem] bg-red-600 p-5 rounded-lg drop-shadow-[0_15px_15px_rgba(0,0,0,0.5)]'>
      <div className='bg-red-600 mr-4 text-8xl text-white'>{icon}</div>
      <div className='text-white'>
        <p className='text-lg font-medium'>{desc}</p>
        <p className='text-4xl text-center font-bold'>{numbers} +</p>
      </div>
    </div>
  );
};

export default StatisticBox;
