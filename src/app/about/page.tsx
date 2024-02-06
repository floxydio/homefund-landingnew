'use client'
import Footer from '@/Components/FooterSection/FooterSection';
import Navbar from '@/Components/HeaderSection/widget/Navbar';
import Link from 'next/link';
import backroundHeader from '../../../public/background_about.svg';
import BackgroundImage from '@/Components/BackgroundImage/BackgroundImage';
import Image from 'next/image';
import { FaLinkedin } from "react-icons/fa6";

export default function Page() {
  return (
    <>
      <div>
        <div className='ml-[110px] mr-[110px]'><Navbar /></div>
        <div>
          <h1 className="text-3xl text-center font-bold mt-[100px]">
            Yuk Kenalan Sebentar dengan <span className="text-[#4169E1]">HomeFunding</span>
          </h1>
        </div>
        <div>
          <span className='text-center block text-gray-500 text-xl font-medium mt-[50px] w-3/4 ml-auto mr-auto'>Platform aplikasi untuk memecahkan masalah bagi investor yang ingin berinvestasi di bidang properti tetapi tidak memiliki modal yang besar dan minim pengetahuan tentang pasar properti berbasis teknologi serta kami ingin ikut serta meningkatkan kepercayaan dan meningkatkan minat tentang investasi</span>
        </div>
      </div>
      <div className='ml-[110px] mr-[110px] mt-[100px]'>
        <h1 className='text-3xl font-bold'>Berawal dari masalah</h1>
        <div className="grid grid-cols-2 grid-rows-2 mb-[100px] mt-[70px]">
              <div className='flex'>
                <img src={"/image/loyalty.png"} alt="image" style={{
                  width: '70px',
                  height: '70px'
                }} />
                <div className='ml-3'>
                  <h2 className='font-bold text-2xl mb-2'>Modal Investasi yang besar</h2>
              
                </div>
              </div>
              <div className='flex'>
                <img src={"/image/wallet.png"} alt="image" style={{
                  width: '70px',
                  height: '70px'
                }} />
                <div className='ml-3'>
                  <h2 className='font-bold text-2xl mb-2'>Berkurangnya penjualan properti bank</h2>
                
                </div>
              </div>
              <div className='flex'>
                <img src={"/image/forward.png"} alt="image" style={{
                   width: '70px',
                   height: '70px'
                }} />
                <div className='ml-3'>
                  <h2 className='font-bold text-2xl mb-2'>Investasi Bodong</h2>
                </div>
              </div>
              <div className='flex mb-[100px]'>
                <img src={"/image/shield.png"} alt="image" style={{
                       width: '70px',
                       height: '70px'
                }} />
                <div className='ml-3'>
                  <h2 className='font-bold text-2xl mb-2'>Minimnya Literasi Investasi Properti</h2>
                </div>
              </div>
            </div>
      </div>
      <div className="bg-[#4169E1] mt-10 rounded">
        <p className="text-3xl text-center text-white mb-5 font-sans pb-10 pt-10">
          Pimpinan Kami
        </p>
        <div className="lg:ml-[112px] lg:mr-[112px] lg:mt-[24px]  mt-[40px]">
          <div className="grid grid-cols-2 gap-3 mr-5 ml-5 pb-10 mb-10">
            <div className="max-w-md  overflow-hidden shadow-lg bg-white rounded">
              <div className="px-6 py-4 bg-white">
                <div className="font-bold text-xl mb-2 text-center font-sans">
                  Dio Okta Rovelino
                </div>
                <p className="text-gray-700 text-base text-center font-sans">
                  Chief Technology Officer
                </p>
                <span onClick={() => {
                  window.open('https://www.linkedin.com/in/dio-okta-rovelino/', '_blank');
                }} className='cursor-pointer mt-4'>
                <FaLinkedin style={{
                  width: '30px',
                  height: '30px',
                  marginRight: 'auto',
                  marginLeft: 'auto',
                }}  />
                </span>
              </div>
            </div>
            <div className="max-w-md  overflow-hidden shadow-lg bg-white rounded">
              <div className="px-6 py-4 bg-white">
                <div className="font-bold text-xl mb-2 text-center font-sans">
                  Juli Huang
                </div>
                <p className="text-gray-700 text-base text-center font-sans">
                  Chief Executive Officer
                </p>
                <span onClick={() => {
                  window.open('https://www.linkedin.com/in/ilung-juli-806184243/', '_blank');
                }} className='cursor-pointer mt-4'>
                <FaLinkedin style={{
                  width: '30px',
                  height: '30px',
                  marginRight: 'auto',
                  marginLeft: 'auto',
                }}  />
                </span>
              </div>
            </div>
            <div className="max-w-md  overflow-hidden shadow-lg bg-white rounded">
              
              <div className="px-6 py-4 bg-white">
                <div className="font-bold text-xl mb-2 text-center font-sans">
                  Ramanda Dio
                </div>
                <p className="text-gray-700 text-base text-center font-sans">
                  Chief Operating Officer
                </p>
                <span onClick={() => {
                  window.open('https://www.linkedin.com/in/ramandadio/', '_blank');
                }} className='cursor-pointer mt-4'>
                <FaLinkedin style={{
                  width: '30px',
                  height: '30px',
                  marginRight: 'auto',
                  marginLeft: 'auto',
                }}  />
                </span>
              </div>
            </div>
            <div className="max-w-md  overflow-hidden shadow-lg bg-white rounded">
              <div className="px-6 py-4 bg-white">
                <div className="font-bold text-xl mb-2 text-center font-sans">
                  Jefry Pratama
                </div>
                <p className="text-gray-700 text-base text-center font-sans">
                  Advisor
                </p>
                <span onClick={() => {
                  window.open('https://www.linkedin.com/in/jefry-pratama-51745860/', '_blank');
                }} className='cursor-pointer mt-4'>
                <FaLinkedin style={{
                  width: '30px',
                  height: '30px',
                  marginRight: 'auto',
                  marginLeft: 'auto',
                }}  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[300px] h-[100px] ml-auto mr-auto mt-[150px] mb-[100px]">
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
