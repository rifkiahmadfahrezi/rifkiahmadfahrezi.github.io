import React from 'react'


export default function ModalHeader({modalTitle, modalToggleHandler}){
        return(
            <>
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-slate-100">
                         {modalTitle}
                    </h3>
                    <button type="button" role='button' onClick={(e) => modalToggleHandler(e)} className="rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center bg-red-500" data-modal-hide="default-modal">
                        <i className='bx bx-x text-lg text-slate-100'></i>
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>
            </>
        )
}