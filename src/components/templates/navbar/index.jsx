import React, { useState } from 'react'

import NavThemeToggler from '@/UI/fragments/navbar/NavThemeToggler'
import NavMenu from '@/UI/fragments/navbar/NavMenu'
import NavMenuToggler from '@/UI/fragments/navbar/NavMenuToggler'

export default function Navbar(){
        const [ menuOpen, setMenuOpen ] = useState(false)
        const [ scrolled, setScrolled] = useState(false)

        function menuToggler(){
            menuOpen ? setMenuOpen(false) : setMenuOpen(true)
        }


        window.addEventListener('load', () => {
            window.innerWidth <= 768 ? setMenuOpen(false) : setMenuOpen(true)
        })
        window.addEventListener('resize', () => {
            window.innerWidth <= 768 ? setMenuOpen(false) : setMenuOpen(true)
        })
        window.addEventListener('scroll', () => {
            window.scrollY >= 100 ? setScrolled(true) : setScrolled(false)
        })

        return(
            <>
                <div className="w-full fixed top-3 z-[99]">
                    <div className="container mx-auto px-3">
                       <div className={`flex items-center justify-between md:overflow-hidden py-3 px-5 rounded-full ${scrolled &&  'bg-white/10 backdrop-blur-md'} trasnsition-all duration-300`}>
                            <div className="order-1">
                               <h1 className='text-white font-bold text-2xl tracking-wider uppercase first-letter:text-cyan-300'>Rifki</h1>
                            </div>

                            <div className="md:hidden order-4 z-20">
                                <NavMenuToggler menuTogglerFn={menuToggler} isMenuOpen={menuOpen}/>
                            </div>

                            <div className={`order-3 absolute md:static inset-0 top-[-50%] md:top-0 md:bg-transparent   bg-slate-900 grid place-items-center h-screen md:h-auto transition-all duration-300 md:order-2 
                            ${!menuOpen ? 'translate-y-[-100%]' : 'translate-x-0'}`}>
                                <NavMenu setMenuOpenFn={setMenuOpen}/> 
                            </div>

                            {/* <div className="order-2 md:order-3">
                                <NavThemeToggler />
                            </div> */}
                       </div>
                    </div>
                </div>
            </>
        )
}