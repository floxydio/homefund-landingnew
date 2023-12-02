"use client"

import React, { useState } from 'react'

export default function Simulasi() {
    const [lot, setLot] = useState<number>(0)
    const [hasil, setHasil] = useState(0)
    const [harga, setHarga] = useState(200000)
    const [totalPengembalian, setTotalPengembalian] = useState(0)
    /*
          totalLot =
              widget.productData.minimumInvestment! * int.parse(lotController.text);
    
          totalHasilImbal = widget.productData.minimumInvestment! *
              int.parse(lotController.text) *
              widget.productData.percentageImbal! ~/
              100;
          totalPengembalian = totalLot + totalHasilImbal;
    */

    /*
        hasil = harga * lot

        totalPengembalian
    */

    const simulasi = () => {
        const totalLot = harga * lot
        const hasilKeseluruhan = harga * lot * 20 / 100
        console.log(totalLot)
        console.log(`Hasil -> ${hasilKeseluruhan}`)

    }
    const decrement = () => {
        if (lot > 0) {
            setLot(lot - 1)
        }
    }

    const increment = () => {
        setLot(lot + 1)
    }


    return (
        <>
            <div className='lg:ml-[112px] lg:mr-[112px] lg:mt-[120px] ml-[40px] mr-[40px] mt-[40px] mb-[300px] text-center'>
                <div className="w-full border-collapse border-2 flex flex-col f">
                    <h2 className="mb-20 text-3xl font-bold mt-10">Simulasi Hasil</h2>
                    <input type='number' placeholder='Masukkan Lot'
                        className='border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500 w-[300px] ml-auto mr-auto mb-10' />
                    <div className="relative inline-block w-[300px]  ml-auto mr-auto">
                        <select className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                            <option value="" disabled selected>Minimal Investasi Product</option>
                            <option value="option1">Rp350.000.000</option>
                            <option value="option2">Rp500.000.000</option>
                            <option value="option3">Rp1.000.000.000</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-.707.293z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                    <button onClick={simulasi} className='bg-[#4169E1] p-3 text-white w-[300px] ml-auto mr-auto mb-10 mt-10'>Simulasi</button>
                </div>

            </div>

        </>
    )
}
