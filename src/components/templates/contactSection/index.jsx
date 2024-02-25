import React, { lazy, useState, useEffect } from 'react'

import ContactModal from './ContactModal'
export default function ContactSection(){
        const [ isModalOpen, setIsModalOpen ] = useState(false)

        function toggleModal(){
            isModalOpen ? setIsModalOpen(false) : setIsModalOpen(true)
        }

        useEffect(() => {
            if(isModalOpen){
                document.body.classList.add('overflow-y-hidden')
            }else{
                document.body.classList.remove('overflow-y-hidden')
            }
        }, [isModalOpen])

        return(
            <>
                <section data-scroll-section id='contact' className='w-full  py-14 min-h-screen'>
                    <div className="container mx-auto px-3">
                        <div className='custom-cursor text-center'>
                            <h1 className='text-center group  text-slate-100 text-3xl md:text-4xl'>Get in touch <i className='bx  custom-cursor bx-tada'>✉</i></h1>
                            <p className='text-slate-500 my-6 font-ibmsans text-md lg:text-2xl'>Let's connect! And check out my content videos and blogs</p>
                        </div>

                        <div className="grid place-items-center h-[calc(100vh-300px)]">
                            <div className="flex flex-col">
                                <button type='button' onClick={toggleModal} role='button' className=' text-[40px] sm:text-[50px] md:text-[70px] xl:text-[100px] custom-cursor text-white'>rifkiaf589@gmail.com</button>

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
                                        href="https://www.instagram.com/nekode.id/"
                                    ><i className='bx bxl-instagram custom-cursor'></i></a>
                                    <a 
                                        className='text-5xl text-slate-300 hover:text-white custom-cursor'
                                        target='_blank'
                                        aria-label="visit my medium"
                                        href="https://rifkiaf.medium.com/"
                                    ><i className='bx bxl-medium custom-cursor'></i></a>
                                    <a 
                                        className='text-5xl text-slate-300 hover:text-white custom-cursor'
                                        target='_blank'
                                        aria-label="visit my linkedin"
                                        href="https://www.linkedin.com/in/rifki-ahmad-fahrezi"
                                    ><i className='bx bxl-linkedin custom-cursor'></i></a>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {isModalOpen && 
                    <ContactModal isModalOpen={isModalOpen} modalToggleHandler={toggleModal}/>   
                }
            </>
        )
}