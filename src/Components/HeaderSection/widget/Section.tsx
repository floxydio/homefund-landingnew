import { FiAlignCenter, FiPlay } from "react-icons/fi";

export default function Section() {
    return (
        <>
            <div className="hidden lg:flex lg:mt-[30px] lg:h-[640px] flex-row">
                <div className="div mt-[96px] w-[696px]">
                    <span className="text-[60px] font-bold">
                        The easiest way to <br /> manage projects
                    </span>
                    <p className="text-[18px] mt-[10px]">From the small stuff to the big picture, organizes the work<br />so teams know what to do, why it matters, and how to get it done.</p>
                    <div className="mt-[32px] flex flex-row items-center">
                        <div className="bg-[#7C3AED] w-[138px] text-white text-center h-[56px] pt-[12px] rounded-[10px]">
                            <span className="text-white font-bold">Get Started</span>
                        </div>
                        <div className="ml-[16px] flex items-center">
                            <div>
                                <FiPlay className="text-[#7C3AED] text-2xl" />
                            </div>
                            <span className="text-[#7C3AED] ml-[8px]">Watch Video</span>
                        </div>
                    </div>
                </div>
                <img src="/mockup.png" alt="mockup" height={640} />
            </div>

            <div className="lg:hidden lg:mt-[30px] lg:h-[640px] flex-row">
                <div className="div mt-[100px] w-[375px]">
                    <span className="text-[36px] font-bold">
                        The easiest way to <br /> manage projects
                    </span>
                    <p className="text-[18px] mt-[10px] w-[378px]">From the small stuff to the big picture, organizes the work<br />so teams know what to do, why it matters, and how to get it done.</p>
                    <div className="mt-[32px] flex flex-row items-center justify-between mb-10">
                        <div className="bg-[#7C3AED] w-[138px] text-white text-center h-[56px] pt-[12px] rounded-[10px]">
                            <span className="text-white font-bold">Get Started</span>
                        </div>
                        <div className="ml-[16px] flex items-center">
                            <div>
                                <FiPlay className="text-[#7C3AED] text-2xl" />
                            </div>
                            <span className="text-[#7C3AED] ml-[8px]">Watch Video</span>
                        </div>
                    </div>
                </div>
                <img src="/mockup.png" alt="mockup" height={640} />
            </div>

        </>
    )
}

