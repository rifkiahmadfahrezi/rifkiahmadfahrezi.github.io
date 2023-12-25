import { transform } from 'framer-motion'
import React, { useEffect, useRef } from 'react'


export default function Cursor(){
        const cursorRef = useRef() 
        const cursorLogoRef = useRef()
        const logoImgRef = useRef()
        
        useEffect(() => {

            // let title = document.querySelector('.title');
            // let curs = document.querySelector('.cursor');
            
            document.addEventListener('mousemove', (e) => {
                let x = e.clientX;
                let y = e.clientY;
                // hover title
                if(e.target.classList.contains('custom-cursor')){

                    if (e.target.classList.contains('cc-link')){
                        cursorRef.current.style.mixBlendMode = "multiply"
                    }else{
                        cursorRef.current.style.mixBlendMode = "difference"
                    }
                    cursorRef.current.style.transform = "scale(2.5)"
                    cursorRef.current.style.opacity = "1"
                    cursorRef.current.style.cursor = "none"
                    cursorRef.current.style.zIndex = "99999"
                    
                }else{
                    cursorRef.current.style.transform = "scale(1)"
                    cursorRef.current.style.mixBlendMode = "normal"
                    cursorRef.current.style.cursor = "auto"
                    cursorRef.current.style.zIndex = "-1"
                }
                
                
                // hover logo text
                if(e.target.classList.contains('cc-logo')){
                    const logo = e.target.dataset.logo
                    cursorRef.current.style.transform = "scale(0.5)"
                    // console.log(logoImgRef.current)
                    cursorLogoRef.current.style.backgroundImage = `url(/img/${logo}.svg)`
                    cursorLogoRef.current.style.scale = '1.6'
                    cursorLogoRef.current.style.rotate = '0'
                    cursorLogoRef.current.style.left = (x - 22) + "px";
                    cursorLogoRef.current.style.top = (y - 30) + "px";
                }else{
                    cursorLogoRef.current.style.scale = '0'
                }
                cursorRef.current.style.scale = '1'
                cursorRef.current.style.left = (x - 22) + "px";
                cursorRef.current.style.top = (y - 22) + "px";
                
            });
            
            document.addEventListener('mouseleave', (e) => {
                let x = e.pageX;
                let y = e.pageY;
                cursorRef.current.style.left = (x - 22) + "px";
                cursorRef.current.style.top = (y - 22) + "px";
            });
        })

        return(
            <>
                <div id="cursor" 
                ref={cursorRef}
                className='hidden md:block w-10 h-10 z-[-1] opacity-50 bg-cyan-300 rounded-full fixed shadow-[0_0_30px_15px] shadow-cyan-500/50 transition-all ease-linear duration-150 pointer-events-none'></div>

                <div id="cursor-logo"
                    ref={cursorLogoRef}
                    className={`w-14 h-14 z-20 translate-y-[-50%] fixed drop-shadow-[0_0px_10px_rgb(103,232,249)] bg-center bg-contain bg-no-repeat shadow-cyan-500/50 transition-all  ease-alternate duration-100 pointer-events-none`}>
                    {/* <img src="/img/html.svg" alt="" /> */}
                </div>
            </>
        )
}