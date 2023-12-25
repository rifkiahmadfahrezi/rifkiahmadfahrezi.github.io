import React from 'react'


export default function TabButton({text = 'null', clickHandler, activeTab}){

        return(
            <>
                <li onClick={(e) => clickHandler(e)} 
                    data-lang={text}
                    className={`w-full md:w-auto custom-cursor custom-cursor cc-link  text-white backdrop-blur-md rounded-t-lg ${activeTab == text ? 'hover:bg-white/30  bg-white/50' : 'hover:bg-white/10  bg-white/20'}`}>
                    <button 
                        data-lang={text}
                        role='button'
                        aria-current="page" 
                        className="custom-cursor cc-link inline-block p-2 md:p-4 font-ibmsans ">
                        {text}
                    </button>
                </li>
            </>
        )
}