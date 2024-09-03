"use client"
import React from 'react'
import { useEffect } from 'react'
const Websitetypes = () => {
    useEffect(() => {
        let active = 0;
        let websitelists = document.querySelectorAll(".list .listitem")
        let videolists = document.querySelectorAll(".videolist .videoitem")
        let lengthoflist = websitelists.length
        const changewebsite = () => {
            let oldwebactive = document.querySelector(".list .webcatactive")
            if (oldwebactive) oldwebactive.classList.remove("webcatactive")
            let oldvideoactive = document.querySelector(".videolist .videoactive")
            if (oldvideoactive) oldvideoactive.classList.remove("videoactive")
            websitelists[active].classList.add("webcatactive")
            videolists[active].classList.add("videoactive")
        }
        let autoPlay = setInterval(() => {
            active = active + 1 >= lengthoflist ? 0 : active + 1;
            changewebsite()
        }, 10000);
    }, [])
    const changewebsite = (index)=>{
        let websitelists = document.querySelectorAll(".list .listitem")
        let videolists = document.querySelectorAll(".videolist .videoitem")
        let oldwebactive = document.querySelector(".list .webcatactive")
        if (oldwebactive) oldwebactive.classList.remove("webcatactive")
        let oldvideoactive = document.querySelector(".videolist .videoactive")
        if (oldvideoactive) oldvideoactive.classList.remove("videoactive")
        websitelists[index].classList.add("webcatactive")
        videolists[index].classList.add("videoactive")
    }
    return (
        <section id="websitetypes" className='h-fit lg:min-h-[50%] w-[100%] overflow-hidden lg:pt-28'>
            <div className='w-[90%] h-fit pb-20 mx-auto'>
                <div><h2 className='text-4xl font-bold text-yellow-300 text-center'>Types Of Website - I build and design</h2></div>
                <div className="content pt-14 px-10 flex flex-col-reverse lg:flex-row gap-16">
                    <div className="leftside relative overflow-x-auto shadow-md sm:rounded-lg w-[300px] lg:w-[400px] border mx-auto">
                        <table className="w-full text-lg rounded-xl">
                            <thead className="text-lg text-yellow-200 uppercase bg-transparent backdrop-blur-sm">
                                <tr>

                                    <th scope="col" className="px-6 py-3">
                                        Websites' Categories
                                    </th>
                                </tr>
                            </thead>
                            <tbody className='list'>
                                <tr onClick={()=>{changewebsite(0)}} className="bg-transparent backdrop-blur-sm border-b cursor-pointer hover:backdrop-blur-xl listitem webcatactive">
                                    <th scope="row" className="px-6 py-4 font-medium text-yellow-100 whitespace-nowrap">
                                        Fitness Website
                                    </th>
                                </tr>
                                <tr onClick={()=>{changewebsite(1)}} className="bg-transparent backdrop-blur-sm border-b cursor-pointer hover:backdrop-blur-xl listitem">
                                    <th scope="row" className="px-6 py-4 font-medium text-yellow-100 whitespace-nowrap">
                                        Ecommerce Website
                                    </th>
                                </tr>
                                <tr onClick={()=>{changewebsite(2)}} className="bg-transparent backdrop-blur-sm border-b cursor-pointer hover:backdrop-blur-xl listitem">
                                    <th scope="row" className="px-6 py-4 font-medium text-yellow-100 whitespace-nowrap">
                                        Portfolio Website
                                    </th>
                                </tr>
                                <tr onClick={()=>{changewebsite(3)}} className="bg-transparent backdrop-blur-sm border-b cursor-pointer hover:backdrop-blur-xl listitem">
                                    <th scope="row" className="px-6 py-4 font-medium text-yellow-100 whitespace-nowrap">
                                        Agency Website
                                    </th>
                                </tr>
                                <tr onClick={()=>{changewebsite(4)}} className="bg-transparent backdrop-blur-sm border-b cursor-pointer hover:backdrop-blur-xl listitem">
                                    <th scope="row" className="px-6 py-4 font-medium text-yellow-100 whitespace-nowrap">
                                        Marketing Website
                                    </th>
                                </tr>
                                <tr onClick={()=>{changewebsite(5)}} className="bg-transparent backdrop-blur-sm border-b cursor-pointer hover:backdrop-blur-xl listitem">
                                    <th scope="row" className="px-6 py-4 font-medium text-yellow-100 whitespace-nowrap">
                                        Landing Pages
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="rightside w-full lg:w-2/3 min-h-[100%] flex items-center videolist">
                        <video src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/gejc3n0iav2tx6aewr0k" className='w-[300px] lg:w-[600px] h-fit mx-auto border hidden border-yellow-100 videoitem videoactive' autoPlay muted controls loop></video>
                        <video src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/gejc3n0iav2tx6aewr0k" className='w-[300px] lg:w-[600px] h-fit mx-auto border hidden border-yellow-100 videoitem' autoPlay muted controls loop></video>
                        <video src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/gejc3n0iav2tx6aewr0k" className='w-[300px] lg:w-[600px] h-fit mx-auto border hidden border-yellow-100 videoitem' autoPlay muted controls loop></video>
                        <video src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/v1/video-attachments/project_item/attachment/43a88ddc57ed4a6dd42ed4477203340a-1724570193733/Modelling%20Website%20-%20COMPRESS" className='w-[300px] lg:w-[600px] h-fit mx-auto border hidden border-yellow-100 videoitem' autoPlay muted controls loop></video>
                        <video src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/gejc3n0iav2tx6aewr0k" className='w-[300px] lg:w-[600px] h-fit mx-auto border hidden border-yellow-100 videoitem' autoPlay muted controls loop></video>
                        <video src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/v1/video-attachments/project_item/attachment/82a5c9c6d032bdd3cfc579e21ac49e6d-1722506597417/Starbucks%20landing%20page" className='w-[300px] lg:w-[600px] h-fit mx-auto border hidden border-yellow-100 videoitem' autoPlay muted controls loop></video>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Websitetypes
