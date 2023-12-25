import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

import Email from '@/UI/animations/Email'

export default function ContactForm(){
        const [ formValue, setFormValue ] = useState({
            name: null,
            email: null,
            message: null
        })
        const [ loadingEmail, setLoadingEmail] = useState(false)
        const [error, setError ] = useState({isError: false, message: null})
        const formRef = useRef()

        async function sendMessage(callback){
           try{
            const request = await emailjs.sendForm('service_zkuikgk', 'template_zg2t72t', formRef.current, 'PXCqW36lPmZ55oohH')
            const response = request.text
            if(response === 'OK'){
                callback(true, response)
            }else{
                throw new Error(`failed to send email: ${response}`)
            }
           }catch(error){
            callback(false, error)
           }

        }

        function sendMessageHandler(e){
            e.preventDefault()
            setLoadingEmail(true)
            sendMessage((sent, response) => {
                if(sent){
                    setLoadingEmail(false)
                    // console.log(response)
                    setError({isError: false, message: null})
                    alert('email sent')
                }else{
                    setError({isError:true, message: "failed to send message, check console for details"})
                    setLoadingEmail(false)
                    console.error(response)
                }
            })
        }

        function inputChangeHandler(e){
            const {name,value} = e.target
            setFormValue((prevState) => ({
                ...prevState,
                [name]: value
            }))
        }


        return(
            <>
            {error.isError && <div onClick={() => setError({isError:false})} className='cursor-pointer text-center bg-red-500 text-white py-2 rounded-md text-md'>{error.message}</div>    }  
            {loadingEmail ?  <div className="w-[200px] h-200px"><Email /></div> :
             
                <form ref={formRef} action="flex flex-col" onSubmit={sendMessageHandler} className='w-[calc(100vw-100px)] sm:max-w-[300px] md:max-w-[450px] xl:max-w-[600 text-blackpx]'>
                    <input type="hidden" name="to_name" value={'rifki'} />
                    <div className="flex flex-col mb-4">
                        <label className="capitalize relative after:content-['*'] after:text-red-400 text-slate-100" htmlFor="name">name:</label>
                        <input 
                            type="text" 
                            name='user_name' 
                            id='name' 
                            required
                            autoFocus
                            onChange={inputChangeHandler}
                            className='px-3 py-2 rounded-md bg-white/40 placeholder:text-slate-600 text-black' 
                            placeholder='Your name...' />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="relative after:content-['*'] after:text-red-400 text-slate-100" htmlFor="email">E-mail:</label>
                        <input 
                            type="text" 
                            name='user_email' 
                            id='email' 
                            required
                            onChange={inputChangeHandler}
                            className='px-3 py-2 rounded-md bg-white/40 placeholder:text-slate-600 text-black' 
                            placeholder='Your E-mail...' />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="capitalize relative after:content-['*'] after:text-red-400 text-slate-100" htmlFor="email">message:</label>
                        <textarea 
                            name="message" 
                            id="message" 
                            cols="30" 
                            required
                            onChange={inputChangeHandler}
                            className='px-3 py-2 rounded-md bg-white/40 placeholder:text-slate-600 text-black' 
                            placeholder='Your message...'
                            rows="10"></textarea>
                    </div>
                    <div className="flex">
                        <button 
                            role='button'
                            className='text-slate-100 bg-white/50 py-3  capitalize font-ibmsans w-full  rounded-md'
                            type='submit'>send</button>
                    </div>
                </form>
                }
            </>
        )
}