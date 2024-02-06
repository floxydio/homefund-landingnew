import Link from 'next/link';
import { FiAlignCenter, FiPlay } from 'react-icons/fi';
import { RxCross2 } from "react-icons/rx";

import { useState } from 'react';

export interface NavbarModel {
  head_title?: string;
  createdAt?: Date;
  updatedAt?: Date;
  publishedAt?: Date;
}

export interface NavbarMenu {
  id?: number;
  title?: string;
  link?: string;
}

export default function Navbar() {
  const [menuClicked, setMenuClicked] = useState(false);

  const handleMenuClicked = () => {
    setMenuClicked(!menuClicked);
  };



  return (
    <>
      <div className="hidden lg:block">
        <div className="navbar flex flex-row justify-between items-center mb-[50px]">
          <div className="left flex items-center">
            <Link className="text-2xl font-extrabold pr-[32px]" href="/">
              HomeFunding
            </Link>
            <span className="mr-[15px] font-semibold hover:cursor-pointer hover:text-[#4169E1]">
              Fitur
            </span>
            <span className="mr-[15px] font-semibold hover:cursor-pointer hover:text-[#4169E1]">
              Product
            </span>
            <span className="mr-[15px] font-semibold hover:cursor-pointer hover:text-[#4169E1]">
              Blog
            </span>
            <Link
              className="mr-[15px] font-semibold hover:cursor-pointer hover:text-[#4169E1]"
              href="/about"
            >
              Tentang Kami
            </Link>
            <Link
              className="mr-[15px] font-semibold hover:cursor-pointer hover:text-[#4169E1]"
              href="/career"
            >
              Karir
            </Link>
          </div>
          <div className="right flex flex-row items-center h-full">
          </div>
        </div>
      </div>
      {/* Mobile Version */}
      <div className="lg:hidden">
        <div className="ml-[10px] mr-[10px] mt-[20px]">
          <div className="flex flex-col">
            <div className="flex flex-row justify-between">
            <span className="text-2xl font-bold">HomeFunding</span>
            {/* <FiAlignCenter className="text-2xl hover:cursor-pointer" /> */}
            {menuClicked === false ? <FiAlignCenter
              onClick={handleMenuClicked}
              className="text-2xl hover:cursor-pointer" /> : <RxCross2
              onClick={handleMenuClicked}
              className="text-2xl hover:cursor-pointer" />}
          

            </div>
            <div className={`flex-col ${menuClicked === false ? 'hidden' : 'flex transition ease-in-out delay-150 duration-300 transform translate-y-0 opacity-100'}  justify-center text-center mt-5`}>
            <Link
              className="mr-[15px] font-semibold text-xl hover:cursor-pointer mt-3 hover:text-[#4169E1]"
              href="/"
            >
              Home
            </Link>
            <Link
              className="mr-[15px] font-semibold text-xl hover:cursor-pointer mt-3 hover:text-[#4169E1]"
              href="/about"
            >
              Tentang Kami
            </Link>
            <Link
              className="mr-[15px] font-semibold text-xl hover:cursor-pointer mt-3 hover:text-[#4169E1]"
              href="/career"
            >
              Karir
            </Link>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
    </>
  );
}
