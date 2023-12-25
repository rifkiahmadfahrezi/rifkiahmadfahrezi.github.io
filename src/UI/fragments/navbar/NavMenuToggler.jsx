import React from 'react'


export default function NavMenuToggler({menuTogglerFn, isMenuOpen}){
    return(
        <>
            <div onClick={() => menuTogglerFn()} className=" cursor-pointer">
                <div  className={`transition duration-200 flex md:hidden p-1 flex-col h-9 w-12  justify-between z-[99]  ${isMenuOpen ? ' translate-y-2': null}`}>
                    <span 
                        className={`rounded-full transition duration-500 ${isMenuOpen ? 'rotate-45 translate-y-1': null} bg-slate-100  w-full h-1`}></span>
                    <span 
                        className={`rounded-full transition duration-500 ${isMenuOpen ? 'scale-x-0': null} bg-slate-100  w-full h-1`}></span>
                    <span 
                        className={`rounded-full transition duration-500 ${isMenuOpen ? 'rotate-[-45deg] translate-y-[-20px]' : null} bg-slate-100  w-full h-1`}></span>
                </div>
            </div>
        </>
    )
}