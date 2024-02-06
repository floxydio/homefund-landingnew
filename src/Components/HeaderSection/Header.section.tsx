import { FiAlignCenter, FiPlay } from 'react-icons/fi';
import Navbar from './widget/Navbar';
import Section from './widget/Section';
import Sponsor from './widget/Sponsor';

export default function Header() {
  return (
    <>
      <div>
      <Navbar />
        <div className="lg:ml-[112px] lg:mr-[112px] lg:mt-[24px]  ml-[40px] mr-[40px] mt-[40px]">
          
          <Section />
          <Sponsor />
        </div>
      </div>
    </>
  );
}
