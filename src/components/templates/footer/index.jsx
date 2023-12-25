import React from 'react'


export default function Footer(){
        return(
            <>
                <footer className='w-full'>
                    <div className="container mx-auto px-3 text-center">
                        <small className='text-slate-300 text-md'>&copy; {new Date().getFullYear()} Rifki ahmad fahrezi</small>
                    </div>
                </footer>
            </>
        )
}