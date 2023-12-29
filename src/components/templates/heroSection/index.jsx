import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";

export default function Hero(){
    const name1Ref = useRef()
    const name2Ref = useRef()
    const name3Ref = useRef()
    const aboutTextRef = useRef()

    function animateText(target,duration){
        gsap.fromTo(target, {
            y: "80%",
        },
        {
            y: 0,
            duration: duration,
        })
    }

    // gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        window.addEventListener('load', () => {
            animateText(name1Ref.current, 1)
            animateText(name2Ref.current, 1.7)
            animateText(name3Ref.current, 2.5)
            animateText(aboutTextRef.current,1.5)
        })
    }, [])


        return(
            <>
                <header id="home" data-scroll-section className='w-full h-screen max-h-[900px]'>

                    <div className="container mx-auto px-3 h-full grid place-items-center relative">
                        <div className="flex relative justify-center w-full items-center">
                            <div className="text-start">
                                <div className="overflow-hidden inline-block">
                                    <h2 
                                        title='Rifki ahmad fahrezi'
                                        className="overflow-hidden uppercase  text-slate-100 tracking-tighter  dark:text-slate-100 flex-wrap flex gap-5 font-bold text-[70px] md:text-[100px] font-ibmsans  custom-cursor "
                                        >
                                            <div ref={name1Ref} className=' custom-cursor leading-[50px] md:leading-[90px]'>Rifki</div> 
                                            <div ref={name2Ref} className=' custom-cursor leading-[50px] md:leading-[90px]'>ahmad</div> 
                                            <div ref={name3Ref} className=' custom-cursor leading-[50px] md:leading-[90px]'>fahrezi</div></h2>
                                </div>
                                <div className="overflow-hidden">
                                <h3
                                    ref={aboutTextRef}
                                    className='overflow-hiddentracking-tighter text-slate-100  font-ibmsans text-lg md:text-xl xl:text-2xl custom-cursor '
                                    >a Jr frontend web developer</h3>
                                </div>

                            </div>
                            {/* <img 
                                className='scale-x-[-1] hidden md:block z-[-1] translate-x-[-25%] xl:translate-x-[20%] h-full w-full object-cover'
                                src="/img/placeholder/myavatar.png" 
                                alt="image of rifki's avatar" 
                                loading='lazy'/> */}
                        </div>
                        <div className="absolute bottom-[-30%] md:bottom-[-100%] z-[-1]">
                            <img src="/img/ellipse.svg" alt="" />
                        </div>
                    </div>
                </header>
            </>
        )
}