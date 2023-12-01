import { FiAlignCenter, FiPlay } from "react-icons/fi";

export default function Section() {
    return (
        <>
            <div className="hidden lg:flex lg:mt-[30px] lg:h-[640px] flex-row justify-between">
                <div className="div mt-[96px] w-[696px]">
                    <span className="text-[60px] font-bold">
                        Belajar Investasi rumah, Makin Seru!
                    </span>
                    <p className="text-[18px] mt-[10px]">HomeFunding adalah aplikasi investasi berbasis crowd funding untuk investasi rumah dan bisnis untuk semua orang dengan start invest yang rendah serta periode imbal hasil yang cepat. Solusi terbaik untuk memulai investasi properti kamu. </p>
                    <div className="mt-[32px] flex flex-row items-center">
                        <div className="bg-[#4169E1] w-[138px] text-white text-center h-[56px] rounded-[8px] flex justify-center items-center">
                            <span className="text-white font-bold">Try Beta</span>
                        </div>
                        <div className="ml-[16px] flex items-center">
                            <div>
                                <FiPlay className="text-[#4169E1] text-2xl" />
                            </div>
                            <span className="text-[#4169E1] ml-[8px]">Watch Video</span>
                        </div>
                    </div>
                </div>
                <img src="/vector.png" alt="mockup" height={640} className="mr-[40px]" />
            </div>

            <div className="lg:hidden lg:mt-[30px] lg:h-[640px] flex-row justify-between">
                <div className="div mt-[100px] w-full">
                    <span className="text-[36px] font-bold">
                        Belajar Investasi rumah, Makin Seru!
                    </span>
                    <p className="text-[18px] mt-[10px] w-full">HomeFunding adalah aplikasi investasi berbasis crowd funding untuk investasi rumah dan bisnis untuk semua orang dengan start invest yang rendah serta periode imbal hasil yang cepat. Solusi terbaik untuk memulai investasi properti kamu.</p>
                    <div className="mt-[32px] flex flex-row items-center justify-between mb-10">
                        <div className="bg-[#4169E1] w-[138px] text-white text-center h-[56px] rounded-[8px] flex justify-center items-center">
                            <span className="text-white font-bold">Try Beta</span>
                        </div>
                        <div className="ml-[16px] flex items-center">
                            <div>
                                <FiPlay className="text-[#4169E1] text-2xl" />
                            </div>
                            <span className="text-[#4169E1] ml-[8px]">Watch Video</span>
                        </div>
                    </div>
                </div>
                <img src="/vector.png" alt="mockup" height={640} className="mb-10" />
            </div>

        </>
    )
}
