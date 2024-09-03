"use client"
import React from 'react'
import { useState } from 'react'
const Contactme = () => {
    const profileobj = {
        0 : "Social Media",
        1 : "Work Profile",
        3 : "Freelance Profile"
    }
    const [profiledis, setProfiledis] = useState(profileobj[0])
    const changeprofile = (index) => { 
        let list = document.querySelectorAll(".profilelist .profileitem")
        let oldprofileactive = document.querySelector(".profilelist .activeprofiletab")
        if (oldprofileactive) oldprofileactive.classList.remove("activeprofiletab")
        list[index].classList.add("activeprofiletab")
        setProfiledis(profileobj[index])
     }
    return (
        <section id="contact" className='h-fit xl:min-h-[100%] w-[100%] overflow-hidden pt-10 lg:pt-28 pb-10 lg:pb-0'>
            <div className="px-4 w-[90%] mx-auto">
                <h2 className="mb-4 text-5xl lg:text-6xl tracking-tight font-extrabold text-center text-yellow-300 pb-10">Contact Me</h2>
                <div className='w-full h-fit md:flex'>
                    <ul className="flex-column space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0 profilelist">
                        <li>
                            <button onClick={() => { changeprofile(0) }} href="#" className="inline-flex items-center px-4 py-3 text-gray-500 bg-gray-100 rounded-lg active w-full profileitem activeprofiletab" aria-current="page">
                                <svg className="w-4 h-4 me-2 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                                </svg>
                                Social Media
                            </button>
                        </li>
                        <li>
                            <button onClick={() => { changeprofile(1) }} href="#" className="inline-flex items-center px-4 py-3 text-gray-500 bg-gray-100 rounded-lg active w-full profileitem ">
                            <svg className="w-4 h-4 me-2 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                                </svg>
                                Work Profile
                            </button>
                        </li>
                        <li>
                            <button onClick={() => { changeprofile(2) }} href="#" className="inline-flex items-center px-4 py-3 text-gray-500 bg-gray-100 rounded-lg active w-full profileitem ">
                            <svg className="w-4 h-4 me-2 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                                </svg>
                                Freelance Profile
                            </button>
                        </li>
                    </ul>
                    {profiledis === profileobj[0] && <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-900 rounded-lg w-full">
                        <h3 className="text-4xl font-bold text-gray-900 dark:text-gray-900 mb-2 pb-5">Social Media</h3>
                        <div className='flex gap-3 items-center'>
                            <img src="https://cdn.pixabay.com/photo/2020/11/15/06/18/instagram-logo-5744708_640.png" className='h-[35px] w-[35px]' alt="" />
                            <a href="https://www.instagram.com/pragye_nawani/" target='__blank' className='text-blue-800 hover:text-blue-500 font-bold'>@pragye_nawani</a>
                        </div>
                    </div> }
                    {profiledis === profileobj[1] && <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-900  rounded-lg w-full">
                        <h3 className="text-4xl font-bold text-gray-900 dark:text-gray-900 mb-2 pb-5">Work Profile</h3>
                        <div className='flex gap-3 items-center pb-2'>
                            <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png" className='h-[35px] w-[35px]' alt="" />
                            <a href="https://www.linkedin.com/in/pragye-nawani-737a1129b/" target='__blank' className='text-blue-800 hover:text-blue-500 font-bold'>Pragye Nawani (LinkedIn)</a>
                        </div>
                        <div className='flex gap-3 items-center pb-2'>
                            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" className='h-[35px] w-[35px]' alt="" />
                            <a href="https://www.linkedin.com/in/pragye-nawani-737a1129b/" target='__blank' className='text-blue-800 hover:text-blue-500 font-bold'>PragyeNawani (Github)</a>
                        </div>
                    </div> }
                    {profiledis === profileobj[2] && <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-900  rounded-lg w-full">
                        <h3 className="text-4xl font-bold text-gray-900 dark:text-gray-900 mb-2 pb-5">Freelance Profile</h3>
                        <div className='flex gap-3 items-center pb-2'>
                            <img src="https://cdn.worldvectorlogo.com/logos/fiverr-1.svg" className='h-[35px] w-[35px]' alt="" />
                            <a href="https://www.fiverr.com/coder_pragye?up_rollout=true" target='__blank' className='text-blue-800 hover:text-blue-500 font-bold'>@coder_pragye (fiverr)</a>
                        </div>
                        <div className='flex gap-3 items-center pb-2'>
                            <img src="https://www.svgrepo.com/show/331630/upwork.svg" className='h-[35px] w-[35px]' alt="" />
                            <a href="https://www.upwork.com/freelancers/~019f1fc8d06be4037b" target='__blank' className='text-blue-800 hover:text-blue-500 font-bold'>Pragye Nawani (Upwork)</a>
                        </div>
                        <div className='flex gap-3 items-center pb-2'>
                            <img src="https://seeklogo.com/images/F/freelancer-com-logo-2B5CE1A961-seeklogo.com.png" className='h-[35px] w-[35px]' alt="" />
                            <a href="https://www.freelancer.com/u/coderpragyer" target='__blank' className='text-blue-800 hover:text-blue-500 font-bold'>@coderpragye (Freelancer)</a>
                        </div>
                    </div> }
                    
                </div>
            </div>
        </section>
    )
}

export default Contactme
