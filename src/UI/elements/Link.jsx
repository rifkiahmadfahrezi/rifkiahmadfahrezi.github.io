import React from 'react'


export default function Link({label, href, className, children,}){
        return(
            <>
                <a 
                    target='_blank'
                    aria-label={label}
                    href={href} 
                    className={`font-semibold underline text-white ${className}`}>
                    {children}</a>
            </>
        )
}