import React, { useState, useEffect } from 'react'
import anvid from '../../assets/anvid.mp4'
import html from '../../assets/htmllogo.jpg'
import css from '../../assets/csslogo.jpg'
import js from '../../assets/jslogo.jpg'
import react from '../../assets/reactlogo.jpg'
import ancity from '../../assets/ancity.jpg'

const courseData = [
    { img: html, title: "Learn HTML", desc: "Master the structure of the web with clear HTML tutorials." },
    { img: css, title: "Learn CSS", desc: "Style your web pages beautifully with practical CSS lessons." },
    { img: js, title: "Learn JavaScript", desc: "Add interactivity and logic to your web projects using JS." },
    { img: react, title: "Learn React", desc: "Build dynamic user interfaces with modern React techniques." },
]

const Course = () => {
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => (prev + 1) % courseData.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    const { img, title, desc } = courseData[current]

    return (
        <div className='w-full'>

            {/* HERO SECTION */}
            <div className=' w-full h-[650px] relative' data-aos="fade-up" data-aos-duration="2000">
                <img src={ancity} alt="" className='brightness-90 object-cover h-full w-full' />
                <div className='absolute inset-0 text-white justify-center item-center text-center flex flex-col px-4'>
                    <p className='text-5xl font-bold mb-4'>CODE WITH <span className='text-green-500'>AN-CODING</span></p>
                    <p className='max-w-xl mx-auto text-center text-lg'>
                        Start your coding journey with clear, beginner-friendly courses. Learn the basics, practice real project and build the skills that actually matter in today's tech world.
                    </p>
                </div>
            </div>

            {/* COURSE SLIDER SECTION */}
            <div className='bg-gray-100 flex justify-center items-center p-6' data-aos="fade-up" data-aos-duration="1000">
                <div className='flex flex-col sm:flex-row gap-8 bg-white p-3 w-full max-w-5xl shadow-xl rounded-lg items-center'>
                    <img src={img} alt={title} className='w-full sm:w-[30%] object-cover h-auto shadow-xl rounded-lg' />
                    <div className='text-black flex flex-col items-center justify-center flex-1'>
                        <h1 className='font-bold text-5xl pb-5 text-center'>{title}</h1>
                        <p className='max-w-xl text-center text-lg pb-5'>{desc}</p>
                        <button className='px-6 py-3 bg-green-500 text-black font-bold rounded-lg hover:bg-green-400 transition'>
                            Start Learning
                        </button>
                    </div>
                </div>
            </div>

            {/* TRACK PROGRESS */}
            <div>
                
            </div>

        </div>
    )
}

export default Course
