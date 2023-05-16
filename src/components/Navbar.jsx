import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isnav, setNav] = useState(false);
  const [color, setColor] = useState("#fffffff");

  const handleNav = () => {
    setNav(!isnav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("rgba(255,255,255,0.7)");
      } else {
        setColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className='fixed w-full left-0 top-0 pt-5 items-center duration-300 ease-in z-10'
    >
      <div className='flex justify-between items-center max-w-[1240px] p-8 mt-[-10px] m-auto'>
        <Link href='/'>
          <Image
            src='../public/assets/logo-header.png'
            alt='/'
            width={240}
            height={20}
          />
        </Link>

        <ul className='hidden md:flex'>
          <li className='text-xl font-bold cursor-pointer mr-7'>
            <Link href='/#home' scroll={false}>
              Home
            </Link>
          </li>
          <li className='text-xl font-bold cursor-pointer mr-7'>
            <Link href='/#about' scroll={false}>
              About
            </Link>
          </li>
          <li className='text-xl font-bold cursor-pointer mr-7'>
            <Link href='/#hardware' scroll={false}>
              Hardware
            </Link>
          </li>

          <li className='text-xl font-bold cursor-pointer'>
            <Link href='/#contact' scroll={false}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile button */}
        <div className='block md:hidden z-10' onClick={handleNav}>
          {isnav ? (
            <AiOutlineClose size={20} style={{ color: "black" }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: "black" }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            isnav
              ? "md:hidden absolute top-0 right-0 flex justify-center items-center w-[15rem] h-[40rem] bg-white/[.7] text-center ease-in duration-300"
              : "md:hidden absolute top-[-40rem] right-0 flex justify-center items-center w-[15rem] h-[40rem] bg-white/[0] text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className='p-4 text-3xl hover:text-gray-500'
            >
              <Link href='/#home' scroll={false}>
                Home
              </Link>
            </li>
            <li
              onClick={handleNav}
              className='p-4 text-3xl hover:text-gray-500'
            >
              <Link href='/#about'>About</Link>
            </li>
            <li
              onClick={handleNav}
              className='p-4 text-3xl hover:text-gray-500'
            >
              <Link href='/#hardware'>Hardware</Link>
            </li>

            <li
              onClick={handleNav}
              className='p-4 text-3xl hover:text-gray-500'
            >
              <Link href='/#contact' scroll={false}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
