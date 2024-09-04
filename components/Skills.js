"use client"
import React from 'react'
import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'
const Skills = () => {
    const targetref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: targetref,
        offset: ["start end", "end start"]
    })
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1280px)'
      })
    // const headscale = useTransform(scrollYProgress, [0.05, 0.4 , 0.45, 0.52], [2.5, 1, 1 , 0.2 ])
    const headscale = () => { 
        if(isDesktopOrLaptop){
            return useTransform(scrollYProgress, [0.05, 0.4 , 0.45, 0.52], [2.5, 1, 1 , 0.2 ])
        }
        else{
            return useTransform(scrollYProgress, [0.08, 0.2 , 0.41, 0.43], [3.5, 1, 1 , 0.3 ])
        }
    }
    const headdown = () => { 
        if (isDesktopOrLaptop){
            return useTransform(scrollYProgress, [0.05, 0.4 ], ["0px", "0px"])
        }
        else{
            return useTransform(scrollYProgress, [0.05, 0.4], ["100px", "0px"])
        }
     }
    const langscale = () => { 
        if(isDesktopOrLaptop){
            return useTransform(scrollYProgress, [0.1, 0.3, 0.50, 0.65], [1.5, 1, 1, 0.2 ])
        }
        else{
            return useTransform(scrollYProgress, [0.1, 0.3, 0.43, 0.5], [1.5, 1, 1, 0.3 ])
        }
     }
    const langopacity = () => { 
        if(isDesktopOrLaptop){
            return useTransform(scrollYProgress, [0.1, 0.3, 0.50,0.60], [0, 1 ,1, 0 ])
        }
        else{
            return useTransform(scrollYProgress, [0.1, 0.3, 0.43, 0.5], [0, 1 ,1, 0 ])
        }
     }
    const frameworkscale = () => { 
        if(isDesktopOrLaptop){
            return useTransform(scrollYProgress, [0.22, 0.42, 0.58 , 0.75], [1.5, 1, 1, 0.2 ])
        }
        else{
            return useTransform(scrollYProgress, [0.21, 0.33, 0.5082 , 0.63], [1.5, 1, 1, 0 ])
        }
    }
    const frameworkopacity = ()=>{
        if(isDesktopOrLaptop){
            return useTransform(scrollYProgress, [0.22, 0.42, 0.58, 0.75], [0, 1, 1, 0 ])
        }
        else{
            return useTransform(scrollYProgress, [0.2, 0.33, 0.5082 , 0.63], [0, 1, 1, 0 ])
        }
    }
    const featuresscale = () => { 
        if(isDesktopOrLaptop){
            return useTransform(scrollYProgress, [0.35, 0.55, 0.76 , 0.95], [1.5, 1, 1, 0.2 ])
        }
        else{
            return useTransform(scrollYProgress, [0.35, 0.55, 0.65 , 0.98], [1.5, 1, 1, 0.5 ])
        }
     }
    const langdown = useTransform(scrollYProgress, [0.1,0.3], ["150px", "0px"])
    // const langright = useTransform(scrollYProgress, [0.1,0.3], ["400px", "0px"])
    const langright = () => { 
        if (isDesktopOrLaptop){
            return useTransform(scrollYProgress, [0.1,0.3], ["400px", "0px"])
        }
        else{
            return useTransform(scrollYProgress, [0.1,0.2], ["400px", "0px"])
        }
     }
    const languright = () => { 
        if (isDesktopOrLaptop){
            return useTransform(scrollYProgress, [0.1,0.3], ["400px", "0px"])
        }
        else{
            return useTransform(scrollYProgress, [0.1,0.2], ["400px", "0px"])
        }
     }
    // const languright = useTransform(scrollYProgress, [0.1,0.3], ["400px", "0px"])
    // const frameworkdown = useTransform(scrollYProgress, [0.22,0.42], ["150px", "0px"])
    const frameworkdown = () => { 
        if (isDesktopOrLaptop){
            return useTransform(scrollYProgress, [0.22,0.42], ["150px", "0px"])
        }
        else{
            return useTransform(scrollYProgress, [0.21,0.35], ["150px", "0px"])
        }
     }
    // const frameworkright = useTransform(scrollYProgress, [0.22,0.42], ["400px", "0px"])
    const frameworkright = () => { 
        if (isDesktopOrLaptop){
            return useTransform(scrollYProgress, [0.22,0.42], ["400px", "0px"])
        }
        else {
            return useTransform(scrollYProgress, [0.21,0.27], ["200px", "0px"]) 
        }
     }
    const frameworkuright = () => { 
        if (isDesktopOrLaptop){
            return useTransform(scrollYProgress, [0.22,0.42], ["400px", "0px"])
        }
        else {
            return useTransform(scrollYProgress, [0.21,0.27], ["400px", "0px"]) 
        }
     }
    const frameworkudown = () => { 
        if (isDesktopOrLaptop){
            return useTransform(scrollYProgress, [0.22,0.42], ["0px", "0px"])
        }
        else{
            return useTransform(scrollYProgress, [0.21,0.35], ["230px", "0px"])
        }
     }
    // const frameworkuright = useTransform(scrollYProgress, [0.22,0.42], ["400px", "0px"])
    const featuresopacity = useTransform(scrollYProgress, [0.35, 0.55, 0.76 , 0.95], [0, 1, 1, 0 ])
    const featuresdown = useTransform(scrollYProgress, [0.35,0.55], ["150px", "0px"])
    const featuresudown = useTransform(scrollYProgress, [0.35,0.55], ["350px", "0px"])
    const featuresright = useTransform(scrollYProgress, [0.35,0.55], ["400px", "0px"])
    const featuresuright = useTransform(scrollYProgress, [0.35,0.55], ["400px", "0px"])
    const headopacity =  () => { 
        if(isDesktopOrLaptop){
            return useTransform(scrollYProgress, [0.05, 0.4, 0.45, 0.52], [0, 1, 1, 0])
        }
        else{
            return useTransform(scrollYProgress, [0.06, 0.3 , 0.41, 0.43], [0, 1, 1 , 0 ])
        }
     }
     const position = useTransform(scrollYProgress, (pos)=>{console.log(pos)})

  return (
    <motion.section ref={targetref} id="skills" className='h-fit lg:min-h-[50%] w-full overflow-hidden text-yellow-300 pt-5 xl:pt-24'>
        <motion.div style={{scale:headscale(), opacity:headopacity(), y:headdown()}} className=''><h2 className='text-5xl pb-5 lg:text-5xl text-center font-bold lg:pb-10'>Skills</h2></motion.div>
        <div className="skillsholder w-[90%] mx-auto h-fit pb-10 flex gap-5 lg:gap-10 flex-wrap">
            <motion.div style={{scale:langscale(),x:langright(), opacity:langopacity(), y: langdown}} className="lang flex w-[300px] text-yellow-200 py-1 lg:py-2 mx-auto justify-center">
                <h3 className='text-lg lg:text-3xl w-[250px] text-center'>Languages</h3>
            </motion.div>
            <motion.div style={{scale:langscale(),x:languright(), opacity:langopacity(), y: langdown}} className='rightside flex flex-wrap gap-4 w-[1700px] mx-auto mt-1 lg:mt-10'>
                <div className='border-2 w-fit min-h-10 rounded-xl border-yellow-800 p-2 mx-auto flex backdrop-blur-lg hover:scale-105 hover:cursor-pointer'>
                    <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png" className='h-[20px] lg:h-[50px] w-[20px] lg:w-[50px] object-cover' alt="" />
                    <div className='text-center w-full flex items-center justify-center text-sm lg:text-lg px-10 text-yellow-100 '>HTML</div>
                </div>
                <div className='border-2 w-fit min-h-10 rounded-xl border-yellow-800 p-2 mx-auto flex backdrop-blur-lg hover:scale-105 hover:cursor-pointer'>
                    <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png" className='h-[20px] lg:h-[50px] w-[20px] lg:w-[50px] object-cover' alt="" />
                    <div className='text-center w-full flex items-center justify-center text-sm lg:text-lg px-10 text-yellow-100'>CSS</div>
                </div>
                <div className='border-2 w-fit min-h-10 rounded-xl border-yellow-800 p-2 mx-auto flex backdrop-blur-lg hover:scale-105 hover:cursor-pointer'>
                    <img src="https://i.pinimg.com/originals/b4/de/20/b4de205cb6d4e7cad43c2971f780cfd9.png" className='h-[20px] lg:h-[50px] w-[20px] lg:w-[50px] object-cover rounded-full' alt="" />
                    <div className='text-center w-full flex items-center justify-center text-sm lg:text-lg px-10 text-yellow-100'>JavaScript</div>
                </div>
            </motion.div>
            <motion.div style={{scale:frameworkscale(),x:frameworkright(), opacity:frameworkopacity(), y: frameworkdown()}} className="lang flex w-[300px] items-center text-yellow-200 py-2 h-fit mx-auto justify-center">
                <h3 className='text-lg lg:text-3xl w-[250px] text-center'>Frameworks, Libraries and Databases</h3>
            </motion.div>
            <motion.div style={{scale:frameworkscale(),x:frameworkuright(), opacity:frameworkopacity(), y: frameworkudown()}} className='rightside flex flex-wrap gap-2 w-[1700px] h-fit mx-auto'>
                <div className='border-2 w-fit min-h-10 rounded-xl border-yellow-800 p-2 mx-auto flex backdrop-blur-lg hover:scale-105 hover:cursor-pointer'>
                    <img src="https://www.cdnlogo.com/logos/r/85/react.svg" className='h-[20px] lg:h-[50px] w-[20px] lg:w-[50px] object-cover' alt="" />
                    <div className='text-center w-full flex items-center justify-center text-sm lg:text-lg px-10 text-yellow-100'>React</div>
                </div>
                <div className='border-2 w-fit min-h-10 rounded-xl border-yellow-800 p-2 mx-auto flex backdrop-blur-lg hover:scale-105 hover:cursor-pointer'>
                    <img src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png" className='h-[20px] lg:h-[50px] w-[20px] lg:w-[50px] object-cover' alt="" />
                    <div className='text-center w-full flex items-center justify-center text-sm lg:text-lg px-10 text-yellow-100'>NodeJs</div>
                </div>
                <div className='border-2 w-fit min-h-10 rounded-xl border-yellow-800 p-2 mx-auto flex backdrop-blur-lg hover:scale-105 hover:cursor-pointer'>
                    <img src="https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png" className='h-[20px] lg:h-[50px] w-[20px] lg:w-[50px] object-cover rounded-lg' alt="" />
                    <div className='text-center w-full flex items-center justify-center text-sm lg:text-lg px-10 text-yellow-100'>MongoDB</div>
                </div>
                <div className='border-2 w-fit min-h-10 rounded-xl border-yellow-800 p-2 mx-auto flex backdrop-blur-lg hover:scale-105 hover:cursor-pointer'>
                    <img src="https://pbs.twimg.com/profile_images/1565710214019444737/if82cpbS_400x400.jpg" className='h-[20px] lg:h-[50px] w-[20px] lg:w-[50px] object-cover rounded-full' alt="" />
                    <div className='text-center w-full flex items-center justify-center text-sm lg:text-lg px-10 text-yellow-100'>NextJs</div>
                </div>
                <div className='border-2 w-fit min-h-10 rounded-xl border-yellow-800 p-2 mx-auto flex backdrop-blur-lg hover:scale-105 hover:cursor-pointer'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s" className='h-[20px] lg:h-[50px] w-[20px] lg:w-[50px] object-cover rounded-full' alt="" />
                    <div className='text-center w-full flex items-center justify-center text-sm lg:text-lg px-10 text-yellow-100'>Tailwindcss</div>
                </div>
                <div className='border-2 w-fit min-h-10 rounded-xl border-yellow-800 p-2 mx-auto flex backdrop-blur-lg hover:scale-105 hover:cursor-pointer'>
                    <img src="https://download.logo.wine/logo/Bootstrap_(front-end_framework)/Bootstrap_(front-end_framework)-Logo.wine.png" className='h-[20px] lg:h-[50px] w-[20px] lg:w-[50px] object-cover rounded-full' alt="" />
                    <div className='text-center w-full flex items-center justify-center text-sm lg:text-lg px-10 text-yellow-100'>Bootstrap</div>
                </div>
                <div className='border-2 w-fit min-h-10 rounded-xl border-yellow-800 p-2 mx-auto flex backdrop-blur-lg hover:scale-105 hover:cursor-pointer'>
                    <img src="https://miro.medium.com/v2/resize:fit:1200/1*oydQr9RwW875F9xdgESm3A.png" className='h-[20px] lg:h-[50px] w-[20px] lg:w-[50px] object-cover rounded-full' alt="" />
                    <div className='text-center w-full flex items-center justify-center text-sm lg:text-lg px-10 text-yellow-100'>AuthJs</div>
                </div>
                <div className='border-2 w-fit min-h-10 rounded-xl border-yellow-800 p-2 mx-auto flex backdrop-blur-lg hover:scale-105 hover:cursor-pointer'>
                    <img src="https://media.dev.to/cdn-cgi/image/width=1080,height=1080,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fuk0uq2vb0zlmw9h77oh3.png" className='h-[20px] lg:h-[50px] w-[20px] lg:w-[50px] object-cover rounded-full' alt="" />
                    <div className='text-center w-full flex items-center justify-center text-sm lg:text-lg px-10 text-yellow-100'>Framer Motion</div>
                </div>
            </motion.div>
            <motion.div style={{scale:featuresscale(),x:featuresright, opacity:featuresopacity, y: featuresdown}} className="lang flex w-[300px] items-center text-yellow-200 py-2 h-fit mx-auto justify-center">
                <h3 className='text-lg lg:text-3xl w-[250px] text-center'>Website Features</h3>
            </motion.div>
            <motion.div style={{scale:featuresscale(),x:featuresuright, opacity:featuresopacity, y: featuresudown}} className='rightside flex flex-wrap gap-2 w-[1700px] h-fit mx-auto'>
                <div className='border-2 w-fit min-h-16 rounded-xl border-yellow-800 p-2 mx-auto flex backdrop-blur-lg hover:scale-105 hover:cursor-pointer'>
                    <div className='text-center w-full flex items-center justify-center text-sm lg:text-lg px-4 text-yellow-100'>Payment Integrations</div>
                </div>
                <div className='border-2 w-fit min-h-16 rounded-xl border-yellow-800 p-2 mx-auto flex backdrop-blur-lg hover:scale-105 hover:cursor-pointer'>
                    <div className='text-center w-full flex items-center justify-center text-sm lg:text-lg px-4 text-yellow-100'>Admin Controls</div>
                </div>
                <div className='border-2 w-fit min-h-16 rounded-xl border-yellow-800 p-2 mx-auto flex backdrop-blur-lg hover:scale-105 hover:cursor-pointer'>
                    <div className='text-center w-full flex items-center justify-center text-sm lg:text-lg px-4 text-yellow-100'>Scroll Based Animations</div>
                </div>
                <div className='border-2 w-fit min-h-16 rounded-xl border-yellow-800 p-2 mx-auto flex backdrop-blur-lg hover:scale-105 hover:cursor-pointer'>
                    <div className='text-center w-full flex items-center justify-center text-sm lg:text-lg px-4 text-yellow-100'>Contact Forms, Feedback Forms</div>
                </div>
                <div className='border-2 w-fit min-h-16 rounded-xl border-yellow-800 p-2 mx-auto flex backdrop-blur-lg hover:scale-105 hover:cursor-pointer'>
                    <div className='text-center w-full flex items-center justify-center text-sm lg:text-lg px-4 text-yellow-100'>Navbar Navigation</div>
                </div>
                <div className='border-2 w-fit min-h-16 rounded-xl border-yellow-800 p-2 mx-auto flex backdrop-blur-lg hover:scale-105 hover:cursor-pointer'>
                    <div className='text-center w-full flex items-center justify-center text-sm lg:text-lg px-4 text-yellow-100'>Search bar Navigation</div>
                </div>
                <div className='border-2 w-fit min-h-16 rounded-xl border-yellow-800 p-2 mx-auto flex backdrop-blur-lg hover:scale-105 hover:cursor-pointer'>
                    <div className='text-center w-full flex items-center justify-center text-sm lg:text-lg px-4 text-yellow-100'>Parallax Scrolling</div>
                </div>
                <div className='border-2 w-fit min-h-16 rounded-xl border-yellow-800 p-2 mx-auto flex backdrop-blur-lg hover:scale-105 hover:cursor-pointer'>
                    <div className='text-center w-full flex items-center justify-center text-sm lg:text-lg px-4 text-yellow-100'>FAQs</div>
                </div>
                <div className='border-2 w-fit min-h-16 rounded-xl border-yellow-800 p-2 mx-auto flex backdrop-blur-lg hover:scale-105 hover:cursor-pointer'>
                    <div className='text-center w-full flex items-center justify-center text-sm lg:text-lg px-4 text-yellow-100'>Reviews</div>
                </div>
                <div className='border-2 w-fit min-h-16 rounded-xl border-yellow-800 p-2 mx-auto flex backdrop-blur-lg hover:scale-105 hover:cursor-pointer'>
                    <div className='text-center w-full flex items-center justify-center text-sm lg:text-lg px-4 text-yellow-100'>Responsiveness</div>
                </div>
                <div className='border-2 w-fit min-h-16 rounded-xl border-yellow-800 p-2 mx-auto flex backdrop-blur-lg hover:scale-105 hover:cursor-pointer'>
                    <div className='text-center w-full flex items-center justify-center text-sm lg:text-lg px-4 text-yellow-100'>Carousels</div>
                </div>
                <div className='border-2 w-fit min-h-16 rounded-xl border-yellow-800 p-2 mx-auto flex backdrop-blur-lg hover:scale-105 hover:cursor-pointer'>
                    <div className='text-center w-full flex items-center justify-center text-sm lg:text-lg px-4 text-yellow-100'>Interactive & Attractive</div>
                </div>
                <div className='border-2 w-fit min-h-16 rounded-xl border-yellow-800 p-2 mx-auto flex backdrop-blur-lg hover:scale-105 hover:cursor-pointer'>
                    <div className='text-center w-full flex items-center justify-center text-sm lg:text-lg px-4 text-yellow-100'>3D text & Image effects</div>
                </div>
            </motion.div>
        </div>
    </motion.section>
  )
}

export default Skills
