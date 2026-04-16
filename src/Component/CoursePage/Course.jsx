import React, { useState, useEffect } from 'react'
import anvid from '../../assets/anvid.mp4'
import pooster from '../../assets/pooster.jpg'
import htmllogo from '../../assets/htmllogo.jpg'
import csslogo from '../../assets/csslogo.jpg'
import jslogo from '../../assets/jslogo.jpg'
import reactlogo from '../../assets/recatlogo.jpg'

const courseData = [
    { title: "Learn HTML", desc: "Master the structure of the web with clear HTML tutorials.", img: htmllogo },
    { title: "Learn CSS", desc: "Style your web pages beautifully with practical CSS lessons.", img: csslogo },
    { title: "Learn JavaScript", desc: "Add interactivity and logic to your web projects using JS.", img: jslogo },
    { title: "Learn React", desc: "Build dynamic user interfaces with modern React techniques.", img: reactlogo },
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
            "Yes, you need VS Code for practice.",
            "Currently, videos are not available offline.",
            "You’ll have access indefinitely once enrolled.",
        ],
    },
    {
        category: "Progress & Certification",
        questions: [
            "Is there a progress tracker?",
            "Do I get a certificate?",
            "Can I revisit lessons?",
        ],
        answers: [
            "Yes, progress is tracked automatically.",
            "Yes, certificates are provided.",
            "Yes, you can revisit anytime.",
        ],
    },
    {
        category: "Pricing & Payment",
        questions: [
            "Are courses free?",
            "How do I pay for premium courses?",
            "Is there a refund policy?",
        ],
        answers: [
            "Some are free, some are paid.",
            "You can pay via cards or online payments.",
            "Refunds depend on policy terms.",
        ],
    },
    {
        category: "Support & Community",
        questions: [
            "Can I ask questions?",
            "Is there a community?",
            "How do I contact support?",
        ],
        answers: [
            "Yes, inside the platform.",
            "Yes, learners interact in the community.",
            "Via email or chat support.",
        ],
    },
]

const Course = () => {

    const [current, setCurrent] = useState(0)
    const [openIndex, setOpenIndex] = useState(null)
    const [isAnimating, setIsAnimating] = useState(false)

    const nextSlide = () => {
        if (isAnimating) return
        setIsAnimating(true)
        setCurrent(prev => (prev + 1) % courseData.length)
    }

    const prevSlide = () => {
        if (isAnimating) return
        setIsAnimating(true)
        setCurrent(prev => (prev - 1 + courseData.length) % courseData.length)
    }

    const goToSlide = (index) => {
        if (isAnimating) return
        setIsAnimating(true)
        setCurrent(index)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide()
        }, 3500)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className='w-full'>

            {/* HERO */}
            <div className="w-full h-[650px] relative">
                <img
                    src={pooster}
                    alt=""
                    className="brightness-60 object-cover h-full w-full"
                />

                <div className="absolute inset-0 text-white flex flex-col justify-center items-center text-center px-4">
                    <p className="text-5xl font-bold mb-4">
                        CODE WITH <span className="text-green-500">AN-CODING</span>
                    </p>
                    <p className="max-w-xl text-lg">
                        Start your coding journey with beginner-friendly courses and real projects.
                    </p>
                </div>
            </div>

            {/* LEVEL 2 CAROUSEL */}
            <div className='bg-gray-100 flex justify-center items-center p-6'>
                <div className='relative w-full max-w-5xl overflow-hidden bg-white shadow-xl rounded-lg'>

                    {/* TRACK */}
                    <div
                        className='flex transition-transform duration-700 ease-in-out'
                        style={{ transform: `translateX(-${current * 100}%)` }}
                        onTransitionEnd={() => setIsAnimating(false)}
                    >
                        {courseData.map((course, index) => (
                            <div
                                key={index}
                                className='min-w-full flex flex-col sm:flex-row gap-8 p-6 items-center'
                            >
                                <div className='w-full sm:w-[30%] h-72 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden'>
                                    <img
                                        src={course.img}
                                        alt={course.title}
                                        className='h-full w-full object-contain p-6'
                                    />
                                </div>

                                <div className='flex-1 text-center'>
                                    <h1 className='font-bold text-4xl md:text-5xl mb-3'>
                                        {course.title}
                                    </h1>
                                    <p className='text-gray-700 mb-5'>
                                        {course.desc}
                                    </p>

                                    <button className='px-6 py-3 bg-green-500 font-bold rounded-lg hover:bg-green-400 transition'>
                                        Start Learning
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* BUTTONS */}
                    <button
                        onClick={prevSlide}
                        className='absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/40 text-white rounded-full'
                    >
                        ‹
                    </button>

                    <button
                        onClick={nextSlide}
                        className='absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/40 text-white rounded-full'
                    >
                        ›
                    </button>

                    {/* DOTS */}
                    <div className='flex justify-center gap-2 py-4'>
                        {courseData.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => goToSlide(i)}
                                className={`transition-all duration-300 rounded-full ${
                                    i === current
                                        ? 'bg-green-500 w-5 h-2'
                                        : 'bg-gray-400 w-2 h-2'
                                }`}
                            />
                        ))}
                    </div>

                </div>
            </div>

            {/* TRACK PROGRESS */}
            <div data-aos="fade-up" data-aos-duration="1000">
                <p className='text-center font-bold text-2xl sm:text-3xl md:text-5xl mb-9 p-5'>TRACK YOUR PROGRESS</p>

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
                <h2 className="text-2xl md:text-5xl font-bold text-center mb-8">What Our Students Say</h2>
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
