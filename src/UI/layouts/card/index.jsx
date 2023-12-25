import React from 'react'


export default function Card({className, children}){
        return(
            <>
                <div className={`bg-white/10 backdrop-blur-md p-5 rounded-md ${className}`}>
                    {children}
                </div>
            </>
        )
}