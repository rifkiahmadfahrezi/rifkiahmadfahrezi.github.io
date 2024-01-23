import React from 'react'

import Link from '@/UI/elements/Anchor'

export default function TextContainer({className, children}){
        return(
            <>
                <article className={`text-slate-100 font-ibmsans custom-cursor flex flex-col gap-3 text-md md:text-lg ${className}`}> 
                    {children}
                </article>
            </>
        )
}