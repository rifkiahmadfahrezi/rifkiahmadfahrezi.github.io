import React from 'react'

import Link from '@/UI/elements/Anchor'

export default function AboutText(){
        return(
            <>
                <p>Hello!, my name is <span className='text-white font-semibold'>Rifki Ahmad Fahrezi</span>, a passionate Frontend Web Developer with a year of hands-on experience in crafting engaging and dynamic web experiences. My journey began at a vocational high school named  <Link className="custom-cursor" label="read more about smk taruna harapan 1 cipatat" href="https://smktarpan1.sch.id/">Taruna Harapan 1 Cipatat</Link>, where I honed my skills and graduated with a solid foundation in web development.
            as a beginner I can make an ideas into reality through the power of code using several technology and tools like <span className='font-semibold'>HTML, CSS, Javascript and React</span></p>

                <p>I am driven by a deep curiosity about the ever-evolving world of web technology. Whether it's creating visually appealing layouts or optimizing the user experience, I challenge myself push my skills to the next level.</p>
            </>
        )
}