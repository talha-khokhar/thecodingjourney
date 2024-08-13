// import Link from 'next/link';
// // import React from 'react'
// import { MdMenu } from "react-icons/md";
// import { IoClose } from "react-icons/io5";

// const NavBarMenu = [
//   {
//     id: 1,
//     title: "Home",
//     path: '/'
//   },
//   {
//     id: 2,
//     title: "Services",
//     path: '/services'
//   },
//   {
//     id: 3,
//     title: "About Us",
//     path: '/about'
//   },
//   {
//     id: 4,
//     title: "Our Team",
//     path: '/team'
//   },
//   {
//     id: 5,
//     title: "Contact Us",
//     path: '/contact'
//   },
// ]

// const Navbar = () => {
//   return (
//     <>
//       <nav className='relative z-20'>
//         <div className="container py-10 flex items-center justify-between">
//         {/* Logo section */}
//           <div className="">
//             <h1 className='font-bold text-2xl'>The Coding Journey</h1>
//           </div>
//         {/* Menu section */}
//           <div className="hidden lg:block">
//             <ul className='flex items-center gap-3'>
//               {
//                 NavBarMenu.map( (menu) => {
//                   return(
//                   <li key={menu.id}> <Link href={menu.path} className='inline-block py-2 px-3 hover:text-secondary relative group'>
//                      <div className="w-2 h-2 bg-secondary absolute mt-2 left-1/2 -translate-x-1/2 top-1/2 bottom-0 rounded-full group-hover:block hidden">

//                      </div>
//                      {menu.title} </Link> 
//                   </li>
//                   )
//                 })
//               }
//               <button className='primary-btn'>Sign In</button>
//             </ul>
//           </div>
//         {/* Mobile hunberger menu section */}
//             <div className="lg:hidden">
//               <MdMenu className='text-4xl'/>
//             </div>
//         </div> 
//       </nav>
//     </>
//   )
// }

// export default Navbar;




"use client"
import Link from 'next/link';
import { useState } from 'react';
import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const NavBarMenu = [
  { id: 1, title: "Home", path: '/' },
  { id: 2, title: "Services", path: '/services' },
  { id: 3, title: "About Us", path: '/about' },
  { id: 4, title: "Our Team", path: '/team' },
  { id: 5, title: "Contact Us", path: '/contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className='relative z-30'> {/* Increase z-index to ensure it is on top */}
        <div className="container py-10 flex items-center justify-between">
          {/* Logo section */}
          <div>
            <h1 className='font-bold text-2xl'>The Coding Journey</h1>
          </div>
          {/* Menu section */}
          <div className="hidden lg:block">
            <ul className='flex items-center gap-3'>
              {NavBarMenu.map((menu) => (
                <li key={menu.id}>
                  <Link href={menu.path} className='inline-block py-2 px-3 hover:text-secondary relative group'>
                    <div className="w-2 h-2 bg-secondary absolute mt-2 left-1/2 -translate-x-1/2 top-1/2 bottom-0 rounded-full group-hover:block hidden"></div>
                    {menu.title}
                  </Link>
                </li>
              ))}
              <button className='primary-btn'>Sign In</button>
            </ul>
          </div>
          {/* Mobile hamburger menu section */}
          <div className="lg:hidden">
            {menuOpen ? (
              <IoClose className='text-4xl' onClick={toggleMenu} />
            ) : (
              <MdMenu className='text-4xl' onClick={toggleMenu} />
            )}
          </div>
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <>
            <div className="fixed inset-0 bg-black opacity-50 z-20" onClick={toggleMenu}></div> {/* Backdrop */}
            <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg z-30">
              <ul className='flex flex-col items-center gap-3 py-5'>
                {NavBarMenu.map((menu) => (
                  <li key={menu.id}>
                    <Link href={menu.path} className='block py-2 px-3 hover:text-secondary'>
                      {menu.title}
                    </Link>
                  </li>
                ))}
                <button className='primary-btn'>Sign In</button>
              </ul>
            </div>
          </>
        )}
      </nav>
    </>
  );
};

export default Navbar;
