"use client"
import React from 'react'
import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import { useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
const AboutMe = () => {
    const targetref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: targetref,
        offset: ["end end", "end start"]
    })
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1280px)'
      })
    // let displayimgscale;

    const displayimgscale = () => { 
        if(isDesktopOrLaptop){
            return useTransform(scrollYProgress, [0, 0.7], [1, 0.3 ])
        }
        else{
            return useTransform(scrollYProgress, [0, 0.6], [1, 0.3])
        }
     }
    let displayimgopacity =  useTransform(scrollYProgress, [0, 0.7], [1, 0])
    let displayimgleft = useTransform(scrollYProgress,[0, 0.7], ["0px", "-100%"])
    let displaycontentright = useTransform(scrollYProgress,[0, 0.7], ["0px", "100%"])
    const position = useTransform(scrollYProgress, (pos)=>{
        if(isDesktopOrLaptop){
            return pos >= 0.68 ? "relative" : "fixed"
        }
        else{
            return "relative"
        }
    })
    
    return (
        <motion.section ref={targetref}  id="aboutme" className='min-h-[90vh] xl:h-[100%] w-full overflow-hidden text-yellow-300'>
            <motion.div style={{position}} className="content w-[100%] min-h-[100%] lg:min-h-[100%] pt-28 xl:py-28 px-5 xl:px-20 flex flex-col  items-center xl:flex-row xl:justify-between">
                <div className="leftside relative left-0 lg:h-[500px] lg:w-[450px] displayanimate">
                    {isDesktopOrLaptop && <motion.img style={{scale:displayimgscale(), opacity:displayimgopacity, x:displayimgleft}} src="displaypic.jpg" className='lg:h-full h-[300px] w-[300px] lg:w-full object-cover rounded-full displayimg' alt="display pic" />}
                    {!isDesktopOrLaptop && <motion.img style={{scale:displayimgscale(), opacity:displayimgopacity}} src="displaypic.jpg" className='lg:h-full h-[300px] w-[300px] lg:w-full object-cover rounded-full displayimg' alt="display pic" />}
                </div>
                <div className='rightside relative pl-4 h-fit w-full lg:h-[500px] lg:w-[750px] aboutanimate'>
                    {isDesktopOrLaptop && <motion.div style={{scale:displayimgscale(), opacity:displayimgopacity,x:displaycontentright}}>
                    <h1 className='pt-5 pb-2 text-3xl text-center lg:text-left lg:text-4xl font-bold'>Pragye Nawani</h1>
                    <h2 className='text-xl lg:text-2xl pb-3 text-yellow-200'>Passionate Web Developer & UI/UX Designer</h2>
                    <div className='text-xs lg:text-sm pb-1 text-yellow-100'>As a passionate web developer and designer, I specialize in creating engaging and user-centric digital experiences that drive results. With a strong foundation in both front-end and back-end development, I leverage the latest technologies and design principles to build responsive, visually stunning websites and applications.</div>
                    <div className='text-xs lg:text-sm pb-1 text-yellow-100'>
                        My expertise divs HTML, CSS, JavaScript, and various frameworks. I thrive on solving complex problems and turning creative concepts into functional, high-performance solutions. My approach blends technical proficiency with a keen eye for design, ensuring that every project not only looks great but performs seamlessly.
                    </div>
                    <div className='text-xs lg:text-sm pb-5 text-yellow-100'>
                        I'm committed to continuous learning and staying ahead of industry trends to deliver innovative solutions that meet the evolving needs of clients and users. Whether you're looking to launch a new website, revamp an existing one, or enhance user experience, I'm here to help bring your vision to life.
                    </div>
                    <div className='text-sm lg:text-lg text-yellow-100'>
                        Let's connect and explore how we can collaborate to create something amazing!
                    </div>
                    <div className='pt-3 flex justify-center lg:block'>
                    <a href="https://www.linkedin.com/in/pragye-nawani-737a1129b/" target='__blank'>
                    <button type="button" className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Connect!</button>
                    </a>
                    </div>
                    </motion.div>}
                    {!isDesktopOrLaptop && <motion.div style={{scale:displayimgscale(), opacity:displayimgopacity}}>
                    <h1 className='pt-5 pb-2 text-2xl text-center lg:text-left lg:text-4xl font-bold'>Pragye Nawani</h1>
                    <h2 className='text-lg lg:text-2xl pb-3 text-yellow-200'>Passionate Web Developer & UI/UX Designer</h2>
                    <div className='text-xs lg:text-sm pb-1 text-yellow-100'>As a passionate web developer and designer, I specialize in creating engaging and user-centric digital experiences that drive results. With a strong foundation in both front-end and back-end development, I leverage the latest technologies and design principles to build responsive, visually stunning websites and applications.</div>
                    <div className='text-xs lg:text-sm pb-1 text-yellow-100'>
                        My expertise divs HTML, CSS, JavaScript, and various frameworks. I thrive on solving complex problems and turning creative concepts into functional, high-performance solutions. My approach blends technical proficiency with a keen eye for design, ensuring that every project not only looks great but performs seamlessly.
                    </div>
                    <div className='text-xs lg:text-sm pb-5 text-yellow-100'>
                        I'm committed to continuous learning and staying ahead of industry trends to deliver innovative solutions that meet the evolving needs of clients and users. Whether you're looking to launch a new website, revamp an existing one, or enhance user experience, I'm here to help bring your vision to life.
                    </div>
                    <div className='text-sm lg:text-lg text-yellow-100'>
                        Let's connect and explore how we can collaborate to create something amazing!
                    </div>
                    <div className='pt-3 flex justify-center lg:block'>
                    <a href="https://www.linkedin.com/in/pragye-nawani-737a1129b/" target='__blank'>
                    <button type="button" className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Connect!</button>
                    </a>
                    </div>
                    </motion.div>}
                    
                </div>
            </motion.div>
        </motion.section>
    )
}

export default AboutMe
