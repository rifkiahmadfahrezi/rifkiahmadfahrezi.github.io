import React from 'react'


import { getRandomImg } from '@/utils/helper'
import Loading from '@/UI/animations/Loading'
import Link from '@/UI/elements/Link'


export default function TabsContent({types = "HTML", data = [], isLoading = true}){

        return(
            <>
                <div className="rounded-b-xl bg-white/50 transition-all duration-500 min-w-[300px] backdrop-blur-md p-3 " >
                    <div className="grid grid-cols-autofit gap-3 overflow-hidden">
                        {data?.length > 0 && !isLoading ? 
                            data.map((item,i) => {
                                return (
                                    <figure key={i} className="w-full group relative rounded-lg overflow-hidden after:content-[''] after:absolute after:w-full after:h-full after:bg-gradient-to-t after:from-black after:to-transparent after:left-0  after:bottom-0  after:transition-all after:duration-150">
                                        <div className="w-full bg-[url(/img/placeholder/placeholder.webp)] bg-center">
                                            <img src={item.image ?? getRandomImg('programming')} className='object-cover w-full h-[300px] object-center' alt="" loading='lazy'/>
                                        </div>

                                        <figcaption className='absolute left-6 bottom-0 z-[1] group-hover:md:translate-y-0 group-hover:md:opacity-100 transition-all  max-w-fit duration-300 '>
                                            <h1 className="text-white whitespace-nowrap text-ellipsis overflow-hidden text-xl sm:text-2xl md:text-4xl capitalize font-ibmsans font-bold mb-5">
                                                {item.projectName.split('-').join(' ')}
                                            </h1>
                                        <div className="w-full md:w-3/4">  
                                            <p className=' text-white text-sm sm:text-md md:text-lg text-ellipsis'>
                                                {item.description ?? 'no description'}
                                            </p>
                                        </div>

                                            <div className="my-5">
                                                <Link
                                                    label={`read more about ${item.projectName.split('-').join(' ')}`}
                                                    className='custom-cursor text-white group'
                                                    href={item.link} >
                                                        visit {item.projectName.split('-').join(' ')}
                                                        <i className='bx bx-arrow-back group-hover:ml-3 transition duration-150 bx-flip-horizontal ml-2 font-semibold' ></i>
                                                    </Link>
                                            </div>

                                        </figcaption>
                                    </figure>
                                )
                            })
                        : <div className="w-[100px] h-[100px] md:w-[200px] mx-auto md:h-[200px] overflow-hidden">
                            <Loading />
                            <div className="text-white">
                                Loading...
                            </div>
                        </div>
                        }   
                    </div>        

                <p className='text-slate-100 mt-5 capitalize text-md'>visit all at <Link href="https://github.com/rifkiahmadfahrezi" className="custom-cursorcursor-pointer" >my github</Link></p>
                </div>
            </>
        )
}