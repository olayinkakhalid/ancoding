import React, { useState, useEffect } from 'react'
import anvid from '../../assets/anvid.mp4'
import html from '../../assets/htmllogo.jpg'
import css from '../../assets/csslogo.jpg'
import js from '../../assets/jslogo.jpg'
import react from '../../assets/reactlogo.jpg'
import anlogo from '../../assets/anlogo.jpg'

const courseData = [
    { img: html, title: "Learn HTML", desc: "Master the structure of the web with clear HTML tutorials." },
    { img: css, title: "Learn CSS", desc: "Style your web pages beautifully with practical CSS lessons." },
    { img: js, title: "Learn JavaScript", desc: "Add interactivity and logic to your web projects using JS." },
    { img: react, title: "Learn React", desc: "Build dynamic user interfaces with modern React techniques." },
]

const faqData = [
    {
        category: "Course Content & Learning",
        questions: [
            "What programming languages do you teach?",
            "Are the courses suitable for beginners?",
            "How long does it take to complete a course?",
            "Do I need prior coding experience?",
            "Are the lessons project-based or just theory?",
        ],
        answers: [
            "We teach HTML, CSS, JavaScript, and React.",
            "Yes! All courses start from beginner-friendly basics.",
            "Most courses take a few hours to complete, depending on your pace.",
            "No prior experience is needed.",
            "All lessons combine theory with practical projects.",
        ],
    },
    {
        category: "Access & Platform",
        questions: [
            "Can I access the courses on mobile devices?",
            "Do I need to install any software to follow the lessons?",
            "Can I watch the videos offline?",
            "How long will I have access to the courses?",
        ],
        answers: [
            "Yes, our platform is mobile-friendly.",
            "YES, you need VScode for the web is still working on the online code editor.",
            "Currently, videos are not available online.",
            "You’ll have access indefinitely once enrolled.",
        ],
    },
    {
        category: "Progress & Certification",
        questions: [
            "Is there a progress tracker to see how much I’ve completed?",
            "Do I get a certificate after completing a course?",
            "Can I revisit lessons after finishing the course?",
        ],
        answers: [
            "Yes, our platform tracks your progress automatically.",
            "Yes, certificates are provided for completed courses.",
            "Absolutely! You can revisit lessons anytime.",
        ],
    },
    {
        category: "Pricing & Payment",
        questions: [
            "Are all courses free or are some paid?",
            "How can I pay for premium courses?",
            "Is there a refund policy for paid courses?",
        ],
        answers: [
            "Some courses are free; premium courses require payment.",
            "You can pay using credit/debit cards or online payment systems.",
            "Refunds are handled according to our payment policy.",
        ],
    },
    {
        category: "Support & Community",
        questions: [
            "Can I ask questions if I get stuck?",
            "Is there a community or forum for learners?",
            "How do I contact support if something isn’t working?",
        ],
        answers: [
            "Yes, you can ask questions within the course forum.",
            "Yes, we have a community where learners help each other.",
            "Support is available via email or chat on the platform.",
        ],
    },
]

const Course = () => {
    const [current, setCurrent] = useState(0)
    const [openIndex, setOpenIndex] = useState(null)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => (prev + 1) % courseData.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    const { img, title, desc } = courseData[current]

    const toggleFAQ = (key) => {
        setOpenIndex(openIndex === key ? null : key)
    }

    return (
        <div className='w-full'>
            {/* HERO SECTION */}
            <div className="w-full h-[650px] relative">
                <video
                    src={anvid}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    onEnded={e => e.target.play()}
                    className="brightness-90 object-cover h-full w-full pointer-events-none"
                />

                <div
                    className="absolute inset-0 text-white flex flex-col justify-center items-center text-center px-4"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <p className="text-5xl font-bold mb-4">
                        CODE WITH <span className="text-green-500">AN-CODING</span>
                    </p>
                    <p className="max-w-xl mx-auto text-lg">
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
            <div data-aos="fade-up" data-aos-duration="1000">
                <p className='text-center font-bold text-5xl mb-9 p-5'>TRACK YOUR PROGRESS</p>

                <div className='bg-gray-200 shadow-xl rounded-xl p-8 max-w-4xl mx-auto my-12' data-aos="fade-up" data-aos-duration="2000">
                    <p className="text-center text-lg">
                        Stay motivated and never lose track of your learning journey with our built-in progress tracker. See how many lessons you’ve completed, which modules are next, and watch your skills grow step by step. With clear visual indicators, you’ll always know exactly where you are in your course and what’s left to master.
                    </p>

                    <p className="text-center text-gray-700 m-9">Course Progress: 3 of 5 lessons</p>

                    <div className="w-full bg-white h-4 rounded-full">
                        <div className="bg-green-500 h-4 rounded-full w-3/5"></div> {/* 60% completed */}
                    </div>
                </div>
            </div>

            {/* TESTIMONIAL SECTION */}
            <div className="py-12 bg-gray-100 mb-12" data-aos="fade-up" data-aos-duration="1000">
                <h2 className="text-5xl font-bold text-center mb-8">What Our Students Say</h2>
                <div className="flex flex-col sm:flex-row gap-8 justify-center items-stretch">
                    <div className="bg-white shadow-lg rounded-xl p-6 max-w-sm mx-auto" data-aos="fade-up" data-aos-duration="2000">
                        <p className="text-gray-700 mb-4">
                            "This course helped me understand coding from scratch. The lessons are clear and practical!"
                        </p>
                        <p className="font-bold">Biodun O.</p>
                        <p className="text-sm text-gray-500">Frontend Developer</p>
                    </div>

                    <div className="bg-white shadow-lg rounded-xl p-6 max-w-sm mx-auto" data-aos="fade-up" data-aos-duration="2000">
                        <p className="text-gray-700 mb-4">
                            "I loved how the course kept me motivated with progress tracking and practical projects."
                        </p>
                        <p className="font-bold">Khalid A.</p>
                        <p className="text-sm text-gray-500">Fullstack Student</p>
                    </div>
                </div>
            </div>

            {/* FAQ SECTION */}
            <div className='bg-white flex flex-col gap-8 mb-12 px-4 sm:px-6 md:px-0' data-aos="fade-up" data-aos-duration="1000">
                <p className='text-5xl font-bold mb-5 text-center'>FAQ</p>

                {faqData.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="w-full max-w-4xl mx-auto text-left">
                        <p className='text-2xl sm:text-3xl font-bold mb-4'>{section.category}</p>

                        {section.questions.map((q, index) => {
                            const key = `${sectionIndex}-${index}`
                            return (
                                <div key={key} className="mb-4 border-b border-gray-200">
                                    <button
                                        className="w-full flex justify-between items-center py-3 text-lg sm:text-base md:text-lg font-medium focus:outline-none"
                                        onClick={() => setOpenIndex(openIndex === key ? null : key)}
                                    >
                                        <span>{index + 1}. {q}</span>
                                        <i className={`fas fa-chevron-down transition-transform duration-300 ${openIndex === key ? 'rotate-180' : ''}`}></i>
                                    </button>
                                    {openIndex === key && (
                                        <p className="text-gray-700 mt-2 px-2 sm:px-0">{section.answers[index]}</p>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                ))}
            </div>


        </div>
    )
}

export default Course
