import React, {useState, useEffect} from 'react'

import SectionTitle from '@/UI/elements/SectionTitle'
import WorkSectionText from '@/UI/fragments/works/WorkSectionText'
import TextContainer from '@/UI/layouts/textContainer'
import Card from '@/UI/layouts/card'
import Badge from '@/UI/elements/Badge'

import { fetchProjects } from '@/services/projects'
import { Link } from 'react-router-dom'



export default function WorkSection(){

        const [data, setData] = useState([])

        useEffect(() => {
            fetchProjects()
            .then((res) => setData(res))
        }, [])



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
                                {data?.map(item => (
                                    <Card key={item.id}>
                                       <figure className=' w-full'>
                                            <img 
                                                src={item.thumbnail} 
                                                className='object-cover w-full h-full rounded-md'
                                                alt="" />
                                       </figure>
                                       <figcaption>
                                            <h1 className='text-slate-100 text-3xl my-3 font-semibold uppercase'>{item.title}</h1>
                                            <article className='my-5'>
                                                <pre className='text-slate-100 font-ibmsans'>
                                                    {item.description}
                                                </pre>
                                            </article>

                                            <div className="flex flex-col gap-2 justify-center">
                                                <p className='text-white font-semibold flex flex-wrap gap-2'>
                                                    Role : {item.myRole.map(role => <Badge key={role} text={role}/>)}
                                                </p>
                                                <p className='text-white font-semibold flex flex-wrap gap-2'>
                                                    Tech stack :{item.techstack.map(tech => <Badge text={tech}/>)}
                                                </p>
                                            </div>

                                            <div className="mt-5">
                                            {[item.links].map(item => (
                                                <Link className='flex text-white text-md hover:underline custom-cursor' target='_blank' to={item.link}>
                                                    {item.title}
                                                    <span className=''>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                                        </svg>
                                                    </span>
                                                </Link>
                                            ))}
                                            </div>

                                       </figcaption>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
}