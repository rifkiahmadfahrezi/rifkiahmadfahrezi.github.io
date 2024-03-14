import React from 'react'

export default function Badge({text}) {
  return (
    <span className='py-1 text-sm font-thin text-white px-2 border bg-transparent border-slate-100 hover:bg-white hover:border-white hover:text-black rounded-md'>
      {text}
    </span>
  )
}
