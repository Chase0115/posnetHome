import React from "react";

import { HiLocationMarker, HiPhone } from "react-icons/hi";

const Contact = () => {
  return (
    <div
      id='contact'
      className='flex-col items-center justify-center h-auto bg-fixed bg-center bg-cover contact-img py-20 px-5'
    >
      {/* Overlay */}
      <div></div>
      <h1 className='text-center text-4xl font-bold mb-10'>Contact</h1>
      <div className='grid grid-cols-1 lg:grid-cols-2 grid-rows-1 gap-5 place-items-center max-w-[1240px] mx-auto'>
        <div>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.999496552386!2d151.03461331203005!3d-33.83812361736032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a351b6e059ad%3A0xe79fbd5405de853c!2sPOSNET!5e0!3m2!1sen!2sau!4v1683964539619!5m2!1sen!2sau'
            className='w-full h-[300px] md:w-[500px] md:h-[400px] rounded-lg items-center'
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
          <div>
            <div className='grid grid-cols-2 my-5'>
              <div>
                <p className='text-xl'>
                  {" "}
                  <HiLocationMarker
                    size={25}
                    className='text-red-600 inline mr-3'
                  />
                  ADDRESS:
                </p>
                <p className='pl-8'>
                  14/20-30 Stubbs St Silverwater,
                  <br /> NSW 2128
                </p>
              </div>
              <div>
                <p className='text-xl'>
                  <HiPhone size={25} className='text-red-600 inline mr-3' />
                  PHONE:
                </p>
                <p className='pl-8 '>1300 966 963</p>
              </div>
            </div>
          </div>
        </div>
        <form className='flex flex-col'>
          <label htmlFor='name'>Name *</label>
          <div className='grid grid-cols-2 gap-2'>
            <input type='text' name='fname' placeholder='First Name' />
            <input type='text' name='lname' placeholder='Last Name' />
          </div>
          <label htmlFor='mobile'>Mobile *</label>
          <input type='text' name='mobile' placeholder='0400 000 000' />
          <label htmlFor='email'>Email *</label>
          <input type='text' name='email' placeholder='example@expample.com' />
          <label htmlFor='name'>Message *</label>
          <textarea rows={8} placeholder='message...' />
          <input
            type='submit'
            value='Send'
            className=' border-2 mt-3 w-[8rem] bg-red-600 text-white text-xl font-bold self-end cursor-pointer'
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
