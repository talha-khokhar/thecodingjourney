// import React from 'react'

// import Image from "next/image";
// import Navbar from "../navbar/page"
// import { IoMdArrowForward } from "react-icons/io";
// import hero_img from '../../../../public/hero.png'
// import blob from '../../../../public/blob.svg'

// const Hero = () => {
//   return (
//     <>
//       <section className="bg-light  overflow-hidden relative">
//         <Navbar />
//         <div className="container min-h-[650px] grid grid-cols-1 md:grid-cols-2">
//           {/* Brand Info */}
//           <div className="flex flex-col justify-center py-14 md:py-0 relative z-20">
//             <div className="text-center md:text-left space-y-10 lg:max-w-[400px]">
//               <h1 className="text-3xl lg:text-5xl font-bold leading-snug">Lets Learn to build a <span className="text-secondary">website</span> for your business</h1>
//               <div className="flex justify-center md:justify-start">
//                 <button className="primary-btn flex items-center gap-2 group"> Get Started <IoMdArrowForward className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" /> </button>
//               </div>
//             </div>
//           </div>
//           {/* Hero Image */}
//           <div className="flex justify-center items-center">
//             <Image src={hero_img} alt="hero_section_image" className="w-[400px] xl:w-[600px] relative z-10 drop-shadow" />
//             <Image src={blob} alt="hero_section_image_background" className="absolute  -botton-32 w-[800px] md:w-[1500px] z-[1] hidden md:block" />
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default Hero









import React from 'react';
import Image from 'next/image';
import Navbar from '../navbar/page';
import { IoMdArrowForward } from 'react-icons/io';
import hero_img from '../../../../public/hero.png';
import blob from '../../../../public/blob.svg';

const Hero = () => {
  return (
    <section className="bg-light overflow-hidden relative">
      <Navbar />
      <div className="container min-h-[650px] grid grid-cols-1 md:grid-cols-2">
        {/* Brand Info */}
        <div className="flex flex-col justify-center py-14 md:py-0 relative z-20">
          <div className="text-center md:text-left space-y-10 lg:max-w-[400px]">
            <h1 className="text-3xl lg:text-5xl font-bold leading-snug">
              Let's Learn to build a <span className="text-secondary">website</span> for your business
            </h1>
            <div className="flex justify-center md:justify-start">
              <button className="primary-btn flex items-center gap-2 group">
                Get Started <IoMdArrowForward className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
              </button>
            </div>
          </div>
        </div>
        {/* Hero Image */}
        <div className="flex justify-center items-center">
          <Image src={hero_img} alt="hero_section_image" className="w-[400px] xl:w-[600px] relative z-10 drop-shadow" />
          <Image src={blob} alt="hero_section_image_background" className="absolute -bottom-32 w-[800px] md:w-[1500px] z-[1] hidden md:block" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
