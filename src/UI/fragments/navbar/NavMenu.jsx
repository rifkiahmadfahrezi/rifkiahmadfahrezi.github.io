import React from 'react'

export default function NavMenu({setMenuOpenFn}){
        
        function closeMenuHandler(){
            if (window.innerWidth <= 758) setMenuOpenFn(false)
        }

        return(
            <>
                <nav 
                    className="flex items-center w-3/4 md:w-auto justify-between md:gap-x-5 gap-y-1 inset-0 md:flex-row flex-col">
                        <a  
                            onClick={() => closeMenuHandler()}
                            aria-label='go to home section' 
                            href="#home" 
                            className={`text-center custom-cursor cc-link transition-bg duration-500 ease-out font-ibmsans py-2 px-4 w-full capitalize hover:text-white $ md:hover:bg-cyan-400 tracking-wide hover:bg-slate-700/30 hover:backdrop-blur-md rounded-lg font-lg md:hover:bg-white/20 text-slate-100`}>
                            home</a>
                        <a 
                            onClick={() => closeMenuHandler()}
                            aria-label='go to about section' 
                            href="#about" 
                            className='text-center custom-cursor cc-link transition-bg duration-500 ease-out font-ibmsans py-2 px-4 w-full capitalize hover:text-white  md:hover:bg-cyan-400 tracking-wide hover:bg-slate-700/30 hover:backdrop-blur-md rounded-lg font-lg text-slate-100 md:hover:bg-white/20'>
                            about</a>
                        <a 
                            onClick={() => closeMenuHandler()}
                            aria-label='go to my works   section' 
                            href="#works" 
                            className='text-center custom-cursor cc-link transition-bg duration-500 ease-out font-ibmsans py-2 px-4 w-full capitalize hover:text-white  md:hover:bg-cyan-400 tracking-wide hover:bg-slate-700/30 rounded-lg font-lg text-slate-100 md:hover:bg-white/20'>
                            works</a>
                        <a 
                            onClick={() => closeMenuHandler()}
                            aria-label='go to contact section' 
                            href="#contact" 
                            className='text-center custom-cursor cc-link transition-bg duration-500 ease-out font-ibmsans py-2 px-4 w-full capitalize hover:text-white  md:hover:bg-cyan-400 tracking-wide hover:bg-slate-700/30 rounded-lg font-lg text-slate-100 md:hover:bg-white/20'>
                            contact</a>
                </nav>
            </>
        )
}