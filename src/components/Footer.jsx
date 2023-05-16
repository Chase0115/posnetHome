import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import FooterBox from "./FooterBox";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import { BiPhoneCall, BiSupport } from "react-icons/bi";
import { FaLocationArrow } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='flex flex-col bg-black h-auto px-5'>
      <div className='flex-[9] grid lg:grid-cols-4 md:grid-cols-2 w-full max-w-[1240px] m-auto text-white gap-[4rem] py-20'>
        <div>
          <Image
            src='/public/assets/logo-0.png'
            alt='/'
            width={250}
            height={30}
          ></Image>
          <p className='mt-8 text-white/40 text-lg'>
            Our point of sale terminals are simple to setup and use, allowing
            for efficient and effective transactions as well as keeping your
            data secure and safe.
          </p>
          <div className='flex justify-start items-center gap-[1rem] mt-5 text-white/40'>
            <Link href='https://www.facebook.com/ecnesoft' target='_blank'>
              <AiFillFacebook size={30} />
            </Link>
            <Link href='https://twitter.com/ECNESOFTAU' target='_blank'>
              <AiOutlineTwitter size={30} />
            </Link>
            <Link href='https://www.instagram.com/ecnesoftau/'>
              <AiOutlineInstagram size={30} />
            </Link>
          </div>
        </div>
        <FooterBox
          heading='Company Group'
          items={["ECNESOFT", "POSNET", "POSBANK Australia"]}
        />
        <FooterBox
          heading='Site Map'
          items={["Hardware", "About", "Customers", "Contact"]}
        />
        <FooterBox
          heading='Contact'
          items={[
            <div key={0} className='flex items-center'>
              <BiPhoneCall size={25} />
              <span className='ml-2'> 1300 966 963</span>
            </div>,
            <div key={1} className='flex items-center'>
              <FaLocationArrow size={20} />
              <span className='ml-4'>
                14/20-30 Stubbs St <br /> Silverwater, NSW 2128
              </span>
            </div>,
            <div key={2} className='flex items-center'>
              <BiSupport size={25} />
              <span className='ml-3'>
                Technical Support
                <br />
                9am ~ 8pm
              </span>
            </div>,
          ]}
        />
      </div>
      <div className='flex-[1] flex items-center justify-center z-[2] bg-white/5 text-white/20'>
        &copy;COPYRIGHT 2023 - CHASE SIM PTY LTD. ALL RIGHTS RESERVED.
      </div>
    </div>
  );
};

export default Footer;
