import React, { lazy, useState,Suspense, useEffect } from 'react'

const ContactModal = lazy(() => import('./ContactModal'))

export default function ContactSection(){
        const [ isModalOpen, setIsModalOpen ] = useState(false)

        function toggleModal(){
            isModalOpen ? setIsModalOpen(false) : setIsModalOpen(true)
        }

        return(
            <>
                <section data-scroll-section id='contact' className='w-full py-14 min-h-screen'>
                    <div className="container mx-auto px-3">
                        <h1 className='text-center group custom-cursor text-slate-100 text-2xl md:text-4xl'>Get in touch <i className='bx  custom-cursor bx-tada'>✉</i></h1>

                        <div className="grid place-items-center h-[calc(100vh-300px)]">
                            <div className="flex flex-col">
                                <button type='button' onClick={toggleModal} role='button' className='cc-email text-[40px] sm:text-[50px] md:text-[70px] xl:text-[100px] custom-cursor text-white'>rifkiaf589@gmail.com</button>

                                <div className="flex gap-3 mt-5 justify-center">
                                    <a 
                                        className='text-5xl text-slate-300 hover:text-white custom-cursor'
                                        target='_blank'
                                        aria-label="visit my github"
                                        href="https://github.com/rifkiahmadfahrezi"
                                    ><i className='bx bxl-github custom-cursor'></i></a>
                                    <a 
                                        className='text-5xl text-slate-300 hover:text-white custom-cursor'
                                        target='_blank'
                                        aria-label="visit my instagram"
                                        href="https://www.instagram.com/rifkii_30/"
                                    ><i className='bx bxl-instagram custom-cursor'></i></a>
                                    <a 
                                        className='text-5xl text-slate-300 hover:text-white custom-cursor'
                                        target='_blank'
                                        aria-label="visit my medium"
                                        href="https://rifkiaf.medium.com/"
                                    ><i className='bx bxl-medium custom-cursor'></i></a>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {isModalOpen && 
                    <Suspense>
                        <ContactModal isModalOpen={isModalOpen} modalToggleHandler={toggleModal}/>   
                    </Suspense>
                }
            </>
        )
}