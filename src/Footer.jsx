import React from 'react'

const Footer = () => {
    return (
        <div>
            {/* FOOTER */}
            <footer className="bg-[var(--black)] text-white py-10">
                <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">

                    {/* COURSES LINKS */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Courses to Learn</h3>
                        <ul className="space-y-2">
                            <li><a href="/html" className="hover:text-green-500 transition">HTML</a></li>
                            <li><a href="/css" className="hover:text-green-500 transition">CSS</a></li>
                            <li><a href="/javascript" className="hover:text-green-500 transition">JavaScript</a></li>
                            <li><a href="/react" className="hover:text-green-500 transition">React</a></li>
                            <li><a href="/projects" className="hover:text-green-500 transition">Projects</a></li>
                        </ul>
                    </div>

                    {/* INFO / COPYRIGHT */}
                    <div className="flex flex-col justify-end text-gray-400">
                        <p className="mb-2">© 2025 Built with <a href="https://react.dev/" className='text-green-500'>react.dev</a> by Khalid</p>
                        <p>Learn coding step by step, build projects, and level up your skills.</p>
                    </div>

                </div>
            </footer>
        </div>
    )
}

export default Footer