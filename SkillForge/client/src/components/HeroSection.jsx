import { useState } from 'react';
import Banner from '../assets/banner.png';
import mission from '../assets/mission.png';
import vision from '../assets/vision.png'
export default function HeroSection (){

    return (
        <section className='w-full flex flex-col items-center'>
            <div className='h-60 md:h-112.5 w-full overflow-hidden rounded-full'>
                <img src={Banner} alt="Banner" 
                className='h-full w-full object-cover object-center dark:brightness-[0.75] dark:contrast-[1.05]' />

            </div>
            <div 
            className='border border-gray-400 rounded-xl max-w-90 md:max-w-4xl px-2 md:px-6 py-8 my-4  
                        flex flex-col gap-3 justify-center'>
                <div className='md:w-full text-xl md:text-fit'>
                    <p className='mb-4 text-justify md:text-left'>
                        SkillForge is the ultimate digital anvil where ambition meets action. Designed for modern learners, creators, and tech enthusiasts, our platform bridges the gap between theoretical knowledge and industry-ready expertise through expert-led courses, hands-on projects, and career-driven paths. Whether you are refining your development toolkit, mastering complex new technologies, or starting your learning journey from scratch, SkillForge provides the structured guidance and practical experience you need to shape your future. Stop just studying and start building, and forge the skills that define tomorrow.
                </p>
                </div>
                
                <div className=''>
                    <div className='flex flex-col md:flex-row md:w-fit'>
                        <div className='flex flex-col md:w-1/2 shrink-0'>
                            <div className=' flex flex-col md:h-54.5 gap-y-4 bg-blue-200 dark:bg-indigo-700/50 px-4 md:px-6 pt-4 pb-6'>
                                <h1 className='font-bold text-lg'>Our vision</h1>
                                <span className='text-left md:leading-relaxed '>
                                    To forge a global, inclusive community of empowered creators, innovators, and future leaders who not only possess technical mastery but also harbor the unwavering resolve to define the future of technology and build a more resilient and equitable industry.
                                </span>
                            </div>
                            <div className='w-full min-h-0'>
                                <img src={vision} alt="Skillforge Vision Image"
                                className=' object-cover object-center h-full w-full'/>
                            </div>
                        </div>

                        <div className='flex flex-col md:w-1/2 shrink-0'>
                            <div 
                                className='bg-red-300 flex md:h-54.5 dark:bg-pink-400/50 flex-col gap-y-4 md:w-full px-4 md:px-6 pt-4 pb-6'>
                                <h1 className='font-bold text-nowrap md:text-right'>Our Mission and Motto</h1>
                                <span className='md:text-right md:leading-relaxed'>
                                    To provide a rigorous, hands-on learning environment where ambitious individuals acquire the practical skills, expert knowledge, and real-world experience needed to accelerate their careers and build meaningful innovations.
                                </span>
                            </div>
                            <div className='w-full min-h-0'>
                                <img src={mission} alt="Skillforge Mission Image"
                                className='object-center object-cover h-full w-full' />
                            </div>
                        </div>
                    </div>

                    <div className='w-full flex flex-col items-center py-5'>
                        <div className='flex flex-col items-center gap-y-3 md:gap-y-7'>
                            <h1 className='font-bold text-4xl'>Our Impact</h1>
                        
                            <div className='w-full flex flex-col items-center gap-y-12 text-center'>
                                <div className='flex justify-center gap-x-10 md:gap-x-55'>
                                    <div className='flex flex-col justify-center items-center gap-y-2'>
                                        <span className='font-bold text-3xl'>8K+</span>
                                        <p 
                                        className='text-lg  max-w-37.5'>
                                            Students as of 2025</p>
                                    </div>
                                    <div className='flex flex-col gap-y-2'>
                                        <span className='font-bold text-3xl'>9K+</span>
                                        <p 
                                        className='text-lg max-w-37.5'>
                                            Alumni</p>
                                    </div>
                                    <div className='flex flex-col gap-y-2'>
                                        <span className='font-bold text-3xl'>30+</span>
                                        <p 
                                        className='text-lg  max-w-37.5'>
                                            Nationalities</p>
                                    </div>
                                </div>

                                <div className='py-6 flex items-center justify-center gap-x-12 md:gap-x-45.5'>
                                    <div className='flex flex-col gap-y-2 items-center'>
                                        <span className='font-bold text-3xl'>Over 700+</span>
                                        <p 
                                        className='text-md '>
                                            International Students</p>
                                    </div>
                                    <div className='flex flex-col gap-y-2'>
                                        <span className='font-bold text-3xl'>28</span>
                                        <p 
                                        className='text-lg  max-w-37.5'>
                                            Academic Programmes</p>
                                    </div>
                                    <div className='flex flex-col gap-y-2'>
                                        <span className='font-bold text-3xl'>34</span>
                                        <p 
                                        className='text-lg  max-w-37.5'>
                                            Award Won</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    
                </div>
                
            </div>
        </section>
    )
}