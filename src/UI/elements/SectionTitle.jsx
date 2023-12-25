import React from 'react'


export default function SectionTitle({title}){
        return(
            <>
                <h1 className=' max-w-fit capitalize custom-cursor font-ibmsans font-bold text-slate-100 text-5xl md:text-7xl'>{title}</h1>
            </>
        )
}