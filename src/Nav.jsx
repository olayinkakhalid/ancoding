import React, { useState } from 'react'

const Nav = () => {
    const [open, setOpen] = useState(false)

    return (
        <nav className="fixed top-0 left-0 w-full flex justify-between p-5 items-center bg-[var(--black)] text-white h-20 z-50">

            {/* LOGO */}
            <div className="text-2xl font-extrabold tracking-wider z-50">
                AN-CO<span className="text-green-500">D</span>IN<span className="text-green-500">G</span>
            </div>

            {/* DESKTOP LINKS */}
            <div className="hidden md:flex items-center gap-70">
                <ul className="flex gap-10 font-semibold text-lg">
                    <li>
                        <a href="/" className="hover:text-green-400 transition cursor-pointer">
                            H<span className="text-green-500">O</span>M<span className="text-green-500">E</span>
                        </a>
                    </li>
                    <li>
                        <a href="/courses" className="hover:text-green-400 transition cursor-pointer">
                            <span className="text-green-500">C</span>OURSE<span className="text-green-500">S</span>
                        </a>
                    </li>
                    <li>
                        <a href="/practice" className="hover:text-green-400 transition cursor-pointer">
                            PRACTI<span className="text-green-500">C</span>E
                        </a>
                    </li>
                    <li>
                        <a href="/projects" className="hover:text-green-400 transition cursor-pointer">
                            PROJ<span className="text-green-500">E</span>CTS
                        </a>
                    </li>
                </ul>
                <button className="px-5 py-2 bg-green-500 text-black rounded-lg font-bold cursor-pointer hover:bg-green-400 transition">
                    Login
                </button>
            </div>

            {/* HAMBURGER BUTTON */}
            <div className="md:hidden z-50">
                <button
                    onClick={() => setOpen(!open)}
                    className="flex flex-col justify-between w-8 h-6 focus:outline-none"
                >
                    <span className={`block h-1 bg-white rounded transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block h-1 bg-white rounded transition-opacity ${open ? 'opacity-0' : ''}`}></span>
                    <span className={`block h-1 bg-white rounded transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
            </div>

            {/* MOBILE MENU OVERLAY WITH ANIMATION */}
            <div
                className={`fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-40
                    transition-all duration-500 ease-in-out
                    ${open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}
                `}
            >
                <ul className="flex flex-col items-center space-y-15 text-2xl font-bold text-white">
                    <li>
                        <a href="/" onClick={() => setOpen(false)} className="hover:text-green-500 transition">HOME</a>
                    </li>
                    <li>
                        <a href="/courses" onClick={() => setOpen(false)} className="hover:text-green-500 transition">COURSES</a>
                    </li>
                    <li>
                        <a href="/practice" onClick={() => setOpen(false)} className="hover:text-green-500 transition">PRACTICE</a>
                    </li>
                    <li>
                        <a href="/projects" onClick={() => setOpen(false)} className="hover:text-green-500 transition">PROJECTS</a>
                    </li>
                    <li>
                        <button
                            onClick={() => setOpen(false)}
                            className="px-8 py-3 bg-green-500 text-black font-bold rounded-lg hover:bg-green-400 transition"
                        >
                            Login
                        </button>
                    </li>
                </ul>
            </div>

        </nav>
    )
}

export default Nav
