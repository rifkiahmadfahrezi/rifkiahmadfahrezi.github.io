import React from 'react'
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

import SectionTitle from '@/UI/elements/SectionTitle'
import WorkSectionText from '@/UI/fragments/works/WorkSectionText'
// import Card from '@/UI/layouts/card'
import TextContainer from '@/UI/layouts/textContainer'
import Tabs from '@/UI/layouts/tabs'





export default function WorkSection(){


        return(
            <>
                <section data-scroll-section id="works" className='w-full py-14 min-h-screen'>
                    <div className="container mx-auto px-3">
                        <div className="w-full flex flex-col items-center justify-center ">
                            <div className="mb-9">
                                <SectionTitle title="My projects"/>
                                <div className="mt-7">
                                    <TextContainer className='w-full md:w-3/4'>
                                        <WorkSectionText />

                                    </TextContainer>
                                </div>
                            </div>
                            <div className="mt-9 w-full">  
                                <Tabs/>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
}