import React from 'react'
import '@/preloader.css'

export default function Preloader() {
  return (
    <div className='w-screen fixed h-screen inset-0 bg-slate-950 z-[999] grid place-items-center'>
         <div className="flex flex-col gap-1 justify-center items-center">
            <div className="loader"></div>
            <div className="loader-text"></div>
         </div>
    </div>
  )
}
