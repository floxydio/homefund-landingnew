import Link from 'next/link';
import { FiAlignCenter, FiPlay } from 'react-icons/fi';

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

export default function Navbar({
  dataNavbar,
  dataNavbarMenu,
}: {
  dataNavbar: NavbarModel[];
  dataNavbarMenu: NavbarMenu[];
}) {
  return (
    <>
      <div className="hidden lg:block">
        <div className="navbar flex flex-row justify-between items-center mb-[50px]">
          <div className="left flex items-center">
            {dataNavbar === undefined || null ? (
              <h2 className="text-2xl font-extrabold pr-[32px]">HomeFunding</h2>
            ) : (
              dataNavbar.map((data, i) => {
                return (
                  <h2 className="text-2xl font-extrabold pr-[32px]">
                    {data.head_title}
                  </h2>
                );
              })
            )}
            {dataNavbarMenu === undefined || null ? (
              <>
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
              </>
            ) : (
              dataNavbarMenu.map((data) => {
                return (
                  <Link
                    className="mr-[15px] font-semibold hover:cursor-pointer hover:text-[#4169E1]"
                    href={`${data.link}`}
                  >
                    {data.title}
                  </Link>
                );
              })
            )}
          </div>
          <div className="right flex flex-row items-center h-full">
            {/* Button daftar */}
            {/* <div className="bg-[#4169E1] w-[100px] text-white text-center h-[40px] rounded-[8px] flex justify-center items-center">
                            <span className="text-white font-bold">Daftar</span>
                        </div> */}
          </div>
        </div>
      </div>
      {/* Mobile Version */}
      <div className="lg:hidden">
        <div className="navbar flex flex-row justify-between items-center">
          <div className="left lg:flex items-center">
            <h2 className="text-2xl font-bold pr-[32px]">HomeFunding</h2>
            <span className="mr-[15px] font-semibold hover:cursor-pointer hidden">
              Fitur
            </span>
            <span className="mr-[15px] font-semibold hover:cursor-pointer hidden">
              Product
            </span>
            <span className="mr-[15px] font-semibold hover:cursor-pointer hidden">
              Blog
            </span>
            <span className="mr-[15px] font-semibold hover:cursor-pointer hidden ">
              Bantuan
            </span>
            {/* <Link
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
            </Link> */}
          </div>
          <div className="right">
            <FiAlignCenter className="text-2xl hover:cursor-pointer" />
          </div>
        </div>
      </div>
      {/*  */}
    </>
  );
}
