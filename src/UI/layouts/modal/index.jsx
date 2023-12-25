import React from 'react'


export default function  Modal({children, isModalOpen, modalToggleHandler}){

        return(
            <>

                {/* <!-- Main modal --> */}
                <div 
                    // onClick={() => modalToggleHandler()}
                    tabIndex="-1" 
                    aria-hidden={isModalOpen ? 'false' : 'true'} 
                    className={`backdrop-blur-md bg-black/30 overflow-y-auto overflow-x-hidden fixed inset-0 justify-center items-center w-full z-[999] max-h-full grid place-items-center transition-all duration-500  ${isModalOpen ? 'opacity-100' : 'opacity-0'}`}>
                    <div className={`relative p-4 w-full max-w-2xl max-h-full`}>
                        {/* <!-- Modal content --> */}
                        <div className={`relative bg-white/30 backdrop-blur-md transition-all duration-500 rounded-xl ${isModalOpen ? 'translate-y-0' : 'translate-y-[-30%]'}`}>
                            {children}
                        </div>
                    </div>
                </div>

            </>
        )
}

