import rumahTangerangThumbnail from '../../../public/Rumah/rumah-tangerang/Rumah tangerang.jpg';
import rumahPasarKamisThumbail from '../../../public/Rumah/rumah-pasar-kamis/Rumah pasar kamis .jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
export default function Feature() {
  return (
    <>
      <div className="">
        {/* section heading */}
        <div className="flex justify-center bg-[#4169E1]">
          <div className="flex-row space-y-2 w-full">
            <h1 className="text-3xl text-center text-white font-normal mt-10 mb-[100px]">
              Kenapa Harus <span className='text-white font-bold'>HomeFunding</span>
            </h1>
            {/* Why Home Funding */}
            <div className="grid grid-cols-2 grid-rows-2 mx-32 mb-[100px]">
              <div className='flex'>
                <img src={"/image/loyalty.png"} alt="image" style={{
                  width: '70px',
                  height: '70px'
                }} />
                <div className='ml-3'>
                  <h2 className='text-white font-bold text-2xl mb-2'>Loyalitas</h2>
                  <span className='text-white'>Semaking sering dan besar investasinya<br />maka semakin banyak pula keuntungan<br />yang akan anda dapatkan</span>
                </div>
              </div>
              <div className='flex'>
                <img src={"/image/wallet.png"} alt="image" style={{
                  width: '70px',
                  height: '70px'
                }} />
                <div className='ml-3'>
                  <h2 className='text-white font-bold text-2xl mb-2'>Refferal</h2>
                  <span className='text-white'>Ajak teman sebanyak banyaknya dan<br/>dapatkan untung dari kode REFFERAL</span>
                </div>
              </div>
              <div className='flex'>
                <img src={"/image/forward.png"} alt="image" style={{
                   width: '70px',
                   height: '70px'
                }} />
                <div className='ml-3'>
                  <h2 className='text-white font-bold text-2xl mb-2'>Cepat</h2>
                  <span className='text-white'>Imbal hasil selama 3-6 bulan</span>
                </div>
              </div>
              <div className='flex mb-[100px]'>
                <img src={"/image/shield.png"} alt="image" style={{
                       width: '70px',
                       height: '70px'
                }} />
                <div className='ml-3'>
                  <h2 className='text-white font-bold text-2xl mb-2'>Akurat</h2>
                  <span className='text-white'>Kapanpun pengguna bertransaksi lot maka<br/>hasil lot akan selalu terupdate secara realtime</span>
                </div>
              </div>
            </div>

          </div>
        </div>
        {/* Feature */}
        <section className='mb-[150px]'>
          <div>
            <h1 className="mt-10 text-3xl font-bold text-center">Penawaran Saat Ini</h1>
          </div>
          {/* Catalog - Desktop Version */}
          <div className="lg:flex sm:hidden lg:mx-[112px] lg:mt-[120px] mx-[40px] mt-[40px] ml-auto  justify-center">
            <div className="w-[300px]  overflow-hidden shadow-lg rounded  dark:bg-slate-800">
              <Image
                className="w-full"
                src={rumahTangerangThumbnail.src}
                alt="Rumah Tangerang Thumbnail"
                width={100}
                height={100}
                unoptimized
              />
              <div className="px-2 py-4 dark:bg-slate-800">
                <div className="mb-4">
                  <div className="text-start font-sans text-lg">
                    Rumah Tangerang
                  </div>
                  <div>
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      style={{ color: '#777777' }}
                    />
                    <span className="text-sm ml-1 text-[#777777]">
                      Tangerang, Kabupaten Banten
                    </span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div>
                    <p className="text-xs text-[#777777] font-semibold">
                      Minimum Investasi
                    </p>
                    <p className="font-bold ">Rp.100.000</p>
                  </div>
                  <div className="bg-amber-200 relative">
                    <div className="absolute left-1/2 -ml-0.5 w-0.5 h-[50px] bg-gray-600"></div>
                  </div>
                  <div>
                    <p className="text-xs text-[#777777] font-semibold">
                      Maximum Investasi
                    </p>
                    <p className="font-bold ">Rp.1.000.000</p>
                  </div>
                </div>
              </div>
              <div>
                <progress
                  className="progress progress-primary  ml-auto"
                  value="20"
                  max="100"
                />
              </div>
              <div className="mb-5">
                <FontAwesomeIcon icon={faClock} className="ml-3" />
                <span className="text-xs ml-2">Proses Pengumpulan</span>
                <span className="text-xs ml-20">20%</span>
              </div>
            </div>
            <div className="ml-10 w-[300px]  overflow-hidden shadow-lg rounded  dark:bg-slate-800">
              <Image
                className="w-full"
                src={rumahTangerangThumbnail.src}
                alt="Rumah Tangerang Thumbnail"
                width={100}
                height={100}
                unoptimized
              />
              <div className="px-2 py-4 dark:bg-slate-800">
                <div className="mb-4">
                  <div className="text-start font-sans text-lg">
                    Rumah Tangerang
                  </div>
                  <div>
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      style={{ color: '#777777' }}
                    />
                    <span className="text-sm ml-1 text-[#777777]">
                      Tangerang, Kabupaten Banten
                    </span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div>
                    <p className="text-xs text-[#777777] font-semibold">
                      Minimum Investasi
                    </p>
                    <p className="font-bold ">Rp.100.000</p>
                  </div>
                  <div className="bg-amber-200 relative">
                    <div className="absolute left-1/2 -ml-0.5 w-0.5 h-[50px] bg-gray-600"></div>
                  </div>
                  <div>
                    <p className="text-xs text-[#777777] font-semibold">
                      Maximum Investasi
                    </p>
                    <p className="font-bold ">Rp.1.000.000</p>
                  </div>
                </div>
              </div>
              <div>
                <progress
                  className="progress progress-primary  ml-auto"
                  value="85"
                  max="100"
                />
              </div>
              <div className="mb-5">
                <FontAwesomeIcon icon={faClock} className="ml-3" />
                <span className="text-xs ml-2">Hampir Selesai</span>
                <span className="text-xs ml-20">85%</span>
              </div>
            </div>
          </div>

          {/* Catalog - Mobile Version */}
          <div className="lg:hidden sm:flex flex-col mt-[40px]  w-full">
            <div className="overflow-hidden shadow-lg rounded ml-[20px] mr-[20px]  dark:bg-slate-800">
              <Image
                className="w-full"
                src={rumahTangerangThumbnail.src}
                alt="Rumah Tangerang Thumbnail"
                width={100}
                height={100}
                unoptimized
              />
              <div className="px-2 py-4 dark:bg-slate-800">
                <div className="mb-4">
                  <div className="text-start font-sans text-lg">
                    Rumah Tangerang
                  </div>
                  <div>
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      style={{ color: '#777777' }}
                    />
                    <span className="text-sm ml-1 text-[#777777]">
                      Tangerang, Kabupaten Banten
                    </span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div>
                    <p className="text-xs text-[#777777] font-semibold">
                      Minimum Investasi
                    </p>
                    <p className="font-bold ">Rp.100.000</p>
                  </div>
                  <div className="bg-amber-200 relative">
                    <div className="absolute left-1/2 -ml-0.5 w-0.5 h-[50px] bg-gray-600"></div>
                  </div>
                  <div>
                    <p className="text-xs text-[#777777] font-semibold">
                      Maximum Investasi
                    </p>
                    <p className="font-bold ">Rp.1.000.000</p>
                  </div>
                </div>
              </div>
              <div>
                <progress
                  className="progress progress-primary  ml-auto"
                  value="20"
                  max="100"
                />
              </div>
              <div className="mb-5">
                <FontAwesomeIcon icon={faClock} className="ml-3" />
                <span className="text-xs ml-2">Sedang Proses</span>
                <span className="text-xs ml-20">20%</span>
              </div>
            </div>
            <div className="mt-16 overflow-hidden shadow-lg rounded ml-[20px] mr-[20px]  dark:bg-slate-800">
              <Image
                className="w-full"
                src={rumahTangerangThumbnail.src}
                alt="Rumah Tangerang Thumbnail"
                width={100}
                height={100}
                unoptimized
              />
              <div className="px-2 py-4 dark:bg-slate-800">
                <div className="mb-4">
                  <div className="text-start font-sans text-lg">
                    Rumah Tangerang
                  </div>
                  <div>
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      style={{ color: '#777777' }}
                    />
                    <span className="text-sm ml-1 text-[#777777]">
                      Tangerang, Kabupaten Banten
                    </span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div>
                    <p className="text-xs text-[#777777] font-semibold">
                      Minimum Investasi
                    </p>
                    <p className="font-bold ">Rp.100.000</p>
                  </div>
                  <div className="bg-amber-200 relative">
                    <div className="absolute left-1/2 -ml-0.5 w-0.5 h-[50px] bg-gray-600"></div>
                  </div>
                  <div>
                    <p className="text-xs text-[#777777] font-semibold">
                      Maximum Investasi
                    </p>
                    <p className="font-bold ">Rp.1.000.000</p>
                  </div>
                </div>
              </div>
              <div>
                <progress
                  className="progress progress-primary  ml-auto"
                  value="20"
                  max="100"
                />
              </div>
              <div className="mb-5">
                <FontAwesomeIcon icon={faClock} className="ml-3" />
                <span className="text-xs ml-2">Sedang Proses</span>
                <span className="text-xs ml-20">20%</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
