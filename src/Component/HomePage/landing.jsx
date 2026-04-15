import React from 'react'
import anvid from '../../assets/anvid.mp4'

const Landing = () => {
    return (
        <div className="w-full">

            {/* HERO SECTION */}
            <div className="relative w-full h-[650px]" data-aos="fade-up" data-aos-duration="2000">

                <video src={anvid} className='brightness-90 object-cover h-full w-full' autoPlay loop muted playsInline />

                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                    <h1 className="text-5xl font-bold text-white mb-4">
                        Learn to Code <span className="text-green-500">Fast & Easy</span>
                    </h1>
                    <p className="text-white text-lg max-w-xl">
                        Master HTML, CSS, JavaScript, and build real projects from scratch.
                    </p>
                    <button className="mt-6 px-6 py-3 bg-green-500 text-black font-bold rounded-lg hover:bg-green-400 transition">
                        Start Learning
                    </button>
                </div>
            </div>

            {/* FEATURES SECTION */}
            <section className="py-20 bg-gray-100" data-aos="fade-up" data-aos-duration="1000">
                <h2 className="text-3xl font-bold text-center mb-12">Why Learn With AN-CODING?</h2>
                <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-center px-4">
                    <div className="bg-green-500 p-6 rounded-xl shadow hover:shadow-xl transition" data-aos="fade-up" data-aos-duration="1000">
                        <span className="text-4xl">🚀</span>
                        <h3 className="font-bold text-xl mt-4">Fast Learning</h3>
                        <p className="mt-2 text-black">Step by step coding tutorials for beginners.</p>
                    </div>
                    <div className="bg-green-500 p-6 rounded-xl shadow hover:shadow-xl transition" data-aos="fade-up" data-aos-duration="2000">
                        <span className="text-4xl">💻</span>
                        <h3 className="font-bold text-xl mt-4">Projects</h3>
                        <p className="mt-2 text-black">Build real apps while learning coding.</p>
                    </div>
                    <div className="bg-green-500 p-6 rounded-xl shadow hover:shadow-xl transition" data-aos="fade-up" data-aos-duration="3000">
                        <span className="text-4xl">🎯</span>
                        <h3 className="font-bold text-xl mt-4">Challenges</h3>
                        <p className="mt-2 text-black">Test your skills with fun exercises.</p>
                    </div>
                    <div className="bg-green-500 p-6 rounded-xl shadow hover:shadow-xl transition" data-aos="fade-up" data-aos-duration="3000">
                        <span className="text-4xl">📚</span>
                        <h3 className="font-bold text-xl mt-4">Resources</h3>
                        <p className="mt-2 text-black">Guides, tips, and tutorials at your fingertips.</p>
                    </div>
                </div>
            </section>

            {/* STEPS SECTION */}
            <section className="py-20" data-aos="fade-up" data-aos-duration="1000">
                <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
                <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8 text-center px-4">
                    <div className="p-6 bg-green-50 rounded-xl shadow hover:shadow-lg transition" data-aos="fade-up" data-aos-duration="1000">
                        <div className="text-4xl font-bold mb-2">1</div>
                        <h3 className="font-bold text-xl">Pick a Course</h3>
                    </div>
                    <div className="p-6 bg-green-50 rounded-xl shadow hover:shadow-lg transition" data-aos="fade-up" data-aos-duration="2000">
                        <div className="text-4xl font-bold mb-2">2</div>
                        <h3 className="font-bold text-xl">Learn & Practice</h3>
                    </div>
                    <div className="p-6 bg-green-50 rounded-xl shadow hover:shadow-lg transition" data-aos="fade-up" data-aos-duration="3000">
                        <div className="text-4xl font-bold mb-2">3</div>
                        <h3 className="font-bold text-xl">Build Projects</h3>
                    </div>
                    <div className="p-6 bg-green-50 rounded-xl shadow hover:shadow-lg transition" data-aos="fade-up" data-aos-duration="3000">
                        <div className="text-4xl font-bold mb-2">4</div>
                        <h3 className="font-bold text-xl">Track Progress</h3>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Landing
