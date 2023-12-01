import { FiAlignCenter, FiPlay } from "react-icons/fi";
import Navbar from "./widget/Navbar";
import Section from "./widget/Section";
export default function Header() {
    return (
        <>
            <div>
                <div className="lg:ml-[112px] lg:mr-[112px] lg:mt-[24px] h-screen ml-[40px] mr-[40px] mt-[40px] relative">
                    <Navbar />
                    <Section />
                </div>
            </div>
        </>
    )
}