import React from 'react'
import { TbWorldWww } from "react-icons/tb";
import { CiMobile3 } from "react-icons/ci";
import { RiComputerLine } from "react-icons/ri";
import { IoMdHappy } from "react-icons/io";
import { IoPulseOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";

const ServicesData = [
  {
    id: 1,
    title: 'Web development',
    link: "#",
    icon: <TbWorldWww />,
    delay: 0.2
  },
  {
    id: 2,
    title: 'Mobile development',
    link: "#",
    icon: <CiMobile3 />,
    delay: 0.3
  },
  {
    id: 3,
    title: 'Software development',
    link: "#",
    icon: <RiComputerLine />,
    delay: 0.4
  },
  {
    id: 4,
    title: 'Satisfied clients',
    link: "#",
    icon: <IoMdHappy />,
    delay: 0.5
  },
  {
    id: 5,
    title: 'SEO optimization',
    link: "#",
    icon: <IoPulseOutline />,
    delay: 0.6
  },
  {
    id: 6,
    title: '24/7 support',
    link: "#",
    icon: <BiSupport />,
    delay: 0.7
  }
]

const services = () => {
  return (
    <>
      <section className='bg-white'>
        <div className="container pb-14 pt-16">
          <h1 className='text-4xl font-bold text-center md:text-left pb-10'>Services we provided</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8">
            {
              ServicesData.map((services) => (
                <div className='bg-[#f4f4f4] rounded-2xl flex flex-col justify-center items-center gap-4 p-2 md:p-4 py-4 md:py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl'>
                  <div className="text-3xl md:text-4xl mb-1 md:mb-4"> {services.icon} </div>
                  <h1 className='text-sm md:text-lg font-semibold text-center px-3'>{services.title}</h1>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default services