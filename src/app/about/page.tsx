import Footer from '@/Components/FooterSection/FooterSection';
import Navbar from '@/Components/HeaderSection/widget/Navbar';
import Link from 'next/link';
import backroundHeader from '../../../public/background_about.svg';
import BackgroundImage from '@/Components/BackgroundImage/BackgroundImage';
import Image from 'next/image';

export default function Page() {
  return (
    <>
      <div className="lg:ml-[112px] lg:mr-[112px] lg:mt-[24px]  ml-[40px] mr-[40px] mt-[40px]">
        {/* <Navbar /> */}
        <div className="background-header-about">
          <h1 className="text-3xl text-center text-[#4169E1] font-sans ">
            Yuk Kenalan
          </h1>
          <p className="text-[18px] mt-[10px] text-center font-sans">
            Aplikasi investasi berbasis crowd funding untuk investasi rumah dan
            bisnis untuk semua orang
          </p>
        </div>

        <h1 className="mt-10 text-lg font-sans">Mari Mulai Dengan,</h1>
        <h1 className="text-2xl font-sans">Apa Itu Homefunding?</h1>
        <div className="mt-5 flex-wrap md:justify-center font-sans">
          <p className="text-justify mb-2 font-sans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            distinctio minima earum doloremque rem ipsum iusto unde id. Magni
            laudantium eius accusamus ad deserunt id praesentium recusandae
            architecto delectus eaque.
          </p>
          <p className="text-justify mb-2 font-sans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            distinctio minima earum doloremque rem ipsum iusto unde id. Magni
            laudantium eius accusamus ad deserunt id praesentium recusandae
            architecto delectus eaque.
          </p>
          <p className="text-justify mb-2 font-sans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            distinctio minima earum doloremque rem ipsum iusto unde id. Magni
            laudantium eius accusamus ad deserunt id praesentium recusandae
            architecto delectus eaque.
          </p>
        </div>

        <div>
          <p className="font-black text-6xl font-sans">
            Sejak 2018, pengguna setia kami telah mempercayakan kami dengan 10
            triliun+ rupiah transaksi
          </p>
        </div>
      </div>
      <div className="bg-[#4169E1] mt-10 rounded">
        <p className="text-3xl text-center text-white mb-5 font-sans pb-10 pt-10">
          Pimpinan Kami
        </p>
        <div className="lg:ml-[112px] lg:mr-[112px] lg:mt-[24px]  ml-[40px] mr-[40px] mt-[40px]">
          <div className="grid grid-cols-3 gap-3 mr-5 ml-5 pb-10 mb-10">
            {/* Ini Dio Okta */}
            <div className="max-w-sm  overflow-hidden shadow-lg bg-white rounded">
              <Image
                className="w-full bg-white"
                src="/Profile/Dio.png"
                alt="CTO Homefunding"
                width={100}
                height={100}
                unoptimized
              />
              <div className="px-6 py-4 bg-white">
                <div className="font-bold text-xl mb-2 text-center font-sans">
                  Dio Okta Rovelino
                </div>
                <p className="text-gray-700 text-base text-center font-sans">
                  Chief Technology Officer
                </p>
              </div>
            </div>

            {/* Ini Juli Huang */}
            <div className="max-w-sm  overflow-hidden shadow-lg bg-white rounded">
              <Image
                className="w-full bg-white"
                src="/Profile/Ilung.png"
                alt="CTO Homefunding"
                width={100}
                height={100}
                unoptimized
              />
              <div className="px-6 py-4 bg-white">
                <div className="font-bold text-xl mb-2 text-center font-sans">
                  Juli Huang Ilung
                </div>
                <p className="text-gray-700 text-base text-center font-sans">
                  Chief Executive Officer
                </p>
              </div>
            </div>

            {/* Ini Blek */}
            <div className="max-w-sm  overflow-hidden shadow-lg bg-white rounded">
              <Image
                className="w-full bg-white"
                src="/Profile/Ramanda.png"
                alt="COO Homefunding"
                width={100}
                height={100}
                unoptimized
              />
              <div className="px-6 py-4 bg-white">
                <div className="font-bold text-xl mb-2 text-center font-sans">
                  Ramanda Dio
                </div>
                <p className="text-gray-700 text-base text-center font-sans">
                  Chief Operating Officer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[300px] h-[100px] ml-5">
        <p className="text-justify pb-3">Gabung Bersama Kami!</p>
        <button>
          <Link
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
            href="/career"
          >
            Lowongan Tersedia
          </Link>
        </button>
      </div>
      <Footer />
    </>
  );
}
