import React from 'react'
import { Link } from 'react-router-dom'


export default function Anchor({label, href, className, children,}){
        return(
            <>
                <Link 
                    target='_blank'
                    aria-label={label}
                    to={href} 
                    className={`font-semibold underline text-white ${className}`}>
                    {children}</Link>
            </>
        )
}