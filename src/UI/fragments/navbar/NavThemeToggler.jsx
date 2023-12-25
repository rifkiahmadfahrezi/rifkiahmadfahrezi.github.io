import React, { useEffect, useState } from 'react'


export default function NavThemeToggler(){
        const darkmodeLocalStorage = JSON.parse(localStorage.getItem('darkmode')  ?? false)
        const [ darkmode, setDarkmode] = useState(darkmodeLocalStorage)
        function changeTheme(){
            !darkmode ? setDarkmode(true) : setDarkmode(false)
            // update localStorage darkmode
        }
        
        useEffect(() => {
            const HTMLRoot = document.documentElement
            localStorage.setItem('darkmode', JSON.stringify(darkmode))
            if(!darkmode){
                HTMLRoot.classList.remove('dark')
            }else{
                HTMLRoot.classList.add('dark')
            }
        }, [darkmode])
        return(
            <>
                <button
                    onClick={changeTheme}
                    type='button'
                    title={`switch theme to ${!darkmode ? 'darkmode' : 'lightmode'}`}
                    aria-label={`${!darkmode ? 'darkmode' : 'lightmode'} toggler`}
                    className='group dark:bg-slate-100 bg-slate-800 py-2 px-3 md:py-3 md:px-5 rounded-full transition-all duration-300'>
                    <div 
                        className='text-lg flex items-center '>
                        <span className='text-slate-100 text-sm md:text-lg dark:text-slate-700 mr-2    group-hover:text-slate-100 dark:group-hover:text-black'>
                            {!darkmode ? 'darkmode ' : 'lightmode '}
                        </span>
                        <i  
                            className={`bx 
                            ${darkmode ? 'bxs-sun' : 'bxs-moon'}
                            dark:text-slate-700 text-slate-100 group-hover:animate-[spin_1s_ease-in-out]  dark:hover:text-black `}></i>
                    </div>
                </button>
            </>
        )
}