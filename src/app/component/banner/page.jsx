import React from 'react'
import Image from 'next/image';
import Banner_image from "../../../../public/banner.png"
import { FaBookReader } from "react-icons/fa";
import { GrUserExpert } from "react-icons/gr";
import { MdAccessTime } from "react-icons/md";

const Banner = () => {
  return (
    <>
      <section>
        <div className="container grid grid-cols-1 md:grid-cols-2 py-14 md:py-24 gap-8 space-y-6">
            {/* Banner Image */}
            <div className="flex justify-center items-center">
              <Image src={Banner_image} alt="banner_image" className='w-[300px] md:w-[450px] object-cover drop-shadow'/>
            </div>
            {/* Banner Text */}
            <div className="flex flex-col justify-center gap-6">
              <div className="text-center md:text-left space-y-12">
                <h1 className='text-2xl md:text-4xl font-bold leading-snug'>The World's Leading Online Learning Platform</h1>
              </div>
              <div className="flex items-center gap-4 p-3 md:p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl">
                <FaBookReader className='text-lg md:text-2xl'/>
                <p className='text-lg'>10,000+ Courses</p>
              </div>
              <div className="flex items-center gap-4 p-3 md:p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl">
                <GrUserExpert className='text-lg md:text-2xl'/>
                <p className='text-lg'>Expert Instruction</p>
              </div>
              <div className="flex items-center gap-4 p-3 md:p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl">
                <MdAccessTime className='text-lg md:text-2xl'/>
                <p className='text-lg'>Lifetime Access</p>
              </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Banner;