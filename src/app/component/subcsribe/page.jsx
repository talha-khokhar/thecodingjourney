import React from 'react';
import { FaBell } from "react-icons/fa";
import bg_image from '../../../../public/bg.png';

const bgStyle = {
    backgroundImage: `url(${bg_image.src})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
};

const Subscribe = () => {
  return (
    <>
      <section className='bg-[#f4f4f4]'>
        <div style={bgStyle} className="container py-24 md:py-48">
            <div className="flex flex-col justify-center">
                <div className="text-center space-y-4 lg:max-w-[430px] mx-auto">
                    <h1 className='text-4xl font-bold leading-snug'>450K+ Students are learning from us</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt impedit sed nihil.</p>
                    <button className='primary-btn mt-8 inline-flex items-center gap-4 group'> 
                      Subscribe Now 
                      <FaBell className='group-hover:animate-bounce group-hover:text-lg duration-200' /> 
                    </button>
                </div>
            </div>
        </div>
      </section>
    </>
  );
}

export default Subscribe;
