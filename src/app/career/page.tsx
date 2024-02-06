import { FiAlignCenter } from "react-icons/fi";
import Navbar from "@/Components/HeaderSection/widget/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Page() {
    return (
        <>
            <>
                <div className="hidden lg:block">
                    <Navbar />
                </div>
                {/* Mobile Version */}
                {/* <div className="lg:hidden">
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
                </div> */}
                {/*  */}
            </>
            <>Tertantang untuk menjadi bagian dari terobosan ini?</>
            <div className="lg:ml-[112px] lg:mr-[112px] lg:mt-[24px]  ml-[40px] mr-[40px] mt-[40px]">
                <span className="capitalize font-bold"> Pekerjaan yang tersedia :</span>
                <div className="justify-stretch">
                    <button className="mt-5 border border-current rounded-2xl flex w-full">
                        <span className="my-7 mx-5">1</span>
                        <div className="container my-3 flex flex-col space-y-1 h-full">
                            <span className="text-sm text-sky-400/100 flex">Engineering</span>
                            <span className="flex font-bold text-xl">Backend Developer</span>
                        </div>
                        <div className="container my-3 flex flex-col space-y-1">
                        
                            <div className="my-4 flex justify-center">
                                <FontAwesomeIcon icon={faBriefcase} className="h-5 w-5 mr-2"/>
                                Full Time
                                </div>
                        </div>
                        <div className="container my-3 flex flex-col space-y-1">
                            <div className="my-4 flex justify-center">
                            <FontAwesomeIcon icon={faLocationDot} className="h-5 w-5 mr-2"/>
                            Jakarta
                            </div>
                        </div>
                    </button>
                </div>
            </div>

        </>
    )
}