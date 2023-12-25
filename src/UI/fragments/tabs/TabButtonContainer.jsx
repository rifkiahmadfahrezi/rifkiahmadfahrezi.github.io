import React from 'react'


export default function TabButtonContainer({children}){
        return(
            <>
                <ul className="flex text-sm font-medium text-center text-slate-100 gap-1 md:gap-3">
                    {children}
                </ul >
            </>
        )
}