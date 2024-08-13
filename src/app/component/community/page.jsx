import React from 'react'

import Image from "next/image";
import { IoMdArrowForward } from "react-icons/io";
import banner from '../../../../public/banner.png'

const Community = () => {
  return (
    <>
      <section className="bg-light  overflow-hidden relative">
        <div className="container min-h-[650px] grid grid-cols-1 md:grid-cols-2">
          {/* Brand Info */}
          <div className="flex flex-col justify-center py-14 md:py-0 relative z-20">
            <div className="text-center md:text-left space-y-10 lg:max-w-[450px]">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug"> Join Our Community to Start Your Journey </h1>
              <p className='text-dark2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo cum, maxime labore minus perferendis rem, corrupti voluptatem, est ipsa dignissimos fuga unde consectetur eveniet aliquam?</p>
              <div className="flex justify-center md:justify-start">
                <button className="primary-btn flex items-center gap-2 group"> Get Started <IoMdArrowForward className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" /> </button>
              </div>
            </div>
          </div>
          {/* Hero Image */}
          <div className="flex justify-center items-center">
            <Image src={banner} alt="hero_section_image" className="w-[400px] xl:w-[600px] relative z-10 drop-shadow" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Community