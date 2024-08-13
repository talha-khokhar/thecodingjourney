import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className='bg-[#f7f7f7] py-28'>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
            {/* First section */}
            <div className="space-y-4 max-w-[300px]">
              <h1 className='text-xl md:text-2xl font-bold'>The Coding Journey</h1>
              <p className='text-dark2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti eos id reiciendis atque, iusto architecto dignissimos animi ipsa dolore cumque impedit repellat, praesentium exercitationem temporibus blanditiis autem. Esse tempore et explicabo corporis sunt quisquam nisi, error atque, optio nemo laboriosam!</p>
            </div>
            {/* Second section */}
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <h1 className='text-xl md:text-2xl font-bold'> Courses </h1>
                <div className="text-dark2">
                  <ul className='space-y-2 text-lg'>
                    <li className='cursor-pointer hover:text-secondary duration-300'>Web Development</li>
                    <li className='cursor-pointer hover:text-secondary duration-300'>App Development</li>
                    <li className='cursor-pointer hover:text-secondary duration-300'>Software Development</li>
                    <li className='cursor-pointer hover:text-secondary duration-300'>E-Learning</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
              <h1 className='text-2xl font-bold'> Links </h1>
                <div className="text-dark2">
                  <ul className='space-y-2 text-lg'>
                    <li className='cursor-pointer hover:text-secondary duration-300'>Home</li>
                    <li className='cursor-pointer hover:text-secondary duration-300'>Services</li>
                    <li className='cursor-pointer hover:text-secondary duration-300'>About</li>
                    <li className='cursor-pointer hover:text-secondary duration-300'>Contact</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Third section */}
            <div className="space-y-4 max-w-[300px]">
              <h1 className='text-xl md:text-2xl font-bold'> Get In Touch </h1>
              <div className="flex items-center">
                <input type="text" placeholder='Enter Your Email' className='p-3 rounded-s-xl bg-white w-full py-4 focus:ring-0 focus:outline-none placeholder:text-dark2'/>
                <button className='bg-primary text-white font-semibold py-4 px-6 rounded-e-xl' > GO </button>
              </div>
              {/* Social Icon */}
              <div className="flex space-x-3 py-3 text-xl">
                <FaWhatsapp className="cursor-pointer hover:text-primary hover:scale-105 duration-200"/>
                <FaInstagram className="cursor-pointer hover:text-primary hover:scale-105 duration-200"/>
                <TbWorldWww className="cursor-pointer hover:text-primary hover:scale-105 duration-200"/>
                <FaYoutube className="cursor-pointer hover:text-primary hover:scale-105 duration-200"/>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer