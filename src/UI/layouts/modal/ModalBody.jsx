import React from 'react'


export default function ModalBody({children}){
    return(
    <div className="p-4 md:p-5 space-y-4 min-w-[300px]">
        {children}
    </div>)
}