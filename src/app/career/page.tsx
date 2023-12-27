import { FiAlignCenter } from "react-icons/fi";
import Link from "next/link";

export default function Page() {
    return (
        <>
            <>
                <div className="hidden lg:block">
                    <div className="navbar flex flex-row justify-between items-center mb-[50px]">
                        <div className="left flex items-center">
                            <h2 className="text-2xl font-extrabold pr-[32px]">HomeFunding</h2>
                            <span className="mr-[15px] font-semibold hover:cursor-pointer hover:text-[#4169E1]">Fitur</span>
                            <span className="mr-[15px] font-semibold hover:cursor-pointer hover:text-[#4169E1]">Product</span>

                            <span className="mr-[15px] font-semibold hover:cursor-pointer hover:text-[#4169E1]">Blog</span>
                            <span className="mr-[15px] font-semibold hover:cursor-pointer hover:text-[#4169E1]">Tentang Kami</span>
                            <Link className="mr-[15px] font-semibold hover:cursor-pointer hover:text-[#4169E1]" href="/career">Karir</Link>
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
                            <span className="mr-[15px] font-semibold hover:cursor-pointer hidden">Fitur</span>
                            <span className="mr-[15px] font-semibold hover:cursor-pointer hidden">Product</span>
                            <span className="mr-[15px] font-semibold hover:cursor-pointer hidden">Blog</span>
                            <span className="mr-[15px] font-semibold hover:cursor-pointer hidden ">Bantuan</span>
                        </div>
                        <div className="right">
                            <FiAlignCenter className="text-2xl hover:cursor-pointer" />
                        </div>
                    </div>
                </div>
                {/*  */}
            </>
            <>Tertantang untuk menjadi bagian dari terobosan ini?</>
            <div className="lg:ml-[112px] lg:mr-[112px] lg:mt-[24px]  ml-[40px] mr-[40px] mt-[40px]">
                <span className="capitalize font-bold"> Pekerjaan yang tersedia :</span>
                <div className="justify-stretch">
                    <button className="mt-5 border border-current rounded-2xl flex w-full">
                        <span className="my-7 mx-5">1</span>
                        <div className="my-3 flex flex-col space-y-1">
                            <span className="text-sm text-slate-800 flex">Engineering</span>
                            <span className="flex font-bold text-xl">Backend Developer</span>
                        </div>
                    </button>
                </div>
            </div>

        </>
    )
}