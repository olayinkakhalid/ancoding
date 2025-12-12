import React, { useState } from 'react'

const Nav = () => {
    const [open, setOpen] = useState(false)

    return (
        <nav className="flex justify-between p-5 items-center bg-[var(--black)] text-white h-20 relative">

            {/* LOGO */}
            <div className="text-2xl font-extrabold tracking-wider">
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
            <div className="md:hidden">
                <button
                    onClick={() => setOpen(!open)}
                    className="flex flex-col justify-between w-8 h-6 focus:outline-none"
                >
                    <span className={`block h-1 bg-white rounded transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block h-1 bg-white rounded transition-opacity ${open ? 'opacity-0' : ''}`}></span>
                    <span className={`block h-1 bg-white rounded transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>

                {/* MOBILE MENU */}
                {open && (
                    <ul className="absolute top-20 left-0 w-full bg-[var(--black)] text-white flex flex-col items-center space-y-6 py-6">
                        <li>
                            <a href="/" className="hover:text-green-500 transition cursor-pointer">HOME</a>
                        </li>
                        <li>
                            <a href="/courses" className="hover:text-green-500 transition cursor-pointer">COURSES</a>
                        </li>
                        <li>
                            <a href="/practice" className="hover:text-green-500 transition cursor-pointer">PRACTICE</a>
                        </li>
                        <li>
                            <a href="/projects" className="hover:text-green-500 transition cursor-pointer">PROJECTS</a>
                        </li>
                        <li>
                            <button className="px-6 py-2 bg-green-500 text-black font-bold rounded-lg hover:bg-green-400 transition">
                                Login
                            </button>
                        </li>
                    </ul>
                )}
            </div>

        </nav>
    )
}

export default Nav
