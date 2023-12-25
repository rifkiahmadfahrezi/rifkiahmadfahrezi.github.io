import React from 'react'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import SectionTitle from '@/UI/elements/SectionTitle'
import AboutText from '@/UI/fragments/about/AboutText'
import Card from '@/UI/layouts/card'
import TextContainer from '@/UI/layouts/textContainer'




export default function About(){

        gsap.registerPlugin(ScrollTrigger)

        return(
            <>
                <section id="about" data-scroll-section className='w-full py-14 min-h-screen'>
                    <div className="container mx-auto px-3">
                        <div className="flex w-full flex-col xl:flex-row gap-5 justify-between ">
                            <Card className="w-full z-10">
                                <SectionTitle title="hello world!"/>

                                <div className="mt-7">
                                    <TextContainer>
                                        <AboutText />
                                    </TextContainer>
                                </div>
                            </Card>

                            <div className="w-full flex flex-col items-start justify-end">
                                <h1 className='text-slate-100 capitalize custom-cursor font-ibmsans font-bold text-6xl xl:text-9xl'>Skills</h1>
                                <div className="mt-5 flex flex-wrap gap-5">
                                    <p data-logo="html" className="hover:text-white text-4xl xl:text-7xl custom-cursor cc-logo font-ibmsans font-semibold text-slate-400">HTML</p>
                                    <p data-logo="css" className="hover:text-white text-4xl xl:text-7xl custom-cursor cc-logo font-ibmsans font-semibold text-slate-400">CSS</p>
                                    <p data-logo="js" className="hover:text-white text-4xl xl:text-7xl custom-cursor cc-logo font-ibmsans font-semibold text-slate-400">Javascript</p>
                                    <p data-logo="react" className="hover:text-white text-4xl xl:text-7xl custom-cursor cc-logo font-ibmsans font-semibold text-slate-400">ReactJS</p>
                                    <p data-logo="tw" className="hover:text-white text-4xl xl:text-7xl custom-cursor cc-logo font-ibmsans font-semibold text-slate-400">TailwindCSS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
}