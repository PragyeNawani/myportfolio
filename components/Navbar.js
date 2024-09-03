"use client"
import React from 'react'
import Link from 'next/link'
import { useEffect } from 'react'
const Navbar = () => {
    const activatenavtab = (index) => { 
        let x = document.body.querySelectorAll(".nav .navitem")
        let oldtab = document.querySelector(".nav .activenav")
        if (oldtab) oldtab.classList.remove("activenav")
        x[index].classList.add("activenav")
     }
    
  return (
<>


<nav className="fixed top-0 left-0 bg-transparent z-50 text-white border-gray-200 min-h-2 w-full navanimation backdrop-blur-sm">
  <div className="w-full px-5 flex flex-wrap items-center justify-between mx-auto p-4">
    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="pfp2.jpg" className="h-10 w-10 rounded-full object-cover object-top" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-yellow-100">Pragye Nawani</span>
    </Link>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full lg:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  md:gap-4 nav">
        <li>
          <Link onClick={()=>{activatenavtab(0)}} href="#aboutme" className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 navitem activenav" aria-current="page">About Me</Link>
        </li>
        <li>
          <Link onClick={()=>{activatenavtab(1)}} href="#skills" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-100 md:p-0 navitem">Skills</Link>
        </li>
        <li>
          <Link onClick={()=>{activatenavtab(2)}} href="#websitetypes" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-100 md:p-0 navitem">Websites Type</Link>
        </li>
        <li>
          <Link onClick={()=>{activatenavtab(3)}} href="#projects" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-100 md:p-0 navitem">Projects</Link>
        </li>
        <li>
          <Link onClick={()=>{activatenavtab(4)}} href="#contact" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-100 md:p-0 navitem">Contact Me</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

</>
  )
}

export default Navbar
